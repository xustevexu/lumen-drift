import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

// Display-space color grade: split-tone (teal shadows / warm highlights), contrast,
// saturation, vignette, subtle chromatic fringe and film grain.
const GradeShader = {
  uniforms: {
    tDiffuse: { value: null }, uTime: { value: 0 },
    uSat: { value: 1.1 }, uContrast: { value: 1.08 }, uLift: { value: 0.012 },
    uShadow: { value: new THREE.Color(0.02, 0.10, 0.16) }, uHigh: { value: new THREE.Color(1.0, 0.92, 0.82) },
    uVignette: { value: 0.38 }, uGrain: { value: 0.035 }, uChroma: { value: 0.0016 }, uDamage: { value: 0 }, uWarp: { value: 0 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uTime,uSat,uContrast,uLift,uVignette,uGrain,uChroma,uDamage,uWarp; uniform vec3 uShadow,uHigh; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
    void main(){
      vec2 c = vUv-0.5; float r2 = dot(c,c);
      vec2 uv = vUv - c*uWarp*r2*0.6;
      float ca = uChroma*(1.0+uDamage*4.0+uWarp*6.0)*(0.3+r2*3.0);
      vec3 col;
      col.r = texture2D(tDiffuse, uv + c*ca).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - c*ca).b;
      float l = dot(col, vec3(0.2126,0.7152,0.0722));
      col = mix(vec3(l), col, uSat);
      col = (col-0.5)*uContrast+0.5;
      col += uShadow*(1.0-smoothstep(0.0,0.45,l))*0.35 + uLift;
      col *= mix(vec3(1.0), uHigh, smoothstep(0.5,1.0,l)*0.35);
      float v = smoothstep(0.85, 0.2, length(c*vec2(1.15,1.0)));
      col *= mix(1.0-uVignette, 1.0, v);
      col = mix(col, col*vec3(1.25,0.55,0.45), uDamage*(1.0-v)*0.9);
      col += (h(vUv*vec2(1920.0,1080.0)+fract(uTime*7.0)*100.0)-0.5)*uGrain;
      gl_FragColor = vec4(clamp(col,0.0,1.0), 1.0);
    }`,
};

const ClampShader = {
  uniforms: { tDiffuse: { value: null }, uMax: { value: 24.0 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uMax; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      // bit-level Inf/NaN test (exponent all ones): unlike isnan(), D3D shader compilers on Windows
      // cannot optimise this away
      uvec3 e = floatBitsToUint(c.rgb) & uvec3(0x7F800000u);
      if (any(equal(e, uvec3(0x7F800000u)))) c.rgb = vec3(0.0);
      float m = max(max(c.r, c.g), c.b);
      if (m > uMax) c.rgb *= uMax / m;
      gl_FragColor = c;
    }`,
};

export class Post {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    const size = renderer.getSize(new THREE.Vector2());
    this.composer = new EffectComposer(renderer);
    this.renderPass = new RenderPass(scene, camera);
    this.composer.addPass(this.renderPass);
    // Firefly guard: cap per-pixel HDR brightness (hue preserved) and drop invalid values before bloom.
    // A single sub-pixel glint far brighter than anything else would otherwise be spread by the
    // bloom mip chain into flickering square blocks. The cap sits well above the star and engine glow
    // (scene peaks ~10), and tone mapping happens afterwards, so normal highlights are unchanged.
    this.clamp = new ShaderPass(ClampShader);
    this.composer.addPass(this.clamp);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(size.x / 2, size.y / 2), 0.7, 0.55, 0.8);
    this.composer.addPass(this.bloom);
    this.output = new OutputPass();
    this.composer.addPass(this.output);
    this.grade = new ShaderPass(GradeShader);
    this.composer.addPass(this.grade);
    this.enabled = true;
  }
  setSize(w, h, pr) {
    this.composer.setPixelRatio(pr);
    this.composer.setSize(w, h);
    this.bloom.resolution.set(w * pr * 0.5, h * pr * 0.5);
  }
  setEnabled(on) { this.enabled = on; this.bloom.enabled = on; this.grade.enabled = on; }
  render(dt, t) { this.grade.uniforms.uTime.value = t; this.composer.render(dt); }
}
