(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ka="172",_l=0,ho=1,vl=2,Cc=1,xl=2,Hn=3,ii=0,en=1,Tn=2,ei=0,Gi=1,Yt=2,fo=3,po=4,Ml=5,fi=100,Sl=101,yl=102,El=103,Tl=104,bl=200,Al=201,wl=202,Rl=203,aa=204,oa=205,Cl=206,Pl=207,Dl=208,Ll=209,Il=210,Ul=211,Nl=212,Fl=213,Ol=214,ca=0,la=1,ua=2,Xi=3,ha=4,fa=5,da=6,pa=7,Pc=0,Bl=1,zl=2,ni=0,Vl=1,Hl=2,Gl=3,kl=4,Wl=5,Xl=6,ql=7,Dc=300,qi=301,Yi=302,ma=303,ga=304,Ms=306,_a=1e3,_i=1001,va=1002,wn=1003,Yl=1004,Er=1005,Ln=1006,Es=1007,vi=1008,qn=1009,Lc=1010,Ic=1011,_r=1012,Ja=1013,xi=1014,Gn=1015,xr=1016,ja=1017,Qa=1018,$i=1020,Uc=35902,Nc=1021,Fc=1022,An=1023,Oc=1024,Bc=1025,ki=1026,Zi=1027,zc=1028,to=1029,Vc=1030,eo=1031,no=1033,ns=33776,is=33777,rs=33778,ss=33779,xa=35840,Ma=35841,Sa=35842,ya=35843,Ea=36196,Ta=37492,ba=37496,Aa=37808,wa=37809,Ra=37810,Ca=37811,Pa=37812,Da=37813,La=37814,Ia=37815,Ua=37816,Na=37817,Fa=37818,Oa=37819,Ba=37820,za=37821,as=36492,Va=36494,Ha=36495,Hc=36283,Ga=36284,ka=36285,Wa=36286,$l=3200,Zl=3201,Kl=0,Jl=1,ti="",tn="srgb",Ki="srgb-linear",us="linear",pe="srgb",yi=7680,mo=519,jl=512,Ql=513,tu=514,Gc=515,eu=516,nu=517,iu=518,ru=519,Xa=35044,go=35048,_o="300 es",kn=2e3,hs=2001;class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vo=1234567;const hr=Math.PI/180,vr=180/Math.PI;function Wn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function ee(i,t,e){return Math.max(t,Math.min(e,i))}function io(i,t){return(i%t+t)%t}function su(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function au(i,t,e){return i!==t?(e-i)/(t-i):0}function fr(i,t,e){return(1-e)*i+e*t}function ou(i,t,e,n){return fr(i,t,1-Math.exp(-e*n))}function cu(i,t=1){return t-Math.abs(io(i,t*2)-t)}function lu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function uu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function fu(i,t){return i+Math.random()*(t-i)}function du(i){return i*(.5-Math.random())}function pu(i){i!==void 0&&(vo=i);let t=vo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mu(i){return i*hr}function gu(i){return i*vr}function _u(i){return(i&i-1)===0&&i!==0}function vu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mu(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),u=s((t+n)/2),l=a((t+n)/2),f=s((t-n)/2),d=a((t-n)/2),p=s((n-t)/2),_=a((n-t)/2);switch(r){case"XYX":i.set(o*l,c*f,c*d,o*u);break;case"YZY":i.set(c*d,o*l,c*f,o*u);break;case"ZXZ":i.set(c*f,c*d,o*l,o*u);break;case"XZX":i.set(o*l,c*_,c*p,o*u);break;case"YXY":i.set(c*p,o*l,c*_,o*u);break;case"ZYZ":i.set(c*_,c*p,o*l,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qt={DEG2RAD:hr,RAD2DEG:vr,generateUUID:Wn,clamp:ee,euclideanModulo:io,mapLinear:su,inverseLerp:au,lerp:fr,damp:ou,pingpong:cu,smoothstep:lu,smootherstep:uu,randInt:hu,randFloat:fu,randFloatSpread:du,seededRandom:pu,degToRad:mu,radToDeg:gu,isPowerOfTwo:_u,ceilPowerOfTwo:vu,floorPowerOfTwo:xu,setQuaternionFromProperEuler:Mu,normalize:he,denormalize:bn};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,r,s,a,o,c,u){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,u)}set(t,e,n,r,s,a,o,c,u){const l=this.elements;return l[0]=t,l[1]=r,l[2]=o,l[3]=e,l[4]=s,l[5]=c,l[6]=n,l[7]=a,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],l=n[4],f=n[7],d=n[2],p=n[5],_=n[8],M=r[0],m=r[3],h=r[6],C=r[1],T=r[4],y=r[7],G=r[2],N=r[5],U=r[8];return s[0]=a*M+o*C+c*G,s[3]=a*m+o*T+c*N,s[6]=a*h+o*y+c*U,s[1]=u*M+l*C+f*G,s[4]=u*m+l*T+f*N,s[7]=u*h+l*y+f*U,s[2]=d*M+p*C+_*G,s[5]=d*m+p*T+_*N,s[8]=d*h+p*y+_*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],l=t[8];return e*a*l-e*o*u-n*s*l+n*o*c+r*s*u-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],l=t[8],f=l*a-o*u,d=o*c-l*s,p=u*s-a*c,_=e*f+n*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=f*M,t[1]=(r*u-l*n)*M,t[2]=(o*n-r*a)*M,t[3]=d*M,t[4]=(l*e-r*c)*M,t[5]=(r*s-o*e)*M,t[6]=p*M,t[7]=(n*c-u*e)*M,t[8]=(a*e-n*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+t,-r*u,r*c,-r*(-u*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ts.makeScale(t,e)),this}rotate(t){return this.premultiply(Ts.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ts.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ts=new Kt;function kc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Su(){const i=fs("canvas");return i.style.display="block",i}const xo={};function Vi(i){i in xo||(xo[i]=!0,console.warn(i))}function yu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Eu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Tu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Mo=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),So=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bu(){const i={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pe&&(r.r=Xn(r.r),r.g=Xn(r.g),r.b=Xn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ti?us:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ki]:{primaries:t,whitePoint:n,transfer:us,toXYZ:Mo,fromXYZ:So,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Mo,fromXYZ:So,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}const ce=bu();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ei;class Au{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=fs("canvas")),Ei.width=t.width,Ei.height=t.height;const n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wu=0;class Wc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Wn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bs(r[a].image)):s.push(bs(r[a]))}else s=bs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function bs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Au.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ru=0;class je extends ji{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=_i,r=_i,s=Ln,a=vi,o=An,c=qn,u=je.DEFAULT_ANISOTROPY,l=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Wn(),this.name="",this.source=new Wc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _a:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _a:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Dc;je.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,r=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,u=c[0],l=c[4],f=c[8],d=c[1],p=c[5],_=c[9],M=c[2],m=c[6],h=c[10];if(Math.abs(l-d)<.01&&Math.abs(f-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(f+M)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(u+1)/2,y=(p+1)/2,G=(h+1)/2,N=(l+d)/4,U=(f+M)/4,X=(_+m)/4;return T>y&&T>G?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=N/n,s=U/n):y>G?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=N/r,s=X/r):G<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(G),n=U/s,r=X/s),this.set(n,r,s,e),this}let C=Math.sqrt((m-_)*(m-_)+(f-M)*(f-M)+(d-l)*(d-l));return Math.abs(C)<.001&&(C=1),this.x=(m-_)/C,this.y=(f-M)/C,this.z=(d-l)/C,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cu extends ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new je(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Wc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends Cu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xc extends je{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pu extends je{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],u=n[r+1],l=n[r+2],f=n[r+3];const d=s[a+0],p=s[a+1],_=s[a+2],M=s[a+3];if(o===0){t[e+0]=c,t[e+1]=u,t[e+2]=l,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=M;return}if(f!==M||c!==d||u!==p||l!==_){let m=1-o;const h=c*d+u*p+l*_+f*M,C=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const G=Math.sqrt(T),N=Math.atan2(G,h*C);m=Math.sin(m*N)/G,o=Math.sin(o*N)/G}const y=o*C;if(c=c*m+d*y,u=u*m+p*y,l=l*m+_*y,f=f*m+M*y,m===1-o){const G=1/Math.sqrt(c*c+u*u+l*l+f*f);c*=G,u*=G,l*=G,f*=G}}t[e]=c,t[e+1]=u,t[e+2]=l,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],u=n[r+2],l=n[r+3],f=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return t[e]=o*_+l*f+c*p-u*d,t[e+1]=c*_+l*d+u*f-o*p,t[e+2]=u*_+l*p+o*d-c*f,t[e+3]=l*_-o*f-c*d-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(n/2),l=o(r/2),f=o(s/2),d=c(n/2),p=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=d*l*f+u*p*_,this._y=u*p*f-d*l*_,this._z=u*l*_+d*p*f,this._w=u*l*f-d*p*_;break;case"YXZ":this._x=d*l*f+u*p*_,this._y=u*p*f-d*l*_,this._z=u*l*_-d*p*f,this._w=u*l*f+d*p*_;break;case"ZXY":this._x=d*l*f-u*p*_,this._y=u*p*f+d*l*_,this._z=u*l*_+d*p*f,this._w=u*l*f-d*p*_;break;case"ZYX":this._x=d*l*f-u*p*_,this._y=u*p*f+d*l*_,this._z=u*l*_-d*p*f,this._w=u*l*f+d*p*_;break;case"YZX":this._x=d*l*f+u*p*_,this._y=u*p*f+d*l*_,this._z=u*l*_-d*p*f,this._w=u*l*f-d*p*_;break;case"XZY":this._x=d*l*f-u*p*_,this._y=u*p*f-d*l*_,this._z=u*l*_+d*p*f,this._w=u*l*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],u=e[2],l=e[6],f=e[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(l-c)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(l-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+l)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,u=e._z,l=e._w;return this._x=n*l+a*o+r*u-s*c,this._y=r*l+a*c+s*o-n*u,this._z=s*l+a*u+n*c-r*o,this._w=a*l-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const u=Math.sqrt(c),l=Math.atan2(u,o),f=Math.sin((1-e)*l)/u,d=Math.sin(e*l)/u;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,u=2*(a*r-o*n),l=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+c*u+a*f-o*l,this.y=n+c*l+o*u-s*f,this.z=r+c*f+s*l-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return As.copy(this).projectOnVector(t),this.sub(As)}reflect(t){return this.sub(As.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const As=new R,yo=new Qi;class Mr{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nr),br.subVectors(this.max,nr),Ti.subVectors(t.a,nr),bi.subVectors(t.b,nr),Ai.subVectors(t.c,nr),$n.subVectors(bi,Ti),Zn.subVectors(Ai,bi),ri.subVectors(Ti,Ai);let e=[0,-$n.z,$n.y,0,-Zn.z,Zn.y,0,-ri.z,ri.y,$n.z,0,-$n.x,Zn.z,0,-Zn.x,ri.z,0,-ri.x,-$n.y,$n.x,0,-Zn.y,Zn.x,0,-ri.y,ri.x,0];return!ws(e,Ti,bi,Ai,br)||(e=[1,0,0,0,1,0,0,0,1],!ws(e,Ti,bi,Ai,br))?!1:(Ar.crossVectors($n,Zn),e=[Ar.x,Ar.y,Ar.z],ws(e,Ti,bi,Ai,br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new R,new R,new R,new R,new R,new R,new R,new R],Mn=new R,Tr=new Mr,Ti=new R,bi=new R,Ai=new R,$n=new R,Zn=new R,ri=new R,nr=new R,br=new R,Ar=new R,si=new R;function ws(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){si.fromArray(i,s);const o=r.x*Math.abs(si.x)+r.y*Math.abs(si.y)+r.z*Math.abs(si.z),c=t.dot(si),u=e.dot(si),l=n.dot(si);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>o)return!1}return!0}const Du=new Mr,ir=new R,Rs=new R;class Sr{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Du.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);const e=ir.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ir,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(Rs)),this.expandByPoint(ir.copy(t.center).sub(Rs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new R,Cs=new R,wr=new R,Kn=new R,Ps=new R,Rr=new R,Ds=new R;class ro{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Cs.copy(t).add(e).multiplyScalar(.5),wr.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(Cs);const s=t.distanceTo(e)*.5,a=-this.direction.dot(wr),o=Kn.dot(this.direction),c=-Kn.dot(wr),u=Kn.lengthSq(),l=Math.abs(1-a*a);let f,d,p,_;if(l>0)if(f=a*c-o,d=a*o-c,_=s*l,f>=0)if(d>=-_)if(d<=_){const M=1/l;f*=M,d*=M,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+u}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Cs).addScaledVector(wr,d),p}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),r=Fn.dot(Fn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const u=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,r=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,r=(t.min.x-d.x)*u),l>=0?(s=(t.min.y-d.y)*l,a=(t.max.y-d.y)*l):(s=(t.max.y-d.y)*l,a=(t.min.y-d.y)*l),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,r,s){Ps.subVectors(e,t),Rr.subVectors(n,t),Ds.crossVectors(Ps,Rr);let a=this.direction.dot(Ds),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,t);const c=o*this.direction.dot(Rr.crossVectors(Kn,Rr));if(c<0)return null;const u=o*this.direction.dot(Ps.cross(Kn));if(u<0||c+u>a)return null;const l=-o*Kn.dot(Ds);return l<0?null:this.at(l/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,n,r,s,a,o,c,u,l,f,d,p,_,M,m){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,u,l,f,d,p,_,M,m)}set(t,e,n,r,s,a,o,c,u,l,f,d,p,_,M,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=u,h[6]=l,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=M,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/wi.setFromMatrixColumn(t,0).length(),s=1/wi.setFromMatrixColumn(t,1).length(),a=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),l=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*l,p=a*f,_=o*l,M=o*f;e[0]=c*l,e[4]=-c*f,e[8]=u,e[1]=p+_*u,e[5]=d-M*u,e[9]=-o*c,e[2]=M-d*u,e[6]=_+p*u,e[10]=a*c}else if(t.order==="YXZ"){const d=c*l,p=c*f,_=u*l,M=u*f;e[0]=d+M*o,e[4]=_*o-p,e[8]=a*u,e[1]=a*f,e[5]=a*l,e[9]=-o,e[2]=p*o-_,e[6]=M+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*l,p=c*f,_=u*l,M=u*f;e[0]=d-M*o,e[4]=-a*f,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*l,e[9]=M-d*o,e[2]=-a*u,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*l,p=a*f,_=o*l,M=o*f;e[0]=c*l,e[4]=_*u-p,e[8]=d*u+M,e[1]=c*f,e[5]=M*u+d,e[9]=p*u-_,e[2]=-u,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*u,_=o*c,M=o*u;e[0]=c*l,e[4]=M-d*f,e[8]=_*f+p,e[1]=f,e[5]=a*l,e[9]=-o*l,e[2]=-u*l,e[6]=p*f+_,e[10]=d-M*f}else if(t.order==="XZY"){const d=a*c,p=a*u,_=o*c,M=o*u;e[0]=c*l,e[4]=-f,e[8]=u*l,e[1]=d*f+M,e[5]=a*l,e[9]=p*f-_,e[2]=_*f-p,e[6]=o*l,e[10]=M*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lu,t,Iu)}lookAt(t,e,n){const r=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),Jn.crossVectors(n,on),Jn.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Jn.crossVectors(n,on)),Jn.normalize(),Cr.crossVectors(on,Jn),r[0]=Jn.x,r[4]=Cr.x,r[8]=on.x,r[1]=Jn.y,r[5]=Cr.y,r[9]=on.y,r[2]=Jn.z,r[6]=Cr.z,r[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],l=n[1],f=n[5],d=n[9],p=n[13],_=n[2],M=n[6],m=n[10],h=n[14],C=n[3],T=n[7],y=n[11],G=n[15],N=r[0],U=r[4],X=r[8],E=r[12],S=r[1],O=r[5],rt=r[9],j=r[13],ct=r[2],ut=r[6],ot=r[10],dt=r[14],Q=r[3],yt=r[7],Ct=r[11],Bt=r[15];return s[0]=a*N+o*S+c*ct+u*Q,s[4]=a*U+o*O+c*ut+u*yt,s[8]=a*X+o*rt+c*ot+u*Ct,s[12]=a*E+o*j+c*dt+u*Bt,s[1]=l*N+f*S+d*ct+p*Q,s[5]=l*U+f*O+d*ut+p*yt,s[9]=l*X+f*rt+d*ot+p*Ct,s[13]=l*E+f*j+d*dt+p*Bt,s[2]=_*N+M*S+m*ct+h*Q,s[6]=_*U+M*O+m*ut+h*yt,s[10]=_*X+M*rt+m*ot+h*Ct,s[14]=_*E+M*j+m*dt+h*Bt,s[3]=C*N+T*S+y*ct+G*Q,s[7]=C*U+T*O+y*ut+G*yt,s[11]=C*X+T*rt+y*ot+G*Ct,s[15]=C*E+T*j+y*dt+G*Bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],u=t[13],l=t[2],f=t[6],d=t[10],p=t[14],_=t[3],M=t[7],m=t[11],h=t[15];return _*(+s*c*f-r*u*f-s*o*d+n*u*d+r*o*p-n*c*p)+M*(+e*c*p-e*u*d+s*a*d-r*a*p+r*u*l-s*c*l)+m*(+e*u*f-e*o*p-s*a*f+n*a*p+s*o*l-n*u*l)+h*(-r*o*l-e*c*f+e*o*d+r*a*f-n*a*d+n*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],l=t[8],f=t[9],d=t[10],p=t[11],_=t[12],M=t[13],m=t[14],h=t[15],C=f*m*u-M*d*u+M*c*p-o*m*p-f*c*h+o*d*h,T=_*d*u-l*m*u-_*c*p+a*m*p+l*c*h-a*d*h,y=l*M*u-_*f*u+_*o*p-a*M*p-l*o*h+a*f*h,G=_*f*c-l*M*c-_*o*d+a*M*d+l*o*m-a*f*m,N=e*C+n*T+r*y+s*G;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/N;return t[0]=C*U,t[1]=(M*d*s-f*m*s-M*r*p+n*m*p+f*r*h-n*d*h)*U,t[2]=(o*m*s-M*c*s+M*r*u-n*m*u-o*r*h+n*c*h)*U,t[3]=(f*c*s-o*d*s-f*r*u+n*d*u+o*r*p-n*c*p)*U,t[4]=T*U,t[5]=(l*m*s-_*d*s+_*r*p-e*m*p-l*r*h+e*d*h)*U,t[6]=(_*c*s-a*m*s-_*r*u+e*m*u+a*r*h-e*c*h)*U,t[7]=(a*d*s-l*c*s+l*r*u-e*d*u-a*r*p+e*c*p)*U,t[8]=y*U,t[9]=(_*f*s-l*M*s-_*n*p+e*M*p+l*n*h-e*f*h)*U,t[10]=(a*M*s-_*o*s+_*n*u-e*M*u-a*n*h+e*o*h)*U,t[11]=(l*o*s-a*f*s-l*n*u+e*f*u+a*n*p-e*o*p)*U,t[12]=G*U,t[13]=(l*M*r-_*f*r+_*n*d-e*M*d-l*n*m+e*f*m)*U,t[14]=(_*o*r-a*M*r-_*n*c+e*M*c+a*n*m-e*o*m)*U,t[15]=(a*f*r-l*o*r+l*n*c-e*f*c-a*n*d+e*o*d)*U,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,u=s*a,l=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,l*o+n,l*c-r*a,0,u*c-r*o,l*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,u=s+s,l=a+a,f=o+o,d=s*u,p=s*l,_=s*f,M=a*l,m=a*f,h=o*f,C=c*u,T=c*l,y=c*f,G=n.x,N=n.y,U=n.z;return r[0]=(1-(M+h))*G,r[1]=(p+y)*G,r[2]=(_-T)*G,r[3]=0,r[4]=(p-y)*N,r[5]=(1-(d+h))*N,r[6]=(m+C)*N,r[7]=0,r[8]=(_+T)*U,r[9]=(m-C)*U,r[10]=(1-(d+M))*U,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=wi.set(r[0],r[1],r[2]).length();const a=wi.set(r[4],r[5],r[6]).length(),o=wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Sn.copy(this);const u=1/s,l=1/a,f=1/o;return Sn.elements[0]*=u,Sn.elements[1]*=u,Sn.elements[2]*=u,Sn.elements[4]*=l,Sn.elements[5]*=l,Sn.elements[6]*=l,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,e.setFromRotationMatrix(Sn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=kn){const c=this.elements,u=2*s/(e-t),l=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let p,_;if(o===kn)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===hs)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=l,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=kn){const c=this.elements,u=1/(e-t),l=1/(n-r),f=1/(a-s),d=(e+t)*u,p=(n+r)*l;let _,M;if(o===kn)_=(a+s)*f,M=-2*f;else if(o===hs)_=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=M,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new R,Sn=new Me,Lu=new R(0,0,0),Iu=new R(1,1,1),Jn=new R,Cr=new R,on=new R,Eo=new Me,To=new Qi;class Yn{constructor(t=0,e=0,n=0,r=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],l=r[9],f=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return To.setFromEuler(this),this.setFromQuaternion(To,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class qc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Uu=0;const bo=new R,Ri=new Qi,On=new Me,Pr=new R,rr=new R,Nu=new R,Fu=new Qi,Ao=new R(1,0,0),wo=new R(0,1,0),Ro=new R(0,0,1),Co={type:"added"},Ou={type:"removed"},Ci={type:"childadded",child:null},Ls={type:"childremoved",child:null};class Fe extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new R,e=new Yn,n=new Qi,r=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Me},normalMatrix:{value:new Kt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(Ao,t)}rotateY(t){return this.rotateOnAxis(wo,t)}rotateZ(t){return this.rotateOnAxis(Ro,t)}translateOnAxis(t,e){return bo.copy(t).applyQuaternion(this.quaternion),this.position.add(bo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ao,t)}translateY(t){return this.translateOnAxis(wo,t)}translateZ(t){return this.translateOnAxis(Ro,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pr.copy(t):Pr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(rr,Pr,this.up):On.lookAt(Pr,rr,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),Ri.setFromRotationMatrix(On),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Co),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ou),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Co),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,Nu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Fu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){const f=c[u];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),u=a(t.textures),l=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const c=[];for(const u in o){const l=o[u];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Fe.DEFAULT_UP=new R(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new R,Bn=new R,Is=new R,zn=new R,Pi=new R,Di=new R,Po=new R,Us=new R,Ns=new R,Fs=new R,Os=new ye,Bs=new ye,zs=new ye;class _n{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),yn.subVectors(t,e),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){yn.subVectors(r,e),Bn.subVectors(n,e),Is.subVectors(t,e);const a=yn.dot(yn),o=yn.dot(Bn),c=yn.dot(Is),u=Bn.dot(Bn),l=Bn.dot(Is),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*c-o*l)*d,_=(a*l-o*c)*d;return s.set(1-p-_,_,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,zn.x),c.addScaledVector(a,zn.y),c.addScaledVector(o,zn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return Os.setScalar(0),Bs.setScalar(0),zs.setScalar(0),Os.fromBufferAttribute(t,e),Bs.fromBufferAttribute(t,n),zs.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Os,s.x),a.addScaledVector(Bs,s.y),a.addScaledVector(zs,s.z),a}static isFrontFacing(t,e,n,r){return yn.subVectors(n,e),Bn.subVectors(t,e),yn.cross(Bn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),yn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Pi.subVectors(r,n),Di.subVectors(s,n),Us.subVectors(t,n);const c=Pi.dot(Us),u=Di.dot(Us);if(c<=0&&u<=0)return e.copy(n);Ns.subVectors(t,r);const l=Pi.dot(Ns),f=Di.dot(Ns);if(l>=0&&f<=l)return e.copy(r);const d=c*f-l*u;if(d<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(n).addScaledVector(Pi,a);Fs.subVectors(t,s);const p=Pi.dot(Fs),_=Di.dot(Fs);if(_>=0&&p<=_)return e.copy(s);const M=p*u-c*_;if(M<=0&&u>=0&&_<=0)return o=u/(u-_),e.copy(n).addScaledVector(Di,o);const m=l*_-p*f;if(m<=0&&f-l>=0&&p-_>=0)return Po.subVectors(s,r),o=(f-l)/(f-l+(p-_)),e.copy(r).addScaledVector(Po,o);const h=1/(m+M+d);return a=M*h,o=d*h,e.copy(n).addScaledVector(Pi,a).addScaledVector(Di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function Vs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=ce.workingColorSpace){if(t=io(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Vs(a,s,t+1/3),this.g=Vs(a,s,t),this.b=Vs(a,s,t-1/3)}return ce.toWorkingColorSpace(this,r),this}setStyle(t,e=tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const n=Yc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return ce.fromWorkingColorSpace(Ve.copy(this),t),Math.round(ee(Ve.r*255,0,255))*65536+Math.round(ee(Ve.g*255,0,255))*256+Math.round(ee(Ve.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,r=Ve.g,s=Ve.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,u;const l=(o+a)/2;if(o===a)c=0,u=0;else{const f=a-o;switch(u=l<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=u,t.l=l,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=tn){ce.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,r=Ve.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(Dr);const n=fr(jn.h,Dr.h,e),r=fr(jn.s,Dr.s,e),s=fr(jn.l,Dr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Ot;Ot.NAMES=Yc;let Bu=0;class Si extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Gi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=oa,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==oa&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class di extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new R,Lr=new zt;class xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xa,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),r=he(r,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xa&&(t.usage=this.usage),t}}class $c extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zc extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Xt extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let zu=0;const pn=new Me,Hs=new Fe,Li=new R,cn=new Mr,sr=new Mr,Pe=new R;class ae extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kc(t)?Zc:$c)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Hs.lookAt(t),Hs.updateMatrix(),this.applyMatrix4(Hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(cn.min,sr.min),cn.expandByPoint(Pe),Pe.addVectors(cn.max,sr.max),cn.expandByPoint(Pe)):(cn.expandByPoint(sr.min),cn.expandByPoint(sr.max))}cn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Pe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Pe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let u=0,l=o.count;u<l;u++)Pe.fromBufferAttribute(o,u),c&&(Li.fromBufferAttribute(t,u),Pe.add(Li)),r=Math.max(r,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let X=0;X<n.count;X++)o[X]=new R,c[X]=new R;const u=new R,l=new R,f=new R,d=new zt,p=new zt,_=new zt,M=new R,m=new R;function h(X,E,S){u.fromBufferAttribute(n,X),l.fromBufferAttribute(n,E),f.fromBufferAttribute(n,S),d.fromBufferAttribute(s,X),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,S),l.sub(u),f.sub(u),p.sub(d),_.sub(d);const O=1/(p.x*_.y-_.x*p.y);isFinite(O)&&(M.copy(l).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(O),m.copy(f).multiplyScalar(p.x).addScaledVector(l,-_.x).multiplyScalar(O),o[X].add(M),o[E].add(M),o[S].add(M),c[X].add(m),c[E].add(m),c[S].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let X=0,E=C.length;X<E;++X){const S=C[X],O=S.start,rt=S.count;for(let j=O,ct=O+rt;j<ct;j+=3)h(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const T=new R,y=new R,G=new R,N=new R;function U(X){G.fromBufferAttribute(r,X),N.copy(G);const E=o[X];T.copy(E),T.sub(G.multiplyScalar(G.dot(E))).normalize(),y.crossVectors(N,E);const O=y.dot(c[X])<0?-1:1;a.setXYZW(X,T.x,T.y,T.z,O)}for(let X=0,E=C.length;X<E;++X){const S=C[X],O=S.start,rt=S.count;for(let j=O,ct=O+rt;j<ct;j+=3)U(t.getX(j+0)),U(t.getX(j+1)),U(t.getX(j+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new R,s=new R,a=new R,o=new R,c=new R,u=new R,l=new R,f=new R;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),M=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),l.subVectors(a,s),f.subVectors(r,s),l.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),u.fromBufferAttribute(n,m),o.add(l),c.add(l),u.add(l),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),l.subVectors(a,s),f.subVectors(r,s),l.cross(f),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,c){const u=o.array,l=o.itemSize,f=o.normalized,d=new u.constructor(c.length*l);let p=0,_=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?p=c[M]*o.data.stride+o.offset:p=c[M]*l;for(let h=0;h<l;h++)d[_++]=u[p++]}return new xe(d,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ae,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=t(c,n);e.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let l=0,f=u.length;l<f;l++){const d=u[l],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],l=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];l.push(p.toJSON(t.data))}l.length>0&&(r[c]=l,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const u in r){const l=r[u];this.setAttribute(u,l.clone(e))}const s=t.morphAttributes;for(const u in s){const l=[],f=s[u];for(let d=0,p=f.length;d<p;d++)l.push(f[d].clone(e));this.morphAttributes[u]=l}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,l=a.length;u<l;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Do=new Me,ai=new ro,Ir=new Sr,Lo=new R,Ur=new R,Nr=new R,Fr=new R,Gs=new R,Or=new R,Io=new R,Br=new R;class He extends Fe{constructor(t=new ae,e=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Or.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const l=o[c],f=s[c];l!==0&&(Gs.fromBufferAttribute(f,t),a?Or.addScaledVector(Gs,l):Or.addScaledVector(Gs.sub(e),l))}e.add(Or)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),ai.copy(t.ray).recast(t.near),!(Ir.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Ir,Lo)===null||ai.origin.distanceToSquared(Lo)>(t.far-t.near)**2))&&(Do.copy(s).invert(),ai.copy(t.ray).applyMatrix4(Do),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,l=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=d.length;_<M;_++){const m=d[_],h=a[m.materialIndex],C=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=C,G=T;y<G;y+=3){const N=o.getX(y),U=o.getX(y+1),X=o.getX(y+2);r=zr(this,h,t,n,u,l,f,N,U,X),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=_,h=M;m<h;m+=3){const C=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);r=zr(this,a,t,n,u,l,f,C,T,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,M=d.length;_<M;_++){const m=d[_],h=a[m.materialIndex],C=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=C,G=T;y<G;y+=3){const N=y,U=y+1,X=y+2;r=zr(this,h,t,n,u,l,f,N,U,X),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),M=Math.min(c.count,p.start+p.count);for(let m=_,h=M;m<h;m+=3){const C=m,T=m+1,y=m+2;r=zr(this,a,t,n,u,l,f,C,T,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Vu(i,t,e,n,r,s,a,o){let c;if(t.side===en?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===ii,o),c===null)return null;Br.copy(o),Br.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Br);return u<e.near||u>e.far?null:{distance:u,point:Br.clone(),object:i}}function zr(i,t,e,n,r,s,a,o,c,u){i.getVertexPosition(o,Ur),i.getVertexPosition(c,Nr),i.getVertexPosition(u,Fr);const l=Vu(i,t,e,n,Ur,Nr,Fr,Io);if(l){const f=new R;_n.getBarycoord(Io,Ur,Nr,Fr,f),r&&(l.uv=_n.getInterpolatedAttribute(r,o,c,u,f,new zt)),s&&(l.uv1=_n.getInterpolatedAttribute(s,o,c,u,f,new zt)),a&&(l.normal=_n.getInterpolatedAttribute(a,o,c,u,f,new R),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const d={a:o,b:c,c:u,normal:new R,materialIndex:0};_n.getNormal(Ur,Nr,Fr,d.normal),l.face=d,l.barycoord=f}return l}class yr extends ae{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],l=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,r,a,2),_("x","z","y",1,-1,t,n,-e,r,a,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(f,2));function _(M,m,h,C,T,y,G,N,U,X,E){const S=y/U,O=G/X,rt=y/2,j=G/2,ct=N/2,ut=U+1,ot=X+1;let dt=0,Q=0;const yt=new R;for(let Ct=0;Ct<ot;Ct++){const Bt=Ct*O-j;for(let te=0;te<ut;te++){const ue=te*S-rt;yt[M]=ue*C,yt[m]=Bt*T,yt[h]=ct,u.push(yt.x,yt.y,yt.z),yt[M]=0,yt[m]=0,yt[h]=N>0?1:-1,l.push(yt.x,yt.y,yt.z),f.push(te/U),f.push(1-Ct/X),dt+=1}}for(let Ct=0;Ct<X;Ct++)for(let Bt=0;Bt<U;Bt++){const te=d+Bt+ut*Ct,ue=d+Bt+ut*(Ct+1),st=d+(Bt+1)+ut*(Ct+1),xt=d+(Bt+1)+ut*Ct;c.push(te,ue,xt),c.push(ue,st,xt),Q+=6}o.addGroup(p,Q,E),p+=Q,d+=dt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ke(i){const t={};for(let e=0;e<i.length;e++){const n=Ji(i[e]);for(const r in n)t[r]=n[r]}return t}function Hu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const Gu={clone:Ji,merge:Ke};var ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ku,this.fragmentShader=Wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=Hu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Jc extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new R,Uo=new zt,No=new zt;class gn extends Jc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,Uo,No),e.subVectors(No,Uo)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ii=-90,Ui=1;class Xu extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Ii,Ui,t,e);r.layers=this.layers,this.add(r);const s=new gn(Ii,Ui,t,e);s.layers=this.layers,this.add(s);const a=new gn(Ii,Ui,t,e);a.layers=this.layers,this.add(a);const o=new gn(Ii,Ui,t,e);o.layers=this.layers,this.add(o);const c=new gn(Ii,Ui,t,e);c.layers=this.layers,this.add(c);const u=new gn(Ii,Ui,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const u of e)this.remove(u);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,l]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,r),t.render(e,l),t.setRenderTarget(f,d,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class jc extends je{constructor(t,e,n,r,s,a,o,c,u,l){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,n,r,s,a,o,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qu extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new jc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yr(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:ei});s.uniforms.tEquirect.value=e;const a=new He(r,s),o=e.minFilter;return e.minFilter===vi&&(e.minFilter=Ln),new Xu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class so{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ot(t),this.density=e}clone(){return new so(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Yu extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $u{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xa,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new R;class ds{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),r=he(r,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ds(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qe extends Si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ni;const ar=new R,Fi=new R,Oi=new R,Bi=new zt,or=new zt,Qc=new Me,Vr=new R,cr=new R,Hr=new R,Fo=new zt,ks=new zt,Oo=new zt;class ln extends Fe{constructor(t=new Qe){if(super(),this.isSprite=!0,this.type="Sprite",Ni===void 0){Ni=new ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $u(e,5);Ni.setIndex([0,1,2,0,2,3]),Ni.setAttribute("position",new ds(n,3,0,!1)),Ni.setAttribute("uv",new ds(n,2,3,!1))}this.geometry=Ni,this.material=t,this.center=new zt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),Qc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Oi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Gr(Vr.set(-.5,-.5,0),Oi,a,Fi,r,s),Gr(cr.set(.5,-.5,0),Oi,a,Fi,r,s),Gr(Hr.set(.5,.5,0),Oi,a,Fi,r,s),Fo.set(0,0),ks.set(1,0),Oo.set(1,1);let o=t.ray.intersectTriangle(Vr,cr,Hr,!1,ar);if(o===null&&(Gr(cr.set(-.5,.5,0),Oi,a,Fi,r,s),ks.set(0,1),o=t.ray.intersectTriangle(Vr,Hr,cr,!1,ar),o===null))return;const c=t.ray.origin.distanceTo(ar);c<t.near||c>t.far||e.push({distance:c,point:ar.clone(),uv:_n.getInterpolation(ar,Vr,cr,Hr,Fo,ks,Oo,new zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Gr(i,t,e,n,r,s){Bi.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(or.x=s*Bi.x-r*Bi.y,or.y=r*Bi.x+s*Bi.y):or.copy(Bi),i.copy(t),i.x+=or.x,i.y+=or.y,i.applyMatrix4(Qc)}const Ws=new R,Zu=new R,Ku=new Kt;class ui{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ws.subVectors(n,e).cross(Zu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ws),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ku.getNormalMatrix(t),r=this.coplanarPoint(Ws).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Sr,kr=new R;class tl{constructor(t=new ui,e=new ui,n=new ui,r=new ui,s=new ui,a=new ui){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],l=r[5],f=r[6],d=r[7],p=r[8],_=r[9],M=r[10],m=r[11],h=r[12],C=r[13],T=r[14],y=r[15];if(n[0].setComponents(c-s,d-u,m-p,y-h).normalize(),n[1].setComponents(c+s,d+u,m+p,y+h).normalize(),n[2].setComponents(c+a,d+l,m+_,y+C).normalize(),n[3].setComponents(c-a,d-l,m-_,y-C).normalize(),n[4].setComponents(c-o,d-f,m-M,y-T).normalize(),e===kn)n[5].setComponents(c+o,d+f,m+M,y+T).normalize();else if(e===hs)n[5].setComponents(o,f,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(kr.x=r.normal.x>0?t.max.x:t.min.x,kr.y=r.normal.y>0?t.max.y:t.min.y,kr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pi extends Si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ps=new R,ms=new R,Bo=new Me,lr=new ro,Wr=new Sr,Xs=new R,zo=new R;class gs extends Fe{constructor(t=new ae,e=new pi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)ps.fromBufferAttribute(e,r-1),ms.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=ps.distanceTo(ms);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(r),Wr.radius+=s,t.ray.intersectsSphere(Wr)===!1)return;Bo.copy(r).invert(),lr.copy(t.ray).applyMatrix4(Bo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,l=n.index,d=n.attributes.position;if(l!==null){const p=Math.max(0,a.start),_=Math.min(l.count,a.start+a.count);for(let M=p,m=_-1;M<m;M+=u){const h=l.getX(M),C=l.getX(M+1),T=Xr(this,t,lr,c,h,C);T&&e.push(T)}if(this.isLineLoop){const M=l.getX(_-1),m=l.getX(p),h=Xr(this,t,lr,c,M,m);h&&e.push(h)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let M=p,m=_-1;M<m;M+=u){const h=Xr(this,t,lr,c,M,M+1);h&&e.push(h)}if(this.isLineLoop){const M=Xr(this,t,lr,c,_-1,p);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xr(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(ps.fromBufferAttribute(a,r),ms.fromBufferAttribute(a,s),e.distanceSqToSegment(ps,ms,Xs,zo)>n)return;Xs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Xs);if(!(c<t.near||c>t.far))return{distance:c,point:zo.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Vo=new R,Ho=new R;class qr extends gs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Vo.fromBufferAttribute(e,r),Ho.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Vo.distanceTo(Ho);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ju extends gs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ze extends Si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Go=new Me,qa=new ro,Yr=new Sr,$r=new R;class Ue extends Fe{constructor(t=new ae,e=new Ze){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),Yr.radius+=s,t.ray.intersectsSphere(Yr)===!1)return;Go.copy(r).invert(),qa.copy(t.ray).applyMatrix4(Go);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,M=p;_<M;_++){const m=u.getX(_);$r.fromBufferAttribute(f,m),ko($r,m,c,r,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,M=p;_<M;_++)$r.fromBufferAttribute(f,_),ko($r,_,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ko(i,t,e,n,r,s,a){const o=qa.distanceSqToPoint(i);if(o<e){const c=new R;qa.closestPointToPoint(i,c),c.applyMatrix4(n);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class be extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ju extends je{constructor(t,e,n,r,s,a,o,c,u){super(t,e,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class el extends je{constructor(t,e,n,r,s,a,o,c,u,l=ki){if(l!==ki&&l!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===ki&&(n=xi),n===void 0&&l===Zi&&(n=$i),super(null,r,s,a,o,c,l,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:wn,this.minFilter=c!==void 0?c:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,u;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),u=n[r]-a,u<0)o=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const l=n[r],d=n[r+1]-l,p=(a-l)/d;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new zt:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,r=[],s=[],a=[],o=new R,c=new Me;for(let p=0;p<=t;p++){const _=p/t;r[p]=this.getTangentAt(_,new R)}s[0]=new R,a[0]=new R;let u=Number.MAX_VALUE;const l=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=u&&(u=l,n.set(1,0,0)),f<=u&&(u=f,n.set(0,1,0)),d<=u&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(ee(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,_))}a[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(ee(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let _=1;_<=t;_++)s[_].applyMatrix4(c.makeRotationAxis(r[_],p*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class nl extends In{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new zt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,p=u-this.aY;c=d*l-p*f+this.aX,u=d*f+p*l+this.aY}return n.set(c,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Qu extends nl{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ao(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,u){r(a,o,u*(o-s),u*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,u,l,f){let d=(a-s)/u-(o-s)/(u+l)+(o-a)/l,p=(o-a)/l-(c-a)/(l+f)+(c-o)/f;d*=l,p*=l,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const Zr=new R,qs=new ao,Ys=new ao,$s=new ao;class th extends In{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new R){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let u,l;this.closed||o>0?u=r[(o-1)%s]:(Zr.subVectors(r[0],r[1]).add(r[0]),u=Zr);const f=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?l=r[(o+2)%s]:(Zr.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=Zr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(f),p),M=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);M<1e-4&&(M=1),_<1e-4&&(_=M),m<1e-4&&(m=M),qs.initNonuniformCatmullRom(u.x,f.x,d.x,l.x,_,M,m),Ys.initNonuniformCatmullRom(u.y,f.y,d.y,l.y,_,M,m),$s.initNonuniformCatmullRom(u.z,f.z,d.z,l.z,_,M,m)}else this.curveType==="catmullrom"&&(qs.initCatmullRom(u.x,f.x,d.x,l.x,this.tension),Ys.initCatmullRom(u.y,f.y,d.y,l.y,this.tension),$s.initCatmullRom(u.z,f.z,d.z,l.z,this.tension));return n.set(qs.calc(c),Ys.calc(c),$s.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new R().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Wo(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function eh(i,t){const e=1-i;return e*e*t}function nh(i,t){return 2*(1-i)*i*t}function ih(i,t){return i*i*t}function dr(i,t,e,n){return eh(i,t)+nh(i,e)+ih(i,n)}function rh(i,t){const e=1-i;return e*e*e*t}function sh(i,t){const e=1-i;return 3*e*e*i*t}function ah(i,t){return 3*(1-i)*i*i*t}function oh(i,t){return i*i*i*t}function pr(i,t,e,n,r){return rh(i,t)+sh(i,e)+ah(i,n)+oh(i,r)}class ch extends In{constructor(t=new zt,e=new zt,n=new zt,r=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new zt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(pr(t,r.x,s.x,a.x,o.x),pr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lh extends In{constructor(t=new R,e=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new R){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(pr(t,r.x,s.x,a.x,o.x),pr(t,r.y,s.y,a.y,o.y),pr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class uh extends In{constructor(t=new zt,e=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new zt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class il extends In{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hh extends In{constructor(t=new zt,e=new zt,n=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new zt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(dr(t,r.x,s.x,a.x),dr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rl extends In{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(dr(t,r.x,s.x,a.x),dr(t,r.y,s.y,a.y),dr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fh extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new zt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],u=r[a],l=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(Wo(o,c.x,u.x,l.x,f.x),Wo(o,c.y,u.y,l.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new zt().fromArray(r))}return this}}var Ya=Object.freeze({__proto__:null,ArcCurve:Qu,CatmullRomCurve3:th,CubicBezierCurve:ch,CubicBezierCurve3:lh,EllipseCurve:nl,LineCurve:uh,LineCurve3:il,QuadraticBezierCurve:hh,QuadraticBezierCurve3:rl,SplineCurve:fh});class dh extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ya[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),u=c===0?0:1-a/c;return o.getPointAt(u,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let u=0;u<c.length;u++){const l=c[u];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Ya[r.type]().fromJSON(r))}return this}}class Ss extends ae{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),u=o+1,l=c+1,f=t/o,d=e/c,p=[],_=[],M=[],m=[];for(let h=0;h<l;h++){const C=h*d-a;for(let T=0;T<u;T++){const y=T*f-s;_.push(y,-C,0),M.push(0,0,1),m.push(T/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let C=0;C<o;C++){const T=C+u*h,y=C+u*(h+1),G=C+1+u*(h+1),N=C+1+u*h;p.push(T,y,N),p.push(y,G,N)}this.setIndex(p),this.setAttribute("position",new Xt(_,3)),this.setAttribute("normal",new Xt(M,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.width,t.height,t.widthSegments,t.heightSegments)}}class _s extends ae{constructor(t=.5,e=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],u=[],l=[];let f=t;const d=(e-t)/r,p=new R,_=new zt;for(let M=0;M<=r;M++){for(let m=0;m<=n;m++){const h=s+m/n*a;p.x=f*Math.cos(h),p.y=f*Math.sin(h),c.push(p.x,p.y,p.z),u.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,l.push(_.x,_.y)}f+=d}for(let M=0;M<r;M++){const m=M*(n+1);for(let h=0;h<n;h++){const C=h+m,T=C,y=C+n+1,G=C+n+2,N=C+1;o.push(T,y,N),o.push(y,G,N)}}this.setIndex(o),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class vs extends ae{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let u=0;const l=[],f=new R,d=new R,p=[],_=[],M=[],m=[];for(let h=0;h<=n;h++){const C=[],T=h/n;let y=0;h===0&&a===0?y=.5/e:h===n&&c===Math.PI&&(y=-.5/e);for(let G=0;G<=e;G++){const N=G/e;f.x=-t*Math.cos(r+N*s)*Math.sin(a+T*o),f.y=t*Math.cos(a+T*o),f.z=t*Math.sin(r+N*s)*Math.sin(a+T*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),M.push(d.x,d.y,d.z),m.push(N+y,1-T),C.push(u++)}l.push(C)}for(let h=0;h<n;h++)for(let C=0;C<e;C++){const T=l[h][C+1],y=l[h][C],G=l[h+1][C],N=l[h+1][C+1];(h!==0||a>0)&&p.push(T,y,N),(h!==n-1||c<Math.PI)&&p.push(y,G,N)}this.setIndex(p),this.setAttribute("position",new Xt(_,3)),this.setAttribute("normal",new Xt(M,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class oo extends ae{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],u=[],l=new R,f=new R,d=new R;for(let p=0;p<=n;p++)for(let _=0;_<=r;_++){const M=_/r*s,m=p/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),l.x=t*Math.cos(M),l.y=t*Math.sin(M),d.subVectors(f,l).normalize(),c.push(d.x,d.y,d.z),u.push(_/r),u.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=r;_++){const M=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,h=(r+1)*(p-1)+_,C=(r+1)*p+_;a.push(M,m,C),a.push(m,h,C)}this.setIndex(a),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class co extends ae{constructor(t=new rl(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,c=new R,u=new zt;let l=new R;const f=[],d=[],p=[],_=[];M(),this.setIndex(_),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(p,2));function M(){for(let T=0;T<e;T++)m(T);m(s===!1?e:0),C(),h()}function m(T){l=t.getPointAt(T/e,l);const y=a.normals[T],G=a.binormals[T];for(let N=0;N<=r;N++){const U=N/r*Math.PI*2,X=Math.sin(U),E=-Math.cos(U);c.x=E*y.x+X*G.x,c.y=E*y.y+X*G.y,c.z=E*y.z+X*G.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=l.x+n*c.x,o.y=l.y+n*c.y,o.z=l.z+n*c.z,f.push(o.x,o.y,o.z)}}function h(){for(let T=1;T<=e;T++)for(let y=1;y<=r;y++){const G=(r+1)*(T-1)+(y-1),N=(r+1)*T+(y-1),U=(r+1)*T+y,X=(r+1)*(T-1)+y;_.push(G,N,X),_.push(N,U,X)}}function C(){for(let T=0;T<=e;T++)for(let y=0;y<=r;y++)u.x=T/e,u.y=y/r,p.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new co(new Ya[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ph extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$l,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mh extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Xo extends pi{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class gh extends Jc{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class _h extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class vh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=qo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function qo(){return performance.now()}function Yo(i,t,e,n){const r=xh(n);switch(e){case Nc:return i*t;case Oc:return i*t;case Bc:return i*t*2;case zc:return i*t/r.components*r.byteLength;case to:return i*t/r.components*r.byteLength;case Vc:return i*t*2/r.components*r.byteLength;case eo:return i*t*2/r.components*r.byteLength;case Fc:return i*t*3/r.components*r.byteLength;case An:return i*t*4/r.components*r.byteLength;case no:return i*t*4/r.components*r.byteLength;case ns:case is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rs:case ss:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:case ya:return Math.max(i,16)*Math.max(t,8)/4;case xa:case Sa:return Math.max(i,8)*Math.max(t,8)/2;case Ea:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case as:case Va:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Hc:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ka:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xh(i){switch(i){case qn:case Lc:return{byteLength:1,components:1};case _r:case Ic:case xr:return{byteLength:2,components:1};case ja:case Qa:return{byteLength:2,components:4};case xi:case Ja:case Gn:return{byteLength:4,components:1};case Uc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ka);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sl(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Mh(i){const t=new WeakMap;function e(o,c){const u=o.array,l=o.usage,f=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,l),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,u){const l=c.array,f=c.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,l);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],M=f[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++d,f[d]=M)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const M=f[p];i.bufferSubData(u,M.start*l.BYTES_PER_ELEMENT,l,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=t.get(o);(!l||l.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var Sh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yh=`#ifdef USE_ALPHAHASH
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
#endif`,Eh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ah=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wh=`#ifdef USE_AOMAP
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
#endif`,Rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ch=`#ifdef USE_BATCHING
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
#endif`,Ph=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ih=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uh=`#ifdef USE_IRIDESCENCE
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
#endif`,Nh=`#ifdef USE_BUMPMAP
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
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wh=`#define PI 3.141592653589793
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
} // validated`,Xh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qh=`vec3 transformedNormal = objectNormal;
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
#endif`,Yh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jh="gl_FragColor = linearToOutputTexel( gl_FragColor );",jh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qh=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ef=`#ifdef USE_ENVMAP
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
#endif`,nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,af=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lf=`#ifdef USE_GRADIENTMAP
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
}`,uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,df=`uniform bool receiveShadow;
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
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xf=`PhysicalMaterial material;
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
#endif`,Mf=`struct PhysicalMaterial {
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
}`,Sf=`
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
#endif`,yf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Af=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Df=`#if defined( USE_POINTS_UV )
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
#endif`,Lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,If=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ff=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Of=`#ifdef USE_MORPHTARGETS
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
#endif`,Bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wf=`#ifdef USE_NORMALMAP
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
#endif`,Xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,id=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ad=`float getShadowMask() {
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
}`,od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cd=`#ifdef USE_SKINNING
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
#endif`,ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ud=`#ifdef USE_SKINNING
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
#endif`,hd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,md=`#ifdef USE_TRANSMISSION
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
#endif`,gd=`#ifdef USE_TRANSMISSION
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
#endif`,_d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yd=`uniform sampler2D t2D;
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
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Td=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ad=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`#include <common>
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
}`,Rd=`#if DEPTH_PACKING == 3200
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
}`,Cd=`#define DISTANCE
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
}`,Pd=`#define DISTANCE
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
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ld=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`uniform float scale;
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
}`,Ud=`uniform vec3 diffuse;
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
}`,Nd=`#include <common>
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
}`,Fd=`uniform vec3 diffuse;
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
}`,Od=`#define LAMBERT
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
}`,Bd=`#define LAMBERT
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
}`,zd=`#define MATCAP
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
}`,Vd=`#define MATCAP
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
}`,Hd=`#define NORMAL
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
}`,Gd=`#define NORMAL
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
}`,kd=`#define PHONG
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
}`,Wd=`#define PHONG
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
}`,Xd=`#define STANDARD
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
}`,qd=`#define STANDARD
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
}`,Yd=`#define TOON
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
}`,$d=`#define TOON
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
}`,Zd=`uniform float size;
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
}`,Kd=`uniform vec3 diffuse;
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
}`,Jd=`#include <common>
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
}`,jd=`uniform vec3 color;
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
}`,Qd=`uniform float rotation;
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
}`,tp=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Sh,alphahash_pars_fragment:yh,alphamap_fragment:Eh,alphamap_pars_fragment:Th,alphatest_fragment:bh,alphatest_pars_fragment:Ah,aomap_fragment:wh,aomap_pars_fragment:Rh,batching_pars_vertex:Ch,batching_vertex:Ph,begin_vertex:Dh,beginnormal_vertex:Lh,bsdfs:Ih,iridescence_fragment:Uh,bumpmap_pars_fragment:Nh,clipping_planes_fragment:Fh,clipping_planes_pars_fragment:Oh,clipping_planes_pars_vertex:Bh,clipping_planes_vertex:zh,color_fragment:Vh,color_pars_fragment:Hh,color_pars_vertex:Gh,color_vertex:kh,common:Wh,cube_uv_reflection_fragment:Xh,defaultnormal_vertex:qh,displacementmap_pars_vertex:Yh,displacementmap_vertex:$h,emissivemap_fragment:Zh,emissivemap_pars_fragment:Kh,colorspace_fragment:Jh,colorspace_pars_fragment:jh,envmap_fragment:Qh,envmap_common_pars_fragment:tf,envmap_pars_fragment:ef,envmap_pars_vertex:nf,envmap_physical_pars_fragment:pf,envmap_vertex:rf,fog_vertex:sf,fog_pars_vertex:af,fog_fragment:of,fog_pars_fragment:cf,gradientmap_pars_fragment:lf,lightmap_pars_fragment:uf,lights_lambert_fragment:hf,lights_lambert_pars_fragment:ff,lights_pars_begin:df,lights_toon_fragment:mf,lights_toon_pars_fragment:gf,lights_phong_fragment:_f,lights_phong_pars_fragment:vf,lights_physical_fragment:xf,lights_physical_pars_fragment:Mf,lights_fragment_begin:Sf,lights_fragment_maps:yf,lights_fragment_end:Ef,logdepthbuf_fragment:Tf,logdepthbuf_pars_fragment:bf,logdepthbuf_pars_vertex:Af,logdepthbuf_vertex:wf,map_fragment:Rf,map_pars_fragment:Cf,map_particle_fragment:Pf,map_particle_pars_fragment:Df,metalnessmap_fragment:Lf,metalnessmap_pars_fragment:If,morphinstance_vertex:Uf,morphcolor_vertex:Nf,morphnormal_vertex:Ff,morphtarget_pars_vertex:Of,morphtarget_vertex:Bf,normal_fragment_begin:zf,normal_fragment_maps:Vf,normal_pars_fragment:Hf,normal_pars_vertex:Gf,normal_vertex:kf,normalmap_pars_fragment:Wf,clearcoat_normal_fragment_begin:Xf,clearcoat_normal_fragment_maps:qf,clearcoat_pars_fragment:Yf,iridescence_pars_fragment:$f,opaque_fragment:Zf,packing:Kf,premultiplied_alpha_fragment:Jf,project_vertex:jf,dithering_fragment:Qf,dithering_pars_fragment:td,roughnessmap_fragment:ed,roughnessmap_pars_fragment:nd,shadowmap_pars_fragment:id,shadowmap_pars_vertex:rd,shadowmap_vertex:sd,shadowmask_pars_fragment:ad,skinbase_vertex:od,skinning_pars_vertex:cd,skinning_vertex:ld,skinnormal_vertex:ud,specularmap_fragment:hd,specularmap_pars_fragment:fd,tonemapping_fragment:dd,tonemapping_pars_fragment:pd,transmission_fragment:md,transmission_pars_fragment:gd,uv_pars_fragment:_d,uv_pars_vertex:vd,uv_vertex:xd,worldpos_vertex:Md,background_vert:Sd,background_frag:yd,backgroundCube_vert:Ed,backgroundCube_frag:Td,cube_vert:bd,cube_frag:Ad,depth_vert:wd,depth_frag:Rd,distanceRGBA_vert:Cd,distanceRGBA_frag:Pd,equirect_vert:Dd,equirect_frag:Ld,linedashed_vert:Id,linedashed_frag:Ud,meshbasic_vert:Nd,meshbasic_frag:Fd,meshlambert_vert:Od,meshlambert_frag:Bd,meshmatcap_vert:zd,meshmatcap_frag:Vd,meshnormal_vert:Hd,meshnormal_frag:Gd,meshphong_vert:kd,meshphong_frag:Wd,meshphysical_vert:Xd,meshphysical_frag:qd,meshtoon_vert:Yd,meshtoon_frag:$d,points_vert:Zd,points_frag:Kd,shadow_vert:Jd,shadow_frag:jd,sprite_vert:Qd,sprite_frag:tp},Et={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Cn={basic:{uniforms:Ke([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Ke([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Ke([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Ke([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Ke([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Ke([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Ke([Et.points,Et.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Ke([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Ke([Et.common,Et.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Ke([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Ke([Et.sprite,Et.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Ke([Et.common,Et.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Ke([Et.lights,Et.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Cn.physical={uniforms:Ke([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Kr={r:0,b:0,g:0},ci=new Yn,ep=new Me;function np(i,t,e,n,r,s,a){const o=new Ot(0);let c=s===!0?0:1,u,l,f=null,d=0,p=null;function _(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?e:t).get(y)),y}function M(T){let y=!1;const G=_(T);G===null?h(o,c):G&&G.isColor&&(h(G,1),y=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,y){const G=_(y);G&&(G.isCubeTexture||G.mapping===Ms)?(l===void 0&&(l=new He(new yr(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Ji(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(N,U,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),ci.copy(y.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),l.material.uniforms.envMap.value=G,l.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ep.makeRotationFromEuler(ci)),l.material.toneMapped=ce.getTransfer(G.colorSpace)!==pe,(f!==G||d!==G.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=G,d=G.version,p=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):G&&G.isTexture&&(u===void 0&&(u=new He(new Ss(2,2),new un({name:"BackgroundMaterial",uniforms:Ji(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=G,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=ce.getTransfer(G.colorSpace)!==pe,G.matrixAutoUpdate===!0&&G.updateMatrix(),u.material.uniforms.uvTransform.value.copy(G.matrix),(f!==G||d!==G.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=G,d=G.version,p=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null))}function h(T,y){T.getRGB(Kr,Kc(i)),n.buffers.color.setClear(Kr.r,Kr.g,Kr.b,y,a)}function C(){l!==void 0&&(l.geometry.dispose(),l.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),c=y,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,h(o,c)},render:M,addToRenderList:m,dispose:C}}function ip(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(S,O,rt,j,ct){let ut=!1;const ot=f(j,rt,O);s!==ot&&(s=ot,u(s.object)),ut=p(S,j,rt,ct),ut&&_(S,j,rt,ct),ct!==null&&t.update(ct,i.ELEMENT_ARRAY_BUFFER),(ut||a)&&(a=!1,y(S,O,rt,j),ct!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function c(){return i.createVertexArray()}function u(S){return i.bindVertexArray(S)}function l(S){return i.deleteVertexArray(S)}function f(S,O,rt){const j=rt.wireframe===!0;let ct=n[S.id];ct===void 0&&(ct={},n[S.id]=ct);let ut=ct[O.id];ut===void 0&&(ut={},ct[O.id]=ut);let ot=ut[j];return ot===void 0&&(ot=d(c()),ut[j]=ot),ot}function d(S){const O=[],rt=[],j=[];for(let ct=0;ct<e;ct++)O[ct]=0,rt[ct]=0,j[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:rt,attributeDivisors:j,object:S,attributes:{},index:null}}function p(S,O,rt,j){const ct=s.attributes,ut=O.attributes;let ot=0;const dt=rt.getAttributes();for(const Q in dt)if(dt[Q].location>=0){const Ct=ct[Q];let Bt=ut[Q];if(Bt===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(Bt=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(Bt=S.instanceColor)),Ct===void 0||Ct.attribute!==Bt||Bt&&Ct.data!==Bt.data)return!0;ot++}return s.attributesNum!==ot||s.index!==j}function _(S,O,rt,j){const ct={},ut=O.attributes;let ot=0;const dt=rt.getAttributes();for(const Q in dt)if(dt[Q].location>=0){let Ct=ut[Q];Ct===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(Ct=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(Ct=S.instanceColor));const Bt={};Bt.attribute=Ct,Ct&&Ct.data&&(Bt.data=Ct.data),ct[Q]=Bt,ot++}s.attributes=ct,s.attributesNum=ot,s.index=j}function M(){const S=s.newAttributes;for(let O=0,rt=S.length;O<rt;O++)S[O]=0}function m(S){h(S,0)}function h(S,O){const rt=s.newAttributes,j=s.enabledAttributes,ct=s.attributeDivisors;rt[S]=1,j[S]===0&&(i.enableVertexAttribArray(S),j[S]=1),ct[S]!==O&&(i.vertexAttribDivisor(S,O),ct[S]=O)}function C(){const S=s.newAttributes,O=s.enabledAttributes;for(let rt=0,j=O.length;rt<j;rt++)O[rt]!==S[rt]&&(i.disableVertexAttribArray(rt),O[rt]=0)}function T(S,O,rt,j,ct,ut,ot){ot===!0?i.vertexAttribIPointer(S,O,rt,ct,ut):i.vertexAttribPointer(S,O,rt,j,ct,ut)}function y(S,O,rt,j){M();const ct=j.attributes,ut=rt.getAttributes(),ot=O.defaultAttributeValues;for(const dt in ut){const Q=ut[dt];if(Q.location>=0){let yt=ct[dt];if(yt===void 0&&(dt==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),dt==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor)),yt!==void 0){const Ct=yt.normalized,Bt=yt.itemSize,te=t.get(yt);if(te===void 0)continue;const ue=te.buffer,st=te.type,xt=te.bytesPerElement,Dt=st===i.INT||st===i.UNSIGNED_INT||yt.gpuType===Ja;if(yt.isInterleavedBufferAttribute){const Tt=yt.data,Vt=Tt.stride,Gt=yt.offset;if(Tt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<Q.locationSize;Lt++)h(Q.location+Lt,Tt.meshPerAttribute);S.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Lt=0;Lt<Q.locationSize;Lt++)m(Q.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let Lt=0;Lt<Q.locationSize;Lt++)T(Q.location+Lt,Bt/Q.locationSize,st,Ct,Vt*xt,(Gt+Bt/Q.locationSize*Lt)*xt,Dt)}else{if(yt.isInstancedBufferAttribute){for(let Tt=0;Tt<Q.locationSize;Tt++)h(Q.location+Tt,yt.meshPerAttribute);S.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Tt=0;Tt<Q.locationSize;Tt++)m(Q.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let Tt=0;Tt<Q.locationSize;Tt++)T(Q.location+Tt,Bt/Q.locationSize,st,Ct,Bt*xt,Bt/Q.locationSize*Tt*xt,Dt)}}else if(ot!==void 0){const Ct=ot[dt];if(Ct!==void 0)switch(Ct.length){case 2:i.vertexAttrib2fv(Q.location,Ct);break;case 3:i.vertexAttrib3fv(Q.location,Ct);break;case 4:i.vertexAttrib4fv(Q.location,Ct);break;default:i.vertexAttrib1fv(Q.location,Ct)}}}}C()}function G(){X();for(const S in n){const O=n[S];for(const rt in O){const j=O[rt];for(const ct in j)l(j[ct].object),delete j[ct];delete O[rt]}delete n[S]}}function N(S){if(n[S.id]===void 0)return;const O=n[S.id];for(const rt in O){const j=O[rt];for(const ct in j)l(j[ct].object),delete j[ct];delete O[rt]}delete n[S.id]}function U(S){for(const O in n){const rt=n[O];if(rt[S.id]===void 0)continue;const j=rt[S.id];for(const ct in j)l(j[ct].object),delete j[ct];delete rt[S.id]}}function X(){E(),a=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:X,resetDefaultState:E,dispose:G,releaseStatesOfGeometry:N,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:m,disableUnusedAttributes:C}}function rp(i,t,e){let n;function r(u){n=u}function s(u,l){i.drawArrays(n,u,l),e.update(l,n,1)}function a(u,l,f){f!==0&&(i.drawArraysInstanced(n,u,l,f),e.update(l,n,f))}function o(u,l,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,l,0,f);let p=0;for(let _=0;_<f;_++)p+=l[_];e.update(p,n,1)}function c(u,l,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)a(u[_],l[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,l,0,d,0,f);let _=0;for(let M=0;M<f;M++)_+=l[M]*d[M];e.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function sp(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(U){return!(U!==An&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const X=U===xr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==qn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Gn&&!X)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const l=c(u);l!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",l,"instead."),u=l);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),G=_>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:C,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:G,maxSamples:N}}function ap(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new ui,o=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=l(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!r||_===null||_.length===0||s&&!m)s?l(null):u();else{const C=s?0:n,T=C*4;let y=h.clippingState||null;c.value=y,y=l(_,d,T,p);for(let G=0;G!==T;++G)y[G]=e[G];h.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(f,d,p,_){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=c.value,_!==!0||m===null){const h=p+M*4,C=d.matrixWorldInverse;o.getNormalMatrix(C),(m===null||m.length<h)&&(m=new Float32Array(h));for(let T=0,y=p;T!==M;++T,y+=4)a.copy(f[T]).applyMatrix4(C,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function op(i){let t=new WeakMap;function e(a,o){return o===ma?a.mapping=qi:o===ga&&(a.mapping=Yi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ma||o===ga)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new qu(c.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",r),e(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Hi=4,$o=[.125,.215,.35,.446,.526,.582],mi=20,Zs=new gh,Zo=new Ot;let Ks=null,Js=0,js=0,Qs=!1;const hi=(1+Math.sqrt(5))/2,zi=1/hi,Ko=[new R(-hi,zi,0),new R(hi,zi,0),new R(-zi,0,hi),new R(zi,0,hi),new R(0,hi,-zi),new R(0,hi,zi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Jo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Ks=this._renderer.getRenderTarget(),Js=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ks,Js,js),this._renderer.xr.enabled=Qs,t.scissorTest=!1,Jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ks=this._renderer.getRenderTarget(),Js=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:xr,format:An,colorSpace:Ki,depthBuffer:!1},r=jo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cp(s)),this._blurMaterial=lp(s,t,e)}return r}_compileMaterial(t){const e=new He(this._lodPlanes[0],t);this._renderer.compile(e,Zs)}_sceneToCubeUV(t,e,n,r){const o=new gn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,d=l.toneMapping;l.getClearColor(Zo),l.toneMapping=ni,l.autoClear=!1;const p=new di({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),_=new He(new yr,p);let M=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,M=!0):(p.color.copy(Zo),M=!0);for(let h=0;h<6;h++){const C=h%3;C===0?(o.up.set(0,c[h],0),o.lookAt(u[h],0,0)):C===1?(o.up.set(0,0,c[h]),o.lookAt(0,u[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,u[h]));const T=this._cubeSize;Jr(r,C*T,h>2?T:0,T,T),l.setRenderTarget(r),M&&l.render(_,o),l.render(t,o)}_.geometry.dispose(),_.material.dispose(),l.toneMapping=d,l.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===qi||t.mapping===Yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new He(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Jr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Zs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ko[(r-s-1)%Ko.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,f=new He(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*mi-1),M=s/_,m=isFinite(s)?1+Math.floor(l*M):mi;m>mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const h=[];let C=0;for(let U=0;U<mi;++U){const X=U/M,E=Math.exp(-X*X/2);h.push(E),U===0?C+=E:U<m&&(C+=2*E)}for(let U=0;U<h.length;U++)h[U]=h[U]/C;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-n;const y=this._sizeLods[r],G=3*y*(r>T-Hi?r-T+Hi:0),N=4*(this._cubeSize-y);Jr(e,G,N,3*y,2*y),c.setRenderTarget(e),c.render(f,Zs)}}function cp(i){const t=[],e=[],n=[];let r=i;const s=i-Hi+1+$o.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Hi?c=$o[a-i+Hi-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),l=-u,f=1+u,d=[l,l,f,l,f,f,l,l,f,f,l,f],p=6,_=6,M=3,m=2,h=1,C=new Float32Array(M*_*p),T=new Float32Array(m*_*p),y=new Float32Array(h*_*p);for(let N=0;N<p;N++){const U=N%3*2/3-1,X=N>2?0:-1,E=[U,X,0,U+2/3,X,0,U+2/3,X+1,0,U,X,0,U+2/3,X+1,0,U,X+1,0];C.set(E,M*_*N),T.set(d,m*_*N);const S=[N,N,N,N,N,N];y.set(S,h*_*N)}const G=new ae;G.setAttribute("position",new xe(C,M)),G.setAttribute("uv",new xe(T,m)),G.setAttribute("faceIndex",new xe(y,h)),t.push(G),r>Hi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jo(i,t,e){const n=new Mi(i,t,e);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function lp(i,t,e){const n=new Float32Array(mi),r=new R(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lo(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Qo(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lo(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function tc(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function lo(){return`

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
	`}function up(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===ma||c===ga,l=c===qi||c===Yi;if(u||l){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Jo(i)),f=u?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return u&&p&&p.height>0||l&&p&&r(p)?(e===null&&(e=new Jo(i)),f=u?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const u=6;for(let l=0;l<u;l++)o[l]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function hp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Vi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function fp(i,t,e,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function u(f){const d=[],p=f.index,_=f.attributes.position;let M=0;if(p!==null){const C=p.array;M=p.version;for(let T=0,y=C.length;T<y;T+=3){const G=C[T+0],N=C[T+1],U=C[T+2];d.push(G,N,N,U,U,G)}}else if(_!==void 0){const C=_.array;M=_.version;for(let T=0,y=C.length/3-1;T<y;T+=3){const G=T+0,N=T+1,U=T+2;d.push(G,N,N,U,U,G)}}else return;const m=new(kc(d)?Zc:$c)(d,1);m.version=M;const h=s.get(f);h&&t.remove(h),s.set(f,m)}function l(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:l}}function dp(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*a),e.update(p,n,1)}function u(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,s,d*a,_),e.update(p,n,_))}function l(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];e.update(m,n,1)}function f(d,p,_,M){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)u(d[h]/a,p[h],M[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,M,0,_);let h=0;for(let C=0;C<_;C++)h+=p[C]*M[C];e.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function pp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function mp(i,t,e){const n=new WeakMap,r=new ye;function s(a,o,c){const u=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=l!==void 0?l.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let S=function(){X.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],C=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),M===!0&&(y=2),m===!0&&(y=3);let G=o.attributes.position.count*y,N=1;G>t.maxTextureSize&&(N=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const U=new Float32Array(G*N*4*f),X=new Xc(U,G,N,f);X.type=Gn,X.needsUpdate=!0;const E=y*4;for(let O=0;O<f;O++){const rt=h[O],j=C[O],ct=T[O],ut=G*N*4*O;for(let ot=0;ot<rt.count;ot++){const dt=ot*E;_===!0&&(r.fromBufferAttribute(rt,ot),U[ut+dt+0]=r.x,U[ut+dt+1]=r.y,U[ut+dt+2]=r.z,U[ut+dt+3]=0),M===!0&&(r.fromBufferAttribute(j,ot),U[ut+dt+4]=r.x,U[ut+dt+5]=r.y,U[ut+dt+6]=r.z,U[ut+dt+7]=0),m===!0&&(r.fromBufferAttribute(ct,ot),U[ut+dt+8]=r.x,U[ut+dt+9]=r.y,U[ut+dt+10]=r.z,U[ut+dt+11]=ct.itemSize===4?r.w:1)}}d={count:f,texture:X,size:new zt(G,N)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const M=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function gp(i,t,e,n){let r=new WeakMap;function s(c){const u=n.render.frame,l=c.geometry,f=t.get(c,l);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}const al=new je,ec=new el(1,1),ol=new Xc,cl=new Pu,ll=new jc,nc=[],ic=[],rc=new Float32Array(16),sc=new Float32Array(9),ac=new Float32Array(4);function tr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=nc[r];if(s===void 0&&(s=new Float32Array(r),nc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ys(i,t){let e=ic[t];e===void 0&&(e=new Int32Array(t),ic[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function _p(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function Sp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,n))return;ac.set(n),i.uniformMatrix2fv(this.addr,!1,ac),we(e,n)}}function yp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,n))return;sc.set(n),i.uniformMatrix3fv(this.addr,!1,sc),we(e,n)}}function Ep(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,n))return;rc.set(n),i.uniformMatrix4fv(this.addr,!1,rc),we(e,n)}}function Tp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function Rp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function Pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function Dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function Lp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ec.compareFunction=Gc,s=ec):s=al,e.setTexture2D(t||s,r)}function Ip(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||cl,r)}function Up(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||ll,r)}function Np(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||ol,r)}function Fp(i){switch(i){case 5126:return _p;case 35664:return vp;case 35665:return xp;case 35666:return Mp;case 35674:return Sp;case 35675:return yp;case 35676:return Ep;case 5124:case 35670:return Tp;case 35667:case 35671:return bp;case 35668:case 35672:return Ap;case 35669:case 35673:return wp;case 5125:return Rp;case 36294:return Cp;case 36295:return Pp;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Lp;case 35679:case 36299:case 36307:return Ip;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Np}}function Op(i,t){i.uniform1fv(this.addr,t)}function Bp(i,t){const e=tr(t,this.size,2);i.uniform2fv(this.addr,e)}function zp(i,t){const e=tr(t,this.size,3);i.uniform3fv(this.addr,e)}function Vp(i,t){const e=tr(t,this.size,4);i.uniform4fv(this.addr,e)}function Hp(i,t){const e=tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Gp(i,t){const e=tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function kp(i,t){const e=tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Wp(i,t){i.uniform1iv(this.addr,t)}function Xp(i,t){i.uniform2iv(this.addr,t)}function qp(i,t){i.uniform3iv(this.addr,t)}function Yp(i,t){i.uniform4iv(this.addr,t)}function $p(i,t){i.uniform1uiv(this.addr,t)}function Zp(i,t){i.uniform2uiv(this.addr,t)}function Kp(i,t){i.uniform3uiv(this.addr,t)}function Jp(i,t){i.uniform4uiv(this.addr,t)}function jp(i,t,e){const n=this.cache,r=t.length,s=ys(e,r);Ae(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||al,s[a])}function Qp(i,t,e){const n=this.cache,r=t.length,s=ys(e,r);Ae(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||cl,s[a])}function tm(i,t,e){const n=this.cache,r=t.length,s=ys(e,r);Ae(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||ll,s[a])}function em(i,t,e){const n=this.cache,r=t.length,s=ys(e,r);Ae(n,s)||(i.uniform1iv(this.addr,s),we(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||ol,s[a])}function nm(i){switch(i){case 5126:return Op;case 35664:return Bp;case 35665:return zp;case 35666:return Vp;case 35674:return Hp;case 35675:return Gp;case 35676:return kp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return $p;case 36294:return Zp;case 36295:return Kp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}class im{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fp(e.type)}}class rm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nm(e.type)}}class sm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function oc(i,t){i.seq.push(t),i.map[t.id]=t}function am(i,t,e){const n=i.name,r=n.length;for(ta.lastIndex=0;;){const s=ta.exec(n),a=ta.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){oc(e,u===void 0?new im(o,i,t):new rm(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new sm(o),oc(e,f)),e=f}}}class os{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);am(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function cc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const om=37297;let cm=0;function lm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const lc=new Kt;function um(i){ce._getMatrix(lc,ce.workingColorSpace,i);const t=`mat3( ${lc.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case us:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+lm(i.getShaderSource(t),a)}else return r}function hm(i,t){const e=um(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function fm(i,t){let e;switch(t){case Vl:e="Linear";break;case Hl:e="Reinhard";break;case Gl:e="Cineon";break;case kl:e="ACESFilmic";break;case Xl:e="AgX";break;case ql:e="Neutral";break;case Wl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const jr=new R;function dm(){ce.getLuminanceCoefficients(jr);const i=jr.x.toFixed(4),t=jr.y.toFixed(4),e=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function mm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ur(i){return i!==""}function hc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _m=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(i){return i.replace(_m,xm)}const vm=new Map;function xm(i,t){let e=Qt[t];if(e===void 0){const n=vm.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $a(e)}const Mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(i){return i.replace(Mm,Sm)}function Sm(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ym(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Em(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case Ms:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function bm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pc:t="ENVMAP_BLENDING_MULTIPLY";break;case Bl:t="ENVMAP_BLENDING_MIX";break;case zl:t="ENVMAP_BLENDING_ADD";break}return t}function Am(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wm(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=ym(e),u=Em(e),l=Tm(e),f=bm(e),d=Am(e),p=pm(e),_=mm(s),M=r.createProgram();let m,h,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ur).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ur).join(`
`),h.length>0&&(h+=`
`)):(m=[pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),h=[pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ni?fm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,hm("linearToOutputTexel",e.outputColorSpace),dm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),a=$a(a),a=hc(a,e),a=fc(a,e),o=$a(o),o=hc(o,e),o=fc(o,e),a=dc(a),o=dc(o),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===_o?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_o?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=C+m+a,y=C+h+o,G=cc(r,r.VERTEX_SHADER,T),N=cc(r,r.FRAGMENT_SHADER,y);r.attachShader(M,G),r.attachShader(M,N),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function U(O){if(i.debug.checkShaderErrors){const rt=r.getProgramInfoLog(M).trim(),j=r.getShaderInfoLog(G).trim(),ct=r.getShaderInfoLog(N).trim();let ut=!0,ot=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ut=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,G,N);else{const dt=uc(r,G,"vertex"),Q=uc(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+rt+`
`+dt+`
`+Q)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(j===""||ct==="")&&(ot=!1);ot&&(O.diagnostics={runnable:ut,programLog:rt,vertexShader:{log:j,prefix:m},fragmentShader:{log:ct,prefix:h}})}r.deleteShader(G),r.deleteShader(N),X=new os(r,M),E=gm(r,M)}let X;this.getUniforms=function(){return X===void 0&&U(this),X};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(M,om)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cm++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=G,this.fragmentShader=N,this}let Rm=0;class Cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Pm(t),e.set(t,n)),n}}class Pm{constructor(t){this.id=Rm++,this.code=t,this.usedTimes=0}}function Dm(i,t,e,n,r,s,a){const o=new qc,c=new Cm,u=new Set,l=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return u.add(E),E===0?"uv":`uv${E}`}function m(E,S,O,rt,j){const ct=rt.fog,ut=j.geometry,ot=E.isMeshStandardMaterial?rt.environment:null,dt=(E.isMeshStandardMaterial?e:t).get(E.envMap||ot),Q=dt&&dt.mapping===Ms?dt.image.height:null,yt=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Ct=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Bt=Ct!==void 0?Ct.length:0;let te=0;ut.morphAttributes.position!==void 0&&(te=1),ut.morphAttributes.normal!==void 0&&(te=2),ut.morphAttributes.color!==void 0&&(te=3);let ue,st,xt,Dt;if(yt){const It=Cn[yt];ue=It.vertexShader,st=It.fragmentShader}else ue=E.vertexShader,st=E.fragmentShader,c.update(E),xt=c.getVertexShaderID(E),Dt=c.getFragmentShaderID(E);const Tt=i.getRenderTarget(),Vt=i.state.buffers.depth.getReversed(),Gt=j.isInstancedMesh===!0,Lt=j.isBatchedMesh===!0,ve=!!E.map,re=!!E.matcap,ge=!!dt,I=!!E.aoMap,Oe=!!E.lightMap,ne=!!E.bumpMap,b=!!E.normalMap,B=!!E.displacementMap,z=!!E.emissiveMap,$=!!E.metalnessMap,v=!!E.roughnessMap,g=E.anisotropy>0,w=E.clearcoat>0,k=E.dispersion>0,Y=E.iridescence>0,W=E.sheen>0,et=E.transmission>0,K=g&&!!E.anisotropyMap,nt=w&&!!E.clearcoatMap,mt=w&&!!E.clearcoatNormalMap,Z=w&&!!E.clearcoatRoughnessMap,at=Y&&!!E.iridescenceMap,ft=Y&&!!E.iridescenceThicknessMap,gt=W&&!!E.sheenColorMap,lt=W&&!!E.sheenRoughnessMap,bt=!!E.specularMap,St=!!E.specularColorMap,Pt=!!E.specularIntensityMap,A=et&&!!E.transmissionMap,tt=et&&!!E.thicknessMap,L=!!E.gradientMap,q=!!E.alphaMap,V=E.alphaTest>0,J=!!E.alphaHash,pt=!!E.extensions;let vt=ni;E.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(vt=i.toneMapping);const At={shaderID:yt,shaderType:E.type,shaderName:E.name,vertexShader:ue,fragmentShader:st,defines:E.defines,customVertexShaderID:xt,customFragmentShaderID:Dt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Lt,batchingColor:Lt&&j._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&j.instanceColor!==null,instancingMorph:Gt&&j.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Tt===null?i.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Ki,alphaToCoverage:!!E.alphaToCoverage,map:ve,matcap:re,envMap:ge,envMapMode:ge&&dt.mapping,envMapCubeUVHeight:Q,aoMap:I,lightMap:Oe,bumpMap:ne,normalMap:b,displacementMap:d&&B,emissiveMap:z,normalMapObjectSpace:b&&E.normalMapType===Jl,normalMapTangentSpace:b&&E.normalMapType===Kl,metalnessMap:$,roughnessMap:v,anisotropy:g,anisotropyMap:K,clearcoat:w,clearcoatMap:nt,clearcoatNormalMap:mt,clearcoatRoughnessMap:Z,dispersion:k,iridescence:Y,iridescenceMap:at,iridescenceThicknessMap:ft,sheen:W,sheenColorMap:gt,sheenRoughnessMap:lt,specularMap:bt,specularColorMap:St,specularIntensityMap:Pt,transmission:et,transmissionMap:A,thicknessMap:tt,gradientMap:L,opaque:E.transparent===!1&&E.blending===Gi&&E.alphaToCoverage===!1,alphaMap:q,alphaTest:V,alphaHash:J,combine:E.combine,mapUv:ve&&M(E.map.channel),aoMapUv:I&&M(E.aoMap.channel),lightMapUv:Oe&&M(E.lightMap.channel),bumpMapUv:ne&&M(E.bumpMap.channel),normalMapUv:b&&M(E.normalMap.channel),displacementMapUv:B&&M(E.displacementMap.channel),emissiveMapUv:z&&M(E.emissiveMap.channel),metalnessMapUv:$&&M(E.metalnessMap.channel),roughnessMapUv:v&&M(E.roughnessMap.channel),anisotropyMapUv:K&&M(E.anisotropyMap.channel),clearcoatMapUv:nt&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:mt&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:lt&&M(E.sheenRoughnessMap.channel),specularMapUv:bt&&M(E.specularMap.channel),specularColorMapUv:St&&M(E.specularColorMap.channel),specularIntensityMapUv:Pt&&M(E.specularIntensityMap.channel),transmissionMapUv:A&&M(E.transmissionMap.channel),thicknessMapUv:tt&&M(E.thicknessMap.channel),alphaMapUv:q&&M(E.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(b||g),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ut.attributes.uv&&(ve||q),fog:!!ct,useFog:E.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Vt,skinning:j.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:te,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:vt,decodeVideoTexture:ve&&E.map.isVideoTexture===!0&&ce.getTransfer(E.map.colorSpace)===pe,decodeVideoTextureEmissive:z&&E.emissiveMap.isVideoTexture===!0&&ce.getTransfer(E.emissiveMap.colorSpace)===pe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Tn,flipSided:E.side===en,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:pt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&E.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return At.vertexUv1s=u.has(1),At.vertexUv2s=u.has(2),At.vertexUv3s=u.has(3),u.clear(),At}function h(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const O in E.defines)S.push(O),S.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(C(S,E),T(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function C(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function T(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){const S=_[E.type];let O;if(S){const rt=Cn[S];O=Gu.clone(rt.uniforms)}else O=E.uniforms;return O}function G(E,S){let O;for(let rt=0,j=l.length;rt<j;rt++){const ct=l[rt];if(ct.cacheKey===S){O=ct,++O.usedTimes;break}}return O===void 0&&(O=new wm(i,S,E,s),l.push(O)),O}function N(E){if(--E.usedTimes===0){const S=l.indexOf(E);l[S]=l[l.length-1],l.pop(),E.destroy()}}function U(E){c.remove(E)}function X(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:G,releaseProgram:N,releaseShaderCache:U,programs:l,dispose:X}}function Lm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Im(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,d,p,_,M,m){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:M,group:m},i[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=M,h.group=m),t++,h}function o(f,d,p,_,M,m){const h=a(f,d,p,_,M,m);p.transmission>0?n.push(h):p.transparent===!0?r.push(h):e.push(h)}function c(f,d,p,_,M,m){const h=a(f,d,p,_,M,m);p.transmission>0?n.unshift(h):p.transparent===!0?r.unshift(h):e.unshift(h)}function u(f,d){e.length>1&&e.sort(f||Im),n.length>1&&n.sort(d||mc),r.length>1&&r.sort(d||mc)}function l(){for(let f=t,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:l,sort:u}}function Um(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new gc,i.set(n,[a])):r>=s.length?(a=new gc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Nm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Ot};break;case"SpotLight":e={position:new R,direction:new R,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Fm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Om=0;function Bm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zm(i){const t=new Nm,e=Fm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new R);const r=new R,s=new Me,a=new Me;function o(u){let l=0,f=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,_=0,M=0,m=0,h=0,C=0,T=0,y=0,G=0,N=0,U=0;u.sort(Bm);for(let E=0,S=u.length;E<S;E++){const O=u[E],rt=O.color,j=O.intensity,ct=O.distance,ut=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)l+=rt.r*j,f+=rt.g*j,d+=rt.b*j;else if(O.isLightProbe){for(let ot=0;ot<9;ot++)n.probe[ot].addScaledVector(O.sh.coefficients[ot],j);U++}else if(O.isDirectionalLight){const ot=t.get(O);if(ot.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const dt=O.shadow,Q=e.get(O);Q.shadowIntensity=dt.intensity,Q.shadowBias=dt.bias,Q.shadowNormalBias=dt.normalBias,Q.shadowRadius=dt.radius,Q.shadowMapSize=dt.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=ut,n.directionalShadowMatrix[p]=O.shadow.matrix,C++}n.directional[p]=ot,p++}else if(O.isSpotLight){const ot=t.get(O);ot.position.setFromMatrixPosition(O.matrixWorld),ot.color.copy(rt).multiplyScalar(j),ot.distance=ct,ot.coneCos=Math.cos(O.angle),ot.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ot.decay=O.decay,n.spot[M]=ot;const dt=O.shadow;if(O.map&&(n.spotLightMap[G]=O.map,G++,dt.updateMatrices(O),O.castShadow&&N++),n.spotLightMatrix[M]=dt.matrix,O.castShadow){const Q=e.get(O);Q.shadowIntensity=dt.intensity,Q.shadowBias=dt.bias,Q.shadowNormalBias=dt.normalBias,Q.shadowRadius=dt.radius,Q.shadowMapSize=dt.mapSize,n.spotShadow[M]=Q,n.spotShadowMap[M]=ut,y++}M++}else if(O.isRectAreaLight){const ot=t.get(O);ot.color.copy(rt).multiplyScalar(j),ot.halfWidth.set(O.width*.5,0,0),ot.halfHeight.set(0,O.height*.5,0),n.rectArea[m]=ot,m++}else if(O.isPointLight){const ot=t.get(O);if(ot.color.copy(O.color).multiplyScalar(O.intensity),ot.distance=O.distance,ot.decay=O.decay,O.castShadow){const dt=O.shadow,Q=e.get(O);Q.shadowIntensity=dt.intensity,Q.shadowBias=dt.bias,Q.shadowNormalBias=dt.normalBias,Q.shadowRadius=dt.radius,Q.shadowMapSize=dt.mapSize,Q.shadowCameraNear=dt.camera.near,Q.shadowCameraFar=dt.camera.far,n.pointShadow[_]=Q,n.pointShadowMap[_]=ut,n.pointShadowMatrix[_]=O.shadow.matrix,T++}n.point[_]=ot,_++}else if(O.isHemisphereLight){const ot=t.get(O);ot.skyColor.copy(O.color).multiplyScalar(j),ot.groundColor.copy(O.groundColor).multiplyScalar(j),n.hemi[h]=ot,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=f,n.ambient[2]=d;const X=n.hash;(X.directionalLength!==p||X.pointLength!==_||X.spotLength!==M||X.rectAreaLength!==m||X.hemiLength!==h||X.numDirectionalShadows!==C||X.numPointShadows!==T||X.numSpotShadows!==y||X.numSpotMaps!==G||X.numLightProbes!==U)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=m,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+G-N,n.spotLightMap.length=G,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=U,X.directionalLength=p,X.pointLength=_,X.spotLength=M,X.rectAreaLength=m,X.hemiLength=h,X.numDirectionalShadows=C,X.numPointShadows=T,X.numSpotShadows=y,X.numSpotMaps=G,X.numLightProbes=U,n.version=Om++)}function c(u,l){let f=0,d=0,p=0,_=0,M=0;const m=l.matrixWorldInverse;for(let h=0,C=u.length;h<C;h++){const T=u[h];if(T.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(T.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const y=n.hemi[M];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),M++}}}return{setup:o,setupView:c,state:n}}function _c(i){const t=new zm(i),e=[],n=[];function r(l){u.camera=l,e.length=0,n.length=0}function s(l){e.push(l)}function a(l){n.push(l)}function o(){t.setup(e)}function c(l){t.setupView(e,l)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Vm(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new _c(i),t.set(r,[o])):s>=a.length?(o=new _c(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gm=`uniform sampler2D shadow_pass;
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
}`;function km(i,t,e){let n=new tl;const r=new zt,s=new zt,a=new ye,o=new ph({depthPacking:Zl}),c=new mh,u={},l=e.maxTextureSize,f={[ii]:en,[en]:ii,[Tn]:Tn},d=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:Hm,fragmentShader:Gm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new ae;_.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new He(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let h=this.type;this.render=function(N,U,X){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),rt=i.state;rt.setBlending(ei),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const j=h!==Hn&&this.type===Hn,ct=h===Hn&&this.type!==Hn;for(let ut=0,ot=N.length;ut<ot;ut++){const dt=N[ut],Q=dt.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",dt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const yt=Q.getFrameExtents();if(r.multiply(yt),s.copy(Q.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/yt.x),r.x=s.x*yt.x,Q.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/yt.y),r.y=s.y*yt.y,Q.mapSize.y=s.y)),Q.map===null||j===!0||ct===!0){const Bt=this.type!==Hn?{minFilter:wn,magFilter:wn}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Mi(r.x,r.y,Bt),Q.map.texture.name=dt.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();const Ct=Q.getViewportCount();for(let Bt=0;Bt<Ct;Bt++){const te=Q.getViewport(Bt);a.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),rt.viewport(a),Q.updateMatrices(dt,Bt),n=Q.getFrustum(),y(U,X,Q.camera,dt,this.type)}Q.isPointLightShadow!==!0&&this.type===Hn&&C(Q,X),Q.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(E,S,O)};function C(N,U){const X=t.update(M);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,p.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Mi(r.x,r.y)),d.uniforms.shadow_pass.value=N.map.texture,d.uniforms.resolution.value=N.mapSize,d.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(U,null,X,d,M,null),p.uniforms.shadow_pass.value=N.mapPass.texture,p.uniforms.resolution.value=N.mapSize,p.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(U,null,X,p,M,null)}function T(N,U,X,E){let S=null;const O=X.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(O!==void 0)S=O;else if(S=X.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const rt=S.uuid,j=U.uuid;let ct=u[rt];ct===void 0&&(ct={},u[rt]=ct);let ut=ct[j];ut===void 0&&(ut=S.clone(),ct[j]=ut,U.addEventListener("dispose",G)),S=ut}if(S.visible=U.visible,S.wireframe=U.wireframe,E===Hn?S.side=U.shadowSide!==null?U.shadowSide:U.side:S.side=U.shadowSide!==null?U.shadowSide:f[U.side],S.alphaMap=U.alphaMap,S.alphaTest=U.alphaTest,S.map=U.map,S.clipShadows=U.clipShadows,S.clippingPlanes=U.clippingPlanes,S.clipIntersection=U.clipIntersection,S.displacementMap=U.displacementMap,S.displacementScale=U.displacementScale,S.displacementBias=U.displacementBias,S.wireframeLinewidth=U.wireframeLinewidth,S.linewidth=U.linewidth,X.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const rt=i.properties.get(S);rt.light=X}return S}function y(N,U,X,E,S){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&S===Hn)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,N.matrixWorld);const j=t.update(N),ct=N.material;if(Array.isArray(ct)){const ut=j.groups;for(let ot=0,dt=ut.length;ot<dt;ot++){const Q=ut[ot],yt=ct[Q.materialIndex];if(yt&&yt.visible){const Ct=T(N,yt,E,S);N.onBeforeShadow(i,N,U,X,j,Ct,Q),i.renderBufferDirect(X,null,j,Ct,N,Q),N.onAfterShadow(i,N,U,X,j,Ct,Q)}}}else if(ct.visible){const ut=T(N,ct,E,S);N.onBeforeShadow(i,N,U,X,j,ut,null),i.renderBufferDirect(X,null,j,ut,N,null),N.onAfterShadow(i,N,U,X,j,ut,null)}}const rt=N.children;for(let j=0,ct=rt.length;j<ct;j++)y(rt[j],U,X,E,S)}function G(N){N.target.removeEventListener("dispose",G);for(const X in u){const E=u[X],S=N.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const Wm={[ca]:la,[ua]:da,[ha]:pa,[Xi]:fa,[la]:ca,[da]:ua,[pa]:ha,[fa]:Xi};function Xm(i,t){function e(){let A=!1;const tt=new ye;let L=null;const q=new ye(0,0,0,0);return{setMask:function(V){L!==V&&!A&&(i.colorMask(V,V,V,V),L=V)},setLocked:function(V){A=V},setClear:function(V,J,pt,vt,At){At===!0&&(V*=vt,J*=vt,pt*=vt),tt.set(V,J,pt,vt),q.equals(tt)===!1&&(i.clearColor(V,J,pt,vt),q.copy(tt))},reset:function(){A=!1,L=null,q.set(-1,0,0,0)}}}function n(){let A=!1,tt=!1,L=null,q=null,V=null;return{setReversed:function(J){if(tt!==J){const pt=t.get("EXT_clip_control");tt?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);const vt=V;V=null,this.setClear(vt)}tt=J},getReversed:function(){return tt},setTest:function(J){J?Tt(i.DEPTH_TEST):Vt(i.DEPTH_TEST)},setMask:function(J){L!==J&&!A&&(i.depthMask(J),L=J)},setFunc:function(J){if(tt&&(J=Wm[J]),q!==J){switch(J){case ca:i.depthFunc(i.NEVER);break;case la:i.depthFunc(i.ALWAYS);break;case ua:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case ha:i.depthFunc(i.EQUAL);break;case fa:i.depthFunc(i.GEQUAL);break;case da:i.depthFunc(i.GREATER);break;case pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}q=J}},setLocked:function(J){A=J},setClear:function(J){V!==J&&(tt&&(J=1-J),i.clearDepth(J),V=J)},reset:function(){A=!1,L=null,q=null,V=null,tt=!1}}}function r(){let A=!1,tt=null,L=null,q=null,V=null,J=null,pt=null,vt=null,At=null;return{setTest:function(It){A||(It?Tt(i.STENCIL_TEST):Vt(i.STENCIL_TEST))},setMask:function(It){tt!==It&&!A&&(i.stencilMask(It),tt=It)},setFunc:function(It,Ft,kt){(L!==It||q!==Ft||V!==kt)&&(i.stencilFunc(It,Ft,kt),L=It,q=Ft,V=kt)},setOp:function(It,Ft,kt){(J!==It||pt!==Ft||vt!==kt)&&(i.stencilOp(It,Ft,kt),J=It,pt=Ft,vt=kt)},setLocked:function(It){A=It},setClear:function(It){At!==It&&(i.clearStencil(It),At=It)},reset:function(){A=!1,tt=null,L=null,q=null,V=null,J=null,pt=null,vt=null,At=null}}}const s=new e,a=new n,o=new r,c=new WeakMap,u=new WeakMap;let l={},f={},d=new WeakMap,p=[],_=null,M=!1,m=null,h=null,C=null,T=null,y=null,G=null,N=null,U=new Ot(0,0,0),X=0,E=!1,S=null,O=null,rt=null,j=null,ct=null;const ut=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ot=!1,dt=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ot=dt>=1):Q.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ot=dt>=2);let yt=null,Ct={};const Bt=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),ue=new ye().fromArray(Bt),st=new ye().fromArray(te);function xt(A,tt,L,q){const V=new Uint8Array(4),J=i.createTexture();i.bindTexture(A,J),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pt=0;pt<L;pt++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,q,0,i.RGBA,i.UNSIGNED_BYTE,V):i.texImage2D(tt+pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,V);return J}const Dt={};Dt[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),Dt[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Dt[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Tt(i.DEPTH_TEST),a.setFunc(Xi),ne(!1),b(ho),Tt(i.CULL_FACE),I(ei);function Tt(A){l[A]!==!0&&(i.enable(A),l[A]=!0)}function Vt(A){l[A]!==!1&&(i.disable(A),l[A]=!1)}function Gt(A,tt){return f[A]!==tt?(i.bindFramebuffer(A,tt),f[A]=tt,A===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=tt),A===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function Lt(A,tt){let L=p,q=!1;if(A){L=d.get(tt),L===void 0&&(L=[],d.set(tt,L));const V=A.textures;if(L.length!==V.length||L[0]!==i.COLOR_ATTACHMENT0){for(let J=0,pt=V.length;J<pt;J++)L[J]=i.COLOR_ATTACHMENT0+J;L.length=V.length,q=!0}}else L[0]!==i.BACK&&(L[0]=i.BACK,q=!0);q&&i.drawBuffers(L)}function ve(A){return _!==A?(i.useProgram(A),_=A,!0):!1}const re={[fi]:i.FUNC_ADD,[Sl]:i.FUNC_SUBTRACT,[yl]:i.FUNC_REVERSE_SUBTRACT};re[El]=i.MIN,re[Tl]=i.MAX;const ge={[bl]:i.ZERO,[Al]:i.ONE,[wl]:i.SRC_COLOR,[aa]:i.SRC_ALPHA,[Il]:i.SRC_ALPHA_SATURATE,[Dl]:i.DST_COLOR,[Cl]:i.DST_ALPHA,[Rl]:i.ONE_MINUS_SRC_COLOR,[oa]:i.ONE_MINUS_SRC_ALPHA,[Ll]:i.ONE_MINUS_DST_COLOR,[Pl]:i.ONE_MINUS_DST_ALPHA,[Ul]:i.CONSTANT_COLOR,[Nl]:i.ONE_MINUS_CONSTANT_COLOR,[Fl]:i.CONSTANT_ALPHA,[Ol]:i.ONE_MINUS_CONSTANT_ALPHA};function I(A,tt,L,q,V,J,pt,vt,At,It){if(A===ei){M===!0&&(Vt(i.BLEND),M=!1);return}if(M===!1&&(Tt(i.BLEND),M=!0),A!==Ml){if(A!==m||It!==E){if((h!==fi||y!==fi)&&(i.blendEquation(i.FUNC_ADD),h=fi,y=fi),It)switch(A){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yt:i.blendFunc(i.ONE,i.ONE);break;case fo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case po:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yt:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case po:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}C=null,T=null,G=null,N=null,U.set(0,0,0),X=0,m=A,E=It}return}V=V||tt,J=J||L,pt=pt||q,(tt!==h||V!==y)&&(i.blendEquationSeparate(re[tt],re[V]),h=tt,y=V),(L!==C||q!==T||J!==G||pt!==N)&&(i.blendFuncSeparate(ge[L],ge[q],ge[J],ge[pt]),C=L,T=q,G=J,N=pt),(vt.equals(U)===!1||At!==X)&&(i.blendColor(vt.r,vt.g,vt.b,At),U.copy(vt),X=At),m=A,E=!1}function Oe(A,tt){A.side===Tn?Vt(i.CULL_FACE):Tt(i.CULL_FACE);let L=A.side===en;tt&&(L=!L),ne(L),A.blending===Gi&&A.transparent===!1?I(ei):I(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),a.setFunc(A.depthFunc),a.setTest(A.depthTest),a.setMask(A.depthWrite),s.setMask(A.colorWrite);const q=A.stencilWrite;o.setTest(q),q&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),z(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Tt(i.SAMPLE_ALPHA_TO_COVERAGE):Vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(A){S!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),S=A)}function b(A){A!==_l?(Tt(i.CULL_FACE),A!==O&&(A===ho?i.cullFace(i.BACK):A===vl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Vt(i.CULL_FACE),O=A}function B(A){A!==rt&&(ot&&i.lineWidth(A),rt=A)}function z(A,tt,L){A?(Tt(i.POLYGON_OFFSET_FILL),(j!==tt||ct!==L)&&(i.polygonOffset(tt,L),j=tt,ct=L)):Vt(i.POLYGON_OFFSET_FILL)}function $(A){A?Tt(i.SCISSOR_TEST):Vt(i.SCISSOR_TEST)}function v(A){A===void 0&&(A=i.TEXTURE0+ut-1),yt!==A&&(i.activeTexture(A),yt=A)}function g(A,tt,L){L===void 0&&(yt===null?L=i.TEXTURE0+ut-1:L=yt);let q=Ct[L];q===void 0&&(q={type:void 0,texture:void 0},Ct[L]=q),(q.type!==A||q.texture!==tt)&&(yt!==L&&(i.activeTexture(L),yt=L),i.bindTexture(A,tt||Dt[A]),q.type=A,q.texture=tt)}function w(){const A=Ct[yt];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function k(){try{i.compressedTexImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Y(){try{i.compressedTexImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function et(){try{i.texSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function mt(){try{i.texStorage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{i.texStorage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function at(){try{i.texImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ft(){try{i.texImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function gt(A){ue.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),ue.copy(A))}function lt(A){st.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),st.copy(A))}function bt(A,tt){let L=u.get(tt);L===void 0&&(L=new WeakMap,u.set(tt,L));let q=L.get(A);q===void 0&&(q=i.getUniformBlockIndex(tt,A.name),L.set(A,q))}function St(A,tt){const q=u.get(tt).get(A);c.get(tt)!==q&&(i.uniformBlockBinding(tt,q,A.__bindingPointIndex),c.set(tt,q))}function Pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},yt=null,Ct={},f={},d=new WeakMap,p=[],_=null,M=!1,m=null,h=null,C=null,T=null,y=null,G=null,N=null,U=new Ot(0,0,0),X=0,E=!1,S=null,O=null,rt=null,j=null,ct=null,ue.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Tt,disable:Vt,bindFramebuffer:Gt,drawBuffers:Lt,useProgram:ve,setBlending:I,setMaterial:Oe,setFlipSided:ne,setCullFace:b,setLineWidth:B,setPolygonOffset:z,setScissorTest:$,activeTexture:v,bindTexture:g,unbindTexture:w,compressedTexImage2D:k,compressedTexImage3D:Y,texImage2D:at,texImage3D:ft,updateUBOMapping:bt,uniformBlockBinding:St,texStorage2D:mt,texStorage3D:Z,texSubImage2D:W,texSubImage3D:et,compressedTexSubImage2D:K,compressedTexSubImage3D:nt,scissor:gt,viewport:lt,reset:Pt}}function qm(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new zt,l=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(v,g){return p?new OffscreenCanvas(v,g):fs("canvas")}function M(v,g,w){let k=1;const Y=$(v);if((Y.width>w||Y.height>w)&&(k=w/Math.max(Y.width,Y.height)),k<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const W=Math.floor(k*Y.width),et=Math.floor(k*Y.height);f===void 0&&(f=_(W,et));const K=g?_(W,et):f;return K.width=W,K.height=et,K.getContext("2d").drawImage(v,0,0,W,et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+W+"x"+et+")."),K}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),v;return v}function m(v){return v.generateMipmaps}function h(v){i.generateMipmap(v)}function C(v){return v.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?i.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(v,g,w,k,Y=!1){if(v!==null){if(i[v]!==void 0)return i[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let W=g;if(g===i.RED&&(w===i.FLOAT&&(W=i.R32F),w===i.HALF_FLOAT&&(W=i.R16F),w===i.UNSIGNED_BYTE&&(W=i.R8)),g===i.RED_INTEGER&&(w===i.UNSIGNED_BYTE&&(W=i.R8UI),w===i.UNSIGNED_SHORT&&(W=i.R16UI),w===i.UNSIGNED_INT&&(W=i.R32UI),w===i.BYTE&&(W=i.R8I),w===i.SHORT&&(W=i.R16I),w===i.INT&&(W=i.R32I)),g===i.RG&&(w===i.FLOAT&&(W=i.RG32F),w===i.HALF_FLOAT&&(W=i.RG16F),w===i.UNSIGNED_BYTE&&(W=i.RG8)),g===i.RG_INTEGER&&(w===i.UNSIGNED_BYTE&&(W=i.RG8UI),w===i.UNSIGNED_SHORT&&(W=i.RG16UI),w===i.UNSIGNED_INT&&(W=i.RG32UI),w===i.BYTE&&(W=i.RG8I),w===i.SHORT&&(W=i.RG16I),w===i.INT&&(W=i.RG32I)),g===i.RGB_INTEGER&&(w===i.UNSIGNED_BYTE&&(W=i.RGB8UI),w===i.UNSIGNED_SHORT&&(W=i.RGB16UI),w===i.UNSIGNED_INT&&(W=i.RGB32UI),w===i.BYTE&&(W=i.RGB8I),w===i.SHORT&&(W=i.RGB16I),w===i.INT&&(W=i.RGB32I)),g===i.RGBA_INTEGER&&(w===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),w===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),w===i.UNSIGNED_INT&&(W=i.RGBA32UI),w===i.BYTE&&(W=i.RGBA8I),w===i.SHORT&&(W=i.RGBA16I),w===i.INT&&(W=i.RGBA32I)),g===i.RGB&&w===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),g===i.RGBA){const et=Y?us:ce.getTransfer(k);w===i.FLOAT&&(W=i.RGBA32F),w===i.HALF_FLOAT&&(W=i.RGBA16F),w===i.UNSIGNED_BYTE&&(W=et===pe?i.SRGB8_ALPHA8:i.RGBA8),w===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),w===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function y(v,g){let w;return v?g===null||g===xi||g===$i?w=i.DEPTH24_STENCIL8:g===Gn?w=i.DEPTH32F_STENCIL8:g===_r&&(w=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===xi||g===$i?w=i.DEPTH_COMPONENT24:g===Gn?w=i.DEPTH_COMPONENT32F:g===_r&&(w=i.DEPTH_COMPONENT16),w}function G(v,g){return m(v)===!0||v.isFramebufferTexture&&v.minFilter!==wn&&v.minFilter!==Ln?Math.log2(Math.max(g.width,g.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?g.mipmaps.length:1}function N(v){const g=v.target;g.removeEventListener("dispose",N),X(g),g.isVideoTexture&&l.delete(g)}function U(v){const g=v.target;g.removeEventListener("dispose",U),S(g)}function X(v){const g=n.get(v);if(g.__webglInit===void 0)return;const w=v.source,k=d.get(w);if(k){const Y=k[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&E(v),Object.keys(k).length===0&&d.delete(w)}n.remove(v)}function E(v){const g=n.get(v);i.deleteTexture(g.__webglTexture);const w=v.source,k=d.get(w);delete k[g.__cacheKey],a.memory.textures--}function S(v){const g=n.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),n.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let Y=0;Y<g.__webglFramebuffer[k].length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[k][Y]);else i.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)i.deleteFramebuffer(g.__webglFramebuffer[k]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const w=v.textures;for(let k=0,Y=w.length;k<Y;k++){const W=n.get(w[k]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(w[k])}n.remove(v)}let O=0;function rt(){O=0}function j(){const v=O;return v>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+r.maxTextures),O+=1,v}function ct(v){const g=[];return g.push(v.wrapS),g.push(v.wrapT),g.push(v.wrapR||0),g.push(v.magFilter),g.push(v.minFilter),g.push(v.anisotropy),g.push(v.internalFormat),g.push(v.format),g.push(v.type),g.push(v.generateMipmaps),g.push(v.premultiplyAlpha),g.push(v.flipY),g.push(v.unpackAlignment),g.push(v.colorSpace),g.join()}function ut(v,g){const w=n.get(v);if(v.isVideoTexture&&B(v),v.isRenderTargetTexture===!1&&v.version>0&&w.__version!==v.version){const k=v.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(w,v,g);return}}e.bindTexture(i.TEXTURE_2D,w.__webglTexture,i.TEXTURE0+g)}function ot(v,g){const w=n.get(v);if(v.version>0&&w.__version!==v.version){st(w,v,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,w.__webglTexture,i.TEXTURE0+g)}function dt(v,g){const w=n.get(v);if(v.version>0&&w.__version!==v.version){st(w,v,g);return}e.bindTexture(i.TEXTURE_3D,w.__webglTexture,i.TEXTURE0+g)}function Q(v,g){const w=n.get(v);if(v.version>0&&w.__version!==v.version){xt(w,v,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+g)}const yt={[_a]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},Ct={[wn]:i.NEAREST,[Yl]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[Es]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},Bt={[jl]:i.NEVER,[ru]:i.ALWAYS,[Ql]:i.LESS,[Gc]:i.LEQUAL,[tu]:i.EQUAL,[iu]:i.GEQUAL,[eu]:i.GREATER,[nu]:i.NOTEQUAL};function te(v,g){if(g.type===Gn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ln||g.magFilter===Es||g.magFilter===Er||g.magFilter===vi||g.minFilter===Ln||g.minFilter===Es||g.minFilter===Er||g.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(v,i.TEXTURE_WRAP_S,yt[g.wrapS]),i.texParameteri(v,i.TEXTURE_WRAP_T,yt[g.wrapT]),(v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY)&&i.texParameteri(v,i.TEXTURE_WRAP_R,yt[g.wrapR]),i.texParameteri(v,i.TEXTURE_MAG_FILTER,Ct[g.magFilter]),i.texParameteri(v,i.TEXTURE_MIN_FILTER,Ct[g.minFilter]),g.compareFunction&&(i.texParameteri(v,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(v,i.TEXTURE_COMPARE_FUNC,Bt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===wn||g.minFilter!==Er&&g.minFilter!==vi||g.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const w=t.get("EXT_texture_filter_anisotropic");i.texParameterf(v,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function ue(v,g){let w=!1;v.__webglInit===void 0&&(v.__webglInit=!0,g.addEventListener("dispose",N));const k=g.source;let Y=d.get(k);Y===void 0&&(Y={},d.set(k,Y));const W=ct(g);if(W!==v.__cacheKey){Y[W]===void 0&&(Y[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,w=!0),Y[W].usedTimes++;const et=Y[v.__cacheKey];et!==void 0&&(Y[v.__cacheKey].usedTimes--,et.usedTimes===0&&E(g)),v.__cacheKey=W,v.__webglTexture=Y[W].texture}return w}function st(v,g,w){let k=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=i.TEXTURE_3D);const Y=ue(v,g),W=g.source;e.bindTexture(k,v.__webglTexture,i.TEXTURE0+w);const et=n.get(W);if(W.version!==et.__version||Y===!0){e.activeTexture(i.TEXTURE0+w);const K=ce.getPrimaries(ce.workingColorSpace),nt=g.colorSpace===ti?null:ce.getPrimaries(g.colorSpace),mt=g.colorSpace===ti||K===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Z=M(g.image,!1,r.maxTextureSize);Z=z(g,Z);const at=s.convert(g.format,g.colorSpace),ft=s.convert(g.type);let gt=T(g.internalFormat,at,ft,g.colorSpace,g.isVideoTexture);te(k,g);let lt;const bt=g.mipmaps,St=g.isVideoTexture!==!0,Pt=et.__version===void 0||Y===!0,A=W.dataReady,tt=G(g,Z);if(g.isDepthTexture)gt=y(g.format===Zi,g.type),Pt&&(St?e.texStorage2D(i.TEXTURE_2D,1,gt,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,gt,Z.width,Z.height,0,at,ft,null));else if(g.isDataTexture)if(bt.length>0){St&&Pt&&e.texStorage2D(i.TEXTURE_2D,tt,gt,bt[0].width,bt[0].height);for(let L=0,q=bt.length;L<q;L++)lt=bt[L],St?A&&e.texSubImage2D(i.TEXTURE_2D,L,0,0,lt.width,lt.height,at,ft,lt.data):e.texImage2D(i.TEXTURE_2D,L,gt,lt.width,lt.height,0,at,ft,lt.data);g.generateMipmaps=!1}else St?(Pt&&e.texStorage2D(i.TEXTURE_2D,tt,gt,Z.width,Z.height),A&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,at,ft,Z.data)):e.texImage2D(i.TEXTURE_2D,0,gt,Z.width,Z.height,0,at,ft,Z.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){St&&Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,tt,gt,bt[0].width,bt[0].height,Z.depth);for(let L=0,q=bt.length;L<q;L++)if(lt=bt[L],g.format!==An)if(at!==null)if(St){if(A)if(g.layerUpdates.size>0){const V=Yo(lt.width,lt.height,g.format,g.type);for(const J of g.layerUpdates){const pt=lt.data.subarray(J*V/lt.data.BYTES_PER_ELEMENT,(J+1)*V/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,L,0,0,J,lt.width,lt.height,1,at,pt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,L,0,0,0,lt.width,lt.height,Z.depth,at,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,L,gt,lt.width,lt.height,Z.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else St?A&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,L,0,0,0,lt.width,lt.height,Z.depth,at,ft,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,L,gt,lt.width,lt.height,Z.depth,0,at,ft,lt.data)}else{St&&Pt&&e.texStorage2D(i.TEXTURE_2D,tt,gt,bt[0].width,bt[0].height);for(let L=0,q=bt.length;L<q;L++)lt=bt[L],g.format!==An?at!==null?St?A&&e.compressedTexSubImage2D(i.TEXTURE_2D,L,0,0,lt.width,lt.height,at,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,L,gt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?A&&e.texSubImage2D(i.TEXTURE_2D,L,0,0,lt.width,lt.height,at,ft,lt.data):e.texImage2D(i.TEXTURE_2D,L,gt,lt.width,lt.height,0,at,ft,lt.data)}else if(g.isDataArrayTexture)if(St){if(Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,tt,gt,Z.width,Z.height,Z.depth),A)if(g.layerUpdates.size>0){const L=Yo(Z.width,Z.height,g.format,g.type);for(const q of g.layerUpdates){const V=Z.data.subarray(q*L/Z.data.BYTES_PER_ELEMENT,(q+1)*L/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,Z.width,Z.height,1,at,ft,V)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,at,ft,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,Z.width,Z.height,Z.depth,0,at,ft,Z.data);else if(g.isData3DTexture)St?(Pt&&e.texStorage3D(i.TEXTURE_3D,tt,gt,Z.width,Z.height,Z.depth),A&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,at,ft,Z.data)):e.texImage3D(i.TEXTURE_3D,0,gt,Z.width,Z.height,Z.depth,0,at,ft,Z.data);else if(g.isFramebufferTexture){if(Pt)if(St)e.texStorage2D(i.TEXTURE_2D,tt,gt,Z.width,Z.height);else{let L=Z.width,q=Z.height;for(let V=0;V<tt;V++)e.texImage2D(i.TEXTURE_2D,V,gt,L,q,0,at,ft,null),L>>=1,q>>=1}}else if(bt.length>0){if(St&&Pt){const L=$(bt[0]);e.texStorage2D(i.TEXTURE_2D,tt,gt,L.width,L.height)}for(let L=0,q=bt.length;L<q;L++)lt=bt[L],St?A&&e.texSubImage2D(i.TEXTURE_2D,L,0,0,at,ft,lt):e.texImage2D(i.TEXTURE_2D,L,gt,at,ft,lt);g.generateMipmaps=!1}else if(St){if(Pt){const L=$(Z);e.texStorage2D(i.TEXTURE_2D,tt,gt,L.width,L.height)}A&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,ft,Z)}else e.texImage2D(i.TEXTURE_2D,0,gt,at,ft,Z);m(g)&&h(k),et.__version=W.version,g.onUpdate&&g.onUpdate(g)}v.__version=g.version}function xt(v,g,w){if(g.image.length!==6)return;const k=ue(v,g),Y=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,v.__webglTexture,i.TEXTURE0+w);const W=n.get(Y);if(Y.version!==W.__version||k===!0){e.activeTexture(i.TEXTURE0+w);const et=ce.getPrimaries(ce.workingColorSpace),K=g.colorSpace===ti?null:ce.getPrimaries(g.colorSpace),nt=g.colorSpace===ti||et===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);const mt=g.isCompressedTexture||g.image[0].isCompressedTexture,Z=g.image[0]&&g.image[0].isDataTexture,at=[];for(let q=0;q<6;q++)!mt&&!Z?at[q]=M(g.image[q],!0,r.maxCubemapSize):at[q]=Z?g.image[q].image:g.image[q],at[q]=z(g,at[q]);const ft=at[0],gt=s.convert(g.format,g.colorSpace),lt=s.convert(g.type),bt=T(g.internalFormat,gt,lt,g.colorSpace),St=g.isVideoTexture!==!0,Pt=W.__version===void 0||k===!0,A=Y.dataReady;let tt=G(g,ft);te(i.TEXTURE_CUBE_MAP,g);let L;if(mt){St&&Pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,bt,ft.width,ft.height);for(let q=0;q<6;q++){L=at[q].mipmaps;for(let V=0;V<L.length;V++){const J=L[V];g.format!==An?gt!==null?St?A&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,V,0,0,J.width,J.height,gt,J.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,V,bt,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):St?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,V,0,0,J.width,J.height,gt,lt,J.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,V,bt,J.width,J.height,0,gt,lt,J.data)}}}else{if(L=g.mipmaps,St&&Pt){L.length>0&&tt++;const q=$(at[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,bt,q.width,q.height)}for(let q=0;q<6;q++)if(Z){St?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,at[q].width,at[q].height,gt,lt,at[q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,bt,at[q].width,at[q].height,0,gt,lt,at[q].data);for(let V=0;V<L.length;V++){const pt=L[V].image[q].image;St?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,V+1,0,0,pt.width,pt.height,gt,lt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,V+1,bt,pt.width,pt.height,0,gt,lt,pt.data)}}else{St?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,gt,lt,at[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,bt,gt,lt,at[q]);for(let V=0;V<L.length;V++){const J=L[V];St?A&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,V+1,0,0,gt,lt,J.image[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,V+1,bt,gt,lt,J.image[q])}}}m(g)&&h(i.TEXTURE_CUBE_MAP),W.__version=Y.version,g.onUpdate&&g.onUpdate(g)}v.__version=g.version}function Dt(v,g,w,k,Y,W){const et=s.convert(w.format,w.colorSpace),K=s.convert(w.type),nt=T(w.internalFormat,et,K,w.colorSpace),mt=n.get(g),Z=n.get(w);if(Z.__renderTarget=g,!mt.__hasExternalTextures){const at=Math.max(1,g.width>>W),ft=Math.max(1,g.height>>W);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,W,nt,at,ft,g.depth,0,et,K,null):e.texImage2D(Y,W,nt,at,ft,0,et,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,v),b(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,Y,Z.__webglTexture,0,ne(g)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,Y,Z.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(v,g,w){if(i.bindRenderbuffer(i.RENDERBUFFER,v),g.depthBuffer){const k=g.depthTexture,Y=k&&k.isDepthTexture?k.type:null,W=y(g.stencilBuffer,Y),et=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=ne(g);b(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,W,g.width,g.height):w?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,W,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,W,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,v)}else{const k=g.textures;for(let Y=0;Y<k.length;Y++){const W=k[Y],et=s.convert(W.format,W.colorSpace),K=s.convert(W.type),nt=T(W.internalFormat,et,K,W.colorSpace),mt=ne(g);w&&b(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,nt,g.width,g.height):b(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,nt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,nt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Vt(v,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,v),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=n.get(g.depthTexture);k.__renderTarget=g,(!k.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ut(g.depthTexture,0);const Y=k.__webglTexture,W=ne(g);if(g.depthTexture.format===ki)b(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(g.depthTexture.format===Zi)b(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Gt(v){const g=n.get(v),w=v.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==v.depthTexture){const k=v.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){const Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",Y)};k.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=k}if(v.depthTexture&&!g.__autoAllocateDepthBuffer){if(w)throw new Error("target.depthTexture not supported in Cube render targets");Vt(g.__webglFramebuffer,v)}else if(w){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=i.createRenderbuffer(),Tt(g.__webglDepthbuffer[k],v,!1);else{const Y=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Tt(g.__webglDepthbuffer,v,!1);else{const k=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,Y)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(v,g,w){const k=n.get(v);g!==void 0&&Dt(k.__webglFramebuffer,v,v.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),w!==void 0&&Gt(v)}function ve(v){const g=v.texture,w=n.get(v),k=n.get(g);v.addEventListener("dispose",U);const Y=v.textures,W=v.isWebGLCubeRenderTarget===!0,et=Y.length>1;if(et||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=g.version,a.memory.textures++),W){w.__webglFramebuffer=[];for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0){w.__webglFramebuffer[K]=[];for(let nt=0;nt<g.mipmaps.length;nt++)w.__webglFramebuffer[K][nt]=i.createFramebuffer()}else w.__webglFramebuffer[K]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){w.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)w.__webglFramebuffer[K]=i.createFramebuffer()}else w.__webglFramebuffer=i.createFramebuffer();if(et)for(let K=0,nt=Y.length;K<nt;K++){const mt=n.get(Y[K]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(v.samples>0&&b(v)===!1){w.__webglMultisampledFramebuffer=i.createFramebuffer(),w.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){const nt=Y[K];w.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,w.__webglColorRenderbuffer[K]);const mt=s.convert(nt.format,nt.colorSpace),Z=s.convert(nt.type),at=T(nt.internalFormat,mt,Z,nt.colorSpace,v.isXRRenderTarget===!0),ft=ne(v);i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,at,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,w.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),v.depthBuffer&&(w.__webglDepthRenderbuffer=i.createRenderbuffer(),Tt(w.__webglDepthRenderbuffer,v,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),te(i.TEXTURE_CUBE_MAP,g);for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0)for(let nt=0;nt<g.mipmaps.length;nt++)Dt(w.__webglFramebuffer[K][nt],v,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt);else Dt(w.__webglFramebuffer[K],v,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(g)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){for(let K=0,nt=Y.length;K<nt;K++){const mt=Y[K],Z=n.get(mt);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture),te(i.TEXTURE_2D,mt),Dt(w.__webglFramebuffer,v,mt,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,0),m(mt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(K=v.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,k.__webglTexture),te(K,g),g.mipmaps&&g.mipmaps.length>0)for(let nt=0;nt<g.mipmaps.length;nt++)Dt(w.__webglFramebuffer[nt],v,g,i.COLOR_ATTACHMENT0,K,nt);else Dt(w.__webglFramebuffer,v,g,i.COLOR_ATTACHMENT0,K,0);m(g)&&h(K),e.unbindTexture()}v.depthBuffer&&Gt(v)}function re(v){const g=v.textures;for(let w=0,k=g.length;w<k;w++){const Y=g[w];if(m(Y)){const W=C(v),et=n.get(Y).__webglTexture;e.bindTexture(W,et),h(W),e.unbindTexture()}}}const ge=[],I=[];function Oe(v){if(v.samples>0){if(b(v)===!1){const g=v.textures,w=v.width,k=v.height;let Y=i.COLOR_BUFFER_BIT;const W=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=n.get(v),K=g.length>1;if(K)for(let nt=0;nt<g.length;nt++)e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let nt=0;nt<g.length;nt++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,et.__webglColorRenderbuffer[nt]);const mt=n.get(g[nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,w,k,0,0,w,k,Y,i.NEAREST),c===!0&&(ge.length=0,I.length=0,ge.push(i.COLOR_ATTACHMENT0+nt),v.depthBuffer&&v.resolveDepthBuffer===!1&&(ge.push(W),I.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let nt=0;nt<g.length;nt++){e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,et.__webglColorRenderbuffer[nt]);const mt=n.get(g[nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&c){const g=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ne(v){return Math.min(r.maxSamples,v.samples)}function b(v){const g=n.get(v);return v.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function B(v){const g=a.render.frame;l.get(v)!==g&&(l.set(v,g),v.update())}function z(v,g){const w=v.colorSpace,k=v.format,Y=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||w!==Ki&&w!==ti&&(ce.getTransfer(w)===pe?(k!==An||Y!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",w)),g}function $(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(u.width=v.naturalWidth||v.width,u.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(u.width=v.displayWidth,u.height=v.displayHeight):(u.width=v.width,u.height=v.height),u}this.allocateTextureUnit=j,this.resetTextureUnits=rt,this.setTexture2D=ut,this.setTexture2DArray=ot,this.setTexture3D=dt,this.setTextureCube=Q,this.rebindTextures=Lt,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=b}function Ym(i,t){function e(n,r=ti){let s;const a=ce.getTransfer(r);if(n===qn)return i.UNSIGNED_BYTE;if(n===ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lc)return i.BYTE;if(n===Ic)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===Ja)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===xr)return i.HALF_FLOAT;if(n===Nc)return i.ALPHA;if(n===Fc)return i.RGB;if(n===An)return i.RGBA;if(n===Oc)return i.LUMINANCE;if(n===Bc)return i.LUMINANCE_ALPHA;if(n===ki)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===zc)return i.RED;if(n===to)return i.RED_INTEGER;if(n===Vc)return i.RG;if(n===eo)return i.RG_INTEGER;if(n===no)return i.RGBA_INTEGER;if(n===ns||n===is||n===rs||n===ss)if(a===pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ns)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ns)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xa||n===Ma||n===Sa||n===ya)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ya)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===Ta||n===ba)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ea||n===Ta)return a===pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ba)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Aa||n===wa||n===Ra||n===Ca||n===Pa||n===Da||n===La||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Aa)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wa)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ra)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ca)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pa)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Da)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===La)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ia)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ua)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Na)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fa)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oa)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ba)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===za)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===as||n===Va||n===Ha)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===as)return a===pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hc||n===Ga||n===ka||n===Wa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===as)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ka)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const $m={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),h=this._getHandJoint(u,M);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const l=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=l.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($m)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Zm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Km=`
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

}`;class Jm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new je,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new un({vertexShader:Zm,fragmentShader:Km,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new Ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jm extends ji{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,l=null,f=null,d=null,p=null,_=null;const M=new Jm,m=e.getContextAttributes();let h=null,C=null;const T=[],y=[],G=new zt;let N=null;const U=new gn;U.viewport=new ye;const X=new gn;X.viewport=new ye;const E=[U,X],S=new _h;let O=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let xt=T[st];return xt===void 0&&(xt=new ea,T[st]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(st){let xt=T[st];return xt===void 0&&(xt=new ea,T[st]=xt),xt.getGripSpace()},this.getHand=function(st){let xt=T[st];return xt===void 0&&(xt=new ea,T[st]=xt),xt.getHandSpace()};function j(st){const xt=y.indexOf(st.inputSource);if(xt===-1)return;const Dt=T[xt];Dt!==void 0&&(Dt.update(st.inputSource,st.frame,u||a),Dt.dispatchEvent({type:st.type,data:st.inputSource}))}function ct(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",ct),r.removeEventListener("inputsourceschange",ut);for(let st=0;st<T.length;st++){const xt=y[st];xt!==null&&(y[st]=null,T[st].disconnect(xt))}O=null,rt=null,M.reset(),t.setRenderTarget(h),p=null,d=null,f=null,r=null,C=null,ue.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(G.width,G.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){s=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){o=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(st){u=st},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(st){if(r=st,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",ct),r.addEventListener("inputsourceschange",ut),m.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(G),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let Dt=null,Tt=null,Vt=null;m.depth&&(Vt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Dt=m.stencil?Zi:ki,Tt=m.stencil?$i:xi);const Gt={colorFormat:e.RGBA8,depthFormat:Vt,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(Gt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),C=new Mi(d.textureWidth,d.textureHeight,{format:An,type:qn,depthTexture:new el(d.textureWidth,d.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const Dt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,Dt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new Mi(p.framebufferWidth,p.framebufferHeight,{format:An,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}C.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ut(st){for(let xt=0;xt<st.removed.length;xt++){const Dt=st.removed[xt],Tt=y.indexOf(Dt);Tt>=0&&(y[Tt]=null,T[Tt].disconnect(Dt))}for(let xt=0;xt<st.added.length;xt++){const Dt=st.added[xt];let Tt=y.indexOf(Dt);if(Tt===-1){for(let Gt=0;Gt<T.length;Gt++)if(Gt>=y.length){y.push(Dt),Tt=Gt;break}else if(y[Gt]===null){y[Gt]=Dt,Tt=Gt;break}if(Tt===-1)break}const Vt=T[Tt];Vt&&Vt.connect(Dt)}}const ot=new R,dt=new R;function Q(st,xt,Dt){ot.setFromMatrixPosition(xt.matrixWorld),dt.setFromMatrixPosition(Dt.matrixWorld);const Tt=ot.distanceTo(dt),Vt=xt.projectionMatrix.elements,Gt=Dt.projectionMatrix.elements,Lt=Vt[14]/(Vt[10]-1),ve=Vt[14]/(Vt[10]+1),re=(Vt[9]+1)/Vt[5],ge=(Vt[9]-1)/Vt[5],I=(Vt[8]-1)/Vt[0],Oe=(Gt[8]+1)/Gt[0],ne=Lt*I,b=Lt*Oe,B=Tt/(-I+Oe),z=B*-I;if(xt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(z),st.translateZ(B),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Vt[10]===-1)st.projectionMatrix.copy(xt.projectionMatrix),st.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const $=Lt+B,v=ve+B,g=ne-z,w=b+(Tt-z),k=re*ve/v*$,Y=ge*ve/v*$;st.projectionMatrix.makePerspective(g,w,k,Y,$,v),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function yt(st,xt){xt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(xt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(r===null)return;let xt=st.near,Dt=st.far;M.texture!==null&&(M.depthNear>0&&(xt=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),S.near=X.near=U.near=xt,S.far=X.far=U.far=Dt,(O!==S.near||rt!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),O=S.near,rt=S.far),U.layers.mask=st.layers.mask|2,X.layers.mask=st.layers.mask|4,S.layers.mask=U.layers.mask|X.layers.mask;const Tt=st.parent,Vt=S.cameras;yt(S,Tt);for(let Gt=0;Gt<Vt.length;Gt++)yt(Vt[Gt],Tt);Vt.length===2?Q(S,U,X):S.projectionMatrix.copy(U.projectionMatrix),Ct(st,S,Tt)};function Ct(st,xt,Dt){Dt===null?st.matrix.copy(xt.matrixWorld):(st.matrix.copy(Dt.matrixWorld),st.matrix.invert(),st.matrix.multiply(xt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(xt.projectionMatrix),st.projectionMatrixInverse.copy(xt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=vr*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(st){c=st,d!==null&&(d.fixedFoveation=st),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=st)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(S)};let Bt=null;function te(st,xt){if(l=xt.getViewerPose(u||a),_=xt,l!==null){const Dt=l.views;p!==null&&(t.setRenderTargetFramebuffer(C,p.framebuffer),t.setRenderTarget(C));let Tt=!1;Dt.length!==S.cameras.length&&(S.cameras.length=0,Tt=!0);for(let Gt=0;Gt<Dt.length;Gt++){const Lt=Dt[Gt];let ve=null;if(p!==null)ve=p.getViewport(Lt);else{const ge=f.getViewSubImage(d,Lt);ve=ge.viewport,Gt===0&&(t.setRenderTargetTextures(C,ge.colorTexture,d.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(C))}let re=E[Gt];re===void 0&&(re=new gn,re.layers.enable(Gt),re.viewport=new ye,E[Gt]=re),re.matrix.fromArray(Lt.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Lt.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ve.x,ve.y,ve.width,ve.height),Gt===0&&(S.matrix.copy(re.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Tt===!0&&S.cameras.push(re)}const Vt=r.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")){const Gt=f.getDepthInformation(Dt[0]);Gt&&Gt.isValid&&Gt.texture&&M.init(t,Gt,r.renderState)}}for(let Dt=0;Dt<T.length;Dt++){const Tt=y[Dt],Vt=T[Dt];Tt!==null&&Vt!==void 0&&Vt.update(Tt,xt,u||a)}Bt&&Bt(st,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),_=null}const ue=new sl;ue.setAnimationLoop(te),this.setAnimationLoop=function(st){Bt=st},this.dispose=function(){}}}const li=new Yn,Qm=new Me;function tg(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Kc(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,C,T,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),l(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),M(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,C,T):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===en&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===en&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const C=t.get(h),T=C.envMap,y=C.envMapRotation;T&&(m.envMap.value=T,li.copy(y),li.x*=-1,li.y*=-1,li.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),m.envMapRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(li)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,C,T){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*C,m.scale.value=T*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,C){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===en&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function M(m,h){const C=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function eg(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,T){const y=T.program;n.uniformBlockBinding(C,y)}function u(C,T){let y=r[C.id];y===void 0&&(_(C),y=l(C),r[C.id]=y,C.addEventListener("dispose",m));const G=T.program;n.updateUBOMapping(C,G);const N=t.render.frame;s[C.id]!==N&&(d(C),s[C.id]=N)}function l(C){const T=f();C.__bindingPointIndex=T;const y=i.createBuffer(),G=C.__size,N=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,G,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function f(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){const T=r[C.id],y=C.uniforms,G=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let N=0,U=y.length;N<U;N++){const X=Array.isArray(y[N])?y[N]:[y[N]];for(let E=0,S=X.length;E<S;E++){const O=X[E];if(p(O,N,E,G)===!0){const rt=O.__offset,j=Array.isArray(O.value)?O.value:[O.value];let ct=0;for(let ut=0;ut<j.length;ut++){const ot=j[ut],dt=M(ot);typeof ot=="number"||typeof ot=="boolean"?(O.__data[0]=ot,i.bufferSubData(i.UNIFORM_BUFFER,rt+ct,O.__data)):ot.isMatrix3?(O.__data[0]=ot.elements[0],O.__data[1]=ot.elements[1],O.__data[2]=ot.elements[2],O.__data[3]=0,O.__data[4]=ot.elements[3],O.__data[5]=ot.elements[4],O.__data[6]=ot.elements[5],O.__data[7]=0,O.__data[8]=ot.elements[6],O.__data[9]=ot.elements[7],O.__data[10]=ot.elements[8],O.__data[11]=0):(ot.toArray(O.__data,ct),ct+=dt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,rt,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(C,T,y,G){const N=C.value,U=T+"_"+y;if(G[U]===void 0)return typeof N=="number"||typeof N=="boolean"?G[U]=N:G[U]=N.clone(),!0;{const X=G[U];if(typeof N=="number"||typeof N=="boolean"){if(X!==N)return G[U]=N,!0}else if(X.equals(N)===!1)return X.copy(N),!0}return!1}function _(C){const T=C.uniforms;let y=0;const G=16;for(let U=0,X=T.length;U<X;U++){const E=Array.isArray(T[U])?T[U]:[T[U]];for(let S=0,O=E.length;S<O;S++){const rt=E[S],j=Array.isArray(rt.value)?rt.value:[rt.value];for(let ct=0,ut=j.length;ct<ut;ct++){const ot=j[ct],dt=M(ot),Q=y%G,yt=Q%dt.boundary,Ct=Q+yt;y+=yt,Ct!==0&&G-Ct<dt.storage&&(y+=G-Ct),rt.__data=new Float32Array(dt.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=y,y+=dt.storage}}}const N=y%G;return N>0&&(y+=G-N),C.__size=y,C.__cache={},this}function M(C){const T={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(T.boundary=4,T.storage=4):C.isVector2?(T.boundary=8,T.storage=8):C.isVector3||C.isColor?(T.boundary=16,T.storage=12):C.isVector4?(T.boundary=16,T.storage=16):C.isMatrix3?(T.boundary=48,T.storage=48):C.isMatrix4?(T.boundary=64,T.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),T}function m(C){const T=C.target;T.removeEventListener("dispose",m);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const C in r)i.deleteBuffer(r[C]);a=[],r={},s={}}return{bind:c,update:u,dispose:h}}class ng{constructor(t={}){const{canvas:e=Su(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),M=new Int32Array(4);let m=null,h=null;const C=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=ni,this.toneMappingExposure=1;const y=this;let G=!1,N=0,U=0,X=null,E=-1,S=null;const O=new ye,rt=new ye;let j=null;const ct=new Ot(0);let ut=0,ot=e.width,dt=e.height,Q=1,yt=null,Ct=null;const Bt=new ye(0,0,ot,dt),te=new ye(0,0,ot,dt);let ue=!1;const st=new tl;let xt=!1,Dt=!1;this.transmissionResolutionScale=1;const Tt=new Me,Vt=new Me,Gt=new R,Lt=new ye,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function ge(){return X===null?Q:1}let I=n;function Oe(x,D){return e.getContext(x,D)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ka}`),e.addEventListener("webglcontextlost",q,!1),e.addEventListener("webglcontextrestored",V,!1),e.addEventListener("webglcontextcreationerror",J,!1),I===null){const D="webgl2";if(I=Oe(D,x),I===null)throw Oe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ne,b,B,z,$,v,g,w,k,Y,W,et,K,nt,mt,Z,at,ft,gt,lt,bt,St,Pt,A;function tt(){ne=new hp(I),ne.init(),St=new Ym(I,ne),b=new sp(I,ne,t,St),B=new Xm(I,ne),b.reverseDepthBuffer&&d&&B.buffers.depth.setReversed(!0),z=new pp(I),$=new Lm,v=new qm(I,ne,B,$,b,St,z),g=new op(y),w=new up(y),k=new Mh(I),Pt=new ip(I,k),Y=new fp(I,k,z,Pt),W=new gp(I,Y,k,z),gt=new mp(I,b,v),Z=new ap($),et=new Dm(y,g,w,ne,b,Pt,Z),K=new tg(y,$),nt=new Um,mt=new Vm(ne),ft=new np(y,g,w,B,W,p,c),at=new km(y,W,b),A=new eg(I,z,b,B),lt=new rp(I,ne,z),bt=new dp(I,ne,z),z.programs=et.programs,y.capabilities=b,y.extensions=ne,y.properties=$,y.renderLists=nt,y.shadowMap=at,y.state=B,y.info=z}tt();const L=new jm(y,I);this.xr=L,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=ne.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ne.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(x){x!==void 0&&(Q=x,this.setSize(ot,dt,!1))},this.getSize=function(x){return x.set(ot,dt)},this.setSize=function(x,D,P=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=x,dt=D,e.width=Math.floor(x*Q),e.height=Math.floor(D*Q),P===!0&&(e.style.width=x+"px",e.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(ot*Q,dt*Q).floor()},this.setDrawingBufferSize=function(x,D,P){ot=x,dt=D,Q=P,e.width=Math.floor(x*P),e.height=Math.floor(D*P),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(O)},this.getViewport=function(x){return x.copy(Bt)},this.setViewport=function(x,D,P,H){x.isVector4?Bt.set(x.x,x.y,x.z,x.w):Bt.set(x,D,P,H),B.viewport(O.copy(Bt).multiplyScalar(Q).round())},this.getScissor=function(x){return x.copy(te)},this.setScissor=function(x,D,P,H){x.isVector4?te.set(x.x,x.y,x.z,x.w):te.set(x,D,P,H),B.scissor(rt.copy(te).multiplyScalar(Q).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(x){B.setScissorTest(ue=x)},this.setOpaqueSort=function(x){yt=x},this.setTransparentSort=function(x){Ct=x},this.getClearColor=function(x){return x.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor.apply(ft,arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha.apply(ft,arguments)},this.clear=function(x=!0,D=!0,P=!0){let H=0;if(x){let F=!1;if(X!==null){const it=X.texture.format;F=it===no||it===eo||it===to}if(F){const it=X.texture.type,ht=it===qn||it===xi||it===_r||it===$i||it===ja||it===Qa,_t=ft.getClearColor(),Mt=ft.getClearAlpha(),Ut=_t.r,Nt=_t.g,wt=_t.b;ht?(_[0]=Ut,_[1]=Nt,_[2]=wt,_[3]=Mt,I.clearBufferuiv(I.COLOR,0,_)):(M[0]=Ut,M[1]=Nt,M[2]=wt,M[3]=Mt,I.clearBufferiv(I.COLOR,0,M))}else H|=I.COLOR_BUFFER_BIT}D&&(H|=I.DEPTH_BUFFER_BIT),P&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",q,!1),e.removeEventListener("webglcontextrestored",V,!1),e.removeEventListener("webglcontextcreationerror",J,!1),ft.dispose(),nt.dispose(),mt.dispose(),$.dispose(),g.dispose(),w.dispose(),W.dispose(),Pt.dispose(),A.dispose(),et.dispose(),L.dispose(),L.removeEventListener("sessionstart",Jt),L.removeEventListener("sessionend",fe),se.stop()};function q(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const x=z.autoReset,D=at.enabled,P=at.autoUpdate,H=at.needsUpdate,F=at.type;tt(),z.autoReset=x,at.enabled=D,at.autoUpdate=P,at.needsUpdate=H,at.type=F}function J(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function pt(x){const D=x.target;D.removeEventListener("dispose",pt),vt(D)}function vt(x){At(x),$.remove(x)}function At(x){const D=$.get(x).programs;D!==void 0&&(D.forEach(function(P){et.releaseProgram(P)}),x.isShaderMaterial&&et.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,P,H,F,it){D===null&&(D=ve);const ht=F.isMesh&&F.matrixWorld.determinant()<0,_t=fn(x,D,P,H,F);B.setMaterial(H,ht);let Mt=P.index,Ut=1;if(H.wireframe===!0){if(Mt=Y.getWireframeAttribute(P),Mt===void 0)return;Ut=2}const Nt=P.drawRange,wt=P.attributes.position;let Wt=Nt.start*Ut,jt=(Nt.start+Nt.count)*Ut;it!==null&&(Wt=Math.max(Wt,it.start*Ut),jt=Math.min(jt,(it.start+it.count)*Ut)),Mt!==null?(Wt=Math.max(Wt,0),jt=Math.min(jt,Mt.count)):wt!=null&&(Wt=Math.max(Wt,0),jt=Math.min(jt,wt.count));const le=jt-Wt;if(le<0||le===1/0)return;Pt.setup(F,H,_t,P,Mt);let de,Ht=lt;if(Mt!==null&&(de=k.get(Mt),Ht=bt,Ht.setIndex(de)),F.isMesh)H.wireframe===!0?(B.setLineWidth(H.wireframeLinewidth*ge()),Ht.setMode(I.LINES)):Ht.setMode(I.TRIANGLES);else if(F.isLine){let Rt=H.linewidth;Rt===void 0&&(Rt=1),B.setLineWidth(Rt*ge()),F.isLineSegments?Ht.setMode(I.LINES):F.isLineLoop?Ht.setMode(I.LINE_LOOP):Ht.setMode(I.LINE_STRIP)}else F.isPoints?Ht.setMode(I.POINTS):F.isSprite&&Ht.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ht.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))Ht.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Rt=F._multiDrawStarts,_e=F._multiDrawCounts,ie=F._multiDrawCount,Ce=Mt?k.get(Mt).bytesPerElement:1,dn=$.get(H).currentProgram.getUniforms();for(let Be=0;Be<ie;Be++)dn.setValue(I,"_gl_DrawID",Be),Ht.render(Rt[Be]/Ce,_e[Be])}else if(F.isInstancedMesh)Ht.renderInstances(Wt,le,F.count);else if(P.isInstancedBufferGeometry){const Rt=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,_e=Math.min(P.instanceCount,Rt);Ht.renderInstances(Wt,le,_e)}else Ht.render(Wt,le)};function It(x,D,P){x.transparent===!0&&x.side===Tn&&x.forceSinglePass===!1?(x.side=en,x.needsUpdate=!0,vn(x,D,P),x.side=ii,x.needsUpdate=!0,vn(x,D,P),x.side=Tn):vn(x,D,P)}this.compile=function(x,D,P=null){P===null&&(P=x),h=mt.get(P),h.init(D),T.push(h),P.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),x!==P&&x.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const H=new Set;return x.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const it=F.material;if(it)if(Array.isArray(it))for(let ht=0;ht<it.length;ht++){const _t=it[ht];It(_t,P,F),H.add(_t)}else It(it,P,F),H.add(it)}),T.pop(),h=null,H},this.compileAsync=function(x,D,P=null){const H=this.compile(x,D,P);return new Promise(F=>{function it(){if(H.forEach(function(ht){$.get(ht).currentProgram.isReady()&&H.delete(ht)}),H.size===0){F(x);return}setTimeout(it,10)}ne.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Ft=null;function kt(x){Ft&&Ft(x)}function Jt(){se.stop()}function fe(){se.start()}const se=new sl;se.setAnimationLoop(kt),typeof self<"u"&&se.setContext(self),this.setAnimationLoop=function(x){Ft=x,L.setAnimationLoop(x),x===null?se.stop():se.start()},L.addEventListener("sessionstart",Jt),L.addEventListener("sessionend",fe),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(D),D=L.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,D,X),h=mt.get(x,T.length),h.init(D),T.push(h),Vt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),st.setFromProjectionMatrix(Vt),Dt=this.localClippingEnabled,xt=Z.init(this.clippingPlanes,Dt),m=nt.get(x,C.length),m.init(),C.push(m),L.enabled===!0&&L.isPresenting===!0){const it=y.xr.getDepthSensingMesh();it!==null&&oe(it,D,-1/0,y.sortObjects)}oe(x,D,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(yt,Ct),re=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,re&&ft.addToRenderList(m,x),this.info.render.frame++,xt===!0&&Z.beginShadows();const P=h.state.shadowsArray;at.render(P,x,D),xt===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(h.setupLights(),D.isArrayCamera){const it=D.cameras;if(F.length>0)for(let ht=0,_t=it.length;ht<_t;ht++){const Mt=it[ht];nn(H,F,x,Mt)}re&&ft.render(x);for(let ht=0,_t=it.length;ht<_t;ht++){const Mt=it[ht];Re(m,x,Mt,Mt.viewport)}}else F.length>0&&nn(H,F,x,D),re&&ft.render(x),Re(m,x,D);X!==null&&U===0&&(v.updateMultisampleRenderTarget(X),v.updateRenderTargetMipmap(X)),x.isScene===!0&&x.onAfterRender(y,x,D),Pt.resetDefaultState(),E=-1,S=null,T.pop(),T.length>0?(h=T[T.length-1],xt===!0&&Z.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function oe(x,D,P,H){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)P=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||st.intersectsSprite(x)){H&&Lt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Vt);const ht=W.update(x),_t=x.material;_t.visible&&m.push(x,ht,_t,P,Lt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||st.intersectsObject(x))){const ht=W.update(x),_t=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Lt.copy(x.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Lt.copy(ht.boundingSphere.center)),Lt.applyMatrix4(x.matrixWorld).applyMatrix4(Vt)),Array.isArray(_t)){const Mt=ht.groups;for(let Ut=0,Nt=Mt.length;Ut<Nt;Ut++){const wt=Mt[Ut],Wt=_t[wt.materialIndex];Wt&&Wt.visible&&m.push(x,ht,Wt,P,Lt.z,wt)}}else _t.visible&&m.push(x,ht,_t,P,Lt.z,null)}}const it=x.children;for(let ht=0,_t=it.length;ht<_t;ht++)oe(it[ht],D,P,H)}function Re(x,D,P,H){const F=x.opaque,it=x.transmissive,ht=x.transparent;h.setupLightsView(P),xt===!0&&Z.setGlobalState(y.clippingPlanes,P),H&&B.viewport(O.copy(H)),F.length>0&&rn(F,D,P),it.length>0&&rn(it,D,P),ht.length>0&&rn(ht,D,P),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function nn(x,D,P,H){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[H.id]===void 0&&(h.state.transmissionRenderTarget[H.id]=new Mi(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?xr:qn,minFilter:vi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const it=h.state.transmissionRenderTarget[H.id],ht=H.viewport||O;it.setSize(ht.z*y.transmissionResolutionScale,ht.w*y.transmissionResolutionScale);const _t=y.getRenderTarget();y.setRenderTarget(it),y.getClearColor(ct),ut=y.getClearAlpha(),ut<1&&y.setClearColor(16777215,.5),y.clear(),re&&ft.render(P);const Mt=y.toneMapping;y.toneMapping=ni;const Ut=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),h.setupLightsView(H),xt===!0&&Z.setGlobalState(y.clippingPlanes,H),rn(x,P,H),v.updateMultisampleRenderTarget(it),v.updateRenderTargetMipmap(it),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let wt=0,Wt=D.length;wt<Wt;wt++){const jt=D[wt],le=jt.object,de=jt.geometry,Ht=jt.material,Rt=jt.group;if(Ht.side===Tn&&le.layers.test(H.layers)){const _e=Ht.side;Ht.side=en,Ht.needsUpdate=!0,ke(le,P,H,de,Ht,Rt),Ht.side=_e,Ht.needsUpdate=!0,Nt=!0}}Nt===!0&&(v.updateMultisampleRenderTarget(it),v.updateRenderTargetMipmap(it))}y.setRenderTarget(_t),y.setClearColor(ct,ut),Ut!==void 0&&(H.viewport=Ut),y.toneMapping=Mt}function rn(x,D,P){const H=D.isScene===!0?D.overrideMaterial:null;for(let F=0,it=x.length;F<it;F++){const ht=x[F],_t=ht.object,Mt=ht.geometry,Ut=H===null?ht.material:H,Nt=ht.group;_t.layers.test(P.layers)&&ke(_t,D,P,Mt,Ut,Nt)}}function ke(x,D,P,H,F,it){x.onBeforeRender(y,D,P,H,F,it),x.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),F.onBeforeRender(y,D,P,H,x,it),F.transparent===!0&&F.side===Tn&&F.forceSinglePass===!1?(F.side=en,F.needsUpdate=!0,y.renderBufferDirect(P,D,H,F,x,it),F.side=ii,F.needsUpdate=!0,y.renderBufferDirect(P,D,H,F,x,it),F.side=Tn):y.renderBufferDirect(P,D,H,F,x,it),x.onAfterRender(y,D,P,H,F,it)}function vn(x,D,P){D.isScene!==!0&&(D=ve);const H=$.get(x),F=h.state.lights,it=h.state.shadowsArray,ht=F.state.version,_t=et.getParameters(x,F.state,it,D,P),Mt=et.getProgramCacheKey(_t);let Ut=H.programs;H.environment=x.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(x.isMeshStandardMaterial?w:g).get(x.envMap||H.environment),H.envMapRotation=H.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Ut===void 0&&(x.addEventListener("dispose",pt),Ut=new Map,H.programs=Ut);let Nt=Ut.get(Mt);if(Nt!==void 0){if(H.currentProgram===Nt&&H.lightsStateVersion===ht)return sn(x,_t),Nt}else _t.uniforms=et.getUniforms(x),x.onBeforeCompile(_t,y),Nt=et.acquireProgram(_t,Mt),Ut.set(Mt,Nt),H.uniforms=_t.uniforms;const wt=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(wt.clippingPlanes=Z.uniform),sn(x,_t),H.needsLights=Te(x),H.lightsStateVersion=ht,H.needsLights&&(wt.ambientLightColor.value=F.state.ambient,wt.lightProbe.value=F.state.probe,wt.directionalLights.value=F.state.directional,wt.directionalLightShadows.value=F.state.directionalShadow,wt.spotLights.value=F.state.spot,wt.spotLightShadows.value=F.state.spotShadow,wt.rectAreaLights.value=F.state.rectArea,wt.ltc_1.value=F.state.rectAreaLTC1,wt.ltc_2.value=F.state.rectAreaLTC2,wt.pointLights.value=F.state.point,wt.pointLightShadows.value=F.state.pointShadow,wt.hemisphereLights.value=F.state.hemi,wt.directionalShadowMap.value=F.state.directionalShadowMap,wt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,wt.spotShadowMap.value=F.state.spotShadowMap,wt.spotLightMatrix.value=F.state.spotLightMatrix,wt.spotLightMap.value=F.state.spotLightMap,wt.pointShadowMap.value=F.state.pointShadowMap,wt.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Nt,H.uniformsList=null,Nt}function hn(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=os.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function sn(x,D){const P=$.get(x);P.outputColorSpace=D.outputColorSpace,P.batching=D.batching,P.batchingColor=D.batchingColor,P.instancing=D.instancing,P.instancingColor=D.instancingColor,P.instancingMorph=D.instancingMorph,P.skinning=D.skinning,P.morphTargets=D.morphTargets,P.morphNormals=D.morphNormals,P.morphColors=D.morphColors,P.morphTargetsCount=D.morphTargetsCount,P.numClippingPlanes=D.numClippingPlanes,P.numIntersection=D.numClipIntersection,P.vertexAlphas=D.vertexAlphas,P.vertexTangents=D.vertexTangents,P.toneMapping=D.toneMapping}function fn(x,D,P,H,F){D.isScene!==!0&&(D=ve),v.resetTextureUnits();const it=D.fog,ht=H.isMeshStandardMaterial?D.environment:null,_t=X===null?y.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ki,Mt=(H.isMeshStandardMaterial?w:g).get(H.envMap||ht),Ut=H.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,Nt=!!P.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),wt=!!P.morphAttributes.position,Wt=!!P.morphAttributes.normal,jt=!!P.morphAttributes.color;let le=ni;H.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(le=y.toneMapping);const de=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Ht=de!==void 0?de.length:0,Rt=$.get(H),_e=h.state.lights;if(xt===!0&&(Dt===!0||x!==S)){const Le=x===S&&H.id===E;Z.setState(H,x,Le)}let ie=!1;H.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==_e.state.version||Rt.outputColorSpace!==_t||F.isBatchedMesh&&Rt.batching===!1||!F.isBatchedMesh&&Rt.batching===!0||F.isBatchedMesh&&Rt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Rt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Rt.instancing===!1||!F.isInstancedMesh&&Rt.instancing===!0||F.isSkinnedMesh&&Rt.skinning===!1||!F.isSkinnedMesh&&Rt.skinning===!0||F.isInstancedMesh&&Rt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Rt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Rt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Rt.instancingMorph===!1&&F.morphTexture!==null||Rt.envMap!==Mt||H.fog===!0&&Rt.fog!==it||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Z.numPlanes||Rt.numIntersection!==Z.numIntersection)||Rt.vertexAlphas!==Ut||Rt.vertexTangents!==Nt||Rt.morphTargets!==wt||Rt.morphNormals!==Wt||Rt.morphColors!==jt||Rt.toneMapping!==le||Rt.morphTargetsCount!==Ht)&&(ie=!0):(ie=!0,Rt.__version=H.version);let Ce=Rt.currentProgram;ie===!0&&(Ce=vn(H,D,F));let dn=!1,Be=!1,De=!1;const me=Ce.getUniforms(),Xe=Rt.uniforms;if(B.useProgram(Ce.program)&&(dn=!0,Be=!0,De=!0),H.id!==E&&(E=H.id,Be=!0),dn||S!==x){B.buffers.depth.getReversed()?(Tt.copy(x.projectionMatrix),Eu(Tt),Tu(Tt),me.setValue(I,"projectionMatrix",Tt)):me.setValue(I,"projectionMatrix",x.projectionMatrix),me.setValue(I,"viewMatrix",x.matrixWorldInverse);const Ie=me.map.cameraPosition;Ie!==void 0&&Ie.setValue(I,Gt.setFromMatrixPosition(x.matrixWorld)),b.logarithmicDepthBuffer&&me.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&me.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,Be=!0,De=!0)}if(F.isSkinnedMesh){me.setOptional(I,F,"bindMatrix"),me.setOptional(I,F,"bindMatrixInverse");const Le=F.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),me.setValue(I,"boneTexture",Le.boneTexture,v))}F.isBatchedMesh&&(me.setOptional(I,F,"batchingTexture"),me.setValue(I,"batchingTexture",F._matricesTexture,v),me.setOptional(I,F,"batchingIdTexture"),me.setValue(I,"batchingIdTexture",F._indirectTexture,v),me.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&me.setValue(I,"batchingColorTexture",F._colorsTexture,v));const qe=P.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&gt.update(F,P,Ce),(Be||Rt.receiveShadow!==F.receiveShadow)&&(Rt.receiveShadow=F.receiveShadow,me.setValue(I,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Xe.envMap.value=Mt,Xe.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(Xe.envMapIntensity.value=D.environmentIntensity),Be&&(me.setValue(I,"toneMappingExposure",y.toneMappingExposure),Rt.needsLights&&Rn(Xe,De),it&&H.fog===!0&&K.refreshFogUniforms(Xe,it),K.refreshMaterialUniforms(Xe,H,Q,dt,h.state.transmissionRenderTarget[x.id]),os.upload(I,hn(Rt),Xe,v)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(os.upload(I,hn(Rt),Xe,v),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&me.setValue(I,"center",F.center),me.setValue(I,"modelViewMatrix",F.modelViewMatrix),me.setValue(I,"normalMatrix",F.normalMatrix),me.setValue(I,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Le=H.uniformsGroups;for(let Ie=0,er=Le.length;Ie<er;Ie++){const Un=Le[Ie];A.update(Un,Ce),A.bind(Un,Ce)}}return Ce}function Rn(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function Te(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(x,D,P){$.get(x.texture).__webglTexture=D,$.get(x.depthTexture).__webglTexture=P;const H=$.get(x);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=P===void 0,H.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,D){const P=$.get(x);P.__webglFramebuffer=D,P.__useDefaultFramebuffer=D===void 0};const xn=I.createFramebuffer();this.setRenderTarget=function(x,D=0,P=0){X=x,N=D,U=P;let H=!0,F=null,it=!1,ht=!1;if(x){const Mt=$.get(x);if(Mt.__useDefaultFramebuffer!==void 0)B.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(Mt.__webglFramebuffer===void 0)v.setupRenderTarget(x);else if(Mt.__hasExternalTextures)v.rebindTextures(x,$.get(x.texture).__webglTexture,$.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const wt=x.depthTexture;if(Mt.__boundDepthTexture!==wt){if(wt!==null&&$.has(wt)&&(x.width!==wt.image.width||x.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(x)}}const Ut=x.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ht=!0);const Nt=$.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Nt[D])?F=Nt[D][P]:F=Nt[D],it=!0):x.samples>0&&v.useMultisampledRTT(x)===!1?F=$.get(x).__webglMultisampledFramebuffer:Array.isArray(Nt)?F=Nt[P]:F=Nt,O.copy(x.viewport),rt.copy(x.scissor),j=x.scissorTest}else O.copy(Bt).multiplyScalar(Q).floor(),rt.copy(te).multiplyScalar(Q).floor(),j=ue;if(P!==0&&(F=xn),B.bindFramebuffer(I.FRAMEBUFFER,F)&&H&&B.drawBuffers(x,F),B.viewport(O),B.scissor(rt),B.setScissorTest(j),it){const Mt=$.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Mt.__webglTexture,P)}else if(ht){const Mt=$.get(x.texture),Ut=D;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.__webglTexture,P,Ut)}else if(x!==null&&P!==0){const Mt=$.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Mt.__webglTexture,P)}E=-1},this.readRenderTargetPixels=function(x,D,P,H,F,it,ht){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=$.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){B.bindFramebuffer(I.FRAMEBUFFER,_t);try{const Mt=x.texture,Ut=Mt.format,Nt=Mt.type;if(!b.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!b.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-H&&P>=0&&P<=x.height-F&&I.readPixels(D,P,H,F,St.convert(Ut),St.convert(Nt),it)}finally{const Mt=X!==null?$.get(X).__webglFramebuffer:null;B.bindFramebuffer(I.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(x,D,P,H,F,it,ht){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=$.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){const Mt=x.texture,Ut=Mt.format,Nt=Mt.type;if(!b.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!b.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=x.width-H&&P>=0&&P<=x.height-F){B.bindFramebuffer(I.FRAMEBUFFER,_t);const wt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,wt),I.bufferData(I.PIXEL_PACK_BUFFER,it.byteLength,I.STREAM_READ),I.readPixels(D,P,H,F,St.convert(Ut),St.convert(Nt),0);const Wt=X!==null?$.get(X).__webglFramebuffer:null;B.bindFramebuffer(I.FRAMEBUFFER,Wt);const jt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await yu(I,jt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,wt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,it),I.deleteBuffer(wt),I.deleteSync(jt),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,D=null,P=0){x.isTexture!==!0&&(Vi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,x=arguments[1]);const H=Math.pow(2,-P),F=Math.floor(x.image.width*H),it=Math.floor(x.image.height*H),ht=D!==null?D.x:0,_t=D!==null?D.y:0;v.setTexture2D(x,0),I.copyTexSubImage2D(I.TEXTURE_2D,P,0,0,ht,_t,F,it),B.unbindTexture()};const an=I.createFramebuffer(),We=I.createFramebuffer();this.copyTextureToTexture=function(x,D,P=null,H=null,F=0,it=null){x.isTexture!==!0&&(Vi("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,x=arguments[1],D=arguments[2],it=arguments[3]||0,P=null),it===null&&(F!==0?(Vi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=F,F=0):it=0);let ht,_t,Mt,Ut,Nt,wt,Wt,jt,le;const de=x.isCompressedTexture?x.mipmaps[it]:x.image;if(P!==null)ht=P.max.x-P.min.x,_t=P.max.y-P.min.y,Mt=P.isBox3?P.max.z-P.min.z:1,Ut=P.min.x,Nt=P.min.y,wt=P.isBox3?P.min.z:0;else{const qe=Math.pow(2,-F);ht=Math.floor(de.width*qe),_t=Math.floor(de.height*qe),x.isDataArrayTexture?Mt=de.depth:x.isData3DTexture?Mt=Math.floor(de.depth*qe):Mt=1,Ut=0,Nt=0,wt=0}H!==null?(Wt=H.x,jt=H.y,le=H.z):(Wt=0,jt=0,le=0);const Ht=St.convert(D.format),Rt=St.convert(D.type);let _e;D.isData3DTexture?(v.setTexture3D(D,0),_e=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(v.setTexture2DArray(D,0),_e=I.TEXTURE_2D_ARRAY):(v.setTexture2D(D,0),_e=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const ie=I.getParameter(I.UNPACK_ROW_LENGTH),Ce=I.getParameter(I.UNPACK_IMAGE_HEIGHT),dn=I.getParameter(I.UNPACK_SKIP_PIXELS),Be=I.getParameter(I.UNPACK_SKIP_ROWS),De=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,de.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,de.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ut),I.pixelStorei(I.UNPACK_SKIP_ROWS,Nt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wt);const me=x.isDataArrayTexture||x.isData3DTexture,Xe=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){const qe=$.get(x),Le=$.get(D),Ie=$.get(qe.__renderTarget),er=$.get(Le.__renderTarget);B.bindFramebuffer(I.READ_FRAMEBUFFER,Ie.__webglFramebuffer),B.bindFramebuffer(I.DRAW_FRAMEBUFFER,er.__webglFramebuffer);for(let Un=0;Un<Mt;Un++)me&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$.get(x).__webglTexture,F,wt+Un),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$.get(D).__webglTexture,it,le+Un)),I.blitFramebuffer(Ut,Nt,ht,_t,Wt,jt,ht,_t,I.DEPTH_BUFFER_BIT,I.NEAREST);B.bindFramebuffer(I.READ_FRAMEBUFFER,null),B.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||x.isRenderTargetTexture||$.has(x)){const qe=$.get(x),Le=$.get(D);B.bindFramebuffer(I.READ_FRAMEBUFFER,an),B.bindFramebuffer(I.DRAW_FRAMEBUFFER,We);for(let Ie=0;Ie<Mt;Ie++)me?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,qe.__webglTexture,F,wt+Ie):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,qe.__webglTexture,F),Xe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.__webglTexture,it,le+Ie):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Le.__webglTexture,it),F!==0?I.blitFramebuffer(Ut,Nt,ht,_t,Wt,jt,ht,_t,I.COLOR_BUFFER_BIT,I.NEAREST):Xe?I.copyTexSubImage3D(_e,it,Wt,jt,le+Ie,Ut,Nt,ht,_t):I.copyTexSubImage2D(_e,it,Wt,jt,Ut,Nt,ht,_t);B.bindFramebuffer(I.READ_FRAMEBUFFER,null),B.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Xe?x.isDataTexture||x.isData3DTexture?I.texSubImage3D(_e,it,Wt,jt,le,ht,_t,Mt,Ht,Rt,de.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(_e,it,Wt,jt,le,ht,_t,Mt,Ht,de.data):I.texSubImage3D(_e,it,Wt,jt,le,ht,_t,Mt,Ht,Rt,de):x.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,it,Wt,jt,ht,_t,Ht,Rt,de.data):x.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,it,Wt,jt,de.width,de.height,Ht,de.data):I.texSubImage2D(I.TEXTURE_2D,it,Wt,jt,ht,_t,Ht,Rt,de);I.pixelStorei(I.UNPACK_ROW_LENGTH,ie),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ce),I.pixelStorei(I.UNPACK_SKIP_PIXELS,dn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Be),I.pixelStorei(I.UNPACK_SKIP_IMAGES,De),it===0&&D.generateMipmaps&&I.generateMipmap(_e),B.unbindTexture()},this.copyTextureToTexture3D=function(x,D,P=null,H=null,F=0){return x.isTexture!==!0&&(Vi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),P=arguments[0]||null,H=arguments[1]||null,x=arguments[2],D=arguments[3],F=arguments[4]||0),Vi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,D,P,H,F)},this.initRenderTarget=function(x){$.get(x).__webglFramebuffer===void 0&&v.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?v.setTextureCube(x,0):x.isData3DTexture?v.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?v.setTexture2DArray(x,0):v.setTexture2D(x,0),B.unbindTexture()},this.resetState=function(){N=0,U=0,X=null,B.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=(i,t,e=[])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",i);return Object.keys(t).forEach(r=>{n.setAttribute(r,String(t[r]))}),e.length&&e.forEach(r=>{const s=ul(...r);n.appendChild(s)}),n};var ig=([i,t,e])=>ul(i,t,e);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=i=>Array.from(i.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),sg=i=>typeof i=="string"?i:!i||!i.class?"":i.class&&typeof i.class=="string"?i.class.split(" "):i.class&&Array.isArray(i.class)?i.class:"",ag=i=>i.flatMap(sg).map(e=>e.trim()).filter(Boolean).filter((e,n,r)=>r.indexOf(e)===n).join(" "),og=i=>i.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,n)=>e.toUpperCase()+n.toLowerCase()),vc=(i,{nameAttr:t,icons:e,attrs:n})=>{var _;const r=i.getAttribute(t);if(r==null)return;const s=og(r),a=e[s];if(!a)return console.warn(`${i.outerHTML} icon name was not found in the provided icons object.`);const o=rg(i),[c,u,l]=a,f={...u,"data-lucide":r,...n,...o},d=ag(["lucide",`lucide-${r}`,o,n]);d&&Object.assign(f,{class:d});const p=ig([c,f,l]);return(_=i.parentNode)==null?void 0:_.replaceChild(p,i)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=["svg",uo,[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=["svg",uo,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=["svg",uo,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=({icons:i={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(i).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${t}]`);if(Array.from(n).forEach(r=>vc(r,{nameAttr:t,icons:i,attrs:e})),t==="data-lucide"){const r=document.querySelectorAll("[icon-name]");r.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(r).forEach(s=>vc(s,{nameAttr:"icon-name",icons:i,attrs:e})))}};function xc(i,t,e,n){return Math.sin(e*Math.PI*i)*Math.sin(n*Math.PI*t)-Math.sin(n*Math.PI*i)*Math.sin(e*Math.PI*t)}function cg(i,t,e,n,r,s){return Math.sin(n*Math.PI*i)*Math.sin(r*Math.PI*t)+Math.sin(r*Math.PI*t)*Math.sin(s*Math.PI*e)+Math.sin(s*Math.PI*e)*Math.sin(n*Math.PI*i)}const cs=30,Pn=6.4,Ge=10.733,xs=16.167,Se=xs,mn=24.6,lg=Math.round(mn*cs),mr=4.3,ug=Pn,Mc=9.94,Sc=[[0,1],[0,2],[0,3]],hg=.62,ml=.84,na=[{start:0,end:1.35,nodes:[7,0,2,5]},{start:1.35,end:2.45,nodes:[3,1,4,10]},{start:2.45,end:3.45,nodes:[7,5,6,11]},{start:3.45,end:mr,nodes:[3,8,9,10]},{start:mr,end:mn,nodes:[7,0,2,5]}],fg=[{start:.14,end:2,text:"很久以前，宇宙是一锅"},{start:2,end:4.3,text:"滚烫的等离子体——"},{start:4.3,end:6.38,text:"声波，在其中来回震荡。"},{start:7.28,end:9.94,text:"三十八万年后，一切忽然"},{start:9.94,end:10.733,text:"安静。"},{start:10.733,end:12.18,text:"六合乍裂——那声波"},{start:12.18,end:14.8,text:"就此被冻结在黑"},{start:14.8,end:15.4,text:"暗深处。"},{start:16.14,end:18.32,text:"它没有消失，只是化作一道"},{start:18.32,end:20.4,text:"极淡的印记，悄悄"},{start:20.4,end:22.36,text:"写进了星系与星系"},{start:22.36,end:23.66,text:"之间的距离里。"}];function dg(i){var t;return((t=fg.find(e=>i>=e.start&&i<e.end))==null?void 0:t.text)??""}function yc(i){return na.find(t=>i>=t.start&&i<t.end)??na[na.length-1]}function pg(i,t,e,n){const r=Math.floor(Math.max(0,i)/.55),s=new Set([t[r%t.length]]);return r%3===1&&s.add(t[(r+2)%t.length]),r%4===2&&s.add((r*5+1)%e),{main:[...s],minor:r%2===0?r*3%n:null}}function mg(i){return Dn(i,.85,1.6)+Dn(i,2.75,3.55)}function Dn(i,t,e){const n=Math.min(1,Math.max(0,(i-t)/(e-t)));return n*n*(3-2*n)}function Ec(i){if(i<mr||i>mn)return{active:!1,progress:0,radius:0};const t=Math.min(1,(i-mr)/(ug-mr));return{active:!0,progress:t,radius:.06+Math.sin(t*Math.PI)*.03}}function Tc(i){const t=Math.max(0,i-Pn),e=Ge-Pn,n=Math.min(e,t),r=n/e,s=1.35,a=Math.exp(-s*n);return{active:i>=Pn&&i<=Ge,progress:r,absorption:r,baryonVelocity:a,silenceBrightness:Dn(i,Mc,Mc+.14),waveTime:Pn+(1-a)/s}}function gg(i){const t=Math.max(0,i-Ge),e=xs-Ge,n=Math.min(1,t/e),r=Math.max(0,(t-hg)/ml),s=Math.min(1,r),a=s,o=Math.max(0,r-1),c=Dn(i,Ge+3.8,Ge+4.65);return{active:i>=Ge&&i<=xs,progress:n,reveal:Dn(i,Ge,Ge+.45),pathPosition:s,approachProgress:a,surfaceProgress:o,impactClock:r,completedImpacts:Math.floor(s+1e-9),impactIndex:0,segmentProgress:s>=1?1:s,freeze:c,rippleStrength:1-c,coreStrength:1}}function _g(i){const t=Math.max(0,i-Se),e=mn-Se,n=Math.min(1,t/e),r=Dn(i,Se+.28,Se+2.2),s=Dn(i,Se+.82,Se+3.2),a=Dn(i,Se+1.25,Se+4.8),o=Dn(i,Se+2.15,Se+4.1);return{active:i>=Se&&i<=mn,progress:n,reveal:Dn(i,Se,Se+.72),constellationReveal:r,lineReveal:s,imprintFade:a,distanceReveal:o}}function vg(i){const e=Math.min(1,Math.max(0,i))*Math.PI*2,n=440+Math.sin(e)*20,r=Math.sin(e-.7)*.16+Math.sin(e*2+.3)*.04;return{sourceFrequency:n,velocityRatio:r,observedFrequency:n/(1-r)}}const $e=[16777180,16762677,16741400,16723724,9245191],ls=12183295,Qr=new Ot(ls),bc=new Ot(16777215),ia=new Ot(12907477),Vn=new Ot,ra=4.2,$t={clubTip:[1.39,3.28,.52],upperHub:[-.72,2.02,.08],upperKnee:[1.06,2.78,.26],upperRight:[1.95,1.63,-.08],betelgeuse:[-2,2.1,.42],bellatrix:[-2.57,.97,-.28],lowerClubRoot:[-1.97,1.34,.14],beltRight:[1.55,-.08,.18],beltMiddle:[1.22,-.35,-.1],beltLeft:[.79,-.56,.26],lowerJoint:[.55,-.99,.04],saiph:[-.9,-3.28,.18],lowerGuide:[-.08,-3.61,-.12],rigel:[2.55,-2.77,-.48]},Zt={clubTip:[.18,3.42,.52],upperHub:[-2.4,1.96,.37],upperKnee:[.3,3.26,.47],upperRight:[.94,1.14,-.21],betelgeuse:[-2.52,2.12,.42],bellatrix:[1.58,1.04,-.28],bellatrixApproach:[.98,1.2,-.18],meissaApproach:[.82,1.3,-.16],bellatrixLowerApproach:[1.22,.47,-.2],beltRight:[.58,-.54,.18],beltMiddle:[.06,-.94,-.1],beltLeft:[-.46,-1.23,.26],lowerJoint:[-.52,-1.04,.04],saiph:[-1.48,-3.3,.18],lowerGuide:[-1.22,-3.55,-.12],rigel:[1.86,-2.96,-.48]},Ac=[{label:"参宿四",latin:"BETELGEUSE",position:$t.betelgeuse,targetPosition:Zt.betelgeuse,scale:.15,brightness:1.45,color:16762789},{label:"参宿五",latin:"BELLATRIX",position:$t.bellatrix,targetPosition:Zt.bellatrix,scale:.13,brightness:1.45,color:14017791},{label:"猎宿一",latin:"MEISSA",position:$t.clubTip,targetPosition:Zt.clubTip,scale:.11,brightness:1.45,color:14543359},{label:"参宿三",latin:"MINTAKA",position:$t.beltRight,targetPosition:Zt.beltRight,scale:.12,color:14280703},{label:"参宿二",latin:"ALNILAM",position:$t.beltMiddle,targetPosition:Zt.beltMiddle,scale:.13,color:15003647},{label:"参宿一",latin:"ALNITAK",position:$t.beltLeft,targetPosition:Zt.beltLeft,scale:.11,color:14543359},{label:"参宿六",latin:"SAIPH",position:$t.saiph,targetPosition:Zt.saiph,scale:.12,color:13360383},{label:"参宿七",latin:"RIGEL",position:$t.rigel,targetPosition:Zt.rigel,scale:.15,color:14149631}],xg=[{emphasis:1.55,points:[$t.betelgeuse,$t.clubTip]},{emphasis:1.55,points:[$t.lowerClubRoot,$t.clubTip]},{emphasis:1.35,points:[$t.betelgeuse,$t.bellatrix]},{emphasis:1.35,points:[$t.betelgeuse,$t.beltLeft]},{emphasis:1.45,points:[$t.bellatrix,$t.beltRight]},{emphasis:1.55,points:[$t.lowerJoint,$t.saiph]},{emphasis:1.55,points:[$t.beltRight,$t.rigel]},{emphasis:.72,points:[$t.upperHub,$t.upperKnee]},{emphasis:.72,points:[$t.upperRight,$t.beltRight]},{emphasis:.72,points:[$t.upperKnee,$t.upperRight]},{emphasis:.72,points:[$t.upperHub,$t.upperRight]},{emphasis:.72,points:[$t.upperHub,$t.lowerJoint]},{emphasis:.72,points:[$t.beltRight,$t.beltMiddle,$t.beltLeft,$t.beltRight]},{emphasis:.72,points:[$t.beltLeft,$t.lowerJoint,$t.lowerGuide]},{emphasis:.72,points:[$t.beltMiddle,$t.rigel]}],Mg=new Set([0,1,2]),Sg=new Set([7,9,10]),yg=[[Zt.betelgeuse,Zt.clubTip],[Zt.meissaApproach,Zt.clubTip],[Zt.betelgeuse,Zt.bellatrixApproach],[Zt.betelgeuse,Zt.beltLeft],[Zt.bellatrixLowerApproach,Zt.beltRight],[Zt.lowerJoint,Zt.saiph],[Zt.beltRight,Zt.rigel],[Zt.upperHub,Zt.upperKnee],[Zt.bellatrixLowerApproach,Zt.beltRight],[Zt.upperKnee,Zt.upperRight],[Zt.upperHub,Zt.upperRight],[Zt.betelgeuse,Zt.beltLeft],[Zt.beltRight,Zt.beltMiddle,Zt.beltLeft,Zt.beltRight],[Zt.beltLeft,Zt.lowerJoint,Zt.lowerGuide],[Zt.beltMiddle,Zt.rigel]],En=document.querySelector("#narration"),Za=document.querySelector("#scene"),sa=document.querySelector("#labels"),Eg=document.querySelector("#subtitle"),Tg=document.querySelector("#caption"),bg=document.querySelector("#timecode"),ts=document.querySelector("#play"),Ag=document.querySelector("#reset"),wg=document.querySelector(".eyebrow"),Rg=document.querySelector(".title-sub"),wc=document.querySelector("#epoch-marker"),Cg=document.querySelector("#baryon-velocity"),Rc=document.querySelector("#impact-marker"),Pg=document.querySelector("#impact-count"),es=document.querySelector("#wave-equation"),Dg=document.querySelector("#wave-equation-path"),Lg=document.querySelector("#wave-f0"),Ig=document.querySelector("#wave-v"),Ug=document.querySelector("#wave-fp");pl({icons:{Play:fl,Pause:hl,RotateCcw:dl}});const gi=new ng({canvas:Za,antialias:!0,powerPreference:"high-performance"});gi.setClearColor(132103,1);gi.outputColorSpace=tn;const gr=new Yu;gr.fog=new so(132103,.006);const Je=new gn(43,1,.1,100);Je.position.set(0,.1,12.5);Je.lookAt(0,0,0);const Ne=new be;gr.add(Ne);async function Ng(){const i=m(),t=await h(),e=U();Ne.add(e);const n=X();Ne.add(n);const r=[{label:"太阳",latin:"SUN",position:[-3.35,1.42,.4],radius:.62,color:$e[1],spin:.42,phase:.2},{label:"木星",latin:"JUPITER",position:[-1.82,-1.55,.5],radius:.56,color:$e[2],spin:-.36,phase:1.2},{label:"天狼星",latin:"SIRIUS",position:[.18,1.72,-.4],radius:.51,color:$e[0],spin:.32,phase:2.1},{label:"土星",latin:"SATURN",position:[2.16,-1.08,.8],radius:.5,color:$e[2],spin:.29,phase:1.6},{label:"北极星",latin:"POLARIS",position:[3.18,1.92,-.3],radius:.4,color:$e[0],spin:-.25,phase:.4},{label:"火星",latin:"MARS",position:[1.16,.08,1.05],radius:.42,color:$e[3],spin:.48,phase:2.8},{label:"参宿四",latin:"BETELGEUSE",position:[-3.28,-1.9,-.8],radius:.55,color:$e[3],spin:-.31,phase:2.7},{label:"昴星团",latin:"PLEIADES",position:[-.74,.05,-1.22],radius:.64,color:$e[0],spin:.39,phase:1.9,shape:"chladni",modes:[2,3,4],boundary:"volume",network:!0},{label:"金星",latin:"VENUS",position:[-.12,-2.55,-.95],radius:.44,color:$e[1],spin:-.44,phase:.9},{label:"海王星",latin:"NEPTUNE",position:[3.62,-2.02,.58],radius:.46,color:$e[2],spin:.35,phase:2.4},{label:"月球",latin:"MOON",position:[-4.02,.05,-1.2],radius:.3,color:$e[1],spin:-.52,phase:1.3},{label:"脉冲星",latin:"PULSAR",position:[3.78,.44,-1.48],radius:.5,color:14478591,spin:.7,phase:3.1,shape:"chladni",modes:[2,3,4],boundary:"volume",network:!0}],s=r.map((b,B)=>S(b,B));s.forEach(b=>Ne.add(b.group));const a=[{label:"织女星",latin:"VEGA",position:[-4.35,2.42,-1.7],scale:.12},{label:"牛郎星",latin:"ALTAIR",position:[-2.15,2.68,-1.25],scale:.1},{label:"参宿七",latin:"RIGEL",position:[1.35,2.55,-2.1],scale:.11},{label:"五车二",latin:"CAPELLA",position:[4.35,2.35,-1.35],scale:.1},{label:"毕宿五",latin:"ALDEBARAN",position:[-4.55,-1.02,-1.8],scale:.09},{label:"角宿一",latin:"SPICA",position:[-2.28,-.18,-2.25],scale:.09},{label:"心宿二",latin:"ANTARES",position:[2.82,.72,-1.95],scale:.11},{label:"老人星",latin:"CANOPUS",position:[4.24,-2.58,-1.55],scale:.1}],o=a.map((b,B)=>ct(b,B));o.forEach(b=>Ne.add(b.group));const c=Sc.map(()=>ut());c.forEach(b=>Ne.add(b));const u=E();gr.add(u.group);const l=ot();Ne.add(l.group);const f=N(i,sa);gr.add(f.group);const d=r.map(b=>{const B=document.createElement("div");return B.className="node-label",B.innerHTML=`${b.label}<small>${b.latin}</small>`,sa.appendChild(B),B}),p=a.map(b=>{const B=document.createElement("div");return B.className="node-label minor-label",B.innerHTML=`${b.label}<small>${b.latin}</small>`,sa.appendChild(B),B});let _=!1,M=-1;function m(){const B=document.createElement("canvas");B.width=64,B.height=64;const z=B.getContext("2d"),$=z.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);$.addColorStop(0,"rgba(255,255,255,1)"),$.addColorStop(.12,"rgba(255,255,255,0.96)"),$.addColorStop(.38,"rgba(255,255,255,0.18)"),$.addColorStop(.68,"rgba(255,255,255,0.02)"),$.addColorStop(1,"rgba(255,255,255,0)"),z.fillStyle=$,z.fillRect(0,0,64,64);const v=new ju(B);return v.colorSpace=tn,v}async function h(){try{const b=await fetch("/chladni-reference.bin");return b.ok?new Float32Array(await b.arrayBuffer()):null}catch{return null}}function C(b,B){const z=new dh;for(let $=1;$<b.length;$+=1)z.add(new il(b[$-1],b[$]));return new co(z,Math.max(3,b.length*3),B,7,!1)}function T(b,B,z){return b.map(($,v)=>$.clone().lerp(B[v],z))}function y(b,B){const z=b.geometry;b.geometry=C(B,b.userData.radius),z.dispose()}function G(b,B,z,$){const v=T(b.userData.startPoints,b.userData.targetPoints,B);if(v.forEach(g=>{g.x+=$}),b.userData.anchorStarIndex!==null&&v[b.userData.anchorPointIndex].copy(z[b.userData.anchorStarIndex].position),b.userData.bellatrixRay){const g=z[1].position,w=qt.lerp(b.userData.bellatrixRay.startGap,b.userData.bellatrixRay.gap,B),k=v[b.userData.bellatrixRay.sourceIndex].clone().sub(g).normalize();v[b.userData.bellatrixRay.endpointIndex].copy(g).addScaledVector(k,w)}return v}function N(b,B){const z=new be;z.visible=!1;const $=[],v=[];for(let L=0;L<620;L+=1){const q=L*.61803398875,V=(q*13.7%1-.5)*12.8,J=(q*7.1%1-.5)*7.1,pt=-4.8+q*5.3%1*2.7,vt=.34+L*17%61/61*.66;$.push(V,J,pt),v.push(vt*.82,vt*.9,vt)}const g=new ae;g.setAttribute("position",new Xt($,3)),g.setAttribute("color",new Xt(v,3));const w=new Ue(g,new Ze({map:b,size:.052,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Yt,sizeAttenuation:!0}));z.add(w);const k=[],Y=[];for(let L=0;L<1250;L+=1){const q=L*71%1250/1250,V=L*193%1250/1250,J=L*431%1250/1250,pt=(q-.5)*5.6,vt=(.22+V*.78)*(1-Math.abs(pt)/3.2),At=-4.7+(J-.5)*vt*1.8+Math.sin(L*.19)*.18,It=pt+Math.sin(L*.11)*.18,Ft=-2.35+(V-.5)*1.5+Math.cos(L*.07)*.38,kt=.12+(1-Math.abs(pt)/3.2)*.2+J*.08;k.push(At,It,Ft),Y.push(kt*.7,kt*.76,kt*.9)}const W=new ae;W.setAttribute("position",new Xt(k,3)),W.setAttribute("color",new Xt(Y,3));const et=new Ue(W,new Ze({map:b,size:.34,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Yt,sizeAttenuation:!0}));z.add(et);const K=Ac.map((L,q)=>{const V=new be,J=new ln(new Qe({map:b,color:L.color,transparent:!0,opacity:0,depthWrite:!1,blending:Yt}));J.scale.setScalar(L.scale*4.8);const pt=new ln(new Qe({map:b,color:L.color,transparent:!0,opacity:0,depthWrite:!1,blending:Yt}));pt.scale.setScalar(L.scale),V.add(J,pt),V.position.set(...L.position),V.userData={definition:L,index:q,halo:J,core:pt,phase:q*.73,startPosition:new R(...L.position),targetPosition:new R(...L.targetPosition),graphPosition:new R(...L.position),morphDelay:q*.018},z.add(V);const vt=document.createElement("div");return vt.className="node-label scene-four-label",vt.innerHTML=`${L.label}<small>${L.latin}</small>`,B.appendChild(vt),V.userData.label=vt,V}),nt=xg.map(({points:L,emphasis:q},V)=>{const J=L.map(fe=>new R(...fe)),pt=yg[V].map(fe=>new R(...fe)),vt=V===1?0:V===2?1:V===4?0:null,At=vt===null?null:(()=>{const fe=new R(...$t.bellatrix),se=new R(...Zt.bellatrix),oe=J[vt],Re=pt[vt];return{endpointIndex:vt,sourceIndex:vt===0?1:0,startGap:oe.distanceTo(fe),gap:Re.distanceTo(se)}})(),It=Sg.has(V),Ft=new di({color:It?7440036:12110829,transparent:!0,opacity:0,depthWrite:!1,blending:Yt}),kt=new He(C(J,.014*q),Ft),Jt=new He(C(J,.05*q),new di({color:It?4084591:7179705,transparent:!0,opacity:0,depthWrite:!1,blending:Yt}));return kt.userData={index:V,glow:Jt,isUpperTriangle:Mg.has(V),isLowerShadow:It,startPoints:J,targetPoints:pt,bellatrixRay:At,anchorStarIndex:V<2?2:null,anchorPointIndex:V<2?1:null,radius:.014*q,glowRadius:.05*q,morphDelay:V*.014,lastMorphFrame:-1},Jt.userData.radius=.05*q,z.add(Jt),z.add(kt),kt}),mt=Ac[3].position,Z=[.2,-.38,-.02],at=new ae().setFromPoints([new R(...mt),new R(...Z)]),ft=new Xo({color:9361844,dashSize:.12,gapSize:.09,transparent:!0,opacity:0,depthWrite:!1,blending:Yt}),gt=new gs(at,ft);gt.computeLineDistances(),z.add(gt);const lt=new Fe;lt.position.copy(new R(...mt).lerp(new R(...Z),.52)),z.add(lt);const bt=document.createElement("div");bt.className="node-label scene-four-distance",bt.innerHTML="147 Mpc<small>BAO SCALE</small>",B.appendChild(bt);const St=new be,Pt=new ln(new Qe({map:b,color:7919264,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Yt}));Pt.scale.setScalar(1.65);const A=new ln(new Qe({map:b,color:ia,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Yt}));A.scale.setScalar(.62);const tt=[.36,.58,.82].map((L,q)=>{const V=new He(new _s(L,L+.012,64),new di({color:9298102,transparent:!0,opacity:0,side:Tn,depthTest:!1,depthWrite:!1,blending:Yt}));return V.userData.phase=q*.9,St.add(V),V});return St.add(Pt,A),St.position.set(.2,-.38,-.02),z.add(St),{group:z,backdrop:w,cloud:et,stars:K,lines:nt,distanceLine:gt,distanceAnchor:lt,distanceLabel:bt,imprint:St,imprintHalo:Pt,imprintCore:A,imprintRings:tt,imprintTarget:new R(.2,-.38,-.02)}}function U(){const b=new be,B=[{center:[-4.2,1.55,-2.1],spread:[1.45,.85,1.1]},{center:[-1.55,.25,-2.5],spread:[1.3,1.25,1.25]},{center:[2.15,1.45,-2.2],spread:[1.55,.95,1.2]},{center:[4.05,-1.15,-2.5],spread:[1.25,1.05,1.15]},{center:[-.35,-2.15,-2.15],spread:[1.75,.72,1.3]},{center:[-3.55,-1.8,-1.75],spread:[1.15,.92,1.1]}];let z=17;const $=()=>(z=z*16807%2147483647,z/2147483647),v=()=>{const g=Math.max($(),1e-4);return Math.sqrt(-2*Math.log(g))*Math.cos(Math.PI*2*$())};return[{count:1400,size:.042,opacity:.56},{count:560,size:.078,opacity:.72},{count:170,size:.13,opacity:.64}].forEach((g,w)=>{const k=[],Y=[],W=[],et=[];for(let mt=0;mt<g.count;mt+=1){let Z,at,ft;if($()<.82){const bt=B[Math.floor($()*B.length)];Z=bt.center[0]+v()*bt.spread[0],at=bt.center[1]+v()*bt.spread[1],ft=bt.center[2]+v()*bt.spread[2]}else Z=($()*2-1)*6.2,at=($()*2-1)*3.6,ft=$()*4.5-4;k.push(qt.clamp(Z,-6.7,6.7),qt.clamp(at,-3.9,3.9),qt.clamp(ft,-5.2,1.2));const gt=.62+$()*.38,lt=(mt*37+w*13)%31<2;Y.push(gt,gt*(lt?.9:.16),gt*(lt?1:.035)),W.push($()*Math.PI*2),et.push(2.1+$()*1.4)}const K=new ae;K.setAttribute("position",new Xt(k,3)),K.setAttribute("color",new Xt(Y,3)),K.setAttribute("aPhase",new Xt(W,1)),K.setAttribute("aSpeed",new Xt(et,1));const nt=new un({uniforms:{uTime:{value:0},uSize:{value:g.size*680},uOpacity:{value:g.opacity},uReveal:{value:0},uAbsorbProgress:{value:0},uAbsorbTarget:{value:new R}},vertexShader:`
        attribute float aPhase;
        attribute float aSpeed;
        uniform float uTime;
        uniform float uSize;
        uniform float uAbsorbProgress;
        uniform vec3 uAbsorbTarget;
        varying vec3 vColor;
        varying float vPulse;
        varying float vCapture;
        void main() {
          vColor = color;
          float wave = 0.5 + 0.5 * sin(uTime * aSpeed + aPhase);
          vPulse = smoothstep(0.18, 0.82, wave);
          float captureStart = fract(aPhase / 6.2831853) * 0.62;
          float localProgress = clamp((uAbsorbProgress - captureStart) / 0.38, 0.0, 1.0);
          vCapture = (1.0 - exp(-5.0 * localProgress)) / 0.993262;
          vec3 displaced = mix(position, uAbsorbTarget, vCapture);
          vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
          gl_PointSize = uSize * (0.62 + vPulse * 0.62) / max(1.0, -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform float uOpacity;
        uniform float uReveal;
        uniform float uAbsorbProgress;
        varying vec3 vColor;
        varying float vPulse;
        varying float vCapture;
        void main() {
          float distanceToCenter = length(gl_PointCoord - vec2(0.5));
          float core = 1.0 - smoothstep(0.0, 0.14, distanceToCenter);
          float halo = 1.0 - smoothstep(0.1, 0.4, distanceToCenter);
          float coreLight = core * (0.58 + vPulse * 0.42);
          float haloLight = halo * (0.025 + vPulse * 0.5);
          float capturedFade = 1.0 - smoothstep(0.88, 0.995, vCapture);
          float convergenceBoost = 1.0 + sin(uAbsorbProgress * 3.1415926) * 0.42;
          float alpha = (coreLight + haloLight) * uOpacity * uReveal * capturedFade * convergenceBoost;
          if (alpha < 0.01) discard;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:Yt,vertexColors:!0});b.add(new Ue(K,nt))}),b}function X(){const B=[],z=[],$=new Ot(12144941),v=new Ot(5614016),g=new Ot(7373197);for(let W=0;W<1100;W+=1){const et=W*73%1100/1100,K=W*419%1100/1100,nt=(et*2-1)*6.6+Math.sin(W*1.71)*.12,mt=(K*2-1)*3.65+Math.cos(W*1.13)*.08,Z=-4.2+Math.sin(W*.37)*.7,at=Math.sin(nt*1.18)+Math.cos(mt*1.76)+Math.sin((nt-mt)*.63),ft=Math.min(1,Math.abs(at)/2.4),gt=g.clone().lerp(at>=0?$:v,.42+ft*.5),lt=.28+ft*.58;B.push(nt,mt,Z),z.push(gt.r*lt,gt.g*lt,gt.b*lt)}const w=new ae;w.setAttribute("position",new Xt(B,3)),w.setAttribute("color",new Xt(z,3));const k=new Ze({size:.07,map:i,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Yt,sizeAttenuation:!0}),Y=new Ue(w,k);return Y.visible=!1,Y}function E(){const b=[[-2.2,0,0]],B=new be,z=new Ot(16726797),$=new Ot(16763760),v=b.map((g,w)=>{const Y=new Float32Array(1080),W=new Float32Array(360*3),et=new Float32Array(360*3),K=new Float32Array(360*3);for(let P=0;P<360;P+=1){const H=P*2.39996323+w*.71,F=Math.acos(1-2*((P+.5)/360)),ht=.64*(.94+Math.sin(P*1.73+w)*.04+Math.cos(P*.47)*.025),_t=Math.cos(H)*Math.sin(F)*ht,Mt=Math.cos(F)*ht,Ut=Math.sin(H)*Math.sin(F)*ht,Nt=P*3;Y.set([_t,Mt,Ut],Nt),W.set([_t,Mt,Ut],Nt);const wt=1/Math.max(.001,Math.hypot(_t,Mt,Ut)),Wt=.08+(P*31+w*17)%23/23*.18;et.set([_t*wt*Wt+Math.sin(P*.83)*.035,Mt*wt*Wt+Math.cos(P*.57)*.025,Ut*wt*Wt+Math.sin(P*1.17)*.04],Nt);const jt=.18+P*13%19/19*.72,le=z.clone().lerp($,jt);K.set([le.r,le.g,le.b],Nt)}const nt=new He(new vs(.62,40,28),new un({uniforms:{uReveal:{value:0},uImpact:{value:0},uScar:{value:0},uPhase:{value:w*1.37}},vertexShader:`
          varying vec3 vObjectPosition;
          varying vec3 vViewNormal;
          varying vec3 vViewDirection;
          void main() {
            vObjectPosition = position;
            vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
            vViewNormal = normalize(normalMatrix * normal);
            vViewDirection = normalize(-viewPosition.xyz);
            gl_Position = projectionMatrix * viewPosition;
          }
        `,fragmentShader:`
          uniform float uReveal;
          uniform float uImpact;
          uniform float uScar;
          uniform float uPhase;
          varying vec3 vObjectPosition;
          varying vec3 vViewNormal;
          varying vec3 vViewDirection;
          void main() {
            vec3 p = normalize(vObjectPosition);
            float broadField = sin(p.x * 14.0 + sin(p.y * 8.0 + uPhase) * 2.2)
              + sin(p.y * 16.0 - sin(p.z * 9.0 - uPhase) * 1.8)
              + sin(p.z * 13.0 + sin(p.x * 7.0) * 2.0);
            float fineField = sin((p.x + p.y) * 31.0 + uPhase)
              * sin((p.y - p.z) * 27.0 - uPhase * 0.7);
            float broadCrack = 1.0 - smoothstep(0.035, 0.27, abs(broadField));
            float fineCrack = 1.0 - smoothstep(0.02, 0.1, abs(fineField));
            float cracks = pow(clamp(max(broadCrack, fineCrack * 0.44), 0.0, 1.0), 1.12);
            vec3 normal = normalize(vViewNormal);
            vec3 viewDirection = normalize(vViewDirection);
            vec3 lightDirection = normalize(vec3(-0.42, 0.68, 0.72));
            float diffuse = 0.13 + max(dot(normal, lightDirection), 0.0) * 0.87;
            float fresnel = pow(1.0 - max(dot(normal, viewDirection), 0.0), 2.2);
            float specular = pow(max(dot(reflect(-lightDirection, normal), viewDirection), 0.0), 26.0);
            vec3 darkCrust = (vec3(0.038, 0.004, 0.0015) + vec3(0.095, 0.012, 0.003) * fresnel) * diffuse;
            vec3 lava = mix(vec3(1.0, 0.055, 0.006), vec3(1.0, 0.62, 0.12), cracks);
            float crackEnergy = cracks * (0.72 + uScar * 0.42 + uImpact * 1.35);
            vec3 color = darkCrust + lava * crackEnergy;
            color += vec3(1.0, 0.08, 0.01) * fresnel * (0.14 + uImpact * 0.5);
            color += vec3(1.0, 0.46, 0.18) * specular * 0.22;
            gl_FragColor = vec4(color, uReveal);
          }
        `,transparent:!0,depthWrite:!0}));nt.rotation.set(w*.11,w*.37,w*.08);const mt=new ae;mt.setAttribute("position",new xe(W,3)),mt.setAttribute("color",new xe(K,3));const Z=new Ue(mt,new Ze({size:.034,map:i,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Yt,sizeAttenuation:!0}));Z.rotation.copy(nt.rotation);const at=new He(new vs(.78,36,24),new un({uniforms:{uReveal:{value:0},uImpact:{value:0},uHeat:{value:0},uPhase:{value:w*.83}},vertexShader:`
          varying vec3 vObjectPosition;
          varying vec3 vViewNormal;
          varying vec3 vViewDirection;
          void main() {
            vObjectPosition = position;
            vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
            vViewNormal = normalize(normalMatrix * normal);
            vViewDirection = normalize(-viewPosition.xyz);
            gl_Position = projectionMatrix * viewPosition;
          }
        `,fragmentShader:`
          uniform float uReveal;
          uniform float uImpact;
          uniform float uHeat;
          uniform float uPhase;
          varying vec3 vObjectPosition;
          varying vec3 vViewNormal;
          varying vec3 vViewDirection;
          void main() {
            vec3 p = normalize(vObjectPosition);
            float viewDot = max(dot(normalize(vViewNormal), normalize(vViewDirection)), 0.0);
            float fresnel = pow(1.0 - viewDot, 2.15);
            float flow = 0.5 + 0.5 * sin(p.x * 11.0 + sin(p.y * 8.0 + uPhase) * 1.7 + p.z * 6.0);
            float heat = clamp(uHeat + uImpact * 0.22, 0.0, 1.0);
            float density = (0.045 + fresnel * 0.43) * (0.72 + flow * 0.28) * (1.0 + heat * 0.58);
            vec3 color = mix(vec3(0.72, 0.015, 0.002), vec3(1.0, 0.34, 0.018), clamp(fresnel + heat * 0.58, 0.0, 1.0));
            color += vec3(1.0, 0.18, 0.008) * heat * (0.16 + fresnel * 0.54);
            gl_FragColor = vec4(color, density * uReveal * (1.0 + uImpact * 0.72));
          }
        `,transparent:!0,depthTest:!1,depthWrite:!1,blending:Yt}));at.renderOrder=-2;const ft=260,gt=new Float32Array(ft*3),lt=new Float32Array(ft*3);for(let P=0;P<ft;P+=1){const H=P*2.39996323+w*.51,F=Math.acos(1-2*((P+.5)/ft)),it=.72+(P*31+w*7)%29/29*.17,ht=P*3;gt.set([Math.cos(H)*Math.sin(F)*it,Math.cos(F)*it,Math.sin(H)*Math.sin(F)*it],ht);const _t=new Ot(16721416).lerp(new Ot(16751154),P*17%23/23*.45);lt.set(_t.toArray(),ht)}const bt=new ae;bt.setAttribute("position",new xe(gt,3)),bt.setAttribute("color",new xe(lt,3));const St=new Ue(bt,new Ze({size:.052,map:i,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Yt,sizeAttenuation:!0})),Pt=new R(...g),tt=(w===0?new R(0,0,0):new R(...b[w-1])).sub(Pt);tt.lengthSq()<.001?tt.set(1,0,0):tt.normalize();const L=new R(0,1,0).addScaledVector(tt,-tt.y).normalize();L.lengthSq()<.01&&L.set(1,0,0);const q=tt.clone().cross(L).normalize(),V=new ln(new Qe({map:i,color:16770992,transparent:!0,opacity:0,depthWrite:!1,blending:Yt}));V.scale.setScalar(.2),V.position.copy(tt).multiplyScalar(.642);const J=new ln(new Qe({map:i,color:16773316,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Yt}));J.position.copy(V.position),J.scale.setScalar(.3);const pt=3,vt=96,At=pt*vt,It=new Float32Array(At*3),Ft=new Float32Array(At),kt=new Float32Array(At),Jt=new Float32Array(At);for(let P=0;P<At;P+=1){const H=Math.floor(P/vt),it=P%vt/vt*Math.PI*2+H*.37,ht=P*3;It.set(tt.clone().multiplyScalar(.635).toArray(),ht),Ft[P]=.034+(P*17+w*7)%19/19*.026,Jt[P]=it}const fe=new ae;fe.setAttribute("position",new xe(It,3)),fe.setAttribute("aSize",new xe(Ft,1)),fe.setAttribute("aAlpha",new xe(kt,1).setUsage(go));const se=new Ue(fe,new un({uniforms:{uColor:{value:new Ot(16766880)},uOpacity:{value:0},uPointScale:{value:180}},vertexShader:`
        attribute float aSize;
        attribute float aAlpha;
        uniform float uPointScale;
        varying float vAlpha;
        void main() {
          vAlpha = aAlpha;
          vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = max(1.0, aSize * uPointScale / max(1.0, -viewPosition.z));
          gl_Position = projectionMatrix * viewPosition;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uOpacity;
        varying float vAlpha;
        void main() {
          float radius = length(gl_PointCoord - vec2(0.5));
          float alpha = exp(-radius * radius * 24.0) * vAlpha * uOpacity;
          if (alpha < 0.01) discard;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,transparent:!0,depthTest:!0,depthWrite:!1,blending:Yt}));se.renderOrder=11,se.frustumCulled=!1;const oe=3525,Re=new Float32Array(oe*3),nn=new Float32Array(oe*3),rn=new Float32Array(oe*3),ke=new Float32Array(oe*3),vn=new Float32Array(oe),hn=new Float32Array(oe),sn=new Float32Array(oe),fn=new Uint8Array(oe),Rn=new Float32Array(oe),Te=new Float32Array(oe),xn=new Float32Array(oe);for(let P=0;P<oe;P+=1){const H=P*2.39996323+w*.43,F=(P*47+w*19)%101/101,it=F<.38?0:F<.88?1:2,ht=(P*29+w*11)%97/97,_t=(P*71+w*23)%103/103,Mt=it===0?.12+ht*.3:it===1?.28+ht*1.72:1.2+ht*2.1,Ut=it===0?.18+_t**.72*1.08:it===1?.06+_t**.68*2.08:.28+_t**.62*2.55,Nt=(P*13+w*5)%31/31,wt=.012+Math.sqrt(Nt)*.12,Wt=Math.cos(H)*wt,jt=Math.sin(H)*wt,le=tt.clone().multiplyScalar(.59).addScaledVector(L,Wt).addScaledVector(q,jt),de=tt.clone().multiplyScalar(Mt).addScaledVector(L,Math.cos(H)*Ut).addScaledVector(q,Math.sin(H)*Ut),Ht=P*3;Re.set(le.toArray(),Ht),nn.set(de.toArray(),Ht);const Rt=le.normalize();rn.set(Rt.toArray(),Ht);const _e=(P*23+w*13)%31/31,ie=new Ot(16721416).lerp(new Ot(16773304),_e**3.2);ke.set(ie.toArray(),Ht);const Ce=(P*19+w*5)%43/43;vn[P]=(it===1?.022:.018)+Ce**3*(it===2?.075:.095),hn[P]=.35+(P*11+w*17)%37/37*.65,fn[P]=it,Rn[P]=(P*41+w*17)%97/97*(it===0?.38:.22),Te[P]=it===0?2.7+ht*.7:it===1?3.2+ht*.8:.7+ht*.5,xn[P]=it===0?.72+ht*.32:it===1?.28+ht*.38:.08+ht*.2}const an=new ae;an.setAttribute("position",new xe(Re,3)),an.setAttribute("color",new xe(ke,3)),an.setAttribute("aSize",new xe(vn,1)),an.setAttribute("aEnergy",new xe(hn,1)),an.setAttribute("aAlpha",new xe(sn,1).setUsage(go));const We=new Ue(an,new un({uniforms:{uOpacity:{value:0},uPointScale:{value:180}},vertexShader:`
        attribute vec3 color;
        attribute float aSize;
        attribute float aEnergy;
        attribute float aAlpha;
        uniform float uPointScale;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vColor = color * (0.78 + aEnergy * 0.5);
          vAlpha = aAlpha;
          vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = max(1.0, aSize * uPointScale / max(1.0, -viewPosition.z));
          gl_Position = projectionMatrix * viewPosition;
        }
      `,fragmentShader:`
        uniform float uOpacity;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          float distanceToCenter = length(gl_PointCoord - vec2(0.5));
          float gaussian = exp(-distanceToCenter * distanceToCenter * 18.0);
          // A broad, low-opacity Gaussian fills the space between hot cores
          // and gives the ejecta a soft suspended haze.
          float haze = exp(-distanceToCenter * distanceToCenter * 4.2) * 0.18;
          float alpha = (gaussian + haze) * vAlpha * uOpacity;
          if (alpha < 0.01) discard;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,transparent:!0,depthTest:!0,depthWrite:!1,blending:Yt}));We.renderOrder=12,We.frustumCulled=!1;const x=new be;x.add(V,J,se,We);const D=new be;return D.add(at,St,nt,Z,x),D.position.set(...g),D.userData={shell:nt,points:Z,atmosphere:at,corona:St,core:V,burst:J,surfaceEffects:x,ripple:se,splash:We,basePositions:Y,drift:et,splashVelocities:nn,splashSurfaceDirections:rn,splashEnergy:hn,splashTypes:fn,splashDelays:Rn,splashLifetimes:Te,splashSpinDrag:xn,contactDirection:tt,tangentA:L,tangentB:q,ripplePhase:Jt,surfaceBaseRotation:nt.rotation.clone(),impactSpinOrigin:0,impactCaptured:!1,phase:w*.73},B.add(D),D});return B.visible=!1,{group:B,lobes:v,positions:b.map(g=>new R(...g))}}function S(b,B){if(b.shape==="chladni"&&b.boundary==="volume")return rt(b,B);if(b.shape==="chladni")return O(b,B);const z=new be,$=new ln(new Qe({map:i,color:b.color,transparent:!0,opacity:.2,depthWrite:!1,blending:Yt}));$.scale.setScalar(b.radius*2.7),z.add($);const v=new ln(new Qe({map:i,color:b.color,transparent:!0,opacity:.42,depthWrite:!1,blending:Yt}));v.scale.setScalar(b.radius*1.65),z.add(v);const g=new ln(new Qe({map:i,color:$e[0],transparent:!0,opacity:.92,depthWrite:!1,blending:Yt}));g.scale.setScalar(b.radius*.68),z.add(g);const w=new ae,k=[],Y=[],W=360+B%4*60,et=new Ot(b.color);for(let Z=0;Z<W;Z+=1){const at=Z%3,ft=Z*2.39996323+b.phase,gt=Math.acos(1-2*((Z+.5)/W)),lt=b.radius*(.38+at*.28+.06*Math.sin(Z*1.7+b.phase)),bt=.78+.18*Math.sin(Z*.37+b.phase),St=1+.12*Math.sin(ft*2.4+at);k.push(Math.cos(ft)*Math.sin(gt)*lt*St,Math.cos(gt)*lt*bt,Math.sin(ft)*Math.sin(gt)*lt*.68);const Pt=new Ot($e[Math.min(at+1,$e.length-1)]).lerp(et,.22),A=.7+.38*((Math.sin(ft*1.7)+1)/2);Y.push(Pt.r*A,Pt.g*A,Pt.b*A)}w.setAttribute("position",new Xt(k,3)),w.setAttribute("color",new Xt(Y,3));const K=new Ue(w,new Ze({size:.056,map:i,vertexColors:!0,transparent:!0,opacity:.66,depthWrite:!1,blending:Yt,sizeAttenuation:!0}));z.add(K);const nt=new oo(b.radius*.88,.006,4,64),mt=new He(nt,new di({color:b.color,transparent:!0,opacity:.22,blending:Yt,depthWrite:!1}));return mt.rotation.x=Math.PI*.45+b.phase*.1,mt.rotation.z=b.phase,z.add(mt),z.position.set(...b.position),z.userData={...b,halo:$,mantle:v,core:g,particles:K,ring:mt,index:B},{group:z,definition:b}}function O(b,B){const z=new be,$=[],v=[],g=new Map,w=76,k=.115,[Y,W]=b.modes,et=new Ot(b.color),K=new Ot($e[0]);for(let St=0;St<w;St+=1)for(let Pt=0;Pt<w;Pt+=1){const A=Pt/(w-1)*2-1,tt=St/(w-1)*2-1,L=xc(A,tt,Y,W);if(Math.abs(L)>k)continue;const q=1-Math.abs(L)/k,V=Math.sin((St*83+Pt*47+B*29)*.17)*.008,J=[(A+V)*b.radius*1.25,(tt-V*.6)*b.radius*1.25,L*b.radius*1.7+Math.sin((A-tt)*Math.PI*(Y+W))*b.radius*.035];$.push(...J),g.set(St*w+Pt,J);const pt=et.clone().lerp(K,.28+q*.66);v.push(pt.r,pt.g,pt.b)}const nt=new ae;nt.setAttribute("position",new Xt($,3)),nt.setAttribute("color",new Xt(v,3));const mt=new Ue(nt,new Ze({size:.12,map:i,color:b.color,transparent:!0,opacity:.14,depthWrite:!1,blending:Yt,sizeAttenuation:!0}));z.add(mt);const Z=new Ue(nt,new Ze({size:.047,map:i,vertexColors:!0,transparent:!0,opacity:.72,depthWrite:!1,blending:Yt,sizeAttenuation:!0}));z.add(Z);let at=null;if(b.network){const St=[],Pt=[[0,1],[1,0],[1,1],[1,-1]];g.forEach((tt,L)=>{const q=Math.floor(L/w),V=L%w;Pt.forEach(([J,pt])=>{const vt=g.get((q+J)*w+V+pt);vt&&St.push(...tt,...vt)})});const A=new ae;A.setAttribute("position",new Xt(St,3)),at=new qr(A,new pi({color:b.color,transparent:!0,opacity:.16,depthWrite:!1,blending:Yt})),z.add(at)}const ft=b.radius*1.3,gt=b.boundary==="octagon"?Array.from({length:8},(St,Pt)=>{const A=Math.PI/8+Pt*Math.PI/4,tt=ft/Math.cos(Math.PI/8);return new R(Math.cos(A)*tt,Math.sin(A)*tt,0)}):[new R(-ft,-ft,0),new R(ft,-ft,0),new R(ft,ft,0),new R(-ft,ft,0)],lt=new ae().setFromPoints(gt),bt=new Ju(lt,new pi({color:b.color,transparent:!0,opacity:.13,depthWrite:!1,blending:Yt}));return z.add(bt),z.position.set(...b.position),z.userData={...b,isChladni:!0,pattern:Z,glow:mt,network:at,outline:bt,index:B},{group:z,definition:b}}function rt(b,B){if(t)return j(b,B);const z=new be,$=[],v=[],g=[],w=[],k=new Map,[Y,W,et]=b.modes,K=40,nt=b.radius*1.8,mt=new Ot(b.color),Z=new Ot(7439516),at=new Ot(16774367),ft=Array.from({length:18},(q,V)=>({x:Math.sin(V*3.71+.8)*.72,y:Math.cos(V*2.17-.4)*.72,z:Math.sin(V*1.43+1.9)*.72}));for(let q=0;q<K;q+=1){const V=q/(K-1)*2-1;for(let J=0;J<K;J+=1){const pt=J/(K-1)*2-1;for(let vt=0;vt<K;vt+=1){const At=vt/(K-1)*2-1;if(V*V*.62+pt*pt*.86+At*At*1.16>1.05)continue;const Ft=V+Math.sin(pt*Math.PI*1.4+b.phase)*.1+Math.sin(At*Math.PI*2.1)*.045,kt=pt+Math.sin(At*Math.PI*1.25-b.phase*.4)*.11-Math.sin(V*Math.PI*1.8)*.04,Jt=At+Math.sin(V*Math.PI*1.55+b.phase*.3)*.12+Math.cos(pt*Math.PI*1.9)*.04,fe=cg(Ft,kt,Jt,Y,W,et);let se=1/0,oe=1/0,Re=1/0;ft.forEach(Rn=>{const Te=Ft-Rn.x,xn=kt-Rn.y,an=Jt-Rn.z,We=Math.sqrt(Te*Te+xn*xn+an*an);We<se?(Re=oe,oe=se,se=We):We<oe?(Re=oe,oe=We):We<Re&&(Re=We)});const nn=Math.exp(-((oe-se)**2)*28-(Re-oe)**2*44),rn=Math.exp(-Math.abs(fe)*4.2),ke=nn*(.56+rn*.62);if(ke<.55)continue;const vn=Math.min(1,ke*.72+rn*.35),hn=Math.sin((q*97+J*57+vt*31+B*17)*.19)*.008,sn=[(Ft*1.12+kt*.22+kt*Jt*.055+hn)*nt,(kt*.92+Jt*.12+Math.sin(Ft*Math.PI)*.055-hn*.4)*nt,(Jt*.94+Ft*kt*.07)*nt];$.push(...sn),k.set(q*K*K+J*K+vt,{point:sn,filamentScore:ke});const fn=Z.clone().lerp(mt,.56+vn*.28).lerp(at,vn*.32);v.push(fn.r,fn.g,fn.b)}}}k.forEach(({point:q,filamentScore:V},J)=>{const pt=Math.floor(J/(K*K)),vt=J%(K*K),At=Math.floor(vt/K),It=vt%K;[[1,0,0],[0,1,0],[0,0,1]].forEach(([Ft,kt,Jt])=>{const fe=(pt+Ft)*K*K+(At+kt)*K+It+Jt,se=k.get(fe);se&&(g.push(...q,...se.point),(V>.76||se.filamentScore>.76)&&w.push(...q,...se.point))})}),[{center:[-.72,.86,.14],size:[.52,.18],bend:.18,angle:-.22},{center:[.66,-.72,-.2],size:[.34,.14],bend:-.14,angle:.46}].forEach(q=>{const pt=new Map;for(let vt=0;vt<9;vt+=1){const At=vt/8*2-1;for(let It=0;It<24;It+=1){const Ft=It/23*2-1;if(Ft*Ft+At*At*1.45>1)continue;const kt=xc(Ft,At,Y,W),Jt=Ft*q.size[0],fe=At*q.size[1],se=Math.cos(q.angle),oe=Math.sin(q.angle),Re=[(q.center[0]+Jt*se-fe*oe)*nt,(q.center[1]+Jt*oe+fe*se)*nt,(q.center[2]+kt*q.bend+Ft*Ft*.08)*nt];$.push(...Re),v.push(mt.r,mt.g,mt.b),pt.set(vt*24+It,Re)}}pt.forEach((vt,At)=>{const It=Math.floor(At/24),Ft=At%24;[[0,1],[1,0]].forEach(([kt,Jt])=>{const fe=pt.get((It+kt)*24+Ft+Jt);fe&&(g.push(...vt,...fe),w.push(...vt,...fe))})})});const lt=new ae;lt.setAttribute("position",new Xt($,3)),lt.setAttribute("color",new Xt(v,3));const bt=new Ue(lt,new Ze({size:.065,map:i,color:b.color,transparent:!0,opacity:.045,depthWrite:!1,blending:Yt,sizeAttenuation:!0}));z.add(bt);const St=new Ue(lt,new Ze({size:.019,map:i,vertexColors:!0,transparent:!0,opacity:.62,depthWrite:!1,blending:Yt,sizeAttenuation:!0}));z.add(St);const Pt=new ae;Pt.setAttribute("position",new Xt(g,3));const A=new qr(Pt,new pi({color:12242401,transparent:!0,opacity:.24,depthWrite:!1,blending:Yt}));z.add(A);const tt=new ae;tt.setAttribute("position",new Xt(w,3));const L=new qr(tt,new pi({color:16119807,transparent:!0,opacity:.2,depthWrite:!1,blending:Yt}));return z.add(L),z.position.set(...b.position),z.userData={...b,isChladni:!0,pattern:St,glow:bt,network:A,outline:L,index:B},{group:z,definition:b}}function j(b,B){const z=new be,$=[],v=[],g=t,w=b.radius*2.35,k=[[40,150,118],[46,190,200],[70,120,235],[182,206,255],[236,182,92],[230,72,96]],Y=Array.from({length:48},(Z,at)=>{const ft=k[Math.min(k.length-1,Math.floor(at/8))],gt=at%8/7,lt=gt*gt*.72,bt=.32+gt*.68;return ft.map(St=>Math.min(255,(St*(1-lt)+255*lt)*bt)/255)});for(let Z=0;Z<g.length;Z+=6){const at=g[Z+3],ft=g[Z+4],gt=at*ft,lt=g[Z]*w,bt=g[Z+1]*w,St=g[Z+2]*w;$.push(lt,bt,St);const Pt=Y[Math.min(47,Math.max(0,Math.round(g[Z+5])))]||Y[24],A=.38+gt*1.15;v.push(Math.min(1,Pt[0]*A),Math.min(1,Pt[1]*A),Math.min(1,Pt[2]*A))}const W=new ae;W.setAttribute("position",new Xt($,3)),W.setAttribute("color",new Xt(v,3));const et=new Ue(W,new Ze({size:.045,map:i,color:14412031,transparent:!0,opacity:.11,depthWrite:!1,blending:Yt,sizeAttenuation:!0}));z.add(et);const K=new Ue(W,new Ze({size:.02,map:i,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:Yt,sizeAttenuation:!0}));z.add(K);const nt=new ae;nt.setAttribute("position",new Xt([],3));const mt=new qr(nt,new pi({color:14477823,transparent:!0,opacity:0,depthWrite:!1,blending:Yt}));return z.add(mt),z.position.set(...b.position),z.userData={...b,isChladni:!0,pattern:K,glow:et,network:null,outline:mt,index:B},{group:z,definition:b}}function ct(b,B){const z=new be,$=new ln(new Qe({map:i,color:7998466,transparent:!0,opacity:.16,depthWrite:!1,blending:Yt}));$.scale.setScalar(b.scale*3.5),z.add($);const v=new ln(new Qe({map:i,color:16723724,transparent:!0,opacity:.86,depthWrite:!1,blending:Yt}));v.scale.setScalar(b.scale*1.35),z.add(v);const g=[];for(let Y=0;Y<11;Y+=1){const W=Y*2.39996323+B*.47,et=b.scale*(.65+Y%4*.35);g.push(Math.cos(W)*et,Math.sin(W)*et*.62,Math.sin(W*1.7)*et*.35)}const w=new ae;w.setAttribute("position",new Xt(g,3));const k=new Ue(w,new Ze({size:.038,map:i,color:16734751,transparent:!0,opacity:.7,depthWrite:!1,blending:Yt,sizeAttenuation:!0}));return z.add(k),z.position.set(...b.position),z.userData={halo:$,core:v,companions:k,phase:B*.73},{group:z,definition:b}}function ut(){const b=new ae;b.setAttribute("position",new Xt(new Array(6).fill(0),3));const B=new gs(b,new Xo({color:13095167,transparent:!0,opacity:.38,dashSize:.085,gapSize:.065,depthWrite:!1}));return B.frustumCulled=!1,B.computeLineDistances(),B}function ot(){const b=new be,B=new ln(new Qe({map:i,color:ls,transparent:!0,opacity:.9,depthWrite:!1,blending:Yt}));b.add(B);const z=new ln(new Qe({map:i,color:16777215,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Yt}));z.renderOrder=21,b.add(z);const $=new ae,v=new Float32Array(360*3),g=new Float32Array(360*3),w=[],k=new Ot(ls);for(let et=0;et<360;et+=1)w.push({s:et/359*2-1,angle:et*2.39996323,radial:.45+et%5*.1}),g[et*3]=k.r,g[et*3+1]=k.g,g[et*3+2]=k.b;$.setAttribute("position",new xe(v,3)),$.setAttribute("color",new xe(g,3));const Y=new Ue($,new Ze({size:.044,map:i,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,blending:Yt}));b.add(Y);const W=new be;for(let et=0;et<9;et+=1){const K=new He(new _s(.88,1,64),new di({color:ls,transparent:!0,opacity:.18,side:Tn,depthTest:!1,depthWrite:!1,blending:Yt}));K.userData.s=et/8*2-1,W.add(K)}return b.add(W),b.visible=!1,b.userData={core:B,frozenCoreBoost:z,particles:Y,rings:W,meta:w},{group:b,geometry:$,positions:v}}function dt(b){const B=Ec(b),z=Tc(b),$=b>Pn&&b<=Ge,v=b>Ge;if(!B.active||v){l.group.visible=!1;return}if(l.group.visible=!0,$){const A=l.group.userData.recombinationAnchor;A&&l.group.position.copy(A),l.group.userData.recombinationAnchorQuaternion&&l.group.quaternion.copy(l.group.userData.recombinationAnchorQuaternion);const tt=z.silenceBrightness;Vn.copy(Qr).lerp(bc,tt),l.group.userData.core.material.color.copy(Vn),l.group.userData.core.material.opacity=qt.lerp(.78,1,tt),l.group.userData.particles.material.opacity=qt.lerp(.92,.16,z.progress),l.group.userData.rings.children.forEach(L=>{const q=L.userData.s*19-z.waveTime*34,V=Math.exp(-L.userData.s*L.userData.s*2.8);L.material.opacity=(.1+Math.max(0,Math.cos(q))*.38*V)*(1-tt)});return}const g=b,w=1,k=1;Vn.copy(Qr).lerp(bc,z.silenceBrightness);const Y=yc(b).nodes,W=Math.min(B.progress,.9)*Y.length,et=Math.min(Y.length-1,Math.floor(W)),K=.12+(W-et)*.76,nt=s[Y[et]].group.position,mt=s[Y[(et+1)%Y.length]].group.position,Z=new R().subVectors(mt,nt),at=nt.clone().lerp(mt,Lt(K)),ft=Z.normalize(),gt=new R(0,1,0).cross(ft).normalize();gt.lengthSq()<.01&&gt.set(1,0,0);const lt=ft.clone().cross(gt).normalize();l.group.position.copy(at).addScaledVector(lt,Math.sin(g*19)*.045*k),l.group.quaternion.setFromUnitVectors(new R(0,0,1),ft),l.userData=l.group.userData,l.group.userData.recombinationAnchor=l.group.position.clone(),l.group.userData.recombinationAnchorQuaternion=l.group.quaternion.clone(),l.group.userData.core.scale.setScalar(B.radius*1.65);const bt=.9;l.group.userData.core.material.color.copy(Vn),l.group.userData.core.material.opacity=qt.lerp(bt,1,z.silenceBrightness),l.group.userData.frozenCoreBoost.material.opacity=0,l.group.userData.particles.material.opacity=qt.lerp(.92,1,z.silenceBrightness),l.group.userData.particles.material.size=qt.lerp(.044,.072,z.silenceBrightness);const St=l.geometry.getAttribute("position"),Pt=l.geometry.getAttribute("color");l.group.userData.meta.forEach((A,tt)=>{const L=A.s*19-g*34,q=Math.exp(-A.s*A.s*3.2),V=Math.sin(L)*B.radius*.58*q,J=(A.s*B.radius*2.7+V)*(1+z.progress*.8),pt=B.radius*(.34+.12*Math.cos(L))*w,vt=Math.cos(A.angle)*pt*A.radial,At=Math.sin(A.angle)*pt*A.radial;St.setXYZ(tt,vt,At,J),Pt.setXYZ(tt,Vn.r,Vn.g,Vn.b)}),l.group.userData.rings.children.forEach(A=>{const tt=A.userData.s*19-g*34,L=Math.exp(-A.userData.s*A.userData.s*2.8);A.position.z=A.userData.s*.42+Math.sin(tt)*.045*L,A.position.z*=1+z.progress*.8,A.scale.setScalar((.31+(.5+.5*Math.cos(tt))*.22*L)*w),A.material.opacity=(.1+Math.max(0,Math.cos(tt))*.38*L)*(1-z.progress*.35),A.rotation.z=g*.7+A.userData.s}),St.needsUpdate=!0,Pt.needsUpdate=!0}function Q(b,B){if(u.group.visible=b.active,!b.active){u.lobes.forEach(v=>{v.userData.impactCaptured=!1});return}const z=new Ot(16730902),$=new Ot(16770990);u.lobes.forEach((v,g)=>{const w=g+1,k=b.impactClock-w,Y=qt.clamp((b.pathPosition-w+.3)/.3,0,1),W=k<=0?1:1-Lt(qt.clamp(k/.34,0,1)),et=Lt(Y)*W,K=k<0?0:Math.exp(-k*7.5),nt=k<0?0:Lt(qt.clamp(k/.7,0,1)),mt=k<0?0:Lt(qt.clamp(k/.16,0,1)),{shell:Z,points:at,atmosphere:ft,corona:gt,core:lt,burst:bt,surfaceEffects:St,splash:Pt,basePositions:A,drift:tt,splashVelocities:L,splashSurfaceDirections:q,splashEnergy:V,splashTypes:J,splashDelays:pt,splashLifetimes:vt,splashSpinDrag:At,ripple:It,contactDirection:Ft,tangentA:kt,tangentB:Jt,ripplePhase:fe,surfaceBaseRotation:se,impactSpinOrigin:oe,impactCaptured:Re}=v.userData;k>=0&&!Re&&(v.userData.impactSpinOrigin=B,v.userData.impactCaptured=!0);const nn=v.userData.impactCaptured?Math.max(0,B-v.userData.impactSpinOrigin):0,rn=B*ra+g*.52,ke=at.geometry.getAttribute("position");for(let D=0;D<ke.count;D+=1){const P=D*3,H=Math.sign(A[P]||1)*nt*.1;ke.array[P]=A[P]+tt[P]*nt*1.7+H,ke.array[P+1]=A[P+1]+tt[P+1]*nt*1.7,ke.array[P+2]=A[P+2]+tt[P+2]*nt*1.7}ke.needsUpdate=!0,Z.rotation.set(se.x,se.y+rn,se.z),at.rotation.copy(Z.rotation),ft.rotation.copy(Z.rotation),gt.rotation.set(Z.rotation.x*.72,se.y+rn,Z.rotation.z*.66),St.rotation.set(0,v.userData.impactCaptured?nn*ra:0,0),v.scale.setScalar(1.42),Z.material.uniforms.uReveal.value=b.reveal,Z.material.uniforms.uImpact.value=K,Z.material.uniforms.uScar.value=mt,ft.material.uniforms.uReveal.value=b.reveal;const hn=k<0?0:1-Math.exp(-k*16);ft.material.uniforms.uImpact.value=Math.max(K,hn*.34),ft.material.uniforms.uHeat.value=hn,at.material.color.copy(z).lerp($,K*.68),at.material.opacity=b.reveal*(.08+K*.38+mt*.08),gt.material.opacity=b.reveal*(.2+et*.08+K*.24),lt.material.opacity=b.reveal*(K*.98+mt*.045),lt.scale.setScalar(.2+K*.46+mt*.03);const sn=It.geometry.getAttribute("position"),fn=It.geometry.getAttribute("aAlpha"),Rn=b.rippleStrength;for(let D=0;D<sn.count;D+=1){const P=Math.floor(D/96),H=nn-P*.12,F=D*3;if(!v.userData.impactCaptured||H<0||H>2.9){fn.array[D]=0;continue}const ht=.06+qt.clamp(H/2.35,0,1)*.92,_t=fe[D]+H*5.8,Mt=Math.sin(ht),Ut=Ft.x*Math.cos(ht)+(kt.x*Math.cos(_t)+Jt.x*Math.sin(_t))*Mt,Nt=Ft.y*Math.cos(ht)+(kt.y*Math.cos(_t)+Jt.y*Math.sin(_t))*Mt,wt=Ft.z*Math.cos(ht)+(kt.z*Math.cos(_t)+Jt.z*Math.sin(_t))*Mt,Wt=Math.hypot(Ut,Nt,wt),jt=.642/Math.max(.001,Wt);sn.array[F]=Ut*jt,sn.array[F+1]=Nt*jt,sn.array[F+2]=wt*jt;const le=Lt(qt.clamp(H/.045,0,1)),de=1-Lt(qt.clamp((H-1.2)/1.7,0,1));fn.array[D]=le*de*Rn*(.68+K*.36)}sn.needsUpdate=!0,fn.needsUpdate=!0,It.material.uniforms.uOpacity.value=b.reveal*1.3,It.material.uniforms.uPointScale.value=gi.domElement.height*.72;const Te=Pt.geometry.getAttribute("position"),xn=Pt.geometry.getAttribute("aAlpha"),an=b.rippleStrength;for(let D=0;D<Te.count;D+=1){const P=D*3,H=nn-pt[D],F=vt[D];if(!v.userData.impactCaptured||H<0||H>F){xn.array[D]=0;continue}const it=H/F,ht=J[D],_t=V[D],Mt=D*2.39996323+v.userData.phase,Ut=4.6+At[D]*8.4,Nt=Mt+H*Ut,wt=Math.cos(Nt),Wt=Math.sin(Nt);if(ht===0){const Ht=.04+H*(.3+_t*.42),Rt=Math.min(1.05,Ht),_e=Ft.x*Math.cos(Rt)+(kt.x*wt+Jt.x*Wt)*Math.sin(Rt),ie=Ft.y*Math.cos(Rt)+(kt.y*wt+Jt.y*Wt)*Math.sin(Rt),Ce=Ft.z*Math.cos(Rt)+(kt.z*wt+Jt.z*Wt)*Math.sin(Rt),dn=Math.hypot(_e,ie,Ce),De=(.642+(.018+_t*.08*Math.exp(-H*1.3)))/Math.max(.001,dn);Te.array[P]=_e*De,Te.array[P+1]=ie*De,Te.array[P+2]=Ce*De}else if(ht===1){const Ht=(D*37+g*17)%997/997,Rt=(D*71+13)%101/101-.5,_e=(D*113+g*29)%991/991-.5,ie=(D*89+g*11)%977/977-.5,Ce=D%3,dn=Ht*Math.PI*4.6+Ce*Math.PI*2/3,Be=.72+Ht*1.72+Rt*.12,De=Lt(qt.clamp(H/.78,0,1)),me=dn*De+H*(.5+At[D]*.85),Xe=qt.lerp(.642,Be,De)+Math.sin(dn*3+Mt)*.028*De,qe=.18+_t*.16,Le=Math.cos(me)*Xe,Ie=Math.sin(me)*Xe,er=(.08+De*.38)*(.55+Ht*.72),Un=_e*er+Math.sin(dn*1.7+Mt+H*2.2)*.045*De,gl=ie*(.06+De*.24);Te.array[P]=Le,Te.array[P+1]=Ie*Math.sin(qe)+Rt*.085*De+Un,Te.array[P+2]=Ie*Math.cos(qe)+gl}else{const Ht=.018+H*(.12+_t*.25),Rt=H*(.78+_t*.6)*Math.exp(-H*.16),_e=Math.sin(Nt*.5)*.025*_t;Te.array[P]=Ft.x*(.642+Rt)+kt.x*wt*Ht+Jt.x*Wt*Ht,Te.array[P+1]=Ft.y*(.642+Rt)+kt.y*wt*Ht+Jt.y*Wt*Ht+_e,Te.array[P+2]=Ft.z*(.642+Rt)+kt.z*wt*Ht+Jt.z*Wt*Ht}const jt=Lt(qt.clamp(H/.045,0,1)),le=1-Lt(qt.clamp((it-.46)/.54,0,1)),de=ht===0?.7:ht===1?.92:1.08;xn.array[D]=jt*le*de*(.42+_t*.7)*an}Te.needsUpdate=!0,xn.needsUpdate=!0,Pt.material.uniforms.uOpacity.value=b.reveal*1.9,Pt.material.uniforms.uPointScale.value=gi.domElement.height*.72;const We=Lt(qt.clamp(nn/.035,0,1)),x=v.userData.impactCaptured?We*Math.exp(-nn*5.2):0;bt.material.opacity=b.reveal*x*.95,bt.scale.setScalar(.28+x*.82)})}function yt(b,B){const z=new R().subVectors(B,b).normalize();return new Qi().setFromUnitVectors(new R(0,0,1),z)}function Ct(b=!1){const B=u.lobes[0],z=B.userData.contactDirection.clone().multiplyScalar(.642),$=b?B.userData.surfaceEffects:B;$.updateWorldMatrix(!0,!1);const v=$.localToWorld(z),g=B.getWorldPosition(new R),w=v.clone().sub(g).normalize();Ne.updateWorldMatrix(!0,!1);const k=Ne.worldToLocal(v.clone());return{worldPoint:v,localPoint:k,normalWorld:w}}function Bt(b,B,z,$,v){const g=new R(Math.sin(B*.12)*.28+z*.035,.12+Math.cos(B*.17)*.1,12.5-z*1.1+$.progress*1.7),w=new R(0,0,0),k=Lt(qt.clamp((b-(Ge-.42))/.42,0,1));if(!v.active&&k<=0){Je.position.copy(g),Je.lookAt(w);return}const Y=l.group.getWorldPosition(new R),W=u.lobes[0].getWorldPosition(new R),et=W.clone().lerp(Y,.34),K=et.clone().add(new R(0,.18,7.4)),nt=v.active?1:k,mt=v.active?Lt(qt.clamp((v.impactClock-1)/.34,0,1)):0,Z=W,at=Z.clone().add(new R(0,2.15,6.9));Je.position.copy(g).lerp(K,nt).lerp(at,mt),Je.lookAt(w.lerp(et,nt).lerp(Z,mt))}function te(b,B,z){const $=z.lobes[0].getWorldPosition(new R),v=$.clone().add(new R(0,2.15,6.9)),g=new R(0,.38,13.4),w=new R(0,.02,0),k=B.active?Lt(qt.clamp((b-Se)/1.8,0,1)):0;Je.position.copy(v).lerp(g,k),Je.position.x+=Math.sin(Math.max(0,b-Se)*.42)*.16*k,Je.lookAt($.clone().lerp(w,k))}function ue(b){if(!b.active){if(!l.group.userData.sceneThreeActive)return;l.group.userData.sceneThreeActive=!1,l.group.userData.sceneThreeStart=null,l.group.userData.sceneThreeStartQuaternion=null,l.group.scale.setScalar(1),l.group.userData.core.renderOrder=0,l.group.userData.core.material.depthTest=!0,l.group.userData.frozenCoreBoost.material.opacity=0;return}l.group.userData.sceneThreeActive=!0,l.group.visible=!0;const B=u.lobes[0],z=Ct(!1).localPoint;if(b.pathPosition<=0){const Y=B.getWorldPosition(new R),W=B.userData.contactDirection.clone().normalize(),et=Y.addScaledVector(W,3.15);Ne.updateWorldMatrix(!0,!1);const K=Ne.worldToLocal(et);l.group.userData.sceneThreeStart=K,l.group.userData.sceneThreeStartQuaternion=yt(K,z),l.group.position.copy(K),l.group.quaternion.copy(l.group.userData.sceneThreeStartQuaternion),l.group.scale.setScalar(1),l.group.userData.core.scale.setScalar(.82),l.group.userData.core.material.color.copy(Qr),l.group.userData.core.material.opacity=.94,l.group.userData.particles.material.opacity=.88,l.group.userData.frozenCoreBoost.material.opacity=0;return}const $=l.group.userData.sceneThreeStart??l.group.position.clone(),v=l.group.userData.sceneThreeStartQuaternion??l.group.quaternion.clone(),g=1-Math.pow(1-b.pathPosition,2.35),w=Math.max(0,b.impactClock-1)*ml;if(b.pathPosition<1){const Y=yt($,z);l.group.position.copy($).lerp(z,g),l.group.quaternion.copy(v).slerp(Y,g)}else{const Y=new R(0,1,0),W=w*ra,et=B.userData.contactDirection.clone().applyAxisAngle(Y,W).normalize(),K=B.getWorldPosition(new R).addScaledVector(et,.642*1.42);Ne.updateWorldMatrix(!0,!1);const nt=Ne.worldToLocal(K),mt=Ne.worldToLocal(B.getWorldPosition(new R)),Z=Y.clone().cross(et).normalize(),at=nt.clone().add(Z);l.group.position.copy(nt).lerp(mt,b.freeze),l.group.quaternion.copy(yt(nt,at))}l.group.scale.setScalar(1),l.group.userData.particles.material.opacity=.88*b.rippleStrength,l.group.userData.rings.children.forEach(Y=>{const W=.12+Math.max(0,Math.cos(Y.userData.s*19))*.34;Y.material.opacity=W*b.rippleStrength});const k=b.pathPosition>=1?Math.exp(-w*10):0;l.group.userData.core.scale.setScalar(.82),l.group.userData.core.renderOrder=20,Vn.copy(Qr).lerp(ia,b.freeze),l.group.userData.core.material.color.copy(Vn),l.group.userData.core.material.depthTest=!1,l.group.userData.core.material.opacity=b.coreStrength*(.9+k*.1),l.group.userData.frozenCoreBoost.scale.copy(l.group.userData.core.scale),l.group.userData.frozenCoreBoost.material.color.copy(ia),l.group.userData.frozenCoreBoost.material.opacity=b.freeze*.82}function st(b,B,z,$){const{group:v,backdrop:g,cloud:w,stars:k,lines:Y,distanceLine:W,distanceLabel:et,imprint:K,imprintHalo:nt,imprintCore:mt,imprintRings:Z,imprintTarget:at}=b;if(!B.active){v.visible=!1,k.forEach(L=>{L.userData.label.style.opacity="0",L.userData.label.style.display="none"}),et.style.opacity="0",et.style.display="none";return}v.visible=!0;const ft=Lt(qt.clamp((z-Se)/1.35,0,1)),gt=Math.max(0,z-Se),lt=Lt(qt.clamp(gt/(mn-Se),0,1)),bt=Lt(qt.clamp((gt-.48)/(mn-Se-.48),0,1)),St=qt.lerp(.3,.16,bt);v.rotation.x=ft*(.06+Math.sin(gt*.32)*.04),v.rotation.y=ft*(-.12+Math.sin(gt*.24)*.08),v.rotation.z=ft*Math.sin(gt*.18)*.025,g.material.opacity=B.reveal*.68,w.material.opacity=B.reveal*(.34+Math.sin(gt*.24)*.035);const Pt=$.lobes[0].getWorldPosition(new R),A=Lt(qt.clamp((z-Se)/1.05,0,1));K.position.copy(Pt).lerp(at,A),K.rotation.z=Math.sin((z-Se)*.7)*.08,k.forEach((L,q)=>{const{halo:V,core:J,phase:pt,label:vt,startPosition:At,targetPosition:It,graphPosition:Ft,morphDelay:kt}=L.userData,Jt=L.userData.definition.brightness??1,fe=Lt(qt.clamp((lt-kt)/(1-kt),0,1));Ft.lerpVectors(At,It,fe),L.position.copy(Ft);const se=.9+Math.sin(z*1.6+pt)*.1;J.material.opacity=Math.min(1,B.constellationReveal*se*.92*Jt),V.material.opacity=Math.min(1,B.constellationReveal*se*.24*Jt);const oe=B.constellationReveal*(.52+se*.22);vt.style.opacity=`${oe}`,vt.style.display="block"}),Y.forEach((L,q)=>{const V=Lt(qt.clamp((lt-L.userData.morphDelay)/(1-L.userData.morphDelay),0,1));if(L.userData.lastMorphFrame!==z){const At=G(L,V,k,0);y(L,At),y(L.userData.glow,At),L.userData.lastMorphFrame=z}const J=q*.075,pt=Lt(qt.clamp((B.lineReveal-J)/.24,0,1)),vt=L.userData.isLowerShadow?St:L.userData.isUpperTriangle?.62:.5;L.material.opacity=pt*vt,L.userData.glow.material.opacity=pt*vt*.4}),W.material.opacity=B.distanceReveal*.54,et.style.opacity=`${B.distanceReveal*.7}`,et.style.display="block";const tt=B.reveal*(1-B.imprintFade*.72);mt.material.opacity=tt*.96,nt.material.opacity=tt*.28,mt.scale.setScalar(.62+Math.sin(z*1.4)*.018),nt.scale.setScalar(1.65+Math.sin(z*1.1)*.06),Z.forEach((L,q)=>{const V=z*(1.8-q*.22)+L.userData.phase;L.scale.setScalar(1+Math.sin(V)*.04),L.material.opacity=tt*(.16-q*.025)})}function xt(b){const B=Ec(b),z=B.active&&b<=Pn;if(es.classList.toggle("is-visible",z),!z)return;const $=vg(B.progress);Lg.textContent=Math.round($.sourceFrequency),Ig.textContent=$.velocityRatio.toFixed(2),Ug.textContent=Math.round($.observedFrequency);const v=l.group.getWorldPosition(new R).project(Je),g=qt.clamp((v.x*.5+.5)*100+7,21,79),w=qt.clamp((-v.y*.5+.5)*100-5,27,69),k=Lt(Math.min(1,B.progress/.08)),Y=Lt(Math.min(1,(1-B.progress)/.1));es.style.left=`${g}%`,es.style.top=`${w}%`,es.style.opacity=`${k*Y}`,Dg.style.strokeDashoffset=`${96-B.progress*192}`}function Dt(b,B=b){const z=Math.min(mn,Math.floor(b*cs)/cs),$=Tc(z),v=gg(z),g=_g(z),w=v.active&&z>Ge,k=w?v:{...v,active:!1},Y=g.active&&z>xs,W=Y?g:{...g,active:!1},et=z>=Pn?$.waveTime:z,K=qt.smoothstep(z,Ge,Ge+.76),nt=1-K,mt=(1-$.progress*.46)*nt,Z=1-qt.smoothstep($.progress,0,.12),at=B*2,ft=Math.min(lg-1,Math.floor(z*cs));if(ft!==M){M=ft,Eg.textContent=dg(z),Tg.textContent=Y?"声学印记 · d_BAO ≈ 147 Mpc · 星系间距":w?"碰撞冲量  J = ∫F dt = Δp · 声痕冻结":z>Pn?"声学俘获 · x(t) = xw + (x₀ − xw)e^(−λt)":z>=4.3?"纵波位移  ξ(x,t) = A sin(kx - ωt)":"原初光子 · 重子 · 声压峰";const V=Y&&z>Se+.25,J=w&&z>Ge+.25,pt=z>=Pn+.3;wg.textContent=V?"SCENE 04 / DISTANCE IMPRINT":J?"SCENE 03 / SIXFOLD CORE":pt?"SCENE 02 / RECOMBINATION":"SCENE 01 / PRIMORDIAL PLASMA",Rg.textContent=V?"回声，写进星系之间。":J?"一声，撞向六合。":pt?"光与物质，从此分离。":"很久以前，声音还没有名字。",bg.textContent=`${ve(z)} / 00:24.60`}const gt=yc(z),lt=new Set(gt.nodes),bt=pg(z,gt.nodes,s.length,o.length),St=new Set(bt.main);Ne.rotation.x=Math.sin(et*.2)*.018,Ne.rotation.y=et*.035,Ne.rotation.z=Math.sin(et*.17)*.012;const Pt=qt.smoothstep(z,.85,1.25);e.children.forEach(V=>{V.material.uniforms.uTime.value=B,V.material.uniforms.uReveal.value=Pt,V.material.uniforms.uAbsorbProgress.value=$.absorption});const A=qt.lerp(1,.18,K);n.visible=$.progress>0,n.material.opacity=qt.smoothstep($.progress,.04,.34)*.28*A;const tt=qt.smoothstep($.progress,.05,.18),L=1-qt.smoothstep($.progress,.84,.97);wc.style.opacity=`${tt*L}`,wc.style.transform=`translateY(${(1-tt)*8}px)`,Cg.textContent=$.baryonVelocity.toFixed(3),Rc.style.opacity=`${w?v.reveal*(1-v.freeze*.35):0}`,Rc.style.transform=`translateY(${(1-v.reveal)*8}px)`,Pg.textContent=String(v.completedImpacts).padStart(2,"0"),s.forEach(({group:V,definition:J},pt)=>{const vt=lt.has(pt),At=vt?1-$.progress*.82:0,It=vt?1.18:.9,Ft=qt.lerp(It,.78,$.progress);if(V.scale.lerp(new R(Ft,Ft,Ft),.08),V.position.x=J.position[0]*(1+$.progress*.08),V.position.y=J.position[1]*(1+$.progress*.06)+Math.sin(et*.32+J.phase)*.05*$.baryonVelocity,V.position.z=J.position[2]-$.progress*.45,V.userData.isChladni){V.rotation.x=.58+Math.sin(at*.52+J.phase)*.24,V.rotation.y=J.phase+at*J.spin*1.15,V.rotation.z=J.phase*.18+at*J.spin*.62;const Jt=J.boundary==="volume";V.userData.pattern.material.opacity=(Jt?.5+At*.38:.56+At*.38)*mt,V.userData.glow.material.opacity=(Jt?.01+At*.035:.08+At*.2)*mt,V.userData.network&&(V.userData.network.material.opacity=(Jt?.16+At*.16:.1+At*.2)*mt),V.userData.outline.material.opacity=(Jt?.08+At*.16:.07+At*.2)*mt,V.userData.vertexPoints&&(V.userData.vertexPoints.material.opacity=(.58+At*.36)*mt)}else V.rotation.y=J.phase+at*J.spin,V.rotation.x=Math.sin(at*.6+J.phase)*.14,V.userData.halo.material.opacity=(.07+At*.16+Math.sin(B*1.8+J.phase)*.015)*mt,V.userData.mantle.material.opacity=(.22+At*.24)*mt,V.userData.core.material.opacity=(.6+At*.32)*mt,V.userData.particles.material.opacity=(.44+At*.4)*mt,V.userData.ring.material.opacity=(.12+At*.26)*mt;const kt=St.has(pt);d[pt].classList.toggle("is-focus",vt&&kt),d[pt].style.opacity=kt?`${(vt?1:.58)*Z}`:"0"}),o.forEach(({group:V,definition:J},pt)=>{const vt=.82+Math.sin(et*1.35+V.userData.phase)*.18*$.baryonVelocity;V.scale.setScalar(vt*qt.lerp(1,.72,$.progress)),V.position.x=J.position[0]*(1+$.progress*.14),V.position.y=J.position[1]*(1+$.progress*.11),V.position.z=J.position[2]-$.progress*.55,V.userData.companions.rotation.z=at*(.12+pt%3*.035),V.userData.companions.rotation.y=at*.08+V.userData.phase,V.userData.core.material.opacity=(.68+vt*.16)*mt,V.userData.halo.material.opacity=(.04+vt*.07)*mt,p[pt].style.opacity=pt===bt.minor?`${(.46+vt*.2)*Z}`:"0"}),Sc.forEach(([V,J],pt)=>{const vt=c[pt],At=s[gt.nodes[V]].group.position,It=s[gt.nodes[J]].group.position,Ft=vt.geometry.getAttribute("position");Ft.setXYZ(0,At.x,At.y,At.z),Ft.setXYZ(1,It.x,It.y,It.z),Ft.needsUpdate=!0,vt.material.opacity=qt.smoothstep(z,.12,.72)*.46*Z,vt.computeLineDistances()}),Q(k,B),dt(z),ue(k),st(f,W,z,u),e.children.forEach(V=>{V.material.uniforms.uAbsorbTarget.value.copy(l.group.position)});const q=mg(z);Y?te(z,W,u):Bt(z,et,q,$,k),Je.updateMatrixWorld(),xt(z),Tt(),Vt(f,W)}function Tt(){s.forEach(({group:b},B)=>{Gt(b,d[B])}),o.forEach(({group:b},B)=>{Gt(b,p[B])})}function Vt(b,B){B.active&&(b.stars.forEach(z=>{Gt(z,z.userData.label)}),Gt(b.distanceAnchor,b.distanceLabel))}function Gt(b,B){const z=b.getWorldPosition(new R).project(Je),$=z.z<1&&z.x>-1.1&&z.x<1.1&&z.y>-1.1&&z.y<1.1;B.style.display=$?"block":"none",$&&(B.style.left=`${(z.x*.5+.5)*100}%`,B.style.top=`${(-z.y*.5+.5)*100}%`)}function Lt(b){return b*b*(3-2*b)}function ve(b){return`00:${b.toFixed(2).padStart(5,"0")}`}function re(){const b=Za.clientWidth,B=Za.clientHeight,z=Math.min(window.devicePixelRatio||1,2,3840/b,2160/B);gi.setPixelRatio(z),gi.setSize(b,B,!1),Je.aspect=b/B,Je.updateProjectionMatrix()}function ge(b){_=b,ts.innerHTML=`<i data-lucide="${b?"pause":"play"}"></i>`,ts.setAttribute("aria-label",b?"暂停":"播放"),ts.title=b?"暂停":"播放",pl({icons:{Play:fl,Pause:hl,RotateCcw:dl}})}ts.addEventListener("click",async()=>{if(_){En.pause(),ge(!1);return}En.currentTime>=mn-.02&&(En.currentTime=0),await En.play(),ge(!0)}),Ag.addEventListener("click",()=>{En.pause(),En.currentTime=0,ge(!1),Dt(0,Oe)}),En.addEventListener("timeupdate",()=>{En.currentTime>=mn&&(En.pause(),En.currentTime=mn,ge(!1))}),window.addEventListener("resize",re),re(),Dt(0);const I=new vh;let Oe=0;function ne(){const b=Math.min(En.currentTime,mn);Oe+=Math.min(I.getDelta(),.05),Dt(b,Oe),gi.render(gr,Je),requestAnimationFrame(ne)}ne()}Ng();
