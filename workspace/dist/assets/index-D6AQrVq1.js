(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cl="170",Sd=0,dc=1,Td=2,ou=1,wd=2,qn=3,Rn=0,Xt=1,Ut=2,Zn=0,os=1,xt=2,fc=3,pc=4,Ed=5,Ci=100,Ad=101,Rd=102,Cd=103,Pd=104,Ld=200,Id=201,Dd=202,Nd=203,Do=204,No=205,Ud=206,Od=207,Fd=208,Bd=209,kd=210,zd=211,Hd=212,Vd=213,Gd=214,Uo=0,Oo=1,Fo=2,fs=3,Bo=4,ko=5,zo=6,Ho=7,lu=0,Wd=1,$d=2,gi=0,cu=1,hu=2,uu=3,Pl=4,Xd=5,du=6,fu=7,mc="attached",qd="detached",pu=300,ps=301,ms=302,Vo=303,Go=304,ba=306,gs=1e3,fi=1001,fa=1002,qt=1003,mu=1004,Ys=1005,an=1006,ra=1007,Yn=1008,ei=1009,gu=1010,vu=1011,or=1012,Ll=1013,Di=1014,wn=1015,Jn=1016,Il=1017,Dl=1018,vs=1020,yu=35902,_u=1021,xu=1022,pn=1023,Mu=1024,bu=1025,ls=1026,ys=1027,Nl=1028,Ul=1029,Su=1030,Ol=1031,Fl=1033,aa=33776,oa=33777,la=33778,ca=33779,Wo=35840,$o=35841,Xo=35842,qo=35843,jo=36196,Yo=37492,Ko=37496,Zo=37808,Jo=37809,Qo=37810,el=37811,tl=37812,nl=37813,il=37814,sl=37815,rl=37816,al=37817,ol=37818,ll=37819,cl=37820,hl=37821,ha=36492,ul=36494,dl=36495,Tu=36283,fl=36284,pl=36285,ml=36286,lr=2300,cr=2301,Da=2302,gc=2400,vc=2401,yc=2402,jd=2500,Yd=0,wu=1,gl=2,Kd=3200,Zd=3201,Eu=0,Jd=1,di="",bt="srgb",Vt="srgb-linear",Sa="linear",ot="srgb",ki=7680,_c=519,Qd=512,ef=513,tf=514,Au=515,nf=516,sf=517,rf=518,af=519,vl=35044,Sr=35048,xc="300 es",Kn=2e3,pa=2001;class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mc=1234567;const Qs=Math.PI/180,_s=180/Math.PI;function mn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[r&255]+Ft[r>>8&255]+Ft[r>>16&255]+Ft[r>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Pt(r,e,t){return Math.max(e,Math.min(t,r))}function Bl(r,e){return(r%e+e)%e}function of(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function lf(r,e,t){return r!==e?(t-r)/(e-r):0}function er(r,e,t){return(1-t)*r+t*e}function cf(r,e,t,n){return er(r,e,1-Math.exp(-t*n))}function hf(r,e=1){return e-Math.abs(Bl(r,e*2)-e)}function uf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function df(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ff(r,e){return r+Math.floor(Math.random()*(e-r+1))}function pf(r,e){return r+Math.random()*(e-r)}function mf(r){return r*(.5-Math.random())}function gf(r){r!==void 0&&(Mc=r);let e=Mc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vf(r){return r*Qs}function yf(r){return r*_s}function _f(r){return(r&r-1)===0&&r!==0}function xf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Mf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function bf(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Sf={DEG2RAD:Qs,RAD2DEG:_s,generateUUID:mn,clamp:Pt,euclideanModulo:Bl,mapLinear:of,inverseLerp:lf,lerp:er,damp:cf,pingpong:hf,smoothstep:uf,smootherstep:df,randInt:ff,randFloat:pf,randFloatSpread:mf,seededRandom:gf,degToRad:vf,radToDeg:yf,isPowerOfTwo:_f,ceilPowerOfTwo:xf,floorPowerOfTwo:Mf,setQuaternionFromProperEuler:bf,normalize:lt,denormalize:Tn};class Z{constructor(e=0,t=0){Z.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,i,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],y=i[1],_=i[4],x=i[7],C=i[2],w=i[5],E=i[8];return s[0]=a*v+o*y+l*C,s[3]=a*g+o*_+l*w,s[6]=a*p+o*x+l*E,s[1]=c*v+h*y+u*C,s[4]=c*g+h*_+u*w,s[7]=c*p+h*x+u*E,s[2]=d*v+f*y+m*C,s[5]=d*g+f*_+m*w,s[8]=d*p+f*x+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Na.makeScale(e,t)),this}rotate(e){return this.premultiply(Na.makeRotation(-e)),this}translate(e,t){return this.premultiply(Na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Na=new Ge;function Ru(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function hr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Tf(){const r=hr("canvas");return r.style.display="block",r}const bc={};function Ks(r){r in bc||(bc[r]=!0,console.warn(r))}function wf(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Ef(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Af(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qe={enabled:!0,workingColorSpace:Vt,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ot&&(r.r=Qn(r.r),r.g=Qn(r.g),r.b=Qn(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ot&&(r.r=cs(r.r),r.g=cs(r.g),r.b=cs(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===di?Sa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Qn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function cs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Sc=[.64,.33,.3,.6,.15,.06],Tc=[.2126,.7152,.0722],wc=[.3127,.329],Ec=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[Vt]:{primaries:Sc,whitePoint:wc,transfer:Sa,toXYZ:Ec,fromXYZ:Ac,luminanceCoefficients:Tc,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:Sc,whitePoint:wc,transfer:ot,toXYZ:Ec,fromXYZ:Ac,luminanceCoefficients:Tc,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}});let zi;class Rf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zi===void 0&&(zi=hr("canvas")),zi.width=e.width,zi.height=e.height;const n=zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Qn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cf=0;class Cu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ua(i[a].image)):s.push(Ua(i[a]))}else s=Ua(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ua(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pf=0;class Lt extends ws{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=fi,i=fi,s=an,a=Yn,o=pn,l=ei,c=Lt.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=mn(),this.name="",this.source=new Cu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gs:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gs:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=pu;Lt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(f+1)/2,C=(p+1)/2,w=(h+d)/4,E=(u+v)/4,P=(m+g)/4;return _>x&&_>C?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=w/n,s=E/n):x>C?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=P/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=E/s,i=P/s),this.set(n,i,s,t),this}let y=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lf extends ws{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends Lf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pu extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class If extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],f=s[a+1],m=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==m){let g=1-o;const p=l*d+c*f+h*m+u*v,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const C=Math.sqrt(_),w=Math.atan2(C,p*y);g=Math.sin(g*w)/C,o=Math.sin(o*w)/C}const x=o*y;if(l=l*g+d*x,c=c*g+f*x,h=h*g+m*x,u=u*g+v*x,g===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oa.copy(this).projectOnVector(e),this.sub(Oa)}reflect(e){return this.sub(Oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oa=new A,Rc=new yn;class gn{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),wr.subVectors(this.max,Ds),Hi.subVectors(e.a,Ds),Vi.subVectors(e.b,Ds),Gi.subVectors(e.c,Ds),ri.subVectors(Vi,Hi),ai.subVectors(Gi,Vi),_i.subVectors(Hi,Gi);let t=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-_i.z,_i.y,ri.z,0,-ri.x,ai.z,0,-ai.x,_i.z,0,-_i.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-_i.y,_i.x,0];return!Fa(t,Hi,Vi,Gi,wr)||(t=[1,0,0,0,1,0,0,0,1],!Fa(t,Hi,Vi,Gi,wr))?!1:(Er.crossVectors(ri,ai),t=[Er.x,Er.y,Er.z],Fa(t,Hi,Vi,Gi,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new A,new A,new A,new A,new A,new A,new A,new A],Mn=new A,Tr=new gn,Hi=new A,Vi=new A,Gi=new A,ri=new A,ai=new A,_i=new A,Ds=new A,wr=new A,Er=new A,xi=new A;function Fa(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){xi.fromArray(r,s);const o=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Df=new gn,Ns=new A,Ba=new A;class Nn{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Df.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ns,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(Ba)),this.expandByPoint(Ns.copy(e.center).sub(Ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new A,ka=new A,Ar=new A,oi=new A,za=new A,Rr=new A,Ha=new A;class Ta{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ka.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(ka);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ar),o=oi.dot(this.direction),l=-oi.dot(Ar),c=oi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ka).addScaledVector(Ar,d),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,i,s){za.subVectors(t,e),Rr.subVectors(n,e),Ha.crossVectors(za,Rr);let a=this.direction.dot(Ha),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);const l=o*this.direction.dot(Rr.crossVectors(oi,Rr));if(l<0)return null;const c=o*this.direction.dot(za.cross(oi));if(c<0||l+c>a)return null;const h=-o*oi.dot(Ha);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,n,i,s,a,o,l,c,h,u,d,f,m,v,g){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,f,m,v,g)}set(e,t,n,i,s,a,o,l,c,h,u,d,f,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Wi.setFromMatrixColumn(e,0).length(),s=1/Wi.setFromMatrixColumn(e,1).length(),a=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d+v*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nf,e,Uf)}lookAt(e,t,n){const i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),li.crossVectors(n,Qt),li.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),li.crossVectors(n,Qt)),li.normalize(),Cr.crossVectors(Qt,li),i[0]=li.x,i[4]=Cr.x,i[8]=Qt.x,i[1]=li.y,i[5]=Cr.y,i[9]=Qt.y,i[2]=li.z,i[6]=Cr.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],y=n[3],_=n[7],x=n[11],C=n[15],w=i[0],E=i[4],P=i[8],S=i[12],M=i[1],I=i[5],B=i[9],O=i[13],H=i[2],X=i[6],V=i[10],Q=i[14],G=i[3],he=i[7],ve=i[11],Se=i[15];return s[0]=a*w+o*M+l*H+c*G,s[4]=a*E+o*I+l*X+c*he,s[8]=a*P+o*B+l*V+c*ve,s[12]=a*S+o*O+l*Q+c*Se,s[1]=h*w+u*M+d*H+f*G,s[5]=h*E+u*I+d*X+f*he,s[9]=h*P+u*B+d*V+f*ve,s[13]=h*S+u*O+d*Q+f*Se,s[2]=m*w+v*M+g*H+p*G,s[6]=m*E+v*I+g*X+p*he,s[10]=m*P+v*B+g*V+p*ve,s[14]=m*S+v*O+g*Q+p*Se,s[3]=y*w+_*M+x*H+C*G,s[7]=y*E+_*I+x*X+C*he,s[11]=y*P+_*B+x*V+C*ve,s[15]=y*S+_*O+x*Q+C*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*f-n*l*f)+v*(+t*l*f-t*c*d+s*a*d-i*a*f+i*c*h-s*l*h)+g*(+t*c*u-t*o*f-s*a*u+n*a*f+s*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],y=u*g*c-v*d*c+v*l*f-o*g*f-u*l*p+o*d*p,_=m*d*c-h*g*c-m*l*f+a*g*f+h*l*p-a*d*p,x=h*v*c-m*u*c+m*o*f-a*v*f-h*o*p+a*u*p,C=m*u*l-h*v*l-m*o*d+a*v*d+h*o*g-a*u*g,w=t*y+n*_+i*x+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=y*E,e[1]=(v*d*s-u*g*s-v*i*f+n*g*f+u*i*p-n*d*p)*E,e[2]=(o*g*s-v*l*s+v*i*c-n*g*c-o*i*p+n*l*p)*E,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*E,e[4]=_*E,e[5]=(h*g*s-m*d*s+m*i*f-t*g*f-h*i*p+t*d*p)*E,e[6]=(m*l*s-a*g*s-m*i*c+t*g*c+a*i*p-t*l*p)*E,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*f+t*l*f)*E,e[8]=x*E,e[9]=(m*u*s-h*v*s-m*n*f+t*v*f+h*n*p-t*u*p)*E,e[10]=(a*v*s-m*o*s+m*n*c-t*v*c-a*n*p+t*o*p)*E,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*f-t*o*f)*E,e[12]=C*E,e[13]=(h*v*i-m*u*i+m*n*d-t*v*d-h*n*g+t*u*g)*E,e[14]=(m*o*i-a*v*i-m*n*l+t*v*l+a*n*g-t*o*g)*E,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,m=s*u,v=a*h,g=a*u,p=o*u,y=l*c,_=l*h,x=l*u,C=n.x,w=n.y,E=n.z;return i[0]=(1-(v+p))*C,i[1]=(f+x)*C,i[2]=(m-_)*C,i[3]=0,i[4]=(f-x)*w,i[5]=(1-(d+p))*w,i[6]=(g+y)*w,i[7]=0,i[8]=(m+_)*E,i[9]=(g-y)*E,i[10]=(1-(d+v))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Wi.set(i[0],i[1],i[2]).length();const a=Wi.set(i[4],i[5],i[6]).length(),o=Wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],bn.copy(this);const c=1/s,h=1/a,u=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,t.setFromRotationMatrix(bn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Kn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(o===Kn)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===pa)f=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Kn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,f=(n+i)*h;let m,v;if(o===Kn)m=(a+s)*u,v=-2*u;else if(o===pa)m=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wi=new A,bn=new ke,Nf=new A(0,0,0),Uf=new A(1,1,1),li=new A,Cr=new A,Qt=new A,Cc=new ke,Pc=new yn;class Zt{constructor(e=0,t=0,n=0,i=Zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zt.DEFAULT_ORDER="XYZ";class Lu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Of=0;const Lc=new A,$i=new yn,Vn=new ke,Pr=new A,Us=new A,Ff=new A,Bf=new yn,Ic=new A(1,0,0),Dc=new A(0,1,0),Nc=new A(0,0,1),Uc={type:"added"},kf={type:"removed"},Xi={type:"childadded",child:null},Va={type:"childremoved",child:null};class _t extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new A,t=new Zt,n=new yn,i=new A(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ge}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Ic,e)}rotateY(e){return this.rotateOnAxis(Dc,e)}rotateZ(e){return this.rotateOnAxis(Nc,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ic,e)}translateY(e){return this.translateOnAxis(Dc,e)}translateZ(e){return this.translateOnAxis(Nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pr.copy(e):Pr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Us,Pr,this.up):Vn.lookAt(Pr,Us,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(Vn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uc),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kf),Va.child=e,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uc),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,Ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new A(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new A,Gn=new A,Ga=new A,Wn=new A,qi=new A,ji=new A,Oc=new A,Wa=new A,$a=new A,Xa=new A,qa=new nt,ja=new nt,Ya=new nt;class dn{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Sn.subVectors(e,t),i.cross(Sn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Sn.subVectors(i,t),Gn.subVectors(n,t),Ga.subVectors(e,t);const a=Sn.dot(Sn),o=Sn.dot(Gn),l=Sn.dot(Ga),c=Gn.dot(Gn),h=Gn.dot(Ga),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return qa.setScalar(0),ja.setScalar(0),Ya.setScalar(0),qa.fromBufferAttribute(e,t),ja.fromBufferAttribute(e,n),Ya.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(qa,s.x),a.addScaledVector(ja,s.y),a.addScaledVector(Ya,s.z),a}static isFrontFacing(e,t,n,i){return Sn.subVectors(n,t),Gn.subVectors(e,t),Sn.cross(Gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Sn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;qi.subVectors(i,n),ji.subVectors(s,n),Wa.subVectors(e,n);const l=qi.dot(Wa),c=ji.dot(Wa);if(l<=0&&c<=0)return t.copy(n);$a.subVectors(e,i);const h=qi.dot($a),u=ji.dot($a);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(qi,a);Xa.subVectors(e,s);const f=qi.dot(Xa),m=ji.dot(Xa);if(m>=0&&f<=m)return t.copy(s);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(ji,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Oc.subVectors(s,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Oc,o);const p=1/(g+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(qi,a).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function Ka(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=Bl(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ka(a,s,e+1/3),this.g=Ka(a,s,e),this.b=Ka(a,s,e-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(e,t=bt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){const n=Iu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return qe.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Pt(Bt.r*255,0,255))*65536+Math.round(Pt(Bt.g*255,0,255))*256+Math.round(Pt(Bt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Bt.copy(this),t);const n=Bt.r,i=Bt.g,s=Bt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=bt){qe.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,i=Bt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Lr);const n=er(ci.h,Lr.h,t),i=er(ci.s,Lr.s,t),s=er(ci.l,Lr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new ne;ne.NAMES=Iu;let zf=0;class An extends ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=mn(),this.name="",this.blending=os,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=No,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Do&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kt extends An{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new A,Ir=new Z;class yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vl,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vl&&(e.usage=this.usage),e}}class Du extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nu extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qe extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hf=0;const cn=new ke,Za=new _t,Yi=new A,en=new gn,Os=new gn,Nt=new A;class Mt extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ru(e)?Nu:Du)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return Za.lookAt(e),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qe(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Os.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(en.min,Os.min),en.expandByPoint(Nt),Nt.addVectors(en.max,Os.max),en.expandByPoint(Nt)):(en.expandByPoint(Os.min),en.expandByPoint(Os.max))}en.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(Yi.fromBufferAttribute(e,c),Nt.add(Yi)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new A,l[P]=new A;const c=new A,h=new A,u=new A,d=new Z,f=new Z,m=new Z,v=new A,g=new A;function p(P,S,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,S),m.fromBufferAttribute(s,M),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),o[P].add(v),o[S].add(v),o[M].add(v),l[P].add(g),l[S].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,S=y.length;P<S;++P){const M=y[P],I=M.start,B=M.count;for(let O=I,H=I+B;O<H;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const _=new A,x=new A,C=new A,w=new A;function E(P){C.fromBufferAttribute(i,P),w.copy(C);const S=o[P];_.copy(S),_.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(w,S);const I=x.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,I)}for(let P=0,S=y.length;P<S;++P){const M=y[P],I=M.start,B=M.count;for(let O=I,H=I+B;O<H;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new A,s=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new yt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new ke,Mi=new Ta,Dr=new Nn,Bc=new A,Nr=new A,Ur=new A,Or=new A,Ja=new A,Fr=new A,kc=new A,Br=new A;class ut extends _t{constructor(e=new Mt,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Fr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Ja.fromBufferAttribute(u,e),a?Fr.addScaledVector(Ja,h):Fr.addScaledVector(Ja.sub(t),h))}t.add(Fr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Mi.copy(e.ray).recast(e.near),!(Dr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Dr,Bc)===null||Mi.origin.distanceToSquared(Bc)>(e.far-e.near)**2))&&(Fc.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(Fc),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,C=_;x<C;x+=3){const w=o.getX(x),E=o.getX(x+1),P=o.getX(x+2);i=kr(this,p,e,n,c,h,u,w,E,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const y=o.getX(g),_=o.getX(g+1),x=o.getX(g+2);i=kr(this,a,e,n,c,h,u,y,_,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,C=_;x<C;x+=3){const w=x,E=x+1,P=x+2;i=kr(this,p,e,n,c,h,u,w,E,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const y=g,_=g+1,x=g+2;i=kr(this,a,e,n,c,h,u,y,_,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Vf(r,e,t,n,i,s,a,o){let l;if(e.side===Xt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Rn,o),l===null)return null;Br.copy(o),Br.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:r}}function kr(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Nr),r.getVertexPosition(l,Ur),r.getVertexPosition(c,Or);const h=Vf(r,e,t,n,Nr,Ur,Or,kc);if(h){const u=new A;dn.getBarycoord(kc,Nr,Ur,Or,u),i&&(h.uv=dn.getInterpolatedAttribute(i,o,l,c,u,new Z)),s&&(h.uv1=dn.getInterpolatedAttribute(s,o,l,c,u,new Z)),a&&(h.normal=dn.getInterpolatedAttribute(a,o,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new A,materialIndex:0};dn.getNormal(Nr,Ur,Or,d.normal),h.face=d,h.barycoord=u}return h}class Ui extends Mt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function m(v,g,p,y,_,x,C,w,E,P,S){const M=x/E,I=C/P,B=x/2,O=C/2,H=w/2,X=E+1,V=P+1;let Q=0,G=0;const he=new A;for(let ve=0;ve<V;ve++){const Se=ve*I-O;for(let ze=0;ze<X;ze++){const it=ze*M-B;he[v]=it*y,he[g]=Se*_,he[p]=H,c.push(he.x,he.y,he.z),he[v]=0,he[g]=0,he[p]=w>0?1:-1,h.push(he.x,he.y,he.z),u.push(ze/E),u.push(1-ve/P),Q+=1}}for(let ve=0;ve<P;ve++)for(let Se=0;Se<E;Se++){const ze=d+Se+X*ve,it=d+Se+X*(ve+1),Y=d+(Se+1)+X*(ve+1),ae=d+(Se+1)+X*ve;l.push(ze,it,ae),l.push(it,Y,ae),G+=6}o.addGroup(f,G,S),f+=G,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(r){const e={};for(let t=0;t<r.length;t++){const n=xs(r[t]);for(const i in n)e[i]=n[i]}return e}function Gf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Uu(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const ur={clone:xs,merge:Wt};var Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pt extends An{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=$f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=Gf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ou extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new A,zc=new Z,Hc=new Z;class $t extends Ou{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,zc,Hc),t.subVectors(Hc,zc)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=-90,Zi=1;class Xf extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(Ki,Zi,e,t);i.layers=this.layers,this.add(i);const s=new $t(Ki,Zi,e,t);s.layers=this.layers,this.add(s);const a=new $t(Ki,Zi,e,t);a.layers=this.layers,this.add(a);const o=new $t(Ki,Zi,e,t);o.layers=this.layers,this.add(o);const l=new $t(Ki,Zi,e,t);l.layers=this.layers,this.add(l);const c=new $t(Ki,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Fu extends Lt{constructor(e,t,n,i,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ps,super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qf extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ui(5,5,5),s=new pt({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Zn});s.uniforms.tEquirect.value=t;const a=new ut(i,s),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=an),new Xf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Qa=new A,jf=new A,Yf=new Ge;class Ai{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Qa.subVectors(n,t).cross(jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yf.getNormalMatrix(e),i=this.coplanarPoint(Qa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Nn,zr=new A;class kl{constructor(e=new Ai,t=new Ai,n=new Ai,i=new Ai,s=new Ai,a=new Ai){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],v=i[10],g=i[11],p=i[12],y=i[13],_=i[14],x=i[15];if(n[0].setComponents(l-s,d-c,g-f,x-p).normalize(),n[1].setComponents(l+s,d+c,g+f,x+p).normalize(),n[2].setComponents(l+a,d+h,g+m,x+y).normalize(),n[3].setComponents(l-a,d-h,g-m,x-y).normalize(),n[4].setComponents(l-o,d-u,g-v,x-_).normalize(),t===Kn)n[5].setComponents(l+o,d+u,g+v,x+_).normalize();else if(t===pa)n[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(zr.x=i.normal.x>0?e.max.x:e.min.x,zr.y=i.normal.y>0?e.max.y:e.min.y,zr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Kf(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Es extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const y=p*d-a;for(let _=0;_<c;_++){const x=_*u-s;m.push(x,-y,0),v.push(0,0,1),g.push(_/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const _=y+c*p,x=y+c*(p+1),C=y+1+c*(p+1),w=y+1+c*p;f.push(_,x,w),f.push(x,C,w)}this.setIndex(f),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
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
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
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
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp=`#ifdef USE_BATCHING
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
#endif`,ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hp=`#ifdef USE_IRIDESCENCE
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
#endif`,up=`#ifdef USE_BUMPMAP
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xp=`#define PI 3.141592653589793
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
} // validated`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bp=`vec3 transformedNormal = objectNormal;
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
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
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
}`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
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
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
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
#endif`,Yp=`struct PhysicalMaterial {
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
}`,Kp=`
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,am=`#if defined( USE_POINTS_UV )
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
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_m=`#ifdef USE_NORMALMAP
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
#endif`,xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Um=`float getShadowMask() {
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
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
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
}`,ig=`#if DEPTH_PACKING == 3200
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
}`,sg=`#define DISTANCE
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
}`,rg=`#define DISTANCE
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define LAMBERT
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
}`,pg=`#define MATCAP
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
}`,mg=`#define MATCAP
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
}`,gg=`#define NORMAL
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
}`,vg=`#define NORMAL
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
}`,yg=`#define PHONG
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
}`,_g=`#define PHONG
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
}`,xg=`#define STANDARD
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
}`,Mg=`#define STANDARD
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
}`,bg=`#define TOON
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
}`,Sg=`#define TOON
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
}`,Tg=`uniform float size;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Eg=`#include <common>
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
}`,Ag=`uniform vec3 color;
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
}`,Rg=`uniform float rotation;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Zf,alphahash_pars_fragment:Jf,alphamap_fragment:Qf,alphamap_pars_fragment:ep,alphatest_fragment:tp,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:sp,batching_pars_vertex:rp,batching_vertex:ap,begin_vertex:op,beginnormal_vertex:lp,bsdfs:cp,iridescence_fragment:hp,bumpmap_pars_fragment:up,clipping_planes_fragment:dp,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:gp,color_pars_fragment:vp,color_pars_vertex:yp,color_vertex:_p,common:xp,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:bp,displacementmap_pars_vertex:Sp,displacementmap_vertex:Tp,emissivemap_fragment:wp,emissivemap_pars_fragment:Ep,colorspace_fragment:Ap,colorspace_pars_fragment:Rp,envmap_fragment:Cp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Lp,envmap_pars_vertex:Ip,envmap_physical_pars_fragment:Gp,envmap_vertex:Dp,fog_vertex:Np,fog_pars_vertex:Up,fog_fragment:Op,fog_pars_fragment:Fp,gradientmap_pars_fragment:Bp,lightmap_pars_fragment:kp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Vp,lights_toon_fragment:Wp,lights_toon_pars_fragment:$p,lights_phong_fragment:Xp,lights_phong_pars_fragment:qp,lights_physical_fragment:jp,lights_physical_pars_fragment:Yp,lights_fragment_begin:Kp,lights_fragment_maps:Zp,lights_fragment_end:Jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:rm,map_particle_pars_fragment:am,metalnessmap_fragment:om,metalnessmap_pars_fragment:lm,morphinstance_vertex:cm,morphcolor_vertex:hm,morphnormal_vertex:um,morphtarget_pars_vertex:dm,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:vm,normal_vertex:ym,normalmap_pars_fragment:_m,clearcoat_normal_fragment_begin:xm,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Sm,opaque_fragment:Tm,packing:wm,premultiplied_alpha_fragment:Em,project_vertex:Am,dithering_fragment:Rm,dithering_pars_fragment:Cm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Dm,shadowmap_vertex:Nm,shadowmask_pars_fragment:Um,skinbase_vertex:Om,skinning_pars_vertex:Fm,skinning_vertex:Bm,skinnormal_vertex:km,specularmap_fragment:zm,specularmap_pars_fragment:Hm,tonemapping_fragment:Vm,tonemapping_pars_fragment:Gm,transmission_fragment:Wm,transmission_pars_fragment:$m,uv_pars_fragment:Xm,uv_pars_vertex:qm,uv_vertex:jm,worldpos_vertex:Ym,background_vert:Km,background_frag:Zm,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:eg,cube_frag:tg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:rg,equirect_vert:ag,equirect_frag:og,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:vg,meshphong_vert:yg,meshphong_frag:_g,meshphysical_vert:xg,meshphysical_frag:Mg,meshtoon_vert:bg,meshtoon_frag:Sg,points_vert:Tg,points_frag:wg,shadow_vert:Eg,shadow_frag:Ag,sprite_vert:Rg,sprite_frag:Cg},ue={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Ln={basic:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ne(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Wt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Wt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ne(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Wt([ue.points,ue.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Wt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Wt([ue.common,ue.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Wt([ue.sprite,ue.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Wt([ue.common,ue.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Wt([ue.lights,ue.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Ln.physical={uniforms:Wt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Hr={r:0,b:0,g:0},Si=new Zt,Pg=new ke;function Lg(r,e,t,n,i,s,a){const o=new ne(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const x=m(y);x===null?p(o,l):x&&x.isColor&&(p(x,1),_=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,_){const x=m(_);x&&(x.isCubeTexture||x.mapping===ba)?(h===void 0&&(h=new ut(new Ui(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:xs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Si.copy(_.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(Si)),h.material.toneMapped=qe.getTransfer(x.colorSpace)!==ot,(u!==x||d!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ut(new Es(2,2),new pt({name:"BackgroundMaterial",uniforms:xs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=qe.getTransfer(x.colorSpace)!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(Hr,Uu(r)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:v,addToRenderList:g}}function Ig(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(M,I,B,O,H){let X=!1;const V=u(O,B,I);s!==V&&(s=V,c(s.object)),X=f(M,O,B,H),X&&m(M,O,B,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(M,I,B,O),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,I,B){const O=B.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let X=H[I.id];X===void 0&&(X={},H[I.id]=X);let V=X[O];return V===void 0&&(V=d(l()),X[O]=V),V}function d(M){const I=[],B=[],O=[];for(let H=0;H<t;H++)I[H]=0,B[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,I,B,O){const H=s.attributes,X=I.attributes;let V=0;const Q=B.getAttributes();for(const G in Q)if(Q[G].location>=0){const ve=H[G];let Se=X[G];if(Se===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),ve===void 0||ve.attribute!==Se||Se&&ve.data!==Se.data)return!0;V++}return s.attributesNum!==V||s.index!==O}function m(M,I,B,O){const H={},X=I.attributes;let V=0;const Q=B.getAttributes();for(const G in Q)if(Q[G].location>=0){let ve=X[G];ve===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor));const Se={};Se.attribute=ve,ve&&ve.data&&(Se.data=ve.data),H[G]=Se,V++}s.attributes=H,s.attributesNum=V,s.index=O}function v(){const M=s.newAttributes;for(let I=0,B=M.length;I<B;I++)M[I]=0}function g(M){p(M,0)}function p(M,I){const B=s.newAttributes,O=s.enabledAttributes,H=s.attributeDivisors;B[M]=1,O[M]===0&&(r.enableVertexAttribArray(M),O[M]=1),H[M]!==I&&(r.vertexAttribDivisor(M,I),H[M]=I)}function y(){const M=s.newAttributes,I=s.enabledAttributes;for(let B=0,O=I.length;B<O;B++)I[B]!==M[B]&&(r.disableVertexAttribArray(B),I[B]=0)}function _(M,I,B,O,H,X,V){V===!0?r.vertexAttribIPointer(M,I,B,H,X):r.vertexAttribPointer(M,I,B,O,H,X)}function x(M,I,B,O){v();const H=O.attributes,X=B.getAttributes(),V=I.defaultAttributeValues;for(const Q in X){const G=X[Q];if(G.location>=0){let he=H[Q];if(he===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const ve=he.normalized,Se=he.itemSize,ze=e.get(he);if(ze===void 0)continue;const it=ze.buffer,Y=ze.type,ae=ze.bytesPerElement,we=Y===r.INT||Y===r.UNSIGNED_INT||he.gpuType===Ll;if(he.isInterleavedBufferAttribute){const le=he.data,Ie=le.stride,Fe=he.offset;if(le.isInstancedInterleavedBuffer){for(let Ue=0;Ue<G.locationSize;Ue++)p(G.location+Ue,le.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ue=0;Ue<G.locationSize;Ue++)g(G.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,it);for(let Ue=0;Ue<G.locationSize;Ue++)_(G.location+Ue,Se/G.locationSize,Y,ve,Ie*ae,(Fe+Se/G.locationSize*Ue)*ae,we)}else{if(he.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)p(G.location+le,he.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let le=0;le<G.locationSize;le++)g(G.location+le);r.bindBuffer(r.ARRAY_BUFFER,it);for(let le=0;le<G.locationSize;le++)_(G.location+le,Se/G.locationSize,Y,ve,Se*ae,Se/G.locationSize*le*ae,we)}}else if(V!==void 0){const ve=V[Q];if(ve!==void 0)switch(ve.length){case 2:r.vertexAttrib2fv(G.location,ve);break;case 3:r.vertexAttrib3fv(G.location,ve);break;case 4:r.vertexAttrib4fv(G.location,ve);break;default:r.vertexAttrib1fv(G.location,ve)}}}}y()}function C(){P();for(const M in n){const I=n[M];for(const B in I){const O=I[B];for(const H in O)h(O[H].object),delete O[H];delete I[B]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const B in I){const O=I[B];for(const H in O)h(O[H].object),delete O[H];delete I[B]}delete n[M.id]}function E(M){for(const I in n){const B=n[I];if(B[M.id]===void 0)continue;const O=B[M.id];for(const H in O)h(O[H].object),delete O[H];delete B[M.id]}}function P(){S(),a=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function Dg(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*d[v];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ng(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==pn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const P=E===Jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ei&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==wn&&!P)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:C,maxSamples:w}}function Ug(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ai,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):c();else{const y=s?0:n,_=y*4;let x=p.clippingState||null;l.value=x,x=h(m,d,_,f);for(let C=0;C!==_;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,x=f;_!==v;++_,x+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Og(r){let e=new WeakMap;function t(a,o){return o===Vo?a.mapping=ps:o===Go&&(a.mapping=ms),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Vo||o===Go)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new qf(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class wa extends Ou{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rs=4,Vc=[.125,.215,.35,.446,.526,.582],Pi=20,eo=new wa,Gc=new ne;let to=null,no=0,io=0,so=!1;const Ri=(1+Math.sqrt(5))/2,Ji=1/Ri,Wc=[new A(-Ri,Ji,0),new A(Ri,Ji,0),new A(-Ji,0,Ri),new A(Ji,0,Ri),new A(0,Ri,-Ji),new A(0,Ri,Ji),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class yl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){to=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(to,no,io),this._renderer.xr.enabled=so,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),to=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Jn,format:pn,colorSpace:Vt,depthBuffer:!1},i=$c(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fg(s)),this._blurMaterial=Bg(s,e,t)}return i}_compileMaterial(e){const t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,eo)}_sceneToCubeUV(e,t,n,i){const o=new $t(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Gc),h.toneMapping=gi,h.autoClear=!1;const f=new Kt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),m=new ut(new Ui,f);let v=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(Gc),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const _=this._cubeSize;Vr(i,y*_,p>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ps||e.mapping===ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ut(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Vr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,eo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Wc[(i-s-1)%Wc.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ut(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Pi-1),v=s/m,g=isFinite(s)?1+Math.floor(h*v):Pi;g>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Pi}`);const p=[];let y=0;for(let E=0;E<Pi;++E){const P=E/v,S=Math.exp(-P*P/2);p.push(S),E===0?y+=S:E<g&&(y+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const x=this._sizeLods[i],C=3*x*(i>_-rs?i-_+rs:0),w=4*(this._cubeSize-x);Vr(t,C,w,3*x,2*x),l.setRenderTarget(t),l.render(u,eo)}}function Fg(r){const e=[],t=[],n=[];let i=r;const s=r-rs+1+Vc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-rs?l=Vc[a-r+rs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,g=2,p=1,y=new Float32Array(v*m*f),_=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,P=w>2?0:-1,S=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];y.set(S,v*m*w),_.set(d,g*m*w);const M=[w,w,w,w,w,w];x.set(M,p*m*w)}const C=new Mt;C.setAttribute("position",new yt(y,v)),C.setAttribute("uv",new yt(_,g)),C.setAttribute("faceIndex",new yt(x,p)),e.push(C),i>rs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $c(r,e,t){const n=new En(r,e,t);return n.texture.mapping=ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Bg(r,e,t){const n=new Float32Array(Pi),i=new A(0,1,0);return new pt({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Xc(){return new pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function qc(){return new pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function zl(){return`

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
	`}function kg(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Vo||l===Go,h=l===ps||l===ms;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new yl(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new yl(r)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function zg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ks("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Hg(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const v=f[m];for(let g=0,p=v.length;g<p;g++)e.update(v[g],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,x=y.length;_<x;_+=3){const C=y[_+0],w=y[_+1],E=y[_+2];d.push(C,w,w,E,E,C)}}else if(m!==void 0){const y=m.array;v=m.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const C=_+0,w=_+1,E=_+2;d.push(C,w,w,E,E,C)}}else return;const g=new(Ru(d)?Nu:Du)(d,1);g.version=v;const p=s.get(u);p&&e.remove(p),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Vg(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,v,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*v[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Gg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wg(r,e,t){const n=new WeakMap,i=new nt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let x=0;m===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let C=o.attributes.position.count*x,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const E=new Float32Array(C*w*4*u),P=new Pu(E,C,w,u);P.type=wn,P.needsUpdate=!0;const S=x*4;for(let I=0;I<u;I++){const B=p[I],O=y[I],H=_[I],X=C*w*4*I;for(let V=0;V<B.count;V++){const Q=V*S;m===!0&&(i.fromBufferAttribute(B,V),E[X+Q+0]=i.x,E[X+Q+1]=i.y,E[X+Q+2]=i.z,E[X+Q+3]=0),v===!0&&(i.fromBufferAttribute(O,V),E[X+Q+4]=i.x,E[X+Q+5]=i.y,E[X+Q+6]=i.z,E[X+Q+7]=0),g===!0&&(i.fromBufferAttribute(H,V),E[X+Q+8]=i.x,E[X+Q+9]=i.y,E[X+Q+10]=i.z,E[X+Q+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new Z(C,w)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function $g(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class ku extends Lt{constructor(e,t,n,i,s,a,o,l,c,h=ls){if(h!==ls&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ls&&(n=Di),n===void 0&&h===ys&&(n=vs),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zu=new Lt,jc=new ku(1,1),Hu=new Pu,Vu=new If,Gu=new Fu,Yc=[],Kc=[],Zc=new Float32Array(16),Jc=new Float32Array(9),Qc=new Float32Array(4);function As(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Yc[i];if(s===void 0&&(s=new Float32Array(i),Yc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function It(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Dt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ea(r,e){let t=Kc[e];t===void 0&&(t=new Int32Array(e),Kc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Xg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function qg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2fv(this.addr,e),Dt(t,e)}}function jg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;r.uniform3fv(this.addr,e),Dt(t,e)}}function Yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4fv(this.addr,e),Dt(t,e)}}function Kg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Qc.set(n),r.uniformMatrix2fv(this.addr,!1,Qc),Dt(t,n)}}function Zg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Jc.set(n),r.uniformMatrix3fv(this.addr,!1,Jc),Dt(t,n)}}function Jg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Zc.set(n),r.uniformMatrix4fv(this.addr,!1,Zc),Dt(t,n)}}function Qg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function e0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2iv(this.addr,e),Dt(t,e)}}function t0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3iv(this.addr,e),Dt(t,e)}}function n0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4iv(this.addr,e),Dt(t,e)}}function i0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function s0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2uiv(this.addr,e),Dt(t,e)}}function r0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3uiv(this.addr,e),Dt(t,e)}}function a0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4uiv(this.addr,e),Dt(t,e)}}function o0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(jc.compareFunction=Au,s=jc):s=zu,t.setTexture2D(e||s,i)}function l0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Vu,i)}function c0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Gu,i)}function h0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hu,i)}function u0(r){switch(r){case 5126:return Xg;case 35664:return qg;case 35665:return jg;case 35666:return Yg;case 35674:return Kg;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return Qg;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return h0}}function d0(r,e){r.uniform1fv(this.addr,e)}function f0(r,e){const t=As(e,this.size,2);r.uniform2fv(this.addr,t)}function p0(r,e){const t=As(e,this.size,3);r.uniform3fv(this.addr,t)}function m0(r,e){const t=As(e,this.size,4);r.uniform4fv(this.addr,t)}function g0(r,e){const t=As(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function v0(r,e){const t=As(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function y0(r,e){const t=As(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _0(r,e){r.uniform1iv(this.addr,e)}function x0(r,e){r.uniform2iv(this.addr,e)}function M0(r,e){r.uniform3iv(this.addr,e)}function b0(r,e){r.uniform4iv(this.addr,e)}function S0(r,e){r.uniform1uiv(this.addr,e)}function T0(r,e){r.uniform2uiv(this.addr,e)}function w0(r,e){r.uniform3uiv(this.addr,e)}function E0(r,e){r.uniform4uiv(this.addr,e)}function A0(r,e,t){const n=this.cache,i=e.length,s=Ea(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||zu,s[a])}function R0(r,e,t){const n=this.cache,i=e.length,s=Ea(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Vu,s[a])}function C0(r,e,t){const n=this.cache,i=e.length,s=Ea(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Gu,s[a])}function P0(r,e,t){const n=this.cache,i=e.length,s=Ea(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Hu,s[a])}function L0(r){switch(r){case 5126:return d0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return v0;case 35676:return y0;case 5124:case 35670:return _0;case 35667:case 35671:return x0;case 35668:case 35672:return M0;case 35669:case 35673:return b0;case 5125:return S0;case 36294:return T0;case 36295:return w0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return P0}}class I0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=u0(t.type)}}class D0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L0(t.type)}}class N0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ro=/(\w+)(\])?(\[|\.)?/g;function eh(r,e){r.seq.push(e),r.map[e.id]=e}function U0(r,e,t){const n=r.name,i=n.length;for(ro.lastIndex=0;;){const s=ro.exec(n),a=ro.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){eh(t,c===void 0?new I0(o,r,e):new D0(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new N0(o),eh(t,u)),t=u}}}class ua{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);U0(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function th(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const O0=37297;let F0=0;function B0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const nh=new Ge;function k0(r){qe._getMatrix(nh,qe.workingColorSpace,r);const e=`mat3( ${nh.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(r)){case Sa:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ih(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+B0(r.getShaderSource(e),a)}else return i}function z0(r,e){const t=k0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function H0(r,e){let t;switch(e){case cu:t="Linear";break;case hu:t="Reinhard";break;case uu:t="Cineon";break;case Pl:t="ACESFilmic";break;case du:t="AgX";break;case fu:t="Neutral";break;case Xd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gr=new A;function V0(){qe.getLuminanceCoefficients(Gr);const r=Gr.x.toFixed(4),e=Gr.y.toFixed(4),t=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function W0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Zs(r){return r!==""}function sh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(r){return r.replace(X0,j0)}const q0=new Map;function j0(r,e){let t=$e[e];if(t===void 0){const n=q0.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _l(t)}const Y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ah(r){return r.replace(Y0,K0)}function K0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function oh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Z0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ou?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===wd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function J0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function ev(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case lu:e="ENVMAP_BLENDING_MULTIPLY";break;case Wd:e="ENVMAP_BLENDING_MIX";break;case $d:e="ENVMAP_BLENDING_ADD";break}return e}function tv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function nv(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Z0(t),c=J0(t),h=Q0(t),u=ev(t),d=tv(t),f=G0(t),m=W0(s),v=i.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Zs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(g=[oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?$e.tonemapping_pars_fragment:"",t.toneMapping!==gi?H0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,z0("linearToOutputTexel",t.outputColorSpace),V0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),a=_l(a),a=sh(a,t),a=rh(a,t),o=_l(o),o=sh(o,t),o=rh(o,t),a=ah(a),o=ah(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+g+a,x=y+p+o,C=th(i,i.VERTEX_SHADER,_),w=th(i,i.FRAGMENT_SHADER,x);i.attachShader(v,C),i.attachShader(v,w),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function E(I){if(r.debug.checkShaderErrors){const B=i.getProgramInfoLog(v).trim(),O=i.getShaderInfoLog(C).trim(),H=i.getShaderInfoLog(w).trim();let X=!0,V=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,C,w);else{const Q=ih(i,C,"vertex"),G=ih(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+Q+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||H==="")&&(V=!1);V&&(I.diagnostics={runnable:X,programLog:B,vertexShader:{log:O,prefix:g},fragmentShader:{log:H,prefix:p}})}i.deleteShader(C),i.deleteShader(w),P=new ua(i,v),S=$0(i,v)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,O0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=w,this}let iv=0;class sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rv(e),t.set(e,n)),n}}class rv{constructor(e){this.id=iv++,this.code=e,this.usedTimes=0}}function av(r,e,t,n,i,s,a){const o=new Lu,l=new sv,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,I,B,O){const H=B.fog,X=O.geometry,V=S.isMeshStandardMaterial?B.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),G=Q&&Q.mapping===ba?Q.image.height:null,he=m[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ve=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Se=ve!==void 0?ve.length:0;let ze=0;X.morphAttributes.position!==void 0&&(ze=1),X.morphAttributes.normal!==void 0&&(ze=2),X.morphAttributes.color!==void 0&&(ze=3);let it,Y,ae,we;if(he){const at=Ln[he];it=at.vertexShader,Y=at.fragmentShader}else it=S.vertexShader,Y=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),we=l.getFragmentShaderID(S);const le=r.getRenderTarget(),Ie=r.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,Ue=O.isBatchedMesh===!0,et=!!S.map,J=!!S.matcap,re=!!Q,L=!!S.aoMap,Pe=!!S.lightMap,ie=!!S.bumpMap,xe=!!S.normalMap,ce=!!S.displacementMap,De=!!S.emissiveMap,ye=!!S.metalnessMap,R=!!S.roughnessMap,b=S.anisotropy>0,F=S.clearcoat>0,q=S.dispersion>0,ee=S.iridescence>0,j=S.sheen>0,Ee=S.transmission>0,de=b&&!!S.anisotropyMap,_e=F&&!!S.clearcoatMap,Ye=F&&!!S.clearcoatNormalMap,se=F&&!!S.clearcoatRoughnessMap,Me=ee&&!!S.iridescenceMap,Ne=ee&&!!S.iridescenceThicknessMap,Oe=j&&!!S.sheenColorMap,be=j&&!!S.sheenRoughnessMap,Je=!!S.specularMap,We=!!S.specularColorMap,dt=!!S.specularIntensityMap,D=Ee&&!!S.transmissionMap,fe=Ee&&!!S.thicknessMap,W=!!S.gradientMap,K=!!S.alphaMap,ge=S.alphaTest>0,pe=!!S.alphaHash,He=!!S.extensions;let Et=gi;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Et=r.toneMapping);const Ot={shaderID:he,shaderType:S.type,shaderName:S.name,vertexShader:it,fragmentShader:Y,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:we,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ue,batchingColor:Ue&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?r.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Vt,alphaToCoverage:!!S.alphaToCoverage,map:et,matcap:J,envMap:re,envMapMode:re&&Q.mapping,envMapCubeUVHeight:G,aoMap:L,lightMap:Pe,bumpMap:ie,normalMap:xe,displacementMap:d&&ce,emissiveMap:De,normalMapObjectSpace:xe&&S.normalMapType===Jd,normalMapTangentSpace:xe&&S.normalMapType===Eu,metalnessMap:ye,roughnessMap:R,anisotropy:b,anisotropyMap:de,clearcoat:F,clearcoatMap:_e,clearcoatNormalMap:Ye,clearcoatRoughnessMap:se,dispersion:q,iridescence:ee,iridescenceMap:Me,iridescenceThicknessMap:Ne,sheen:j,sheenColorMap:Oe,sheenRoughnessMap:be,specularMap:Je,specularColorMap:We,specularIntensityMap:dt,transmission:Ee,transmissionMap:D,thicknessMap:fe,gradientMap:W,opaque:S.transparent===!1&&S.blending===os&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:ge,alphaHash:pe,combine:S.combine,mapUv:et&&v(S.map.channel),aoMapUv:L&&v(S.aoMap.channel),lightMapUv:Pe&&v(S.lightMap.channel),bumpMapUv:ie&&v(S.bumpMap.channel),normalMapUv:xe&&v(S.normalMap.channel),displacementMapUv:ce&&v(S.displacementMap.channel),emissiveMapUv:De&&v(S.emissiveMap.channel),metalnessMapUv:ye&&v(S.metalnessMap.channel),roughnessMapUv:R&&v(S.roughnessMap.channel),anisotropyMapUv:de&&v(S.anisotropyMap.channel),clearcoatMapUv:_e&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(S.sheenRoughnessMap.channel),specularMapUv:Je&&v(S.specularMap.channel),specularColorMapUv:We&&v(S.specularColorMap.channel),specularIntensityMapUv:dt&&v(S.specularIntensityMap.channel),transmissionMapUv:D&&v(S.transmissionMap.channel),thicknessMapUv:fe&&v(S.thicknessMap.channel),alphaMapUv:K&&v(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(xe||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(et||K),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Et,decodeVideoTexture:et&&S.map.isVideoTexture===!0&&qe.getTransfer(S.map.colorSpace)===ot,decodeVideoTextureEmissive:De&&S.emissiveMap.isVideoTexture===!0&&qe.getTransfer(S.emissiveMap.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ut,flipSided:S.side===Xt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:He&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&S.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)M.push(I),M.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(y(M,S),_(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const M=m[S.type];let I;if(M){const B=Ln[M];I=ur.clone(B.uniforms)}else I=S.uniforms;return I}function C(S,M){let I;for(let B=0,O=h.length;B<O;B++){const H=h[B];if(H.cacheKey===M){I=H,++I.usedTimes;break}}return I===void 0&&(I=new nv(r,M,S,s),h.push(I)),I}function w(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function E(S){l.remove(S)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:P}}function ov(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function lv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function lh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ch(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,m,v,g){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),e++,p}function o(u,d,f,m,v,g){const p=a(u,d,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,m,v,g){const p=a(u,d,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||lv),n.length>1&&n.sort(d||lh),i.length>1&&i.sort(d||lh)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function cv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new ch,r.set(n,[a])):i>=s.length?(a=new ch,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function hv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new ne};break;case"SpotLight":t={position:new A,direction:new A,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":t={color:new ne,position:new A,halfWidth:new A,halfHeight:new A};break}return r[e.id]=t,t}}}function uv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let dv=0;function fv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function pv(r){const e=new hv,t=uv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const i=new A,s=new ke,a=new ke;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,y=0,_=0,x=0,C=0,w=0,E=0;c.sort(fv);for(let S=0,M=c.length;S<M;S++){const I=c[S],B=I.color,O=I.intensity,H=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=B.r*O,u+=B.g*O,d+=B.b*O;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],O);E++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,G=t.get(I);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=I.shadow.matrix,y++}n.directional[f]=V,f++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(B).multiplyScalar(O),V.distance=H,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[v]=V;const Q=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,Q.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[v]=Q.matrix,I.castShadow){const G=t.get(I);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=X,x++}v++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(B).multiplyScalar(O),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=V,g++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const Q=I.shadow,G=t.get(I);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=I.shadow.matrix,_++}n.point[m]=V,m++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(O),V.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[p]=V,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==v||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==_||P.numSpotShadows!==x||P.numSpotMaps!==C||P.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,P.directionalLength=f,P.pointLength=m,P.spotLength=v,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=_,P.numSpotShadows=x,P.numSpotMaps=C,P.numLightProbes=E,n.version=dv++)}function l(c,h){let u=0,d=0,f=0,m=0,v=0;const g=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const _=c[p];if(_.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(_.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(_.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),a.identity(),s.copy(_.matrixWorld),s.premultiply(g),a.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function hh(r){const e=new pv(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function mv(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new hh(r),e.set(i,[o])):s>=a.length?(o=new hh(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class gv extends An{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vv extends An{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_v=`uniform sampler2D shadow_pass;
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
}`;function xv(r,e,t){let n=new kl;const i=new Z,s=new Z,a=new nt,o=new gv({depthPacking:Zd}),l=new vv,c={},h=t.maxTextureSize,u={[Rn]:Xt,[Xt]:Rn,[Ut]:Ut},d=new pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:yv,fragmentShader:_v}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Mt;m.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ut(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ou;let p=this.type;this.render=function(w,E,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const S=r.getRenderTarget(),M=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Zn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=p!==qn&&this.type===qn,H=p===qn&&this.type!==qn;for(let X=0,V=w.length;X<V;X++){const Q=w[X],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const he=G.getFrameExtents();if(i.multiply(he),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/he.x),i.x=s.x*he.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/he.y),i.y=s.y*he.y,G.mapSize.y=s.y)),G.map===null||O===!0||H===!0){const Se=this.type!==qn?{minFilter:qt,magFilter:qt}:{};G.map!==null&&G.map.dispose(),G.map=new En(i.x,i.y,Se),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const ve=G.getViewportCount();for(let Se=0;Se<ve;Se++){const ze=G.getViewport(Se);a.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),B.viewport(a),G.updateMatrices(Q,Se),n=G.getFrustum(),x(E,P,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===qn&&y(G,P),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(S,M,I)};function y(w,E){const P=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new En(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,P,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,P,f,v,null)}function _(w,E,P,S){let M=null;const I=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const B=M.uuid,O=E.uuid;let H=c[B];H===void 0&&(H={},c[B]=H);let X=H[O];X===void 0&&(X=M.clone(),H[O]=X,E.addEventListener("dispose",C)),M=X}if(M.visible=E.visible,M.wireframe=E.wireframe,S===qn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=r.properties.get(M);B.light=P}return M}function x(w,E,P,S,M){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===qn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const O=e.update(w),H=w.material;if(Array.isArray(H)){const X=O.groups;for(let V=0,Q=X.length;V<Q;V++){const G=X[V],he=H[G.materialIndex];if(he&&he.visible){const ve=_(w,he,S,M);w.onBeforeShadow(r,w,E,P,O,ve,G),r.renderBufferDirect(P,null,O,ve,w,G),w.onAfterShadow(r,w,E,P,O,ve,G)}}}else if(H.visible){const X=_(w,H,S,M);w.onBeforeShadow(r,w,E,P,O,X,null),r.renderBufferDirect(P,null,O,X,w,null),w.onAfterShadow(r,w,E,P,O,X,null)}}const B=w.children;for(let O=0,H=B.length;O<H;O++)x(B[O],E,P,S,M)}function C(w){w.target.removeEventListener("dispose",C);for(const P in c){const S=c[P],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Mv={[Uo]:Oo,[Fo]:zo,[Bo]:Ho,[fs]:ko,[Oo]:Uo,[zo]:Fo,[Ho]:Bo,[ko]:fs};function bv(r,e){function t(){let D=!1;const fe=new nt;let W=null;const K=new nt(0,0,0,0);return{setMask:function(ge){W!==ge&&!D&&(r.colorMask(ge,ge,ge,ge),W=ge)},setLocked:function(ge){D=ge},setClear:function(ge,pe,He,Et,Ot){Ot===!0&&(ge*=Et,pe*=Et,He*=Et),fe.set(ge,pe,He,Et),K.equals(fe)===!1&&(r.clearColor(ge,pe,He,Et),K.copy(fe))},reset:function(){D=!1,W=null,K.set(-1,0,0,0)}}}function n(){let D=!1,fe=!1,W=null,K=null,ge=null;return{setReversed:function(pe){if(fe!==pe){const He=e.get("EXT_clip_control");fe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const Et=ge;ge=null,this.setClear(Et)}fe=pe},getReversed:function(){return fe},setTest:function(pe){pe?le(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(pe){W!==pe&&!D&&(r.depthMask(pe),W=pe)},setFunc:function(pe){if(fe&&(pe=Mv[pe]),K!==pe){switch(pe){case Uo:r.depthFunc(r.NEVER);break;case Oo:r.depthFunc(r.ALWAYS);break;case Fo:r.depthFunc(r.LESS);break;case fs:r.depthFunc(r.LEQUAL);break;case Bo:r.depthFunc(r.EQUAL);break;case ko:r.depthFunc(r.GEQUAL);break;case zo:r.depthFunc(r.GREATER);break;case Ho:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=pe}},setLocked:function(pe){D=pe},setClear:function(pe){ge!==pe&&(fe&&(pe=1-pe),r.clearDepth(pe),ge=pe)},reset:function(){D=!1,W=null,K=null,ge=null,fe=!1}}}function i(){let D=!1,fe=null,W=null,K=null,ge=null,pe=null,He=null,Et=null,Ot=null;return{setTest:function(at){D||(at?le(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(at){fe!==at&&!D&&(r.stencilMask(at),fe=at)},setFunc:function(at,_n,Bn){(W!==at||K!==_n||ge!==Bn)&&(r.stencilFunc(at,_n,Bn),W=at,K=_n,ge=Bn)},setOp:function(at,_n,Bn){(pe!==at||He!==_n||Et!==Bn)&&(r.stencilOp(at,_n,Bn),pe=at,He=_n,Et=Bn)},setLocked:function(at){D=at},setClear:function(at){Ot!==at&&(r.clearStencil(at),Ot=at)},reset:function(){D=!1,fe=null,W=null,K=null,ge=null,pe=null,He=null,Et=null,Ot=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,y=null,_=null,x=null,C=null,w=null,E=new ne(0,0,0),P=0,S=!1,M=null,I=null,B=null,O=null,H=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Q=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=Q>=2);let he=null,ve={};const Se=r.getParameter(r.SCISSOR_BOX),ze=r.getParameter(r.VIEWPORT),it=new nt().fromArray(Se),Y=new nt().fromArray(ze);function ae(D,fe,W,K){const ge=new Uint8Array(4),pe=r.createTexture();r.bindTexture(D,pe),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<W;He++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(fe,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D(fe+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return pe}const we={};we[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),we[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),we[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(r.DEPTH_TEST),a.setFunc(fs),ie(!1),xe(dc),le(r.CULL_FACE),L(Zn);function le(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function Ie(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Fe(D,fe){return u[D]!==fe?(r.bindFramebuffer(D,fe),u[D]=fe,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=fe),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ue(D,fe){let W=f,K=!1;if(D){W=d.get(fe),W===void 0&&(W=[],d.set(fe,W));const ge=D.textures;if(W.length!==ge.length||W[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,He=ge.length;pe<He;pe++)W[pe]=r.COLOR_ATTACHMENT0+pe;W.length=ge.length,K=!0}}else W[0]!==r.BACK&&(W[0]=r.BACK,K=!0);K&&r.drawBuffers(W)}function et(D){return m!==D?(r.useProgram(D),m=D,!0):!1}const J={[Ci]:r.FUNC_ADD,[Ad]:r.FUNC_SUBTRACT,[Rd]:r.FUNC_REVERSE_SUBTRACT};J[Cd]=r.MIN,J[Pd]=r.MAX;const re={[Ld]:r.ZERO,[Id]:r.ONE,[Dd]:r.SRC_COLOR,[Do]:r.SRC_ALPHA,[kd]:r.SRC_ALPHA_SATURATE,[Fd]:r.DST_COLOR,[Ud]:r.DST_ALPHA,[Nd]:r.ONE_MINUS_SRC_COLOR,[No]:r.ONE_MINUS_SRC_ALPHA,[Bd]:r.ONE_MINUS_DST_COLOR,[Od]:r.ONE_MINUS_DST_ALPHA,[zd]:r.CONSTANT_COLOR,[Hd]:r.ONE_MINUS_CONSTANT_COLOR,[Vd]:r.CONSTANT_ALPHA,[Gd]:r.ONE_MINUS_CONSTANT_ALPHA};function L(D,fe,W,K,ge,pe,He,Et,Ot,at){if(D===Zn){v===!0&&(Ie(r.BLEND),v=!1);return}if(v===!1&&(le(r.BLEND),v=!0),D!==Ed){if(D!==g||at!==S){if((p!==Ci||x!==Ci)&&(r.blendEquation(r.FUNC_ADD),p=Ci,x=Ci),at)switch(D){case os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xt:r.blendFunc(r.ONE,r.ONE);break;case fc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case pc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xt:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case fc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case pc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,_=null,C=null,w=null,E.set(0,0,0),P=0,g=D,S=at}return}ge=ge||fe,pe=pe||W,He=He||K,(fe!==p||ge!==x)&&(r.blendEquationSeparate(J[fe],J[ge]),p=fe,x=ge),(W!==y||K!==_||pe!==C||He!==w)&&(r.blendFuncSeparate(re[W],re[K],re[pe],re[He]),y=W,_=K,C=pe,w=He),(Et.equals(E)===!1||Ot!==P)&&(r.blendColor(Et.r,Et.g,Et.b,Ot),E.copy(Et),P=Ot),g=D,S=!1}function Pe(D,fe){D.side===Ut?Ie(r.CULL_FACE):le(r.CULL_FACE);let W=D.side===Xt;fe&&(W=!W),ie(W),D.blending===os&&D.transparent===!1?L(Zn):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const K=D.stencilWrite;o.setTest(K),K&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),De(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function ie(D){M!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),M=D)}function xe(D){D!==Sd?(le(r.CULL_FACE),D!==I&&(D===dc?r.cullFace(r.BACK):D===Td?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),I=D}function ce(D){D!==B&&(V&&r.lineWidth(D),B=D)}function De(D,fe,W){D?(le(r.POLYGON_OFFSET_FILL),(O!==fe||H!==W)&&(r.polygonOffset(fe,W),O=fe,H=W)):Ie(r.POLYGON_OFFSET_FILL)}function ye(D){D?le(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function R(D){D===void 0&&(D=r.TEXTURE0+X-1),he!==D&&(r.activeTexture(D),he=D)}function b(D,fe,W){W===void 0&&(he===null?W=r.TEXTURE0+X-1:W=he);let K=ve[W];K===void 0&&(K={type:void 0,texture:void 0},ve[W]=K),(K.type!==D||K.texture!==fe)&&(he!==W&&(r.activeTexture(W),he=W),r.bindTexture(D,fe||we[D]),K.type=D,K.texture=fe)}function F(){const D=ve[he];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(D){it.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),it.copy(D))}function be(D){Y.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Je(D,fe){let W=c.get(fe);W===void 0&&(W=new WeakMap,c.set(fe,W));let K=W.get(D);K===void 0&&(K=r.getUniformBlockIndex(fe,D.name),W.set(D,K))}function We(D,fe){const K=c.get(fe).get(D);l.get(fe)!==K&&(r.uniformBlockBinding(fe,K,D.__bindingPointIndex),l.set(fe,K))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},he=null,ve={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,y=null,_=null,x=null,C=null,w=null,E=new ne(0,0,0),P=0,S=!1,M=null,I=null,B=null,O=null,H=null,it.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Ie,bindFramebuffer:Fe,drawBuffers:Ue,useProgram:et,setBlending:L,setMaterial:Pe,setFlipSided:ie,setCullFace:xe,setLineWidth:ce,setPolygonOffset:De,setScissorTest:ye,activeTexture:R,bindTexture:b,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:ee,texImage2D:Me,texImage3D:Ne,updateUBOMapping:Je,uniformBlockBinding:We,texStorage2D:Ye,texStorage3D:se,texSubImage2D:j,texSubImage3D:Ee,compressedTexSubImage2D:de,compressedTexSubImage3D:_e,scissor:Oe,viewport:be,reset:dt}}function uh(r,e,t,n){const i=Sv(n);switch(t){case _u:return r*e;case Mu:return r*e;case bu:return r*e*2;case Nl:return r*e/i.components*i.byteLength;case Ul:return r*e/i.components*i.byteLength;case Su:return r*e*2/i.components*i.byteLength;case Ol:return r*e*2/i.components*i.byteLength;case xu:return r*e*3/i.components*i.byteLength;case pn:return r*e*4/i.components*i.byteLength;case Fl:return r*e*4/i.components*i.byteLength;case aa:case oa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case la:case ca:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $o:case qo:return Math.max(r,16)*Math.max(e,8)/4;case Wo:case Xo:return Math.max(r,8)*Math.max(e,8)/2;case jo:case Yo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ko:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case el:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case tl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case al:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ll:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case cl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case hl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ha:case ul:case dl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Tu:case fl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case pl:case ml:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sv(r){switch(r){case ei:case gu:return{byteLength:1,components:1};case or:case vu:case Jn:return{byteLength:2,components:1};case Il:case Dl:return{byteLength:2,components:4};case Di:case Ll:case wn:return{byteLength:4,components:1};case yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Tv(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Z,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return f?new OffscreenCanvas(R,b):hr("canvas")}function v(R,b,F){let q=1;const ee=ye(R);if((ee.width>F||ee.height>F)&&(q=F/Math.max(ee.width,ee.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(q*ee.width),Ee=Math.floor(q*ee.height);u===void 0&&(u=m(j,Ee));const de=b?m(j,Ee):u;return de.width=j,de.height=Ee,de.getContext("2d").drawImage(R,0,0,j,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+j+"x"+Ee+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(R,b,F,q,ee=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=b;if(b===r.RED&&(F===r.FLOAT&&(j=r.R32F),F===r.HALF_FLOAT&&(j=r.R16F),F===r.UNSIGNED_BYTE&&(j=r.R8)),b===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(j=r.R8UI),F===r.UNSIGNED_SHORT&&(j=r.R16UI),F===r.UNSIGNED_INT&&(j=r.R32UI),F===r.BYTE&&(j=r.R8I),F===r.SHORT&&(j=r.R16I),F===r.INT&&(j=r.R32I)),b===r.RG&&(F===r.FLOAT&&(j=r.RG32F),F===r.HALF_FLOAT&&(j=r.RG16F),F===r.UNSIGNED_BYTE&&(j=r.RG8)),b===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(j=r.RG8UI),F===r.UNSIGNED_SHORT&&(j=r.RG16UI),F===r.UNSIGNED_INT&&(j=r.RG32UI),F===r.BYTE&&(j=r.RG8I),F===r.SHORT&&(j=r.RG16I),F===r.INT&&(j=r.RG32I)),b===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(j=r.RGB8UI),F===r.UNSIGNED_SHORT&&(j=r.RGB16UI),F===r.UNSIGNED_INT&&(j=r.RGB32UI),F===r.BYTE&&(j=r.RGB8I),F===r.SHORT&&(j=r.RGB16I),F===r.INT&&(j=r.RGB32I)),b===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),F===r.UNSIGNED_INT&&(j=r.RGBA32UI),F===r.BYTE&&(j=r.RGBA8I),F===r.SHORT&&(j=r.RGBA16I),F===r.INT&&(j=r.RGBA32I)),b===r.RGB&&F===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),b===r.RGBA){const Ee=ee?Sa:qe.getTransfer(q);F===r.FLOAT&&(j=r.RGBA32F),F===r.HALF_FLOAT&&(j=r.RGBA16F),F===r.UNSIGNED_BYTE&&(j=Ee===ot?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(R,b){let F;return R?b===null||b===Di||b===vs?F=r.DEPTH24_STENCIL8:b===wn?F=r.DEPTH32F_STENCIL8:b===or&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Di||b===vs?F=r.DEPTH_COMPONENT24:b===wn?F=r.DEPTH_COMPONENT32F:b===or&&(F=r.DEPTH_COMPONENT16),F}function C(R,b){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==an?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function w(R){const b=R.target;b.removeEventListener("dispose",w),P(b),b.isVideoTexture&&h.delete(b)}function E(R){const b=R.target;b.removeEventListener("dispose",E),M(b)}function P(R){const b=n.get(R);if(b.__webglInit===void 0)return;const F=R.source,q=d.get(F);if(q){const ee=q[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(R),Object.keys(q).length===0&&d.delete(F)}n.remove(R)}function S(R){const b=n.get(R);r.deleteTexture(b.__webglTexture);const F=R.source,q=d.get(F);delete q[b.__cacheKey],a.memory.textures--}function M(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let ee=0;ee<b.__webglFramebuffer[q].length;ee++)r.deleteFramebuffer(b.__webglFramebuffer[q][ee]);else r.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)r.deleteFramebuffer(b.__webglFramebuffer[q]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const F=R.textures;for(let q=0,ee=F.length;q<ee;q++){const j=n.get(F[q]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(F[q])}n.remove(R)}let I=0;function B(){I=0}function O(){const R=I;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function H(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function X(R,b){const F=n.get(R);if(R.isVideoTexture&&ce(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,R,b);return}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+b)}function V(R,b){const F=n.get(R);if(R.version>0&&F.__version!==R.version){Y(F,R,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+b)}function Q(R,b){const F=n.get(R);if(R.version>0&&F.__version!==R.version){Y(F,R,b);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+b)}function G(R,b){const F=n.get(R);if(R.version>0&&F.__version!==R.version){ae(F,R,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+b)}const he={[gs]:r.REPEAT,[fi]:r.CLAMP_TO_EDGE,[fa]:r.MIRRORED_REPEAT},ve={[qt]:r.NEAREST,[mu]:r.NEAREST_MIPMAP_NEAREST,[Ys]:r.NEAREST_MIPMAP_LINEAR,[an]:r.LINEAR,[ra]:r.LINEAR_MIPMAP_NEAREST,[Yn]:r.LINEAR_MIPMAP_LINEAR},Se={[Qd]:r.NEVER,[af]:r.ALWAYS,[ef]:r.LESS,[Au]:r.LEQUAL,[tf]:r.EQUAL,[rf]:r.GEQUAL,[nf]:r.GREATER,[sf]:r.NOTEQUAL};function ze(R,b){if(b.type===wn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===an||b.magFilter===ra||b.magFilter===Ys||b.magFilter===Yn||b.minFilter===an||b.minFilter===ra||b.minFilter===Ys||b.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,he[b.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,he[b.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,he[b.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ve[b.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ve[b.minFilter]),b.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Se[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===qt||b.minFilter!==Ys&&b.minFilter!==Yn||b.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function it(R,b){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",w));const q=b.source;let ee=d.get(q);ee===void 0&&(ee={},d.set(q,ee));const j=H(b);if(j!==R.__cacheKey){ee[j]===void 0&&(ee[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ee[j].usedTimes++;const Ee=ee[R.__cacheKey];Ee!==void 0&&(ee[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&S(b)),R.__cacheKey=j,R.__webglTexture=ee[j].texture}return F}function Y(R,b,F){let q=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=r.TEXTURE_3D);const ee=it(R,b),j=b.source;t.bindTexture(q,R.__webglTexture,r.TEXTURE0+F);const Ee=n.get(j);if(j.version!==Ee.__version||ee===!0){t.activeTexture(r.TEXTURE0+F);const de=qe.getPrimaries(qe.workingColorSpace),_e=b.colorSpace===di?null:qe.getPrimaries(b.colorSpace),Ye=b.colorSpace===di||de===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let se=v(b.image,!1,i.maxTextureSize);se=De(b,se);const Me=s.convert(b.format,b.colorSpace),Ne=s.convert(b.type);let Oe=_(b.internalFormat,Me,Ne,b.colorSpace,b.isVideoTexture);ze(q,b);let be;const Je=b.mipmaps,We=b.isVideoTexture!==!0,dt=Ee.__version===void 0||ee===!0,D=j.dataReady,fe=C(b,se);if(b.isDepthTexture)Oe=x(b.format===ys,b.type),dt&&(We?t.texStorage2D(r.TEXTURE_2D,1,Oe,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,Oe,se.width,se.height,0,Me,Ne,null));else if(b.isDataTexture)if(Je.length>0){We&&dt&&t.texStorage2D(r.TEXTURE_2D,fe,Oe,Je[0].width,Je[0].height);for(let W=0,K=Je.length;W<K;W++)be=Je[W],We?D&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,be.width,be.height,Me,Ne,be.data):t.texImage2D(r.TEXTURE_2D,W,Oe,be.width,be.height,0,Me,Ne,be.data);b.generateMipmaps=!1}else We?(dt&&t.texStorage2D(r.TEXTURE_2D,fe,Oe,se.width,se.height),D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,Me,Ne,se.data)):t.texImage2D(r.TEXTURE_2D,0,Oe,se.width,se.height,0,Me,Ne,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){We&&dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,Oe,Je[0].width,Je[0].height,se.depth);for(let W=0,K=Je.length;W<K;W++)if(be=Je[W],b.format!==pn)if(Me!==null)if(We){if(D)if(b.layerUpdates.size>0){const ge=uh(be.width,be.height,b.format,b.type);for(const pe of b.layerUpdates){const He=be.data.subarray(pe*ge/be.data.BYTES_PER_ELEMENT,(pe+1)*ge/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,pe,be.width,be.height,1,Me,He)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,be.width,be.height,se.depth,Me,be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,Oe,be.width,be.height,se.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,be.width,be.height,se.depth,Me,Ne,be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,W,Oe,be.width,be.height,se.depth,0,Me,Ne,be.data)}else{We&&dt&&t.texStorage2D(r.TEXTURE_2D,fe,Oe,Je[0].width,Je[0].height);for(let W=0,K=Je.length;W<K;W++)be=Je[W],b.format!==pn?Me!==null?We?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,be.width,be.height,Me,be.data):t.compressedTexImage2D(r.TEXTURE_2D,W,Oe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?D&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,be.width,be.height,Me,Ne,be.data):t.texImage2D(r.TEXTURE_2D,W,Oe,be.width,be.height,0,Me,Ne,be.data)}else if(b.isDataArrayTexture)if(We){if(dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,Oe,se.width,se.height,se.depth),D)if(b.layerUpdates.size>0){const W=uh(se.width,se.height,b.format,b.type);for(const K of b.layerUpdates){const ge=se.data.subarray(K*W/se.data.BYTES_PER_ELEMENT,(K+1)*W/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,se.width,se.height,1,Me,Ne,ge)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,Ne,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,se.width,se.height,se.depth,0,Me,Ne,se.data);else if(b.isData3DTexture)We?(dt&&t.texStorage3D(r.TEXTURE_3D,fe,Oe,se.width,se.height,se.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,Ne,se.data)):t.texImage3D(r.TEXTURE_3D,0,Oe,se.width,se.height,se.depth,0,Me,Ne,se.data);else if(b.isFramebufferTexture){if(dt)if(We)t.texStorage2D(r.TEXTURE_2D,fe,Oe,se.width,se.height);else{let W=se.width,K=se.height;for(let ge=0;ge<fe;ge++)t.texImage2D(r.TEXTURE_2D,ge,Oe,W,K,0,Me,Ne,null),W>>=1,K>>=1}}else if(Je.length>0){if(We&&dt){const W=ye(Je[0]);t.texStorage2D(r.TEXTURE_2D,fe,Oe,W.width,W.height)}for(let W=0,K=Je.length;W<K;W++)be=Je[W],We?D&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,Me,Ne,be):t.texImage2D(r.TEXTURE_2D,W,Oe,Me,Ne,be);b.generateMipmaps=!1}else if(We){if(dt){const W=ye(se);t.texStorage2D(r.TEXTURE_2D,fe,Oe,W.width,W.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,Ne,se)}else t.texImage2D(r.TEXTURE_2D,0,Oe,Me,Ne,se);g(b)&&p(q),Ee.__version=j.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ae(R,b,F){if(b.image.length!==6)return;const q=it(R,b),ee=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+F);const j=n.get(ee);if(ee.version!==j.__version||q===!0){t.activeTexture(r.TEXTURE0+F);const Ee=qe.getPrimaries(qe.workingColorSpace),de=b.colorSpace===di?null:qe.getPrimaries(b.colorSpace),_e=b.colorSpace===di||Ee===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ye=b.isCompressedTexture||b.image[0].isCompressedTexture,se=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let K=0;K<6;K++)!Ye&&!se?Me[K]=v(b.image[K],!0,i.maxCubemapSize):Me[K]=se?b.image[K].image:b.image[K],Me[K]=De(b,Me[K]);const Ne=Me[0],Oe=s.convert(b.format,b.colorSpace),be=s.convert(b.type),Je=_(b.internalFormat,Oe,be,b.colorSpace),We=b.isVideoTexture!==!0,dt=j.__version===void 0||q===!0,D=ee.dataReady;let fe=C(b,Ne);ze(r.TEXTURE_CUBE_MAP,b);let W;if(Ye){We&&dt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,fe,Je,Ne.width,Ne.height);for(let K=0;K<6;K++){W=Me[K].mipmaps;for(let ge=0;ge<W.length;ge++){const pe=W[ge];b.format!==pn?Oe!==null?We?D&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,pe.width,pe.height,Oe,pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Je,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,pe.width,pe.height,Oe,be,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Je,pe.width,pe.height,0,Oe,be,pe.data)}}}else{if(W=b.mipmaps,We&&dt){W.length>0&&fe++;const K=ye(Me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,fe,Je,K.width,K.height)}for(let K=0;K<6;K++)if(se){We?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me[K].width,Me[K].height,Oe,be,Me[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Je,Me[K].width,Me[K].height,0,Oe,be,Me[K].data);for(let ge=0;ge<W.length;ge++){const He=W[ge].image[K].image;We?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,He.width,He.height,Oe,be,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Je,He.width,He.height,0,Oe,be,He.data)}}else{We?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Oe,be,Me[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Je,Oe,be,Me[K]);for(let ge=0;ge<W.length;ge++){const pe=W[ge];We?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,Oe,be,pe.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Je,Oe,be,pe.image[K])}}}g(b)&&p(r.TEXTURE_CUBE_MAP),j.__version=ee.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function we(R,b,F,q,ee,j){const Ee=s.convert(F.format,F.colorSpace),de=s.convert(F.type),_e=_(F.internalFormat,Ee,de,F.colorSpace),Ye=n.get(b),se=n.get(F);if(se.__renderTarget=b,!Ye.__hasExternalTextures){const Me=Math.max(1,b.width>>j),Ne=Math.max(1,b.height>>j);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,j,_e,Me,Ne,b.depth,0,Ee,de,null):t.texImage2D(ee,j,_e,Me,Ne,0,Ee,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),xe(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,ee,se.__webglTexture,0,ie(b)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,ee,se.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function le(R,b,F){if(r.bindRenderbuffer(r.RENDERBUFFER,R),b.depthBuffer){const q=b.depthTexture,ee=q&&q.isDepthTexture?q.type:null,j=x(b.stencilBuffer,ee),Ee=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=ie(b);xe(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,j,b.width,b.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,j,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,j,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,R)}else{const q=b.textures;for(let ee=0;ee<q.length;ee++){const j=q[ee],Ee=s.convert(j.format,j.colorSpace),de=s.convert(j.type),_e=_(j.internalFormat,Ee,de,j.colorSpace),Ye=ie(b);F&&xe(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,_e,b.width,b.height):xe(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye,_e,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,_e,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ie(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(b.depthTexture);q.__renderTarget=b,(!q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X(b.depthTexture,0);const ee=q.__webglTexture,j=ie(b);if(b.depthTexture.format===ls)xe(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(b.depthTexture.format===ys)xe(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Fe(R){const b=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){const ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",ee)};q.addEventListener("dispose",ee),b.__depthDisposeCallback=ee}b.__boundDepthTexture=q}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ie(b.__webglFramebuffer,R)}else if(F){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=r.createRenderbuffer(),le(b.__webglDepthbuffer[q],R,!1);else{const ee=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,j)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),le(b.__webglDepthbuffer,R,!1);else{const q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,ee)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(R,b,F){const q=n.get(R);b!==void 0&&we(q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Fe(R)}function et(R){const b=R.texture,F=n.get(R),q=n.get(b);R.addEventListener("dispose",E);const ee=R.textures,j=R.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=b.version,a.memory.textures++),j){F.__webglFramebuffer=[];for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[de]=[];for(let _e=0;_e<b.mipmaps.length;_e++)F.__webglFramebuffer[de][_e]=r.createFramebuffer()}else F.__webglFramebuffer[de]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)F.__webglFramebuffer[de]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(Ee)for(let de=0,_e=ee.length;de<_e;de++){const Ye=n.get(ee[de]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&xe(R)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){const _e=ee[de];F.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[de]);const Ye=s.convert(_e.format,_e.colorSpace),se=s.convert(_e.type),Me=_(_e.internalFormat,Ye,se,_e.colorSpace,R.isXRRenderTarget===!0),Ne=ie(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,Me,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,F.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),le(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),ze(r.TEXTURE_CUBE_MAP,b);for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)we(F.__webglFramebuffer[de][_e],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else we(F.__webglFramebuffer[de],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(b)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let de=0,_e=ee.length;de<_e;de++){const Ye=ee[de],se=n.get(Ye);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),ze(r.TEXTURE_2D,Ye),we(F.__webglFramebuffer,R,Ye,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,0),g(Ye)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,q.__webglTexture),ze(de,b),b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)we(F.__webglFramebuffer[_e],R,b,r.COLOR_ATTACHMENT0,de,_e);else we(F.__webglFramebuffer,R,b,r.COLOR_ATTACHMENT0,de,0);g(b)&&p(de),t.unbindTexture()}R.depthBuffer&&Fe(R)}function J(R){const b=R.textures;for(let F=0,q=b.length;F<q;F++){const ee=b[F];if(g(ee)){const j=y(R),Ee=n.get(ee).__webglTexture;t.bindTexture(j,Ee),p(j),t.unbindTexture()}}}const re=[],L=[];function Pe(R){if(R.samples>0){if(xe(R)===!1){const b=R.textures,F=R.width,q=R.height;let ee=r.COLOR_BUFFER_BIT;const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=n.get(R),de=b.length>1;if(de)for(let _e=0;_e<b.length;_e++)t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let _e=0;_e<b.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),de){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[_e]);const Ye=n.get(b[_e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ye,0)}r.blitFramebuffer(0,0,F,q,0,0,F,q,ee,r.NEAREST),l===!0&&(re.length=0,L.length=0,re.push(r.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(re.push(j),L.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let _e=0;_e<b.length;_e++){t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[_e]);const Ye=n.get(b[_e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,Ye,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function ie(R){return Math.min(i.maxSamples,R.samples)}function xe(R){const b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ce(R){const b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function De(R,b){const F=R.colorSpace,q=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Vt&&F!==di&&(qe.getTransfer(F)===ot?(q!==pn||ee!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),b}function ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=Ue,this.setupRenderTarget=et,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=xe}function wv(r,e){function t(n,i=di){let s;const a=qe.getTransfer(i);if(n===ei)return r.UNSIGNED_BYTE;if(n===Il)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===yu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===gu)return r.BYTE;if(n===vu)return r.SHORT;if(n===or)return r.UNSIGNED_SHORT;if(n===Ll)return r.INT;if(n===Di)return r.UNSIGNED_INT;if(n===wn)return r.FLOAT;if(n===Jn)return r.HALF_FLOAT;if(n===_u)return r.ALPHA;if(n===xu)return r.RGB;if(n===pn)return r.RGBA;if(n===Mu)return r.LUMINANCE;if(n===bu)return r.LUMINANCE_ALPHA;if(n===ls)return r.DEPTH_COMPONENT;if(n===ys)return r.DEPTH_STENCIL;if(n===Nl)return r.RED;if(n===Ul)return r.RED_INTEGER;if(n===Su)return r.RG;if(n===Ol)return r.RG_INTEGER;if(n===Fl)return r.RGBA_INTEGER;if(n===aa||n===oa||n===la||n===ca)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===aa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===aa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wo||n===$o||n===Xo||n===qo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Wo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$o)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jo||n===Yo||n===Ko)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===jo||n===Yo)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ko)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zo||n===Jo||n===Qo||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Zo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ha||n===ul||n===dl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ha)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tu||n===fl||n===pl||n===ml)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ha)return s.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ml)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Ev extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wt extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Av={type:"move"};class ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Av)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Rv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cv=`
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

}`;class Pv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Lt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pt({vertexShader:Rv,fragmentShader:Cv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lv extends ws{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const v=new Pv,g=t.getContextAttributes();let p=null,y=null;const _=[],x=[],C=new Z;let w=null;const E=new $t;E.viewport=new nt;const P=new $t;P.viewport=new nt;const S=[E,P],M=new Ev;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ae=_[Y];return ae===void 0&&(ae=new ao,_[Y]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Y){let ae=_[Y];return ae===void 0&&(ae=new ao,_[Y]=ae),ae.getGripSpace()},this.getHand=function(Y){let ae=_[Y];return ae===void 0&&(ae=new ao,_[Y]=ae),ae.getHandSpace()};function O(Y){const ae=x.indexOf(Y.inputSource);if(ae===-1)return;const we=_[ae];we!==void 0&&(we.update(Y.inputSource,Y.frame,c||a),we.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<_.length;Y++){const ae=x[Y];ae!==null&&(x[Y]=null,_[Y].disconnect(ae))}I=null,B=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",H),i.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const ae={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new En(f.framebufferWidth,f.framebufferHeight,{format:pn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ae=null,we=null,le=null;g.depth&&(le=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=g.stencil?ys:ls,we=g.stencil?vs:Di);const Ie={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ie),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new En(d.textureWidth,d.textureHeight,{format:pn,type:ei,depthTexture:new ku(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(Y){for(let ae=0;ae<Y.removed.length;ae++){const we=Y.removed[ae],le=x.indexOf(we);le>=0&&(x[le]=null,_[le].disconnect(we))}for(let ae=0;ae<Y.added.length;ae++){const we=Y.added[ae];let le=x.indexOf(we);if(le===-1){for(let Fe=0;Fe<_.length;Fe++)if(Fe>=x.length){x.push(we),le=Fe;break}else if(x[Fe]===null){x[Fe]=we,le=Fe;break}if(le===-1)break}const Ie=_[le];Ie&&Ie.connect(we)}}const V=new A,Q=new A;function G(Y,ae,we){V.setFromMatrixPosition(ae.matrixWorld),Q.setFromMatrixPosition(we.matrixWorld);const le=V.distanceTo(Q),Ie=ae.projectionMatrix.elements,Fe=we.projectionMatrix.elements,Ue=Ie[14]/(Ie[10]-1),et=Ie[14]/(Ie[10]+1),J=(Ie[9]+1)/Ie[5],re=(Ie[9]-1)/Ie[5],L=(Ie[8]-1)/Ie[0],Pe=(Fe[8]+1)/Fe[0],ie=Ue*L,xe=Ue*Pe,ce=le/(-L+Pe),De=ce*-L;if(ae.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(De),Y.translateZ(ce),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ie[10]===-1)Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const ye=Ue+ce,R=et+ce,b=ie-De,F=xe+(le-De),q=J*et/R*ye,ee=re*et/R*ye;Y.projectionMatrix.makePerspective(b,F,q,ee,ye,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function he(Y,ae){ae===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ae.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ae=Y.near,we=Y.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(we=v.depthFar)),M.near=P.near=E.near=ae,M.far=P.far=E.far=we,(I!==M.near||B!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,B=M.far),E.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,M.layers.mask=E.layers.mask|P.layers.mask;const le=Y.parent,Ie=M.cameras;he(M,le);for(let Fe=0;Fe<Ie.length;Fe++)he(Ie[Fe],le);Ie.length===2?G(M,E,P):M.projectionMatrix.copy(E.projectionMatrix),ve(Y,M,le)};function ve(Y,ae,we){we===null?Y.matrix.copy(ae.matrixWorld):(Y.matrix.copy(we.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ae.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=_s*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Se=null;function ze(Y,ae){if(h=ae.getViewerPose(c||a),m=ae,h!==null){const we=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let le=!1;we.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let Fe=0;Fe<we.length;Fe++){const Ue=we[Fe];let et=null;if(f!==null)et=f.getViewport(Ue);else{const re=u.getViewSubImage(d,Ue);et=re.viewport,Fe===0&&(e.setRenderTargetTextures(y,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(y))}let J=S[Fe];J===void 0&&(J=new $t,J.layers.enable(Fe),J.viewport=new nt,S[Fe]=J),J.matrix.fromArray(Ue.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Ue.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(et.x,et.y,et.width,et.height),Fe===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(J)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Fe=u.getDepthInformation(we[0]);Fe&&Fe.isValid&&Fe.texture&&v.init(e,Fe,i.renderState)}}for(let we=0;we<_.length;we++){const le=x[we],Ie=_[we];le!==null&&Ie!==void 0&&Ie.update(le,ae,c||a)}Se&&Se(Y,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),m=null}const it=new Bu;it.setAnimationLoop(ze),this.setAnimationLoop=function(Y){Se=Y},this.dispose=function(){}}}const Ti=new Zt,Iv=new ke;function Dv(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Uu(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,y,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Xt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Xt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),_=y.envMap,x=y.envMapRotation;_&&(g.envMap.value=_,Ti.copy(x),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),g.envMapRotation.value.setFromMatrix4(Iv.makeRotationFromEuler(Ti)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Nv(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function c(y,_){let x=i[y.id];x===void 0&&(m(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",g));const C=_.program;n.updateUBOMapping(y,C);const w=e.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function h(y){const _=u();y.__bindingPointIndex=_;const x=r.createBuffer(),C=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,C,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=i[y.id],x=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let w=0,E=x.length;w<E;w++){const P=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,M=P.length;S<M;S++){const I=P[S];if(f(I,w,S,C)===!0){const B=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let X=0;X<O.length;X++){const V=O[X],Q=v(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,B+H,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,H),H+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,_,x,C){const w=y.value,E=_+"_"+x;if(C[E]===void 0)return typeof w=="number"||typeof w=="boolean"?C[E]=w:C[E]=w.clone(),!0;{const P=C[E];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return C[E]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function m(y){const _=y.uniforms;let x=0;const C=16;for(let E=0,P=_.length;E<P;E++){const S=Array.isArray(_[E])?_[E]:[_[E]];for(let M=0,I=S.length;M<I;M++){const B=S[M],O=Array.isArray(B.value)?B.value:[B.value];for(let H=0,X=O.length;H<X;H++){const V=O[H],Q=v(V),G=x%C,he=G%Q.boundary,ve=G+he;x+=he,ve!==0&&C-ve<Q.storage&&(x+=C-ve),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=Q.storage}}}const w=x%C;return w>0&&(x+=C-w),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){const _=y.target;_.removeEventListener("dispose",g);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Uv{constructor(e={}){const{canvas:t=Tf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this.toneMapping=gi,this.toneMappingExposure=1;const x=this;let C=!1,w=0,E=0,P=null,S=-1,M=null;const I=new nt,B=new nt;let O=null;const H=new ne(0);let X=0,V=t.width,Q=t.height,G=1,he=null,ve=null;const Se=new nt(0,0,V,Q),ze=new nt(0,0,V,Q);let it=!1;const Y=new kl;let ae=!1,we=!1;const le=new ke,Ie=new ke,Fe=new A,Ue=new nt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function re(){return P===null?G:1}let L=n;function Pe(T,N){return t.getContext(T,N)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cl}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),L===null){const N="webgl2";if(L=Pe(N,T),L===null)throw Pe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ie,xe,ce,De,ye,R,b,F,q,ee,j,Ee,de,_e,Ye,se,Me,Ne,Oe,be,Je,We,dt,D;function fe(){ie=new zg(L),ie.init(),We=new wv(L,ie),xe=new Ng(L,ie,e,We),ce=new bv(L,ie),xe.reverseDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),De=new Gg(L),ye=new ov,R=new Tv(L,ie,ce,ye,xe,We,De),b=new Og(x),F=new kg(x),q=new Kf(L),dt=new Ig(L,q),ee=new Hg(L,q,De,dt),j=new $g(L,ee,q,De),Oe=new Wg(L,xe,R),se=new Ug(ye),Ee=new av(x,b,F,ie,xe,dt,se),de=new Dv(x,ye),_e=new cv,Ye=new mv(ie),Ne=new Lg(x,b,F,ce,j,f,l),Me=new xv(x,j,xe),D=new Nv(L,De,xe,ce),be=new Dg(L,ie,De),Je=new Vg(L,ie,De),De.programs=Ee.programs,x.capabilities=xe,x.extensions=ie,x.properties=ye,x.renderLists=_e,x.shadowMap=Me,x.state=ce,x.info=De}fe();const W=new Lv(x,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=ie.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ie.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(V,Q,!1))},this.getSize=function(T){return T.set(V,Q)},this.setSize=function(T,N,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,Q=N,t.width=Math.floor(T*G),t.height=Math.floor(N*G),k===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(V*G,Q*G).floor()},this.setDrawingBufferSize=function(T,N,k){V=T,Q=N,G=k,t.width=Math.floor(T*k),t.height=Math.floor(N*k),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Se)},this.setViewport=function(T,N,k,z){T.isVector4?Se.set(T.x,T.y,T.z,T.w):Se.set(T,N,k,z),ce.viewport(I.copy(Se).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(ze)},this.setScissor=function(T,N,k,z){T.isVector4?ze.set(T.x,T.y,T.z,T.w):ze.set(T,N,k,z),ce.scissor(B.copy(ze).multiplyScalar(G).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(T){ce.setScissorTest(it=T)},this.setOpaqueSort=function(T){he=T},this.setTransparentSort=function(T){ve=T},this.getClearColor=function(T){return T.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(T=!0,N=!0,k=!0){let z=0;if(T){let U=!1;if(P!==null){const oe=P.texture.format;U=oe===Fl||oe===Ol||oe===Ul}if(U){const oe=P.texture.type,me=oe===ei||oe===Di||oe===or||oe===vs||oe===Il||oe===Dl,Ae=Ne.getClearColor(),Re=Ne.getClearAlpha(),Be=Ae.r,Ve=Ae.g,Ce=Ae.b;me?(m[0]=Be,m[1]=Ve,m[2]=Ce,m[3]=Re,L.clearBufferuiv(L.COLOR,0,m)):(v[0]=Be,v[1]=Ve,v[2]=Ce,v[3]=Re,L.clearBufferiv(L.COLOR,0,v))}else z|=L.COLOR_BUFFER_BIT}N&&(z|=L.DEPTH_BUFFER_BIT),k&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),_e.dispose(),Ye.dispose(),ye.dispose(),b.dispose(),F.dispose(),j.dispose(),dt.dispose(),D.dispose(),Ee.dispose(),W.dispose(),W.removeEventListener("sessionstart",sc),W.removeEventListener("sessionend",rc),yi.stop()};function K(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=De.autoReset,N=Me.enabled,k=Me.autoUpdate,z=Me.needsUpdate,U=Me.type;fe(),De.autoReset=T,Me.enabled=N,Me.autoUpdate=k,Me.needsUpdate=z,Me.type=U}function pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function He(T){const N=T.target;N.removeEventListener("dispose",He),Et(N)}function Et(T){Ot(T),ye.remove(T)}function Ot(T){const N=ye.get(T).programs;N!==void 0&&(N.forEach(function(k){Ee.releaseProgram(k)}),T.isShaderMaterial&&Ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,k,z,U,oe){N===null&&(N=et);const me=U.isMesh&&U.matrixWorld.determinant()<0,Ae=xd(T,N,k,z,U);ce.setMaterial(z,me);let Re=k.index,Be=1;if(z.wireframe===!0){if(Re=ee.getWireframeAttribute(k),Re===void 0)return;Be=2}const Ve=k.drawRange,Ce=k.attributes.position;let tt=Ve.start*Be,ft=(Ve.start+Ve.count)*Be;oe!==null&&(tt=Math.max(tt,oe.start*Be),ft=Math.min(ft,(oe.start+oe.count)*Be)),Re!==null?(tt=Math.max(tt,0),ft=Math.min(ft,Re.count)):Ce!=null&&(tt=Math.max(tt,0),ft=Math.min(ft,Ce.count));const mt=ft-tt;if(mt<0||mt===1/0)return;dt.setup(U,z,Ae,k,Re);let jt,st=be;if(Re!==null&&(jt=q.get(Re),st=Je,st.setIndex(jt)),U.isMesh)z.wireframe===!0?(ce.setLineWidth(z.wireframeLinewidth*re()),st.setMode(L.LINES)):st.setMode(L.TRIANGLES);else if(U.isLine){let Le=z.linewidth;Le===void 0&&(Le=1),ce.setLineWidth(Le*re()),U.isLineSegments?st.setMode(L.LINES):U.isLineLoop?st.setMode(L.LINE_LOOP):st.setMode(L.LINE_STRIP)}else U.isPoints?st.setMode(L.POINTS):U.isSprite&&st.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)st.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))st.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Le=U._multiDrawStarts,kn=U._multiDrawCounts,rt=U._multiDrawCount,xn=Re?q.get(Re).bytesPerElement:1,Bi=ye.get(z).currentProgram.getUniforms();for(let Jt=0;Jt<rt;Jt++)Bi.setValue(L,"_gl_DrawID",Jt),st.render(Le[Jt]/xn,kn[Jt])}else if(U.isInstancedMesh)st.renderInstances(tt,mt,U.count);else if(k.isInstancedBufferGeometry){const Le=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,kn=Math.min(k.instanceCount,Le);st.renderInstances(tt,mt,kn)}else st.render(tt,mt)};function at(T,N,k){T.transparent===!0&&T.side===Ut&&T.forceSinglePass===!1?(T.side=Xt,T.needsUpdate=!0,br(T,N,k),T.side=Rn,T.needsUpdate=!0,br(T,N,k),T.side=Ut):br(T,N,k)}this.compile=function(T,N,k=null){k===null&&(k=T),p=Ye.get(k),p.init(N),_.push(p),k.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),T!==k&&T.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const z=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const oe=U.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){const Ae=oe[me];at(Ae,k,U),z.add(Ae)}else at(oe,k,U),z.add(oe)}),_.pop(),p=null,z},this.compileAsync=function(T,N,k=null){const z=this.compile(T,N,k);return new Promise(U=>{function oe(){if(z.forEach(function(me){ye.get(me).currentProgram.isReady()&&z.delete(me)}),z.size===0){U(T);return}setTimeout(oe,10)}ie.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let _n=null;function Bn(T){_n&&_n(T)}function sc(){yi.stop()}function rc(){yi.start()}const yi=new Bu;yi.setAnimationLoop(Bn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(T){_n=T,W.setAnimationLoop(T),T===null?yi.stop():yi.start()},W.addEventListener("sessionstart",sc),W.addEventListener("sessionend",rc),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,N,P),p=Ye.get(T,_.length),p.init(N),_.push(p),Ie.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(Ie),we=this.localClippingEnabled,ae=se.init(this.clippingPlanes,we),g=_e.get(T,y.length),g.init(),y.push(g),W.enabled===!0&&W.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&Ia(oe,N,-1/0,x.sortObjects)}Ia(T,N,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(he,ve),J=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,J&&Ne.addToRenderList(g,T),this.info.render.frame++,ae===!0&&se.beginShadows();const k=p.state.shadowsArray;Me.render(k,T,N),ae===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=g.opaque,U=g.transmissive;if(p.setupLights(),N.isArrayCamera){const oe=N.cameras;if(U.length>0)for(let me=0,Ae=oe.length;me<Ae;me++){const Re=oe[me];oc(z,U,T,Re)}J&&Ne.render(T);for(let me=0,Ae=oe.length;me<Ae;me++){const Re=oe[me];ac(g,T,Re,Re.viewport)}}else U.length>0&&oc(z,U,T,N),J&&Ne.render(T),ac(g,T,N);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(x,T,N),dt.resetDefaultState(),S=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],ae===!0&&se.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Ia(T,N,k,z){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){z&&Ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ie);const me=j.update(T),Ae=T.material;Ae.visible&&g.push(T,me,Ae,k,Ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const me=j.update(T),Ae=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ue.copy(T.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ue.copy(me.boundingSphere.center)),Ue.applyMatrix4(T.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ae)){const Re=me.groups;for(let Be=0,Ve=Re.length;Be<Ve;Be++){const Ce=Re[Be],tt=Ae[Ce.materialIndex];tt&&tt.visible&&g.push(T,me,tt,k,Ue.z,Ce)}}else Ae.visible&&g.push(T,me,Ae,k,Ue.z,null)}}const oe=T.children;for(let me=0,Ae=oe.length;me<Ae;me++)Ia(oe[me],N,k,z)}function ac(T,N,k,z){const U=T.opaque,oe=T.transmissive,me=T.transparent;p.setupLightsView(k),ae===!0&&se.setGlobalState(x.clippingPlanes,k),z&&ce.viewport(I.copy(z)),U.length>0&&Mr(U,N,k),oe.length>0&&Mr(oe,N,k),me.length>0&&Mr(me,N,k),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function oc(T,N,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new En(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Jn:ei,minFilter:Yn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const oe=p.state.transmissionRenderTarget[z.id],me=z.viewport||I;oe.setSize(me.z,me.w);const Ae=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(H),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),J&&Ne.render(k);const Re=x.toneMapping;x.toneMapping=gi;const Be=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),ae===!0&&se.setGlobalState(x.clippingPlanes,z),Mr(T,k,z),R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ce=0,tt=N.length;Ce<tt;Ce++){const ft=N[Ce],mt=ft.object,jt=ft.geometry,st=ft.material,Le=ft.group;if(st.side===Ut&&mt.layers.test(z.layers)){const kn=st.side;st.side=Xt,st.needsUpdate=!0,lc(mt,k,z,jt,st,Le),st.side=kn,st.needsUpdate=!0,Ve=!0}}Ve===!0&&(R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe))}x.setRenderTarget(Ae),x.setClearColor(H,X),Be!==void 0&&(z.viewport=Be),x.toneMapping=Re}function Mr(T,N,k){const z=N.isScene===!0?N.overrideMaterial:null;for(let U=0,oe=T.length;U<oe;U++){const me=T[U],Ae=me.object,Re=me.geometry,Be=z===null?me.material:z,Ve=me.group;Ae.layers.test(k.layers)&&lc(Ae,N,k,Re,Be,Ve)}}function lc(T,N,k,z,U,oe){T.onBeforeRender(x,N,k,z,U,oe),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(x,N,k,z,T,oe),U.transparent===!0&&U.side===Ut&&U.forceSinglePass===!1?(U.side=Xt,U.needsUpdate=!0,x.renderBufferDirect(k,N,z,U,T,oe),U.side=Rn,U.needsUpdate=!0,x.renderBufferDirect(k,N,z,U,T,oe),U.side=Ut):x.renderBufferDirect(k,N,z,U,T,oe),T.onAfterRender(x,N,k,z,U,oe)}function br(T,N,k){N.isScene!==!0&&(N=et);const z=ye.get(T),U=p.state.lights,oe=p.state.shadowsArray,me=U.state.version,Ae=Ee.getParameters(T,U.state,oe,N,k),Re=Ee.getProgramCacheKey(Ae);let Be=z.programs;z.environment=T.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(T.isMeshStandardMaterial?F:b).get(T.envMap||z.environment),z.envMapRotation=z.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",He),Be=new Map,z.programs=Be);let Ve=Be.get(Re);if(Ve!==void 0){if(z.currentProgram===Ve&&z.lightsStateVersion===me)return hc(T,Ae),Ve}else Ae.uniforms=Ee.getUniforms(T),T.onBeforeCompile(Ae,x),Ve=Ee.acquireProgram(Ae,Re),Be.set(Re,Ve),z.uniforms=Ae.uniforms;const Ce=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ce.clippingPlanes=se.uniform),hc(T,Ae),z.needsLights=bd(T),z.lightsStateVersion=me,z.needsLights&&(Ce.ambientLightColor.value=U.state.ambient,Ce.lightProbe.value=U.state.probe,Ce.directionalLights.value=U.state.directional,Ce.directionalLightShadows.value=U.state.directionalShadow,Ce.spotLights.value=U.state.spot,Ce.spotLightShadows.value=U.state.spotShadow,Ce.rectAreaLights.value=U.state.rectArea,Ce.ltc_1.value=U.state.rectAreaLTC1,Ce.ltc_2.value=U.state.rectAreaLTC2,Ce.pointLights.value=U.state.point,Ce.pointLightShadows.value=U.state.pointShadow,Ce.hemisphereLights.value=U.state.hemi,Ce.directionalShadowMap.value=U.state.directionalShadowMap,Ce.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ce.spotShadowMap.value=U.state.spotShadowMap,Ce.spotLightMatrix.value=U.state.spotLightMatrix,Ce.spotLightMap.value=U.state.spotLightMap,Ce.pointShadowMap.value=U.state.pointShadowMap,Ce.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ve,z.uniformsList=null,Ve}function cc(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=ua.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function hc(T,N){const k=ye.get(T);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function xd(T,N,k,z,U){N.isScene!==!0&&(N=et),R.resetTextureUnits();const oe=N.fog,me=z.isMeshStandardMaterial?N.environment:null,Ae=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Vt,Re=(z.isMeshStandardMaterial?F:b).get(z.envMap||me),Be=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ve=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ce=!!k.morphAttributes.position,tt=!!k.morphAttributes.normal,ft=!!k.morphAttributes.color;let mt=gi;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(mt=x.toneMapping);const jt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,st=jt!==void 0?jt.length:0,Le=ye.get(z),kn=p.state.lights;if(ae===!0&&(we===!0||T!==M)){const ln=T===M&&z.id===S;se.setState(z,T,ln)}let rt=!1;z.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==kn.state.version||Le.outputColorSpace!==Ae||U.isBatchedMesh&&Le.batching===!1||!U.isBatchedMesh&&Le.batching===!0||U.isBatchedMesh&&Le.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Le.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Le.instancing===!1||!U.isInstancedMesh&&Le.instancing===!0||U.isSkinnedMesh&&Le.skinning===!1||!U.isSkinnedMesh&&Le.skinning===!0||U.isInstancedMesh&&Le.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Le.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Le.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Le.instancingMorph===!1&&U.morphTexture!==null||Le.envMap!==Re||z.fog===!0&&Le.fog!==oe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==se.numPlanes||Le.numIntersection!==se.numIntersection)||Le.vertexAlphas!==Be||Le.vertexTangents!==Ve||Le.morphTargets!==Ce||Le.morphNormals!==tt||Le.morphColors!==ft||Le.toneMapping!==mt||Le.morphTargetsCount!==st)&&(rt=!0):(rt=!0,Le.__version=z.version);let xn=Le.currentProgram;rt===!0&&(xn=br(z,N,U));let Bi=!1,Jt=!1,Ls=!1;const gt=xn.getUniforms(),Cn=Le.uniforms;if(ce.useProgram(xn.program)&&(Bi=!0,Jt=!0,Ls=!0),z.id!==S&&(S=z.id,Jt=!0),Bi||M!==T){ce.buffers.depth.getReversed()?(le.copy(T.projectionMatrix),Ef(le),Af(le),gt.setValue(L,"projectionMatrix",le)):gt.setValue(L,"projectionMatrix",T.projectionMatrix),gt.setValue(L,"viewMatrix",T.matrixWorldInverse);const ii=gt.map.cameraPosition;ii!==void 0&&ii.setValue(L,Fe.setFromMatrixPosition(T.matrixWorld)),xe.logarithmicDepthBuffer&&gt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&gt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Jt=!0,Ls=!0)}if(U.isSkinnedMesh){gt.setOptional(L,U,"bindMatrix"),gt.setOptional(L,U,"bindMatrixInverse");const ln=U.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),gt.setValue(L,"boneTexture",ln.boneTexture,R))}U.isBatchedMesh&&(gt.setOptional(L,U,"batchingTexture"),gt.setValue(L,"batchingTexture",U._matricesTexture,R),gt.setOptional(L,U,"batchingIdTexture"),gt.setValue(L,"batchingIdTexture",U._indirectTexture,R),gt.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&gt.setValue(L,"batchingColorTexture",U._colorsTexture,R));const Is=k.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0)&&Oe.update(U,k,xn),(Jt||Le.receiveShadow!==U.receiveShadow)&&(Le.receiveShadow=U.receiveShadow,gt.setValue(L,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Cn.envMap.value=Re,Cn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(Cn.envMapIntensity.value=N.environmentIntensity),Jt&&(gt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&Md(Cn,Ls),oe&&z.fog===!0&&de.refreshFogUniforms(Cn,oe),de.refreshMaterialUniforms(Cn,z,G,Q,p.state.transmissionRenderTarget[T.id]),ua.upload(L,cc(Le),Cn,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ua.upload(L,cc(Le),Cn,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&gt.setValue(L,"center",U.center),gt.setValue(L,"modelViewMatrix",U.modelViewMatrix),gt.setValue(L,"normalMatrix",U.normalMatrix),gt.setValue(L,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const ln=z.uniformsGroups;for(let ii=0,si=ln.length;ii<si;ii++){const uc=ln[ii];D.update(uc,xn),D.bind(uc,xn)}}return xn}function Md(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function bd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,N,k){ye.get(T.texture).__webglTexture=N,ye.get(T.depthTexture).__webglTexture=k;const z=ye.get(T);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const k=ye.get(T);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,k=0){P=T,w=N,E=k;let z=!0,U=null,oe=!1,me=!1;if(T){const Re=ye.get(T);if(Re.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(Re.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Re.__hasExternalTextures)R.rebindTextures(T,ye.get(T.texture).__webglTexture,ye.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ce=T.depthTexture;if(Re.__boundDepthTexture!==Ce){if(Ce!==null&&ye.has(Ce)&&(T.width!==Ce.image.width||T.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(me=!0);const Ve=ye.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[N])?U=Ve[N][k]:U=Ve[N],oe=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?U=ye.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?U=Ve[k]:U=Ve,I.copy(T.viewport),B.copy(T.scissor),O=T.scissorTest}else I.copy(Se).multiplyScalar(G).floor(),B.copy(ze).multiplyScalar(G).floor(),O=it;if(ce.bindFramebuffer(L.FRAMEBUFFER,U)&&z&&ce.drawBuffers(T,U),ce.viewport(I),ce.scissor(B),ce.setScissorTest(O),oe){const Re=ye.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Re.__webglTexture,k)}else if(me){const Re=ye.get(T.texture),Be=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.__webglTexture,k||0,Be)}S=-1},this.readRenderTargetPixels=function(T,N,k,z,U,oe,me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(Ae=Ae[me]),Ae){ce.bindFramebuffer(L.FRAMEBUFFER,Ae);try{const Re=T.texture,Be=Re.format,Ve=Re.type;if(!xe.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-z&&k>=0&&k<=T.height-U&&L.readPixels(N,k,z,U,We.convert(Be),We.convert(Ve),oe)}finally{const Re=P!==null?ye.get(P).__webglFramebuffer:null;ce.bindFramebuffer(L.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(T,N,k,z,U,oe,me){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(Ae=Ae[me]),Ae){const Re=T.texture,Be=Re.format,Ve=Re.type;if(!xe.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-z&&k>=0&&k<=T.height-U){ce.bindFramebuffer(L.FRAMEBUFFER,Ae);const Ce=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.bufferData(L.PIXEL_PACK_BUFFER,oe.byteLength,L.STREAM_READ),L.readPixels(N,k,z,U,We.convert(Be),We.convert(Ve),0);const tt=P!==null?ye.get(P).__webglFramebuffer:null;ce.bindFramebuffer(L.FRAMEBUFFER,tt);const ft=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await wf(L,ft,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,oe),L.deleteBuffer(Ce),L.deleteSync(ft),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,k=0){T.isTexture!==!0&&(Ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);const z=Math.pow(2,-k),U=Math.floor(T.image.width*z),oe=Math.floor(T.image.height*z),me=N!==null?N.x:0,Ae=N!==null?N.y:0;R.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,me,Ae,U,oe),ce.unbindTexture()},this.copyTextureToTexture=function(T,N,k=null,z=null,U=0){T.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1],N=arguments[2],U=arguments[3]||0,k=null);let oe,me,Ae,Re,Be,Ve,Ce,tt,ft;const mt=T.isCompressedTexture?T.mipmaps[U]:T.image;k!==null?(oe=k.max.x-k.min.x,me=k.max.y-k.min.y,Ae=k.isBox3?k.max.z-k.min.z:1,Re=k.min.x,Be=k.min.y,Ve=k.isBox3?k.min.z:0):(oe=mt.width,me=mt.height,Ae=mt.depth||1,Re=0,Be=0,Ve=0),z!==null?(Ce=z.x,tt=z.y,ft=z.z):(Ce=0,tt=0,ft=0);const jt=We.convert(N.format),st=We.convert(N.type);let Le;N.isData3DTexture?(R.setTexture3D(N,0),Le=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),Le=L.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),Le=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const kn=L.getParameter(L.UNPACK_ROW_LENGTH),rt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),xn=L.getParameter(L.UNPACK_SKIP_PIXELS),Bi=L.getParameter(L.UNPACK_SKIP_ROWS),Jt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Re),L.pixelStorei(L.UNPACK_SKIP_ROWS,Be),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve);const Ls=T.isDataArrayTexture||T.isData3DTexture,gt=N.isDataArrayTexture||N.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Cn=ye.get(T),Is=ye.get(N),ln=ye.get(Cn.__renderTarget),ii=ye.get(Is.__renderTarget);ce.bindFramebuffer(L.READ_FRAMEBUFFER,ln.__webglFramebuffer),ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let si=0;si<Ae;si++)Ls&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.get(T).__webglTexture,U,Ve+si),T.isDepthTexture?(gt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.get(N).__webglTexture,U,ft+si),L.blitFramebuffer(Re,Be,oe,me,Ce,tt,oe,me,L.DEPTH_BUFFER_BIT,L.NEAREST)):gt?L.copyTexSubImage3D(Le,U,Ce,tt,ft+si,Re,Be,oe,me):L.copyTexSubImage2D(Le,U,Ce,tt,ft+si,Re,Be,oe,me);ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else gt?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Le,U,Ce,tt,ft,oe,me,Ae,jt,st,mt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Le,U,Ce,tt,ft,oe,me,Ae,jt,mt.data):L.texSubImage3D(Le,U,Ce,tt,ft,oe,me,Ae,jt,st,mt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Ce,tt,oe,me,jt,st,mt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Ce,tt,mt.width,mt.height,jt,mt.data):L.texSubImage2D(L.TEXTURE_2D,U,Ce,tt,oe,me,jt,st,mt);L.pixelStorei(L.UNPACK_ROW_LENGTH,kn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,rt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Bi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Jt),U===0&&N.generateMipmaps&&L.generateMipmap(Le),ce.unbindTexture()},this.copyTextureToTexture3D=function(T,N,k=null,z=null,U=0){return T.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,T=arguments[2],N=arguments[3],U=arguments[4]||0),Ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,k,z,U)},this.initRenderTarget=function(T){ye.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ce.unbindTexture()},this.resetState=function(){w=0,E=0,P=null,ce.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class Hl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ne(e),this.density=t}clone(){return new Hl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wu extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class $u{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vl,this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new A;class dr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new dr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sn extends An{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Qi;const Fs=new A,es=new A,ts=new A,ns=new Z,Bs=new Z,Xu=new ke,Wr=new A,ks=new A,$r=new A,dh=new Z,oo=new Z,fh=new Z;class fn extends _t{constructor(e=new sn){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new Mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $u(t,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new dr(n,3,0,!1)),Qi.setAttribute("uv",new dr(n,2,3,!1))}this.geometry=Qi,this.material=e,this.center=new Z(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),es.setFromMatrixScale(this.matrixWorld),Xu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&es.multiplyScalar(-ts.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Xr(Wr.set(-.5,-.5,0),ts,a,es,i,s),Xr(ks.set(.5,-.5,0),ts,a,es,i,s),Xr($r.set(.5,.5,0),ts,a,es,i,s),dh.set(0,0),oo.set(1,0),fh.set(1,1);let o=e.ray.intersectTriangle(Wr,ks,$r,!1,Fs);if(o===null&&(Xr(ks.set(-.5,.5,0),ts,a,es,i,s),oo.set(0,1),o=e.ray.intersectTriangle(Wr,$r,ks,!1,Fs),o===null))return;const l=e.ray.origin.distanceTo(Fs);l<e.near||l>e.far||t.push({distance:l,point:Fs.clone(),uv:dn.getInterpolation(Fs,Wr,ks,$r,dh,oo,fh,new Z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Xr(r,e,t,n,i,s){ns.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Bs.x=s*ns.x-i*ns.y,Bs.y=i*ns.x+s*ns.y):Bs.copy(ns),r.copy(e),r.x+=Bs.x,r.y+=Bs.y,r.applyMatrix4(Xu)}const ph=new A,mh=new nt,gh=new nt,Ov=new A,vh=new ke,qr=new A,lo=new Nn,yh=new ke,co=new Ta;class Fv extends ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mc,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qr),this.boundingBox.expandByPoint(qr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qr),this.boundingSphere.expandByPoint(qr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lo.copy(this.boundingSphere),lo.applyMatrix4(i),e.ray.intersectsSphere(lo)!==!1&&(yh.copy(i).invert(),co.copy(e.ray).applyMatrix4(yh),!(this.boundingBox!==null&&co.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,co)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;mh.fromBufferAttribute(i.attributes.skinIndex,e),gh.fromBufferAttribute(i.attributes.skinWeight,e),ph.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=gh.getComponent(s);if(a!==0){const o=mh.getComponent(s);vh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ov.copy(ph).applyMatrix4(vh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class qu extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ju extends Lt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=qt,h=qt,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _h=new ke,Bv=new ke;class Vl{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Bv;_h.multiplyMatrices(o,t[s]),_h.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Vl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ju(t,e,e,pn,wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new qu),this.bones.push(a),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class fr extends yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const is=new ke,xh=new ke,jr=[],Mh=new gn,kv=new ke,zs=new ut,Hs=new Nn;class Yu extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,kv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),Mh.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(Mh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),Hs.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),e.ray.intersectsSphere(Hs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,is),xh.multiplyMatrices(n,is),zs.matrixWorld=xh,zs.raycast(e,jr);for(let a=0,o=jr.length;a<o;a++){const l=jr[a];l.instanceId=s,l.object=this,t.push(l)}jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ju(new Float32Array(i*this.count),i,this.count,Nl,wn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ku extends An{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ma=new A,ga=new A,bh=new ke,Vs=new Ta,Yr=new Nn,ho=new A,Sh=new A;class Gl extends _t{constructor(e=new Mt,t=new Ku){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ma.fromBufferAttribute(t,i-1),ga.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ma.distanceTo(ga);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=s,e.ray.intersectsSphere(Yr)===!1)return;bh.copy(i).invert(),Vs.copy(e.ray).applyMatrix4(bh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=c){const p=h.getX(v),y=h.getX(v+1),_=Kr(this,e,Vs,l,p,y);_&&t.push(_)}if(this.isLineLoop){const v=h.getX(m-1),g=h.getX(f),p=Kr(this,e,Vs,l,v,g);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=c){const p=Kr(this,e,Vs,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Kr(this,e,Vs,l,m-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Kr(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(ma.fromBufferAttribute(a,i),ga.fromBufferAttribute(a,s),t.distanceSqToSegment(ma,ga,ho,Sh)>n)return;ho.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(ho);if(!(l<e.near||l>e.far))return{distance:l,point:Sh.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Th=new A,wh=new A;class zv extends Gl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Th.fromBufferAttribute(t,i),wh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Th.distanceTo(wh);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hv extends Gl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Zu extends An{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Eh=new ke,xl=new Ta,Zr=new Nn,Jr=new A;class Wl extends _t{constructor(e=new Mt,t=new Zu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=s,e.ray.intersectsSphere(Zr)===!1)return;Eh.copy(i).invert(),xl.copy(e.ray).applyMatrix4(Eh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,v=f;m<v;m++){const g=c.getX(m);Jr.fromBufferAttribute(u,g),Ah(Jr,g,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,v=f;m<v;m++)Jr.fromBufferAttribute(u,m),Ah(Jr,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ah(r,e,t,n,i,s,a){const o=xl.distanceSqToPoint(r);if(o<t){const l=new A;xl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ju extends Lt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Z:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,i=[],s=[],a=[],o=new A,l=new ke;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new A)}s[0]=new A,a[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Pt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Pt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $l extends Un{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Z){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Vv extends $l{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Xl(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Qr=new A,uo=new Xl,fo=new Xl,po=new Xl;class Gv extends Un{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Qr.subVectors(i[0],i[1]).add(i[0]),c=Qr);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Qr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),uo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,v,g),fo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,v,g),po.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(uo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),fo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),po.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(uo.calc(l),fo.calc(l),po.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Rh(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function Wv(r,e){const t=1-r;return t*t*e}function $v(r,e){return 2*(1-r)*r*e}function Xv(r,e){return r*r*e}function tr(r,e,t,n){return Wv(r,e)+$v(r,t)+Xv(r,n)}function qv(r,e){const t=1-r;return t*t*t*e}function jv(r,e){const t=1-r;return 3*t*t*r*e}function Yv(r,e){return 3*(1-r)*r*r*e}function Kv(r,e){return r*r*r*e}function nr(r,e,t,n,i){return qv(r,e)+jv(r,t)+Yv(r,n)+Kv(r,i)}class Qu extends Un{constructor(e=new Z,t=new Z,n=new Z,i=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Z){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(nr(e,i.x,s.x,a.x,o.x),nr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zv extends Un{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(nr(e,i.x,s.x,a.x,o.x),nr(e,i.y,s.y,a.y,o.y),nr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ed extends Un{constructor(e=new Z,t=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jv extends Un{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class td extends Un{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(tr(e,i.x,s.x,a.x),tr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qv extends Un{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(tr(e,i.x,s.x,a.x),tr(e,i.y,s.y,a.y),tr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nd extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Rh(o,l.x,c.x,h.x,u.x),Rh(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Z().fromArray(i))}return this}}var Ml=Object.freeze({__proto__:null,ArcCurve:Vv,CatmullRomCurve3:Gv,CubicBezierCurve:Qu,CubicBezierCurve3:Zv,EllipseCurve:$l,LineCurve:ed,LineCurve3:Jv,QuadraticBezierCurve:td,QuadraticBezierCurve3:Qv,SplineCurve:nd});class ey extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ml[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ml[i.type]().fromJSON(i))}return this}}class Ch extends ey{constructor(e){super(),this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ed(this.currentPoint.clone(),new Z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new td(this.currentPoint.clone(),new Z(e,t),new Z(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new Qu(this.currentPoint.clone(),new Z(e,t),new Z(n,i),new Z(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new nd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new $l(e,t,n,i,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ql extends Mt{constructor(e=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Pt(i,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/t,u=new A,d=new Z,f=new A,m=new A,v=new A;let g=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(m)}for(let y=0;y<=t;y++){const _=n+y*h*i,x=Math.sin(_),C=Math.cos(_);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*x,u.y=e[w].y,u.z=e[w].x*C,a.push(u.x,u.y,u.z),d.x=y/t,d.y=w/(e.length-1),o.push(d.x,d.y);const E=l[3*w+0]*x,P=l[3*w+1],S=l[3*w+0]*C;c.push(E,P,S)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){const x=_+y*e.length,C=x,w=x+e.length,E=x+e.length+1,P=x+1;s.push(C,w,P),s.push(E,P,w)}this.setIndex(s),this.setAttribute("position",new Qe(a,3)),this.setAttribute("uv",new Qe(o,2)),this.setAttribute("normal",new Qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.points,e.segments,e.phiStart,e.phiLength)}}class Aa extends Mt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new A,h=new Z;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(o,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class jl extends Mt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const v=[],g=n/2;let p=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function y(){const x=new A,C=new A;let w=0;const E=(t-e)/n;for(let P=0;P<=s;P++){const S=[],M=P/s,I=M*(t-e)+e;for(let B=0;B<=i;B++){const O=B/i,H=O*l+o,X=Math.sin(H),V=Math.cos(H);C.x=I*X,C.y=-M*n+g,C.z=I*V,u.push(C.x,C.y,C.z),x.set(X,E,V).normalize(),d.push(x.x,x.y,x.z),f.push(O,1-M),S.push(m++)}v.push(S)}for(let P=0;P<i;P++)for(let S=0;S<s;S++){const M=v[S][P],I=v[S+1][P],B=v[S+1][P+1],O=v[S][P+1];(e>0||S!==0)&&(h.push(M,I,O),w+=3),(t>0||S!==s-1)&&(h.push(I,B,O),w+=3)}c.addGroup(p,w,0),p+=w}function _(x){const C=m,w=new Z,E=new A;let P=0;const S=x===!0?e:t,M=x===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;const I=m;for(let B=0;B<=i;B++){const H=B/i*l+o,X=Math.cos(H),V=Math.sin(H);E.x=S*V,E.y=g*M,E.z=S*X,u.push(E.x,E.y,E.z),d.push(0,M,0),w.x=X*.5+.5,w.y=V*.5*M+.5,f.push(w.x,w.y),m++}for(let B=0;B<i;B++){const O=C+B,H=I+B;x===!0?h.push(H,H+1,O):h.push(H+1,H,O),P+=3}c.addGroup(p,P,x===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ra extends Mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(s.slice(),3)),this.setAttribute("uv",new Qe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const _=new A,x=new A,C=new A;for(let w=0;w<t.length;w+=3)f(t[w+0],_),f(t[w+1],x),f(t[w+2],C),l(_,x,C,y)}function l(y,_,x,C){const w=C+1,E=[];for(let P=0;P<=w;P++){E[P]=[];const S=y.clone().lerp(x,P/w),M=_.clone().lerp(x,P/w),I=w-P;for(let B=0;B<=I;B++)B===0&&P===w?E[P][B]=S:E[P][B]=S.clone().lerp(M,B/I)}for(let P=0;P<w;P++)for(let S=0;S<2*(w-P)-1;S++){const M=Math.floor(S/2);S%2===0?(d(E[P][M+1]),d(E[P+1][M]),d(E[P][M])):(d(E[P][M+1]),d(E[P+1][M+1]),d(E[P+1][M]))}}function c(y){const _=new A;for(let x=0;x<s.length;x+=3)_.x=s[x+0],_.y=s[x+1],_.z=s[x+2],_.normalize().multiplyScalar(y),s[x+0]=_.x,s[x+1]=_.y,s[x+2]=_.z}function h(){const y=new A;for(let _=0;_<s.length;_+=3){y.x=s[_+0],y.y=s[_+1],y.z=s[_+2];const x=g(y)/2/Math.PI+.5,C=p(y)/Math.PI+.5;a.push(x,1-C)}m(),u()}function u(){for(let y=0;y<a.length;y+=6){const _=a[y+0],x=a[y+2],C=a[y+4],w=Math.max(_,x,C),E=Math.min(_,x,C);w>.9&&E<.1&&(_<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,_){const x=y*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function m(){const y=new A,_=new A,x=new A,C=new A,w=new Z,E=new Z,P=new Z;for(let S=0,M=0;S<s.length;S+=9,M+=6){y.set(s[S+0],s[S+1],s[S+2]),_.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),w.set(a[M+0],a[M+1]),E.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),C.copy(y).add(_).add(x).divideScalar(3);const I=g(C);v(w,M+0,y,I),v(E,M+2,_,I),v(P,M+4,x,I)}}function v(y,_,x,C){C<0&&y.x===1&&(a[_]=y.x-1),x.x===0&&x.z===0&&(a[_]=C/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.vertices,e.indices,e.radius,e.details)}}class id extends Ch{constructor(e){super(e),this.uuid=mn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ch().fromJSON(i))}return this}}const ty={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=sd(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,f;if(n&&(s=ay(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let m=t;m<i;m+=t)u=r[m],d=r[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return pr(s,a,t,o,l,f,0),a}};function sd(r,e,t,n,i){let s,a;if(i===vy(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Ph(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Ph(s,r[s],r[s+1],a);return a&&Ca(a,a.next)&&(gr(a),a=a.next),a}function Ni(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ca(t,t.next)||Tt(t.prev,t,t.next)===0)){if(gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function pr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&uy(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?iy(r,n,i,s):ny(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),gr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=sy(Ni(r),e,t),pr(r,e,t,n,i,s,2)):a===2&&ry(r,e,t,n,i,s):pr(Ni(r),e,t,n,i,s,1);break}}}function ny(r){const e=r.prev,t=r,n=r.next;if(Tt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=i>s?i>a?i:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&as(i,o,s,l,a,c,m.x,m.y)&&Tt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function iy(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Tt(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,p=bl(f,m,e,t,n),y=bl(v,g,e,t,n);let _=r.prevZ,x=r.nextZ;for(;_&&_.z>=p&&x&&x.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&as(o,h,l,u,c,d,_.x,_.y)&&Tt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&as(o,h,l,u,c,d,x.x,x.y)&&Tt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&as(o,h,l,u,c,d,_.x,_.y)&&Tt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&as(o,h,l,u,c,d,x.x,x.y)&&Tt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function sy(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Ca(i,s)&&rd(i,n,n.next,s)&&mr(i,s)&&mr(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),gr(n),gr(n.next),n=r=s),n=n.next}while(n!==r);return Ni(n)}function ry(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&py(a,o)){let l=ad(a,o);a=Ni(a,a.next),l=Ni(l,l.next),pr(a,e,t,n,i,s,0),pr(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function ay(r,e,t,n){const i=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=sd(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(fy(c));for(i.sort(oy),s=0;s<i.length;s++)t=ly(i[s],t);return t}function oy(r,e){return r.x-e.x}function ly(r,e){const t=cy(r,e);if(!t)return e;const n=ad(t,r);return Ni(n,n.next),Ni(t,t.next)}function cy(r,e){let t=e,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&as(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(s-t.x),mr(t,r)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&hy(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function hy(r,e){return Tt(r.prev,r,e.prev)<0&&Tt(e.next,r,r.next)<0}function uy(r,e,t,n){let i=r;do i.z===0&&(i.z=bl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,dy(i)}function dy(r){let e,t,n,i,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(a>1);return r}function bl(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function fy(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function as(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function py(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!my(r,e)&&(mr(r,e)&&mr(e,r)&&gy(r,e)&&(Tt(r.prev,r,e.prev)||Tt(r,e.prev,e))||Ca(r,e)&&Tt(r.prev,r,r.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ca(r,e){return r.x===e.x&&r.y===e.y}function rd(r,e,t,n){const i=ta(Tt(r,e,t)),s=ta(Tt(r,e,n)),a=ta(Tt(t,n,r)),o=ta(Tt(t,n,e));return!!(i!==s&&a!==o||i===0&&ea(r,t,e)||s===0&&ea(r,n,e)||a===0&&ea(t,r,n)||o===0&&ea(t,e,n))}function ea(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ta(r){return r>0?1:r<0?-1:0}function my(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&rd(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function mr(r,e){return Tt(r.prev,r,r.next)<0?Tt(r,e,r.next)>=0&&Tt(r,r.prev,e)>=0:Tt(r,e,r.prev)<0||Tt(r,r.next,e)<0}function gy(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function ad(r,e){const t=new Sl(r.i,r.x,r.y),n=new Sl(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ph(r,e,t,n){const i=new Sl(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function gr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Sl(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vy(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class ir{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return ir.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Lh(e),Ih(n,e);let a=e.length;t.forEach(Lh);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Ih(n,t[l]);const o=ty.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Lh(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Ih(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Yl extends Mt{constructor(e=new id([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Qe(i,3)),this.setAttribute("uv",new Qe(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:yy;let _,x=!1,C,w,E,P;p&&(_=p.getSpacedPoints(h),x=!0,d=!1,C=p.computeFrenetFrames(h,!1),w=new A,E=new A,P=new A),d||(g=0,f=0,m=0,v=0);const S=o.extractPoints(c);let M=S.shape;const I=S.holes;if(!ir.isClockWise(M)){M=M.reverse();for(let J=0,re=I.length;J<re;J++){const L=I[J];ir.isClockWise(L)&&(I[J]=L.reverse())}}const O=ir.triangulateShape(M,I),H=M;for(let J=0,re=I.length;J<re;J++){const L=I[J];M=M.concat(L)}function X(J,re,L){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(re,L)}const V=M.length,Q=O.length;function G(J,re,L){let Pe,ie,xe;const ce=J.x-re.x,De=J.y-re.y,ye=L.x-J.x,R=L.y-J.y,b=ce*ce+De*De,F=ce*R-De*ye;if(Math.abs(F)>Number.EPSILON){const q=Math.sqrt(b),ee=Math.sqrt(ye*ye+R*R),j=re.x-De/q,Ee=re.y+ce/q,de=L.x-R/ee,_e=L.y+ye/ee,Ye=((de-j)*R-(_e-Ee)*ye)/(ce*R-De*ye);Pe=j+ce*Ye-J.x,ie=Ee+De*Ye-J.y;const se=Pe*Pe+ie*ie;if(se<=2)return new Z(Pe,ie);xe=Math.sqrt(se/2)}else{let q=!1;ce>Number.EPSILON?ye>Number.EPSILON&&(q=!0):ce<-Number.EPSILON?ye<-Number.EPSILON&&(q=!0):Math.sign(De)===Math.sign(R)&&(q=!0),q?(Pe=-De,ie=ce,xe=Math.sqrt(b)):(Pe=ce,ie=De,xe=Math.sqrt(b/2))}return new Z(Pe/xe,ie/xe)}const he=[];for(let J=0,re=H.length,L=re-1,Pe=J+1;J<re;J++,L++,Pe++)L===re&&(L=0),Pe===re&&(Pe=0),he[J]=G(H[J],H[L],H[Pe]);const ve=[];let Se,ze=he.concat();for(let J=0,re=I.length;J<re;J++){const L=I[J];Se=[];for(let Pe=0,ie=L.length,xe=ie-1,ce=Pe+1;Pe<ie;Pe++,xe++,ce++)xe===ie&&(xe=0),ce===ie&&(ce=0),Se[Pe]=G(L[Pe],L[xe],L[ce]);ve.push(Se),ze=ze.concat(Se)}for(let J=0;J<g;J++){const re=J/g,L=f*Math.cos(re*Math.PI/2),Pe=m*Math.sin(re*Math.PI/2)+v;for(let ie=0,xe=H.length;ie<xe;ie++){const ce=X(H[ie],he[ie],Pe);le(ce.x,ce.y,-L)}for(let ie=0,xe=I.length;ie<xe;ie++){const ce=I[ie];Se=ve[ie];for(let De=0,ye=ce.length;De<ye;De++){const R=X(ce[De],Se[De],Pe);le(R.x,R.y,-L)}}}const it=m+v;for(let J=0;J<V;J++){const re=d?X(M[J],ze[J],it):M[J];x?(E.copy(C.normals[0]).multiplyScalar(re.x),w.copy(C.binormals[0]).multiplyScalar(re.y),P.copy(_[0]).add(E).add(w),le(P.x,P.y,P.z)):le(re.x,re.y,0)}for(let J=1;J<=h;J++)for(let re=0;re<V;re++){const L=d?X(M[re],ze[re],it):M[re];x?(E.copy(C.normals[J]).multiplyScalar(L.x),w.copy(C.binormals[J]).multiplyScalar(L.y),P.copy(_[J]).add(E).add(w),le(P.x,P.y,P.z)):le(L.x,L.y,u/h*J)}for(let J=g-1;J>=0;J--){const re=J/g,L=f*Math.cos(re*Math.PI/2),Pe=m*Math.sin(re*Math.PI/2)+v;for(let ie=0,xe=H.length;ie<xe;ie++){const ce=X(H[ie],he[ie],Pe);le(ce.x,ce.y,u+L)}for(let ie=0,xe=I.length;ie<xe;ie++){const ce=I[ie];Se=ve[ie];for(let De=0,ye=ce.length;De<ye;De++){const R=X(ce[De],Se[De],Pe);x?le(R.x,R.y+_[h-1].y,_[h-1].x+L):le(R.x,R.y,u+L)}}}Y(),ae();function Y(){const J=i.length/3;if(d){let re=0,L=V*re;for(let Pe=0;Pe<Q;Pe++){const ie=O[Pe];Ie(ie[2]+L,ie[1]+L,ie[0]+L)}re=h+g*2,L=V*re;for(let Pe=0;Pe<Q;Pe++){const ie=O[Pe];Ie(ie[0]+L,ie[1]+L,ie[2]+L)}}else{for(let re=0;re<Q;re++){const L=O[re];Ie(L[2],L[1],L[0])}for(let re=0;re<Q;re++){const L=O[re];Ie(L[0]+V*h,L[1]+V*h,L[2]+V*h)}}n.addGroup(J,i.length/3-J,0)}function ae(){const J=i.length/3;let re=0;we(H,re),re+=H.length;for(let L=0,Pe=I.length;L<Pe;L++){const ie=I[L];we(ie,re),re+=ie.length}n.addGroup(J,i.length/3-J,1)}function we(J,re){let L=J.length;for(;--L>=0;){const Pe=L;let ie=L-1;ie<0&&(ie=J.length-1);for(let xe=0,ce=h+g*2;xe<ce;xe++){const De=V*xe,ye=V*(xe+1),R=re+Pe+De,b=re+ie+De,F=re+ie+ye,q=re+Pe+ye;Fe(R,b,F,q)}}}function le(J,re,L){l.push(J),l.push(re),l.push(L)}function Ie(J,re,L){Ue(J),Ue(re),Ue(L);const Pe=i.length/3,ie=y.generateTopUV(n,i,Pe-3,Pe-2,Pe-1);et(ie[0]),et(ie[1]),et(ie[2])}function Fe(J,re,L,Pe){Ue(J),Ue(re),Ue(Pe),Ue(re),Ue(L),Ue(Pe);const ie=i.length/3,xe=y.generateSideWallUV(n,i,ie-6,ie-3,ie-2,ie-1);et(xe[0]),et(xe[1]),et(xe[3]),et(xe[1]),et(xe[2]),et(xe[3])}function Ue(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function et(J){s.push(J.x),s.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return _y(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ml[i.type]().fromJSON(i)),new Yl(n,e.options)}}const yy={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Z(s,a),new Z(o,l),new Z(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],v=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Z(a,1-l),new Z(c,1-u),new Z(d,1-m),new Z(v,1-p)]:[new Z(o,1-l),new Z(h,1-u),new Z(f,1-m),new Z(g,1-p)]}};function _y(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Kl extends Ra{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Kl(e.radius,e.detail)}}class Zl extends Ra{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zl(e.radius,e.detail)}}class vr extends Mt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new A,m=new Z;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){const p=s+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<i;v++){const g=v*(n+1);for(let p=0;p<n;p++){const y=p+g,_=y,x=y+n+1,C=y+n+2,w=y+1;o.push(_,x,w),o.push(x,C,w)}}this.setIndex(o),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ht extends Mt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new A,d=new A,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const w=C/t;u.x=-e*Math.cos(i+w*s)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(i+w*s)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(w+x,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const _=h[p][y+1],x=h[p][y],C=h[p+1][y],w=h[p+1][y+1];(p!==0||a>0)&&f.push(_,x,w),(p!==n-1||l<Math.PI)&&f.push(x,C,w)}this.setIndex(f),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yt extends Mt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const v=m/i*s,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const v=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,y=(i+1)*f+m;a.push(v,g,y),a.push(g,p,y)}this.setIndex(a),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class xy extends pt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class In extends An{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eu,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class On extends In{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function na(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function My(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function by(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Dh(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function od(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class xr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Sy extends xr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gc,endingEnd:gc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case vc:s=e,o=2*t-n;break;case yc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vc:a=e,l=2*n-t;break;case yc:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,y=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,_=(-1-f)*g+(1.5+f)*v+.5*m,x=f*g-f*v;for(let C=0;C!==o;++C)s[C]=p*a[h+C]+y*a[c+C]+_*a[l+C]+x*a[u+C];return s}}class Ty extends xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class wy extends xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=na(t,this.TimeBufferType),this.values=na(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:na(e.times,Array),values:na(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ty(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case cr:t=this.InterpolantFactoryMethodLinear;break;case Da:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return cr;case this.InterpolantFactoryMethodSmooth:return Da}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&My(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Da,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const v=t[u+m];if(v!==t[d+m]||v!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=cr;class Rs extends Fn{constructor(e,t,n){super(e,t,n)}}Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=lr;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class ld extends Fn{}ld.prototype.ValueTypeName="color";class Ms extends Fn{}Ms.prototype.ValueTypeName="number";class Ey extends xr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)yn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class bs extends Fn{InterpolantFactoryMethodLinear(e){return new Ey(this.times,this.values,this.getValueSize(),e)}}bs.prototype.ValueTypeName="quaternion";bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends Fn{constructor(e,t,n){super(e,t,n)}}Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=lr;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends Fn{}Ss.prototype.ValueTypeName="vector";class Ay{constructor(e="",t=-1,n=[],i=jd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Cy(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Fn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=by(l);l=Dh(l,1,h),c=Dh(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ms(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,v){if(f.length!==0){const g=[],p=[];od(f,g,p,m),g.length!==0&&v.push(new u(d,g,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(const v in f){const g=[],p=[];for(let y=0;y!==d[m].morphTargets.length;++y){const _=d[m];g.push(_.time),p.push(_.morphTarget===v?1:0)}i.push(new Ms(".morphTargetInfluence["+v+"]",g,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(Ss,f+".position",d,"pos",i),n(bs,f+".quaternion",d,"rot",i),n(Ss,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ry(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ms;case"vector":case"vector2":case"vector3":case"vector4":return Ss;case"color":return ld;case"quaternion":return bs;case"bool":case"boolean":return Rs;case"string":return Cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Cy(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ry(r.type);if(r.times===void 0){const t=[],n=[];od(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const pi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Py{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const Ly=new Py;class Oi{constructor(e){this.manager=e!==void 0?e:Ly,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Oi.DEFAULT_MATERIAL_NAME="__DEFAULT";const $n={};class Iy extends Error{constructor(e,t){super(e),this.response=t}}class va extends Oi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=pi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:n,onError:i});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=$n[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let v=0;const g=new ReadableStream({start(p){y();function y(){u.read().then(({done:_,value:x})=>{if(_)p.close();else{v+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let w=0,E=h.length;w<E;w++){const P=h[w];P.onProgress&&P.onProgress(C)}p.enqueue(x),y()}},_=>{p.error(_)})}}});return new Response(g)}else throw new Iy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{pi.add(e,c);const h=$n[e];delete $n[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=$n[e];if(h===void 0)throw this.manager.itemError(e),c;delete $n[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Dy extends Oi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=pi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=hr("img");function l(){h(),pi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Ny extends Oi{constructor(e){super(e)}load(e,t,n,i){const s=new Lt,a=new Dy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Pa extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Uy extends Pa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const mo=new ke,Nh=new A,Uh=new A;class Jl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kl,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nh),Uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uh),t.updateMatrixWorld(),mo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Oy extends Jl{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=_s*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Fy extends Pa{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Oy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Oh=new ke,Gs=new A,go=new A;class By extends Jl{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Gs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gs),go.copy(n.position),go.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(go),n.updateMatrixWorld(),i.makeTranslation(-Gs.x,-Gs.y,-Gs.z),Oh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh)}}class cd extends Pa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new By}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ky extends Jl{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tl extends Pa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new ky}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class zy extends Oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=pi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return pi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),pi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});pi.add(e,l),s.manager.itemStart(e)}}class Hy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Fh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fh(){return performance.now()}const Ql="\\[\\]\\.:\\/",Vy=new RegExp("["+Ql+"]","g"),ec="[^"+Ql+"]",Gy="[^"+Ql.replace("\\.","")+"]",Wy=/((?:WC+[\/:])*)/.source.replace("WC",ec),$y=/(WCOD+)?/.source.replace("WCOD",Gy),Xy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ec),qy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ec),jy=new RegExp("^"+Wy+$y+Xy+qy+"$"),Yy=["material","materials","bones","map"];class Ky{constructor(e,t,n){const i=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ct{constructor(e,t,n){this.path=t,this.parsedPath=n||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,n):new ct(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vy,"")}static parseTrackName(e){const t=jy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Yy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=Ky;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);function Zy(r,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=r.getIndex(),i=r.getAttribute("position"),s=n?n.count:i.count;let a=0;const o=Object.keys(r.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,_=o.length;y<_;y++){const x=o[y],C=r.attributes[x];l[x]=new C.constructor(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);const w=r.morphAttributes[x];w&&(c[x]||(c[x]=[]),w.forEach((E,P)=>{const S=new E.array.constructor(E.count*E.itemSize);c[x][P]=new E.constructor(S,E.itemSize,E.normalized)}))}const f=e*.5,m=Math.log10(1/e),v=Math.pow(10,m),g=f*v;for(let y=0;y<s;y++){const _=n?n.getX(y):y;let x="";for(let C=0,w=o.length;C<w;C++){const E=o[C],P=r.getAttribute(E),S=P.itemSize;for(let M=0;M<S;M++)x+=`${~~(P[u[M]](_)*v+g)},`}if(x in t)h.push(t[x]);else{for(let C=0,w=o.length;C<w;C++){const E=o[C],P=r.getAttribute(E),S=r.morphAttributes[E],M=P.itemSize,I=l[E],B=c[E];for(let O=0;O<M;O++){const H=u[O],X=d[O];if(I[X](a,P[H](_)),S)for(let V=0,Q=S.length;V<Q;V++)B[V][X](a,S[V][H](_))}}t[x]=a,h.push(a),a++}}const p=r.clone();for(const y in r.attributes){const _=l[y];if(p.setAttribute(y,new _.constructor(_.array.slice(0,a*_.itemSize),_.itemSize,_.normalized)),y in c)for(let x=0;x<c[y].length;x++){const C=c[y][x];p.morphAttributes[y][x]=new C.constructor(C.array.slice(0,a*C.itemSize),C.itemSize,C.normalized)}}return p.setIndex(h),p}function Bh(r,e){if(e===Yd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===gl||e===wu){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===gl)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Jy extends Oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new i_(t)}),this.register(function(t){return new s_(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new p_(t)}),this.register(function(t){return new m_(t)}),this.register(function(t){return new a_(t)}),this.register(function(t){return new o_(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new c_(t)}),this.register(function(t){return new n_(t)}),this.register(function(t){return new h_(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new u_(t)}),this.register(function(t){return new e_(t)}),this.register(function(t){return new g_(t)}),this.register(function(t){return new v_(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=sr.extractUrlBase(e);a=sr.resolveURL(c,this.path)}else a=sr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new va(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===hd){try{a[je.KHR_BINARY_GLTF]=new y_(e)}catch(u){i&&i(u);return}s=JSON.parse(a[je.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new L_(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:a[u]=new t_;break;case je.KHR_DRACO_MESH_COMPRESSION:a[u]=new __(s,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:a[u]=new x_;break;case je.KHR_MESH_QUANTIZATION:a[u]=new M_;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Qy(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class e_{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new ne(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Vt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Tl(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new cd(h),c.distance=u;break;case"spot":c=new Fy(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,jn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class t_{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Kt}extendParams(e,t,n){const i=[];e.color=new ne(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Vt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,bt))}return Promise.all(i)}}class n_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class i_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Z(o,o)}return Promise.all(s)}}class s_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class r_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class a_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Vt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,bt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class o_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class l_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ne().setRGB(o[0],o[1],o[2],Vt),Promise.all(s)}}class c_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class h_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ne().setRGB(o[0],o[1],o[2],Vt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,bt)),Promise.all(s)}}class u_{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class d_{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class f_{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class p_{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class m_{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class g_{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class v_{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==un.TRIANGLES&&c.mode!==un.TRIANGLE_STRIP&&c.mode!==un.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const v=new ke,g=new A,p=new yn,y=new A(1,1,1),_=new Yu(m.geometry,m.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),_.setMatrixAt(x,v.compose(g,p,y));for(const x in l)if(x==="_COLOR_0"){const C=l[x];_.instanceColor=new fr(C.array,C.itemSize,C.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,l[x]);_t.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const hd="glTF",Ws=12,kh={JSON:1313821514,BIN:5130562};class y_{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ws),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ws,s=new DataView(e,Ws);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===kh.JSON){const c=new Uint8Array(e,Ws+a,o);this.content=n.decode(c)}else if(l===kh.BIN){const c=Ws+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class __{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=wl[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=wl[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=hs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const v=f.attributes[m],g=l[m];g!==void 0&&(v.normalized=g)}u(f)},o,c,Vt,d)})})}}class x_{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class M_{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class ud extends xr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,v=m-c,g=-2*f+3*d,p=f-d,y=1-g,_=p-d+u;for(let x=0;x!==o;x++){const C=a[v+x+o],w=a[v+x+l]*h,E=a[m+x+o],P=a[m+x]*h;s[x]=y*C+_*w+g*E+p*P}return s}}const b_=new yn;class S_ extends ud{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return b_.fromArray(s).normalize().toArray(s),s}}const un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zh={9728:qt,9729:an,9984:mu,9985:ra,9986:Ys,9987:Yn},Hh={33071:fi,33648:fa,10497:gs},vo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},T_={CUBICSPLINE:void 0,LINEAR:cr,STEP:lr},yo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function w_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new In({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Rn})),r.DefaultMaterial}function wi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function jn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function E_(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function A_(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function R_(r){let e;const t=r.extensions&&r.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+_o(t.attributes):e=r.indices+":"+_o(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+_o(r.targets[n]);return e}function _o(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function El(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function C_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const P_=new ke;class L_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Ny(this.options.manager):this.textureLoader=new zy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new va(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return wi(s,o,i),jn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(sr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=vo[i.type],o=hs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new yt(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=vo[i.type],c=hs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let v,g;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=t.cache.get(y);_||(v=new c(o,p*f,i.count*f/h),_=new $u(v,f/h),t.cache.add(y,_)),g=new dr(_,l,d%f/h,m)}else o===null?v=new c(i.count*l):v=new c(o,d,i.count*l),g=new yt(v,l,m);if(i.sparse!==void 0){const p=vo.SCALAR,y=hs[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,C=new y(a[1],_,i.sparse.count*p),w=new c(a[2],x,i.sparse.count*l);o!==null&&(g=new yt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,P=C.length;E<P;E++){const S=C[E];if(g.setX(S,w[E*l]),l>=2&&g.setY(S,w[E*l+1]),l>=3&&g.setZ(S,w[E*l+2]),l>=4&&g.setW(S,w[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=zh[d.magFilter]||an,h.minFilter=zh[d.minFilter]||Yn,h.wrapS=Hh[d.wrapS]||gs,h.wrapT=Hh[d.wrapT]||gs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qt&&h.minFilter!==an,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(v){const g=new Lt(v);g.needsUpdate=!0,d(g)}),t.load(sr.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),jn(u,a),u.userData.mimeType=a.mimeType||C_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Zu,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ku,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return In}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const u=i[je.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new ne(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Vt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,bt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Ut);const h=s.alphaMode||yo.OPAQUE;if(h===yo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===yo.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Kt&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Z(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Kt&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Kt){const u=s.emissiveFactor;o.emissive=new ne().setRGB(u[0],u[1],u[2],Vt)}return s.emissiveTexture!==void 0&&a!==Kt&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,bt)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),jn(u,s),t.associations.set(u,{materials:e}),s.extensions&&wi(i,u,s),u})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Vh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=R_(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Vh(new Mt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?w_(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const v=h[f],g=a[f];let p;const y=c[f];if(g.mode===un.TRIANGLES||g.mode===un.TRIANGLE_STRIP||g.mode===un.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Fv(v,y):new ut(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===un.TRIANGLE_STRIP?p.geometry=Bh(p.geometry,wu):g.mode===un.TRIANGLE_FAN&&(p.geometry=Bh(p.geometry,gl));else if(g.mode===un.LINES)p=new zv(v,y);else if(g.mode===un.LINE_STRIP)p=new Gl(v,y);else if(g.mode===un.LINE_LOOP)p=new Hv(v,y);else if(g.mode===un.POINTS)p=new Wl(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&A_(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),jn(p,s),g.extensions&&wi(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&wi(i,u[0],s),u[0];const d=new wt;s.extensions&&wi(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(Sf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new wa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new ke;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Vl(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],v=f.target,g=v.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,y=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(m),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],v=u[3],g=u[4],p=[];for(let y=0,_=d.length;y<_;y++){const x=d[y],C=f[y],w=m[y],E=v[y],P=g[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,C,w,E,P);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new Ay(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,P_)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new qu:c.length>1?h=new wt:c.length===1?h=c[0]:h=new _t,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),jn(h,s),s.extensions&&wi(n,h,s),s.matrix!==void 0){const u=new ke;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new wt;n.name&&(s.name=i.createUniqueName(n.name)),jn(s,n),n.extensions&&wi(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof An||d instanceof Lt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];ui[s.path]===ui.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(ui[s.path]){case ui.weights:c=Ms;break;case ui.rotation:c=bs;break;case ui.position:case ui.scale:c=Ss;break;default:switch(n.itemSize){case 1:c=Ms;break;case 2:case 3:default:c=Ss;break}break}const h=i.interpolation!==void 0?T_[i.interpolation]:cr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+ui[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=El(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof bs?S_:ud;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function I_(r,e,t){const n=e.attributes,i=new gn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),o.normalized){const h=El(hs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new A,l=new A;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const v=El(hs[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Nn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Vh(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=wl[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return qe.workingColorSpace!==Vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),jn(r,e),I_(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?E_(r,e.targets,t):r})}const xo=new WeakMap;class D_ extends Oi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new va(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,bt,n).catch(n)}decodeDracoFile(e,t,n,i,s=Vt,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(xo.has(e)){const l=xo.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(s,a).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),xo.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Mt;e.index&&t.setIndex(new yt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,a=i.array,o=i.itemSize,l=new yt(a,o);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==bt)return;const n=new ne;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),qe.toWorkingColorSpace(n,bt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new va(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=N_.toString(),a=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const a=s.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function N_(){let r,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":r=o.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),m=f.attributes.map(v=>v.array.buffer);f.index&&m.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},m)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{u.destroy(d)}});break}};function t(a,o,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const m=o.GetEncodedGeometryType(l);if(m===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(m===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const v={index:null,attributes:[]};for(const g in h){const p=self[u[g]];let y,_;if(c.useUniqueIDs)_=h[g],y=o.GetAttributeByUniqueId(d,_);else{if(_=o.GetAttributeId(d,a[h[g]]),_===-1)continue;y=o.GetAttribute(d,_)}const x=i(a,o,d,g,p,y);g==="color"&&(x.vertexColorSpace=c.vertexColorSpace),v.attributes.push(x)}return m===a.TRIANGULAR_MESH&&(v.index=n(a,o,d)),a.destroy(d),v}function n(a,o,l){const h=l.num_faces()*3,u=h*4,d=a._malloc(u);o.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function i(a,o,l,c,h,u){const d=u.num_components(),m=l.num_points()*d,v=m*h.BYTES_PER_ELEMENT,g=s(a,h),p=a._malloc(v);o.GetAttributeDataArrayForAllPoints(l,u,g,v,p);const y=new h(a.HEAPF32.buffer,p,m).slice();return a._free(p),{name:c,array:y,itemSize:d}}function s(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}function U_(r){let e=r>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class ti{constructor(e){this.r=U_(e)}next(){return this.r()}range(e,t){return e+(t-e)*this.r()}int(e,t){return Math.floor(this.range(e,t+1))}pick(e){return e[Math.floor(this.r()*e.length)]}chance(e){return this.r()<e}shuffle(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(this.r()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}weighted(e){let t=0;for(const i in e)t+=e[i];let n=this.r()*t;for(const i in e)if(n-=e[i],n<=0)return i;return Object.keys(e)[0]}}const St=(r,e,t)=>r<e?e:r>t?t:r,Li=(r,e,t,n)=>r+(e-r)*(1-Math.exp(-t*n));function Gh(r){for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;return r}const vt=r=>Math.round(r).toLocaleString("en-US"),Dn=[{id:"ferrite",name:"Ferrite Ore",base:16,kind:"ore",color:"#b9a48a"},{id:"ice",name:"Silicate Ice",base:22,kind:"ore",color:"#9fd8ea"},{id:"cobalt",name:"Cobaltine",base:48,kind:"ore",color:"#5a7fe0"},{id:"helion",name:"Helion Gas",base:62,kind:"ore",color:"#f2b85a"},{id:"lumenite",name:"Lumenite",base:150,kind:"ore",color:"#c8f56a"},{id:"food",name:"Food Packs",base:28,kind:"good",color:"#e8c070"},{id:"medical",name:"Medical Gel",base:80,kind:"good",color:"#ef8a8a"},{id:"parts",name:"Machine Parts",base:105,kind:"good",color:"#b0b8c4"},{id:"data",name:"Data Cores",base:180,kind:"good",color:"#7fd6ff"},{id:"luxury",name:"Luxury Crystal",base:300,kind:"good",color:"#e7a6ff"}],ht=Object.fromEntries(Dn.map(r=>[r.id,r])),nn={agricultural:{name:"Agricultural",danger:.1,mult:{ferrite:1.05,ice:1.4,cobalt:1,helion:1.05,lumenite:1.1,food:.55,medical:.85,parts:1.3,data:1.15,luxury:1}},mining:{name:"Mining",danger:.11,mult:{ferrite:.7,ice:.85,cobalt:.72,helion:.95,lumenite:.9,food:1.35,medical:1.3,parts:1.2,data:1.1,luxury:1.2}},industrial:{name:"Industrial",danger:.11,mult:{ferrite:1.35,ice:1.1,cobalt:1.4,helion:1.25,lumenite:1.2,food:1.2,medical:1.05,parts:.62,data:1,luxury:1.1}},hightech:{name:"High-Tech",danger:.12,mult:{ferrite:1.1,ice:1.05,cobalt:1.3,helion:1.4,lumenite:1.5,food:1.15,medical:.7,parts:1.1,data:.6,luxury:.9}},frontier:{name:"Frontier",danger:.15,mult:{ferrite:.9,ice:1,cobalt:.95,helion:.8,lumenite:1,food:1.4,medical:1.5,parts:1.35,data:1.25,luxury:1.45}}},Ct={wren:{name:"Wren",cls:"Shuttle",price:0,hull:110,shield:1,cargo:24,speed:72,turn:1.7,hard:1,energy:1,msl:0,priceMul:1,len:9,cam:22,desc:"Nimble starter shuttle. Small hold, light frame."},mule:{name:"Mule",cls:"Freighter",price:14e3,hull:260,shield:1.3,cargo:90,speed:58,turn:1.05,hard:1,energy:1.2,msl:0,priceMul:1.5,len:22,cam:42,desc:"Container hauler. Nearly 4× the hold of a Wren. Slow to turn."},kestrel:{name:"Kestrel",cls:"Striker",price:28e3,hull:220,shield:1.9,cargo:32,speed:88,turn:2.1,hard:2,energy:1.4,msl:2,priceMul:1.8,len:15,cam:30,desc:"Twin beam hardpoints, extra missile bays, fast barrier. Built to hunt outlaws."},bastion:{name:"Bastion",cls:"Capital Warden",price:11e4,hull:950,shield:3.6,cargo:220,speed:50,turn:.75,hard:3,energy:2.2,msl:4,priceMul:3.2,len:54,cam:82,desc:"Capital-class warden. Triple beam arrays, massive barrier and hold."}},O_=["wren","mule","kestrel","bastion"],ya={engine:{name:"Ion Engine",desc:"Top speed & handling",v:[0,.18,.36,.6],price:[0,1200,3800,9500]},cargo:{name:"Cargo Pods",desc:"Hold capacity",v:[0,.3,.65,1.1],price:[0,1500,4500,11e3]},barrier:{name:"Energy Barrier",desc:"Shield capacity & regen",cap:[40,80,135,210],regen:[6,10,15,22],price:[0,1400,4200,10500]},beam:{name:"Beam Array",desc:"Beam damage & range",dps:[10,17,27,40],range:[230,270,310,360],price:[0,1600,4800,12e3]},missile:{name:"Missile Rack",desc:"Homing missiles (restock at stations)",cap:[0,4,6,8],dmg:[0,70,95,130],price:[0,2e3,5200,12500]},mining:{name:"Mining Laser",desc:"Extraction rate, reach, rare finds",rate:[1.2,2,3,4.4],range:[80,95,115,135],rare:[0,.02,.08,.15],price:[0,1e3,3200,8e3]},sensors:{name:"Sensor Suite",desc:"Radar range, cargo scans, early warning",range:[1400,2e3,2800,3800],price:[0,900,2800,7e3]},hull:{name:"Hull Plating",desc:"Structural integrity",mul:[1,1.35,1.75,2.25],price:[0,1300,4e3,1e4]},reactor:{name:"Reactor Core",desc:"Energy pool & recharge",cap:[100,140,190,260],regen:[12,16,21,28],price:[0,1100,3500,8800]}},dd=["engine","cargo","barrier","beam","missile","mining","sensors","hull","reactor"];function _a(){const r={};for(const e of dd)r[e]=0;return r}function rr(r,e){const t=Ct[r],n=ya,i=n.engine.v[e.engine];return{speed:t.speed*(1+i),turn:t.turn*(1+.55*i),cargo:Math.round(t.cargo*(1+n.cargo.v[e.cargo])),shield:Math.round(n.barrier.cap[e.barrier]*t.shield),shieldRegen:n.barrier.regen[e.barrier]*t.shield,hull:Math.round(t.hull*n.hull.mul[e.hull]),dps:n.beam.dps[e.beam]*t.hard,beamRange:n.beam.range[e.beam],hard:t.hard,mslCap:e.missile>0?n.missile.cap[e.missile]+t.msl:0,mslDmg:n.missile.dmg[e.missile],mineRate:n.mining.rate[e.mining]*(r==="mule"?1.25:r==="bastion"?1.5:1),mineRange:n.mining.range[e.mining]+t.len*.6,rare:n.mining.rare[e.mining],sensor:n.sensors.range[e.sensors],sensorLvl:e.sensors,energy:Math.round(n.reactor.cap[e.reactor]*t.energy),energyRegen:n.reactor.regen[e.reactor]*t.energy}}function Wh(r,e,t){return Math.round(ya[e].price[t]*Ct[r].priceMul/10)*10}function $h(r,e,t){const n=rr(t,{..._a(),[r]:e});switch(r){case"engine":return`${Math.round(n.speed)} m/s`;case"cargo":return`${n.cargo} units`;case"barrier":return`${n.shield} cap · ${n.shieldRegen.toFixed(0)}/s`;case"beam":return`${n.dps} dps · ${n.beamRange}m`;case"missile":return e===0?"none":`${n.mslCap} × ${n.mslDmg} dmg`;case"mining":return`${n.mineRate.toFixed(1)} u/s${n.rare?` · ${Math.round(n.rare*100)}% rare`:""}`;case"sensors":return`${n.sensor}m${e>=1?" · scan":""}${e>=2?" · warn":""}`;case"hull":return`${n.hull} hp`;case"reactor":return`${n.energy} · ${n.energyRegen.toFixed(0)}/s`}return""}const F_=["Haven","Corvane","Ishtar Reach","Meridian","Tollan","Vesper Gate","Kairo","Ostara","Halcyon Drift","Novaline","Pellucid","Ashfall","Lyra Shoal","Brightwater"],B_=["Anchor","Lantern","Hearth","Keystone","Beacon","Quay","Harbor","Waypoint","Spindle","Cradle","Bastille","Atrium"],Xh=["Patient Ox","Silver Wake","Long Haul","Morning Rain","Quiet Dividend","Saffron Sky","Iron Lullaby","Kind Margin","Far Errand","Tin Lantern"],qh=["Red Jackal","Ash Viper","Grim Tally","Black Ledger","Rust Fang","Hollow Spur","Cinder Kite"],Mo=240,k_=[{name:"Yellow dwarf",color:[1,.86,.6],glow:[1,.7,.35],radius:[480,600]},{name:"Orange dwarf",color:[1,.62,.32],glow:[1,.45,.2],radius:[420,540]},{name:"Blue-white",color:[.75,.86,1],glow:[.45,.65,1],radius:[560,700]},{name:"Red dwarf",color:[1,.42,.3],glow:[1,.28,.18],radius:[360,460]}],z_=[[[.1,.22,.45],[.55,.2,.45]],[[.06,.3,.38],[.6,.35,.18]],[[.22,.1,.4],[.12,.4,.55]],[[.3,.12,.16],[.2,.25,.55]],[[.08,.18,.3],[.35,.55,.5]]],H_={rocky:[[[.36,.3,.26],[.55,.47,.38],[.75,.7,.62]],[[.42,.22,.16],[.62,.36,.24],[.82,.62,.45]]],desert:[[[.62,.42,.24],[.8,.6,.36],[.92,.82,.62]]],ice:[[[.55,.68,.8],[.78,.88,.95],[.97,.98,1]]],ocean:[[[.05,.2,.42],[.22,.42,.22],[.55,.5,.36]],[[.04,.24,.38],[.3,.5,.3],[.8,.8,.78]]],gas:[[[.82,.62,.4],[.62,.4,.28],[.95,.86,.72]],[[.4,.55,.78],[.22,.32,.6],[.85,.9,.98]],[[.7,.52,.7],[.4,.3,.55],[.92,.8,.86]]]},V_={rocky:[.55,.7,1],desert:[1,.7,.45],ice:[.6,.85,1],ocean:[.35,.65,1],gas:[.9,.75,.6]},G_={rocky:"cobalt",desert:"ferrite",ice:"ice",ocean:"cobalt",gas:"helion"};function ar(r){const e=new ti(r),t=9,n=[];let i=0;for(;n.length<t&&i++<5e3;){const g={x:e.range(60,940),y:e.range(60,560)};n.every(p=>Math.hypot(g.x-p.x,g.y-p.y)>175)&&n.push(g)}const s=e.shuffle(F_.slice()),a=e.shuffle(B_.slice());let o=0,l=1e9;n.forEach((g,p)=>{const y=Math.hypot(g.x-500,g.y-310);y<l&&(l=y,o=p)});const c=e.shuffle(["mining","industrial","hightech","frontier","mining","industrial","hightech","frontier"]),h=n.map((g,p)=>{const y=p===o?"agricultural":c.pop()||"frontier";return{id:p,name:p===o?"Haven":s.filter(_=>_!=="Haven")[p],x:g.x,y:g.y,eco:y,danger:nn[y].danger+(y==="frontier"?0:e.range(0,.02)),seed:e.int(1,2**30),links:[],station:a[p%a.length]}}),u=new Set([0]),d=(g,p)=>{h[g].links.includes(p)||(h[g].links.push(p),h[p].links.push(g))},f=(g,p)=>Math.hypot(h[g].x-h[p].x,h[g].y-h[p].y);for(;u.size<t;){let g=1e9,p=-1,y=-1;for(const _ of u)for(let x=0;x<t;x++)!u.has(x)&&f(_,x)<g&&(g=f(_,x),p=_,y=x);d(p,y),u.add(y)}for(let g=0;g<t;g++){const p=[...Array(t).keys()].filter(y=>y!==g).sort((y,_)=>f(g,y)-f(g,_));for(const y of p.slice(0,3))h[g].links.length>=3||h[y].links.length>=4||!h[g].links.includes(y)&&f(g,y)<330&&e.chance(.55)&&d(g,y)}const m={};h.forEach(g=>m[g.eco]=(m[g.eco]||0)+1);const v=h.find(g=>g.id!==o&&!h[o].links.includes(g.id)&&m[g.eco]>1&&g.eco!=="frontier");return v&&(v.eco="agricultural",v.danger=nn.agricultural.danger+e.range(0,.02)),{seed:r,systems:h,startId:o}}function bo(r,e,t){return e.every(n=>Math.hypot(r[0]-n.pos[0],r[2]-n.pos[2])>t+(n.r||0))}function fd(r,e){const t=new ti(r.seed),n=t.pick(k_),i={type:n.name,color:n.color,glow:n.glow,radius:t.range(...n.radius)},s=t.pick(z_),a=[{pos:[0,0,0],r:i.radius+900}],o=t.int(2,4),l=[];let c=2e3;for(let y=0;y<o;y++){c+=t.range(900,1600);const _=t.weighted(y===0?{rocky:3,desert:3,ocean:1}:{rocky:2,desert:1,ice:2,ocean:2,gas:3}),x=_==="gas"?t.range(560,820):t.range(220,420),C=t.range(0,Math.PI*2),w=[Math.cos(C)*c,t.range(-120,120),Math.sin(C)*c],E=t.pick(H_[_]);l.push({type:_,radius:x,pos:w,pal:E,atmo:V_[_],seed:t.range(0,100),spin:t.range(.004,.012)*(t.chance(.5)?1:-1),cloud:_==="gas"?0:_==="ocean"?.75:_==="desert"?.12:t.range(.2,.5),ring:_==="gas"&&t.chance(.6),name:`${r.name} ${["I","II","III","IV","V"][y]}`,depositOre:G_[_]}),a.push({pos:w,r:x+500})}const h=l[Math.min(1,l.length-1)];let u=null;for(let y=0;y<60&&!u;y++){const _=t.range(0,Math.PI*2),x=h.radius+t.range(700,1100),C=[h.pos[0]+Math.cos(_)*x,t.range(-40,40),h.pos[2]+Math.sin(_)*x];bo(C,a,300)&&(u={pos:C,name:`${r.station} Station`})}u||(u={pos:[h.pos[0]+h.radius+900,0,h.pos[2]],name:`${r.station} Station`}),a.push({pos:u.pos,r:400});const d=r.links.map(y=>{const _=e.systems[y],x=_.x-r.x,C=_.y-r.y,w=Math.hypot(x,C)||1,E=8200+t.range(-300,300),P=[x/w*E,t.range(-100,100),C/w*E];return a.push({pos:P,r:400}),{to:y,pos:P,name:`Gate → ${_.name}`}}),f=r.eco==="mining"?3:t.int(1,2),m=[],v={mining:{ferrite:3,cobalt:3,ice:1},industrial:{ferrite:3,ice:1},agricultural:{ice:3,ferrite:2},hightech:{cobalt:2,ice:2,ferrite:1},frontier:{ferrite:2,cobalt:2,ice:1}}[r.eco];for(let y=0,_=0;y<f&&_<300;_++){const x=t.range(0,Math.PI*2),C=t.range(2400,7200),w=[Math.cos(x)*C,t.range(-80,80),Math.sin(x)*C],E=t.range(380,560);if(!bo(w,a,E+300))continue;const P=t.weighted(v),S=t.pick(["ferrite","ice","cobalt"].filter(M=>M!==P));m.push({pos:w,radius:E,count:t.int(110,160),primary:P,secondary:S,lumenite:r.eco==="mining"||r.eco==="frontier"?.06:.03,seed:t.int(1,1e9),name:`${["Kessel","Drift","Tumble","Scree","Gravel","Shard"][t.int(0,5)]} Field`}),a.push({pos:w,r:E}),y++}const g=t.int(1,2),p=[];for(let y=0,_=0;y<g&&_<200;_++){const x=t.range(0,Math.PI*2),C=t.range(2600,7600),w=[Math.cos(x)*C,t.range(-120,120),Math.sin(x)*C];bo(w,a,300)&&(p.push({pos:w,seed:t.int(1,1e9),name:t.pick(["Wreck of the Calloway","Hulk “Marigold”","Derelict Ore Barge","Abandoned Survey Probe","Gutted Courier","Old Relay Hulk"])}),a.push({pos:w,r:200}),y++)}return{id:r.id,name:r.name,eco:r.eco,star:i,nebula:s,planets:l,station:u,gates:d,fields:m,derelicts:p}}const Fi=`
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
`,on={uTime:{value:0}};function Pn({color:r=15265007,metalness:e=.35,roughness:t=.38,panel:n=.55,lineDark:i=.45,envMapIntensity:s=1}={}){const a=new In({color:r,metalness:e,roughness:t,envMapIntensity:s});return a.userData.panel=n,a.onBeforeCompile=o=>{o.uniforms.uPanel={value:n},o.uniforms.uLineDark={value:i},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
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
`)},a.customProgramCacheKey=()=>"hull"+n,a}function Ei(r=5826288,e=2.2){const t=new In({color:659220,emissive:r,emissiveIntensity:e,roughness:.4,metalness:.2});return t.onBeforeCompile=n=>{n.uniforms.uTime=on.uTime,n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= 0.82 + 0.18*sin(uTime*2.4 + vViewPosition.z*0.05);`)},t.customProgramCacheKey=()=>"trim",t}function W_(r=new ne(.35,.9,1)){return new pt({uniforms:{uTime:on.uTime,uColor:{value:r},uStrength:{value:0},uFlash:{value:0},uHitDir:{value:[new A(1,0,0),new A(1,0,0),new A(1,0,0),new A(1,0,0)]},uHitAge:{value:[9,9,9,9]}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1,blending:xt,side:Rn})}function $_(r){const e=r.type==="gas"?1:r.type==="ocean"?2:0;return new pt({uniforms:{uTime:on.uTime,uSun:{value:new A},uA:{value:new ne(...r.pal[0])},uB:{value:new ne(...r.pal[1])},uC:{value:new ne(...r.pal[2])},uAtmo:{value:new ne(...r.atmo)},uSeed:{value:r.seed},uType:{value:e},uCloud:{value:r.cloud},uIce:{value:r.type==="ice"?0:1},uSunCol:{value:new ne(1,.95,.88)}},vertexShader:`
      varying vec3 vN; varying vec3 vObj; varying vec3 vW;
      void main(){ vObj = normalize(position); vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:Fi+`
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
      }`})}function X_(r,e){return new pt({uniforms:{uSun:e,uColor:{value:new ne(...r)}},vertexShader:"varying vec3 vN; varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW=w.xyz; vN=normalize(mat3(modelMatrix)*normal); gl_Position=projectionMatrix*viewMatrix*w; }",fragmentShader:`
      uniform vec3 uSun, uColor; varying vec3 vN; varying vec3 vW;
      void main(){
        vec3 N=normalize(vN); vec3 V=normalize(cameraPosition-vW); vec3 L=normalize(uSun-vW);
        float f = 1.0 - abs(dot(V,N));
        float glow = pow(f, 4.0)*1.4 + pow(f, 12.0)*1.2;
        float lit = smoothstep(-0.45, 0.6, dot(N,L));
        float a = glow*lit;
        gl_FragColor = vec4(uColor*a*1.6, a);
      }`,transparent:!0,depthWrite:!1,blending:xt,side:Rn})}function q_(r,e){return new pt({uniforms:{uA:{value:new ne(...r)},uB:{value:new ne(...e)}},vertexShader:"varying vec2 vUv; varying vec3 vP; void main(){ vUv=uv; vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:Fi+`uniform vec3 uA,uB; varying vec2 vUv; varying vec3 vP;
      void main(){ float r = length(vP.xy); float t = fract(r*0.004);
        float bands = 0.5+0.5*sin(r*0.09)+0.3*sin(r*0.31);
        float n = snoise(vec3(r*0.02,0.0,0.0));
        float a = smoothstep(0.0,0.15,vUv.x)*smoothstep(1.0,0.85,vUv.x)*(0.25+0.35*bands+0.2*n);
        gl_FragColor = vec4(mix(uA,uB,bands)*0.8, clamp(a,0.0,0.75)); }`,transparent:!0,depthWrite:!1,side:Ut})}function j_(r,e){return new pt({uniforms:{uTime:on.uTime,uCol:{value:new ne(...r)},uGlow:{value:new ne(...e)}},vertexShader:"varying vec3 vObj; varying vec3 vN; varying vec3 vW; void main(){ vObj=normalize(position); vec4 w=modelMatrix*vec4(position,1.0); vW=w.xyz; vN=normalize(mat3(modelMatrix)*normal); gl_Position=projectionMatrix*viewMatrix*w; }",fragmentShader:Fi+`uniform float uTime; uniform vec3 uCol,uGlow; varying vec3 vObj; varying vec3 vN; varying vec3 vW;
      void main(){ float t=uTime*0.05;
        float g = fbm(vObj*6.0 + vec3(t,t*0.7,-t));
        float g2 = fbm3(vObj*18.0 - vec3(t*2.0));
        float f = 1.0-abs(dot(normalize(vN), normalize(cameraPosition-vW)));
        vec3 c = mix(uGlow, uCol, 0.55+0.45*g) * (2.4 + 0.8*g2) + uCol*pow(f,2.0)*1.5;
        gl_FragColor = vec4(c, 1.0); }`})}function jh(r,e,t=0){return new pt({uniforms:{uA:{value:new ne(...r)},uB:{value:new ne(...e)},uSeed:{value:t},uIntensity:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:Fi+`uniform vec3 uA,uB; uniform float uSeed, uIntensity; varying vec3 vDir;
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
      }`,side:Xt,depthWrite:!1,depthTest:!0})}function Y_(r){return new pt({uniforms:{uTime:on.uTime,uColor:{value:new ne(r)},uIntensity:{value:1},uLen:{value:100}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uTime,uIntensity,uLen; uniform vec3 uColor; varying vec2 vUv;
      void main(){ float x = abs(vUv.y*2.0-1.0);
        float core = smoothstep(0.25,0.0,x); float glow = pow(1.0-x, 3.0);
        float pulse = 0.75+0.25*sin(vUv.x*uLen*0.25 - uTime*40.0);
        float ends = smoothstep(0.0,0.02,vUv.x)*smoothstep(1.0,0.97,vUv.x);
        vec3 c = (uColor*glow*1.8*pulse + vec3(1.0)*core*2.2)*uIntensity*ends;
        gl_FragColor = vec4(c, 1.0); }`,transparent:!0,depthWrite:!1,blending:xt,side:Ut})}function K_(r=[.6,.45,1]){return new pt({uniforms:{uTime:on.uTime,uColor:{value:new ne(...r)},uActive:{value:.5}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:Fi+`uniform float uTime, uActive; uniform vec3 uColor; varying vec2 vUv;
      void main(){ vec2 p = vUv*2.0-1.0; float r = length(p); float a = atan(p.y,p.x);
        float sw = fbm3(vec3(cos(a*3.0+r*6.0-uTime*0.8)*1.2, sin(a*3.0+r*6.0-uTime*0.8)*1.2, r*3.0-uTime*0.3));
        float m = smoothstep(1.0,0.82,r);
        float i = (0.35+0.65*smoothstep(-0.2,0.6,sw))*m*(0.35+0.65*uActive);
        vec3 c = mix(uColor, vec3(0.8,0.95,1.0), smoothstep(0.3,0.0,r))*i*1.6;
        gl_FragColor = vec4(c, i*0.85); }`,transparent:!0,depthWrite:!1,blending:xt,side:Ut})}function Z_(r=7334143){return new pt({uniforms:{uTime:on.uTime,uColor:{value:new ne(r)},uPower:{value:.5}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:Fi+`uniform float uTime,uPower; uniform vec3 uColor; varying vec2 vUv;
      void main(){ float along = vUv.y; float n = snoise(vec3(vUv.x*6.0, along*4.0 - uTime*12.0, 0.0));
        float a = pow(along, 1.6) * (0.75+0.25*n) * uPower;
        vec3 c = mix(uColor, vec3(1.0), pow(along,6.0))*a*2.4;
        gl_FragColor = vec4(c, a); }`,transparent:!0,depthWrite:!1,blending:xt,side:Ut})}function J_(){const r=new In({color:9078144,roughness:.92,metalness:.05,flatShading:!1,envMapIntensity:.4});return r.onBeforeCompile=e=>{e.uniforms.uTime=on.uTime,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aOre; attribute float aDepl; varying vec3 vOre; varying vec3 vRP; varying float vDepl;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOre = aOre; vRP = position; vDepl = aDepl;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime; varying vec3 vOre; varying vec3 vRP; varying float vDepl;
`+Fi).replace("#include <color_fragment>",`#include <color_fragment>
float rn = fbm3(vRP*2.2);
float strata = 0.5+0.5*sin(vRP.y*7.0 + rn*4.0);
diffuseColor.rgb *= 0.72 + 0.28*strata + 0.25*rn;
float vn = abs(snoise(vRP*2.4 + 7.0));
float vein = 1.0 - smoothstep(0.0, 0.07, vn);
vein *= smoothstep(-0.2, 0.3, rn) * (1.0 - vDepl);
diffuseColor.rgb = mix(diffuseColor.rgb, vOre*0.8, vein*0.75);
`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += vOre * vein * (0.9 + 0.35*sin(uTime*2.0 + vRP.x*3.0));`)},r.customProgramCacheKey=()=>"rock",r}let $s=null;function rn(){if($s)return $s;const r=document.createElement("canvas");r.width=r.height=128;const e=r.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.55)"),t.addColorStop(.6,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),$s=new Ju(r),$s.colorSpace=bt,$s}let Xs=null;function Q_(){if(Xs)return Xs;const r=document.createElement("canvas");r.width=r.height=512;const e=r.getContext("2d");e.translate(256,256);for(let t=0;t<26;t++){e.rotate(Math.PI*2/26+Math.sin(t*7.1)*.08);const n=140+110*Math.abs(Math.sin(t*3.7)),i=6+10*Math.abs(Math.cos(t*2.3)),s=e.createLinearGradient(0,0,n,0);s.addColorStop(0,"rgba(255,255,255,0.35)"),s.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=s,e.beginPath(),e.moveTo(0,-i),e.lineTo(n,0),e.lineTo(0,i),e.fill()}return Xs=new Ju(r),Xs.colorSpace=bt,Xs}const qs=new A;function hn(r,e,t,n,i,s){const a=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;qs.copy(e),qs[n]=0,qs.normalize();const c=.5*a/(a+o),h=1-qs.angleTo(r)/l;return Math.sign(qs[t])===1?h*c:o/(a+o)+c+c*(1-h)}class ex extends Ui{constructor(e=1,t=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new A,l=new A,c=new A(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,m=new A,v=.5/i;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(o.fromArray(h,g),l.copy(o),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[g+0]=c.x*Math.sign(o.x)+l.x*s,h[g+1]=c.y*Math.sign(o.y)+l.y*s,h[g+2]=c.z*Math.sign(o.z)+l.z*s,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:m.set(1,0,0),d[p+0]=hn(m,l,"z","y",s,n),d[p+1]=1-hn(m,l,"y","z",s,t);break;case 1:m.set(-1,0,0),d[p+0]=1-hn(m,l,"z","y",s,n),d[p+1]=1-hn(m,l,"y","z",s,t);break;case 2:m.set(0,1,0),d[p+0]=1-hn(m,l,"x","z",s,e),d[p+1]=hn(m,l,"z","x",s,n);break;case 3:m.set(0,-1,0),d[p+0]=1-hn(m,l,"x","z",s,e),d[p+1]=1-hn(m,l,"z","x",s,n);break;case 4:m.set(0,0,1),d[p+0]=1-hn(m,l,"x","y",s,e),d[p+1]=1-hn(m,l,"y","x",s,t);break;case 5:m.set(0,0,-1),d[p+0]=hn(m,l,"x","y",s,e),d[p+1]=1-hn(m,l,"y","x",s,t);break}}}const te={};function vi(){return te.ready||(te.white=Pn({color:15330800,metalness:.3,roughness:.34,panel:1.2}),te.whiteBig=Pn({color:15001836,metalness:.3,roughness:.36,panel:.42}),te.grey=Pn({color:8160656,metalness:.55,roughness:.42,panel:1.6,lineDark:.3}),te.dark=Pn({color:2764856,metalness:.7,roughness:.38,panel:1.8,lineDark:.25}),te.cream=Pn({color:15195331,metalness:.25,roughness:.45,panel:.9}),te.ochre=Pn({color:13209151,metalness:.3,roughness:.45,panel:.9}),te.teal=Pn({color:4165532,metalness:.35,roughness:.4,panel:.9}),te.orangePaint=Pn({color:15229996,metalness:.25,roughness:.4,panel:2,lineDark:.2}),te.gunmetal=Pn({color:3817287,metalness:.75,roughness:.32,panel:1.4}),te.rust=Pn({color:5980214,metalness:.5,roughness:.7,panel:1.1,lineDark:.5}),te.glass=new In({color:860723,metalness:.9,roughness:.16,envMapIntensity:1.6}),te.trimTeal=Ei(5235696,2.4),te.trimOrange=Ei(16742970,2),te.trimRed=Ei(16724016,2.6),te.trimWhite=Ei(14677759,3),te.nozzle=new In({color:1711652,metalness:.85,roughness:.3,side:Ut}),te.solar=new In({color:1454170,metalness:.6,roughness:.25,emissive:662074,emissiveIntensity:.6,envMapIntensity:1.5}),te.ventTeal=Ei(4182246,1.3),te.ventAmber=Ei(16751168,1.3),te.ventRed=Ei(16730672,1.4),te.ready=!0),te}function tx(){return vi()}function vn(r,e=28,t=1,n=1){const s=(r[0][1]>r[r.length-1][1]?r.slice().reverse():r).map(([o,l])=>new Z(Math.max(o,1e-4),l)),a=new ql(s,e);return a.rotateX(Math.PI/2),a.scale(t,n,1),a.computeVertexNormals(),a}function us(r,e,t=.06){const n=new id;r.forEach(([s,a],o)=>o?n.lineTo(s,-a):n.moveTo(s,-a)),n.closePath();const i=new Yl(n,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:2,curveSegments:4});return i.rotateX(-Math.PI/2),i.translate(0,-e/2,0),i.computeVertexNormals(),i}function Ke(r,e,t,n=.15,i=3){return new ex(r,e,t,i,Math.min(n,r/2,e/2,t/2)*.999)}function Te(r,e,t,n=0,i=0,s=0,a=0,o=0,l=0){const c=new ut(e,t);return c.position.set(n,i,s),c.rotation.set(a,o,l),r.add(c),c}function At(r,e,t,n,i,s,a=0,o=0,l=0){const c=Te(r,e,t,n,i,s,a,o,l),h=e.clone();if(h.scale(-1,1,1),h.computeVertexNormals(),h.index){const d=h.index.array;for(let f=0;f<d.length;f+=3){const m=d[f];d[f]=d[f+2],d[f+2]=m}}else nx(h);h.computeVertexNormals();const u=Te(r,h,t,-n,i,s,a,-o,-l);return[c,u]}function nx(r){for(const e of Object.keys(r.attributes)){const t=r.attributes[e],n=t.itemSize,i=t.array;for(let s=0;s<t.count;s+=3)for(let a=0;a<n;a++){const o=i[s*n+a];i[s*n+a]=i[(s+2)*n+a],i[(s+2)*n+a]=o}}}function La(r,e){return vn([[0,r*.55],[e*.55,r*.52],[e*.9,r*.38],[e,r*.2],[e,-r*.3],[e*.92,-r*.42],[e*.78,-r*.47],[e*.7,-r*.45],[0,-r*.45]],22)}function yr(r,{x:e=0,y:t=0,rz:n,w:i,h:s,d:a=0,r:o=.15,housing:l=null,vent:c,trim:h,slats:u=3,slatMat:d=te.grey}){l&&Te(r,Ke(i,s,a,o),l,e,t,n+a/2);const f=Math.min(i,s)*.07,m=i*.76,v=s*.66;Te(r,Ke(m+2*f,v+2*f,f,f*.4),te.dark,e,t,n-f/2+.005),Te(r,new Es(m,v),c,e,t,n-f-.01,0,Math.PI,0);const g=v/u,p=f*.9;for(let y=0;y<u;y++){const _=t-v/2+g*(y+.5);Te(r,Ke(m,g*.5,p,Math.min(g*.2,p*.4)),d,e,_,n-f-p/2)}h&&Te(r,Ke(m,f*.55,f*.55,f*.2),h,e,t-v/2-f*1.6,n-f*.4)}function ni(r,e,t,n,i,s,a,o){Te(r,vn([[s*.95,0],[s*1.05,-.2*s],[s*.85,-.55*s],[s*.6,-.5*s]],20),te.nozzle,t,n,i);const l=Te(r,new Aa(s*.72,20),new Kt({color:new ne(o).multiplyScalar(2.5)}),t,n,i-.45*s,0,Math.PI,0),c=new jl(s*.75,s*.12,1,16,1,!0);c.rotateX(Math.PI/2),c.translate(0,0,-.5);const h=Te(r,c,Z_(o),t,n,i-.45*s);h.userData.baseLen=a,h.scale.set(1,1,a),h.userData.isExhaust=!0;const u=new fn(new sn({map:rn(),color:new ne(o),blending:xt,depthWrite:!1,transparent:!0,opacity:.9}));u.position.set(t,n,i-.6*s),u.scale.setScalar(s*4),r.add(u),u.userData.isGlow=!0,u.userData.baseScale=s*4,e.push({ex:h,sp:u,disc:l})}function ix(r){const e=new wt,t=[],n=[],i=r.body,s=r.trim,a=r.stripe;Te(e,vn([[0,4.7],[.45,4.55],[.92,4],[1.18,3],[1.3,1.6],[1.32,-1.6],[1.18,-3],[.95,-3.7],[.72,-3.85],[0,-3.85]],32,1.15,.82),i),Te(e,new Ht(1,28,16),te.glass,0,.62,2.35).scale.set(.72,.5,1.45),Te(e,Ke(.7,.45,3.6,.18),te.grey,0,1.08,-.9),Te(e,Ke(.12,.1,3,.04),s,0,1.33,-.9),At(e,us([[.9,1.4],[4.1,-1.1],[4.35,-2],[4.2,-2.35],[.9,-2.7]],.2,.07),i,0,-.28,0),At(e,Ke(.18,.16,1.2,.06),s,4.25,-.28,-1.6),At(e,us([[.9,.9],[2.8,-.4],[2.9,-1.3],[.9,-1.6]],.06,.02),a,0,-.04,-.3);const o=La(4.2,.62);return At(e,o,te.grey,1.95,.15,-1.9),At(e,Ke(.9,.22,1.4,.08),te.grey,1.4,.08,-1.8),At(e,new Yt(.63,.05,8,24),s,1.95,.15,-.7),Te(e,new Yt(1.33,.06,8,40),a,0,0,1).scale.set(1.15,.82,1),ni(e,t,1.95,.15,-3.9,.5,5,r.exhaust),ni(e,t,-1.95,.15,-3.9,.5,5,r.exhaust),yr(e,{y:-.05,rz:-4.2,w:1.6,h:.85,d:1.3,r:.22,housing:te.grey,vent:r.vent,trim:s,slats:3}),n.push(new A(0,-.5,4.2)),{g:e,engines:t,muzzles:n}}function sx(r){const e=new wt,t=[],n=[];Te(e,vn([[0,11.2],[.8,11],[1.7,10.2],[2.2,8.8],[2.3,6.6],[2,5.9],[0,5.9]],30,1.1,.9),r.body),Te(e,new Ht(1,24,14),te.glass,0,1.05,9).scale.set(1.35,.7,1.4),Te(e,Ke(1.6,1.6,15,.3),te.grey,0,0,-1.2);const i=Ke(2.35,2.35,3.7,.22),s=r.containers;let a=0;for(const l of[3.6,-.4,-4.4]){for(const[c,h]of[[1.95,0],[-1.95,0],[0,1.95],[0,-1.95]])Te(e,i,s[a++%s.length],c,h,l);Te(e,new Yt(2.6,.12,8,32),te.grey,0,0,l+1.95)}Te(e,Ke(4.4,3.2,3.4,.5),r.body,0,0,-8.6),At(e,Ke(.12,2.6,4,.05),te.dark,2.24,0,-8.6),At(e,Ke(.05,2.2,3.6,.02),r.trim,2.32,0,-8.6),At(e,us([[2.2,-7.2],[5.6,-8.5],[5.6,-10.2],[2.2,-10.2]],.15,.04),te.grey,0,1.2,0),At(e,Ke(.2,.2,1.2,.05),r.trim,5.6,1.2,-9.4);const o=La(3.2,1.1);return At(e,o,te.dark,1.2,0,-10.8),ni(e,t,1.2,0,-12.3,.95,9,r.exhaust),ni(e,t,-1.2,0,-12.3,.95,9,r.exhaust),yr(e,{y:1.95,rz:-10.7,w:2.4,h:.95,d:2.6,r:.25,housing:te.grey,vent:r.vent,trim:r.trim,slats:3}),yr(e,{y:-1.3,rz:-10.3,w:3.6,h:.55,vent:r.vent,slats:2}),Te(e,Ke(.3,.3,13,.1),r.stripe,0,.85,-1.2),n.push(new A(0,-1.6,10.5)),{g:e,engines:t,muzzles:n}}function rx(r){const e=new wt,t=[],n=[];Te(e,vn([[0,7.6],[.35,7],[.85,5.2],[1.25,2.8],[1.4,0],[1.35,-3.5],[1.15,-5.5],[.9,-6],[0,-6]],30,1.25,.72),r.body),Te(e,new Ht(1,24,14),te.glass,0,.62,2.6).scale.set(.62,.42,1.8),At(e,us([[1,2.6],[5.6,-3.2],[5.8,-4.6],[5.2,-4.8],[1,-4.3]],.24,.08),r.body,0,-.15,0),At(e,us([[1.4,1.6],[4.4,-2.4],[4.5,-3],[1.4,-2]],.06,.02),r.stripe,0,.06,0);const i=vn([[0,2.6],[.12,2.5],[.2,2],[.24,-2],[.3,-2.4],[0,-2.4]],14);At(e,i,te.grey,5.55,-.15,-2),At(e,new Ht(.16,10,8),r.trim,5.55,-.15,.62),At(e,us([[.2,-1],[.2,-4.6],[2.2,-5.2],[1.6,-3.6]],.12,.04),r.body,.9,.43,0,0,0,Math.PI/2-.35);const s=La(4,.72);return At(e,s,te.grey,1.55,-.05,-4.3),ni(e,t,1.55,-.05,-6.2,.6,7,r.exhaust),ni(e,t,-1.55,-.05,-6.2,.6,7,r.exhaust),yr(e,{y:.1,rz:-6.6,w:1.35,h:.9,d:1.6,r:.2,housing:te.grey,vent:r.vent,trim:r.trim,slats:3}),Te(e,Ke(.1,.1,6.5,.03),r.trim,0,.95,-1.2),n.push(new A(5.55,-.15,.7),new A(-5.55,-.15,.7)),{g:e,engines:t,muzzles:n}}function ax(r){const e=new wt,t=[],n=[];Te(e,vn([[0,28],[1.6,27.4],[4.2,24],[6.6,16],[7.4,4],[7.4,-10],[7,-18],[6,-23],[4.8,-24.5],[0,-24.5]],40,1.3,.62),r.body),Te(e,Ke(8.5,2.6,26,.8),te.grey,0,4.1,-3),Te(e,Ke(6.8,2.2,20,.6),r.body,0,5.6,-5),Te(e,Ke(3.6,4.4,6.2,.6),r.body,0,8.6,-12),Te(e,Ke(3.7,.7,5,.2),te.glass,0,9.8,-11.2),Te(e,Ke(.25,.25,22,.08),r.trim,0,6.75,-5),Te(e,new Yt(10.5,.7,12,64),te.grey,0,0,8).scale.set(1,.72,1),Te(e,new Yt(10.5,.28,8,64),r.trim,0,0,8.75).scale.set(1,.72,1);for(let s=0;s<4;s++){const a=s/4*Math.PI*2+Math.PI/4,o=Math.cos(a),l=Math.sin(a),c=1/Math.hypot(o/(7.13*1.3),l/(7.13*.62)),h=1/Math.hypot(o/10.5,l/7.56),u=c-.4,d=h-u,f=u+d/2;Te(e,Ke(d,.9,1.6,.25),te.grey,o*f,l*f,8,0,0,a)}At(e,Ke(3.4,3,16,.9),r.body,10.2,-.6,-8),At(e,Ke(.1,1.2,12,.04),r.trim,11.95,-.6,-8),At(e,Ke(3.2,.5,2,.2),te.grey,8.2,-.6,-4),At(e,Ke(3.2,.5,2,.2),te.grey,8.2,-.6,-12);for(const s of[14,2])Te(e,new Ht(1.6,20,12,0,Math.PI*2,0,Math.PI/2),te.grey,0,s>5?3.9:6.7,s),At(e,vn([[0,3.5],[.25,3.5],[.3,-.5],[0,-.5]],10),te.dark,.5,s>5?4.6:7.4,s+1.5),n.push(new A(0,s>5?4.6:7.4,s+5));n.push(new A(0,-3,26));const i=La(8,2);for(const[s,a]of[[4.6,2.2],[-4.6,2.2],[4.6,-2.2],[-4.6,-2.2]])Te(e,i,te.dark,s,a,-24),ni(e,t,s,a,-27.65,1.7,18,r.exhaust);return yr(e,{y:0,rz:-27.8,w:4.4,h:6.6,d:4.4,r:.7,housing:te.grey,vent:r.vent,trim:r.trim,slats:7}),{g:e,engines:t,muzzles:n}}const ox={player:()=>({body:te.white,trim:te.trimTeal,stripe:te.orangePaint,exhaust:7334143,vent:te.ventTeal,containers:[te.white,te.teal,te.white,te.orangePaint]}),trader:()=>({body:te.cream,trim:te.trimOrange,stripe:te.ochre,exhaust:16760944,vent:te.ventAmber,containers:[te.ochre,te.cream,te.teal,te.ochre,te.grey]}),outlaw:()=>({body:te.gunmetal,trim:te.trimRed,stripe:te.rust,exhaust:16734778,vent:te.ventRed,containers:[te.gunmetal,te.rust]})},lx={wren:ix,mule:sx,kestrel:rx,bastion:ax},So=new Map;function Js(r,e="player"){vi();const t=r+":"+e;if(So.has(t))return So.get(t);const n=lx[r](ox[e]());n.g.traverse(s=>{s.isMesh&&(s.castShadow=!1,s.receiveShadow=!1)});const i=new gn().setFromObject(n.g);return n.box=i,So.set(t,n),n}function cx(r,e){const t=r.g.clone(!0),n=[];t.traverse(h=>{h.userData.isExhaust&&(h.material=h.material.clone(),h.material.uniforms.uTime=on.uTime),h.userData.isGlow&&(h.material=h.material.clone())});const i=[],s=[];t.traverse(h=>{h.userData.isExhaust&&i.push(h),h.userData.isGlow&&s.push(h)});for(let h=0;h<i.length;h++)n.push({ex:i[h],sp:s[h]});const a=new A;r.box.getSize(a);const o=new A;r.box.getCenter(o);const l=new ut(new Ht(1,40,20),W_(e));l.scale.set(a.x*.62+1,a.y*.75+1.2,a.z*.6+1),l.position.copy(o),l.renderOrder=5,t.add(l);const c=Math.max(a.x,a.y,a.z)*.5;return{group:t,engines:n,shield:l,radius:c,muzzles:r.muzzles.map(h=>h.clone()),size:a}}function hx(r,e=15){vi();const t=new wt,n=r,i=new gn().setFromObject(n),s=new A;i.getSize(s);const a=new A;i.getCenter(a);const o=e/Math.max(s.x,s.y,s.z);n.position.sub(a.multiplyScalar(1));const l=new wt;l.add(n),l.scale.setScalar(o),l.rotation.y=Math.PI,t.add(l),n.traverse(f=>{if(!f.isMesh)return;const m=f.material;m.envMapIntensity=1.3,m.emissive&&(m.emissiveMap?m.emissiveIntensity=2.2:m.emissive.setRGB(0,0,0)),!m.metalnessMap&&m.metalness>.8&&(m.metalness=.6),!m.roughnessMap&&m.roughness>.8&&(m.roughness=.45)});const c=[],h=e;ni(t,c,2.4,0,-h*.5,.55,6,16734778),ni(t,c,-2.4,0,-h*.5,.55,6,16734778);const u=new gn().setFromObject(t),d=new sn({map:rn(),color:new ne(1,.18,.12).multiplyScalar(2.2),blending:xt,depthWrite:!1,transparent:!0});for(const[f,m,v,g]of[[u.min.x*.92,0,0,3.2],[u.max.x*.92,0,0,3.2],[0,u.max.y*.9,-h*.15,2.6],[0,0,u.max.z*.95,2.4]]){const p=new fn(d);p.position.set(f,m,v),p.scale.setScalar(g),t.add(p)}return{g:t,engines:c,muzzles:[new A(0,-.3,h*.5)],box:u}}function ux(){vi();const r=new wt,e=new wt;r.add(e),Te(r,vn([[0,34],[6,33],[11,28],[13,20],[13,-20],[11,-28],[6,-33],[0,-34]],40),te.whiteBig,0,0,0,Math.PI/2,0,0),Te(r,new Yt(13.4,.6,10,48),te.trimTeal,0,14,0,Math.PI/2,0,0),Te(r,new Yt(13.4,.6,10,48),te.trimTeal,0,-14,0,Math.PI/2,0,0);const t=new Yt(70,6.5,20,96);Te(e,t,te.whiteBig,0,0,0,Math.PI/2,0,0),Te(e,new Yt(70,2,10,96),te.grey,0,6.2,0,Math.PI/2,0,0);const n=new Yt(76.4,.7,6,96);Te(e,n,te.trimWhite,0,0,0,Math.PI/2,0,0);for(let a=0;a<6;a++){const o=a/6*Math.PI*2;Te(e,Ke(3.2,3.2,58,.8),te.grey,Math.cos(o)*41,0,Math.sin(o)*41,0,-o+Math.PI/2,0),Te(e,Ke(10,9,14,2.5),te.whiteBig,Math.cos(o)*70,0,Math.sin(o)*70,0,-o,0)}for(const a of[1,-1]){Te(r,Ke(2,2,44,.5),te.grey,0,a*42,0);for(const o of[-14,14])Te(r,Ke(40,.5,12,.2),te.solar,0,a*42,o),Te(r,Ke(40.4,.7,.5,.1),te.grey,0,a*42,o+6)}Te(r,vn([[0,10],[3,9],[4,0],[3,-10],[0,-11]],20),te.grey,0,45,0,Math.PI/2,0,0);const i=[];for(let a=0;a<12;a++){const o=a/12*Math.PI*2,l=Te(e,new Ht(1,8,6),new Kt({color:a%2?16742970:7334143}),Math.cos(o)*77,0,Math.sin(o)*77);i.push(l)}const s=new fn(new sn({map:rn(),color:8382719,blending:xt,depthWrite:!1,transparent:!0}));return s.position.set(0,58,0),s.scale.setScalar(30),r.add(s),{group:r,spin:e,lights:i,beacon:s,radius:80}}function dx(){vi();const r=new wt;Te(r,new Yt(70,5,16,80),te.grey),Te(r,new Yt(64.5,1.2,8,80),te.trimTeal);for(let t=0;t<8;t++){const n=t/8*Math.PI*2;Te(r,Ke(14,18,16,2.5),te.whiteBig,Math.cos(n)*72,Math.sin(n)*72,0,0,0,n),Te(r,Ke(2,10,17,.5),te.trimOrange,Math.cos(n)*80,Math.sin(n)*80,0,0,0,n)}const e=Te(r,new Aa(66,64),K_());return e.renderOrder=4,{group:r,portal:e}}function fx(r){vi();const e=new wt,t=o=>{const l=Math.sin(r*.001+o*12.9898)*43758.5453;return l-Math.floor(l)},n=vn([[0,18],[4,16],[6,8],[6.5,-6],[5,-14],[0,-15]],24,1.1,.8);Te(e,n,te.rust,0,0,0,.3,0,.6);const i=Ke(9,6,12,1.2);Te(e,i,te.dark,12,4,-8,.8,.4,.2);for(let o=0;o<9;o++)Te(e,Ke(1+t(o)*4,1+t(o+9)*3,2+t(o+18)*8,.3),o%2?te.rust:te.gunmetal,(t(o+1)-.5)*50,(t(o+2)-.5)*24,(t(o+3)-.5)*50,t(o+4)*6,t(o+5)*6,t(o+6)*6);const s=Te(e,new Ht(.8,8,6),new Kt({color:16732208}),0,5,6),a=new fn(new sn({map:rn(),color:16736320,blending:xt,depthWrite:!1,transparent:!0}));return a.position.copy(s.position),a.scale.setScalar(16),e.add(a),{group:e,lamp:s,glow:a}}function px(){vi();const r=new wt;Te(r,Ke(2.2,2.2,2.2,.3),te.orangePaint),Te(r,new Ui(2.35,.3,2.35),te.trimWhite);const e=new fn(new sn({map:rn(),color:16769674,blending:xt,depthWrite:!1,transparent:!0,opacity:.8}));return e.scale.setScalar(9),r.add(e),r}function mx(){vi();const r=new wt;Te(r,vn([[0,1.4],[.2,1],[.24,-1],[.18,-1.2],[0,-1.2]],10),te.white);const e=new fn(new sn({map:rn(),color:16752736,blending:xt,depthWrite:!1,transparent:!0}));return e.position.z=-1.6,e.scale.setScalar(5),r.add(e),r}function da(r,e,t){const n=Math.sin(r*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)}function Yh(r,e,t){const n=Math.floor(r),i=Math.floor(e),s=Math.floor(t),a=r-n,o=e-i,l=t-s,c=a*a*(3-2*a),h=o*o*(3-2*o),u=l*l*(3-2*l);let d=0;for(let f=0;f<2;f++)for(let m=0;m<2;m++)for(let v=0;v<2;v++)d+=da(n+f,i+m,s+v)*(f?c:1-c)*(m?h:1-h)*(v?u:1-u);return d*2-1}function To(r,e=4){let t=new Kl(1,e);t.deleteAttribute("normal"),t.deleteAttribute("uv"),t=Zy(t);const n=t.attributes.position,i=new A,s=.8+da(r,1,2)*.6,a=.6+da(r,3,4)*.5,o=.8+da(r,5,6)*.6;for(let l=0;l<n.count;l++){i.fromBufferAttribute(n,l);let c=0,h=.5,u=1.3;for(let f=0;f<4;f++)c+=h*Yh(i.x*u+r,i.y*u+r*.7,i.z*u-r),u*=2.1,h*=.5;const d=Math.max(0,Yh(i.x*2.5+r*3,i.y*2.5,i.z*2.5)-.45)*.6;i.multiplyScalar(1+c*.42-d),i.x*=s,i.y*=a,i.z*=o,n.setXYZ(l,i.x,i.y,i.z)}return t.computeVertexNormals(),t}let ds=null;function gx(){return ds||(ds=[To(3.1),To(7.7),To(12.4,3)]),ds}const Kh=new ke,Zh=new yn,vx=new A,ss=new A;class yx{constructor(e){this.game=e,this.root=new wt,e.scene.add(this.root),this.sunUniform={value:new A(0,0,0)},this.rockMat=J_(),this.dust=this.makeDust(),e.scene.add(this.dust)}makeDust(){const n=new Float32Array(2700),i=new Float32Array(900);for(let l=0;l<900;l++)n[l*3]=Math.random()*600,n[l*3+1]=Math.random()*600,n[l*3+2]=Math.random()*600,i[l]=.5+Math.random()*1.5;const s=new Mt;s.setAttribute("position",new yt(n,3)),s.setAttribute("aSize",new yt(i,1));const a=new pt({uniforms:{uCam:{value:new A},uBox:{value:600},uColor:{value:new ne(.7,.85,1)},uMap:{value:rn()},uPx:{value:1}},vertexShader:`uniform vec3 uCam; uniform float uBox, uPx; attribute float aSize; varying float vA;
        void main(){ vec3 p = mod(position - uCam, uBox) - uBox*0.5 + uCam; vec4 mv = modelViewMatrix*vec4(p,1.0);
          float d = length(mv.xyz); vA = smoothstep(uBox*0.5, uBox*0.15, d)*smoothstep(4.0, 30.0, d);
          gl_PointSize = aSize*uPx*260.0/max(d,1.0); gl_Position = projectionMatrix*mv; }`,fragmentShader:"uniform vec3 uColor; uniform sampler2D uMap; varying float vA; void main(){ float t = texture2D(uMap, gl_PointCoord).a; gl_FragColor = vec4(uColor*t*vA*0.55, t*vA); }",transparent:!0,depthWrite:!1,blending:xt}),o=new Wl(s,a);return o.frustumCulled=!1,o.renderOrder=2,o}clear(){const e=new Set;this.root.traverse(t=>{var n,i,s;t.geometry&&!(ds!=null&&ds.includes(t.geometry))&&!t.userData.sharedGeo&&((i=(n=t.geometry).dispose)==null||i.call(n)),t.material&&!e.has(t.material)&&((s=t.material.userData)!=null&&s.disposable)&&t.material.dispose()}),this.root.clear(),this.envRT&&(this.envRT.dispose(),this.envRT=null)}build(e,t){this.clear(),this.sys=e;const n=new ti(e.id*7919+13),i=this.game.scene,s=new ut(new Ht(1e3,48,24),jh(e.nebula[0],e.nebula[1],e.id*3.7));s.frustumCulled=!1,s.renderOrder=-100,this.sky=s,this.root.add(s);const a=new Wu,o=new ut(new Ht(50,32,16),jh(e.nebula[0].map(y=>y*2.2),e.nebula[1].map(y=>y*2.2),e.id*3.7));a.add(o);const l=new ut(new Ht(3,16,8),new Kt({color:new ne(...e.star.color).multiplyScalar(14)}));l.position.set(30,18,20),a.add(l);const c=new yl(this.game.renderer);this.envRT=c.fromScene(a,.02,.1,200),c.dispose(),o.geometry.dispose(),o.material.dispose(),i.environment=this.envRT.texture,i.environmentIntensity=.9;const h=new ne(...e.nebula[0]);i.fog=new Hl(h.clone().multiplyScalar(.35),45e-6),this.game.fogDensity=45e-6,this.game.keyLight.color.setRGB(...e.star.color),this.game.hemi.color.copy(new ne(...e.nebula[0]).lerp(new ne(.7,.8,1),.6)),this.game.hemi.groundColor.copy(new ne(...e.nebula[1]).multiplyScalar(.5)),this.dust.material.uniforms.uColor.value.copy(new ne(...e.nebula[1]).lerp(new ne(.85,.9,1),.6));const u=e.star,d=new wt;d.add(new ut(new Ht(u.radius,64,32),j_(u.color,u.glow)));const f=new fn(new sn({map:rn(),color:new ne(...u.glow).multiplyScalar(1.6),blending:xt,depthWrite:!1,transparent:!0,fog:!1}));f.scale.setScalar(u.radius*3.4),d.add(f);const m=new fn(new sn({map:rn(),color:new ne(...u.color).multiplyScalar(.6),blending:xt,depthWrite:!1,transparent:!0,fog:!1,opacity:.45}));m.scale.setScalar(u.radius*7),d.add(m);const v=new fn(new sn({map:Q_(),color:new ne(...u.color),blending:xt,depthWrite:!1,transparent:!0,opacity:.35,fog:!1}));v.scale.setScalar(u.radius*6.5),d.add(v);const g=v.clone();g.material=v.material.clone(),g.material.opacity=.2,g.scale.setScalar(u.radius*9),d.add(g),this.starRays=[v,g],this.root.add(d),this.star=d,this.planets=e.planets.map(y=>{const _=new wt;_.position.set(...y.pos);const x=new ut(new Ht(y.radius,96,48),$_(y));x.material.uniforms.uSun=this.sunUniform,x.material.uniforms.uSunCol.value.setRGB(...u.color).lerp(new ne(1,1,1),.5),x.rotation.z=n.range(-.3,.3),_.add(x);const C=new ut(new Ht(y.radius*1.06,64,32),X_(y.atmo,this.sunUniform));if(_.add(C),y.ring){const w=new vr(y.radius*1.45,y.radius*2.3,128,1),E=new ut(w,q_(y.pal[0],y.pal[2]));E.rotation.x=-Math.PI/2+.35,E.rotation.y=.2,_.add(E)}return this.root.add(_),{data:y,group:_,mesh:x,pos:_.position,radius:y.radius}}),this.deposits=[],tx(),this.planets.forEach((y,_)=>{const x=n.range(0,Math.PI*2),C=new A(Math.cos(x),n.range(-.12,.12),Math.sin(x)).normalize(),w=y.pos.clone().addScaledVector(C,y.radius-2),E=y.data.depositOre,P=new ne(ht[E].color),S=new wt;S.position.copy(w),S.quaternion.setFromUnitVectors(new A(0,1,0),C);const M=new In({color:P.clone().multiplyScalar(.5),emissive:P,emissiveIntensity:1.8,roughness:.2,metalness:.3});for(let O=0;O<9;O++){const H=new ut(new Zl(1,0),M),X=n.range(8,22);H.scale.set(n.range(2,4),X,n.range(2,4)),H.position.set(n.range(-14,14),X*.5,n.range(-14,14)),H.rotation.set(n.range(-.4,.4),n.range(0,3),n.range(-.4,.4)),S.add(H)}const I=new fn(new sn({map:rn(),color:P,blending:xt,depthWrite:!1,transparent:!0,opacity:.8}));I.position.y=14,I.scale.setScalar(90),S.add(I);const B=new ut(new vr(36,40,48),new Kt({color:P.clone().multiplyScalar(2),transparent:!0,opacity:.6,side:Ut,blending:xt,depthWrite:!1}));B.rotation.x=-Math.PI/2,B.position.y=3,S.add(B),this.root.add(S),this.deposits.push({planet:y,pos:w,ore:E,max:90,amount:90,group:S,glow:I,ring:B,radius:20,name:`${y.data.name} deposit`,kind:"deposit",regenDay:t})});const p=ux();p.group.position.set(...e.station.pos),p.group.rotation.y=n.range(0,Math.PI*2),this.root.add(p.group),this.station={...p,pos:p.group.position,name:e.station.name},this.gates=e.gates.map(y=>{const _=dx();return _.group.position.set(...y.pos),_.group.lookAt(0,y.pos[1],0),this.root.add(_.group),{..._,pos:_.group.position,to:y.to,name:y.name}}),this.fields=e.fields.map(y=>this.buildField(y,t)),this.derelicts=e.derelicts.map(y=>{const _=fx(y.seed);return _.group.position.set(...y.pos),_.group.rotation.set(n.range(0,3),n.range(0,3),n.range(0,3)),this.root.add(_.group),{..._,pos:_.group.position,name:y.name,seed:y.seed,kind:"derelict"}})}buildField(e,t){const n=new ti(e.seed),i=new A(...e.pos),s=gx(),a=[0,0,0],o=[];for(let d=0;d<e.count;d++){const f=n.int(0,2);a[f]++;const m=Math.pow(n.next(),.6)*e.radius,v=n.range(0,Math.PI*2),g=new A(Math.cos(v)*m,n.range(-1,1)*e.radius*.28*(1-m/e.radius*.5),Math.sin(v)*m).add(i),p=n.chance(.08),y=p?n.range(22,38):n.range(4,14),_=n.chance(.72)?e.primary:e.secondary,x=Math.round(y*(p?2.2:1.4));o.push({v:f,idx:-1,pos:g,scale:y,base:y,quat:new yn().setFromEuler(new Zt(n.range(0,6),n.range(0,6),n.range(0,6))),axis:new A(n.range(-1,1),n.range(-1,1),n.range(-1,1)).normalize(),spin:n.range(.02,.15),ore:_,amount:x,max:x,alive:!0,respawnDay:0,radius:y*1.05,kind:"rock",field:null})}const l=s.map((d,f)=>{const m=d.clone(),v=a[f],g=new fr(new Float32Array(v*3),3),p=new fr(new Float32Array(v),1);m.setAttribute("aOre",g),m.setAttribute("aDepl",p);const y=new Yu(m,this.rockMat,v);return y.frustumCulled=!1,this.root.add(y),{im:y,aOre:g,aDepl:p,n:0}}),c={data:e,center:i,radius:e.radius,rocks:o,meshes:l,name:e.name,primary:e.primary},h=new ne;for(const d of o){const f=l[d.v];d.idx=f.n++,d.field=c,h.set(ht[d.ore].color),f.aOre.setXYZ(d.idx,h.r,h.g,h.b),f.aDepl.setX(d.idx,0),this.writeRock(d)}l.forEach(d=>{d.aOre.needsUpdate=!0,d.im.instanceMatrix.needsUpdate=!0});const u=new ne(...this.sys.nebula[1]).lerp(new ne(ht[e.primary].color),.4);c.haze=[];for(let d=0;d<10;d++){const f=new fn(new sn({map:rn(),color:u,blending:xt,depthWrite:!1,transparent:!0,opacity:.09,fog:!1}));f.position.set(n.range(-1,1)*e.radius*.7,n.range(-.25,.25)*e.radius,n.range(-1,1)*e.radius*.7).add(i),f.scale.setScalar(e.radius*n.range(.7,1.3)),this.root.add(f),c.haze.push(f)}return c}writeRock(e){const t=e.field.meshes[e.v],n=e.alive?e.scale:1e-4;Kh.compose(e.pos,e.quat,vx.set(n,n,n)),t.im.setMatrixAt(e.idx,Kh)}depleteRock(e){const t=e.field.meshes[e.v];t.aDepl.setX(e.idx,1-e.amount/e.max),t.aDepl.needsUpdate=!0,e.scale=e.base*(.55+.45*(e.amount/e.max)),e.radius=e.scale*1.05,e.amount<=0&&(e.alive=!1,e.respawnDay=this.game.state.day+1),this.writeRock(e),t.im.instanceMatrix.needsUpdate=!0}onNewDay(e){for(const t of this.fields){let n=!1;for(const i of t.rocks)if(!i.alive&&e>=i.respawnDay){i.alive=!0,i.amount=i.max,i.scale=i.base,i.radius=i.scale*1.05;const s=t.meshes[i.v];s.aDepl.setX(i.idx,0),s.aDepl.needsUpdate=!0,this.writeRock(i),n=!0}n&&t.meshes.forEach(i=>i.im.instanceMatrix.needsUpdate=!0)}for(const t of this.deposits)t.amount=Math.min(t.max,t.amount+45)}update(e,t,n){const i=on.uTime.value;this.sky.position.copy(t),this.dust.material.uniforms.uCam.value.copy(t),this.starRays[0].material.rotation=i*.01,this.starRays[1].material.rotation=-i*.006;for(const s of this.planets)s.mesh.rotation.y+=s.data.spin*e;this.station.spin.rotation.y+=e*.05,this.station.lights.forEach((s,a)=>s.visible=Math.sin(i*3+a*.8)>-.2),this.station.beacon.material.opacity=.6+.4*Math.sin(i*2);for(const s of this.gates)s.group.rotation.z+=e*.03,s.portal.rotation.z-=e*.1;for(const s of this.deposits)s.ring.scale.setScalar(1+.15*Math.sin(i*2)),s.glow.material.opacity=.35+.65*(s.amount/s.max);for(const s of this.derelicts){const a=Math.sin(i*13+s.seed)>.2?1:.15;s.glow.material.opacity=a,s.lamp.visible=a>.5}for(const s of this.fields)if(!(s.center.distanceTo(n)>s.radius+1600)){for(const a of s.rocks)a.alive&&(Zh.setFromAxisAngle(a.axis,a.spin*e),a.quat.premultiply(Zh),this.writeRock(a));s.meshes.forEach(a=>a.im.instanceMatrix.needsUpdate=!0)}}findMineable(e,t){let n=null,i=1/0;for(const s of this.fields)if(!(s.center.distanceTo(e)>s.radius+t+60))for(const a of s.rocks){if(!a.alive)continue;const o=a.pos.distanceTo(e)-a.radius;o<t&&o<i&&(i=o,n=a)}for(const s of this.deposits){if(s.amount<=0)continue;const a=s.pos.distanceTo(e)-s.radius;a<t+40&&a<i&&(i=a,n=s)}return n}collide(e,t,n){const i=(a,o)=>{ss.subVectors(e,a);const l=ss.length(),c=o+t;if(l<c&&l>.001){if(ss.multiplyScalar(1/l),e.addScaledVector(ss,c-l),n){const h=n.dot(ss);h<0&&n.addScaledVector(ss,-h*1.2)}return!0}return!1};let s=!1;for(const a of this.planets)s=i(a.pos,a.radius+6)||s;i(this.star.position,this.sys.star.radius+40),this.station.pos.distanceTo(e)<160&&i(this.station.pos,22);for(const a of this.fields)if(!(a.center.distanceTo(e)>a.radius+60))for(const o of a.rocks)o.alive&&Math.abs(o.pos.x-e.x)<o.radius+t&&Math.abs(o.pos.z-e.z)<o.radius+t&&(s=i(o.pos,o.radius*.85)||s);return s}}const tn=new A,mi=new A,_x=new yn,xx=new Zt,Jh=new A(0,0,1);let Mx=1;class wo{constructor(e,{kind:t,hullId:n="wren",palette:i="player",tpl:s=null,stats:a,name:o}){this.game=e,this.kind=t,this.hullId=n,this.name=o||n,this.uid=Mx++;const l=s||Js(n,i),c=t==="outlaw"?new ne(1,.35,.25):t==="trader"?new ne(1,.8,.4):new ne(.35,.9,1),h=cx(l,c);this.obj=h.group,this.engines=h.engines,this.shieldMesh=h.shield,this.radius=h.radius,this.muzzles=h.muzzles,this.size=h.size,e.scene.add(this.obj),this.pos=this.obj.position,this.yaw=0,this.pitch=0,this.roll=0,this.yawRate=0,this.speed=0,this.throttle=0,this.boost=!1,this.cruise=!1,this.vel=new A,this.hitAges=[9,9,9,9],this.hitIdx=0,this.flash=0,this.lastHit=-99,this.lastAttacker=null,this.cargo={},this.dead=!1,this.firing=!1,this.beamTarget=null,this.applyStats(a,!0)}applyStats(e,t){const n=this.maxHp||e.hull;this.stats=e,this.maxHp=e.hull,this.maxShield=e.shield,this.maxEnergy=e.energy,t?(this.hp=this.maxHp,this.shield=this.maxShield,this.energy=this.maxEnergy):(this.hp=Math.min(this.maxHp,this.hp*(this.maxHp/n)),this.shield=Math.min(this.shield,this.maxShield),this.energy=Math.min(this.energy,this.maxEnergy))}get forward(){return tn.copy(Jh).applyQuaternion(this.obj.quaternion)}forwardTo(e){return e.copy(Jh).applyQuaternion(this.obj.quaternion)}cargoUsed(){let e=this.reserved||0;for(const t in this.cargo)e+=this.cargo[t];return e}cargoValue(){let e=this.missionLure||0;for(const t in this.cargo)e+=this.cargo[t]*ht[t].base;return e}damage(e,t,n){if(this.dead)return!1;if(this.lastHit=this.game.time,this.lastAttacker=n||null,mi.subVectors(t,this.pos).applyQuaternion(_x.copy(this.obj.quaternion).invert()),mi.divide(this.shieldMesh.scale).normalize(),this.shield>0){const i=Math.min(this.shield,e);this.shield-=i,e-=i;const s=this.shieldMesh.material.uniforms;this.game.time-(this._lastRipple||0)>.12&&(this._lastRipple=this.game.time,s.uHitDir.value[this.hitIdx].copy(mi),this.hitAges[this.hitIdx]=0,this.hitIdx=(this.hitIdx+1)%4),this.flash=Math.min(1,this.flash+.5)}return e>0&&(this.hp-=e,Math.random()<.35&&this.game.fx.sparks(tn.copy(this.pos).addScaledVector(mi.applyQuaternion(this.obj.quaternion),this.radius*.5),4,16756832)),this.hp<=0?(this.hp=0,!0):!1}steerTo(e,t,n=1){tn.subVectors(e,this.pos);const i=Math.hypot(tn.x,tn.z),s=Math.atan2(tn.x,tn.z),a=-Math.atan2(tn.y,i),o=this.stats.turn*n*t,l=Gh(s-this.yaw),c=St(l,-o,o);return this.yaw=Gh(this.yaw+c),this.yawRate=c/Math.max(t,1e-4),this.pitch+=St(a-this.pitch,-o*.7,o*.7),this.pitch=St(this.pitch,-1.2,1.2),Math.abs(l)+Math.abs(a-this.pitch)}updateMotion(e,t){const n=this.stats;let i=n.speed*this.throttle;this.boost&&this.energy>1&&(i=n.speed*1.75,this.energy-=14*e),this.cruise&&(i=n.speed*5.5);const s=this.cruise?.9:i>this.speed?1.6:2.2;this.speed=Li(this.speed,i,s,e),this.roll=Li(this.roll,St(this.yawRate*.45,-.9,.9),4,e),this.obj.quaternion.setFromEuler(xx.set(this.pitch,this.yaw,this.roll,"YXZ")),this.forwardTo(this.vel).multiplyScalar(this.speed),this.pos.addScaledVector(this.vel,e),t&&t.collide(this.pos,this.radius*.6,this.vel)&&(this.speed*=.96),this.game.time-this.lastHit>3&&(this.shield=Math.min(this.maxShield,this.shield+n.shieldRegen*e)),!this.firing&&!this.boost?this.energy=Math.min(this.maxEnergy,this.energy+n.energyRegen*e):this.energy=Math.min(this.maxEnergy,this.energy+n.energyRegen*.25*e)}updateVisual(e){const t=this.shieldMesh.material.uniforms;for(let i=0;i<4;i++)this.hitAges[i]+=e,t.uHitAge.value[i]=this.hitAges[i];this.flash=Math.max(0,this.flash-e*1.6),t.uFlash.value=this.flash,t.uStrength.value=this.maxShield>0?this.shield/this.maxShield:0;const n=this.cruise?1.6:St(this.speed/(this.stats.speed||1),.12,1.75);for(const i of this.engines)i.ex.scale.z=i.ex.userData.baseLen*(.25+n*.9)*(.92+Math.random()*.16),i.ex.material.uniforms.uPower.value=.35+n*.5,i.sp&&i.sp.scale.setScalar(i.sp.userData.baseScale*(.7+n*.45))}remove(){this.dead=!0,this.game.scene.remove(this.obj),this.obj.traverse(e=>{e.material&&e.material.isShaderMaterial}),this.shieldMesh.material.dispose()}}class bx{constructor(e,t=1600){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.col=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.size=new Float32Array(t),this.alpha=new Float32Array(t);const n=new Mt;n.setAttribute("position",new yt(this.pos,3).setUsage(Sr)),n.setAttribute("color",new yt(this.col,3).setUsage(Sr)),n.setAttribute("aSize",new yt(this.size,1).setUsage(Sr)),n.setAttribute("aAlpha",new yt(this.alpha,1).setUsage(Sr));const i=new pt({uniforms:{uMap:{value:rn()},uPx:{value:1}},vertexShader:`attribute float aSize; attribute float aAlpha; attribute vec3 color; uniform float uPx; varying vec3 vC; varying float vA;
        void main(){ vC=color; vA=aAlpha; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize = aSize*uPx*600.0/max(-mv.z,1.0); gl_Position=projectionMatrix*mv; }`,fragmentShader:"uniform sampler2D uMap; varying vec3 vC; varying float vA; void main(){ float t=texture2D(uMap, gl_PointCoord).a; gl_FragColor=vec4(vC*t*vA*2.0, t*vA); }",transparent:!0,depthWrite:!1,blending:xt});this.points=new Wl(n,i),this.points.frustumCulled=!1,this.points.renderOrder=6,this.geo=n,e.add(this.points)}emit(e,t,n,i,s){if(this.n>=this.max)return;const a=this.n++;this.pos.set([e.x,e.y,e.z],a*3),this.vel.set([t.x,t.y,t.z],a*3);const o=n.isColor?n:new ne(n);this.col.set([o.r,o.g,o.b],a*3),this.size[a]=i,this.life[a]=s,this.maxLife[a]=s,this.alpha[a]=1}burst(e,t,n,i,s,a){const o=new ne(i);for(let l=0;l<t;l++)mi.set(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize().multiplyScalar(n*(.3+Math.random()*.7)),this.emit(e,mi,o,s*(.5+Math.random()),a*(.5+Math.random()*.8))}sparks(e,t,n){this.burst(e,t,30,n,1.2,.5)}update(e){let t=0;for(;t<this.n;){if(this.life[t]-=e,this.life[t]<=0){const s=--this.n;if(t!==s){for(let a=0;a<3;a++)this.pos[t*3+a]=this.pos[s*3+a],this.vel[t*3+a]=this.vel[s*3+a],this.col[t*3+a]=this.col[s*3+a];this.life[t]=this.life[s],this.maxLife[t]=this.maxLife[s],this.size[t]=this.size[s]}continue}const n=Math.exp(-1.2*e);for(let s=0;s<3;s++)this.vel[t*3+s]*=n,this.pos[t*3+s]+=this.vel[t*3+s]*e;const i=this.life[t]/this.maxLife[t];this.alpha[t]=i*i,t++}this.geo.setDrawRange(0,this.n);for(const n of["position","color","aSize","aAlpha"])this.geo.attributes[n].needsUpdate=!0}}function Sx(){const r=new Es(1,1);r.rotateY(-Math.PI/2),r.translate(0,0,.5);const e=r.clone();e.rotateZ(Math.PI/2);const t=new Mt,n=r.attributes.position.array,i=e.attributes.position.array,s=r.attributes.uv.array,a=e.attributes.uv.array,o=new Float32Array(n.length+i.length);o.set(n),o.set(i,n.length);const l=new Float32Array(s.length+a.length);l.set(s),l.set(a,s.length);const c=Array.from(r.index.array),h=Array.from(e.index.array).map(u=>u+r.attributes.position.count);return t.setAttribute("position",new yt(o,3)),t.setAttribute("uv",new yt(l,2)),t.setIndex(c.concat(h)),t}class Tx{constructor(e){this.game=e,this.scene=e.scene,this.particles=new bx(e.scene),this.beamGeo=Sx(),this.beams=[],this.missiles=[],this.crates=[],this.waves=[],this.flashLight=new cd(16752736,0,600,1.5),e.scene.add(this.flashLight),this.missileTpl=mx(),this.crateTpl=px()}sparks(e,t,n){this.particles.sparks(e,t,n)}makeBeam(e){const t=new ut(this.beamGeo,Y_(e));return t.material.uniforms.uTime=on.uTime,t.frustumCulled=!1,t.visible=!1,t.renderOrder=7,this.scene.add(t),t}showBeam(e,t,n,i){e.visible=!0,e.position.copy(t),e.lookAt(n);const s=t.distanceTo(n);e.scale.set(i,i,s),e.material.uniforms.uLen.value=s}explosion(e,t=1,n=16752720){const i=this.particles;i.burst(e,Math.round(40*Math.min(t,3)),70*t,n,6*t,1.1),i.burst(e,Math.round(30*Math.min(t,3)),140*t,16773312,2.2*t,.7),i.burst(e,16,30*t,6975354,9*t,2.2);const s=new fn(new sn({map:rn(),color:new ne(n).multiplyScalar(2),blending:xt,depthWrite:!1,transparent:!0}));s.position.copy(e),s.scale.setScalar(10*t),this.scene.add(s);const a=new ut(new vr(.8,1,48),new Kt({color:new ne(.6,.85,1).multiplyScalar(2),transparent:!0,side:Ut,blending:xt,depthWrite:!1}));a.position.copy(e),a.lookAt(this.game.camera.position),this.scene.add(a),this.waves.push({sp:s,ring:a,t:0,scale:t}),this.flashLight.position.copy(e),this.flashLight.intensity=60*t,this.flashLight.distance=400*t,this.game.audio.play("explosion",{pos:e,vol:Math.min(1,.5+t*.3)});const o=this.game.player;if(o){const l=1-e.distanceTo(o.pos)/700;l>0&&this.game.pad.rumble(l*Math.min(1,.35+t*.25),l*.7,180+t*120)}}launchMissile(e,t,n){const i=this.missileTpl.clone(!0),s=e.forwardTo(new A);i.position.copy(e.pos).addScaledVector(s,e.radius*.6).add(new A(0,-1.5,0)),i.lookAt(tn.copy(i.position).add(s)),this.scene.add(i),this.missiles.push({obj:i,pos:i.position,vel:s.clone().multiplyScalar(Math.max(e.speed,40)+40),target:t,owner:e,dmg:n,life:7}),this.game.audio.play("missile",{pos:e.pos,vol:.7})}dropCrate(e,t,n=0){const i=this.crateTpl.clone(!0);i.position.copy(e).add(new A((Math.random()-.5)*16,(Math.random()-.5)*8,(Math.random()-.5)*16)),this.scene.add(i),this.crates.push({obj:i,pos:i.position,cargo:t,credits:n,life:240,spin:new A(Math.random(),Math.random(),Math.random())})}clearAll(){for(const e of this.missiles)this.scene.remove(e.obj);for(const e of this.crates)this.scene.remove(e.obj);for(const e of this.waves)this.scene.remove(e.sp),this.scene.remove(e.ring);this.missiles=[],this.crates=[],this.waves=[]}update(e){this.particles.update(e),this.flashLight.intensity*=Math.exp(-e*7);for(let n=this.waves.length-1;n>=0;n--){const i=this.waves[n];i.t+=e;const s=i.t/.9;i.sp.scale.setScalar(10*i.scale*(1+s*3)),i.sp.material.opacity=Math.max(0,1-s),i.ring.scale.setScalar(4+70*i.scale*s),i.ring.material.opacity=Math.max(0,1-s),s>=1&&(this.scene.remove(i.sp),this.scene.remove(i.ring),i.sp.material.dispose(),i.ring.material.dispose(),i.ring.geometry.dispose(),this.waves.splice(n,1))}for(let n=this.missiles.length-1;n>=0;n--){const i=this.missiles[n];i.life-=e;const s=i.target;if(s&&!s.dead){tn.subVectors(s.pos,i.pos);const a=tn.length();if(tn.normalize().multiplyScalar(300),i.vel.lerp(tn,1-Math.exp(-e*3.2)),a<s.radius+6){const o=s.damage(i.dmg,i.pos,i.owner);s===this.game.player&&this.game.pad.rumble(.75,.6,260),this.particles.burst(i.pos,24,60,16760960,3,.6),this.game.audio.play("explosion",{pos:i.pos,vol:.45}),this.game.onShipHit(s,i.owner,o),i.life=0}}else i.vel.multiplyScalar(1+e*.5);i.pos.addScaledVector(i.vel,e),i.obj.lookAt(mi.copy(i.pos).add(i.vel)),Math.random()<.8&&this.particles.emit(i.pos,mi.set(0,0,0),new ne(.9,.85,.8),2.2,.8),i.life<=0&&(this.scene.remove(i.obj),this.missiles.splice(n,1))}const t=this.game.player;for(let n=this.crates.length-1;n>=0;n--){const i=this.crates[n];i.life-=e,i.obj.rotation.x+=i.spin.x*e,i.obj.rotation.y+=i.spin.y*e;let s=i.life<=0;if(!s&&t&&!t.dead&&!this.game.docked){const a=i.pos.distanceTo(t.pos);a<90+t.radius&&i.pos.lerp(t.pos,1-Math.exp(-e*3)),a<t.radius+6&&(s=this.game.collectCrate(i))}if(!s){for(const a of this.game.outlaws)if(!a.dead&&i.pos.distanceTo(a.pos)<a.radius+12){for(const o in i.cargo)a.cargo[o]=(a.cargo[o]||0)+i.cargo[o];s=!0;break}}s&&(this.scene.remove(i.obj),this.crates.splice(n,1))}}}function Qh(r){return{v:1,seed:r,credits:2e3,day:1,dayTime:.25,systemId:null,pos:null,ships:[{uid:1,hull:"wren",mods:_a(),hp:null,missiles:0,cargo:{}}],active:1,nextUid:2,market:{},intel:{},wanted:{},outlawRoll:{},derelictLooted:{},stats:{earned:0,mined:0,kills:0,trades:0,jumps:0,contracts:0},missions:[],offers:{},tutorial:{mined:!1,docked:!1,sold:!1},sound:!0,quality:"high"}}class Eo{constructor(e,t){this.galaxy=e,this.state=t;for(const n of e.systems)t.market[n.id]||(t.market[n.id]=this.initMarket(n))}initMarket(e){const t=new ti(e.seed+99),n={drift:{},pressure:{},stock:{}};for(const i of Dn)n.drift[i.id]=t.range(.92,1.08),n.pressure[i.id]=0,n.stock[i.id]=this.sells(e,i.id)?Math.round(t.range(60,140)*(i.base>150?.4:1)):0;return n}sys(e){return this.galaxy.systems[e]}mult(e,t){return nn[this.sys(e).eco].mult[t]}sells(e,t){return nn[e.eco].mult[t]<1}sellPrice(e,t){const n=this.state.market[e];return Math.max(1,Math.round(ht[t].base*this.mult(e,t)*n.drift[t]*.97*(1-.32*Math.min(1,Math.max(0,n.pressure[t])))))}buyPrice(e,t){const n=this.state.market[e];return Math.max(1,Math.round(ht[t].base*this.mult(e,t)*n.drift[t]*1.05*(1+.2*Math.max(0,-n.pressure[t]))))}stock(e,t){return this.state.market[e].stock[t]}canBuy(e,t){return this.sells(this.sys(e),t)}sell(e,t,n){const i=this.state.market[e];let s=0;for(let a=0;a<n;a++)s+=this.sellPrice(e,t),i.pressure[t]+=1/(ht[t].base>100?45:80);return i.stock[t]+=this.sells(this.sys(e),t)?n:0,s}quoteBuy(e,t,n){const i=this.state.market[e],s=i.pressure[t];let a=0;for(let o=0;o<n;o++)a+=this.buyPrice(e,t),i.pressure[t]-=1/120;return i.pressure[t]=s,a}buy(e,t,n){const i=this.state.market[e];let s=0;for(let a=0;a<n;a++)s+=this.buyPrice(e,t),i.pressure[t]-=1/120;return i.stock[t]-=n,s}recordIntel(e){const t={};for(const n of Dn)t[n.id]={s:this.sellPrice(e,n.id),b:this.canBuy(e,n.id)?this.buyPrice(e,n.id):null};this.state.intel[e]={day:this.state.day,prices:t}}daily(e){const t=new ti(this.state.seed+e*31);for(const n of this.galaxy.systems){const i=this.state.market[n.id];for(const s of Dn)if(i.pressure[s.id]*=.55,i.drift[s.id]=Math.min(1.16,Math.max(.85,i.drift[s.id]+t.range(-.05,.05))),this.sells(n,s.id)){const a=s.base>150?60:140;i.stock[s.id]=Math.min(a,i.stock[s.id]+Math.round(a*.3))}}}}function wx(r){return Ct[r.hull].price*.6}function Al(r){let e=r.credits;for(const t of r.ships){e+=wx(t);for(const n in t.cargo)e+=t.cargo[n]*ht[n].base}return e}function Ii(r){const e=Al(r),t=[8e3,25e3,6e4,15e4];let n=0;for(;n<t.length&&e>=t[n];)n++;return n}const eu=["Drifter","Hauler","Prospector","Merchant Captain","Frontier Magnate"],xa=4,pd=2,Ex=["courier","passenger","supply"],Ax=["Halden Logistics","Orbital Relief Fund","Meridian Survey Corps","Kessler & Daughters","Free Haulers Guild","Station Medical Bay","Colony Administration","Brightline Couriers"],Rx=["sealed medical crates","survey core samples","encrypted data cores","reactor spares","diplomatic pouches","seed vault canisters","relief rations","precision optics"],Cx=["a geology team","a settler family","off-shift miners","a medical crew","pilgrims","a news crew","engineering contractors","survey students"],Px=["Magistrate Okafor","Envoy Lusine Varga","Director Halvard Ness","Dr. Mireille Achterberg","Senator Ilya Brandt","Arbiter Yuen Sato"],Ao=new Map;function Ro(r,e){const t=`${r.seed}:${e}`;return Ao.has(t)||Ao.set(t,fd(r.systems[e],r)),Ao.get(t)}function md(r,e){const t=r.systems.map(()=>1/0);t[e]=0;const n=[e];for(;n.length;){const i=n.shift();for(const s of r.systems[i].links)t[s]===1/0&&(t[s]=t[i]+1,n.push(s))}return t}function Lx(r,e,t){const n={[e]:-1},i=[e];for(;i.length;){const o=i.shift();if(o===t)break;for(const l of r.systems[o].links)l in n||(n[l]=o,i.push(l))}if(!(t in n))return null;const s=[];let a=t;for(;a!==-1;)s.unshift(a),a=n[a];return s}function tu(r){return Array.isArray(r.missions)||(r.missions=[]),(!r.offers||typeof r.offers!="object")&&(r.offers={}),Number.isFinite(r.stats.contracts)||(r.stats.contracts=0),r}function Ix(r){if(r.missions!=null){if(!Array.isArray(r.missions))throw new Error("the contract list is invalid");for(const e of r.missions)if(!e||!Ex.includes(e.type)||!e.dest||!Number.isInteger(e.dest.sys)||!Number.isFinite(e.reward)||!Number.isInteger(e.deadline))throw new Error("a contract record is incomplete")}}function Ma(r){return r.type==="courier"?r.qty:r.type==="passenger"?r.pax*pd:0}function Dx(r){return r.type==="courier"?r.qty*35:r.type==="passenger"?r.pax*(r.vip?400:60):0}function gd(r){return r.type!=="supply"}function Nx(r,e,t){const{galaxy:n,sysId:i,day:s,rank:a}=e,o=e.dist,l=1+a*.15,c=w=>Math.round(w/10)*10,h=r.weighted({courier:3,passenger:3,supply:2}),u=n.systems.filter(w=>w.id!==i&&o[w.id]<=3),d=()=>{const w={};for(const E of u)w[E.id]=o[E.id]===1?5:o[E.id]===2?3:1;return Number(r.weighted(w))},f=w=>{const E=Ro(n,i);if(w&&E.planets.length&&r.chance(.3)){const M=r.int(0,E.planets.length-1);return{sys:i,kind:"planet",planet:M,name:`${E.planets[M].name} colony`}}const P=d(),S=Ro(n,P);if(w&&S.planets.length&&r.chance(.35)){const M=r.int(0,S.planets.length-1);return{sys:P,kind:"planet",planet:M,name:`${S.planets[M].name} colony`}}return{sys:P,kind:"station",name:S.station.name}},m={id:`${i}-${s}-${t}`,type:h,client:r.pick(Ax),from:{sys:i,name:Ro(n,i).station.name},offeredDay:s};if(h==="supply"){const w=f(!1),E=nn[n.systems[w.sys].eco].mult,P=Dn.filter(B=>E[B.id]>=1.15),S=P.length?r.pick(P):r.pick(Dn),M=r.chance(.65)?r.int(6,16):r.int(20,45),I=o[w.sys];return{...m,dest:w,jumps:I,commodity:S.id,qty:M,title:`Supply ${M} ${S.name}`,reward:c(M*S.base*E[S.id]*1.4*(1+a*.05)),deposit:0,deadline:s+2+I*2}}const v=f(!0),g=o[v.sys],p=v.kind==="planet"?1:0;if(h==="courier"){const w=r.next(),E=w<.6?r.int(6,16):w<.9?r.int(20,45):r.int(55,110),P=r.pick(Rx);return{...m,dest:v,jumps:g,qty:E,cargoName:P,title:`Deliver ${E} units of ${P}`,reward:c((180+380*g+E*(9+6*g)+p*120)*l),deposit:c(E*12),deadline:s+1+g*2+p}}const y=r.chance(.22),_=y?r.int(1,2):r.int(1,6),x=y?r.pick(Px):r.pick(Cx),C=c((140+330*g+_*(70+60*g)+p*100)*(y?1.8:1)*l);return{...m,dest:v,jumps:g,pax:_,vip:y,who:x,title:y?`Escort ${x}${_>1?" + aide":""}`:`Transport ${_} passenger${_>1?"s":""} (${x})`,reward:C,deposit:0,deadline:s+1+g*2+p}}function nu(r,e,t,n){const i=String(t);let s=r.offers[i];if(!s||s.day!==r.day){const a=new ti(r.seed*31+t*977+r.day*7919>>>0),o={galaxy:e,sysId:t,day:r.day,rank:n,dist:md(e,t)},l=4+a.int(0,1),c=[];for(let h=0;h<l;h++)c.push(Nx(a,o,h));s={day:r.day,list:c,taken:[]};for(const h of Object.keys(r.offers))r.offers[h].day!==r.day&&delete r.offers[h];r.offers[i]=s}return s.list.filter(a=>!s.taken.includes(a.id))}function Ux(r,e){const t=r.offers[String(e.from.sys)];t&&!t.taken.includes(e.id)&&t.taken.push(e.id)}function Ox(r){return r.type==="passenger"?r.vip?{label:"VIP ESCORT",cls:"vip"}:{label:"PASSENGERS",cls:"pax"}:r.type==="courier"?{label:"COURIER",cls:"courier"}:{label:"SUPPLY",cls:"supply"}}function Fx(r,e,t){const n=e.systems[r.dest.sys].name,i=md(e,t)[r.dest.sys];return`${r.dest.name} · ${n}${i===0?" (this system)":` (${i} jump${i>1?"s":""})`}`}function Bx(r){return r.type==="supply"?`Bring ${r.qty} ${ht[r.commodity].name} (buy or mine it)`:r.type==="courier"?`Takes ${r.qty} hold space`:`Takes ${r.pax*pd} hold space (${r.pax} cabin${r.pax>1?"s":""})${r.vip?" · outlaws hunt VIPs":""}`}function kx(r,e){const t=r.deadline-e;return`Due end of Day ${r.deadline} · ${t<=0?"TODAY":`${t} day${t>1?"s":""} left`}`}const _r="lumen_drift_save_v1",iu="lumen_drift_save_corrupt",vd=r=>`lumen_drift_slot_${r}`,zx=3;function tc(r){const e=t=>{throw new Error(t)};(!r||typeof r!="object")&&e("the save is empty"),r.v!==1&&e(`unsupported save version (${r.v})`),Number.isFinite(r.seed)||e("the galaxy seed is missing"),Number.isFinite(r.credits)||e("credits are missing"),(!Number.isInteger(r.day)||r.day<1)&&e("the day counter is invalid"),(!Array.isArray(r.ships)||!r.ships.length)&&e("no ships are recorded");for(const t of r.ships)Ct[t.hull]||e(`unknown ship type "${t.hull}"`),(!t.mods||typeof t.mods!="object"||!t.cargo||typeof t.cargo!="object")&&e("a ship record is incomplete");return r.ships.some(t=>t.uid===r.active)||e("the active ship is missing"),r.systemId!=null&&!(Number.isInteger(r.systemId)&&r.systemId>=0&&r.systemId<ar(r.seed).systems.length)&&e("the current star system is invalid"),(!r.market||typeof r.market!="object"||!r.stats||!r.tutorial)&&e("market or pilot records are missing"),Ix(r),r}function nc(r){const e=r.ships.find(i=>i.uid===r.active),t=ar(r.seed),n=t.systems[r.systemId!=null?r.systemId:t.startId];return{day:r.day,credits:Math.round(r.credits),ship:Ct[e.hull].name,fleet:r.ships.length,system:n?n.name:"?"}}const yd=r=>tc(JSON.parse(r));function Hx(){const r=localStorage.getItem(_r);if(r==null)return null;try{return yd(r)}catch(e){return console.warn("Autosave unreadable, kept a copy under",iu,e.message),localStorage.setItem(iu,r),localStorage.removeItem(_r),null}}function Vx(r){try{return localStorage.setItem(_r,JSON.stringify(r)),!0}catch(e){return console.warn("Autosave failed:",e.name,e.message),!1}}function Gx(){localStorage.removeItem(_r)}function Wx(){const r=localStorage.getItem(_r);if(r==null)return null;try{const e=yd(r);return{...nc(e),savedAt:e.savedAt||null}}catch(e){return{error:e.message}}}function Co(r){const e=localStorage.getItem(vd(r));if(e==null)return null;try{const t=JSON.parse(e),n=tc(t.state);return{state:n,savedAt:t.savedAt,...nc(n)}}catch(t){return{error:t.message}}}function $x(r,e){localStorage.setItem(vd(r),JSON.stringify({savedAt:Date.now(),state:e}))}function Xx(r){return JSON.stringify({game:"lumen-drift",format:1,savedAt:Date.now(),state:r},null,1)}function qx(r){const e=new Date,t=n=>String(n).padStart(2,"0");return`lumen-drift-day${r.day}-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${t(e.getHours())}${t(e.getMinutes())}.json`}function jx(r){let e;try{e=JSON.parse(r)}catch{throw new Error("this file is not a Lumen Drift save (it is not readable save data)")}const t=e&&e.game==="lumen-drift"?e.state:e;try{return tc(t)}catch(n){throw new Error(`this file can't be loaded: ${n.message}`)}}function Yx(){!navigator.storage||!navigator.storage.persist||navigator.storage.persist().then(r=>console.info("Persistent storage",r?"granted":"not granted")).catch(r=>console.warn("Persistent storage request failed:",r.message))}function Po(r){if(!r)return"time unknown";const e=Math.round((Date.now()-r)/6e4);if(e<1)return"just now";if(e<60)return`${e} min ago`;const t=Math.round(e/60);return t<24?`${t} h ago`:new Date(r).toLocaleDateString()}const _d={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ps{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Kx=new wa(-1,1,1,-1,0,1);class Zx extends Mt{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}}const Jx=new Zx;class ic{constructor(e){this._mesh=new ut(Jx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Kx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Rl extends Ps{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ur.clone(e.uniforms),this.material=new pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ic(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class su extends Ps{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Qx extends Ps{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class eM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Z);this._width=n.width,this._height=n.height,t=new En(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rl(_d),this.copyPass.material.blending=Zn,this.clock=new Hy}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}su!==void 0&&(a instanceof su?n=!0:a instanceof Qx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class tM extends Ps{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ne}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const nM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ts extends Ps{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Z(e.x,e.y):new Z(256,256),this.clearColor=new ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new En(s,a,{type:Jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new En(s,a,{type:Jn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new En(s,a,{type:Jn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=nM;this.highPassUniforms=ur.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Z(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=_d;this.copyUniforms=ur.clone(h.uniforms),this.blendMaterial=new pt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:xt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ne,this.oldClearAlpha=1,this.basic=new Kt,this.fsQuad=new ic(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Z(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ts.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ts.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Z(.5,.5)},direction:{value:new Z(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ts.BlurDirectionX=new Z(1,0);Ts.BlurDirectionY=new Z(0,1);const iM={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class sM extends Ps{constructor(){super();const e=iM;this.uniforms=ur.clone(e.uniforms),this.material=new xy({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ic(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},qe.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===cu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===uu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Pl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===du?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const rM={uniforms:{tDiffuse:{value:null},uTime:{value:0},uSat:{value:1.1},uContrast:{value:1.08},uLift:{value:.012},uShadow:{value:new ne(.02,.1,.16)},uHigh:{value:new ne(1,.92,.82)},uVignette:{value:.38},uGrain:{value:.035},uChroma:{value:.0016},uDamage:{value:0},uWarp:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime,uSat,uContrast,uLift,uVignette,uGrain,uChroma,uDamage,uWarp; uniform vec3 uShadow,uHigh; varying vec2 vUv;
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
    }`},aM={uniforms:{tDiffuse:{value:null},uMax:{value:24}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uMax; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      // bit-level Inf/NaN test (exponent all ones): unlike isnan(), D3D shader compilers on Windows
      // cannot optimise this away
      uvec3 e = floatBitsToUint(c.rgb) & uvec3(0x7F800000u);
      if (any(equal(e, uvec3(0x7F800000u)))) c.rgb = vec3(0.0);
      float m = max(max(c.r, c.g), c.b);
      if (m > uMax) c.rgb *= uMax / m;
      gl_FragColor = c;
    }`};class oM{constructor(e,t,n){this.renderer=e;const i=e.getSize(new Z);this.composer=new eM(e),this.renderPass=new tM(t,n),this.composer.addPass(this.renderPass),this.clamp=new Rl(aM),this.composer.addPass(this.clamp),this.bloom=new Ts(new Z(i.x/2,i.y/2),.7,.55,.8),this.composer.addPass(this.bloom),this.output=new sM,this.composer.addPass(this.output),this.grade=new Rl(rM),this.composer.addPass(this.grade),this.enabled=!0}setSize(e,t,n){this.composer.setPixelRatio(n),this.composer.setSize(e,t),this.bloom.resolution.set(e*n*.5,t*n*.5)}setEnabled(e){this.enabled=e,this.bloom.enabled=e,this.grade.enabled=e}render(e,t){this.grade.uniforms.uTime.value=t,this.composer.render(e)}}const Lo={calm:"./audio/bgm_calm.mp3",battle:"./audio/bgm_battle.mp3",beam:"./audio/sfx_beam.mp3",mine:"./audio/sfx_mine.mp3",missile:"./audio/sfx_missile.mp3",explosion:"./audio/sfx_explosion.mp3",click:"./audio/sfx_click.mp3",coins:"./audio/sfx_coins.mp3",warp:"./audio/sfx_warp.mp3",alarm:"./audio/sfx_alarm.mp3"};class lM{constructor(){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.9,this.master.connect(this.ctx.destination),this.sfx=this.ctx.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master),this.musicBus=this.ctx.createGain(),this.musicBus.gain.value=.42,this.musicBus.connect(this.master),this.buffers={},this.loops={},this.music={},this.current=null,this.listener=null,this.enabled=!0}async load(e){const t=Object.keys(Lo);let n=0;await Promise.all(t.map(async i=>{try{const s=await fetch(Lo[i]);if(!s.ok)throw new Error(`HTTP ${s.status} for ${Lo[i]}`);const a=await s.arrayBuffer();this.buffers[i]=await this.ctx.decodeAudioData(a)}catch(s){console.warn("audio load failed",i,s)}n++,e&&e(n/t.length,i)}))}unlock(){this.ctx.state!=="running"&&this.ctx.resume()}setEnabled(e){this.enabled=e,this.master.gain.setTargetAtTime(e?.9:0,this.ctx.currentTime,.05)}attenuate(e){if(!e||!this.listener)return 1;const t=e.distanceTo(this.listener);return Math.max(0,1-t/1400)}play(e,{vol:t=1,pos:n=null,rate:i=1}={}){const s=this.buffers[e];if(!s)return;const a=t*this.attenuate(n);if(a<.02)return;const o=this.ctx.createBufferSource();o.buffer=s,o.playbackRate.value=i*(.94+Math.random()*.12);const l=this.ctx.createGain();l.gain.value=a,o.connect(l),l.connect(this.sfx),o.start()}loop(e,t,n,i=.5,s=1){let a=this.loops[e];if(n&&!a&&this.buffers[t]){const o=this.ctx.createBufferSource();o.buffer=this.buffers[t],o.loop=!0,o.playbackRate.value=s;const l=this.ctx.createGain();l.gain.value=0,o.connect(l),l.connect(this.sfx),o.start(),l.gain.setTargetAtTime(i,this.ctx.currentTime,.04),a=this.loops[e]={s:o,g:l}}else if(!n&&a){a.g.gain.setTargetAtTime(0,this.ctx.currentTime,.06);const o=a.s;setTimeout(()=>{try{o.stop()}catch{}},300),delete this.loops[e]}else n&&a&&a.g.gain.setTargetAtTime(i,this.ctx.currentTime,.05)}setMusic(e){if(this.current===e)return;const t=this.ctx.currentTime;if(this.current&&this.music[this.current]){const a=this.music[this.current];a.g.gain.setTargetAtTime(0,t,.8);const o=a.s;setTimeout(()=>{try{o.stop()}catch{}},4e3),delete this.music[this.current]}this.current=e;const n=this.buffers[e];if(!n)return;const i=this.ctx.createBufferSource();i.buffer=n,i.loop=!0;const s=this.ctx.createGain();s.gain.value=0,i.connect(s),s.connect(this.musicBus),i.start(),s.gain.setTargetAtTime(e==="battle"?.75:1,t,1.2),this.music[e]={s:i,g:s}}}const $=r=>document.getElementById(r),ia=new A,cM={agricultural:"#7bc86c",mining:"#d9a35a",industrial:"#9aa6b8",hightech:"#3fb8c8",frontier:"#f0703c"},hM=(r,e)=>r.galaxy.systems[e.dest.sys].name;class uM{constructor(e){this.g=e,this.markers=new Map,this.radarT=0,this.stTab="market",this.mapTab="system",this.mapSel=null;const t=$("stamps");for(let n=0;n<12;n++){const i=document.createElement("i");i.style.setProperty("--r",`${(Math.sin(n*7.3)*2.2).toFixed(1)}deg`),t.appendChild(i)}this.bindStart(),this.bindInput(),this.bindHud(),this.bindOverlays()}setLoading(e,t){const n=Math.floor(St(e,0,1)*12+1e-6);[...$("stamps").children].forEach((i,s)=>i.classList.toggle("on",s<n)),$("loadPct").textContent=`${Math.round(e*100)}%`,t&&($("loadText").textContent=t),$("btnStart").textContent=`LOADING ${Math.round(e*100)}%`}showReady(e){const t=$("btnStart");t.disabled=!1,t.textContent=e?"CONTINUE":"LAUNCH",$("loadText").textContent="Systems online · ready",e&&$("btnNew").classList.remove("hidden"),$("btnSavesStart").classList.remove("hidden")}bindStart(){$("btnStart").addEventListener("click",()=>{this.g.audio.unlock(),this.g.startGame(!1)}),$("btnNew").addEventListener("click",()=>{this.g.audio.unlock(),this.g.startGame(!0)}),$("btnSavesStart").addEventListener("click",()=>{this.g.audio.unlock(),this.openSaves("start")})}enterPlay(){const e=$("start");e.classList.add("leaving"),setTimeout(()=>e.classList.add("hidden"),320),$("hud").classList.remove("hidden"),this.onSystemChanged()}modalOpen(){return!$("station").classList.contains("hidden")||!$("mapOv").classList.contains("hidden")||!$("pause").classList.contains("hidden")||!$("dialog").classList.contains("hidden")}bindInput(){const e=this.g.input,t=$("stickZone"),n=$("stick"),i=$("stickKnob");let s=null,a=0,o=0;const l=55;t.addEventListener("pointerdown",y=>{s===null&&(s=y.pointerId,t.setPointerCapture(y.pointerId),a=y.clientX,o=y.clientY,n.style.left=`${a}px`,n.style.top=`${o}px`,n.classList.add("on"),i.style.transform="translate(0,0)")}),t.addEventListener("pointermove",y=>{if(y.pointerId!==s)return;let _=y.clientX-a,x=y.clientY-o;const C=Math.hypot(_,x);C>l&&(_*=l/C,x*=l/C),i.style.transform=`translate(${_}px,${x}px)`;const w=E=>Math.sign(E)*Math.pow(Math.max(0,Math.abs(E)-.08)/.92,1.3);e.sx=w(_/l),e.sy=w(-x/l)});const c=y=>{y.pointerId===s&&(s=null,e.sx=0,e.sy=0,n.classList.remove("on"))};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c);const h=$("throttle");let u=null;const d=y=>{const _=h.getBoundingClientRect();e.throttle=St(1-(y.clientY-_.top)/_.height,0,1)};h.addEventListener("pointerdown",y=>{u=y.pointerId,h.setPointerCapture(y.pointerId),d(y)}),h.addEventListener("pointermove",y=>{y.pointerId===u&&d(y)}),h.addEventListener("pointerup",()=>u=null),h.addEventListener("pointercancel",()=>u=null);const f=(y,_)=>{y.addEventListener("pointerdown",C=>{C.preventDefault(),y.setPointerCapture(C.pointerId),e[_]=!0,y.classList.add("on")});const x=()=>{e[_]=!1,y.classList.remove("on")};y.addEventListener("pointerup",x),y.addEventListener("pointercancel",x),y.addEventListener("lostpointercapture",x)};f($("btnFire"),"fire"),f($("btnBoost"),"boost"),$("btnMissile").addEventListener("pointerdown",y=>{y.preventDefault(),this.g.fireMissile()}),$("btnTarget").addEventListener("pointerdown",y=>{y.preventDefault(),this.g.cycleTarget()}),$("btnCruise").addEventListener("pointerdown",y=>{y.preventDefault(),this.g.setCruise(!this.g.player.cruise)});const m=$("btnAction");m.addEventListener("pointerdown",y=>{y.preventDefault(),m.setPointerCapture(y.pointerId);const _=this.g.currentAction;_&&(_.hold?(e.mine=!0,m.classList.add("on")):(this.g.audio.play("click",{vol:.5}),this.g.doAction(_)))});const v=()=>{e.mine=!1,m.classList.remove("on")};m.addEventListener("pointerup",v),m.addEventListener("pointercancel",v),m.addEventListener("lostpointercapture",v);const g=new Set,p=()=>{s===null&&(e.sx=(g.has("d")||g.has("arrowright")?1:0)-(g.has("a")||g.has("arrowleft")?1:0),e.sy=(g.has("w")||g.has("arrowup")?1:0)-(g.has("s")||g.has("arrowdown")?1:0))};window.addEventListener("keydown",y=>{const _=y.key.toLowerCase();if(this.g.mode==="play"){if(_==="escape"){this.togglePause();return}if(!this.modalOpen()){if(!g.has(_)&&(_===" "&&(e.fire=!0),_==="shift"&&(e.boost=!0),_==="q"&&this.g.fireMissile(),_==="t"&&this.g.cycleTarget(),_==="c"&&this.g.setCruise(!this.g.player.cruise),_==="m"&&this.openMap(),_==="r"&&(e.throttle=St(e.throttle+.25,0,1)),_==="f"&&(e.throttle=St(e.throttle-.25,0,1)),_==="e")){const x=this.g.currentAction;x&&(x.hold?e.mine=!0:this.g.doAction(x))}g.add(_),p(),[" ","arrowup","arrowdown","arrowleft","arrowright"].includes(_)&&y.preventDefault()}}}),window.addEventListener("keyup",y=>{const _=y.key.toLowerCase();g.delete(_),p(),_===" "&&(e.fire=!1),_==="shift"&&(e.boost=!1),_==="e"&&(e.mine=!1)}),window.addEventListener("blur",()=>{g.clear(),e.fire=e.boost=e.mine=!1,e.sx=e.sy=0})}bindHud(){$("btnMap").addEventListener("click",()=>this.openMap()),$("btnMenu").addEventListener("click",()=>this.togglePause()),window.addEventListener("resize",()=>{this.layoutT=0}),$("apCancel").addEventListener("click",()=>{this.g.autopilot=null,this.g.player.cruise=!1})}toast(e,t="",n=3){const i=$("toasts");for(;i.children.length>3;)i.firstChild.remove();const s=document.createElement("div");s.className=`toast ${t}`,s.textContent=e,i.appendChild(s),setTimeout(()=>{s.classList.add("out"),setTimeout(()=>s.remove(),320)},n*1e3)}creditFlash(){const e=$("credChip");e.classList.remove("flash"),e.offsetWidth,e.classList.add("flash")}cargoTick(){this._cargoPulse=.3}damagePulse(){this.g.post.grade.uniforms.uDamage.value=Math.min(1,this.g.post.grade.uniforms.uDamage.value+.08),this.g.pad.rumble(.2,.45,90)}warpFlash(e){$("warpFlash").classList.toggle("on",e)}onSystemChanged(){const e=this.g.sysInfo;e&&($("sysName").textContent=e.name,$("sysEco").textContent=`${nn[e.eco].name} · risk ${Math.round(e.danger*100)}%`,this.mapView&&this.resetMapView("system"))}update(e){const t=this.g,n=t.player,i=t.state;if(!n)return;$("hud").classList.toggle("docked",t.docked),$("credChip").textContent=`◈ ${vt(i.credits)}`;const s=Math.floor(i.dayTime*24),a=Math.floor((i.dayTime*24-s)*60);$("dayChip").textContent=`DAY ${i.day} · ${String(s).padStart(2,"0")}:${String(a).padStart(2,"0")}`,$("barHull").style.width=`${n.hp/n.maxHp*100}%`,$("barShield").style.width=`${n.maxShield?n.shield/n.maxShield*100:0}%`,$("barEnergy").style.width=`${n.energy/n.maxEnergy*100}%`,$("cargoTxt").textContent=`${n.cargoUsed()}/${n.stats.cargo}`,$("spdTxt").textContent=`${Math.round(n.speed)} m/s`,$("thrFill").style.height=`${t.input.throttle*100}%`,$("thrKnob").style.bottom=`${t.input.throttle*100}%`,$("btnMissile").classList.toggle("dim",n.stats.mslCap===0||n.missiles===0),$("mslCount").textContent=n.stats.mslCap?`${n.missiles}/${n.stats.mslCap}`:"—",$("btnCruise").classList.toggle("cruise-on",n.cruise),$("btnFire").classList.toggle("on",t.input.fire);const l=t.currentAction,c=$("btnAction");if(l&&!t.docked&&!n.dead){c.classList.remove("hidden"),c.classList.toggle("warm",!!l.warm);const d=l.type==="mine"&&t.input.mine?`${l.label} · ${Math.max(0,Math.round(l.node.amount))}`:l.label;c.textContent!==d&&(c.textContent=d)}else c.classList.add("hidden");$("autopilot").classList.toggle("hidden",!t.autopilot),t.autopilot&&($("apName").textContent=`${t.autopilot.name} · ${this.dist(t.autopilot.pos.distanceTo(n.pos))}`);const h=t.target,u=$("targetPanel");if(h&&!h.dead){u.classList.remove("hidden"),u.classList.toggle("hostile",h.kind==="outlaw"),$("tpName").textContent=`${h.kind==="outlaw"?"⚠ ":""}${h.name}`,$("tpDist").textContent=this.dist(h.pos.distanceTo(n.pos)),$("tpShield").style.width=`${h.maxShield?h.shield/h.maxShield*100:0}%`,$("tpHull").style.width=`${h.hp/h.maxHp*100}%`;let d=h.kind==="outlaw"?"OUTLAW · hunting cargo":"TRADER";if(n.stats.sensorLvl>=1){const f=Object.entries(h.cargo).filter(([,m])=>m>0).map(([m,v])=>`${v} ${ht[m].name}`).join(", ");d+=f?` · ${f}`:" · empty hold",h.kind==="trader"&&h.dest&&(d+=` · → ${h.dest.type==="station"?"station":this.g.galaxy.systems[h.dest.gate.to].name}`)}else d+=" · (Sensor Mk1 to scan cargo)";$("tpInfo").textContent=d}else u.classList.add("hidden");this.updateMarkers(),this.radarT-=e,this.radarT<=0&&(this.radarT=.1,this.drawRadar()),this.layoutT=(this.layoutT||0)-e,this.layoutT<=0&&(this.layoutT=.25,this.layoutHudLeft(),this.layoutTopStack())}layoutHudLeft(){const e=$("topbar"),t=$("topright").getBoundingClientRect(),n=e.getBoundingClientRect();if(t.width&&n.width){const l=`${Math.max(120,Math.floor(t.left-n.left-10))}px`;e.style.maxWidth!==l&&(e.style.maxWidth=l)}const i=e.getBoundingClientRect();if(!i.height)return;const s=$("radarWrap"),a=Math.round(i.bottom+8);s.style.top!==`${a}px`&&(s.style.top=`${a}px`);const o=$("status");if(window.innerHeight>window.innerWidth){const l=Math.round(s.getBoundingClientRect().bottom+14);o.style.top!==`${l}px`&&(o.style.top=`${l}px`)}else o.style.top&&(o.style.top="")}layoutTopStack(){const e=$("topStack"),t=window.innerWidth,n=window.innerHeight,i=d=>{const f=$(d);if(!f||f.offsetParent===null)return null;const m=f.getBoundingClientRect();return m.width?m:null},s=n>t,a=Math.max(...["topbar","topright"].map(i).filter(Boolean).map(d=>d.bottom))+10,o=[i("radarWrap"),s?i("status"):null].filter(Boolean);let l=Math.max(10,...o.map(d=>d.right+10));const c=["btnAction","btnFire","btnMissile","btnBoost","btnCruise","btnTarget","throttle"].map(i).filter(Boolean);let h,u;if(s)h=t-10,u=Math.min(n-10,...c.map(d=>d.top-10));else{h=Math.min(t-10,...c.map(m=>m.left-10));const d=i("status");u=d&&d.left<h?d.top-10:n-10;const f=440;if(h-l>f){const m=(l+h)/2;l=m-f/2,h=m+f/2}}e.classList.add("placed"),Object.assign(e.style,{left:`${Math.round(l)}px`,top:`${Math.round(a)}px`,width:`${Math.max(140,Math.round(h-l))}px`,maxHeight:`${Math.max(60,Math.round(u-a))}px`})}dist(e){return e>=1e3?`${(e/1e3).toFixed(1)}km`:`${Math.round(e)}m`}missionTargets(){const e=new Map;for(const t of this.g.state.missions){const n=this.g.missionTarget(t);if(!n)continue;const i=e.get(n.key);i?i.n++:e.set(n.key,{...n,n:1})}return[...e.values()]}updateMarkers(){const e=this.g,t=e.world,n=e.player,i=e.camera,s=window.innerWidth,a=window.innerHeight,o=[];o.push({key:"station",pos:t.station.pos,cls:"station",name:t.station.name,edge:!0}),t.gates.forEach((u,d)=>o.push({key:`gate${d}`,pos:u.pos,cls:"gate",name:`⟶ ${e.galaxy.systems[u.to].name}`,edge:!1})),t.fields.forEach((u,d)=>{u.center.distanceTo(n.pos)>u.radius&&o.push({key:`field${d}`,pos:u.center,cls:"field",name:`${u.name} · ${ht[u.primary].name}`})}),t.deposits.forEach((u,d)=>{u.pos.distanceTo(n.pos)<5e3&&u.amount>0&&o.push({key:`dep${d}`,pos:u.pos,cls:"deposit",name:`◆ ${ht[u.ore].name} deposit`})}),t.derelicts.forEach((u,d)=>{u.pos.distanceTo(n.pos)<n.stats.sensor&&o.push({key:`der${d}`,pos:u.pos,cls:"derelict",name:u.name})});for(const u of e.traders)!u.dead&&u.pos.distanceTo(n.pos)<n.stats.sensor&&o.push({key:`s${u.uid}`,pos:u.pos,cls:"trader"+(u===e.target?" target":""),name:u.name,edge:u===e.target});for(const u of e.outlaws)!u.dead&&u.pos.distanceTo(n.pos)<n.stats.sensor&&o.push({key:`s${u.uid}`,pos:u.pos,cls:"outlaw"+(u===e.target?" target":""),name:u.name,edge:!0});for(let u=0;u<e.fx.crates.length;u++){const d=e.fx.crates[u];d.pos.distanceTo(n.pos)<900&&o.push({key:`c${u}`,pos:d.pos,cls:"crate",name:d.credits?"◈ bounty":"cargo"})}e.autopilot&&o.push({key:"ap",pos:e.autopilot.pos,cls:"station",name:`AP: ${e.autopilot.name}`,edge:!0});for(const u of this.missionTargets())o.push({key:`ms_${u.key}`,pos:u.pos,cls:"mission",name:u.via?`CONTRACT ROUTE${u.n>1?` ×${u.n}`:""}`:`CONTRACT${u.n>1?` ×${u.n}`:""} · ${u.name}`,edge:!0});const l=new Set,c=$("markers"),h=[];for(const u of o){l.add(u.key);let d=this.markers.get(u.key);d||(d=document.createElement("div"),d.innerHTML='<span class="ic"></span><span class="tx"></span>',c.appendChild(d),this.markers.set(u.key,d)),ia.copy(u.pos).project(i);const f=ia.z>1;let m=(ia.x*.5+.5)*s,v=(-ia.y*.5+.5)*a;const g=!f&&m>0&&m<s&&v>0&&v<a;if(!g&&!u.edge){d.style.display="none";continue}d.style.display="";let p=`mk ${u.cls}`;if(!g){let x=m-s/2,C=v-a/2;f&&(x=-x,C=-C);const w=Math.min((s/2-40)/Math.abs(x||.001),(a/2-50)/Math.abs(C||.001));m=s/2+x*w,v=a/2+C*w,p+=" edge"}d.className!==p&&(d.className=p);for(let x=0;x<4;x++){const C=h.find(w=>Math.abs(w[0]-m)<110&&Math.abs(w[1]-v)<16);if(!C)break;v=C[1]+17}h.push([m,v]),d.style.left=`${m}px`,d.style.top=`${v}px`;const y=`${u.name} ${this.dist(u.pos.distanceTo(n.pos))}`,_=d.lastChild;_.textContent!==y&&(_.textContent=y)}for(const[u,d]of this.markers)l.has(u)||(d.remove(),this.markers.delete(u))}drawRadar(){const e=this.g,t=e.player,n=e.world,i=$("radar"),s=i.getContext("2d"),a=i.width,o=a/2-6;s.clearRect(0,0,a,a),s.save(),s.translate(a/2,a/2),s.strokeStyle="rgba(239,230,210,.25)",s.lineWidth=1.5;for(const d of[o,o*.66,o*.33])s.beginPath(),s.arc(0,0,d,0,Math.PI*2),s.stroke();const l=t.stats.sensor,c=Math.cos(t.yaw),h=Math.sin(t.yaw),u=(d,f,m,v="dot")=>{const g=d.x-t.pos.x,p=d.z-t.pos.z,y=g*h+p*c;let x=-(g*c-p*h)/l*o,C=-(y/l)*o;const w=Math.hypot(x,C);if(w>o){if(v!=="edge")return;x*=o/w,C*=o/w}if(s.fillStyle=f,v==="ring"){s.strokeStyle=f,s.lineWidth=2,s.beginPath(),s.arc(x,C,m,0,Math.PI*2),s.stroke();return}s.beginPath(),v==="sq"?s.rect(x-m,C-m,m*2,m*2):s.arc(x,C,m,0,Math.PI*2),s.fill()};for(const d of n.fields)u(d.center,"rgba(232,211,164,.6)",Math.max(4,d.radius/l*o),"ring");for(const d of n.planets)u(d.pos,"rgba(140,170,220,.55)",Math.max(3,d.radius/l*o));u(n.station.pos,"#9ff0ff",5,"edge");for(const d of n.gates)u(d.pos,"#d6b8ff",4,"edge");for(const d of n.derelicts)u(d.pos,"#ffb07a",3);for(const d of e.fx.crates)u(d.pos,"#fff3a0",2.5);for(const d of e.traders)u(d.pos,"#f2d36b",3.5,"sq");for(const d of e.outlaws)u(d.pos,"#ff4a3a",4.5,"sq");s.fillStyle="#efe6d2",s.beginPath(),s.moveTo(0,-8),s.lineTo(6,7),s.lineTo(0,3),s.lineTo(-6,7),s.closePath(),s.fill(),s.restore()}bindOverlays(){$("btnUndock").addEventListener("click",()=>{this.g.audio.play("click",{vol:.5}),this.g.undock()}),$("stTabs").addEventListener("click",e=>{const t=e.target.closest(".tab");t&&(this.stTab=t.dataset.tab,this.g.audio.play("click",{vol:.4}),this.renderStation())}),$("stBody").addEventListener("click",e=>{const t=e.target.closest("button[data-act]");t&&!t.disabled&&this.stationAction(t.dataset.act,t.dataset.arg,t.dataset.n)}),$("btnMapClose").addEventListener("click",()=>this.closeMap()),$("mapTabs").addEventListener("click",e=>{const t=e.target.closest(".tab");t&&(this.mapTab=t.dataset.tab,this.mapSel=null,this.renderMapTabs(),this.drawMap())}),this.mapView={system:{z:1,x:0,y:0},galaxy:{z:1,x:0,y:0}},this.bindMapGestures(),$("mapInfo").addEventListener("click",e=>{const t=e.target.closest("button[data-act]");t&&this.mapAction(t.dataset.act)}),$("btnResume").addEventListener("click",()=>this.togglePause()),$("btnSound").addEventListener("click",()=>{const e=this.g.state;e.sound=!e.sound,this.g.audio.setEnabled(e.sound),$("btnSound").textContent=`SOUND: ${e.sound?"ON":"OFF"}`}),$("btnQuality").addEventListener("click",()=>{const e=this.g.state;this.g.applyQuality(e.quality==="high"?"low":"high"),$("btnQuality").textContent=`QUALITY: ${e.quality.toUpperCase()}`}),$("btnReset").addEventListener("click",()=>{this.dialog('<div class="ov-title">RESET CAREER?</div><p>This erases your current game and autosave and generates a new galaxy. Your save slots and exported files are kept.</p>',[{label:"ERASE & RESTART",primary:!0,fn:()=>{this.togglePause(),this.g.startGame(!0)}},{label:"CANCEL"}])}),$("btnSaves").addEventListener("click",()=>this.openSaves("pause")),window.addEventListener("resize",()=>{$("mapOv").classList.contains("hidden")||this.drawMap()})}togglePause(){const e=$("pause"),t=e.classList.contains("hidden");if(!(t&&this.modalOpen())&&(e.classList.toggle("hidden",!t),this.g.paused=t,t)){const n=this.g.state;$("btnSound").textContent=`SOUND: ${n.sound?"ON":"OFF"}`,$("btnQuality").textContent=`QUALITY: ${n.quality.toUpperCase()}`;const i=Ii(n),s=n.missions.length?`<br><b>Contracts:</b>${n.missions.map(a=>`<br><small>★ ${a.title} → ${a.dest.name}, ${hM(this.g,a)} · due Day ${a.deadline}${a.vip?" · VIP":""}</small>`).join("")}`:"";$("pauseStats").innerHTML=`Rank: <b>${eu[i]}</b> · Net worth ◈ ${vt(Al(n))}<br>Day ${n.day} · Jumps ${n.stats.jumps} · Ore mined ${n.stats.mined} · Outlaws downed ${n.stats.kills} · Contracts ${n.stats.contracts}${s}<br><small>Keys: WASD steer · R/F throttle · Space fire · E action · Q missile · T target · C cruise · M map</small>${this.g.pad.active?`<br><small>Controller: ${this.g.pad.helpText()}</small>`:""}`,this.g.save()}}openSaves(e,t="",n="info"){const i=this.g,s=e==="pause";s&&i.save();const a=u=>`Day ${u.day} · ◈ ${vt(u.credits)} · ${u.ship}${u.fleet>1?` +${u.fleet-1} ship${u.fleet>2?"s":""}`:""} · ${u.system}`,o=(u,d,f,m)=>`<div class="sv-row${m?" empty":""}"><div class="sv-info"><b>${u}</b>${d}</div>${f.join("")}</div>`,l=Wx();let c=o("AUTOSAVE",l?l.error?`Unreadable: ${l.error}`:`${a(l)}<br><small>${Po(l.savedAt)} · saves every 20 s, on docking and when you leave</small>`:"Nothing yet — starts when you play",[],!l);for(let u=1;u<=zx;u++){const d=Co(u),f=d?d.error?`Unreadable: ${d.error}`:`${a(d)}<br><small>saved ${Po(d.savedAt)}</small>`:"Empty",m=[];s&&m.push(`<button class="sbtn buy" data-sv="save" data-slot="${u}">SAVE</button>`),d&&!d.error&&m.push(`<button class="sbtn sell" data-sv="load" data-slot="${u}">LOAD</button>`),c+=o(`SLOT ${u}`,f,m,!d)}const h=s||i.hasSave;$("dialogBox").classList.add("saves"),$("dialogBox").innerHTML=`<div class="sv-head"><div class="ov-title">SAVE &amp; LOAD</div>
      ${t?`<div class="sv-status ${n}">${t}</div>`:'<p class="sv-note">Saves live in this browser. <b>Export</b> keeps a file copy, safe if the browser clears its data and usable on another device.</p>'}</div>
      <div class="sv-list">${c}</div>
      <div class="sv-tools">${h?'<button class="pbtn secondary" data-sv="export">EXPORT FILE</button>':""}<button class="pbtn secondary" data-sv="import">IMPORT FILE</button><button class="pbtn primary" data-sv="close">CLOSE</button></div>`,$("dialogBox").querySelectorAll("button[data-sv]").forEach(u=>u.addEventListener("click",()=>{i.audio.play("click",{vol:.4}),this.savesAction(e,u.dataset.sv,Number(u.dataset.slot))})),$("dialog").classList.remove("hidden")}savesAction(e,t,n){const i=this.g,s=e==="pause",a=(c,h)=>this.openSaves(e,c,h),o=c=>`Day ${c.day} · ◈ ${vt(c.credits)} · ${c.ship} · ${c.system}`,l=(c,h)=>this.dialog(`<div class="ov-title">LOAD ${h.toUpperCase()}?</div><p><b>${o(nc(c))}</b></p>
      <p>${s?"Your current game will be replaced. Save it to a slot first if you want to keep it.":"This replaces your current autosave."}</p>`,[{label:"LOAD",primary:!0,fn:()=>this.applyLoad(e,c,h)},{label:"CANCEL",fn:()=>a()}]);if(t==="close"){$("dialog").classList.add("hidden");return}if(t==="save"){const c=Co(n),h=()=>{if(!i.save()){a("Could not save — browser storage is full or disabled. Try EXPORT FILE instead.","bad");return}try{$x(n,i.state),a(`✓ Saved to slot ${n}`,"good")}catch(u){a(`Could not save to slot ${n}: ${u.message}. Try EXPORT FILE instead.`,"bad")}};c?this.dialog(`<div class="ov-title">OVERWRITE SLOT ${n}?</div><p>${c.error?"This slot is unreadable.":`It holds <b>${o(c)}</b>, saved ${Po(c.savedAt)}.`}</p><p>It will be replaced with your current game.</p>`,[{label:"OVERWRITE",primary:!0,fn:h},{label:"CANCEL",fn:()=>a()}]):h()}else if(t==="load"){const c=Co(n);if(!c||c.error){a(`Slot ${n} can't be loaded${c?`: ${c.error}`:""}`,"bad");return}l(c.state,`slot ${n}`)}else if(t==="export"){s&&i.save();const c=qx(i.state),h=URL.createObjectURL(new Blob([Xx(i.state)],{type:"application/json"})),u=document.createElement("a");u.href=h,u.download=c,document.body.appendChild(u),u.click(),u.remove(),setTimeout(()=>URL.revokeObjectURL(h),1e4),a(`✓ Exported <b>${c}</b> to Downloads (iPhone: Files app)`,"good")}else if(t==="import"){const c=document.createElement("input");c.type="file",c.accept=".json,application/json",c.addEventListener("change",()=>{const h=c.files&&c.files[0];h&&h.text().then(u=>l(jx(u),"imported file")).catch(u=>a(`Import failed: ${u.message}`,"bad"))}),c.click()}}applyLoad(e,t,n){const i=this.g;$("dialog").classList.add("hidden"),i.loadGame(t),i.hasSave=!0,e==="pause"?$("pause").classList.contains("hidden")||this.togglePause():i.startGame(!1),this.toast(`✓ Loaded ${n} — Day ${t.day}`,"good",3)}dialog(e,t){const n=$("dialogBox");n.classList.remove("saves"),n.innerHTML=e;for(const i of t){const s=document.createElement("button");s.className=`pbtn ${i.primary?"primary":"secondary"}`,s.textContent=i.label,s.addEventListener("click",()=>{$("dialog").classList.add("hidden"),this.g.audio.play("click",{vol:.4}),i.fn&&i.fn()}),n.appendChild(s)}$("dialog").classList.remove("hidden")}openStation(){$("station").classList.remove("hidden"),this.stTab="market",this.renderStation()}closeStation(){$("station").classList.add("hidden")}renderStation(){const e=this.g,t=e.state;t.systemId;const n=e.sysInfo,i=e.player;$("stTitle").textContent=e.world.station.name.toUpperCase(),$("stSub").textContent=`${n.name} · ${nn[n.eco].name} economy · Day ${t.day} · ${Ct[i.hullId].name} (${Ct[i.hullId].cls})`,$("stCred").textContent=`◈ ${vt(t.credits)}`,[...$("stTabs").children].forEach(o=>o.classList.toggle("on",o.dataset.tab===this.stTab));const s=$("stBody"),a=s.scrollTop;this.stTab==="market"?s.innerHTML=this.marketHTML():this.stTab==="outfit"?s.innerHTML=this.outfitHTML():this.stTab==="hangar"?s.innerHTML=this.hangarHTML():this.stTab==="missions"?s.innerHTML=this.missionsHTML():s.innerHTML=this.servicesHTML(),s.scrollTop=a}bestKnown(e){const t=this.g;let n=null;for(const[i,s]of Object.entries(t.state.intel)){if(Number(i)===t.state.systemId)continue;const a=s.prices[e].s;(!n||a>n.v)&&(n={v:a,name:t.galaxy.systems[i].name,age:t.state.day-s.day})}return n}marketHTML(){const e=this.g,t=e.economy,n=e.state.systemId,i=e.player,s=i.cargoUsed(),a=i.stats.cargo;let o=`<div class="row head" style="grid-template-columns:1fr auto"><span>HOLD ${s}/${a} · ${Ct[i.hullId].name}${i.reserved?` <small>(${i.reserved} contract)</small>`:""}</span><span class="btns"><button class="sbtn sell" data-act="sellore" ${Object.keys(i.cargo).some(l=>ht[l].kind==="ore"&&i.cargo[l]>0)?"":"disabled"}>SELL ALL ORE</button><button class="sbtn sell" data-act="sellall" ${s?"":"disabled"}>SELL ALL</button></span></div>`;o+='<div class="row head"><span>COMMODITY</span><span>WE PAY</span><span>WE SELL</span><span>HOLD</span><span>ACTIONS</span></div>';for(const l of Dn){const c=t.sellPrice(n,l.id),h=t.canBuy(n,l.id)&&t.stock(n,l.id)>0,u=h?t.buyPrice(n,l.id):null,d=i.cargo[l.id]||0,f=t.mult(n,l.id),m=f>=1.25?'<span class="tag up">HIGH DEMAND</span>':f<=.75?'<span class="tag dn">LOCAL GOOD</span>':"",v=this.bestKnown(l.id),g=v?`<br><small style="opacity:.7">best seen ◈${v.v} @ ${v.name}${v.age?` (${v.age}d)`:""}</small>`:"",p=h?Math.max(0,Math.min(t.stock(n,l.id),a-s,Math.floor(e.state.credits/u))):0;o+=`<div class="row"><span class="nm"><i class="dot" style="background:${l.color}"></i><span>${l.name} ${m}${g}</span></span>
        <span class="${f>=1.15?"price-good":""}">◈ ${c}</span>
        <span class="${f<=.8?"price-good":""}">${h?`◈ ${u} <small>(${t.stock(n,l.id)})</small>`:"—"}</span>
        <span><b>${d}</b></span>
        <span class="btns">
          <button class="sbtn sell" data-act="sell" data-arg="${l.id}" data-n="1" ${d?"":"disabled"}>SELL</button>
          <button class="sbtn sell" data-act="sell" data-arg="${l.id}" data-n="${d}" ${d?"":"disabled"}>ALL</button>
          <button class="sbtn buy" data-act="buy" data-arg="${l.id}" data-n="1" ${p?"":"disabled"}>BUY</button>
          <button class="sbtn buy" data-act="buy" data-arg="${l.id}" data-n="${p}" ${p?"":"disabled"}>MAX</button>
        </span></div>`}return o+='<p style="font:600 12px var(--font);opacity:.75;margin:8px 4px">Tip: “WE SELL” goods are produced here and cheap. Check the GALAXY chart for systems with HIGH DEMAND. Selling many units lowers the price until markets recover the next day.</p>',o}outfitHTML(){const e=this.g,t=e.activeShipRec();let n=`<p style="margin:2px 4px 10px;font:700 13px var(--font)">Upgrading: <b>${Ct[t.hull].name}</b> (${Ct[t.hull].cls}) — each ship keeps its own modules.</p><div class="cards">`;for(const i of dd){const s=ya[i],a=t.mods[i],o=a<3?a+1:null,l=o?Wh(t.hull,i,o):0,c=[1,2,3].map(h=>`<i class="${h<=a?"on":""}"></i>`).join("");n+=`<div class="card"><h3>${s.name}<span class="lvl">${c}</span></h3><p>${s.desc}</p>
        <div class="delta">${$h(i,a,t.hull)}${o?` → <b>${$h(i,o,t.hull)}</b>`:" · MAX"}</div>
        ${o?`<button class="pbtn ${e.state.credits>=l?"primary":"secondary"}" style="font-size:14px;padding:9px" data-act="upgrade" data-arg="${i}" ${e.state.credits>=l?"":"disabled"}>INSTALL MK${o} · ◈ ${vt(l)}</button>`:'<button class="pbtn secondary" disabled>FULLY UPGRADED</button>'}
      </div>`}return n+"</div>"}hangarHTML(){const e=this.g,t=e.state;let n='<p style="margin:2px 4px 10px;font:700 13px var(--font)">Your fleet is ferried between stations. Each ship keeps its own hold and upgrades.</p><div class="cards">';for(const i of O_){const s=Ct[i],a=t.ships.filter(h=>h.hull===i),o=rr(i,_a()),l=`<div class="stats"><span>Hull ${o.hull}</span><span>Hold ${o.cargo}</span><span>Speed ${Math.round(o.speed)}</span><span>Beams ×${s.hard}</span><span>Barrier ×${s.shield}</span><span>Missiles +${s.msl}</span></div>`;let c="";for(const h of a){const u=Object.values(h.cargo).reduce((d,f)=>d+f,0);c+=h.uid===t.active?`<button class="pbtn secondary" disabled>ACTIVE${u?` · hold ${u}`:""}</button>`:`<button class="pbtn secondary" data-act="switch" data-arg="${h.uid}">FLY THIS ${s.name.toUpperCase()}${u?` · hold ${u}`:""}</button>`}s.price>0&&(c+=`<button class="pbtn ${t.credits>=s.price?"primary":"secondary"}" style="font-size:14px;padding:9px" data-act="buyship" data-arg="${i}" ${t.credits>=s.price?"":"disabled"}>BUY · ◈ ${vt(s.price)}</button>`),n+=`<div class="card ${a.some(h=>h.uid===t.active)?"active":""}"><h3>${s.name}<span class="cls">${s.cls.toUpperCase()}</span></h3><p>${s.desc}</p>${l}${c}</div>`}return n+"</div>"}servicesHTML(){const e=this.g,t=e.player,n=e.state,i=Math.ceil(t.maxHp-t.hp),s=Math.ceil(i*1.5*Ct[t.hullId].priceMul),a=t.stats.mslCap-t.missiles,o=a*60,l=Ii(n);return`<div class="svc">
      <div class="card"><div><h3>Hull Repair</h3><p>${i>0?`${i} damage to patch`:"Hull is pristine"}</p></div><button class="sbtn buy" data-act="repair" ${i>0&&n.credits>=s?"":"disabled"}>◈ ${vt(s)}</button></div>
      <div class="card"><div><h3>Missile Restock</h3><p>${t.stats.mslCap?`${t.missiles}/${t.stats.mslCap} loaded · ◈60 each`:"No missile rack installed"}</p></div><button class="sbtn buy" data-act="missiles" ${a>0&&n.credits>=o?"":"disabled"}>◈ ${vt(o)}</button></div>
      <div class="card"><div><h3>Rest Until Tomorrow</h3><p>Skip to Day ${n.day+1}. Prices recover, rocks and deposits regrow.</p></div><button class="sbtn" data-act="rest">REST</button></div>
      <div class="card"><div><h3>Pilot Record</h3><p>Rank <b>${eu[l]}</b> · Net worth ◈ ${vt(Al(n))}<br>Mined ${n.stats.mined} · Trades ${n.stats.trades} · Contracts ${n.stats.contracts} · Outlaws downed ${n.stats.kills} · Jumps ${n.stats.jumps}</p></div></div>
      <p style="font:600 12px var(--font);opacity:.75">Outlaw raids grow from lone raiders to packs of 2–4 as your rank rises. Barriers and beams are your best insurance.</p>
    </div>`}missionsHTML(){const e=this.g,t=e.state,n=e.player,i=nu(t,e.galaxy,t.systemId,Ii(t));let s=`<div class="ms-head"><span>ACTIVE CONTRACTS ${t.missions.length}/${xa}</span><small>Free hold ${e.cargoFree()}/${n.stats.cargo}</small></div>`;return s+=t.missions.length?`<div class="cards">${t.missions.map(a=>this.missionCard(a,!0)).join("")}</div>`:'<p class="ms-empty">No active contracts — pick one from the board below.</p>',s+=`<div class="ms-head" style="margin-top:14px"><span>CONTRACT BOARD · ${e.world.station.name.toUpperCase()}</span><small>New offers each day</small></div>`,s+=i.length?`<div class="cards">${i.map(a=>this.missionCard(a,!1)).join("")}</div>`:'<p class="ms-empty">The board is empty. Check back tomorrow.</p>',s+='<p style="font:600 12px var(--font);opacity:.75;margin:10px 4px">Passengers and courier crates ride in your hold until delivered. Station drop-offs complete when you dock; planet colonies need you in low orbit above the colony — press DROP OFF / DELIVER. Outlaws love a ship carrying a VIP.</p>',s}acceptBlock(e){const t=this.g,n=t.state;return n.missions.length>=xa?"CONTRACT LIMIT":Ma(e)>t.cargoFree()?`NEEDS ${Ma(e)} FREE HOLD`:e.deposit>n.credits?`NEEDS ◈ ${vt(e.deposit)}`:""}missionCard(e,t){const n=this.g,i=n.state,s=Ox(e),a=t&&e.deadline<=i.day;let o="",l;if(t)e.type==="supply"?o=`<br>In hold: <b>${n.player.cargo[e.commodity]||0}/${e.qty}</b>`:gd(e)&&(o=`<br>Aboard: <b>${Ct[n.activeShipRec().hull].name}</b>`),l=`<button class="pbtn primary" data-act="mcourse" data-arg="${e.id}">SET COURSE</button><button class="pbtn secondary" data-act="abandon" data-arg="${e.id}">ABANDON</button>`;else{const c=this.acceptBlock(e);l=`<button class="pbtn ${c?"secondary":"primary"}" data-act="accept" data-arg="${e.id}" ${c?"disabled":""}>${c||"ACCEPT"}</button>`}return`<div class="card ms${t?" taken":""}${a?" late":""}"><h3><span>${e.title}</span><span class="pay">◈ ${vt(e.reward)}</span></h3>
      <div><span class="mtag ${s.cls}">${s.label}</span> <small>${e.client}</small></div>
      <div class="meta">To <b>${Fx(e,n.galaxy,i.systemId)}</b><br>${Bx(e)}<br>${kx(e,i.day)}${e.deposit?`<br>Deposit ◈ ${vt(e.deposit)} — refunded on delivery`:""}${o}</div>
      <div class="btns">${l}</div></div>`}stationAction(e,t,n){const i=this.g,s=i.economy,a=i.state,o=a.systemId,l=i.player;n=Number(n);const c=(h,u)=>{if(u<=0)return 0;const d=s.sell(o,h,u);return l.cargo[h]-=u,l.cargo[h]||delete l.cargo[h],d};if(e==="sell"){const h=c(t,Math.min(n,l.cargo[t]||0));i.addCredits(h),a.stats.trades++,i.audio.play("coins",{vol:.7})}else if(e==="sellore"||e==="sellall"){let h=0;for(const u of Object.keys(l.cargo))(e==="sellall"||ht[u].kind==="ore")&&(h+=c(u,l.cargo[u]));i.addCredits(h),a.stats.trades++,i.audio.play("coins",{vol:.8}),this.toast(`Sold for ◈ ${vt(h)}`,"good",2)}else if(e==="buy"){let h=Math.min(n,s.stock(o,t),l.stats.cargo-l.cargoUsed());for(;h>0&&s.quoteBuy(o,t,h)>a.credits;)h--;if(h>0){const u=s.buy(o,t,h);a.credits-=u,l.cargo[t]=(l.cargo[t]||0)+h,a.stats.trades++,i.audio.play("click",{vol:.6})}else this.toast("Not enough credits or cargo space","warn",2)}else if(e==="upgrade"){const h=i.activeShipRec(),u=h.mods[t]+1,d=Wh(h.hull,t,u);a.credits>=d&&u<=3&&(a.credits-=d,h.mods[t]=u,i.refreshPlayerStats(),t==="missile"&&(l.missiles=l.stats.mslCap),t==="barrier"&&(l.shield=l.maxShield),i.audio.play("coins",{vol:.7}),this.toast(`${ya[t].name} Mk${u} installed`,"good",2.5))}else if(e==="buyship"){const h=Ct[t];if(a.credits>=h.price){a.credits-=h.price;const u=a.nextUid++;a.ships.push({uid:u,hull:t,mods:_a(),hp:null,missiles:0,cargo:{}}),i.audio.play("coins",{vol:.9}),i.switchShip(u)?this.toast(`${h.name} ${h.cls} purchased and ready!`,"good",3):this.toast(`${h.name} ${h.cls} purchased — it waits in your hangar until your contracts are done`,"good",4)}}else if(e==="switch")i.switchShip(Number(t))&&this.toast(`Now flying the ${Ct[i.player.hullId].name}`,"info",2);else if(e==="accept"){const h=nu(a,i.galaxy,o,Ii(a)).find(u=>u.id===t);if(h){const u=i.acceptMission(h);u?this.toast(u,"warn",3):this.toast(`Contract accepted: ${h.title}${h.deposit?` · deposit ◈ ${vt(h.deposit)} paid`:""}`,"good",3)}}else if(e==="mcourse"){const h=a.missions.find(u=>u.id===t);if(h&&i.missionCourse(h)){this.toast(`Course set for ${h.dest.name}`,"info",2.5);return}}else if(e==="abandon"){const h=a.missions.find(u=>u.id===t);if(h){this.dialog(`<div class="ov-title">ABANDON CONTRACT?</div><p>${h.title} for ${h.client}.${h.deposit?` Your ◈ ${vt(h.deposit)} deposit is forfeited.`:""}${h.type==="passenger"?" Passengers disembark here.":""}</p>`,[{label:"ABANDON",primary:!0,fn:()=>{i.failMission(h,"abandoned"),i.save(),this.renderStation()}},{label:"KEEP IT"}]);return}}else if(e==="repair"){const h=Math.ceil(l.maxHp-l.hp),u=Math.ceil(h*1.5*Ct[l.hullId].priceMul);a.credits>=u&&(a.credits-=u,l.hp=l.maxHp,l.shield=l.maxShield,i.audio.play("click",{vol:.6}))}else if(e==="missiles"){const u=(l.stats.mslCap-l.missiles)*60;a.credits>=u&&(a.credits-=u,l.missiles=l.stats.mslCap,i.audio.play("click",{vol:.6}))}else e==="rest"&&(i.restUntilTomorrow(),l.shield=l.maxShield,l.energy=l.maxEnergy,this.toast(`Rested. Day ${a.day} begins.`,"info",2));i.save(),this.renderStation()}openTraderDialog(e){const t=this.g,n=t.economy,i=t.state.systemId,s=t.player,a=()=>{const l=Object.entries(e.cargo).filter(([,m])=>m>0).map(([m,v])=>{const g=Math.round(n.buyPrice(e.origin,m)*1.18),p=Math.max(0,Math.min(v,s.stats.cargo-s.cargoUsed(),Math.floor(t.state.credits/g)));return`<div class="row" style="grid-template-columns:1.4fr .8fr .5fr auto"><span class="nm"><i class="dot" style="background:${ht[m].color}"></i>${ht[m].name}</span><span>◈ ${g}</span><span>${v}</span><span class="btns"><button class="sbtn buy" data-k="${m}" data-n="1" ${p?"":"disabled"}>BUY</button><button class="sbtn buy" data-k="${m}" data-n="${p}" ${p?"":"disabled"}>MAX</button></span></div>`}).join("")||"<p>Hold is empty.</p>",c=Object.entries(s.cargo).filter(([m,v])=>v>0&&ht[m].kind==="ore"),h=c.reduce((m,[v,g])=>m+Math.round(n.sellPrice(i,v)*.9)*g,0),u=$("dialogBox");u.innerHTML=`<div class="ov-title">TRADER ${e.name.toUpperCase()}</div><p>“Hauling from ${t.galaxy.systems[e.origin].name}. Fair prices, no questions.”</p>${l}
        <p style="margin-top:6px">They'll also buy your raw ore at 90% of the local station rate${c.length?`: <b>◈ ${vt(h)}</b>`:""}.</p>`;const d=document.createElement("button");d.className="pbtn secondary",d.textContent="SELL ORE TO TRADER",d.disabled=!c.length,d.addEventListener("click",()=>{for(const[m,v]of c)e.cargo[m]=(e.cargo[m]||0)+v,delete s.cargo[m];t.addCredits(h),t.state.stats.trades++,t.audio.play("coins",{vol:.7}),a()});const f=document.createElement("button");f.className="pbtn primary",f.textContent="CLOSE CHANNEL",f.addEventListener("click",()=>$("dialog").classList.add("hidden")),u.appendChild(d),u.appendChild(f),u.querySelectorAll("button[data-k]").forEach(m=>m.addEventListener("click",()=>{const v=m.dataset.k,g=Number(m.dataset.n),p=Math.round(n.buyPrice(e.origin,v)*1.18),y=Math.min(g,e.cargo[v]||0,s.stats.cargo-s.cargoUsed());y<=0||t.state.credits<p*y||(t.state.credits-=p*y,e.cargo[v]-=y,s.cargo[v]=(s.cargo[v]||0)+y,t.state.stats.trades++,t.audio.play("click",{vol:.6}),a())}))};a(),$("dialog").classList.remove("hidden")}openMap(){this.modalOpen()||($("mapOv").classList.remove("hidden"),this.mapSel=null,this.renderMapTabs(),requestAnimationFrame(()=>this.drawMap()))}closeMap(){$("mapOv").classList.add("hidden")}renderMapTabs(){[...$("mapTabs").children].forEach(e=>e.classList.toggle("on",e.dataset.tab===this.mapTab)),$("mapSub").textContent=this.mapTab==="system"?`${this.g.sysInfo.name} system · tap a destination for autopilot`:"Galaxy chart · tap a system for market intel & routes",this.renderMapInfo()}mapGeom(){const e=$("mapCanvas"),t=Math.min(window.devicePixelRatio||1,2),n=e.clientWidth,i=e.clientHeight;return(e.width!==Math.round(n*t)||e.height!==Math.round(i*t))&&(e.width=Math.round(n*t),e.height=Math.round(i*t)),{c:e,ctx:e.getContext("2d"),W:n,H:i,dpr:t}}systemItems(){const e=this.g,t=e.world,n=[];return n.push({kind:"station",pos:t.station.pos,name:t.station.name,color:"#9ff0ff",r:7,arrive:200,ignore:t.station}),t.gates.forEach(i=>n.push({kind:"gate",pos:i.pos,name:`Gate → ${e.galaxy.systems[i.to].name}`,color:"#d6b8ff",r:6,arrive:250,gate:i})),t.fields.forEach(i=>n.push({kind:"field",pos:i.center,name:i.name,color:"#e8d3a4",r:6,ring:i.radius,arrive:i.radius+40,field:i,ignore:i})),t.planets.forEach((i,s)=>{const a=t.deposits[s],o=a.pos.clone().sub(i.pos).normalize().multiplyScalar(100).add(a.pos);n.push({kind:"planet",pos:i.pos,dest:o,name:i.data.name,color:`rgb(${i.data.pal[1].map(l=>Math.round(l*255)).join(",")})`,r:4,ring:i.radius,arrive:45,deposit:a})}),t.derelicts.forEach(i=>n.push({kind:"derelict",pos:i.pos,name:i.name,color:"#ffb07a",r:5,arrive:120})),n}drawMap(){const{ctx:e,W:t,H:n,dpr:i}=this.mapGeom();e.setTransform(i,0,0,i,0,0),e.clearRect(0,0,t,n),e.fillStyle="#0b1020",e.fillRect(0,0,t,n),e.strokeStyle="rgba(63,184,200,.08)",e.lineWidth=1;for(let s=0;s<t;s+=40)e.beginPath(),e.moveTo(s,0),e.lineTo(s,n),e.stroke();for(let s=0;s<n;s+=40)e.beginPath(),e.moveTo(0,s),e.lineTo(t,s),e.stroke();this.mapTab==="system"?this.drawSystemMap(e,t,n):this.drawGalaxyMap(e,t,n)}sysProj(e,t){const n=this.mapInfoReserve(e),i=(e-n)/2,s=t/2,a=Math.min((e-n)/2,t/2)/9400,o=this.mapView.system,l=o.z;return c=>[i+c.x*a*l+o.x,s+c.z*a*l+o.y,a*l]}drawSystemMap(e,t,n){const i=this.g,s=this.sysProj(t,n),[a,o,l]=s(new A),c=i.sysData.star,h=Math.min(c.radius*l*4,Math.max(40,c.radius*l*1.6)),u=e.createRadialGradient(a,o,0,a,o,h);u.addColorStop(0,`rgb(${c.color.map(p=>Math.round(p*255)).join(",")})`),u.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=u,e.beginPath(),e.arc(a,o,h,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(239,230,210,.12)";for(const p of i.world.planets){const y=Math.hypot(p.pos.x,p.pos.z)*l;e.beginPath(),e.arc(a,o,y,0,Math.PI*2),e.stroke()}const d={station:5,gate:4,planet:3,field:2,derelict:1},f=[];for(const p of this.systemItems()){const[y,_]=s(p.pos),x=Math.max(p.r,(p.ring||0)*l);p.ring?(e.strokeStyle=p.color,e.globalAlpha=p.kind==="field"?.55:1,e.lineWidth=2,e.setLineDash(p.kind==="field"?[3,3]:[]),e.beginPath(),e.arc(y,_,x,0,Math.PI*2),p.kind==="planet"&&(e.fillStyle=p.color,e.fill()),e.stroke(),e.setLineDash([]),e.globalAlpha=1):(e.fillStyle=p.color,e.strokeStyle="#141826",e.lineWidth=2,e.beginPath(),p.kind==="gate"?e.arc(y,_,p.r,0,Math.PI*2):e.rect(y-p.r,_-p.r,p.r*2,p.r*2),e.fill(),e.stroke());const C=this.mapSel&&this.mapSel.name===p.name;C&&(e.strokeStyle="#f0703c",e.lineWidth=2.5,e.beginPath(),e.arc(y,_,x+7,0,Math.PI*2),e.stroke());const w=Math.min(x,12);f.push({x:y,y:_,gap:Math.min(x,40)+5,lines:[p.name],font:"700 12px system-ui, sans-serif",lh:14,color:C?"#f0703c":"#efe6d2",pri:C?99:d[p.kind],force:C,blocks:[{x:y-w,y:_-w,w:w*2,h:w*2}]})}for(const p of i.traders){const[y,_]=s(p.pos);e.fillStyle="#f2d36b",e.fillRect(y-3,_-3,6,6)}for(const p of i.outlaws)if(p.pos.distanceTo(i.player.pos)<i.player.stats.sensor){const[y,_]=s(p.pos);e.fillStyle="#ff4a3a",e.fillRect(y-4,_-4,8,8)}const m=i.player,[v,g]=s(m.pos);if(e.save(),e.translate(v,g),e.rotate(-m.yaw+Math.PI),e.fillStyle="#f0703c",e.strokeStyle="#141826",e.lineWidth=2,e.beginPath(),e.moveTo(0,-10),e.lineTo(7,8),e.lineTo(0,4),e.lineTo(-7,8),e.closePath(),e.fill(),e.stroke(),e.restore(),e.strokeStyle="rgba(63,184,200,.35)",e.beginPath(),e.arc(v,g,m.stats.sensor*l,0,Math.PI*2),e.stroke(),i.autopilot){const[p,y]=s(i.autopilot.pos);e.strokeStyle="#3fb8c8",e.setLineDash([6,5]),e.lineWidth=2,e.beginPath(),e.moveTo(v,g),e.lineTo(p,y),e.stroke(),e.setLineDash([])}f.push({x:v,y:g,gap:12,lines:["YOU"],font:"900 11px system-ui, sans-serif",color:"#f0703c",pri:98,force:!0,blocks:[{x:v-9,y:g-10,w:18,h:20}]}),e.font="900 18px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle";for(const p of this.missionTargets()){const[y,_]=s(p.pos),x=y+11,C=_-11;e.lineWidth=3,e.strokeStyle="#141826",e.strokeText("★",x,C),e.fillStyle="#ffd34a",e.fillText("★",x,C),f.push({x,y:C,gap:0,lines:[],pri:0,blocks:[{x:x-8,y:C-8,w:16,h:16}]})}e.textBaseline="alphabetic",this.drawLabels(e,f,t,n)}galProj(e,t){const n=this.mapInfoReserve(e),i=Math.min((e-n-30)/1e3,(t-40)/620),s=15+(e-n-30-1e3*i)/2,a=20+(t-40-620*i)/2,o=(e-n)/2,l=t/2,c=this.mapView.galaxy,h=c.z;return u=>[o+(s+u.x*i-o)*h+c.x,l+(a+u.y*i-l)*h+c.y]}mapInfoReserve(e){return window.innerHeight>window.innerWidth?0:Math.min(300,e*.44)}mapCenter(){const e=$("mapCanvas"),t=e.clientWidth;return[(t-this.mapInfoReserve(t))/2,e.clientHeight/2]}mapZoomAt(e,t,n){const i=this.mapView[this.mapTab],s=this.mapTab==="system"?14:4,a=St(i.z*n,1,s),o=a/i.z,[l,c]=this.mapCenter();i.x=e-l-(e-l-i.x)*o,i.y=t-c-(t-c-i.y)*o,i.z=a,this.mapClampPan(),this.drawMap()}mapClampPan(){const e=$("mapCanvas"),t=this.mapView[this.mapTab],n=e.clientWidth*.5*t.z,i=e.clientHeight*.5*t.z;t.x=St(t.x,-n,n),t.y=St(t.y,-i,i)}resetMapView(e=this.mapTab){this.mapView[e]={z:1,x:0,y:0}}bindMapGestures(){const e=$("mapCanvas"),t=new Map;let n=null,i=null;const s=o=>{const l=e.getBoundingClientRect();return[o.clientX-l.left,o.clientY-l.top]};e.addEventListener("pointerdown",o=>{try{e.setPointerCapture(o.pointerId)}catch(l){if(l.name!=="NotFoundError"&&l.name!=="InvalidPointerId")throw l}if(t.set(o.pointerId,s(o)),t.size===1){const[l,c]=s(o);n={x:l,y:c,moved:!1},i=null}else if(t.size===2){const[l,c]=[...t.values()];i={d:Math.hypot(l[0]-c[0],l[1]-c[1]),mx:(l[0]+c[0])/2,my:(l[1]+c[1])/2},n&&(n.moved=!0)}}),e.addEventListener("pointermove",o=>{if(!t.has(o.pointerId))return;const l=t.get(o.pointerId),c=s(o);t.set(o.pointerId,c);const h=this.mapView[this.mapTab];if(t.size>=2&&i){const[u,d]=[...t.values()],f=Math.hypot(u[0]-d[0],u[1]-d[1]),m=(u[0]+d[0])/2,v=(u[1]+d[1])/2;h.x+=m-i.mx,h.y+=v-i.my,this.mapZoomAt(m,v,f/Math.max(1,i.d)),i={d:f,mx:m,my:v}}else if(n){if(!n.moved&&Math.hypot(c[0]-n.x,c[1]-n.y)<8)return;n.moved=!0,h.x+=c[0]-l[0],h.y+=c[1]-l[1],this.mapClampPan(),this.drawMap()}});const a=o=>{if(!t.has(o.pointerId))return;const l=t.size===1&&n&&!n.moved;if(t.delete(o.pointerId),l&&this.mapTap(o),t.size===0)n=null,i=null;else if(t.size===1){const[c]=[...t.values()];n={x:c[0],y:c[1],moved:!0},i=null}};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",o=>{t.delete(o.pointerId),t.size||(n=null,i=null)}),e.addEventListener("wheel",o=>{o.preventDefault();const[l,c]=s(o);this.mapZoomAt(l,c,Math.exp(-o.deltaY*.0015))},{passive:!1}),$("mapZoom").addEventListener("click",o=>{const l=o.target.closest("button[data-z]");if(!l)return;let[c,h]=this.mapCenter();const u=$("mapCanvas"),d=this.mapSel;d&&this.mapTab==="system"&&d.pos?[c,h]=this.sysProj(u.clientWidth,u.clientHeight)(d.pos):d&&this.mapTab==="galaxy"&&([c,h]=this.galProj(u.clientWidth,u.clientHeight)(this.g.galaxy.systems[d.sys])),l.dataset.z==="reset"?(this.resetMapView(),this.drawMap()):this.mapZoomAt(c,h,l.dataset.z==="in"?1.6:1/1.6)})}drawLabels(e,t,n,i){const s=[],a=$("mapZoom").getBoundingClientRect(),o=$("mapCanvas").getBoundingClientRect();a.width&&s.push({x:a.left-o.left-6,y:a.top-o.top-6,w:a.width+12,h:a.height+12});const l=c=>s.some(h=>c.x<h.x+h.w&&c.x+c.w>h.x&&c.y<h.y+h.h&&c.y+c.h>h.y);t.sort((c,h)=>h.pri-c.pri);for(const c of t)s.push(...c.blocks||[]);for(const c of t){if(!c.lines.length)continue;const h=c.lh||13,u=c.short?[c.lines,c.short]:[c.lines];let d=null,f=null,m=0,v=0;for(const g of u){e.font=c.font,m=Math.max(...g.map(y=>e.measureText(y).width))+6,v=h*g.length+2;const p=[];for(const y of[1,1.9]){const _=c.gap*y;p.push([c.x-m/2,c.y+_],[c.x-m/2,c.y-_-v],[c.x+_,c.y-v/2],[c.x-_-m,c.y-v/2],[c.x+_*.7,c.y+_*.7],[c.x-_*.7-m,c.y+_*.7],[c.x+_*.7,c.y-_*.7-v],[c.x-_*.7-m,c.y-_*.7-v])}for(const[y,_]of p){const x={x:y,y:_,w:m,h:v};if(y>=0&&_>=0&&y+m<=n&&_+v<=i&&!l(x)){d=x;break}}if(d){f=g;break}}!d&&c.force&&(f=c.lines,e.font=c.font,m=Math.max(...f.map(g=>e.measureText(g).width))+6,v=h*f.length+2,d={x:c.x-m/2,y:c.y+c.gap,w:m,h:v}),d&&(s.push(d),e.fillStyle="rgba(11,16,32,.72)",e.fillRect(d.x,d.y,m,v),e.textAlign="center",e.textBaseline="top",f.forEach((g,p)=>{e.fillStyle=p===0?c.color:c.color2||c.color,p>0&&c.font2&&(e.font=c.font2),e.fillText(g,d.x+m/2,d.y+1+p*h)}),e.textBaseline="alphabetic")}}drawGalaxyMap(e,t,n){const i=this.g,s=this.galProj(t,n),a=i.galaxy.systems,o=i.state.systemId;e.lineWidth=3;for(const h of a)for(const u of h.links)if(u>h.id){const[d,f]=s(h),[m,v]=s(a[u]);e.strokeStyle=h.id===o||u===o?"rgba(63,184,200,.9)":"rgba(239,230,210,.28)",e.beginPath(),e.moveTo(d,f),e.lineTo(m,v),e.stroke()}const l=[];for(const h of a){const[u,d]=s(h),f=i.state.intel[h.id];e.fillStyle=cM[h.eco],e.strokeStyle="#141826",e.lineWidth=3,e.beginPath(),e.arc(u,d,h.id===o?13:10,0,Math.PI*2),e.fill(),e.stroke(),h.id===o&&(e.strokeStyle="#efe6d2",e.lineWidth=2,e.beginPath(),e.arc(u,d,19,0,Math.PI*2),e.stroke());const m=this.mapSel&&this.mapSel.sys===h.id;m&&(e.strokeStyle="#f0703c",e.lineWidth=3,e.beginPath(),e.arc(u,d,22,0,Math.PI*2),e.stroke());const v=h.id===o?20:m?23:12;l.push({x:u,y:d,gap:v+2,lines:[h.name,`${nn[h.eco].name}${f?"":" · ?"}`],short:[h.name],font:'900 13px "Arial Black", system-ui',font2:"700 10px system-ui",lh:15,color:m?"#f0703c":"#efe6d2",color2:f?"rgba(239,230,210,.85)":"rgba(239,230,210,.5)",pri:m?99:h.id===o?50:10,force:m||h.id===o,blocks:[{x:u-v,y:d-v,w:v*2,h:v*2}]})}const c=new Set(i.state.missions.map(h=>h.dest.sys));e.font="900 18px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle";for(const h of c){const[u,d]=s(a[h]),f=u+14,m=d-14;e.lineWidth=3,e.strokeStyle="#141826",e.strokeText("★",f,m),e.fillStyle="#ffd34a",e.fillText("★",f,m),l.push({x:f,y:m,gap:0,lines:[],pri:0,blocks:[{x:f-8,y:m-8,w:16,h:16}]})}e.textBaseline="alphabetic",this.drawLabels(e,l,t,n)}mapTap(e){const t=$("mapCanvas"),n=t.getBoundingClientRect(),i=e.clientX-n.left,s=e.clientY-n.top,a=t.clientWidth,o=t.clientHeight;let l=null,c=34;if(this.mapTab==="system"){const h=this.sysProj(a,o);for(const u of this.systemItems()){const[d,f,m]=h(u.pos),v=Math.hypot(d-i,f-s)-(u.ring?Math.min(u.ring*m,30):0);v<c&&(c=v,l=u)}}else{const h=this.galProj(a,o);for(const u of this.g.galaxy.systems){const[d,f]=h(u),m=Math.hypot(d-i,f-s);m<c&&(c=m,l={sys:u.id,name:u.name})}}this.mapSel=l,this.g.audio.play("click",{vol:.3}),this.renderMapInfo(),this.drawMap()}route(e,t){const n=this.g.galaxy.systems,i={[e]:-1},s=[e];for(;s.length;){const l=s.shift();if(l===t)break;for(const c of n[l].links)c in i||(i[c]=l,s.push(c))}if(!(t in i))return null;const a=[];let o=t;for(;o!==-1;)a.unshift(o),o=i[o];return a}renderMapInfo(){const e=$("mapInfo"),t=this.g,n=this.mapSel;if(!n){e.innerHTML="";return}if(this.mapTab==="system"){let i="";if(n.kind==="gate"){const l=t.galaxy.systems[n.gate.to];i=`<p>Leads to <b>${l.name}</b> (${nn[l.eco].name}). Fly close and press JUMP.</p>`}n.kind==="field"&&(i=`<p>Asteroids rich in <b>${ht[n.field.primary].name}</b> and ${ht[n.field.data.secondary].name}. Rare Lumenite veins.</p>`),n.kind==="planet"&&n.deposit&&(i=`<p>Surface deposit: <b>${ht[n.deposit.ore].name}</b> (${Math.round(n.deposit.amount)} units). Autopilot parks you in low orbit above it, ready to drill.</p>`),n.kind==="station"&&(i="<p>Safe harbor: market, upgrades, shipyard, repairs.</p>"),n.kind==="derelict"&&(i="<p>Abandoned hulk. Hold SALVAGE nearby for credits & parts. Restocks every 3 days.</p>");const s=(n.dest||n.pos).distanceTo(t.player.pos),a=t.state.missions.filter(l=>l.dest.sys===t.state.systemId&&(n.kind==="station"&&l.dest.kind==="station"||n.kind==="planet"&&l.dest.kind==="planet"&&t.world.deposits[l.dest.planet]===n.deposit)),o=a.length?`<p style="color:#9a6a00"><b>★ Contract drop-off:</b> ${a.map(l=>l.title).join("; ")}</p>`:"";e.innerHTML=`<h4>${n.name}</h4>${i}${o}<p>Distance ${this.dist(s)}</p><button class="pbtn primary" data-act="autopilot">AUTOPILOT</button>`}else{const i=t.galaxy.systems[n.sys],s=t.state.intel[i.id],a=this.route(t.state.systemId,i.id);let o="";if(s)o="<table><tr><td></td><td><b>pay</b></td><td><b>sell</b></td></tr>"+Dn.map(d=>`<tr><td>${d.name}</td><td>${s.prices[d.id].s}</td><td>${s.prices[d.id].b??"—"}</td></tr>`).join("")+`</table><small>Intel from day ${s.day}</small>`;else{const d=nn[i.eco].mult,f=Object.entries(d).filter(([,v])=>v>=1.25).map(([v])=>ht[v].name).join(", "),m=Object.entries(d).filter(([,v])=>v<=.75).map(([v])=>ht[v].name).join(", ");o=`<p>No market intel yet.<br>Typical demand: <b>${f||"—"}</b><br>Typical exports: <b>${m||"—"}</b></p>`}const l=a?a.length-1:0,c=i.id===t.state.systemId?"<p><b>You are here.</b></p>":`<button class="pbtn primary" data-act="route">PLOT ROUTE · ${l} JUMP${l>1?"S":""}</button>`,h=t.state.missions.filter(d=>d.dest.sys===i.id),u=h.length?`<p style="color:#9a6a00"><b>★ Contracts here:</b> ${h.map(d=>`${d.title} → ${d.dest.name} (due Day ${d.deadline})`).join("; ")}</p>`:"";e.innerHTML=`<h4>${i.name}</h4><p>${nn[i.eco].name} · outlaw risk ${Math.round(i.danger*100)}%/day</p>${u}${o}${c}`}}mapAction(e){const t=this.g,n=this.mapSel;if(n&&(e==="autopilot"&&(t.setAutopilot(n.dest||n.pos,n.name,n.arrive||200,n.ignore||null),this.closeMap()),e==="route")){const i=this.route(t.state.systemId,n.sys);if(!i||i.length<2)return;const s=t.world.gates.find(a=>a.to===i[1]);s&&(t.setAutopilot(s.pos,`Gate → ${t.galaxy.systems[i[1]].name}`,250),this.closeMap())}}}const kt=r=>document.getElementById(r),Ze={A:0,B:1,X:2,Y:3,LB:4,RB:5,LT:6,RT:7,BACK:8,START:9,UP:12,DOWN:13,LEFT:14,RIGHT:15},sa=.18,js={xbox:{A:"A",B:"B",X:"X",Y:"Y",LB:"LB",RB:"RB",LT:"LT",RT:"RT",BACK:"View",START:"Menu"},sony:{A:"✕",B:"○",X:"□",Y:"△",LB:"L1",RB:"R1",LT:"L2",RT:"R2",BACK:"Share",START:"Options"},nintendo:{A:"B",B:"A",X:"Y",Y:"X",LB:"L",RB:"R",LT:"ZL",RT:"ZR",BACK:"−",START:"+"}};class dM{constructor(e){this.g=e,this.ui=e.ui,this.index=null,this.active=!1,this.prev=[],this.owns={steer:!1,fire:!1,boost:!1,mine:!1},this.focusEl=null,this.lastRect=null,this.navKey=null,this.navT=0,this.layout=js.xbox,this.rumbleOk=!0,this.lastRumble=0,this.lastRumbleStr=0,window.addEventListener("gamepadconnected",n=>this.connect(n.gamepad)),window.addEventListener("gamepaddisconnected",n=>{n.gamepad.index===this.index&&(this.index=null,this.release(),this.deactivate(),this.g.mode==="play"&&this.ui.toast("Controller disconnected","warn",3))});const t=()=>{this.active&&this.deactivate()};window.addEventListener("pointerdown",t,{capture:!0}),window.addEventListener("keydown",t,{capture:!0})}connect(e){this.index===null&&(this.index=e.index);const t=e.id.toLowerCase();this.layout=/xbox|xinput|045e/.test(t)?js.xbox:/054c|dualsense|dualshock|playstation|ps4|ps5/.test(t)?js.sony:/057e|pro controller|joy-con|nintendo/.test(t)?js.nintendo:js.xbox,this.applyBadges()}pad(){const e=navigator.getGamepads?navigator.getGamepads():[];if(this.index!==null&&e[this.index]&&e[this.index].connected)return e[this.index];for(const t of e)if(t&&t.connected)return this.connect(t),this.index=t.index,t;return null}activate(){this.active||(this.active=!0,document.body.classList.add("gamepad"),this.applyBadges(),this.g.mode==="play"?this.ui.toast(`🎮 Controller active — ${this.helpText(!0)}`,"info",5):this.g.mode==="menu"&&(kt("loadText").textContent=`Controller ready · press ${this.layout.A} to start`))}deactivate(){this.active=!1,document.body.classList.remove("gamepad"),this.focusEl&&this.focusEl.classList.remove("gp-focus")}applyBadges(){const e=this.layout,t=(n,i)=>{const s=kt(n);s&&(s.dataset.pad=i)};t("btnAction",e.A),t("btnFire",e.X),t("btnMissile",e.B),t("btnCruise",e.Y),t("btnTarget",e.LB),t("btnBoost",e.RB),t("btnMap",e.BACK),t("btnMenu",e.START),t("throttle",`${e.LT}/${e.RT}`)}helpText(e=!1){const t=this.layout,n=`L-stick steer · ${t.RT}/${t.LT} throttle · ${t.X} fire · ${t.A} action`;return e?n:`${n} · ${t.B} missile · ${t.RB} boost · ${t.Y} cruise · ${t.LB} target · ${t.BACK} map · ${t.START} pause · menus: D-pad/stick move, ${t.A} select, ${t.B} back, ${t.LB}/${t.RB} tabs`}rumble(e,t=e,n=120){if(!this.active||!this.rumbleOk)return;const i=this.pad(),s=i&&i.vibrationActuator;if(!s||typeof s.playEffect!="function")return;const a=performance.now();a-this.lastRumble<80&&e<=this.lastRumbleStr||(this.lastRumble=a,this.lastRumbleStr=e,s.playEffect("dual-rumble",{duration:n,strongMagnitude:St(e,0,1),weakMagnitude:St(t,0,1)}).catch(o=>{this.rumbleOk=!1,console.info("Controller rumble unavailable:",o.name)}))}release(){const e=this.g.input;this.owns.steer&&(e.sx=0,e.sy=0),this.owns.fire&&(e.fire=!1),this.owns.boost&&(e.boost=!1),this.owns.mine&&(e.mine=!1),this.owns={steer:!1,fire:!1,boost:!1,mine:!1}}poll(e){const t=this.pad();if(!t)return;const n=v=>!!t.buttons[v]&&(t.buttons[v].pressed||t.buttons[v].value>.5),i=v=>t.buttons[v]?t.buttons[v].value:0,s=t.buttons.map((v,g)=>n(g)),a=v=>s[v]&&!this.prev[v],o=v=>{const g=t.axes[v]||0;return Math.abs(g)<sa?0:g},l=o(0),c=o(1),h=o(2),u=o(3);if((s.some(Boolean)||l||c||h||u)&&this.activate(),!this.active){this.prev=s;return}const f=this.context();f!=="flight"&&this.release();const m={p:t,btn:n,val:i,hit:a,lx:l,ly:c,rx:h,ry:u,dt:e};f==="flight"?this.flight(m):f==="map"?this.mapNav(m):f&&this.menuNav(m,f),f!==this.lastCtx&&this.focusEl&&f==="flight"&&(this.focusEl.classList.remove("gp-focus"),this.focusEl=null),this.lastCtx=f,this.prev=s}context(){const e=this.g,t=n=>!kt(n).classList.contains("hidden");return t("dialog")&&(e.mode==="menu"||e.mode==="play")?"dialog":e.mode==="menu"?"start":e.mode!=="play"?null:t("pause")?"pause":t("mapOv")?"map":t("station")?"station":"flight"}flight(e){const t=this.g,n=t.input,i=e.p.axes[0]||0,s=e.p.axes[1]||0,a=Math.min(1,Math.hypot(i,s));if(a>sa){const h=Math.pow((a-sa)/(1-sa),1.3)/a;n.sx=St(i*h,-1,1),n.sy=St(-s*h,-1,1),this.owns.steer=!0}else this.owns.steer&&(n.sx=0,n.sy=0,this.owns.steer=!1);const o=e.val(Ze.RT),l=e.val(Ze.LT);(o>.05||l>.05)&&(n.throttle=St(n.throttle+(o-l)*.9*e.dt,0,1)),e.hit(Ze.UP)&&(n.throttle=St(Math.round((n.throttle+.25)*4)/4,0,1)),e.hit(Ze.DOWN)&&(n.throttle=St(Math.round((n.throttle-.25)*4)/4,0,1));const c=(h,u)=>{e.btn(u)?n[h]||(n[h]=!0,this.owns[h]=!0):this.owns[h]&&(n[h]=!1,this.owns[h]=!1)};if(c("fire",Ze.X),c("boost",Ze.RB),e.hit(Ze.A)){const h=t.currentAction;h&&h.hold?(n.mine=!0,this.owns.mine=!0):h&&(t.audio.play("click",{vol:.5}),t.doAction(h))}else!e.btn(Ze.A)&&this.owns.mine&&(n.mine=!1,this.owns.mine=!1);e.hit(Ze.B)&&t.fireMissile(),e.hit(Ze.Y)&&t.setCruise(!t.player.cruise),e.hit(Ze.LB)&&t.cycleTarget(),e.hit(Ze.BACK)&&this.ui.openMap(),e.hit(Ze.START)&&this.ui.togglePause()}layerRoot(e){return{start:kt("start").querySelector(".start-actions"),dialog:kt("dialogBox"),pause:kt("pause").querySelector(".dialog"),station:kt("station")}[e]}buttons(e){return[...e.querySelectorAll("button")].filter(t=>!t.disabled&&t.offsetParent!==null&&t.getClientRects().length)}setFocus(e){this.focusEl&&this.focusEl!==e&&this.focusEl.classList.remove("gp-focus"),this.focusEl=e,e&&(e.classList.add("gp-focus"),e.scrollIntoView({block:"nearest",inline:"nearest"}),this.lastRect=e.getBoundingClientRect(),this.lastZone=e.closest("#stBody")?"#stBody":e.closest(".tabs")?".tabs":null)}dir(e){let t=0,n=0;e.btn(Ze.LEFT)?t=-1:e.btn(Ze.RIGHT)&&(t=1),e.btn(Ze.UP)?n=-1:e.btn(Ze.DOWN)&&(n=1),!t&&!n&&Math.hypot(e.lx,e.ly)>.6&&(Math.abs(e.lx)>Math.abs(e.ly)?t=Math.sign(e.lx):n=Math.sign(e.ly));const i=`${t},${n}`;return!t&&!n?(this.navKey=null,null):i!==this.navKey?(this.navKey=i,this.navT=.35,[t,n]):(this.navT-=e.dt,this.navT<=0?(this.navT=.11,[t,n]):null)}pick(e,t,[n,i]){let s=null,a=1/0;for(const o of e){const l=o.x-t.x,c=o.y-t.y,h=l*n+c*i;if(h<=4)continue;const u=h+Math.abs(l*i-c*n)*2.5;u<a&&(a=u,s=o)}return s}menuNav(e,t){const n=this.layerRoot(t);if(!n)return;const i=this.buttons(n);if(!i.length)return;if(!this.focusEl||!this.focusEl.isConnected||!i.includes(this.focusEl)||t!==this.lastCtx){let a=null;if(this.lastRect&&t===this.lastCtx){const o=this.lastRect.left+this.lastRect.width/2,l=this.lastRect.top+this.lastRect.height/2,c=this.lastZone?i.filter(u=>u.closest(this.lastZone)):[];a=(c.length?c:i).reduce((u,d)=>{const f=d.getBoundingClientRect(),m=Math.hypot(f.left+f.width/2-o,f.top+f.height/2-l);return!u||m<u.d?{el:d,d:m}:u},null).el}else a=this.defaultFocus(t,n,i);this.setFocus(a)}else this.lastRect=this.focusEl.getBoundingClientRect();const s=this.dir(e);if(s){const a=c=>{const h=c.getBoundingClientRect();return{el:c,x:h.left+h.width/2,y:h.top+h.height/2}},o=a(this.focusEl),l=this.pick(i.filter(c=>c!==this.focusEl).map(a),o,s);l&&(this.setFocus(l.el),this.g.audio.play("click",{vol:.15,rate:1.4}))}if(e.hit(Ze.A)&&this.focusEl&&(t==="start"&&this.audioHint(),this.focusEl.click()),t==="station")(e.hit(Ze.LB)||e.hit(Ze.RB))&&this.cycleTabs(kt("stTabs"),e.hit(Ze.RB)?1:-1),e.ry&&(kt("stBody").scrollTop+=e.ry*700*e.dt),e.hit(Ze.B)&&kt("btnUndock").click();else if(t==="pause")(e.hit(Ze.B)||e.hit(Ze.START))&&this.ui.togglePause();else if(t==="dialog"&&e.hit(Ze.B)){const a=this.buttons(n).find(o=>/CANCEL|CLOSE/.test(o.textContent));a&&a.click()}}defaultFocus(e,t,n){return e==="station"?n.find(i=>i.closest("#stBody"))||n.find(i=>i.classList.contains("tab"))||n[0]:e==="dialog"?n.find(i=>/CANCEL|CLOSE/.test(i.textContent))||n.find(i=>i.classList.contains("primary"))||n[0]:n.find(i=>i.classList.contains("primary"))||n[0]}cycleTabs(e,t){const n=[...e.querySelectorAll(".tab")],i=n.findIndex(s=>s.classList.contains("on"));n[(i+t+n.length)%n.length].click()}audioHint(){setTimeout(()=>{this.g.audio.ctx.state!=="running"&&this.g.state.sound&&this.ui.toast("Tap the screen once to turn on sound — browsers only start audio after a touch or click","info",6)},900)}mapItems(){const e=this.ui,t=kt("mapCanvas"),n=t.clientWidth,i=t.clientHeight;if(e.mapTab==="system"){const a=e.sysProj(n,i);return e.systemItems().map(o=>{const[l,c]=a(o.pos);return{sel:o,x:l,y:c}})}const s=e.galProj(n,i);return this.g.galaxy.systems.map(a=>{const[o,l]=s(a);return{sel:{sys:a.id,name:a.name},x:o,y:l}})}mapNav(e){const t=this.ui,n=this.g,i=kt("mapCanvas");this.focusEl&&(this.focusEl.classList.remove("gp-focus"),this.focusEl=null);const s=this.mapItems(),a=t.mapSel&&s.find(u=>u.sel.name===t.mapSel.name);let o=a;if(!o)if(t.mapTab==="system"){const[u,d]=t.sysProj(i.clientWidth,i.clientHeight)(n.player.pos);o={x:u,y:d}}else{const[u,d]=t.galProj(i.clientWidth,i.clientHeight)(n.galaxy.systems[n.state.systemId]);o={x:u,y:d}}const l=this.dir(e);if(l){const u=this.pick(s.filter(d=>d!==a),o,l);u&&this.selectMap(u)}if(e.hit(Ze.A)){const u=kt("mapInfo").querySelector("button[data-act]");if(u)u.click();else{const[d,f]=t.mapCenter(),m=s.reduce((v,g)=>!v||Math.hypot(g.x-d,g.y-f)<Math.hypot(v.x-d,v.y-f)?g:v,null);m&&this.selectMap(m)}}(e.hit(Ze.B)||e.hit(Ze.BACK))&&t.closeMap(),(e.hit(Ze.LB)||e.hit(Ze.RB)||e.hit(Ze.Y))&&this.cycleTabs(kt("mapTabs"),e.hit(Ze.LB)?-1:1),e.hit(Ze.START)&&(t.closeMap(),t.togglePause());const c=e.val(Ze.RT),h=e.val(Ze.LT);if(c>.05||h>.05){let[u,d]=t.mapCenter();const f=s.find(m=>t.mapSel&&m.sel.name===t.mapSel.name);f&&(u=f.x,d=f.y),t.mapZoomAt(u,d,Math.exp((c-h)*2.2*e.dt))}if(e.rx||e.ry){const u=t.mapView[t.mapTab];u.x-=e.rx*520*e.dt,u.y-=e.ry*520*e.dt,t.mapClampPan(),t.drawMap()}}selectMap(e){const t=this.ui,n=kt("mapCanvas");t.mapSel=e.sel,t.renderMapInfo();const i=n.clientWidth,s=n.clientHeight,a=50,o=kt("mapInfo").getBoundingClientRect(),l=n.getBoundingClientRect(),c=o.height&&o.top>l.top+s*.4?o.top-l.top:s;if(e.x<a||e.x>i-t.mapInfoReserve(i)-a||e.y<a||e.y>c-a){const h=t.mapView[t.mapTab],[u,d]=t.mapCenter();h.x+=u-e.x,h.y+=Math.min(d,c/2)-e.y,t.mapClampPan()}t.drawMap(),this.g.audio.play("click",{vol:.2,rate:1.3})}}const Xe=new A,zt=new A,Xn=new A,fM=new A,ru=new A,au=new A(0,1,0),Io=new URLSearchParams(location.search);class pM{constructor(e){this.container=e,this.time=0,this.mode="loading",this.traders=[],this.outlaws=[],this.input={sx:0,sy:0,throttle:.35,fire:!1,mine:!1,boost:!1},this.target=null,this.autopilot=null,this.warp=null,this.docked=!1,this.paused=!1,this.shake=0,this.mineAcc=0,this.salvage=null}async boot(){const e=this.renderer=new Uv({antialias:!1,powerPreference:"high-performance"});e.toneMapping=Pl,e.toneMappingExposure=1.05,e.outputColorSpace=bt,this.container.appendChild(e.domElement),this.scene=new Wu,this.camera=new $t(62,1,1,8e4),this.keyLight=new Tl(16777215,2.8),this.scene.add(this.keyLight),this.scene.add(this.keyLight.target),this.hemi=new Uy(8952268,2234914,.55),this.scene.add(this.hemi),this.rimLight=new Tl(7323647,.6),this.scene.add(this.rimLight),this.scene.add(this.rimLight.target),this.post=new oM(e,this.scene,this.camera),this.audio=new lM,this.ui=new uM(this),this.pad=new dM(this),this.fx=new Tx(this),this.world=new yx(this),window.addEventListener("resize",()=>this.resize()),this.resize();const t=Hx();Yx();const n=()=>{this.mode==="play"&&this.save()};document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&n()}),window.addEventListener("pagehide",n),this.state=t||Qh(Io.get("seed")?Number(Io.get("seed")):Math.floor(Math.random()*1e9)),tu(this.state),this.hasSave=!!t,this.applyQuality(this.state.quality);const i={audio:0,model:0,world:0},s=l=>this.ui.setLoading(i.audio*.55+i.model*.25+i.world*.2,l),a=this.audio.load((l,c)=>{i.audio=l,s(`Loading audio · ${c}`)}),o=new Promise(l=>{const c=new D_;c.setDecoderPath("./draco/");const h=new Jy;h.setDRACOLoader(c),h.load("./models/outlaw.glb",u=>{this.outlawTpl=hx(u.scene,19),i.model=1,s("Outlaw signatures catalogued"),l()},u=>{u.total&&(i.model=u.loaded/u.total*.95,s("Loading ship models"))},u=>{console.warn("outlaw model failed, using procedural fallback",u),this.outlawTpl=null,i.model=1,s("Ship models ready"),l()})});this.galaxy=ar(this.state.seed),this.economy=new Eo(this.galaxy,this.state),this.state.systemId==null&&(this.state.systemId=this.galaxy.startId),i.world=.2,s("Charting star systems"),await new Promise(l=>setTimeout(l,30)),["wren","mule","kestrel","bastion"].forEach(l=>Js(l,"player")),Js("mule","trader"),Js("kestrel","outlaw"),i.world=.5,s("Assembling hulls"),await new Promise(l=>setTimeout(l,30)),this.enterSystem(this.state.systemId,null,!0),i.world=1,s("Systems online"),await Promise.all([a,o]),this.ui.setLoading(1,"Ready for launch"),this.renderer.compile(this.scene,this.camera),this.mode="menu",this.ui.showReady(this.hasSave),this.last=performance.now(),this.renderer.setAnimationLoop(()=>this.frame()),window.__game=this}setFX(e){this.post.setEnabled(e),this.scene.fog&&(this.scene.fog.density=e?this.fogDensity:0),this.world.dust.visible=e;for(const t of this.world.fields)t.haze.forEach(n=>n.visible=e);this.world.star.children.forEach((t,n)=>{n>0&&(t.visible=e)})}applyQuality(e){this.state.quality=e;const t=e==="high"?1.75:1;this.pixelRatio=Math.min(window.devicePixelRatio||1,t),this.resize()}resize(){const e=window.innerWidth,t=window.innerHeight;if(!this.renderer)return;const n=this.pixelRatio||Math.min(window.devicePixelRatio||1,1.75);this.renderer.setPixelRatio(n),this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.post.setSize(e,t,n),this.world&&(this.world.dust.material.uniforms.uPx.value=n*(t/800)),this.fx&&(this.fx.particles.points.material.uniforms.uPx.value=n*(t/800))}startGame(e){if(e){Gx();const t=Math.floor(Math.random()*1e9);this.state=Qh(t),this.galaxy=ar(t),this.economy=new Eo(this.galaxy,this.state),this.state.systemId=this.galaxy.startId,this.enterSystem(this.state.systemId,null,!0)}this.audio.unlock(),this.audio.setEnabled(this.state.sound),this.audio.setMusic("calm"),this.mode="play",this.ui.enterPlay(),this.checkDeadlines(),this.state.tutorial.docked||setTimeout(()=>this.ui.toast("Welcome, pilot. Mine rocks in the field or dock at the station to trade.","info",6),600)}activeShipRec(){return this.state.ships.find(e=>e.uid===this.state.active)}spawnPlayer(e,t=0){const n=this.activeShipRec();this.player&&this.player.remove();const i=rr(n.hull,n.mods),s=new wo(this,{kind:"player",hullId:n.hull,palette:"player",stats:i,name:Ct[n.hull].name});for(s.cargo=n.cargo,n.hp!=null&&(s.hp=Math.min(s.maxHp,n.hp)),s.missiles=Math.min(n.missiles||0,i.mslCap),s.pos.copy(e),s.yaw=t,s.speed=0,s.obj.quaternion.setFromEuler(new Zt(0,t,0,"YXZ")),this.player=s,this.playerBeams=this.playerBeams||[];this.playerBeams.length<3;)this.playerBeams.push(this.fx.makeBeam(5826815));return this.mineBeam=this.mineBeam||this.fx.makeBeam(12124010),this.camInit=!1,this.updateMissionLoad(),s}syncShipRec(){const e=this.activeShipRec();!e||!this.player||(e.hp=this.player.hp,e.missiles=this.player.missiles)}refreshPlayerStats(){const e=this.activeShipRec(),t=rr(e.hull,e.mods);this.player.applyStats(t,!1),this.player.missiles=Math.min(this.player.missiles,t.mslCap)}cargoFree(){return this.player.stats.cargo-this.player.cargoUsed()}enterSystem(e,t,n=!1){for(const c of this.traders)c.remove();for(const c of this.outlaws)c.remove();this.traders=[],this.outlaws=[],this.target=null,this.autopilot=null,this.fx.clearAll(),this.state.systemId=e;const i=this.galaxy.systems[e];this.sysInfo=i,this.sysData=fd(i,this.galaxy),this.world.build(this.sysData,this.state.day);let s,a;if(t!=null){const c=this.world.gates.find(u=>u.to===t)||this.world.gates[0],h=Xe.copy(c.pos).negate().setY(0).normalize();s=c.pos.clone().addScaledVector(h,430),a=Math.atan2(h.x,h.z)}else if(n&&this.state.pos)s=new A(...this.state.pos),a=this.state.yaw||0;else{const c=this.world.station.pos,h=this.world.fields.slice().sort((d,f)=>d.center.distanceTo(c)-f.center.distanceTo(c))[0],u=h?Xe.subVectors(h.center,c).setY(0).normalize():Xe.copy(c).setY(0).normalize();s=c.clone().addScaledVector(u,230),a=Math.atan2(u.x,u.z)}this.spawnPlayer(s,a),this.economy.recordIntel(e),this.traderTimer=6;const l=1+new ti(Date.now()&65535).int(0,1)+(i.eco==="industrial"?1:0);for(let c=0;c<l;c++)this.spawnTrader(!0);this.rollOutlaws(),n||this.ui.toast(`${i.name} · ${nn[i.eco].name} system`,"info",3.5),this.ui.onSystemChanged()}spawnTrader(e=!1){const t=this.world;if(!t.gates.length)return;const n=Math.random,i=t.gates[Math.floor(n()*t.gates.length)],s=n()<.5,a=new wo(this,{kind:"trader",hullId:"mule",palette:"trader",stats:{...rr("mule",{engine:0,cargo:0,barrier:1,beam:0,missile:0,mining:0,sensors:0,hull:0,reactor:0}),speed:46},name:Xh[Math.floor(n()*Xh.length)]}),o=s?this.galaxy.systems[i.to]:this.sysInfo,l=Dn.filter(f=>f.kind==="good"&&nn[o.eco].mult[f.id]<1),c=l.length?l:Dn.filter(f=>f.kind==="good");for(let f=0;f<2;f++){const m=c[Math.floor(n()*c.length)];a.cargo[m.id]=(a.cargo[m.id]||0)+8+Math.floor(n()*22)}a.origin=o.id;const h=s?i.pos:t.station.pos,u=s?t.station.pos:i.pos;a.dest={pos:u.clone(),type:s?"station":"gate",gate:s?null:i};const d=h.clone().add(Xe.set((n()-.5)*120,(n()-.5)*60,(n()-.5)*120));e?d.lerp(u,.15+n()*.6):d.addScaledVector(zt.subVectors(u,h).normalize(),s?150:180),a.pos.copy(d),Xe.subVectors(u,d),a.yaw=Math.atan2(Xe.x,Xe.z),a.throttle=.85,a.speed=a.stats.speed*.8,a.beam=null,this.traders.push(a),!e&&s&&this.fx.particles.burst(d,30,60,12099839,5,1)}updateTraders(e){for(let n=this.traders.length-1;n>=0;n--){const i=this.traders[n];if(i.dead){this.traders.splice(n,1);continue}this.time-i.lastHit<8&&i.lastAttacker&&!i.lastAttacker.dead?(Xe.subVectors(i.pos,i.lastAttacker.pos).add(i.pos),i.steerTo(Xe,e),i.throttle=1,i.boost=!0):(i.boost=!1,i.aim=i.aim||new A,this.planRoute(i.pos,i.dest.pos,i.radius,i.dest.type==="station"?this.world.station:null,i.aim),i.steerTo(i.aim,e,.6),i.throttle=this.angleTo(i,i.aim)>.8?.45:.85),i.updateMotion(e,this.world),i.updateVisual(e),i.pos.distanceTo(i.dest.pos)<(i.dest.type==="station"?110:120)&&(i.dest.type==="gate"&&this.fx.particles.burst(i.pos,40,80,12099839,5,1),this.target===i&&(this.target=null),i.remove(),this.traders.splice(n,1))}this.traderTimer-=e;const t=3+(this.sysInfo.eco==="industrial"||this.sysInfo.eco==="agricultural"?1:0);this.traderTimer<=0&&(this.traderTimer=28+Math.random()*35,this.traders.length<t&&this.spawnTrader(!1))}rollOutlaws(){const e=`${this.state.systemId}:${this.state.day}`;let t=this.state.outlawRoll[e];if(!t){const n=Io.get("outlaws")==="1",i=this.sysInfo.danger+(this.missionsAboard().some(a=>a.vip)?.12:0),s=n||Math.random()<i;t={hit:s,at:s?Math.min(.95,this.state.dayTime+(n?.02:.08+Math.random()*.5)):null,spawned:!1,warned:!1},this.state.outlawRoll={[e]:t}}this.outlawKey=e}forceOutlaws(e){const t=this.state.outlawRoll[this.outlawKey];t.hit=!0,t.at=this.state.dayTime,t.spawned=!1,this.forcedCount=e}spawnOutlaws(){const e=Ii(this.state);let t=e<=1?1:e===2?1+(Math.random()<.5?1:0):e===3?2+Math.floor(Math.random()*2):2+Math.floor(Math.random()*3);this.forcedCount&&(t=this.forcedCount,this.forcedCount=0);const i=this.world.gates.slice().sort((c,h)=>c.pos.distanceTo(this.player.pos)-h.pos.distanceTo(this.player.pos)),s=i.find(c=>c.pos.distanceTo(this.player.pos)>1800)||i[i.length-1];let a=s?s.pos.clone():this.player.pos.clone().add(Xe.set(2500,0,0));s&&a.distanceTo(this.player.pos)>6500&&(a=this.player.pos.clone().add(Xe.subVectors(s.pos,this.player.pos).normalize().multiplyScalar(4200)));const o=qh[Math.floor(Math.random()*qh.length)];for(let c=0;c<t;c++){const h={speed:82+e*4,turn:1.55,cargo:40,shield:30+e*35,shieldRegen:5+e*2,hull:90+e*50,dps:7+e*3.5,beamRange:250,hard:1,mslCap:e>=2?2:0,mslDmg:40+e*8,energy:120,energyRegen:18,sensor:3e3},u=new wo(this,{kind:"outlaw",hullId:"kestrel",palette:"outlaw",tpl:this.outlawTpl||Js("kestrel","outlaw"),stats:h,name:t>1?`${o} ${["α","β","γ","δ"][c]}`:o});u.pos.copy(a).add(Xe.set((Math.random()-.5)*140,(Math.random()-.5)*50,(Math.random()-.5)*140)),Xe.subVectors(this.player.pos,u.pos),u.yaw=Math.atan2(Xe.x,Xe.z),u.throttle=1,u.state="hunt",u.missiles=h.mslCap,u.mslCd=6+Math.random()*6,u.retarget=0,u.orbitDir=Math.random()<.5?1:-1,u.beam=this.fx.makeBeam(16730682),u.spawnTime=this.time,u.cargo={[["food","medical","parts","data"][Math.floor(Math.random()*4)]]:3+Math.floor(Math.random()*8)},this.outlaws.push(u)}this.fx.particles.burst(a,60,90,16738890,6,1.2);const l=a.distanceTo(this.player.pos)<this.player.stats.sensor;this.ui.toast(l?`⚠ OUTLAW CONTACT — ${t>1?`${t} raiders`:o} jumped in!`:`⚠ Outlaw jump signature detected in ${this.sysInfo.name}`,"warn",5),this.audio.play("alarm",{vol:.8})}updateOutlawSchedule(){const e=this.state.outlawRoll[this.outlawKey];if(!e||!e.hit||e.spawned)return;const t=this.player.stats.sensorLvl>=2?.13:0;t&&!e.warned&&this.state.dayTime>=e.at-t&&(e.warned=!0,this.ui.toast(`Sensors: hostile jump signature forming — outlaws inbound in ~${Math.round((e.at-this.state.dayTime)*Mo)}s`,"warn",6),this.audio.play("alarm",{vol:.5})),this.state.dayTime>=e.at&&!this.docked&&(e.spawned=!0,this.spawnOutlaws())}pickOutlawTarget(e){let t=null,n=-1/0;const i=[this.player,...this.traders];for(const s of i){if(!s||s.dead||s===this.player&&this.docked)continue;const a=s.pos.distanceTo(e.pos),l=(s.cargoValue()+(s===this.player?250+this.player.stats.cargo*2:0))/(1+a/1500);l>n&&(n=l,t=s)}return t}updateOutlaws(e){for(let t=this.outlaws.length-1;t>=0;t--){const n=this.outlaws[t];if(n.dead){this.outlaws.splice(t,1);continue}n.retarget-=e,n.state!=="flee"&&(n.retarget<=0||!n.tgt||n.tgt.dead)&&(n.tgt=this.pickOutlawTarget(n),n.retarget=4),n.state!=="flee"&&n.lastAttacker&&!n.lastAttacker.dead&&this.time-n.lastHit<10&&!(n.lastAttacker===this.player&&this.docked)&&(n.tgt=n.lastAttacker),n.hp<n.maxHp*.22&&n.state!=="flee"&&(n.state="flee",this.ui.toast(`${n.name} is breaking off!`,"info",2.5)),this.time-n.spawnTime>Mo*1.2&&n.state!=="flee"&&(n.state="flee");const i=n.tgt;if(n.firing=!1,n.cruise=!1,n.boost=!1,n.state==="flee"||!i){if(Xe.subVectors(n.pos,this.player.pos).setY(0).normalize().multiplyScalar(5e3).add(n.pos),n.steerTo(Xe,e),n.throttle=1,n.boost=n.energy>20,n.pos.distanceTo(this.player.pos)>4500){this.fx.particles.burst(n.pos,40,80,16738890,5,1),n.beam&&(n.beam.visible=!1),n.remove(),this.outlaws.splice(t,1),this.target===n&&(this.target=null);continue}}else{const s=n.pos.distanceTo(i.pos);s>1600?(n.steerTo(i.pos,e),n.cruise=!0,n.throttle=1):s>320?(Xe.copy(i.vel).multiplyScalar(s/300).add(i.pos),n.steerTo(Xe,e),n.throttle=1,n.boost=s>700&&n.energy>40):(Xe.subVectors(n.pos,i.pos).normalize(),zt.crossVectors(Xe,au).multiplyScalar(n.orbitDir),Xn.copy(i.pos).addScaledVector(Xe,170).addScaledVector(zt,160),this.angleTo(n,i.pos)>.5?n.steerTo(Xn,e):n.steerTo(i.pos,e,.9),n.throttle=.7);const a=this.angleTo(n,i.pos);if(s<n.stats.beamRange&&a<.3&&n.energy>5){n.firing=!0,n.energy-=8*e;const o=this.muzzleWorld(n,0,Xn);this.fx.showBeam(n.beam,o,Xe.copy(i.pos).add(zt.set((Math.random()-.5)*2,(Math.random()-.5)*2,0)),1.6);const l=i.damage(n.stats.dps*e,n.pos,n);i===this.player&&(this.shake=Math.min(1,this.shake+e*2),this.ui.damagePulse()),this.onShipHit(i,n,l)}n.mslCd-=e,n.missiles>0&&n.mslCd<=0&&s<700&&a<.6&&(n.missiles--,n.mslCd=9,this.fx.launchMissile(n,i,n.stats.mslDmg),i===this.player&&this.ui.toast("⚠ Incoming missile!","warn",2)),i===this.player&&s<1300&&this.player.cruise&&(this.player.cruise=!1,this.ui.toast("Cruise disrupted by outlaw interdiction!","warn",3),this.autopilot=null)}!n.firing&&n.beam&&(n.beam.visible=!1),n.updateMotion(e,this.world),n.updateVisual(e)}}angleTo(e,t){return e.forwardTo(zt),Xn.subVectors(t,e.pos).normalize(),Math.acos(St(zt.dot(Xn),-1,1))}muzzleWorld(e,t,n){const i=e.muzzles[t%e.muzzles.length];return n.copy(i).applyQuaternion(e.obj.quaternion).add(e.pos)}onShipHit(e,t,n){if(e.kind==="trader"&&t===this.player){const i=this.state.systemId;e.reported||(e.reported=!0,this.state.wanted[i]=(this.state.wanted[i]||0)+1,this.ui.toast(`Trader ${e.name} reports your attack — WANTED in ${this.sysInfo.name}`,"warn",4))}if(e.kind==="trader"&&t&&t.kind==="outlaw"&&!e.distress&&e.pos.distanceTo(this.player.pos)<this.player.stats.sensor&&(e.distress=!0,this.ui.toast(`Distress call: trader ${e.name} under outlaw attack!`,"warn",4)),!!n){if(e===this.player){this.playerDestroyed();return}this.destroyShip(e,t)}}destroyShip(e,t){this.fx.explosion(e.pos.clone(),e.radius/6,e.kind==="outlaw"?16742976:16756832);const n=Object.entries(e.cargo).filter(([,i])=>i>0);for(const[i,s]of n){let a=Math.ceil(s*.7);for(;a>0;){const o=Math.min(a,10);this.fx.dropCrate(e.pos,{[i]:o}),a-=o}}if(e.kind==="outlaw"){if(t===this.player){const s=350+Ii(this.state)*200;this.fx.dropCrate(e.pos,{},s),this.state.stats.kills++,this.ui.toast(`${e.name} destroyed — bounty crate released (◈ ${vt(s)})`,"good",3.5);for(const a of this.traders)a.distress&&!a.rewarded&&a.pos.distanceTo(e.pos)<1500&&(a.rewarded=!0,this.addCredits(250),this.ui.toast(`${a.name}: “Thank you, pilot!” +◈ 250`,"good",3))}e.beam&&(e.beam.visible=!1)}e.kind==="trader"&&t&&t.kind==="outlaw"&&this.ui.toast(`Trader ${e.name} was destroyed by outlaws.`,"warn",3),this.target===e&&(this.target=null),e.remove()}playerDestroyed(){const e=this.player;this.fx.explosion(e.pos.clone(),3,16752720),e.obj.visible=!1,e.dead=!0;for(const n of this.playerBeams)n.visible=!1;this.mineBeam.visible=!1,this.audio.loop("beam","beam",!1),this.audio.loop("mine","mine",!1);const t=Math.round(this.state.credits*.1);setTimeout(()=>{this.ui.dialog(`<div class="ov-title">SHIP DISABLED</div><p>Your ${Ct[e.hullId].name} was overwhelmed. The Frontier Insurance Guild tows you to ${this.world.station.name}.</p><p><b>Cargo lost.</b> Insurance fee: <b>◈ ${vt(t)}</b></p>`,[{label:"ACCEPT TOW",primary:!0,fn:()=>{this.state.credits-=t;const n=this.activeShipRec();for(const a in n.cargo)delete n.cargo[a];n.hp=null;for(const a of this.missionsAboard())this.failMission(a,a.type==="passenger"?"passengers evacuated by rescue pods":"contract cargo lost with the ship");for(const a of this.outlaws)a.beam&&(a.beam.visible=!1),a.remove();this.outlaws=[],this.fx.clearAll();const i=this.world.station.pos,s=Xe.copy(i).negate().setY(0).normalize();this.spawnPlayer(i.clone().addScaledVector(s,230),Math.atan2(s.x,s.z)),this.dock()}}])},1600)}addCredits(e){this.state.credits+=e,e>0&&(this.state.stats.earned+=e),this.ui.creditFlash()}collectCrate(e){const t=this.cargoFree();let n=0;for(const s in e.cargo)n+=e.cargo[s];if(e.credits&&(this.addCredits(e.credits),this.audio.play("coins",{vol:.7})),n>t)return e.warned||(e.warned=!0,this.ui.toast("Cargo hold full — crate left behind","warn",2.5)),e.credits&&(e.credits=0),n===0;const i=[];for(const s in e.cargo)this.player.cargo[s]=(this.player.cargo[s]||0)+e.cargo[s],i.push(`${e.cargo[s]} ${ht[s].name}`);return i.length&&(this.ui.toast(`Recovered ${i.join(", ")}`,"good",2.5),this.audio.play("click",{vol:.6})),!0}dock(){const e=this.state.systemId;this.docked=!0,this.autopilot=null;const t=this.player;t.speed=0,t.cruise=!1,t.boost=!1,t.throttle=0,this.input.fire=!1,this.input.mine=!1,t.hp=t.hp;const n=(this.state.wanted[e]||0)*600;n>0&&(this.state.credits-=n,this.state.wanted[e]=0,this.ui.toast(`Security fine for attacking traders: ◈ ${vt(n)}`,"warn",4)),this.state.tutorial.docked=!0,this.economy.recordIntel(e),this.audio.play("warp",{vol:.5,rate:.7}),this.deliverAtStation(),this.save(),this.ui.openStation()}undock(){this.docked=!1;const e=this.world.station.pos,t=Xe.copy(this.player.pos).sub(e).setY(0).normalize();this.player.pos.copy(e).addScaledVector(t,240),this.player.yaw=Math.atan2(t.x,t.z),this.player.pitch=0,this.player.speed=20,this.input.throttle=.35,this.ui.closeStation(),this.save()}switchShip(e){if(e===this.state.active)return!0;if(this.missionsAboard().length)return this.ui.toast("Contract cargo or passengers are aboard — deliver or abandon those contracts before switching ships","warn",4),!1;this.syncShipRec();const t=this.player.pos.clone(),n=this.player.yaw;return this.state.active=e,this.spawnPlayer(t,n),this.save(),!0}save(){if(this.player&&this.player.dead)return!1;this.syncShipRec(),this.player&&(this.state.pos=this.player.pos.toArray().map(t=>Math.round(t)),this.state.yaw=this.player.yaw),this.state.savedAt=Date.now();const e=Vx(this.state);return!e&&!this._saveWarned&&(this._saveWarned=!0,this.ui.toast("⚠ Autosave failed — browser storage is full or disabled. Use Save & Load → Export to keep your progress.","warn",8)),e&&(this._saveWarned=!1),e}loadGame(e){this.state=tu(e),this.galaxy=ar(e.seed),this.economy=new Eo(this.galaxy,e),e.systemId==null&&(e.systemId=this.galaxy.startId),this.docked=!1,this.warp=null,this.autopilot=null,this.target=null,this.salvage=null,this.input.fire=this.input.mine=this.input.boost=!1,this.input.sx=this.input.sy=0,this.input.throttle=.35,this.post.grade.uniforms.uWarp.value=0,this.camera.fov=62,this.camera.updateProjectionMatrix(),this.ui.closeStation(),this.ui.closeMap(),this.ui.warpFlash(!1),this.enterSystem(e.systemId,null,!0),this.applyQuality(e.quality),this.audio.setEnabled(e.sound),this.checkDeadlines(),this.save()}beginJump(e){this.warp||(this.warp={t:0,gate:e},this.autopilot=null,this.player.cruise=!1,this.audio.play("warp",{vol:.9}))}updateWarp(e){const t=this.warp;t.t+=e;const n=this.player;if(n.steerTo(t.gate.pos,e,3),n.throttle=1,n.boost=!1,n.speed=Math.min(n.speed+e*400,900),this.post.grade.uniforms.uWarp.value=Math.min(1,t.t/1.4),this.camera.fov=62+30*Math.min(1,t.t/1.4),this.camera.updateProjectionMatrix(),t.t>1.3&&!t.flashed&&(t.flashed=!0,this.ui.warpFlash(!0)),t.t>1.7){const i=this.state.systemId;this.syncShipRec(),this.enterSystem(t.gate.to,i),this.state.stats.jumps++,this.warp=null,this.post.grade.uniforms.uWarp.value=0,this.camera.fov=62,this.camera.updateProjectionMatrix(),this.player.speed=60,this.input.throttle=.4,setTimeout(()=>this.ui.warpFlash(!1),80),this.audio.play("warp",{vol:.6,rate:.8}),this.save()}}findInteraction(){const e=this.player,t=this.world;if(t.station.pos.distanceTo(e.pos)<260)return{type:"dock",label:"DOCK",warm:!0};for(const s of t.gates)if(s.pos.distanceTo(e.pos)<340)return{type:"jump",label:`JUMP › ${this.galaxy.systems[s.to].name}`,gate:s,warm:!0};const n=this.missionsAboard().filter(s=>s.dest.kind==="planet"&&s.dest.sys===this.state.systemId&&this.landingPoint(s.dest.planet).distanceTo(e.pos)<250);if(n.length)return{type:"dropoff",label:n.some(s=>s.type==="passenger")?"DROP OFF":"DELIVER",missions:n,warm:!0};for(const s of this.traders)if(!s.dead&&s.pos.distanceTo(e.pos)<110+s.radius&&this.time-s.lastHit>10)return{type:"hail",label:`HAIL ${s.name}`,trader:s};for(const s of t.derelicts)if(s.pos.distanceTo(e.pos)<150){const a=this.state.derelictLooted[`${this.state.systemId}:${s.seed}`];if(!a||this.state.day-a>=3)return{type:"salvage",label:this.salvage?`SALVAGING ${Math.round(this.salvage.t/3.5*100)}%`:"SALVAGE",derelict:s,hold:!0}}const i=t.findMineable(e.pos,e.stats.mineRange);return i?{type:"mine",label:i.kind==="deposit"?"DRILL":"MINE",node:i,hold:!0}:null}doAction(e){if(e){if(e.type==="dock")this.dock();else if(e.type==="jump")this.beginJump(e.gate);else if(e.type==="hail")this.ui.openTraderDialog(e.trader);else if(e.type==="dropoff"){for(const t of e.missions)this.completeMission(t);this.save()}}}missionsAboard(){return this.state.missions.filter(e=>gd(e)&&e.shipUid===this.state.active)}updateMissionLoad(){if(!this.player)return;const e=this.missionsAboard();this.player.reserved=e.reduce((t,n)=>t+Ma(n),0),this.player.missionLure=e.reduce((t,n)=>t+Dx(n),0)}landingPoint(e){const t=this.world.deposits[e],n=this.world.planets[e];return t.pos.clone().sub(n.pos).normalize().multiplyScalar(100).add(t.pos)}acceptMission(e){const t=this.state;if(t.missions.length>=xa)return`You already have ${xa} active contracts`;const n=Ma(e);return n>this.cargoFree()?`Needs ${n} free hold space (you have ${this.cargoFree()})`:e.deposit>t.credits?`Needs a ◈ ${vt(e.deposit)} deposit`:(t.credits-=e.deposit,t.missions.push({...e,accepted:t.day,shipUid:t.active}),Ux(t,e),this.updateMissionLoad(),this.audio.play("click",{vol:.6}),this.save(),null)}completeMission(e){const t=this.state;if(e.type==="supply"){const i=this.player.cargo[e.commodity]||0;if(i<e.qty)return!1;this.player.cargo[e.commodity]=i-e.qty,this.player.cargo[e.commodity]||delete this.player.cargo[e.commodity]}t.missions=t.missions.filter(i=>i!==e),this.addCredits(e.reward+e.deposit),t.stats.contracts++,this.updateMissionLoad(),this.audio.play("coins",{vol:.9});const n=e.type==="passenger"?e.vip?`${e.who} delivered safely`:`${e.pax} passenger${e.pax>1?"s":""} dropped off`:e.type==="courier"?`${e.qty} units of ${e.cargoName} delivered`:`${e.qty} ${ht[e.commodity].name} supplied`;return this.ui.toast(`✓ Contract complete: ${n} · +◈ ${vt(e.reward)}${e.deposit?` (+◈ ${vt(e.deposit)} deposit back)`:""}`,"good",5),!0}failMission(e,t){this.state.missions=this.state.missions.filter(n=>n!==e),this.updateMissionLoad(),this.ui.toast(`✗ Contract failed: ${e.title} — ${t}${e.deposit?` · deposit ◈ ${vt(e.deposit)} forfeited`:""}`,"warn",6)}deliverAtStation(){const e=this.state.systemId;for(const t of this.state.missions.slice())if(!(t.dest.sys!==e||t.dest.kind!=="station"))if(t.type==="supply"){const n=this.player.cargo[t.commodity]||0;this.completeMission(t)||this.ui.toast(`Supply contract: bring ${t.qty} ${ht[t.commodity].name} here (you have ${n})`,"info",5)}else t.shipUid===this.state.active&&this.completeMission(t)}checkDeadlines(){const e=this.state.day;for(const t of this.state.missions.slice())e>t.deadline?this.failMission(t,`missed the Day ${t.deadline} deadline`):e===t.deadline&&this.ui.toast(`⏱ Last day: ${t.title} → ${t.dest.name}`,"warn",5)}missionTarget(e){const t=this.state.systemId;if(e.dest.sys===t)return e.dest.kind==="station"?{key:"st",pos:this.world.station.pos,name:e.dest.name,arrive:200,ignore:this.world.station,via:!1}:{key:`pl${e.dest.planet}`,pos:this.landingPoint(e.dest.planet),name:e.dest.name,arrive:45,ignore:null,via:!1};const n=Lx(this.galaxy,t,e.dest.sys),i=n&&this.world.gates.find(s=>s.to===n[1]);return i?{key:`g${i.to}`,pos:i.pos,name:`Gate → ${this.galaxy.systems[i.to].name}`,arrive:250,ignore:null,via:!0}:null}missionCourse(e){const t=this.missionTarget(e);return t?(this.docked&&this.undock(),this.setAutopilot(t.pos,t.name,t.arrive,t.ignore),!0):!1}updateMining(e,t){const n=this.player;if(!(this.input.mine&&t&&t.type==="mine"&&!n.cruise)){this.mineBeam.visible=!1,this.audio.loop("mine","mine",!1),this.mineAcc=0;return}const s=t.node;if(this.cargoFree()<=0){this.mineBeam.visible=!1,this.audio.loop("mine","mine",!1),(!this._fullWarn||this.time-this._fullWarn>4)&&(this._fullWarn=this.time,this.ui.toast("Cargo hold full — dock to sell","warn",2.5));return}if(n.energy<1){this.mineBeam.visible=!1;return}n.energy-=4*e;const a=this.muzzleWorld(n,0,Xn).clone(),o=Xe.subVectors(a,s.pos).normalize().multiplyScalar(s.radius*.8).add(s.pos).clone();for(this.fx.showBeam(this.mineBeam,a,o,1.4),Math.random()<.6&&this.fx.particles.burst(o,2,25,s.kind==="deposit"?ht[s.ore].color:16765072,1.4,.6),this.audio.loop("mine","mine",!0,.35,.6),this.mineAcc+=n.stats.mineRate*(s.kind==="deposit"?.85:1)*e;this.mineAcc>=1&&s.amount>0&&this.cargoFree()>0;){this.mineAcc-=1;let l=s.ore;const c=n.stats.rare+(s.kind==="deposit"?.05:s.field?s.field.data.lumenite*(n.stats.rare>0?1:.3):0);Math.random()<c&&(l="lumenite",this.ui.toast("✦ Lumenite crystal extracted!","good",2)),n.cargo[l]=(n.cargo[l]||0)+1,s.amount-=1,this.state.stats.mined++,this.ui.cargoTick(l),s.kind==="rock"&&this.world.depleteRock(s),this.state.tutorial.mined||(this.state.tutorial.mined=!0,this.ui.toast("Ore collected! Fill your hold, then dock at a station to sell.","info",5))}s.amount<=0&&(this.fx.particles.burst(s.pos,40,40,12628128,5,1.4),this.audio.play("explosion",{pos:s.pos,vol:.3,rate:1.4}))}updateSalvage(e,t){if(!(this.input.mine&&t&&t.type==="salvage")){this.salvage=null;return}(!this.salvage||this.salvage.d!==t.derelict)&&(this.salvage={d:t.derelict,t:0}),this.salvage.t+=e;const n=this.muzzleWorld(this.player,0,Xn).clone();if(this.fx.showBeam(this.mineBeam,n,t.derelict.pos,1.2),this.audio.loop("mine","mine",!0,.3,.45),this.salvage.t>=3.5){const i=t.derelict,s=new ti(i.seed+this.state.day);this.state.derelictLooted[`${this.state.systemId}:${i.seed}`]=this.state.day;const a=s.int(150,700)+Ii(this.state)*120;this.addCredits(a);const o=["parts","data","medical","luxury","lumenite"],l=s.pick(o),c=Math.min(this.cargoFree(),s.int(2,l==="luxury"||l==="lumenite"?3:8));c>0&&(this.player.cargo[l]=(this.player.cargo[l]||0)+c);let h="";this.player.stats.mslCap>0&&s.chance(.4)&&(this.player.missiles=Math.min(this.player.stats.mslCap,this.player.missiles+2),h=" + 2 missiles"),this.ui.toast(`Salvaged ◈ ${vt(a)}${c>0?` + ${c} ${ht[l].name}`:""}${h}`,"good",4),this.audio.play("coins",{vol:.8}),this.salvage=null,this.mineBeam.visible=!1,this.audio.loop("mine","mine",!1),this.input.mine=!1}}hostilesNear(e){return this.outlaws.some(t=>!t.dead&&t.pos.distanceTo(this.player.pos)<e)}cycleTarget(){const e=this.player,t=[...this.outlaws,...this.traders].filter(i=>!i.dead&&i.pos.distanceTo(e.pos)<e.stats.sensor).sort((i,s)=>(i.kind==="outlaw"?0:1)-(s.kind==="outlaw"?0:1)||i.pos.distanceTo(e.pos)-s.pos.distanceTo(e.pos));if(!t.length){this.target=null,this.ui.toast("No contacts in sensor range","info",1.5);return}const n=t.indexOf(this.target);this.target=t[(n+1)%t.length]}fireMissile(){const e=this.player;if(e.stats.mslCap===0){this.ui.toast("No missile rack — install one at a station (Upgrades)","info",3);return}if(e.missiles<=0){this.ui.toast("Missile bay empty — restock at a station","warn",2);return}let t=this.target&&!this.target.dead?this.target:null;if(t||(t=this.autoTarget(.7,900)),!t){this.ui.toast("No lock — target a ship first","info",1.5);return}if(t.pos.distanceTo(e.pos)>1e3){this.ui.toast("Target out of missile range (1000m)","info",1.5);return}e.missiles--,this.target=t,this.fx.launchMissile(e,t,e.stats.mslDmg)}autoTarget(e,t){let n=null,i=1/0;for(const s of this.outlaws){if(s.dead)continue;const a=s.pos.distanceTo(this.player.pos);a<t&&this.angleTo(this.player,s.pos)<e&&a<i&&(i=a,n=s)}return n}updatePlayerFire(e){const t=this.player,n=this.input.fire&&!t.cruise&&t.energy>1.5&&!this.warp;if(t.firing=n,!n){for(const l of this.playerBeams)l.visible=!1;this.audio.loop("beam","beam",!1);return}const i=t.stats.beamRange;let s=this.target&&!this.target.dead&&this.target.pos.distanceTo(t.pos)<i+this.target.radius&&this.angleTo(t,this.target.pos)<.42?this.target:null;if(!s){const l=this.autoTarget(.42,i);l&&(s=l,this.target=l)}if(!s){t.forwardTo(Xe);let l=null,c=i;for(const h of[...this.traders,...this.outlaws]){if(h.dead)continue;zt.subVectors(h.pos,t.pos);const u=zt.dot(Xe);if(u<0||u>c)continue;Math.sqrt(Math.max(0,zt.lengthSq()-u*u))<h.radius*.9&&(c=u,l=h)}s=l}t.energy-=9*e;let a;if(s){a=Xe.copy(s.pos).add(zt.set((Math.random()-.5)*1.5,(Math.random()-.5)*1.5,0)).clone();const l=s.damage(t.stats.dps*e,t.pos,t);this.onShipHit(s,t,l)}else a=t.forwardTo(Xe).multiplyScalar(i).add(t.pos).clone();const o=Math.min(t.stats.hard,t.muzzles.length,this.playerBeams.length);for(let l=0;l<this.playerBeams.length;l++){const c=this.playerBeams[l];if(l>=o){c.visible=!1;continue}this.fx.showBeam(c,this.muzzleWorld(t,l,Xn),a,1.3+t.stats.dps/60)}this.audio.loop("beam","beam",!0,.4,1)}updatePlayer(e){const t=this.player,n=this.input;if(t.dead)return;const i=Math.hypot(n.sx,n.sy);if(this.warp)this.updateWarp(e);else if(this.autopilot){const s=this.autopilot;if(i>.25)this.autopilot=null,this.ui.toast("Autopilot disengaged","info",1.5);else{const a=s.pos.distanceTo(t.pos),o=this.planRoute(t.pos,s.pos,t.radius,s.ignore,s.aim);t.steerTo(o,e,1.2);const l=this.angleTo(t,o),c=s.arrive+300+t.stats.speed*5.5/2.2*1.3;t.cruise=a>c&&!this.hostilesNear(1300)&&l<.3;let h=St((a-s.arrive)/350,.12,1);l>.8&&(h=Math.min(h,.45)),t.throttle=h;const u=Xe.subVectors(s.pos,t.pos).dot(t.vel)>0;(a<s.arrive||a<s.arrive+150&&!u)&&(this.autopilot=null,t.cruise=!1,t.throttle=0,n.throttle=0,this.ui.toast(`Arrived: ${s.name}`,"info",2))}}else{const s=t.stats.turn*(t.cruise?.45:1);t.yawRate=-n.sx*s,t.yaw+=t.yawRate*e,t.pitch=St(t.pitch-n.sy*s*.75*e,-1.15,1.15),Math.abs(n.sy)<.05&&(t.pitch=Li(t.pitch,0,.35,e)),t.throttle=n.throttle,t.cruise&&this.hostilesNear(1300)&&(t.cruise=!1,this.ui.toast("Cruise disrupted — hostiles nearby","warn",2.5))}t.boost=n.boost&&!t.cruise&&!this.warp,t.updateMotion(e,this.warp?null:this.world),t.updateVisual(e)}setCruise(e){const t=this.player;if(e&&this.hostilesNear(1300)){this.ui.toast("Cannot engage cruise — hostiles nearby","warn",2);return}t.cruise=e,e&&(this.input.throttle=Math.max(this.input.throttle,.5),this.audio.play("warp",{vol:.35,rate:1.3}))}setAutopilot(e,t,n=200,i=null){this.autopilot={pos:e.clone(),name:t,arrive:n,ignore:i,aim:new A},this.ui.toast(`Autopilot → ${t}`,"info",2)}planRoute(e,t,n,i,s){const a=this.world,o=[];for(const m of a.planets)o.push({c:m.pos,hard:m.radius,r:m.radius+n+140});const l=this.sysData.star.radius;o.push({c:a.star.position,hard:l+40,r:l+n+400}),i!==a.station&&o.push({c:a.station.pos,hard:80,r:115+n});for(const m of a.fields)i!==m&&o.push({c:m.center,hard:0,r:m.radius+n+60,soft:!0});const c=fM.subVectors(t,e),h=c.length();if(h<1)return s.copy(t);c.multiplyScalar(1/h);let u=null,d=1/0;for(const m of o){let v=m.r;const g=m.hard+n+15,p=e.distanceTo(m.c),y=t.distanceTo(m.c);if(p<v){if(m.soft)continue;v=Math.max(g,p-5)}if(y<v&&(m.soft||(v=Math.max(g,y-10),y<v)))continue;const _=ru.subVectors(m.c,e).dot(c);if(_<=0||_>=h||_>=d)continue;const x=ru.copy(e).addScaledVector(c,_).sub(m.c),C=x.length();C>=v||(d=_,u={c:m.c,r:v,off:x.clone(),od:C})}if(!u)return s.copy(t);const f=u.off;return u.od<u.r*.08&&(f.crossVectors(c,au),f.lengthSq()<1e-6&&f.set(1,0,0)),f.normalize(),s.copy(u.c).addScaledVector(f,u.r+Math.max(80,u.r*.2))}updateCamera(e){const t=this.player,n=this.camera;if(this.mode==="menu"){const h=this.time*.08,u=Ct[t.hullId].cam*1.6;Xe.set(Math.sin(h)*u,u*.28,Math.cos(h)*u).add(t.pos),n.position.copy(Xe),n.lookAt(zt.copy(t.pos).add(Xn.set(Math.sin(h+1.4)*u*.5,0,Math.cos(h+1.4)*u*.5)));return}const i=Ct[t.hullId].cam*(t.cruise?1.25:1)*(this.docked?1.8:1),s=new yn().setFromEuler(new Zt(t.pitch*.75,t.yaw,0,"YXZ")),a=Xe.set(0,i*.3,-i).applyQuaternion(s).add(t.pos);this.camInit||(n.position.copy(a),this.camInit=!0);const o=this.warp?3:6;n.position.x=Li(n.position.x,a.x,o,e),n.position.y=Li(n.position.y,a.y,o,e),n.position.z=Li(n.position.z,a.z,o,e),zt.subVectors(n.position,t.pos),zt.length()>i*1.6&&n.position.copy(t.pos).addScaledVector(zt.normalize(),i*1.6);const c=zt.set(0,i*.12,i*.6).applyQuaternion(s).add(t.pos);if(this.shake>0&&(c.x+=(Math.random()-.5)*this.shake*1.5,c.y+=(Math.random()-.5)*this.shake*1.5,this.shake=Math.max(0,this.shake-e*2)),n.lookAt(c),!this.warp){const u=62+(t.cruise?1:St(t.speed/(t.stats.speed*1.75),0,1))*10;Math.abs(n.fov-u)>.05&&(n.fov=Li(n.fov,u,3,e),n.updateProjectionMatrix())}}newDay(){this.state.day++,this.state.dayTime-=1,this.economy.daily(this.state.day),this.world.onNewDay(this.state.day),this.rollOutlaws(),this.ui.toast(`Day ${this.state.day} — markets updated`,"info",2.5),this.checkDeadlines()}restUntilTomorrow(){this.state.dayTime=1.0001,this.newDay(),this.state.dayTime=.25,this.rollOutlaws(),this.save()}frame(){const e=performance.now();let t=Math.min(.05,(e-this.last)/1e3);this.last=e,on.uTime.value+=t,this.pad.poll(t);const n=this.mode!=="play"||this.paused||this.ui.modalOpen();this.mode==="menu"&&(this.time+=t,this.player.updateVisual(t)),!n&&!this.docked?this.simulate(t):!n&&this.docked&&(this.time+=t),this.updateCamera(t);const i=this.player.pos;Xe.copy(i).negate().normalize(),this.keyLight.position.copy(i).addScaledVector(Xe,200),this.keyLight.target.position.copy(i),this.rimLight.position.copy(i).addScaledVector(Xe,-200).add(zt.set(0,80,0)),this.rimLight.target.position.copy(i),this.world.update(t,this.camera.position,i),this.fx.update(n?0:t),this.audio.listener=this.camera.position,this.post.grade.uniforms.uDamage.value=Math.max(0,this.post.grade.uniforms.uDamage.value-t*1.5),this.mode==="play"&&this.ui.update(t),this.post.render(t,on.uTime.value)}simulate(e){this.time+=e;const t=this.state;if(t.dayTime+=e/Mo,t.dayTime>=1&&this.newDay(),this.updatePlayer(e),this.player.dead){this.updateOutlaws(e),this.updateTraders(e);return}this.updateTraders(e),this.updateOutlawSchedule(),this.updateOutlaws(e),this.updatePlayerFire(e);const n=this.warp?null:this.findInteraction();this.currentAction=n,this.updateMining(e,n),this.updateSalvage(e,n),n&&n.type!=="mine"&&n.type!=="salvage"&&n.type!=="salvage"&&(this.mineBeam.visible=this.input.mine&&n.type==="salvage");const i=this.hostilesNear(1600);this.audio.setMusic(i?"battle":"calm"),this._saveT=(this._saveT||0)+e,this._saveT>20&&(this._saveT=0,this.save()),this.target&&this.target.dead&&(this.target=null),this.target&&this.target.pos.distanceTo(this.player.pos)>this.player.stats.sensor*1.2&&(this.target=null)}}const mM=new pM(document.getElementById("app"));mM.boot().catch(r=>{console.error("Boot failed",r);const e=document.getElementById("loadText");e&&(e.textContent=`Startup error: ${r.message}`)});
