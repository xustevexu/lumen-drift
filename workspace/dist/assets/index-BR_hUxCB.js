(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jl="170",Jd=0,Oc=1,Qd=2,Iu=1,ef=2,Qn=3,Un=0,Qt=1,Bt=2,ii=0,gs=1,mt=2,Fc=3,kc=4,tf=5,Ui=100,nf=101,sf=102,rf=103,af=104,of=200,lf=201,cf=202,hf=203,Jo=204,Qo=205,uf=206,df=207,ff=208,pf=209,mf=210,gf=211,vf=212,yf=213,xf=214,el=0,tl=1,nl=2,bs=3,il=4,sl=5,rl=6,al=7,Du=0,_f=1,Mf=2,bi=0,Nu=1,Uu=2,Ou=3,Ql=4,bf=5,Fu=6,ku=7,Bc="attached",Sf="detached",Bu=300,Ss=301,Ts=302,ol=303,ll=304,ka=306,ws=1e3,xi=1001,Aa=1002,en=1003,zu=1004,ar=1005,dn=1006,xa=1007,ti=1008,ai=1009,Hu=1010,Vu=1011,yr=1012,ec=1013,Bi=1014,Ln=1015,si=1016,tc=1017,nc=1018,Es=1020,Gu=35902,Wu=1021,$u=1022,bn=1023,Xu=1024,qu=1025,vs=1026,As=1027,ic=1028,sc=1029,ju=1030,rc=1031,ac=1033,_a=33776,Ma=33777,ba=33778,Sa=33779,cl=35840,hl=35841,ul=35842,dl=35843,fl=36196,pl=37492,ml=37496,gl=37808,vl=37809,yl=37810,xl=37811,_l=37812,Ml=37813,bl=37814,Sl=37815,Tl=37816,wl=37817,El=37818,Al=37819,Rl=37820,Cl=37821,Ta=36492,Pl=36494,Ll=36495,Yu=36283,Il=36284,Dl=36285,Nl=36286,xr=2300,_r=2301,Ka=2302,zc=2400,Hc=2401,Vc=2402,Tf=2500,wf=0,Ku=1,Ul=2,Ef=3200,Af=3201,Zu=0,Rf=1,yi="",Tt="srgb",Xt="srgb-linear",Ba="linear",ct="srgb",$i=7680,Gc=519,Cf=512,Pf=513,Lf=514,Ju=515,If=516,Df=517,Nf=518,Uf=519,Ol=35044,Ur=35048,Wc="300 es",ni=2e3,Ra=2001;class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $c=1234567;const hr=Math.PI/180,Rs=180/Math.PI;function Sn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[s&255]+Vt[s>>8&255]+Vt[s>>16&255]+Vt[s>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function Lt(s,e,t){return Math.max(e,Math.min(t,s))}function oc(s,e){return(s%e+e)%e}function Of(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ff(s,e,t){return s!==e?(t-s)/(e-s):0}function ur(s,e,t){return(1-t)*s+t*e}function kf(s,e,t,n){return ur(s,e,1-Math.exp(-t*n))}function Bf(s,e=1){return e-Math.abs(oc(s,e*2)-e)}function zf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Hf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Vf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Gf(s,e){return s+Math.random()*(e-s)}function Wf(s){return s*(.5-Math.random())}function $f(s){s!==void 0&&($c=s);let e=$c+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xf(s){return s*hr}function qf(s){return s*Rs}function jf(s){return(s&s-1)===0&&s!==0}function Yf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Kf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zf(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Jf={DEG2RAD:hr,RAD2DEG:Rs,generateUUID:Sn,clamp:Lt,euclideanModulo:oc,mapLinear:Of,inverseLerp:Ff,lerp:ur,damp:kf,pingpong:Bf,smoothstep:zf,smootherstep:Hf,randInt:Vf,randFloat:Gf,randFloatSpread:Wf,seededRandom:$f,degToRad:Xf,radToDeg:qf,isPowerOfTwo:jf,ceilPowerOfTwo:Yf,floorPowerOfTwo:Kf,setQuaternionFromProperEuler:Zf,normalize:ht,denormalize:Pn};class Q{constructor(e=0,t=0){Q.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,i,r,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],y=i[1],x=i[4],_=i[7],A=i[2],w=i[5],C=i[8];return r[0]=a*v+o*y+l*A,r[3]=a*g+o*x+l*w,r[6]=a*p+o*_+l*C,r[1]=c*v+h*y+u*A,r[4]=c*g+h*x+u*w,r[7]=c*p+h*_+u*C,r[2]=d*v+f*y+m*A,r[5]=d*g+f*x+m*w,r[8]=d*p+f*_+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Za.makeScale(e,t)),this}rotate(e){return this.premultiply(Za.makeRotation(-e)),this}translate(e,t){return this.premultiply(Za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new Ge;function Qu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qf(){const s=Mr("canvas");return s.style.display="block",s}const Xc={};function or(s){s in Xc||(Xc[s]=!0,console.warn(s))}function ep(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function tp(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function np(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ye={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ct&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?Ba:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ri(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const qc=[.64,.33,.3,.6,.15,.06],jc=[.2126,.7152,.0722],Yc=[.3127,.329],Kc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[Xt]:{primaries:qc,whitePoint:Yc,transfer:Ba,toXYZ:Kc,fromXYZ:Zc,luminanceCoefficients:jc,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:qc,whitePoint:Yc,transfer:ct,toXYZ:Kc,fromXYZ:Zc,luminanceCoefficients:jc,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}});let Xi;class ip{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xi===void 0&&(Xi=Mr("canvas")),Xi.width=e.width,Xi.height=e.height;const n=Xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sp=0;class ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Sn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ja(i[a].image)):r.push(Ja(i[a]))}else r=Ja(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ja(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ip.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rp=0;class It extends Os{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=xi,i=xi,r=dn,a=ti,o=bn,l=ai,c=It.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Sn(),this.name="",this.source=new ed(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ws:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ws:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Bu;It.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,i=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,_=(f+1)/2,A=(p+1)/2,w=(h+d)/4,C=(u+v)/4,P=(m+g)/4;return x>_&&x>A?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=C/n):_>A?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=w/i,r=P/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=C/r,i=P/r),this.set(n,i,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ap extends Os{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ed(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends ap{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class td extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class op extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],m=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==m){let g=1-o;const p=l*d+c*f+h*m+u*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),w=Math.atan2(A,p*y);g=Math.sin(g*w)/A,o=Math.sin(o*w)/A}const _=o*y;if(l=l*g+d*_,c=c*g+f*_,h=h*g+m*_,u=u*g+v*_,g===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qa.copy(this).projectOnVector(e),this.sub(Qa)}reflect(e){return this.sub(Qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new E,Jc=new Tn;class fn{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)),Or.applyMatrix4(e.matrixWorld),this.union(Or)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),Fr.subVectors(this.max,Ws),qi.subVectors(e.a,Ws),ji.subVectors(e.b,Ws),Yi.subVectors(e.c,Ws),ui.subVectors(ji,qi),di.subVectors(Yi,ji),Ti.subVectors(qi,Yi);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ti.z,Ti.y,ui.z,0,-ui.x,di.z,0,-di.x,Ti.z,0,-Ti.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ti.y,Ti.x,0];return!eo(t,qi,ji,Yi,Fr)||(t=[1,0,0,0,1,0,0,0,1],!eo(t,qi,ji,Yi,Fr))?!1:(kr.crossVectors(ui,di),t=[kr.x,kr.y,kr.z],eo(t,qi,ji,Yi,Fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new E,new E,new E,new E,new E,new E,new E,new E],An=new E,Or=new fn,qi=new E,ji=new E,Yi=new E,ui=new E,di=new E,Ti=new E,Ws=new E,Fr=new E,kr=new E,wi=new E;function eo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){wi.fromArray(s,r);const o=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const lp=new fn,$s=new E,to=new E;class Hn{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const t=$s.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($s,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(to)),this.expandByPoint($s.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new E,no=new E,Br=new E,fi=new E,io=new E,zr=new E,so=new E;class za{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){no.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(no);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=fi.dot(this.direction),l=-fi.dot(Br),c=fi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(no).addScaledVector(Br,d),f}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),i=jn.dot(jn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,i,r){io.subVectors(t,e),zr.subVectors(n,e),so.crossVectors(io,zr);let a=this.direction.dot(so),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);const l=o*this.direction.dot(zr.crossVectors(fi,zr));if(l<0)return null;const c=o*this.direction.dot(io.cross(fi));if(c<0||l+c>a)return null;const h=-o*fi.dot(so);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,m,v,g){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,m,v,g)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ki.setFromMatrixColumn(e,0).length(),r=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d+v*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cp,e,hp)}lookAt(e,t,n){const i=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),pi.crossVectors(n,on),pi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),pi.crossVectors(n,on)),pi.normalize(),Hr.crossVectors(on,pi),i[0]=pi.x,i[4]=Hr.x,i[8]=on.x,i[1]=pi.y,i[5]=Hr.y,i[9]=on.y,i[2]=pi.z,i[6]=Hr.z,i[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],y=n[3],x=n[7],_=n[11],A=n[15],w=i[0],C=i[4],P=i[8],S=i[12],M=i[1],I=i[5],B=i[9],N=i[13],F=i[2],G=i[6],z=i[10],Y=i[14],W=i[3],le=i[7],me=i[11],xe=i[15];return r[0]=a*w+o*M+l*F+c*W,r[4]=a*C+o*I+l*G+c*le,r[8]=a*P+o*B+l*z+c*me,r[12]=a*S+o*N+l*Y+c*xe,r[1]=h*w+u*M+d*F+f*W,r[5]=h*C+u*I+d*G+f*le,r[9]=h*P+u*B+d*z+f*me,r[13]=h*S+u*N+d*Y+f*xe,r[2]=m*w+v*M+g*F+p*W,r[6]=m*C+v*I+g*G+p*le,r[10]=m*P+v*B+g*z+p*me,r[14]=m*S+v*N+g*Y+p*xe,r[3]=y*w+x*M+_*F+A*W,r[7]=y*C+x*I+_*G+A*le,r[11]=y*P+x*B+_*z+A*me,r[15]=y*S+x*N+_*Y+A*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+v*(+t*l*f-t*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+g*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],y=u*g*c-v*d*c+v*l*f-o*g*f-u*l*p+o*d*p,x=m*d*c-h*g*c-m*l*f+a*g*f+h*l*p-a*d*p,_=h*v*c-m*u*c+m*o*f-a*v*f-h*o*p+a*u*p,A=m*u*l-h*v*l-m*o*d+a*v*d+h*o*g-a*u*g,w=t*y+n*x+i*_+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=y*C,e[1]=(v*d*r-u*g*r-v*i*f+n*g*f+u*i*p-n*d*p)*C,e[2]=(o*g*r-v*l*r+v*i*c-n*g*c-o*i*p+n*l*p)*C,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*C,e[4]=x*C,e[5]=(h*g*r-m*d*r+m*i*f-t*g*f-h*i*p+t*d*p)*C,e[6]=(m*l*r-a*g*r-m*i*c+t*g*c+a*i*p-t*l*p)*C,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*f+t*l*f)*C,e[8]=_*C,e[9]=(m*u*r-h*v*r-m*n*f+t*v*f+h*n*p-t*u*p)*C,e[10]=(a*v*r-m*o*r+m*n*c-t*v*c-a*n*p+t*o*p)*C,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*C,e[12]=A*C,e[13]=(h*v*i-m*u*i+m*n*d-t*v*d-h*n*g+t*u*g)*C,e[14]=(m*o*i-a*v*i-m*n*l+t*v*l+a*n*g-t*o*g)*C,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,v=a*h,g=a*u,p=o*u,y=l*c,x=l*h,_=l*u,A=n.x,w=n.y,C=n.z;return i[0]=(1-(v+p))*A,i[1]=(f+_)*A,i[2]=(m-x)*A,i[3]=0,i[4]=(f-_)*w,i[5]=(1-(d+p))*w,i[6]=(g+y)*w,i[7]=0,i[8]=(m+x)*C,i[9]=(g-y)*C,i[10]=(1-(d+v))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ki.set(i[0],i[1],i[2]).length();const a=Ki.set(i[4],i[5],i[6]).length(),o=Ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Rn.copy(this);const c=1/r,h=1/a,u=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,t.setFromRotationMatrix(Rn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=ni){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(o===ni)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ra)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ni){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*c,f=(n+i)*h;let m,v;if(o===ni)m=(a+r)*u,v=-2*u;else if(o===Ra)m=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new E,Rn=new ze,cp=new E(0,0,0),hp=new E(1,1,1),pi=new E,Hr=new E,on=new E,Qc=new ze,eh=new Tn;class $t{constructor(e=0,t=0,n=0,i=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eh.setFromEuler(this),this.setFromQuaternion(eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let up=0;const th=new E,Zi=new Tn,Yn=new ze,Vr=new E,Xs=new E,dp=new E,fp=new Tn,nh=new E(1,0,0),ih=new E(0,1,0),sh=new E(0,0,1),rh={type:"added"},pp={type:"removed"},Ji={type:"childadded",child:null},ro={type:"childremoved",child:null};class _t extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new E,t=new $t,n=new Tn,i=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ge}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(nh,e)}rotateY(e){return this.rotateOnAxis(ih,e)}rotateZ(e){return this.rotateOnAxis(sh,e)}translateOnAxis(e,t){return th.copy(e).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nh,e)}translateY(e){return this.translateOnAxis(ih,e)}translateZ(e){return this.translateOnAxis(sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vr.copy(e):Vr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Xs,Vr,this.up):Yn.lookAt(Vr,Xs,this.up),this.quaternion.setFromRotationMatrix(Yn),i&&(Yn.extractRotation(i.matrixWorld),Zi.setFromRotationMatrix(Yn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rh),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pp),ro.child=e,this.dispatchEvent(ro),ro.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rh),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,dp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,fp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new E(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new E,Kn=new E,ao=new E,Zn=new E,Qi=new E,es=new E,ah=new E,oo=new E,lo=new E,co=new E,ho=new st,uo=new st,fo=new st;class _n{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Cn.subVectors(e,t),i.cross(Cn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Cn.subVectors(i,t),Kn.subVectors(n,t),ao.subVectors(e,t);const a=Cn.dot(Cn),o=Cn.dot(Kn),l=Cn.dot(ao),c=Kn.dot(Kn),h=Kn.dot(ao),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return ho.setScalar(0),uo.setScalar(0),fo.setScalar(0),ho.fromBufferAttribute(e,t),uo.fromBufferAttribute(e,n),fo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ho,r.x),a.addScaledVector(uo,r.y),a.addScaledVector(fo,r.z),a}static isFrontFacing(e,t,n,i){return Cn.subVectors(n,t),Kn.subVectors(e,t),Cn.cross(Kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Cn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return _n.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Qi.subVectors(i,n),es.subVectors(r,n),oo.subVectors(e,n);const l=Qi.dot(oo),c=es.dot(oo);if(l<=0&&c<=0)return t.copy(n);lo.subVectors(e,i);const h=Qi.dot(lo),u=es.dot(lo);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Qi,a);co.subVectors(e,r);const f=Qi.dot(co),m=es.dot(co);if(m>=0&&f<=m)return t.copy(r);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(es,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return ah.subVectors(r,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(ah,o);const p=1/(g+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Qi,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function po(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=oc(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=po(a,r,e+1/3),this.g=po(a,r,e),this.b=po(a,r,e-1/3)}return Ye.toWorkingColorSpace(this,i),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=id[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Ye.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Lt(Gt.r*255,0,255))*65536+Math.round(Lt(Gt.g*255,0,255))*256+Math.round(Lt(Gt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Gt.copy(this),t);const n=Gt.r,i=Gt.g,r=Gt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Tt){Ye.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,i=Gt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(Gr);const n=ur(mi.h,Gr.h,t),i=ur(mi.s,Gr.s,t),r=ur(mi.l,Gr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new ne;ne.NAMES=id;let mp=0;class Nn extends Os{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Sn(),this.name="",this.blending=gs,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Qo,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Qo&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sn extends Nn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=Du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new E,Wr=new Q;class xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ol,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wr.fromBufferAttribute(this,t),Wr.applyMatrix3(e),this.setXY(t,Wr.x,Wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ol&&(e.usage=this.usage),e}}class sd extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rd extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gp=0;const gn=new ze,mo=new _t,ts=new E,ln=new fn,qs=new fn,Ut=new E;class bt extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qu(e)?rd:sd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return mo.lookAt(e),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new et(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(ln.min,qs.min),ln.expandByPoint(Ut),Ut.addVectors(ln.max,qs.max),ln.expandByPoint(Ut)):(ln.expandByPoint(qs.min),ln.expandByPoint(qs.max))}ln.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ut.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(e,c),Ut.add(ts)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new E,l[P]=new E;const c=new E,h=new E,u=new E,d=new Q,f=new Q,m=new Q,v=new E,g=new E;function p(P,S,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),o[P].add(v),o[S].add(v),o[M].add(v),l[P].add(g),l[S].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,S=y.length;P<S;++P){const M=y[P],I=M.start,B=M.count;for(let N=I,F=I+B;N<F;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new E,_=new E,A=new E,w=new E;function C(P){A.fromBufferAttribute(i,P),w.copy(A);const S=o[P];x.copy(S),x.sub(A.multiplyScalar(A.dot(S))).normalize(),_.crossVectors(w,S);const I=_.dot(l[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,I)}for(let P=0,S=y.length;P<S;++P){const M=y[P],I=M.start,B=M.count;for(let N=I,F=I+B;N<F;N+=3)C(e.getX(N+0)),C(e.getX(N+1)),C(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,r=new E,a=new E,o=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new xt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oh=new ze,Ei=new za,$r=new Hn,lh=new E,Xr=new E,qr=new E,jr=new E,go=new E,Yr=new E,ch=new E,Kr=new E;class dt extends _t{constructor(e=new bt,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(go.fromBufferAttribute(u,e),a?Yr.addScaledVector(go,h):Yr.addScaledVector(go.sub(t),h))}t.add(Yr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!($r.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere($r,lh)===null||Ei.origin.distanceToSquared(lh)>(e.far-e.near)**2))&&(oh.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(oh),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,A=x;_<A;_+=3){const w=o.getX(_),C=o.getX(_+1),P=o.getX(_+2);i=Zr(this,p,e,n,c,h,u,w,C,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const y=o.getX(g),x=o.getX(g+1),_=o.getX(g+2);i=Zr(this,a,e,n,c,h,u,y,x,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,A=x;_<A;_+=3){const w=_,C=_+1,P=_+2;i=Zr(this,p,e,n,c,h,u,w,C,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const y=g,x=g+1,_=g+2;i=Zr(this,a,e,n,c,h,u,y,x,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function vp(s,e,t,n,i,r,a,o){let l;if(e.side===Qt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Un,o),l===null)return null;Kr.copy(o),Kr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Kr);return c<t.near||c>t.far?null:{distance:c,point:Kr.clone(),object:s}}function Zr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Xr),s.getVertexPosition(l,qr),s.getVertexPosition(c,jr);const h=vp(s,e,t,n,Xr,qr,jr,ch);if(h){const u=new E;_n.getBarycoord(ch,Xr,qr,jr,u),i&&(h.uv=_n.getInterpolatedAttribute(i,o,l,c,u,new Q)),r&&(h.uv1=_n.getInterpolatedAttribute(r,o,l,c,u,new Q)),a&&(h.normal=_n.getInterpolatedAttribute(a,o,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new E,materialIndex:0};_n.getNormal(Xr,qr,jr,d.normal),h.face=d,h.barycoord=u}return h}class Hi extends bt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function m(v,g,p,y,x,_,A,w,C,P,S){const M=_/C,I=A/P,B=_/2,N=A/2,F=w/2,G=C+1,z=P+1;let Y=0,W=0;const le=new E;for(let me=0;me<z;me++){const xe=me*I-N;for(let De=0;De<G;De++){const rt=De*M-B;le[v]=rt*y,le[g]=xe*x,le[p]=F,c.push(le.x,le.y,le.z),le[v]=0,le[g]=0,le[p]=w>0?1:-1,h.push(le.x,le.y,le.z),u.push(De/C),u.push(1-me/P),Y+=1}}for(let me=0;me<P;me++)for(let xe=0;xe<C;xe++){const De=d+xe+G*me,rt=d+xe+G*(me+1),K=d+(xe+1)+G*(me+1),ae=d+(xe+1)+G*me;l.push(De,rt,ae),l.push(rt,K,ae),W+=6}o.addGroup(f,W,S),f+=W,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(s){const e={};for(let t=0;t<s.length;t++){const n=Cs(s[t]);for(const i in n)e[i]=n[i]}return e}function yp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ad(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const br={clone:Cs,merge:jt};var xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gt extends Nn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=_p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=yp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class od extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new E,hh=new Q,uh=new Q;class Yt extends od{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,hh,uh),t.subVectors(uh,hh)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class Mp extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yt(ns,is,e,t);i.layers=this.layers,this.add(i);const r=new Yt(ns,is,e,t);r.layers=this.layers,this.add(r);const a=new Yt(ns,is,e,t);a.layers=this.layers,this.add(a);const o=new Yt(ns,is,e,t);o.layers=this.layers,this.add(o);const l=new Yt(ns,is,e,t);l.layers=this.layers,this.add(l);const c=new Yt(ns,is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ld extends It{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ss,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bp extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ld(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Hi(5,5,5),r=new gt({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:ii});r.uniforms.tEquirect.value=t;const a=new dt(i,r),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=dn),new Mp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const vo=new E,Sp=new E,Tp=new Ge;class Di{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=vo.subVectors(n,t).cross(Sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tp.getNormalMatrix(e),i=this.coplanarPoint(vo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Hn,Jr=new E;class lc{constructor(e=new Di,t=new Di,n=new Di,i=new Di,r=new Di,a=new Di){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],v=i[10],g=i[11],p=i[12],y=i[13],x=i[14],_=i[15];if(n[0].setComponents(l-r,d-c,g-f,_-p).normalize(),n[1].setComponents(l+r,d+c,g+f,_+p).normalize(),n[2].setComponents(l+a,d+h,g+m,_+y).normalize(),n[3].setComponents(l-a,d-h,g-m,_-y).normalize(),n[4].setComponents(l-o,d-u,g-v,_-x).normalize(),t===ni)n[5].setComponents(l+o,d+u,g+v,_+x).normalize();else if(t===Ra)n[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Jr.x=i.normal.x>0?e.max.x:e.min.x,Jr.y=i.normal.y>0?e.max.y:e.min.y,Jr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cd(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function wp(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class Fs extends bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const y=p*d-a;for(let x=0;x<c;x++){const _=x*u-r;m.push(_,-y,0),v.push(0,0,1),g.push(x/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const x=y+c*p,_=y+c*(p+1),A=y+1+c*(p+1),w=y+1+c*p;f.push(x,_,w),f.push(_,A,w)}this.setIndex(f),this.setAttribute("position",new et(m,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,am=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ym=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Um=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,t0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,c0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,h0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,f0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,I0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,D0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,N0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,W0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,X0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,q0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,K0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ig=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Ep,alphahash_pars_fragment:Ap,alphamap_fragment:Rp,alphamap_pars_fragment:Cp,alphatest_fragment:Pp,alphatest_pars_fragment:Lp,aomap_fragment:Ip,aomap_pars_fragment:Dp,batching_pars_vertex:Np,batching_vertex:Up,begin_vertex:Op,beginnormal_vertex:Fp,bsdfs:kp,iridescence_fragment:Bp,bumpmap_pars_fragment:zp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Vp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Wp,color_fragment:$p,color_pars_fragment:Xp,color_pars_vertex:qp,color_vertex:jp,common:Yp,cube_uv_reflection_fragment:Kp,defaultnormal_vertex:Zp,displacementmap_pars_vertex:Jp,displacementmap_vertex:Qp,emissivemap_fragment:em,emissivemap_pars_fragment:tm,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:sm,envmap_common_pars_fragment:rm,envmap_pars_fragment:am,envmap_pars_vertex:om,envmap_physical_pars_fragment:ym,envmap_vertex:lm,fog_vertex:cm,fog_pars_vertex:hm,fog_fragment:um,fog_pars_fragment:dm,gradientmap_pars_fragment:fm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:vm,lights_toon_fragment:xm,lights_toon_pars_fragment:_m,lights_phong_fragment:Mm,lights_phong_pars_fragment:bm,lights_physical_fragment:Sm,lights_physical_pars_fragment:Tm,lights_fragment_begin:wm,lights_fragment_maps:Em,lights_fragment_end:Am,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Lm,map_fragment:Im,map_pars_fragment:Dm,map_particle_fragment:Nm,map_particle_pars_fragment:Um,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Fm,morphinstance_vertex:km,morphcolor_vertex:Bm,morphnormal_vertex:zm,morphtarget_pars_vertex:Hm,morphtarget_vertex:Vm,normal_fragment_begin:Gm,normal_fragment_maps:Wm,normal_pars_fragment:$m,normal_pars_vertex:Xm,normal_vertex:qm,normalmap_pars_fragment:jm,clearcoat_normal_fragment_begin:Ym,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:Zm,iridescence_pars_fragment:Jm,opaque_fragment:Qm,packing:e0,premultiplied_alpha_fragment:t0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:s0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:a0,shadowmap_pars_fragment:o0,shadowmap_pars_vertex:l0,shadowmap_vertex:c0,shadowmask_pars_fragment:h0,skinbase_vertex:u0,skinning_pars_vertex:d0,skinning_vertex:f0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:v0,tonemapping_pars_fragment:y0,transmission_fragment:x0,transmission_pars_fragment:_0,uv_pars_fragment:M0,uv_pars_vertex:b0,uv_vertex:S0,worldpos_vertex:T0,background_vert:w0,background_frag:E0,backgroundCube_vert:A0,backgroundCube_frag:R0,cube_vert:C0,cube_frag:P0,depth_vert:L0,depth_frag:I0,distanceRGBA_vert:D0,distanceRGBA_frag:N0,equirect_vert:U0,equirect_frag:O0,linedashed_vert:F0,linedashed_frag:k0,meshbasic_vert:B0,meshbasic_frag:z0,meshlambert_vert:H0,meshlambert_frag:V0,meshmatcap_vert:G0,meshmatcap_frag:W0,meshnormal_vert:$0,meshnormal_frag:X0,meshphong_vert:q0,meshphong_frag:j0,meshphysical_vert:Y0,meshphysical_frag:K0,meshtoon_vert:Z0,meshtoon_frag:J0,points_vert:Q0,points_frag:eg,shadow_vert:tg,shadow_frag:ng,sprite_vert:ig,sprite_frag:sg},ue={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},kn={basic:{uniforms:jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ne(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:jt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:jt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ne(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:jt([ue.points,ue.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:jt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:jt([ue.common,ue.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:jt([ue.sprite,ue.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:jt([ue.common,ue.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:jt([ue.lights,ue.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};kn.physical={uniforms:jt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Qr={r:0,b:0,g:0},Ri=new $t,rg=new ze;function ag(s,e,t,n,i,r,a){const o=new ne(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function v(y){let x=!1;const _=m(y);_===null?p(o,l):_&&_.isColor&&(p(_,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,x){const _=m(x);_&&(_.isCubeTexture||_.mapping===ka)?(h===void 0&&(h=new dt(new Hi(1,1,1),new gt({name:"BackgroundCubeMaterial",uniforms:Cs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ri.copy(x.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(Ri)),h.material.toneMapped=Ye.getTransfer(_.colorSpace)!==ct,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new dt(new Fs(2,2),new gt({name:"BackgroundMaterial",uniforms:Cs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(_.colorSpace)!==ct,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(Qr,ad(s)),n.buffers.color.setClear(Qr.r,Qr.g,Qr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:v,addToRenderList:g}}function og(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(M,I,B,N,F){let G=!1;const z=u(N,B,I);r!==z&&(r=z,c(r.object)),G=f(M,N,B,F),G&&m(M,N,B,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,_(M,I,B,N),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,I,B){const N=B.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let G=F[I.id];G===void 0&&(G={},F[I.id]=G);let z=G[N];return z===void 0&&(z=d(l()),G[N]=z),z}function d(M){const I=[],B=[],N=[];for(let F=0;F<t;F++)I[F]=0,B[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,I,B,N){const F=r.attributes,G=I.attributes;let z=0;const Y=B.getAttributes();for(const W in Y)if(Y[W].location>=0){const me=F[W];let xe=G[W];if(xe===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),me===void 0||me.attribute!==xe||xe&&me.data!==xe.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function m(M,I,B,N){const F={},G=I.attributes;let z=0;const Y=B.getAttributes();for(const W in Y)if(Y[W].location>=0){let me=G[W];me===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(me=M.instanceColor));const xe={};xe.attribute=me,me&&me.data&&(xe.data=me.data),F[W]=xe,z++}r.attributes=F,r.attributesNum=z,r.index=N}function v(){const M=r.newAttributes;for(let I=0,B=M.length;I<B;I++)M[I]=0}function g(M){p(M,0)}function p(M,I){const B=r.newAttributes,N=r.enabledAttributes,F=r.attributeDivisors;B[M]=1,N[M]===0&&(s.enableVertexAttribArray(M),N[M]=1),F[M]!==I&&(s.vertexAttribDivisor(M,I),F[M]=I)}function y(){const M=r.newAttributes,I=r.enabledAttributes;for(let B=0,N=I.length;B<N;B++)I[B]!==M[B]&&(s.disableVertexAttribArray(B),I[B]=0)}function x(M,I,B,N,F,G,z){z===!0?s.vertexAttribIPointer(M,I,B,F,G):s.vertexAttribPointer(M,I,B,N,F,G)}function _(M,I,B,N){v();const F=N.attributes,G=B.getAttributes(),z=I.defaultAttributeValues;for(const Y in G){const W=G[Y];if(W.location>=0){let le=F[Y];if(le===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const me=le.normalized,xe=le.itemSize,De=e.get(le);if(De===void 0)continue;const rt=De.buffer,K=De.type,ae=De.bytesPerElement,we=K===s.INT||K===s.UNSIGNED_INT||le.gpuType===ec;if(le.isInterleavedBufferAttribute){const ce=le.data,Ie=ce.stride,ke=le.offset;if(ce.isInstancedInterleavedBuffer){for(let Oe=0;Oe<W.locationSize;Oe++)p(W.location+Oe,ce.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Oe=0;Oe<W.locationSize;Oe++)g(W.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let Oe=0;Oe<W.locationSize;Oe++)x(W.location+Oe,xe/W.locationSize,K,me,Ie*ae,(ke+xe/W.locationSize*Oe)*ae,we)}else{if(le.isInstancedBufferAttribute){for(let ce=0;ce<W.locationSize;ce++)p(W.location+ce,le.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ce=0;ce<W.locationSize;ce++)g(W.location+ce);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let ce=0;ce<W.locationSize;ce++)x(W.location+ce,xe/W.locationSize,K,me,xe*ae,xe/W.locationSize*ce*ae,we)}}else if(z!==void 0){const me=z[Y];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(W.location,me);break;case 3:s.vertexAttrib3fv(W.location,me);break;case 4:s.vertexAttrib4fv(W.location,me);break;default:s.vertexAttrib1fv(W.location,me)}}}}y()}function A(){P();for(const M in n){const I=n[M];for(const B in I){const N=I[B];for(const F in N)h(N[F].object),delete N[F];delete I[B]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const B in I){const N=I[B];for(const F in N)h(N[F].object),delete N[F];delete I[B]}delete n[M.id]}function C(M){for(const I in n){const B=n[I];if(B[M.id]===void 0)continue;const N=B[M.id];for(const F in N)h(N[F].object),delete N[F];delete B[M.id]}}function P(){S(),a=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function lg(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*d[v];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==bn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ai&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ln&&!P)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:A,maxSamples:w}}function hg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Di,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const y=r?0:n,x=y*4;let _=p.clippingState||null;l.value=_,_=h(m,d,x,f);for(let A=0;A!==x;++A)_[A]=t[A];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,_=f;x!==v;++x,_+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function ug(s){let e=new WeakMap;function t(a,o){return o===ol?a.mapping=Ss:o===ll&&(a.mapping=Ts),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ol||o===ll)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new bp(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ha extends od{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fs=4,dh=[.125,.215,.35,.446,.526,.582],Oi=20,yo=new Ha,fh=new ne;let xo=null,_o=0,Mo=0,bo=!1;const Ni=(1+Math.sqrt(5))/2,ss=1/Ni,ph=[new E(-Ni,ss,0),new E(Ni,ss,0),new E(-ss,0,Ni),new E(ss,0,Ni),new E(0,Ni,-ss),new E(0,Ni,ss),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class Fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){xo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xo,_o,Mo),this._renderer.xr.enabled=bo,e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:si,format:bn,colorSpace:Xt,depthBuffer:!1},i=mh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(r)),this._blurMaterial=fg(r,e,t)}return i}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,n,i){const o=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(fh),h.toneMapping=bi,h.autoClear=!1;const f=new sn({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),m=new dt(new Hi,f);let v=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(fh),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;ea(i,y*x,p>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ss||e.mapping===Ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ea(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,yo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ph[(i-r-1)%ph.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new dt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):Oi;g>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Oi}`);const p=[];let y=0;for(let C=0;C<Oi;++C){const P=C/v,S=Math.exp(-P*P/2);p.push(S),C===0?y+=S:C<g&&(y+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const _=this._sizeLods[i],A=3*_*(i>x-fs?i-x+fs:0),w=4*(this._cubeSize-_);ea(t,A,w,3*_,2*_),l.setRenderTarget(t),l.render(u,yo)}}function dg(s){const e=[],t=[],n=[];let i=s;const r=s-fs+1+dh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-fs?l=dh[a-s+fs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,g=2,p=1,y=new Float32Array(v*m*f),x=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let w=0;w<f;w++){const C=w%3*2/3-1,P=w>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];y.set(S,v*m*w),x.set(d,g*m*w);const M=[w,w,w,w,w,w];_.set(M,p*m*w)}const A=new bt;A.setAttribute("position",new xt(y,v)),A.setAttribute("uv",new xt(x,g)),A.setAttribute("faceIndex",new xt(_,p)),e.push(A),i>fs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mh(s,e,t){const n=new Dn(s,e,t);return n.texture.mapping=ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ea(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function fg(s,e,t){const n=new Float32Array(Oi),i=new E(0,1,0);return new gt({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function gh(){return new gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function vh(){return new gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ol||l===ll,h=l===Ss||l===Ts;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Fl(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Fl(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function mg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&or("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gg(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const v=f[m];for(let g=0,p=v.length;g<p;g++)e.update(v[g],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let x=0,_=y.length;x<_;x+=3){const A=y[x+0],w=y[x+1],C=y[x+2];d.push(A,w,w,C,C,A)}}else if(m!==void 0){const y=m.array;v=m.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const A=x+0,w=x+1,C=x+2;d.push(A,w,w,C,C,A)}}else return;const g=new(Qu(d)?rd:sd)(d,1);g.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function vg(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*v[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function yg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function xg(s,e,t){const n=new WeakMap,i=new st;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),v===!0&&(_=2),g===!0&&(_=3);let A=o.attributes.position.count*_,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*w*4*u),P=new td(C,A,w,u);P.type=Ln,P.needsUpdate=!0;const S=_*4;for(let I=0;I<u;I++){const B=p[I],N=y[I],F=x[I],G=A*w*4*I;for(let z=0;z<B.count;z++){const Y=z*S;m===!0&&(i.fromBufferAttribute(B,z),C[G+Y+0]=i.x,C[G+Y+1]=i.y,C[G+Y+2]=i.z,C[G+Y+3]=0),v===!0&&(i.fromBufferAttribute(N,z),C[G+Y+4]=i.x,C[G+Y+5]=i.y,C[G+Y+6]=i.z,C[G+Y+7]=0),g===!0&&(i.fromBufferAttribute(F,z),C[G+Y+8]=i.x,C[G+Y+9]=i.y,C[G+Y+10]=i.z,C[G+Y+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new Q(A,w)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function _g(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class hd extends It{constructor(e,t,n,i,r,a,o,l,c,h=vs){if(h!==vs&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vs&&(n=Bi),n===void 0&&h===As&&(n=Es),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ud=new It,yh=new hd(1,1),dd=new td,fd=new op,pd=new ld,xh=[],_h=[],Mh=new Float32Array(16),bh=new Float32Array(9),Sh=new Float32Array(4);function ks(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=xh[i];if(r===void 0&&(r=new Float32Array(i),xh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Nt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Va(s,e){let t=_h[e];t===void 0&&(t=new Int32Array(e),_h[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Mg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function bg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),Nt(t,e)}}function Sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),Nt(t,e)}}function Tg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),Nt(t,e)}}function wg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;Sh.set(n),s.uniformMatrix2fv(this.addr,!1,Sh),Nt(t,n)}}function Eg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;bh.set(n),s.uniformMatrix3fv(this.addr,!1,bh),Nt(t,n)}}function Ag(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;Mh.set(n),s.uniformMatrix4fv(this.addr,!1,Mh),Nt(t,n)}}function Rg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Cg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),Nt(t,e)}}function Pg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),Nt(t,e)}}function Lg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),Nt(t,e)}}function Ig(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),Nt(t,e)}}function Ng(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),Nt(t,e)}}function Ug(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),Nt(t,e)}}function Og(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(yh.compareFunction=Ju,r=yh):r=ud,t.setTexture2D(e||r,i)}function Fg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||fd,i)}function kg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||pd,i)}function Bg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||dd,i)}function zg(s){switch(s){case 5126:return Mg;case 35664:return bg;case 35665:return Sg;case 35666:return Tg;case 35674:return wg;case 35675:return Eg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Lg;case 5125:return Ig;case 36294:return Dg;case 36295:return Ng;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return Bg}}function Hg(s,e){s.uniform1fv(this.addr,e)}function Vg(s,e){const t=ks(e,this.size,2);s.uniform2fv(this.addr,t)}function Gg(s,e){const t=ks(e,this.size,3);s.uniform3fv(this.addr,t)}function Wg(s,e){const t=ks(e,this.size,4);s.uniform4fv(this.addr,t)}function $g(s,e){const t=ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Xg(s,e){const t=ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function qg(s,e){const t=ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function jg(s,e){s.uniform1iv(this.addr,e)}function Yg(s,e){s.uniform2iv(this.addr,e)}function Kg(s,e){s.uniform3iv(this.addr,e)}function Zg(s,e){s.uniform4iv(this.addr,e)}function Jg(s,e){s.uniform1uiv(this.addr,e)}function Qg(s,e){s.uniform2uiv(this.addr,e)}function ev(s,e){s.uniform3uiv(this.addr,e)}function tv(s,e){s.uniform4uiv(this.addr,e)}function nv(s,e,t){const n=this.cache,i=e.length,r=Va(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ud,r[a])}function iv(s,e,t){const n=this.cache,i=e.length,r=Va(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||fd,r[a])}function sv(s,e,t){const n=this.cache,i=e.length,r=Va(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||pd,r[a])}function rv(s,e,t){const n=this.cache,i=e.length,r=Va(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||dd,r[a])}function av(s){switch(s){case 5126:return Hg;case 35664:return Vg;case 35665:return Gg;case 35666:return Wg;case 35674:return $g;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return jg;case 35667:case 35671:return Yg;case 35668:case 35672:return Kg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return Qg;case 36295:return ev;case 36296:return tv;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return rv}}class ov{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zg(t.type)}}class lv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=av(t.type)}}class cv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const So=/(\w+)(\])?(\[|\.)?/g;function Th(s,e){s.seq.push(e),s.map[e.id]=e}function hv(s,e,t){const n=s.name,i=n.length;for(So.lastIndex=0;;){const r=So.exec(n),a=So.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Th(t,c===void 0?new ov(o,s,e):new lv(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new cv(o),Th(t,u)),t=u}}}class wa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);hv(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function wh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const uv=37297;let dv=0;function fv(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Eh=new Ge;function pv(s){Ye._getMatrix(Eh,Ye.workingColorSpace,s);const e=`mat3( ${Eh.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(s)){case Ba:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ah(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+fv(s.getShaderSource(e),a)}else return i}function mv(s,e){const t=pv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gv(s,e){let t;switch(e){case Nu:t="Linear";break;case Uu:t="Reinhard";break;case Ou:t="Cineon";break;case Ql:t="ACESFilmic";break;case Fu:t="AgX";break;case ku:t="Neutral";break;case bf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ta=new E;function vv(){Ye.getLuminanceCoefficients(ta);const s=ta.x.toFixed(4),e=ta.y.toFixed(4),t=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function xv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _v(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function lr(s){return s!==""}function Rh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ch(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(s){return s.replace(Mv,Sv)}const bv=new Map;function Sv(s,e){let t=$e[e];if(t===void 0){const n=bv.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kl(t)}const Tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(s){return s.replace(Tv,wv)}function wv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Lh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ev(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Iu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ef?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Av(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ss:case Ts:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function Cv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Du:e="ENVMAP_BLENDING_MULTIPLY";break;case _f:e="ENVMAP_BLENDING_MIX";break;case Mf:e="ENVMAP_BLENDING_ADD";break}return e}function Pv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Lv(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ev(t),c=Av(t),h=Rv(t),u=Cv(t),d=Pv(t),f=yv(t),m=xv(r),v=i.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(lr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(lr).join(`
`),p.length>0&&(p+=`
`)):(g=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),p=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?$e.tonemapping_pars_fragment:"",t.toneMapping!==bi?gv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,mv("linearToOutputTexel",t.outputColorSpace),vv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),a=kl(a),a=Rh(a,t),a=Ch(a,t),o=kl(o),o=Rh(o,t),o=Ch(o,t),a=Ph(a),o=Ph(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+g+a,_=y+p+o,A=wh(i,i.VERTEX_SHADER,x),w=wh(i,i.FRAGMENT_SHADER,_);i.attachShader(v,A),i.attachShader(v,w),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(I){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(v).trim(),N=i.getShaderInfoLog(A).trim(),F=i.getShaderInfoLog(w).trim();let G=!0,z=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,A,w);else{const Y=Ah(i,A,"vertex"),W=Ah(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+Y+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(N===""||F==="")&&(z=!1);z&&(I.diagnostics={runnable:G,programLog:B,vertexShader:{log:N,prefix:g},fragmentShader:{log:F,prefix:p}})}i.deleteShader(A),i.deleteShader(w),P=new wa(i,v),S=_v(i,v)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,uv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}let Iv=0;class Dv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Nv(e),t.set(e,n)),n}}class Nv{constructor(e){this.id=Iv++,this.code=e,this.usedTimes=0}}function Uv(s,e,t,n,i,r,a){const o=new nd,l=new Dv,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,I,B,N){const F=B.fog,G=N.geometry,z=S.isMeshStandardMaterial?B.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),W=Y&&Y.mapping===ka?Y.image.height:null,le=m[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const me=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,xe=me!==void 0?me.length:0;let De=0;G.morphAttributes.position!==void 0&&(De=1),G.morphAttributes.normal!==void 0&&(De=2),G.morphAttributes.color!==void 0&&(De=3);let rt,K,ae,we;if(le){const lt=kn[le];rt=lt.vertexShader,K=lt.fragmentShader}else rt=S.vertexShader,K=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),we=l.getFragmentShaderID(S);const ce=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),ke=N.isInstancedMesh===!0,Oe=N.isBatchedMesh===!0,tt=!!S.map,ee=!!S.matcap,re=!!Y,L=!!S.aoMap,Pe=!!S.lightMap,ie=!!S.bumpMap,be=!!S.normalMap,he=!!S.displacementMap,Ne=!!S.emissiveMap,_e=!!S.metalnessMap,R=!!S.roughnessMap,b=S.anisotropy>0,k=S.clearcoat>0,q=S.dispersion>0,te=S.iridescence>0,j=S.sheen>0,Ee=S.transmission>0,de=b&&!!S.anisotropyMap,Me=k&&!!S.clearcoatMap,Ze=k&&!!S.clearcoatNormalMap,se=k&&!!S.clearcoatRoughnessMap,Se=te&&!!S.iridescenceMap,Ue=te&&!!S.iridescenceThicknessMap,Fe=j&&!!S.sheenColorMap,Te=j&&!!S.sheenRoughnessMap,Qe=!!S.specularMap,We=!!S.specularColorMap,ft=!!S.specularIntensityMap,D=Ee&&!!S.transmissionMap,fe=Ee&&!!S.thicknessMap,$=!!S.gradientMap,J=!!S.alphaMap,ye=S.alphaTest>0,ge=!!S.alphaHash,He=!!S.extensions;let At=bi;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(At=s.toneMapping);const Ht={shaderID:le,shaderType:S.type,shaderName:S.name,vertexShader:rt,fragmentShader:K,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:we,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Oe,batchingColor:Oe&&N._colorsTexture!==null,instancing:ke,instancingColor:ke&&N.instanceColor!==null,instancingMorph:ke&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Xt,alphaToCoverage:!!S.alphaToCoverage,map:tt,matcap:ee,envMap:re,envMapMode:re&&Y.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:Pe,bumpMap:ie,normalMap:be,displacementMap:d&&he,emissiveMap:Ne,normalMapObjectSpace:be&&S.normalMapType===Rf,normalMapTangentSpace:be&&S.normalMapType===Zu,metalnessMap:_e,roughnessMap:R,anisotropy:b,anisotropyMap:de,clearcoat:k,clearcoatMap:Me,clearcoatNormalMap:Ze,clearcoatRoughnessMap:se,dispersion:q,iridescence:te,iridescenceMap:Se,iridescenceThicknessMap:Ue,sheen:j,sheenColorMap:Fe,sheenRoughnessMap:Te,specularMap:Qe,specularColorMap:We,specularIntensityMap:ft,transmission:Ee,transmissionMap:D,thicknessMap:fe,gradientMap:$,opaque:S.transparent===!1&&S.blending===gs&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:ye,alphaHash:ge,combine:S.combine,mapUv:tt&&v(S.map.channel),aoMapUv:L&&v(S.aoMap.channel),lightMapUv:Pe&&v(S.lightMap.channel),bumpMapUv:ie&&v(S.bumpMap.channel),normalMapUv:be&&v(S.normalMap.channel),displacementMapUv:he&&v(S.displacementMap.channel),emissiveMapUv:Ne&&v(S.emissiveMap.channel),metalnessMapUv:_e&&v(S.metalnessMap.channel),roughnessMapUv:R&&v(S.roughnessMap.channel),anisotropyMapUv:de&&v(S.anisotropyMap.channel),clearcoatMapUv:Me&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(S.sheenRoughnessMap.channel),specularMapUv:Qe&&v(S.specularMap.channel),specularColorMapUv:We&&v(S.specularColorMap.channel),specularIntensityMapUv:ft&&v(S.specularIntensityMap.channel),transmissionMapUv:D&&v(S.transmissionMap.channel),thicknessMapUv:fe&&v(S.thicknessMap.channel),alphaMapUv:J&&v(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(be||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(tt||J),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:De,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:At,decodeVideoTexture:tt&&S.map.isVideoTexture===!0&&Ye.getTransfer(S.map.colorSpace)===ct,decodeVideoTextureEmissive:Ne&&S.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(S.emissiveMap.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Bt,flipSided:S.side===Qt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:He&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&S.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)M.push(I),M.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(y(M,S),x(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){const M=m[S.type];let I;if(M){const B=kn[M];I=br.clone(B.uniforms)}else I=S.uniforms;return I}function A(S,M){let I;for(let B=0,N=h.length;B<N;B++){const F=h[B];if(F.cacheKey===M){I=F,++I.usedTimes;break}}return I===void 0&&(I=new Lv(s,M,S,r),h.push(I)),I}function w(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function C(S){l.remove(S)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:P}}function Ov(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Fv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ih(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Dh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,m,v,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),e++,p}function o(u,d,f,m,v,g){const p=a(u,d,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,m,v,g){const p=a(u,d,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Fv),n.length>1&&n.sort(d||Ih),i.length>1&&i.sort(d||Ih)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function kv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Dh,s.set(n,[a])):i>=r.length?(a=new Dh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Bv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new ne};break;case"SpotLight":t={position:new E,direction:new E,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":t={color:new ne,position:new E,halfWidth:new E,halfHeight:new E};break}return s[e.id]=t,t}}}function zv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Hv=0;function Vv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Gv(s){const e=new Bv,t=zv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const i=new E,r=new ze,a=new ze;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,y=0,x=0,_=0,A=0,w=0,C=0;c.sort(Vv);for(let S=0,M=c.length;S<M;S++){const I=c[S],B=I.color,N=I.intensity,F=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=B.r*N,u+=B.g*N,d+=B.b*N;else if(I.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(I.sh.coefficients[z],N);C++}else if(I.isDirectionalLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Y=I.shadow,W=t.get(I);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=I.shadow.matrix,y++}n.directional[f]=z,f++}else if(I.isSpotLight){const z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(B).multiplyScalar(N),z.distance=F,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,n.spot[v]=z;const Y=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,Y.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[v]=Y.matrix,I.castShadow){const W=t.get(I);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=G,_++}v++}else if(I.isRectAreaLight){const z=e.get(I);z.color.copy(B).multiplyScalar(N),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=z,g++}else if(I.isPointLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const Y=I.shadow,W=t.get(I);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=I.shadow.matrix,x++}n.point[m]=z,m++}else if(I.isHemisphereLight){const z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(N),z.groundColor.copy(I.groundColor).multiplyScalar(N),n.hemi[p]=z,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==v||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==_||P.numSpotMaps!==A||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.directionalLength=f,P.pointLength=m,P.spotLength=v,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=_,P.numSpotMaps=A,P.numLightProbes=C,n.version=Hv++)}function l(c,h){let u=0,d=0,f=0,m=0,v=0;const g=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const x=c[p];if(x.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(x.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function Nh(s){const e=new Gv(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Wv(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Nh(s),e.set(i,[o])):r>=a.length?(o=new Nh(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class $v extends Nn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xv extends Nn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yv(s,e,t){let n=new lc;const i=new Q,r=new Q,a=new st,o=new $v({depthPacking:Af}),l=new Xv,c={},h=t.maxTextureSize,u={[Un]:Qt,[Qt]:Un,[Bt]:Bt},d=new gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:qv,fragmentShader:jv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new bt;m.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new dt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iu;let p=this.type;this.render=function(w,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),B=s.state;B.setBlending(ii),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const N=p!==Qn&&this.type===Qn,F=p===Qn&&this.type!==Qn;for(let G=0,z=w.length;G<z;G++){const Y=w[G],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const le=W.getFrameExtents();if(i.multiply(le),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/le.x),i.x=r.x*le.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/le.y),i.y=r.y*le.y,W.mapSize.y=r.y)),W.map===null||N===!0||F===!0){const xe=this.type!==Qn?{minFilter:en,magFilter:en}:{};W.map!==null&&W.map.dispose(),W.map=new Dn(i.x,i.y,xe),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const me=W.getViewportCount();for(let xe=0;xe<me;xe++){const De=W.getViewport(xe);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),B.viewport(a),W.updateMatrices(Y,xe),n=W.getFrustum(),_(C,P,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Qn&&y(W,P),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(S,M,I)};function y(w,C){const P=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Dn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,P,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,P,f,v,null)}function x(w,C,P,S){let M=null;const I=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const B=M.uuid,N=C.uuid;let F=c[B];F===void 0&&(F={},c[B]=F);let G=F[N];G===void 0&&(G=M.clone(),F[N]=G,C.addEventListener("dispose",A)),M=G}if(M.visible=C.visible,M.wireframe=C.wireframe,S===Qn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=s.properties.get(M);B.light=P}return M}function _(w,C,P,S,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Qn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const N=e.update(w),F=w.material;if(Array.isArray(F)){const G=N.groups;for(let z=0,Y=G.length;z<Y;z++){const W=G[z],le=F[W.materialIndex];if(le&&le.visible){const me=x(w,le,S,M);w.onBeforeShadow(s,w,C,P,N,me,W),s.renderBufferDirect(P,null,N,me,w,W),w.onAfterShadow(s,w,C,P,N,me,W)}}}else if(F.visible){const G=x(w,F,S,M);w.onBeforeShadow(s,w,C,P,N,G,null),s.renderBufferDirect(P,null,N,G,w,null),w.onAfterShadow(s,w,C,P,N,G,null)}}const B=w.children;for(let N=0,F=B.length;N<F;N++)_(B[N],C,P,S,M)}function A(w){w.target.removeEventListener("dispose",A);for(const P in c){const S=c[P],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Kv={[el]:tl,[nl]:rl,[il]:al,[bs]:sl,[tl]:el,[rl]:nl,[al]:il,[sl]:bs};function Zv(s,e){function t(){let D=!1;const fe=new st;let $=null;const J=new st(0,0,0,0);return{setMask:function(ye){$!==ye&&!D&&(s.colorMask(ye,ye,ye,ye),$=ye)},setLocked:function(ye){D=ye},setClear:function(ye,ge,He,At,Ht){Ht===!0&&(ye*=At,ge*=At,He*=At),fe.set(ye,ge,He,At),J.equals(fe)===!1&&(s.clearColor(ye,ge,He,At),J.copy(fe))},reset:function(){D=!1,$=null,J.set(-1,0,0,0)}}}function n(){let D=!1,fe=!1,$=null,J=null,ye=null;return{setReversed:function(ge){if(fe!==ge){const He=e.get("EXT_clip_control");fe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const At=ye;ye=null,this.setClear(At)}fe=ge},getReversed:function(){return fe},setTest:function(ge){ge?ce(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(ge){$!==ge&&!D&&(s.depthMask(ge),$=ge)},setFunc:function(ge){if(fe&&(ge=Kv[ge]),J!==ge){switch(ge){case el:s.depthFunc(s.NEVER);break;case tl:s.depthFunc(s.ALWAYS);break;case nl:s.depthFunc(s.LESS);break;case bs:s.depthFunc(s.LEQUAL);break;case il:s.depthFunc(s.EQUAL);break;case sl:s.depthFunc(s.GEQUAL);break;case rl:s.depthFunc(s.GREATER);break;case al:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=ge}},setLocked:function(ge){D=ge},setClear:function(ge){ye!==ge&&(fe&&(ge=1-ge),s.clearDepth(ge),ye=ge)},reset:function(){D=!1,$=null,J=null,ye=null,fe=!1}}}function i(){let D=!1,fe=null,$=null,J=null,ye=null,ge=null,He=null,At=null,Ht=null;return{setTest:function(lt){D||(lt?ce(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(lt){fe!==lt&&!D&&(s.stencilMask(lt),fe=lt)},setFunc:function(lt,wn,$n){($!==lt||J!==wn||ye!==$n)&&(s.stencilFunc(lt,wn,$n),$=lt,J=wn,ye=$n)},setOp:function(lt,wn,$n){(ge!==lt||He!==wn||At!==$n)&&(s.stencilOp(lt,wn,$n),ge=lt,He=wn,At=$n)},setLocked:function(lt){D=lt},setClear:function(lt){Ht!==lt&&(s.clearStencil(lt),Ht=lt)},reset:function(){D=!1,fe=null,$=null,J=null,ye=null,ge=null,He=null,At=null,Ht=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,y=null,x=null,_=null,A=null,w=null,C=new ne(0,0,0),P=0,S=!1,M=null,I=null,B=null,N=null,F=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Y=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=Y>=2);let le=null,me={};const xe=s.getParameter(s.SCISSOR_BOX),De=s.getParameter(s.VIEWPORT),rt=new st().fromArray(xe),K=new st().fromArray(De);function ae(D,fe,$,J){const ye=new Uint8Array(4),ge=s.createTexture();s.bindTexture(D,ge),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<$;He++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(fe,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(fe+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return ge}const we={};we[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),we[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),we[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(s.DEPTH_TEST),a.setFunc(bs),ie(!1),be(Oc),ce(s.CULL_FACE),L(ii);function ce(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Ie(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function ke(D,fe){return u[D]!==fe?(s.bindFramebuffer(D,fe),u[D]=fe,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=fe),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=fe),!0):!1}function Oe(D,fe){let $=f,J=!1;if(D){$=d.get(fe),$===void 0&&($=[],d.set(fe,$));const ye=D.textures;if($.length!==ye.length||$[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,He=ye.length;ge<He;ge++)$[ge]=s.COLOR_ATTACHMENT0+ge;$.length=ye.length,J=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,J=!0);J&&s.drawBuffers($)}function tt(D){return m!==D?(s.useProgram(D),m=D,!0):!1}const ee={[Ui]:s.FUNC_ADD,[nf]:s.FUNC_SUBTRACT,[sf]:s.FUNC_REVERSE_SUBTRACT};ee[rf]=s.MIN,ee[af]=s.MAX;const re={[of]:s.ZERO,[lf]:s.ONE,[cf]:s.SRC_COLOR,[Jo]:s.SRC_ALPHA,[mf]:s.SRC_ALPHA_SATURATE,[ff]:s.DST_COLOR,[uf]:s.DST_ALPHA,[hf]:s.ONE_MINUS_SRC_COLOR,[Qo]:s.ONE_MINUS_SRC_ALPHA,[pf]:s.ONE_MINUS_DST_COLOR,[df]:s.ONE_MINUS_DST_ALPHA,[gf]:s.CONSTANT_COLOR,[vf]:s.ONE_MINUS_CONSTANT_COLOR,[yf]:s.CONSTANT_ALPHA,[xf]:s.ONE_MINUS_CONSTANT_ALPHA};function L(D,fe,$,J,ye,ge,He,At,Ht,lt){if(D===ii){v===!0&&(Ie(s.BLEND),v=!1);return}if(v===!1&&(ce(s.BLEND),v=!0),D!==tf){if(D!==g||lt!==S){if((p!==Ui||_!==Ui)&&(s.blendEquation(s.FUNC_ADD),p=Ui,_=Ui),lt)switch(D){case gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mt:s.blendFunc(s.ONE,s.ONE);break;case Fc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mt:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,x=null,A=null,w=null,C.set(0,0,0),P=0,g=D,S=lt}return}ye=ye||fe,ge=ge||$,He=He||J,(fe!==p||ye!==_)&&(s.blendEquationSeparate(ee[fe],ee[ye]),p=fe,_=ye),($!==y||J!==x||ge!==A||He!==w)&&(s.blendFuncSeparate(re[$],re[J],re[ge],re[He]),y=$,x=J,A=ge,w=He),(At.equals(C)===!1||Ht!==P)&&(s.blendColor(At.r,At.g,At.b,Ht),C.copy(At),P=Ht),g=D,S=!1}function Pe(D,fe){D.side===Bt?Ie(s.CULL_FACE):ce(s.CULL_FACE);let $=D.side===Qt;fe&&($=!$),ie($),D.blending===gs&&D.transparent===!1?L(ii):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const J=D.stencilWrite;o.setTest(J),J&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function ie(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function be(D){D!==Jd?(ce(s.CULL_FACE),D!==I&&(D===Oc?s.cullFace(s.BACK):D===Qd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),I=D}function he(D){D!==B&&(z&&s.lineWidth(D),B=D)}function Ne(D,fe,$){D?(ce(s.POLYGON_OFFSET_FILL),(N!==fe||F!==$)&&(s.polygonOffset(fe,$),N=fe,F=$)):Ie(s.POLYGON_OFFSET_FILL)}function _e(D){D?ce(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function R(D){D===void 0&&(D=s.TEXTURE0+G-1),le!==D&&(s.activeTexture(D),le=D)}function b(D,fe,$){$===void 0&&(le===null?$=s.TEXTURE0+G-1:$=le);let J=me[$];J===void 0&&(J={type:void 0,texture:void 0},me[$]=J),(J.type!==D||J.texture!==fe)&&(le!==$&&(s.activeTexture($),le=$),s.bindTexture(D,fe||we[D]),J.type=D,J.texture=fe)}function k(){const D=me[le];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(D){rt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),rt.copy(D))}function Te(D){K.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function Qe(D,fe){let $=c.get(fe);$===void 0&&($=new WeakMap,c.set(fe,$));let J=$.get(D);J===void 0&&(J=s.getUniformBlockIndex(fe,D.name),$.set(D,J))}function We(D,fe){const J=c.get(fe).get(D);l.get(fe)!==J&&(s.uniformBlockBinding(fe,J,D.__bindingPointIndex),l.set(fe,J))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},le=null,me={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,y=null,x=null,_=null,A=null,w=null,C=new ne(0,0,0),P=0,S=!1,M=null,I=null,B=null,N=null,F=null,rt.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Ie,bindFramebuffer:ke,drawBuffers:Oe,useProgram:tt,setBlending:L,setMaterial:Pe,setFlipSided:ie,setCullFace:be,setLineWidth:he,setPolygonOffset:Ne,setScissorTest:_e,activeTexture:R,bindTexture:b,unbindTexture:k,compressedTexImage2D:q,compressedTexImage3D:te,texImage2D:Se,texImage3D:Ue,updateUBOMapping:Qe,uniformBlockBinding:We,texStorage2D:Ze,texStorage3D:se,texSubImage2D:j,texSubImage3D:Ee,compressedTexSubImage2D:de,compressedTexSubImage3D:Me,scissor:Fe,viewport:Te,reset:ft}}function Uh(s,e,t,n){const i=Jv(n);switch(t){case Wu:return s*e;case Xu:return s*e;case qu:return s*e*2;case ic:return s*e/i.components*i.byteLength;case sc:return s*e/i.components*i.byteLength;case ju:return s*e*2/i.components*i.byteLength;case rc:return s*e*2/i.components*i.byteLength;case $u:return s*e*3/i.components*i.byteLength;case bn:return s*e*4/i.components*i.byteLength;case ac:return s*e*4/i.components*i.byteLength;case _a:case Ma:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ba:case Sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hl:case dl:return Math.max(s,16)*Math.max(e,8)/4;case cl:case ul:return Math.max(s,8)*Math.max(e,8)/2;case fl:case pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case yl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case xl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case _l:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case bl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case El:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Al:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ta:case Pl:case Ll:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yu:case Il:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Dl:case Nl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jv(s){switch(s){case ai:case Hu:return{byteLength:1,components:1};case yr:case Vu:case si:return{byteLength:2,components:1};case tc:case nc:return{byteLength:2,components:4};case Bi:case ec:case Ln:return{byteLength:4,components:1};case Gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Qv(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return f?new OffscreenCanvas(R,b):Mr("canvas")}function v(R,b,k){let q=1;const te=_e(R);if((te.width>k||te.height>k)&&(q=k/Math.max(te.width,te.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(q*te.width),Ee=Math.floor(q*te.height);u===void 0&&(u=m(j,Ee));const de=b?m(j,Ee):u;return de.width=j,de.height=Ee,de.getContext("2d").drawImage(R,0,0,j,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+j+"x"+Ee+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(R,b,k,q,te=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=b;if(b===s.RED&&(k===s.FLOAT&&(j=s.R32F),k===s.HALF_FLOAT&&(j=s.R16F),k===s.UNSIGNED_BYTE&&(j=s.R8)),b===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.R8UI),k===s.UNSIGNED_SHORT&&(j=s.R16UI),k===s.UNSIGNED_INT&&(j=s.R32UI),k===s.BYTE&&(j=s.R8I),k===s.SHORT&&(j=s.R16I),k===s.INT&&(j=s.R32I)),b===s.RG&&(k===s.FLOAT&&(j=s.RG32F),k===s.HALF_FLOAT&&(j=s.RG16F),k===s.UNSIGNED_BYTE&&(j=s.RG8)),b===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RG8UI),k===s.UNSIGNED_SHORT&&(j=s.RG16UI),k===s.UNSIGNED_INT&&(j=s.RG32UI),k===s.BYTE&&(j=s.RG8I),k===s.SHORT&&(j=s.RG16I),k===s.INT&&(j=s.RG32I)),b===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGB8UI),k===s.UNSIGNED_SHORT&&(j=s.RGB16UI),k===s.UNSIGNED_INT&&(j=s.RGB32UI),k===s.BYTE&&(j=s.RGB8I),k===s.SHORT&&(j=s.RGB16I),k===s.INT&&(j=s.RGB32I)),b===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),k===s.UNSIGNED_INT&&(j=s.RGBA32UI),k===s.BYTE&&(j=s.RGBA8I),k===s.SHORT&&(j=s.RGBA16I),k===s.INT&&(j=s.RGBA32I)),b===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),b===s.RGBA){const Ee=te?Ba:Ye.getTransfer(q);k===s.FLOAT&&(j=s.RGBA32F),k===s.HALF_FLOAT&&(j=s.RGBA16F),k===s.UNSIGNED_BYTE&&(j=Ee===ct?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(R,b){let k;return R?b===null||b===Bi||b===Es?k=s.DEPTH24_STENCIL8:b===Ln?k=s.DEPTH32F_STENCIL8:b===yr&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Bi||b===Es?k=s.DEPTH_COMPONENT24:b===Ln?k=s.DEPTH_COMPONENT32F:b===yr&&(k=s.DEPTH_COMPONENT16),k}function A(R,b){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==en&&R.minFilter!==dn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function w(R){const b=R.target;b.removeEventListener("dispose",w),P(b),b.isVideoTexture&&h.delete(b)}function C(R){const b=R.target;b.removeEventListener("dispose",C),M(b)}function P(R){const b=n.get(R);if(b.__webglInit===void 0)return;const k=R.source,q=d.get(k);if(q){const te=q[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(R),Object.keys(q).length===0&&d.delete(k)}n.remove(R)}function S(R){const b=n.get(R);s.deleteTexture(b.__webglTexture);const k=R.source,q=d.get(k);delete q[b.__cacheKey],a.memory.textures--}function M(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let te=0;te<b.__webglFramebuffer[q].length;te++)s.deleteFramebuffer(b.__webglFramebuffer[q][te]);else s.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)s.deleteFramebuffer(b.__webglFramebuffer[q]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=R.textures;for(let q=0,te=k.length;q<te;q++){const j=n.get(k[q]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(k[q])}n.remove(R)}let I=0;function B(){I=0}function N(){const R=I;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function F(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function G(R,b){const k=n.get(R);if(R.isVideoTexture&&he(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,R,b);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+b)}function z(R,b){const k=n.get(R);if(R.version>0&&k.__version!==R.version){K(k,R,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+b)}function Y(R,b){const k=n.get(R);if(R.version>0&&k.__version!==R.version){K(k,R,b);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+b)}function W(R,b){const k=n.get(R);if(R.version>0&&k.__version!==R.version){ae(k,R,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+b)}const le={[ws]:s.REPEAT,[xi]:s.CLAMP_TO_EDGE,[Aa]:s.MIRRORED_REPEAT},me={[en]:s.NEAREST,[zu]:s.NEAREST_MIPMAP_NEAREST,[ar]:s.NEAREST_MIPMAP_LINEAR,[dn]:s.LINEAR,[xa]:s.LINEAR_MIPMAP_NEAREST,[ti]:s.LINEAR_MIPMAP_LINEAR},xe={[Cf]:s.NEVER,[Uf]:s.ALWAYS,[Pf]:s.LESS,[Ju]:s.LEQUAL,[Lf]:s.EQUAL,[Nf]:s.GEQUAL,[If]:s.GREATER,[Df]:s.NOTEQUAL};function De(R,b){if(b.type===Ln&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===dn||b.magFilter===xa||b.magFilter===ar||b.magFilter===ti||b.minFilter===dn||b.minFilter===xa||b.minFilter===ar||b.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,le[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,le[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,le[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,me[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,me[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,xe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===en||b.minFilter!==ar&&b.minFilter!==ti||b.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function rt(R,b){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",w));const q=b.source;let te=d.get(q);te===void 0&&(te={},d.set(q,te));const j=F(b);if(j!==R.__cacheKey){te[j]===void 0&&(te[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),te[j].usedTimes++;const Ee=te[R.__cacheKey];Ee!==void 0&&(te[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&S(b)),R.__cacheKey=j,R.__webglTexture=te[j].texture}return k}function K(R,b,k){let q=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=s.TEXTURE_3D);const te=rt(R,b),j=b.source;t.bindTexture(q,R.__webglTexture,s.TEXTURE0+k);const Ee=n.get(j);if(j.version!==Ee.__version||te===!0){t.activeTexture(s.TEXTURE0+k);const de=Ye.getPrimaries(Ye.workingColorSpace),Me=b.colorSpace===yi?null:Ye.getPrimaries(b.colorSpace),Ze=b.colorSpace===yi||de===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let se=v(b.image,!1,i.maxTextureSize);se=Ne(b,se);const Se=r.convert(b.format,b.colorSpace),Ue=r.convert(b.type);let Fe=x(b.internalFormat,Se,Ue,b.colorSpace,b.isVideoTexture);De(q,b);let Te;const Qe=b.mipmaps,We=b.isVideoTexture!==!0,ft=Ee.__version===void 0||te===!0,D=j.dataReady,fe=A(b,se);if(b.isDepthTexture)Fe=_(b.format===As,b.type),ft&&(We?t.texStorage2D(s.TEXTURE_2D,1,Fe,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Fe,se.width,se.height,0,Se,Ue,null));else if(b.isDataTexture)if(Qe.length>0){We&&ft&&t.texStorage2D(s.TEXTURE_2D,fe,Fe,Qe[0].width,Qe[0].height);for(let $=0,J=Qe.length;$<J;$++)Te=Qe[$],We?D&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,Te.width,Te.height,Se,Ue,Te.data):t.texImage2D(s.TEXTURE_2D,$,Fe,Te.width,Te.height,0,Se,Ue,Te.data);b.generateMipmaps=!1}else We?(ft&&t.texStorage2D(s.TEXTURE_2D,fe,Fe,se.width,se.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,Se,Ue,se.data)):t.texImage2D(s.TEXTURE_2D,0,Fe,se.width,se.height,0,Se,Ue,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){We&&ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Fe,Qe[0].width,Qe[0].height,se.depth);for(let $=0,J=Qe.length;$<J;$++)if(Te=Qe[$],b.format!==bn)if(Se!==null)if(We){if(D)if(b.layerUpdates.size>0){const ye=Uh(Te.width,Te.height,b.format,b.type);for(const ge of b.layerUpdates){const He=Te.data.subarray(ge*ye/Te.data.BYTES_PER_ELEMENT,(ge+1)*ye/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,ge,Te.width,Te.height,1,Se,He)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Te.width,Te.height,se.depth,Se,Te.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,Fe,Te.width,Te.height,se.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Te.width,Te.height,se.depth,Se,Ue,Te.data):t.texImage3D(s.TEXTURE_2D_ARRAY,$,Fe,Te.width,Te.height,se.depth,0,Se,Ue,Te.data)}else{We&&ft&&t.texStorage2D(s.TEXTURE_2D,fe,Fe,Qe[0].width,Qe[0].height);for(let $=0,J=Qe.length;$<J;$++)Te=Qe[$],b.format!==bn?Se!==null?We?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,Te.width,Te.height,Se,Te.data):t.compressedTexImage2D(s.TEXTURE_2D,$,Fe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?D&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,Te.width,Te.height,Se,Ue,Te.data):t.texImage2D(s.TEXTURE_2D,$,Fe,Te.width,Te.height,0,Se,Ue,Te.data)}else if(b.isDataArrayTexture)if(We){if(ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Fe,se.width,se.height,se.depth),D)if(b.layerUpdates.size>0){const $=Uh(se.width,se.height,b.format,b.type);for(const J of b.layerUpdates){const ye=se.data.subarray(J*$/se.data.BYTES_PER_ELEMENT,(J+1)*$/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,se.width,se.height,1,Se,Ue,ye)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Se,Ue,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,se.width,se.height,se.depth,0,Se,Ue,se.data);else if(b.isData3DTexture)We?(ft&&t.texStorage3D(s.TEXTURE_3D,fe,Fe,se.width,se.height,se.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Se,Ue,se.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,se.width,se.height,se.depth,0,Se,Ue,se.data);else if(b.isFramebufferTexture){if(ft)if(We)t.texStorage2D(s.TEXTURE_2D,fe,Fe,se.width,se.height);else{let $=se.width,J=se.height;for(let ye=0;ye<fe;ye++)t.texImage2D(s.TEXTURE_2D,ye,Fe,$,J,0,Se,Ue,null),$>>=1,J>>=1}}else if(Qe.length>0){if(We&&ft){const $=_e(Qe[0]);t.texStorage2D(s.TEXTURE_2D,fe,Fe,$.width,$.height)}for(let $=0,J=Qe.length;$<J;$++)Te=Qe[$],We?D&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,Se,Ue,Te):t.texImage2D(s.TEXTURE_2D,$,Fe,Se,Ue,Te);b.generateMipmaps=!1}else if(We){if(ft){const $=_e(se);t.texStorage2D(s.TEXTURE_2D,fe,Fe,$.width,$.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,Ue,se)}else t.texImage2D(s.TEXTURE_2D,0,Fe,Se,Ue,se);g(b)&&p(q),Ee.__version=j.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ae(R,b,k){if(b.image.length!==6)return;const q=rt(R,b),te=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);const j=n.get(te);if(te.version!==j.__version||q===!0){t.activeTexture(s.TEXTURE0+k);const Ee=Ye.getPrimaries(Ye.workingColorSpace),de=b.colorSpace===yi?null:Ye.getPrimaries(b.colorSpace),Me=b.colorSpace===yi||Ee===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ze=b.isCompressedTexture||b.image[0].isCompressedTexture,se=b.image[0]&&b.image[0].isDataTexture,Se=[];for(let J=0;J<6;J++)!Ze&&!se?Se[J]=v(b.image[J],!0,i.maxCubemapSize):Se[J]=se?b.image[J].image:b.image[J],Se[J]=Ne(b,Se[J]);const Ue=Se[0],Fe=r.convert(b.format,b.colorSpace),Te=r.convert(b.type),Qe=x(b.internalFormat,Fe,Te,b.colorSpace),We=b.isVideoTexture!==!0,ft=j.__version===void 0||q===!0,D=te.dataReady;let fe=A(b,Ue);De(s.TEXTURE_CUBE_MAP,b);let $;if(Ze){We&&ft&&t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,Qe,Ue.width,Ue.height);for(let J=0;J<6;J++){$=Se[J].mipmaps;for(let ye=0;ye<$.length;ye++){const ge=$[ye];b.format!==bn?Fe!==null?We?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,ge.width,ge.height,Fe,ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,Qe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,ge.width,ge.height,Fe,Te,ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,Qe,ge.width,ge.height,0,Fe,Te,ge.data)}}}else{if($=b.mipmaps,We&&ft){$.length>0&&fe++;const J=_e(Se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,Qe,J.width,J.height)}for(let J=0;J<6;J++)if(se){We?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Se[J].width,Se[J].height,Fe,Te,Se[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Qe,Se[J].width,Se[J].height,0,Fe,Te,Se[J].data);for(let ye=0;ye<$.length;ye++){const He=$[ye].image[J].image;We?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,He.width,He.height,Fe,Te,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,Qe,He.width,He.height,0,Fe,Te,He.data)}}else{We?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Fe,Te,Se[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Qe,Fe,Te,Se[J]);for(let ye=0;ye<$.length;ye++){const ge=$[ye];We?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,Fe,Te,ge.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,Qe,Fe,Te,ge.image[J])}}}g(b)&&p(s.TEXTURE_CUBE_MAP),j.__version=te.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function we(R,b,k,q,te,j){const Ee=r.convert(k.format,k.colorSpace),de=r.convert(k.type),Me=x(k.internalFormat,Ee,de,k.colorSpace),Ze=n.get(b),se=n.get(k);if(se.__renderTarget=b,!Ze.__hasExternalTextures){const Se=Math.max(1,b.width>>j),Ue=Math.max(1,b.height>>j);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,j,Me,Se,Ue,b.depth,0,Ee,de,null):t.texImage2D(te,j,Me,Se,Ue,0,Ee,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),be(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,te,se.__webglTexture,0,ie(b)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,te,se.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(R,b,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){const q=b.depthTexture,te=q&&q.isDepthTexture?q.type:null,j=_(b.stencilBuffer,te),Ee=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=ie(b);be(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,j,b.width,b.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,j,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,j,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,R)}else{const q=b.textures;for(let te=0;te<q.length;te++){const j=q[te],Ee=r.convert(j.format,j.colorSpace),de=r.convert(j.type),Me=x(j.internalFormat,Ee,de,j.colorSpace),Ze=ie(b);k&&be(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Me,b.width,b.height):be(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze,Me,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Me,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(b.depthTexture);q.__renderTarget=b,(!q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);const te=q.__webglTexture,j=ie(b);if(b.depthTexture.format===vs)be(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(b.depthTexture.format===As)be(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ke(R){const b=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){const te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",te)};q.addEventListener("dispose",te),b.__depthDisposeCallback=te}b.__boundDepthTexture=q}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ie(b.__webglFramebuffer,R)}else if(k){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=s.createRenderbuffer(),ce(b.__webglDepthbuffer[q],R,!1);else{const te=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,j)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ce(b.__webglDepthbuffer,R,!1);else{const q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,te)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(R,b,k){const q=n.get(R);b!==void 0&&we(q.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&ke(R)}function tt(R){const b=R.texture,k=n.get(R),q=n.get(b);R.addEventListener("dispose",C);const te=R.textures,j=R.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=b.version,a.memory.textures++),j){k.__webglFramebuffer=[];for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[de]=[];for(let Me=0;Me<b.mipmaps.length;Me++)k.__webglFramebuffer[de][Me]=s.createFramebuffer()}else k.__webglFramebuffer[de]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)k.__webglFramebuffer[de]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Ee)for(let de=0,Me=te.length;de<Me;de++){const Ze=n.get(te[de]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&be(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){const Me=te[de];k.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[de]);const Ze=r.convert(Me.format,Me.colorSpace),se=r.convert(Me.type),Se=x(Me.internalFormat,Ze,se,Me.colorSpace,R.isXRRenderTarget===!0),Ue=ie(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,Se,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,k.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ce(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),De(s.TEXTURE_CUBE_MAP,b);for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)we(k.__webglFramebuffer[de][Me],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Me);else we(k.__webglFramebuffer[de],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(b)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let de=0,Me=te.length;de<Me;de++){const Ze=te[de],se=n.get(Ze);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),De(s.TEXTURE_2D,Ze),we(k.__webglFramebuffer,R,Ze,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),g(Ze)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,q.__webglTexture),De(de,b),b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)we(k.__webglFramebuffer[Me],R,b,s.COLOR_ATTACHMENT0,de,Me);else we(k.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,de,0);g(b)&&p(de),t.unbindTexture()}R.depthBuffer&&ke(R)}function ee(R){const b=R.textures;for(let k=0,q=b.length;k<q;k++){const te=b[k];if(g(te)){const j=y(R),Ee=n.get(te).__webglTexture;t.bindTexture(j,Ee),p(j),t.unbindTexture()}}}const re=[],L=[];function Pe(R){if(R.samples>0){if(be(R)===!1){const b=R.textures,k=R.width,q=R.height;let te=s.COLOR_BUFFER_BIT;const j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=n.get(R),de=b.length>1;if(de)for(let Me=0;Me<b.length;Me++)t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Me=0;Me<b.length;Me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);const Ze=n.get(b[Me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ze,0)}s.blitFramebuffer(0,0,k,q,0,0,k,q,te,s.NEAREST),l===!0&&(re.length=0,L.length=0,re.push(s.COLOR_ATTACHMENT0+Me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(re.push(j),L.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let Me=0;Me<b.length;Me++){t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);const Ze=n.get(b[Me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ie(R){return Math.min(i.maxSamples,R.samples)}function be(R){const b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function he(R){const b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Ne(R,b){const k=R.colorSpace,q=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Xt&&k!==yi&&(Ye.getTransfer(k)===ct?(q!==bn||te!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function _e(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=B,this.setTexture2D=G,this.setTexture2DArray=z,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=Oe,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=we,this.useMultisampledRTT=be}function ey(s,e){function t(n,i=yi){let r;const a=Ye.getTransfer(i);if(n===ai)return s.UNSIGNED_BYTE;if(n===tc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===nc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Gu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Hu)return s.BYTE;if(n===Vu)return s.SHORT;if(n===yr)return s.UNSIGNED_SHORT;if(n===ec)return s.INT;if(n===Bi)return s.UNSIGNED_INT;if(n===Ln)return s.FLOAT;if(n===si)return s.HALF_FLOAT;if(n===Wu)return s.ALPHA;if(n===$u)return s.RGB;if(n===bn)return s.RGBA;if(n===Xu)return s.LUMINANCE;if(n===qu)return s.LUMINANCE_ALPHA;if(n===vs)return s.DEPTH_COMPONENT;if(n===As)return s.DEPTH_STENCIL;if(n===ic)return s.RED;if(n===sc)return s.RED_INTEGER;if(n===ju)return s.RG;if(n===rc)return s.RG_INTEGER;if(n===ac)return s.RGBA_INTEGER;if(n===_a||n===Ma||n===ba||n===Sa)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cl||n===hl||n===ul||n===dl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fl||n===pl||n===ml)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fl||n===pl)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ml)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gl||n===vl||n===yl||n===xl||n===_l||n===Ml||n===bl||n===Sl||n===Tl||n===wl||n===El||n===Al||n===Rl||n===Cl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_l)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ml)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===El)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Al)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ta||n===Pl||n===Ll)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ta)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yu||n===Il||n===Dl||n===Nl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ta)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class ty extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mt extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ny={type:"move"};class To{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ny)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const iy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ry{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new It,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gt({vertexShader:iy,fragmentShader:sy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ay extends Os{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const v=new ry,g=t.getContextAttributes();let p=null,y=null;const x=[],_=[],A=new Q;let w=null;const C=new Yt;C.viewport=new st;const P=new Yt;P.viewport=new st;const S=[C,P],M=new ty;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=x[K];return ae===void 0&&(ae=new To,x[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=x[K];return ae===void 0&&(ae=new To,x[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=x[K];return ae===void 0&&(ae=new To,x[K]=ae),ae.getHandSpace()};function N(K){const ae=_.indexOf(K.inputSource);if(ae===-1)return;const we=x[ae];we!==void 0&&(we.update(K.inputSource,K.frame,c||a),we.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",G);for(let K=0;K<x.length;K++){const ae=_[K];ae!==null&&(_[K]=null,x[K].disconnect(ae))}I=null,B=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",F),i.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){const ae={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Dn(f.framebufferWidth,f.framebufferHeight,{format:bn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ae=null,we=null,ce=null;g.depth&&(ce=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=g.stencil?As:vs,we=g.stencil?Es:Bi);const Ie={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ie),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Dn(d.textureWidth,d.textureHeight,{format:bn,type:ai,depthTexture:new hd(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(K){for(let ae=0;ae<K.removed.length;ae++){const we=K.removed[ae],ce=_.indexOf(we);ce>=0&&(_[ce]=null,x[ce].disconnect(we))}for(let ae=0;ae<K.added.length;ae++){const we=K.added[ae];let ce=_.indexOf(we);if(ce===-1){for(let ke=0;ke<x.length;ke++)if(ke>=_.length){_.push(we),ce=ke;break}else if(_[ke]===null){_[ke]=we,ce=ke;break}if(ce===-1)break}const Ie=x[ce];Ie&&Ie.connect(we)}}const z=new E,Y=new E;function W(K,ae,we){z.setFromMatrixPosition(ae.matrixWorld),Y.setFromMatrixPosition(we.matrixWorld);const ce=z.distanceTo(Y),Ie=ae.projectionMatrix.elements,ke=we.projectionMatrix.elements,Oe=Ie[14]/(Ie[10]-1),tt=Ie[14]/(Ie[10]+1),ee=(Ie[9]+1)/Ie[5],re=(Ie[9]-1)/Ie[5],L=(Ie[8]-1)/Ie[0],Pe=(ke[8]+1)/ke[0],ie=Oe*L,be=Oe*Pe,he=ce/(-L+Pe),Ne=he*-L;if(ae.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ne),K.translateZ(he),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const _e=Oe+he,R=tt+he,b=ie-Ne,k=be+(ce-Ne),q=ee*tt/R*_e,te=re*tt/R*_e;K.projectionMatrix.makePerspective(b,k,q,te,_e,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function le(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ae=K.near,we=K.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(we=v.depthFar)),M.near=P.near=C.near=ae,M.far=P.far=C.far=we,(I!==M.near||B!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,B=M.far),C.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,M.layers.mask=C.layers.mask|P.layers.mask;const ce=K.parent,Ie=M.cameras;le(M,ce);for(let ke=0;ke<Ie.length;ke++)le(Ie[ke],ce);Ie.length===2?W(M,C,P):M.projectionMatrix.copy(C.projectionMatrix),me(K,M,ce)};function me(K,ae,we){we===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(we.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Rs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let xe=null;function De(K,ae){if(h=ae.getViewerPose(c||a),m=ae,h!==null){const we=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ce=!1;we.length!==M.cameras.length&&(M.cameras.length=0,ce=!0);for(let ke=0;ke<we.length;ke++){const Oe=we[ke];let tt=null;if(f!==null)tt=f.getViewport(Oe);else{const re=u.getViewSubImage(d,Oe);tt=re.viewport,ke===0&&(e.setRenderTargetTextures(y,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(y))}let ee=S[ke];ee===void 0&&(ee=new Yt,ee.layers.enable(ke),ee.viewport=new st,S[ke]=ee),ee.matrix.fromArray(Oe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Oe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(tt.x,tt.y,tt.width,tt.height),ke===0&&(M.matrix.copy(ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ce===!0&&M.cameras.push(ee)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const ke=u.getDepthInformation(we[0]);ke&&ke.isValid&&ke.texture&&v.init(e,ke,i.renderState)}}for(let we=0;we<x.length;we++){const ce=_[we],Ie=x[we];ce!==null&&Ie!==void 0&&Ie.update(ce,ae,c||a)}xe&&xe(K,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),m=null}const rt=new cd;rt.setAnimationLoop(De),this.setAnimationLoop=function(K){xe=K},this.dispose=function(){}}}const Ci=new $t,oy=new ze;function ly(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ad(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,y,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Qt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Qt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,_=y.envMapRotation;x&&(g.envMap.value=x,Ci.copy(_),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),g.envMapRotation.value.setFromMatrix4(oy.makeRotationFromEuler(Ci)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function cy(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const _=x.program;n.uniformBlockBinding(y,_)}function c(y,x){let _=i[y.id];_===void 0&&(m(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",g));const A=x.program;n.updateUBOMapping(y,A);const w=e.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){const x=u();y.__bindingPointIndex=x;const _=s.createBuffer(),A=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],_=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,C=_.length;w<C;w++){const P=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,M=P.length;S<M;S++){const I=P[S];if(f(I,w,S,A)===!0){const B=I.__offset,N=Array.isArray(I.value)?I.value:[I.value];let F=0;for(let G=0;G<N.length;G++){const z=N[G],Y=v(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,B+F,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,F),F+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,_,A){const w=y.value,C=x+"_"+_;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{const P=A[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return A[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function m(y){const x=y.uniforms;let _=0;const A=16;for(let C=0,P=x.length;C<P;C++){const S=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,I=S.length;M<I;M++){const B=S[M],N=Array.isArray(B.value)?B.value:[B.value];for(let F=0,G=N.length;F<G;F++){const z=N[F],Y=v(z),W=_%A,le=W%Y.boundary,me=W+le;_+=le,me!==0&&A-me<Y.storage&&(_+=A-me),B.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=Y.storage}}}const w=_%A;return w>0&&(_+=A-w),y.__size=_,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class hy{constructor(e={}){const{canvas:t=Qf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=bi,this.toneMappingExposure=1;const _=this;let A=!1,w=0,C=0,P=null,S=-1,M=null;const I=new st,B=new st;let N=null;const F=new ne(0);let G=0,z=t.width,Y=t.height,W=1,le=null,me=null;const xe=new st(0,0,z,Y),De=new st(0,0,z,Y);let rt=!1;const K=new lc;let ae=!1,we=!1;const ce=new ze,Ie=new ze,ke=new E,Oe=new st,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function re(){return P===null?W:1}let L=n;function Pe(T,U){return t.getContext(T,U)}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jl}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ge,!1),L===null){const U="webgl2";if(L=Pe(U,T),L===null)throw Pe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ie,be,he,Ne,_e,R,b,k,q,te,j,Ee,de,Me,Ze,se,Se,Ue,Fe,Te,Qe,We,ft,D;function fe(){ie=new mg(L),ie.init(),We=new ey(L,ie),be=new cg(L,ie,e,We),he=new Zv(L,ie),be.reverseDepthBuffer&&d&&he.buffers.depth.setReversed(!0),Ne=new yg(L),_e=new Ov,R=new Qv(L,ie,he,_e,be,We,Ne),b=new ug(_),k=new pg(_),q=new wp(L),ft=new og(L,q),te=new gg(L,q,Ne,ft),j=new _g(L,te,q,Ne),Fe=new xg(L,be,R),se=new hg(_e),Ee=new Uv(_,b,k,ie,be,ft,se),de=new ly(_,_e),Me=new kv,Ze=new Wv(ie),Ue=new ag(_,b,k,he,j,f,l),Se=new Yv(_,j,be),D=new cy(L,Ne,be,he),Te=new lg(L,ie,Ne),Qe=new vg(L,ie,Ne),Ne.programs=Ee.programs,_.capabilities=be,_.extensions=ie,_.properties=_e,_.renderLists=Me,_.shadowMap=Se,_.state=he,_.info=Ne}fe();const $=new ay(_,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=ie.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ie.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(z,Y,!1))},this.getSize=function(T){return T.set(z,Y)},this.setSize=function(T,U,H=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,Y=U,t.width=Math.floor(T*W),t.height=Math.floor(U*W),H===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(z*W,Y*W).floor()},this.setDrawingBufferSize=function(T,U,H){z=T,Y=U,W=H,t.width=Math.floor(T*H),t.height=Math.floor(U*H),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(xe)},this.setViewport=function(T,U,H,V){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,U,H,V),he.viewport(I.copy(xe).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(De)},this.setScissor=function(T,U,H,V){T.isVector4?De.set(T.x,T.y,T.z,T.w):De.set(T,U,H,V),he.scissor(B.copy(De).multiplyScalar(W).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(T){he.setScissorTest(rt=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){me=T},this.getClearColor=function(T){return T.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(T=!0,U=!0,H=!0){let V=0;if(T){let O=!1;if(P!==null){const oe=P.texture.format;O=oe===ac||oe===rc||oe===sc}if(O){const oe=P.texture.type,ve=oe===ai||oe===Bi||oe===yr||oe===Es||oe===tc||oe===nc,Ae=Ue.getClearColor(),Re=Ue.getClearAlpha(),Be=Ae.r,Ve=Ae.g,Ce=Ae.b;ve?(m[0]=Be,m[1]=Ve,m[2]=Ce,m[3]=Re,L.clearBufferuiv(L.COLOR,0,m)):(v[0]=Be,v[1]=Ve,v[2]=Ce,v[3]=Re,L.clearBufferiv(L.COLOR,0,v))}else V|=L.COLOR_BUFFER_BIT}U&&(V|=L.DEPTH_BUFFER_BIT),H&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Me.dispose(),Ze.dispose(),_e.dispose(),b.dispose(),k.dispose(),j.dispose(),ft.dispose(),D.dispose(),Ee.dispose(),$.dispose(),$.removeEventListener("sessionstart",Rc),$.removeEventListener("sessionend",Cc),Si.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=Ne.autoReset,U=Se.enabled,H=Se.autoUpdate,V=Se.needsUpdate,O=Se.type;fe(),Ne.autoReset=T,Se.enabled=U,Se.autoUpdate=H,Se.needsUpdate=V,Se.type=O}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function He(T){const U=T.target;U.removeEventListener("dispose",He),At(U)}function At(T){Ht(T),_e.remove(T)}function Ht(T){const U=_e.get(T).programs;U!==void 0&&(U.forEach(function(H){Ee.releaseProgram(H)}),T.isShaderMaterial&&Ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,H,V,O,oe){U===null&&(U=tt);const ve=O.isMesh&&O.matrixWorld.determinant()<0,Ae=Yd(T,U,H,V,O);he.setMaterial(V,ve);let Re=H.index,Be=1;if(V.wireframe===!0){if(Re=te.getWireframeAttribute(H),Re===void 0)return;Be=2}const Ve=H.drawRange,Ce=H.attributes.position;let nt=Ve.start*Be,pt=(Ve.start+Ve.count)*Be;oe!==null&&(nt=Math.max(nt,oe.start*Be),pt=Math.min(pt,(oe.start+oe.count)*Be)),Re!==null?(nt=Math.max(nt,0),pt=Math.min(pt,Re.count)):Ce!=null&&(nt=Math.max(nt,0),pt=Math.min(pt,Ce.count));const vt=pt-nt;if(vt<0||vt===1/0)return;ft.setup(O,V,Ae,H,Re);let tn,at=Te;if(Re!==null&&(tn=q.get(Re),at=Qe,at.setIndex(tn)),O.isMesh)V.wireframe===!0?(he.setLineWidth(V.wireframeLinewidth*re()),at.setMode(L.LINES)):at.setMode(L.TRIANGLES);else if(O.isLine){let Le=V.linewidth;Le===void 0&&(Le=1),he.setLineWidth(Le*re()),O.isLineSegments?at.setMode(L.LINES):O.isLineLoop?at.setMode(L.LINE_LOOP):at.setMode(L.LINE_STRIP)}else O.isPoints?at.setMode(L.POINTS):O.isSprite&&at.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)at.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))at.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Le=O._multiDrawStarts,Xn=O._multiDrawCounts,ot=O._multiDrawCount,En=Re?q.get(Re).bytesPerElement:1,Wi=_e.get(V).currentProgram.getUniforms();for(let an=0;an<ot;an++)Wi.setValue(L,"_gl_DrawID",an),at.render(Le[an]/En,Xn[an])}else if(O.isInstancedMesh)at.renderInstances(nt,vt,O.count);else if(H.isInstancedBufferGeometry){const Le=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Xn=Math.min(H.instanceCount,Le);at.renderInstances(nt,vt,Xn)}else at.render(nt,vt)};function lt(T,U,H){T.transparent===!0&&T.side===Bt&&T.forceSinglePass===!1?(T.side=Qt,T.needsUpdate=!0,Nr(T,U,H),T.side=Un,T.needsUpdate=!0,Nr(T,U,H),T.side=Bt):Nr(T,U,H)}this.compile=function(T,U,H=null){H===null&&(H=T),p=Ze.get(H),p.init(U),x.push(p),H.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==H&&T.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let ve=0;ve<oe.length;ve++){const Ae=oe[ve];lt(Ae,H,O),V.add(Ae)}else lt(oe,H,O),V.add(oe)}),x.pop(),p=null,V},this.compileAsync=function(T,U,H=null){const V=this.compile(T,U,H);return new Promise(O=>{function oe(){if(V.forEach(function(ve){_e.get(ve).currentProgram.isReady()&&V.delete(ve)}),V.size===0){O(T);return}setTimeout(oe,10)}ie.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let wn=null;function $n(T){wn&&wn(T)}function Rc(){Si.stop()}function Cc(){Si.start()}const Si=new cd;Si.setAnimationLoop($n),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(T){wn=T,$.setAnimationLoop(T),T===null?Si.stop():Si.start()},$.addEventListener("sessionstart",Rc),$.addEventListener("sessionend",Cc),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,U,P),p=Ze.get(T,x.length),p.init(U),x.push(p),Ie.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(Ie),we=this.localClippingEnabled,ae=se.init(this.clippingPlanes,we),g=Me.get(T,y.length),g.init(),y.push(g),$.enabled===!0&&$.isPresenting===!0){const oe=_.xr.getDepthSensingMesh();oe!==null&&Ya(oe,U,-1/0,_.sortObjects)}Ya(T,U,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(le,me),ee=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ee&&Ue.addToRenderList(g,T),this.info.render.frame++,ae===!0&&se.beginShadows();const H=p.state.shadowsArray;Se.render(H,T,U),ae===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,O=g.transmissive;if(p.setupLights(),U.isArrayCamera){const oe=U.cameras;if(O.length>0)for(let ve=0,Ae=oe.length;ve<Ae;ve++){const Re=oe[ve];Lc(V,O,T,Re)}ee&&Ue.render(T);for(let ve=0,Ae=oe.length;ve<Ae;ve++){const Re=oe[ve];Pc(g,T,Re,Re.viewport)}}else O.length>0&&Lc(V,O,T,U),ee&&Ue.render(T),Pc(g,T,U);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(_,T,U),ft.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],ae===!0&&se.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Ya(T,U,H,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){V&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ie);const ve=j.update(T),Ae=T.material;Ae.visible&&g.push(T,ve,Ae,H,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){const ve=j.update(T),Ae=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Oe.copy(ve.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ae)){const Re=ve.groups;for(let Be=0,Ve=Re.length;Be<Ve;Be++){const Ce=Re[Be],nt=Ae[Ce.materialIndex];nt&&nt.visible&&g.push(T,ve,nt,H,Oe.z,Ce)}}else Ae.visible&&g.push(T,ve,Ae,H,Oe.z,null)}}const oe=T.children;for(let ve=0,Ae=oe.length;ve<Ae;ve++)Ya(oe[ve],U,H,V)}function Pc(T,U,H,V){const O=T.opaque,oe=T.transmissive,ve=T.transparent;p.setupLightsView(H),ae===!0&&se.setGlobalState(_.clippingPlanes,H),V&&he.viewport(I.copy(V)),O.length>0&&Dr(O,U,H),oe.length>0&&Dr(oe,U,H),ve.length>0&&Dr(ve,U,H),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Lc(T,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Dn(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?si:ai,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const oe=p.state.transmissionRenderTarget[V.id],ve=V.viewport||I;oe.setSize(ve.z,ve.w);const Ae=_.getRenderTarget();_.setRenderTarget(oe),_.getClearColor(F),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),ee&&Ue.render(H);const Re=_.toneMapping;_.toneMapping=bi;const Be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),ae===!0&&se.setGlobalState(_.clippingPlanes,V),Dr(T,H,V),R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ce=0,nt=U.length;Ce<nt;Ce++){const pt=U[Ce],vt=pt.object,tn=pt.geometry,at=pt.material,Le=pt.group;if(at.side===Bt&&vt.layers.test(V.layers)){const Xn=at.side;at.side=Qt,at.needsUpdate=!0,Ic(vt,H,V,tn,at,Le),at.side=Xn,at.needsUpdate=!0,Ve=!0}}Ve===!0&&(R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe))}_.setRenderTarget(Ae),_.setClearColor(F,G),Be!==void 0&&(V.viewport=Be),_.toneMapping=Re}function Dr(T,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let O=0,oe=T.length;O<oe;O++){const ve=T[O],Ae=ve.object,Re=ve.geometry,Be=V===null?ve.material:V,Ve=ve.group;Ae.layers.test(H.layers)&&Ic(Ae,U,H,Re,Be,Ve)}}function Ic(T,U,H,V,O,oe){T.onBeforeRender(_,U,H,V,O,oe),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(_,U,H,V,T,oe),O.transparent===!0&&O.side===Bt&&O.forceSinglePass===!1?(O.side=Qt,O.needsUpdate=!0,_.renderBufferDirect(H,U,V,O,T,oe),O.side=Un,O.needsUpdate=!0,_.renderBufferDirect(H,U,V,O,T,oe),O.side=Bt):_.renderBufferDirect(H,U,V,O,T,oe),T.onAfterRender(_,U,H,V,O,oe)}function Nr(T,U,H){U.isScene!==!0&&(U=tt);const V=_e.get(T),O=p.state.lights,oe=p.state.shadowsArray,ve=O.state.version,Ae=Ee.getParameters(T,O.state,oe,U,H),Re=Ee.getProgramCacheKey(Ae);let Be=V.programs;V.environment=T.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(T.isMeshStandardMaterial?k:b).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",He),Be=new Map,V.programs=Be);let Ve=Be.get(Re);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===ve)return Nc(T,Ae),Ve}else Ae.uniforms=Ee.getUniforms(T),T.onBeforeCompile(Ae,_),Ve=Ee.acquireProgram(Ae,Re),Be.set(Re,Ve),V.uniforms=Ae.uniforms;const Ce=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ce.clippingPlanes=se.uniform),Nc(T,Ae),V.needsLights=Zd(T),V.lightsStateVersion=ve,V.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Ve,V.uniformsList=null,Ve}function Dc(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=wa.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Nc(T,U){const H=_e.get(T);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Yd(T,U,H,V,O){U.isScene!==!0&&(U=tt),R.resetTextureUnits();const oe=U.fog,ve=V.isMeshStandardMaterial?U.environment:null,Ae=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Xt,Re=(V.isMeshStandardMaterial?k:b).get(V.envMap||ve),Be=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ve=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!H.morphAttributes.position,nt=!!H.morphAttributes.normal,pt=!!H.morphAttributes.color;let vt=bi;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(vt=_.toneMapping);const tn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,at=tn!==void 0?tn.length:0,Le=_e.get(V),Xn=p.state.lights;if(ae===!0&&(we===!0||T!==M)){const mn=T===M&&V.id===S;se.setState(V,T,mn)}let ot=!1;V.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Xn.state.version||Le.outputColorSpace!==Ae||O.isBatchedMesh&&Le.batching===!1||!O.isBatchedMesh&&Le.batching===!0||O.isBatchedMesh&&Le.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Le.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Le.instancing===!1||!O.isInstancedMesh&&Le.instancing===!0||O.isSkinnedMesh&&Le.skinning===!1||!O.isSkinnedMesh&&Le.skinning===!0||O.isInstancedMesh&&Le.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Le.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Le.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Le.instancingMorph===!1&&O.morphTexture!==null||Le.envMap!==Re||V.fog===!0&&Le.fog!==oe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==se.numPlanes||Le.numIntersection!==se.numIntersection)||Le.vertexAlphas!==Be||Le.vertexTangents!==Ve||Le.morphTargets!==Ce||Le.morphNormals!==nt||Le.morphColors!==pt||Le.toneMapping!==vt||Le.morphTargetsCount!==at)&&(ot=!0):(ot=!0,Le.__version=V.version);let En=Le.currentProgram;ot===!0&&(En=Nr(V,U,O));let Wi=!1,an=!1,Vs=!1;const yt=En.getUniforms(),On=Le.uniforms;if(he.useProgram(En.program)&&(Wi=!0,an=!0,Vs=!0),V.id!==S&&(S=V.id,an=!0),Wi||M!==T){he.buffers.depth.getReversed()?(ce.copy(T.projectionMatrix),tp(ce),np(ce),yt.setValue(L,"projectionMatrix",ce)):yt.setValue(L,"projectionMatrix",T.projectionMatrix),yt.setValue(L,"viewMatrix",T.matrixWorldInverse);const ci=yt.map.cameraPosition;ci!==void 0&&ci.setValue(L,ke.setFromMatrixPosition(T.matrixWorld)),be.logarithmicDepthBuffer&&yt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&yt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,an=!0,Vs=!0)}if(O.isSkinnedMesh){yt.setOptional(L,O,"bindMatrix"),yt.setOptional(L,O,"bindMatrixInverse");const mn=O.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),yt.setValue(L,"boneTexture",mn.boneTexture,R))}O.isBatchedMesh&&(yt.setOptional(L,O,"batchingTexture"),yt.setValue(L,"batchingTexture",O._matricesTexture,R),yt.setOptional(L,O,"batchingIdTexture"),yt.setValue(L,"batchingIdTexture",O._indirectTexture,R),yt.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&yt.setValue(L,"batchingColorTexture",O._colorsTexture,R));const Gs=H.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&Fe.update(O,H,En),(an||Le.receiveShadow!==O.receiveShadow)&&(Le.receiveShadow=O.receiveShadow,yt.setValue(L,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(On.envMap.value=Re,On.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(On.envMapIntensity.value=U.environmentIntensity),an&&(yt.setValue(L,"toneMappingExposure",_.toneMappingExposure),Le.needsLights&&Kd(On,Vs),oe&&V.fog===!0&&de.refreshFogUniforms(On,oe),de.refreshMaterialUniforms(On,V,W,Y,p.state.transmissionRenderTarget[T.id]),wa.upload(L,Dc(Le),On,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(wa.upload(L,Dc(Le),On,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&yt.setValue(L,"center",O.center),yt.setValue(L,"modelViewMatrix",O.modelViewMatrix),yt.setValue(L,"normalMatrix",O.normalMatrix),yt.setValue(L,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const mn=V.uniformsGroups;for(let ci=0,hi=mn.length;ci<hi;ci++){const Uc=mn[ci];D.update(Uc,En),D.bind(Uc,En)}}return En}function Kd(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Zd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,U,H){_e.get(T.texture).__webglTexture=U,_e.get(T.depthTexture).__webglTexture=H;const V=_e.get(T);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const H=_e.get(T);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,H=0){P=T,w=U,C=H;let V=!0,O=null,oe=!1,ve=!1;if(T){const Re=_e.get(T);if(Re.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(Re.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Re.__hasExternalTextures)R.rebindTextures(T,_e.get(T.texture).__webglTexture,_e.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ce=T.depthTexture;if(Re.__boundDepthTexture!==Ce){if(Ce!==null&&_e.has(Ce)&&(T.width!==Ce.image.width||T.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ve=!0);const Ve=_e.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[U])?O=Ve[U][H]:O=Ve[U],oe=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?O=_e.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?O=Ve[H]:O=Ve,I.copy(T.viewport),B.copy(T.scissor),N=T.scissorTest}else I.copy(xe).multiplyScalar(W).floor(),B.copy(De).multiplyScalar(W).floor(),N=rt;if(he.bindFramebuffer(L.FRAMEBUFFER,O)&&V&&he.drawBuffers(T,O),he.viewport(I),he.scissor(B),he.setScissorTest(N),oe){const Re=_e.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Re.__webglTexture,H)}else if(ve){const Re=_e.get(T.texture),Be=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.__webglTexture,H||0,Be)}S=-1},this.readRenderTargetPixels=function(T,U,H,V,O,oe,ve){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){he.bindFramebuffer(L.FRAMEBUFFER,Ae);try{const Re=T.texture,Be=Re.format,Ve=Re.type;if(!be.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&H>=0&&H<=T.height-O&&L.readPixels(U,H,V,O,We.convert(Be),We.convert(Ve),oe)}finally{const Re=P!==null?_e.get(P).__webglFramebuffer:null;he.bindFramebuffer(L.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(T,U,H,V,O,oe,ve){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){const Re=T.texture,Be=Re.format,Ve=Re.type;if(!be.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-V&&H>=0&&H<=T.height-O){he.bindFramebuffer(L.FRAMEBUFFER,Ae);const Ce=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.bufferData(L.PIXEL_PACK_BUFFER,oe.byteLength,L.STREAM_READ),L.readPixels(U,H,V,O,We.convert(Be),We.convert(Ve),0);const nt=P!==null?_e.get(P).__webglFramebuffer:null;he.bindFramebuffer(L.FRAMEBUFFER,nt);const pt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ep(L,pt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,oe),L.deleteBuffer(Ce),L.deleteSync(pt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,H=0){T.isTexture!==!0&&(or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const V=Math.pow(2,-H),O=Math.floor(T.image.width*V),oe=Math.floor(T.image.height*V),ve=U!==null?U.x:0,Ae=U!==null?U.y:0;R.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,ve,Ae,O,oe),he.unbindTexture()},this.copyTextureToTexture=function(T,U,H=null,V=null,O=0){T.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1],U=arguments[2],O=arguments[3]||0,H=null);let oe,ve,Ae,Re,Be,Ve,Ce,nt,pt;const vt=T.isCompressedTexture?T.mipmaps[O]:T.image;H!==null?(oe=H.max.x-H.min.x,ve=H.max.y-H.min.y,Ae=H.isBox3?H.max.z-H.min.z:1,Re=H.min.x,Be=H.min.y,Ve=H.isBox3?H.min.z:0):(oe=vt.width,ve=vt.height,Ae=vt.depth||1,Re=0,Be=0,Ve=0),V!==null?(Ce=V.x,nt=V.y,pt=V.z):(Ce=0,nt=0,pt=0);const tn=We.convert(U.format),at=We.convert(U.type);let Le;U.isData3DTexture?(R.setTexture3D(U,0),Le=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Le=L.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Le=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Xn=L.getParameter(L.UNPACK_ROW_LENGTH),ot=L.getParameter(L.UNPACK_IMAGE_HEIGHT),En=L.getParameter(L.UNPACK_SKIP_PIXELS),Wi=L.getParameter(L.UNPACK_SKIP_ROWS),an=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,vt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Re),L.pixelStorei(L.UNPACK_SKIP_ROWS,Be),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve);const Vs=T.isDataArrayTexture||T.isData3DTexture,yt=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const On=_e.get(T),Gs=_e.get(U),mn=_e.get(On.__renderTarget),ci=_e.get(Gs.__renderTarget);he.bindFramebuffer(L.READ_FRAMEBUFFER,mn.__webglFramebuffer),he.bindFramebuffer(L.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let hi=0;hi<Ae;hi++)Vs&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_e.get(T).__webglTexture,O,Ve+hi),T.isDepthTexture?(yt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_e.get(U).__webglTexture,O,pt+hi),L.blitFramebuffer(Re,Be,oe,ve,Ce,nt,oe,ve,L.DEPTH_BUFFER_BIT,L.NEAREST)):yt?L.copyTexSubImage3D(Le,O,Ce,nt,pt+hi,Re,Be,oe,ve):L.copyTexSubImage2D(Le,O,Ce,nt,pt+hi,Re,Be,oe,ve);he.bindFramebuffer(L.READ_FRAMEBUFFER,null),he.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else yt?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Le,O,Ce,nt,pt,oe,ve,Ae,tn,at,vt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Le,O,Ce,nt,pt,oe,ve,Ae,tn,vt.data):L.texSubImage3D(Le,O,Ce,nt,pt,oe,ve,Ae,tn,at,vt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Ce,nt,oe,ve,tn,at,vt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Ce,nt,vt.width,vt.height,tn,vt.data):L.texSubImage2D(L.TEXTURE_2D,O,Ce,nt,oe,ve,tn,at,vt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Xn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot),L.pixelStorei(L.UNPACK_SKIP_PIXELS,En),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,an),O===0&&U.generateMipmaps&&L.generateMipmap(Le),he.unbindTexture()},this.copyTextureToTexture3D=function(T,U,H=null,V=null,O=0){return T.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,T=arguments[2],U=arguments[3],O=arguments[4]||0),or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,H,V,O)},this.initRenderTarget=function(T){_e.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),he.unbindTexture()},this.resetState=function(){w=0,C=0,P=null,he.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class hc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ne(e),this.density=t}clone(){return new hc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class md extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ol,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new E;class Sr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Kt extends Nn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let rs;const js=new E,as=new E,os=new E,ls=new Q,Ys=new Q,vd=new ze,na=new E,Ks=new E,ia=new E,Oh=new Q,wo=new Q,Fh=new Q;class Zt extends _t{constructor(e=new Kt){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gd(t,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new Sr(n,3,0,!1)),rs.setAttribute("uv",new Sr(n,2,3,!1))}this.geometry=rs,this.material=e,this.center=new Q(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),vd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-os.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;sa(na.set(-.5,-.5,0),os,a,as,i,r),sa(Ks.set(.5,-.5,0),os,a,as,i,r),sa(ia.set(.5,.5,0),os,a,as,i,r),Oh.set(0,0),wo.set(1,0),Fh.set(1,1);let o=e.ray.intersectTriangle(na,Ks,ia,!1,js);if(o===null&&(sa(Ks.set(-.5,.5,0),os,a,as,i,r),wo.set(0,1),o=e.ray.intersectTriangle(na,ia,Ks,!1,js),o===null))return;const l=e.ray.origin.distanceTo(js);l<e.near||l>e.far||t.push({distance:l,point:js.clone(),uv:_n.getInterpolation(js,na,Ks,ia,Oh,wo,Fh,new Q),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function sa(s,e,t,n,i,r){ls.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ys.x=r*ls.x-i*ls.y,Ys.y=i*ls.x+r*ls.y):Ys.copy(ls),s.copy(e),s.x+=Ys.x,s.y+=Ys.y,s.applyMatrix4(vd)}const kh=new E,Bh=new st,zh=new st,uy=new E,Hh=new ze,ra=new E,Eo=new Hn,Vh=new ze,Ao=new za;class dy extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bc,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ra),this.boundingBox.expandByPoint(ra)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ra),this.boundingSphere.expandByPoint(ra)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eo.copy(this.boundingSphere),Eo.applyMatrix4(i),e.ray.intersectsSphere(Eo)!==!1&&(Vh.copy(i).invert(),Ao.copy(e.ray).applyMatrix4(Vh),!(this.boundingBox!==null&&Ao.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ao)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Bh.fromBufferAttribute(i.attributes.skinIndex,e),zh.fromBufferAttribute(i.attributes.skinWeight,e),kh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=zh.getComponent(r);if(a!==0){const o=Bh.getComponent(r);Hh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(uy.copy(kh).applyMatrix4(Hh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class yd extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xd extends It{constructor(e=null,t=1,n=1,i,r,a,o,l,c=en,h=en,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gh=new ze,fy=new ze;class uc{constructor(e=[],t=[]){this.uuid=Sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:fy;Gh.multiplyMatrices(o,t[r]),Gh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new uc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new xd(t,e,e,bn,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new yd),this.bones.push(a),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Tr extends xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cs=new ze,Wh=new ze,aa=[],$h=new fn,py=new ze,Zs=new dt,Js=new Hn;class _d extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,py)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),$h.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union($h)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),Js.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),e.ray.intersectsSphere(Js)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,cs),Wh.multiplyMatrices(n,cs),Zs.matrixWorld=Wh,Zs.raycast(e,aa);for(let a=0,o=aa.length;a<o;a++){const l=aa[a];l.instanceId=r,l.object=this,t.push(l)}aa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xd(new Float32Array(i*this.count),i,this.count,ic,Ln));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Md extends Nn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ca=new E,Pa=new E,Xh=new ze,Qs=new za,oa=new Hn,Ro=new E,qh=new E;class dc extends _t{constructor(e=new bt,t=new Md){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ca.fromBufferAttribute(t,i-1),Pa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ca.distanceTo(Pa);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(i),oa.radius+=r,e.ray.intersectsSphere(oa)===!1)return;Xh.copy(i).invert(),Qs.copy(e.ray).applyMatrix4(Xh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=c){const p=h.getX(v),y=h.getX(v+1),x=la(this,e,Qs,l,p,y);x&&t.push(x)}if(this.isLineLoop){const v=h.getX(m-1),g=h.getX(f),p=la(this,e,Qs,l,v,g);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=c){const p=la(this,e,Qs,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=la(this,e,Qs,l,m-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function la(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(Ca.fromBufferAttribute(a,i),Pa.fromBufferAttribute(a,r),t.distanceSqToSegment(Ca,Pa,Ro,qh)>n)return;Ro.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ro);if(!(l<e.near||l>e.far))return{distance:l,point:qh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const jh=new E,Yh=new E;class my extends dc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)jh.fromBufferAttribute(t,i),Yh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+jh.distanceTo(Yh);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gy extends dc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class bd extends Nn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kh=new ze,Bl=new za,ca=new Hn,ha=new E;class fc extends _t{constructor(e=new bt,t=new bd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(i),ca.radius+=r,e.ray.intersectsSphere(ca)===!1)return;Kh.copy(i).invert(),Bl.copy(e.ray).applyMatrix4(Kh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,v=f;m<v;m++){const g=c.getX(m);ha.fromBufferAttribute(u,g),Zh(ha,g,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,v=f;m<v;m++)ha.fromBufferAttribute(u,m),Zh(ha,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zh(s,e,t,n,i,r,a){const o=Bl.distanceSqToPoint(s);if(o<t){const l=new E;Bl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Sd extends It{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new Q:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,i=[],r=[],a=[],o=new E,l=new ze;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new E)}r[0]=new E,a[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Lt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Lt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class pc extends Vn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Q){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class vy extends pc{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function mc(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const ua=new E,Co=new mc,Po=new mc,Lo=new mc;class yy extends Vn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(ua.subVectors(i[0],i[1]).add(i[0]),c=ua);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(ua.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ua),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Co.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,v,g),Po.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,v,g),Lo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Co.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Po.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Lo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Co.calc(l),Po.calc(l),Lo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Jh(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function xy(s,e){const t=1-s;return t*t*e}function _y(s,e){return 2*(1-s)*s*e}function My(s,e){return s*s*e}function dr(s,e,t,n){return xy(s,e)+_y(s,t)+My(s,n)}function by(s,e){const t=1-s;return t*t*t*e}function Sy(s,e){const t=1-s;return 3*t*t*s*e}function Ty(s,e){return 3*(1-s)*s*s*e}function wy(s,e){return s*s*s*e}function fr(s,e,t,n,i){return by(s,e)+Sy(s,t)+Ty(s,n)+wy(s,i)}class Td extends Vn{constructor(e=new Q,t=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Q){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fr(e,i.x,r.x,a.x,o.x),fr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ey extends Vn{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fr(e,i.x,r.x,a.x,o.x),fr(e,i.y,r.y,a.y,o.y),fr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wd extends Vn{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ay extends Vn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ed extends Vn{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(dr(e,i.x,r.x,a.x),dr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ry extends Vn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(dr(e,i.x,r.x,a.x),dr(e,i.y,r.y,a.y),dr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ad extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Jh(o,l.x,c.x,h.x,u.x),Jh(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Q().fromArray(i))}return this}}var zl=Object.freeze({__proto__:null,ArcCurve:vy,CatmullRomCurve3:yy,CubicBezierCurve:Td,CubicBezierCurve3:Ey,EllipseCurve:pc,LineCurve:wd,LineCurve3:Ay,QuadraticBezierCurve:Ed,QuadraticBezierCurve3:Ry,SplineCurve:Ad});class Cy extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new zl[i.type]().fromJSON(i))}return this}}class Qh extends Cy{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new wd(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Ed(this.currentPoint.clone(),new Q(e,t),new Q(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Td(this.currentPoint.clone(),new Q(e,t),new Q(n,i),new Q(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ad(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new pc(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class gc extends bt{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Lt(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new E,d=new Q,f=new E,m=new E,v=new E;let g=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(m)}for(let y=0;y<=t;y++){const x=n+y*h*i,_=Math.sin(x),A=Math.cos(x);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*_,u.y=e[w].y,u.z=e[w].x*A,a.push(u.x,u.y,u.z),d.x=y/t,d.y=w/(e.length-1),o.push(d.x,d.y);const C=l[3*w+0]*_,P=l[3*w+1],S=l[3*w+0]*A;c.push(C,P,S)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const _=x+y*e.length,A=_,w=_+e.length,C=_+e.length+1,P=_+1;r.push(A,w,P),r.push(C,P,w)}this.setIndex(r),this.setAttribute("position",new et(a,3)),this.setAttribute("uv",new et(o,2)),this.setAttribute("normal",new et(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.points,e.segments,e.phiStart,e.phiLength)}}class Ga extends bt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new E,h=new Q;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(o,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wa extends bt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const v=[],g=n/2;let p=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function y(){const _=new E,A=new E;let w=0;const C=(t-e)/n;for(let P=0;P<=r;P++){const S=[],M=P/r,I=M*(t-e)+e;for(let B=0;B<=i;B++){const N=B/i,F=N*l+o,G=Math.sin(F),z=Math.cos(F);A.x=I*G,A.y=-M*n+g,A.z=I*z,u.push(A.x,A.y,A.z),_.set(G,C,z).normalize(),d.push(_.x,_.y,_.z),f.push(N,1-M),S.push(m++)}v.push(S)}for(let P=0;P<i;P++)for(let S=0;S<r;S++){const M=v[S][P],I=v[S+1][P],B=v[S+1][P+1],N=v[S][P+1];(e>0||S!==0)&&(h.push(M,I,N),w+=3),(t>0||S!==r-1)&&(h.push(I,B,N),w+=3)}c.addGroup(p,w,0),p+=w}function x(_){const A=m,w=new Q,C=new E;let P=0;const S=_===!0?e:t,M=_===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;const I=m;for(let B=0;B<=i;B++){const F=B/i*l+o,G=Math.cos(F),z=Math.sin(F);C.x=S*z,C.y=g*M,C.z=S*G,u.push(C.x,C.y,C.z),d.push(0,M,0),w.x=G*.5+.5,w.y=z*.5*M+.5,f.push(w.x,w.y),m++}for(let B=0;B<i;B++){const N=A+B,F=I+B;_===!0?h.push(F,F+1,N):h.push(F+1,F,N),P+=3}c.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $a extends bt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new E,_=new E,A=new E;for(let w=0;w<t.length;w+=3)f(t[w+0],x),f(t[w+1],_),f(t[w+2],A),l(x,_,A,y)}function l(y,x,_,A){const w=A+1,C=[];for(let P=0;P<=w;P++){C[P]=[];const S=y.clone().lerp(_,P/w),M=x.clone().lerp(_,P/w),I=w-P;for(let B=0;B<=I;B++)B===0&&P===w?C[P][B]=S:C[P][B]=S.clone().lerp(M,B/I)}for(let P=0;P<w;P++)for(let S=0;S<2*(w-P)-1;S++){const M=Math.floor(S/2);S%2===0?(d(C[P][M+1]),d(C[P+1][M]),d(C[P][M])):(d(C[P][M+1]),d(C[P+1][M+1]),d(C[P+1][M]))}}function c(y){const x=new E;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(y),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){const y=new E;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const _=g(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;a.push(_,1-A)}m(),u()}function u(){for(let y=0;y<a.length;y+=6){const x=a[y+0],_=a[y+2],A=a[y+4],w=Math.max(x,_,A),C=Math.min(x,_,A);w>.9&&C<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){const _=y*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function m(){const y=new E,x=new E,_=new E,A=new E,w=new Q,C=new Q,P=new Q;for(let S=0,M=0;S<r.length;S+=9,M+=6){y.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),w.set(a[M+0],a[M+1]),C.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),A.copy(y).add(x).add(_).divideScalar(3);const I=g(A);v(w,M+0,y,I),v(C,M+2,x,I),v(P,M+4,_,I)}}function v(y,x,_,A){A<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=A/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.vertices,e.indices,e.radius,e.details)}}class Rd extends Qh{constructor(e){super(e),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Qh().fromJSON(i))}return this}}const Py={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Cd(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=Uy(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let m=t;m<i;m+=t)u=s[m],d=s[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return wr(r,a,t,o,l,f,0),a}};function Cd(s,e,t,n,i){let r,a;if(i===Xy(s,e,t,n)>0)for(r=e;r<t;r+=n)a=eu(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=eu(r,s[r],s[r+1],a);return a&&Xa(a,a.next)&&(Ar(a),a=a.next),a}function zi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Xa(t,t.next)||Et(t.prev,t,t.next)===0)){if(Ar(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&zy(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Iy(s,n,i,r):Ly(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Ar(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Dy(zi(s),e,t),wr(s,e,t,n,i,r,2)):a===2&&Ny(s,e,t,n,i,r):wr(zi(s),e,t,n,i,r,1);break}}}function Ly(s){const e=s.prev,t=s,n=s.next;if(Et(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&ps(i,o,r,l,a,c,m.x,m.y)&&Et(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Iy(s,e,t,n){const i=s.prev,r=s,a=s.next;if(Et(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,p=Hl(f,m,e,t,n),y=Hl(v,g,e,t,n);let x=s.prevZ,_=s.nextZ;for(;x&&x.z>=p&&_&&_.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&ps(o,h,l,u,c,d,x.x,x.y)&&Et(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&ps(o,h,l,u,c,d,_.x,_.y)&&Et(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&ps(o,h,l,u,c,d,x.x,x.y)&&Et(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&ps(o,h,l,u,c,d,_.x,_.y)&&Et(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Dy(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Xa(i,r)&&Pd(i,n,n.next,r)&&Er(i,r)&&Er(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ar(n),Ar(n.next),n=s=r),n=n.next}while(n!==s);return zi(n)}function Ny(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gy(a,o)){let l=Ld(a,o);a=zi(a,a.next),l=zi(l,l.next),wr(a,e,t,n,i,r,0),wr(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Uy(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Cd(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Vy(c));for(i.sort(Oy),r=0;r<i.length;r++)t=Fy(i[r],t);return t}function Oy(s,e){return s.x-e.x}function Fy(s,e){const t=ky(s,e);if(!t)return e;const n=Ld(t,s);return zi(n,n.next),zi(t,t.next)}function ky(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&ps(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Er(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&By(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function By(s,e){return Et(s.prev,s,e.prev)<0&&Et(e.next,s,s.next)<0}function zy(s,e,t,n){let i=s;do i.z===0&&(i.z=Hl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Hy(i)}function Hy(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function Hl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Vy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ps(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Gy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Wy(s,e)&&(Er(s,e)&&Er(e,s)&&$y(s,e)&&(Et(s.prev,s,e.prev)||Et(s,e.prev,e))||Xa(s,e)&&Et(s.prev,s,s.next)>0&&Et(e.prev,e,e.next)>0)}function Et(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Xa(s,e){return s.x===e.x&&s.y===e.y}function Pd(s,e,t,n){const i=fa(Et(s,e,t)),r=fa(Et(s,e,n)),a=fa(Et(t,n,s)),o=fa(Et(t,n,e));return!!(i!==r&&a!==o||i===0&&da(s,t,e)||r===0&&da(s,n,e)||a===0&&da(t,s,n)||o===0&&da(t,e,n))}function da(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function fa(s){return s>0?1:s<0?-1:0}function Wy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Pd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Er(s,e){return Et(s.prev,s,s.next)<0?Et(s,e,s.next)>=0&&Et(s,s.prev,e)>=0:Et(s,e,s.prev)<0||Et(s,s.next,e)<0}function $y(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Ld(s,e){const t=new Vl(s.i,s.x,s.y),n=new Vl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function eu(s,e,t,n){const i=new Vl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ar(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Vl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Xy(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class pr{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return pr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];tu(e),nu(n,e);let a=e.length;t.forEach(tu);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,nu(n,t[l]);const o=Py.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function tu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function nu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class vc extends bt{constructor(e=new Rd([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new et(i,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:qy;let x,_=!1,A,w,C,P;p&&(x=p.getSpacedPoints(h),_=!0,d=!1,A=p.computeFrenetFrames(h,!1),w=new E,C=new E,P=new E),d||(g=0,f=0,m=0,v=0);const S=o.extractPoints(c);let M=S.shape;const I=S.holes;if(!pr.isClockWise(M)){M=M.reverse();for(let ee=0,re=I.length;ee<re;ee++){const L=I[ee];pr.isClockWise(L)&&(I[ee]=L.reverse())}}const N=pr.triangulateShape(M,I),F=M;for(let ee=0,re=I.length;ee<re;ee++){const L=I[ee];M=M.concat(L)}function G(ee,re,L){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(re,L)}const z=M.length,Y=N.length;function W(ee,re,L){let Pe,ie,be;const he=ee.x-re.x,Ne=ee.y-re.y,_e=L.x-ee.x,R=L.y-ee.y,b=he*he+Ne*Ne,k=he*R-Ne*_e;if(Math.abs(k)>Number.EPSILON){const q=Math.sqrt(b),te=Math.sqrt(_e*_e+R*R),j=re.x-Ne/q,Ee=re.y+he/q,de=L.x-R/te,Me=L.y+_e/te,Ze=((de-j)*R-(Me-Ee)*_e)/(he*R-Ne*_e);Pe=j+he*Ze-ee.x,ie=Ee+Ne*Ze-ee.y;const se=Pe*Pe+ie*ie;if(se<=2)return new Q(Pe,ie);be=Math.sqrt(se/2)}else{let q=!1;he>Number.EPSILON?_e>Number.EPSILON&&(q=!0):he<-Number.EPSILON?_e<-Number.EPSILON&&(q=!0):Math.sign(Ne)===Math.sign(R)&&(q=!0),q?(Pe=-Ne,ie=he,be=Math.sqrt(b)):(Pe=he,ie=Ne,be=Math.sqrt(b/2))}return new Q(Pe/be,ie/be)}const le=[];for(let ee=0,re=F.length,L=re-1,Pe=ee+1;ee<re;ee++,L++,Pe++)L===re&&(L=0),Pe===re&&(Pe=0),le[ee]=W(F[ee],F[L],F[Pe]);const me=[];let xe,De=le.concat();for(let ee=0,re=I.length;ee<re;ee++){const L=I[ee];xe=[];for(let Pe=0,ie=L.length,be=ie-1,he=Pe+1;Pe<ie;Pe++,be++,he++)be===ie&&(be=0),he===ie&&(he=0),xe[Pe]=W(L[Pe],L[be],L[he]);me.push(xe),De=De.concat(xe)}for(let ee=0;ee<g;ee++){const re=ee/g,L=f*Math.cos(re*Math.PI/2),Pe=m*Math.sin(re*Math.PI/2)+v;for(let ie=0,be=F.length;ie<be;ie++){const he=G(F[ie],le[ie],Pe);ce(he.x,he.y,-L)}for(let ie=0,be=I.length;ie<be;ie++){const he=I[ie];xe=me[ie];for(let Ne=0,_e=he.length;Ne<_e;Ne++){const R=G(he[Ne],xe[Ne],Pe);ce(R.x,R.y,-L)}}}const rt=m+v;for(let ee=0;ee<z;ee++){const re=d?G(M[ee],De[ee],rt):M[ee];_?(C.copy(A.normals[0]).multiplyScalar(re.x),w.copy(A.binormals[0]).multiplyScalar(re.y),P.copy(x[0]).add(C).add(w),ce(P.x,P.y,P.z)):ce(re.x,re.y,0)}for(let ee=1;ee<=h;ee++)for(let re=0;re<z;re++){const L=d?G(M[re],De[re],rt):M[re];_?(C.copy(A.normals[ee]).multiplyScalar(L.x),w.copy(A.binormals[ee]).multiplyScalar(L.y),P.copy(x[ee]).add(C).add(w),ce(P.x,P.y,P.z)):ce(L.x,L.y,u/h*ee)}for(let ee=g-1;ee>=0;ee--){const re=ee/g,L=f*Math.cos(re*Math.PI/2),Pe=m*Math.sin(re*Math.PI/2)+v;for(let ie=0,be=F.length;ie<be;ie++){const he=G(F[ie],le[ie],Pe);ce(he.x,he.y,u+L)}for(let ie=0,be=I.length;ie<be;ie++){const he=I[ie];xe=me[ie];for(let Ne=0,_e=he.length;Ne<_e;Ne++){const R=G(he[Ne],xe[Ne],Pe);_?ce(R.x,R.y+x[h-1].y,x[h-1].x+L):ce(R.x,R.y,u+L)}}}K(),ae();function K(){const ee=i.length/3;if(d){let re=0,L=z*re;for(let Pe=0;Pe<Y;Pe++){const ie=N[Pe];Ie(ie[2]+L,ie[1]+L,ie[0]+L)}re=h+g*2,L=z*re;for(let Pe=0;Pe<Y;Pe++){const ie=N[Pe];Ie(ie[0]+L,ie[1]+L,ie[2]+L)}}else{for(let re=0;re<Y;re++){const L=N[re];Ie(L[2],L[1],L[0])}for(let re=0;re<Y;re++){const L=N[re];Ie(L[0]+z*h,L[1]+z*h,L[2]+z*h)}}n.addGroup(ee,i.length/3-ee,0)}function ae(){const ee=i.length/3;let re=0;we(F,re),re+=F.length;for(let L=0,Pe=I.length;L<Pe;L++){const ie=I[L];we(ie,re),re+=ie.length}n.addGroup(ee,i.length/3-ee,1)}function we(ee,re){let L=ee.length;for(;--L>=0;){const Pe=L;let ie=L-1;ie<0&&(ie=ee.length-1);for(let be=0,he=h+g*2;be<he;be++){const Ne=z*be,_e=z*(be+1),R=re+Pe+Ne,b=re+ie+Ne,k=re+ie+_e,q=re+Pe+_e;ke(R,b,k,q)}}}function ce(ee,re,L){l.push(ee),l.push(re),l.push(L)}function Ie(ee,re,L){Oe(ee),Oe(re),Oe(L);const Pe=i.length/3,ie=y.generateTopUV(n,i,Pe-3,Pe-2,Pe-1);tt(ie[0]),tt(ie[1]),tt(ie[2])}function ke(ee,re,L,Pe){Oe(ee),Oe(re),Oe(Pe),Oe(re),Oe(L),Oe(Pe);const ie=i.length/3,be=y.generateSideWallUV(n,i,ie-6,ie-3,ie-2,ie-1);tt(be[0]),tt(be[1]),tt(be[3]),tt(be[1]),tt(be[2]),tt(be[3])}function Oe(ee){i.push(l[ee*3+0]),i.push(l[ee*3+1]),i.push(l[ee*3+2])}function tt(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return jy(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new zl[i.type]().fromJSON(i)),new vc(n,e.options)}}const qy={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Q(r,a),new Q(o,l),new Q(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],v=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Q(a,1-l),new Q(c,1-u),new Q(d,1-m),new Q(v,1-p)]:[new Q(o,1-l),new Q(h,1-u),new Q(f,1-m),new Q(g,1-p)]}};function jy(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class yc extends $a{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yc(e.radius,e.detail)}}class xc extends $a{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xc(e.radius,e.detail)}}class Rr extends bt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new E,m=new Q;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){const p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<i;v++){const g=v*(n+1);for(let p=0;p<n;p++){const y=p+g,x=y,_=y+n+1,A=y+n+2,w=y+1;o.push(x,_,w),o.push(_,A,w)}}this.setIndex(o),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class kt extends bt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new E,d=new E,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let _=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){const w=A/t;u.x=-e*Math.cos(i+w*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+w*r)*Math.sin(a+x*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(w+_,1-x),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=h[p][y+1],_=h[p][y],A=h[p+1][y],w=h[p+1][y+1];(p!==0||a>0)&&f.push(x,_,w),(p!==n-1||l<Math.PI)&&f.push(_,A,w)}this.setIndex(f),this.setAttribute("position",new et(m,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zt extends bt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new E,u=new E,d=new E;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const v=m/i*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const v=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,y=(i+1)*f+m;a.push(v,g,y),a.push(g,p,y)}this.setIndex(a),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Yy extends gt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Bn extends Nn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zu,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gn extends Bn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function pa(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ky(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Zy(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function iu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Id(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Ir{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Jy extends Ir{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zc,endingEnd:zc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hc:r=e,o=2*t-n;break;case Vc:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hc:a=e,l=2*n-t;break;case Vc:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,y=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,x=(-1-f)*g+(1.5+f)*v+.5*m,_=f*g-f*v;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+y*a[c+A]+x*a[l+A]+_*a[u+A];return r}}class Qy extends Ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class ex extends Ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pa(t,this.TimeBufferType),this.values=pa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pa(e.times,Array),values:pa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ex(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xr:t=this.InterpolantFactoryMethodDiscrete;break;case _r:t=this.InterpolantFactoryMethodLinear;break;case Ka:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return _r;case this.InterpolantFactoryMethodSmooth:return Ka}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Ky(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ka,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const v=t[u+m];if(v!==t[d+m]||v!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=_r;class Bs extends Wn{constructor(e,t,n){super(e,t,n)}}Bs.prototype.ValueTypeName="bool";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=xr;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Dd extends Wn{}Dd.prototype.ValueTypeName="color";class Ps extends Wn{}Ps.prototype.ValueTypeName="number";class tx extends Ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Tn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Ls extends Wn{InterpolantFactoryMethodLinear(e){return new tx(this.times,this.values,this.getValueSize(),e)}}Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends Wn{constructor(e,t,n){super(e,t,n)}}zs.prototype.ValueTypeName="string";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=xr;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Is extends Wn{}Is.prototype.ValueTypeName="vector";class nx{constructor(e="",t=-1,n=[],i=Tf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(sx(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Wn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Zy(l);l=iu(l,1,h),c=iu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ps(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,v){if(f.length!==0){const g=[],p=[];Id(f,g,p,m),g.length!==0&&v.push(new u(d,g,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(const v in f){const g=[],p=[];for(let y=0;y!==d[m].morphTargets.length;++y){const x=d[m];g.push(x.time),p.push(x.morphTarget===v?1:0)}i.push(new Ps(".morphTargetInfluence["+v+"]",g,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(Is,f+".position",d,"pos",i),n(Ls,f+".quaternion",d,"rot",i),n(Is,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ix(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return Is;case"color":return Dd;case"quaternion":return Ls;case"bool":case"boolean":return Bs;case"string":return zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function sx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ix(s.type);if(s.times===void 0){const t=[],n=[];Id(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const _i={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class rx{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const ax=new rx;class Vi{constructor(e){this.manager=e!==void 0?e:ax,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Jn={};class ox extends Error{constructor(e,t){super(e),this.response=t}}class La extends Vi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=_i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Jn[e]!==void 0){Jn[e].push({onLoad:t,onProgress:n,onError:i});return}Jn[e]=[],Jn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Jn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let v=0;const g=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:_})=>{if(x)p.close();else{v+=_.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let w=0,C=h.length;w<C;w++){const P=h[w];P.onProgress&&P.onProgress(A)}p.enqueue(_),y()}},x=>{p.error(x)})}}});return new Response(g)}else throw new ox(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{_i.add(e,c);const h=Jn[e];delete Jn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Jn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Jn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class lx extends Vi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=_i.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Mr("img");function l(){h(),_i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class cx extends Vi{constructor(e){super(e)}load(e,t,n,i){const r=new It,a=new lx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class qa extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class hx extends qa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Io=new ze,su=new E,ru=new E;class _c{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lc,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;su.setFromMatrixPosition(e.matrixWorld),t.position.copy(su),ru.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ru),t.updateMatrixWorld(),Io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ux extends _c{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Rs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class dx extends qa{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ux}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const au=new ze,er=new E,Do=new E;class fx extends _c{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),er.setFromMatrixPosition(e.matrixWorld),n.position.copy(er),Do.copy(n.position),Do.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Do),n.updateMatrixWorld(),i.makeTranslation(-er.x,-er.y,-er.z),au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(au)}}class Nd extends qa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class px extends _c{constructor(){super(new Ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gl extends qa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new px}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class mx extends Vi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=_i.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return _i.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),_i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});_i.add(e,l),r.manager.itemStart(e)}}class gx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ou(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ou();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ou(){return performance.now()}const Mc="\\[\\]\\.:\\/",vx=new RegExp("["+Mc+"]","g"),bc="[^"+Mc+"]",yx="[^"+Mc.replace("\\.","")+"]",xx=/((?:WC+[\/:])*)/.source.replace("WC",bc),_x=/(WCOD+)?/.source.replace("WCOD",yx),Mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),Sx=new RegExp("^"+xx+_x+Mx+bx+"$"),Tx=["material","materials","bones","map"];class wx{constructor(e,t,n){const i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vx,"")}static parseTrackName(e){const t=Sx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Tx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=wx;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);function Ex(s,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count;let a=0;const o=Object.keys(s.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,x=o.length;y<x;y++){const _=o[y],A=s.attributes[_];l[_]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);const w=s.morphAttributes[_];w&&(c[_]||(c[_]=[]),w.forEach((C,P)=>{const S=new C.array.constructor(C.count*C.itemSize);c[_][P]=new C.constructor(S,C.itemSize,C.normalized)}))}const f=e*.5,m=Math.log10(1/e),v=Math.pow(10,m),g=f*v;for(let y=0;y<r;y++){const x=n?n.getX(y):y;let _="";for(let A=0,w=o.length;A<w;A++){const C=o[A],P=s.getAttribute(C),S=P.itemSize;for(let M=0;M<S;M++)_+=`${~~(P[u[M]](x)*v+g)},`}if(_ in t)h.push(t[_]);else{for(let A=0,w=o.length;A<w;A++){const C=o[A],P=s.getAttribute(C),S=s.morphAttributes[C],M=P.itemSize,I=l[C],B=c[C];for(let N=0;N<M;N++){const F=u[N],G=d[N];if(I[G](a,P[F](x)),S)for(let z=0,Y=S.length;z<Y;z++)B[z][G](a,S[z][F](x))}}t[_]=a,h.push(a),a++}}const p=s.clone();for(const y in s.attributes){const x=l[y];if(p.setAttribute(y,new x.constructor(x.array.slice(0,a*x.itemSize),x.itemSize,x.normalized)),y in c)for(let _=0;_<c[y].length;_++){const A=c[y][_];p.morphAttributes[y][_]=new A.constructor(A.array.slice(0,a*A.itemSize),A.itemSize,A.normalized)}}return p.setIndex(h),p}function lu(s,e){if(e===wf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ul||e===Ku){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Ul)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Ax extends Vi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ix(t)}),this.register(function(t){return new Dx(t)}),this.register(function(t){return new Vx(t)}),this.register(function(t){return new Gx(t)}),this.register(function(t){return new Wx(t)}),this.register(function(t){return new Ux(t)}),this.register(function(t){return new Ox(t)}),this.register(function(t){return new Fx(t)}),this.register(function(t){return new kx(t)}),this.register(function(t){return new Lx(t)}),this.register(function(t){return new Bx(t)}),this.register(function(t){return new Nx(t)}),this.register(function(t){return new Hx(t)}),this.register(function(t){return new zx(t)}),this.register(function(t){return new Cx(t)}),this.register(function(t){return new $x(t)}),this.register(function(t){return new Xx(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=mr.extractUrlBase(e);a=mr.resolveURL(c,this.path)}else a=mr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new La(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ud){try{a[Ke.KHR_BINARY_GLTF]=new qx(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new a_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:a[u]=new Px;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[u]=new jx(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[u]=new Yx;break;case Ke.KHR_MESH_QUANTIZATION:a[u]=new Kx;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Rx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Cx{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new ne(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Xt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Gl(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Nd(h),c.distance=u;break;case"spot":c=new dx(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ei(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Px{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return sn}extendParams(e,t,n){const i=[];e.color=new ne(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Xt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(i)}}class Lx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Ix{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Q(o,o)}return Promise.all(r)}}class Dx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Nx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Ux{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Xt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Tt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Ox{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Fx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ne().setRGB(o[0],o[1],o[2],Xt),Promise.all(r)}}class kx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Bx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ne().setRGB(o[0],o[1],o[2],Xt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Tt)),Promise.all(r)}}class zx{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Hx{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Vx{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Gx{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Wx{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class $x{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Xx{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==xn.TRIANGLES&&c.mode!==xn.TRIANGLE_STRIP&&c.mode!==xn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const v=new ze,g=new E,p=new Tn,y=new E(1,1,1),x=new _d(m.geometry,m.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),x.setMatrixAt(_,v.compose(g,p,y));for(const _ in l)if(_==="_COLOR_0"){const A=l[_];x.instanceColor=new Tr(A.array,A.itemSize,A.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,l[_]);_t.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Ud="glTF",tr=12,cu={JSON:1313821514,BIN:5130562};class qx{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,tr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ud)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-tr,r=new DataView(e,tr);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===cu.JSON){const c=new Uint8Array(e,tr+a,o);this.content=n.decode(c)}else if(l===cu.BIN){const c=tr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class jx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Wl[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Wl[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=xs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const v=f.attributes[m],g=l[m];g!==void 0&&(v.normalized=g)}u(f)},o,c,Xt,d)})})}}class Yx{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Kx{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class Od extends Ir{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,v=m-c,g=-2*f+3*d,p=f-d,y=1-g,x=p-d+u;for(let _=0;_!==o;_++){const A=a[v+_+o],w=a[v+_+l]*h,C=a[m+_+o],P=a[m+_]*h;r[_]=y*A+x*w+g*C+p*P}return r}}const Zx=new Tn;class Jx extends Od{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Zx.fromArray(r).normalize().toArray(r),r}}const xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hu={9728:en,9729:dn,9984:zu,9985:xa,9986:ar,9987:ti},uu={33071:xi,33648:Aa,10497:ws},No={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Qx={CUBICSPLINE:void 0,LINEAR:_r,STEP:xr},Uo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function e_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Bn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),s.DefaultMaterial}function Pi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ei(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function t_(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function n_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function i_(s){let e;const t=s.extensions&&s.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Oo(t.attributes):e=s.indices+":"+Oo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Oo(s.targets[n]);return e}function Oo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function $l(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function s_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const r_=new ze;class a_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Rx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new cx(this.options.manager):this.textureLoader=new mx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new La(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Pi(r,o,i),ei(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(mr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=No[i.type],o=xs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new xt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=No[i.type],c=xs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let v,g;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(y);x||(v=new c(o,p*f,i.count*f/h),x=new gd(v,f/h),t.cache.add(y,x)),g=new Sr(x,l,d%f/h,m)}else o===null?v=new c(i.count*l):v=new c(o,d,i.count*l),g=new xt(v,l,m);if(i.sparse!==void 0){const p=No.SCALAR,y=xs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,A=new y(a[1],x,i.sparse.count*p),w=new c(a[2],_,i.sparse.count*l);o!==null&&(g=new xt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,P=A.length;C<P;C++){const S=A[C];if(g.setX(S,w[C*l]),l>=2&&g.setY(S,w[C*l+1]),l>=3&&g.setZ(S,w[C*l+2]),l>=4&&g.setW(S,w[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=hu[d.magFilter]||dn,h.minFilter=hu[d.minFilter]||ti,h.wrapS=uu[d.wrapS]||ws,h.wrapT=uu[d.wrapT]||ws,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==en&&h.minFilter!==dn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(v){const g=new It(v);g.needsUpdate=!0,d(g)}),t.load(mr.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),ei(u,a),u.userData.mimeType=a.mimeType||s_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new bd,Nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Md,Nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Bn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){const u=i[Ke.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new ne(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Xt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Bt);const h=r.alphaMode||Uo.OPAQUE;if(h===Uo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Uo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==sn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Q(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==sn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==sn){const u=r.emissiveFactor;o.emissive=new ne().setRGB(u[0],u[1],u[2],Xt)}return r.emissiveTexture!==void 0&&a!==sn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),ei(u,r),t.associations.set(u,{materials:e}),r.extensions&&Pi(i,u,r),u})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return du(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=i_(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=du(new bt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?e_(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const v=h[f],g=a[f];let p;const y=c[f];if(g.mode===xn.TRIANGLES||g.mode===xn.TRIANGLE_STRIP||g.mode===xn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new dy(v,y):new dt(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===xn.TRIANGLE_STRIP?p.geometry=lu(p.geometry,Ku):g.mode===xn.TRIANGLE_FAN&&(p.geometry=lu(p.geometry,Ul));else if(g.mode===xn.LINES)p=new my(v,y);else if(g.mode===xn.LINE_STRIP)p=new dc(v,y);else if(g.mode===xn.LINE_LOOP)p=new gy(v,y);else if(g.mode===xn.POINTS)p=new fc(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&n_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ei(p,r),g.extensions&&Pi(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Pi(i,u[0],r),u[0];const d=new Mt;r.extensions&&Pi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(Jf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ha(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ei(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new ze;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new uc(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],v=f.target,g=v.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,y=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(m),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],v=u[3],g=u[4],p=[];for(let y=0,x=d.length;y<x;y++){const _=d[y],A=f[y],w=m[y],C=v[y],P=g[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const S=n._createAnimationTracks(_,A,w,C,P);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new nx(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,r_)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new yd:c.length>1?h=new Mt:c.length===1?h=c[0]:h=new _t,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ei(h,r),r.extensions&&Pi(n,h,r),r.matrix!==void 0){const u=new ze;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Mt;n.name&&(r.name=i.createUniqueName(n.name)),ei(r,n),n.extensions&&Pi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Nn||d instanceof It)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];vi[r.path]===vi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(vi[r.path]){case vi.weights:c=Ps;break;case vi.rotation:c=Ls;break;case vi.position:case vi.scale:c=Is;break;default:switch(n.itemSize){case 1:c=Ps;break;case 2:case 3:default:c=Is;break}break}const h=i.interpolation!==void 0?Qx[i.interpolation]:_r,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+vi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=$l(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ls?Jx:Od;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function o_(s,e,t){const n=e.attributes,i=new fn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),o.normalized){const h=$l(xs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new E,l=new E;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const v=$l(xs[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Hn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function du(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Wl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ye.workingColorSpace!==Xt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),ei(s,e),o_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?t_(s,e.targets,t):s})}const Fo=new WeakMap;class l_ extends Vi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new La(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Tt,n).catch(n)}decodeDracoFile(e,t,n,i,r=Xt,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Fo.has(e)){const l=Fo.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[r]={resolve:c,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Fo.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new bt;e.index&&t.setIndex(new xt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,a=i.array,o=i.itemSize,l=new xt(a,o);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Tt)return;const n=new ne;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),Ye.toWorkingColorSpace(n,Tt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new La(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=c_.toString(),a=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const a=r.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function c_(){let s,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),m=f.attributes.map(v=>v.array.buffer);f.index&&m.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},m)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{u.destroy(d)}});break}};function t(a,o,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const m=o.GetEncodedGeometryType(l);if(m===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(m===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const v={index:null,attributes:[]};for(const g in h){const p=self[u[g]];let y,x;if(c.useUniqueIDs)x=h[g],y=o.GetAttributeByUniqueId(d,x);else{if(x=o.GetAttributeId(d,a[h[g]]),x===-1)continue;y=o.GetAttribute(d,x)}const _=i(a,o,d,g,p,y);g==="color"&&(_.vertexColorSpace=c.vertexColorSpace),v.attributes.push(_)}return m===a.TRIANGULAR_MESH&&(v.index=n(a,o,d)),a.destroy(d),v}function n(a,o,l){const h=l.num_faces()*3,u=h*4,d=a._malloc(u);o.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function i(a,o,l,c,h,u){const d=u.num_components(),m=l.num_points()*d,v=m*h.BYTES_PER_ELEMENT,g=r(a,h),p=a._malloc(v);o.GetAttributeDataArrayForAllPoints(l,u,g,v,p);const y=new h(a.HEAPF32.buffer,p,m).slice();return a._free(p),{name:c,array:y,itemSize:d}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}function h_(s){let e=s>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class Ft{constructor(e){this.r=h_(e)}next(){return this.r()}range(e,t){return e+(t-e)*this.r()}int(e,t){return Math.floor(this.range(e,t+1))}pick(e){return e[Math.floor(this.r()*e.length)]}chance(e){return this.r()<e}shuffle(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(this.r()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}weighted(e){let t=0;for(const i in e)t+=e[i];let n=this.r()*t;for(const i in e)if(n-=e[i],n<=0)return i;return Object.keys(e)[0]}}const wt=(s,e,t)=>s<e?e:s>t?t:s,Fi=(s,e,t,n)=>s+(e-s)*(1-Math.exp(-t*n));function fu(s){for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s}const it=s=>Math.round(s).toLocaleString("en-US"),zn=[{id:"ferrite",name:"Ferrite Ore",base:16,kind:"ore",color:"#b9a48a"},{id:"ice",name:"Silicate Ice",base:22,kind:"ore",color:"#9fd8ea"},{id:"cobalt",name:"Cobaltine",base:48,kind:"ore",color:"#5a7fe0"},{id:"helion",name:"Helion Gas",base:62,kind:"ore",color:"#f2b85a"},{id:"lumenite",name:"Lumenite",base:150,kind:"ore",color:"#c8f56a"},{id:"food",name:"Food Packs",base:28,kind:"good",color:"#e8c070"},{id:"medical",name:"Medical Gel",base:80,kind:"good",color:"#ef8a8a"},{id:"parts",name:"Machine Parts",base:105,kind:"good",color:"#b0b8c4"},{id:"data",name:"Data Cores",base:180,kind:"good",color:"#7fd6ff"},{id:"luxury",name:"Luxury Crystal",base:300,kind:"good",color:"#e7a6ff"}],Xe=Object.fromEntries(zn.map(s=>[s.id,s])),Mn={agricultural:{name:"Agricultural",danger:.1,mult:{ferrite:1.05,ice:1.4,cobalt:1,helion:1.05,lumenite:1.1,food:.55,medical:.85,parts:1.3,data:1.15,luxury:1}},mining:{name:"Mining",danger:.11,mult:{ferrite:.7,ice:.85,cobalt:.72,helion:.95,lumenite:.9,food:1.35,medical:1.3,parts:1.2,data:1.1,luxury:1.2}},industrial:{name:"Industrial",danger:.11,mult:{ferrite:1.35,ice:1.1,cobalt:1.4,helion:1.25,lumenite:1.2,food:1.2,medical:1.05,parts:.62,data:1,luxury:1.1}},hightech:{name:"High-Tech",danger:.12,mult:{ferrite:1.1,ice:1.05,cobalt:1.3,helion:1.4,lumenite:1.5,food:1.15,medical:.7,parts:1.1,data:.6,luxury:.9}},frontier:{name:"Frontier",danger:.15,mult:{ferrite:.9,ice:1,cobalt:.95,helion:.8,lumenite:1,food:1.4,medical:1.5,parts:1.35,data:1.25,luxury:1.45}}},St={wren:{name:"Wren",cls:"Shuttle",price:0,hull:110,shield:1,cargo:24,speed:72,turn:1.7,hard:1,energy:1,msl:0,priceMul:1,len:9,cam:22,desc:"Nimble starter shuttle. Small hold, light frame."},mule:{name:"Mule",cls:"Freighter",price:14e3,hull:260,shield:1.3,cargo:90,speed:58,turn:1.05,hard:1,energy:1.2,msl:0,priceMul:1.5,len:22,cam:42,desc:"Container hauler. Nearly 4× the hold of a Wren. Slow to turn."},kestrel:{name:"Kestrel",cls:"Striker",price:28e3,hull:220,shield:1.9,cargo:32,speed:88,turn:2.1,hard:2,energy:1.4,msl:2,priceMul:1.8,len:15,cam:30,desc:"Twin beam hardpoints, extra missile bays, fast barrier. Built to hunt outlaws."},bastion:{name:"Bastion",cls:"Capital Warden",price:11e4,hull:950,shield:3.6,cargo:220,speed:50,turn:.75,hard:3,energy:2.2,msl:4,priceMul:3.2,len:54,cam:82,desc:"Capital-class warden. Triple beam arrays, massive barrier and hold."}},u_=["wren","mule","kestrel","bastion"],ki={engine:{name:"Ion Engine",desc:"Top speed & handling",v:[0,.18,.36,.6],price:[0,1200,3800,9500]},cargo:{name:"Cargo Pods",desc:"Hold capacity",v:[0,.3,.65,1.1],price:[0,1500,4500,11e3]},barrier:{name:"Energy Barrier",desc:"Shield capacity & regen",cap:[40,80,135,210],regen:[6,10,15,22],price:[0,1400,4200,10500]},beam:{name:"Beam Array",desc:"Beam damage & range",dps:[10,17,27,40],range:[230,270,310,360],price:[0,1600,4800,12e3]},missile:{name:"Missile Rack",desc:"Homing missiles (restock at stations)",cap:[0,4,6,8],dmg:[0,70,95,130],price:[0,2e3,5200,12500]},mining:{name:"Mining Laser",desc:"Extraction rate, reach, rare finds",rate:[1.2,2,3,4.4],range:[80,95,115,135],rare:[0,.02,.08,.15],price:[0,1e3,3200,8e3]},sensors:{name:"Sensor Suite",desc:"Radar range, cargo scans, early warning",range:[1400,2e3,2800,3800],price:[0,900,2800,7e3]},hull:{name:"Hull Plating",desc:"Structural integrity",mul:[1,1.35,1.75,2.25],price:[0,1300,4e3,1e4]},reactor:{name:"Reactor Core",desc:"Energy pool & recharge",cap:[100,140,190,260],regen:[12,16,21,28],price:[0,1100,3500,8800]}},Sc=["engine","cargo","barrier","beam","missile","mining","sensors","hull","reactor"];function Ia(){const s={};for(const e of Sc)s[e]=0;return s}function Cr(s,e){const t=St[s],n=ki,i=n.engine.v[e.engine];return{speed:t.speed*(1+i),turn:t.turn*(1+.55*i),cargo:Math.round(t.cargo*(1+n.cargo.v[e.cargo])),shield:Math.round(n.barrier.cap[e.barrier]*t.shield),shieldRegen:n.barrier.regen[e.barrier]*t.shield,hull:Math.round(t.hull*n.hull.mul[e.hull]),dps:n.beam.dps[e.beam]*t.hard,beamRange:n.beam.range[e.beam],hard:t.hard,mslCap:e.missile>0?n.missile.cap[e.missile]+t.msl:0,mslDmg:n.missile.dmg[e.missile],mineRate:n.mining.rate[e.mining]*(s==="mule"?1.25:s==="bastion"?1.5:1),mineRange:n.mining.range[e.mining]+t.len*.6,rare:n.mining.rare[e.mining],sensor:n.sensors.range[e.sensors],sensorLvl:e.sensors,energy:Math.round(n.reactor.cap[e.reactor]*t.energy),energyRegen:n.reactor.regen[e.reactor]*t.energy}}function pu(s,e,t){return Math.round(ki[e].price[t]*St[s].priceMul/10)*10}function mu(s,e,t){const n=Cr(t,{...Ia(),[s]:e});switch(s){case"engine":return`${Math.round(n.speed)} m/s`;case"cargo":return`${n.cargo} units`;case"barrier":return`${n.shield} cap · ${n.shieldRegen.toFixed(0)}/s`;case"beam":return`${n.dps} dps · ${n.beamRange}m`;case"missile":return e===0?"none":`${n.mslCap} × ${n.mslDmg} dmg`;case"mining":return`${n.mineRate.toFixed(1)} u/s${n.rare?` · ${Math.round(n.rare*100)}% rare`:""}`;case"sensors":return`${n.sensor}m${e>=1?" · scan":""}${e>=2?" · warn":""}`;case"hull":return`${n.hull} hp`;case"reactor":return`${n.energy} · ${n.energyRegen.toFixed(0)}/s`}return""}const d_=["Haven","Corvane","Ishtar Reach","Meridian","Tollan","Vesper Gate","Kairo","Ostara","Halcyon Drift","Novaline","Pellucid","Ashfall","Lyra Shoal","Brightwater"],f_=["Anchor","Lantern","Hearth","Keystone","Beacon","Quay","Harbor","Waypoint","Spindle","Cradle","Bastille","Atrium"],Ds=["Patient Ox","Silver Wake","Long Haul","Morning Rain","Quiet Dividend","Saffron Sky","Iron Lullaby","Kind Margin","Far Errand","Tin Lantern"],Ns=["Red Jackal","Ash Viper","Grim Tally","Black Ledger","Rust Fang","Hollow Spur","Cinder Kite"],ko=240,p_=[{name:"Yellow dwarf",color:[1,.86,.6],glow:[1,.7,.35],radius:[480,600]},{name:"Orange dwarf",color:[1,.62,.32],glow:[1,.45,.2],radius:[420,540]},{name:"Blue-white",color:[.75,.86,1],glow:[.45,.65,1],radius:[560,700]},{name:"Red dwarf",color:[1,.42,.3],glow:[1,.28,.18],radius:[360,460]}],m_=[[[.1,.22,.45],[.55,.2,.45]],[[.06,.3,.38],[.6,.35,.18]],[[.22,.1,.4],[.12,.4,.55]],[[.3,.12,.16],[.2,.25,.55]],[[.08,.18,.3],[.35,.55,.5]]],g_={rocky:[[[.36,.3,.26],[.55,.47,.38],[.75,.7,.62]],[[.42,.22,.16],[.62,.36,.24],[.82,.62,.45]]],desert:[[[.62,.42,.24],[.8,.6,.36],[.92,.82,.62]]],ice:[[[.55,.68,.8],[.78,.88,.95],[.97,.98,1]]],ocean:[[[.05,.2,.42],[.22,.42,.22],[.55,.5,.36]],[[.04,.24,.38],[.3,.5,.3],[.8,.8,.78]]],gas:[[[.82,.62,.4],[.62,.4,.28],[.95,.86,.72]],[[.4,.55,.78],[.22,.32,.6],[.85,.9,.98]],[[.7,.52,.7],[.4,.3,.55],[.92,.8,.86]]]},v_={rocky:[.55,.7,1],desert:[1,.7,.45],ice:[.6,.85,1],ocean:[.35,.65,1],gas:[.9,.75,.6]},y_={rocky:"cobalt",desert:"ferrite",ice:"ice",ocean:"cobalt",gas:"helion"};function gr(s){const e=new Ft(s),t=9,n=[];let i=0;for(;n.length<t&&i++<5e3;){const g={x:e.range(60,940),y:e.range(60,560)};n.every(p=>Math.hypot(g.x-p.x,g.y-p.y)>175)&&n.push(g)}const r=e.shuffle(d_.slice()),a=e.shuffle(f_.slice());let o=0,l=1e9;n.forEach((g,p)=>{const y=Math.hypot(g.x-500,g.y-310);y<l&&(l=y,o=p)});const c=e.shuffle(["mining","industrial","hightech","frontier","mining","industrial","hightech","frontier"]),h=n.map((g,p)=>{const y=p===o?"agricultural":c.pop()||"frontier";return{id:p,name:p===o?"Haven":r.filter(x=>x!=="Haven")[p],x:g.x,y:g.y,eco:y,danger:Mn[y].danger+(y==="frontier"?0:e.range(0,.02)),seed:e.int(1,2**30),links:[],station:a[p%a.length]}}),u=new Set([0]),d=(g,p)=>{h[g].links.includes(p)||(h[g].links.push(p),h[p].links.push(g))},f=(g,p)=>Math.hypot(h[g].x-h[p].x,h[g].y-h[p].y);for(;u.size<t;){let g=1e9,p=-1,y=-1;for(const x of u)for(let _=0;_<t;_++)!u.has(_)&&f(x,_)<g&&(g=f(x,_),p=x,y=_);d(p,y),u.add(y)}for(let g=0;g<t;g++){const p=[...Array(t).keys()].filter(y=>y!==g).sort((y,x)=>f(g,y)-f(g,x));for(const y of p.slice(0,3))h[g].links.length>=3||h[y].links.length>=4||!h[g].links.includes(y)&&f(g,y)<330&&e.chance(.55)&&d(g,y)}const m={};h.forEach(g=>m[g.eco]=(m[g.eco]||0)+1);const v=h.find(g=>g.id!==o&&!h[o].links.includes(g.id)&&m[g.eco]>1&&g.eco!=="frontier");return v&&(v.eco="agricultural",v.danger=Mn.agricultural.danger+e.range(0,.02)),{seed:s,systems:h,startId:o}}function Bo(s,e,t){return e.every(n=>Math.hypot(s[0]-n.pos[0],s[2]-n.pos[2])>t+(n.r||0))}function Fd(s,e){const t=new Ft(s.seed),n=t.pick(p_),i={type:n.name,color:n.color,glow:n.glow,radius:t.range(...n.radius)},r=t.pick(m_),a=[{pos:[0,0,0],r:i.radius+900}],o=t.int(2,4),l=[];let c=2e3;for(let y=0;y<o;y++){c+=t.range(900,1600);const x=t.weighted(y===0?{rocky:3,desert:3,ocean:1}:{rocky:2,desert:1,ice:2,ocean:2,gas:3}),_=x==="gas"?t.range(560,820):t.range(220,420),A=t.range(0,Math.PI*2),w=[Math.cos(A)*c,t.range(-120,120),Math.sin(A)*c],C=t.pick(g_[x]);l.push({type:x,radius:_,pos:w,pal:C,atmo:v_[x],seed:t.range(0,100),spin:t.range(.004,.012)*(t.chance(.5)?1:-1),cloud:x==="gas"?0:x==="ocean"?.75:x==="desert"?.12:t.range(.2,.5),ring:x==="gas"&&t.chance(.6),name:`${s.name} ${["I","II","III","IV","V"][y]}`,depositOre:y_[x]}),a.push({pos:w,r:_+500})}const h=l[Math.min(1,l.length-1)];let u=null;for(let y=0;y<60&&!u;y++){const x=t.range(0,Math.PI*2),_=h.radius+t.range(700,1100),A=[h.pos[0]+Math.cos(x)*_,t.range(-40,40),h.pos[2]+Math.sin(x)*_];Bo(A,a,300)&&(u={pos:A,name:`${s.station} Station`})}u||(u={pos:[h.pos[0]+h.radius+900,0,h.pos[2]],name:`${s.station} Station`}),a.push({pos:u.pos,r:400});const d=s.links.map(y=>{const x=e.systems[y],_=x.x-s.x,A=x.y-s.y,w=Math.hypot(_,A)||1,C=8200+t.range(-300,300),P=[_/w*C,t.range(-100,100),A/w*C];return a.push({pos:P,r:400}),{to:y,pos:P,name:`Gate → ${x.name}`}}),f=s.eco==="mining"?3:t.int(1,2),m=[],v={mining:{ferrite:3,cobalt:3,ice:1},industrial:{ferrite:3,ice:1},agricultural:{ice:3,ferrite:2},hightech:{cobalt:2,ice:2,ferrite:1},frontier:{ferrite:2,cobalt:2,ice:1}}[s.eco];for(let y=0,x=0;y<f&&x<300;x++){const _=t.range(0,Math.PI*2),A=t.range(2400,7200),w=[Math.cos(_)*A,t.range(-80,80),Math.sin(_)*A],C=t.range(380,560);if(!Bo(w,a,C+300))continue;const P=t.weighted(v),S=t.pick(["ferrite","ice","cobalt"].filter(M=>M!==P));m.push({pos:w,radius:C,count:t.int(110,160),primary:P,secondary:S,lumenite:s.eco==="mining"||s.eco==="frontier"?.06:.03,seed:t.int(1,1e9),name:`${["Kessel","Drift","Tumble","Scree","Gravel","Shard"][t.int(0,5)]} Field`}),a.push({pos:w,r:C}),y++}const g=t.int(1,2),p=[];for(let y=0,x=0;y<g&&x<200;x++){const _=t.range(0,Math.PI*2),A=t.range(2600,7600),w=[Math.cos(_)*A,t.range(-120,120),Math.sin(_)*A];Bo(w,a,300)&&(p.push({pos:w,seed:t.int(1,1e9),name:t.pick(["Wreck of the Calloway","Hulk “Marigold”","Derelict Ore Barge","Abandoned Survey Probe","Gutted Courier","Old Relay Hulk"])}),a.push({pos:w,r:200}),y++)}return{id:s.id,name:s.name,eco:s.eco,star:i,nebula:r,planets:l,station:u,gates:d,fields:m,derelicts:p}}const Gi=`
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
`,pn={uTime:{value:0}};function Fn({color:s=15265007,metalness:e=.35,roughness:t=.38,panel:n=.55,lineDark:i=.45,envMapIntensity:r=1}={}){const a=new Bn({color:s,metalness:e,roughness:t,envMapIntensity:r});return a.userData.panel=n,a.onBeforeCompile=o=>{o.uniforms.uPanel={value:n},o.uniforms.uLineDark={value:i},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vObjPos; varying vec3 vObjN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vObjPos = position; vObjN = normal;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vObjPos; varying vec3 vObjN; uniform float uPanel; uniform float uLineDark;
float h13(vec3 p){ p=fract(p*0.1031); p+=dot(p,p.zyx+31.32); return fract((p.x+p.y)*p.z); }
float panelLine(vec2 q, out vec2 cell){ cell=floor(q); vec2 f=abs(fract(q)-0.5); float e=0.5-max(f.x,f.y); return 1.0-smoothstep(0.0,0.035,e); }
`).replace("#include <color_fragment>",`#include <color_fragment>
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
`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = clamp(roughnessFactor + (panelRough-0.5)*0.22 + line*0.25, 0.14, 1.0);
`)},a.customProgramCacheKey=()=>"hull"+n,a}function Li(s=5826288,e=2.2){const t=new Bn({color:659220,emissive:s,emissiveIntensity:e,roughness:.4,metalness:.2});return t.onBeforeCompile=n=>{n.uniforms.uTime=pn.uTime,n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= 0.82 + 0.18*sin(uTime*2.4 + vViewPosition.z*0.05);`)},t.customProgramCacheKey=()=>"trim",t}function x_(s=new ne(.35,.9,1)){return new gt({uniforms:{uTime:pn.uTime,uColor:{value:s},uStrength:{value:0},uFlash:{value:0},uHitDir:{value:[new E(1,0,0),new E(1,0,0),new E(1,0,0),new E(1,0,0)]},uHitAge:{value:[9,9,9,9]}},vertexShader:`
      varying vec3 vN; varying vec3 vV; varying vec3 vLocal; varying vec2 vUv;
      void main(){
        vLocal = normalize(position); vUv = uv;
        vec4 w = modelMatrix*vec4(position,1.0);
        vN = normalize(mat3(modelMatrix)*normal);
        vV = normalize(cameraPosition - w.xyz);
        gl_Position = projectionMatrix*viewMatrix*w;
      }`,fragmentShader:`
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
      }`,transparent:!0,depthWrite:!1,blending:mt,side:Un})}function __(s){const e=s.type==="gas"?1:s.type==="ocean"?2:0;return new gt({uniforms:{uTime:pn.uTime,uSun:{value:new E},uA:{value:new ne(...s.pal[0])},uB:{value:new ne(...s.pal[1])},uC:{value:new ne(...s.pal[2])},uAtmo:{value:new ne(...s.atmo)},uSeed:{value:s.seed},uType:{value:e},uCloud:{value:s.cloud},uIce:{value:s.type==="ice"?0:1},uSunCol:{value:new ne(1,.95,.88)}},vertexShader:`
      varying vec3 vN; varying vec3 vObj; varying vec3 vW;
      void main(){ vObj = normalize(position); vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:Gi+`
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
      }`})}function M_(s,e){return new gt({uniforms:{uSun:e,uColor:{value:new ne(...s)}},vertexShader:"varying vec3 vN; varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW=w.xyz; vN=normalize(mat3(modelMatrix)*normal); gl_Position=projectionMatrix*viewMatrix*w; }",fragmentShader:`
      uniform vec3 uSun, uColor; varying vec3 vN; varying vec3 vW;
      void main(){
        vec3 N=normalize(vN); vec3 V=normalize(cameraPosition-vW); vec3 L=normalize(uSun-vW);
        float f = 1.0 - abs(dot(V,N));
        float glow = pow(f, 4.0)*1.4 + pow(f, 12.0)*1.2;
        float lit = smoothstep(-0.45, 0.6, dot(N,L));
        float a = glow*lit;
        gl_FragColor = vec4(uColor*a*1.6, a);
      }`,transparent:!0,depthWrite:!1,blending:mt,side:Un})}function b_(s,e){return new gt({uniforms:{uA:{value:new ne(...s)},uB:{value:new ne(...e)}},vertexShader:"varying vec2 vUv; varying vec3 vP; void main(){ vUv=uv; vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:Gi+`uniform vec3 uA,uB; varying vec2 vUv; varying vec3 vP;
      void main(){ float r = length(vP.xy); float t = fract(r*0.004);
        float bands = 0.5+0.5*sin(r*0.09)+0.3*sin(r*0.31);
        float n = snoise(vec3(r*0.02,0.0,0.0));
        float a = smoothstep(0.0,0.15,vUv.x)*smoothstep(1.0,0.85,vUv.x)*(0.25+0.35*bands+0.2*n);
        gl_FragColor = vec4(mix(uA,uB,bands)*0.8, clamp(a,0.0,0.75)); }`,transparent:!0,depthWrite:!1,side:Bt})}function S_(s,e){return new gt({uniforms:{uTime:pn.uTime,uCol:{value:new ne(...s)},uGlow:{value:new ne(...e)}},vertexShader:"varying vec3 vObj; varying vec3 vN; varying vec3 vW; void main(){ vObj=normalize(position); vec4 w=modelMatrix*vec4(position,1.0); vW=w.xyz; vN=normalize(mat3(modelMatrix)*normal); gl_Position=projectionMatrix*viewMatrix*w; }",fragmentShader:Gi+`uniform float uTime; uniform vec3 uCol,uGlow; varying vec3 vObj; varying vec3 vN; varying vec3 vW;
      void main(){ float t=uTime*0.05;
        float g = fbm(vObj*6.0 + vec3(t,t*0.7,-t));
        float g2 = fbm3(vObj*18.0 - vec3(t*2.0));
        float f = 1.0-abs(dot(normalize(vN), normalize(cameraPosition-vW)));
        vec3 c = mix(uGlow, uCol, 0.55+0.45*g) * (2.4 + 0.8*g2) + uCol*pow(f,2.0)*1.5;
        gl_FragColor = vec4(c, 1.0); }`})}function gu(s,e,t=0){return new gt({uniforms:{uA:{value:new ne(...s)},uB:{value:new ne(...e)},uSeed:{value:t},uIntensity:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:Gi+`uniform vec3 uA,uB; uniform float uSeed, uIntensity; varying vec3 vDir;
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
      }`,side:Qt,depthWrite:!1,depthTest:!0})}function T_(s){return new gt({uniforms:{uTime:pn.uTime,uColor:{value:new ne(s)},uIntensity:{value:1},uLen:{value:100}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uTime,uIntensity,uLen; uniform vec3 uColor; varying vec2 vUv;
      void main(){ float x = abs(vUv.y*2.0-1.0);
        float core = smoothstep(0.25,0.0,x); float glow = pow(1.0-x, 3.0);
        float pulse = 0.75+0.25*sin(vUv.x*uLen*0.25 - uTime*40.0);
        float ends = smoothstep(0.0,0.02,vUv.x)*smoothstep(1.0,0.97,vUv.x);
        vec3 c = (uColor*glow*1.8*pulse + vec3(1.0)*core*2.2)*uIntensity*ends;
        gl_FragColor = vec4(c, 1.0); }`,transparent:!0,depthWrite:!1,blending:mt,side:Bt})}function w_(s=[.6,.45,1]){return new gt({uniforms:{uTime:pn.uTime,uColor:{value:new ne(...s)},uActive:{value:.5}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:Gi+`uniform float uTime, uActive; uniform vec3 uColor; varying vec2 vUv;
      void main(){ vec2 p = vUv*2.0-1.0; float r = length(p); float a = atan(p.y,p.x);
        float sw = fbm3(vec3(cos(a*3.0+r*6.0-uTime*0.8)*1.2, sin(a*3.0+r*6.0-uTime*0.8)*1.2, r*3.0-uTime*0.3));
        float m = smoothstep(1.0,0.82,r);
        float i = (0.35+0.65*smoothstep(-0.2,0.6,sw))*m*(0.35+0.65*uActive);
        vec3 c = mix(uColor, vec3(0.8,0.95,1.0), smoothstep(0.3,0.0,r))*i*1.6;
        gl_FragColor = vec4(c, i*0.85); }`,transparent:!0,depthWrite:!1,blending:mt,side:Bt})}function E_(s=7334143){return new gt({uniforms:{uTime:pn.uTime,uColor:{value:new ne(s)},uPower:{value:.5}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:Gi+`uniform float uTime,uPower; uniform vec3 uColor; varying vec2 vUv;
      void main(){ float along = vUv.y; float n = snoise(vec3(vUv.x*6.0, along*4.0 - uTime*12.0, 0.0));
        float a = pow(along, 1.6) * (0.75+0.25*n) * uPower;
        vec3 c = mix(uColor, vec3(1.0), pow(along,6.0))*a*2.4;
        gl_FragColor = vec4(c, a); }`,transparent:!0,depthWrite:!1,blending:mt,side:Bt})}function A_(){const s=new Bn({color:9078144,roughness:.92,metalness:.05,flatShading:!1,envMapIntensity:.4});return s.onBeforeCompile=e=>{e.uniforms.uTime=pn.uTime,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aOre; attribute float aDepl; varying vec3 vOre; varying vec3 vRP; varying float vDepl;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOre = aOre; vRP = position; vDepl = aDepl;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime; varying vec3 vOre; varying vec3 vRP; varying float vDepl;
`+Gi).replace("#include <color_fragment>",`#include <color_fragment>
float rn = fbm3(vRP*2.2);
float strata = 0.5+0.5*sin(vRP.y*7.0 + rn*4.0);
diffuseColor.rgb *= 0.72 + 0.28*strata + 0.25*rn;
float vn = abs(snoise(vRP*2.4 + 7.0));
float vein = 1.0 - smoothstep(0.0, 0.07, vn);
vein *= smoothstep(-0.2, 0.3, rn) * (1.0 - vDepl);
diffuseColor.rgb = mix(diffuseColor.rgb, vOre*0.8, vein*0.75);
`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += vOre * vein * (0.9 + 0.35*sin(uTime*2.0 + vRP.x*3.0));`)},s.customProgramCacheKey=()=>"rock",s}let nr=null;function Jt(){if(nr)return nr;const s=document.createElement("canvas");s.width=s.height=128;const e=s.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.55)"),t.addColorStop(.6,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),nr=new Sd(s),nr.colorSpace=Tt,nr}let ir=null;function R_(){if(ir)return ir;const s=document.createElement("canvas");s.width=s.height=512;const e=s.getContext("2d");e.translate(256,256);for(let t=0;t<26;t++){e.rotate(Math.PI*2/26+Math.sin(t*7.1)*.08);const n=140+110*Math.abs(Math.sin(t*3.7)),i=6+10*Math.abs(Math.cos(t*2.3)),r=e.createLinearGradient(0,0,n,0);r.addColorStop(0,"rgba(255,255,255,0.35)"),r.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=r,e.beginPath(),e.moveTo(0,-i),e.lineTo(n,0),e.lineTo(0,i),e.fill()}return ir=new Sd(s),ir.colorSpace=Tt,ir}const sr=new E;function vn(s,e,t,n,i,r){const a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;sr.copy(e),sr[n]=0,sr.normalize();const c=.5*a/(a+o),h=1-sr.angleTo(s)/l;return Math.sign(sr[t])===1?h*c:o/(a+o)+c+c*(1-h)}class C_ extends Hi{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new E,l=new E,c=new E(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,m=new E,v=.5/i;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(o.fromArray(h,g),l.copy(o),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[g+0]=c.x*Math.sign(o.x)+l.x*r,h[g+1]=c.y*Math.sign(o.y)+l.y*r,h[g+2]=c.z*Math.sign(o.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:m.set(1,0,0),d[p+0]=vn(m,l,"z","y",r,n),d[p+1]=1-vn(m,l,"y","z",r,t);break;case 1:m.set(-1,0,0),d[p+0]=1-vn(m,l,"z","y",r,n),d[p+1]=1-vn(m,l,"y","z",r,t);break;case 2:m.set(0,1,0),d[p+0]=1-vn(m,l,"x","z",r,e),d[p+1]=vn(m,l,"z","x",r,n);break;case 3:m.set(0,-1,0),d[p+0]=1-vn(m,l,"x","z",r,e),d[p+1]=1-vn(m,l,"z","x",r,n);break;case 4:m.set(0,0,1),d[p+0]=1-vn(m,l,"x","y",r,e),d[p+1]=1-vn(m,l,"y","x",r,t);break;case 5:m.set(0,0,-1),d[p+0]=vn(m,l,"x","y",r,e),d[p+1]=1-vn(m,l,"y","x",r,t);break}}}const Z={};function li(){return Z.ready||(Z.white=Fn({color:15330800,metalness:.3,roughness:.34,panel:1.2}),Z.whiteBig=Fn({color:15001836,metalness:.3,roughness:.36,panel:.42}),Z.grey=Fn({color:8160656,metalness:.55,roughness:.42,panel:1.6,lineDark:.3}),Z.dark=Fn({color:2764856,metalness:.7,roughness:.38,panel:1.8,lineDark:.25}),Z.cream=Fn({color:15195331,metalness:.25,roughness:.45,panel:.9}),Z.ochre=Fn({color:13209151,metalness:.3,roughness:.45,panel:.9}),Z.teal=Fn({color:4165532,metalness:.35,roughness:.4,panel:.9}),Z.orangePaint=Fn({color:15229996,metalness:.25,roughness:.4,panel:2,lineDark:.2}),Z.gunmetal=Fn({color:3817287,metalness:.75,roughness:.32,panel:1.4}),Z.rust=Fn({color:5980214,metalness:.5,roughness:.7,panel:1.1,lineDark:.5}),Z.glass=new Bn({color:860723,metalness:.9,roughness:.16,envMapIntensity:1.6}),Z.trimTeal=Li(5235696,2.4),Z.trimOrange=Li(16742970,2),Z.trimRed=Li(16724016,2.6),Z.trimWhite=Li(14677759,3),Z.nozzle=new Bn({color:1711652,metalness:.85,roughness:.3,side:Bt}),Z.solar=new Bn({color:1454170,metalness:.6,roughness:.25,emissive:662074,emissiveIntensity:.6,envMapIntensity:1.5}),Z.ventTeal=Li(4182246,1.3),Z.ventAmber=Li(16751168,1.3),Z.ventRed=Li(16730672,1.4),Z.ready=!0),Z}function P_(){return li()}function rn(s,e=28,t=1,n=1){const r=(s[0][1]>s[s.length-1][1]?s.slice().reverse():s).map(([o,l])=>new Q(Math.max(o,1e-4),l)),a=new gc(r,e);return a.rotateX(Math.PI/2),a.scale(t,n,1),a.computeVertexNormals(),a}function _s(s,e,t=.06){const n=new Rd;s.forEach(([r,a],o)=>o?n.lineTo(r,-a):n.moveTo(r,-a)),n.closePath();const i=new vc(n,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:2,curveSegments:4});return i.rotateX(-Math.PI/2),i.translate(0,-e/2,0),i.computeVertexNormals(),i}function je(s,e,t,n=.15,i=3){return new C_(s,e,t,i,Math.min(n,s/2,e/2,t/2)*.999)}function pe(s,e,t,n=0,i=0,r=0,a=0,o=0,l=0){const c=new dt(e,t);return c.position.set(n,i,r),c.rotation.set(a,o,l),s.add(c),c}function Ct(s,e,t,n,i,r,a=0,o=0,l=0){const c=pe(s,e,t,n,i,r,a,o,l),h=e.clone();if(h.scale(-1,1,1),h.computeVertexNormals(),h.index){const d=h.index.array;for(let f=0;f<d.length;f+=3){const m=d[f];d[f]=d[f+2],d[f+2]=m}}else L_(h);h.computeVertexNormals();const u=pe(s,h,t,-n,i,r,a,-o,-l);return[c,u]}function L_(s){for(const e of Object.keys(s.attributes)){const t=s.attributes[e],n=t.itemSize,i=t.array;for(let r=0;r<t.count;r+=3)for(let a=0;a<n;a++){const o=i[r*n+a];i[r*n+a]=i[(r+2)*n+a],i[(r+2)*n+a]=o}}}function ja(s,e){return rn([[0,s*.55],[e*.55,s*.52],[e*.9,s*.38],[e,s*.2],[e,-s*.3],[e*.92,-s*.42],[e*.78,-s*.47],[e*.7,-s*.45],[0,-s*.45]],22)}function Pr(s,{x:e=0,y:t=0,rz:n,w:i,h:r,d:a=0,r:o=.15,housing:l=null,vent:c,trim:h,slats:u=3,slatMat:d=Z.grey}){l&&pe(s,je(i,r,a,o),l,e,t,n+a/2);const f=Math.min(i,r)*.07,m=i*.76,v=r*.66;pe(s,je(m+2*f,v+2*f,f,f*.4),Z.dark,e,t,n-f/2+.005),pe(s,new Fs(m,v),c,e,t,n-f-.01,0,Math.PI,0);const g=v/u,p=f*.9;for(let y=0;y<u;y++){const x=t-v/2+g*(y+.5);pe(s,je(m,g*.5,p,Math.min(g*.2,p*.4)),d,e,x,n-f-p/2)}h&&pe(s,je(m,f*.55,f*.55,f*.2),h,e,t-v/2-f*1.6,n-f*.4)}function oi(s,e,t,n,i,r,a,o){pe(s,rn([[r*.95,0],[r*1.05,-.2*r],[r*.85,-.55*r],[r*.6,-.5*r]],20),Z.nozzle,t,n,i);const l=pe(s,new Ga(r*.72,20),new sn({color:new ne(o).multiplyScalar(2.5)}),t,n,i-.45*r,0,Math.PI,0),c=new Wa(r*.75,r*.12,1,16,1,!0);c.rotateX(Math.PI/2),c.translate(0,0,-.5);const h=pe(s,c,E_(o),t,n,i-.45*r);h.userData.baseLen=a,h.scale.set(1,1,a),h.userData.isExhaust=!0;const u=new Zt(new Kt({map:Jt(),color:new ne(o),blending:mt,depthWrite:!1,transparent:!0,opacity:.9}));u.position.set(t,n,i-.6*r),u.scale.setScalar(r*4),s.add(u),u.userData.isGlow=!0,u.userData.baseScale=r*4,e.push({ex:h,sp:u,disc:l})}function I_(s){const e=new Mt,t=[],n=[],i=s.body,r=s.trim,a=s.stripe;pe(e,rn([[0,4.7],[.45,4.55],[.92,4],[1.18,3],[1.3,1.6],[1.32,-1.6],[1.18,-3],[.95,-3.7],[.72,-3.85],[0,-3.85]],32,1.15,.82),i),pe(e,new kt(1,28,16),Z.glass,0,.62,2.35).scale.set(.72,.5,1.45),pe(e,je(.7,.45,3.6,.18),Z.grey,0,1.08,-.9),pe(e,je(.12,.1,3,.04),r,0,1.33,-.9),Ct(e,_s([[.9,1.4],[4.1,-1.1],[4.35,-2],[4.2,-2.35],[.9,-2.7]],.2,.07),i,0,-.28,0),Ct(e,je(.18,.16,1.2,.06),r,4.25,-.28,-1.6),Ct(e,_s([[.9,.9],[2.8,-.4],[2.9,-1.3],[.9,-1.6]],.06,.02),a,0,-.04,-.3);const o=ja(4.2,.62);return Ct(e,o,Z.grey,1.95,.15,-1.9),Ct(e,je(.9,.22,1.4,.08),Z.grey,1.4,.08,-1.8),Ct(e,new zt(.63,.05,8,24),r,1.95,.15,-.7),pe(e,new zt(1.33,.06,8,40),a,0,0,1).scale.set(1.15,.82,1),oi(e,t,1.95,.15,-3.9,.5,5,s.exhaust),oi(e,t,-1.95,.15,-3.9,.5,5,s.exhaust),Pr(e,{y:-.05,rz:-4.2,w:1.6,h:.85,d:1.3,r:.22,housing:Z.grey,vent:s.vent,trim:r,slats:3}),n.push(new E(0,-.5,4.2)),{g:e,engines:t,muzzles:n}}function D_(s){const e=new Mt,t=[],n=[];pe(e,rn([[0,11.2],[.8,11],[1.7,10.2],[2.2,8.8],[2.3,6.6],[2,5.9],[0,5.9]],30,1.1,.9),s.body),pe(e,new kt(1,24,14),Z.glass,0,1.05,9).scale.set(1.35,.7,1.4),pe(e,je(1.6,1.6,15,.3),Z.grey,0,0,-1.2);const i=je(2.35,2.35,3.7,.22),r=s.containers;let a=0;for(const l of[3.6,-.4,-4.4]){for(const[c,h]of[[1.95,0],[-1.95,0],[0,1.95],[0,-1.95]])pe(e,i,r[a++%r.length],c,h,l);pe(e,new zt(2.6,.12,8,32),Z.grey,0,0,l+1.95)}pe(e,je(4.4,3.2,3.4,.5),s.body,0,0,-8.6),Ct(e,je(.12,2.6,4,.05),Z.dark,2.24,0,-8.6),Ct(e,je(.05,2.2,3.6,.02),s.trim,2.32,0,-8.6),Ct(e,_s([[2.2,-7.2],[5.6,-8.5],[5.6,-10.2],[2.2,-10.2]],.15,.04),Z.grey,0,1.2,0),Ct(e,je(.2,.2,1.2,.05),s.trim,5.6,1.2,-9.4);const o=ja(3.2,1.1);return Ct(e,o,Z.dark,1.2,0,-10.8),oi(e,t,1.2,0,-12.3,.95,9,s.exhaust),oi(e,t,-1.2,0,-12.3,.95,9,s.exhaust),Pr(e,{y:1.95,rz:-10.7,w:2.4,h:.95,d:2.6,r:.25,housing:Z.grey,vent:s.vent,trim:s.trim,slats:3}),Pr(e,{y:-1.3,rz:-10.3,w:3.6,h:.55,vent:s.vent,slats:2}),pe(e,je(.3,.3,13,.1),s.stripe,0,.85,-1.2),n.push(new E(0,-1.6,10.5)),{g:e,engines:t,muzzles:n}}function N_(s){const e=new Mt,t=[],n=[];pe(e,rn([[0,7.6],[.35,7],[.85,5.2],[1.25,2.8],[1.4,0],[1.35,-3.5],[1.15,-5.5],[.9,-6],[0,-6]],30,1.25,.72),s.body),pe(e,new kt(1,24,14),Z.glass,0,.62,2.6).scale.set(.62,.42,1.8),Ct(e,_s([[1,2.6],[5.6,-3.2],[5.8,-4.6],[5.2,-4.8],[1,-4.3]],.24,.08),s.body,0,-.15,0),Ct(e,_s([[1.4,1.6],[4.4,-2.4],[4.5,-3],[1.4,-2]],.06,.02),s.stripe,0,.06,0);const i=rn([[0,2.6],[.12,2.5],[.2,2],[.24,-2],[.3,-2.4],[0,-2.4]],14);Ct(e,i,Z.grey,5.55,-.15,-2),Ct(e,new kt(.16,10,8),s.trim,5.55,-.15,.62),Ct(e,_s([[.2,-1],[.2,-4.6],[2.2,-5.2],[1.6,-3.6]],.12,.04),s.body,.9,.43,0,0,0,Math.PI/2-.35);const r=ja(4,.72);return Ct(e,r,Z.grey,1.55,-.05,-4.3),oi(e,t,1.55,-.05,-6.2,.6,7,s.exhaust),oi(e,t,-1.55,-.05,-6.2,.6,7,s.exhaust),Pr(e,{y:.1,rz:-6.6,w:1.35,h:.9,d:1.6,r:.2,housing:Z.grey,vent:s.vent,trim:s.trim,slats:3}),pe(e,je(.1,.1,6.5,.03),s.trim,0,.95,-1.2),n.push(new E(5.55,-.15,.7),new E(-5.55,-.15,.7)),{g:e,engines:t,muzzles:n}}function U_(s){const e=new Mt,t=[],n=[];pe(e,rn([[0,28],[1.6,27.4],[4.2,24],[6.6,16],[7.4,4],[7.4,-10],[7,-18],[6,-23],[4.8,-24.5],[0,-24.5]],40,1.3,.62),s.body),pe(e,je(8.5,2.6,26,.8),Z.grey,0,4.1,-3),pe(e,je(6.8,2.2,20,.6),s.body,0,5.6,-5),pe(e,je(3.6,4.4,6.2,.6),s.body,0,8.6,-12),pe(e,je(3.7,.7,5,.2),Z.glass,0,9.8,-11.2),pe(e,je(.25,.25,22,.08),s.trim,0,6.75,-5),pe(e,new zt(10.5,.7,12,64),Z.grey,0,0,8).scale.set(1,.72,1),pe(e,new zt(10.5,.28,8,64),s.trim,0,0,8.75).scale.set(1,.72,1);for(let r=0;r<4;r++){const a=r/4*Math.PI*2+Math.PI/4,o=Math.cos(a),l=Math.sin(a),c=1/Math.hypot(o/(7.13*1.3),l/(7.13*.62)),h=1/Math.hypot(o/10.5,l/7.56),u=c-.4,d=h-u,f=u+d/2;pe(e,je(d,.9,1.6,.25),Z.grey,o*f,l*f,8,0,0,a)}Ct(e,je(3.4,3,16,.9),s.body,10.2,-.6,-8),Ct(e,je(.1,1.2,12,.04),s.trim,11.95,-.6,-8),Ct(e,je(3.2,.5,2,.2),Z.grey,8.2,-.6,-4),Ct(e,je(3.2,.5,2,.2),Z.grey,8.2,-.6,-12);for(const r of[14,2])pe(e,new kt(1.6,20,12,0,Math.PI*2,0,Math.PI/2),Z.grey,0,r>5?3.9:6.7,r),Ct(e,rn([[0,3.5],[.25,3.5],[.3,-.5],[0,-.5]],10),Z.dark,.5,r>5?4.6:7.4,r+1.5),n.push(new E(0,r>5?4.6:7.4,r+5));n.push(new E(0,-3,26));const i=ja(8,2);for(const[r,a]of[[4.6,2.2],[-4.6,2.2],[4.6,-2.2],[-4.6,-2.2]])pe(e,i,Z.dark,r,a,-24),oi(e,t,r,a,-27.65,1.7,18,s.exhaust);return Pr(e,{y:0,rz:-27.8,w:4.4,h:6.6,d:4.4,r:.7,housing:Z.grey,vent:s.vent,trim:s.trim,slats:7}),{g:e,engines:t,muzzles:n}}const O_={player:()=>({body:Z.white,trim:Z.trimTeal,stripe:Z.orangePaint,exhaust:7334143,vent:Z.ventTeal,containers:[Z.white,Z.teal,Z.white,Z.orangePaint]}),trader:()=>({body:Z.cream,trim:Z.trimOrange,stripe:Z.ochre,exhaust:16760944,vent:Z.ventAmber,containers:[Z.ochre,Z.cream,Z.teal,Z.ochre,Z.grey]}),outlaw:()=>({body:Z.gunmetal,trim:Z.trimRed,stripe:Z.rust,exhaust:16734778,vent:Z.ventRed,containers:[Z.gunmetal,Z.rust]})},F_={wren:I_,mule:D_,kestrel:N_,bastion:U_},zo=new Map;function us(s,e="player"){li();const t=s+":"+e;if(zo.has(t))return zo.get(t);const n=F_[s](O_[e]());n.g.traverse(r=>{r.isMesh&&(r.castShadow=!1,r.receiveShadow=!1)});const i=new fn().setFromObject(n.g);return n.box=i,zo.set(t,n),n}function k_(s,e){const t=s.g.clone(!0),n=[];t.traverse(h=>{h.userData.isExhaust&&(h.material=h.material.clone(),h.material.uniforms.uTime=pn.uTime),h.userData.isGlow&&(h.material=h.material.clone())});const i=[],r=[];t.traverse(h=>{h.userData.isExhaust&&i.push(h),h.userData.isGlow&&r.push(h)});for(let h=0;h<i.length;h++)n.push({ex:i[h],sp:r[h]});const a=new E;s.box.getSize(a);const o=new E;s.box.getCenter(o);const l=new dt(new kt(1,40,20),x_(e));l.scale.set(a.x*.62+1,a.y*.75+1.2,a.z*.6+1),l.position.copy(o),l.renderOrder=5,t.add(l);const c=Math.max(a.x,a.y,a.z)*.5;return{group:t,engines:n,shield:l,radius:c,muzzles:s.muzzles.map(h=>h.clone()),size:a}}function B_(s,e=15){li();const t=new Mt,n=s,i=new fn().setFromObject(n),r=new E;i.getSize(r);const a=new E;i.getCenter(a);const o=e/Math.max(r.x,r.y,r.z);n.position.sub(a.multiplyScalar(1));const l=new Mt;l.add(n),l.scale.setScalar(o),l.rotation.y=Math.PI,t.add(l),n.traverse(f=>{if(!f.isMesh)return;const m=f.material;m.envMapIntensity=1.3,m.emissive&&(m.emissiveMap?m.emissiveIntensity=2.2:m.emissive.setRGB(0,0,0)),!m.metalnessMap&&m.metalness>.8&&(m.metalness=.6),!m.roughnessMap&&m.roughness>.8&&(m.roughness=.45)});const c=[],h=e;oi(t,c,2.4,0,-h*.5,.55,6,16734778),oi(t,c,-2.4,0,-h*.5,.55,6,16734778);const u=new fn().setFromObject(t),d=new Kt({map:Jt(),color:new ne(1,.18,.12).multiplyScalar(2.2),blending:mt,depthWrite:!1,transparent:!0});for(const[f,m,v,g]of[[u.min.x*.92,0,0,3.2],[u.max.x*.92,0,0,3.2],[0,u.max.y*.9,-h*.15,2.6],[0,0,u.max.z*.95,2.4]]){const p=new Zt(d);p.position.set(f,m,v),p.scale.setScalar(g),t.add(p)}return{g:t,engines:c,muzzles:[new E(0,-.3,h*.5)],box:u}}function z_(){li();const s=new Mt,e=new Mt;s.add(e),pe(s,rn([[0,34],[6,33],[11,28],[13,20],[13,-20],[11,-28],[6,-33],[0,-34]],40),Z.whiteBig,0,0,0,Math.PI/2,0,0),pe(s,new zt(13.4,.6,10,48),Z.trimTeal,0,14,0,Math.PI/2,0,0),pe(s,new zt(13.4,.6,10,48),Z.trimTeal,0,-14,0,Math.PI/2,0,0);const t=new zt(70,6.5,20,96);pe(e,t,Z.whiteBig,0,0,0,Math.PI/2,0,0),pe(e,new zt(70,2,10,96),Z.grey,0,6.2,0,Math.PI/2,0,0);const n=new zt(76.4,.7,6,96);pe(e,n,Z.trimWhite,0,0,0,Math.PI/2,0,0);for(let a=0;a<6;a++){const o=a/6*Math.PI*2;pe(e,je(3.2,3.2,58,.8),Z.grey,Math.cos(o)*41,0,Math.sin(o)*41,0,-o+Math.PI/2,0),pe(e,je(10,9,14,2.5),Z.whiteBig,Math.cos(o)*70,0,Math.sin(o)*70,0,-o,0)}for(const a of[1,-1]){pe(s,je(2,2,44,.5),Z.grey,0,a*42,0);for(const o of[-14,14])pe(s,je(40,.5,12,.2),Z.solar,0,a*42,o),pe(s,je(40.4,.7,.5,.1),Z.grey,0,a*42,o+6)}pe(s,rn([[0,10],[3,9],[4,0],[3,-10],[0,-11]],20),Z.grey,0,45,0,Math.PI/2,0,0);const i=[];for(let a=0;a<12;a++){const o=a/12*Math.PI*2,l=pe(e,new kt(1,8,6),new sn({color:a%2?16742970:7334143}),Math.cos(o)*77,0,Math.sin(o)*77);i.push(l)}const r=new Zt(new Kt({map:Jt(),color:8382719,blending:mt,depthWrite:!1,transparent:!0}));return r.position.set(0,58,0),r.scale.setScalar(30),s.add(r),{group:s,spin:e,lights:i,beacon:r,radius:80}}function H_(){li();const s=new Mt;pe(s,new zt(70,5,16,80),Z.grey),pe(s,new zt(64.5,1.2,8,80),Z.trimTeal);for(let t=0;t<8;t++){const n=t/8*Math.PI*2;pe(s,je(14,18,16,2.5),Z.whiteBig,Math.cos(n)*72,Math.sin(n)*72,0,0,0,n),pe(s,je(2,10,17,.5),Z.trimOrange,Math.cos(n)*80,Math.sin(n)*80,0,0,0,n)}const e=pe(s,new Ga(66,64),w_());return e.renderOrder=4,{group:s,portal:e}}function kd(s){li();const e=new Mt,t=o=>{const l=Math.sin(s*.001+o*12.9898)*43758.5453;return l-Math.floor(l)},n=rn([[0,18],[4,16],[6,8],[6.5,-6],[5,-14],[0,-15]],24,1.1,.8);pe(e,n,Z.rust,0,0,0,.3,0,.6);const i=je(9,6,12,1.2);pe(e,i,Z.dark,12,4,-8,.8,.4,.2);for(let o=0;o<9;o++)pe(e,je(1+t(o)*4,1+t(o+9)*3,2+t(o+18)*8,.3),o%2?Z.rust:Z.gunmetal,(t(o+1)-.5)*50,(t(o+2)-.5)*24,(t(o+3)-.5)*50,t(o+4)*6,t(o+5)*6,t(o+6)*6);const r=pe(e,new kt(.8,8,6),new sn({color:16732208}),0,5,6),a=new Zt(new Kt({map:Jt(),color:16736320,blending:mt,depthWrite:!1,transparent:!0}));return a.position.copy(r.position),a.scale.setScalar(16),e.add(a),{group:e,lamp:r,glow:a}}let ma=null;function V_(){if(ma)return ma;li();const s=new Mt,e=[];pe(s,rn([[0,22],[6,20],[10,12],[11,-10],[8,-18],[0,-21]],28,1,1),Z.rust,0,0,0,.12,0,.08),pe(s,je(14,8,18,1.5),Z.dark,0,9,-2),pe(s,new zt(26,2.4,10,48),Z.gunmetal,0,0,0,Math.PI/2,0,0),pe(s,new zt(26.3,.55,8,64),Z.trimRed,0,2.2,0,Math.PI/2,0,0),pe(s,new zt(26.3,.55,8,64),Z.trimRed,0,-2.2,0,Math.PI/2,0,0);for(let a=0;a<4;a++){const o=a*Math.PI/2+Math.PI/4;pe(s,je(17,2.2,3.2,.4),Z.dark,Math.cos(o)*17,0,Math.sin(o)*17,0,-o,0)}const t=rn([[0,6],[.35,5.6],[.5,0],[.9,-.6],[0,-.6]],12);for(let a=0;a<6;a++){const o=a*Math.PI/3,l=Math.cos(o)*26,c=Math.sin(o)*26,h=a%2?-3.6:3.6;pe(s,new kt(2.6,16,10),Z.gunmetal,l,h,c);const u=pe(s,t,Z.grey,l,h,c);u.lookAt(l*2,h*3,c*2),u.rotateX(Math.PI/2);const d=new E(l,h,c).add(new E(l,h*.6,c).normalize().multiplyScalar(6));e.push(d)}const n=[Z.orangePaint,Z.ochre,Z.teal];for(let a=0;a<6;a++)pe(s,je(4,4,9,.4),n[a%3],(a%2?1:-1)*13,-8+a%3*5,-6+Math.floor(a/2)*2,0,.3*a,0);const i=new Kt({map:Jt(),color:new ne(1,.18,.12).multiplyScalar(2.4),blending:mt,depthWrite:!1,transparent:!0});for(const[a,o,l,c]of[[0,30,0,14],[4,-28,2,10],[-6,22,5,8]]){pe(s,new Wa(.25,.6,c,8),Z.grey,a,o-Math.sign(o)*c/2,l);const h=new Zt(i);h.position.set(a,o,l),h.scale.setScalar(6),s.add(h)}for(let a=0;a<8;a++){const o=a*Math.PI/4,l=new Zt(i);l.position.set(Math.cos(o)*28.5,0,Math.sin(o)*28.5),l.scale.setScalar(4),s.add(l)}const r=new fn().setFromObject(s);return ma={g:s,engines:[],muzzles:e,box:r},ma}function G_(){li();const s=new Mt;pe(s,je(2.2,2.2,2.2,.3),Z.orangePaint),pe(s,new Hi(2.35,.3,2.35),Z.trimWhite);const e=new Zt(new Kt({map:Jt(),color:16769674,blending:mt,depthWrite:!1,transparent:!0,opacity:.8}));return e.scale.setScalar(9),s.add(e),s}function W_(){li();const s=new Mt;pe(s,rn([[0,1.4],[.2,1],[.24,-1],[.18,-1.2],[0,-1.2]],10),Z.white);const e=new Zt(new Kt({map:Jt(),color:16752736,blending:mt,depthWrite:!1,transparent:!0}));return e.position.z=-1.6,e.scale.setScalar(5),s.add(e),s}function Ea(s,e,t){const n=Math.sin(s*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)}function vu(s,e,t){const n=Math.floor(s),i=Math.floor(e),r=Math.floor(t),a=s-n,o=e-i,l=t-r,c=a*a*(3-2*a),h=o*o*(3-2*o),u=l*l*(3-2*l);let d=0;for(let f=0;f<2;f++)for(let m=0;m<2;m++)for(let v=0;v<2;v++)d+=Ea(n+f,i+m,r+v)*(f?c:1-c)*(m?h:1-h)*(v?u:1-u);return d*2-1}function Ho(s,e=4){let t=new yc(1,e);t.deleteAttribute("normal"),t.deleteAttribute("uv"),t=Ex(t);const n=t.attributes.position,i=new E,r=.8+Ea(s,1,2)*.6,a=.6+Ea(s,3,4)*.5,o=.8+Ea(s,5,6)*.6;for(let l=0;l<n.count;l++){i.fromBufferAttribute(n,l);let c=0,h=.5,u=1.3;for(let f=0;f<4;f++)c+=h*vu(i.x*u+s,i.y*u+s*.7,i.z*u-s),u*=2.1,h*=.5;const d=Math.max(0,vu(i.x*2.5+s*3,i.y*2.5,i.z*2.5)-.45)*.6;i.multiplyScalar(1+c*.42-d),i.x*=r,i.y*=a,i.z*=o,n.setXYZ(l,i.x,i.y,i.z)}return t.computeVertexNormals(),t}let Ms=null;function $_(){return Ms||(Ms=[Ho(3.1),Ho(7.7),Ho(12.4,3)]),Ms}const yu=new ze,xu=new Tn,X_=new E,hs=new E;class q_{constructor(e){this.game=e,this.root=new Mt,e.scene.add(this.root),this.sunUniform={value:new E(0,0,0)},this.rockMat=A_(),this.dust=this.makeDust(),e.scene.add(this.dust)}makeDust(){const n=new Float32Array(2700),i=new Float32Array(900);for(let l=0;l<900;l++)n[l*3]=Math.random()*600,n[l*3+1]=Math.random()*600,n[l*3+2]=Math.random()*600,i[l]=.5+Math.random()*1.5;const r=new bt;r.setAttribute("position",new xt(n,3)),r.setAttribute("aSize",new xt(i,1));const a=new gt({uniforms:{uCam:{value:new E},uBox:{value:600},uColor:{value:new ne(.7,.85,1)},uMap:{value:Jt()},uPx:{value:1}},vertexShader:`uniform vec3 uCam; uniform float uBox, uPx; attribute float aSize; varying float vA;
        void main(){ vec3 p = mod(position - uCam, uBox) - uBox*0.5 + uCam; vec4 mv = modelViewMatrix*vec4(p,1.0);
          float d = length(mv.xyz); vA = smoothstep(uBox*0.5, uBox*0.15, d)*smoothstep(4.0, 30.0, d);
          gl_PointSize = aSize*uPx*260.0/max(d,1.0); gl_Position = projectionMatrix*mv; }`,fragmentShader:"uniform vec3 uColor; uniform sampler2D uMap; varying float vA; void main(){ float t = texture2D(uMap, gl_PointCoord).a; gl_FragColor = vec4(uColor*t*vA*0.55, t*vA); }",transparent:!0,depthWrite:!1,blending:mt}),o=new fc(r,a);return o.frustumCulled=!1,o.renderOrder=2,o}clear(){const e=new Set;this.root.traverse(t=>{var n,i,r;t.geometry&&!(Ms!=null&&Ms.includes(t.geometry))&&!t.userData.sharedGeo&&((i=(n=t.geometry).dispose)==null||i.call(n)),t.material&&!e.has(t.material)&&((r=t.material.userData)!=null&&r.disposable)&&t.material.dispose()}),this.root.clear(),this.envRT&&(this.envRT.dispose(),this.envRT=null)}build(e,t){this.clear(),this.sys=e;const n=new Ft(e.id*7919+13),i=this.game.scene,r=new dt(new kt(1e3,48,24),gu(e.nebula[0],e.nebula[1],e.id*3.7));r.frustumCulled=!1,r.renderOrder=-100,this.sky=r,this.root.add(r);const a=new md,o=new dt(new kt(50,32,16),gu(e.nebula[0].map(y=>y*2.2),e.nebula[1].map(y=>y*2.2),e.id*3.7));a.add(o);const l=new dt(new kt(3,16,8),new sn({color:new ne(...e.star.color).multiplyScalar(14)}));l.position.set(30,18,20),a.add(l);const c=new Fl(this.game.renderer);this.envRT=c.fromScene(a,.02,.1,200),c.dispose(),o.geometry.dispose(),o.material.dispose(),i.environment=this.envRT.texture,i.environmentIntensity=.9;const h=new ne(...e.nebula[0]);i.fog=new hc(h.clone().multiplyScalar(.35),45e-6),this.game.fogDensity=45e-6,this.game.keyLight.color.setRGB(...e.star.color),this.game.hemi.color.copy(new ne(...e.nebula[0]).lerp(new ne(.7,.8,1),.6)),this.game.hemi.groundColor.copy(new ne(...e.nebula[1]).multiplyScalar(.5)),this.dust.material.uniforms.uColor.value.copy(new ne(...e.nebula[1]).lerp(new ne(.85,.9,1),.6));const u=e.star,d=new Mt;d.add(new dt(new kt(u.radius,64,32),S_(u.color,u.glow)));const f=new Zt(new Kt({map:Jt(),color:new ne(...u.glow).multiplyScalar(1.6),blending:mt,depthWrite:!1,transparent:!0,fog:!1}));f.scale.setScalar(u.radius*3.4),d.add(f);const m=new Zt(new Kt({map:Jt(),color:new ne(...u.color).multiplyScalar(.6),blending:mt,depthWrite:!1,transparent:!0,fog:!1,opacity:.45}));m.scale.setScalar(u.radius*7),d.add(m);const v=new Zt(new Kt({map:R_(),color:new ne(...u.color),blending:mt,depthWrite:!1,transparent:!0,opacity:.35,fog:!1}));v.scale.setScalar(u.radius*6.5),d.add(v);const g=v.clone();g.material=v.material.clone(),g.material.opacity=.2,g.scale.setScalar(u.radius*9),d.add(g),this.starRays=[v,g],this.root.add(d),this.star=d,this.planets=e.planets.map(y=>{const x=new Mt;x.position.set(...y.pos);const _=new dt(new kt(y.radius,96,48),__(y));_.material.uniforms.uSun=this.sunUniform,_.material.uniforms.uSunCol.value.setRGB(...u.color).lerp(new ne(1,1,1),.5),_.rotation.z=n.range(-.3,.3),x.add(_);const A=new dt(new kt(y.radius*1.06,64,32),M_(y.atmo,this.sunUniform));if(x.add(A),y.ring){const w=new Rr(y.radius*1.45,y.radius*2.3,128,1),C=new dt(w,b_(y.pal[0],y.pal[2]));C.rotation.x=-Math.PI/2+.35,C.rotation.y=.2,x.add(C)}return this.root.add(x),{data:y,group:x,mesh:_,pos:x.position,radius:y.radius}}),this.deposits=[],P_(),this.planets.forEach((y,x)=>{const _=n.range(0,Math.PI*2),A=new E(Math.cos(_),n.range(-.12,.12),Math.sin(_)).normalize(),w=y.pos.clone().addScaledVector(A,y.radius-2),C=y.data.depositOre,P=new ne(Xe[C].color),S=new Mt;S.position.copy(w),S.quaternion.setFromUnitVectors(new E(0,1,0),A);const M=new Bn({color:P.clone().multiplyScalar(.5),emissive:P,emissiveIntensity:1.8,roughness:.2,metalness:.3});for(let N=0;N<9;N++){const F=new dt(new xc(1,0),M),G=n.range(8,22);F.scale.set(n.range(2,4),G,n.range(2,4)),F.position.set(n.range(-14,14),G*.5,n.range(-14,14)),F.rotation.set(n.range(-.4,.4),n.range(0,3),n.range(-.4,.4)),S.add(F)}const I=new Zt(new Kt({map:Jt(),color:P,blending:mt,depthWrite:!1,transparent:!0,opacity:.8}));I.position.y=14,I.scale.setScalar(90),S.add(I);const B=new dt(new Rr(36,40,48),new sn({color:P.clone().multiplyScalar(2),transparent:!0,opacity:.6,side:Bt,blending:mt,depthWrite:!1}));B.rotation.x=-Math.PI/2,B.position.y=3,S.add(B),this.root.add(S),this.deposits.push({planet:y,pos:w,ore:C,max:90,amount:90,group:S,glow:I,ring:B,radius:20,name:`${y.data.name} deposit`,kind:"deposit",regenDay:t})});const p=z_();p.group.position.set(...e.station.pos),p.group.rotation.y=n.range(0,Math.PI*2),this.root.add(p.group),this.station={...p,pos:p.group.position,name:e.station.name},this.gates=e.gates.map(y=>{const x=H_();return x.group.position.set(...y.pos),x.group.lookAt(0,y.pos[1],0),this.root.add(x.group),{...x,pos:x.group.position,to:y.to,name:y.name}}),this.fields=e.fields.map(y=>this.buildField(y,t)),this.derelicts=e.derelicts.map(y=>{const x=kd(y.seed);return x.group.position.set(...y.pos),x.group.rotation.set(n.range(0,3),n.range(0,3),n.range(0,3)),this.root.add(x.group),{...x,pos:x.group.position,name:y.name,seed:y.seed,kind:"derelict"}})}buildField(e,t){const n=new Ft(e.seed),i=new E(...e.pos),r=$_(),a=[0,0,0],o=[];for(let d=0;d<e.count;d++){const f=n.int(0,2);a[f]++;const m=Math.pow(n.next(),.6)*e.radius,v=n.range(0,Math.PI*2),g=new E(Math.cos(v)*m,n.range(-1,1)*e.radius*.28*(1-m/e.radius*.5),Math.sin(v)*m).add(i),p=n.chance(.08),y=p?n.range(22,38):n.range(4,14),x=n.chance(.72)?e.primary:e.secondary,_=Math.round(y*(p?2.2:1.4));o.push({v:f,idx:-1,pos:g,scale:y,base:y,quat:new Tn().setFromEuler(new $t(n.range(0,6),n.range(0,6),n.range(0,6))),axis:new E(n.range(-1,1),n.range(-1,1),n.range(-1,1)).normalize(),spin:n.range(.02,.15),ore:x,amount:_,max:_,alive:!0,respawnDay:0,radius:y*1.05,kind:"rock",field:null})}const l=r.map((d,f)=>{const m=d.clone(),v=a[f],g=new Tr(new Float32Array(v*3),3),p=new Tr(new Float32Array(v),1);m.setAttribute("aOre",g),m.setAttribute("aDepl",p);const y=new _d(m,this.rockMat,v);return y.frustumCulled=!1,this.root.add(y),{im:y,aOre:g,aDepl:p,n:0}}),c={data:e,center:i,radius:e.radius,rocks:o,meshes:l,name:e.name,primary:e.primary},h=new ne;for(const d of o){const f=l[d.v];d.idx=f.n++,d.field=c,h.set(Xe[d.ore].color),f.aOre.setXYZ(d.idx,h.r,h.g,h.b),f.aDepl.setX(d.idx,0),this.writeRock(d)}l.forEach(d=>{d.aOre.needsUpdate=!0,d.im.instanceMatrix.needsUpdate=!0});const u=new ne(...this.sys.nebula[1]).lerp(new ne(Xe[e.primary].color),.4);c.haze=[];for(let d=0;d<10;d++){const f=new Zt(new Kt({map:Jt(),color:u,blending:mt,depthWrite:!1,transparent:!0,opacity:.09,fog:!1}));f.position.set(n.range(-1,1)*e.radius*.7,n.range(-.25,.25)*e.radius,n.range(-1,1)*e.radius*.7).add(i),f.scale.setScalar(e.radius*n.range(.7,1.3)),this.root.add(f),c.haze.push(f)}return c}writeRock(e){const t=e.field.meshes[e.v],n=e.alive?e.scale:1e-4;yu.compose(e.pos,e.quat,X_.set(n,n,n)),t.im.setMatrixAt(e.idx,yu)}depleteRock(e){const t=e.field.meshes[e.v];t.aDepl.setX(e.idx,1-e.amount/e.max),t.aDepl.needsUpdate=!0,e.scale=e.base*(.55+.45*(e.amount/e.max)),e.radius=e.scale*1.05,e.amount<=0&&(e.alive=!1,e.respawnDay=this.game.state.day+1),this.writeRock(e),t.im.instanceMatrix.needsUpdate=!0}onNewDay(e){for(const t of this.fields){let n=!1;for(const i of t.rocks)if(!i.alive&&e>=i.respawnDay){i.alive=!0,i.amount=i.max,i.scale=i.base,i.radius=i.scale*1.05;const r=t.meshes[i.v];r.aDepl.setX(i.idx,0),r.aDepl.needsUpdate=!0,this.writeRock(i),n=!0}n&&t.meshes.forEach(i=>i.im.instanceMatrix.needsUpdate=!0)}for(const t of this.deposits)t.amount=Math.min(t.max,t.amount+45)}update(e,t,n){const i=pn.uTime.value;this.sky.position.copy(t),this.dust.material.uniforms.uCam.value.copy(t),this.starRays[0].material.rotation=i*.01,this.starRays[1].material.rotation=-i*.006;for(const r of this.planets)r.mesh.rotation.y+=r.data.spin*e;this.station.spin.rotation.y+=e*.05,this.station.lights.forEach((r,a)=>r.visible=Math.sin(i*3+a*.8)>-.2),this.station.beacon.material.opacity=.6+.4*Math.sin(i*2);for(const r of this.gates)r.group.rotation.z+=e*.03,r.portal.rotation.z-=e*.1;for(const r of this.deposits)r.ring.scale.setScalar(1+.15*Math.sin(i*2)),r.glow.material.opacity=.35+.65*(r.amount/r.max);for(const r of this.derelicts){const a=Math.sin(i*13+r.seed)>.2?1:.15;r.glow.material.opacity=a,r.lamp.visible=a>.5}for(const r of this.fields)if(!(r.center.distanceTo(n)>r.radius+1600)){for(const a of r.rocks)a.alive&&(xu.setFromAxisAngle(a.axis,a.spin*e),a.quat.premultiply(xu),this.writeRock(a));r.meshes.forEach(a=>a.im.instanceMatrix.needsUpdate=!0)}}findMineable(e,t){let n=null,i=1/0;for(const r of this.fields)if(!(r.center.distanceTo(e)>r.radius+t+60))for(const a of r.rocks){if(!a.alive)continue;const o=a.pos.distanceTo(e)-a.radius;o<t&&o<i&&(i=o,n=a)}for(const r of this.deposits){if(r.amount<=0)continue;const a=r.pos.distanceTo(e)-r.radius;a<t+40&&a<i&&(i=a,n=r)}return n}collide(e,t,n){const i=(a,o)=>{hs.subVectors(e,a);const l=hs.length(),c=o+t;if(l<c&&l>.001){if(hs.multiplyScalar(1/l),e.addScaledVector(hs,c-l),n){const h=n.dot(hs);h<0&&n.addScaledVector(hs,-h*1.2)}return!0}return!1};let r=!1;for(const a of this.planets)r=i(a.pos,a.radius+6)||r;i(this.star.position,this.sys.star.radius+40),this.station.pos.distanceTo(e)<160&&i(this.station.pos,22);for(const a of this.fields)if(!(a.center.distanceTo(e)>a.radius+60))for(const o of a.rocks)o.alive&&Math.abs(o.pos.x-e.x)<o.radius+t&&Math.abs(o.pos.z-e.z)<o.radius+t&&(r=i(o.pos,o.radius*.85)||r);return r}}const cn=new E,Mi=new E,j_=new Tn,Y_=new $t,_u=new E(0,0,1);let K_=1;class vr{constructor(e,{kind:t,hullId:n="wren",palette:i="player",tpl:r=null,stats:a,name:o}){this.game=e,this.kind=t,this.hullId=n,this.name=o||n,this.uid=K_++;const l=r||us(n,i),c=t==="outlaw"?new ne(1,.35,.25):t==="trader"?new ne(1,.8,.4):new ne(.35,.9,1),h=k_(l,c);this.obj=h.group,this.engines=h.engines,this.shieldMesh=h.shield,this.radius=h.radius,this.muzzles=h.muzzles,this.size=h.size,e.scene.add(this.obj),this.pos=this.obj.position,this.yaw=0,this.pitch=0,this.roll=0,this.yawRate=0,this.speed=0,this.throttle=0,this.boost=!1,this.cruise=!1,this.vel=new E,this.hitAges=[9,9,9,9],this.hitIdx=0,this.flash=0,this.lastHit=-99,this.lastAttacker=null,this.cargo={},this.dead=!1,this.firing=!1,this.beamTarget=null,this.applyStats(a,!0)}applyStats(e,t){const n=this.maxHp||e.hull;this.stats=e,this.maxHp=e.hull,this.maxShield=e.shield,this.maxEnergy=e.energy,t?(this.hp=this.maxHp,this.shield=this.maxShield,this.energy=this.maxEnergy):(this.hp=Math.min(this.maxHp,this.hp*(this.maxHp/n)),this.shield=Math.min(this.shield,this.maxShield),this.energy=Math.min(this.energy,this.maxEnergy))}get forward(){return cn.copy(_u).applyQuaternion(this.obj.quaternion)}forwardTo(e){return e.copy(_u).applyQuaternion(this.obj.quaternion)}cargoUsed(){let e=this.reserved||0;for(const t in this.cargo)e+=this.cargo[t];return e}cargoValue(){let e=this.missionLure||0;for(const t in this.cargo)e+=this.cargo[t]*Xe[t].base;return e}damage(e,t,n){if(this.dead)return!1;if(this.lastHit=this.game.time,this.lastAttacker=n||null,Mi.subVectors(t,this.pos).applyQuaternion(j_.copy(this.obj.quaternion).invert()),Mi.divide(this.shieldMesh.scale).normalize(),this.shield>0){const i=Math.min(this.shield,e);this.shield-=i,e-=i;const r=this.shieldMesh.material.uniforms;this.game.time-(this._lastRipple||0)>.12&&(this._lastRipple=this.game.time,r.uHitDir.value[this.hitIdx].copy(Mi),this.hitAges[this.hitIdx]=0,this.hitIdx=(this.hitIdx+1)%4),this.flash=Math.min(1,this.flash+.5)}return e>0&&(this.hp-=e,Math.random()<.35&&this.game.fx.sparks(cn.copy(this.pos).addScaledVector(Mi.applyQuaternion(this.obj.quaternion),this.radius*.5),4,16756832)),this.hp<=0?(this.hp=0,!0):!1}steerTo(e,t,n=1){cn.subVectors(e,this.pos);const i=Math.hypot(cn.x,cn.z),r=Math.atan2(cn.x,cn.z),a=-Math.atan2(cn.y,i),o=this.stats.turn*n*t,l=fu(r-this.yaw),c=wt(l,-o,o);return this.yaw=fu(this.yaw+c),this.yawRate=c/Math.max(t,1e-4),this.pitch+=wt(a-this.pitch,-o*.7,o*.7),this.pitch=wt(this.pitch,-1.2,1.2),Math.abs(l)+Math.abs(a-this.pitch)}updateMotion(e,t){const n=this.stats;let i=n.speed*this.throttle;this.boost&&this.energy>1&&(i=n.speed*1.75,this.energy-=14*e),this.cruise&&(i=n.speed*5.5);const r=this.cruise?.9:i>this.speed?1.6:2.2;this.speed=Fi(this.speed,i,r,e),this.roll=Fi(this.roll,wt(this.yawRate*.45,-.9,.9),4,e),this.obj.quaternion.setFromEuler(Y_.set(this.pitch,this.yaw,this.roll,"YXZ")),this.forwardTo(this.vel).multiplyScalar(this.speed),this.pos.addScaledVector(this.vel,e),t&&t.collide(this.pos,this.radius*.6,this.vel)&&(this.speed*=.96),this.game.time-this.lastHit>3&&(this.shield=Math.min(this.maxShield,this.shield+n.shieldRegen*e)),n.hullRegen&&this.game.time-this.lastHit>5&&(this.hp=Math.min(this.maxHp,this.hp+this.maxHp*n.hullRegen*e)),!this.firing&&!this.boost?this.energy=Math.min(this.maxEnergy,this.energy+n.energyRegen*e):this.energy=Math.min(this.maxEnergy,this.energy+n.energyRegen*.25*e)}updateVisual(e){const t=this.shieldMesh.material.uniforms;for(let i=0;i<4;i++)this.hitAges[i]+=e,t.uHitAge.value[i]=this.hitAges[i];this.flash=Math.max(0,this.flash-e*1.6),t.uFlash.value=this.flash,t.uStrength.value=this.maxShield>0?this.shield/this.maxShield:0;const n=this.cruise?1.6:wt(this.speed/(this.stats.speed||1),.12,1.75);for(const i of this.engines)i.ex.scale.z=i.ex.userData.baseLen*(.25+n*.9)*(.92+Math.random()*.16),i.ex.material.uniforms.uPower.value=.35+n*.5,i.sp&&i.sp.scale.setScalar(i.sp.userData.baseScale*(.7+n*.45))}remove(){this.dead=!0,this.game.scene.remove(this.obj),this.obj.traverse(e=>{e.material&&e.material.isShaderMaterial}),this.shieldMesh.material.dispose()}}class Z_{constructor(e,t=1600){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.col=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.size=new Float32Array(t),this.alpha=new Float32Array(t);const n=new bt;n.setAttribute("position",new xt(this.pos,3).setUsage(Ur)),n.setAttribute("color",new xt(this.col,3).setUsage(Ur)),n.setAttribute("aSize",new xt(this.size,1).setUsage(Ur)),n.setAttribute("aAlpha",new xt(this.alpha,1).setUsage(Ur));const i=new gt({uniforms:{uMap:{value:Jt()},uPx:{value:1}},vertexShader:`attribute float aSize; attribute float aAlpha; attribute vec3 color; uniform float uPx; varying vec3 vC; varying float vA;
        void main(){ vC=color; vA=aAlpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize = aSize*uPx*600.0/max(-mv.z,1.0); gl_Position=projectionMatrix*mv; }`,fragmentShader:"uniform sampler2D uMap; varying vec3 vC; varying float vA; void main(){ float t=texture2D(uMap, gl_PointCoord).a; gl_FragColor=vec4(vC*t*vA*2.0, t*vA); }",transparent:!0,depthWrite:!1,blending:mt});this.points=new fc(n,i),this.points.frustumCulled=!1,this.points.renderOrder=6,this.geo=n,e.add(this.points)}emit(e,t,n,i,r){if(this.n>=this.max)return;const a=this.n++;this.pos.set([e.x,e.y,e.z],a*3),this.vel.set([t.x,t.y,t.z],a*3);const o=n.isColor?n:new ne(n);this.col.set([o.r,o.g,o.b],a*3),this.size[a]=i,this.life[a]=r,this.maxLife[a]=r,this.alpha[a]=1}burst(e,t,n,i,r,a){const o=new ne(i);for(let l=0;l<t;l++)Mi.set(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize().multiplyScalar(n*(.3+Math.random()*.7)),this.emit(e,Mi,o,r*(.5+Math.random()),a*(.5+Math.random()*.8))}sparks(e,t,n){this.burst(e,t,30,n,1.2,.5)}update(e){let t=0;for(;t<this.n;){if(this.life[t]-=e,this.life[t]<=0){const r=--this.n;if(t!==r){for(let a=0;a<3;a++)this.pos[t*3+a]=this.pos[r*3+a],this.vel[t*3+a]=this.vel[r*3+a],this.col[t*3+a]=this.col[r*3+a];this.life[t]=this.life[r],this.maxLife[t]=this.maxLife[r],this.size[t]=this.size[r]}continue}const n=Math.exp(-1.2*e);for(let r=0;r<3;r++)this.vel[t*3+r]*=n,this.pos[t*3+r]+=this.vel[t*3+r]*e;const i=this.life[t]/this.maxLife[t];this.alpha[t]=i*i,t++}this.geo.setDrawRange(0,this.n);for(const n of["position","color","aSize","aAlpha"])this.geo.attributes[n].needsUpdate=!0}}function J_(){const s=new Fs(1,1);s.rotateY(-Math.PI/2),s.translate(0,0,.5);const e=s.clone();e.rotateZ(Math.PI/2);const t=new bt,n=s.attributes.position.array,i=e.attributes.position.array,r=s.attributes.uv.array,a=e.attributes.uv.array,o=new Float32Array(n.length+i.length);o.set(n),o.set(i,n.length);const l=new Float32Array(r.length+a.length);l.set(r),l.set(a,r.length);const c=Array.from(s.index.array),h=Array.from(e.index.array).map(u=>u+s.attributes.position.count);return t.setAttribute("position",new xt(o,3)),t.setAttribute("uv",new xt(l,2)),t.setIndex(c.concat(h)),t}class Q_{constructor(e){this.game=e,this.scene=e.scene,this.particles=new Z_(e.scene),this.beamGeo=J_(),this.beams=[],this.missiles=[],this.crates=[],this.waves=[],this.flashLight=new Nd(16752736,0,600,1.5),e.scene.add(this.flashLight),this.missileTpl=W_(),this.crateTpl=G_()}sparks(e,t,n){this.particles.sparks(e,t,n)}makeBeam(e){const t=new dt(this.beamGeo,T_(e));return t.material.uniforms.uTime=pn.uTime,t.frustumCulled=!1,t.visible=!1,t.renderOrder=7,this.scene.add(t),t}showBeam(e,t,n,i){e.visible=!0,e.position.copy(t),e.lookAt(n);const r=t.distanceTo(n);e.scale.set(i,i,r),e.material.uniforms.uLen.value=r}explosion(e,t=1,n=16752720){const i=this.particles;i.burst(e,Math.round(40*Math.min(t,3)),70*t,n,6*t,1.1),i.burst(e,Math.round(30*Math.min(t,3)),140*t,16773312,2.2*t,.7),i.burst(e,16,30*t,6975354,9*t,2.2);const r=new Zt(new Kt({map:Jt(),color:new ne(n).multiplyScalar(2),blending:mt,depthWrite:!1,transparent:!0}));r.position.copy(e),r.scale.setScalar(10*t),this.scene.add(r);const a=new dt(new Rr(.8,1,48),new sn({color:new ne(.6,.85,1).multiplyScalar(2),transparent:!0,side:Bt,blending:mt,depthWrite:!1}));a.position.copy(e),a.lookAt(this.game.camera.position),this.scene.add(a),this.waves.push({sp:r,ring:a,t:0,scale:t}),this.flashLight.position.copy(e),this.flashLight.intensity=60*t,this.flashLight.distance=400*t,this.game.audio.play("explosion",{pos:e,vol:Math.min(1,.5+t*.3)});const o=this.game.player;if(o){const l=1-e.distanceTo(o.pos)/700;l>0&&this.game.pad.rumble(l*Math.min(1,.35+t*.25),l*.7,180+t*120)}}launchMissile(e,t,n){const i=this.missileTpl.clone(!0),r=e.forwardTo(new E);i.position.copy(e.pos).addScaledVector(r,e.radius*.6).add(new E(0,-1.5,0)),i.lookAt(cn.copy(i.position).add(r)),this.scene.add(i),this.missiles.push({obj:i,pos:i.position,vel:r.clone().multiplyScalar(Math.max(e.speed,40)+40),target:t,owner:e,dmg:n,life:7}),this.game.audio.play("missile",{pos:e.pos,vol:.7})}dropCrate(e,t,n=0){const i=this.crateTpl.clone(!0);i.position.copy(e).add(new E((Math.random()-.5)*16,(Math.random()-.5)*8,(Math.random()-.5)*16)),this.scene.add(i),this.crates.push({obj:i,pos:i.position,cargo:t,credits:n,life:240,spin:new E(Math.random(),Math.random(),Math.random())})}clearAll(){for(const e of this.missiles)this.scene.remove(e.obj);for(const e of this.crates)this.scene.remove(e.obj);for(const e of this.waves)this.scene.remove(e.sp),this.scene.remove(e.ring);this.missiles=[],this.crates=[],this.waves=[]}update(e){this.particles.update(e),this.flashLight.intensity*=Math.exp(-e*7);for(let n=this.waves.length-1;n>=0;n--){const i=this.waves[n];i.t+=e;const r=i.t/.9;i.sp.scale.setScalar(10*i.scale*(1+r*3)),i.sp.material.opacity=Math.max(0,1-r),i.ring.scale.setScalar(4+70*i.scale*r),i.ring.material.opacity=Math.max(0,1-r),r>=1&&(this.scene.remove(i.sp),this.scene.remove(i.ring),i.sp.material.dispose(),i.ring.material.dispose(),i.ring.geometry.dispose(),this.waves.splice(n,1))}for(let n=this.missiles.length-1;n>=0;n--){const i=this.missiles[n];i.life-=e;const r=i.target;if(r&&!r.dead){cn.subVectors(r.pos,i.pos);const a=cn.length();if(cn.normalize().multiplyScalar(300),i.vel.lerp(cn,1-Math.exp(-e*3.2)),a<r.radius+6){const o=r.damage(i.dmg,i.pos,i.owner);r===this.game.player&&this.game.pad.rumble(.75,.6,260),this.particles.burst(i.pos,24,60,16760960,3,.6),this.game.audio.play("explosion",{pos:i.pos,vol:.45}),this.game.onShipHit(r,i.owner,o),i.life=0}}else i.vel.multiplyScalar(1+e*.5);i.pos.addScaledVector(i.vel,e),i.obj.lookAt(Mi.copy(i.pos).add(i.vel)),Math.random()<.8&&this.particles.emit(i.pos,Mi.set(0,0,0),new ne(.9,.85,.8),2.2,.8),i.life<=0&&(this.scene.remove(i.obj),this.missiles.splice(n,1))}const t=this.game.player;for(let n=this.crates.length-1;n>=0;n--){const i=this.crates[n];i.life-=e,i.obj.rotation.x+=i.spin.x*e,i.obj.rotation.y+=i.spin.y*e;let r=i.life<=0;if(!r&&t&&!t.dead&&!this.game.docked){const a=i.pos.distanceTo(t.pos);a<90+t.radius&&i.pos.lerp(t.pos,1-Math.exp(-e*3)),a<t.radius+6&&(r=this.game.collectCrate(i))}if(!r){for(const a of this.game.outlaws)if(!a.dead&&i.pos.distanceTo(a.pos)<a.radius+12){for(const o in i.cargo)a.cargo[o]=(a.cargo[o]||0)+i.cargo[o];r=!0;break}}r&&(this.scene.remove(i.obj),this.crates.splice(n,1))}}}const Rt={agricultural:{name:"Verdant Cooperative",short:"Cooperative",color:"#7bc86c",rival:"industrial",blurb:"Farm worlds feeding the sector. Value reliable haulers and relief work."},mining:{name:"Deepcore Union",short:"Union",color:"#d9a35a",rival:"hightech",blurb:"Miners and refiners. Respect pilots who work the rocks."},industrial:{name:"Forge Combine",short:"Combine",color:"#9aa6b8",rival:"agricultural",blurb:"Shipyards and foundries. Pay well, hold grudges."},hightech:{name:"Lumen Institute",short:"Institute",color:"#3fb8c8",rival:"mining",blurb:"Labs and data vaults. Discreet, demanding, generous."},frontier:{name:"Free Settlers",short:"Settlers",color:"#f0703c",rival:"pirate",blurb:"Hardscrabble colonies on the edge. Loyal to those who protect them."},pirate:{name:"Red Wake",short:"Red Wake",color:"#ff4a3a",rival:null,pirate:!0,blurb:"The outlaw syndicate behind the raids. Their goodwill means fewer knives in the dark."}},Da=["agricultural","mining","industrial","hightech","frontier","pirate"],eM=Da.filter(s=>s!=="pirate"),Xl=[{min:-1/0,name:"Hostile",level:-2,buy:.12,sell:-.12,repair:.25,raid:1.6},{min:-24,name:"Unfriendly",level:-1,buy:.05,sell:-.05,repair:.1,raid:1.25},{min:-7,name:"Neutral",level:0,buy:0,sell:0,repair:0,raid:1},{min:10,name:"Friendly",level:1,buy:-.03,sell:.03,repair:-.1,raid:.75},{min:25,name:"Honored",level:2,buy:-.06,sell:.06,repair:-.2,raid:.5},{min:50,name:"Allied",level:3,buy:-.1,sell:.1,repair:-.3,raid:.3}];function hn(s){let e=Xl[0];for(const t of Xl)s>=t.min&&(e=t);return e}function tM(s){return Xl.find(e=>e.min>s)||null}function nn(s,e){return s.factions&&s.factions[e]||0}function nM(s,e){if(s==="pirate"){const n=Math.round((e.raid-1)*100);return n===0?"Normal raid frequency":`Pirate raids ${n>0?"+":""}${n}%${e.level<=-1?" · they hunt you":""}${e.level>=2?" · Ghost Transponder for sale at Frontier stations":""}`}const t=[];return(e.buy||e.sell)&&t.push(`prices ${e.sell>0?"better":"worse"} by ${Math.round(Math.abs(e.sell)*100)}%`),e.repair&&t.push(`repairs ${e.repair>0?"+":""}${Math.round(e.repair*100)}%`),e.level>=1&&t.push("exclusive contracts"),e.level>=2&&t.push(`${ql[s].name} for sale`),e.level<=-1&&t.push(`${Rt[s].short} enforcers hunt you in their space`),t.join(" · ")}const ds={bioweave:{faction:"agricultural",name:"Bio-Weave Plating",desc:"Living hull lattice. Repairs 1.5% of hull per second after 5 s out of combat.",price:26e3},drillhead:{faction:"mining",name:"Deepcore Drill Head",desc:"Mining rate +40%, rare-find chance +5 points.",price:24e3},overcharger:{faction:"industrial",name:"Forge Overcharger",desc:"Beam damage +25%.",price:3e4},lattice:{faction:"hightech",name:"Lumen Lattice",desc:"Barrier capacity +35%, regeneration +25%.",price:3e4},driftengine:{faction:"frontier",name:"Drift Engine",desc:"Top speed +15%. Cruise can no longer be disrupted by nearby hostiles or interdiction.",price:28e3},ghost:{faction:"pirate",name:"Ghost Transponder",desc:"Masks your signature. Pirate raid chance halved. Sold quietly at Frontier stations.",price:22e3}},ql=Object.fromEntries(Object.entries(ds).map(([s,e])=>[e.faction,{id:s,...e}]));function Mu(s){return s==="bastion"?2:1}function iM(s,e){if(!e||!e.length)return s;const t={...s};for(const n of e)n==="bioweave"&&(t.hullRegen=.015),n==="drillhead"&&(t.mineRate*=1.4,t.rare+=.05),n==="overcharger"&&(t.dps*=1.25),n==="lattice"&&(t.shield=Math.round(t.shield*1.35),t.shieldRegen*=1.25),n==="driftengine"&&(t.speed*=1.15,t.noInterdict=!0),n==="ghost"&&(t.ghost=!0);return t}function Vo(s){if((!s.factions||typeof s.factions!="object")&&(s.factions=Object.fromEntries(Da.map(e=>[e,0])),Number.isFinite(s.rep)&&s.rep!==0))for(const e of eM)s.factions[e]=Math.round(s.rep/2);for(const e of Da)Number.isFinite(s.factions[e])||(s.factions[e]=0);s.rep=0,(!s.sales||typeof s.sales!="object")&&(s.sales={day:0,by:{}});for(const e of s.ships)Array.isArray(e.uniques)||(e.uniques=[]);return s}function bu(s){return{v:1,seed:s,credits:2e3,day:1,dayTime:.25,systemId:null,pos:null,ships:[{uid:1,hull:"wren",mods:Ia(),hp:null,missiles:0,cargo:{}}],active:1,nextUid:2,market:{},intel:{},wanted:{},outlawRoll:{},derelictLooted:{},stats:{earned:0,mined:0,kills:0,trades:0,jumps:0,contracts:0},missions:[],offers:{},events:{day:0,list:[]},rep:0,standing:{},tutorial:{mined:!1,docked:!1,sold:!1},sound:!0,quality:"high"}}class Go{constructor(e,t){this.galaxy=e,this.state=t;for(const n of e.systems)t.market[n.id]||(t.market[n.id]=this.initMarket(n))}initMarket(e){const t=new Ft(e.seed+99),n={drift:{},pressure:{},stock:{}};for(const i of zn)n.drift[i.id]=t.range(.92,1.08),n.pressure[i.id]=0,n.stock[i.id]=this.sells(e,i.id)?Math.round(t.range(60,140)*(i.base>150?.4:1)):0;return n}sys(e){return this.galaxy.systems[e]}mult(e,t){return Mn[this.sys(e).eco].mult[t]}sells(e,t){return Mn[e.eco].mult[t]<1}eventMult(e,t){return sM(this.state,e,t)}factionMult(e,t){const n=hn(nn(this.state,this.sys(e).eco));return 1+(t==="sell"?n.sell:n.buy)}sellPrice(e,t){const n=this.state.market[e];return Math.max(1,Math.round(Xe[t].base*this.mult(e,t)*this.eventMult(e,t)*this.factionMult(e,"sell")*n.drift[t]*.97*(1-.32*Math.min(1,Math.max(0,n.pressure[t])))))}buyPrice(e,t){const n=this.state.market[e];return Math.max(1,Math.round(Xe[t].base*this.mult(e,t)*this.eventMult(e,t)*this.factionMult(e,"buy")*n.drift[t]*1.05*(1+.2*Math.max(0,-n.pressure[t]))))}stock(e,t){return this.state.market[e].stock[t]}canBuy(e,t){return this.sells(this.sys(e),t)}sell(e,t,n){const i=this.state.market[e];let r=0;for(let a=0;a<n;a++)r+=this.sellPrice(e,t),i.pressure[t]+=1/(Xe[t].base>100?45:80);return i.stock[t]+=this.sells(this.sys(e),t)?n:0,r}quoteBuy(e,t,n){const i=this.state.market[e],r=i.pressure[t];let a=0;for(let o=0;o<n;o++)a+=this.buyPrice(e,t),i.pressure[t]-=1/120;return i.pressure[t]=r,a}buy(e,t,n){const i=this.state.market[e];let r=0;for(let a=0;a<n;a++)r+=this.buyPrice(e,t),i.pressure[t]-=1/120;return i.stock[t]-=n,r}recordIntel(e){const t={};for(const n of zn)t[n.id]={s:this.sellPrice(e,n.id),b:this.canBuy(e,n.id)?this.buyPrice(e,n.id):null};this.state.intel[e]={day:this.state.day,prices:t}}daily(e){const t=new Ft(this.state.seed+e*31);for(const n of this.galaxy.systems){const i=this.state.market[n.id];for(const r of zn)if(i.pressure[r.id]*=.55,i.drift[r.id]=Math.min(1.16,Math.max(.85,i.drift[r.id]+t.range(-.05,.05))),this.sells(n,r.id)){const a=r.base>150?60:140;i.stock[r.id]=Math.min(a,i.stock[r.id]+Math.round(a*.3))}}}}function sM(s,e,t){const n=s.events;if(!n||!n.list.length)return 1;let i=1;for(const r of n.list){if(r.type!=="market"||r.status!=="active"||s.day<r.start||s.day>r.end)continue;const a=r.mult[t];a&&(r.sys===e?i*=a:r.scope==="all"&&(i*=1+(a-1)*.7))}return i}function rM(s){return St[s.hull].price*.6}function jl(s){let e=s.credits;for(const t of s.ships){e+=rM(t);for(const n in t.cargo)e+=t.cargo[n]*Xe[n].base}return e}function un(s){const e=jl(s),t=[8e3,25e3,6e4,15e4];let n=0;for(;n<t.length&&e>=t[n];)n++;return n}const Su=["Drifter","Hauler","Prospector","Merchant Captain","Frontier Magnate"],Na=4,Bd=2,aM=["courier","passenger","supply"],oM=["Halden Logistics","Orbital Relief Fund","Meridian Survey Corps","Kessler & Daughters","Free Haulers Guild","Station Medical Bay","Colony Administration","Brightline Couriers"],lM=["sealed medical crates","survey core samples","encrypted data cores","reactor spares","diplomatic pouches","seed vault canisters","relief rations","precision optics"],cM=["a geology team","a settler family","off-shift miners","a medical crew","pilgrims","a news crew","engineering contractors","survey students"],hM=["Magistrate Okafor","Envoy Lusine Varga","Director Halvard Ness","Dr. Mireille Achterberg","Senator Ilya Brandt","Arbiter Yuen Sato"],Wo=new Map;function In(s,e){const t=`${s.seed}:${e}`;return Wo.has(t)||Wo.set(t,Fd(s.systems[e],s)),Wo.get(t)}function zd(s,e){const t=s.systems.map(()=>1/0);t[e]=0;const n=[e];for(;n.length;){const i=n.shift();for(const r of s.systems[i].links)t[r]===1/0&&(t[r]=t[i]+1,n.push(r))}return t}function uM(s,e,t){const n={[e]:-1},i=[e];for(;i.length;){const o=i.shift();if(o===t)break;for(const l of s.systems[o].links)l in n||(n[l]=o,i.push(l))}if(!(t in n))return null;const r=[];let a=t;for(;a!==-1;)r.unshift(a),a=n[a];return r}function $o(s){return Array.isArray(s.missions)||(s.missions=[]),(!s.offers||typeof s.offers!="object")&&(s.offers={}),Number.isFinite(s.stats.contracts)||(s.stats.contracts=0),(!s.standing||typeof s.standing!="object")&&(s.standing={}),s}const Yl=[{min:-1/0,name:"Blacklisted",pay:-.15,offers:-2,perks:"Fewer offers, lower pay"},{min:-2,name:"New face",pay:0,offers:0,perks:""},{min:3,name:"Regular",pay:.05,offers:0,perks:"+5% pay · more special contracts"},{min:8,name:"Preferred",pay:.1,offers:1,perks:"+10% pay · extra offer · no deposits"},{min:15,name:"Partner",pay:.15,offers:1,perks:"+15% pay · extra offer · no deposits · daily priority contract"}];function Ua(s,e){return s.standing&&s.standing[e]||0}function Oa(s){let e=Yl[0],t=0;return Yl.forEach((n,i)=>{s>=n.min&&(e=n,t=i-1)}),{...e,level:t}}function dM(s){return Yl.find(e=>e.min>s)||null}function Tu(s){return 1+(s.hot||s.vip||s.ore||s.priority||s.exclusive?1:0)}function fM(s){return s.vip?.12:s.hot?.1:0}function Hd(s,e){return s.req?s.req.hull?e.hull===s.req.hull||s.req.hull==="kestrel"&&e.hull==="bastion":(e.mods[s.req.mod]||0)>=s.req.lvl:!0}function Vd(s){return s?s.hull?s.hull==="kestrel"?"an armed Kestrel (or Bastion)":`a ${St[s.hull].name} ${St[s.hull].cls}`:`${ki[s.mod].name} Mk${s.lvl}+`:""}function pM(s){if(s.missions!=null){if(!Array.isArray(s.missions))throw new Error("the contract list is invalid");for(const e of s.missions)if(!e||!aM.includes(e.type)||!e.dest||!Number.isInteger(e.dest.sys)||!Number.isFinite(e.reward)||!Number.isInteger(e.deadline))throw new Error("a contract record is incomplete")}}function Fa(s){return s.type==="courier"?s.qty:s.type==="passenger"?s.pax*Bd:0}function mM(s){return s.type==="courier"?s.qty*35+(s.hot?1500:0):s.type==="passenger"?s.pax*(s.vip?400:60):0}function Gd(s){return s.type!=="supply"}function gM(s,e,t){const{galaxy:n,sysId:i,day:r,rank:a,tier:o}=e,l=e.dist,c=(1+a*.15)*(1+o.pay),h=.07*Math.max(0,o.level),u=N=>Math.round(N/10)*10,d=s.weighted({courier:3,passenger:3,supply:2}),f=n.systems.filter(N=>N.id!==i&&l[N.id]<=3),m=()=>{const N={};for(const F of f)N[F.id]=l[F.id]===1?5:l[F.id]===2?3:1;return Number(s.weighted(N))},v=N=>{const F=In(n,i);if(N&&F.planets.length&&s.chance(.3)){const Y=s.int(0,F.planets.length-1);return{sys:i,kind:"planet",planet:Y,name:`${F.planets[Y].name} colony`}}const G=m(),z=In(n,G);if(N&&z.planets.length&&s.chance(.35)){const Y=s.int(0,z.planets.length-1);return{sys:G,kind:"planet",planet:Y,name:`${z.planets[Y].name} colony`}}return{sys:G,kind:"station",name:z.station.name}},g={id:`${i}-${r}-${t}`,type:d,client:s.pick(oM),from:{sys:i,name:In(n,i).station.name},offeredDay:r};if(d==="supply"){const N=v(!1),F=Mn[n.systems[N.sys].eco].mult,G=zn.filter(De=>F[De.id]>=1.15),z=G.length?s.pick(G):s.pick(zn),Y=s.chance(.65)?s.int(6,16):s.int(20,45),W=l[N.sys],le={...g,dest:N,jumps:W,commodity:z.id,qty:Y,title:`Supply ${Y} ${z.name}`,reward:u(Y*z.base*F[z.id]*1.4*(1+a*.05)*(1+o.pay)),deposit:0,deadline:r+2+W*2},me=s.next(),xe=s.weighted({lumenite:2,cobalt:3,helion:2});if(me<.3+h&&xe!==z.id){const De=xe==="lumenite"?3+Math.floor(s.next()*4):8+Math.floor(s.next()*8);Object.assign(le,{ore:xe,oreQty:De,oreMined:0,title:`${le.title} + ${De} mined ${Xe[xe].name}`,reward:le.reward+u(De*Xe[xe].base*2.2),deadline:le.deadline+1})}return le}const p=v(!0),y=l[p.sys],x=p.kind==="planet"?1:0;if(d==="courier"){const N=s.next(),F=N<.6?s.int(6,16):N<.9?s.int(20,45):s.int(55,110),G=s.pick(lM),z=s.next()<.18+h;return{...g,dest:p,jumps:y,qty:F,cargoName:G,hot:z,title:z?`Hot cargo: ${F} units of ${s.pick(vM)}`:`Deliver ${F} units of ${G}`,reward:u((180+380*y+F*(9+6*y)+x*120)*c*(z?1.6:1)),deposit:u(F*(z?18:12)),deadline:r+1+y*2+x}}const _=s.chance(.22),A=_?s.int(1,2):s.int(1,6),w=_?s.pick(hM):s.pick(cM);let C=u((140+330*y+A*(70+60*y)+x*100)*(_?1.8:1)*c);const P={...g,dest:p,jumps:y,pax:A,vip:_,who:w,title:_?`Escort ${w}${A>1?" + aide":""}`:`Transport ${A} passenger${A>1?"s":""} (${w})`,reward:C,deposit:0,deadline:r+1+y*2+x},S=s.next(),M=s.next(),I=s.next(),B=s.next();if(_&&S<.6){const N=a>=2?2:1,F=[{hull:"kestrel"},{hull:"mule"},{mod:"barrier",lvl:N},{mod:"beam",lvl:N},{mod:"hull",lvl:N},{mod:"sensors",lvl:1}];P.req=F[Math.floor(M*F.length)],P.reward=u(P.reward*1.3)}else if(!_&&S<.35+h){const N=In(n,p.sys),F=N.planets.map((G,z)=>z).filter(G=>!(p.kind==="planet"&&p.planet===G));if(M<.5&&A>=2&&F.length){const G=F[Math.floor(I*F.length)];P.side={kind:"detour",sys:p.sys,planet:G,name:`${N.planets[G].name} colony`,reward:u(150+90*y+B*120),done:!1,text:`One passenger asks to be dropped at ${N.planets[G].name} colony on the way`}}else P.side={kind:"wreck",sys:I<.5?p.sys:i,seed:Math.floor(B*1e9),text:"A passenger claims to know where a wreck is drifting"}}return P}const vM=["unregistered weapon cores","seized Lumenite bullion","black-box flight recorders","contraband stim crates","a smuggler's strongbox","prototype drive coils"];function yM(s,e,t,n){const{galaxy:i,sysId:r,day:a,dist:o}=e,l=Rt[t],c=1.6+n*.15,h=p=>Math.round(p/10)*10,u=p=>{const y=i.systems.filter(x=>x.id!==r&&o[x.id]<=3&&p(x));return y.length?y[Math.floor(s.next()*y.length)]:null},d={id:`${r}-${a}-x`,client:l.name,from:{sys:r,name:In(i,r).station.name},offeredDay:a,exclusive:t,deposit:0};if(t==="agricultural"){const p=u(A=>A.eco==="frontier"||A.eco==="mining")||u(()=>!0);if(!p)return null;const y=s.next()<.6?"food":"medical",x=15+Math.floor(s.next()*20),_=o[p.id];return{...d,type:"supply",dest:{sys:p.id,kind:"station",name:In(i,p.id).station.name},jumps:_,commodity:y,qty:x,title:`Relief convoy: ${x} ${Xe[y].name}`,reward:h(x*Xe[y].base*1.5*c+300*_),deadline:a+2+_*2}}if(t==="frontier"){const p=u(w=>w.eco==="frontier")||u(()=>!0);if(!p)return null;const y=In(i,p.id),x=Math.floor(s.next()*y.planets.length),_=4+Math.floor(s.next()*3),A=o[p.id];return{...d,type:"passenger",dest:{sys:p.id,kind:"planet",planet:x,name:`${y.planets[x].name} colony`},jumps:A,pax:_,vip:!1,who:"a settler convoy",title:`Settler convoy: ${_} colonists`,reward:h((140+330*A+_*(70+60*A)+100)*c),deadline:a+2+A*2}}const f={mining:{pick:p=>p.eco==="industrial",cargo:"certified ore assays",title:"Union assay run"},industrial:{pick:p=>p.eco==="mining"||p.eco==="frontier",cargo:"prototype drive blocks",title:"Combine prototype haul"},hightech:{pick:p=>p.eco!=="hightech",cargo:"sealed Institute data vaults",title:"Institute vault transfer",hot:!0}}[t],m=u(f.pick)||u(()=>!0);if(!m)return null;const v=10+Math.floor(s.next()*15),g=o[m.id];return{...d,type:"courier",dest:{sys:m.id,kind:"station",name:In(i,m.id).station.name},jumps:g,qty:v,cargoName:f.cargo,hot:!!f.hot,title:`${f.title}: ${v} units`,reward:h((180+380*g+v*(9+6*g))*c*(f.hot?1.3:1)),deadline:a+1+g*2}}function wu(s,e,t,n){const i=String(t);let r=s.offers[i];if(!r||r.day!==s.day){const a=new Ft(s.seed*31+t*977+s.day*7919>>>0),o=Oa(Ua(s,t)),l={galaxy:e,sysId:t,day:s.day,rank:n,tier:o,dist:zd(e,t)},c=Math.max(2,4+a.int(0,1)+o.offers),h=[];for(let f=0;f<c;f++)h.push(gM(a,l,f));const u=e.systems[t].eco,d=hn(nn(s,u));if(d.level>=1){const f=yM(a,l,u,d.level);f&&h.push(f)}if(o.level>=2)for(const f of h)f.deposit=0;if(o.level>=3){const f=h.reduce((m,v)=>v.reward>m.reward?v:m);f.priority=!0,f.reward=Math.round(f.reward*1.35/10)*10,f.title=`Priority: ${f.title}`}r={day:s.day,list:h,taken:[]};for(const f of Object.keys(s.offers))s.offers[f].day!==s.day&&delete s.offers[f];s.offers[i]=r}return r.list.filter(a=>!r.taken.includes(a.id))}function xM(s,e){const t=s.offers[String(e.from.sys)];t&&!t.taken.includes(e.id)&&t.taken.push(e.id)}function _M(s){const e=[];return s.exclusive&&e.push({label:`${Rt[s.exclusive].short.toUpperCase()} EXCLUSIVE`,cls:"excl"}),s.priority&&e.push({label:"PRIORITY",cls:"prio"}),s.hot&&e.push({label:"HOT CARGO",cls:"hot"}),s.req&&e.push({label:"DEMANDS",cls:"req"}),s.side&&e.push({label:s.side.kind==="wreck"?"TIP":"SIDE REQUEST",cls:"side"}),s.ore&&e.push({label:"MINE IT",cls:"ore"}),e}function MM(s){return s.type==="passenger"?s.vip?{label:"VIP ESCORT",cls:"vip"}:{label:"PASSENGERS",cls:"pax"}:s.type==="courier"?{label:"COURIER",cls:"courier"}:{label:"SUPPLY",cls:"supply"}}function bM(s,e,t){const n=e.systems[s.dest.sys].name,i=zd(e,t)[s.dest.sys];return`${s.dest.name} · ${n}${i===0?" (this system)":` (${i} jump${i>1?"s":""})`}`}function SM(s){if(s.type==="supply")return`Bring ${s.qty} ${Xe[s.commodity].name} (buy or mine it)${s.ore?`<br>Plus <b>${s.oreQty} ${Xe[s.ore].name} you mine yourself</b>${s.ore==="helion"?" (gas giant deposits)":s.ore==="lumenite"?" (rare find in asteroids)":""} · mined ${s.oreMined||0}/${s.oreQty}`:""}`;if(s.type==="courier")return`Takes ${s.qty} hold space${s.hot?" · <b>outlaws know about this cargo</b> (more raids)":""}`;let e=`Takes ${s.pax*Bd} hold space (${s.pax} cabin${s.pax>1?"s":""})${s.vip?" · outlaws hunt VIPs":""}`;return s.req&&(e+=`<br>Demands to travel in <b>${Vd(s.req)}</b>`),s.side&&(e+=`<br>${s.side.text}${s.side.kind==="detour"?` (+◈ ${s.side.reward}${s.side.done?", done":""})`:s.side.revealed?" (location on your chart)":""}`),e}function TM(s,e){const t=s.deadline-e;return`Due end of Day ${s.deadline} · ${t<=0?"TODAY":`${t} day${t>1?"s":""} left`}`}const Lr="lumen_drift_save_v1",Eu="lumen_drift_save_corrupt",Wd=s=>`lumen_drift_slot_${s}`,wM=3;function Tc(s){const e=t=>{throw new Error(t)};(!s||typeof s!="object")&&e("the save is empty"),s.v!==1&&e(`unsupported save version (${s.v})`),Number.isFinite(s.seed)||e("the galaxy seed is missing"),Number.isFinite(s.credits)||e("credits are missing"),(!Number.isInteger(s.day)||s.day<1)&&e("the day counter is invalid"),(!Array.isArray(s.ships)||!s.ships.length)&&e("no ships are recorded");for(const t of s.ships)St[t.hull]||e(`unknown ship type "${t.hull}"`),(!t.mods||typeof t.mods!="object"||!t.cargo||typeof t.cargo!="object")&&e("a ship record is incomplete");return s.ships.some(t=>t.uid===s.active)||e("the active ship is missing"),s.systemId!=null&&!(Number.isInteger(s.systemId)&&s.systemId>=0&&s.systemId<gr(s.seed).systems.length)&&e("the current star system is invalid"),(!s.market||typeof s.market!="object"||!s.stats||!s.tutorial)&&e("market or pilot records are missing"),pM(s),s}function wc(s){const e=s.ships.find(i=>i.uid===s.active),t=gr(s.seed),n=t.systems[s.systemId!=null?s.systemId:t.startId];return{day:s.day,credits:Math.round(s.credits),ship:St[e.hull].name,fleet:s.ships.length,system:n?n.name:"?"}}const $d=s=>Tc(JSON.parse(s));function EM(){const s=localStorage.getItem(Lr);if(s==null)return null;try{return $d(s)}catch(e){return console.warn("Autosave unreadable, kept a copy under",Eu,e.message),localStorage.setItem(Eu,s),localStorage.removeItem(Lr),null}}function AM(s){try{return localStorage.setItem(Lr,JSON.stringify(s)),!0}catch(e){return console.warn("Autosave failed:",e.name,e.message),!1}}function RM(){localStorage.removeItem(Lr)}function CM(){const s=localStorage.getItem(Lr);if(s==null)return null;try{const e=$d(s);return{...wc(e),savedAt:e.savedAt||null}}catch(e){return{error:e.message}}}function Xo(s){const e=localStorage.getItem(Wd(s));if(e==null)return null;try{const t=JSON.parse(e),n=Tc(t.state);return{state:n,savedAt:t.savedAt,...wc(n)}}catch(t){return{error:t.message}}}function PM(s,e){localStorage.setItem(Wd(s),JSON.stringify({savedAt:Date.now(),state:e}))}function LM(s){return JSON.stringify({game:"lumen-drift",format:1,savedAt:Date.now(),state:s},null,1)}function IM(s){const e=new Date,t=n=>String(n).padStart(2,"0");return`lumen-drift-day${s.day}-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${t(e.getHours())}${t(e.getMinutes())}.json`}function DM(s){let e;try{e=JSON.parse(s)}catch{throw new Error("this file is not a Lumen Drift save (it is not readable save data)")}const t=e&&e.game==="lumen-drift"?e.state:e;try{return Tc(t)}catch(n){throw new Error(`this file can't be loaded: ${n.message}`)}}function NM(){!navigator.storage||!navigator.storage.persist||navigator.storage.persist().then(s=>console.info("Persistent storage",s?"granted":"not granted")).catch(s=>console.warn("Persistent storage request failed:",s.message))}function qo(s){if(!s)return"time unknown";const e=Math.round((Date.now()-s)/6e4);if(e<1)return"just now";if(e<60)return`${e} min ago`;const t=Math.round(e/60);return t<24?`${t} h ago`:new Date(s).toLocaleDateString()}const Xd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Hs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const UM=new Ha(-1,1,1,-1,0,1);class OM extends bt{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}}const FM=new OM;class Ec{constructor(e){this._mesh=new dt(FM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,UM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Kl extends Hs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=br.clone(e.uniforms),this.material=new gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ec(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Au extends Hs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class kM extends Hs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class BM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Q);this._width=n.width,this._height=n.height,t=new Dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:si}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Kl(Xd),this.copyPass.material.blending=ii,this.clock=new gx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Au!==void 0&&(a instanceof Au?n=!0:a instanceof kM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class zM extends Hs{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ne}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const HM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Us extends Hs{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Q(e.x,e.y):new Q(256,256),this.clearColor=new ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Dn(r,a,{type:si}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Dn(r,a,{type:si});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Dn(r,a,{type:si});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=HM;this.highPassUniforms=br.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Q(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Xd;this.copyUniforms=br.clone(h.uniforms),this.blendMaterial=new gt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:mt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ne,this.oldClearAlpha=1,this.basic=new sn,this.fsQuad=new Ec(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Q(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Us.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Us.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new gt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Us.BlurDirectionX=new Q(1,0);Us.BlurDirectionY=new Q(0,1);const VM={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class GM extends Hs{constructor(){super();const e=VM;this.uniforms=br.clone(e.uniforms),this.material=new Yy({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ec(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ye.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Nu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Uu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ou?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ql?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ku&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const WM={uniforms:{tDiffuse:{value:null},uTime:{value:0},uSat:{value:1.1},uContrast:{value:1.08},uLift:{value:.012},uShadow:{value:new ne(.02,.1,.16)},uHigh:{value:new ne(1,.92,.82)},uVignette:{value:.38},uGrain:{value:.035},uChroma:{value:.0016},uDamage:{value:0},uWarp:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime,uSat,uContrast,uLift,uVignette,uGrain,uChroma,uDamage,uWarp; uniform vec3 uShadow,uHigh; varying vec2 vUv;
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
    }`},$M={uniforms:{tDiffuse:{value:null},uMax:{value:24}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uMax; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      // bit-level Inf/NaN test (exponent all ones): unlike isnan(), D3D shader compilers on Windows
      // cannot optimise this away
      uvec3 e = floatBitsToUint(c.rgb) & uvec3(0x7F800000u);
      if (any(equal(e, uvec3(0x7F800000u)))) c.rgb = vec3(0.0);
      float m = max(max(c.r, c.g), c.b);
      if (m > uMax) c.rgb *= uMax / m;
      gl_FragColor = c;
    }`};class XM{constructor(e,t,n){this.renderer=e;const i=e.getSize(new Q);this.composer=new BM(e),this.renderPass=new zM(t,n),this.composer.addPass(this.renderPass),this.clamp=new Kl($M),this.composer.addPass(this.clamp),this.bloom=new Us(new Q(i.x/2,i.y/2),.7,.55,.8),this.composer.addPass(this.bloom),this.output=new GM,this.composer.addPass(this.output),this.grade=new Kl(WM),this.composer.addPass(this.grade),this.enabled=!0}setSize(e,t,n){this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.bloom.resolution.set(e*n*.5,t*n*.5)}setEnabled(e){this.enabled=e,this.bloom.enabled=e,this.grade.enabled=e}render(e,t){this.grade.uniforms.uTime.value=t,this.composer.render(e)}}const jo={calm:"./audio/bgm_calm.mp3",battle:"./audio/bgm_battle.mp3",beam:"./audio/sfx_beam.mp3",mine:"./audio/sfx_mine.mp3",missile:"./audio/sfx_missile.mp3",explosion:"./audio/sfx_explosion.mp3",click:"./audio/sfx_click.mp3",coins:"./audio/sfx_coins.mp3",warp:"./audio/sfx_warp.mp3",alarm:"./audio/sfx_alarm.mp3"};class qM{constructor(){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.9,this.master.connect(this.ctx.destination),this.sfx=this.ctx.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master),this.musicBus=this.ctx.createGain(),this.musicBus.gain.value=.42,this.musicBus.connect(this.master),this.buffers={},this.loops={},this.music={},this.current=null,this.listener=null,this.enabled=!0}async load(e){const t=Object.keys(jo);let n=0;await Promise.all(t.map(async i=>{try{const r=await fetch(jo[i]);if(!r.ok)throw new Error(`HTTP ${r.status} for ${jo[i]}`);const a=await r.arrayBuffer();this.buffers[i]=await this.ctx.decodeAudioData(a)}catch(r){console.warn("audio load failed",i,r)}n++,e&&e(n/t.length,i)}))}unlock(){this.ctx.state!=="running"&&this.ctx.resume()}setEnabled(e){this.enabled=e,this.master.gain.setTargetAtTime(e?.9:0,this.ctx.currentTime,.05)}attenuate(e){if(!e||!this.listener)return 1;const t=e.distanceTo(this.listener);return Math.max(0,1-t/1400)}play(e,{vol:t=1,pos:n=null,rate:i=1}={}){const r=this.buffers[e];if(!r)return;const a=t*this.attenuate(n);if(a<.02)return;const o=this.ctx.createBufferSource();o.buffer=r,o.playbackRate.value=i*(.94+Math.random()*.12);const l=this.ctx.createGain();l.gain.value=a,o.connect(l),l.connect(this.sfx),o.start()}loop(e,t,n,i=.5,r=1){let a=this.loops[e];if(n&&!a&&this.buffers[t]){const o=this.ctx.createBufferSource();o.buffer=this.buffers[t],o.loop=!0,o.playbackRate.value=r;const l=this.ctx.createGain();l.gain.value=0,o.connect(l),l.connect(this.sfx),o.start(),l.gain.setTargetAtTime(i,this.ctx.currentTime,.04),a=this.loops[e]={s:o,g:l}}else if(!n&&a){a.g.gain.setTargetAtTime(0,this.ctx.currentTime,.06);const o=a.s;setTimeout(()=>{try{o.stop()}catch{}},300),delete this.loops[e]}else n&&a&&a.g.gain.setTargetAtTime(i,this.ctx.currentTime,.05)}setMusic(e){if(this.current===e)return;const t=this.ctx.currentTime;if(this.current&&this.music[this.current]){const a=this.music[this.current];a.g.gain.setTargetAtTime(0,t,.8);const o=a.s;setTimeout(()=>{try{o.stop()}catch{}},4e3),delete this.music[this.current]}this.current=e;const n=this.buffers[e];if(!n)return;const i=this.ctx.createBufferSource();i.buffer=n,i.loop=!0;const r=this.ctx.createGain();r.gain.value=0,i.connect(r),r.connect(this.musicBus),i.start(),r.gain.setTargetAtTime(e==="battle"?.75:1,t,1.2),this.music[e]={s:i,g:r}}}const ga={distress:.07,vein:.06,market:.03,base:.035},jM=2,YM=1,Yo=4,KM=750,ZM=2200,Ac={agricultural:{title:"Crop blight",icon:"▲",scope:"all",mult:{food:1.9,medical:1.25},blurb:s=>`Blight on ${s}'s farms. Food Packs up sharply across the sector.`},mining:{title:"Mine collapse",icon:"▲",scope:"all",mult:{ferrite:1.7,cobalt:1.6,ice:1.4,helion:1.3},blurb:s=>`Shafts collapsed at ${s}. Raw ore prices up everywhere.`},industrial:{title:"Foundry strike",icon:"▲",scope:"all",mult:{parts:1.8,ferrite:.8,cobalt:.8},blurb:s=>`Strike shuts ${s}'s foundries. Machine Parts scarce, ore demand dips.`},hightech:{title:"Data core glut",icon:"▼",scope:"all",mult:{data:.55,luxury:1.3},blurb:s=>`Overproduction at ${s}. Data Cores crash; Luxury Crystal demand rises.`},frontier:{title:"Colony rush",icon:"▲",scope:"local",mult:{food:1.6,medical:1.7,parts:1.6},blurb:s=>`Settlers flood ${s}. Food, medicine and parts fetch premium prices there.`}},JM=(s,e)=>({agricultural:"Cooperative",mining:"Union",industrial:"Combine",hightech:"Institute",frontier:"Settlers"})[s.galaxy.systems[e].eco];function Ko(s){return(!s.events||typeof s.events!="object"||!Array.isArray(s.events.list))&&(s.events={day:0,list:[]}),Number.isFinite(s.rep)||(s.rep=0),s}function qd(s,e,t){return s.status==="done"||s.status==="lost"||e<s.start||e>s.end?!1:e>s.start||t>=(s.at||0)}function cr(s){return s.events.list.filter(e=>qd(e,s.day,s.dayTime))}function Ru(s,e){const t=s.day,n=s.events;if(n.day===t)return[];n.day=t,n.list=n.list.filter(l=>l.end>=t&&l.status!=="done"&&l.status!=="lost");const i=new Ft((s.seed^t*7919)+4242),r=[],a=(l,c)=>n.list.some(h=>h.type===l&&(c==null||h.sys===c)),o=l=>n.list.filter(c=>c.type===l).length;for(const l of e.systems){const c={distress:i.next(),vein:i.next(),market:i.next(),base:i.next()},h={a:i.next(),b:i.next(),c:i.next(),d:i.next(),seed:i.int(1,1e9)},u=In(e,l.id),d=m=>`${m}-${t}-${l.id}`;if(c.distress<ga.distress&&!a("distress",l.id)&&r.push({id:d("distress"),type:"distress",sys:l.id,start:t,end:t,at:.08+h.a*.65,seed:h.seed,trap:h.b<(l.eco==="frontier"?.4:.28),hintOk:h.c<.75,trader:Ds[Math.floor(h.d*Ds.length)],status:"active"}),c.vein<ga.vein&&u.fields.length&&!a("vein",l.id)&&r.push({id:d("vein"),type:"vein",sys:l.id,start:t,end:t,at:.05+h.a*.5,field:Math.floor(h.b*u.fields.length),seed:h.seed,status:"active"}),t>=2&&c.market<ga.market&&!a("market",l.id)&&o("market")+r.filter(m=>m.type==="market").length<jM){const m=Ac[l.eco],v=2+(h.c<.5?1:0);r.push({id:d("market"),type:"market",sys:l.id,start:t,end:t+v-1,at:0,eco:l.eco,title:m.title,icon:m.icon,scope:m.scope,mult:{...m.mult},status:"active"})}const f=ga.base*(l.eco==="frontier"?2:1);t>=3&&l.id!==e.startId&&c.base<f&&u.derelicts.length&&o("base")+r.filter(m=>m.type==="base").length<YM&&r.push({id:d("base"),type:"base",sys:l.id,start:t,end:t+2,at:0,derelict:Math.floor(h.d*u.derelicts.length),seed:h.seed,name:Ns[Math.floor(h.a*Ns.length)],guardsLeft:null,baseHp:1,status:"active"})}return n.list.push(...r),r}const Cu=(s,e)=>s.end===e?"ends today":`${s.end-e+1} days left`;function Zl(s){return s.type==="distress"?{ch:"⚠",col:"#f0703c"}:s.type==="vein"?{ch:"✦",col:"#c8f56a"}:s.type==="base"?{ch:"☠",col:"#ff4a3a"}:s.type==="wreck"?{ch:"✧",col:"#ffd34a"}:{ch:s.icon,col:s.icon==="▼"?"#ff6b4a":"#7bc86c"}}function jd(s,e){return e>=2?s.trap?"⚠ Signal analysis: spoofed transponder. Likely an ambush.":"✓ Signal analysis: authentic distress call.":e>=1?(s.hintOk?s.trap:!s.trap)?"Signal looks irregular. Could be a lure (Sensor Mk2 to confirm).":"Signal looks genuine (Sensor Mk2 to confirm).":"Unverified signal. Sensors Mk1+ can analyse it."}function ms(s,e,t,n=0){const i=e.systems[s.sys].name,r=t.day,a=Zl(s);if(s.type==="distress")return{...a,title:"Distress beacon",line:`Trader ${s.trader} is disabled in ${i}. Beacon fades at the end of today. ${jd(s,n)}`};if(s.type==="vein"){const o=In(e,s.sys).fields[s.field];return{...a,title:"Lumenite surge",line:`${o?o.name:"An asteroid field"} in ${i} is shedding Lumenite. Today only.`}}if(s.type==="wreck")return{...a,title:"Passenger tip",line:`A passenger says an unlisted wreck is drifting in ${i}. Salvage it before Day ${s.end+1}.`};if(s.type==="base"){const o=In(e,s.sys).derelicts[s.derelict];return{...a,title:"Pirate base",line:`The ${s.name} gang has fortified the ${o?o.name:"derelict"} in ${i}. Armed and guarded, rich loot. ${Cu(s,r)}.`}}return{...a,title:s.title,line:`${Ac[s.eco].blurb(i)} ${s.scope==="all"?"":"(local) "}${Cu(s,r)}.`}}const Zo=new E;class QM{constructor(e){this.g=e,this.rt=new Map,this.syncT=0,this.assist=null}get state(){return this.g.state}onEnterSystem(){this.rt.clear(),this.assist=null;const e=Ru(this.state,this.g.galaxy);this.announceNews(e),this.sync(!0)}newDay(){const e=Ru(this.state,this.g.galaxy);this.announceNews(e),this.sync()}briefing(){cr(this.state).filter(t=>t.sys===this.state.systemId).forEach((t,n)=>setTimeout(()=>this.toastEvent(t,!0),1800+n*1500))}persist(){for(const[e,t]of this.rt){if(t.kind!=="base"||!t.ship||t.ship.dead)continue;const n=this.find(e);n&&(n.baseHp=Math.max(.05,t.ship.hp/t.ship.maxHp))}}find(e){return this.state.events.list.find(t=>t.id===e)}announceNews(e){if(this.g.mode==="play")for(const t of e){if(t.type!=="market"&&t.type!=="base")continue;const n=ms(t,this.g.galaxy,this.state);this.g.ui.toast(`NEWS · ${n.title}: ${n.line}`,t.type==="base"?"warn":"info",7)}}toastEvent(e,t=!1){var a;if(this.g.mode!=="play")return;const n=this.g.player,i=this.rt.get(e.id),r=i&&i.pos?` · ${this.g.ui.dist(i.pos.distanceTo(n.pos))}`:"";if(e.type==="distress")this.g.ui.toast(`📡 Distress beacon: trader ${e.trader} is disabled${r}. ${jd(e,n.stats.sensorLvl)}`,"warn",7),this.g.audio.play("alarm",{vol:.4,rate:1.3});else if(e.type==="vein")this.g.ui.toast(`✦ Lumenite surge in ${((a=this.g.world.fields[e.field])==null?void 0:a.name)||"a nearby field"}! Rich veins today only.`,"good",6);else if(e.type==="base"&&t)this.g.ui.toast(`☠ Pirate base active in this system${r}. Expect heavy resistance.`,"warn",6);else if(e.type==="market"&&t){const o=ms(e,this.g.galaxy,this.state);this.g.ui.toast(`${o.title}: ${o.line}`,"info",5)}}sync(e=!1){const t=this.state,n=new Set;for(const i of t.events.list)i.sys!==t.systemId||!qd(i,t.day,t.dayTime)||(n.add(i.id),this.rt.has(i.id)||(this.materialize(i),(!e||i.type!=="market")&&this.toastEvent(i,e)));for(const[i,r]of this.rt)n.has(i)||this.dematerialize(i,r)}materialize(e){const t=this.g,n=t.world;if(e.type==="market"){this.rt.set(e.id,{kind:"market"});return}if(e.type==="vein"){const i=n.fields[e.field];if(!i){this.rt.set(e.id,{kind:"vein"});return}this.setSurge(i,!0),this.rt.set(e.id,{kind:"vein",field:i,pos:i.center});return}if(e.type==="distress"){const i=this.distressPos(e),r={...Cr("mule",{engine:0,cargo:0,barrier:1,beam:0,missile:0,mining:0,sensors:0,hull:0,reactor:0}),speed:46,shieldRegen:0},a=new vr(t,{kind:"trader",hullId:"mule",palette:"trader",stats:r,name:e.trader});a.pos.copy(i),a.yaw=new Ft(e.seed).range(0,6.28),a.pitch=.25,a.roll=.4,a.hp=a.maxHp*.32,a.shield=0,a.speed=0,a.throttle=0,a.disabled=!0,a.eventId=e.id,a.origin=e.sys,a.cargo={[["food","medical","parts","data"][e.seed%4]]:10+e.seed%12},a.dest={pos:n.station.pos.clone(),type:"station",gate:null},a.obj.quaternion.setFromEuler(new $t(a.pitch,a.yaw,a.roll,"YXZ"));const o=new Zt(new Kt({map:Jt(),color:new ne(1,.45,.15).multiplyScalar(2),blending:mt,depthWrite:!1,transparent:!0}));o.position.set(0,6,0),o.scale.setScalar(26),a.obj.add(o),a.beacon=o,t.traders.push(a),this.rt.set(e.id,{kind:"distress",ship:a,pos:a.pos});return}if(e.type==="wreck"){const i=kd(e.seed);i.group.position.copy(this.openSpacePos(e.seed)),i.group.rotation.set(1.1,e.seed%6,.4),i.lamp.material=i.lamp.material.clone(),i.lamp.material.color.set(16765770),i.glow.material=i.glow.material.clone(),i.glow.material.color.set(16765770),t.scene.add(i.group),this.rt.set(e.id,{kind:"wreck",obj:i,pos:i.group.position});return}if(e.type==="base"){const i=n.derelicts[e.derelict];if(!i){this.rt.set(e.id,{kind:"base"});return}i.group.visible=!1,i.occupied=!0;const r=un(this.state);e.guardsLeft==null&&(e.guardsLeft=2+Math.min(2,Math.floor(r/2)));const a={speed:0,turn:.4,cargo:0,shield:220+r*70,shieldRegen:8+r*2,hull:700+r*260,dps:13+r*4,beamRange:460,hard:1,mslCap:4,mslDmg:45+r*10,energy:400,energyRegen:40,sensor:3e3},o=new vr(t,{kind:"outlaw",hullId:"kestrel",palette:"outlaw",tpl:V_(),stats:a,name:`${e.name} Base`});o.pos.copy(i.pos),o.yaw=0,o.static=!0,o.isBase=!0,o.eventId=e.id,o.hp=o.maxHp*e.baseHp,o.missiles=a.mslCap,o.mslCd=4,o.retarget=0,o.state="guard",o.spawnTime=t.time,o.orbitDir=1,o.beam=t.fx.makeBeam(16730682),o.cargo={luxury:4,data:6},t.outlaws.push(o),this.rt.set(e.id,{kind:"base",ship:o,pos:o.pos,derelict:i,guardsOut:!1})}}dematerialize(e,t){const n=this.g;t.kind==="vein"&&t.field&&this.setSurge(t.field,!1),t.kind==="distress"&&t.ship&&!t.ship.dead&&(n.fx.particles.burst(t.ship.pos,30,60,12099839,5,1),n.target===t.ship&&(n.target=null),t.ship.remove()),t.kind==="wreck"&&t.obj&&n.scene.remove(t.obj.group),t.kind==="base"&&(t.ship&&!t.ship.dead&&(t.ship.beam&&(t.ship.beam.visible=!1),n.target===t.ship&&(n.target=null),t.ship.remove()),t.derelict&&(t.derelict.group.visible=!0,t.derelict.occupied=!1)),this.rt.delete(e),this.assist&&this.assist.id===e&&(this.assist=null)}distressPos(e){const t=this.g.world,n=new Ft(e.seed+17),i=t.station.pos;for(let r=0;r<20;r++){const a=t.gates[n.int(0,t.gates.length-1)],o=i.clone().lerp(a.pos,n.range(.25,.7)),l=Zo.subVectors(a.pos,i).cross(new E(0,1,0)).normalize();if(o.addScaledVector(l,n.range(-900,900)).add(new E(0,n.range(-80,80),0)),t.planets.every(h=>h.pos.distanceTo(o)>h.radius+450)&&o.length()>this.g.sysData.star.radius+1200&&t.fields.every(h=>h.center.distanceTo(o)>h.radius+150))return o}return i.clone().add(new E(1400,0,900))}openSpacePos(e){const t=this.g.world,n=new Ft(e+31);for(let i=0;i<30;i++){const r=n.range(0,Math.PI*2),a=n.range(3e3,7e3),o=new E(Math.cos(r)*a,n.range(-150,150),Math.sin(r)*a);if(t.planets.every(c=>c.pos.distanceTo(o)>c.radius+450)&&t.fields.every(c=>c.center.distanceTo(o)>c.radius+200)&&t.station.pos.distanceTo(o)>800&&t.gates.every(c=>c.pos.distanceTo(o)>800))return o}return new E(4e3,0,-3e3)}addTip(e){const t=this.state,n={id:`wreck-${e.id}`,type:"wreck",sys:e.side.sys,start:t.day,end:e.deadline+2,at:0,seed:e.side.seed,who:e.who,status:"active"};t.events.list.push(n);const i=this.g.galaxy.systems[n.sys].name;this.g.ui.toast(`✧ A passenger leans in: "There's a wreck nobody's claimed in ${i}." Marked on your chart.`,"good",6),this.sync()}setSurge(e,t){e.surge=t;const n=new ne(Xe.lumenite.color);for(const a of e.haze)t?(a.userData.col=a.userData.col||a.material.color.clone(),a.userData.op=a.userData.op??a.material.opacity,a.material.color.copy(n),a.material.opacity=.16):a.userData.col&&(a.material.color.copy(a.userData.col),a.material.opacity=a.userData.op);const i=new Ft(e.data.seed+5),r=new ne;for(const a of e.rocks){const o=i.next()<.35,l=e.meshes[a.v];r.set(t&&o?Xe.lumenite.color:Xe[a.ore].color),l.aOre.setXYZ(a.idx,r.r,r.g,r.b)}e.meshes.forEach(a=>a.aOre.needsUpdate=!0)}surgeBonus(e){return e&&e.surge?.3:0}update(e){this.syncT-=e,this.syncT<=0&&(this.syncT=.5,this.sync());const t=this.g,n=t.player;for(const[i,r]of this.rt){const a=this.find(i);if(a){if(r.kind==="distress"){const o=r.ship;if(o.dead){a.status==="active"&&(a.status="lost",t.ui.toast(`Trader ${a.trader}'s beacon went silent.`,"warn",4)),this.rt.delete(i);continue}o.beacon&&(o.beacon.material.opacity=o.disabled?.35+.65*(Math.sin(t.time*5)>0?1:.2):0),a.trap&&a.status==="active"&&o.pos.distanceTo(n.pos)<KM&&!t.docked&&this.springTrap(a,r)}else if(r.kind==="base"){const o=r.ship;if(!o||o.dead)continue;!r.guardsOut&&a.guardsLeft>0&&o.pos.distanceTo(n.pos)<ZM&&!t.docked&&(r.guardsOut=!0,t.spawnOutlaws({n:a.guardsLeft,entry:o.pos.clone().add(Zo.set(0,30,0)),name:a.name,tough:1.25,guardOf:a.id,burstColor:16730682,toast:`☠ ${a.name} Base scrambles ${a.guardsLeft} guard${a.guardsLeft>1?"s":""}!`}))}}}}springTrap(e,t){const n=this.g,i=t.ship;e.status="done",n.fx.particles.burst(i.pos,60,70,16738890,6,1.2),n.fx.explosion(i.pos.clone(),1.2,16742976),n.target===i&&(n.target=null),i.remove(),this.rt.delete(e.id);const r=un(this.state),a=Math.max(2,r<=1||r===2?2:3),o=n.player.pos.clone().add(Zo.subVectors(i.pos,n.player.pos).setY(0).normalize().multiplyScalar(-650));n.spawnOutlaws({n:a,entry:o,toast:`⚠ It was a lure! ${a} raiders drop out of hiding!`})}interaction(e){for(const[t,n]of this.rt){if(n.kind==="wreck"&&n.pos.distanceTo(e.pos)<160){const r=this.assist&&this.assist.id===t?Math.round(this.assist.t/Yo*100):0;return{type:"assist",label:r?`SALVAGING ${r}%`:"SALVAGE TIP WRECK",hold:!0,warm:!0,eventId:t,target:n.pos}}if(n.kind!=="distress"||n.ship.dead||!n.ship.disabled)continue;const i=this.find(t);if(!(!i||i.status!=="active")&&n.ship.pos.distanceTo(e.pos)<170+n.ship.radius){const r=this.assist&&this.assist.id===t?Math.round(this.assist.t/Yo*100):0;return{type:"assist",label:r?`REPAIRING ${r}%`:`ASSIST ${i.trader}`,hold:!0,warm:!0,eventId:t,ship:n.ship}}}return null}updateAssist(e,t){const n=this.g;if(!(n.input.mine&&t&&t.type==="assist")){this.assist&&(this.assist=null,n.mineBeam.visible=!1,n.audio.loop("mine","mine",!1));return}(!this.assist||this.assist.id!==t.eventId)&&(this.assist={id:t.eventId,t:0}),this.assist.t+=e;const i=n.muzzleWorld(n.player,0,new E);if(n.fx.showBeam(n.mineBeam,i,t.ship?t.ship.pos:t.target,1.1),n.audio.loop("mine","mine",!0,.25,.4),this.assist.t>=Yo){this.assist=null,n.mineBeam.visible=!1,n.audio.loop("mine","mine",!1),n.input.mine=!1;const r=this.find(t.eventId);r&&r.type==="wreck"?this.salvageTip(r):this.rescue(r,t.ship)}}rescue(e,t){const n=this.g,i=new Ft(e.seed+3);e.status="done";const r=400+i.int(0,400)+un(this.state)*150;n.addCredits(r),this.g.factionChange(this.g.galaxy.systems[e.sys].eco,3);let a="";const[o,l]=Object.entries(t.cargo)[0]||[];if(o&&i.chance(.5)){const c=Math.min(n.cargoFree(),Math.ceil(l*.4));c>0&&(n.player.cargo[o]=(n.player.cargo[o]||0)+c,t.cargo[o]-=c,a=` + ${c} ${Xe[o].name}`)}n.ui.toast(`${e.trader}: "You saved our hides, pilot!" +◈ ${it(r)}${a} · ${JM(this.g,e.sys)} +3`,"good",5),n.audio.play("coins",{vol:.8}),t.disabled=!1,t.hp=Math.max(t.hp,t.maxHp*.6),t.throttle=.6,t.pitch=0,t.roll=0,t.beacon&&(t.beacon.visible=!1),this.rt.delete(e.id)}salvageTip(e){const t=this.g,n=new Ft(e.seed+11),i=this.rt.get(e.id);e.status="done";const r=600+n.int(0,900)+un(this.state)*200;t.addCredits(r);const a=n.pick(["luxury","data","lumenite","medical"]),o=Math.min(t.cargoFree(),n.int(3,8));o>0&&(t.player.cargo[a]=(t.player.cargo[a]||0)+o);let l="";t.player.stats.mslCap>0&&(t.player.missiles=Math.min(t.player.stats.mslCap,t.player.missiles+2),l=" + 2 missiles"),t.ui.toast(`✧ The tip was good! Salvaged ◈ ${it(r)}${o>0?` + ${o} ${Xe[a].name}`:""}${l}`,"good",5),t.audio.play("coins",{vol:.8}),i&&(t.fx.particles.burst(i.pos,30,40,16765770,4,1),this.dematerialize(e.id,i))}onGuardDown(e){const t=this.find(e.guardOf);t&&t.guardsLeft>0&&t.guardsLeft--}onBaseDestroyed(e,t){const n=this.g,i=this.find(e.eventId),r=this.rt.get(e.eventId),a=un(this.state),o=new Ft((i?i.seed:1)+9);if(n.fx.explosion(e.pos.clone(),6,16742976),setTimeout(()=>n.fx.explosion(e.pos.clone().add(new E(18,6,-10)),4,16756832),350),n.audio.play("explosion",{vol:1}),i&&(i.status="done"),r&&r.derelict&&(r.derelict.group.visible=!0,r.derelict.occupied=!1,n.state.derelictLooted[`${n.state.systemId}:${r.derelict.seed}`]=n.state.day),this.rt.delete(e.eventId),t!==n.player){n.ui.toast(`${e.name} was destroyed.`,"info",3);return}const l=1800+a*700+o.int(0,600);n.fx.dropCrate(e.pos,{},l),n.fx.dropCrate(e.pos,{luxury:o.int(3,5)}),n.fx.dropCrate(e.pos,{lumenite:o.int(3,6)}),n.fx.dropCrate(e.pos,{data:o.int(4,8)}),n.state.stats.kills++;const c=n.galaxy.systems[n.state.systemId].eco;for(const f of["agricultural","mining","industrial","hightech","frontier"])n.factionChange(f,f===c?5:2,f!==c);n.factionChange("pirate",-8);const h=n.activeShipRec(),u=Sc.filter(f=>h.mods[f]<3);let d;if(u.length){const f=u[o.int(0,u.length-1)];h.mods[f]++,n.refreshPlayerStats(),f==="missile"&&(n.player.missiles=n.player.stats.mslCap),d=`Recovered pirate tech: ${ki[f].name} upgraded to Mk${h.mods[f]} (free)`}else n.addCredits(3e3),d="Your ship is fully upgraded, so the pirate tech sold for ◈ 3,000";n.ui.toast(`☠ ${e.name} destroyed! Loot crates released (◈ ${it(l)} + cargo) · all factions grateful, Red Wake −8`,"good",6),setTimeout(()=>n.ui.toast(`⚙ ${d}`,"good",6),1200),n.save()}markers(){const e=[];for(const[t,n]of this.rt){const i=this.find(t);i&&(n.kind==="distress"&&n.ship.disabled&&e.push({key:`ev_${t}`,pos:n.pos,name:`📡 DISTRESS · ${i.trader}`,edge:!0,ship:n.ship}),n.kind==="base"&&n.ship&&!n.ship.dead&&e.push({key:`ev_${t}`,pos:n.pos,name:`☠ ${n.ship.name.toUpperCase()}`,edge:!0,ship:n.ship}),n.kind==="wreck"&&e.push({key:`ev_${t}`,pos:n.pos,name:"✧ TIP: UNLISTED WRECK",edge:!0}))}return e}mapItems(){const e=[];for(const[t,n]of this.rt){const i=this.find(t);i&&(n.kind==="distress"&&n.ship.disabled&&e.push({kind:"event",ev:i,pos:n.pos,name:`Distress · ${i.trader}`,color:"#f0703c",r:6,arrive:140}),n.kind==="base"&&n.ship&&!n.ship.dead&&e.push({kind:"event",ev:i,pos:n.pos,name:`${i.name} Base`,color:"#ff4a3a",r:7,arrive:900}),n.kind==="wreck"&&e.push({kind:"event",ev:i,pos:n.pos,name:"Unlisted wreck",color:"#ffd34a",r:6,arrive:110}))}return e}force(e){const t=this.state,n=this.g.sysInfo,i=t.day,r=Math.floor(Math.random()*1e9),a={id:`${e}-${i}-${n.id}-dbg${r%1e3}`,type:e,sys:n.id,start:i,end:i,at:t.dayTime,seed:r,status:"active"};let o;if(e==="distress")o={...a,trap:new URLSearchParams(location.search).get("trap")==="1",hintOk:!0,trader:Ds[r%Ds.length]};else if(e==="vein")o={...a,field:0};else if(e==="market"){const l=Ac[n.eco];o={...a,end:i+1,eco:n.eco,title:l.title,icon:l.icon,scope:l.scope,mult:{...l.mult}}}else e==="base"&&(o={...a,end:i+2,derelict:0,name:Ns[r%Ns.length],guardsLeft:null,baseHp:1});o&&(t.events.list.push(o),this.sync())}}const X=s=>document.getElementById(s),va=new E,eb={agricultural:"#7bc86c",mining:"#d9a35a",industrial:"#9aa6b8",hightech:"#3fb8c8",frontier:"#f0703c"},tb=(s,e)=>s.galaxy.systems[e.dest.sys].name;class nb{constructor(e){this.g=e,this.markers=new Map,this.radarT=0,this.stTab="market",this.mapTab="system",this.mapSel=null;const t=X("stamps");for(let n=0;n<12;n++){const i=document.createElement("i");i.style.setProperty("--r",`${(Math.sin(n*7.3)*2.2).toFixed(1)}deg`),t.appendChild(i)}this.bindStart(),this.bindInput(),this.bindHud(),this.bindOverlays()}setLoading(e,t){const n=Math.floor(wt(e,0,1)*12+1e-6);[...X("stamps").children].forEach((i,r)=>i.classList.toggle("on",r<n)),X("loadPct").textContent=`${Math.round(e*100)}%`,t&&(X("loadText").textContent=t),X("btnStart").textContent=`LOADING ${Math.round(e*100)}%`}showReady(e){const t=X("btnStart");t.disabled=!1,t.textContent=e?"CONTINUE":"LAUNCH",X("loadText").textContent="Systems online · ready",e&&X("btnNew").classList.remove("hidden"),X("btnSavesStart").classList.remove("hidden")}bindStart(){X("btnStart").addEventListener("click",()=>{this.g.audio.unlock(),this.g.startGame(!1)}),X("btnNew").addEventListener("click",()=>{this.g.audio.unlock(),this.g.startGame(!0)}),X("btnSavesStart").addEventListener("click",()=>{this.g.audio.unlock(),this.openSaves("start")})}enterPlay(){const e=X("start");e.classList.add("leaving"),setTimeout(()=>e.classList.add("hidden"),320),X("hud").classList.remove("hidden"),this.onSystemChanged()}modalOpen(){return!X("station").classList.contains("hidden")||!X("mapOv").classList.contains("hidden")||!X("pause").classList.contains("hidden")||!X("dialog").classList.contains("hidden")}bindInput(){const e=this.g.input,t=X("stickZone"),n=X("stick"),i=X("stickKnob");let r=null,a=0,o=0;const l=55;t.addEventListener("pointerdown",y=>{r===null&&(r=y.pointerId,t.setPointerCapture(y.pointerId),a=y.clientX,o=y.clientY,n.style.left=`${a}px`,n.style.top=`${o}px`,n.classList.add("on"),i.style.transform="translate(0,0)")}),t.addEventListener("pointermove",y=>{if(y.pointerId!==r)return;let x=y.clientX-a,_=y.clientY-o;const A=Math.hypot(x,_);A>l&&(x*=l/A,_*=l/A),i.style.transform=`translate(${x}px,${_}px)`;const w=C=>Math.sign(C)*Math.pow(Math.max(0,Math.abs(C)-.08)/.92,1.3);e.sx=w(x/l),e.sy=w(-_/l)});const c=y=>{y.pointerId===r&&(r=null,e.sx=0,e.sy=0,n.classList.remove("on"))};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c);const h=X("throttle");let u=null;const d=y=>{const x=h.getBoundingClientRect();e.throttle=wt(1-(y.clientY-x.top)/x.height,0,1)};h.addEventListener("pointerdown",y=>{u=y.pointerId,h.setPointerCapture(y.pointerId),d(y)}),h.addEventListener("pointermove",y=>{y.pointerId===u&&d(y)}),h.addEventListener("pointerup",()=>u=null),h.addEventListener("pointercancel",()=>u=null);const f=(y,x)=>{y.addEventListener("pointerdown",A=>{A.preventDefault(),y.setPointerCapture(A.pointerId),e[x]=!0,y.classList.add("on")});const _=()=>{e[x]=!1,y.classList.remove("on")};y.addEventListener("pointerup",_),y.addEventListener("pointercancel",_),y.addEventListener("lostpointercapture",_)};f(X("btnFire"),"fire"),f(X("btnBoost"),"boost"),X("btnMissile").addEventListener("pointerdown",y=>{y.preventDefault(),this.g.fireMissile()}),X("btnTarget").addEventListener("pointerdown",y=>{y.preventDefault(),this.g.cycleTarget()}),X("btnCruise").addEventListener("pointerdown",y=>{y.preventDefault(),this.g.setCruise(!this.g.player.cruise)});const m=X("btnAction");m.addEventListener("pointerdown",y=>{y.preventDefault(),m.setPointerCapture(y.pointerId);const x=this.g.currentAction;x&&(x.hold?(e.mine=!0,m.classList.add("on")):(this.g.audio.play("click",{vol:.5}),this.g.doAction(x)))});const v=()=>{e.mine=!1,m.classList.remove("on")};m.addEventListener("pointerup",v),m.addEventListener("pointercancel",v),m.addEventListener("lostpointercapture",v);const g=new Set,p=()=>{r===null&&(e.sx=(g.has("d")||g.has("arrowright")?1:0)-(g.has("a")||g.has("arrowleft")?1:0),e.sy=(g.has("w")||g.has("arrowup")?1:0)-(g.has("s")||g.has("arrowdown")?1:0))};window.addEventListener("keydown",y=>{const x=y.key.toLowerCase();if(this.g.mode==="play"){if(x==="escape"){this.togglePause();return}if(!this.modalOpen()){if(!g.has(x)&&(x===" "&&(e.fire=!0),x==="shift"&&(e.boost=!0),x==="q"&&this.g.fireMissile(),x==="t"&&this.g.cycleTarget(),x==="c"&&this.g.setCruise(!this.g.player.cruise),x==="m"&&this.openMap(),x==="r"&&(e.throttle=wt(e.throttle+.25,0,1)),x==="f"&&(e.throttle=wt(e.throttle-.25,0,1)),x==="e")){const _=this.g.currentAction;_&&(_.hold?e.mine=!0:this.g.doAction(_))}g.add(x),p(),[" ","arrowup","arrowdown","arrowleft","arrowright"].includes(x)&&y.preventDefault()}}}),window.addEventListener("keyup",y=>{const x=y.key.toLowerCase();g.delete(x),p(),x===" "&&(e.fire=!1),x==="shift"&&(e.boost=!1),x==="e"&&(e.mine=!1)}),window.addEventListener("blur",()=>{g.clear(),e.fire=e.boost=e.mine=!1,e.sx=e.sy=0})}bindHud(){X("btnMap").addEventListener("click",()=>this.openMap()),X("btnMenu").addEventListener("click",()=>this.togglePause()),window.addEventListener("resize",()=>{this.layoutT=0}),X("apCancel").addEventListener("click",()=>{this.g.autopilot=null,this.g.player.cruise=!1})}toast(e,t="",n=3){const i=X("toasts");for(;i.children.length>3;)i.firstChild.remove();const r=document.createElement("div");r.className=`toast ${t}`,r.textContent=e,i.appendChild(r),setTimeout(()=>{r.classList.add("out"),setTimeout(()=>r.remove(),320)},n*1e3)}creditFlash(){const e=X("credChip");e.classList.remove("flash"),e.offsetWidth,e.classList.add("flash")}cargoTick(){this._cargoPulse=.3}damagePulse(){this.g.post.grade.uniforms.uDamage.value=Math.min(1,this.g.post.grade.uniforms.uDamage.value+.08),this.g.pad.rumble(.2,.45,90)}warpFlash(e){X("warpFlash").classList.toggle("on",e)}onSystemChanged(){const e=this.g.sysInfo;e&&(X("sysName").textContent=e.name,X("sysEco").textContent=`${Mn[e.eco].name} · ${Rt[e.eco].short} · risk ${Math.round(e.danger*100)}%`,this.mapView&&this.resetMapView("system"))}update(e){const t=this.g,n=t.player,i=t.state;if(!n)return;X("hud").classList.toggle("docked",t.docked),X("credChip").textContent=`◈ ${it(i.credits)}`;const r=Math.floor(i.dayTime*24),a=Math.floor((i.dayTime*24-r)*60);X("dayChip").textContent=`DAY ${i.day} · ${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}`,X("barHull").style.width=`${n.hp/n.maxHp*100}%`,X("barShield").style.width=`${n.maxShield?n.shield/n.maxShield*100:0}%`,X("barEnergy").style.width=`${n.energy/n.maxEnergy*100}%`,X("cargoTxt").textContent=`${n.cargoUsed()}/${n.stats.cargo}`,X("spdTxt").textContent=`${Math.round(n.speed)} m/s`,X("thrFill").style.height=`${t.input.throttle*100}%`,X("thrKnob").style.bottom=`${t.input.throttle*100}%`,X("btnMissile").classList.toggle("dim",n.stats.mslCap===0||n.missiles===0),X("mslCount").textContent=n.stats.mslCap?`${n.missiles}/${n.stats.mslCap}`:"—",X("btnCruise").classList.toggle("cruise-on",n.cruise),X("btnFire").classList.toggle("on",t.input.fire);const l=t.currentAction,c=X("btnAction");if(l&&!t.docked&&!n.dead){c.classList.remove("hidden"),c.classList.toggle("warm",!!l.warm);const d=l.type==="mine"&&t.input.mine?`${l.label} · ${Math.max(0,Math.round(l.node.amount))}`:l.label;c.textContent!==d&&(c.textContent=d)}else c.classList.add("hidden");X("autopilot").classList.toggle("hidden",!t.autopilot),t.autopilot&&(X("apName").textContent=`${t.autopilot.name} · ${this.dist(t.autopilot.pos.distanceTo(n.pos))}`);const h=t.target,u=X("targetPanel");if(h&&!h.dead){u.classList.remove("hidden"),u.classList.toggle("hostile",h.kind==="outlaw"),X("tpName").textContent=`${h.kind==="outlaw"?"⚠ ":""}${h.name}`,X("tpDist").textContent=this.dist(h.pos.distanceTo(n.pos)),X("tpShield").style.width=`${h.maxShield?h.shield/h.maxShield*100:0}%`,X("tpHull").style.width=`${h.hp/h.maxHp*100}%`;let d=h.isBase?"PIRATE BASE · armed fortress":h.kind==="outlaw"?h.guardOf?"BASE GUARD":"OUTLAW · hunting cargo":h.disabled?"TRADER · DISABLED, broadcasting distress":"TRADER";if(n.stats.sensorLvl>=1){const f=Object.entries(h.cargo).filter(([,m])=>m>0).map(([m,v])=>`${v} ${Xe[m].name}`).join(", ");d+=f?` · ${f}`:" · empty hold",h.kind==="trader"&&h.dest&&(d+=` · → ${h.dest.type==="station"?"station":this.g.galaxy.systems[h.dest.gate.to].name}`)}else d+=" · (Sensor Mk1 to scan cargo)";X("tpInfo").textContent=d}else u.classList.add("hidden");this.updateMarkers(),this.radarT-=e,this.radarT<=0&&(this.radarT=.1,this.drawRadar()),this.layoutT=(this.layoutT||0)-e,this.layoutT<=0&&(this.layoutT=.25,this.layoutHudLeft(),this.layoutTopStack())}layoutHudLeft(){const e=X("topbar"),t=X("topright").getBoundingClientRect(),n=e.getBoundingClientRect();if(t.width&&n.width){const l=`${Math.max(120,Math.floor(t.left-n.left-10))}px`;e.style.maxWidth!==l&&(e.style.maxWidth=l)}const i=e.getBoundingClientRect();if(!i.height)return;const r=X("radarWrap"),a=Math.round(i.bottom+8);r.style.top!==`${a}px`&&(r.style.top=`${a}px`);const o=X("status");if(window.innerHeight>window.innerWidth){const l=Math.round(r.getBoundingClientRect().bottom+14);o.style.top!==`${l}px`&&(o.style.top=`${l}px`)}else o.style.top&&(o.style.top="")}layoutTopStack(){const e=X("topStack"),t=window.innerWidth,n=window.innerHeight,i=d=>{const f=X(d);if(!f||f.offsetParent===null)return null;const m=f.getBoundingClientRect();return m.width?m:null},r=n>t,a=Math.max(...["topbar","topright"].map(i).filter(Boolean).map(d=>d.bottom))+10,o=[i("radarWrap"),r?i("status"):null].filter(Boolean);let l=Math.max(10,...o.map(d=>d.right+10));const c=["btnAction","btnFire","btnMissile","btnBoost","btnCruise","btnTarget","throttle"].map(i).filter(Boolean);let h,u;if(r)h=t-10,u=Math.min(n-10,...c.map(d=>d.top-10));else{h=Math.min(t-10,...c.map(m=>m.left-10));const d=i("status");u=d&&d.left<h?d.top-10:n-10;const f=440;if(h-l>f){const m=(l+h)/2;l=m-f/2,h=m+f/2}}e.classList.add("placed"),Object.assign(e.style,{left:`${Math.round(l)}px`,top:`${Math.round(a)}px`,width:`${Math.max(140,Math.round(h-l))}px`,maxHeight:`${Math.max(60,Math.round(u-a))}px`})}dist(e){return e>=1e3?`${(e/1e3).toFixed(1)}km`:`${Math.round(e)}m`}missionTargets(){const e=new Map;for(const t of this.g.state.missions){const n=this.g.missionTarget(t);if(!n)continue;const i=e.get(n.key);i?i.n++:e.set(n.key,{...n,n:1})}return[...e.values()]}updateMarkers(){const e=this.g,t=e.world,n=e.player,i=e.camera,r=window.innerWidth,a=window.innerHeight,o=[];o.push({key:"station",pos:t.station.pos,cls:"station",name:t.station.name,edge:!0}),t.gates.forEach((u,d)=>o.push({key:`gate${d}`,pos:u.pos,cls:"gate",name:`⟶ ${e.galaxy.systems[u.to].name}`,edge:!1})),t.fields.forEach((u,d)=>{(u.surge||u.center.distanceTo(n.pos)>u.radius)&&o.push({key:`field${d}`,pos:u.center,cls:u.surge?"field surge":"field",name:u.surge?`✦ LUMENITE SURGE · ${u.name}`:`${u.name} · ${Xe[u.primary].name}`,edge:!!u.surge})});for(const u of e.events.markers())o.push({...u,cls:"event"+(u.ship===e.target?" target":"")});t.deposits.forEach((u,d)=>{u.pos.distanceTo(n.pos)<5e3&&u.amount>0&&o.push({key:`dep${d}`,pos:u.pos,cls:"deposit",name:`◆ ${Xe[u.ore].name} deposit`})}),t.derelicts.forEach((u,d)=>{!u.occupied&&u.pos.distanceTo(n.pos)<n.stats.sensor&&o.push({key:`der${d}`,pos:u.pos,cls:"derelict",name:u.name})});for(const u of e.traders)!u.dead&&!(u.disabled&&u.eventId)&&u.pos.distanceTo(n.pos)<n.stats.sensor&&o.push({key:`s${u.uid}`,pos:u.pos,cls:"trader"+(u===e.target?" target":""),name:u.name,edge:u===e.target});for(const u of e.outlaws)!u.dead&&!u.isBase&&u.pos.distanceTo(n.pos)<n.stats.sensor&&o.push({key:`s${u.uid}`,pos:u.pos,cls:"outlaw"+(u===e.target?" target":""),name:u.name,edge:!0});for(let u=0;u<e.fx.crates.length;u++){const d=e.fx.crates[u];d.pos.distanceTo(n.pos)<900&&o.push({key:`c${u}`,pos:d.pos,cls:"crate",name:d.credits?"◈ bounty":"cargo"})}e.autopilot&&o.push({key:"ap",pos:e.autopilot.pos,cls:"station",name:`AP: ${e.autopilot.name}`,edge:!0});for(const u of e.missionsAboard())u.side&&u.side.kind==="detour"&&!u.side.done&&u.side.sys===e.state.systemId&&o.push({key:`side_${u.id}`,pos:e.landingPoint(u.side.planet),cls:"mission",name:`SIDE REQUEST · ${u.side.name}`,edge:!0});for(const u of this.missionTargets())o.push({key:`ms_${u.key}`,pos:u.pos,cls:"mission",name:u.via?`CONTRACT ROUTE${u.n>1?` ×${u.n}`:""}`:`CONTRACT${u.n>1?` ×${u.n}`:""} · ${u.name}`,edge:!0});const l=new Set,c=X("markers"),h=[];for(const u of o){l.add(u.key);let d=this.markers.get(u.key);d||(d=document.createElement("div"),d.innerHTML='<span class="ic"></span><span class="tx"></span>',c.appendChild(d),this.markers.set(u.key,d)),va.copy(u.pos).project(i);const f=va.z>1;let m=(va.x*.5+.5)*r,v=(-va.y*.5+.5)*a;const g=!f&&m>0&&m<r&&v>0&&v<a;if(!g&&!u.edge){d.style.display="none";continue}d.style.display="";let p=`mk ${u.cls}`;if(!g){let _=m-r/2,A=v-a/2;f&&(_=-_,A=-A);const w=Math.min((r/2-40)/Math.abs(_||.001),(a/2-50)/Math.abs(A||.001));m=r/2+_*w,v=a/2+A*w,p+=" edge"}d.className!==p&&(d.className=p);for(let _=0;_<4;_++){const A=h.find(w=>Math.abs(w[0]-m)<110&&Math.abs(w[1]-v)<16);if(!A)break;v=A[1]+17}h.push([m,v]),d.style.left=`${m}px`,d.style.top=`${v}px`;const y=`${u.name} ${this.dist(u.pos.distanceTo(n.pos))}`,x=d.lastChild;x.textContent!==y&&(x.textContent=y)}for(const[u,d]of this.markers)l.has(u)||(d.remove(),this.markers.delete(u))}drawRadar(){const e=this.g,t=e.player,n=e.world,i=X("radar"),r=i.getContext("2d"),a=i.width,o=a/2-6;r.clearRect(0,0,a,a),r.save(),r.translate(a/2,a/2),r.strokeStyle="rgba(239,230,210,.25)",r.lineWidth=1.5;for(const d of[o,o*.66,o*.33])r.beginPath(),r.arc(0,0,d,0,Math.PI*2),r.stroke();const l=t.stats.sensor,c=Math.cos(t.yaw),h=Math.sin(t.yaw),u=(d,f,m,v="dot")=>{const g=d.x-t.pos.x,p=d.z-t.pos.z,y=g*h+p*c;let _=-(g*c-p*h)/l*o,A=-(y/l)*o;const w=Math.hypot(_,A);if(w>o){if(v!=="edge")return;_*=o/w,A*=o/w}if(r.fillStyle=f,v==="ring"){r.strokeStyle=f,r.lineWidth=2,r.beginPath(),r.arc(_,A,m,0,Math.PI*2),r.stroke();return}r.beginPath(),v==="sq"?r.rect(_-m,A-m,m*2,m*2):r.arc(_,A,m,0,Math.PI*2),r.fill()};for(const d of n.fields)u(d.center,"rgba(232,211,164,.6)",Math.max(4,d.radius/l*o),"ring");for(const d of n.planets)u(d.pos,"rgba(140,170,220,.55)",Math.max(3,d.radius/l*o));u(n.station.pos,"#9ff0ff",5,"edge");for(const d of n.gates)u(d.pos,"#d6b8ff",4,"edge");for(const d of n.derelicts)u(d.pos,"#ffb07a",3);for(const d of e.fx.crates)u(d.pos,"#fff3a0",2.5);for(const d of e.traders)u(d.pos,"#f2d36b",3.5,"sq");for(const d of e.outlaws)u(d.pos,"#ff4a3a",4.5,"sq");r.fillStyle="#efe6d2",r.beginPath(),r.moveTo(0,-8),r.lineTo(6,7),r.lineTo(0,3),r.lineTo(-6,7),r.closePath(),r.fill(),r.restore()}bindOverlays(){X("btnUndock").addEventListener("click",()=>{this.g.audio.play("click",{vol:.5}),this.g.undock()}),X("stTabs").addEventListener("click",e=>{const t=e.target.closest(".tab");t&&(this.stTab=t.dataset.tab,this.g.audio.play("click",{vol:.4}),this.renderStation())}),X("stBody").addEventListener("click",e=>{const t=e.target.closest("button[data-act]");t&&!t.disabled&&this.stationAction(t.dataset.act,t.dataset.arg,t.dataset.n)}),X("btnMapClose").addEventListener("click",()=>this.closeMap()),X("mapTabs").addEventListener("click",e=>{const t=e.target.closest(".tab");t&&(this.mapTab=t.dataset.tab,this.mapSel=null,this.renderMapTabs(),this.drawMap())}),this.mapView={system:{z:1,x:0,y:0},galaxy:{z:1,x:0,y:0}},this.bindMapGestures(),X("mapInfo").addEventListener("click",e=>{const t=e.target.closest("button[data-act]");t&&this.mapAction(t.dataset.act)}),X("btnResume").addEventListener("click",()=>this.togglePause()),X("btnSound").addEventListener("click",()=>{const e=this.g.state;e.sound=!e.sound,this.g.audio.setEnabled(e.sound),X("btnSound").textContent=`SOUND: ${e.sound?"ON":"OFF"}`}),X("btnQuality").addEventListener("click",()=>{const e=this.g.state;this.g.applyQuality(e.quality==="high"?"low":"high"),X("btnQuality").textContent=`QUALITY: ${e.quality.toUpperCase()}`}),X("btnReset").addEventListener("click",()=>{this.dialog('<div class="ov-title">RESET CAREER?</div><p>This erases your current game and autosave and generates a new galaxy. Your save slots and exported files are kept.</p>',[{label:"ERASE & RESTART",primary:!0,fn:()=>{this.togglePause(),this.g.startGame(!0)}},{label:"CANCEL"}])}),X("btnSaves").addEventListener("click",()=>this.openSaves("pause")),window.addEventListener("resize",()=>{X("mapOv").classList.contains("hidden")||this.drawMap()})}togglePause(){const e=X("pause"),t=e.classList.contains("hidden");if(!(t&&this.modalOpen())&&(e.classList.toggle("hidden",!t),this.g.paused=t,t)){const n=this.g.state;X("btnSound").textContent=`SOUND: ${n.sound?"ON":"OFF"}`,X("btnQuality").textContent=`QUALITY: ${n.quality.toUpperCase()}`;const i=un(n),r=n.missions.length?`<br><b>Contracts:</b>${n.missions.map(a=>`<br><small>★ ${a.title} → ${a.dest.name}, ${tb(this.g,a)} · due Day ${a.deadline}${a.vip?" · VIP":""}</small>`).join("")}`:"";X("pauseStats").innerHTML=`Rank: <b>${Su[i]}</b> · Net worth ◈ ${it(jl(n))}<br>Day ${n.day} · Jumps ${n.stats.jumps} · Ore mined ${n.stats.mined} · Outlaws downed ${n.stats.kills} · Contracts ${n.stats.contracts}${r}<br><small>Keys: WASD steer · R/F throttle · Space fire · E action · Q missile · T target · C cruise · M map</small>${this.g.pad.active?`<br><small>Controller: ${this.g.pad.helpText()}</small>`:""}`,this.g.save()}}openSaves(e,t="",n="info"){const i=this.g,r=e==="pause";r&&i.save();const a=u=>`Day ${u.day} · ◈ ${it(u.credits)} · ${u.ship}${u.fleet>1?` +${u.fleet-1} ship${u.fleet>2?"s":""}`:""} · ${u.system}`,o=(u,d,f,m)=>`<div class="sv-row${m?" empty":""}"><div class="sv-info"><b>${u}</b>${d}</div>${f.join("")}</div>`,l=CM();let c=o("AUTOSAVE",l?l.error?`Unreadable: ${l.error}`:`${a(l)}<br><small>${qo(l.savedAt)} · saves every 20 s, on docking and when you leave</small>`:"Nothing yet — starts when you play",[],!l);for(let u=1;u<=wM;u++){const d=Xo(u),f=d?d.error?`Unreadable: ${d.error}`:`${a(d)}<br><small>saved ${qo(d.savedAt)}</small>`:"Empty",m=[];r&&m.push(`<button class="sbtn buy" data-sv="save" data-slot="${u}">SAVE</button>`),d&&!d.error&&m.push(`<button class="sbtn sell" data-sv="load" data-slot="${u}">LOAD</button>`),c+=o(`SLOT ${u}`,f,m,!d)}const h=r||i.hasSave;X("dialogBox").classList.add("saves"),X("dialogBox").innerHTML=`<div class="sv-head"><div class="ov-title">SAVE &amp; LOAD</div>
      ${t?`<div class="sv-status ${n}">${t}</div>`:'<p class="sv-note">Saves live in this browser. <b>Export</b> keeps a file copy, safe if the browser clears its data and usable on another device.</p>'}</div>
      <div class="sv-list">${c}</div>
      <div class="sv-tools">${h?'<button class="pbtn secondary" data-sv="export">EXPORT FILE</button>':""}<button class="pbtn secondary" data-sv="import">IMPORT FILE</button><button class="pbtn primary" data-sv="close">CLOSE</button></div>`,X("dialogBox").querySelectorAll("button[data-sv]").forEach(u=>u.addEventListener("click",()=>{i.audio.play("click",{vol:.4}),this.savesAction(e,u.dataset.sv,Number(u.dataset.slot))})),X("dialog").classList.remove("hidden")}savesAction(e,t,n){const i=this.g,r=e==="pause",a=(c,h)=>this.openSaves(e,c,h),o=c=>`Day ${c.day} · ◈ ${it(c.credits)} · ${c.ship} · ${c.system}`,l=(c,h)=>this.dialog(`<div class="ov-title">LOAD ${h.toUpperCase()}?</div><p><b>${o(wc(c))}</b></p>
      <p>${r?"Your current game will be replaced. Save it to a slot first if you want to keep it.":"This replaces your current autosave."}</p>`,[{label:"LOAD",primary:!0,fn:()=>this.applyLoad(e,c,h)},{label:"CANCEL",fn:()=>a()}]);if(t==="close"){X("dialog").classList.add("hidden");return}if(t==="save"){const c=Xo(n),h=()=>{if(!i.save()){a("Could not save — browser storage is full or disabled. Try EXPORT FILE instead.","bad");return}try{PM(n,i.state),a(`✓ Saved to slot ${n}`,"good")}catch(u){a(`Could not save to slot ${n}: ${u.message}. Try EXPORT FILE instead.`,"bad")}};c?this.dialog(`<div class="ov-title">OVERWRITE SLOT ${n}?</div><p>${c.error?"This slot is unreadable.":`It holds <b>${o(c)}</b>, saved ${qo(c.savedAt)}.`}</p><p>It will be replaced with your current game.</p>`,[{label:"OVERWRITE",primary:!0,fn:h},{label:"CANCEL",fn:()=>a()}]):h()}else if(t==="load"){const c=Xo(n);if(!c||c.error){a(`Slot ${n} can't be loaded${c?`: ${c.error}`:""}`,"bad");return}l(c.state,`slot ${n}`)}else if(t==="export"){r&&i.save();const c=IM(i.state),h=URL.createObjectURL(new Blob([LM(i.state)],{type:"application/json"})),u=document.createElement("a");u.href=h,u.download=c,document.body.appendChild(u),u.click(),u.remove(),setTimeout(()=>URL.revokeObjectURL(h),1e4),a(`✓ Exported <b>${c}</b> to Downloads (iPhone: Files app)`,"good")}else if(t==="import"){const c=document.createElement("input");c.type="file",c.accept=".json,application/json",c.addEventListener("change",()=>{const h=c.files&&c.files[0];h&&h.text().then(u=>l(DM(u),"imported file")).catch(u=>a(`Import failed: ${u.message}`,"bad"))}),c.click()}}applyLoad(e,t,n){const i=this.g;X("dialog").classList.add("hidden"),i.loadGame(t),i.hasSave=!0,e==="pause"?X("pause").classList.contains("hidden")||this.togglePause():i.startGame(!1),this.toast(`✓ Loaded ${n} — Day ${t.day}`,"good",3)}dialog(e,t){const n=X("dialogBox");n.classList.remove("saves"),n.innerHTML=e;for(const i of t){const r=document.createElement("button");r.className=`pbtn ${i.primary?"primary":"secondary"}`,r.textContent=i.label,r.addEventListener("click",()=>{X("dialog").classList.add("hidden"),this.g.audio.play("click",{vol:.4}),i.fn&&i.fn()}),n.appendChild(r)}X("dialog").classList.remove("hidden")}openStation(){X("station").classList.remove("hidden"),this.stTab="market",this.renderStation()}closeStation(){X("station").classList.add("hidden")}renderStation(){const e=this.g,t=e.state;t.systemId;const n=e.sysInfo,i=e.player;X("stTitle").textContent=e.world.station.name.toUpperCase(),X("stSub").textContent=`${n.name} · ${Rt[n.eco].name} (${hn(nn(t,n.eco)).name}) · Day ${t.day} · ${St[i.hullId].name} (${St[i.hullId].cls})`,X("stCred").textContent=`◈ ${it(t.credits)}`,[...X("stTabs").children].forEach(o=>o.classList.toggle("on",o.dataset.tab===this.stTab));const r=X("stBody"),a=r.scrollTop;this.stTab==="market"?r.innerHTML=this.marketHTML():this.stTab==="outfit"?r.innerHTML=this.outfitHTML():this.stTab==="hangar"?r.innerHTML=this.hangarHTML():this.stTab==="missions"?r.innerHTML=this.missionsHTML():r.innerHTML=this.servicesHTML(),r.scrollTop=a}bestKnown(e){const t=this.g;let n=null;for(const[i,r]of Object.entries(t.state.intel)){if(Number(i)===t.state.systemId)continue;const a=r.prices[e].s;(!n||a>n.v)&&(n={v:a,name:t.galaxy.systems[i].name,age:t.state.day-r.day})}return n}marketHTML(){const e=this.g,t=e.economy,n=e.state.systemId,i=e.player,r=i.cargoUsed(),a=i.stats.cargo;let o=`<div class="row head" style="grid-template-columns:1fr auto"><span>HOLD ${r}/${a} · ${St[i.hullId].name}${i.reserved?` <small>(${i.reserved} contract)</small>`:""}</span><span class="btns"><button class="sbtn sell" data-act="sellore" ${Object.keys(i.cargo).some(l=>Xe[l].kind==="ore"&&i.cargo[l]>0)?"":"disabled"}>SELL ALL ORE</button><button class="sbtn sell" data-act="sellall" ${r?"":"disabled"}>SELL ALL</button></span></div>`;o+='<div class="row head"><span>COMMODITY</span><span>WE PAY</span><span>WE SELL</span><span>HOLD</span><span>ACTIONS</span></div>';for(const l of zn){const c=t.sellPrice(n,l.id),h=t.canBuy(n,l.id)&&t.stock(n,l.id)>0,u=h?t.buyPrice(n,l.id):null,d=i.cargo[l.id]||0,f=t.mult(n,l.id),m=t.eventMult(n,l.id),v=(m>1.04?`<span class="tag up">NEWS ▲${Math.round((m-1)*100)}%</span>`:m<.96?`<span class="tag dn">NEWS ▼${Math.round((1-m)*100)}%</span>`:"")+(f>=1.25?'<span class="tag up">HIGH DEMAND</span>':f<=.75?'<span class="tag dn">LOCAL GOOD</span>':""),g=this.bestKnown(l.id),p=g?`<br><small style="opacity:.7">best seen ◈${g.v} @ ${g.name}${g.age?` (${g.age}d)`:""}</small>`:"",y=h?Math.max(0,Math.min(t.stock(n,l.id),a-r,Math.floor(e.state.credits/u))):0;o+=`<div class="row"><span class="nm"><i class="dot" style="background:${l.color}"></i><span>${l.name} ${v}${p}</span></span>
        <span class="${f>=1.15?"price-good":""}">◈ ${c}</span>
        <span class="${f<=.8?"price-good":""}">${h?`◈ ${u} <small>(${t.stock(n,l.id)})</small>`:"—"}</span>
        <span><b>${d}</b></span>
        <span class="btns">
          <button class="sbtn sell" data-act="sell" data-arg="${l.id}" data-n="1" ${d?"":"disabled"}>SELL</button>
          <button class="sbtn sell" data-act="sell" data-arg="${l.id}" data-n="${d}" ${d?"":"disabled"}>ALL</button>
          <button class="sbtn buy" data-act="buy" data-arg="${l.id}" data-n="1" ${y?"":"disabled"}>BUY</button>
          <button class="sbtn buy" data-act="buy" data-arg="${l.id}" data-n="${y}" ${y?"":"disabled"}>MAX</button>
        </span></div>`}return o+='<p style="font:600 12px var(--font);opacity:.75;margin:8px 4px">Tip: “WE SELL” goods are produced here and cheap. Check the GALAXY chart for systems with HIGH DEMAND. Selling many units lowers the price until markets recover the next day.</p>',o}uniquePrice(e,t){return Math.round(ds[e].price*Math.sqrt(St[t].priceMul)/100)*100}factionTechHTML(e){const t=this.g,n=t.state,i=t.sysInfo.eco,r=[ql[i]];i==="frontier"&&r.push(ql.pirate);const a=Mu(e.hull),o=e.uniques.length;let l=`<div class="ms-head"><span>FACTION TECH · ${o}/${a} SLOT${a>1?"S":""} USED</span><small>Unique modules need Honored standing with their faction</small></div><div class="cards">`;for(const c of e.uniques){const h=ds[c];l+=`<div class="card active"><h3>${h.name}<span class="cls">INSTALLED</span></h3><p>${h.desc}</p><button class="pbtn secondary" style="font-size:13px;padding:8px" data-act="rmunique" data-arg="${c}">REMOVE · refund ◈ ${it(Math.round(this.uniquePrice(c,e.hull)/2))}</button></div>`}for(const c of r){if(e.uniques.includes(c.id))continue;const h=hn(nn(n,c.faction)),u=this.uniquePrice(c.id,e.hull),d=h.level<2?`REQUIRES HONORED WITH ${Rt[c.faction].short.toUpperCase()} (${nn(n,c.faction)}/25)`:o>=a?"NO FREE SLOT":n.credits<u?`◈ ${it(u)}`:"";l+=`<div class="card${h.level<2?" locked":""}"><h3>${c.name}<span class="cls" style="color:${Rt[c.faction].color}">${Rt[c.faction].short.toUpperCase()}</span></h3><p>${c.desc}</p>
        <button class="pbtn ${d?"secondary":"primary"}" style="font-size:13px;padding:8px" data-act="buyunique" data-arg="${c.id}" ${d?"disabled":""}>${d||`INSTALL · ◈ ${it(u)}`}</button></div>`}return l+'</div><div class="ms-head" style="margin-top:12px"><span>STANDARD MODULES</span></div>'}outfitHTML(){const e=this.g,t=e.activeShipRec();let n=`<p style="margin:2px 4px 10px;font:700 13px var(--font)">Upgrading: <b>${St[t.hull].name}</b> (${St[t.hull].cls}) — each ship keeps its own modules.</p><div class="cards">`;n=this.factionTechHTML(t)+n;for(const i of Sc){const r=ki[i],a=t.mods[i],o=a<3?a+1:null,l=o?pu(t.hull,i,o):0,c=[1,2,3].map(h=>`<i class="${h<=a?"on":""}"></i>`).join("");n+=`<div class="card"><h3>${r.name}<span class="lvl">${c}</span></h3><p>${r.desc}</p>
        <div class="delta">${mu(i,a,t.hull)}${o?` → <b>${mu(i,o,t.hull)}</b>`:" · MAX"}</div>
        ${o?`<button class="pbtn ${e.state.credits>=l?"primary":"secondary"}" style="font-size:14px;padding:9px" data-act="upgrade" data-arg="${i}" ${e.state.credits>=l?"":"disabled"}>INSTALL MK${o} · ◈ ${it(l)}</button>`:'<button class="pbtn secondary" disabled>FULLY UPGRADED</button>'}
      </div>`}return n+"</div>"}hangarHTML(){const e=this.g,t=e.state;let n='<p style="margin:2px 4px 10px;font:700 13px var(--font)">Your fleet is ferried between stations. Each ship keeps its own hold and upgrades.</p><div class="cards">';for(const i of u_){const r=St[i],a=t.ships.filter(h=>h.hull===i),o=Cr(i,Ia()),l=`<div class="stats"><span>Hull ${o.hull}</span><span>Hold ${o.cargo}</span><span>Speed ${Math.round(o.speed)}</span><span>Beams ×${r.hard}</span><span>Barrier ×${r.shield}</span><span>Missiles +${r.msl}</span></div>`;let c="";for(const h of a){const u=Object.values(h.cargo).reduce((d,f)=>d+f,0);c+=h.uid===t.active?`<button class="pbtn secondary" disabled>ACTIVE${u?` · hold ${u}`:""}</button>`:`<button class="pbtn secondary" data-act="switch" data-arg="${h.uid}">FLY THIS ${r.name.toUpperCase()}${u?` · hold ${u}`:""}</button>`}r.price>0&&(c+=`<button class="pbtn ${t.credits>=r.price?"primary":"secondary"}" style="font-size:14px;padding:9px" data-act="buyship" data-arg="${i}" ${t.credits>=r.price?"":"disabled"}>BUY · ◈ ${it(r.price)}</button>`),n+=`<div class="card ${a.some(h=>h.uid===t.active)?"active":""}"><h3>${r.name}<span class="cls">${r.cls.toUpperCase()}</span></h3><p>${r.desc}</p>${l}${c}</div>`}return n+"</div>"}repairCost(){const e=this.g.player;return Math.ceil(Math.ceil(e.maxHp-e.hp)*1.5*St[e.hullId].priceMul*(1+hn(nn(this.g.state,this.g.sysInfo.eco)).repair))}newsHTML(){const e=this.g,t=e.state,n=cr(t);if(!n.length)return'<div class="card news"><div><h3>Sector News</h3><p>Quiet across the sector today.</p></div></div>';const i=r=>r.sys===t.systemId?" <small>(this system)</small>":"";return`<div class="card news"><div><h3>Sector News · Day ${t.day}</h3>${n.map(r=>{const a=ms(r,e.galaxy,t,e.player.stats.sensorLvl);return`<p><b style="color:${a.col}">${a.ch}</b> <b>${a.title}</b>${i(r)}: ${a.line}</p>`}).join("")}</div></div>`}factionsHTML(){const e=this.g,t=e.state,n=e.sysInfo.eco;return`<div class="card factions"><div><h3>Factions</h3><p style="opacity:.75;font-size:12px">Contracts, trade, outlaw kills and rescues raise standing with a station's faction; attacking its traders lowers it. Rivals: Cooperative ↔ Combine, Union ↔ Institute. The Red Wake likes piracy and hates outlaw-hunters.</p>${Da.map(r=>{const a=Rt[r],o=nn(t,r),l=hn(o),c=tM(o),h=l.min===-1/0?-50:l.min,u=c?c.min:h+25,d=Math.max(0,Math.min(100,(o-h)/(u-h)*100));return`<div class="fac${r===n?" here":""}"><div class="fac-top"><i style="background:${a.color}"></i><b>${a.name}</b>${r===n?" <small>(this station)</small>":""}<span class="fac-tier t${l.level}">${l.name.toUpperCase()}</span><small>${o}</small></div>
        <div class="fac-bar"><span style="width:${d}%;background:${a.color}"></span></div>
        <small>${nM(r,l)||"—"}${c?` · next: ${c.name} at ${c.min}`:""}</small></div>`}).join("")}</div></div>`}servicesHTML(){const e=this.g,t=e.player,n=e.state,i=Math.ceil(t.maxHp-t.hp),r=this.repairCost(),a=cr(n).filter(u=>u.end===n.day&&u.type!=="market"),o=a.length?`<br><b style="color:#b0451a">Ends if you rest:</b> ${a.map(u=>`${ms(u,e.galaxy,n).title} in ${e.galaxy.systems[u.sys].name}`).join(", ")}`:"",l=t.stats.mslCap-t.missiles,c=l*60,h=un(n);return`<div class="svc">
      <div class="card"><div><h3>Hull Repair</h3><p>${i>0?`${i} damage to patch`:"Hull is pristine"}</p></div><button class="sbtn buy" data-act="repair" ${i>0&&n.credits>=r?"":"disabled"}>◈ ${it(r)}</button></div>
      <div class="card"><div><h3>Missile Restock</h3><p>${t.stats.mslCap?`${t.missiles}/${t.stats.mslCap} loaded · ◈60 each`:"No missile rack installed"}</p></div><button class="sbtn buy" data-act="missiles" ${l>0&&n.credits>=c?"":"disabled"}>◈ ${it(c)}</button></div>
      ${this.newsHTML()}
      ${this.factionsHTML()}
      <div class="card"><div><h3>Rest Until Tomorrow</h3><p>Skip to Day ${n.day+1}. Prices recover, rocks and deposits regrow, new events may appear.${o}</p></div><button class="sbtn" data-act="rest">REST</button></div>
      <div class="card"><div><h3>Pilot Record</h3><p>Rank <b>${Su[h]}</b> · Net worth ◈ ${it(jl(n))}<br>Mined ${n.stats.mined} · Trades ${n.stats.trades} · Contracts ${n.stats.contracts} · Outlaws downed ${n.stats.kills} · Jumps ${n.stats.jumps}</p></div></div>
      <p style="font:600 12px var(--font);opacity:.75">Outlaw raids grow from lone raiders to packs of 2–4 as your rank rises. Barriers and beams are your best insurance.</p>
    </div>`}missionsHTML(){const e=this.g,t=e.state,n=e.player,i=wu(t,e.galaxy,t.systemId,un(t)),r=Ua(t,t.systemId),a=Oa(r),o=dM(r);let l=`<div class="standing"><b>Standing at ${e.world.station.name}:</b> <span class="st-tier st-${a.level}">${a.name.toUpperCase()}</span> <small>(${r} pts)</small>${a.perks?`<br><small>${a.perks}</small>`:""}${o?`<br><small style="opacity:.75">Next: ${o.name} at ${o.min} pts. Completing this station's contracts earns standing (special jobs count double); failing loses it.</small>`:""}</div>`;return l+=`<div class="ms-head"><span>ACTIVE CONTRACTS ${t.missions.length}/${Na}</span><small>Free hold ${e.cargoFree()}/${n.stats.cargo}</small></div>`,l+=t.missions.length?`<div class="cards">${t.missions.map(c=>this.missionCard(c,!0)).join("")}</div>`:'<p class="ms-empty">No active contracts — pick one from the board below.</p>',l+=`<div class="ms-head" style="margin-top:14px"><span>CONTRACT BOARD · ${e.world.station.name.toUpperCase()}</span><small>New offers each day</small></div>`,l+=i.length?`<div class="cards">${i.map(c=>this.missionCard(c,!1)).join("")}</div>`:'<p class="ms-empty">The board is empty. Check back tomorrow.</p>',l+='<p style="font:600 12px var(--font);opacity:.75;margin:10px 4px">Passengers and courier crates ride in your hold until delivered. Station drop-offs complete when you dock; planet colonies need you in low orbit above the colony — press DROP OFF / DELIVER. Outlaws love a ship carrying a VIP.</p>',l}acceptBlock(e){const t=this.g,n=t.state;return n.missions.length>=Na?"CONTRACT LIMIT":Fa(e)>t.cargoFree()?`NEEDS ${Fa(e)} FREE HOLD`:e.deposit>n.credits?`NEEDS ◈ ${it(e.deposit)}`:Hd(e,t.activeShipRec())?"":e.req.hull?`NEEDS ${e.req.hull==="kestrel"?"KESTREL":St[e.req.hull].name.toUpperCase()}`:`NEEDS ${ki[e.req.mod].name.toUpperCase()} MK${e.req.lvl}`}missionCard(e,t){const n=this.g,i=n.state,r=MM(e),a=t&&e.deadline<=i.day;let o="",l;if(t)e.type==="supply"?o=`<br>In hold: <b>${n.player.cargo[e.commodity]||0}/${e.qty}</b>${e.ore?` · ${Xe[e.ore].name} mined <b>${e.oreMined||0}/${e.oreQty}</b>`:""}`:Gd(e)&&(o=`<br>Aboard: <b>${St[n.activeShipRec().hull].name}</b>`),l=`<button class="pbtn primary" data-act="mcourse" data-arg="${e.id}">SET COURSE</button><button class="pbtn secondary" data-act="abandon" data-arg="${e.id}">ABANDON</button>`;else{const c=this.acceptBlock(e);l=`<button class="pbtn ${c?"secondary":"primary"}" data-act="accept" data-arg="${e.id}" ${c?"disabled":""}>${c||"ACCEPT"}</button>`}return`<div class="card ms${t?" taken":""}${a?" late":""}"><h3><span>${e.title}</span><span class="pay">◈ ${it(e.reward)}</span></h3>
      <div><span class="mtag ${r.cls}">${r.label}</span> ${_M(e).map(c=>`<span class="mtag ${c.cls}">${c.label}</span>`).join(" ")} <small>${e.client}</small></div>
      <div class="meta">To <b>${bM(e,n.galaxy,i.systemId)}</b><br>${SM(e)}<br>${TM(e,i.day)}${e.deposit?`<br>Deposit ◈ ${it(e.deposit)} — refunded on delivery`:""}${o}</div>
      <div class="btns">${l}</div></div>`}stationAction(e,t,n){const i=this.g,r=i.economy,a=i.state,o=a.systemId,l=i.player;n=Number(n);const c=(h,u)=>{if(u<=0)return 0;const d=r.sell(o,h,u);return l.cargo[h]-=u,l.cargo[h]||delete l.cargo[h],d};if(e==="sell"){const h=c(t,Math.min(n,l.cargo[t]||0));i.addCredits(h),i.onSale(h),a.stats.trades++,i.audio.play("coins",{vol:.7})}else if(e==="sellore"||e==="sellall"){let h=0;for(const u of Object.keys(l.cargo))(e==="sellall"||Xe[u].kind==="ore")&&(h+=c(u,l.cargo[u]));i.addCredits(h),i.onSale(h),a.stats.trades++,i.audio.play("coins",{vol:.8}),this.toast(`Sold for ◈ ${it(h)}`,"good",2)}else if(e==="buy"){let h=Math.min(n,r.stock(o,t),l.stats.cargo-l.cargoUsed());for(;h>0&&r.quoteBuy(o,t,h)>a.credits;)h--;if(h>0){const u=r.buy(o,t,h);a.credits-=u,l.cargo[t]=(l.cargo[t]||0)+h,a.stats.trades++,i.audio.play("click",{vol:.6})}else this.toast("Not enough credits or cargo space","warn",2)}else if(e==="buyunique"){const h=i.activeShipRec(),u=this.uniquePrice(t,h.hull);a.credits>=u&&h.uniques.length<Mu(h.hull)&&hn(nn(a,ds[t].faction)).level>=2&&(a.credits-=u,h.uniques.push(t),i.refreshPlayerStats(),l.shield=Math.min(l.shield,l.maxShield),i.audio.play("coins",{vol:.9}),this.toast(`${ds[t].name} installed`,"good",3))}else if(e==="rmunique"){const h=i.activeShipRec();h.uniques.includes(t)&&(h.uniques=h.uniques.filter(u=>u!==t),i.addCredits(Math.round(this.uniquePrice(t,h.hull)/2)),i.refreshPlayerStats(),this.toast(`${ds[t].name} removed`,"info",2.5))}else if(e==="upgrade"){const h=i.activeShipRec(),u=h.mods[t]+1,d=pu(h.hull,t,u);a.credits>=d&&u<=3&&(a.credits-=d,h.mods[t]=u,i.refreshPlayerStats(),t==="missile"&&(l.missiles=l.stats.mslCap),t==="barrier"&&(l.shield=l.maxShield),i.audio.play("coins",{vol:.7}),this.toast(`${ki[t].name} Mk${u} installed`,"good",2.5))}else if(e==="buyship"){const h=St[t];if(a.credits>=h.price){a.credits-=h.price;const u=a.nextUid++;a.ships.push({uid:u,hull:t,mods:Ia(),hp:null,missiles:0,cargo:{}}),i.audio.play("coins",{vol:.9}),i.switchShip(u)?this.toast(`${h.name} ${h.cls} purchased and ready!`,"good",3):this.toast(`${h.name} ${h.cls} purchased — it waits in your hangar until your contracts are done`,"good",4)}}else if(e==="switch")i.switchShip(Number(t))&&this.toast(`Now flying the ${St[i.player.hullId].name}`,"info",2);else if(e==="accept"){const h=wu(a,i.galaxy,o,un(a)).find(u=>u.id===t);if(h){const u=i.acceptMission(h);u?this.toast(u,"warn",3):this.toast(`Contract accepted: ${h.title}${h.deposit?` · deposit ◈ ${it(h.deposit)} paid`:""}`,"good",3)}}else if(e==="mcourse"){const h=a.missions.find(u=>u.id===t);if(h&&i.missionCourse(h)){this.toast(`Course set for ${h.dest.name}`,"info",2.5);return}}else if(e==="abandon"){const h=a.missions.find(u=>u.id===t);if(h){this.dialog(`<div class="ov-title">ABANDON CONTRACT?</div><p>${h.title} for ${h.client}.${h.deposit?` Your ◈ ${it(h.deposit)} deposit is forfeited.`:""}${h.type==="passenger"?" Passengers disembark here.":""}</p>`,[{label:"ABANDON",primary:!0,fn:()=>{i.failMission(h,"abandoned"),i.save(),this.renderStation()}},{label:"KEEP IT"}]);return}}else if(e==="repair"){const h=this.repairCost();a.credits>=h&&(a.credits-=h,l.hp=l.maxHp,l.shield=l.maxShield,i.audio.play("click",{vol:.6}))}else if(e==="missiles"){const u=(l.stats.mslCap-l.missiles)*60;a.credits>=u&&(a.credits-=u,l.missiles=l.stats.mslCap,i.audio.play("click",{vol:.6}))}else e==="rest"&&(i.restUntilTomorrow(),l.shield=l.maxShield,l.energy=l.maxEnergy,this.toast(`Rested. Day ${a.day} begins.`,"info",2));i.save(),this.renderStation()}openTraderDialog(e){const t=this.g,n=t.economy,i=t.state.systemId,r=t.player,a=()=>{const l=Object.entries(e.cargo).filter(([,m])=>m>0).map(([m,v])=>{const g=Math.round(n.buyPrice(e.origin,m)*1.18),p=Math.max(0,Math.min(v,r.stats.cargo-r.cargoUsed(),Math.floor(t.state.credits/g)));return`<div class="row" style="grid-template-columns:1.4fr .8fr .5fr auto"><span class="nm"><i class="dot" style="background:${Xe[m].color}"></i>${Xe[m].name}</span><span>◈ ${g}</span><span>${v}</span><span class="btns"><button class="sbtn buy" data-k="${m}" data-n="1" ${p?"":"disabled"}>BUY</button><button class="sbtn buy" data-k="${m}" data-n="${p}" ${p?"":"disabled"}>MAX</button></span></div>`}).join("")||"<p>Hold is empty.</p>",c=Object.entries(r.cargo).filter(([m,v])=>v>0&&Xe[m].kind==="ore"),h=c.reduce((m,[v,g])=>m+Math.round(n.sellPrice(i,v)*.9)*g,0),u=X("dialogBox");u.innerHTML=`<div class="ov-title">TRADER ${e.name.toUpperCase()}</div><p>“Hauling from ${t.galaxy.systems[e.origin].name}. Fair prices, no questions.”</p>${l}
        <p style="margin-top:6px">They'll also buy your raw ore at 90% of the local station rate${c.length?`: <b>◈ ${it(h)}</b>`:""}.</p>`;const d=document.createElement("button");d.className="pbtn secondary",d.textContent="SELL ORE TO TRADER",d.disabled=!c.length,d.addEventListener("click",()=>{for(const[m,v]of c)e.cargo[m]=(e.cargo[m]||0)+v,delete r.cargo[m];t.addCredits(h),t.state.stats.trades++,t.audio.play("coins",{vol:.7}),a()});const f=document.createElement("button");f.className="pbtn primary",f.textContent="CLOSE CHANNEL",f.addEventListener("click",()=>X("dialog").classList.add("hidden")),u.appendChild(d),u.appendChild(f),u.querySelectorAll("button[data-k]").forEach(m=>m.addEventListener("click",()=>{const v=m.dataset.k,g=Number(m.dataset.n),p=Math.round(n.buyPrice(e.origin,v)*1.18),y=Math.min(g,e.cargo[v]||0,r.stats.cargo-r.cargoUsed());y<=0||t.state.credits<p*y||(t.state.credits-=p*y,e.cargo[v]-=y,r.cargo[v]=(r.cargo[v]||0)+y,t.state.stats.trades++,t.audio.play("click",{vol:.6}),a())}))};a(),X("dialog").classList.remove("hidden")}openMap(){this.modalOpen()||(X("mapOv").classList.remove("hidden"),this.mapSel=null,this.renderMapTabs(),requestAnimationFrame(()=>this.drawMap()))}closeMap(){X("mapOv").classList.add("hidden")}renderMapTabs(){[...X("mapTabs").children].forEach(e=>e.classList.toggle("on",e.dataset.tab===this.mapTab)),X("mapSub").textContent=this.mapTab==="system"?`${this.g.sysInfo.name} system · tap a destination for autopilot`:"Galaxy chart · tap a system for market intel & routes",this.renderMapInfo()}mapGeom(){const e=X("mapCanvas"),t=Math.min(window.devicePixelRatio||1,2),n=e.clientWidth,i=e.clientHeight;return(e.width!==Math.round(n*t)||e.height!==Math.round(i*t))&&(e.width=Math.round(n*t),e.height=Math.round(i*t)),{c:e,ctx:e.getContext("2d"),W:n,H:i,dpr:t}}systemItems(){const e=this.g,t=e.world,n=[];return n.push({kind:"station",pos:t.station.pos,name:t.station.name,color:"#9ff0ff",r:7,arrive:200,ignore:t.station}),t.gates.forEach(i=>n.push({kind:"gate",pos:i.pos,name:`Gate → ${e.galaxy.systems[i.to].name}`,color:"#d6b8ff",r:6,arrive:250,gate:i})),t.fields.forEach(i=>n.push({kind:"field",pos:i.center,name:i.name,color:"#e8d3a4",r:6,ring:i.radius,arrive:i.radius+40,field:i,ignore:i})),t.planets.forEach((i,r)=>{const a=t.deposits[r],o=a.pos.clone().sub(i.pos).normalize().multiplyScalar(100).add(a.pos);n.push({kind:"planet",pos:i.pos,dest:o,name:i.data.name,color:`rgb(${i.data.pal[1].map(l=>Math.round(l*255)).join(",")})`,r:4,ring:i.radius,arrive:45,deposit:a})}),t.derelicts.forEach(i=>{i.occupied||n.push({kind:"derelict",pos:i.pos,name:i.name,color:"#ffb07a",r:5,arrive:120})}),n.push(...e.events.mapItems()),n}drawMap(){const{ctx:e,W:t,H:n,dpr:i}=this.mapGeom();e.setTransform(i,0,0,i,0,0),e.clearRect(0,0,t,n),e.fillStyle="#0b1020",e.fillRect(0,0,t,n),e.strokeStyle="rgba(63,184,200,.08)",e.lineWidth=1;for(let r=0;r<t;r+=40)e.beginPath(),e.moveTo(r,0),e.lineTo(r,n),e.stroke();for(let r=0;r<n;r+=40)e.beginPath(),e.moveTo(0,r),e.lineTo(t,r),e.stroke();this.mapTab==="system"?this.drawSystemMap(e,t,n):this.drawGalaxyMap(e,t,n)}sysProj(e,t){const n=this.mapInfoReserve(e),i=(e-n)/2,r=t/2,a=Math.min((e-n)/2,t/2)/9400,o=this.mapView.system,l=o.z;return c=>[i+c.x*a*l+o.x,r+c.z*a*l+o.y,a*l]}drawSystemMap(e,t,n){const i=this.g,r=this.sysProj(t,n),[a,o,l]=r(new E),c=i.sysData.star,h=Math.min(c.radius*l*4,Math.max(40,c.radius*l*1.6)),u=e.createRadialGradient(a,o,0,a,o,h);u.addColorStop(0,`rgb(${c.color.map(p=>Math.round(p*255)).join(",")})`),u.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=u,e.beginPath(),e.arc(a,o,h,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(239,230,210,.12)";for(const p of i.world.planets){const y=Math.hypot(p.pos.x,p.pos.z)*l;e.beginPath(),e.arc(a,o,y,0,Math.PI*2),e.stroke()}const d={event:6,station:5,gate:4,planet:3,field:2,derelict:1},f=[];for(const p of this.systemItems()){const[y,x]=r(p.pos),_=Math.max(p.r,(p.ring||0)*l);p.kind==="field"&&p.field.surge&&(e.fillStyle="rgba(200,245,106,.18)",e.beginPath(),e.arc(y,x,_,0,Math.PI*2),e.fill()),p.ring?(e.strokeStyle=p.kind==="field"&&p.field.surge?"#c8f56a":p.color,e.globalAlpha=p.kind==="field"&&!p.field.surge?.55:1,e.lineWidth=2,e.setLineDash(p.kind==="field"?[3,3]:[]),e.beginPath(),e.arc(y,x,_,0,Math.PI*2),p.kind==="planet"&&(e.fillStyle=p.color,e.fill()),e.stroke(),e.setLineDash([]),e.globalAlpha=1):(e.fillStyle=p.color,e.strokeStyle="#141826",e.lineWidth=2,e.beginPath(),p.kind==="gate"?e.arc(y,x,p.r,0,Math.PI*2):e.rect(y-p.r,x-p.r,p.r*2,p.r*2),e.fill(),e.stroke());const A=this.mapSel&&this.mapSel.name===p.name;A&&(e.strokeStyle="#f0703c",e.lineWidth=2.5,e.beginPath(),e.arc(y,x,_+7,0,Math.PI*2),e.stroke());const w=Math.min(_,12);f.push({x:y,y:x,gap:Math.min(_,40)+5,lines:[p.kind==="field"&&p.field.surge?`✦ ${p.name}`:p.kind==="event"?`${Zl(p.ev).ch} ${p.name}`:p.name],font:"700 12px system-ui, sans-serif",lh:14,color:A?"#f0703c":"#efe6d2",pri:A?99:d[p.kind],force:A,blocks:[{x:y-w,y:x-w,w:w*2,h:w*2}]})}for(const p of i.traders){const[y,x]=r(p.pos);e.fillStyle="#f2d36b",e.fillRect(y-3,x-3,6,6)}for(const p of i.outlaws)if(p.pos.distanceTo(i.player.pos)<i.player.stats.sensor){const[y,x]=r(p.pos);e.fillStyle="#ff4a3a",e.fillRect(y-4,x-4,8,8)}const m=i.player,[v,g]=r(m.pos);if(e.save(),e.translate(v,g),e.rotate(-m.yaw+Math.PI),e.fillStyle="#f0703c",e.strokeStyle="#141826",e.lineWidth=2,e.beginPath(),e.moveTo(0,-10),e.lineTo(7,8),e.lineTo(0,4),e.lineTo(-7,8),e.closePath(),e.fill(),e.stroke(),e.restore(),e.strokeStyle="rgba(63,184,200,.35)",e.beginPath(),e.arc(v,g,m.stats.sensor*l,0,Math.PI*2),e.stroke(),i.autopilot){const[p,y]=r(i.autopilot.pos);e.strokeStyle="#3fb8c8",e.setLineDash([6,5]),e.lineWidth=2,e.beginPath(),e.moveTo(v,g),e.lineTo(p,y),e.stroke(),e.setLineDash([])}f.push({x:v,y:g,gap:12,lines:["YOU"],font:"900 11px system-ui, sans-serif",color:"#f0703c",pri:98,force:!0,blocks:[{x:v-9,y:g-10,w:18,h:20}]}),e.font="900 18px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle";for(const p of this.missionTargets()){const[y,x]=r(p.pos),_=y+11,A=x-11;e.lineWidth=3,e.strokeStyle="#141826",e.strokeText("★",_,A),e.fillStyle="#ffd34a",e.fillText("★",_,A),f.push({x:_,y:A,gap:0,lines:[],pri:0,blocks:[{x:_-8,y:A-8,w:16,h:16}]})}e.textBaseline="alphabetic",this.drawLabels(e,f,t,n)}galProj(e,t){const n=this.mapInfoReserve(e),i=Math.min((e-n-30)/1e3,(t-40)/620),r=15+(e-n-30-1e3*i)/2,a=20+(t-40-620*i)/2,o=(e-n)/2,l=t/2,c=this.mapView.galaxy,h=c.z;return u=>[o+(r+u.x*i-o)*h+c.x,l+(a+u.y*i-l)*h+c.y]}mapInfoReserve(e){return window.innerHeight>window.innerWidth?0:Math.min(300,e*.44)}mapCenter(){const e=X("mapCanvas"),t=e.clientWidth;return[(t-this.mapInfoReserve(t))/2,e.clientHeight/2]}mapZoomAt(e,t,n){const i=this.mapView[this.mapTab],r=this.mapTab==="system"?14:4,a=wt(i.z*n,1,r),o=a/i.z,[l,c]=this.mapCenter();i.x=e-l-(e-l-i.x)*o,i.y=t-c-(t-c-i.y)*o,i.z=a,this.mapClampPan(),this.drawMap()}mapClampPan(){const e=X("mapCanvas"),t=this.mapView[this.mapTab],n=e.clientWidth*.5*t.z,i=e.clientHeight*.5*t.z;t.x=wt(t.x,-n,n),t.y=wt(t.y,-i,i)}resetMapView(e=this.mapTab){this.mapView[e]={z:1,x:0,y:0}}bindMapGestures(){const e=X("mapCanvas"),t=new Map;let n=null,i=null;const r=o=>{const l=e.getBoundingClientRect();return[o.clientX-l.left,o.clientY-l.top]};e.addEventListener("pointerdown",o=>{try{e.setPointerCapture(o.pointerId)}catch(l){if(l.name!=="NotFoundError"&&l.name!=="InvalidPointerId")throw l}if(t.set(o.pointerId,r(o)),t.size===1){const[l,c]=r(o);n={x:l,y:c,moved:!1},i=null}else if(t.size===2){const[l,c]=[...t.values()];i={d:Math.hypot(l[0]-c[0],l[1]-c[1]),mx:(l[0]+c[0])/2,my:(l[1]+c[1])/2},n&&(n.moved=!0)}}),e.addEventListener("pointermove",o=>{if(!t.has(o.pointerId))return;const l=t.get(o.pointerId),c=r(o);t.set(o.pointerId,c);const h=this.mapView[this.mapTab];if(t.size>=2&&i){const[u,d]=[...t.values()],f=Math.hypot(u[0]-d[0],u[1]-d[1]),m=(u[0]+d[0])/2,v=(u[1]+d[1])/2;h.x+=m-i.mx,h.y+=v-i.my,this.mapZoomAt(m,v,f/Math.max(1,i.d)),i={d:f,mx:m,my:v}}else if(n){if(!n.moved&&Math.hypot(c[0]-n.x,c[1]-n.y)<8)return;n.moved=!0,h.x+=c[0]-l[0],h.y+=c[1]-l[1],this.mapClampPan(),this.drawMap()}});const a=o=>{if(!t.has(o.pointerId))return;const l=t.size===1&&n&&!n.moved;if(t.delete(o.pointerId),l&&this.mapTap(o),t.size===0)n=null,i=null;else if(t.size===1){const[c]=[...t.values()];n={x:c[0],y:c[1],moved:!0},i=null}};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",o=>{t.delete(o.pointerId),t.size||(n=null,i=null)}),e.addEventListener("wheel",o=>{o.preventDefault();const[l,c]=r(o);this.mapZoomAt(l,c,Math.exp(-o.deltaY*.0015))},{passive:!1}),X("mapZoom").addEventListener("click",o=>{const l=o.target.closest("button[data-z]");if(!l)return;let[c,h]=this.mapCenter();const u=X("mapCanvas"),d=this.mapSel;d&&this.mapTab==="system"&&d.pos?[c,h]=this.sysProj(u.clientWidth,u.clientHeight)(d.pos):d&&this.mapTab==="galaxy"&&([c,h]=this.galProj(u.clientWidth,u.clientHeight)(this.g.galaxy.systems[d.sys])),l.dataset.z==="reset"?(this.resetMapView(),this.drawMap()):this.mapZoomAt(c,h,l.dataset.z==="in"?1.6:1/1.6)})}drawLabels(e,t,n,i){const r=[],a=X("mapZoom").getBoundingClientRect(),o=X("mapCanvas").getBoundingClientRect();a.width&&r.push({x:a.left-o.left-6,y:a.top-o.top-6,w:a.width+12,h:a.height+12});const l=c=>r.some(h=>c.x<h.x+h.w&&c.x+c.w>h.x&&c.y<h.y+h.h&&c.y+c.h>h.y);t.sort((c,h)=>h.pri-c.pri);for(const c of t)r.push(...c.blocks||[]);for(const c of t){if(!c.lines.length)continue;const h=c.lh||13,u=c.short?[c.lines,c.short]:[c.lines];let d=null,f=null,m=0,v=0;for(const g of u){e.font=c.font,m=Math.max(...g.map(y=>e.measureText(y).width))+6,v=h*g.length+2;const p=[];for(const y of[1,1.9]){const x=c.gap*y;p.push([c.x-m/2,c.y+x],[c.x-m/2,c.y-x-v],[c.x+x,c.y-v/2],[c.x-x-m,c.y-v/2],[c.x+x*.7,c.y+x*.7],[c.x-x*.7-m,c.y+x*.7],[c.x+x*.7,c.y-x*.7-v],[c.x-x*.7-m,c.y-x*.7-v])}for(const[y,x]of p){const _={x:y,y:x,w:m,h:v};if(y>=0&&x>=0&&y+m<=n&&x+v<=i&&!l(_)){d=_;break}}if(d){f=g;break}}!d&&c.force&&(f=c.lines,e.font=c.font,m=Math.max(...f.map(g=>e.measureText(g).width))+6,v=h*f.length+2,d={x:c.x-m/2,y:c.y+c.gap,w:m,h:v}),d&&(r.push(d),e.fillStyle="rgba(11,16,32,.72)",e.fillRect(d.x,d.y,m,v),e.textAlign="center",e.textBaseline="top",f.forEach((g,p)=>{e.fillStyle=p===0?c.color:c.color2||c.color,p>0&&c.font2&&(e.font=c.font2),e.fillText(g,d.x+m/2,d.y+1+p*h)}),e.textBaseline="alphabetic")}}drawGalaxyMap(e,t,n){const i=this.g,r=this.galProj(t,n),a=i.galaxy.systems,o=i.state.systemId;e.lineWidth=3;for(const u of a)for(const d of u.links)if(d>u.id){const[f,m]=r(u),[v,g]=r(a[d]);e.strokeStyle=u.id===o||d===o?"rgba(63,184,200,.9)":"rgba(239,230,210,.28)",e.beginPath(),e.moveTo(f,m),e.lineTo(v,g),e.stroke()}const l=[];for(const u of a){const[d,f]=r(u),m=i.state.intel[u.id];e.fillStyle=eb[u.eco],e.strokeStyle="#141826",e.lineWidth=3,e.beginPath(),e.arc(d,f,u.id===o?13:10,0,Math.PI*2),e.fill(),e.stroke(),u.id===o&&(e.strokeStyle="#efe6d2",e.lineWidth=2,e.beginPath(),e.arc(d,f,19,0,Math.PI*2),e.stroke());const v=this.mapSel&&this.mapSel.sys===u.id;v&&(e.strokeStyle="#f0703c",e.lineWidth=3,e.beginPath(),e.arc(d,f,22,0,Math.PI*2),e.stroke());const g=u.id===o?20:v?23:12;l.push({x:d,y:f,gap:g+2,lines:[u.name,`${Mn[u.eco].name}${m?"":" · ?"}`],short:[u.name],font:'900 13px "Arial Black", system-ui',font2:"700 10px system-ui",lh:15,color:v?"#f0703c":"#efe6d2",color2:m?"rgba(239,230,210,.85)":"rgba(239,230,210,.5)",pri:v?99:u.id===o?50:10,force:v||u.id===o,blocks:[{x:d-g,y:f-g,w:g*2,h:g*2}]})}const c=new Map;for(const u of cr(i.state))c.has(u.sys)||c.set(u.sys,[]),c.get(u.sys).push(u);e.font="900 15px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle";for(const[u,d]of c){const[f,m]=r(a[u]);d.forEach((v,g)=>{const p=Zl(v),y=f-14-g*16,x=m+15;e.lineWidth=3,e.strokeStyle="#141826",e.strokeText(p.ch,y,x),e.fillStyle=p.col,e.fillText(p.ch,y,x),l.push({x:y,y:x,gap:0,lines:[],pri:0,blocks:[{x:y-8,y:x-8,w:16,h:16}]})})}const h=new Set(i.state.missions.map(u=>u.dest.sys));e.font="900 18px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle";for(const u of h){const[d,f]=r(a[u]),m=d+14,v=f-14;e.lineWidth=3,e.strokeStyle="#141826",e.strokeText("★",m,v),e.fillStyle="#ffd34a",e.fillText("★",m,v),l.push({x:m,y:v,gap:0,lines:[],pri:0,blocks:[{x:m-8,y:v-8,w:16,h:16}]})}e.textBaseline="alphabetic",this.drawLabels(e,l,t,n)}mapTap(e){const t=X("mapCanvas"),n=t.getBoundingClientRect(),i=e.clientX-n.left,r=e.clientY-n.top,a=t.clientWidth,o=t.clientHeight;let l=null,c=34;if(this.mapTab==="system"){const h=this.sysProj(a,o);for(const u of this.systemItems()){const[d,f,m]=h(u.pos),v=Math.hypot(d-i,f-r)-(u.ring?Math.min(u.ring*m,30):0);v<c&&(c=v,l=u)}}else{const h=this.galProj(a,o);for(const u of this.g.galaxy.systems){const[d,f]=h(u),m=Math.hypot(d-i,f-r);m<c&&(c=m,l={sys:u.id,name:u.name})}}this.mapSel=l,this.g.audio.play("click",{vol:.3}),this.renderMapInfo(),this.drawMap()}route(e,t){const n=this.g.galaxy.systems,i={[e]:-1},r=[e];for(;r.length;){const l=r.shift();if(l===t)break;for(const c of n[l].links)c in i||(i[c]=l,r.push(c))}if(!(t in i))return null;const a=[];let o=t;for(;o!==-1;)a.unshift(o),o=i[o];return a}renderMapInfo(){const e=X("mapInfo"),t=this.g,n=this.mapSel;if(!n){e.innerHTML="";return}if(this.mapTab==="system"){let i="";if(n.kind==="gate"){const l=t.galaxy.systems[n.gate.to];i=`<p>Leads to <b>${l.name}</b> (${Mn[l.eco].name}). Fly close and press JUMP.</p>`}n.kind==="field"&&(i=`<p>Asteroids rich in <b>${Xe[n.field.primary].name}</b> and ${Xe[n.field.data.secondary].name}. Rare Lumenite veins.</p>`),n.kind==="planet"&&n.deposit&&(i=`<p>Surface deposit: <b>${Xe[n.deposit.ore].name}</b> (${Math.round(n.deposit.amount)} units). Autopilot parks you in low orbit above it, ready to drill.</p>`),n.kind==="station"&&(i="<p>Safe harbor: market, upgrades, shipyard, repairs.</p>"),n.kind==="derelict"&&(i="<p>Abandoned hulk. Hold SALVAGE nearby for credits & parts. Restocks every 3 days.</p>"),n.kind==="field"&&n.field.surge&&(i+='<p style="color:#4f7a10"><b>✦ Lumenite surge today:</b> far higher chance of Lumenite from every rock here.</p>'),n.kind==="event"&&(i=`<p>${ms(n.ev,t.galaxy,t.state,t.player.stats.sensorLvl).line}</p>${n.ev.type==="distress"?"<p>Fly alongside and hold ASSIST to patch the ship up.</p>":n.ev.type==="wreck"?"<p>Fly close and hold SALVAGE.</p>":"<p>Approach and the base launches its guards. Destroy the base itself for the loot.</p>"}`);const r=(n.dest||n.pos).distanceTo(t.player.pos),a=t.state.missions.filter(l=>l.dest.sys===t.state.systemId&&(n.kind==="station"&&l.dest.kind==="station"||n.kind==="planet"&&l.dest.kind==="planet"&&t.world.deposits[l.dest.planet]===n.deposit)),o=a.length?`<p style="color:#9a6a00"><b>★ Contract drop-off:</b> ${a.map(l=>l.title).join("; ")}</p>`:"";e.innerHTML=`<h4>${n.name}</h4>${i}${o}<p>Distance ${this.dist(r)}</p><button class="pbtn primary" data-act="autopilot">AUTOPILOT</button>`}else{const i=t.galaxy.systems[n.sys],r=t.state.intel[i.id],a=this.route(t.state.systemId,i.id);let o="";if(r)o="<table><tr><td></td><td><b>pay</b></td><td><b>sell</b></td></tr>"+zn.map(m=>`<tr><td>${m.name}</td><td>${r.prices[m.id].s}</td><td>${r.prices[m.id].b??"—"}</td></tr>`).join("")+`</table><small>Intel from day ${r.day}</small>`;else{const m=Mn[i.eco].mult,v=Object.entries(m).filter(([,p])=>p>=1.25).map(([p])=>Xe[p].name).join(", "),g=Object.entries(m).filter(([,p])=>p<=.75).map(([p])=>Xe[p].name).join(", ");o=`<p>No market intel yet.<br>Typical demand: <b>${v||"—"}</b><br>Typical exports: <b>${g||"—"}</b></p>`}const l=a?a.length-1:0,c=i.id===t.state.systemId?"<p><b>You are here.</b></p>":`<button class="pbtn primary" data-act="route">PLOT ROUTE · ${l} JUMP${l>1?"S":""}</button>`,h=t.state.missions.filter(m=>m.dest.sys===i.id),u=h.length?`<p style="color:#9a6a00"><b>★ Contracts here:</b> ${h.map(m=>`${m.title} → ${m.dest.name} (due Day ${m.deadline})`).join("; ")}</p>`:"",d=cr(t.state).filter(m=>m.sys===i.id).map(m=>{const v=ms(m,t.galaxy,t.state,t.player.stats.sensorLvl);return`<p><b style="color:${v.col}">${v.ch}</b> <b>${v.title}:</b> ${v.line}</p>`}).join(""),f=hn(nn(t.state,i.eco));e.innerHTML=`<h4>${i.name}</h4><p>${Mn[i.eco].name} · outlaw risk ${Math.round(i.danger*100)}%/day</p><p><b style="color:${Rt[i.eco].color}">${Rt[i.eco].name}</b> · you are <b>${f.name}</b>${f.level<=-1?' <span style="color:#ff6b4a">(enforcers may hunt you)</span>':""}</p>${d}${u}${o}${c}`}}mapAction(e){const t=this.g,n=this.mapSel;if(n&&(e==="autopilot"&&(t.setAutopilot(n.dest||n.pos,n.name,n.arrive||200,n.ignore||null),this.closeMap()),e==="route")){const i=this.route(t.state.systemId,n.sys);if(!i||i.length<2)return;const r=t.world.gates.find(a=>a.to===i[1]);r&&(t.setAutopilot(r.pos,`Gate → ${t.galaxy.systems[i[1]].name}`,250),this.closeMap())}}}const Wt=s=>document.getElementById(s),Je={A:0,B:1,X:2,Y:3,LB:4,RB:5,LT:6,RT:7,BACK:8,START:9,UP:12,DOWN:13,LEFT:14,RIGHT:15},ya=.18,rr={xbox:{A:"A",B:"B",X:"X",Y:"Y",LB:"LB",RB:"RB",LT:"LT",RT:"RT",BACK:"View",START:"Menu"},sony:{A:"✕",B:"○",X:"□",Y:"△",LB:"L1",RB:"R1",LT:"L2",RT:"R2",BACK:"Share",START:"Options"},nintendo:{A:"B",B:"A",X:"Y",Y:"X",LB:"L",RB:"R",LT:"ZL",RT:"ZR",BACK:"−",START:"+"}};class ib{constructor(e){this.g=e,this.ui=e.ui,this.index=null,this.active=!1,this.prev=[],this.owns={steer:!1,fire:!1,boost:!1,mine:!1},this.focusEl=null,this.lastRect=null,this.navKey=null,this.navT=0,this.layout=rr.xbox,this.rumbleOk=!0,this.lastRumble=0,this.lastRumbleStr=0,window.addEventListener("gamepadconnected",n=>this.connect(n.gamepad)),window.addEventListener("gamepaddisconnected",n=>{n.gamepad.index===this.index&&(this.index=null,this.release(),this.deactivate(),this.g.mode==="play"&&this.ui.toast("Controller disconnected","warn",3))});const t=()=>{this.active&&this.deactivate()};window.addEventListener("pointerdown",t,{capture:!0}),window.addEventListener("keydown",t,{capture:!0})}connect(e){this.index===null&&(this.index=e.index);const t=e.id.toLowerCase();this.layout=/xbox|xinput|045e/.test(t)?rr.xbox:/054c|dualsense|dualshock|playstation|ps4|ps5/.test(t)?rr.sony:/057e|pro controller|joy-con|nintendo/.test(t)?rr.nintendo:rr.xbox,this.applyBadges()}pad(){const e=navigator.getGamepads?navigator.getGamepads():[];if(this.index!==null&&e[this.index]&&e[this.index].connected)return e[this.index];for(const t of e)if(t&&t.connected)return this.connect(t),this.index=t.index,t;return null}activate(){this.active||(this.active=!0,document.body.classList.add("gamepad"),this.applyBadges(),this.g.mode==="play"?this.ui.toast(`🎮 Controller active — ${this.helpText(!0)}`,"info",5):this.g.mode==="menu"&&(Wt("loadText").textContent=`Controller ready · press ${this.layout.A} to start`))}deactivate(){this.active=!1,document.body.classList.remove("gamepad"),this.focusEl&&this.focusEl.classList.remove("gp-focus")}applyBadges(){const e=this.layout,t=(n,i)=>{const r=Wt(n);r&&(r.dataset.pad=i)};t("btnAction",e.A),t("btnFire",e.X),t("btnMissile",e.B),t("btnCruise",e.Y),t("btnTarget",e.LB),t("btnBoost",e.RB),t("btnMap",e.BACK),t("btnMenu",e.START),t("throttle",`${e.LT}/${e.RT}`)}helpText(e=!1){const t=this.layout,n=`L-stick steer · ${t.RT}/${t.LT} throttle · ${t.X} fire · ${t.A} action`;return e?n:`${n} · ${t.B} missile · ${t.RB} boost · ${t.Y} cruise · ${t.LB} target · ${t.BACK} map · ${t.START} pause · menus: D-pad/stick move, ${t.A} select, ${t.B} back, ${t.LB}/${t.RB} tabs`}rumble(e,t=e,n=120){if(!this.active||!this.rumbleOk)return;const i=this.pad(),r=i&&i.vibrationActuator;if(!r||typeof r.playEffect!="function")return;const a=performance.now();a-this.lastRumble<80&&e<=this.lastRumbleStr||(this.lastRumble=a,this.lastRumbleStr=e,r.playEffect("dual-rumble",{duration:n,strongMagnitude:wt(e,0,1),weakMagnitude:wt(t,0,1)}).catch(o=>{this.rumbleOk=!1,console.info("Controller rumble unavailable:",o.name)}))}release(){const e=this.g.input;this.owns.steer&&(e.sx=0,e.sy=0),this.owns.fire&&(e.fire=!1),this.owns.boost&&(e.boost=!1),this.owns.mine&&(e.mine=!1),this.owns={steer:!1,fire:!1,boost:!1,mine:!1}}poll(e){const t=this.pad();if(!t)return;const n=v=>!!t.buttons[v]&&(t.buttons[v].pressed||t.buttons[v].value>.5),i=v=>t.buttons[v]?t.buttons[v].value:0,r=t.buttons.map((v,g)=>n(g)),a=v=>r[v]&&!this.prev[v],o=v=>{const g=t.axes[v]||0;return Math.abs(g)<ya?0:g},l=o(0),c=o(1),h=o(2),u=o(3);if((r.some(Boolean)||l||c||h||u)&&this.activate(),!this.active){this.prev=r;return}const f=this.context();f!=="flight"&&this.release();const m={p:t,btn:n,val:i,hit:a,lx:l,ly:c,rx:h,ry:u,dt:e};f==="flight"?this.flight(m):f==="map"?this.mapNav(m):f&&this.menuNav(m,f),f!==this.lastCtx&&this.focusEl&&f==="flight"&&(this.focusEl.classList.remove("gp-focus"),this.focusEl=null),this.lastCtx=f,this.prev=r}context(){const e=this.g,t=n=>!Wt(n).classList.contains("hidden");return t("dialog")&&(e.mode==="menu"||e.mode==="play")?"dialog":e.mode==="menu"?"start":e.mode!=="play"?null:t("pause")?"pause":t("mapOv")?"map":t("station")?"station":"flight"}flight(e){const t=this.g,n=t.input,i=e.p.axes[0]||0,r=e.p.axes[1]||0,a=Math.min(1,Math.hypot(i,r));if(a>ya){const h=Math.pow((a-ya)/(1-ya),1.3)/a;n.sx=wt(i*h,-1,1),n.sy=wt(-r*h,-1,1),this.owns.steer=!0}else this.owns.steer&&(n.sx=0,n.sy=0,this.owns.steer=!1);const o=e.val(Je.RT),l=e.val(Je.LT);(o>.05||l>.05)&&(n.throttle=wt(n.throttle+(o-l)*.9*e.dt,0,1)),e.hit(Je.UP)&&(n.throttle=wt(Math.round((n.throttle+.25)*4)/4,0,1)),e.hit(Je.DOWN)&&(n.throttle=wt(Math.round((n.throttle-.25)*4)/4,0,1));const c=(h,u)=>{e.btn(u)?n[h]||(n[h]=!0,this.owns[h]=!0):this.owns[h]&&(n[h]=!1,this.owns[h]=!1)};if(c("fire",Je.X),c("boost",Je.RB),e.hit(Je.A)){const h=t.currentAction;h&&h.hold?(n.mine=!0,this.owns.mine=!0):h&&(t.audio.play("click",{vol:.5}),t.doAction(h))}else!e.btn(Je.A)&&this.owns.mine&&(n.mine=!1,this.owns.mine=!1);e.hit(Je.B)&&t.fireMissile(),e.hit(Je.Y)&&t.setCruise(!t.player.cruise),e.hit(Je.LB)&&t.cycleTarget(),e.hit(Je.BACK)&&this.ui.openMap(),e.hit(Je.START)&&this.ui.togglePause()}layerRoot(e){return{start:Wt("start").querySelector(".start-actions"),dialog:Wt("dialogBox"),pause:Wt("pause").querySelector(".dialog"),station:Wt("station")}[e]}buttons(e){return[...e.querySelectorAll("button")].filter(t=>!t.disabled&&t.offsetParent!==null&&t.getClientRects().length)}setFocus(e){this.focusEl&&this.focusEl!==e&&this.focusEl.classList.remove("gp-focus"),this.focusEl=e,e&&(e.classList.add("gp-focus"),e.scrollIntoView({block:"nearest",inline:"nearest"}),this.lastRect=e.getBoundingClientRect(),this.lastZone=e.closest("#stBody")?"#stBody":e.closest(".tabs")?".tabs":null)}dir(e){let t=0,n=0;e.btn(Je.LEFT)?t=-1:e.btn(Je.RIGHT)&&(t=1),e.btn(Je.UP)?n=-1:e.btn(Je.DOWN)&&(n=1),!t&&!n&&Math.hypot(e.lx,e.ly)>.6&&(Math.abs(e.lx)>Math.abs(e.ly)?t=Math.sign(e.lx):n=Math.sign(e.ly));const i=`${t},${n}`;return!t&&!n?(this.navKey=null,null):i!==this.navKey?(this.navKey=i,this.navT=.35,[t,n]):(this.navT-=e.dt,this.navT<=0?(this.navT=.11,[t,n]):null)}pick(e,t,[n,i]){let r=null,a=1/0;for(const o of e){const l=o.x-t.x,c=o.y-t.y,h=l*n+c*i;if(h<=4)continue;const u=h+Math.abs(l*i-c*n)*2.5;u<a&&(a=u,r=o)}return r}menuNav(e,t){const n=this.layerRoot(t);if(!n)return;const i=this.buttons(n);if(!i.length)return;if(!this.focusEl||!this.focusEl.isConnected||!i.includes(this.focusEl)||t!==this.lastCtx){let a=null;if(this.lastRect&&t===this.lastCtx){const o=this.lastRect.left+this.lastRect.width/2,l=this.lastRect.top+this.lastRect.height/2,c=this.lastZone?i.filter(u=>u.closest(this.lastZone)):[];a=(c.length?c:i).reduce((u,d)=>{const f=d.getBoundingClientRect(),m=Math.hypot(f.left+f.width/2-o,f.top+f.height/2-l);return!u||m<u.d?{el:d,d:m}:u},null).el}else a=this.defaultFocus(t,n,i);this.setFocus(a)}else this.lastRect=this.focusEl.getBoundingClientRect();const r=this.dir(e);if(r){const a=c=>{const h=c.getBoundingClientRect();return{el:c,x:h.left+h.width/2,y:h.top+h.height/2}},o=a(this.focusEl),l=this.pick(i.filter(c=>c!==this.focusEl).map(a),o,r);l&&(this.setFocus(l.el),this.g.audio.play("click",{vol:.15,rate:1.4}))}if(e.hit(Je.A)&&this.focusEl&&(t==="start"&&this.audioHint(),this.focusEl.click()),t==="station")(e.hit(Je.LB)||e.hit(Je.RB))&&this.cycleTabs(Wt("stTabs"),e.hit(Je.RB)?1:-1),e.ry&&(Wt("stBody").scrollTop+=e.ry*700*e.dt),e.hit(Je.B)&&Wt("btnUndock").click();else if(t==="pause")(e.hit(Je.B)||e.hit(Je.START))&&this.ui.togglePause();else if(t==="dialog"&&e.hit(Je.B)){const a=this.buttons(n).find(o=>/CANCEL|CLOSE/.test(o.textContent));a&&a.click()}}defaultFocus(e,t,n){return e==="station"?n.find(i=>i.closest("#stBody"))||n.find(i=>i.classList.contains("tab"))||n[0]:e==="dialog"?n.find(i=>/CANCEL|CLOSE/.test(i.textContent))||n.find(i=>i.classList.contains("primary"))||n[0]:n.find(i=>i.classList.contains("primary"))||n[0]}cycleTabs(e,t){const n=[...e.querySelectorAll(".tab")],i=n.findIndex(r=>r.classList.contains("on"));n[(i+t+n.length)%n.length].click()}audioHint(){setTimeout(()=>{this.g.audio.ctx.state!=="running"&&this.g.state.sound&&this.ui.toast("Tap the screen once to turn on sound — browsers only start audio after a touch or click","info",6)},900)}mapItems(){const e=this.ui,t=Wt("mapCanvas"),n=t.clientWidth,i=t.clientHeight;if(e.mapTab==="system"){const a=e.sysProj(n,i);return e.systemItems().map(o=>{const[l,c]=a(o.pos);return{sel:o,x:l,y:c}})}const r=e.galProj(n,i);return this.g.galaxy.systems.map(a=>{const[o,l]=r(a);return{sel:{sys:a.id,name:a.name},x:o,y:l}})}mapNav(e){const t=this.ui,n=this.g,i=Wt("mapCanvas");this.focusEl&&(this.focusEl.classList.remove("gp-focus"),this.focusEl=null);const r=this.mapItems(),a=t.mapSel&&r.find(u=>u.sel.name===t.mapSel.name);let o=a;if(!o)if(t.mapTab==="system"){const[u,d]=t.sysProj(i.clientWidth,i.clientHeight)(n.player.pos);o={x:u,y:d}}else{const[u,d]=t.galProj(i.clientWidth,i.clientHeight)(n.galaxy.systems[n.state.systemId]);o={x:u,y:d}}const l=this.dir(e);if(l){const u=this.pick(r.filter(d=>d!==a),o,l);u&&this.selectMap(u)}if(e.hit(Je.A)){const u=Wt("mapInfo").querySelector("button[data-act]");if(u)u.click();else{const[d,f]=t.mapCenter(),m=r.reduce((v,g)=>!v||Math.hypot(g.x-d,g.y-f)<Math.hypot(v.x-d,v.y-f)?g:v,null);m&&this.selectMap(m)}}(e.hit(Je.B)||e.hit(Je.BACK))&&t.closeMap(),(e.hit(Je.LB)||e.hit(Je.RB)||e.hit(Je.Y))&&this.cycleTabs(Wt("mapTabs"),e.hit(Je.LB)?-1:1),e.hit(Je.START)&&(t.closeMap(),t.togglePause());const c=e.val(Je.RT),h=e.val(Je.LT);if(c>.05||h>.05){let[u,d]=t.mapCenter();const f=r.find(m=>t.mapSel&&m.sel.name===t.mapSel.name);f&&(u=f.x,d=f.y),t.mapZoomAt(u,d,Math.exp((c-h)*2.2*e.dt))}if(e.rx||e.ry){const u=t.mapView[t.mapTab];u.x-=e.rx*520*e.dt,u.y-=e.ry*520*e.dt,t.mapClampPan(),t.drawMap()}}selectMap(e){const t=this.ui,n=Wt("mapCanvas");t.mapSel=e.sel,t.renderMapInfo();const i=n.clientWidth,r=n.clientHeight,a=50,o=Wt("mapInfo").getBoundingClientRect(),l=n.getBoundingClientRect(),c=o.height&&o.top>l.top+r*.4?o.top-l.top:r;if(e.x<a||e.x>i-t.mapInfoReserve(i)-a||e.y<a||e.y>c-a){const h=t.mapView[t.mapTab],[u,d]=t.mapCenter();h.x+=u-e.x,h.y+=Math.min(d,c/2)-e.y,t.mapClampPan()}t.drawMap(),this.g.audio.play("click",{vol:.2,rate:1.3})}}const qe=new E,Ot=new E,yn=new E,sb=new E,Pu=new E,Lu=new E(0,1,0),Ii=new URLSearchParams(location.search);class rb{constructor(e){this.container=e,this.time=0,this.mode="loading",this.traders=[],this.outlaws=[],this.input={sx:0,sy:0,throttle:.35,fire:!1,mine:!1,boost:!1},this.target=null,this.autopilot=null,this.warp=null,this.docked=!1,this.paused=!1,this.shake=0,this.mineAcc=0,this.salvage=null}async boot(){const e=this.renderer=new hy({antialias:!1,powerPreference:"high-performance"});e.toneMapping=Ql,e.toneMappingExposure=1.05,e.outputColorSpace=Tt,this.container.appendChild(e.domElement),this.scene=new md,this.camera=new Yt(62,1,1,8e4),this.keyLight=new Gl(16777215,2.8),this.scene.add(this.keyLight),this.scene.add(this.keyLight.target),this.hemi=new hx(8952268,2234914,.55),this.scene.add(this.hemi),this.rimLight=new Gl(7323647,.6),this.scene.add(this.rimLight),this.scene.add(this.rimLight.target),this.post=new XM(e,this.scene,this.camera),this.audio=new qM,this.ui=new nb(this),this.pad=new ib(this),this.fx=new Q_(this),this.world=new q_(this),this.events=new QM(this),window.addEventListener("resize",()=>this.resize()),this.resize();const t=EM();NM();const n=()=>{this.mode==="play"&&this.save()};document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&n()}),window.addEventListener("pagehide",n),this.state=t||bu(Ii.get("seed")?Number(Ii.get("seed")):Math.floor(Math.random()*1e9)),$o(this.state),Ko(this.state),Vo(this.state),this.hasSave=!!t,this.applyQuality(this.state.quality);const i={audio:0,model:0,world:0},r=l=>this.ui.setLoading(i.audio*.55+i.model*.25+i.world*.2,l),a=this.audio.load((l,c)=>{i.audio=l,r(`Loading audio · ${c}`)}),o=new Promise(l=>{const c=new l_;c.setDecoderPath("./draco/");const h=new Ax;h.setDRACOLoader(c),h.load("./models/outlaw.glb",u=>{this.outlawTpl=B_(u.scene,19),i.model=1,r("Outlaw signatures catalogued"),l()},u=>{u.total&&(i.model=u.loaded/u.total*.95,r("Loading ship models"))},u=>{console.warn("outlaw model failed, using procedural fallback",u),this.outlawTpl=null,i.model=1,r("Ship models ready"),l()})});this.galaxy=gr(this.state.seed),this.economy=new Go(this.galaxy,this.state),this.state.systemId==null&&(this.state.systemId=this.galaxy.startId),i.world=.2,r("Charting star systems"),await new Promise(l=>setTimeout(l,30)),["wren","mule","kestrel","bastion"].forEach(l=>us(l,"player")),us("mule","trader"),us("kestrel","outlaw"),i.world=.5,r("Assembling hulls"),await new Promise(l=>setTimeout(l,30)),this.enterSystem(this.state.systemId,null,!0),i.world=1,r("Systems online"),await Promise.all([a,o]),this.ui.setLoading(1,"Ready for launch"),this.renderer.compile(this.scene,this.camera),this.mode="menu",this.ui.showReady(this.hasSave),this.last=performance.now(),this.renderer.setAnimationLoop(()=>this.frame()),window.__game=this}setFX(e){this.post.setEnabled(e),this.scene.fog&&(this.scene.fog.density=e?this.fogDensity:0),this.world.dust.visible=e;for(const t of this.world.fields)t.haze.forEach(n=>n.visible=e);this.world.star.children.forEach((t,n)=>{n>0&&(t.visible=e)})}applyQuality(e){this.state.quality=e;const t=e==="high"?1.75:1;this.pixelRatio=Math.min(window.devicePixelRatio||1,t),this.resize()}resize(){const e=window.innerWidth,t=window.innerHeight;if(!this.renderer)return;const n=this.pixelRatio||Math.min(window.devicePixelRatio||1,1.75);this.renderer.setPixelRatio(n),this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.post.setSize(e,t,n),this.world&&(this.world.dust.material.uniforms.uPx.value=n*(t/800)),this.fx&&(this.fx.particles.points.material.uniforms.uPx.value=n*(t/800))}startGame(e){if(e){RM();const t=Math.floor(Math.random()*1e9);this.state=Vo(Ko($o(bu(t)))),this.galaxy=gr(t),this.economy=new Go(this.galaxy,this.state),this.state.systemId=this.galaxy.startId,this.enterSystem(this.state.systemId,null,!0)}this.audio.unlock(),this.audio.setEnabled(this.state.sound),this.audio.setMusic("calm"),this.mode="play",this.ui.enterPlay(),this.checkDeadlines(),this.events.briefing(),Ii.get("event")&&setTimeout(()=>this.events.force(Ii.get("event")),300),this.state.tutorial.docked||setTimeout(()=>this.ui.toast("Welcome, pilot. Mine rocks in the field or dock at the station to trade.","info",6),600)}activeShipRec(){return this.state.ships.find(e=>e.uid===this.state.active)}spawnPlayer(e,t=0){const n=this.activeShipRec();this.player&&this.player.remove();const i=this.shipStats(n),r=new vr(this,{kind:"player",hullId:n.hull,palette:"player",stats:i,name:St[n.hull].name});for(r.cargo=n.cargo,n.hp!=null&&(r.hp=Math.min(r.maxHp,n.hp)),r.missiles=Math.min(n.missiles||0,i.mslCap),r.pos.copy(e),r.yaw=t,r.speed=0,r.obj.quaternion.setFromEuler(new $t(0,t,0,"YXZ")),this.player=r,this.playerBeams=this.playerBeams||[];this.playerBeams.length<3;)this.playerBeams.push(this.fx.makeBeam(5826815));return this.mineBeam=this.mineBeam||this.fx.makeBeam(12124010),this.camInit=!1,this.updateMissionLoad(),r}syncShipRec(){const e=this.activeShipRec();!e||!this.player||(e.hp=this.player.hp,e.missiles=this.player.missiles)}shipStats(e){return iM(Cr(e.hull,e.mods),e.uniques)}refreshPlayerStats(){const e=this.activeShipRec(),t=this.shipStats(e);this.player.applyStats(t,!1),this.player.missiles=Math.min(this.player.missiles,t.mslCap)}cargoFree(){return this.player.stats.cargo-this.player.cargoUsed()}enterSystem(e,t,n=!1){for(const c of this.traders)c.remove();for(const c of this.outlaws)c.remove();this.traders=[],this.outlaws=[],this.target=null,this.autopilot=null,this.fx.clearAll(),this.state.systemId=e;const i=this.galaxy.systems[e];this.sysInfo=i,this.sysData=Fd(i,this.galaxy),this.world.build(this.sysData,this.state.day);let r,a;if(t!=null){const c=this.world.gates.find(u=>u.to===t)||this.world.gates[0],h=qe.copy(c.pos).negate().setY(0).normalize();r=c.pos.clone().addScaledVector(h,430),a=Math.atan2(h.x,h.z)}else if(n&&this.state.pos)r=new E(...this.state.pos),a=this.state.yaw||0;else{const c=this.world.station.pos,h=this.world.fields.slice().sort((d,f)=>d.center.distanceTo(c)-f.center.distanceTo(c))[0],u=h?qe.subVectors(h.center,c).setY(0).normalize():qe.copy(c).setY(0).normalize();r=c.clone().addScaledVector(u,230),a=Math.atan2(u.x,u.z)}this.spawnPlayer(r,a),this.economy.recordIntel(e),this.traderTimer=6;const l=1+new Ft(Date.now()&65535).int(0,1)+(i.eco==="industrial"?1:0);for(let c=0;c<l;c++)this.spawnTrader(!0);this.rollOutlaws(),this.events.onEnterSystem(),n||this.ui.toast(`${i.name} · ${Mn[i.eco].name} system`,"info",3.5),this.ui.onSystemChanged()}spawnTrader(e=!1){const t=this.world;if(!t.gates.length)return;const n=Math.random,i=t.gates[Math.floor(n()*t.gates.length)],r=n()<.5,a=new vr(this,{kind:"trader",hullId:"mule",palette:"trader",stats:{...Cr("mule",{engine:0,cargo:0,barrier:1,beam:0,missile:0,mining:0,sensors:0,hull:0,reactor:0}),speed:46},name:Ds[Math.floor(n()*Ds.length)]}),o=r?this.galaxy.systems[i.to]:this.sysInfo,l=zn.filter(f=>f.kind==="good"&&Mn[o.eco].mult[f.id]<1),c=l.length?l:zn.filter(f=>f.kind==="good");for(let f=0;f<2;f++){const m=c[Math.floor(n()*c.length)];a.cargo[m.id]=(a.cargo[m.id]||0)+8+Math.floor(n()*22)}a.origin=o.id;const h=r?i.pos:t.station.pos,u=r?t.station.pos:i.pos;a.dest={pos:u.clone(),type:r?"station":"gate",gate:r?null:i};const d=h.clone().add(qe.set((n()-.5)*120,(n()-.5)*60,(n()-.5)*120));e?d.lerp(u,.15+n()*.6):d.addScaledVector(Ot.subVectors(u,h).normalize(),r?150:180),a.pos.copy(d),qe.subVectors(u,d),a.yaw=Math.atan2(qe.x,qe.z),a.throttle=.85,a.speed=a.stats.speed*.8,a.beam=null,this.traders.push(a),!e&&r&&this.fx.particles.burst(d,30,60,12099839,5,1)}updateTraders(e){for(let n=this.traders.length-1;n>=0;n--){const i=this.traders[n];if(i.dead){this.traders.splice(n,1);continue}if(i.disabled){i.yaw+=.04*e,i.obj.quaternion.setFromEuler(new $t(i.pitch,i.yaw,i.roll,"YXZ")),i.vel.set(0,0,0),i.updateVisual(e);continue}this.time-i.lastHit<8&&i.lastAttacker&&!i.lastAttacker.dead?(qe.subVectors(i.pos,i.lastAttacker.pos).add(i.pos),i.steerTo(qe,e),i.throttle=1,i.boost=!0):(i.boost=!1,i.aim=i.aim||new E,this.planRoute(i.pos,i.dest.pos,i.radius,i.dest.type==="station"?this.world.station:null,i.aim),i.steerTo(i.aim,e,.6),i.throttle=this.angleTo(i,i.aim)>.8?.45:.85),i.updateMotion(e,this.world),i.updateVisual(e),i.pos.distanceTo(i.dest.pos)<(i.dest.type==="station"?110:120)&&(i.dest.type==="gate"&&this.fx.particles.burst(i.pos,40,80,12099839,5,1),this.target===i&&(this.target=null),i.remove(),this.traders.splice(n,1))}this.traderTimer-=e;const t=3+(this.sysInfo.eco==="industrial"||this.sysInfo.eco==="agricultural"?1:0);this.traderTimer<=0&&(this.traderTimer=28+Math.random()*35,this.traders.length<t&&this.spawnTrader(!1))}rollOutlaws(){const e=`${this.state.systemId}:${this.state.day}`;let t=this.state.outlawRoll[e];if(!t){const n=Ii.get("outlaws")==="1",i=hn(nn(this.state,"pirate")).raid*(this.player&&this.player.stats.ghost?.5:1),r=(this.sysInfo.danger+Math.max(0,...this.missionsAboard().map(fM)))*i;let a=n||Math.random()<r,o=null;const l=this.sysInfo.eco,c=hn(nn(this.state,l));!a&&c.level<=-1&&Math.random()<(c.level<=-2?.3:.12)&&(a=!0,o=l),Ii.get("enforcers")==="1"&&(a=!0,o=l),t={hit:a,enforcer:o,at:a?Math.min(.95,this.state.dayTime+(n||o&&Ii.get("enforcers")?.02:.08+Math.random()*.5)):null,spawned:!1,warned:!1},this.state.outlawRoll={[e]:t}}this.outlawKey=e}forceOutlaws(e){const t=this.state.outlawRoll[this.outlawKey];t.hit=!0,t.at=this.state.dayTime,t.spawned=!1,this.forcedCount=e}spawnOutlaws(e={}){const t=un(this.state);let n=t<=1?1:t===2?1+(Math.random()<.5?1:0):t===3?2+Math.floor(Math.random()*2):2+Math.floor(Math.random()*3);this.forcedCount&&(n=this.forcedCount,this.forcedCount=0),e.n&&(n=e.n);const i=e.tough||1,a=this.world.gates.slice().sort((u,d)=>u.pos.distanceTo(this.player.pos)-d.pos.distanceTo(this.player.pos)),o=a.find(u=>u.pos.distanceTo(this.player.pos)>1800)||a[a.length-1];let l=o?o.pos.clone():this.player.pos.clone().add(qe.set(2500,0,0));o&&l.distanceTo(this.player.pos)>6500&&(l=this.player.pos.clone().add(qe.subVectors(o.pos,this.player.pos).normalize().multiplyScalar(4200))),e.entry&&(l=e.entry.clone());const c=e.name||Ns[Math.floor(Math.random()*Ns.length)];for(let u=0;u<n;u++){const d={speed:82+t*4,turn:1.55,cargo:40,shield:Math.round((30+t*35)*i),shieldRegen:5+t*2,hull:Math.round((90+t*50)*i),dps:(7+t*3.5)*i,beamRange:250,hard:1,mslCap:t>=2?2:0,mslDmg:40+t*8,energy:120,energyRegen:18,sensor:3e3},f=e.faction?us("kestrel","player"):this.outlawTpl||us("kestrel","outlaw"),m=new vr(this,{kind:"outlaw",hullId:"kestrel",palette:"outlaw",tpl:f,stats:d,name:n>1?`${c} ${["α","β","γ","δ"][u]}`:c});m.faction=e.faction||null,m.pos.copy(l).add(qe.set((Math.random()-.5)*140,(Math.random()-.5)*50,(Math.random()-.5)*140)),qe.subVectors(this.player.pos,m.pos),m.yaw=Math.atan2(qe.x,qe.z),m.throttle=1,m.state="hunt",m.missiles=d.mslCap,m.mslCd=6+Math.random()*6,m.retarget=0,m.orbitDir=Math.random()<.5?1:-1,m.beam=this.fx.makeBeam(e.faction?16752704:16730682),m.spawnTime=this.time,m.guardOf=e.guardOf||null,m.cargo={[["food","medical","parts","data"][Math.floor(Math.random()*4)]]:3+Math.floor(Math.random()*8)},this.outlaws.push(m)}this.fx.particles.burst(l,60,90,e.burstColor||16738890,6,1.2);const h=l.distanceTo(this.player.pos)<this.player.stats.sensor;e.toast?this.ui.toast(e.toast,"warn",5):this.ui.toast(h?`⚠ OUTLAW CONTACT — ${n>1?`${n} raiders`:c} jumped in!`:`⚠ Outlaw jump signature detected in ${this.sysInfo.name}`,"warn",5),this.audio.play("alarm",{vol:.8})}updateOutlawSchedule(){const e=this.state.outlawRoll[this.outlawKey];if(!e||!e.hit||e.spawned)return;const t=this.player.stats.sensorLvl>=2?.13:0;if(t&&!e.warned&&this.state.dayTime>=e.at-t&&(e.warned=!0,this.ui.toast(`Sensors: hostile jump signature forming — outlaws inbound in ~${Math.round((e.at-this.state.dayTime)*ko)}s`,"warn",6),this.audio.play("alarm",{vol:.5})),this.state.dayTime>=e.at&&!this.docked)if(e.spawned=!0,e.enforcer){const n=Rt[e.enforcer],i=un(this.state);this.spawnOutlaws({n:1+Math.min(2,Math.floor(i/2))+(hn(nn(this.state,e.enforcer)).level<=-2?1:0),name:`${n.short} Enforcer`,faction:e.enforcer,tough:1.15,toast:`⚠ ${n.name} enforcers jumped in. They're here for you.`})}else this.spawnOutlaws()}pickOutlawTarget(e){let t=null,n=-1/0;const i=[this.player,...this.traders];for(const r of i){if(!r||r.dead||r===this.player&&this.docked)continue;const a=r.pos.distanceTo(e.pos),l=(r.cargoValue()+(r===this.player?250+this.player.stats.cargo*2:0))/(1+a/1500);l>n&&(n=l,t=r)}return t}updateOutlaws(e){for(let t=this.outlaws.length-1;t>=0;t--){const n=this.outlaws[t];if(n.dead){this.outlaws.splice(t,1);continue}if(n.static){this.updateTurret(n,e);continue}n.retarget-=e,n.state!=="flee"&&(n.retarget<=0||!n.tgt||n.tgt.dead)&&(n.tgt=n.faction?this.docked?null:this.player:this.pickOutlawTarget(n),n.retarget=4),n.state!=="flee"&&n.lastAttacker&&!n.lastAttacker.dead&&this.time-n.lastHit<10&&!(n.lastAttacker===this.player&&this.docked)&&(n.tgt=n.lastAttacker),n.hp<n.maxHp*.22&&n.state!=="flee"&&(n.state="flee",this.ui.toast(`${n.name} is breaking off!`,"info",2.5)),this.time-n.spawnTime>ko*1.2&&n.state!=="flee"&&(n.state="flee");const i=n.tgt;if(n.firing=!1,n.cruise=!1,n.boost=!1,n.state==="flee"||!i){if(qe.subVectors(n.pos,this.player.pos).setY(0).normalize().multiplyScalar(5e3).add(n.pos),n.steerTo(qe,e),n.throttle=1,n.boost=n.energy>20,n.pos.distanceTo(this.player.pos)>4500){this.fx.particles.burst(n.pos,40,80,16738890,5,1),n.beam&&(n.beam.visible=!1),n.remove(),this.outlaws.splice(t,1),this.target===n&&(this.target=null);continue}}else{const r=n.pos.distanceTo(i.pos);r>1600?(n.steerTo(i.pos,e),n.cruise=!0,n.throttle=1):r>320?(qe.copy(i.vel).multiplyScalar(r/300).add(i.pos),n.steerTo(qe,e),n.throttle=1,n.boost=r>700&&n.energy>40):(qe.subVectors(n.pos,i.pos).normalize(),Ot.crossVectors(qe,Lu).multiplyScalar(n.orbitDir),yn.copy(i.pos).addScaledVector(qe,170).addScaledVector(Ot,160),this.angleTo(n,i.pos)>.5?n.steerTo(yn,e):n.steerTo(i.pos,e,.9),n.throttle=.7);const a=this.angleTo(n,i.pos);if(r<n.stats.beamRange&&a<.3&&n.energy>5){n.firing=!0,n.energy-=8*e;const o=this.muzzleWorld(n,0,yn);this.fx.showBeam(n.beam,o,qe.copy(i.pos).add(Ot.set((Math.random()-.5)*2,(Math.random()-.5)*2,0)),1.6);const l=i.damage(n.stats.dps*e,n.pos,n);i===this.player&&(this.shake=Math.min(1,this.shake+e*2),this.ui.damagePulse()),this.onShipHit(i,n,l)}n.mslCd-=e,n.missiles>0&&n.mslCd<=0&&r<700&&a<.6&&(n.missiles--,n.mslCd=9,this.fx.launchMissile(n,i,n.stats.mslDmg),i===this.player&&this.ui.toast("⚠ Incoming missile!","warn",2)),i===this.player&&r<1300&&this.player.cruise&&!this.player.stats.noInterdict&&(this.player.cruise=!1,this.ui.toast("Cruise disrupted by outlaw interdiction!","warn",3),this.autopilot=null)}!n.firing&&n.beam&&(n.beam.visible=!1),n.updateMotion(e,this.world),n.updateVisual(e)}}updateTurret(e,t){if(e.retarget-=t,e.retarget<=0||!e.tgt||e.tgt.dead){e.retarget=1.5,e.tgt=null;let i=e.stats.beamRange+600;for(const r of[this.player,...this.traders]){if(!r||r.dead||r===this.player&&this.docked)continue;const a=r.pos.distanceTo(e.pos);a<i&&(i=a,e.tgt=r)}}e.yaw+=.08*t,e.throttle=0,e.firing=!1;const n=e.tgt;if(n&&!n.dead){const i=e.pos.distanceTo(n.pos);if(i<e.stats.beamRange+e.radius&&e.energy>5){e.firing=!0,e.energy-=6*t;let r=0,a=-2;for(let c=0;c<e.muzzles.length;c++){this.muzzleWorld(e,c,yn);const h=qe.subVectors(yn,e.pos).normalize().dot(Ot.subVectors(n.pos,e.pos).normalize());h>a&&(a=h,r=c)}const o=this.muzzleWorld(e,r,yn);this.fx.showBeam(e.beam,o,qe.copy(n.pos).add(Ot.set((Math.random()-.5)*2,(Math.random()-.5)*2,0)),2);const l=n.damage(e.stats.dps*t,e.pos,e);n===this.player&&(this.shake=Math.min(1,this.shake+t*2),this.ui.damagePulse()),this.onShipHit(n,e,l)}e.mslCd-=t,e.missiles>0&&e.mslCd<=0&&i<900&&(e.missiles--,e.mslCd=7,this.fx.launchMissile(e,n,e.stats.mslDmg),n===this.player&&this.ui.toast("⚠ Incoming missile from the base!","warn",2))}!e.firing&&e.beam&&(e.beam.visible=!1),e.updateMotion(t,null),e.updateVisual(t)}angleTo(e,t){return e.forwardTo(Ot),yn.subVectors(t,e.pos).normalize(),Math.acos(wt(Ot.dot(yn),-1,1))}muzzleWorld(e,t,n){const i=e.muzzles[t%e.muzzles.length];return n.copy(i).applyQuaternion(e.obj.quaternion).add(e.pos)}onShipHit(e,t,n){if(e.kind==="trader"&&t===this.player){const i=this.state.systemId;e.reported||(e.reported=!0,this.state.wanted[i]=(this.state.wanted[i]||0)+1,this.ui.toast(`Trader ${e.name} reports your attack — WANTED in ${this.sysInfo.name} `,"warn",4),this.traderCrime(e,6,2))}if(e.kind==="trader"&&t&&t.kind==="outlaw"&&!e.distress&&e.pos.distanceTo(this.player.pos)<this.player.stats.sensor&&(e.distress=!0,this.ui.toast(`Distress call: trader ${e.name} under outlaw attack!`,"warn",4)),!!n){if(e===this.player){this.playerDestroyed();return}this.destroyShip(e,t)}}destroyShip(e,t){if(e.isBase){e.beam&&(e.beam.visible=!1),this.target===e&&(this.target=null),e.remove(),this.events.onBaseDestroyed(e,t);return}e.guardOf&&this.events.onGuardDown(e),this.fx.explosion(e.pos.clone(),e.radius/6,e.kind==="outlaw"?16742976:16756832);const n=Object.entries(e.cargo).filter(([,i])=>i>0);for(const[i,r]of n){let a=Math.ceil(r*.7);for(;a>0;){const o=Math.min(a,10);this.fx.dropCrate(e.pos,{[i]:o}),a-=o}}if(e.kind==="outlaw"){if(t===this.player&&e.faction)this.state.stats.kills++,this.factionChange(e.faction,-3),this.ui.toast(`${e.name} destroyed. ${Rt[e.faction].short} standing −3`,"warn",3);else if(t===this.player){const r=350+un(this.state)*200;this.factionChange(this.sysInfo.eco,1,!0),this.factionChange("pirate",-1,!0),this.fx.dropCrate(e.pos,{},r),this.state.stats.kills++,this.ui.toast(`${e.name} destroyed — bounty crate released (◈ ${it(r)})`,"good",3.5);for(const a of this.traders)a.distress&&!a.rewarded&&a.pos.distanceTo(e.pos)<1500&&(a.rewarded=!0,this.addCredits(250),this.factionChange(this.traderFaction(a),1,!0),this.ui.toast(`${a.name}: “Thank you, pilot!” +◈ 250 · ${Rt[this.traderFaction(a)].short} +1`,"good",3))}e.beam&&(e.beam.visible=!1)}e.kind==="trader"&&t===this.player&&this.traderCrime(e,6,3,!0),e.kind==="trader"&&t&&t.kind==="outlaw"&&this.ui.toast(`Trader ${e.name} was destroyed by outlaws.`,"warn",3),this.target===e&&(this.target=null),e.remove()}playerDestroyed(){const e=this.player;this.fx.explosion(e.pos.clone(),3,16752720),e.obj.visible=!1,e.dead=!0;for(const n of this.playerBeams)n.visible=!1;this.mineBeam.visible=!1,this.audio.loop("beam","beam",!1),this.audio.loop("mine","mine",!1);const t=Math.round(this.state.credits*.1);setTimeout(()=>{this.ui.dialog(`<div class="ov-title">SHIP DISABLED</div><p>Your ${St[e.hullId].name} was overwhelmed. The Frontier Insurance Guild tows you to ${this.world.station.name}.</p><p><b>Cargo lost.</b> Insurance fee: <b>◈ ${it(t)}</b></p>`,[{label:"ACCEPT TOW",primary:!0,fn:()=>{this.state.credits-=t;const n=this.activeShipRec();for(const a in n.cargo)delete n.cargo[a];n.hp=null;for(const a of this.missionsAboard())this.failMission(a,a.type==="passenger"?"passengers evacuated by rescue pods":"contract cargo lost with the ship");for(const a of this.outlaws)a.beam&&(a.beam.visible=!1),a.remove();this.outlaws=[],this.fx.clearAll();const i=this.world.station.pos,r=qe.copy(i).negate().setY(0).normalize();this.spawnPlayer(i.clone().addScaledVector(r,230),Math.atan2(r.x,r.z)),this.dock()}}])},1600)}traderFaction(e){return this.galaxy.systems[e.origin!=null?e.origin:this.state.systemId].eco}traderCrime(e,t,n,i=!1){const r=this.traderFaction(e),a=Rt[r].rival;this.factionChange(r,-t),a&&a!=="pirate"&&this.factionChange(a,1,!0),this.factionChange("pirate",n,!0),this.ui.toast(`${i?"Destroying":"Attacking"} a ${Rt[r].short} trader: ${Rt[r].short} −${t}, Red Wake +${n}`,"warn",3.5)}factionChange(e,t,n=!1){if(!t)return;const i=this.state,r=hn(nn(i,e));i.factions[e]=nn(i,e)+t;const a=hn(i.factions[e]);a.name!==r.name&&setTimeout(()=>this.ui.toast(`${t>0?"▲":"▼"} ${Rt[e].name}: you are now ${a.name.toUpperCase()}`,t>0?"good":"warn",6),700)}onSale(e){const t=this.state,n=this.sysInfo.eco;t.sales.day!==t.day&&(t.sales={day:t.day,by:{}});const i=Math.min(4,Math.floor((t.sales.by[n]||0)/1500));t.sales.by[n]=(t.sales.by[n]||0)+e;const r=Math.min(4,Math.floor(t.sales.by[n]/1500));r>i&&this.factionChange(n,r-i,!0)}addCredits(e){this.state.credits+=e,e>0&&(this.state.stats.earned+=e),this.ui.creditFlash()}collectCrate(e){const t=this.cargoFree();let n=0;for(const r in e.cargo)n+=e.cargo[r];if(e.credits&&(this.addCredits(e.credits),this.audio.play("coins",{vol:.7})),n>t)return e.warned||(e.warned=!0,this.ui.toast("Cargo hold full — crate left behind","warn",2.5)),e.credits&&(e.credits=0),n===0;const i=[];for(const r in e.cargo)this.player.cargo[r]=(this.player.cargo[r]||0)+e.cargo[r],i.push(`${e.cargo[r]} ${Xe[r].name}`);return i.length&&(this.ui.toast(`Recovered ${i.join(", ")}`,"good",2.5),this.audio.play("click",{vol:.6})),!0}dock(){const e=this.state.systemId;this.docked=!0,this.autopilot=null;const t=this.player;t.speed=0,t.cruise=!1,t.boost=!1,t.throttle=0,this.input.fire=!1,this.input.mine=!1,t.hp=t.hp;const n=(this.state.wanted[e]||0)*600;n>0&&(this.state.credits-=n,this.state.wanted[e]=0,this.ui.toast(`Security fine for attacking traders: ◈ ${it(n)}`,"warn",4)),this.state.tutorial.docked=!0,this.economy.recordIntel(e),this.audio.play("warp",{vol:.5,rate:.7}),this.deliverAtStation(),this.save(),this.ui.openStation()}undock(){this.docked=!1;const e=this.world.station.pos,t=qe.copy(this.player.pos).sub(e).setY(0).normalize();this.player.pos.copy(e).addScaledVector(t,240),this.player.yaw=Math.atan2(t.x,t.z),this.player.pitch=0,this.player.speed=20,this.input.throttle=.35,this.ui.closeStation(),this.save()}switchShip(e){if(e===this.state.active)return!0;if(this.missionsAboard().length)return this.ui.toast("Contract cargo or passengers are aboard — deliver or abandon those contracts before switching ships","warn",4),!1;this.syncShipRec();const t=this.player.pos.clone(),n=this.player.yaw;return this.state.active=e,this.spawnPlayer(t,n),this.save(),!0}save(){if(this.player&&this.player.dead)return!1;this.syncShipRec(),this.events.persist(),this.player&&(this.state.pos=this.player.pos.toArray().map(t=>Math.round(t)),this.state.yaw=this.player.yaw),this.state.savedAt=Date.now();const e=AM(this.state);return!e&&!this._saveWarned&&(this._saveWarned=!0,this.ui.toast("⚠ Autosave failed — browser storage is full or disabled. Use Save & Load → Export to keep your progress.","warn",8)),e&&(this._saveWarned=!1),e}loadGame(e){this.state=Vo(Ko($o(e))),this.galaxy=gr(e.seed),this.economy=new Go(this.galaxy,e),e.systemId==null&&(e.systemId=this.galaxy.startId),this.docked=!1,this.warp=null,this.autopilot=null,this.target=null,this.salvage=null,this.input.fire=this.input.mine=this.input.boost=!1,this.input.sx=this.input.sy=0,this.input.throttle=.35,this.post.grade.uniforms.uWarp.value=0,this.camera.fov=62,this.camera.updateProjectionMatrix(),this.ui.closeStation(),this.ui.closeMap(),this.ui.warpFlash(!1),this.enterSystem(e.systemId,null,!0),this.applyQuality(e.quality),this.audio.setEnabled(e.sound),this.checkDeadlines(),this.save()}beginJump(e){this.warp||(this.warp={t:0,gate:e},this.autopilot=null,this.player.cruise=!1,this.audio.play("warp",{vol:.9}))}updateWarp(e){const t=this.warp;t.t+=e;const n=this.player;if(n.steerTo(t.gate.pos,e,3),n.throttle=1,n.boost=!1,n.speed=Math.min(n.speed+e*400,900),this.post.grade.uniforms.uWarp.value=Math.min(1,t.t/1.4),this.camera.fov=62+30*Math.min(1,t.t/1.4),this.camera.updateProjectionMatrix(),t.t>1.3&&!t.flashed&&(t.flashed=!0,this.ui.warpFlash(!0)),t.t>1.7){const i=this.state.systemId;this.syncShipRec(),this.enterSystem(t.gate.to,i),this.state.stats.jumps++,this.warp=null,this.post.grade.uniforms.uWarp.value=0,this.camera.fov=62,this.camera.updateProjectionMatrix(),this.player.speed=60,this.input.throttle=.4,setTimeout(()=>this.ui.warpFlash(!1),80),this.audio.play("warp",{vol:.6,rate:.8}),this.save()}}findInteraction(){const e=this.player,t=this.world;if(t.station.pos.distanceTo(e.pos)<260)return{type:"dock",label:"DOCK",warm:!0};for(const o of t.gates)if(o.pos.distanceTo(e.pos)<340)return{type:"jump",label:`JUMP › ${this.galaxy.systems[o.to].name}`,gate:o,warm:!0};const n=this.events.interaction(e);if(n)return n;const i=this.missionsAboard().filter(o=>o.dest.kind==="planet"&&o.dest.sys===this.state.systemId&&this.landingPoint(o.dest.planet).distanceTo(e.pos)<250);if(i.length)return{type:"dropoff",label:i.some(o=>o.type==="passenger")?"DROP OFF":"DELIVER",missions:i,warm:!0};const r=this.missionsAboard().find(o=>o.side&&o.side.kind==="detour"&&!o.side.done&&o.side.sys===this.state.systemId&&this.landingPoint(o.side.planet).distanceTo(e.pos)<250);if(r)return{type:"sidedrop",label:"DROP OFF 1 PASSENGER",mission:r,warm:!0};for(const o of this.traders)if(!o.dead&&o.pos.distanceTo(e.pos)<110+o.radius&&this.time-o.lastHit>10)return{type:"hail",label:`HAIL ${o.name}`,trader:o};for(const o of t.derelicts)if(o.pos.distanceTo(e.pos)<150&&!o.occupied){const l=this.state.derelictLooted[`${this.state.systemId}:${o.seed}`];if(!l||this.state.day-l>=3)return{type:"salvage",label:this.salvage?`SALVAGING ${Math.round(this.salvage.t/3.5*100)}%`:"SALVAGE",derelict:o,hold:!0}}const a=t.findMineable(e.pos,e.stats.mineRange);return a?{type:"mine",label:a.kind==="deposit"?"DRILL":"MINE",node:a,hold:!0}:null}doAction(e){if(e){if(e.type==="dock")this.dock();else if(e.type==="jump")this.beginJump(e.gate);else if(e.type==="hail")this.ui.openTraderDialog(e.trader);else if(e.type==="dropoff"){for(const t of e.missions)this.completeMission(t);this.save()}else if(e.type==="sidedrop"){const t=e.mission;t.side.done=!0,t.pax=Math.max(1,t.pax-1),this.addCredits(t.side.reward),this.updateMissionLoad(),this.audio.play("coins",{vol:.7}),this.ui.toast(`Passenger dropped at ${t.side.name}: "Much obliged!" +◈ ${it(t.side.reward)} · 2 hold space freed`,"good",4),this.save()}}}missionsAboard(){return this.state.missions.filter(e=>Gd(e)&&e.shipUid===this.state.active)}updateMissionLoad(){if(!this.player)return;const e=this.missionsAboard();this.player.reserved=e.reduce((t,n)=>t+Fa(n),0),this.player.missionLure=e.reduce((t,n)=>t+mM(n),0)}landingPoint(e){const t=this.world.deposits[e],n=this.world.planets[e];return t.pos.clone().sub(n.pos).normalize().multiplyScalar(100).add(t.pos)}acceptMission(e){const t=this.state;if(t.missions.length>=Na)return`You already have ${Na} active contracts`;const n=Fa(e);if(n>this.cargoFree())return`Needs ${n} free hold space (you have ${this.cargoFree()})`;if(e.deposit>t.credits)return`Needs a ◈ ${it(e.deposit)} deposit`;if(!Hd(e,this.activeShipRec()))return`${e.who} will only travel in ${Vd(e.req)}`;t.credits-=e.deposit;const i={...e,accepted:t.day,shipUid:t.active,side:e.side?{...e.side}:void 0};return t.missions.push(i),i.side&&i.side.kind==="wreck"&&(i.side.revealed=!0,this.events.addTip(i)),xM(t,e),this.updateMissionLoad(),this.audio.play("click",{vol:.6}),this.save(),null}completeMission(e){const t=this.state;if(e.type==="supply"){const a=this.player.cargo[e.commodity]||0;if(a<e.qty||e.ore&&((e.oreMined||0)<e.oreQty||(this.player.cargo[e.ore]||0)<e.oreQty))return!1;this.player.cargo[e.commodity]=a-e.qty,this.player.cargo[e.commodity]||delete this.player.cargo[e.commodity],e.ore&&(this.player.cargo[e.ore]-=e.oreQty,this.player.cargo[e.ore]||delete this.player.cargo[e.ore])}t.missions=t.missions.filter(a=>a!==e),this.addCredits(e.reward+e.deposit);const n=this.galaxy.systems[e.from.sys].eco,i=e.exclusive?4:Tu(e)+1;this.factionChange(n,i),Rt[n].rival&&Rt[n].rival!=="pirate"&&this.factionChange(Rt[n].rival,-1,!0),t.stats.contracts++,this.changeStanding(e.from.sys,Tu(e)),this.updateMissionLoad(),this.audio.play("coins",{vol:.9});const r=e.type==="passenger"?e.vip?`${e.who} delivered safely`:`${e.pax} passenger${e.pax>1?"s":""} dropped off`:e.type==="courier"?`${e.qty} units of ${e.cargoName} delivered`:`${e.qty} ${Xe[e.commodity].name} supplied`;return this.ui.toast(`✓ Contract complete: ${r} · +◈ ${it(e.reward)} · ${Rt[n].short} +${i}${e.deposit?` (+◈ ${it(e.deposit)} deposit back)`:""}`,"good",5),!0}changeStanding(e,t){const n=this.state,i=Oa(Ua(n,e));n.standing[e]=Ua(n,e)+t;const r=Oa(n.standing[e]);if(r.name!==i.name){const a=this.galaxy.systems[e];setTimeout(()=>this.ui.toast(`${t>0?"▲":"▼"} ${a.station} Station now rates you: ${r.name.toUpperCase()}${r.perks?` · ${r.perks}`:""}`,t>0?"good":"warn",6),900)}}failMission(e,t){this.state.missions=this.state.missions.filter(n=>n!==e),e.from&&this.changeStanding(e.from.sys,t==="abandoned"?-1:-2),this.updateMissionLoad(),this.ui.toast(`✗ Contract failed: ${e.title} — ${t}${e.deposit?` · deposit ◈ ${it(e.deposit)} forfeited`:""}`,"warn",6)}deliverAtStation(){const e=this.state.systemId;for(const t of this.state.missions.slice())if(!(t.dest.sys!==e||t.dest.kind!=="station"))if(t.type==="supply"){const n=this.player.cargo[t.commodity]||0;this.completeMission(t)||this.ui.toast(`Supply contract: bring ${t.qty} ${Xe[t.commodity].name} here (you have ${n})${t.ore?` plus ${t.oreQty} ${Xe[t.ore].name} you mined yourself (mined ${t.oreMined||0}, in hold ${this.player.cargo[t.ore]||0})`:""}`,"info",6)}else t.shipUid===this.state.active&&this.completeMission(t)}checkDeadlines(){const e=this.state.day;for(const t of this.state.missions.slice())e>t.deadline?this.failMission(t,`missed the Day ${t.deadline} deadline`):e===t.deadline&&this.ui.toast(`⏱ Last day: ${t.title} → ${t.dest.name}`,"warn",5)}missionTarget(e){const t=this.state.systemId;if(e.dest.sys===t)return e.dest.kind==="station"?{key:"st",pos:this.world.station.pos,name:e.dest.name,arrive:200,ignore:this.world.station,via:!1}:{key:`pl${e.dest.planet}`,pos:this.landingPoint(e.dest.planet),name:e.dest.name,arrive:45,ignore:null,via:!1};const n=uM(this.galaxy,t,e.dest.sys),i=n&&this.world.gates.find(r=>r.to===n[1]);return i?{key:`g${i.to}`,pos:i.pos,name:`Gate → ${this.galaxy.systems[i.to].name}`,arrive:250,ignore:null,via:!0}:null}missionCourse(e){const t=this.missionTarget(e);return t?(this.docked&&this.undock(),this.setAutopilot(t.pos,t.name,t.arrive,t.ignore),!0):!1}updateMining(e,t){const n=this.player;if(!(this.input.mine&&t&&t.type==="mine"&&!n.cruise)){this.mineBeam.visible=!1,this.audio.loop("mine","mine",!1),this.mineAcc=0;return}const r=t.node;if(this.cargoFree()<=0){this.mineBeam.visible=!1,this.audio.loop("mine","mine",!1),(!this._fullWarn||this.time-this._fullWarn>4)&&(this._fullWarn=this.time,this.ui.toast("Cargo hold full — dock to sell","warn",2.5));return}if(n.energy<1){this.mineBeam.visible=!1;return}n.energy-=4*e;const a=this.muzzleWorld(n,0,yn).clone(),o=qe.subVectors(a,r.pos).normalize().multiplyScalar(r.radius*.8).add(r.pos).clone();for(this.fx.showBeam(this.mineBeam,a,o,1.4),Math.random()<.6&&this.fx.particles.burst(o,2,25,r.kind==="deposit"?Xe[r.ore].color:16765072,1.4,.6),this.audio.loop("mine","mine",!0,.35,.6),this.mineAcc+=n.stats.mineRate*(r.kind==="deposit"?.85:1)*e;this.mineAcc>=1&&r.amount>0&&this.cargoFree()>0;){this.mineAcc-=1;let l=r.ore;const c=n.stats.rare+(r.kind==="deposit"?.05:r.field?r.field.data.lumenite*(n.stats.rare>0?1:.3):0)+this.events.surgeBonus(r.field);Math.random()<c&&(l="lumenite",this.ui.toast("✦ Lumenite crystal extracted!","good",2)),n.cargo[l]=(n.cargo[l]||0)+1;for(const h of this.state.missions)h.ore===l&&(h.oreMined||0)<h.oreQty&&(h.oreMined=(h.oreMined||0)+1,h.oreMined===h.oreQty&&this.ui.toast(`✓ Mined all ${h.oreQty} ${Xe[l].name} for the ${h.dest.name} supply contract`,"good",3.5));r.amount-=1,this.state.stats.mined++,this.ui.cargoTick(l),r.kind==="rock"&&this.world.depleteRock(r),this.state.tutorial.mined||(this.state.tutorial.mined=!0,this.ui.toast("Ore collected! Fill your hold, then dock at a station to sell.","info",5))}r.amount<=0&&(this.fx.particles.burst(r.pos,40,40,12628128,5,1.4),this.audio.play("explosion",{pos:r.pos,vol:.3,rate:1.4}))}updateSalvage(e,t){if(!(this.input.mine&&t&&t.type==="salvage")){this.salvage=null;return}(!this.salvage||this.salvage.d!==t.derelict)&&(this.salvage={d:t.derelict,t:0}),this.salvage.t+=e;const n=this.muzzleWorld(this.player,0,yn).clone();if(this.fx.showBeam(this.mineBeam,n,t.derelict.pos,1.2),this.audio.loop("mine","mine",!0,.3,.45),this.salvage.t>=3.5){const i=t.derelict,r=new Ft(i.seed+this.state.day);this.state.derelictLooted[`${this.state.systemId}:${i.seed}`]=this.state.day;const a=r.int(150,700)+un(this.state)*120;this.addCredits(a);const o=["parts","data","medical","luxury","lumenite"],l=r.pick(o),c=Math.min(this.cargoFree(),r.int(2,l==="luxury"||l==="lumenite"?3:8));c>0&&(this.player.cargo[l]=(this.player.cargo[l]||0)+c);let h="";this.player.stats.mslCap>0&&r.chance(.4)&&(this.player.missiles=Math.min(this.player.stats.mslCap,this.player.missiles+2),h=" + 2 missiles"),this.ui.toast(`Salvaged ◈ ${it(a)}${c>0?` + ${c} ${Xe[l].name}`:""}${h}`,"good",4),this.audio.play("coins",{vol:.8}),this.salvage=null,this.mineBeam.visible=!1,this.audio.loop("mine","mine",!1),this.input.mine=!1}}hostilesNear(e){return this.outlaws.some(t=>!t.dead&&t.pos.distanceTo(this.player.pos)<e)}cycleTarget(){const e=this.player,t=[...this.outlaws,...this.traders].filter(i=>!i.dead&&i.pos.distanceTo(e.pos)<e.stats.sensor).sort((i,r)=>(i.kind==="outlaw"?0:1)-(r.kind==="outlaw"?0:1)||i.pos.distanceTo(e.pos)-r.pos.distanceTo(e.pos));if(!t.length){this.target=null,this.ui.toast("No contacts in sensor range","info",1.5);return}const n=t.indexOf(this.target);this.target=t[(n+1)%t.length]}fireMissile(){const e=this.player;if(e.stats.mslCap===0){this.ui.toast("No missile rack — install one at a station (Upgrades)","info",3);return}if(e.missiles<=0){this.ui.toast("Missile bay empty — restock at a station","warn",2);return}let t=this.target&&!this.target.dead?this.target:null;if(t||(t=this.autoTarget(.7,900)),!t){this.ui.toast("No lock — target a ship first","info",1.5);return}if(t.pos.distanceTo(e.pos)>1e3){this.ui.toast("Target out of missile range (1000m)","info",1.5);return}e.missiles--,this.target=t,this.fx.launchMissile(e,t,e.stats.mslDmg)}autoTarget(e,t){let n=null,i=1/0;for(const r of this.outlaws){if(r.dead)continue;const a=r.pos.distanceTo(this.player.pos);a<t&&this.angleTo(this.player,r.pos)<e&&a<i&&(i=a,n=r)}return n}updatePlayerFire(e){const t=this.player,n=this.input.fire&&!t.cruise&&t.energy>1.5&&!this.warp;if(t.firing=n,!n){for(const l of this.playerBeams)l.visible=!1;this.audio.loop("beam","beam",!1);return}const i=t.stats.beamRange;let r=this.target&&!this.target.dead&&this.target.pos.distanceTo(t.pos)<i+this.target.radius&&this.angleTo(t,this.target.pos)<.42?this.target:null;if(!r){const l=this.autoTarget(.42,i);l&&(r=l,this.target=l)}if(!r){t.forwardTo(qe);let l=null,c=i;for(const h of[...this.traders,...this.outlaws]){if(h.dead)continue;Ot.subVectors(h.pos,t.pos);const u=Ot.dot(qe);if(u<0||u>c)continue;Math.sqrt(Math.max(0,Ot.lengthSq()-u*u))<h.radius*.9&&(c=u,l=h)}r=l}t.energy-=9*e;let a;if(r){a=qe.copy(r.pos).add(Ot.set((Math.random()-.5)*1.5,(Math.random()-.5)*1.5,0)).clone();const l=r.damage(t.stats.dps*e,t.pos,t);this.onShipHit(r,t,l)}else a=t.forwardTo(qe).multiplyScalar(i).add(t.pos).clone();const o=Math.min(t.stats.hard,t.muzzles.length,this.playerBeams.length);for(let l=0;l<this.playerBeams.length;l++){const c=this.playerBeams[l];if(l>=o){c.visible=!1;continue}this.fx.showBeam(c,this.muzzleWorld(t,l,yn),a,1.3+t.stats.dps/60)}this.audio.loop("beam","beam",!0,.4,1)}updatePlayer(e){const t=this.player,n=this.input;if(t.dead)return;const i=Math.hypot(n.sx,n.sy);if(this.warp)this.updateWarp(e);else if(this.autopilot){const r=this.autopilot;if(i>.25)this.autopilot=null,this.ui.toast("Autopilot disengaged","info",1.5);else{const a=r.pos.distanceTo(t.pos),o=this.planRoute(t.pos,r.pos,t.radius,r.ignore,r.aim);t.steerTo(o,e,1.2);const l=this.angleTo(t,o),c=r.arrive+300+t.stats.speed*5.5/2.2*1.3;t.cruise=a>c&&(t.stats.noInterdict||!this.hostilesNear(1300))&&l<.3;let h=wt((a-r.arrive)/350,.12,1);l>.8&&(h=Math.min(h,.45)),t.throttle=h;const u=qe.subVectors(r.pos,t.pos).dot(t.vel)>0;(a<r.arrive||a<r.arrive+150&&!u)&&(this.autopilot=null,t.cruise=!1,t.throttle=0,n.throttle=0,this.ui.toast(`Arrived: ${r.name}`,"info",2))}}else{const r=t.stats.turn*(t.cruise?.45:1);t.yawRate=-n.sx*r,t.yaw+=t.yawRate*e,t.pitch=wt(t.pitch-n.sy*r*.75*e,-1.15,1.15),Math.abs(n.sy)<.05&&(t.pitch=Fi(t.pitch,0,.35,e)),t.throttle=n.throttle,t.cruise&&!t.stats.noInterdict&&this.hostilesNear(1300)&&(t.cruise=!1,this.ui.toast("Cruise disrupted — hostiles nearby","warn",2.5))}t.boost=n.boost&&!t.cruise&&!this.warp,t.updateMotion(e,this.warp?null:this.world),t.updateVisual(e)}setCruise(e){const t=this.player;if(e&&!t.stats.noInterdict&&this.hostilesNear(1300)){this.ui.toast("Cannot engage cruise — hostiles nearby","warn",2);return}t.cruise=e,e&&(this.input.throttle=Math.max(this.input.throttle,.5),this.audio.play("warp",{vol:.35,rate:1.3}))}setAutopilot(e,t,n=200,i=null){this.autopilot={pos:e.clone(),name:t,arrive:n,ignore:i,aim:new E},this.ui.toast(`Autopilot → ${t}`,"info",2)}planRoute(e,t,n,i,r){const a=this.world,o=[];for(const m of a.planets)o.push({c:m.pos,hard:m.radius,r:m.radius+n+140});const l=this.sysData.star.radius;o.push({c:a.star.position,hard:l+40,r:l+n+400}),i!==a.station&&o.push({c:a.station.pos,hard:80,r:115+n});for(const m of a.fields)i!==m&&o.push({c:m.center,hard:0,r:m.radius+n+60,soft:!0});const c=sb.subVectors(t,e),h=c.length();if(h<1)return r.copy(t);c.multiplyScalar(1/h);let u=null,d=1/0;for(const m of o){let v=m.r;const g=m.hard+n+15,p=e.distanceTo(m.c),y=t.distanceTo(m.c);if(p<v){if(m.soft)continue;v=Math.max(g,p-5)}if(y<v&&(m.soft||(v=Math.max(g,y-10),y<v)))continue;const x=Pu.subVectors(m.c,e).dot(c);if(x<=0||x>=h||x>=d)continue;const _=Pu.copy(e).addScaledVector(c,x).sub(m.c),A=_.length();A>=v||(d=x,u={c:m.c,r:v,off:_.clone(),od:A})}if(!u)return r.copy(t);const f=u.off;return u.od<u.r*.08&&(f.crossVectors(c,Lu),f.lengthSq()<1e-6&&f.set(1,0,0)),f.normalize(),r.copy(u.c).addScaledVector(f,u.r+Math.max(80,u.r*.2))}updateCamera(e){const t=this.player,n=this.camera;if(this.mode==="menu"){const h=this.time*.08,u=St[t.hullId].cam*1.6;qe.set(Math.sin(h)*u,u*.28,Math.cos(h)*u).add(t.pos),n.position.copy(qe),n.lookAt(Ot.copy(t.pos).add(yn.set(Math.sin(h+1.4)*u*.5,0,Math.cos(h+1.4)*u*.5)));return}const i=St[t.hullId].cam*(t.cruise?1.25:1)*(this.docked?1.8:1),r=new Tn().setFromEuler(new $t(t.pitch*.75,t.yaw,0,"YXZ")),a=qe.set(0,i*.3,-i).applyQuaternion(r).add(t.pos);this.camInit||(n.position.copy(a),this.camInit=!0);const o=this.warp?3:6;n.position.x=Fi(n.position.x,a.x,o,e),n.position.y=Fi(n.position.y,a.y,o,e),n.position.z=Fi(n.position.z,a.z,o,e),Ot.subVectors(n.position,t.pos),Ot.length()>i*1.6&&n.position.copy(t.pos).addScaledVector(Ot.normalize(),i*1.6);const c=Ot.set(0,i*.12,i*.6).applyQuaternion(r).add(t.pos);if(this.shake>0&&(c.x+=(Math.random()-.5)*this.shake*1.5,c.y+=(Math.random()-.5)*this.shake*1.5,this.shake=Math.max(0,this.shake-e*2)),n.lookAt(c),!this.warp){const u=62+(t.cruise?1:wt(t.speed/(t.stats.speed*1.75),0,1))*10;Math.abs(n.fov-u)>.05&&(n.fov=Fi(n.fov,u,3,e),n.updateProjectionMatrix())}}newDay(){this.state.day++,this.state.dayTime-=1,this.economy.daily(this.state.day),this.world.onNewDay(this.state.day),this.rollOutlaws(),this.events.newDay(),this.ui.toast(`Day ${this.state.day} — markets updated`,"info",2.5),this.checkDeadlines()}restUntilTomorrow(){this.state.dayTime=1.0001,this.newDay(),this.state.dayTime=.25,this.rollOutlaws(),this.save()}frame(){const e=performance.now();let t=Math.min(.05,(e-this.last)/1e3);this.last=e,pn.uTime.value+=t,this.pad.poll(t);const n=this.mode!=="play"||this.paused||this.ui.modalOpen();this.mode==="menu"&&(this.time+=t,this.player.updateVisual(t)),!n&&!this.docked?this.simulate(t):!n&&this.docked&&(this.time+=t),this.updateCamera(t);const i=this.player.pos;qe.copy(i).negate().normalize(),this.keyLight.position.copy(i).addScaledVector(qe,200),this.keyLight.target.position.copy(i),this.rimLight.position.copy(i).addScaledVector(qe,-200).add(Ot.set(0,80,0)),this.rimLight.target.position.copy(i),this.world.update(t,this.camera.position,i),this.fx.update(n?0:t),this.audio.listener=this.camera.position,this.post.grade.uniforms.uDamage.value=Math.max(0,this.post.grade.uniforms.uDamage.value-t*1.5),this.mode==="play"&&this.ui.update(t),this.post.render(t,pn.uTime.value)}simulate(e){this.time+=e;const t=this.state;if(t.dayTime+=e/ko,t.dayTime>=1&&this.newDay(),this.updatePlayer(e),this.player.dead){this.updateOutlaws(e),this.updateTraders(e);return}this.updateTraders(e),this.updateOutlawSchedule(),this.updateOutlaws(e),this.updatePlayerFire(e);const n=this.warp?null:this.findInteraction();this.currentAction=n,this.updateMining(e,n),this.updateSalvage(e,n),n&&n.type!=="mine"&&n.type!=="salvage"&&n.type!=="salvage"&&(this.mineBeam.visible=this.input.mine&&n.type==="salvage"),this.events.updateAssist(e,n),this.events.update(e);const i=this.hostilesNear(1600);this.audio.setMusic(i?"battle":"calm"),this._saveT=(this._saveT||0)+e,this._saveT>20&&(this._saveT=0,this.save()),this.target&&this.target.dead&&(this.target=null),this.target&&this.target.pos.distanceTo(this.player.pos)>this.player.stats.sensor*1.2&&(this.target=null)}}const ab=new rb(document.getElementById("app"));ab.boot().catch(s=>{console.error("Boot failed",s);const e=document.getElementById("loadText");e&&(e.textContent=`Startup error: ${s.message}`)});
