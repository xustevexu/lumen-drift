import * as THREE from 'three';

export const NOISE = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z); vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float fbm(vec3 p){ float f=0.0,a=0.5; for(int i=0;i<5;i++){ f+=a*snoise(p); p=p*2.03+vec3(1.7,9.2,3.1); a*=0.5; } return f; }
float fbm3(vec3 p){ float f=0.0,a=0.5; for(int i=0;i<3;i++){ f+=a*snoise(p); p=p*2.03+vec3(1.7,9.2,3.1); a*=0.5; } return f; }
float hash13(vec3 p){ p=fract(p*0.1031); p+=dot(p,p.zyx+31.32); return fract((p.x+p.y)*p.z); }
`;

// Shared time uniform for all animated shaders
export const globalUniforms = { uTime: { value: 0 } };

// ---------------------------------------------------------------------------
// Hull panel material: MeshStandardMaterial + procedural panel lines,
// per-panel tone variation and roughness breakup (object-space triplanar).
// ---------------------------------------------------------------------------
export function hullMaterial({ color = 0xe8ecef, metalness = 0.35, roughness = 0.38, panel = 0.55, lineDark = 0.45, envMapIntensity = 1.0 } = {}) {
  const m = new THREE.MeshStandardMaterial({ color, metalness, roughness, envMapIntensity });
  m.userData.panel = panel;
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uPanel = { value: panel };
    sh.uniforms.uLineDark = { value: lineDark };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vObjPos; varying vec3 vObjN;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvObjPos = position; vObjN = normal;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
varying vec3 vObjPos; varying vec3 vObjN; uniform float uPanel; uniform float uLineDark;
float h13(vec3 p){ p=fract(p*0.1031); p+=dot(p,p.zyx+31.32); return fract((p.x+p.y)*p.z); }
float panelLine(vec2 q, out vec2 cell){ cell=floor(q); vec2 f=abs(fract(q)-0.5); float e=0.5-max(f.x,f.y); return 1.0-smoothstep(0.0,0.035,e); }
`)
      .replace('#include <color_fragment>', `#include <color_fragment>
vec3 w = abs(normalize(vObjN)); w = pow(w, vec3(4.0)); w /= (w.x+w.y+w.z);
vec3 q = vObjPos * uPanel;
vec2 c1,c2,c3;
float lx = panelLine(q.zy*vec2(1.0,2.0), c1);
float ly = panelLine(q.xz*vec2(2.0,1.0), c2);
float lz = panelLine(q.xy*vec2(1.0,2.0), c3);
float line = lx*w.x + ly*w.y + lz*w.z;
float tone = h13(vec3(c1,1.0))*w.x + h13(vec3(c2,2.0))*w.y + h13(vec3(c3,3.0))*w.z;
diffuseColor.rgb *= (0.92 + 0.12*tone) * (1.0 - uLineDark*line);
float panelRough = tone;
`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
roughnessFactor = clamp(roughnessFactor + (panelRough-0.5)*0.22 + line*0.25, 0.14, 1.0);
`);
  };
  m.customProgramCacheKey = () => 'hull' + panel;
  return m;
}

// Emissive trim with slow pulse (shared time uniform)
export function trimMaterial(color = 0x58e6f0, intensity = 2.2) {
  const m = new THREE.MeshStandardMaterial({ color: 0x0a0f14, emissive: color, emissiveIntensity: intensity, roughness: 0.4, metalness: 0.2 });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = globalUniforms.uTime;
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;')
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance *= 0.82 + 0.18*sin(uTime*2.4 + vViewPosition.z*0.05);');
  };
  m.customProgramCacheKey = () => 'trim';
  return m;
}

// ---------------------------------------------------------------------------
// Energy barrier (shield): fresnel shell + hex lattice + impact ripples
// ---------------------------------------------------------------------------
export function shieldMaterial(color = new THREE.Color(0.35, 0.9, 1.0)) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: globalUniforms.uTime,
      uColor: { value: color },
      uStrength: { value: 0 },   // shield fraction 0..1
      uFlash: { value: 0 },      // recent damage glow
      uHitDir: { value: [new THREE.Vector3(1, 0, 0), new THREE.Vector3(1, 0, 0), new THREE.Vector3(1, 0, 0), new THREE.Vector3(1, 0, 0)] },
      uHitAge: { value: [9, 9, 9, 9] },
    },
    vertexShader: /* glsl */ `
      varying vec3 vN; varying vec3 vV; varying vec3 vLocal; varying vec2 vUv;
      void main(){
        vLocal = normalize(position); vUv = uv;
        vec4 w = modelMatrix*vec4(position,1.0);
        vN = normalize(mat3(modelMatrix)*normal);
        vV = normalize(cameraPosition - w.xyz);
        gl_Position = projectionMatrix*viewMatrix*w;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uTime, uStrength, uFlash; uniform vec3 uColor; uniform vec3 uHitDir[4]; uniform float uHitAge[4];
      varying vec3 vN; varying vec3 vV; varying vec3 vLocal; varying vec2 vUv;
      float hexEdge(vec2 p){
        p.x *= 1.1547; p.y += mod(floor(p.x),2.0)*0.5;
        p = abs(fract(p)-0.5);
        return abs(max(p.x*1.5 + p.y, p.y*2.0) - 1.0);
      }
      void main(){
        float fres = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.6);
        float hx = 1.0 - smoothstep(0.0, 0.09, hexEdge(vUv*vec2(28.0,14.0)));
        float ripple = 0.0;
        for(int i=0;i<4;i++){
          float age = uHitAge[i];
          float d = acos(clamp(dot(vLocal, uHitDir[i]),-1.0,1.0));
          float ring = smoothstep(0.22, 0.0, abs(d - age*2.4)) * max(0.0, 1.0-age*1.4);
          float core = smoothstep(0.7, 0.0, d) * max(0.0, 1.0-age*3.0);
          ripple += ring*1.2 + core*0.9;
        }
        float scan = 0.5+0.5*sin(vLocal.y*18.0 - uTime*3.0);
        float a = (pow(fres, 5.0)*0.06 + fres*0.55*uFlash)*uStrength
                + hx*(uFlash*0.35 + ripple*0.8)
                + ripple*0.55 + pow(fres,3.0)*scan*0.03*uStrength;
        vec3 col = uColor*(1.4 + ripple*2.0) + vec3(1.0)*ripple*0.6;
        gl_FragColor = vec4(col*a, a);
      }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.FrontSide,
  });
}

// ---------------------------------------------------------------------------
// Planet surface (procedural terrain/gas bands/ocean + clouds + terminator)
// ---------------------------------------------------------------------------
export function planetMaterial(p) {
  const typeId = p.type === 'gas' ? 1 : p.type === 'ocean' ? 2 : 0;
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: globalUniforms.uTime,
      uSun: { value: new THREE.Vector3() },
      uA: { value: new THREE.Color(...p.pal[0]) }, uB: { value: new THREE.Color(...p.pal[1]) }, uC: { value: new THREE.Color(...p.pal[2]) },
      uAtmo: { value: new THREE.Color(...p.atmo) },
      uSeed: { value: p.seed }, uType: { value: typeId }, uCloud: { value: p.cloud }, uIce: { value: p.type === 'ice' ? 0.0 : 1.0 },
      uSunCol: { value: new THREE.Color(1, 0.95, 0.88) },
    },
    vertexShader: /* glsl */ `
      varying vec3 vN; varying vec3 vObj; varying vec3 vW;
      void main(){ vObj = normalize(position); vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*w; }`,
    fragmentShader: NOISE + /* glsl */ `
      uniform float uTime, uSeed, uType, uCloud, uIce; uniform vec3 uSun, uA, uB, uC, uAtmo, uSunCol;
      varying vec3 vN; varying vec3 vObj; varying vec3 vW;
      void main(){
        vec3 p = vObj*2.2 + uSeed;
        vec3 col; float spec = 0.0;
        if (uType < 0.5) {
          float h = fbm(p*1.3);
          float d = fbm(p*6.0)*0.25;
          col = mix(uA, uB, smoothstep(-0.35, 0.25, h+d));
          col = mix(col, uC, smoothstep(0.25, 0.65, h+d*0.6));
          float crater = smoothstep(0.55, 0.6, snoise(p*5.0)) * 0.25;
          col *= 1.0 - crater;
          float pole = smoothstep(0.78, 0.9, abs(vObj.y) + h*0.12);
          col = mix(col, vec3(0.93,0.95,0.98), pole*uIce);
        } else if (uType < 1.5) {
          float t = uTime*0.004;
          float warp = fbm(vec3(p.x*0.6+t, p.y*5.0, p.z*0.6));
          float lat = vObj.y*7.0 + warp*1.6;
          col = mix(uA, uB, 0.5+0.5*sin(lat*2.3));
          col = mix(col, uC, smoothstep(0.1, 0.9, 0.5+0.5*sin(lat*5.1+1.3))*0.55);
          float storm = smoothstep(0.82, 0.95, 1.0 - length((vObj - normalize(vec3(0.6,-0.25,0.75)))*vec3(1.0,2.2,1.0)));
          col = mix(col, uC*1.1, storm);
        } else {
          float h = fbm(p*1.6);
          if (h > 0.06) { col = mix(uB, uC, smoothstep(0.06, 0.55, h)); }
          else { col = mix(uA*0.55, uA, smoothstep(-0.6, 0.06, h)); spec = 1.0; }
          float pole = smoothstep(0.82, 0.92, abs(vObj.y) + h*0.1);
          col = mix(col, vec3(0.95), pole);
        }
        float c = smoothstep(0.05, 0.55, fbm(p*2.4 + vec3(uTime*0.006, 0.0, uTime*0.003))) * uCloud;
        col = mix(col, vec3(0.97), c*0.9);
        vec3 N = normalize(vN); vec3 L = normalize(uSun - vW); vec3 V = normalize(cameraPosition - vW);
        float ndl = dot(N, L);
        float diff = smoothstep(-0.12, 1.0, ndl);
        float rim = pow(1.0 - max(dot(V, N), 0.0), 3.0);
        vec3 H = normalize(L+V);
        float sp = pow(max(dot(N,H),0.0), 60.0) * spec * (1.0-c) * 0.8;
        vec3 lit = col*uSunCol*(0.025 + diff*1.15) + uSunCol*sp + uAtmo*rim*smoothstep(-0.35, 0.5, ndl)*0.9;
        // terminator warm band
        lit += uAtmo*vec3(1.0,0.55,0.35)*smoothstep(0.18,0.0,abs(ndl))*0.08;
        gl_FragColor = vec4(lit, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
}

export function atmosphereMaterial(color, sunUniform) {
  return new THREE.ShaderMaterial({
    uniforms: { uSun: sunUniform, uColor: { value: new THREE.Color(...color) } },
    vertexShader: /* glsl */ `varying vec3 vN; varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW=w.xyz; vN=normalize(mat3(modelMatrix)*normal); gl_Position=projectionMatrix*viewMatrix*w; }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uSun, uColor; varying vec3 vN; varying vec3 vW;
      void main(){
        vec3 N=normalize(vN); vec3 V=normalize(cameraPosition-vW); vec3 L=normalize(uSun-vW);
        float f = 1.0 - abs(dot(V,N));
        float glow = pow(f, 4.0)*1.4 + pow(f, 12.0)*1.2;
        float lit = smoothstep(-0.45, 0.6, dot(N,L));
        float a = glow*lit;
        gl_FragColor = vec4(uColor*a*1.6, a);
      }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.FrontSide,
  });
}

export function ringMaterial(colA, colB) {
  return new THREE.ShaderMaterial({
    uniforms: { uA: { value: new THREE.Color(...colA) }, uB: { value: new THREE.Color(...colB) } },
    vertexShader: `varying vec2 vUv; varying vec3 vP; void main(){ vUv=uv; vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: NOISE + `uniform vec3 uA,uB; varying vec2 vUv; varying vec3 vP;
      void main(){ float r = length(vP.xy); float t = fract(r*0.004);
        float bands = 0.5+0.5*sin(r*0.09)+0.3*sin(r*0.31);
        float n = snoise(vec3(r*0.02,0.0,0.0));
        float a = smoothstep(0.0,0.15,vUv.x)*smoothstep(1.0,0.85,vUv.x)*(0.25+0.35*bands+0.2*n);
        gl_FragColor = vec4(mix(uA,uB,bands)*0.8, clamp(a,0.0,0.75)); }`,
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
  });
}

// ---------------------------------------------------------------------------
// Star surface (animated granulation, HDR for bloom)
// ---------------------------------------------------------------------------
export function starMaterial(color, glow) {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: globalUniforms.uTime, uCol: { value: new THREE.Color(...color) }, uGlow: { value: new THREE.Color(...glow) } },
    vertexShader: `varying vec3 vObj; varying vec3 vN; varying vec3 vW; void main(){ vObj=normalize(position); vec4 w=modelMatrix*vec4(position,1.0); vW=w.xyz; vN=normalize(mat3(modelMatrix)*normal); gl_Position=projectionMatrix*viewMatrix*w; }`,
    fragmentShader: NOISE + `uniform float uTime; uniform vec3 uCol,uGlow; varying vec3 vObj; varying vec3 vN; varying vec3 vW;
      void main(){ float t=uTime*0.05;
        float g = fbm(vObj*6.0 + vec3(t,t*0.7,-t));
        float g2 = fbm3(vObj*18.0 - vec3(t*2.0));
        float f = 1.0-abs(dot(normalize(vN), normalize(cameraPosition-vW)));
        vec3 c = mix(uGlow, uCol, 0.55+0.45*g) * (2.4 + 0.8*g2) + uCol*pow(f,2.0)*1.5;
        gl_FragColor = vec4(c, 1.0); }`,
  });
}

// ---------------------------------------------------------------------------
// Nebula skybox (fbm clouds, galactic band, hashed star field)
// ---------------------------------------------------------------------------
export function skyMaterial(nebA, nebB, seed = 0) {
  return new THREE.ShaderMaterial({
    uniforms: { uA: { value: new THREE.Color(...nebA) }, uB: { value: new THREE.Color(...nebB) }, uSeed: { value: seed }, uIntensity: { value: 1.0 } },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position = p.xyww; }`,
    fragmentShader: NOISE + `uniform vec3 uA,uB; uniform float uSeed, uIntensity; varying vec3 vDir;
      float stars(vec3 d, float scale, float thr){ vec3 c = floor(d*scale); float h = hash13(c+uSeed); vec3 f = fract(d*scale)-0.5; float s = smoothstep(0.08,0.0,length(f)); return step(thr,h)*s*(h-thr)/(1.0-thr); }
      void main(){
        vec3 d = normalize(vDir);
        vec3 bandN = normalize(vec3(0.25, 1.0, 0.35));
        float band = exp(-pow(dot(d, bandN)*3.2, 2.0));
        float n1 = fbm(d*2.2 + uSeed);
        float n2 = fbm(d*5.0 - uSeed*0.5);
        float neb = smoothstep(-0.15, 0.7, n1 + 0.35*band) ;
        float wisps = smoothstep(0.0, 0.6, n2) * neb;
        vec3 col = mix(uA, uB, smoothstep(-0.3, 0.6, n2)) * (neb*0.55 + wisps*0.6) ;
        col += vec3(0.55,0.6,0.75)*band*0.06*(0.6+0.4*n2);
        // dark dust lanes
        col *= 1.0 - smoothstep(0.25, 0.6, fbm3(d*7.0+3.0))*band*0.5;
        float st = stars(d, 180.0, 0.985)*1.6 + stars(d, 380.0, 0.975)*0.8 + stars(d, 90.0, 0.994)*3.0;
        col += vec3(0.9,0.95,1.0)*st*(0.7+0.6*band);
        gl_FragColor = vec4(col*uIntensity, 1.0);
      }`,
    side: THREE.BackSide, depthWrite: false, depthTest: true,
  });
}

// ---------------------------------------------------------------------------
// Beam (crossed planes, uv.y across width)
// ---------------------------------------------------------------------------
export function beamMaterial(color) {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: globalUniforms.uTime, uColor: { value: new THREE.Color(color) }, uIntensity: { value: 1 }, uLen: { value: 100 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `uniform float uTime,uIntensity,uLen; uniform vec3 uColor; varying vec2 vUv;
      void main(){ float x = abs(vUv.y*2.0-1.0);
        float core = smoothstep(0.25,0.0,x); float glow = pow(1.0-x, 3.0);
        float pulse = 0.75+0.25*sin(vUv.x*uLen*0.25 - uTime*40.0);
        float ends = smoothstep(0.0,0.02,vUv.x)*smoothstep(1.0,0.97,vUv.x);
        vec3 c = (uColor*glow*1.8*pulse + vec3(1.0)*core*2.2)*uIntensity*ends;
        gl_FragColor = vec4(c, 1.0); }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
  });
}

// Gate portal swirl
export function portalMaterial(color = [0.6, 0.45, 1.0]) {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: globalUniforms.uTime, uColor: { value: new THREE.Color(...color) }, uActive: { value: 0.5 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: NOISE + `uniform float uTime, uActive; uniform vec3 uColor; varying vec2 vUv;
      void main(){ vec2 p = vUv*2.0-1.0; float r = length(p); float a = atan(p.y,p.x);
        float sw = fbm3(vec3(cos(a*3.0+r*6.0-uTime*0.8)*1.2, sin(a*3.0+r*6.0-uTime*0.8)*1.2, r*3.0-uTime*0.3));
        float m = smoothstep(1.0,0.82,r);
        float i = (0.35+0.65*smoothstep(-0.2,0.6,sw))*m*(0.35+0.65*uActive);
        vec3 c = mix(uColor, vec3(0.8,0.95,1.0), smoothstep(0.3,0.0,r))*i*1.6;
        gl_FragColor = vec4(c, i*0.85); }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
  });
}

// Engine exhaust cone
export function exhaustMaterial(color = 0x6fe8ff) {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: globalUniforms.uTime, uColor: { value: new THREE.Color(color) }, uPower: { value: 0.5 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: NOISE + `uniform float uTime,uPower; uniform vec3 uColor; varying vec2 vUv;
      void main(){ float along = vUv.y; float n = snoise(vec3(vUv.x*6.0, along*4.0 - uTime*12.0, 0.0));
        float a = pow(along, 1.6) * (0.75+0.25*n) * uPower;
        vec3 c = mix(uColor, vec3(1.0), pow(along,6.0))*a*2.4;
        gl_FragColor = vec4(c, a); }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
  });
}

// Asteroid rock: standard material + ore veins (object-space noise) tinted per-instance
export function rockMaterial() {
  const m = new THREE.MeshStandardMaterial({ color: 0x8a8580, roughness: 0.92, metalness: 0.05, flatShading: false, envMapIntensity: 0.4 });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = globalUniforms.uTime;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec3 aOre; attribute float aDepl; varying vec3 vOre; varying vec3 vRP; varying float vDepl;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvOre = aOre; vRP = position; vDepl = aDepl;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uTime; varying vec3 vOre; varying vec3 vRP; varying float vDepl;\n' + NOISE)
      .replace('#include <color_fragment>', `#include <color_fragment>
float rn = fbm3(vRP*2.2);
float strata = 0.5+0.5*sin(vRP.y*7.0 + rn*4.0);
diffuseColor.rgb *= 0.72 + 0.28*strata + 0.25*rn;
float vn = abs(snoise(vRP*2.4 + 7.0));
float vein = 1.0 - smoothstep(0.0, 0.07, vn);
vein *= smoothstep(-0.2, 0.3, rn) * (1.0 - vDepl);
diffuseColor.rgb = mix(diffuseColor.rgb, vOre*0.8, vein*0.75);
`)
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += vOre * vein * (0.9 + 0.35*sin(uTime*2.0 + vRP.x*3.0));');
  };
  m.customProgramCacheKey = () => 'rock';
  return m;
}

// Soft radial sprite texture (canvas-generated)
let _softTex = null;
export function softTexture() {
  if (_softTex) return _softTex;
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.25, 'rgba(255,255,255,0.55)'); gr.addColorStop(0.6, 'rgba(255,255,255,0.12)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  _softTex = new THREE.CanvasTexture(c); _softTex.colorSpace = THREE.SRGBColorSpace;
  return _softTex;
}
let _rayTex = null;
export function rayTexture() {
  if (_rayTex) return _rayTex;
  const c = document.createElement('canvas'); c.width = c.height = 512;
  const g = c.getContext('2d'); g.translate(256, 256);
  for (let i = 0; i < 26; i++) {
    g.rotate((Math.PI * 2) / 26 + Math.sin(i * 7.1) * 0.08);
    const len = 140 + 110 * Math.abs(Math.sin(i * 3.7));
    const w = 6 + 10 * Math.abs(Math.cos(i * 2.3));
    const gr = g.createLinearGradient(0, 0, len, 0);
    gr.addColorStop(0, 'rgba(255,255,255,0.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.beginPath(); g.moveTo(0, -w); g.lineTo(len, 0); g.lineTo(0, w); g.fill();
  }
  _rayTex = new THREE.CanvasTexture(c); _rayTex.colorSpace = THREE.SRGBColorSpace;
  return _rayTex;
}
