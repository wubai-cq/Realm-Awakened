(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uo="172",au=0,Ko=1,ou=2,ml=1,cu=2,ui=3,wi=0,Un=1,qn=2,Ti=0,_r=1,ue=2,jo=3,Qo=4,lu=5,zi=100,uu=101,hu=102,fu=103,du=104,pu=200,mu=201,gu=202,_u=203,ka=204,Ga=205,vu=206,xu=207,Mu=208,Su=209,yu=210,Eu=211,bu=212,Tu=213,Au=214,Wa=0,Xa=1,qa=2,yr=3,Ya=4,$a=5,Za=6,Ja=7,gl=0,wu=1,Cu=2,Ai=0,Ru=1,Pu=2,Du=3,Lu=4,Iu=5,Uu=6,Nu=7,_l=300,Er=301,br=302,Ka=303,ja=304,ta=306,Qa=1e3,ki=1001,to=1002,Zn=1003,Fu=1004,Qr=1005,ei=1006,ra=1007,Gi=1008,gi=1009,vl=1010,xl=1011,Yr=1012,No=1013,Wi=1014,hi=1015,Zr=1016,Fo=1017,Oo=1018,Tr=1020,Ml=35902,Sl=1021,yl=1022,$n=1023,El=1024,bl=1025,vr=1026,Ar=1027,Tl=1028,zo=1029,Al=1030,Bo=1031,Vo=1033,Us=33776,Ns=33777,Fs=33778,Os=33779,eo=35840,no=35841,io=35842,ro=35843,so=36196,ao=37492,oo=37496,co=37808,lo=37809,uo=37810,ho=37811,fo=37812,po=37813,mo=37814,go=37815,_o=37816,vo=37817,xo=37818,Mo=37819,So=37820,yo=37821,zs=36492,Eo=36494,bo=36495,wl=36283,To=36284,Ao=36285,wo=36286,Ou=3200,zu=3201,Bu=0,Vu=1,bi="",yn="srgb",wr="srgb-linear",Gs="linear",Ge="srgb",$i=7680,tc=519,Hu=512,ku=513,Gu=514,Cl=515,Wu=516,Xu=517,qu=518,Yu=519,Co=35044,ec=35048,nc="300 es",fi=2e3,Ws=2001;class Rr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ic=1234567;const kr=Math.PI/180,$r=180/Math.PI;function pi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function Ee(i,t,e){return Math.max(t,Math.min(e,i))}function Ho(i,t){return(i%t+t)%t}function $u(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Zu(i,t,e){return i!==t?(e-i)/(t-i):0}function Gr(i,t,e){return(1-e)*i+e*t}function Ju(i,t,e,n){return Gr(i,t,1-Math.exp(-e*n))}function Ku(i,t=1){return t-Math.abs(Ho(i,t*2)-t)}function ju(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Qu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function th(i,t){return i+Math.floor(Math.random()*(t-i+1))}function eh(i,t){return i+Math.random()*(t-i)}function nh(i){return i*(.5-Math.random())}function ih(i){i!==void 0&&(ic=i);let t=ic+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rh(i){return i*kr}function sh(i){return i*$r}function ah(i){return(i&i-1)===0&&i!==0}function oh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ch(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lh(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),u=s((t+n)/2),l=a((t+n)/2),f=s((t-n)/2),d=a((t-n)/2),p=s((n-t)/2),_=a((n-t)/2);switch(r){case"XYX":i.set(o*l,c*f,c*d,o*u);break;case"YZY":i.set(c*d,o*l,c*f,o*u);break;case"ZXZ":i.set(c*f,c*d,o*l,o*u);break;case"XZX":i.set(o*l,c*_,c*p,o*u);break;case"YXY":i.set(c*p,o*l,c*_,o*u);break;case"ZYZ":i.set(c*_,c*p,o*l,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const de={DEG2RAD:kr,RAD2DEG:$r,generateUUID:pi,clamp:Ee,euclideanModulo:Ho,mapLinear:$u,inverseLerp:Zu,lerp:Gr,damp:Ju,pingpong:Ku,smoothstep:ju,smootherstep:Qu,randInt:th,randFloat:eh,randFloatSpread:nh,seededRandom:ih,degToRad:rh,radToDeg:sh,isPowerOfTwo:ah,ceilPowerOfTwo:oh,floorPowerOfTwo:ch,setQuaternionFromProperEuler:lh,normalize:Ve,denormalize:Yn};class se{constructor(t=0,e=0){se.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _e{constructor(t,e,n,r,s,a,o,c,u){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,u)}set(t,e,n,r,s,a,o,c,u){const l=this.elements;return l[0]=t,l[1]=r,l[2]=o,l[3]=e,l[4]=s,l[5]=c,l[6]=n,l[7]=a,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],l=n[4],f=n[7],d=n[2],p=n[5],_=n[8],x=r[0],m=r[3],h=r[6],L=r[1],C=r[4],b=r[7],k=r[2],z=r[5],F=r[8];return s[0]=a*x+o*L+c*k,s[3]=a*m+o*C+c*z,s[6]=a*h+o*b+c*F,s[1]=u*x+l*L+f*k,s[4]=u*m+l*C+f*z,s[7]=u*h+l*b+f*F,s[2]=d*x+p*L+_*k,s[5]=d*m+p*C+_*z,s[8]=d*h+p*b+_*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],l=t[8];return e*a*l-e*o*u-n*s*l+n*o*c+r*s*u-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],l=t[8],f=l*a-o*u,d=o*c-l*s,p=u*s-a*c,_=e*f+n*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=f*x,t[1]=(r*u-l*n)*x,t[2]=(o*n-r*a)*x,t[3]=d*x,t[4]=(l*e-r*c)*x,t[5]=(r*s-o*e)*x,t[6]=p*x,t[7]=(n*c-u*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+t,-r*u,r*c,-r*(-u*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(sa.makeScale(t,e)),this}rotate(t){return this.premultiply(sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sa=new _e;function Rl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uh(){const i=Xs("canvas");return i.style.display="block",i}const rc={};function dr(i){i in rc||(rc[i]=!0,console.warn(i))}function hh(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function fh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function dh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const sc=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ac=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ph(){const i={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ge&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ge&&(r.r=xr(r.r),r.g=xr(r.g),r.b=xr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===bi?Gs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wr]:{primaries:t,whitePoint:n,transfer:Gs,toXYZ:sc,fromXYZ:ac,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:t,whitePoint:n,transfer:Ge,toXYZ:sc,fromXYZ:ac,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),i}const Oe=ph();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zi;class mh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zi===void 0&&(Zi=Xs("canvas")),Zi.width=t.width,Zi.height=t.height;const n=Zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=mi(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gh=0;class Pl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=pi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(aa(r[a].image)):s.push(aa(r[a]))}else s=aa(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _h=0;class Dn extends Rr{constructor(t=Dn.DEFAULT_IMAGE,e=Dn.DEFAULT_MAPPING,n=ki,r=ki,s=ei,a=Gi,o=$n,c=gi,u=Dn.DEFAULT_ANISOTROPY,l=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=pi(),this.name="",this.source=new Pl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qa:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case to:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qa:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case to:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=_l;Dn.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,e=0,n=0,r=1){tn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,u=c[0],l=c[4],f=c[8],d=c[1],p=c[5],_=c[9],x=c[2],m=c[6],h=c[10];if(Math.abs(l-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const C=(u+1)/2,b=(p+1)/2,k=(h+1)/2,z=(l+d)/4,F=(f+x)/4,q=(_+m)/4;return C>b&&C>k?C<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(C),r=z/n,s=F/n):b>k?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=z/r,s=q/r):k<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(k),n=F/s,r=q/s),this.set(n,r,s,e),this}let L=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(d-l)*(d-l));return Math.abs(L)<.001&&(L=1),this.x=(m-_)/L,this.y=(f-x)/L,this.z=(d-l)/L,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this.w=Ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this.w=Ee(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vh extends Rr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new tn(0,0,t,e),this.scissorTest=!1,this.viewport=new tn(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Dn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Pl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends vh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Dl extends Dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xh extends Dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ci{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],u=n[r+1],l=n[r+2],f=n[r+3];const d=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];if(o===0){t[e+0]=c,t[e+1]=u,t[e+2]=l,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=x;return}if(f!==x||c!==d||u!==p||l!==_){let m=1-o;const h=c*d+u*p+l*_+f*x,L=h>=0?1:-1,C=1-h*h;if(C>Number.EPSILON){const k=Math.sqrt(C),z=Math.atan2(k,h*L);m=Math.sin(m*z)/k,o=Math.sin(o*z)/k}const b=o*L;if(c=c*m+d*b,u=u*m+p*b,l=l*m+_*b,f=f*m+x*b,m===1-o){const k=1/Math.sqrt(c*c+u*u+l*l+f*f);c*=k,u*=k,l*=k,f*=k}}t[e]=c,t[e+1]=u,t[e+2]=l,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],u=n[r+2],l=n[r+3],f=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return t[e]=o*_+l*f+c*p-u*d,t[e+1]=c*_+l*d+u*f-o*p,t[e+2]=u*_+l*p+o*d-c*f,t[e+3]=l*_-o*f-c*d-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(n/2),l=o(r/2),f=o(s/2),d=c(n/2),p=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=d*l*f+u*p*_,this._y=u*p*f-d*l*_,this._z=u*l*_+d*p*f,this._w=u*l*f-d*p*_;break;case"YXZ":this._x=d*l*f+u*p*_,this._y=u*p*f-d*l*_,this._z=u*l*_-d*p*f,this._w=u*l*f+d*p*_;break;case"ZXY":this._x=d*l*f-u*p*_,this._y=u*p*f+d*l*_,this._z=u*l*_+d*p*f,this._w=u*l*f-d*p*_;break;case"ZYX":this._x=d*l*f-u*p*_,this._y=u*p*f+d*l*_,this._z=u*l*_-d*p*f,this._w=u*l*f+d*p*_;break;case"YZX":this._x=d*l*f+u*p*_,this._y=u*p*f+d*l*_,this._z=u*l*_-d*p*f,this._w=u*l*f-d*p*_;break;case"XZY":this._x=d*l*f-u*p*_,this._y=u*p*f-d*l*_,this._z=u*l*_+d*p*f,this._w=u*l*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],u=e[2],l=e[6],f=e[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(l-c)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(l-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+l)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,u=e._z,l=e._w;return this._x=n*l+a*o+r*u-s*c,this._y=r*l+a*c+s*o-n*u,this._z=s*l+a*u+n*c-r*o,this._w=a*l-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const u=Math.sqrt(c),l=Math.atan2(u,o),f=Math.sin((1-e)*l)/u,d=Math.sin(e*l)/u;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,u=2*(a*r-o*n),l=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+c*u+a*f-o*l,this.y=n+c*l+o*u-s*f,this.z=r+c*f+s*l-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oa.copy(this).projectOnVector(t),this.sub(oa)}reflect(t){return this.sub(oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new R,oc=new Ci;class Jr{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(t.matrixWorld),this.union(ts)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dr),es.subVectors(this.max,Dr),Ji.subVectors(t.a,Dr),Ki.subVectors(t.b,Dr),ji.subVectors(t.c,Dr),_i.subVectors(Ki,Ji),vi.subVectors(ji,Ki),Ri.subVectors(Ji,ji);let e=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Ri.z,Ri.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Ri.z,0,-Ri.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Ri.y,Ri.x,0];return!ca(e,Ji,Ki,ji,es)||(e=[1,0,0,0,1,0,0,0,1],!ca(e,Ji,Ki,ji,es))?!1:(ns.crossVectors(_i,vi),e=[ns.x,ns.y,ns.z],ca(e,Ji,Ki,ji,es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ii=[new R,new R,new R,new R,new R,new R,new R,new R],Gn=new R,ts=new Jr,Ji=new R,Ki=new R,ji=new R,_i=new R,vi=new R,Ri=new R,Dr=new R,es=new R,ns=new R,Pi=new R;function ca(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Pi.fromArray(i,s);const o=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),c=t.dot(Pi),u=e.dot(Pi),l=n.dot(Pi);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>o)return!1}return!0}const Mh=new Jr,Lr=new R,la=new R;class Kr{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mh.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lr.subVectors(t,this.center);const e=Lr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Lr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(la.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lr.copy(t.center).add(la)),this.expandByPoint(Lr.copy(t.center).sub(la))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new R,ua=new R,is=new R,xi=new R,ha=new R,rs=new R,fa=new R;class ko{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ua.copy(t).add(e).multiplyScalar(.5),is.copy(e).sub(t).normalize(),xi.copy(this.origin).sub(ua);const s=t.distanceTo(e)*.5,a=-this.direction.dot(is),o=xi.dot(this.direction),c=-xi.dot(is),u=xi.lengthSq(),l=Math.abs(1-a*a);let f,d,p,_;if(l>0)if(f=a*c-o,d=a*o-c,_=s*l,f>=0)if(d>=-_)if(d<=_){const x=1/l;f*=x,d*=x,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+u}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ua).addScaledVector(is,d),p}intersectSphere(t,e){ri.subVectors(t.center,this.origin);const n=ri.dot(this.direction),r=ri.dot(ri)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const u=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,r=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,r=(t.min.x-d.x)*u),l>=0?(s=(t.min.y-d.y)*l,a=(t.max.y-d.y)*l):(s=(t.max.y-d.y)*l,a=(t.min.y-d.y)*l),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,r,s){ha.subVectors(e,t),rs.subVectors(n,t),fa.crossVectors(ha,rs);let a=this.direction.dot(fa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,t);const c=o*this.direction.dot(rs.crossVectors(xi,rs));if(c<0)return null;const u=o*this.direction.dot(ha.cross(xi));if(u<0||c+u>a)return null;const l=-o*xi.dot(fa);return l<0?null:this.at(l/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,e,n,r,s,a,o,c,u,l,f,d,p,_,x,m){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,u,l,f,d,p,_,x,m)}set(t,e,n,r,s,a,o,c,u,l,f,d,p,_,x,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=u,h[6]=l,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Qi.setFromMatrixColumn(t,0).length(),s=1/Qi.setFromMatrixColumn(t,1).length(),a=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),l=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*l,p=a*f,_=o*l,x=o*f;e[0]=c*l,e[4]=-c*f,e[8]=u,e[1]=p+_*u,e[5]=d-x*u,e[9]=-o*c,e[2]=x-d*u,e[6]=_+p*u,e[10]=a*c}else if(t.order==="YXZ"){const d=c*l,p=c*f,_=u*l,x=u*f;e[0]=d+x*o,e[4]=_*o-p,e[8]=a*u,e[1]=a*f,e[5]=a*l,e[9]=-o,e[2]=p*o-_,e[6]=x+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*l,p=c*f,_=u*l,x=u*f;e[0]=d-x*o,e[4]=-a*f,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*l,e[9]=x-d*o,e[2]=-a*u,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*l,p=a*f,_=o*l,x=o*f;e[0]=c*l,e[4]=_*u-p,e[8]=d*u+x,e[1]=c*f,e[5]=x*u+d,e[9]=p*u-_,e[2]=-u,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*u,_=o*c,x=o*u;e[0]=c*l,e[4]=x-d*f,e[8]=_*f+p,e[1]=f,e[5]=a*l,e[9]=-o*l,e[2]=-u*l,e[6]=p*f+_,e[10]=d-x*f}else if(t.order==="XZY"){const d=a*c,p=a*u,_=o*c,x=o*u;e[0]=c*l,e[4]=-f,e[8]=u*l,e[1]=d*f+x,e[5]=a*l,e[9]=p*f-_,e[2]=_*f-p,e[6]=o*l,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sh,t,yh)}lookAt(t,e,n){const r=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Mi.crossVectors(n,Fn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Mi.crossVectors(n,Fn)),Mi.normalize(),ss.crossVectors(Fn,Mi),r[0]=Mi.x,r[4]=ss.x,r[8]=Fn.x,r[1]=Mi.y,r[5]=ss.y,r[9]=Fn.y,r[2]=Mi.z,r[6]=ss.z,r[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],l=n[1],f=n[5],d=n[9],p=n[13],_=n[2],x=n[6],m=n[10],h=n[14],L=n[3],C=n[7],b=n[11],k=n[15],z=r[0],F=r[4],q=r[8],T=r[12],S=r[1],V=r[5],rt=r[9],K=r[13],ht=r[2],mt=r[6],ot=r[10],_t=r[14],tt=r[3],Lt=r[7],Ht=r[11],ie=r[15];return s[0]=a*z+o*S+c*ht+u*tt,s[4]=a*F+o*V+c*mt+u*Lt,s[8]=a*q+o*rt+c*ot+u*Ht,s[12]=a*T+o*K+c*_t+u*ie,s[1]=l*z+f*S+d*ht+p*tt,s[5]=l*F+f*V+d*mt+p*Lt,s[9]=l*q+f*rt+d*ot+p*Ht,s[13]=l*T+f*K+d*_t+p*ie,s[2]=_*z+x*S+m*ht+h*tt,s[6]=_*F+x*V+m*mt+h*Lt,s[10]=_*q+x*rt+m*ot+h*Ht,s[14]=_*T+x*K+m*_t+h*ie,s[3]=L*z+C*S+b*ht+k*tt,s[7]=L*F+C*V+b*mt+k*Lt,s[11]=L*q+C*rt+b*ot+k*Ht,s[15]=L*T+C*K+b*_t+k*ie,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],u=t[13],l=t[2],f=t[6],d=t[10],p=t[14],_=t[3],x=t[7],m=t[11],h=t[15];return _*(+s*c*f-r*u*f-s*o*d+n*u*d+r*o*p-n*c*p)+x*(+e*c*p-e*u*d+s*a*d-r*a*p+r*u*l-s*c*l)+m*(+e*u*f-e*o*p-s*a*f+n*a*p+s*o*l-n*u*l)+h*(-r*o*l-e*c*f+e*o*d+r*a*f-n*a*d+n*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],l=t[8],f=t[9],d=t[10],p=t[11],_=t[12],x=t[13],m=t[14],h=t[15],L=f*m*u-x*d*u+x*c*p-o*m*p-f*c*h+o*d*h,C=_*d*u-l*m*u-_*c*p+a*m*p+l*c*h-a*d*h,b=l*x*u-_*f*u+_*o*p-a*x*p-l*o*h+a*f*h,k=_*f*c-l*x*c-_*o*d+a*x*d+l*o*m-a*f*m,z=e*L+n*C+r*b+s*k;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return t[0]=L*F,t[1]=(x*d*s-f*m*s-x*r*p+n*m*p+f*r*h-n*d*h)*F,t[2]=(o*m*s-x*c*s+x*r*u-n*m*u-o*r*h+n*c*h)*F,t[3]=(f*c*s-o*d*s-f*r*u+n*d*u+o*r*p-n*c*p)*F,t[4]=C*F,t[5]=(l*m*s-_*d*s+_*r*p-e*m*p-l*r*h+e*d*h)*F,t[6]=(_*c*s-a*m*s-_*r*u+e*m*u+a*r*h-e*c*h)*F,t[7]=(a*d*s-l*c*s+l*r*u-e*d*u-a*r*p+e*c*p)*F,t[8]=b*F,t[9]=(_*f*s-l*x*s-_*n*p+e*x*p+l*n*h-e*f*h)*F,t[10]=(a*x*s-_*o*s+_*n*u-e*x*u-a*n*h+e*o*h)*F,t[11]=(l*o*s-a*f*s-l*n*u+e*f*u+a*n*p-e*o*p)*F,t[12]=k*F,t[13]=(l*x*r-_*f*r+_*n*d-e*x*d-l*n*m+e*f*m)*F,t[14]=(_*o*r-a*x*r-_*n*c+e*x*c+a*n*m-e*o*m)*F,t[15]=(a*f*r-l*o*r+l*n*c-e*f*c-a*n*d+e*o*d)*F,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,u=s*a,l=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,l*o+n,l*c-r*a,0,u*c-r*o,l*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,u=s+s,l=a+a,f=o+o,d=s*u,p=s*l,_=s*f,x=a*l,m=a*f,h=o*f,L=c*u,C=c*l,b=c*f,k=n.x,z=n.y,F=n.z;return r[0]=(1-(x+h))*k,r[1]=(p+b)*k,r[2]=(_-C)*k,r[3]=0,r[4]=(p-b)*z,r[5]=(1-(d+h))*z,r[6]=(m+L)*z,r[7]=0,r[8]=(_+C)*F,r[9]=(m-L)*F,r[10]=(1-(d+x))*F,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Qi.set(r[0],r[1],r[2]).length();const a=Qi.set(r[4],r[5],r[6]).length(),o=Qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Wn.copy(this);const u=1/s,l=1/a,f=1/o;return Wn.elements[0]*=u,Wn.elements[1]*=u,Wn.elements[2]*=u,Wn.elements[4]*=l,Wn.elements[5]*=l,Wn.elements[6]*=l,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,e.setFromRotationMatrix(Wn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=fi){const c=this.elements,u=2*s/(e-t),l=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let p,_;if(o===fi)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ws)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=l,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=fi){const c=this.elements,u=1/(e-t),l=1/(n-r),f=1/(a-s),d=(e+t)*u,p=(n+r)*l;let _,x;if(o===fi)_=(a+s)*f,x=-2*f;else if(o===Ws)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qi=new R,Wn=new $e,Sh=new R(0,0,0),yh=new R(1,1,1),Mi=new R,ss=new R,Fn=new R,cc=new $e,lc=new Ci;class Jn{constructor(t=0,e=0,n=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],l=r[9],f=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lc.setFromEuler(this),this.setFromQuaternion(lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class Ll{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Eh=0;const uc=new R,tr=new Ci,si=new $e,as=new R,Ir=new R,bh=new R,Th=new Ci,hc=new R(1,0,0),fc=new R(0,1,0),dc=new R(0,0,1),pc={type:"added"},Ah={type:"removed"},er={type:"childadded",child:null},da={type:"childremoved",child:null};class _n extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const t=new R,e=new Jn,n=new Ci,r=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new _e}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(hc,t)}rotateY(t){return this.rotateOnAxis(fc,t)}rotateZ(t){return this.rotateOnAxis(dc,t)}translateOnAxis(t,e){return uc.copy(t).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hc,t)}translateY(t){return this.translateOnAxis(fc,t)}translateZ(t){return this.translateOnAxis(dc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?as.copy(t):as.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Ir,as,this.up):si.lookAt(as,Ir,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),tr.setFromRotationMatrix(si),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pc),er.child=t,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ah),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pc),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,t,bh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Th,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){const f=c[u];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),u=a(t.textures),l=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const c=[];for(const u in o){const l=o[u];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}_n.DEFAULT_UP=new R(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new R,ai=new R,pa=new R,oi=new R,nr=new R,ir=new R,mc=new R,ma=new R,ga=new R,_a=new R,va=new tn,xa=new tn,Ma=new tn;class kn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Xn.subVectors(t,e),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Xn.subVectors(r,e),ai.subVectors(n,e),pa.subVectors(t,e);const a=Xn.dot(Xn),o=Xn.dot(ai),c=Xn.dot(pa),u=ai.dot(ai),l=ai.dot(pa),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*c-o*l)*d,_=(a*l-o*c)*d;return s.set(1-p-_,_,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,oi.x),c.addScaledVector(a,oi.y),c.addScaledVector(o,oi.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return va.setScalar(0),xa.setScalar(0),Ma.setScalar(0),va.fromBufferAttribute(t,e),xa.fromBufferAttribute(t,n),Ma.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(va,s.x),a.addScaledVector(xa,s.y),a.addScaledVector(Ma,s.z),a}static isFrontFacing(t,e,n,r){return Xn.subVectors(n,e),ai.subVectors(t,e),Xn.cross(ai).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Xn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return kn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;nr.subVectors(r,n),ir.subVectors(s,n),ma.subVectors(t,n);const c=nr.dot(ma),u=ir.dot(ma);if(c<=0&&u<=0)return e.copy(n);ga.subVectors(t,r);const l=nr.dot(ga),f=ir.dot(ga);if(l>=0&&f<=l)return e.copy(r);const d=c*f-l*u;if(d<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(n).addScaledVector(nr,a);_a.subVectors(t,s);const p=nr.dot(_a),_=ir.dot(_a);if(_>=0&&p<=_)return e.copy(s);const x=p*u-c*_;if(x<=0&&u>=0&&_<=0)return o=u/(u-_),e.copy(n).addScaledVector(ir,o);const m=l*_-p*f;if(m<=0&&f-l>=0&&p-_>=0)return mc.subVectors(s,r),o=(f-l)/(f-l+(p-_)),e.copy(r).addScaledVector(mc,o);const h=1/(m+x+d);return a=x*h,o=d*h,e.copy(n).addScaledVector(nr,a).addScaledVector(ir,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},os={h:0,s:0,l:0};function Sa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Oe.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Oe.workingColorSpace){if(t=Ho(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Sa(a,s,t+1/3),this.g=Sa(a,s,t),this.b=Sa(a,s,t-1/3)}return Oe.toWorkingColorSpace(this,r),this}setStyle(t,e=yn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=yn){const n=Il[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yn){return Oe.fromWorkingColorSpace(Mn.copy(this),t),Math.round(Ee(Mn.r*255,0,255))*65536+Math.round(Ee(Mn.g*255,0,255))*256+Math.round(Ee(Mn.b*255,0,255))}getHexString(t=yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Oe.workingColorSpace){Oe.fromWorkingColorSpace(Mn.copy(this),e);const n=Mn.r,r=Mn.g,s=Mn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,u;const l=(o+a)/2;if(o===a)c=0,u=0;else{const f=a-o;switch(u=l<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=u,t.l=l,t}getRGB(t,e=Oe.workingColorSpace){return Oe.fromWorkingColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=yn){Oe.fromWorkingColorSpace(Mn.copy(this),t);const e=Mn.r,n=Mn.g,r=Mn.b;return t!==yn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(os);const n=Gr(Si.h,os.h,e),r=Gr(Si.s,os.s,e),s=Gr(Si.l,os.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new ee;ee.NAMES=Il;let wh=0;class qi extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=_r,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Ga,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pr extends qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nn=new R,cs=new se;class Ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Co,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cs.fromBufferAttribute(this,e),cs.applyMatrix3(t),this.setXY(e,cs.x,cs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),r=Ve(r,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Co&&(t.usage=this.usage),t}}class Ul extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nl extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ch=0;const Vn=new $e,ya=new _n,rr=new R,On=new Jr,Ur=new Jr,un=new R;class Te extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rl(t)?Nl:Ul)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new _e().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,n){return Vn.makeTranslation(t,e,n),this.applyMatrix4(Vn),this}scale(t,e,n){return Vn.makeScale(t,e,n),this.applyMatrix4(Vn),this}lookAt(t){return ya.lookAt(t),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ur.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(On.min,Ur.min),On.expandByPoint(un),un.addVectors(On.max,Ur.max),On.expandByPoint(un)):(On.expandByPoint(Ur.min),On.expandByPoint(Ur.max))}On.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)un.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(un));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let u=0,l=o.count;u<l;u++)un.fromBufferAttribute(o,u),c&&(rr.fromBufferAttribute(t,u),un.add(rr)),r=Math.max(r,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let q=0;q<n.count;q++)o[q]=new R,c[q]=new R;const u=new R,l=new R,f=new R,d=new se,p=new se,_=new se,x=new R,m=new R;function h(q,T,S){u.fromBufferAttribute(n,q),l.fromBufferAttribute(n,T),f.fromBufferAttribute(n,S),d.fromBufferAttribute(s,q),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,S),l.sub(u),f.sub(u),p.sub(d),_.sub(d);const V=1/(p.x*_.y-_.x*p.y);isFinite(V)&&(x.copy(l).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(V),m.copy(f).multiplyScalar(p.x).addScaledVector(l,-_.x).multiplyScalar(V),o[q].add(x),o[T].add(x),o[S].add(x),c[q].add(m),c[T].add(m),c[S].add(m))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let q=0,T=L.length;q<T;++q){const S=L[q],V=S.start,rt=S.count;for(let K=V,ht=V+rt;K<ht;K+=3)h(t.getX(K+0),t.getX(K+1),t.getX(K+2))}const C=new R,b=new R,k=new R,z=new R;function F(q){k.fromBufferAttribute(r,q),z.copy(k);const T=o[q];C.copy(T),C.sub(k.multiplyScalar(k.dot(T))).normalize(),b.crossVectors(z,T);const V=b.dot(c[q])<0?-1:1;a.setXYZW(q,C.x,C.y,C.z,V)}for(let q=0,T=L.length;q<T;++q){const S=L[q],V=S.start,rt=S.count;for(let K=V,ht=V+rt;K<ht;K+=3)F(t.getX(K+0)),F(t.getX(K+1)),F(t.getX(K+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new R,s=new R,a=new R,o=new R,c=new R,u=new R,l=new R,f=new R;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),l.subVectors(a,s),f.subVectors(r,s),l.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,m),o.add(l),c.add(l),u.add(l),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),l.subVectors(a,s),f.subVectors(r,s),l.cross(f),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(o,c){const u=o.array,l=o.itemSize,f=o.normalized,d=new u.constructor(c.length*l);let p=0,_=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*l;for(let h=0;h<l;h++)d[_++]=u[p++]}return new Ye(d,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=t(c,n);e.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let l=0,f=u.length;l<f;l++){const d=u[l],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],l=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];l.push(p.toJSON(t.data))}l.length>0&&(r[c]=l,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const u in r){const l=r[u];this.setAttribute(u,l.clone(e))}const s=t.morphAttributes;for(const u in s){const l=[],f=s[u];for(let d=0,p=f.length;d<p;d++)l.push(f[d].clone(e));this.morphAttributes[u]=l}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,l=a.length;u<l;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gc=new $e,Di=new ko,ls=new Kr,_c=new R,us=new R,hs=new R,fs=new R,Ea=new R,ds=new R,vc=new R,ps=new R;class Pn extends _n{constructor(t=new Te,e=new pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){ds.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const l=o[c],f=s[c];l!==0&&(Ea.fromBufferAttribute(f,t),a?ds.addScaledVector(Ea,l):ds.addScaledVector(Ea.sub(e),l))}e.add(ds)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(s),Di.copy(t.ray).recast(t.near),!(ls.containsPoint(Di.origin)===!1&&(Di.intersectSphere(ls,_c)===null||Di.origin.distanceToSquared(_c)>(t.far-t.near)**2))&&(gc.copy(s).invert(),Di.copy(t.ray).applyMatrix4(gc),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,l=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],h=a[m.materialIndex],L=Math.max(m.start,p.start),C=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=L,k=C;b<k;b+=3){const z=o.getX(b),F=o.getX(b+1),q=o.getX(b+2);r=ms(this,h,t,n,u,l,f,z,F,q),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const L=o.getX(m),C=o.getX(m+1),b=o.getX(m+2);r=ms(this,a,t,n,u,l,f,L,C,b),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],h=a[m.materialIndex],L=Math.max(m.start,p.start),C=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=L,k=C;b<k;b+=3){const z=b,F=b+1,q=b+2;r=ms(this,h,t,n,u,l,f,z,F,q),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const L=m,C=m+1,b=m+2;r=ms(this,a,t,n,u,l,f,L,C,b),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Rh(i,t,e,n,r,s,a,o){let c;if(t.side===Un?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===wi,o),c===null)return null;ps.copy(o),ps.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(ps);return u<e.near||u>e.far?null:{distance:u,point:ps.clone(),object:i}}function ms(i,t,e,n,r,s,a,o,c,u){i.getVertexPosition(o,us),i.getVertexPosition(c,hs),i.getVertexPosition(u,fs);const l=Rh(i,t,e,n,us,hs,fs,vc);if(l){const f=new R;kn.getBarycoord(vc,us,hs,fs,f),r&&(l.uv=kn.getInterpolatedAttribute(r,o,c,u,f,new se)),s&&(l.uv1=kn.getInterpolatedAttribute(s,o,c,u,f,new se)),a&&(l.normal=kn.getInterpolatedAttribute(a,o,c,u,f,new R),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const d={a:o,b:c,c:u,normal:new R,materialIndex:0};kn.getNormal(us,hs,fs,d.normal),l.face=d,l.barycoord=f}return l}class jr extends Te{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],l=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,r,a,2),_("x","z","y",1,-1,t,n,-e,r,a,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(f,2));function _(x,m,h,L,C,b,k,z,F,q,T){const S=b/F,V=k/q,rt=b/2,K=k/2,ht=z/2,mt=F+1,ot=q+1;let _t=0,tt=0;const Lt=new R;for(let Ht=0;Ht<ot;Ht++){const ie=Ht*V-K;for(let xe=0;xe<mt;xe++){const ze=xe*S-rt;Lt[x]=ze*L,Lt[m]=ie*C,Lt[h]=ht,u.push(Lt.x,Lt.y,Lt.z),Lt[x]=0,Lt[m]=0,Lt[h]=z>0?1:-1,l.push(Lt.x,Lt.y,Lt.z),f.push(xe/F),f.push(1-Ht/q),_t+=1}}for(let Ht=0;Ht<q;Ht++)for(let ie=0;ie<F;ie++){const xe=d+ie+mt*Ht,ze=d+ie+mt*(Ht+1),st=d+(ie+1)+mt*(Ht+1),yt=d+(ie+1)+mt*Ht;c.push(xe,ze,yt),c.push(ze,st,yt),tt+=6}o.addGroup(p,tt,T),p+=tt,d+=_t}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Cn(i){const t={};for(let e=0;e<i.length;e++){const n=Cr(i[e]);for(const r in n)t[r]=n[r]}return t}function Ph(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}const Dh={clone:Cr,merge:Cn};var Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=Ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cr(t.uniforms),this.uniformsGroups=Ph(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ol extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new R,xc=new se,Mc=new se;class Hn extends Ol{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,xc,Mc),e.subVectors(Mc,xc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(kr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const sr=-90,ar=1;class Uh extends _n{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hn(sr,ar,t,e);r.layers=this.layers,this.add(r);const s=new Hn(sr,ar,t,e);s.layers=this.layers,this.add(s);const a=new Hn(sr,ar,t,e);a.layers=this.layers,this.add(a);const o=new Hn(sr,ar,t,e);o.layers=this.layers,this.add(o);const c=new Hn(sr,ar,t,e);c.layers=this.layers,this.add(c);const u=new Hn(sr,ar,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const u of e)this.remove(u);if(t===fi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,l]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,l),t.setRenderTarget(f,d,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class zl extends Dn{constructor(t,e,n,r,s,a,o,c,u,l){t=t!==void 0?t:[],e=e!==void 0?e:Er,super(t,e,n,r,s,a,o,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nh extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new zl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ei}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new jr(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:Ti});s.uniforms.tEquirect.value=e;const a=new Pn(r,s),o=e.minFilter;return e.minFilter===Gi&&(e.minFilter=ei),new Uh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class Go{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ee(t),this.density=e}clone(){return new Go(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Fh extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Oh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Co,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bn=new R;class qs{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),r=Ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),r=Ve(r,this.array),s=Ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new qs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class pn extends qi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let or;const Nr=new R,cr=new R,lr=new R,ur=new se,Fr=new se,Bl=new $e,gs=new R,Or=new R,_s=new R,Sc=new se,ba=new se,yc=new se;class Sn extends _n{constructor(t=new pn){if(super(),this.isSprite=!0,this.type="Sprite",or===void 0){or=new Te;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Oh(e,5);or.setIndex([0,1,2,0,2,3]),or.setAttribute("position",new qs(n,3,0,!1)),or.setAttribute("uv",new qs(n,2,3,!1))}this.geometry=or,this.material=t,this.center=new se(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cr.setFromMatrixScale(this.matrixWorld),Bl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cr.multiplyScalar(-lr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;vs(gs.set(-.5,-.5,0),lr,a,cr,r,s),vs(Or.set(.5,-.5,0),lr,a,cr,r,s),vs(_s.set(.5,.5,0),lr,a,cr,r,s),Sc.set(0,0),ba.set(1,0),yc.set(1,1);let o=t.ray.intersectTriangle(gs,Or,_s,!1,Nr);if(o===null&&(vs(Or.set(-.5,.5,0),lr,a,cr,r,s),ba.set(0,1),o=t.ray.intersectTriangle(gs,_s,Or,!1,Nr),o===null))return;const c=t.ray.origin.distanceTo(Nr);c<t.near||c>t.far||e.push({distance:c,point:Nr.clone(),uv:kn.getInterpolation(Nr,gs,Or,_s,Sc,ba,yc,new se),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function vs(i,t,e,n,r,s){ur.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Fr.x=s*ur.x-r*ur.y,Fr.y=r*ur.x+s*ur.y):Fr.copy(ur),i.copy(t),i.x+=Fr.x,i.y+=Fr.y,i.applyMatrix4(Bl)}const Ta=new R,zh=new R,Bh=new _e;class Fi{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ta.subVectors(n,e).cross(zh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ta),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Bh.getNormalMatrix(t),r=this.coplanarPoint(Ta).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Kr,xs=new R;class Vl{constructor(t=new Fi,e=new Fi,n=new Fi,r=new Fi,s=new Fi,a=new Fi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fi){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],l=r[5],f=r[6],d=r[7],p=r[8],_=r[9],x=r[10],m=r[11],h=r[12],L=r[13],C=r[14],b=r[15];if(n[0].setComponents(c-s,d-u,m-p,b-h).normalize(),n[1].setComponents(c+s,d+u,m+p,b+h).normalize(),n[2].setComponents(c+a,d+l,m+_,b+L).normalize(),n[3].setComponents(c-a,d-l,m-_,b-L).normalize(),n[4].setComponents(c-o,d-f,m-x,b-C).normalize(),e===fi)n[5].setComponents(c+o,d+f,m+x,b+C).normalize();else if(e===Ws)n[5].setComponents(o,f,x,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(xs.x=r.normal.x>0?t.max.x:t.min.x,xs.y=r.normal.y>0?t.max.y:t.min.y,xs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(xs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bi extends qi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ys=new R,$s=new R,Ec=new $e,zr=new ko,Ms=new Kr,Aa=new R,bc=new R;class Zs extends _n{constructor(t=new Te,e=new Bi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ys.fromBufferAttribute(e,r-1),$s.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ys.distanceTo($s);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(r),Ms.radius+=s,t.ray.intersectsSphere(Ms)===!1)return;Ec.copy(r).invert(),zr.copy(t.ray).applyMatrix4(Ec);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,l=n.index,d=n.attributes.position;if(l!==null){const p=Math.max(0,a.start),_=Math.min(l.count,a.start+a.count);for(let x=p,m=_-1;x<m;x+=u){const h=l.getX(x),L=l.getX(x+1),C=Ss(this,t,zr,c,h,L);C&&e.push(C)}if(this.isLineLoop){const x=l.getX(_-1),m=l.getX(p),h=Ss(this,t,zr,c,x,m);h&&e.push(h)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let x=p,m=_-1;x<m;x+=u){const h=Ss(this,t,zr,c,x,x+1);h&&e.push(h)}if(this.isLineLoop){const x=Ss(this,t,zr,c,_-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ss(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(Ys.fromBufferAttribute(a,r),$s.fromBufferAttribute(a,s),e.distanceSqToSegment(Ys,$s,Aa,bc)>n)return;Aa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Aa);if(!(c<t.near||c>t.far))return{distance:c,point:bc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Tc=new R,Ac=new R;class Br extends Zs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Tc.fromBufferAttribute(e,r),Ac.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Tc.distanceTo(Ac);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vh extends Zs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class wn extends qi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wc=new $e,Ro=new ko,ys=new Kr,Es=new R;class hn extends _n{constructor(t=new Te,e=new wn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(r),ys.radius+=s,t.ray.intersectsSphere(ys)===!1)return;wc.copy(r).invert(),Ro.copy(t.ray).applyMatrix4(wc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,x=p;_<x;_++){const m=u.getX(_);Es.fromBufferAttribute(f,m),Cc(Es,m,c,r,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,x=p;_<x;_++)Es.fromBufferAttribute(f,_),Cc(Es,_,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Cc(i,t,e,n,r,s,a){const o=Ro.distanceSqToPoint(i);if(o<e){const c=new R;Ro.closestPointToPoint(i,c),c.applyMatrix4(n);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ke extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}class wa extends Dn{constructor(t,e,n,r,s,a,o,c,u){super(t,e,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hl extends Dn{constructor(t,e,n,r,s,a,o,c,u,l=vr){if(l!==vr&&l!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===vr&&(n=Wi),n===void 0&&l===Ar&&(n=Tr),super(null,r,s,a,o,c,l,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Zn,this.minFilter=c!==void 0?c:Zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,u;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),u=n[r]-a,u<0)o=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const l=n[r],d=n[r+1]-l,p=(a-l)/d;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new se:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,r=[],s=[],a=[],o=new R,c=new $e;for(let p=0;p<=t;p++){const _=p/t;r[p]=this.getTangentAt(_,new R)}s[0]=new R,a[0]=new R;let u=Number.MAX_VALUE;const l=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=u&&(u=l,n.set(1,0,0)),f<=u&&(u=f,n.set(0,1,0)),d<=u&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Ee(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,_))}a[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(Ee(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let _=1;_<=t;_++)s[_].applyMatrix4(c.makeRotationAxis(r[_],p*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class kl extends ni{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new se){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,p=u-this.aY;c=d*l-p*f+this.aX,u=d*f+p*l+this.aY}return n.set(c,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Hh extends kl{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Wo(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,u){r(a,o,u*(o-s),u*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,u,l,f){let d=(a-s)/u-(o-s)/(u+l)+(o-a)/l,p=(o-a)/l-(c-a)/(l+f)+(c-o)/f;d*=l,p*=l,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const bs=new R,Ca=new Wo,Ra=new Wo,Pa=new Wo;class kh extends ni{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new R){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let u,l;this.closed||o>0?u=r[(o-1)%s]:(bs.subVectors(r[0],r[1]).add(r[0]),u=bs);const f=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?l=r[(o+2)%s]:(bs.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=bs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),Ca.initNonuniformCatmullRom(u.x,f.x,d.x,l.x,_,x,m),Ra.initNonuniformCatmullRom(u.y,f.y,d.y,l.y,_,x,m),Pa.initNonuniformCatmullRom(u.z,f.z,d.z,l.z,_,x,m)}else this.curveType==="catmullrom"&&(Ca.initCatmullRom(u.x,f.x,d.x,l.x,this.tension),Ra.initCatmullRom(u.y,f.y,d.y,l.y,this.tension),Pa.initCatmullRom(u.z,f.z,d.z,l.z,this.tension));return n.set(Ca.calc(c),Ra.calc(c),Pa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new R().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Rc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function Gh(i,t){const e=1-i;return e*e*t}function Wh(i,t){return 2*(1-i)*i*t}function Xh(i,t){return i*i*t}function Wr(i,t,e,n){return Gh(i,t)+Wh(i,e)+Xh(i,n)}function qh(i,t){const e=1-i;return e*e*e*t}function Yh(i,t){const e=1-i;return 3*e*e*i*t}function $h(i,t){return 3*(1-i)*i*i*t}function Zh(i,t){return i*i*i*t}function Xr(i,t,e,n,r){return qh(i,t)+Yh(i,e)+$h(i,n)+Zh(i,r)}class Jh extends ni{constructor(t=new se,e=new se,n=new se,r=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new se){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Xr(t,r.x,s.x,a.x,o.x),Xr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Kh extends ni{constructor(t=new R,e=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new R){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Xr(t,r.x,s.x,a.x,o.x),Xr(t,r.y,s.y,a.y,o.y),Xr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jh extends ni{constructor(t=new se,e=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new se){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new se){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gl extends ni{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qh extends ni{constructor(t=new se,e=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new se){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Wr(t,r.x,s.x,a.x),Wr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wl extends ni{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Wr(t,r.x,s.x,a.x),Wr(t,r.y,s.y,a.y),Wr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tf extends ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new se){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],u=r[a],l=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(Rc(o,c.x,u.x,l.x,f.x),Rc(o,c.y,u.y,l.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new se().fromArray(r))}return this}}var Po=Object.freeze({__proto__:null,ArcCurve:Hh,CatmullRomCurve3:kh,CubicBezierCurve:Jh,CubicBezierCurve3:Kh,EllipseCurve:kl,LineCurve:jh,LineCurve3:Gl,QuadraticBezierCurve:Qh,QuadraticBezierCurve3:Wl,SplineCurve:tf});class ef extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Po[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),u=c===0?0:1-a/c;return o.getPointAt(u,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let u=0;u<c.length;u++){const l=c[u];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Po[r.type]().fromJSON(r))}return this}}class ea extends Te{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),u=o+1,l=c+1,f=t/o,d=e/c,p=[],_=[],x=[],m=[];for(let h=0;h<l;h++){const L=h*d-a;for(let C=0;C<u;C++){const b=C*f-s;_.push(b,-L,0),x.push(0,0,1),m.push(C/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let L=0;L<o;L++){const C=L+u*h,b=L+u*(h+1),k=L+1+u*(h+1),z=L+1+u*h;p.push(C,b,z),p.push(b,k,z)}this.setIndex(p),this.setAttribute("position",new Jt(_,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.width,t.height,t.widthSegments,t.heightSegments)}}class Js extends Te{constructor(t=.5,e=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],u=[],l=[];let f=t;const d=(e-t)/r,p=new R,_=new se;for(let x=0;x<=r;x++){for(let m=0;m<=n;m++){const h=s+m/n*a;p.x=f*Math.cos(h),p.y=f*Math.sin(h),c.push(p.x,p.y,p.z),u.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,l.push(_.x,_.y)}f+=d}for(let x=0;x<r;x++){const m=x*(n+1);for(let h=0;h<n;h++){const L=h+m,C=L,b=L+n+1,k=L+n+2,z=L+1;o.push(C,b,z),o.push(b,k,z)}}this.setIndex(o),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ks extends Te{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let u=0;const l=[],f=new R,d=new R,p=[],_=[],x=[],m=[];for(let h=0;h<=n;h++){const L=[],C=h/n;let b=0;h===0&&a===0?b=.5/e:h===n&&c===Math.PI&&(b=-.5/e);for(let k=0;k<=e;k++){const z=k/e;f.x=-t*Math.cos(r+z*s)*Math.sin(a+C*o),f.y=t*Math.cos(a+C*o),f.z=t*Math.sin(r+z*s)*Math.sin(a+C*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(z+b,1-C),L.push(u++)}l.push(L)}for(let h=0;h<n;h++)for(let L=0;L<e;L++){const C=l[h][L+1],b=l[h][L],k=l[h+1][L],z=l[h+1][L+1];(h!==0||a>0)&&p.push(C,b,z),(h!==n-1||c<Math.PI)&&p.push(b,k,z)}this.setIndex(p),this.setAttribute("position",new Jt(_,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xo extends Te{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],u=[],l=new R,f=new R,d=new R;for(let p=0;p<=n;p++)for(let _=0;_<=r;_++){const x=_/r*s,m=p/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),l.x=t*Math.cos(x),l.y=t*Math.sin(x),d.subVectors(f,l).normalize(),c.push(d.x,d.y,d.z),u.push(_/r),u.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=r;_++){const x=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,h=(r+1)*(p-1)+_,L=(r+1)*p+_;a.push(x,m,L),a.push(m,h,L)}this.setIndex(a),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class qo extends Te{constructor(t=new Wl(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,c=new R,u=new se;let l=new R;const f=[],d=[],p=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new Jt(f,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(p,2));function x(){for(let C=0;C<e;C++)m(C);m(s===!1?e:0),L(),h()}function m(C){l=t.getPointAt(C/e,l);const b=a.normals[C],k=a.binormals[C];for(let z=0;z<=r;z++){const F=z/r*Math.PI*2,q=Math.sin(F),T=-Math.cos(F);c.x=T*b.x+q*k.x,c.y=T*b.y+q*k.y,c.z=T*b.z+q*k.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=l.x+n*c.x,o.y=l.y+n*c.y,o.z=l.z+n*c.z,f.push(o.x,o.y,o.z)}}function h(){for(let C=1;C<=e;C++)for(let b=1;b<=r;b++){const k=(r+1)*(C-1)+(b-1),z=(r+1)*C+(b-1),F=(r+1)*C+b,q=(r+1)*(C-1)+b;_.push(k,z,q),_.push(z,F,q)}}function L(){for(let C=0;C<=e;C++)for(let b=0;b<=r;b++)u.x=C/e,u.y=b/r,p.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new qo(new Po[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class nf extends qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rf extends qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Pc extends Bi{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class sf extends Ol{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class af extends Hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class of{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Dc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Dc(){return performance.now()}function Lc(i,t,e,n){const r=cf(n);switch(e){case Sl:return i*t;case El:return i*t;case bl:return i*t*2;case Tl:return i*t/r.components*r.byteLength;case zo:return i*t/r.components*r.byteLength;case Al:return i*t*2/r.components*r.byteLength;case Bo:return i*t*2/r.components*r.byteLength;case yl:return i*t*3/r.components*r.byteLength;case $n:return i*t*4/r.components*r.byteLength;case Vo:return i*t*4/r.components*r.byteLength;case Us:case Ns:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fs:case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case no:case ro:return Math.max(i,16)*Math.max(t,8)/4;case eo:case io:return Math.max(i,8)*Math.max(t,8)/2;case so:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case po:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case mo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _o:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case So:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zs:case Eo:case bo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wl:case To:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ao:case wo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cf(i){switch(i){case gi:case vl:return{byteLength:1,components:1};case Yr:case xl:case Zr:return{byteLength:2,components:1};case Fo:case Oo:return{byteLength:2,components:4};case Wi:case No:case hi:return{byteLength:4,components:1};case Ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xl(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function lf(i){const t=new WeakMap;function e(o,c){const u=o.array,l=o.usage,f=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,l),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,u){const l=c.array,f=c.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,l);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];i.bufferSubData(u,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=t.get(o);(!l||l.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hf=`#ifdef USE_ALPHAHASH
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
#endif`,ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gf=`#ifdef USE_AOMAP
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
#endif`,_f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
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
#endif`,xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
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
#endif`,bf=`#ifdef USE_BUMPMAP
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
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,If=`#define PI 3.141592653589793
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
} // validated`,Uf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nf=`vec3 transformedNormal = objectNormal;
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
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kf=`#ifdef USE_GRADIENTMAP
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
}`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ed=`uniform bool receiveShadow;
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
#endif`,nd=`#ifdef USE_ENVMAP
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
#endif`,id=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,od=`PhysicalMaterial material;
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
#endif`,cd=`struct PhysicalMaterial {
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
}`,ld=`
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
#endif`,ud=`#if defined( RE_IndirectDiffuse )
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
#endif`,hd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,md=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xd=`#if defined( USE_POINTS_UV )
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
#endif`,Md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ed=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`#ifdef USE_MORPHTARGETS
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
#endif`,Ad=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ld=`#ifdef USE_NORMALMAP
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
#endif`,Id=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ud=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Od=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$d=`float getShadowMask() {
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
}`,Zd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jd=`#ifdef USE_SKINNING
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
#endif`,Kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jd=`#ifdef USE_SKINNING
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
#endif`,Qd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,np=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ip=`#ifdef USE_TRANSMISSION
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
#endif`,rp=`#ifdef USE_TRANSMISSION
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,up=`uniform sampler2D t2D;
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`#include <common>
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
}`,gp=`#if DEPTH_PACKING == 3200
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
}`,_p=`#define DISTANCE
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
}`,vp=`#define DISTANCE
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`uniform float scale;
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
}`,yp=`uniform vec3 diffuse;
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
}`,Ep=`#include <common>
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
}`,bp=`uniform vec3 diffuse;
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
}`,Tp=`#define LAMBERT
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
}`,Ap=`#define LAMBERT
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
}`,wp=`#define MATCAP
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
}`,Cp=`#define MATCAP
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
}`,Rp=`#define NORMAL
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
}`,Pp=`#define NORMAL
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
}`,Dp=`#define PHONG
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
}`,Lp=`#define PHONG
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
}`,Ip=`#define STANDARD
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
}`,Up=`#define STANDARD
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
}`,Np=`#define TOON
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
}`,Fp=`#define TOON
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
}`,Op=`uniform float size;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,Vp=`uniform vec3 color;
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
}`,Hp=`uniform float rotation;
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
}`,kp=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:uf,alphahash_pars_fragment:hf,alphamap_fragment:ff,alphamap_pars_fragment:df,alphatest_fragment:pf,alphatest_pars_fragment:mf,aomap_fragment:gf,aomap_pars_fragment:_f,batching_pars_vertex:vf,batching_vertex:xf,begin_vertex:Mf,beginnormal_vertex:Sf,bsdfs:yf,iridescence_fragment:Ef,bumpmap_pars_fragment:bf,clipping_planes_fragment:Tf,clipping_planes_pars_fragment:Af,clipping_planes_pars_vertex:wf,clipping_planes_vertex:Cf,color_fragment:Rf,color_pars_fragment:Pf,color_pars_vertex:Df,color_vertex:Lf,common:If,cube_uv_reflection_fragment:Uf,defaultnormal_vertex:Nf,displacementmap_pars_vertex:Ff,displacementmap_vertex:Of,emissivemap_fragment:zf,emissivemap_pars_fragment:Bf,colorspace_fragment:Vf,colorspace_pars_fragment:Hf,envmap_fragment:kf,envmap_common_pars_fragment:Gf,envmap_pars_fragment:Wf,envmap_pars_vertex:Xf,envmap_physical_pars_fragment:nd,envmap_vertex:qf,fog_vertex:Yf,fog_pars_vertex:$f,fog_fragment:Zf,fog_pars_fragment:Jf,gradientmap_pars_fragment:Kf,lightmap_pars_fragment:jf,lights_lambert_fragment:Qf,lights_lambert_pars_fragment:td,lights_pars_begin:ed,lights_toon_fragment:id,lights_toon_pars_fragment:rd,lights_phong_fragment:sd,lights_phong_pars_fragment:ad,lights_physical_fragment:od,lights_physical_pars_fragment:cd,lights_fragment_begin:ld,lights_fragment_maps:ud,lights_fragment_end:hd,logdepthbuf_fragment:fd,logdepthbuf_pars_fragment:dd,logdepthbuf_pars_vertex:pd,logdepthbuf_vertex:md,map_fragment:gd,map_pars_fragment:_d,map_particle_fragment:vd,map_particle_pars_fragment:xd,metalnessmap_fragment:Md,metalnessmap_pars_fragment:Sd,morphinstance_vertex:yd,morphcolor_vertex:Ed,morphnormal_vertex:bd,morphtarget_pars_vertex:Td,morphtarget_vertex:Ad,normal_fragment_begin:wd,normal_fragment_maps:Cd,normal_pars_fragment:Rd,normal_pars_vertex:Pd,normal_vertex:Dd,normalmap_pars_fragment:Ld,clearcoat_normal_fragment_begin:Id,clearcoat_normal_fragment_maps:Ud,clearcoat_pars_fragment:Nd,iridescence_pars_fragment:Fd,opaque_fragment:Od,packing:zd,premultiplied_alpha_fragment:Bd,project_vertex:Vd,dithering_fragment:Hd,dithering_pars_fragment:kd,roughnessmap_fragment:Gd,roughnessmap_pars_fragment:Wd,shadowmap_pars_fragment:Xd,shadowmap_pars_vertex:qd,shadowmap_vertex:Yd,shadowmask_pars_fragment:$d,skinbase_vertex:Zd,skinning_pars_vertex:Jd,skinning_vertex:Kd,skinnormal_vertex:jd,specularmap_fragment:Qd,specularmap_pars_fragment:tp,tonemapping_fragment:ep,tonemapping_pars_fragment:np,transmission_fragment:ip,transmission_pars_fragment:rp,uv_pars_fragment:sp,uv_pars_vertex:ap,uv_vertex:op,worldpos_vertex:cp,background_vert:lp,background_frag:up,backgroundCube_vert:hp,backgroundCube_frag:fp,cube_vert:dp,cube_frag:pp,depth_vert:mp,depth_frag:gp,distanceRGBA_vert:_p,distanceRGBA_frag:vp,equirect_vert:xp,equirect_frag:Mp,linedashed_vert:Sp,linedashed_frag:yp,meshbasic_vert:Ep,meshbasic_frag:bp,meshlambert_vert:Tp,meshlambert_frag:Ap,meshmatcap_vert:wp,meshmatcap_frag:Cp,meshnormal_vert:Rp,meshnormal_frag:Pp,meshphong_vert:Dp,meshphong_frag:Lp,meshphysical_vert:Ip,meshphysical_frag:Up,meshtoon_vert:Np,meshtoon_frag:Fp,points_vert:Op,points_frag:zp,shadow_vert:Bp,shadow_frag:Vp,sprite_vert:Hp,sprite_frag:kp},Dt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},Qn={basic:{uniforms:Cn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Cn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ee(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Cn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Cn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Cn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new ee(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Cn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Cn([Dt.points,Dt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Cn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Cn([Dt.common,Dt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Cn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Cn([Dt.sprite,Dt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Cn([Dt.common,Dt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Cn([Dt.lights,Dt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Qn.physical={uniforms:Cn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Ts={r:0,b:0,g:0},Ii=new Jn,Gp=new $e;function Wp(i,t,e,n,r,s,a){const o=new ee(0);let c=s===!0?0:1,u,l,f=null,d=0,p=null;function _(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?e:t).get(b)),b}function x(C){let b=!1;const k=_(C);k===null?h(o,c):k&&k.isColor&&(h(k,1),b=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,a):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(C,b){const k=_(b);k&&(k.isCubeTexture||k.mapping===ta)?(l===void 0&&(l=new Pn(new jr(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Cr(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(z,F,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),Ii.copy(b.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),l.material.uniforms.envMap.value=k,l.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Gp.makeRotationFromEuler(Ii)),l.material.toneMapped=Oe.getTransfer(k.colorSpace)!==Ge,(f!==k||d!==k.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=k,d=k.version,p=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null)):k&&k.isTexture&&(u===void 0&&(u=new Pn(new ea(2,2),new Rn({name:"BackgroundMaterial",uniforms:Cr(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=k,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=Oe.getTransfer(k.colorSpace)!==Ge,k.matrixAutoUpdate===!0&&k.updateMatrix(),u.material.uniforms.uvTransform.value.copy(k.matrix),(f!==k||d!==k.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=k,d=k.version,p=i.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null))}function h(C,b){C.getRGB(Ts,Fl(i)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,b,a)}function L(){l!==void 0&&(l.geometry.dispose(),l.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(C,b=1){o.set(C),c=b,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,h(o,c)},render:x,addToRenderList:m,dispose:L}}function Xp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(S,V,rt,K,ht){let mt=!1;const ot=f(K,rt,V);s!==ot&&(s=ot,u(s.object)),mt=p(S,K,rt,ht),mt&&_(S,K,rt,ht),ht!==null&&t.update(ht,i.ELEMENT_ARRAY_BUFFER),(mt||a)&&(a=!1,b(S,V,rt,K),ht!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function c(){return i.createVertexArray()}function u(S){return i.bindVertexArray(S)}function l(S){return i.deleteVertexArray(S)}function f(S,V,rt){const K=rt.wireframe===!0;let ht=n[S.id];ht===void 0&&(ht={},n[S.id]=ht);let mt=ht[V.id];mt===void 0&&(mt={},ht[V.id]=mt);let ot=mt[K];return ot===void 0&&(ot=d(c()),mt[K]=ot),ot}function d(S){const V=[],rt=[],K=[];for(let ht=0;ht<e;ht++)V[ht]=0,rt[ht]=0,K[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:rt,attributeDivisors:K,object:S,attributes:{},index:null}}function p(S,V,rt,K){const ht=s.attributes,mt=V.attributes;let ot=0;const _t=rt.getAttributes();for(const tt in _t)if(_t[tt].location>=0){const Ht=ht[tt];let ie=mt[tt];if(ie===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),Ht===void 0||Ht.attribute!==ie||ie&&Ht.data!==ie.data)return!0;ot++}return s.attributesNum!==ot||s.index!==K}function _(S,V,rt,K){const ht={},mt=V.attributes;let ot=0;const _t=rt.getAttributes();for(const tt in _t)if(_t[tt].location>=0){let Ht=mt[tt];Ht===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(Ht=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(Ht=S.instanceColor));const ie={};ie.attribute=Ht,Ht&&Ht.data&&(ie.data=Ht.data),ht[tt]=ie,ot++}s.attributes=ht,s.attributesNum=ot,s.index=K}function x(){const S=s.newAttributes;for(let V=0,rt=S.length;V<rt;V++)S[V]=0}function m(S){h(S,0)}function h(S,V){const rt=s.newAttributes,K=s.enabledAttributes,ht=s.attributeDivisors;rt[S]=1,K[S]===0&&(i.enableVertexAttribArray(S),K[S]=1),ht[S]!==V&&(i.vertexAttribDivisor(S,V),ht[S]=V)}function L(){const S=s.newAttributes,V=s.enabledAttributes;for(let rt=0,K=V.length;rt<K;rt++)V[rt]!==S[rt]&&(i.disableVertexAttribArray(rt),V[rt]=0)}function C(S,V,rt,K,ht,mt,ot){ot===!0?i.vertexAttribIPointer(S,V,rt,ht,mt):i.vertexAttribPointer(S,V,rt,K,ht,mt)}function b(S,V,rt,K){x();const ht=K.attributes,mt=rt.getAttributes(),ot=V.defaultAttributeValues;for(const _t in mt){const tt=mt[_t];if(tt.location>=0){let Lt=ht[_t];if(Lt===void 0&&(_t==="instanceMatrix"&&S.instanceMatrix&&(Lt=S.instanceMatrix),_t==="instanceColor"&&S.instanceColor&&(Lt=S.instanceColor)),Lt!==void 0){const Ht=Lt.normalized,ie=Lt.itemSize,xe=t.get(Lt);if(xe===void 0)continue;const ze=xe.buffer,st=xe.type,yt=xe.bytesPerElement,$t=st===i.INT||st===i.UNSIGNED_INT||Lt.gpuType===No;if(Lt.isInterleavedBufferAttribute){const It=Lt.data,ae=It.stride,he=Lt.offset;if(It.isInstancedInterleavedBuffer){for(let Me=0;Me<tt.locationSize;Me++)h(tt.location+Me,It.meshPerAttribute);S.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let Me=0;Me<tt.locationSize;Me++)m(tt.location+Me);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Me=0;Me<tt.locationSize;Me++)C(tt.location+Me,ie/tt.locationSize,st,Ht,ae*yt,(he+ie/tt.locationSize*Me)*yt,$t)}else{if(Lt.isInstancedBufferAttribute){for(let It=0;It<tt.locationSize;It++)h(tt.location+It,Lt.meshPerAttribute);S.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let It=0;It<tt.locationSize;It++)m(tt.location+It);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let It=0;It<tt.locationSize;It++)C(tt.location+It,ie/tt.locationSize,st,Ht,ie*yt,ie/tt.locationSize*It*yt,$t)}}else if(ot!==void 0){const Ht=ot[_t];if(Ht!==void 0)switch(Ht.length){case 2:i.vertexAttrib2fv(tt.location,Ht);break;case 3:i.vertexAttrib3fv(tt.location,Ht);break;case 4:i.vertexAttrib4fv(tt.location,Ht);break;default:i.vertexAttrib1fv(tt.location,Ht)}}}}L()}function k(){q();for(const S in n){const V=n[S];for(const rt in V){const K=V[rt];for(const ht in K)l(K[ht].object),delete K[ht];delete V[rt]}delete n[S]}}function z(S){if(n[S.id]===void 0)return;const V=n[S.id];for(const rt in V){const K=V[rt];for(const ht in K)l(K[ht].object),delete K[ht];delete V[rt]}delete n[S.id]}function F(S){for(const V in n){const rt=n[V];if(rt[S.id]===void 0)continue;const K=rt[S.id];for(const ht in K)l(K[ht].object),delete K[ht];delete rt[S.id]}}function q(){T(),a=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:q,resetDefaultState:T,dispose:k,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:m,disableUnusedAttributes:L}}function qp(i,t,e){let n;function r(u){n=u}function s(u,l){i.drawArrays(n,u,l),e.update(l,n,1)}function a(u,l,f){f!==0&&(i.drawArraysInstanced(n,u,l,f),e.update(l,n,f))}function o(u,l,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,l,0,f);let p=0;for(let _=0;_<f;_++)p+=l[_];e.update(p,n,1)}function c(u,l,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)a(u[_],l[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,l,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=l[x]*d[x];e.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Yp(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(F){return!(F!==$n&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){const q=F===Zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==gi&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==hi&&!q)}function c(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const l=c(u);l!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",l,"instead."),u=l);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=_>0,z=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:L,maxVaryings:C,maxFragmentUniforms:b,vertexTextures:k,maxSamples:z}}function $p(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Fi,o=new _e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=l(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!r||_===null||_.length===0||s&&!m)s?l(null):u();else{const L=s?0:n,C=L*4;let b=h.clippingState||null;c.value=b,b=l(_,d,C,p);for(let k=0;k!==C;++k)b[k]=e[k];h.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=L}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(f,d,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const h=p+x*4,L=d.matrixWorldInverse;o.getNormalMatrix(L),(m===null||m.length<h)&&(m=new Float32Array(h));for(let C=0,b=p;C!==x;++C,b+=4)a.copy(f[C]).applyMatrix4(L,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Zp(i){let t=new WeakMap;function e(a,o){return o===Ka?a.mapping=Er:o===ja&&(a.mapping=br),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ka||o===ja)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Nh(c.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",r),e(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const mr=4,Ic=[.125,.215,.35,.446,.526,.582],Vi=20,Da=new sf,Uc=new ee;let La=null,Ia=0,Ua=0,Na=!1;const Oi=(1+Math.sqrt(5))/2,hr=1/Oi,Nc=[new R(-Oi,hr,0),new R(Oi,hr,0),new R(-hr,0,Oi),new R(hr,0,Oi),new R(0,Oi,-hr),new R(0,Oi,hr),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Fc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(La,Ia,Ua),this._renderer.xr.enabled=Na,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Er||t.mapping===br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Zr,format:$n,colorSpace:wr,depthBuffer:!1},r=Oc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jp(s)),this._blurMaterial=Kp(s,t,e)}return r}_compileMaterial(t){const e=new Pn(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,n,r){const o=new Hn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,d=l.toneMapping;l.getClearColor(Uc),l.toneMapping=Ai,l.autoClear=!1;const p=new pr({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),_=new Pn(new jr,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Uc),x=!0);for(let h=0;h<6;h++){const L=h%3;L===0?(o.up.set(0,c[h],0),o.lookAt(u[h],0,0)):L===1?(o.up.set(0,0,c[h]),o.lookAt(0,u[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,u[h]));const C=this._cubeSize;As(r,L*C,h>2?C:0,C,C),l.setRenderTarget(r),x&&l.render(_,o),l.render(t,o)}_.geometry.dispose(),_.material.dispose(),l.toneMapping=d,l.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Er||t.mapping===br;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Pn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;As(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Da)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Nc[(r-s-1)%Nc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,f=new Pn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vi-1),x=s/_,m=isFinite(s)?1+Math.floor(l*x):Vi;m>Vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const h=[];let L=0;for(let F=0;F<Vi;++F){const q=F/x,T=Math.exp(-q*q/2);h.push(T),F===0?L+=T:F<m&&(L+=2*T)}for(let F=0;F<h.length;F++)h[F]=h[F]/L;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:C}=this;d.dTheta.value=_,d.mipInt.value=C-n;const b=this._sizeLods[r],k=3*b*(r>C-mr?r-C+mr:0),z=4*(this._cubeSize-b);As(e,k,z,3*b,2*b),c.setRenderTarget(e),c.render(f,Da)}}function Jp(i){const t=[],e=[],n=[];let r=i;const s=i-mr+1+Ic.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-mr?c=Ic[a-i+mr-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),l=-u,f=1+u,d=[l,l,f,l,f,f,l,l,f,f,l,f],p=6,_=6,x=3,m=2,h=1,L=new Float32Array(x*_*p),C=new Float32Array(m*_*p),b=new Float32Array(h*_*p);for(let z=0;z<p;z++){const F=z%3*2/3-1,q=z>2?0:-1,T=[F,q,0,F+2/3,q,0,F+2/3,q+1,0,F,q,0,F+2/3,q+1,0,F,q+1,0];L.set(T,x*_*z),C.set(d,m*_*z);const S=[z,z,z,z,z,z];b.set(S,h*_*z)}const k=new Te;k.setAttribute("position",new Ye(L,x)),k.setAttribute("uv",new Ye(C,m)),k.setAttribute("faceIndex",new Ye(b,h)),t.push(k),r>mr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Oc(i,t,e){const n=new Xi(i,t,e);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Kp(i,t,e){const n=new Float32Array(Vi),r=new R(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function zc(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Bc(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Yo(){return`

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
	`}function jp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===Ka||c===ja,l=c===Er||c===br;if(u||l){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Fc(i)),f=u?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return u&&p&&p.height>0||l&&p&&r(p)?(e===null&&(e=new Fc(i)),f=u?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const u=6;for(let l=0;l<u;l++)o[l]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Qp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&dr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function tm(i,t,e,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function u(f){const d=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const L=p.array;x=p.version;for(let C=0,b=L.length;C<b;C+=3){const k=L[C+0],z=L[C+1],F=L[C+2];d.push(k,z,z,F,F,k)}}else if(_!==void 0){const L=_.array;x=_.version;for(let C=0,b=L.length/3-1;C<b;C+=3){const k=C+0,z=C+1,F=C+2;d.push(k,z,z,F,F,k)}}else return;const m=new(Rl(d)?Nl:Ul)(d,1);m.version=x;const h=s.get(f);h&&t.remove(h),s.set(f,m)}function l(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:l}}function em(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*a),e.update(p,n,1)}function u(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,s,d*a,_),e.update(p,n,_))}function l(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];e.update(m,n,1)}function f(d,p,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)u(d[h]/a,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,x,0,_);let h=0;for(let L=0;L<_;L++)h+=p[L]*x[L];e.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function nm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function im(i,t,e){const n=new WeakMap,r=new tn;function s(a,o,c){const u=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=l!==void 0?l.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let S=function(){q.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],L=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let k=o.attributes.position.count*b,z=1;k>t.maxTextureSize&&(z=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const F=new Float32Array(k*z*4*f),q=new Dl(F,k,z,f);q.type=hi,q.needsUpdate=!0;const T=b*4;for(let V=0;V<f;V++){const rt=h[V],K=L[V],ht=C[V],mt=k*z*4*V;for(let ot=0;ot<rt.count;ot++){const _t=ot*T;_===!0&&(r.fromBufferAttribute(rt,ot),F[mt+_t+0]=r.x,F[mt+_t+1]=r.y,F[mt+_t+2]=r.z,F[mt+_t+3]=0),x===!0&&(r.fromBufferAttribute(K,ot),F[mt+_t+4]=r.x,F[mt+_t+5]=r.y,F[mt+_t+6]=r.z,F[mt+_t+7]=0),m===!0&&(r.fromBufferAttribute(ht,ot),F[mt+_t+8]=r.x,F[mt+_t+9]=r.y,F[mt+_t+10]=r.z,F[mt+_t+11]=ht.itemSize===4?r.w:1)}}d={count:f,texture:q,size:new se(k,z)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const x=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function rm(i,t,e,n){let r=new WeakMap;function s(c){const u=n.render.frame,l=c.geometry,f=t.get(c,l);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}const ql=new Dn,Vc=new Hl(1,1),Yl=new Dl,$l=new xh,Zl=new zl,Hc=[],kc=[],Gc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function Pr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Hc[r];if(s===void 0&&(s=new Float32Array(r),Hc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function on(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function cn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function na(i,t){let e=kc[t];e===void 0&&(e=new Int32Array(t),kc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function sm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2fv(this.addr,t),cn(e,t)}}function om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;i.uniform3fv(this.addr,t),cn(e,t)}}function cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4fv(this.addr,t),cn(e,t)}}function lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(on(e,n))return;Xc.set(n),i.uniformMatrix2fv(this.addr,!1,Xc),cn(e,n)}}function um(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(on(e,n))return;Wc.set(n),i.uniformMatrix3fv(this.addr,!1,Wc),cn(e,n)}}function hm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(on(e,n))return;Gc.set(n),i.uniformMatrix4fv(this.addr,!1,Gc),cn(e,n)}}function fm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2iv(this.addr,t),cn(e,t)}}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3iv(this.addr,t),cn(e,t)}}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4iv(this.addr,t),cn(e,t)}}function gm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2uiv(this.addr,t),cn(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3uiv(this.addr,t),cn(e,t)}}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4uiv(this.addr,t),cn(e,t)}}function Mm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Vc.compareFunction=Cl,s=Vc):s=ql,e.setTexture2D(t||s,r)}function Sm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||$l,r)}function ym(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Zl,r)}function Em(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Yl,r)}function bm(i){switch(i){case 5126:return sm;case 35664:return am;case 35665:return om;case 35666:return cm;case 35674:return lm;case 35675:return um;case 35676:return hm;case 5124:case 35670:return fm;case 35667:case 35671:return dm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return _m;case 36295:return vm;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Em}}function Tm(i,t){i.uniform1fv(this.addr,t)}function Am(i,t){const e=Pr(t,this.size,2);i.uniform2fv(this.addr,e)}function wm(i,t){const e=Pr(t,this.size,3);i.uniform3fv(this.addr,e)}function Cm(i,t){const e=Pr(t,this.size,4);i.uniform4fv(this.addr,e)}function Rm(i,t){const e=Pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Pm(i,t){const e=Pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Dm(i,t){const e=Pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Lm(i,t){i.uniform1iv(this.addr,t)}function Im(i,t){i.uniform2iv(this.addr,t)}function Um(i,t){i.uniform3iv(this.addr,t)}function Nm(i,t){i.uniform4iv(this.addr,t)}function Fm(i,t){i.uniform1uiv(this.addr,t)}function Om(i,t){i.uniform2uiv(this.addr,t)}function zm(i,t){i.uniform3uiv(this.addr,t)}function Bm(i,t){i.uniform4uiv(this.addr,t)}function Vm(i,t,e){const n=this.cache,r=t.length,s=na(e,r);on(n,s)||(i.uniform1iv(this.addr,s),cn(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||ql,s[a])}function Hm(i,t,e){const n=this.cache,r=t.length,s=na(e,r);on(n,s)||(i.uniform1iv(this.addr,s),cn(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||$l,s[a])}function km(i,t,e){const n=this.cache,r=t.length,s=na(e,r);on(n,s)||(i.uniform1iv(this.addr,s),cn(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Zl,s[a])}function Gm(i,t,e){const n=this.cache,r=t.length,s=na(e,r);on(n,s)||(i.uniform1iv(this.addr,s),cn(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Yl,s[a])}function Wm(i){switch(i){case 5126:return Tm;case 35664:return Am;case 35665:return wm;case 35666:return Cm;case 35674:return Rm;case 35675:return Pm;case 35676:return Dm;case 5124:case 35670:return Lm;case 35667:case 35671:return Im;case 35668:case 35672:return Um;case 35669:case 35673:return Nm;case 5125:return Fm;case 36294:return Om;case 36295:return zm;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Gm}}class Xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bm(e.type)}}class qm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wm(e.type)}}class Ym{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function qc(i,t){i.seq.push(t),i.map[t.id]=t}function $m(i,t,e){const n=i.name,r=n.length;for(Fa.lastIndex=0;;){const s=Fa.exec(n),a=Fa.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){qc(e,u===void 0?new Xm(o,i,t):new qm(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Ym(o),qc(e,f)),e=f}}}class Bs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);$m(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Yc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Zm=37297;let Jm=0;function Km(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const $c=new _e;function jm(i){Oe._getMatrix($c,Oe.workingColorSpace,i);const t=`mat3( ${$c.elements.map(e=>e.toFixed(4))} )`;switch(Oe.getTransfer(i)){case Gs:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Km(i.getShaderSource(t),a)}else return r}function Qm(i,t){const e=jm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function t0(i,t){let e;switch(t){case Ru:e="Linear";break;case Pu:e="Reinhard";break;case Du:e="Cineon";break;case Lu:e="ACESFilmic";break;case Uu:e="AgX";break;case Nu:e="Neutral";break;case Iu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ws=new R;function e0(){Oe.getLuminanceCoefficients(ws);const i=ws.x.toFixed(4),t=ws.y.toFixed(4),e=ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function i0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function r0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Vr(i){return i!==""}function Jc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(i){return i.replace(s0,o0)}const a0=new Map;function o0(i,t){let e=ve[t];if(e===void 0){const n=a0.get(t);if(n!==void 0)e=ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Do(e)}const c0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(i){return i.replace(c0,l0)}function l0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function u0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ml?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ui&&(t="SHADOWMAP_TYPE_VSM"),t}function h0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Er:case br:t="ENVMAP_TYPE_CUBE";break;case ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function f0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case br:t="ENVMAP_MODE_REFRACTION";break}return t}function d0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gl:t="ENVMAP_BLENDING_MULTIPLY";break;case wu:t="ENVMAP_BLENDING_MIX";break;case Cu:t="ENVMAP_BLENDING_ADD";break}return t}function p0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function m0(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=u0(e),u=h0(e),l=f0(e),f=d0(e),d=p0(e),p=n0(e),_=i0(s),x=r.createProgram();let m,h,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Vr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Vr).join(`
`),h.length>0&&(h+=`
`)):(m=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),h=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?ve.tonemapping_pars_fragment:"",e.toneMapping!==Ai?t0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,Qm("linearToOutputTexel",e.outputColorSpace),e0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vr).join(`
`)),a=Do(a),a=Jc(a,e),a=Kc(a,e),o=Do(o),o=Jc(o,e),o=Kc(o,e),a=jc(a),o=jc(o),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const C=L+m+a,b=L+h+o,k=Yc(r,r.VERTEX_SHADER,C),z=Yc(r,r.FRAGMENT_SHADER,b);r.attachShader(x,k),r.attachShader(x,z),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function F(V){if(i.debug.checkShaderErrors){const rt=r.getProgramInfoLog(x).trim(),K=r.getShaderInfoLog(k).trim(),ht=r.getShaderInfoLog(z).trim();let mt=!0,ot=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(mt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,k,z);else{const _t=Zc(r,k,"vertex"),tt=Zc(r,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+rt+`
`+_t+`
`+tt)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(K===""||ht==="")&&(ot=!1);ot&&(V.diagnostics={runnable:mt,programLog:rt,vertexShader:{log:K,prefix:m},fragmentShader:{log:ht,prefix:h}})}r.deleteShader(k),r.deleteShader(z),q=new Bs(r,x),T=r0(r,x)}let q;this.getUniforms=function(){return q===void 0&&F(this),q};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,Zm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=k,this.fragmentShader=z,this}let g0=0;class _0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new v0(t),e.set(t,n)),n}}class v0{constructor(t){this.id=g0++,this.code=t,this.usedTimes=0}}function x0(i,t,e,n,r,s,a){const o=new Ll,c=new _0,u=new Set,l=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,S,V,rt,K){const ht=rt.fog,mt=K.geometry,ot=T.isMeshStandardMaterial?rt.environment:null,_t=(T.isMeshStandardMaterial?e:t).get(T.envMap||ot),tt=_t&&_t.mapping===ta?_t.image.height:null,Lt=_[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Ht=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,ie=Ht!==void 0?Ht.length:0;let xe=0;mt.morphAttributes.position!==void 0&&(xe=1),mt.morphAttributes.normal!==void 0&&(xe=2),mt.morphAttributes.color!==void 0&&(xe=3);let ze,st,yt,$t;if(Lt){const ft=Qn[Lt];ze=ft.vertexShader,st=ft.fragmentShader}else ze=T.vertexShader,st=T.fragmentShader,c.update(T),yt=c.getVertexShaderID(T),$t=c.getFragmentShaderID(T);const It=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),he=K.isInstancedMesh===!0,Me=K.isBatchedMesh===!0,Xe=!!T.map,Pe=!!T.matcap,Ze=!!_t,N=!!T.aoMap,vn=!!T.lightMap,Ae=!!T.bumpMap,we=!!T.normalMap,jt=!!T.displacementMap,le=!!T.emissiveMap,ne=!!T.metalnessMap,A=!!T.roughnessMap,v=T.anisotropy>0,J=T.clearcoat>0,lt=T.dispersion>0,pt=T.iridescence>0,it=T.sheen>0,Vt=T.transmission>0,wt=v&&!!T.anisotropyMap,kt=J&&!!T.clearcoatMap,be=J&&!!T.clearcoatNormalMap,Mt=J&&!!T.clearcoatRoughnessMap,M=pt&&!!T.iridescenceMap,E=pt&&!!T.iridescenceThicknessMap,P=it&&!!T.sheenColorMap,w=it&&!!T.sheenRoughnessMap,G=!!T.specularMap,Z=!!T.specularColorMap,Y=!!T.specularIntensityMap,y=Vt&&!!T.transmissionMap,H=Vt&&!!T.thicknessMap,D=!!T.gradientMap,I=!!T.alphaMap,B=T.alphaTest>0,X=!!T.alphaHash,j=!!T.extensions;let ct=Ai;T.toneMapped&&(It===null||It.isXRRenderTarget===!0)&&(ct=i.toneMapping);const gt={shaderID:Lt,shaderType:T.type,shaderName:T.name,vertexShader:ze,fragmentShader:st,defines:T.defines,customVertexShaderID:yt,customFragmentShaderID:$t,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Me,batchingColor:Me&&K._colorsTexture!==null,instancing:he,instancingColor:he&&K.instanceColor!==null,instancingMorph:he&&K.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:It===null?i.outputColorSpace:It.isXRRenderTarget===!0?It.texture.colorSpace:wr,alphaToCoverage:!!T.alphaToCoverage,map:Xe,matcap:Pe,envMap:Ze,envMapMode:Ze&&_t.mapping,envMapCubeUVHeight:tt,aoMap:N,lightMap:vn,bumpMap:Ae,normalMap:we,displacementMap:d&&jt,emissiveMap:le,normalMapObjectSpace:we&&T.normalMapType===Vu,normalMapTangentSpace:we&&T.normalMapType===Bu,metalnessMap:ne,roughnessMap:A,anisotropy:v,anisotropyMap:wt,clearcoat:J,clearcoatMap:kt,clearcoatNormalMap:be,clearcoatRoughnessMap:Mt,dispersion:lt,iridescence:pt,iridescenceMap:M,iridescenceThicknessMap:E,sheen:it,sheenColorMap:P,sheenRoughnessMap:w,specularMap:G,specularColorMap:Z,specularIntensityMap:Y,transmission:Vt,transmissionMap:y,thicknessMap:H,gradientMap:D,opaque:T.transparent===!1&&T.blending===_r&&T.alphaToCoverage===!1,alphaMap:I,alphaTest:B,alphaHash:X,combine:T.combine,mapUv:Xe&&x(T.map.channel),aoMapUv:N&&x(T.aoMap.channel),lightMapUv:vn&&x(T.lightMap.channel),bumpMapUv:Ae&&x(T.bumpMap.channel),normalMapUv:we&&x(T.normalMap.channel),displacementMapUv:jt&&x(T.displacementMap.channel),emissiveMapUv:le&&x(T.emissiveMap.channel),metalnessMapUv:ne&&x(T.metalnessMap.channel),roughnessMapUv:A&&x(T.roughnessMap.channel),anisotropyMapUv:wt&&x(T.anisotropyMap.channel),clearcoatMapUv:kt&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:be&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:M&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:E&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:P&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:w&&x(T.sheenRoughnessMap.channel),specularMapUv:G&&x(T.specularMap.channel),specularColorMapUv:Z&&x(T.specularColorMap.channel),specularIntensityMapUv:Y&&x(T.specularIntensityMap.channel),transmissionMapUv:y&&x(T.transmissionMap.channel),thicknessMapUv:H&&x(T.thicknessMap.channel),alphaMapUv:I&&x(T.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(we||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!mt.attributes.uv&&(Xe||I),fog:!!ht,useFog:T.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ae,skinning:K.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:Xe&&T.map.isVideoTexture===!0&&Oe.getTransfer(T.map.colorSpace)===Ge,decodeVideoTextureEmissive:le&&T.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(T.emissiveMap.colorSpace)===Ge,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===qn,flipSided:T.side===Un,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:j&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(j&&T.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return gt.vertexUv1s=u.has(1),gt.vertexUv2s=u.has(2),gt.vertexUv3s=u.has(3),u.clear(),gt}function h(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)S.push(V),S.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(L(S,T),C(S,T),S.push(i.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function L(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function C(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),T.push(o.mask)}function b(T){const S=_[T.type];let V;if(S){const rt=Qn[S];V=Dh.clone(rt.uniforms)}else V=T.uniforms;return V}function k(T,S){let V;for(let rt=0,K=l.length;rt<K;rt++){const ht=l[rt];if(ht.cacheKey===S){V=ht,++V.usedTimes;break}}return V===void 0&&(V=new m0(i,S,T,s),l.push(V)),V}function z(T){if(--T.usedTimes===0){const S=l.indexOf(T);l[S]=l[l.length-1],l.pop(),T.destroy()}}function F(T){c.remove(T)}function q(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:b,acquireProgram:k,releaseProgram:z,releaseShaderCache:F,programs:l,dispose:q}}function M0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function S0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function tl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function el(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,d,p,_,x,m){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},i[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=x,h.group=m),t++,h}function o(f,d,p,_,x,m){const h=a(f,d,p,_,x,m);p.transmission>0?n.push(h):p.transparent===!0?r.push(h):e.push(h)}function c(f,d,p,_,x,m){const h=a(f,d,p,_,x,m);p.transmission>0?n.unshift(h):p.transparent===!0?r.unshift(h):e.unshift(h)}function u(f,d){e.length>1&&e.sort(f||S0),n.length>1&&n.sort(d||tl),r.length>1&&r.sort(d||tl)}function l(){for(let f=t,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:l,sort:u}}function y0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new el,i.set(n,[a])):r>=s.length?(a=new el,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function E0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new ee};break;case"SpotLight":e={position:new R,direction:new R,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function b0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let T0=0;function A0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function w0(i){const t=new E0,e=b0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new R);const r=new R,s=new $e,a=new $e;function o(u){let l=0,f=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,_=0,x=0,m=0,h=0,L=0,C=0,b=0,k=0,z=0,F=0;u.sort(A0);for(let T=0,S=u.length;T<S;T++){const V=u[T],rt=V.color,K=V.intensity,ht=V.distance,mt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)l+=rt.r*K,f+=rt.g*K,d+=rt.b*K;else if(V.isLightProbe){for(let ot=0;ot<9;ot++)n.probe[ot].addScaledVector(V.sh.coefficients[ot],K);F++}else if(V.isDirectionalLight){const ot=t.get(V);if(ot.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const _t=V.shadow,tt=e.get(V);tt.shadowIntensity=_t.intensity,tt.shadowBias=_t.bias,tt.shadowNormalBias=_t.normalBias,tt.shadowRadius=_t.radius,tt.shadowMapSize=_t.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=mt,n.directionalShadowMatrix[p]=V.shadow.matrix,L++}n.directional[p]=ot,p++}else if(V.isSpotLight){const ot=t.get(V);ot.position.setFromMatrixPosition(V.matrixWorld),ot.color.copy(rt).multiplyScalar(K),ot.distance=ht,ot.coneCos=Math.cos(V.angle),ot.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ot.decay=V.decay,n.spot[x]=ot;const _t=V.shadow;if(V.map&&(n.spotLightMap[k]=V.map,k++,_t.updateMatrices(V),V.castShadow&&z++),n.spotLightMatrix[x]=_t.matrix,V.castShadow){const tt=e.get(V);tt.shadowIntensity=_t.intensity,tt.shadowBias=_t.bias,tt.shadowNormalBias=_t.normalBias,tt.shadowRadius=_t.radius,tt.shadowMapSize=_t.mapSize,n.spotShadow[x]=tt,n.spotShadowMap[x]=mt,b++}x++}else if(V.isRectAreaLight){const ot=t.get(V);ot.color.copy(rt).multiplyScalar(K),ot.halfWidth.set(V.width*.5,0,0),ot.halfHeight.set(0,V.height*.5,0),n.rectArea[m]=ot,m++}else if(V.isPointLight){const ot=t.get(V);if(ot.color.copy(V.color).multiplyScalar(V.intensity),ot.distance=V.distance,ot.decay=V.decay,V.castShadow){const _t=V.shadow,tt=e.get(V);tt.shadowIntensity=_t.intensity,tt.shadowBias=_t.bias,tt.shadowNormalBias=_t.normalBias,tt.shadowRadius=_t.radius,tt.shadowMapSize=_t.mapSize,tt.shadowCameraNear=_t.camera.near,tt.shadowCameraFar=_t.camera.far,n.pointShadow[_]=tt,n.pointShadowMap[_]=mt,n.pointShadowMatrix[_]=V.shadow.matrix,C++}n.point[_]=ot,_++}else if(V.isHemisphereLight){const ot=t.get(V);ot.skyColor.copy(V.color).multiplyScalar(K),ot.groundColor.copy(V.groundColor).multiplyScalar(K),n.hemi[h]=ot,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=f,n.ambient[2]=d;const q=n.hash;(q.directionalLength!==p||q.pointLength!==_||q.spotLength!==x||q.rectAreaLength!==m||q.hemiLength!==h||q.numDirectionalShadows!==L||q.numPointShadows!==C||q.numSpotShadows!==b||q.numSpotMaps!==k||q.numLightProbes!==F)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=b+k-z,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=z,n.numLightProbes=F,q.directionalLength=p,q.pointLength=_,q.spotLength=x,q.rectAreaLength=m,q.hemiLength=h,q.numDirectionalShadows=L,q.numPointShadows=C,q.numSpotShadows=b,q.numSpotMaps=k,q.numLightProbes=F,n.version=T0++)}function c(u,l){let f=0,d=0,p=0,_=0,x=0;const m=l.matrixWorldInverse;for(let h=0,L=u.length;h<L;h++){const C=u[h];if(C.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(C.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),p++}else if(C.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(C.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(C.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(m),d++}else if(C.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function nl(i){const t=new w0(i),e=[],n=[];function r(l){u.camera=l,e.length=0,n.length=0}function s(l){e.push(l)}function a(l){n.push(l)}function o(){t.setup(e)}function c(l){t.setupView(e,l)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function C0(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new nl(i),t.set(r,[o])):s>=a.length?(o=new nl(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const R0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P0=`uniform sampler2D shadow_pass;
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
}`;function D0(i,t,e){let n=new Vl;const r=new se,s=new se,a=new tn,o=new nf({depthPacking:zu}),c=new rf,u={},l=e.maxTextureSize,f={[wi]:Un,[Un]:wi,[qn]:qn},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:R0,fragmentShader:P0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Te;_.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Pn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let h=this.type;this.render=function(z,F,q){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||z.length===0)return;const T=i.getRenderTarget(),S=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),rt=i.state;rt.setBlending(Ti),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const K=h!==ui&&this.type===ui,ht=h===ui&&this.type!==ui;for(let mt=0,ot=z.length;mt<ot;mt++){const _t=z[mt],tt=_t.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",_t,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;r.copy(tt.mapSize);const Lt=tt.getFrameExtents();if(r.multiply(Lt),s.copy(tt.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/Lt.x),r.x=s.x*Lt.x,tt.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/Lt.y),r.y=s.y*Lt.y,tt.mapSize.y=s.y)),tt.map===null||K===!0||ht===!0){const ie=this.type!==ui?{minFilter:Zn,magFilter:Zn}:{};tt.map!==null&&tt.map.dispose(),tt.map=new Xi(r.x,r.y,ie),tt.map.texture.name=_t.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();const Ht=tt.getViewportCount();for(let ie=0;ie<Ht;ie++){const xe=tt.getViewport(ie);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),rt.viewport(a),tt.updateMatrices(_t,ie),n=tt.getFrustum(),b(F,q,tt.camera,_t,this.type)}tt.isPointLightShadow!==!0&&this.type===ui&&L(tt,q),tt.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(T,S,V)};function L(z,F){const q=t.update(x);d.defines.VSM_SAMPLES!==z.blurSamples&&(d.defines.VSM_SAMPLES=z.blurSamples,p.defines.VSM_SAMPLES=z.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Xi(r.x,r.y)),d.uniforms.shadow_pass.value=z.map.texture,d.uniforms.resolution.value=z.mapSize,d.uniforms.radius.value=z.radius,i.setRenderTarget(z.mapPass),i.clear(),i.renderBufferDirect(F,null,q,d,x,null),p.uniforms.shadow_pass.value=z.mapPass.texture,p.uniforms.resolution.value=z.mapSize,p.uniforms.radius.value=z.radius,i.setRenderTarget(z.map),i.clear(),i.renderBufferDirect(F,null,q,p,x,null)}function C(z,F,q,T){let S=null;const V=q.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)S=V;else if(S=q.isPointLight===!0?c:o,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const rt=S.uuid,K=F.uuid;let ht=u[rt];ht===void 0&&(ht={},u[rt]=ht);let mt=ht[K];mt===void 0&&(mt=S.clone(),ht[K]=mt,F.addEventListener("dispose",k)),S=mt}if(S.visible=F.visible,S.wireframe=F.wireframe,T===ui?S.side=F.shadowSide!==null?F.shadowSide:F.side:S.side=F.shadowSide!==null?F.shadowSide:f[F.side],S.alphaMap=F.alphaMap,S.alphaTest=F.alphaTest,S.map=F.map,S.clipShadows=F.clipShadows,S.clippingPlanes=F.clippingPlanes,S.clipIntersection=F.clipIntersection,S.displacementMap=F.displacementMap,S.displacementScale=F.displacementScale,S.displacementBias=F.displacementBias,S.wireframeLinewidth=F.wireframeLinewidth,S.linewidth=F.linewidth,q.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const rt=i.properties.get(S);rt.light=q}return S}function b(z,F,q,T,S){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&S===ui)&&(!z.frustumCulled||n.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,z.matrixWorld);const K=t.update(z),ht=z.material;if(Array.isArray(ht)){const mt=K.groups;for(let ot=0,_t=mt.length;ot<_t;ot++){const tt=mt[ot],Lt=ht[tt.materialIndex];if(Lt&&Lt.visible){const Ht=C(z,Lt,T,S);z.onBeforeShadow(i,z,F,q,K,Ht,tt),i.renderBufferDirect(q,null,K,Ht,z,tt),z.onAfterShadow(i,z,F,q,K,Ht,tt)}}}else if(ht.visible){const mt=C(z,ht,T,S);z.onBeforeShadow(i,z,F,q,K,mt,null),i.renderBufferDirect(q,null,K,mt,z,null),z.onAfterShadow(i,z,F,q,K,mt,null)}}const rt=z.children;for(let K=0,ht=rt.length;K<ht;K++)b(rt[K],F,q,T,S)}function k(z){z.target.removeEventListener("dispose",k);for(const q in u){const T=u[q],S=z.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const L0={[Wa]:Xa,[qa]:Za,[Ya]:Ja,[yr]:$a,[Xa]:Wa,[Za]:qa,[Ja]:Ya,[$a]:yr};function I0(i,t){function e(){let y=!1;const H=new tn;let D=null;const I=new tn(0,0,0,0);return{setMask:function(B){D!==B&&!y&&(i.colorMask(B,B,B,B),D=B)},setLocked:function(B){y=B},setClear:function(B,X,j,ct,gt){gt===!0&&(B*=ct,X*=ct,j*=ct),H.set(B,X,j,ct),I.equals(H)===!1&&(i.clearColor(B,X,j,ct),I.copy(H))},reset:function(){y=!1,D=null,I.set(-1,0,0,0)}}}function n(){let y=!1,H=!1,D=null,I=null,B=null;return{setReversed:function(X){if(H!==X){const j=t.get("EXT_clip_control");H?j.clipControlEXT(j.LOWER_LEFT_EXT,j.ZERO_TO_ONE_EXT):j.clipControlEXT(j.LOWER_LEFT_EXT,j.NEGATIVE_ONE_TO_ONE_EXT);const ct=B;B=null,this.setClear(ct)}H=X},getReversed:function(){return H},setTest:function(X){X?It(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(X){D!==X&&!y&&(i.depthMask(X),D=X)},setFunc:function(X){if(H&&(X=L0[X]),I!==X){switch(X){case Wa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case Za:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}I=X}},setLocked:function(X){y=X},setClear:function(X){B!==X&&(H&&(X=1-X),i.clearDepth(X),B=X)},reset:function(){y=!1,D=null,I=null,B=null,H=!1}}}function r(){let y=!1,H=null,D=null,I=null,B=null,X=null,j=null,ct=null,gt=null;return{setTest:function(ft){y||(ft?It(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(ft){H!==ft&&!y&&(i.stencilMask(ft),H=ft)},setFunc:function(ft,zt,Ct){(D!==ft||I!==zt||B!==Ct)&&(i.stencilFunc(ft,zt,Ct),D=ft,I=zt,B=Ct)},setOp:function(ft,zt,Ct){(X!==ft||j!==zt||ct!==Ct)&&(i.stencilOp(ft,zt,Ct),X=ft,j=zt,ct=Ct)},setLocked:function(ft){y=ft},setClear:function(ft){gt!==ft&&(i.clearStencil(ft),gt=ft)},reset:function(){y=!1,H=null,D=null,I=null,B=null,X=null,j=null,ct=null,gt=null}}}const s=new e,a=new n,o=new r,c=new WeakMap,u=new WeakMap;let l={},f={},d=new WeakMap,p=[],_=null,x=!1,m=null,h=null,L=null,C=null,b=null,k=null,z=null,F=new ee(0,0,0),q=0,T=!1,S=null,V=null,rt=null,K=null,ht=null;const mt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ot=!1,_t=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(_t=parseFloat(/^WebGL (\d)/.exec(tt)[1]),ot=_t>=1):tt.indexOf("OpenGL ES")!==-1&&(_t=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),ot=_t>=2);let Lt=null,Ht={};const ie=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),ze=new tn().fromArray(ie),st=new tn().fromArray(xe);function yt(y,H,D,I){const B=new Uint8Array(4),X=i.createTexture();i.bindTexture(y,X),i.texParameteri(y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let j=0;j<D;j++)y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY?i.texImage3D(H,0,i.RGBA,1,1,I,0,i.RGBA,i.UNSIGNED_BYTE,B):i.texImage2D(H+j,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,B);return X}const $t={};$t[i.TEXTURE_2D]=yt(i.TEXTURE_2D,i.TEXTURE_2D,1),$t[i.TEXTURE_CUBE_MAP]=yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$t[i.TEXTURE_2D_ARRAY]=yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$t[i.TEXTURE_3D]=yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),It(i.DEPTH_TEST),a.setFunc(yr),Ae(!1),we(Ko),It(i.CULL_FACE),N(Ti);function It(y){l[y]!==!0&&(i.enable(y),l[y]=!0)}function ae(y){l[y]!==!1&&(i.disable(y),l[y]=!1)}function he(y,H){return f[y]!==H?(i.bindFramebuffer(y,H),f[y]=H,y===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=H),y===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=H),!0):!1}function Me(y,H){let D=p,I=!1;if(y){D=d.get(H),D===void 0&&(D=[],d.set(H,D));const B=y.textures;if(D.length!==B.length||D[0]!==i.COLOR_ATTACHMENT0){for(let X=0,j=B.length;X<j;X++)D[X]=i.COLOR_ATTACHMENT0+X;D.length=B.length,I=!0}}else D[0]!==i.BACK&&(D[0]=i.BACK,I=!0);I&&i.drawBuffers(D)}function Xe(y){return _!==y?(i.useProgram(y),_=y,!0):!1}const Pe={[zi]:i.FUNC_ADD,[uu]:i.FUNC_SUBTRACT,[hu]:i.FUNC_REVERSE_SUBTRACT};Pe[fu]=i.MIN,Pe[du]=i.MAX;const Ze={[pu]:i.ZERO,[mu]:i.ONE,[gu]:i.SRC_COLOR,[ka]:i.SRC_ALPHA,[yu]:i.SRC_ALPHA_SATURATE,[Mu]:i.DST_COLOR,[vu]:i.DST_ALPHA,[_u]:i.ONE_MINUS_SRC_COLOR,[Ga]:i.ONE_MINUS_SRC_ALPHA,[Su]:i.ONE_MINUS_DST_COLOR,[xu]:i.ONE_MINUS_DST_ALPHA,[Eu]:i.CONSTANT_COLOR,[bu]:i.ONE_MINUS_CONSTANT_COLOR,[Tu]:i.CONSTANT_ALPHA,[Au]:i.ONE_MINUS_CONSTANT_ALPHA};function N(y,H,D,I,B,X,j,ct,gt,ft){if(y===Ti){x===!0&&(ae(i.BLEND),x=!1);return}if(x===!1&&(It(i.BLEND),x=!0),y!==lu){if(y!==m||ft!==T){if((h!==zi||b!==zi)&&(i.blendEquation(i.FUNC_ADD),h=zi,b=zi),ft)switch(y){case _r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ue:i.blendFunc(i.ONE,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case _r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ue:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}L=null,C=null,k=null,z=null,F.set(0,0,0),q=0,m=y,T=ft}return}B=B||H,X=X||D,j=j||I,(H!==h||B!==b)&&(i.blendEquationSeparate(Pe[H],Pe[B]),h=H,b=B),(D!==L||I!==C||X!==k||j!==z)&&(i.blendFuncSeparate(Ze[D],Ze[I],Ze[X],Ze[j]),L=D,C=I,k=X,z=j),(ct.equals(F)===!1||gt!==q)&&(i.blendColor(ct.r,ct.g,ct.b,gt),F.copy(ct),q=gt),m=y,T=!1}function vn(y,H){y.side===qn?ae(i.CULL_FACE):It(i.CULL_FACE);let D=y.side===Un;H&&(D=!D),Ae(D),y.blending===_r&&y.transparent===!1?N(Ti):N(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),a.setFunc(y.depthFunc),a.setTest(y.depthTest),a.setMask(y.depthWrite),s.setMask(y.colorWrite);const I=y.stencilWrite;o.setTest(I),I&&(o.setMask(y.stencilWriteMask),o.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),o.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),le(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?It(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(y){S!==y&&(y?i.frontFace(i.CW):i.frontFace(i.CCW),S=y)}function we(y){y!==au?(It(i.CULL_FACE),y!==V&&(y===Ko?i.cullFace(i.BACK):y===ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),V=y}function jt(y){y!==rt&&(ot&&i.lineWidth(y),rt=y)}function le(y,H,D){y?(It(i.POLYGON_OFFSET_FILL),(K!==H||ht!==D)&&(i.polygonOffset(H,D),K=H,ht=D)):ae(i.POLYGON_OFFSET_FILL)}function ne(y){y?It(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function A(y){y===void 0&&(y=i.TEXTURE0+mt-1),Lt!==y&&(i.activeTexture(y),Lt=y)}function v(y,H,D){D===void 0&&(Lt===null?D=i.TEXTURE0+mt-1:D=Lt);let I=Ht[D];I===void 0&&(I={type:void 0,texture:void 0},Ht[D]=I),(I.type!==y||I.texture!==H)&&(Lt!==D&&(i.activeTexture(D),Lt=D),i.bindTexture(y,H||$t[y]),I.type=y,I.texture=H)}function J(){const y=Ht[Lt];y!==void 0&&y.type!==void 0&&(i.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function lt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function pt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Vt(){try{i.texSubImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function wt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function kt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function be(){try{i.texStorage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Mt(){try{i.texStorage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function M(){try{i.texImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function E(){try{i.texImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function P(y){ze.equals(y)===!1&&(i.scissor(y.x,y.y,y.z,y.w),ze.copy(y))}function w(y){st.equals(y)===!1&&(i.viewport(y.x,y.y,y.z,y.w),st.copy(y))}function G(y,H){let D=u.get(H);D===void 0&&(D=new WeakMap,u.set(H,D));let I=D.get(y);I===void 0&&(I=i.getUniformBlockIndex(H,y.name),D.set(y,I))}function Z(y,H){const I=u.get(H).get(y);c.get(H)!==I&&(i.uniformBlockBinding(H,I,y.__bindingPointIndex),c.set(H,I))}function Y(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},Lt=null,Ht={},f={},d=new WeakMap,p=[],_=null,x=!1,m=null,h=null,L=null,C=null,b=null,k=null,z=null,F=new ee(0,0,0),q=0,T=!1,S=null,V=null,rt=null,K=null,ht=null,ze.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:It,disable:ae,bindFramebuffer:he,drawBuffers:Me,useProgram:Xe,setBlending:N,setMaterial:vn,setFlipSided:Ae,setCullFace:we,setLineWidth:jt,setPolygonOffset:le,setScissorTest:ne,activeTexture:A,bindTexture:v,unbindTexture:J,compressedTexImage2D:lt,compressedTexImage3D:pt,texImage2D:M,texImage3D:E,updateUBOMapping:G,uniformBlockBinding:Z,texStorage2D:be,texStorage3D:Mt,texSubImage2D:it,texSubImage3D:Vt,compressedTexSubImage2D:wt,compressedTexSubImage3D:kt,scissor:P,viewport:w,reset:Y}}function U0(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new se,l=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,v){return p?new OffscreenCanvas(A,v):Xs("canvas")}function x(A,v,J){let lt=1;const pt=ne(A);if((pt.width>J||pt.height>J)&&(lt=J/Math.max(pt.width,pt.height)),lt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const it=Math.floor(lt*pt.width),Vt=Math.floor(lt*pt.height);f===void 0&&(f=_(it,Vt));const wt=v?_(it,Vt):f;return wt.width=it,wt.height=Vt,wt.getContext("2d").drawImage(A,0,0,it,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+it+"x"+Vt+")."),wt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),A;return A}function m(A){return A.generateMipmaps}function h(A){i.generateMipmap(A)}function L(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(A,v,J,lt,pt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let it=v;if(v===i.RED&&(J===i.FLOAT&&(it=i.R32F),J===i.HALF_FLOAT&&(it=i.R16F),J===i.UNSIGNED_BYTE&&(it=i.R8)),v===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(it=i.R8UI),J===i.UNSIGNED_SHORT&&(it=i.R16UI),J===i.UNSIGNED_INT&&(it=i.R32UI),J===i.BYTE&&(it=i.R8I),J===i.SHORT&&(it=i.R16I),J===i.INT&&(it=i.R32I)),v===i.RG&&(J===i.FLOAT&&(it=i.RG32F),J===i.HALF_FLOAT&&(it=i.RG16F),J===i.UNSIGNED_BYTE&&(it=i.RG8)),v===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(it=i.RG8UI),J===i.UNSIGNED_SHORT&&(it=i.RG16UI),J===i.UNSIGNED_INT&&(it=i.RG32UI),J===i.BYTE&&(it=i.RG8I),J===i.SHORT&&(it=i.RG16I),J===i.INT&&(it=i.RG32I)),v===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(it=i.RGB8UI),J===i.UNSIGNED_SHORT&&(it=i.RGB16UI),J===i.UNSIGNED_INT&&(it=i.RGB32UI),J===i.BYTE&&(it=i.RGB8I),J===i.SHORT&&(it=i.RGB16I),J===i.INT&&(it=i.RGB32I)),v===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),J===i.UNSIGNED_INT&&(it=i.RGBA32UI),J===i.BYTE&&(it=i.RGBA8I),J===i.SHORT&&(it=i.RGBA16I),J===i.INT&&(it=i.RGBA32I)),v===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),v===i.RGBA){const Vt=pt?Gs:Oe.getTransfer(lt);J===i.FLOAT&&(it=i.RGBA32F),J===i.HALF_FLOAT&&(it=i.RGBA16F),J===i.UNSIGNED_BYTE&&(it=Vt===Ge?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function b(A,v){let J;return A?v===null||v===Wi||v===Tr?J=i.DEPTH24_STENCIL8:v===hi?J=i.DEPTH32F_STENCIL8:v===Yr&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Wi||v===Tr?J=i.DEPTH_COMPONENT24:v===hi?J=i.DEPTH_COMPONENT32F:v===Yr&&(J=i.DEPTH_COMPONENT16),J}function k(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Zn&&A.minFilter!==ei?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function z(A){const v=A.target;v.removeEventListener("dispose",z),q(v),v.isVideoTexture&&l.delete(v)}function F(A){const v=A.target;v.removeEventListener("dispose",F),S(v)}function q(A){const v=n.get(A);if(v.__webglInit===void 0)return;const J=A.source,lt=d.get(J);if(lt){const pt=lt[v.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&T(A),Object.keys(lt).length===0&&d.delete(J)}n.remove(A)}function T(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const J=A.source,lt=d.get(J);delete lt[v.__cacheKey],a.memory.textures--}function S(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(v.__webglFramebuffer[lt]))for(let pt=0;pt<v.__webglFramebuffer[lt].length;pt++)i.deleteFramebuffer(v.__webglFramebuffer[lt][pt]);else i.deleteFramebuffer(v.__webglFramebuffer[lt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[lt])}else{if(Array.isArray(v.__webglFramebuffer))for(let lt=0;lt<v.__webglFramebuffer.length;lt++)i.deleteFramebuffer(v.__webglFramebuffer[lt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let lt=0;lt<v.__webglColorRenderbuffer.length;lt++)v.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[lt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const J=A.textures;for(let lt=0,pt=J.length;lt<pt;lt++){const it=n.get(J[lt]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(J[lt])}n.remove(A)}let V=0;function rt(){V=0}function K(){const A=V;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),V+=1,A}function ht(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function mt(A,v){const J=n.get(A);if(A.isVideoTexture&&jt(A),A.isRenderTargetTexture===!1&&A.version>0&&J.__version!==A.version){const lt=A.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(J,A,v);return}}e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+v)}function ot(A,v){const J=n.get(A);if(A.version>0&&J.__version!==A.version){st(J,A,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+v)}function _t(A,v){const J=n.get(A);if(A.version>0&&J.__version!==A.version){st(J,A,v);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+v)}function tt(A,v){const J=n.get(A);if(A.version>0&&J.__version!==A.version){yt(J,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+v)}const Lt={[Qa]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[to]:i.MIRRORED_REPEAT},Ht={[Zn]:i.NEAREST,[Fu]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[ei]:i.LINEAR,[ra]:i.LINEAR_MIPMAP_NEAREST,[Gi]:i.LINEAR_MIPMAP_LINEAR},ie={[Hu]:i.NEVER,[Yu]:i.ALWAYS,[ku]:i.LESS,[Cl]:i.LEQUAL,[Gu]:i.EQUAL,[qu]:i.GEQUAL,[Wu]:i.GREATER,[Xu]:i.NOTEQUAL};function xe(A,v){if(v.type===hi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ei||v.magFilter===ra||v.magFilter===Qr||v.magFilter===Gi||v.minFilter===ei||v.minFilter===ra||v.minFilter===Qr||v.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Lt[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Lt[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Lt[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ht[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ht[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ie[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Zn||v.minFilter!==Qr&&v.minFilter!==Gi||v.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ze(A,v){let J=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",z));const lt=v.source;let pt=d.get(lt);pt===void 0&&(pt={},d.set(lt,pt));const it=ht(v);if(it!==A.__cacheKey){pt[it]===void 0&&(pt[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),pt[it].usedTimes++;const Vt=pt[A.__cacheKey];Vt!==void 0&&(pt[A.__cacheKey].usedTimes--,Vt.usedTimes===0&&T(v)),A.__cacheKey=it,A.__webglTexture=pt[it].texture}return J}function st(A,v,J){let lt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(lt=i.TEXTURE_3D);const pt=ze(A,v),it=v.source;e.bindTexture(lt,A.__webglTexture,i.TEXTURE0+J);const Vt=n.get(it);if(it.version!==Vt.__version||pt===!0){e.activeTexture(i.TEXTURE0+J);const wt=Oe.getPrimaries(Oe.workingColorSpace),kt=v.colorSpace===bi?null:Oe.getPrimaries(v.colorSpace),be=v.colorSpace===bi||wt===kt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Mt=x(v.image,!1,r.maxTextureSize);Mt=le(v,Mt);const M=s.convert(v.format,v.colorSpace),E=s.convert(v.type);let P=C(v.internalFormat,M,E,v.colorSpace,v.isVideoTexture);xe(lt,v);let w;const G=v.mipmaps,Z=v.isVideoTexture!==!0,Y=Vt.__version===void 0||pt===!0,y=it.dataReady,H=k(v,Mt);if(v.isDepthTexture)P=b(v.format===Ar,v.type),Y&&(Z?e.texStorage2D(i.TEXTURE_2D,1,P,Mt.width,Mt.height):e.texImage2D(i.TEXTURE_2D,0,P,Mt.width,Mt.height,0,M,E,null));else if(v.isDataTexture)if(G.length>0){Z&&Y&&e.texStorage2D(i.TEXTURE_2D,H,P,G[0].width,G[0].height);for(let D=0,I=G.length;D<I;D++)w=G[D],Z?y&&e.texSubImage2D(i.TEXTURE_2D,D,0,0,w.width,w.height,M,E,w.data):e.texImage2D(i.TEXTURE_2D,D,P,w.width,w.height,0,M,E,w.data);v.generateMipmaps=!1}else Z?(Y&&e.texStorage2D(i.TEXTURE_2D,H,P,Mt.width,Mt.height),y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt.width,Mt.height,M,E,Mt.data)):e.texImage2D(i.TEXTURE_2D,0,P,Mt.width,Mt.height,0,M,E,Mt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Z&&Y&&e.texStorage3D(i.TEXTURE_2D_ARRAY,H,P,G[0].width,G[0].height,Mt.depth);for(let D=0,I=G.length;D<I;D++)if(w=G[D],v.format!==$n)if(M!==null)if(Z){if(y)if(v.layerUpdates.size>0){const B=Lc(w.width,w.height,v.format,v.type);for(const X of v.layerUpdates){const j=w.data.subarray(X*B/w.data.BYTES_PER_ELEMENT,(X+1)*B/w.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,D,0,0,X,w.width,w.height,1,M,j)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,D,0,0,0,w.width,w.height,Mt.depth,M,w.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,D,P,w.width,w.height,Mt.depth,0,w.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,D,0,0,0,w.width,w.height,Mt.depth,M,E,w.data):e.texImage3D(i.TEXTURE_2D_ARRAY,D,P,w.width,w.height,Mt.depth,0,M,E,w.data)}else{Z&&Y&&e.texStorage2D(i.TEXTURE_2D,H,P,G[0].width,G[0].height);for(let D=0,I=G.length;D<I;D++)w=G[D],v.format!==$n?M!==null?Z?y&&e.compressedTexSubImage2D(i.TEXTURE_2D,D,0,0,w.width,w.height,M,w.data):e.compressedTexImage2D(i.TEXTURE_2D,D,P,w.width,w.height,0,w.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?y&&e.texSubImage2D(i.TEXTURE_2D,D,0,0,w.width,w.height,M,E,w.data):e.texImage2D(i.TEXTURE_2D,D,P,w.width,w.height,0,M,E,w.data)}else if(v.isDataArrayTexture)if(Z){if(Y&&e.texStorage3D(i.TEXTURE_2D_ARRAY,H,P,Mt.width,Mt.height,Mt.depth),y)if(v.layerUpdates.size>0){const D=Lc(Mt.width,Mt.height,v.format,v.type);for(const I of v.layerUpdates){const B=Mt.data.subarray(I*D/Mt.data.BYTES_PER_ELEMENT,(I+1)*D/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,I,Mt.width,Mt.height,1,M,E,B)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,M,E,Mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,P,Mt.width,Mt.height,Mt.depth,0,M,E,Mt.data);else if(v.isData3DTexture)Z?(Y&&e.texStorage3D(i.TEXTURE_3D,H,P,Mt.width,Mt.height,Mt.depth),y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,M,E,Mt.data)):e.texImage3D(i.TEXTURE_3D,0,P,Mt.width,Mt.height,Mt.depth,0,M,E,Mt.data);else if(v.isFramebufferTexture){if(Y)if(Z)e.texStorage2D(i.TEXTURE_2D,H,P,Mt.width,Mt.height);else{let D=Mt.width,I=Mt.height;for(let B=0;B<H;B++)e.texImage2D(i.TEXTURE_2D,B,P,D,I,0,M,E,null),D>>=1,I>>=1}}else if(G.length>0){if(Z&&Y){const D=ne(G[0]);e.texStorage2D(i.TEXTURE_2D,H,P,D.width,D.height)}for(let D=0,I=G.length;D<I;D++)w=G[D],Z?y&&e.texSubImage2D(i.TEXTURE_2D,D,0,0,M,E,w):e.texImage2D(i.TEXTURE_2D,D,P,M,E,w);v.generateMipmaps=!1}else if(Z){if(Y){const D=ne(Mt);e.texStorage2D(i.TEXTURE_2D,H,P,D.width,D.height)}y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,M,E,Mt)}else e.texImage2D(i.TEXTURE_2D,0,P,M,E,Mt);m(v)&&h(lt),Vt.__version=it.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function yt(A,v,J){if(v.image.length!==6)return;const lt=ze(A,v),pt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+J);const it=n.get(pt);if(pt.version!==it.__version||lt===!0){e.activeTexture(i.TEXTURE0+J);const Vt=Oe.getPrimaries(Oe.workingColorSpace),wt=v.colorSpace===bi?null:Oe.getPrimaries(v.colorSpace),kt=v.colorSpace===bi||Vt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const be=v.isCompressedTexture||v.image[0].isCompressedTexture,Mt=v.image[0]&&v.image[0].isDataTexture,M=[];for(let I=0;I<6;I++)!be&&!Mt?M[I]=x(v.image[I],!0,r.maxCubemapSize):M[I]=Mt?v.image[I].image:v.image[I],M[I]=le(v,M[I]);const E=M[0],P=s.convert(v.format,v.colorSpace),w=s.convert(v.type),G=C(v.internalFormat,P,w,v.colorSpace),Z=v.isVideoTexture!==!0,Y=it.__version===void 0||lt===!0,y=pt.dataReady;let H=k(v,E);xe(i.TEXTURE_CUBE_MAP,v);let D;if(be){Z&&Y&&e.texStorage2D(i.TEXTURE_CUBE_MAP,H,G,E.width,E.height);for(let I=0;I<6;I++){D=M[I].mipmaps;for(let B=0;B<D.length;B++){const X=D[B];v.format!==$n?P!==null?Z?y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,B,0,0,X.width,X.height,P,X.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,B,G,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,B,0,0,X.width,X.height,P,w,X.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,B,G,X.width,X.height,0,P,w,X.data)}}}else{if(D=v.mipmaps,Z&&Y){D.length>0&&H++;const I=ne(M[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,H,G,I.width,I.height)}for(let I=0;I<6;I++)if(Mt){Z?y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,M[I].width,M[I].height,P,w,M[I].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,G,M[I].width,M[I].height,0,P,w,M[I].data);for(let B=0;B<D.length;B++){const j=D[B].image[I].image;Z?y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,B+1,0,0,j.width,j.height,P,w,j.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,B+1,G,j.width,j.height,0,P,w,j.data)}}else{Z?y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,P,w,M[I]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,G,P,w,M[I]);for(let B=0;B<D.length;B++){const X=D[B];Z?y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,B+1,0,0,P,w,X.image[I]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,B+1,G,P,w,X.image[I])}}}m(v)&&h(i.TEXTURE_CUBE_MAP),it.__version=pt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function $t(A,v,J,lt,pt,it){const Vt=s.convert(J.format,J.colorSpace),wt=s.convert(J.type),kt=C(J.internalFormat,Vt,wt,J.colorSpace),be=n.get(v),Mt=n.get(J);if(Mt.__renderTarget=v,!be.__hasExternalTextures){const M=Math.max(1,v.width>>it),E=Math.max(1,v.height>>it);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,it,kt,M,E,v.depth,0,Vt,wt,null):e.texImage2D(pt,it,kt,M,E,0,Vt,wt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),we(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,pt,Mt.__webglTexture,0,Ae(v)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,pt,Mt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(A,v,J){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const lt=v.depthTexture,pt=lt&&lt.isDepthTexture?lt.type:null,it=b(v.stencilBuffer,pt),Vt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=Ae(v);we(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,it,v.width,v.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,it,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,it,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Vt,i.RENDERBUFFER,A)}else{const lt=v.textures;for(let pt=0;pt<lt.length;pt++){const it=lt[pt],Vt=s.convert(it.format,it.colorSpace),wt=s.convert(it.type),kt=C(it.internalFormat,Vt,wt,it.colorSpace),be=Ae(v);J&&we(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,kt,v.width,v.height):we(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,kt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,kt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=n.get(v.depthTexture);lt.__renderTarget=v,(!lt.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),mt(v.depthTexture,0);const pt=lt.__webglTexture,it=Ae(v);if(v.depthTexture.format===vr)we(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0);else if(v.depthTexture.format===Ar)we(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function he(A){const v=n.get(A),J=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const lt=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),lt){const pt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,lt.removeEventListener("dispose",pt)};lt.addEventListener("dispose",pt),v.__depthDisposeCallback=pt}v.__boundDepthTexture=lt}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");ae(v.__webglFramebuffer,A)}else if(J){v.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[lt]),v.__webglDepthbuffer[lt]===void 0)v.__webglDepthbuffer[lt]=i.createRenderbuffer(),It(v.__webglDepthbuffer[lt],A,!1);else{const pt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=v.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),It(v.__webglDepthbuffer,A,!1);else{const lt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,pt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(A,v,J){const lt=n.get(A);v!==void 0&&$t(lt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&he(A)}function Xe(A){const v=A.texture,J=n.get(A),lt=n.get(v);A.addEventListener("dispose",F);const pt=A.textures,it=A.isWebGLCubeRenderTarget===!0,Vt=pt.length>1;if(Vt||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=v.version,a.memory.textures++),it){J.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(v.mipmaps&&v.mipmaps.length>0){J.__webglFramebuffer[wt]=[];for(let kt=0;kt<v.mipmaps.length;kt++)J.__webglFramebuffer[wt][kt]=i.createFramebuffer()}else J.__webglFramebuffer[wt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){J.__webglFramebuffer=[];for(let wt=0;wt<v.mipmaps.length;wt++)J.__webglFramebuffer[wt]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Vt)for(let wt=0,kt=pt.length;wt<kt;wt++){const be=n.get(pt[wt]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&we(A)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let wt=0;wt<pt.length;wt++){const kt=pt[wt];J.__webglColorRenderbuffer[wt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[wt]);const be=s.convert(kt.format,kt.colorSpace),Mt=s.convert(kt.type),M=C(kt.internalFormat,be,Mt,kt.colorSpace,A.isXRRenderTarget===!0),E=Ae(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,E,M,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,J.__webglColorRenderbuffer[wt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),It(J.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),xe(i.TEXTURE_CUBE_MAP,v);for(let wt=0;wt<6;wt++)if(v.mipmaps&&v.mipmaps.length>0)for(let kt=0;kt<v.mipmaps.length;kt++)$t(J.__webglFramebuffer[wt][kt],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,kt);else $t(J.__webglFramebuffer[wt],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);m(v)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Vt){for(let wt=0,kt=pt.length;wt<kt;wt++){const be=pt[wt],Mt=n.get(be);e.bindTexture(i.TEXTURE_2D,Mt.__webglTexture),xe(i.TEXTURE_2D,be),$t(J.__webglFramebuffer,A,be,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,0),m(be)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let wt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(wt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,lt.__webglTexture),xe(wt,v),v.mipmaps&&v.mipmaps.length>0)for(let kt=0;kt<v.mipmaps.length;kt++)$t(J.__webglFramebuffer[kt],A,v,i.COLOR_ATTACHMENT0,wt,kt);else $t(J.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,wt,0);m(v)&&h(wt),e.unbindTexture()}A.depthBuffer&&he(A)}function Pe(A){const v=A.textures;for(let J=0,lt=v.length;J<lt;J++){const pt=v[J];if(m(pt)){const it=L(A),Vt=n.get(pt).__webglTexture;e.bindTexture(it,Vt),h(it),e.unbindTexture()}}}const Ze=[],N=[];function vn(A){if(A.samples>0){if(we(A)===!1){const v=A.textures,J=A.width,lt=A.height;let pt=i.COLOR_BUFFER_BIT;const it=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Vt=n.get(A),wt=v.length>1;if(wt)for(let kt=0;kt<v.length;kt++)e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let kt=0;kt<v.length;kt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),wt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Vt.__webglColorRenderbuffer[kt]);const be=n.get(v[kt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,J,lt,0,0,J,lt,pt,i.NEAREST),c===!0&&(Ze.length=0,N.length=0,Ze.push(i.COLOR_ATTACHMENT0+kt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ze.push(it),N.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ze))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),wt)for(let kt=0;kt<v.length;kt++){e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,Vt.__webglColorRenderbuffer[kt]);const be=n.get(v[kt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,be,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ae(A){return Math.min(r.maxSamples,A.samples)}function we(A){const v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function jt(A){const v=a.render.frame;l.get(A)!==v&&(l.set(A,v),A.update())}function le(A,v){const J=A.colorSpace,lt=A.format,pt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||J!==wr&&J!==bi&&(Oe.getTransfer(J)===Ge?(lt!==$n||pt!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),v}function ne(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=K,this.resetTextureUnits=rt,this.setTexture2D=mt,this.setTexture2DArray=ot,this.setTexture3D=_t,this.setTextureCube=tt,this.rebindTextures=Me,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=$t,this.useMultisampledRTT=we}function N0(i,t){function e(n,r=bi){let s;const a=Oe.getTransfer(r);if(n===gi)return i.UNSIGNED_BYTE;if(n===Fo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vl)return i.BYTE;if(n===xl)return i.SHORT;if(n===Yr)return i.UNSIGNED_SHORT;if(n===No)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===hi)return i.FLOAT;if(n===Zr)return i.HALF_FLOAT;if(n===Sl)return i.ALPHA;if(n===yl)return i.RGB;if(n===$n)return i.RGBA;if(n===El)return i.LUMINANCE;if(n===bl)return i.LUMINANCE_ALPHA;if(n===vr)return i.DEPTH_COMPONENT;if(n===Ar)return i.DEPTH_STENCIL;if(n===Tl)return i.RED;if(n===zo)return i.RED_INTEGER;if(n===Al)return i.RG;if(n===Bo)return i.RG_INTEGER;if(n===Vo)return i.RGBA_INTEGER;if(n===Us||n===Ns||n===Fs||n===Os)if(a===Ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Us)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Us)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Os)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eo||n===no||n===io||n===ro)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===eo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===no)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===io)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ro)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===so||n===ao||n===oo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===so||n===ao)return a===Ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===oo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===co||n===lo||n===uo||n===ho||n===fo||n===po||n===mo||n===go||n===_o||n===vo||n===xo||n===Mo||n===So||n===yo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===co)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ho)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===po)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===go)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_o)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===So)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zs||n===Eo||n===bo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===zs)return a===Ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wl||n===To||n===Ao||n===wo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===zs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===To)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const F0={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),h=this._getHandJoint(u,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const l=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=l.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const O0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z0=`
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

}`;class B0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Dn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:O0,fragmentShader:z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pn(new ea(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V0 extends Rr{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,l=null,f=null,d=null,p=null,_=null;const x=new B0,m=e.getContextAttributes();let h=null,L=null;const C=[],b=[],k=new se;let z=null;const F=new Hn;F.viewport=new tn;const q=new Hn;q.viewport=new tn;const T=[F,q],S=new af;let V=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let yt=C[st];return yt===void 0&&(yt=new Oa,C[st]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(st){let yt=C[st];return yt===void 0&&(yt=new Oa,C[st]=yt),yt.getGripSpace()},this.getHand=function(st){let yt=C[st];return yt===void 0&&(yt=new Oa,C[st]=yt),yt.getHandSpace()};function K(st){const yt=b.indexOf(st.inputSource);if(yt===-1)return;const $t=C[yt];$t!==void 0&&($t.update(st.inputSource,st.frame,u||a),$t.dispatchEvent({type:st.type,data:st.inputSource}))}function ht(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",ht),r.removeEventListener("inputsourceschange",mt);for(let st=0;st<C.length;st++){const yt=b[st];yt!==null&&(b[st]=null,C[st].disconnect(yt))}V=null,rt=null,x.reset(),t.setRenderTarget(h),p=null,d=null,f=null,r=null,L=null,ze.stop(),n.isPresenting=!1,t.setPixelRatio(z),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){s=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){o=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(st){u=st},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(st){if(r=st,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",ht),r.addEventListener("inputsourceschange",mt),m.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(k),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let $t=null,It=null,ae=null;m.depth&&(ae=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$t=m.stencil?Ar:vr,It=m.stencil?Tr:Wi);const he={colorFormat:e.RGBA8,depthFormat:ae,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(he),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),L=new Xi(d.textureWidth,d.textureHeight,{format:$n,type:gi,depthTexture:new Hl(d.textureWidth,d.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,$t),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const $t={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,$t),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),L=new Xi(p.framebufferWidth,p.framebufferHeight,{format:$n,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}L.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),ze.setContext(r),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function mt(st){for(let yt=0;yt<st.removed.length;yt++){const $t=st.removed[yt],It=b.indexOf($t);It>=0&&(b[It]=null,C[It].disconnect($t))}for(let yt=0;yt<st.added.length;yt++){const $t=st.added[yt];let It=b.indexOf($t);if(It===-1){for(let he=0;he<C.length;he++)if(he>=b.length){b.push($t),It=he;break}else if(b[he]===null){b[he]=$t,It=he;break}if(It===-1)break}const ae=C[It];ae&&ae.connect($t)}}const ot=new R,_t=new R;function tt(st,yt,$t){ot.setFromMatrixPosition(yt.matrixWorld),_t.setFromMatrixPosition($t.matrixWorld);const It=ot.distanceTo(_t),ae=yt.projectionMatrix.elements,he=$t.projectionMatrix.elements,Me=ae[14]/(ae[10]-1),Xe=ae[14]/(ae[10]+1),Pe=(ae[9]+1)/ae[5],Ze=(ae[9]-1)/ae[5],N=(ae[8]-1)/ae[0],vn=(he[8]+1)/he[0],Ae=Me*N,we=Me*vn,jt=It/(-N+vn),le=jt*-N;if(yt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(le),st.translateZ(jt),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),ae[10]===-1)st.projectionMatrix.copy(yt.projectionMatrix),st.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{const ne=Me+jt,A=Xe+jt,v=Ae-le,J=we+(It-le),lt=Pe*Xe/A*ne,pt=Ze*Xe/A*ne;st.projectionMatrix.makePerspective(v,J,lt,pt,ne,A),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function Lt(st,yt){yt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(yt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(r===null)return;let yt=st.near,$t=st.far;x.texture!==null&&(x.depthNear>0&&(yt=x.depthNear),x.depthFar>0&&($t=x.depthFar)),S.near=q.near=F.near=yt,S.far=q.far=F.far=$t,(V!==S.near||rt!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),V=S.near,rt=S.far),F.layers.mask=st.layers.mask|2,q.layers.mask=st.layers.mask|4,S.layers.mask=F.layers.mask|q.layers.mask;const It=st.parent,ae=S.cameras;Lt(S,It);for(let he=0;he<ae.length;he++)Lt(ae[he],It);ae.length===2?tt(S,F,q):S.projectionMatrix.copy(F.projectionMatrix),Ht(st,S,It)};function Ht(st,yt,$t){$t===null?st.matrix.copy(yt.matrixWorld):(st.matrix.copy($t.matrixWorld),st.matrix.invert(),st.matrix.multiply(yt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(yt.projectionMatrix),st.projectionMatrixInverse.copy(yt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=$r*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(st){c=st,d!==null&&(d.fixedFoveation=st),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=st)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ie=null;function xe(st,yt){if(l=yt.getViewerPose(u||a),_=yt,l!==null){const $t=l.views;p!==null&&(t.setRenderTargetFramebuffer(L,p.framebuffer),t.setRenderTarget(L));let It=!1;$t.length!==S.cameras.length&&(S.cameras.length=0,It=!0);for(let he=0;he<$t.length;he++){const Me=$t[he];let Xe=null;if(p!==null)Xe=p.getViewport(Me);else{const Ze=f.getViewSubImage(d,Me);Xe=Ze.viewport,he===0&&(t.setRenderTargetTextures(L,Ze.colorTexture,d.ignoreDepthValues?void 0:Ze.depthStencilTexture),t.setRenderTarget(L))}let Pe=T[he];Pe===void 0&&(Pe=new Hn,Pe.layers.enable(he),Pe.viewport=new tn,T[he]=Pe),Pe.matrix.fromArray(Me.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Me.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),he===0&&(S.matrix.copy(Pe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),It===!0&&S.cameras.push(Pe)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const he=f.getDepthInformation($t[0]);he&&he.isValid&&he.texture&&x.init(t,he,r.renderState)}}for(let $t=0;$t<C.length;$t++){const It=b[$t],ae=C[$t];It!==null&&ae!==void 0&&ae.update(It,yt,u||a)}ie&&ie(st,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),_=null}const ze=new Xl;ze.setAnimationLoop(xe),this.setAnimationLoop=function(st){ie=st},this.dispose=function(){}}}const Ui=new Jn,H0=new $e;function k0(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Fl(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,L,C,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),l(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,b)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,L,C):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Un&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Un&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const L=t.get(h),C=L.envMap,b=L.envMapRotation;C&&(m.envMap.value=C,Ui.copy(b),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(H0.makeRotationFromEuler(Ui)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,L,C){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*L,m.scale.value=C*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,L){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Un&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=L.texture,m.transmissionSamplerSize.value.set(L.width,L.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const L=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(L.matrixWorld),m.nearDistance.value=L.shadow.camera.near,m.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function G0(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(L,C){const b=C.program;n.uniformBlockBinding(L,b)}function u(L,C){let b=r[L.id];b===void 0&&(_(L),b=l(L),r[L.id]=b,L.addEventListener("dispose",m));const k=C.program;n.updateUBOMapping(L,k);const z=t.render.frame;s[L.id]!==z&&(d(L),s[L.id]=z)}function l(L){const C=f();L.__bindingPointIndex=C;const b=i.createBuffer(),k=L.__size,z=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,k,z),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,b),b}function f(){for(let L=0;L<o;L++)if(a.indexOf(L)===-1)return a.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(L){const C=r[L.id],b=L.uniforms,k=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let z=0,F=b.length;z<F;z++){const q=Array.isArray(b[z])?b[z]:[b[z]];for(let T=0,S=q.length;T<S;T++){const V=q[T];if(p(V,z,T,k)===!0){const rt=V.__offset,K=Array.isArray(V.value)?V.value:[V.value];let ht=0;for(let mt=0;mt<K.length;mt++){const ot=K[mt],_t=x(ot);typeof ot=="number"||typeof ot=="boolean"?(V.__data[0]=ot,i.bufferSubData(i.UNIFORM_BUFFER,rt+ht,V.__data)):ot.isMatrix3?(V.__data[0]=ot.elements[0],V.__data[1]=ot.elements[1],V.__data[2]=ot.elements[2],V.__data[3]=0,V.__data[4]=ot.elements[3],V.__data[5]=ot.elements[4],V.__data[6]=ot.elements[5],V.__data[7]=0,V.__data[8]=ot.elements[6],V.__data[9]=ot.elements[7],V.__data[10]=ot.elements[8],V.__data[11]=0):(ot.toArray(V.__data,ht),ht+=_t.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,rt,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(L,C,b,k){const z=L.value,F=C+"_"+b;if(k[F]===void 0)return typeof z=="number"||typeof z=="boolean"?k[F]=z:k[F]=z.clone(),!0;{const q=k[F];if(typeof z=="number"||typeof z=="boolean"){if(q!==z)return k[F]=z,!0}else if(q.equals(z)===!1)return q.copy(z),!0}return!1}function _(L){const C=L.uniforms;let b=0;const k=16;for(let F=0,q=C.length;F<q;F++){const T=Array.isArray(C[F])?C[F]:[C[F]];for(let S=0,V=T.length;S<V;S++){const rt=T[S],K=Array.isArray(rt.value)?rt.value:[rt.value];for(let ht=0,mt=K.length;ht<mt;ht++){const ot=K[ht],_t=x(ot),tt=b%k,Lt=tt%_t.boundary,Ht=tt+Lt;b+=Lt,Ht!==0&&k-Ht<_t.storage&&(b+=k-Ht),rt.__data=new Float32Array(_t.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=b,b+=_t.storage}}}const z=b%k;return z>0&&(b+=k-z),L.__size=b,L.__cache={},this}function x(L){const C={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(C.boundary=4,C.storage=4):L.isVector2?(C.boundary=8,C.storage=8):L.isVector3||L.isColor?(C.boundary=16,C.storage=12):L.isVector4?(C.boundary=16,C.storage=16):L.isMatrix3?(C.boundary=48,C.storage=48):L.isMatrix4?(C.boundary=64,C.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),C}function m(L){const C=L.target;C.removeEventListener("dispose",m);const b=a.indexOf(C.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function h(){for(const L in r)i.deleteBuffer(r[L]);a=[],r={},s={}}return{bind:c,update:u,dispose:h}}class W0{constructor(t={}){const{canvas:e=uh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,h=null;const L=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=Ai,this.toneMappingExposure=1;const b=this;let k=!1,z=0,F=0,q=null,T=-1,S=null;const V=new tn,rt=new tn;let K=null;const ht=new ee(0);let mt=0,ot=e.width,_t=e.height,tt=1,Lt=null,Ht=null;const ie=new tn(0,0,ot,_t),xe=new tn(0,0,ot,_t);let ze=!1;const st=new Vl;let yt=!1,$t=!1;this.transmissionResolutionScale=1;const It=new $e,ae=new $e,he=new R,Me=new tn,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function Ze(){return q===null?tt:1}let N=n;function vn(g,U){return e.getContext(g,U)}try{const g={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uo}`),e.addEventListener("webglcontextlost",I,!1),e.addEventListener("webglcontextrestored",B,!1),e.addEventListener("webglcontextcreationerror",X,!1),N===null){const U="webgl2";if(N=vn(U,g),N===null)throw vn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw console.error("THREE.WebGLRenderer: "+g.message),g}let Ae,we,jt,le,ne,A,v,J,lt,pt,it,Vt,wt,kt,be,Mt,M,E,P,w,G,Z,Y,y;function H(){Ae=new Qp(N),Ae.init(),Z=new N0(N,Ae),we=new Yp(N,Ae,t,Z),jt=new I0(N,Ae),we.reverseDepthBuffer&&d&&jt.buffers.depth.setReversed(!0),le=new nm(N),ne=new M0,A=new U0(N,Ae,jt,ne,we,Z,le),v=new Zp(b),J=new jp(b),lt=new lf(N),Y=new Xp(N,lt),pt=new tm(N,lt,le,Y),it=new rm(N,pt,lt,le),P=new im(N,we,A),Mt=new $p(ne),Vt=new x0(b,v,J,Ae,we,Y,Mt),wt=new k0(b,ne),kt=new y0,be=new C0(Ae),E=new Wp(b,v,J,jt,it,p,c),M=new D0(b,it,we),y=new G0(N,le,we,jt),w=new qp(N,Ae,le),G=new em(N,Ae,le),le.programs=Vt.programs,b.capabilities=we,b.extensions=Ae,b.properties=ne,b.renderLists=kt,b.shadowMap=M,b.state=jt,b.info=le}H();const D=new V0(b,N);this.xr=D,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const g=Ae.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=Ae.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(g){g!==void 0&&(tt=g,this.setSize(ot,_t,!1))},this.getSize=function(g){return g.set(ot,_t)},this.setSize=function(g,U,W=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=g,_t=U,e.width=Math.floor(g*tt),e.height=Math.floor(U*tt),W===!0&&(e.style.width=g+"px",e.style.height=U+"px"),this.setViewport(0,0,g,U)},this.getDrawingBufferSize=function(g){return g.set(ot*tt,_t*tt).floor()},this.setDrawingBufferSize=function(g,U,W){ot=g,_t=U,tt=W,e.width=Math.floor(g*W),e.height=Math.floor(U*W),this.setViewport(0,0,g,U)},this.getCurrentViewport=function(g){return g.copy(V)},this.getViewport=function(g){return g.copy(ie)},this.setViewport=function(g,U,W,$){g.isVector4?ie.set(g.x,g.y,g.z,g.w):ie.set(g,U,W,$),jt.viewport(V.copy(ie).multiplyScalar(tt).round())},this.getScissor=function(g){return g.copy(xe)},this.setScissor=function(g,U,W,$){g.isVector4?xe.set(g.x,g.y,g.z,g.w):xe.set(g,U,W,$),jt.scissor(rt.copy(xe).multiplyScalar(tt).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(g){jt.setScissorTest(ze=g)},this.setOpaqueSort=function(g){Lt=g},this.setTransparentSort=function(g){Ht=g},this.getClearColor=function(g){return g.copy(E.getClearColor())},this.setClearColor=function(){E.setClearColor.apply(E,arguments)},this.getClearAlpha=function(){return E.getClearAlpha()},this.setClearAlpha=function(){E.setClearAlpha.apply(E,arguments)},this.clear=function(g=!0,U=!0,W=!0){let $=0;if(g){let O=!1;if(q!==null){const et=q.texture.format;O=et===Vo||et===Bo||et===zo}if(O){const et=q.texture.type,vt=et===gi||et===Wi||et===Yr||et===Tr||et===Fo||et===Oo,bt=E.getClearColor(),Tt=E.getClearAlpha(),Yt=bt.r,Kt=bt.g,Ft=bt.b;vt?(_[0]=Yt,_[1]=Kt,_[2]=Ft,_[3]=Tt,N.clearBufferuiv(N.COLOR,0,_)):(x[0]=Yt,x[1]=Kt,x[2]=Ft,x[3]=Tt,N.clearBufferiv(N.COLOR,0,x))}else $|=N.COLOR_BUFFER_BIT}U&&($|=N.DEPTH_BUFFER_BIT),W&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",I,!1),e.removeEventListener("webglcontextrestored",B,!1),e.removeEventListener("webglcontextcreationerror",X,!1),E.dispose(),kt.dispose(),be.dispose(),ne.dispose(),v.dispose(),J.dispose(),it.dispose(),Y.dispose(),y.dispose(),Vt.dispose(),D.dispose(),D.removeEventListener("sessionstart",Nt),D.removeEventListener("sessionend",Gt),Xt.stop()};function I(g){g.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const g=le.autoReset,U=M.enabled,W=M.autoUpdate,$=M.needsUpdate,O=M.type;H(),le.autoReset=g,M.enabled=U,M.autoUpdate=W,M.needsUpdate=$,M.type=O}function X(g){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function j(g){const U=g.target;U.removeEventListener("dispose",j),ct(U)}function ct(g){gt(g),ne.remove(g)}function gt(g){const U=ne.get(g).programs;U!==void 0&&(U.forEach(function(W){Vt.releaseProgram(W)}),g.isShaderMaterial&&Vt.releaseShaderCache(g))}this.renderBufferDirect=function(g,U,W,$,O,et){U===null&&(U=Xe);const vt=O.isMesh&&O.matrixWorld.determinant()<0,bt=Wt(g,U,W,$,O);jt.setMaterial($,vt);let Tt=W.index,Yt=1;if($.wireframe===!0){if(Tt=pt.getWireframeAttribute(W),Tt===void 0)return;Yt=2}const Kt=W.drawRange,Ft=W.attributes.position;let fe=Kt.start*Yt,pe=(Kt.start+Kt.count)*Yt;et!==null&&(fe=Math.max(fe,et.start*Yt),pe=Math.min(pe,(et.start+et.count)*Yt)),Tt!==null?(fe=Math.max(fe,0),pe=Math.min(pe,Tt.count)):Ft!=null&&(fe=Math.max(fe,0),pe=Math.min(pe,Ft.count));const Ce=pe-fe;if(Ce<0||Ce===1/0)return;Y.setup(O,$,bt,W,Tt);let Ue,Ot=w;if(Tt!==null&&(Ue=lt.get(Tt),Ot=G,Ot.setIndex(Ue)),O.isMesh)$.wireframe===!0?(jt.setLineWidth($.wireframeLinewidth*Ze()),Ot.setMode(N.LINES)):Ot.setMode(N.TRIANGLES);else if(O.isLine){let Q=$.linewidth;Q===void 0&&(Q=1),jt.setLineWidth(Q*Ze()),O.isLineSegments?Ot.setMode(N.LINES):O.isLineLoop?Ot.setMode(N.LINE_LOOP):Ot.setMode(N.LINE_STRIP)}else O.isPoints?Ot.setMode(N.POINTS):O.isSprite&&Ot.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ot.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))Ot.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Q=O._multiDrawStarts,Qt=O._multiDrawCounts,oe=O._multiDrawCount,Re=Tt?lt.get(Tt).bytesPerElement:1,ye=ne.get($).currentProgram.getUniforms();for(let me=0;me<oe;me++)ye.setValue(N,"_gl_DrawID",me),Ot.render(Q[me]/Re,Qt[me])}else if(O.isInstancedMesh)Ot.renderInstances(fe,Ce,O.count);else if(W.isInstancedBufferGeometry){const Q=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Qt=Math.min(W.instanceCount,Q);Ot.renderInstances(fe,Ce,Qt)}else Ot.render(fe,Ce)};function ft(g,U,W){g.transparent===!0&&g.side===qn&&g.forceSinglePass===!1?(g.side=Un,g.needsUpdate=!0,Et(g,U,W),g.side=wi,g.needsUpdate=!0,Et(g,U,W),g.side=qn):Et(g,U,W)}this.compile=function(g,U,W=null){W===null&&(W=g),h=be.get(W),h.init(U),C.push(h),W.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),g!==W&&g.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();const $=new Set;return g.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const et=O.material;if(et)if(Array.isArray(et))for(let vt=0;vt<et.length;vt++){const bt=et[vt];ft(bt,W,O),$.add(bt)}else ft(et,W,O),$.add(et)}),C.pop(),h=null,$},this.compileAsync=function(g,U,W=null){const $=this.compile(g,U,W);return new Promise(O=>{function et(){if($.forEach(function(vt){ne.get(vt).currentProgram.isReady()&&$.delete(vt)}),$.size===0){O(g);return}setTimeout(et,10)}Ae.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let zt=null;function Ct(g){zt&&zt(g)}function Nt(){Xt.stop()}function Gt(){Xt.start()}const Xt=new Xl;Xt.setAnimationLoop(Ct),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(g){zt=g,D.setAnimationLoop(g),g===null?Xt.stop():Xt.start()},D.addEventListener("sessionstart",Nt),D.addEventListener("sessionend",Gt),this.render=function(g,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(U),U=D.getCamera()),g.isScene===!0&&g.onBeforeRender(b,g,U,q),h=be.get(g,C.length),h.init(U),C.push(h),ae.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),st.setFromProjectionMatrix(ae),$t=this.localClippingEnabled,yt=Mt.init(this.clippingPlanes,$t),m=kt.get(g,L.length),m.init(),L.push(m),D.enabled===!0&&D.isPresenting===!0){const et=b.xr.getDepthSensingMesh();et!==null&&Pt(et,U,-1/0,b.sortObjects)}Pt(g,U,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(Lt,Ht),Pe=D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1,Pe&&E.addToRenderList(m,g),this.info.render.frame++,yt===!0&&Mt.beginShadows();const W=h.state.shadowsArray;M.render(W,g,U),yt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,O=m.transmissive;if(h.setupLights(),U.isArrayCamera){const et=U.cameras;if(O.length>0)for(let vt=0,bt=et.length;vt<bt;vt++){const Tt=et[vt];Zt($,O,g,Tt)}Pe&&E.render(g);for(let vt=0,bt=et.length;vt<bt;vt++){const Tt=et[vt];qt(m,g,Tt,Tt.viewport)}}else O.length>0&&Zt($,O,g,U),Pe&&E.render(g),qt(m,g,U);q!==null&&F===0&&(A.updateMultisampleRenderTarget(q),A.updateRenderTargetMipmap(q)),g.isScene===!0&&g.onAfterRender(b,g,U),Y.resetDefaultState(),T=-1,S=null,C.pop(),C.length>0?(h=C[C.length-1],yt===!0&&Mt.setGlobalState(b.clippingPlanes,h.state.camera)):h=null,L.pop(),L.length>0?m=L[L.length-1]:m=null};function Pt(g,U,W,$){if(g.visible===!1)return;if(g.layers.test(U.layers)){if(g.isGroup)W=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(U);else if(g.isLight)h.pushLight(g),g.castShadow&&h.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||st.intersectsSprite(g)){$&&Me.setFromMatrixPosition(g.matrixWorld).applyMatrix4(ae);const vt=it.update(g),bt=g.material;bt.visible&&m.push(g,vt,bt,W,Me.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||st.intersectsObject(g))){const vt=it.update(g),bt=g.material;if($&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),Me.copy(g.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Me.copy(vt.boundingSphere.center)),Me.applyMatrix4(g.matrixWorld).applyMatrix4(ae)),Array.isArray(bt)){const Tt=vt.groups;for(let Yt=0,Kt=Tt.length;Yt<Kt;Yt++){const Ft=Tt[Yt],fe=bt[Ft.materialIndex];fe&&fe.visible&&m.push(g,vt,fe,W,Me.z,Ft)}}else bt.visible&&m.push(g,vt,bt,W,Me.z,null)}}const et=g.children;for(let vt=0,bt=et.length;vt<bt;vt++)Pt(et[vt],U,W,$)}function qt(g,U,W,$){const O=g.opaque,et=g.transmissive,vt=g.transparent;h.setupLightsView(W),yt===!0&&Mt.setGlobalState(b.clippingPlanes,W),$&&jt.viewport(V.copy($)),O.length>0&&ut(O,U,W),et.length>0&&ut(et,U,W),vt.length>0&&ut(vt,U,W),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function Zt(g,U,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[$.id]===void 0&&(h.state.transmissionRenderTarget[$.id]=new Xi(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?Zr:gi,minFilter:Gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const et=h.state.transmissionRenderTarget[$.id],vt=$.viewport||V;et.setSize(vt.z*b.transmissionResolutionScale,vt.w*b.transmissionResolutionScale);const bt=b.getRenderTarget();b.setRenderTarget(et),b.getClearColor(ht),mt=b.getClearAlpha(),mt<1&&b.setClearColor(16777215,.5),b.clear(),Pe&&E.render(W);const Tt=b.toneMapping;b.toneMapping=Ai;const Yt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),h.setupLightsView($),yt===!0&&Mt.setGlobalState(b.clippingPlanes,$),ut(g,W,$),A.updateMultisampleRenderTarget(et),A.updateRenderTargetMipmap(et),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ft=0,fe=U.length;Ft<fe;Ft++){const pe=U[Ft],Ce=pe.object,Ue=pe.geometry,Ot=pe.material,Q=pe.group;if(Ot.side===qn&&Ce.layers.test($.layers)){const Qt=Ot.side;Ot.side=Un,Ot.needsUpdate=!0,xt(Ce,W,$,Ue,Ot,Q),Ot.side=Qt,Ot.needsUpdate=!0,Kt=!0}}Kt===!0&&(A.updateMultisampleRenderTarget(et),A.updateRenderTargetMipmap(et))}b.setRenderTarget(bt),b.setClearColor(ht,mt),Yt!==void 0&&($.viewport=Yt),b.toneMapping=Tt}function ut(g,U,W){const $=U.isScene===!0?U.overrideMaterial:null;for(let O=0,et=g.length;O<et;O++){const vt=g[O],bt=vt.object,Tt=vt.geometry,Yt=$===null?vt.material:$,Kt=vt.group;bt.layers.test(W.layers)&&xt(bt,U,W,Tt,Yt,Kt)}}function xt(g,U,W,$,O,et){g.onBeforeRender(b,U,W,$,O,et),g.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),O.onBeforeRender(b,U,W,$,g,et),O.transparent===!0&&O.side===qn&&O.forceSinglePass===!1?(O.side=Un,O.needsUpdate=!0,b.renderBufferDirect(W,U,$,O,g,et),O.side=wi,O.needsUpdate=!0,b.renderBufferDirect(W,U,$,O,g,et),O.side=qn):b.renderBufferDirect(W,U,$,O,g,et),g.onAfterRender(b,U,W,$,O,et)}function Et(g,U,W){U.isScene!==!0&&(U=Xe);const $=ne.get(g),O=h.state.lights,et=h.state.shadowsArray,vt=O.state.version,bt=Vt.getParameters(g,O.state,et,U,W),Tt=Vt.getProgramCacheKey(bt);let Yt=$.programs;$.environment=g.isMeshStandardMaterial?U.environment:null,$.fog=U.fog,$.envMap=(g.isMeshStandardMaterial?J:v).get(g.envMap||$.environment),$.envMapRotation=$.environment!==null&&g.envMap===null?U.environmentRotation:g.envMapRotation,Yt===void 0&&(g.addEventListener("dispose",j),Yt=new Map,$.programs=Yt);let Kt=Yt.get(Tt);if(Kt!==void 0){if($.currentProgram===Kt&&$.lightsStateVersion===vt)return At(g,bt),Kt}else bt.uniforms=Vt.getUniforms(g),g.onBeforeCompile(bt,b),Kt=Vt.acquireProgram(bt,Tt),Yt.set(Tt,Kt),$.uniforms=bt.uniforms;const Ft=$.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(Ft.clippingPlanes=Mt.uniform),At(g,bt),$.needsLights=Bt(g),$.lightsStateVersion=vt,$.needsLights&&(Ft.ambientLightColor.value=O.state.ambient,Ft.lightProbe.value=O.state.probe,Ft.directionalLights.value=O.state.directional,Ft.directionalLightShadows.value=O.state.directionalShadow,Ft.spotLights.value=O.state.spot,Ft.spotLightShadows.value=O.state.spotShadow,Ft.rectAreaLights.value=O.state.rectArea,Ft.ltc_1.value=O.state.rectAreaLTC1,Ft.ltc_2.value=O.state.rectAreaLTC2,Ft.pointLights.value=O.state.point,Ft.pointLightShadows.value=O.state.pointShadow,Ft.hemisphereLights.value=O.state.hemi,Ft.directionalShadowMap.value=O.state.directionalShadowMap,Ft.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ft.spotShadowMap.value=O.state.spotShadowMap,Ft.spotLightMatrix.value=O.state.spotLightMatrix,Ft.spotLightMap.value=O.state.spotLightMap,Ft.pointShadowMap.value=O.state.pointShadowMap,Ft.pointShadowMatrix.value=O.state.pointShadowMatrix),$.currentProgram=Kt,$.uniformsList=null,Kt}function at(g){if(g.uniformsList===null){const U=g.currentProgram.getUniforms();g.uniformsList=Bs.seqWithValue(U.seq,g.uniforms)}return g.uniformsList}function At(g,U){const W=ne.get(g);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Wt(g,U,W,$,O){U.isScene!==!0&&(U=Xe),A.resetTextureUnits();const et=U.fog,vt=$.isMeshStandardMaterial?U.environment:null,bt=q===null?b.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:wr,Tt=($.isMeshStandardMaterial?J:v).get($.envMap||vt),Yt=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Kt=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ft=!!W.morphAttributes.position,fe=!!W.morphAttributes.normal,pe=!!W.morphAttributes.color;let Ce=Ai;$.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ce=b.toneMapping);const Ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ot=Ue!==void 0?Ue.length:0,Q=ne.get($),Qt=h.state.lights;if(yt===!0&&($t===!0||g!==S)){const Le=g===S&&$.id===T;Mt.setState($,g,Le)}let oe=!1;$.version===Q.__version?(Q.needsLights&&Q.lightsStateVersion!==Qt.state.version||Q.outputColorSpace!==bt||O.isBatchedMesh&&Q.batching===!1||!O.isBatchedMesh&&Q.batching===!0||O.isBatchedMesh&&Q.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Q.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Q.instancing===!1||!O.isInstancedMesh&&Q.instancing===!0||O.isSkinnedMesh&&Q.skinning===!1||!O.isSkinnedMesh&&Q.skinning===!0||O.isInstancedMesh&&Q.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Q.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Q.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Q.instancingMorph===!1&&O.morphTexture!==null||Q.envMap!==Tt||$.fog===!0&&Q.fog!==et||Q.numClippingPlanes!==void 0&&(Q.numClippingPlanes!==Mt.numPlanes||Q.numIntersection!==Mt.numIntersection)||Q.vertexAlphas!==Yt||Q.vertexTangents!==Kt||Q.morphTargets!==Ft||Q.morphNormals!==fe||Q.morphColors!==pe||Q.toneMapping!==Ce||Q.morphTargetsCount!==Ot)&&(oe=!0):(oe=!0,Q.__version=$.version);let Re=Q.currentProgram;oe===!0&&(Re=Et($,U,O));let ye=!1,me=!1,He=!1;const ge=Re.getUniforms(),Be=Q.uniforms;if(jt.useProgram(Re.program)&&(ye=!0,me=!0,He=!0),$.id!==T&&(T=$.id,me=!0),ye||S!==g){jt.buffers.depth.getReversed()?(It.copy(g.projectionMatrix),fh(It),dh(It),ge.setValue(N,"projectionMatrix",It)):ge.setValue(N,"projectionMatrix",g.projectionMatrix),ge.setValue(N,"viewMatrix",g.matrixWorldInverse);const ke=ge.map.cameraPosition;ke!==void 0&&ke.setValue(N,he.setFromMatrixPosition(g.matrixWorld)),we.logarithmicDepthBuffer&&ge.setValue(N,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ge.setValue(N,"isOrthographic",g.isOrthographicCamera===!0),S!==g&&(S=g,me=!0,He=!0)}if(O.isSkinnedMesh){ge.setOptional(N,O,"bindMatrix"),ge.setOptional(N,O,"bindMatrixInverse");const Le=O.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),ge.setValue(N,"boneTexture",Le.boneTexture,A))}O.isBatchedMesh&&(ge.setOptional(N,O,"batchingTexture"),ge.setValue(N,"batchingTexture",O._matricesTexture,A),ge.setOptional(N,O,"batchingIdTexture"),ge.setValue(N,"batchingIdTexture",O._indirectTexture,A),ge.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&ge.setValue(N,"batchingColorTexture",O._colorsTexture,A));const De=W.morphAttributes;if((De.position!==void 0||De.normal!==void 0||De.color!==void 0)&&P.update(O,W,Re),(me||Q.receiveShadow!==O.receiveShadow)&&(Q.receiveShadow=O.receiveShadow,ge.setValue(N,"receiveShadow",O.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Be.envMap.value=Tt,Be.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&U.environment!==null&&(Be.envMapIntensity.value=U.environmentIntensity),me&&(ge.setValue(N,"toneMappingExposure",b.toneMappingExposure),Q.needsLights&&Rt(Be,He),et&&$.fog===!0&&wt.refreshFogUniforms(Be,et),wt.refreshMaterialUniforms(Be,$,tt,_t,h.state.transmissionRenderTarget[g.id]),Bs.upload(N,at(Q),Be,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Bs.upload(N,at(Q),Be,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ge.setValue(N,"center",O.center),ge.setValue(N,"modelViewMatrix",O.modelViewMatrix),ge.setValue(N,"normalMatrix",O.normalMatrix),ge.setValue(N,"modelMatrix",O.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Le=$.uniformsGroups;for(let ke=0,ln=Le.length;ke<ln;ke++){const fn=Le[ke];y.update(fn,Re),y.bind(fn,Re)}}return Re}function Rt(g,U){g.ambientLightColor.needsUpdate=U,g.lightProbe.needsUpdate=U,g.directionalLights.needsUpdate=U,g.directionalLightShadows.needsUpdate=U,g.pointLights.needsUpdate=U,g.pointLightShadows.needsUpdate=U,g.spotLights.needsUpdate=U,g.spotLightShadows.needsUpdate=U,g.rectAreaLights.needsUpdate=U,g.hemisphereLights.needsUpdate=U}function Bt(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(g,U,W){ne.get(g.texture).__webglTexture=U,ne.get(g.depthTexture).__webglTexture=W;const $=ne.get(g);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=W===void 0,$.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(g,U){const W=ne.get(g);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const ce=N.createFramebuffer();this.setRenderTarget=function(g,U=0,W=0){q=g,z=U,F=W;let $=!0,O=null,et=!1,vt=!1;if(g){const Tt=ne.get(g);if(Tt.__useDefaultFramebuffer!==void 0)jt.bindFramebuffer(N.FRAMEBUFFER,null),$=!1;else if(Tt.__webglFramebuffer===void 0)A.setupRenderTarget(g);else if(Tt.__hasExternalTextures)A.rebindTextures(g,ne.get(g.texture).__webglTexture,ne.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const Ft=g.depthTexture;if(Tt.__boundDepthTexture!==Ft){if(Ft!==null&&ne.has(Ft)&&(g.width!==Ft.image.width||g.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(g)}}const Yt=g.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(vt=!0);const Kt=ne.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Kt[U])?O=Kt[U][W]:O=Kt[U],et=!0):g.samples>0&&A.useMultisampledRTT(g)===!1?O=ne.get(g).__webglMultisampledFramebuffer:Array.isArray(Kt)?O=Kt[W]:O=Kt,V.copy(g.viewport),rt.copy(g.scissor),K=g.scissorTest}else V.copy(ie).multiplyScalar(tt).floor(),rt.copy(xe).multiplyScalar(tt).floor(),K=ze;if(W!==0&&(O=ce),jt.bindFramebuffer(N.FRAMEBUFFER,O)&&$&&jt.drawBuffers(g,O),jt.viewport(V),jt.scissor(rt),jt.setScissorTest(K),et){const Tt=ne.get(g.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Tt.__webglTexture,W)}else if(vt){const Tt=ne.get(g.texture),Yt=U;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.__webglTexture,W,Yt)}else if(g!==null&&W!==0){const Tt=ne.get(g.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Tt.__webglTexture,W)}T=-1},this.readRenderTargetPixels=function(g,U,W,$,O,et,vt){if(!(g&&g.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=ne.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt){jt.bindFramebuffer(N.FRAMEBUFFER,bt);try{const Tt=g.texture,Yt=Tt.format,Kt=Tt.type;if(!we.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=g.width-$&&W>=0&&W<=g.height-O&&N.readPixels(U,W,$,O,Z.convert(Yt),Z.convert(Kt),et)}finally{const Tt=q!==null?ne.get(q).__webglFramebuffer:null;jt.bindFramebuffer(N.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(g,U,W,$,O,et,vt){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=ne.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt){const Tt=g.texture,Yt=Tt.format,Kt=Tt.type;if(!we.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=g.width-$&&W>=0&&W<=g.height-O){jt.bindFramebuffer(N.FRAMEBUFFER,bt);const Ft=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ft),N.bufferData(N.PIXEL_PACK_BUFFER,et.byteLength,N.STREAM_READ),N.readPixels(U,W,$,O,Z.convert(Yt),Z.convert(Kt),0);const fe=q!==null?ne.get(q).__webglFramebuffer:null;jt.bindFramebuffer(N.FRAMEBUFFER,fe);const pe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await hh(N,pe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ft),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,et),N.deleteBuffer(Ft),N.deleteSync(pe),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(g,U=null,W=0){g.isTexture!==!0&&(dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,g=arguments[1]);const $=Math.pow(2,-W),O=Math.floor(g.image.width*$),et=Math.floor(g.image.height*$),vt=U!==null?U.x:0,bt=U!==null?U.y:0;A.setTexture2D(g,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,vt,bt,O,et),jt.unbindTexture()};const re=N.createFramebuffer(),Se=N.createFramebuffer();this.copyTextureToTexture=function(g,U,W=null,$=null,O=0,et=null){g.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,g=arguments[1],U=arguments[2],et=arguments[3]||0,W=null),et===null&&(O!==0?(dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=O,O=0):et=0);let vt,bt,Tt,Yt,Kt,Ft,fe,pe,Ce;const Ue=g.isCompressedTexture?g.mipmaps[et]:g.image;if(W!==null)vt=W.max.x-W.min.x,bt=W.max.y-W.min.y,Tt=W.isBox3?W.max.z-W.min.z:1,Yt=W.min.x,Kt=W.min.y,Ft=W.isBox3?W.min.z:0;else{const De=Math.pow(2,-O);vt=Math.floor(Ue.width*De),bt=Math.floor(Ue.height*De),g.isDataArrayTexture?Tt=Ue.depth:g.isData3DTexture?Tt=Math.floor(Ue.depth*De):Tt=1,Yt=0,Kt=0,Ft=0}$!==null?(fe=$.x,pe=$.y,Ce=$.z):(fe=0,pe=0,Ce=0);const Ot=Z.convert(U.format),Q=Z.convert(U.type);let Qt;U.isData3DTexture?(A.setTexture3D(U,0),Qt=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Qt=N.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Qt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const oe=N.getParameter(N.UNPACK_ROW_LENGTH),Re=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ye=N.getParameter(N.UNPACK_SKIP_PIXELS),me=N.getParameter(N.UNPACK_SKIP_ROWS),He=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ue.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ue.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Yt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Kt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ft);const ge=g.isDataArrayTexture||g.isData3DTexture,Be=U.isDataArrayTexture||U.isData3DTexture;if(g.isDepthTexture){const De=ne.get(g),Le=ne.get(U),ke=ne.get(De.__renderTarget),ln=ne.get(Le.__renderTarget);jt.bindFramebuffer(N.READ_FRAMEBUFFER,ke.__webglFramebuffer),jt.bindFramebuffer(N.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let fn=0;fn<Tt;fn++)ge&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ne.get(g).__webglTexture,O,Ft+fn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ne.get(U).__webglTexture,et,Ce+fn)),N.blitFramebuffer(Yt,Kt,vt,bt,fe,pe,vt,bt,N.DEPTH_BUFFER_BIT,N.NEAREST);jt.bindFramebuffer(N.READ_FRAMEBUFFER,null),jt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(O!==0||g.isRenderTargetTexture||ne.has(g)){const De=ne.get(g),Le=ne.get(U);jt.bindFramebuffer(N.READ_FRAMEBUFFER,re),jt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Se);for(let ke=0;ke<Tt;ke++)ge?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.__webglTexture,O,Ft+ke):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,De.__webglTexture,O),Be?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.__webglTexture,et,Ce+ke):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Le.__webglTexture,et),O!==0?N.blitFramebuffer(Yt,Kt,vt,bt,fe,pe,vt,bt,N.COLOR_BUFFER_BIT,N.NEAREST):Be?N.copyTexSubImage3D(Qt,et,fe,pe,Ce+ke,Yt,Kt,vt,bt):N.copyTexSubImage2D(Qt,et,fe,pe,Yt,Kt,vt,bt);jt.bindFramebuffer(N.READ_FRAMEBUFFER,null),jt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Be?g.isDataTexture||g.isData3DTexture?N.texSubImage3D(Qt,et,fe,pe,Ce,vt,bt,Tt,Ot,Q,Ue.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Qt,et,fe,pe,Ce,vt,bt,Tt,Ot,Ue.data):N.texSubImage3D(Qt,et,fe,pe,Ce,vt,bt,Tt,Ot,Q,Ue):g.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,et,fe,pe,vt,bt,Ot,Q,Ue.data):g.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,et,fe,pe,Ue.width,Ue.height,Ot,Ue.data):N.texSubImage2D(N.TEXTURE_2D,et,fe,pe,vt,bt,Ot,Q,Ue);N.pixelStorei(N.UNPACK_ROW_LENGTH,oe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Re),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ye),N.pixelStorei(N.UNPACK_SKIP_ROWS,me),N.pixelStorei(N.UNPACK_SKIP_IMAGES,He),et===0&&U.generateMipmaps&&N.generateMipmap(Qt),jt.unbindTexture()},this.copyTextureToTexture3D=function(g,U,W=null,$=null,O=0){return g.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,$=arguments[1]||null,g=arguments[2],U=arguments[3],O=arguments[4]||0),dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(g,U,W,$,O)},this.initRenderTarget=function(g){ne.get(g).__webglFramebuffer===void 0&&A.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?A.setTextureCube(g,0):g.isData3DTexture?A.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?A.setTexture2DArray(g,0):A.setTexture2D(g,0),jt.unbindTexture()},this.resetState=function(){z=0,F=0,q=null,jt.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Oe._getUnpackColorSpace()}}/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=(i,t,e=[])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",i);return Object.keys(t).forEach(r=>{n.setAttribute(r,String(t[r]))}),e.length&&e.forEach(r=>{const s=Jl(...r);n.appendChild(s)}),n};var X0=([i,t,e])=>Jl(i,t,e);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=i=>Array.from(i.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),Y0=i=>typeof i=="string"?i:!i||!i.class?"":i.class&&typeof i.class=="string"?i.class.split(" "):i.class&&Array.isArray(i.class)?i.class:"",$0=i=>i.flatMap(Y0).map(e=>e.trim()).filter(Boolean).filter((e,n,r)=>r.indexOf(e)===n).join(" "),Z0=i=>i.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,n)=>e.toUpperCase()+n.toLowerCase()),il=(i,{nameAttr:t,icons:e,attrs:n})=>{var _;const r=i.getAttribute(t);if(r==null)return;const s=Z0(r),a=e[s];if(!a)return console.warn(`${i.outerHTML} icon name was not found in the provided icons object.`);const o=q0(i),[c,u,l]=a,f={...u,"data-lucide":r,...n,...o},d=$0(["lucide",`lucide-${r}`,o,n]);d&&Object.assign(f,{class:d});const p=X0([c,f,l]);return(_=i.parentNode)==null?void 0:_.replaceChild(p,i)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=["svg",$o,[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=["svg",$o,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=["svg",$o,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=({icons:i={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(i).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${t}]`);if(Array.from(n).forEach(r=>il(r,{nameAttr:t,icons:i,attrs:e})),t==="data-lucide"){const r=document.querySelectorAll("[icon-name]");r.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(r).forEach(s=>il(s,{nameAttr:"icon-name",icons:i,attrs:e})))}};function rl(i,t,e,n){return Math.sin(e*Math.PI*i)*Math.sin(n*Math.PI*t)-Math.sin(n*Math.PI*i)*Math.sin(e*Math.PI*t)}function J0(i,t,e,n,r,s){return Math.sin(n*Math.PI*i)*Math.sin(r*Math.PI*t)+Math.sin(r*Math.PI*t)*Math.sin(s*Math.PI*e)+Math.sin(s*Math.PI*e)*Math.sin(n*Math.PI*i)}const Mr=30,ti=6.4,En=10.733,js=16.167,sn=js,di=24.6,Lo=36.667,In=Lo,K0=Math.round(In*Mr),Qs=-83.2,Vs=-1.5,qr=4.3,j0=ti,sl=9.94,al=[[0,1],[0,2],[0,3]],Q0=.62,eu=.84,nu=di-sn,za=[{start:0,end:1.35,nodes:[7,0,2,5]},{start:1.35,end:2.45,nodes:[3,1,4,10]},{start:2.45,end:3.45,nodes:[7,5,6,11]},{start:3.45,end:qr,nodes:[3,8,9,10]},{start:qr,end:In,nodes:[7,0,2,5]}],tg=[{start:.14,end:2,text:"很久以前，宇宙是一锅"},{start:2,end:4.3,text:"滚烫的等离子体——"},{start:4.3,end:6.38,text:"声波，在其中来回震荡。"},{start:7.28,end:9.94,text:"三十八万年后，一切忽然"},{start:9.94,end:10.733,text:"安静。"},{start:10.733,end:12.18,text:"六合乍裂——那声波"},{start:12.18,end:14.8,text:"就此被冻结在黑"},{start:14.8,end:15.4,text:"暗深处。"},{start:16.14,end:18.32,text:"它没有消失，只是化作一道"},{start:18.32,end:20.4,text:"极淡的印记，悄悄"},{start:20.4,end:22.36,text:"写进了星系与星系"},{start:22.36,end:23.66,text:"之间的距离里。"},{start:24.6,end:26.9,text:"往后的138亿年，宇"},{start:26.9,end:28.48,text:"宙都在把这道回声"},{start:28.48,end:32.18,text:"织成一张网，而我们都是"},{start:32.18,end:35,text:"网上那一点被轻轻托"},{start:35,end:35.62,text:"起的光。"}];function eg(i){var t;return((t=tg.find(e=>i>=e.start&&i<e.end))==null?void 0:t.text)??""}function ol(i){return za.find(t=>i>=t.start&&i<t.end)??za[za.length-1]}function ng(i,t,e,n){const r=Math.floor(Math.max(0,i)/.55),s=new Set([t[r%t.length]]);return r%3===1&&s.add(t[(r+2)%t.length]),r%4===2&&s.add((r*5+1)%e),{main:[...s],minor:r%2===0?r*3%n:null}}function ig(i){return an(i,.85,1.6)+an(i,2.75,3.55)}function an(i,t,e){const n=Math.min(1,Math.max(0,(i-t)/(e-t)));return n*n*(3-2*n)}function cl(i){if(i<qr||i>In)return{active:!1,progress:0,radius:0};const t=Math.min(1,(i-qr)/(j0-qr));return{active:!0,progress:t,radius:.06+Math.sin(t*Math.PI)*.03}}function ll(i){const t=Math.max(0,i-ti),e=En-ti,n=Math.min(e,t),r=n/e,s=1.35,a=Math.exp(-s*n);return{active:i>=ti&&i<=En,progress:r,absorption:r,baryonVelocity:a,silenceBrightness:an(i,sl,sl+.14),waveTime:ti+(1-a)/s}}function rg(i){const t=Math.max(0,i-En),e=js-En,n=Math.min(1,t/e),r=Math.max(0,(t-Q0)/eu),s=Math.min(1,r),a=s,o=Math.max(0,r-1),c=an(i,En+3.8,En+4.65);return{active:i>=En&&i<=js,progress:n,reveal:an(i,En,En+.45),pathPosition:s,approachProgress:a,surfaceProgress:o,impactClock:r,completedImpacts:Math.floor(s+1e-9),impactIndex:0,segmentProgress:s>=1?1:s,freeze:c,rippleStrength:1-c,coreStrength:1}}function sg(i){const t=Math.min(1,Math.max(0,(i-sn)/nu));return t*t*(3-2*t)}function ag(i){const t=Math.max(0,i-sn),n=Math.min(1,t/nu),r=an(i,sn+.28,sn+2.2),s=i>=sn?1:0,a=an(i,sn+.72,sn+2.72),o=.35+.65*a,c=an(i,sn+1.25,sn+4.8),u=an(i,sn+2.15,sn+4.1),l=an(i,sn+1/Mr,di-1/Mr),f=Qs+(Vs-Qs)*l,d=sg(i);return{active:i>=sn&&i<=di,progress:n,reveal:an(i,sn,sn+.72),constellationReveal:r,lineReveal:s,projectionMorph:a,flatLineOpacity:.78*(1-d),depthLineOpacity:o,auxiliaryMorph:a,imprintFade:c,distanceReveal:u,parallaxProgress:l,viewOffsetLy:f,morphProgress:d}}const og=28.8,Cs=28.85,cg=31.6,lg=32.2,ug=31.9,hg=29.6,fg=32.5,dg=31.7,pg=33.3,iu=Math.PI*2/3,mg=14543359;function gg(i){const t=Math.min(1,Math.max(0,(i-di)/(Lo-di))),e=an(i,di+.08,og),n=an(i,Cs,Cs+.5)*(1-an(i,cg,lg)),r=an(i,32.18,35.62);return{active:i>=di&&i<=Lo,progress:t,dispersal:e,hop:n,hopClock:Math.max(0,i-Cs),rotation:an(i,Cs+.05,ug)*iu,networkReveal:an(i,hg,fg),lineColorShift:an(i,dg,pg),distributedLight:r,lift:an(i,32.18,35.3),reveal:1}}function _g(i){const e=Math.min(1,Math.max(0,i))*Math.PI*2,n=440+Math.sin(e)*20,r=Math.sin(e-.7)*.16+Math.sin(e*2+.3)*.04;return{sourceFrequency:n,velocityRatio:r,observedFrequency:n/(1-r)}}const Tn=[16777180,16762677,16741400,16723724,9245191],Hs=12183295,Rs=new ee(Hs),ul=new ee(16777215),Ba=new ee(12907477),ci=new ee,Va=4.2,vg=2.55,xg=new ee(mg),gn={betelgeuse:{raJ2000:"05 55 10.305",decJ2000:"+07 24 25.43",distanceLy:548},rigel:{raJ2000:"05 14 32.272",decJ2000:"-08 12 05.898",distanceLy:848},bellatrix:{raJ2000:"05 25 07.863",decJ2000:"+06 20 58.932",distanceLy:250},mintaka:{raJ2000:"05 32 00.400",decJ2000:"-00 17 56.742",distanceLy:1246},alnilam:{raJ2000:"05 36 12.813",decJ2000:"-01 12 06.909",distanceLy:1250},alnitak:{raJ2000:"05 40 45.527",decJ2000:"-01 56 34.265",distanceLy:1260},saiph:{raJ2000:"05 47 45.389",decJ2000:"-09 40 10.578",distanceLy:650},meissa:{raJ2000:"05 35 08.276",decJ2000:"+09 56 02.991",distanceLy:1300}},gr=12.5,ks=8.6,hl=.5,Mg=.65,fl=.006,ru=new Jn(.05,-.12,0),Sg=new Ci().setFromEuler(ru).invert();function yg(i){const[t=0,e=0,n=0]=i.trim().split(/\s+/u).map(Number);return t+e/60+n/3600}function Eg(i){const t=i.trim().startsWith("-")?-1:1,[e=0,n=0,r=0]=i.trim().replace(/^[+-]/u,"").split(/\s+/u).map(Number);return t*(e+n/60+r/3600)}function Zo(i){const t=yg(i.raJ2000)*15*Math.PI/180,e=Eg(i.decJ2000)*Math.PI/180,n=Math.cos(e);return new R(n*Math.cos(t),n*Math.sin(t),Math.sin(e))}const Jo=(()=>{const t=Object.values(gn).map(Zo).reduce((a,o)=>a.add(o),new R).normalize(),e=new R(t.y,-t.x,0).normalize(),n=new R().crossVectors(e,t).normalize(),r=Object.values(gn).map(({distanceLy:a})=>a).sort((a,o)=>a-o),s=Math.exp((Math.log(r[3])+Math.log(r[4]))*.5);return{forward:t,right:e,up:n,pivotLy:s,minDistanceLy:r[0],maxDistanceLy:r[r.length-1]}})();function Ei(i){const t=Zo(i),e=Jo,n=i.distanceLy*(gr/e.pivotLy);return new R(t.dot(e.right)*n,t.dot(e.up)*n,gr-t.dot(e.forward)*n).applyQuaternion(Sg).toArray()}function Ni(i){const t=Zo(i),e=Jo,n=Math.max(.15,t.dot(e.forward));return[t.dot(e.right)/n*ks,t.dot(e.up)/n*ks,-ks]}const Ie={betelgeuse:Ei(gn.betelgeuse),bellatrix:Ei(gn.bellatrix),clubTip:Ei(gn.meissa),beltRight:Ei(gn.mintaka),beltMiddle:Ei(gn.alnilam),beltLeft:Ei(gn.alnitak),rigel:Ei(gn.rigel),saiph:Ei(gn.saiph)},We={betelgeuse:Ni(gn.betelgeuse),bellatrix:[.3623692852,.9025956076,-ks],clubTip:Ni(gn.meissa),beltRight:Ni(gn.mintaka),beltMiddle:Ni(gn.alnilam),beltLeft:Ni(gn.alnitak),rigel:Ni(gn.rigel),saiph:Ni(gn.saiph)},Ps=[{label:"参宿四",latin:"BETELGEUSE",position:Ie.betelgeuse,scale:.22,brightness:1.6,color:16754258},{label:"参宿五",latin:"BELLATRIX",position:Ie.bellatrix,scale:.18,brightness:1.5,color:14017791},{label:"觜宿一",latin:"MEISSA",position:Ie.clubTip,scale:.15,brightness:1.4,color:14543359},{label:"参宿三",latin:"MINTAKA",position:Ie.beltRight,scale:.16,brightness:1.45,color:14280703},{label:"参宿二",latin:"ALNILAM",position:Ie.beltMiddle,scale:.17,brightness:1.5,color:15003647},{label:"参宿一",latin:"ALNITAK",position:Ie.beltLeft,scale:.16,brightness:1.45,color:14543359},{label:"参宿七",latin:"RIGEL",position:Ie.rigel,scale:.22,brightness:1.6,color:15259303},{label:"参宿六",latin:"SAIPH",position:Ie.saiph,scale:.16,brightness:1.45,color:13360383}],bg=[{emphasis:1.35,points:[Ie.betelgeuse,Ie.bellatrix]},{emphasis:1.35,points:[Ie.betelgeuse,Ie.beltLeft]},{emphasis:1.45,points:[Ie.bellatrix,Ie.beltRight]},{emphasis:.72,points:[Ie.beltMiddle,Ie.beltRight]},{emphasis:.72,points:[Ie.beltMiddle,Ie.beltLeft]},{emphasis:1.55,points:[Ie.beltLeft,Ie.saiph]},{emphasis:1.55,points:[Ie.beltRight,Ie.rigel]},{emphasis:1.55,points:[Ie.clubTip,Ie.betelgeuse]},{emphasis:1.55,points:[Ie.clubTip,Ie.bellatrix]}],Tg=[{emphasis:1.35,points:[We.betelgeuse,We.bellatrix]},{emphasis:1.35,points:[We.betelgeuse,We.beltLeft]},{emphasis:1.45,points:[We.bellatrix,We.beltRight]},{emphasis:.72,points:[We.beltMiddle,We.beltRight]},{emphasis:.72,points:[We.beltMiddle,We.beltLeft]},{emphasis:1.55,points:[We.beltLeft,We.saiph]},{emphasis:1.55,points:[We.beltRight,We.rigel]},{emphasis:1.55,points:[We.clubTip,We.betelgeuse]},{emphasis:1.55,points:[We.clubTip,We.bellatrix]}],Ag=new Set([0,1,2]),wg=new Set([5,6,7,8]),Ds=new R(-3.35,-.12,-4.1),fr={betelgeuse:{start:We.betelgeuse,target:Ie.betelgeuse},bellatrix:{start:We.bellatrix,target:Ie.bellatrix},meissa:{start:We.clubTip,target:Ie.clubTip},mintaka:{start:We.beltRight,target:Ie.beltRight},alnilam:{start:We.beltMiddle,target:Ie.beltMiddle},alnitak:{start:We.beltLeft,target:Ie.beltLeft},rigel:{start:We.rigel,target:Ie.rigel},saiph:{start:We.saiph,target:Ie.saiph}},An=document.querySelector("#narration"),Io=document.querySelector("#scene"),Cg=document.querySelector("#deep-sky-background"),Hr=document.querySelector("#star-canvas"),li=Hr.getContext("2d"),Ha=document.querySelector("#labels"),Rg=document.querySelector("#subtitle"),Pg=document.querySelector("#caption"),Dg=document.querySelector("#timecode"),Ls=document.querySelector("#play"),Lg=document.querySelector("#reset"),Ig=document.querySelector(".eyebrow"),Ug=document.querySelector(".title-sub"),dl=document.querySelector("#epoch-marker"),Ng=document.querySelector("#cosmic-clock"),Fg=document.querySelector("#cosmic-clock-value"),Og=document.querySelector("#gravity-note"),zg=document.querySelector(".milky-way-wash"),Bg=document.querySelector("#baryon-velocity"),pl=document.querySelector("#impact-marker"),Vg=document.querySelector("#impact-count"),Is=document.querySelector("#wave-equation"),Hg=document.querySelector("#wave-equation-path"),kg=document.querySelector("#wave-f0"),Gg=document.querySelector("#wave-v"),Wg=document.querySelector("#wave-fp");tu({icons:{Play:jl,Pause:Kl,RotateCcw:Ql}});const Hi=new W0({canvas:Io,alpha:!0,antialias:!0,powerPreference:"high-performance"});Hi.setClearColor(0,0);Hi.outputColorSpace=yn;const Sr=new Fh;Sr.fog=new Go(132103,.006);const Qe=new Hn(43,1,.1,100);Qe.position.set(0,.1,12.5);Qe.lookAt(0,0,0);Sr.add(Qe);const su=new Ke;Qe.add(su);const mn=new Ke;Sr.add(mn);async function Xg(){const i=h(),t=await C(),e=K();mn.add(e);const n=ht();mn.add(n);const r=[{label:"太阳",latin:"SUN",position:[-3.35,1.42,.4],radius:.62,color:Tn[1],spin:.42,phase:.2},{label:"木星",latin:"JUPITER",position:[-1.82,-1.55,.5],radius:.56,color:Tn[2],spin:-.36,phase:1.2},{label:"天狼星",latin:"SIRIUS",position:[.18,1.72,-.4],radius:.51,color:Tn[0],spin:.32,phase:2.1},{label:"土星",latin:"SATURN",position:[2.16,-1.08,.8],radius:.5,color:Tn[2],spin:.29,phase:1.6},{label:"北极星",latin:"POLARIS",position:[3.18,1.92,-.3],radius:.4,color:Tn[0],spin:-.25,phase:.4},{label:"火星",latin:"MARS",position:[1.16,.08,1.05],radius:.42,color:Tn[3],spin:.48,phase:2.8},{label:"参宿四",latin:"BETELGEUSE",position:[-3.28,-1.9,-.8],radius:.55,color:Tn[3],spin:-.31,phase:2.7},{label:"昴星团",latin:"PLEIADES",position:[-.74,.05,-1.22],radius:.64,color:Tn[0],spin:.39,phase:1.9,shape:"chladni",modes:[2,3,4],boundary:"volume",network:!0},{label:"金星",latin:"VENUS",position:[-.12,-2.55,-.95],radius:.44,color:Tn[1],spin:-.44,phase:.9},{label:"海王星",latin:"NEPTUNE",position:[3.62,-2.02,.58],radius:.46,color:Tn[2],spin:.35,phase:2.4},{label:"月球",latin:"MOON",position:[-4.02,.05,-1.2],radius:.3,color:Tn[1],spin:-.52,phase:1.3},{label:"脉冲星",latin:"PULSAR",position:[3.78,.44,-1.48],radius:.5,color:14478591,spin:.7,phase:3.1,shape:"chladni",modes:[2,3,4],boundary:"volume",network:!0}],s=r.map((M,E)=>ot(M,E));s.forEach(M=>mn.add(M.group));const a=[{label:"织女星",latin:"VEGA",position:[-4.35,2.42,-1.7],scale:.12},{label:"牛郎星",latin:"ALTAIR",position:[-2.15,2.68,-1.25],scale:.1},{label:"参宿七",latin:"RIGEL",position:[1.35,2.55,-2.1],scale:.11},{label:"五车二",latin:"CAPELLA",position:[4.35,2.35,-1.35],scale:.1},{label:"毕宿五",latin:"ALDEBARAN",position:[-4.55,-1.02,-1.8],scale:.09},{label:"角宿一",latin:"SPICA",position:[-2.28,-.18,-2.25],scale:.09},{label:"心宿二",latin:"ANTARES",position:[2.82,.72,-1.95],scale:.11},{label:"老人星",latin:"CANOPUS",position:[4.24,-2.58,-1.55],scale:.1}],o=a.map((M,E)=>Ht(M,E));o.forEach(M=>mn.add(M.group));const c=al.map(()=>ie());c.forEach(M=>mn.add(M));const u=mt();Sr.add(u.group);const l=xe();mn.add(l.group);const f=q(i,Ha,su);Sr.add(f.group);const d=rt();f.group.add(d.group);const p=r.map(M=>{const E=document.createElement("div");return E.className="node-label",E.innerHTML=`${M.label}<small>${M.latin}</small>`,Ha.appendChild(E),E}),_=a.map(M=>{const E=document.createElement("div");return E.className="node-label minor-label",E.innerHTML=`${M.label}<small>${M.latin}</small>`,Ha.appendChild(E),E});let x=!1,m=-1;function h(){const E=document.createElement("canvas");E.width=64,E.height=64;const P=E.getContext("2d"),w=P.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);w.addColorStop(0,"rgba(255,255,255,1)"),w.addColorStop(.12,"rgba(255,255,255,0.96)"),w.addColorStop(.38,"rgba(255,255,255,0.18)"),w.addColorStop(.68,"rgba(255,255,255,0.02)"),w.addColorStop(1,"rgba(255,255,255,0)"),P.fillStyle=w,P.fillRect(0,0,64,64);const G=new wa(E);return G.colorSpace=yn,G}function L(M=16777215,E=256){const P=document.createElement("canvas");P.width=E,P.height=E;const w=P.getContext("2d"),G=E/2,Z=new ee(M),Y=Math.round(Z.r*255),y=Math.round(Z.g*255),H=Math.round(Z.b*255),D=w.createRadialGradient(G,G,0,G,G,G*.85);D.addColorStop(0,`rgba(${Y}, ${y}, ${H}, 0.85)`),D.addColorStop(.2,`rgba(${Y}, ${y}, ${H}, 0.4)`),D.addColorStop(.55,`rgba(${Y}, ${y}, ${H}, 0.1)`),D.addColorStop(1,"rgba(0, 0, 0, 0)"),w.fillStyle=D,w.fillRect(0,0,E,E),w.save(),w.globalCompositeOperation="screen";const I=w.createLinearGradient(0,G,E,G);I.addColorStop(0,"rgba(255, 255, 255, 0)"),I.addColorStop(.35,`rgba(${Y}, ${y}, ${H}, 0.5)`),I.addColorStop(.48,"rgba(255, 255, 255, 0.95)"),I.addColorStop(.5,"rgba(255, 255, 255, 1)"),I.addColorStop(.52,"rgba(255, 255, 255, 0.95)"),I.addColorStop(.65,`rgba(${Y}, ${y}, ${H}, 0.5)`),I.addColorStop(1,"rgba(255, 255, 255, 0)"),w.fillStyle=I,w.fillRect(0,G-2.5,E,5);const B=w.createLinearGradient(G,0,G,E);B.addColorStop(0,"rgba(255, 255, 255, 0)"),B.addColorStop(.35,`rgba(${Y}, ${y}, ${H}, 0.5)`),B.addColorStop(.48,"rgba(255, 255, 255, 0.95)"),B.addColorStop(.5,"rgba(255, 255, 255, 1)"),B.addColorStop(.52,"rgba(255, 255, 255, 0.95)"),B.addColorStop(.65,`rgba(${Y}, ${y}, ${H}, 0.5)`),B.addColorStop(1,"rgba(255, 255, 255, 0)"),w.fillStyle=B,w.fillRect(G-2.5,0,5,E);const X=w.createRadialGradient(G,G,0,G,G,G*.22);X.addColorStop(0,"rgba(255, 255, 255, 1)"),X.addColorStop(.4,"rgba(255, 255, 255, 0.95)"),X.addColorStop(.7,`rgba(${Y}, ${y}, ${H}, 0.6)`),X.addColorStop(1,"rgba(0, 0, 0, 0)"),w.fillStyle=X,w.beginPath(),w.arc(G,G,G*.22,0,Math.PI*2),w.fill(),w.restore();const j=new wa(P);return j.colorSpace=yn,j}async function C(){try{const M=await fetch("/chladni-reference.bin");return M.ok?new Float32Array(await M.arrayBuffer()):null}catch{return null}}function b(M,E,P=null){const w=new ef;for(let I=1;I<M.length;I+=1)w.add(new Gl(M[I-1],M[I]));const G=Math.max(3,M.length*3),Z=7,Y=new qo(w,G,E,Z,!1);if(!P)return Y;const y=Y.getAttribute("position"),H=new R,D=new R;for(let I=0;I<=G;I+=1){w.getPointAt(I/G,H);const B=he(H,P);for(let X=0;X<=Z;X+=1){const j=I*(Z+1)+X;D.fromBufferAttribute(y,j).sub(H).multiplyScalar(B).add(H),y.setXYZ(j,D.x,D.y,D.z)}}return y.needsUpdate=!0,Y.computeBoundingSphere(),Y}function k(){const P=document.createElement("canvas");P.width=512,P.height=768;const w=P.getContext("2d"),G=Ct=>{let Nt=Ct>>>0;return()=>{Nt=Nt+1831565813|0;let Gt=Math.imul(Nt^Nt>>>15,1|Nt);return Gt=Gt+Math.imul(Gt^Gt>>>7,61|Gt)^Gt,((Gt^Gt>>>14)>>>0)/4294967296}},Z=(Ct,Nt)=>{const Gt=G(Ct),Xt=Nt+1,Pt=new Float32Array(Xt*Xt);for(let ut=0;ut<Pt.length;ut+=1)Pt[ut]=Gt();const qt=ut=>ut*ut*ut*(ut*(ut*6-15)+10),Zt=(ut,xt)=>{const Et=(ut%Nt+Nt)%Nt,at=(xt%Nt+Nt)%Nt;return Pt[at*Xt+Et]};return(ut,xt)=>{const Et=Math.floor(ut),at=Math.floor(xt),At=qt(ut-Et),Wt=qt(xt-at),Rt=Zt(Et,at)+(Zt(Et+1,at)-Zt(Et,at))*At,Bt=Zt(Et,at+1)+(Zt(Et+1,at+1)-Zt(Et,at+1))*At;return Rt+(Bt-Rt)*Wt}},Y=(Ct,Nt,Gt,Xt,Pt,qt)=>{let Zt=.5,ut=1,xt=0,Et=0;for(let at=0;at<Xt;at+=1)xt+=Zt*Ct(Nt*ut,Gt*ut),Et+=Zt,Zt*=qt,ut*=Pt;return xt/Et},y=Z(2026,16),H=Z(8888,8),D=Z(9999,8),I=Z(777,6),B=Ct=>.82-.64*Ct+.07*Math.sin(Ct*4.5+.3),X=w.createImageData(512,768),j=X.data,ct=[28,25,38],gt=[72,65,84],ft=[135,124,142];for(let Ct=0;Ct<768;Ct+=1){const Nt=Ct/767,Gt=B(Nt),Pt=.26*(1+.5*(Y(I,Nt*3.5,.5,3,2,.5)-.5)),qt=Math.sin(Nt*Math.PI);for(let Zt=0;Zt<512;Zt+=1){const ut=Zt/511,xt=Math.sin(ut*Math.PI),Et=Math.pow(xt*qt,.65),at=ut*6,At=Nt*8,Wt=at+(Y(H,at*.6,At*.6,3,2,.5)-.5)*1.2,Rt=At+(Y(D,at*.6,At*.6,3,2,.5)-.5)*1.2;let Bt=Y(y,Wt,Rt,6,2.2,.5);Bt=Math.pow(Math.max(0,Bt),1.35);const ce=(ut-Gt)/Pt,re=Math.exp(-.55*ce*ce),Se=Math.min(1,Bt*re);let g,U,W;if(Se<.4){const et=Se/.4;g=ct[0]*et,U=ct[1]*et,W=ct[2]*et}else if(Se<.78){const et=(Se-.4)/.38;g=ct[0]+(gt[0]-ct[0])*et,U=ct[1]+(gt[1]-ct[1])*et,W=ct[2]+(gt[2]-ct[2])*et}else{const et=(Se-.78)/.22;g=gt[0]+(ft[0]-gt[0])*et,U=gt[1]+(ft[1]-gt[1])*et,W=gt[2]+(ft[2]-gt[2])*et}const $=Math.min(.75,Se*1.25)*Et,O=(Ct*512+Zt)*4;j[O]=Math.round(g),j[O+1]=Math.round(U),j[O+2]=Math.round(W),j[O+3]=Math.round($*255)}}w.putImageData(X,0,0);const zt=new wa(P);return zt.colorSpace=yn,zt}function z(){const M=new Ke;M.renderOrder=-2;const E=k(),P=new Sn(new pn({map:E,transparent:!0,opacity:.68,depthTest:!1,depthWrite:!1,blending:ue}));P.position.set(-.6,.1,-4.5),P.scale.set(13.5,16.5,1),P.rotation.z=-.58,P.renderOrder=-3,M.add(P);const w=new Sn(new pn({map:E,transparent:!0,opacity:.35,depthTest:!1,depthWrite:!1,blending:ue}));w.position.set(-.2,.3,-3.9),w.scale.set(14.2,17.5,1),w.rotation.z=-.52,w.renderOrder=-2,M.add(w);const G=(I,B)=>{const X=Math.sin(I*12.9898+B*78.233)*43758.5453;return X-Math.floor(X)},Z=750,Y=[],y=[];for(let I=0;I<Z;I+=1){const B=G(I,40.2),X=Math.pow(G(I,41.7),1.2)*2.5,j=2.8-B*6.6,ct=4.5-B*9.3,gt=j+(G(I,42.9)-.5)*X,ft=ct+(G(I,44.1)-.5)*X*1.2,zt=-4.8+(G(I,45.4)-.5)*2.8,Ct=.2+G(I,46.8)*.48;Y.push(gt,ft,zt),y.push(Ct*.88,Ct*.84,Ct*1)}const H=new Te;H.setAttribute("position",new Jt(Y,3)),H.setAttribute("color",new Jt(y,3));const D=new hn(H,new wn({map:h(),size:.18,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.35,depthTest:!1,depthWrite:!1,blending:ue}));return D.renderOrder=-1,M.add(D),M}function F(M,E,P){return M.map(({points:w,emphasis:G},Z)=>{const Y=w.map(I=>new R(...I)),y=wg.has(Z),H=new pr({color:E==="flat"?y?4872304:7174290:y?7440036:12110829,transparent:!0,opacity:0,depthWrite:!1,blending:ue}),D=new Pn(b(Y,fl*G),H);return D.userData={index:Z,isUpperTriangle:Ag.has(Z),isLowerShadow:y,layerName:E,pathPoints:w,emphasis:G},P.add(D),D})}function q(M,E,P){const w=new Ke;w.visible=!1;const G=[],Z=[];for(let ut=0;ut<620;ut+=1){const xt=ut*.61803398875,Et=(xt*13.7%1-.5)*12.8,at=(xt*7.1%1-.5)*7.1,At=-4.8+xt*5.3%1*2.7,Wt=.34+ut*17%61/61*.66;G.push(Et,at,At),Z.push(Wt*.82,Wt*.9,Wt)}const Y=new Te;Y.setAttribute("position",new Jt(G,3)),Y.setAttribute("color",new Jt(Z,3));const y=new hn(Y,new wn({map:M,size:.052,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:ue,sizeAttenuation:!0}));w.add(y);const H=z();w.add(H);const D=new Map;Ps.forEach(ut=>{D.set(ut.color,L(ut.color,256))});const I=L(4943784,128),B=Ps.map((ut,xt)=>{const Et=new Ke,at=D.get(ut.color),At=new Sn(new pn({map:at,transparent:!0,opacity:0,depthWrite:!1,blending:ue}));At.scale.setScalar(ut.scale*3.8);const Wt=new Sn(new pn({map:at,transparent:!0,opacity:0,depthWrite:!1,blending:ue}));Wt.scale.setScalar(ut.scale*1.5),Et.add(At,Wt),Et.position.set(...ut.position),Et.userData={definition:ut,index:xt,halo:At,core:Wt,phase:xt*.73,startPosition:new R(...ut.position)},w.add(Et);const Rt=document.createElement("div");return Rt.className="node-label scene-four-label",Rt.innerHTML=`${ut.label}<small>${ut.latin}</small>`,E.appendChild(Rt),Et.userData.label=Rt,Et}),X=Ps.map((ut,xt)=>{const Et=new Sn(new pn({map:I,transparent:!0,opacity:0,depthWrite:!1,blending:ue}));Et.scale.setScalar(ut.scale*1.8);const at=fr[ut.latin.toLowerCase()]??fr[ut.label];return at?Et.position.set(...at.start):Et.position.set(...ut.position),Et.userData={definition:ut,index:xt,phase:xt*.73},P.add(Et),Et}),j=F(Tg,"flat",P),ct=F(bg,"depth",w),gt=Ps[4].position,ft=new Te().setFromPoints([new R(...gt),Ds]),zt=new Pc({color:9361844,dashSize:.12,gapSize:.09,transparent:!0,opacity:0,depthWrite:!1,blending:ue}),Ct=new Zs(ft,zt);Ct.computeLineDistances(),w.add(Ct);const Nt=new _n;Nt.position.copy(new R(...gt).lerp(Ds,.52)),w.add(Nt);const Gt=document.createElement("div");Gt.className="node-label scene-four-distance",Gt.innerHTML="147 Mpc<small>BAO SCALE</small>",E.appendChild(Gt);const Xt=new Ke,Pt=new Sn(new pn({map:M,color:7919264,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:ue}));Pt.scale.setScalar(1.65);const qt=new Sn(new pn({map:M,color:Ba,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:ue}));qt.scale.setScalar(.62);const Zt=[.36,.58,.82].map((ut,xt)=>{const Et=new Pn(new Js(ut,ut+.012,64),new pr({color:9298102,transparent:!0,opacity:0,side:qn,depthTest:!1,depthWrite:!1,blending:ue}));return Et.userData.phase=xt*.9,Xt.add(Et),Et});return Xt.add(Pt,qt),Xt.position.copy(Ds),w.add(Xt),{group:w,screenGroup:P,backdrop:y,stars:B,flatStars:X,flatLines:j,depthLines:ct,distanceLine:Ct,distanceAnchor:Nt,distanceLabel:Gt,imprint:Xt,imprintHalo:Pt,imprintCore:qt,imprintRings:Zt,imprintTarget:Ds.clone()}}function T(M,E,P,w,G,Z,Y){const y=[],H=M.length;let D=E*M[0].x+P*M[0].y+w*M[0].z-G;for(let I=0;I<H;I+=1){const B=M[I],X=M[(I+1)%H],j=D,ct=E*X.x+P*X.y+w*X.z-G;if(D=ct,j<=Y&&y.push(B),j>Y&&ct<-Y||j<-Y&&ct>Y){const gt=j/(j-ct),ft=new R(B.x+(X.x-B.x)*gt,B.y+(X.y-B.y)*gt,B.z+(X.z-B.z)*gt);y.push(ft),Z.push(ft)}}return y}function S(M,E){const P=new Set,w=[];return M.forEach(G=>{const Z=`${Math.round(G.x/E)},${Math.round(G.y/E)},${Math.round(G.z/E)}`;P.has(Z)||(P.add(Z),w.push(G))}),w}function V(M,E){const P=["x","y","z"],w=[];for(let H=0;H<3;H+=1)for(const D of[1,-1]){const I=new R;I[P[H]]=D;const B=P[(H+1)%3],X=P[(H+2)%3],j=[];for(const[ct,gt]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const ft=new R;ft[P[H]]=D*E,ft[B]=ct*E,ft[X]=gt*E,j.push(ft)}w.push({normal:I,verts:j})}const G=1e-5,Z=new R,Y=new R,y=new R;return M.map((H,D)=>{let I=w;const B=[];for(let X=0;X<M.length;X+=1)X!==D&&B.push(X);B.sort((X,j)=>M[X].distanceToSquared(H)-M[j].distanceToSquared(H));for(const X of B){const j=M[X],ct=j.x-H.x,gt=j.y-H.y,ft=j.z-H.z,zt=Math.sqrt(ct*ct+gt*gt+ft*ft);if(zt<1e-6)continue;const Ct=ct/zt,Nt=gt/zt,Gt=ft/zt,Xt=(Ct*(j.x+H.x)+Nt*(j.y+H.y)+Gt*(j.z+H.z))*.5;let Pt=-1/0;for(const ut of I)for(const xt of ut.verts){const Et=Ct*xt.x+Nt*xt.y+Gt*xt.z-Xt;Et>Pt&&(Pt=Et)}if(Pt<=G)continue;const qt=[],Zt=[];for(const ut of I){const xt=T(ut.verts,Ct,Nt,Gt,Xt,qt,G);xt.length>=3&&Zt.push({normal:ut.normal,verts:xt})}if(qt.length>=3){const ut=S(qt,2e-4);if(ut.length>=3){const xt=new R;ut.forEach(Et=>xt.add(Et)),xt.multiplyScalar(1/ut.length),Z.set(Ct,Nt,Gt),Y.set(1,0,0),Math.abs(Ct)>.9&&Y.set(0,1,0),Y.cross(Z).normalize(),y.crossVectors(Z,Y),ut.sort((Et,at)=>{const At=Math.atan2((Et.x-xt.x)*y.x+(Et.y-xt.y)*y.y+(Et.z-xt.z)*y.z,(Et.x-xt.x)*Y.x+(Et.y-xt.y)*Y.y+(Et.z-xt.z)*Y.z),Wt=Math.atan2((at.x-xt.x)*y.x+(at.y-xt.y)*y.y+(at.z-xt.z)*y.z,(at.x-xt.x)*Y.x+(at.y-xt.y)*Y.y+(at.z-xt.z)*Y.z);return At-Wt}),Zt.push({normal:Z.clone(),verts:ut})}}if(I=Zt,I.length<4)break}return{faces:I}})}function rt(){const M=new Ke;M.visible=!1,M.renderOrder=4;const E=ne(20260824),P=()=>{const nt=Math.max(E(),1e-4);return Math.sqrt(-2*Math.log(nt))*Math.cos(Math.PI*2*E())},w=vg,G=Array.from({length:9},()=>new R((E()*2-1)*w*.6,(E()*2-1)*w*.6,(E()*2-1)*w*.6)),Z=[];let Y=0;for(;Z.length<780&&Y<46e3;){Y+=1;const nt=new R;if(E()<.62){const St=G[Math.floor(E()*G.length)];nt.set(St.x+P()*.58,St.y+P()*.58,St.z+P()*.58)}else nt.set(E()*2-1,E()*2-1,E()*2-1).multiplyScalar(w);nt.clampScalar(-w+.06,w-.06);let dt=!1;for(const St of Z)if(St.distanceToSquared(nt)<.0121){dt=!0;break}dt||Z.push(nt)}const y=V(Z,w),H=new Map,D=nt=>{const dt=`${Math.round(nt.x/6e-4)},${Math.round(nt.y/6e-4)},${Math.round(nt.z/6e-4)}`;let St=H.get(dt);return St||(St={index:H.size,position:nt.clone(),degree:0},H.set(dt,St)),St.degree+=1,St},I=new Map;y.forEach(nt=>{nt.faceNodes=nt.faces.map(dt=>dt.verts.length<3?null:dt.verts.map(St=>D(St))),nt.faceNodes.forEach(dt=>{if(dt)for(let St=0;St<dt.length;St+=1){const Ut=dt[St],te=dt[(St+1)%dt.length];if(Ut.index===te.index)continue;const Ne=Ut.index<te.index?`${Ut.index}:${te.index}`:`${te.index}:${Ut.index}`;I.has(Ne)||I.set(Ne,{a:Math.min(Ut.index,te.index),b:Math.max(Ut.index,te.index),length:Ut.position.distanceTo(te.position)})}})});const B=new Array(H.size);H.forEach(nt=>{B[nt.index]=nt});const X=[],j=[],ct=[],gt=[],ft=[],zt=[],Ct=[],Nt=[],Gt=[],Xt=w*1.62,Pt=nt=>[nt.x,nt.y,nt.z].filter(dt=>Math.abs(Math.abs(dt)-w)<.0012).length;B.forEach(nt=>{const dt=nt.position,St=Math.min(3,Pt(dt)),Ut=Math.min(nt.degree,9);X.push(dt.x,dt.y,dt.z),j.push(P()*.09,P()*.09,P()*.09);const te=Ut>=6;ct.push((20+Ut*4+St*7)*(.9+E()*.3)*(te?1.35:1)),gt.push(Math.min(.72,(.6+Ut*.07+St*.08+E()*.12+(te?.16:0))*.52)),ft.push(E()*Math.PI*2),zt.push(Math.min(1,dt.length()/Xt)*.72+E()*.28);const Ne=Ut>=6?.3+E()*.35:.45+E()*.55;Ct.push(Math.min(1.25,Ne)),Nt.push(.13+E()*.1),Gt.push((dt.y+w)/(w*2)*2+E()*.7)}),I.forEach(({a:nt,b:dt,length:St})=>{if(St<.1)return;const Ut=B[nt].position,te=B[dt].position,Ne=Math.max(1,Math.round(St/.12)-1);for(let Fe=1;Fe<=Ne;Fe+=1){const qe=Fe/(Ne+1),Je=Ut.x+(te.x-Ut.x)*qe,en=Ut.y+(te.y-Ut.y)*qe,dn=Ut.z+(te.z-Ut.z)*qe;X.push(Je,en,dn),j.push(P()*.09,P()*.09,P()*.09),ct.push(13+E()*8),gt.push(.22+E()*.12),ft.push(E()*Math.PI*2),zt.push(Math.min(1,Math.sqrt(Je*Je+en*en+dn*dn)/Xt)*.72+E()*.28),Ct.push(Math.min(1.3,.7+E()*.45)),Nt.push(.1+E()*.09),Gt.push((en+w)/(w*2)*2+E()*.7)}});const qt=nt=>{let dt=0;for(let St=0;St<nt.length;St+=1){const Ut=nt[St],te=nt[(St+1)%nt.length];dt+=Ut.x*te.y-te.x*Ut.y+(Ut.y*te.z-te.y*Ut.z)+(Ut.z*te.x-Ut.z*te.x)}return Math.abs(dt)*.5},Zt=nt=>{for(let dt=0;dt<3;dt+=1){let St=0;for(const Ut of nt)Math.abs(Math.abs(Ut.getComponent(dt))-w)<.0012&&(St+=1);if(St===nt.length)return!0}return!1},ut=new R;y.forEach(nt=>{nt.faces.forEach((dt,St)=>{if(!nt.faceNodes[St])return;const te=dt.verts,Ne=qt(te);if(Ne<.008)return;const Fe=Zt(te),qe=Math.min(160,Math.round(Ne*(Fe?8:2)));for(let Je=0;Je<qe;Je+=1){const en=1+Math.floor(E()*(te.length-1));let dn=Math.sqrt(E()),Bn=E();dn+Bn>1&&(dn=1-dn,Bn=1-Bn);const Nn=te[0],Yi=te[en],ia=te[en===te.length-1?1:en+1];ut.set(Nn.x+(Yi.x-Nn.x)*dn+(ia.x-Nn.x)*Bn,Nn.y+(Yi.y-Nn.y)*dn+(ia.y-Nn.y)*Bn,Nn.z+(Yi.z-Nn.z)*dn+(ia.z-Nn.z)*Bn),X.push(ut.x,ut.y,ut.z),j.push(P()*.09,P()*.09,P()*.09),ct.push((13+E()*8)*(Fe?1.18:1)),gt.push((.22+E()*.15)*(Fe?1.34:1)),ft.push(E()*Math.PI*2),zt.push(Math.min(1,ut.length()/Xt)*.72+E()*.28),Ct.push(Math.min(1.35,.9+E()*.45)),Nt.push(.07+E()*.07),Gt.push((ut.y+w)/(w*2)*2+E()*.7)}})});const xt=new Te;xt.setAttribute("position",new Jt(X,3)),xt.setAttribute("aStart",new Jt(j,3)),xt.setAttribute("aSize",new Jt(ct,1)),xt.setAttribute("aBase",new Jt(gt,1)),xt.setAttribute("aPhase",new Jt(ft,1)),xt.setAttribute("aOrder",new Jt(zt,1)),xt.setAttribute("aLightThreshold",new Jt(Ct,1)),xt.setAttribute("aHopAmp",new Jt(Nt,1)),xt.setAttribute("aHopPhase",new Jt(Gt,1));const Et=new Rn({uniforms:{uAssemble:{value:0},uHopClock:{value:0},uHopEnv:{value:0},uLight:{value:0},uPointLightColor:{value:xg},uTime:{value:0},uOpacity:{value:.7},uPixelRatio:{value:1}},vertexShader:`
      attribute vec3 aStart;
      attribute float aSize;
      attribute float aBase;
      attribute float aPhase;
      attribute float aOrder;
      attribute float aLightThreshold;
      attribute float aHopAmp;
      attribute float aHopPhase;
      uniform float uAssemble;
      uniform float uHopClock;
      uniform float uHopEnv;
      uniform float uLight;
      uniform vec3 uPointLightColor;
      uniform float uTime;
      uniform float uPixelRatio;
      varying vec3 vColor;
      varying float vLift;
      varying float vAlpha;
      void main() {
        float local = clamp((uAssemble - aOrder * 0.62) / 0.38, 0.0, 1.0);
        float ease = local * local * (3.0 - 2.0 * local);
        float overshoot = 1.0 + 0.1 * sin(ease * 3.14159) * (1.0 - local);
        vec3 foamPosition = mix(aStart, position, ease * overshoot);
        float hop = max(0.0, sin(uHopClock * 7.3 - aHopPhase)) * aHopAmp * uHopEnv * ease;
        foamPosition.y += hop;
        vec4 mvPosition = modelViewMatrix * vec4(foamPosition, 1.0);
        gl_PointSize = aSize * uPixelRatio / max(1.0, -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
        float lift = clamp((uLight * 1.15 - aLightThreshold) / 0.26, 0.0, 1.0);
        lift = lift * lift * (3.0 - 2.0 * lift);
        float shimmer = 1.0 + sin(uTime * 2.3 + aPhase) * 0.055;
        float brightness = min(1.12, aBase * (0.62 + lift * 0.45) * shimmer);
        vec3 foamWhite = vec3(0.87, 0.94, 1.0);
        // Meissa (觜宿一) is the cue's reference star in Scene 04. Its
        // pale blue-white tint blooms into the foam only as each point's
        // distributed-light threshold is crossed.
        vColor = brightness * mix(foamWhite, uPointLightColor, lift * 0.9);
        vLift = lift;
        vAlpha = ease;
      }
    `,fragmentShader:`
      uniform float uOpacity;
      varying vec3 vColor;
      varying float vLift;
      varying float vAlpha;
      void main() {
        vec2 coord = gl_PointCoord - vec2(0.5);
        float distanceToCenter = length(coord);
        float core = 1.0 - smoothstep(0.0, 0.3, distanceToCenter);
        float halo = 1.0 - smoothstep(0.3, 0.5, distanceToCenter);
        // 4-point diffraction spikes (Meissa's 十字星芒 in Scene 04), blooming
        // only on the ignited subset of the foam.
        float spikeH = (1.0 - smoothstep(0.0, 0.05, abs(coord.y))) * (1.0 - smoothstep(0.07, 0.5, abs(coord.x)));
        float spikeV = (1.0 - smoothstep(0.0, 0.05, abs(coord.x))) * (1.0 - smoothstep(0.07, 0.5, abs(coord.y)));
        float cross = max(spikeH, spikeV) * vLift;
        float alpha = (core * 1.0 + halo * 0.08 + cross * 1.15) * uOpacity * vAlpha;
        if (alpha < 0.012) discard;
        gl_FragColor = vec4(vColor + vec3(cross * 0.65), alpha);
      }
    `,transparent:!0,depthWrite:!1,blending:ue}),at=new hn(xt,Et);at.renderOrder=5,at.frustumCulled=!1,M.add(at);const At=new Set,Wt=[],Rt=iu,ce=new Ci().setFromEuler(new Jn(Rt*.3,Rt,Rt*.16)).clone().invert(),re=1,Se=re*re,g=.16,U=g*g,W=.13,$=new R(-1.95,1.62,.42).applyQuaternion(ce),O=B.map(nt=>nt.position).filter(nt=>nt.distanceTo($)>.35),et=O.map(()=>!0),vt=.5,bt=nt=>`${Math.floor(nt.x/vt)},${Math.floor(nt.y/vt)},${Math.floor(nt.z/vt)}`,Tt=[$.clone()],Yt=[],Kt=new Map,Ft=()=>{Kt.clear(),Tt.forEach((nt,dt)=>{const St=bt(nt);Kt.has(St)||Kt.set(St,[]),Kt.get(St).push(dt)})},fe=nt=>{const dt=Math.floor(nt.x/vt),St=Math.floor(nt.y/vt),Ut=Math.floor(nt.z/vt),te=[];for(let Ne=-1;Ne<=1;Ne+=1)for(let Fe=-1;Fe<=1;Fe+=1)for(let qe=-1;qe<=1;qe+=1){const Je=Kt.get(`${dt+Ne},${St+Fe},${Ut+qe}`);Je&&te.push(...Je)}return te},pe=80,Ce=new R(.9,-.38,-.12).normalize().applyQuaternion(ce);for(let nt=0;nt<pe;nt+=1){Ft();const dt=new Map;for(let Ut=0;Ut<O.length;Ut+=1){if(!et[Ut])continue;const te=O[Ut];let Ne=-1,Fe=Se;for(const Je of fe(te)){const en=te.distanceToSquared(Tt[Je]);en<Fe&&(Fe=en,Ne=Je)}if(Ne<0)continue;if(Fe<U){et[Ut]=!1;continue}const qe=te.clone().sub(Tt[Ne]).normalize();dt.has(Ne)?dt.get(Ne).push(qe):dt.set(Ne,[qe])}if(dt.size===0)break;const St=[];Tt.forEach((Ut,te)=>{const Ne=dt.get(te);if(!Ne){St.push(Ut.clone());return}const Fe=[];for(const qe of Ne){let Je=null,en=.72;for(const dn of Fe){const Bn=dn.sum.dot(qe)/(dn.sum.length()||1);Bn>en&&(en=Bn,Je=dn)}if(Je)Je.sum.add(qe);else if(Fe.length<3)Fe.push({sum:qe.clone()});else{let dn=Fe[0],Bn=-2;for(const Nn of Fe){const Yi=Nn.sum.dot(qe)/(Nn.sum.length()||1);Yi>Bn&&(Bn=Yi,dn=Nn)}dn.sum.add(qe)}}Fe.forEach(qe=>{const Je=qe.sum.normalize().lerp(Ce,.24).normalize(),en=Ut.clone().addScaledVector(Je,W);en.clampScalar(-w+.04,w-.04),Yt.length<7e3&&Yt.push({a:Ut,b:en,iter:nt}),St.push(en)})}),Tt.length=0,St.forEach(Ut=>Tt.push(Ut))}const Ue=Yt.reduce((nt,dt)=>Math.max(nt,dt.iter),0),Ot=[];Yt.forEach(({a:nt,b:dt,iter:St})=>{Ot.push({a:nt,b:dt,delay:.05+St/Math.max(1,Ue)*.5,kind:St<5?1:.5})});const Q=new Set,Qt=new Map;B.forEach((nt,dt)=>{const St=bt(nt.position);Qt.has(St)||Qt.set(St,[]),Qt.get(St).push(dt)});const oe=nt=>{const dt=Math.floor(nt.x/vt),St=Math.floor(nt.y/vt),Ut=Math.floor(nt.z/vt);for(let te=-1;te<=1;te+=1)for(let Ne=-1;Ne<=1;Ne+=1)for(let Fe=-1;Fe<=1;Fe+=1){const qe=Qt.get(`${dt+te},${St+Ne},${Ut+Fe}`);qe&&qe.forEach(Je=>{B[Je].position.distanceToSquared(nt)<.09&&Q.add(Je)})}};Yt.forEach(({a:nt,b:dt})=>{oe(nt),oe(dt)});const Re=(nt,dt)=>{for(let St=0;St<3;St+=1){const Ut=Math.abs(Math.abs(nt.position.getComponent(St))-w)<.0012,te=Math.abs(Math.abs(dt.position.getComponent(St))-w)<.0012;if(Ut&&te)return!0}return!1};I.forEach(({a:nt,b:dt,length:St})=>{if(St<.06||St>1.3||Re(B[nt],B[dt])||!(Q.has(nt)&&Q.has(dt))&&E()>.1)return;const te=`${nt}:${dt}`;At.has(te)||(At.add(te),Wt.push({a:nt,b:dt,length:St}))});const ye=B.map((nt,dt)=>({node:nt,index:dt})).filter(({node:nt})=>nt.degree>=6).sort((nt,dt)=>dt.node.degree-nt.node.degree).slice(0,56);let me=0;ye.forEach(nt=>{if(me>=24)return;let dt=null,St=1.5;if(ye.forEach(Ut=>{if(Ut===nt)return;const te=Math.min(nt.index,Ut.index),Ne=Math.max(nt.index,Ut.index);if(At.has(`${te}:${Ne}`))return;const Fe=nt.node.position.distanceTo(Ut.node.position);Fe<St&&(St=Fe,dt=Ut)}),dt){const Ut=Math.min(nt.index,dt.index),te=Math.max(nt.index,dt.index);At.add(`${Ut}:${te}`),Wt.push({a:Ut,b:te,length:St}),me+=1}});const He=new Map;Wt.forEach(({a:nt,b:dt})=>{He.has(nt)||He.set(nt,[]),He.has(dt)||He.set(dt,[]),He.get(nt).push(dt),He.get(dt).push(nt)});let ge=0,Be=-1/0;B.forEach((nt,dt)=>{const St=nt.degree-nt.position.length()*.8;St>Be&&(Be=St,ge=dt)});const De=new Map([[ge,0]]),Le=[ge];for(;Le.length;){const nt=Le.shift(),dt=De.get(nt);(He.get(nt)??[]).forEach(St=>{De.has(St)||(De.set(St,dt+1),Le.push(St))})}let ke=1;De.forEach(nt=>{ke=Math.max(ke,nt)});const ln=[],fn=[],je=[],rn=[],zn=[],Kn=[];Wt.forEach(({a:nt,b:dt})=>{const St=B[nt].position,Ut=B[dt].position,te=Math.min(1,.08+(De.get(nt)??9)/ke*.58+E()*.3);ln.push(St.x,St.y,St.z,Ut.x,Ut.y,Ut.z),fn.push(St.x,St.y,St.z,St.x,St.y,St.z),je.push(Ut.x,Ut.y,Ut.z,Ut.x,Ut.y,Ut.z),rn.push(0,1),zn.push(te,te),Kn.push(0,0)}),Ot.forEach(({a:nt,b:dt,delay:St,kind:Ut})=>{ln.push(nt.x,nt.y,nt.z,dt.x,dt.y,dt.z),fn.push(nt.x,nt.y,nt.z,nt.x,nt.y,nt.z),je.push(dt.x,dt.y,dt.z,dt.x,dt.y,dt.z),rn.push(0,1),zn.push(St,St),Kn.push(Ut,Ut)});const Ln=new Te;Ln.setAttribute("position",new Jt(ln,3)),Ln.setAttribute("aStart",new Jt(fn,3)),Ln.setAttribute("aEnd",new Jt(je,3)),Ln.setAttribute("aT",new Jt(rn,1)),Ln.setAttribute("aDelay",new Jt(zn,1)),Ln.setAttribute("aSkeleton",new Jt(Kn,1));const jn=new Br(Ln,new Rn({uniforms:{uReveal:{value:0},uColorShift:{value:0},uOpacity:{value:0}},vertexShader:`
      attribute vec3 aStart;
      attribute vec3 aEnd;
      attribute float aT;
      attribute float aDelay;
      attribute float aSkeleton;
      uniform float uReveal;
      varying float vGlow;
      varying float vDepth;
      varying float vSkeleton;
      void main() {
        float growth = clamp((uReveal - aDelay * 0.72) / 0.28, 0.0, 1.0);
        vec3 webPosition = mix(aStart, aEnd, min(aT, growth));
        vGlow = 0.45 + 0.55 * growth;
        vSkeleton = aSkeleton;
        vec4 mvPosition = modelViewMatrix * vec4(webPosition, 1.0);
        vDepth = clamp(-mvPosition.z / 19.0, 0.0, 1.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform float uColorShift;
      uniform float uOpacity;
      varying float vGlow;
      varying float vDepth;
      varying float vSkeleton;
      void main() {
        vec3 webWhite = vec3(0.97, 1.0, 0.985);
        vec3 webBlue = vec3(0.30, 0.76, 1.0);
        vec3 color = mix(webWhite, webBlue, uColorShift);
        // Tree hierarchy: the silk trunk glows brightest, leaf ribs sit in
        // between, and the foam flesh recedes into the background.
        float isTrunk = step(0.75, vSkeleton);
        float isBranch = step(0.25, vSkeleton) * (1.0 - isTrunk);
        float fillDim = mix(0.38, 1.0, isBranch + isTrunk);
        float boost = 1.0 + isBranch * 0.25 + isTrunk * 0.85;
        color = mix(color, vec3(1.0), isTrunk * 0.32 + isBranch * 0.1);
        float alpha = uOpacity * vGlow * mix(1.0, 0.6, vDepth) * fillDim * boost;
        if (alpha < 0.01) discard;
        gl_FragColor = vec4(color * (1.05 + 0.5 * vGlow), alpha);
      }
    `,transparent:!0,depthWrite:!1,blending:ue}));return jn.renderOrder=6,jn.frustumCulled=!1,M.add(jn),window.__webDebug={seeds:Z.length,edges:Wt.length,skeleton:Ot.length,flesh:Q.size,growthIters:Ue,nodes:B.length},{group:M,points:at,lines:jn}}function K(){const M=new Ke,E=[{center:[-4.2,1.55,-2.1],spread:[1.45,.85,1.1]},{center:[-1.55,.25,-2.5],spread:[1.3,1.25,1.25]},{center:[2.15,1.45,-2.2],spread:[1.55,.95,1.2]},{center:[4.05,-1.15,-2.5],spread:[1.25,1.05,1.15]},{center:[-.35,-2.15,-2.15],spread:[1.75,.72,1.3]},{center:[-3.55,-1.8,-1.75],spread:[1.15,.92,1.1]}];let P=17;const w=()=>(P=P*16807%2147483647,P/2147483647),G=()=>{const Z=Math.max(w(),1e-4);return Math.sqrt(-2*Math.log(Z))*Math.cos(Math.PI*2*w())};return[{count:1400,size:.042,opacity:.56},{count:560,size:.078,opacity:.72},{count:170,size:.13,opacity:.64}].forEach((Z,Y)=>{const y=[],H=[],D=[],I=[];for(let j=0;j<Z.count;j+=1){let ct,gt,ft;if(w()<.82){const Nt=E[Math.floor(w()*E.length)];ct=Nt.center[0]+G()*Nt.spread[0],gt=Nt.center[1]+G()*Nt.spread[1],ft=Nt.center[2]+G()*Nt.spread[2]}else ct=(w()*2-1)*6.2,gt=(w()*2-1)*3.6,ft=w()*4.5-4;y.push(de.clamp(ct,-6.7,6.7),de.clamp(gt,-3.9,3.9),de.clamp(ft,-5.2,1.2));const zt=.62+w()*.38,Ct=(j*37+Y*13)%31<2;H.push(zt,zt*(Ct?.9:.16),zt*(Ct?1:.035)),D.push(w()*Math.PI*2),I.push(2.1+w()*1.4)}const B=new Te;B.setAttribute("position",new Jt(y,3)),B.setAttribute("color",new Jt(H,3)),B.setAttribute("aPhase",new Jt(D,1)),B.setAttribute("aSpeed",new Jt(I,1));const X=new Rn({uniforms:{uTime:{value:0},uSize:{value:Z.size*680},uOpacity:{value:Z.opacity},uReveal:{value:0},uAbsorbProgress:{value:0},uAbsorbTarget:{value:new R}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:ue,vertexColors:!0});M.add(new hn(B,X))}),M}function ht(){const E=[],P=[],w=new ee(12144941),G=new ee(5614016),Z=new ee(7373197);for(let D=0;D<1100;D+=1){const I=D*73%1100/1100,B=D*419%1100/1100,X=(I*2-1)*6.6+Math.sin(D*1.71)*.12,j=(B*2-1)*3.65+Math.cos(D*1.13)*.08,ct=-4.2+Math.sin(D*.37)*.7,gt=Math.sin(X*1.18)+Math.cos(j*1.76)+Math.sin((X-j)*.63),ft=Math.min(1,Math.abs(gt)/2.4),zt=Z.clone().lerp(gt>=0?w:G,.42+ft*.5),Ct=.28+ft*.58;E.push(X,j,ct),P.push(zt.r*Ct,zt.g*Ct,zt.b*Ct)}const Y=new Te;Y.setAttribute("position",new Jt(E,3)),Y.setAttribute("color",new Jt(P,3));const y=new wn({size:.07,map:i,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:ue,sizeAttenuation:!0}),H=new hn(Y,y);return H.visible=!1,H}function mt(){const M=[[-2.2,0,0]],E=new Ke,P=new ee(16726797),w=new ee(16763760),G=M.map((Z,Y)=>{const H=new Float32Array(1080),D=new Float32Array(360*3),I=new Float32Array(360*3),B=new Float32Array(360*3);for(let Q=0;Q<360;Q+=1){const Qt=Q*2.39996323+Y*.71,oe=Math.acos(1-2*((Q+.5)/360)),ye=.64*(.94+Math.sin(Q*1.73+Y)*.04+Math.cos(Q*.47)*.025),me=Math.cos(Qt)*Math.sin(oe)*ye,He=Math.cos(oe)*ye,ge=Math.sin(Qt)*Math.sin(oe)*ye,Be=Q*3;H.set([me,He,ge],Be),D.set([me,He,ge],Be);const De=1/Math.max(.001,Math.hypot(me,He,ge)),Le=.08+(Q*31+Y*17)%23/23*.18;I.set([me*De*Le+Math.sin(Q*.83)*.035,He*De*Le+Math.cos(Q*.57)*.025,ge*De*Le+Math.sin(Q*1.17)*.04],Be);const ke=.18+Q*13%19/19*.72,ln=P.clone().lerp(w,ke);B.set([ln.r,ln.g,ln.b],Be)}const X=new Pn(new Ks(.62,40,28),new Rn({uniforms:{uReveal:{value:0},uImpact:{value:0},uScar:{value:0},uPhase:{value:Y*1.37}},vertexShader:`
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
        `,transparent:!0,depthWrite:!0}));X.rotation.set(Y*.11,Y*.37,Y*.08);const j=new Te;j.setAttribute("position",new Ye(D,3)),j.setAttribute("color",new Ye(B,3));const ct=new hn(j,new wn({size:.034,map:i,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:ue,sizeAttenuation:!0}));ct.rotation.copy(X.rotation);const gt=new Pn(new Ks(.78,36,24),new Rn({uniforms:{uReveal:{value:0},uImpact:{value:0},uHeat:{value:0},uPhase:{value:Y*.83}},vertexShader:`
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
        `,transparent:!0,depthTest:!1,depthWrite:!1,blending:ue}));gt.renderOrder=-2;const ft=260,zt=new Float32Array(ft*3),Ct=new Float32Array(ft*3);for(let Q=0;Q<ft;Q+=1){const Qt=Q*2.39996323+Y*.51,oe=Math.acos(1-2*((Q+.5)/ft)),Re=.72+(Q*31+Y*7)%29/29*.17,ye=Q*3;zt.set([Math.cos(Qt)*Math.sin(oe)*Re,Math.cos(oe)*Re,Math.sin(Qt)*Math.sin(oe)*Re],ye);const me=new ee(16721416).lerp(new ee(16751154),Q*17%23/23*.45);Ct.set(me.toArray(),ye)}const Nt=new Te;Nt.setAttribute("position",new Ye(zt,3)),Nt.setAttribute("color",new Ye(Ct,3));const Gt=new hn(Nt,new wn({size:.052,map:i,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:ue,sizeAttenuation:!0})),Xt=new R(...Z),qt=(Y===0?new R(0,0,0):new R(...M[Y-1])).sub(Xt);qt.lengthSq()<.001?qt.set(1,0,0):qt.normalize();const Zt=new R(0,1,0).addScaledVector(qt,-qt.y).normalize();Zt.lengthSq()<.01&&Zt.set(1,0,0);const ut=qt.clone().cross(Zt).normalize(),xt=new Sn(new pn({map:i,color:16770992,transparent:!0,opacity:0,depthWrite:!1,blending:ue}));xt.scale.setScalar(.2),xt.position.copy(qt).multiplyScalar(.642);const Et=new Sn(new pn({map:i,color:16773316,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:ue}));Et.position.copy(xt.position),Et.scale.setScalar(.3);const at=3,At=96,Wt=at*At,Rt=new Float32Array(Wt*3),Bt=new Float32Array(Wt),ce=new Float32Array(Wt),re=new Float32Array(Wt);for(let Q=0;Q<Wt;Q+=1){const Qt=Math.floor(Q/At),Re=Q%At/At*Math.PI*2+Qt*.37,ye=Q*3;Rt.set(qt.clone().multiplyScalar(.635).toArray(),ye),Bt[Q]=.034+(Q*17+Y*7)%19/19*.026,re[Q]=Re}const Se=new Te;Se.setAttribute("position",new Ye(Rt,3)),Se.setAttribute("aSize",new Ye(Bt,1)),Se.setAttribute("aAlpha",new Ye(ce,1).setUsage(ec));const g=new hn(Se,new Rn({uniforms:{uColor:{value:new ee(16766880)},uOpacity:{value:0},uPointScale:{value:180}},vertexShader:`
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
      `,transparent:!0,depthTest:!0,depthWrite:!1,blending:ue}));g.renderOrder=11,g.frustumCulled=!1;const U=3525,W=new Float32Array(U*3),$=new Float32Array(U*3),O=new Float32Array(U*3),et=new Float32Array(U*3),vt=new Float32Array(U),bt=new Float32Array(U),Tt=new Float32Array(U),Yt=new Uint8Array(U),Kt=new Float32Array(U),Ft=new Float32Array(U),fe=new Float32Array(U);for(let Q=0;Q<U;Q+=1){const Qt=Q*2.39996323+Y*.43,oe=(Q*47+Y*19)%101/101,Re=oe<.38?0:oe<.88?1:2,ye=(Q*29+Y*11)%97/97,me=(Q*71+Y*23)%103/103,He=Re===0?.12+ye*.3:Re===1?.28+ye*1.72:1.2+ye*2.1,ge=Re===0?.18+me**.72*1.08:Re===1?.06+me**.68*2.08:.28+me**.62*2.55,Be=(Q*13+Y*5)%31/31,De=.012+Math.sqrt(Be)*.12,Le=Math.cos(Qt)*De,ke=Math.sin(Qt)*De,ln=qt.clone().multiplyScalar(.59).addScaledVector(Zt,Le).addScaledVector(ut,ke),fn=qt.clone().multiplyScalar(He).addScaledVector(Zt,Math.cos(Qt)*ge).addScaledVector(ut,Math.sin(Qt)*ge),je=Q*3;W.set(ln.toArray(),je),$.set(fn.toArray(),je);const rn=ln.normalize();O.set(rn.toArray(),je);const zn=(Q*23+Y*13)%31/31,Kn=new ee(16721416).lerp(new ee(16773304),zn**3.2);et.set(Kn.toArray(),je);const Ln=(Q*19+Y*5)%43/43;vt[Q]=(Re===1?.022:.018)+Ln**3*(Re===2?.075:.095),bt[Q]=.35+(Q*11+Y*17)%37/37*.65,Yt[Q]=Re,Kt[Q]=(Q*41+Y*17)%97/97*(Re===0?.38:.22),Ft[Q]=Re===0?2.7+ye*.7:Re===1?3.2+ye*.8:.7+ye*.5,fe[Q]=Re===0?.72+ye*.32:Re===1?.28+ye*.38:.08+ye*.2}const pe=new Te;pe.setAttribute("position",new Ye(W,3)),pe.setAttribute("color",new Ye(et,3)),pe.setAttribute("aSize",new Ye(vt,1)),pe.setAttribute("aEnergy",new Ye(bt,1)),pe.setAttribute("aAlpha",new Ye(Tt,1).setUsage(ec));const Ce=new hn(pe,new Rn({uniforms:{uOpacity:{value:0},uPointScale:{value:180}},vertexShader:`
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
      `,transparent:!0,depthTest:!0,depthWrite:!1,blending:ue}));Ce.renderOrder=12,Ce.frustumCulled=!1;const Ue=new Ke;Ue.add(xt,Et,g,Ce);const Ot=new Ke;return Ot.add(gt,Gt,X,ct,Ue),Ot.position.set(...Z),Ot.userData={shell:X,points:ct,atmosphere:gt,corona:Gt,core:xt,burst:Et,surfaceEffects:Ue,ripple:g,splash:Ce,basePositions:H,drift:I,splashVelocities:$,splashSurfaceDirections:O,splashEnergy:bt,splashTypes:Yt,splashDelays:Kt,splashLifetimes:Ft,splashSpinDrag:fe,contactDirection:qt,tangentA:Zt,tangentB:ut,ripplePhase:re,surfaceBaseRotation:X.rotation.clone(),impactSpinOrigin:0,impactCaptured:!1,phase:Y*.73},E.add(Ot),Ot});return E.visible=!1,{group:E,lobes:G,positions:M.map(Z=>new R(...Z))}}function ot(M,E){if(M.shape==="chladni"&&M.boundary==="volume")return tt(M,E);if(M.shape==="chladni")return _t(M,E);const P=new Ke,w=new Sn(new pn({map:i,color:M.color,transparent:!0,opacity:.2,depthWrite:!1,blending:ue}));w.scale.setScalar(M.radius*2.7),P.add(w);const G=new Sn(new pn({map:i,color:M.color,transparent:!0,opacity:.42,depthWrite:!1,blending:ue}));G.scale.setScalar(M.radius*1.65),P.add(G);const Z=new Sn(new pn({map:i,color:Tn[0],transparent:!0,opacity:.92,depthWrite:!1,blending:ue}));Z.scale.setScalar(M.radius*.68),P.add(Z);const Y=new Te,y=[],H=[],D=360+E%4*60,I=new ee(M.color);for(let ct=0;ct<D;ct+=1){const gt=ct%3,ft=ct*2.39996323+M.phase,zt=Math.acos(1-2*((ct+.5)/D)),Ct=M.radius*(.38+gt*.28+.06*Math.sin(ct*1.7+M.phase)),Nt=.78+.18*Math.sin(ct*.37+M.phase),Gt=1+.12*Math.sin(ft*2.4+gt);y.push(Math.cos(ft)*Math.sin(zt)*Ct*Gt,Math.cos(zt)*Ct*Nt,Math.sin(ft)*Math.sin(zt)*Ct*.68);const Xt=new ee(Tn[Math.min(gt+1,Tn.length-1)]).lerp(I,.22),Pt=.7+.38*((Math.sin(ft*1.7)+1)/2);H.push(Xt.r*Pt,Xt.g*Pt,Xt.b*Pt)}Y.setAttribute("position",new Jt(y,3)),Y.setAttribute("color",new Jt(H,3));const B=new hn(Y,new wn({size:.056,map:i,vertexColors:!0,transparent:!0,opacity:.66,depthWrite:!1,blending:ue,sizeAttenuation:!0}));P.add(B);const X=new Xo(M.radius*.88,.006,4,64),j=new Pn(X,new pr({color:M.color,transparent:!0,opacity:.22,blending:ue,depthWrite:!1}));return j.rotation.x=Math.PI*.45+M.phase*.1,j.rotation.z=M.phase,P.add(j),P.position.set(...M.position),P.userData={...M,halo:w,mantle:G,core:Z,particles:B,ring:j,index:E},{group:P,definition:M}}function _t(M,E){const P=new Ke,w=[],G=[],Z=new Map,Y=76,y=.115,[H,D]=M.modes,I=new ee(M.color),B=new ee(Tn[0]);for(let Gt=0;Gt<Y;Gt+=1)for(let Xt=0;Xt<Y;Xt+=1){const Pt=Xt/(Y-1)*2-1,qt=Gt/(Y-1)*2-1,Zt=rl(Pt,qt,H,D);if(Math.abs(Zt)>y)continue;const ut=1-Math.abs(Zt)/y,xt=Math.sin((Gt*83+Xt*47+E*29)*.17)*.008,Et=[(Pt+xt)*M.radius*1.25,(qt-xt*.6)*M.radius*1.25,Zt*M.radius*1.7+Math.sin((Pt-qt)*Math.PI*(H+D))*M.radius*.035];w.push(...Et),Z.set(Gt*Y+Xt,Et);const at=I.clone().lerp(B,.28+ut*.66);G.push(at.r,at.g,at.b)}const X=new Te;X.setAttribute("position",new Jt(w,3)),X.setAttribute("color",new Jt(G,3));const j=new hn(X,new wn({size:.12,map:i,color:M.color,transparent:!0,opacity:.14,depthWrite:!1,blending:ue,sizeAttenuation:!0}));P.add(j);const ct=new hn(X,new wn({size:.047,map:i,vertexColors:!0,transparent:!0,opacity:.72,depthWrite:!1,blending:ue,sizeAttenuation:!0}));P.add(ct);let gt=null;if(M.network){const Gt=[],Xt=[[0,1],[1,0],[1,1],[1,-1]];Z.forEach((qt,Zt)=>{const ut=Math.floor(Zt/Y),xt=Zt%Y;Xt.forEach(([Et,at])=>{const At=Z.get((ut+Et)*Y+xt+at);At&&Gt.push(...qt,...At)})});const Pt=new Te;Pt.setAttribute("position",new Jt(Gt,3)),gt=new Br(Pt,new Bi({color:M.color,transparent:!0,opacity:.16,depthWrite:!1,blending:ue})),P.add(gt)}const ft=M.radius*1.3,zt=M.boundary==="octagon"?Array.from({length:8},(Gt,Xt)=>{const Pt=Math.PI/8+Xt*Math.PI/4,qt=ft/Math.cos(Math.PI/8);return new R(Math.cos(Pt)*qt,Math.sin(Pt)*qt,0)}):[new R(-ft,-ft,0),new R(ft,-ft,0),new R(ft,ft,0),new R(-ft,ft,0)],Ct=new Te().setFromPoints(zt),Nt=new Vh(Ct,new Bi({color:M.color,transparent:!0,opacity:.13,depthWrite:!1,blending:ue}));return P.add(Nt),P.position.set(...M.position),P.userData={...M,isChladni:!0,pattern:ct,glow:j,network:gt,outline:Nt,index:E},{group:P,definition:M}}function tt(M,E){if(t)return Lt(M,E);const P=new Ke,w=[],G=[],Z=[],Y=[],y=new Map,[H,D,I]=M.modes,B=40,X=M.radius*1.8,j=new ee(M.color),ct=new ee(7439516),gt=new ee(16774367),ft=Array.from({length:18},(ut,xt)=>({x:Math.sin(xt*3.71+.8)*.72,y:Math.cos(xt*2.17-.4)*.72,z:Math.sin(xt*1.43+1.9)*.72}));for(let ut=0;ut<B;ut+=1){const xt=ut/(B-1)*2-1;for(let Et=0;Et<B;Et+=1){const at=Et/(B-1)*2-1;for(let At=0;At<B;At+=1){const Wt=At/(B-1)*2-1;if(xt*xt*.62+at*at*.86+Wt*Wt*1.16>1.05)continue;const Bt=xt+Math.sin(at*Math.PI*1.4+M.phase)*.1+Math.sin(Wt*Math.PI*2.1)*.045,ce=at+Math.sin(Wt*Math.PI*1.25-M.phase*.4)*.11-Math.sin(xt*Math.PI*1.8)*.04,re=Wt+Math.sin(xt*Math.PI*1.55+M.phase*.3)*.12+Math.cos(at*Math.PI*1.9)*.04,Se=J0(Bt,ce,re,H,D,I);let g=1/0,U=1/0,W=1/0;ft.forEach(Kt=>{const Ft=Bt-Kt.x,fe=ce-Kt.y,pe=re-Kt.z,Ce=Math.sqrt(Ft*Ft+fe*fe+pe*pe);Ce<g?(W=U,U=g,g=Ce):Ce<U?(W=U,U=Ce):Ce<W&&(W=Ce)});const $=Math.exp(-((U-g)**2)*28-(W-U)**2*44),O=Math.exp(-Math.abs(Se)*4.2),et=$*(.56+O*.62);if(et<.55)continue;const vt=Math.min(1,et*.72+O*.35),bt=Math.sin((ut*97+Et*57+At*31+E*17)*.19)*.008,Tt=[(Bt*1.12+ce*.22+ce*re*.055+bt)*X,(ce*.92+re*.12+Math.sin(Bt*Math.PI)*.055-bt*.4)*X,(re*.94+Bt*ce*.07)*X];w.push(...Tt),y.set(ut*B*B+Et*B+At,{point:Tt,filamentScore:et});const Yt=ct.clone().lerp(j,.56+vt*.28).lerp(gt,vt*.32);G.push(Yt.r,Yt.g,Yt.b)}}}y.forEach(({point:ut,filamentScore:xt},Et)=>{const at=Math.floor(Et/(B*B)),At=Et%(B*B),Wt=Math.floor(At/B),Rt=At%B;[[1,0,0],[0,1,0],[0,0,1]].forEach(([Bt,ce,re])=>{const Se=(at+Bt)*B*B+(Wt+ce)*B+Rt+re,g=y.get(Se);g&&(Z.push(...ut,...g.point),(xt>.76||g.filamentScore>.76)&&Y.push(...ut,...g.point))})}),[{center:[-.72,.86,.14],size:[.52,.18],bend:.18,angle:-.22},{center:[.66,-.72,-.2],size:[.34,.14],bend:-.14,angle:.46}].forEach(ut=>{const at=new Map;for(let At=0;At<9;At+=1){const Wt=At/8*2-1;for(let Rt=0;Rt<24;Rt+=1){const Bt=Rt/23*2-1;if(Bt*Bt+Wt*Wt*1.45>1)continue;const ce=rl(Bt,Wt,H,D),re=Bt*ut.size[0],Se=Wt*ut.size[1],g=Math.cos(ut.angle),U=Math.sin(ut.angle),W=[(ut.center[0]+re*g-Se*U)*X,(ut.center[1]+re*U+Se*g)*X,(ut.center[2]+ce*ut.bend+Bt*Bt*.08)*X];w.push(...W),G.push(j.r,j.g,j.b),at.set(At*24+Rt,W)}}at.forEach((At,Wt)=>{const Rt=Math.floor(Wt/24),Bt=Wt%24;[[0,1],[1,0]].forEach(([ce,re])=>{const Se=at.get((Rt+ce)*24+Bt+re);Se&&(Z.push(...At,...Se),Y.push(...At,...Se))})})});const Ct=new Te;Ct.setAttribute("position",new Jt(w,3)),Ct.setAttribute("color",new Jt(G,3));const Nt=new hn(Ct,new wn({size:.065,map:i,color:M.color,transparent:!0,opacity:.045,depthWrite:!1,blending:ue,sizeAttenuation:!0}));P.add(Nt);const Gt=new hn(Ct,new wn({size:.019,map:i,vertexColors:!0,transparent:!0,opacity:.62,depthWrite:!1,blending:ue,sizeAttenuation:!0}));P.add(Gt);const Xt=new Te;Xt.setAttribute("position",new Jt(Z,3));const Pt=new Br(Xt,new Bi({color:12242401,transparent:!0,opacity:.24,depthWrite:!1,blending:ue}));P.add(Pt);const qt=new Te;qt.setAttribute("position",new Jt(Y,3));const Zt=new Br(qt,new Bi({color:16119807,transparent:!0,opacity:.2,depthWrite:!1,blending:ue}));return P.add(Zt),P.position.set(...M.position),P.userData={...M,isChladni:!0,pattern:Gt,glow:Nt,network:Pt,outline:Zt,index:E},{group:P,definition:M}}function Lt(M,E){const P=new Ke,w=[],G=[],Z=t,Y=M.radius*2.35,y=[[40,150,118],[46,190,200],[70,120,235],[182,206,255],[236,182,92],[230,72,96]],H=Array.from({length:48},(ct,gt)=>{const ft=y[Math.min(y.length-1,Math.floor(gt/8))],zt=gt%8/7,Ct=zt*zt*.72,Nt=.32+zt*.68;return ft.map(Gt=>Math.min(255,(Gt*(1-Ct)+255*Ct)*Nt)/255)});for(let ct=0;ct<Z.length;ct+=6){const gt=Z[ct+3],ft=Z[ct+4],zt=gt*ft,Ct=Z[ct]*Y,Nt=Z[ct+1]*Y,Gt=Z[ct+2]*Y;w.push(Ct,Nt,Gt);const Xt=H[Math.min(47,Math.max(0,Math.round(Z[ct+5])))]||H[24],Pt=.38+zt*1.15;G.push(Math.min(1,Xt[0]*Pt),Math.min(1,Xt[1]*Pt),Math.min(1,Xt[2]*Pt))}const D=new Te;D.setAttribute("position",new Jt(w,3)),D.setAttribute("color",new Jt(G,3));const I=new hn(D,new wn({size:.045,map:i,color:14412031,transparent:!0,opacity:.11,depthWrite:!1,blending:ue,sizeAttenuation:!0}));P.add(I);const B=new hn(D,new wn({size:.02,map:i,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:ue,sizeAttenuation:!0}));P.add(B);const X=new Te;X.setAttribute("position",new Jt([],3));const j=new Br(X,new Bi({color:14477823,transparent:!0,opacity:0,depthWrite:!1,blending:ue}));return P.add(j),P.position.set(...M.position),P.userData={...M,isChladni:!0,pattern:B,glow:I,network:null,outline:j,index:E},{group:P,definition:M}}function Ht(M,E){const P=new Ke,w=new Sn(new pn({map:i,color:7998466,transparent:!0,opacity:.16,depthWrite:!1,blending:ue}));w.scale.setScalar(M.scale*3.5),P.add(w);const G=new Sn(new pn({map:i,color:16723724,transparent:!0,opacity:.86,depthWrite:!1,blending:ue}));G.scale.setScalar(M.scale*1.35),P.add(G);const Z=[];for(let H=0;H<11;H+=1){const D=H*2.39996323+E*.47,I=M.scale*(.65+H%4*.35);Z.push(Math.cos(D)*I,Math.sin(D)*I*.62,Math.sin(D*1.7)*I*.35)}const Y=new Te;Y.setAttribute("position",new Jt(Z,3));const y=new hn(Y,new wn({size:.038,map:i,color:16734751,transparent:!0,opacity:.7,depthWrite:!1,blending:ue,sizeAttenuation:!0}));return P.add(y),P.position.set(...M.position),P.userData={halo:w,core:G,companions:y,phase:E*.73},{group:P,definition:M}}function ie(){const M=new Te;M.setAttribute("position",new Jt(new Array(6).fill(0),3));const E=new Zs(M,new Pc({color:13095167,transparent:!0,opacity:.38,dashSize:.085,gapSize:.065,depthWrite:!1}));return E.frustumCulled=!1,E.computeLineDistances(),E}function xe(){const M=new Ke,E=new Sn(new pn({map:i,color:Hs,transparent:!0,opacity:.9,depthWrite:!1,blending:ue}));M.add(E);const P=new Sn(new pn({map:i,color:16777215,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:ue}));P.renderOrder=21,M.add(P);const w=new Te,G=new Float32Array(360*3),Z=new Float32Array(360*3),Y=[],y=new ee(Hs);for(let I=0;I<360;I+=1)Y.push({s:I/359*2-1,angle:I*2.39996323,radial:.45+I%5*.1}),Z[I*3]=y.r,Z[I*3+1]=y.g,Z[I*3+2]=y.b;w.setAttribute("position",new Ye(G,3)),w.setAttribute("color",new Ye(Z,3));const H=new hn(w,new wn({size:.044,map:i,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,blending:ue}));M.add(H);const D=new Ke;for(let I=0;I<9;I+=1){const B=new Pn(new Js(.88,1,64),new pr({color:Hs,transparent:!0,opacity:.18,side:qn,depthTest:!1,depthWrite:!1,blending:ue}));B.userData.s=I/8*2-1,D.add(B)}return M.add(D),M.visible=!1,M.userData={core:E,frozenCoreBoost:P,particles:H,rings:D,meta:Y},{group:M,geometry:w,positions:G}}function ze(M){const E=cl(M),P=ll(M),w=M>ti&&M<=En,G=M>En;if(!E.active||G){l.group.visible=!1;return}if(l.group.visible=!0,w){const Pt=l.group.userData.recombinationAnchor;Pt&&l.group.position.copy(Pt),l.group.userData.recombinationAnchorQuaternion&&l.group.quaternion.copy(l.group.userData.recombinationAnchorQuaternion);const qt=P.silenceBrightness;ci.copy(Rs).lerp(ul,qt),l.group.userData.core.material.color.copy(ci),l.group.userData.core.material.opacity=de.lerp(.78,1,qt),l.group.userData.particles.material.opacity=de.lerp(.92,.16,P.progress),l.group.userData.rings.children.forEach(Zt=>{const ut=Zt.userData.s*19-P.waveTime*34,xt=Math.exp(-Zt.userData.s*Zt.userData.s*2.8);Zt.material.opacity=(.1+Math.max(0,Math.cos(ut))*.38*xt)*(1-qt)});return}const Z=M,Y=1,y=1;ci.copy(Rs).lerp(ul,P.silenceBrightness);const H=ol(M).nodes,D=Math.min(E.progress,.9)*H.length,I=Math.min(H.length-1,Math.floor(D)),B=.12+(D-I)*.76,X=s[H[I]].group.position,j=s[H[(I+1)%H.length]].group.position,ct=new R().subVectors(j,X),gt=X.clone().lerp(j,le(B)),ft=ct.normalize(),zt=new R(0,1,0).cross(ft).normalize();zt.lengthSq()<.01&&zt.set(1,0,0);const Ct=ft.clone().cross(zt).normalize();l.group.position.copy(gt).addScaledVector(Ct,Math.sin(Z*19)*.045*y),l.group.quaternion.setFromUnitVectors(new R(0,0,1),ft),l.userData=l.group.userData,l.group.userData.recombinationAnchor=l.group.position.clone(),l.group.userData.recombinationAnchorQuaternion=l.group.quaternion.clone(),l.group.userData.core.scale.setScalar(E.radius*1.65);const Nt=.9;l.group.userData.core.material.color.copy(ci),l.group.userData.core.material.opacity=de.lerp(Nt,1,P.silenceBrightness),l.group.userData.frozenCoreBoost.material.opacity=0,l.group.userData.particles.material.opacity=de.lerp(.92,1,P.silenceBrightness),l.group.userData.particles.material.size=de.lerp(.044,.072,P.silenceBrightness);const Gt=l.geometry.getAttribute("position"),Xt=l.geometry.getAttribute("color");l.group.userData.meta.forEach((Pt,qt)=>{const Zt=Pt.s*19-Z*34,ut=Math.exp(-Pt.s*Pt.s*3.2),xt=Math.sin(Zt)*E.radius*.58*ut,Et=(Pt.s*E.radius*2.7+xt)*(1+P.progress*.8),at=E.radius*(.34+.12*Math.cos(Zt))*Y,At=Math.cos(Pt.angle)*at*Pt.radial,Wt=Math.sin(Pt.angle)*at*Pt.radial;Gt.setXYZ(qt,At,Wt,Et),Xt.setXYZ(qt,ci.r,ci.g,ci.b)}),l.group.userData.rings.children.forEach(Pt=>{const qt=Pt.userData.s*19-Z*34,Zt=Math.exp(-Pt.userData.s*Pt.userData.s*2.8);Pt.position.z=Pt.userData.s*.42+Math.sin(qt)*.045*Zt,Pt.position.z*=1+P.progress*.8,Pt.scale.setScalar((.31+(.5+.5*Math.cos(qt))*.22*Zt)*Y),Pt.material.opacity=(.1+Math.max(0,Math.cos(qt))*.38*Zt)*(1-P.progress*.35),Pt.rotation.z=Z*.7+Pt.userData.s}),Gt.needsUpdate=!0,Xt.needsUpdate=!0}function st(M,E){if(u.group.visible=M.active,!M.active){u.lobes.forEach(G=>{G.userData.impactCaptured=!1});return}const P=new ee(16730902),w=new ee(16770990);u.lobes.forEach((G,Z)=>{const Y=Z+1,y=M.impactClock-Y,H=de.clamp((M.pathPosition-Y+.3)/.3,0,1),D=y<=0?1:1-le(de.clamp(y/.34,0,1)),I=le(H)*D,B=y<0?0:Math.exp(-y*7.5),X=y<0?0:le(de.clamp(y/.7,0,1)),j=y<0?0:le(de.clamp(y/.16,0,1)),{shell:ct,points:gt,atmosphere:ft,corona:zt,core:Ct,burst:Nt,surfaceEffects:Gt,splash:Xt,basePositions:Pt,drift:qt,splashVelocities:Zt,splashSurfaceDirections:ut,splashEnergy:xt,splashTypes:Et,splashDelays:at,splashLifetimes:At,splashSpinDrag:Wt,ripple:Rt,contactDirection:Bt,tangentA:ce,tangentB:re,ripplePhase:Se,surfaceBaseRotation:g,impactSpinOrigin:U,impactCaptured:W}=G.userData;y>=0&&!W&&(G.userData.impactSpinOrigin=E,G.userData.impactCaptured=!0);const $=G.userData.impactCaptured?Math.max(0,E-G.userData.impactSpinOrigin):0,O=E*Va+Z*.52,et=gt.geometry.getAttribute("position");for(let Ot=0;Ot<et.count;Ot+=1){const Q=Ot*3,Qt=Math.sign(Pt[Q]||1)*X*.1;et.array[Q]=Pt[Q]+qt[Q]*X*1.7+Qt,et.array[Q+1]=Pt[Q+1]+qt[Q+1]*X*1.7,et.array[Q+2]=Pt[Q+2]+qt[Q+2]*X*1.7}et.needsUpdate=!0,ct.rotation.set(g.x,g.y+O,g.z),gt.rotation.copy(ct.rotation),ft.rotation.copy(ct.rotation),zt.rotation.set(ct.rotation.x*.72,g.y+O,ct.rotation.z*.66),Gt.rotation.set(0,G.userData.impactCaptured?$*Va:0,0),G.scale.setScalar(1.42),ct.material.uniforms.uReveal.value=M.reveal,ct.material.uniforms.uImpact.value=B,ct.material.uniforms.uScar.value=j,ft.material.uniforms.uReveal.value=M.reveal;const bt=y<0?0:1-Math.exp(-y*16);ft.material.uniforms.uImpact.value=Math.max(B,bt*.34),ft.material.uniforms.uHeat.value=bt,gt.material.color.copy(P).lerp(w,B*.68),gt.material.opacity=M.reveal*(.08+B*.38+j*.08),zt.material.opacity=M.reveal*(.2+I*.08+B*.24),Ct.material.opacity=M.reveal*(B*.98+j*.045),Ct.scale.setScalar(.2+B*.46+j*.03);const Tt=Rt.geometry.getAttribute("position"),Yt=Rt.geometry.getAttribute("aAlpha"),Kt=M.rippleStrength;for(let Ot=0;Ot<Tt.count;Ot+=1){const Q=Math.floor(Ot/96),Qt=$-Q*.12,oe=Ot*3;if(!G.userData.impactCaptured||Qt<0||Qt>2.9){Yt.array[Ot]=0;continue}const ye=.06+de.clamp(Qt/2.35,0,1)*.92,me=Se[Ot]+Qt*5.8,He=Math.sin(ye),ge=Bt.x*Math.cos(ye)+(ce.x*Math.cos(me)+re.x*Math.sin(me))*He,Be=Bt.y*Math.cos(ye)+(ce.y*Math.cos(me)+re.y*Math.sin(me))*He,De=Bt.z*Math.cos(ye)+(ce.z*Math.cos(me)+re.z*Math.sin(me))*He,Le=Math.hypot(ge,Be,De),ke=.642/Math.max(.001,Le);Tt.array[oe]=ge*ke,Tt.array[oe+1]=Be*ke,Tt.array[oe+2]=De*ke;const ln=le(de.clamp(Qt/.045,0,1)),fn=1-le(de.clamp((Qt-1.2)/1.7,0,1));Yt.array[Ot]=ln*fn*Kt*(.68+B*.36)}Tt.needsUpdate=!0,Yt.needsUpdate=!0,Rt.material.uniforms.uOpacity.value=M.reveal*1.3,Rt.material.uniforms.uPointScale.value=Hi.domElement.height*.72;const Ft=Xt.geometry.getAttribute("position"),fe=Xt.geometry.getAttribute("aAlpha"),pe=M.rippleStrength;for(let Ot=0;Ot<Ft.count;Ot+=1){const Q=Ot*3,Qt=$-at[Ot],oe=At[Ot];if(!G.userData.impactCaptured||Qt<0||Qt>oe){fe.array[Ot]=0;continue}const Re=Qt/oe,ye=Et[Ot],me=xt[Ot],He=Ot*2.39996323+G.userData.phase,ge=4.6+Wt[Ot]*8.4,Be=He+Qt*ge,De=Math.cos(Be),Le=Math.sin(Be);if(ye===0){const je=.04+Qt*(.3+me*.42),rn=Math.min(1.05,je),zn=Bt.x*Math.cos(rn)+(ce.x*De+re.x*Le)*Math.sin(rn),Kn=Bt.y*Math.cos(rn)+(ce.y*De+re.y*Le)*Math.sin(rn),Ln=Bt.z*Math.cos(rn)+(ce.z*De+re.z*Le)*Math.sin(rn),jn=Math.hypot(zn,Kn,Ln),dt=(.642+(.018+me*.08*Math.exp(-Qt*1.3)))/Math.max(.001,jn);Ft.array[Q]=zn*dt,Ft.array[Q+1]=Kn*dt,Ft.array[Q+2]=Ln*dt}else if(ye===1){const je=(Ot*37+Z*17)%997/997,rn=(Ot*71+13)%101/101-.5,zn=(Ot*113+Z*29)%991/991-.5,Kn=(Ot*89+Z*11)%977/977-.5,Ln=Ot%3,jn=je*Math.PI*4.6+Ln*Math.PI*2/3,nt=.72+je*1.72+rn*.12,dt=le(de.clamp(Qt/.78,0,1)),St=jn*dt+Qt*(.5+Wt[Ot]*.85),Ut=de.lerp(.642,nt,dt)+Math.sin(jn*3+He)*.028*dt,te=.18+me*.16,Ne=Math.cos(St)*Ut,Fe=Math.sin(St)*Ut,qe=(.08+dt*.38)*(.55+je*.72),Je=zn*qe+Math.sin(jn*1.7+He+Qt*2.2)*.045*dt,en=Kn*(.06+dt*.24);Ft.array[Q]=Ne,Ft.array[Q+1]=Fe*Math.sin(te)+rn*.085*dt+Je,Ft.array[Q+2]=Fe*Math.cos(te)+en}else{const je=.018+Qt*(.12+me*.25),rn=Qt*(.78+me*.6)*Math.exp(-Qt*.16),zn=Math.sin(Be*.5)*.025*me;Ft.array[Q]=Bt.x*(.642+rn)+ce.x*De*je+re.x*Le*je,Ft.array[Q+1]=Bt.y*(.642+rn)+ce.y*De*je+re.y*Le*je+zn,Ft.array[Q+2]=Bt.z*(.642+rn)+ce.z*De*je+re.z*Le*je}const ke=le(de.clamp(Qt/.045,0,1)),ln=1-le(de.clamp((Re-.46)/.54,0,1)),fn=ye===0?.7:ye===1?.92:1.08;fe.array[Ot]=ke*ln*fn*(.42+me*.7)*pe}Ft.needsUpdate=!0,fe.needsUpdate=!0,Xt.material.uniforms.uOpacity.value=M.reveal*1.9,Xt.material.uniforms.uPointScale.value=Hi.domElement.height*.72;const Ce=le(de.clamp($/.035,0,1)),Ue=G.userData.impactCaptured?Ce*Math.exp(-$*5.2):0;Nt.material.opacity=M.reveal*Ue*.95,Nt.scale.setScalar(.28+Ue*.82)})}function yt(M,E){const P=new R().subVectors(E,M).normalize();return new Ci().setFromUnitVectors(new R(0,0,1),P)}function $t(M=!1){const E=u.lobes[0],P=E.userData.contactDirection.clone().multiplyScalar(.642),w=M?E.userData.surfaceEffects:E;w.updateWorldMatrix(!0,!1);const G=w.localToWorld(P),Z=E.getWorldPosition(new R),Y=G.clone().sub(Z).normalize();mn.updateWorldMatrix(!0,!1);const y=mn.worldToLocal(G.clone());return{worldPoint:G,localPoint:y,normalWorld:Y}}function It(M,E,P,w,G){const Z=new R(Math.sin(E*.12)*.28+P*.035,.12+Math.cos(E*.17)*.1,12.5-P*1.1+w.progress*1.7),Y=new R(0,0,0),y=le(de.clamp((M-(En-.42))/.42,0,1));if(!G.active&&y<=0){Qe.position.copy(Z),Qe.lookAt(Y);return}const H=l.group.getWorldPosition(new R),D=u.lobes[0].getWorldPosition(new R),I=D.clone().lerp(H,.34),B=I.clone().add(new R(0,.18,7.4)),X=G.active?1:y,j=G.active?le(de.clamp((G.impactClock-1)/.34,0,1)):0,ct=D,gt=ct.clone().add(new R(0,2.15,6.9));Qe.position.copy(Z).lerp(B,X).lerp(gt,j),Qe.lookAt(Y.lerp(I,X).lerp(ct,j))}function ae(M){const E=de.clamp(M/Jo.pivotLy,-.92,.92),P=Math.asin(E),w=P*.26,G=Math.cos(P),Z=Math.cos(w),Y=Math.sin(w);return new R(-E*gr,-G*Y*gr,G*Z*gr)}function he(M,E){const P=M.clone().applyEuler(ru);return E.distanceTo(P)/gr}function Me(M,E,P){const w=E.viewOffsetLy??de.lerp(Qs,Vs,E.parallaxProgress??0);Qe.position.copy(ae(w)),Qe.lookAt(0,0,0),Qe.fov!==43&&(Qe.fov=43,Qe.updateProjectionMatrix())}function Xe(M){if(!M.active){if(!l.group.userData.sceneThreeActive)return;l.group.userData.sceneThreeActive=!1,l.group.userData.sceneThreeStart=null,l.group.userData.sceneThreeStartQuaternion=null,l.group.scale.setScalar(1),l.group.userData.core.renderOrder=0,l.group.userData.core.material.depthTest=!0,l.group.userData.frozenCoreBoost.material.opacity=0;return}l.group.userData.sceneThreeActive=!0,l.group.visible=!0;const E=u.lobes[0],P=$t(!1).localPoint;if(M.pathPosition<=0){const H=E.getWorldPosition(new R),D=E.userData.contactDirection.clone().normalize(),I=H.addScaledVector(D,3.15);mn.updateWorldMatrix(!0,!1);const B=mn.worldToLocal(I);l.group.userData.sceneThreeStart=B,l.group.userData.sceneThreeStartQuaternion=yt(B,P),l.group.position.copy(B),l.group.quaternion.copy(l.group.userData.sceneThreeStartQuaternion),l.group.scale.setScalar(1),l.group.userData.core.scale.setScalar(.82),l.group.userData.core.material.color.copy(Rs),l.group.userData.core.material.opacity=.94,l.group.userData.particles.material.opacity=.88,l.group.userData.frozenCoreBoost.material.opacity=0;return}const w=l.group.userData.sceneThreeStart??l.group.position.clone(),G=l.group.userData.sceneThreeStartQuaternion??l.group.quaternion.clone(),Z=1-Math.pow(1-M.pathPosition,2.35),Y=Math.max(0,M.impactClock-1)*eu;if(M.pathPosition<1){const H=yt(w,P);l.group.position.copy(w).lerp(P,Z),l.group.quaternion.copy(G).slerp(H,Z)}else{const H=new R(0,1,0),D=Y*Va,I=E.userData.contactDirection.clone().applyAxisAngle(H,D).normalize(),B=E.getWorldPosition(new R).addScaledVector(I,.642*1.42);mn.updateWorldMatrix(!0,!1);const X=mn.worldToLocal(B),j=mn.worldToLocal(E.getWorldPosition(new R)),ct=H.clone().cross(I).normalize(),gt=X.clone().add(ct);l.group.position.copy(X).lerp(j,M.freeze),l.group.quaternion.copy(yt(X,gt))}l.group.scale.setScalar(1),l.group.userData.particles.material.opacity=.88*M.rippleStrength,l.group.userData.rings.children.forEach(H=>{const D=.12+Math.max(0,Math.cos(H.userData.s*19))*.34;H.material.opacity=D*M.rippleStrength});const y=M.pathPosition>=1?Math.exp(-Y*10):0;l.group.userData.core.scale.setScalar(.82),l.group.userData.core.renderOrder=20,ci.copy(Rs).lerp(Ba,M.freeze),l.group.userData.core.material.color.copy(ci),l.group.userData.core.material.depthTest=!1,l.group.userData.core.material.opacity=M.coreStrength*(de.lerp(.9,.56,M.freeze)+y*.1),l.group.userData.frozenCoreBoost.scale.copy(l.group.userData.core.scale),l.group.userData.frozenCoreBoost.material.color.copy(Ba),l.group.userData.frozenCoreBoost.material.opacity=M.freeze*.3}function Pe(M,E,P,w){const{group:G,screenGroup:Z,backdrop:Y,stars:y,flatStars:H,flatLines:D,depthLines:I,distanceLine:B,distanceAnchor:X,distanceLabel:j,imprint:ct,imprintHalo:gt,imprintCore:ft,imprintRings:zt,imprintTarget:Ct}=M;if(!E.active){G.visible=!1,Z.visible=!1,y.forEach(Rt=>{Rt.userData.label.style.opacity="0",Rt.userData.label.style.display="none"}),H&&H.forEach(Rt=>{Rt.material.opacity=0}),j.style.opacity="0",j.style.display="none";return}G.visible=!0,Z.visible=!0;const Nt=E.viewOffsetLy??de.lerp(Qs,Vs,E.parallaxProgress??0),Gt=ae(Nt);G.rotation.set(.05,-.12,0),Y.material.opacity=E.reveal*.68;const Xt=w.lobes[0].getWorldPosition(new R),Pt=le(de.clamp((P-sn)/1.05,0,1));ct.position.copy(Xt).lerp(Ct,Pt);const qt=y[5].position,Zt=ct.position.clone().sub(qt);Zt.lengthSq()>1e-6&&ct.position.addScaledVector(Zt.normalize(),E.imprintFade*.55),ct.rotation.z=Math.sin((P-sn)*.7)*.08;const ut=new Map,xt=new Map;y.forEach(Rt=>{const{halo:Bt,core:ce,phase:re,label:Se}=Rt.userData,g=Rt.userData.definition.brightness??1,U=Rt.userData.definition.latin.toLowerCase(),W=["mintaka","alnilam","alnitak"].includes(U)?Mg:1,$=fr[U]??fr[Rt.userData.definition.label];if($){const vt=new R(...$.target);Rt.position.copy(vt),xt.set($.target,vt);const bt=he(vt,Gt);Bt.scale.setScalar(Rt.userData.definition.scale*3.8*bt),ce.scale.setScalar(Rt.userData.definition.scale*1.5*bt)}else Rt.position.set(...Rt.userData.definition.position);const O=.9+Math.sin(P*1.6+re)*.1;ce.material.opacity=Math.min(1,E.constellationReveal*O*.96*g*hl*W),Bt.material.opacity=Math.min(1,E.constellationReveal*O*.85*g*hl*W);const et=E.constellationReveal*(.52+O*.22);Se.style.opacity=`${et}`,Se.style.display="block"}),H&&H.forEach(Rt=>{const Bt=Rt.userData.definition.latin.toLowerCase(),ce=fr[Bt]??fr[Rt.userData.definition.label];if(ce){const re=new R(...ce.start);Rt.position.copy(re),ut.set(ce.start,re);const Se=.9+Math.sin(P*1.6+Rt.userData.phase)*.1,g=Math.min(1,E.constellationReveal*Se*.1);Rt.material.opacity=g}});const Et=y[4].position;B.geometry.setFromPoints([Et,ct.position]),B.computeLineDistances(),X.position.copy(Et).lerp(ct.position,.52);const at=(Rt,Bt,ce)=>{Rt.forEach((re,Se)=>{const g=Se*.075,U=le(de.clamp((E.lineReveal-g)/.24,0,1)),W=re.userData.isUpperTriangle?.62:.5,$=U*W*ce;re.material.opacity=$;const O=re.userData.pathPoints;if(O){const et=O.map(vt=>Bt.get(vt)??new R(...vt));re.geometry.dispose(),re.geometry=b(et,fl*re.userData.emphasis,re.userData.layerName==="depth"?Gt:null)}})};at(D,ut,E.flatLineOpacity),at(I,xt,E.depthLineOpacity),B.material.opacity=E.distanceReveal*.54,j.style.opacity=`${E.distanceReveal*.7}`,j.style.display="block";const At=E.reveal*(1-E.imprintFade*.72);ft.material.opacity=At*.96,gt.material.opacity=At*.28,ft.scale.setScalar(.62+Math.sin(P*1.4)*.018),gt.scale.setScalar(1.65+Math.sin(P*1.1)*.06);const Wt=Math.exp(-Math.pow((1-E.progress)/.012,2));zt.forEach((Rt,Bt)=>{const ce=P*(1.8-Bt*.22)+Rt.userData.phase;Rt.scale.setScalar(1+Math.sin(ce)*.04),Rt.material.opacity=Math.min(1,At*(.16-Bt*.025)+Wt*(.28-Bt*.035))})}function Ze(M,E,P,w){if(!E.active){M.group.visible=!1;return}w.group.visible=!0,M.group.visible=!0,w.screenGroup.visible=!1,w.stars.forEach(D=>{D.userData.halo.material.opacity=0,D.userData.core.material.opacity=0,D.userData.label.style.opacity="0",D.userData.label.style.display="none"}),w.flatStars.forEach(D=>{D.material.opacity=0}),w.flatLines.forEach(D=>{D.material.opacity=0}),w.depthLines.forEach(D=>{D.material.opacity=0}),w.distanceLine.material.opacity=0,w.distanceLabel.style.opacity="0",w.distanceLabel.style.display="none";const G=1-le(de.clamp((P-di)/.72,0,1));w.imprintCore.material.opacity=G*.82,w.imprintHalo.material.opacity=G*.24,w.imprintRings.forEach((D,I)=>{D.material.opacity=G*(.18-I*.025)});const Z=le(de.clamp(E.distributedLight,0,1));M.group.position.copy(w.imprintTarget),M.group.position.y+=E.lift*.3,M.group.rotation.set(E.rotation*.3,E.rotation,E.rotation*.16);const Y=M.points.material.uniforms,y=le(de.clamp(E.networkReveal,0,1));Y.uAssemble.value=le(de.clamp(E.dispersal,0,1)),Y.uHopClock.value=E.hopClock,Y.uHopEnv.value=E.hop,Y.uLight.value=Z,Y.uTime.value=P,Y.uOpacity.value=Math.max(.32,.7-y*.34+Z*.42);const H=M.lines.material.uniforms;H.uReveal.value=y,H.uColorShift.value=le(de.clamp(E.lineColorShift,0,1)),H.uOpacity.value=Math.min(1,y*1.05)}function N(M){const E=cl(M),P=E.active&&M<=ti;if(Is.classList.toggle("is-visible",P),!P)return;const w=_g(E.progress);kg.textContent=Math.round(w.sourceFrequency),Gg.textContent=w.velocityRatio.toFixed(2),Wg.textContent=Math.round(w.observedFrequency);const G=l.group.getWorldPosition(new R).project(Qe),Z=de.clamp((G.x*.5+.5)*100+7,21,79),Y=de.clamp((-G.y*.5+.5)*100-5,27,69),y=le(Math.min(1,E.progress/.08)),H=le(Math.min(1,(1-E.progress)/.1));Is.style.left=`${Z}%`,Is.style.top=`${Y}%`,Is.style.opacity=`${y*H}`,Hg.style.strokeDashoffset=`${96-E.progress*192}`}function vn(M,E=M){const P=it?Math.min(In,Math.max(0,M)):Math.min(In,Math.floor(M*Mr)/Mr),w=ll(P),G=rg(P),Z=ag(P),Y=gg(P),y=G.active&&P>En,H=y?G:{...G,active:!1},D=Z.active&&P>js,I=D?Z:{...Z,active:!1},B=Y.active&&P>di;Cg.style.opacity=D||B?"1":"0",zg.style.opacity=B?"0.05":"";const X=P>=ti?w.waveTime:P,j=de.smoothstep(P,En,En+.52),ct=1-j,gt=(1-w.progress*.46)*ct,ft=1-de.smoothstep(w.progress,0,.12),zt=E*2,Ct=Math.min(K0-1,Math.floor(P*Mr));if(Ct!==m){m=Ct,Rg.textContent=eg(P),Pg.textContent=B?"三维结构示意 · Voronoi 泡沫（空洞-壁-丝-节点）":D?"声学印记 · d_BAO ≈ 147 Mpc · 星系间距":y?"碰撞冲量  J = ∫F dt = Δp · 声痕冻结":P>ti?"声学俘获 · x(t) = xw + (x₀ − xw)e^(−λt)":P>=4.3?"纵波位移  ξ(x,t) = A sin(kx - ωt)":"原初光子 · 重子 · 声压峰";const at=B,At=D&&P>sn+.25,Wt=y&&P>En+.25,Rt=P>=ti+.3;Ig.textContent=at?"SCENE 05 / COSMIC WEB":At?"SCENE 04 / DISTANCE IMPRINT":Wt?"SCENE 03 / SIXFOLD CORE":Rt?"SCENE 02 / RECOMBINATION":"SCENE 01 / PRIMORDIAL PLASMA",Ug.textContent=at?"回声，被宇宙织成一张网。":At?"回声，写进星系之间。":Wt?"一声，撞向六合。":Rt?"光与物质，从此分离。":"很久以前，声音还没有名字。",Dg.textContent=`${J(P)} / 00:36.667`,Ng.style.opacity=B?"1":"0",Og.style.opacity=B?"1":"0",B&&(Fg.textContent=Y.lineColorShift>.2?"t ≈ 118.5 亿年":"t ≈ 2.4 亿年")}const Nt=ol(P),Gt=new Set(Nt.nodes),Xt=ng(P,Nt.nodes,s.length,o.length),Pt=new Set(Xt.main);mn.rotation.x=Math.sin(X*.2)*.018,mn.rotation.y=X*.035,mn.rotation.z=Math.sin(X*.17)*.012;const qt=de.smoothstep(P,.85,1.25);e.children.forEach(at=>{at.material.uniforms.uTime.value=E,at.material.uniforms.uReveal.value=qt,at.material.uniforms.uAbsorbProgress.value=w.absorption});const Zt=de.lerp(1,.18,j);n.visible=w.progress>0,n.material.opacity=de.smoothstep(w.progress,.04,.34)*.28*Zt;const ut=de.smoothstep(w.progress,.05,.18),xt=1-de.smoothstep(w.progress,.84,.97);dl.style.opacity=`${ut*xt}`,dl.style.transform=`translateY(${(1-ut)*8}px)`,Bg.textContent=w.baryonVelocity.toFixed(3),pl.style.opacity=`${y?G.reveal*(1-G.freeze*.35):0}`,pl.style.transform=`translateY(${(1-G.reveal)*8}px)`,Vg.textContent=String(G.completedImpacts).padStart(2,"0"),s.forEach(({group:at,definition:At},Wt)=>{const Rt=Gt.has(Wt),Bt=Rt?1-w.progress*.82:0,ce=Rt?1.18:.9,re=de.lerp(ce,.78,w.progress);if(at.scale.lerp(new R(re,re,re),.08),at.position.x=At.position[0]*(1+w.progress*.08),at.position.y=At.position[1]*(1+w.progress*.06)+Math.sin(X*.32+At.phase)*.05*w.baryonVelocity,at.position.z=At.position[2]-w.progress*.45,at.userData.isChladni){at.rotation.x=.58+Math.sin(zt*.52+At.phase)*.24,at.rotation.y=At.phase+zt*At.spin*1.15,at.rotation.z=At.phase*.18+zt*At.spin*.62;const g=At.boundary==="volume";at.userData.pattern.material.opacity=(g?.5+Bt*.38:.56+Bt*.38)*gt,at.userData.glow.material.opacity=(g?.01+Bt*.035:.08+Bt*.2)*gt,at.userData.network&&(at.userData.network.material.opacity=(g?.16+Bt*.16:.1+Bt*.2)*gt),at.userData.outline.material.opacity=(g?.08+Bt*.16:.07+Bt*.2)*gt,at.userData.vertexPoints&&(at.userData.vertexPoints.material.opacity=(.58+Bt*.36)*gt)}else at.rotation.y=At.phase+zt*At.spin,at.rotation.x=Math.sin(zt*.6+At.phase)*.14,at.userData.halo.material.opacity=(.07+Bt*.16+Math.sin(E*1.8+At.phase)*.015)*gt,at.userData.mantle.material.opacity=(.22+Bt*.24)*gt,at.userData.core.material.opacity=(.6+Bt*.32)*gt,at.userData.particles.material.opacity=(.44+Bt*.4)*gt,at.userData.ring.material.opacity=(.12+Bt*.26)*gt;const Se=Pt.has(Wt);p[Wt].classList.toggle("is-focus",Rt&&Se),p[Wt].style.opacity=Se?`${(Rt?1:.58)*ft}`:"0"}),o.forEach(({group:at,definition:At},Wt)=>{const Rt=.82+Math.sin(X*1.35+at.userData.phase)*.18*w.baryonVelocity;at.scale.setScalar(Rt*de.lerp(1,.72,w.progress)),at.position.x=At.position[0]*(1+w.progress*.14),at.position.y=At.position[1]*(1+w.progress*.11),at.position.z=At.position[2]-w.progress*.55,at.userData.companions.rotation.z=zt*(.12+Wt%3*.035),at.userData.companions.rotation.y=zt*.08+at.userData.phase,at.userData.core.material.opacity=(.68+Rt*.16)*gt,at.userData.halo.material.opacity=(.04+Rt*.07)*gt,_[Wt].style.opacity=Wt===Xt.minor?`${(.46+Rt*.2)*ft}`:"0"}),al.forEach(([at,At],Wt)=>{const Rt=c[Wt],Bt=s[Nt.nodes[at]].group.position,ce=s[Nt.nodes[At]].group.position,re=Rt.geometry.getAttribute("position");re.setXYZ(0,Bt.x,Bt.y,Bt.z),re.setXYZ(1,ce.x,ce.y,ce.z),re.needsUpdate=!0,Rt.material.opacity=de.smoothstep(P,.12,.72)*.46*ft,Rt.computeLineDistances()}),st(H,E),ze(P),Xe(H),Pe(f,I,P,u),Ze(d,B?Y:{...Y,active:!1},P,f),e.children.forEach(at=>{at.material.uniforms.uAbsorbTarget.value.copy(l.group.position)});const Et=ig(P);D?Me(P,I):B?(Qe.position.copy(ae(Vs)),Qe.lookAt(0,0,0)):It(P,X,Et,w,H),Qe.updateMatrixWorld(),N(P),Ae(),we(f,I)}function Ae(){s.forEach(({group:M},E)=>{jt(M,p[E])}),o.forEach(({group:M},E)=>{jt(M,_[E])})}function we(M,E){E.active&&(M.stars.forEach(P=>{jt(P,P.userData.label)}),jt(M.distanceAnchor,M.distanceLabel))}function jt(M,E){const P=M.getWorldPosition(new R).project(Qe),w=P.z<1&&P.x>-1.1&&P.x<1.1&&P.y>-1.1&&P.y<1.1;E.style.display=w?"block":"none",w&&(E.style.left=`${(P.x*.5+.5)*100}%`,E.style.top=`${(-P.y*.5+.5)*100}%`)}function le(M){return M*M*(3-2*M)}function ne(M){let E=M>>>0;return()=>(E=E*1664525+1013904223>>>0,E/4294967296)}const A=(()=>{const M=ne(20260822);return Array.from({length:230},()=>({x:M(),y:M(),r:M()*1.1+.15,alpha:M()*.53+.12}))})();function v(){const M=Hr.clientWidth,E=Hr.clientHeight;if(!M||!E)return;const P=Math.min(window.devicePixelRatio||1,2);Hr.width=Math.round(M*P),Hr.height=Math.round(E*P),li.setTransform(P,0,0,P,0,0),li.clearRect(0,0,M,E);const w=li.createRadialGradient(M*.54,E*.47,0,M*.54,E*.47,Math.max(M,E)*.75);w.addColorStop(0,"rgba(22, 22, 27, .20)"),w.addColorStop(.58,"rgba(5, 6, 9, .16)"),w.addColorStop(1,"rgba(2, 3, 5, .72)"),li.fillStyle=w,li.fillRect(0,0,M,E),A.forEach(G=>{li.beginPath(),li.fillStyle=`rgba(220, 218, 211, ${G.alpha})`,li.arc(G.x*M,G.y*E,G.r,0,Math.PI*2),li.fill()})}function J(M){return`00:${M.toFixed(2).padStart(5,"0")}`}function lt(){const M=Io.clientWidth,E=Io.clientHeight,P=Math.min(window.devicePixelRatio||1,2,3840/M,2160/E);Hi.setPixelRatio(P),Hi.setSize(M,E,!1),Qe.aspect=M/E,Qe.updateProjectionMatrix(),d.points.material.uniforms.uPixelRatio.value=P,v()}const pt=Number(new URLSearchParams(window.location.search).get("t")),it=Number.isFinite(pt)&&pt>=0;let Vt=it?Math.min(pt,In):0;function wt(M){x=M,Ls.innerHTML=`<i data-lucide="${M?"pause":"play"}"></i>`,Ls.setAttribute("aria-label",M?"暂停":"播放"),Ls.title=M?"暂停":"播放",tu({icons:{Play:jl,Pause:Kl,RotateCcw:Ql}})}Ls.addEventListener("click",async()=>{if(x){An.pause(),wt(!1);return}(Vt>=In-.02||An.currentTime>=In-.02)&&(An.currentTime=0,Vt=0);try{await An.play()}catch(M){console.warn("音频播放受阻，已启用自动画面时钟:",M)}wt(!0)}),Lg.addEventListener("click",()=>{An.pause(),An.currentTime=0,Vt=0,wt(!1),vn(0,be)}),An.addEventListener("timeupdate",()=>{An.currentTime>=In&&(An.pause(),An.currentTime=In,Vt=In,wt(!1))}),window.addEventListener("resize",lt),lt(),it&&(An.pause(),wt(!1)),vn(Vt);const kt=new of;let be=0;function Mt(){const M=Math.min(kt.getDelta(),.05);be+=M,x&&(!An.paused&&An.currentTime>0?Vt=An.currentTime:Vt+=M,Vt>=In&&(Vt=In,An.pause(),wt(!1)));const E=Math.min(Vt,In);vn(E,be),Hi.render(Sr,Qe),requestAnimationFrame(Mt)}Mt()}Xg();
