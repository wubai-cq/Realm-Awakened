(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const io="172",Pl=0,Mo=1,Dl=2,Vc=1,Ll=2,kn=3,oi=0,cn=1,bn=2,si=0,Ei=1,Wt=2,So=3,yo=4,Ul=5,gi=100,Il=101,Nl=102,Fl=103,Ol=104,Bl=200,zl=201,Vl=202,Hl=203,fa=204,da=205,Gl=206,kl=207,Wl=208,Xl=209,ql=210,Yl=211,$l=212,Zl=213,Kl=214,pa=0,ma=1,ga=2,Ki=3,_a=4,va=5,xa=6,Ma=7,Hc=0,Jl=1,jl=2,ai=0,Ql=1,tu=2,eu=3,nu=4,iu=5,ru=6,su=7,Gc=300,Ji=301,ji=302,Sa=303,ya=304,As=306,Ea=1e3,Si=1001,Ta=1002,Cn=1003,au=1004,Rr=1005,Un=1006,Cs=1007,yi=1008,$n=1009,kc=1010,Wc=1011,yr=1012,ro=1013,Ti=1014,Wn=1015,Tr=1016,so=1017,ao=1018,Qi=1020,Xc=35902,qc=1021,Yc=1022,Rn=1023,$c=1024,Zc=1025,$i=1026,tr=1027,Kc=1028,oo=1029,Jc=1030,co=1031,lo=1033,cs=33776,ls=33777,us=33778,hs=33779,ba=35840,Aa=35841,wa=35842,Ra=35843,Ca=36196,Pa=37492,Da=37496,La=37808,Ua=37809,Ia=37810,Na=37811,Fa=37812,Oa=37813,Ba=37814,za=37815,Va=37816,Ha=37817,Ga=37818,ka=37819,Wa=37820,Xa=37821,fs=36492,qa=36494,Ya=36495,jc=36283,$a=36284,Za=36285,Ka=36286,ou=3200,cu=3201,lu=0,uu=1,ri="",nn="srgb",er="srgb-linear",gs="linear",de="srgb",Ri=7680,Eo=519,hu=512,fu=513,du=514,Qc=515,pu=516,mu=517,gu=518,_u=519,Ja=35044,To=35048,bo="300 es",Xn=2e3,_s=2001;class ir{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ao=1234567;const gr=Math.PI/180,Er=180/Math.PI;function qn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function uo(i,t){return(i%t+t)%t}function vu(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function xu(i,t,e){return i!==t?(e-i)/(t-i):0}function _r(i,t,e){return(1-e)*i+e*t}function Mu(i,t,e,n){return _r(i,t,1-Math.exp(-e*n))}function Su(i,t=1){return t-Math.abs(uo(i,t*2)-t)}function yu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Eu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Tu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function bu(i,t){return i+Math.random()*(t-i)}function Au(i){return i*(.5-Math.random())}function wu(i){i!==void 0&&(Ao=i);let t=Ao+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ru(i){return i*gr}function Cu(i){return i*Er}function Pu(i){return(i&i-1)===0&&i!==0}function Du(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Uu(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),u=s((t+n)/2),l=a((t+n)/2),d=s((t-n)/2),p=a((t-n)/2),m=s((n-t)/2),v=a((n-t)/2);switch(r){case"XYX":i.set(o*l,c*d,c*p,o*u);break;case"YZY":i.set(c*p,o*l,c*d,o*u);break;case"ZXZ":i.set(c*d,c*p,o*l,o*u);break;case"XZX":i.set(o*l,c*v,c*m,o*u);break;case"YXY":i.set(c*m,o*l,c*v,o*u);break;case"ZYZ":i.set(c*v,c*m,o*l,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function An(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ee={DEG2RAD:gr,RAD2DEG:Er,generateUUID:qn,clamp:jt,euclideanModulo:uo,mapLinear:vu,inverseLerp:xu,lerp:_r,damp:Mu,pingpong:Su,smoothstep:yu,smootherstep:Eu,randInt:Tu,randFloat:bu,randFloatSpread:Au,seededRandom:wu,degToRad:Ru,radToDeg:Cu,isPowerOfTwo:Pu,ceilPowerOfTwo:Du,floorPowerOfTwo:Lu,setQuaternionFromProperEuler:Uu,normalize:he,denormalize:An};class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,r,s,a,o,c,u){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,u)}set(t,e,n,r,s,a,o,c,u){const l=this.elements;return l[0]=t,l[1]=r,l[2]=o,l[3]=e,l[4]=s,l[5]=c,l[6]=n,l[7]=a,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],l=n[4],d=n[7],p=n[2],m=n[5],v=n[8],M=r[0],g=r[3],f=r[6],C=r[1],A=r[4],y=r[7],H=r[2],F=r[5],U=r[8];return s[0]=a*M+o*C+c*H,s[3]=a*g+o*A+c*F,s[6]=a*f+o*y+c*U,s[1]=u*M+l*C+d*H,s[4]=u*g+l*A+d*F,s[7]=u*f+l*y+d*U,s[2]=p*M+m*C+v*H,s[5]=p*g+m*A+v*F,s[8]=p*f+m*y+v*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],l=t[8];return e*a*l-e*o*u-n*s*l+n*o*c+r*s*u-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],l=t[8],d=l*a-o*u,p=o*c-l*s,m=u*s-a*c,v=e*d+n*p+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=d*M,t[1]=(r*u-l*n)*M,t[2]=(o*n-r*a)*M,t[3]=p*M,t[4]=(l*e-r*c)*M,t[5]=(r*s-o*e)*M,t[6]=m*M,t[7]=(n*c-u*e)*M,t[8]=(a*e-n*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+t,-r*u,r*c,-r*(-u*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ps.makeScale(t,e)),this}rotate(t){return this.premultiply(Ps.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ps.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ps=new Yt;function tl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Iu(){const i=vs("canvas");return i.style.display="block",i}const wo={};function qi(i){i in wo||(wo[i]=!0,console.warn(i))}function Nu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Fu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ou(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ro=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Co=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bu(){const i={enabled:!0,workingColorSpace:er,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===de&&(r.r=Yn(r.r),r.g=Yn(r.g),r.b=Yn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(r.r=Zi(r.r),r.g=Zi(r.g),r.b=Zi(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ri?gs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[er]:{primaries:t,whitePoint:n,transfer:gs,toXYZ:Ro,fromXYZ:Co,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:n,transfer:de,toXYZ:Ro,fromXYZ:Co,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}const oe=Bu();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ci;class zu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=vs("canvas")),Ci.width=t.width,Ci.height=t.height;const n=Ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vu=0;class el{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ds(r[a].image)):s.push(Ds(r[a]))}else s=Ds(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ds(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hu=0;class rn extends ir{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=Si,r=Si,s=Un,a=yi,o=Rn,c=$n,u=rn.DEFAULT_ANISOTROPY,l=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=qn(),this.name="",this.source=new el(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ea:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ea:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Gc;rn.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,e=0,n=0,r=1){Te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,u=c[0],l=c[4],d=c[8],p=c[1],m=c[5],v=c[9],M=c[2],g=c[6],f=c[10];if(Math.abs(l-p)<.01&&Math.abs(d-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(l+p)<.1&&Math.abs(d+M)<.1&&Math.abs(v+g)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(u+1)/2,y=(m+1)/2,H=(f+1)/2,F=(l+p)/4,U=(d+M)/4,k=(v+g)/4;return A>y&&A>H?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=F/n,s=U/n):y>H?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=F/r,s=k/r):H<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(H),n=U/s,r=k/s),this.set(n,r,s,e),this}let C=Math.sqrt((g-v)*(g-v)+(d-M)*(d-M)+(p-l)*(p-l));return Math.abs(C)<.001&&(C=1),this.x=(g-v)/C,this.y=(d-M)/C,this.z=(p-l)/C,this.w=Math.acos((u+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gu extends ir{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new rn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new el(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Gu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nl extends rn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ku extends rn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],u=n[r+1],l=n[r+2],d=n[r+3];const p=s[a+0],m=s[a+1],v=s[a+2],M=s[a+3];if(o===0){t[e+0]=c,t[e+1]=u,t[e+2]=l,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=v,t[e+3]=M;return}if(d!==M||c!==p||u!==m||l!==v){let g=1-o;const f=c*p+u*m+l*v+d*M,C=f>=0?1:-1,A=1-f*f;if(A>Number.EPSILON){const H=Math.sqrt(A),F=Math.atan2(H,f*C);g=Math.sin(g*F)/H,o=Math.sin(o*F)/H}const y=o*C;if(c=c*g+p*y,u=u*g+m*y,l=l*g+v*y,d=d*g+M*y,g===1-o){const H=1/Math.sqrt(c*c+u*u+l*l+d*d);c*=H,u*=H,l*=H,d*=H}}t[e]=c,t[e+1]=u,t[e+2]=l,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],u=n[r+2],l=n[r+3],d=s[a],p=s[a+1],m=s[a+2],v=s[a+3];return t[e]=o*v+l*d+c*m-u*p,t[e+1]=c*v+l*p+u*d-o*m,t[e+2]=u*v+l*m+o*p-c*d,t[e+3]=l*v-o*d-c*p-u*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(n/2),l=o(r/2),d=o(s/2),p=c(n/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=p*l*d+u*m*v,this._y=u*m*d-p*l*v,this._z=u*l*v+p*m*d,this._w=u*l*d-p*m*v;break;case"YXZ":this._x=p*l*d+u*m*v,this._y=u*m*d-p*l*v,this._z=u*l*v-p*m*d,this._w=u*l*d+p*m*v;break;case"ZXY":this._x=p*l*d-u*m*v,this._y=u*m*d+p*l*v,this._z=u*l*v+p*m*d,this._w=u*l*d-p*m*v;break;case"ZYX":this._x=p*l*d-u*m*v,this._y=u*m*d+p*l*v,this._z=u*l*v-p*m*d,this._w=u*l*d+p*m*v;break;case"YZX":this._x=p*l*d+u*m*v,this._y=u*m*d+p*l*v,this._z=u*l*v-p*m*d,this._w=u*l*d-p*m*v;break;case"XZY":this._x=p*l*d-u*m*v,this._y=u*m*d-p*l*v,this._z=u*l*v+p*m*d,this._w=u*l*d+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],u=e[2],l=e[6],d=e[10],p=n+o+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(l-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(l-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+l)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+l)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,u=e._z,l=e._w;return this._x=n*l+a*o+r*u-s*c,this._y=r*l+a*c+s*o-n*u,this._z=s*l+a*u+n*c-r*o,this._w=a*l-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const u=Math.sqrt(c),l=Math.atan2(u,o),d=Math.sin((1-e)*l)/u,p=Math.sin(e*l)/u;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,n=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Po.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Po.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,u=2*(a*r-o*n),l=2*(o*e-s*r),d=2*(s*n-a*e);return this.x=e+c*u+a*d-o*l,this.y=n+c*l+o*u-s*d,this.z=r+c*d+s*l-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ls.copy(this).projectOnVector(t),this.sub(Ls)}reflect(t){return this.sub(Ls.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ls=new w,Po=new rr;class br{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),Pr.subVectors(this.max,ar),Pi.subVectors(t.a,ar),Di.subVectors(t.b,ar),Li.subVectors(t.c,ar),Jn.subVectors(Di,Pi),jn.subVectors(Li,Di),ci.subVectors(Pi,Li);let e=[0,-Jn.z,Jn.y,0,-jn.z,jn.y,0,-ci.z,ci.y,Jn.z,0,-Jn.x,jn.z,0,-jn.x,ci.z,0,-ci.x,-Jn.y,Jn.x,0,-jn.y,jn.x,0,-ci.y,ci.x,0];return!Us(e,Pi,Di,Li,Pr)||(e=[1,0,0,0,1,0,0,0,1],!Us(e,Pi,Di,Li,Pr))?!1:(Dr.crossVectors(Jn,jn),e=[Dr.x,Dr.y,Dr.z],Us(e,Pi,Di,Li,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fn=[new w,new w,new w,new w,new w,new w,new w,new w],Mn=new w,Cr=new br,Pi=new w,Di=new w,Li=new w,Jn=new w,jn=new w,ci=new w,ar=new w,Pr=new w,Dr=new w,li=new w;function Us(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){li.fromArray(i,s);const o=r.x*Math.abs(li.x)+r.y*Math.abs(li.y)+r.z*Math.abs(li.z),c=t.dot(li),u=e.dot(li),l=n.dot(li);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>o)return!1}return!0}const Wu=new br,or=new w,Is=new w;class Ar{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wu.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);const e=or.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(or,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Is.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(Is)),this.expandByPoint(or.copy(t.center).sub(Is))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new w,Ns=new w,Lr=new w,Qn=new w,Fs=new w,Ur=new w,Os=new w;class ho{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ns.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(Ns);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Lr),o=Qn.dot(this.direction),c=-Qn.dot(Lr),u=Qn.lengthSq(),l=Math.abs(1-a*a);let d,p,m,v;if(l>0)if(d=a*c-o,p=a*o-c,v=s*l,d>=0)if(p>=-v)if(p<=v){const M=1/l;d*=M,p*=M,m=d*(d+a*p+2*o)+p*(a*d+p+2*c)+u}else p=s,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*c)+u;else p=-s,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*c)+u;else p<=-v?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+p*(p+2*c)+u):p<=v?(d=0,p=Math.min(Math.max(-s,-c),s),m=p*(p+2*c)+u):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+p*(p+2*c)+u);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ns).addScaledVector(Lr,p),m}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),r=On.dot(On)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const u=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,p=this.origin;return u>=0?(n=(t.min.x-p.x)*u,r=(t.max.x-p.x)*u):(n=(t.max.x-p.x)*u,r=(t.min.x-p.x)*u),l>=0?(s=(t.min.y-p.y)*l,a=(t.max.y-p.y)*l):(s=(t.max.y-p.y)*l,a=(t.min.y-p.y)*l),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,r,s){Fs.subVectors(e,t),Ur.subVectors(n,t),Os.crossVectors(Fs,Ur);let a=this.direction.dot(Os),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,t);const c=o*this.direction.dot(Ur.crossVectors(Qn,Ur));if(c<0)return null;const u=o*this.direction.dot(Fs.cross(Qn));if(u<0||c+u>a)return null;const l=-o*Qn.dot(Os);return l<0?null:this.at(l/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(t,e,n,r,s,a,o,c,u,l,d,p,m,v,M,g){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,u,l,d,p,m,v,M,g)}set(t,e,n,r,s,a,o,c,u,l,d,p,m,v,M,g){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=u,f[6]=l,f[10]=d,f[14]=p,f[3]=m,f[7]=v,f[11]=M,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ui.setFromMatrixColumn(t,0).length(),s=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),l=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const p=a*l,m=a*d,v=o*l,M=o*d;e[0]=c*l,e[4]=-c*d,e[8]=u,e[1]=m+v*u,e[5]=p-M*u,e[9]=-o*c,e[2]=M-p*u,e[6]=v+m*u,e[10]=a*c}else if(t.order==="YXZ"){const p=c*l,m=c*d,v=u*l,M=u*d;e[0]=p+M*o,e[4]=v*o-m,e[8]=a*u,e[1]=a*d,e[5]=a*l,e[9]=-o,e[2]=m*o-v,e[6]=M+p*o,e[10]=a*c}else if(t.order==="ZXY"){const p=c*l,m=c*d,v=u*l,M=u*d;e[0]=p-M*o,e[4]=-a*d,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*l,e[9]=M-p*o,e[2]=-a*u,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const p=a*l,m=a*d,v=o*l,M=o*d;e[0]=c*l,e[4]=v*u-m,e[8]=p*u+M,e[1]=c*d,e[5]=M*u+p,e[9]=m*u-v,e[2]=-u,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const p=a*c,m=a*u,v=o*c,M=o*u;e[0]=c*l,e[4]=M-p*d,e[8]=v*d+m,e[1]=d,e[5]=a*l,e[9]=-o*l,e[2]=-u*l,e[6]=m*d+v,e[10]=p-M*d}else if(t.order==="XZY"){const p=a*c,m=a*u,v=o*c,M=o*u;e[0]=c*l,e[4]=-d,e[8]=u*l,e[1]=p*d+M,e[5]=a*l,e[9]=m*d-v,e[2]=v*d-m,e[6]=o*l,e[10]=M*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xu,t,qu)}lookAt(t,e,n){const r=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ti.crossVectors(n,ln),ti.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ti.crossVectors(n,ln)),ti.normalize(),Ir.crossVectors(ln,ti),r[0]=ti.x,r[4]=Ir.x,r[8]=ln.x,r[1]=ti.y,r[5]=Ir.y,r[9]=ln.y,r[2]=ti.z,r[6]=Ir.z,r[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],l=n[1],d=n[5],p=n[9],m=n[13],v=n[2],M=n[6],g=n[10],f=n[14],C=n[3],A=n[7],y=n[11],H=n[15],F=r[0],U=r[4],k=r[8],T=r[12],S=r[1],B=r[5],nt=r[9],J=r[13],ht=r[2],ft=r[6],st=r[10],dt=r[14],j=r[3],Mt=r[7],Rt=r[11],Ot=r[15];return s[0]=a*F+o*S+c*ht+u*j,s[4]=a*U+o*B+c*ft+u*Mt,s[8]=a*k+o*nt+c*st+u*Rt,s[12]=a*T+o*J+c*dt+u*Ot,s[1]=l*F+d*S+p*ht+m*j,s[5]=l*U+d*B+p*ft+m*Mt,s[9]=l*k+d*nt+p*st+m*Rt,s[13]=l*T+d*J+p*dt+m*Ot,s[2]=v*F+M*S+g*ht+f*j,s[6]=v*U+M*B+g*ft+f*Mt,s[10]=v*k+M*nt+g*st+f*Rt,s[14]=v*T+M*J+g*dt+f*Ot,s[3]=C*F+A*S+y*ht+H*j,s[7]=C*U+A*B+y*ft+H*Mt,s[11]=C*k+A*nt+y*st+H*Rt,s[15]=C*T+A*J+y*dt+H*Ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],u=t[13],l=t[2],d=t[6],p=t[10],m=t[14],v=t[3],M=t[7],g=t[11],f=t[15];return v*(+s*c*d-r*u*d-s*o*p+n*u*p+r*o*m-n*c*m)+M*(+e*c*m-e*u*p+s*a*p-r*a*m+r*u*l-s*c*l)+g*(+e*u*d-e*o*m-s*a*d+n*a*m+s*o*l-n*u*l)+f*(-r*o*l-e*c*d+e*o*p+r*a*d-n*a*p+n*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],l=t[8],d=t[9],p=t[10],m=t[11],v=t[12],M=t[13],g=t[14],f=t[15],C=d*g*u-M*p*u+M*c*m-o*g*m-d*c*f+o*p*f,A=v*p*u-l*g*u-v*c*m+a*g*m+l*c*f-a*p*f,y=l*M*u-v*d*u+v*o*m-a*M*m-l*o*f+a*d*f,H=v*d*c-l*M*c-v*o*p+a*M*p+l*o*g-a*d*g,F=e*C+n*A+r*y+s*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return t[0]=C*U,t[1]=(M*p*s-d*g*s-M*r*m+n*g*m+d*r*f-n*p*f)*U,t[2]=(o*g*s-M*c*s+M*r*u-n*g*u-o*r*f+n*c*f)*U,t[3]=(d*c*s-o*p*s-d*r*u+n*p*u+o*r*m-n*c*m)*U,t[4]=A*U,t[5]=(l*g*s-v*p*s+v*r*m-e*g*m-l*r*f+e*p*f)*U,t[6]=(v*c*s-a*g*s-v*r*u+e*g*u+a*r*f-e*c*f)*U,t[7]=(a*p*s-l*c*s+l*r*u-e*p*u-a*r*m+e*c*m)*U,t[8]=y*U,t[9]=(v*d*s-l*M*s-v*n*m+e*M*m+l*n*f-e*d*f)*U,t[10]=(a*M*s-v*o*s+v*n*u-e*M*u-a*n*f+e*o*f)*U,t[11]=(l*o*s-a*d*s-l*n*u+e*d*u+a*n*m-e*o*m)*U,t[12]=H*U,t[13]=(l*M*r-v*d*r+v*n*p-e*M*p-l*n*g+e*d*g)*U,t[14]=(v*o*r-a*M*r-v*n*c+e*M*c+a*n*g-e*o*g)*U,t[15]=(a*d*r-l*o*r+l*n*c-e*d*c-a*n*p+e*o*p)*U,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,u=s*a,l=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,l*o+n,l*c-r*a,0,u*c-r*o,l*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,u=s+s,l=a+a,d=o+o,p=s*u,m=s*l,v=s*d,M=a*l,g=a*d,f=o*d,C=c*u,A=c*l,y=c*d,H=n.x,F=n.y,U=n.z;return r[0]=(1-(M+f))*H,r[1]=(m+y)*H,r[2]=(v-A)*H,r[3]=0,r[4]=(m-y)*F,r[5]=(1-(p+f))*F,r[6]=(g+C)*F,r[7]=0,r[8]=(v+A)*U,r[9]=(g-C)*U,r[10]=(1-(p+M))*U,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ui.set(r[0],r[1],r[2]).length();const a=Ui.set(r[4],r[5],r[6]).length(),o=Ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Sn.copy(this);const u=1/s,l=1/a,d=1/o;return Sn.elements[0]*=u,Sn.elements[1]*=u,Sn.elements[2]*=u,Sn.elements[4]*=l,Sn.elements[5]*=l,Sn.elements[6]*=l,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,e.setFromRotationMatrix(Sn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Xn){const c=this.elements,u=2*s/(e-t),l=2*s/(n-r),d=(e+t)/(e-t),p=(n+r)/(n-r);let m,v;if(o===Xn)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===_s)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=l,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Xn){const c=this.elements,u=1/(e-t),l=1/(n-r),d=1/(a-s),p=(e+t)*u,m=(n+r)*l;let v,M;if(o===Xn)v=(a+s)*d,M=-2*d;else if(o===_s)v=s*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=M,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ui=new w,Sn=new Se,Xu=new w(0,0,0),qu=new w(1,1,1),ti=new w,Ir=new w,ln=new w,Do=new Se,Lo=new rr;class Zn{constructor(t=0,e=0,n=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],l=r[9],d=r[2],p=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Do.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Do,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lo.setFromEuler(this),this.setFromQuaternion(Lo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class il{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yu=0;const Uo=new w,Ii=new rr,Bn=new Se,Nr=new w,cr=new w,$u=new w,Zu=new rr,Io=new w(1,0,0),No=new w(0,1,0),Fo=new w(0,0,1),Oo={type:"added"},Ku={type:"removed"},Ni={type:"childadded",child:null},Bs={type:"childremoved",child:null};class Be extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new w,e=new Zn,n=new rr,r=new w(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Se},normalMatrix:{value:new Yt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(Io,t)}rotateY(t){return this.rotateOnAxis(No,t)}rotateZ(t){return this.rotateOnAxis(Fo,t)}translateOnAxis(t,e){return Uo.copy(t).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Io,t)}translateY(t){return this.translateOnAxis(No,t)}translateZ(t){return this.translateOnAxis(Fo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Nr.copy(t):Nr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(cr,Nr,this.up):Bn.lookAt(Nr,cr,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),Ii.setFromRotationMatrix(Bn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oo),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ku),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oo),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,$u),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Zu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){const d=c[u];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),u=a(t.textures),l=a(t.images),d=a(t.shapes),p=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),l.length>0&&(n.images=l),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const c=[];for(const u in o){const l=o[u];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Be.DEFAULT_UP=new w(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new w,zn=new w,zs=new w,Vn=new w,Fi=new w,Oi=new w,Bo=new w,Vs=new w,Hs=new w,Gs=new w,ks=new Te,Ws=new Te,Xs=new Te;class _n{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),yn.subVectors(t,e),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){yn.subVectors(r,e),zn.subVectors(n,e),zs.subVectors(t,e);const a=yn.dot(yn),o=yn.dot(zn),c=yn.dot(zs),u=zn.dot(zn),l=zn.dot(zs),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const p=1/d,m=(u*c-o*l)*p,v=(a*l-o*c)*p;return s.set(1-m-v,v,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Vn.x),c.addScaledVector(a,Vn.y),c.addScaledVector(o,Vn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return ks.setScalar(0),Ws.setScalar(0),Xs.setScalar(0),ks.fromBufferAttribute(t,e),Ws.fromBufferAttribute(t,n),Xs.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ks,s.x),a.addScaledVector(Ws,s.y),a.addScaledVector(Xs,s.z),a}static isFrontFacing(t,e,n,r){return yn.subVectors(n,e),zn.subVectors(t,e),yn.cross(zn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),yn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Fi.subVectors(r,n),Oi.subVectors(s,n),Vs.subVectors(t,n);const c=Fi.dot(Vs),u=Oi.dot(Vs);if(c<=0&&u<=0)return e.copy(n);Hs.subVectors(t,r);const l=Fi.dot(Hs),d=Oi.dot(Hs);if(l>=0&&d<=l)return e.copy(r);const p=c*d-l*u;if(p<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(n).addScaledVector(Fi,a);Gs.subVectors(t,s);const m=Fi.dot(Gs),v=Oi.dot(Gs);if(v>=0&&m<=v)return e.copy(s);const M=m*u-c*v;if(M<=0&&u>=0&&v<=0)return o=u/(u-v),e.copy(n).addScaledVector(Oi,o);const g=l*v-m*d;if(g<=0&&d-l>=0&&m-v>=0)return Bo.subVectors(s,r),o=(d-l)/(d-l+(m-v)),e.copy(r).addScaledVector(Bo,o);const f=1/(g+M+p);return a=M*f,o=p*f,e.copy(n).addScaledVector(Fi,a).addScaledVector(Oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function qs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=oe.workingColorSpace){if(t=uo(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=qs(a,s,t+1/3),this.g=qs(a,s,t),this.b=qs(a,s,t-1/3)}return oe.toWorkingColorSpace(this,r),this}setStyle(t,e=nn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=rl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return oe.fromWorkingColorSpace(He.copy(this),t),Math.round(jt(He.r*255,0,255))*65536+Math.round(jt(He.g*255,0,255))*256+Math.round(jt(He.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(He.copy(this),e);const n=He.r,r=He.g,s=He.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,u;const l=(o+a)/2;if(o===a)c=0,u=0;else{const d=a-o;switch(u=l<=.5?d/(a+o):d/(2-a-o),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return t.h=c,t.s=u,t.l=l,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=nn){oe.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,r=He.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Fr);const n=_r(ei.h,Fr.h,e),r=_r(ei.s,Fr.s,e),s=_r(ei.l,Fr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Ft;Ft.NAMES=rl;let Ju=0;class Ai extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=Ei,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=da,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==da&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _i extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new w,Or=new Bt;class xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ja,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Or.fromBufferAttribute(this,e),Or.applyMatrix3(t),this.setXY(e,Or.x,Or.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),r=he(r,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ja&&(t.usage=this.usage),t}}class sl extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class al extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Xt extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ju=0;const mn=new Se,Ys=new Be,Bi=new w,un=new br,lr=new br,Ie=new w;class ae extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tl(t)?al:sl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return Ys.lookAt(t),Ys.updateMatrix(),this.applyMatrix4(Ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(un.min,lr.min),un.expandByPoint(Ie),Ie.addVectors(un.max,lr.max),un.expandByPoint(Ie)):(un.expandByPoint(lr.min),un.expandByPoint(lr.max))}un.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ie.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ie));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let u=0,l=o.count;u<l;u++)Ie.fromBufferAttribute(o,u),c&&(Bi.fromBufferAttribute(t,u),Ie.add(Bi)),r=Math.max(r,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let k=0;k<n.count;k++)o[k]=new w,c[k]=new w;const u=new w,l=new w,d=new w,p=new Bt,m=new Bt,v=new Bt,M=new w,g=new w;function f(k,T,S){u.fromBufferAttribute(n,k),l.fromBufferAttribute(n,T),d.fromBufferAttribute(n,S),p.fromBufferAttribute(s,k),m.fromBufferAttribute(s,T),v.fromBufferAttribute(s,S),l.sub(u),d.sub(u),m.sub(p),v.sub(p);const B=1/(m.x*v.y-v.x*m.y);isFinite(B)&&(M.copy(l).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(B),g.copy(d).multiplyScalar(m.x).addScaledVector(l,-v.x).multiplyScalar(B),o[k].add(M),o[T].add(M),o[S].add(M),c[k].add(g),c[T].add(g),c[S].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let k=0,T=C.length;k<T;++k){const S=C[k],B=S.start,nt=S.count;for(let J=B,ht=B+nt;J<ht;J+=3)f(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const A=new w,y=new w,H=new w,F=new w;function U(k){H.fromBufferAttribute(r,k),F.copy(H);const T=o[k];A.copy(T),A.sub(H.multiplyScalar(H.dot(T))).normalize(),y.crossVectors(F,T);const B=y.dot(c[k])<0?-1:1;a.setXYZW(k,A.x,A.y,A.z,B)}for(let k=0,T=C.length;k<T;++k){const S=C[k],B=S.start,nt=S.count;for(let J=B,ht=B+nt;J<ht;J+=3)U(t.getX(J+0)),U(t.getX(J+1)),U(t.getX(J+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new w,s=new w,a=new w,o=new w,c=new w,u=new w,l=new w,d=new w;if(t)for(let p=0,m=t.count;p<m;p+=3){const v=t.getX(p+0),M=t.getX(p+1),g=t.getX(p+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,g),l.subVectors(a,s),d.subVectors(r,s),l.cross(d),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,M),u.fromBufferAttribute(n,g),o.add(l),c.add(l),u.add(l),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let p=0,m=e.count;p<m;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),l.subVectors(a,s),d.subVectors(r,s),l.cross(d),n.setXYZ(p+0,l.x,l.y,l.z),n.setXYZ(p+1,l.x,l.y,l.z),n.setXYZ(p+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,c){const u=o.array,l=o.itemSize,d=o.normalized,p=new u.constructor(c.length*l);let m=0,v=0;for(let M=0,g=c.length;M<g;M++){o.isInterleavedBufferAttribute?m=c[M]*o.data.stride+o.offset:m=c[M]*l;for(let f=0;f<l;f++)p[v++]=u[m++]}return new xe(p,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ae,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=t(c,n);e.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let l=0,d=u.length;l<d;l++){const p=u[l],m=t(p,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],l=[];for(let d=0,p=u.length;d<p;d++){const m=u[d];l.push(m.toJSON(t.data))}l.length>0&&(r[c]=l,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const u in r){const l=r[u];this.setAttribute(u,l.clone(e))}const s=t.morphAttributes;for(const u in s){const l=[],d=s[u];for(let p=0,m=d.length;p<m;p++)l.push(d[p].clone(e));this.morphAttributes[u]=l}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,l=a.length;u<l;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zo=new Se,ui=new ho,Br=new Ar,Vo=new w,zr=new w,Vr=new w,Hr=new w,$s=new w,Gr=new w,Ho=new w,kr=new w;class Xe extends Be{constructor(t=new ae,e=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Gr.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const l=o[c],d=s[c];l!==0&&($s.fromBufferAttribute(d,t),a?Gr.addScaledVector($s,l):Gr.addScaledVector($s.sub(e),l))}e.add(Gr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),ui.copy(t.ray).recast(t.near),!(Br.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Br,Vo)===null||ui.origin.distanceToSquared(Vo)>(t.far-t.near)**2))&&(zo.copy(s).invert(),ui.copy(t.ray).applyMatrix4(zo),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,l=s.attributes.uv1,d=s.attributes.normal,p=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=p.length;v<M;v++){const g=p[v],f=a[g.materialIndex],C=Math.max(g.start,m.start),A=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let y=C,H=A;y<H;y+=3){const F=o.getX(y),U=o.getX(y+1),k=o.getX(y+2);r=Wr(this,f,t,n,u,l,d,F,U,k),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let g=v,f=M;g<f;g+=3){const C=o.getX(g),A=o.getX(g+1),y=o.getX(g+2);r=Wr(this,a,t,n,u,l,d,C,A,y),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,M=p.length;v<M;v++){const g=p[v],f=a[g.materialIndex],C=Math.max(g.start,m.start),A=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let y=C,H=A;y<H;y+=3){const F=y,U=y+1,k=y+2;r=Wr(this,f,t,n,u,l,d,F,U,k),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let g=v,f=M;g<f;g+=3){const C=g,A=g+1,y=g+2;r=Wr(this,a,t,n,u,l,d,C,A,y),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function Qu(i,t,e,n,r,s,a,o){let c;if(t.side===cn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===oi,o),c===null)return null;kr.copy(o),kr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(kr);return u<e.near||u>e.far?null:{distance:u,point:kr.clone(),object:i}}function Wr(i,t,e,n,r,s,a,o,c,u){i.getVertexPosition(o,zr),i.getVertexPosition(c,Vr),i.getVertexPosition(u,Hr);const l=Qu(i,t,e,n,zr,Vr,Hr,Ho);if(l){const d=new w;_n.getBarycoord(Ho,zr,Vr,Hr,d),r&&(l.uv=_n.getInterpolatedAttribute(r,o,c,u,d,new Bt)),s&&(l.uv1=_n.getInterpolatedAttribute(s,o,c,u,d,new Bt)),a&&(l.normal=_n.getInterpolatedAttribute(a,o,c,u,d,new w),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const p={a:o,b:c,c:u,normal:new w,materialIndex:0};_n.getNormal(zr,Vr,Hr,p.normal),l.face=p,l.barycoord=d}return l}class wr extends ae{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],l=[],d=[];let p=0,m=0;v("z","y","x",-1,-1,n,e,t,a,s,0),v("z","y","x",1,-1,n,e,-t,a,s,1),v("x","z","y",1,1,t,n,e,r,a,2),v("x","z","y",1,-1,t,n,-e,r,a,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(d,2));function v(M,g,f,C,A,y,H,F,U,k,T){const S=y/U,B=H/k,nt=y/2,J=H/2,ht=F/2,ft=U+1,st=k+1;let dt=0,j=0;const Mt=new w;for(let Rt=0;Rt<st;Rt++){const Ot=Rt*B-J;for(let Kt=0;Kt<ft;Kt++){const le=Kt*S-nt;Mt[M]=le*C,Mt[g]=Ot*A,Mt[f]=ht,u.push(Mt.x,Mt.y,Mt.z),Mt[M]=0,Mt[g]=0,Mt[f]=F>0?1:-1,l.push(Mt.x,Mt.y,Mt.z),d.push(Kt/U),d.push(1-Rt/k),dt+=1}}for(let Rt=0;Rt<k;Rt++)for(let Ot=0;Ot<U;Ot++){const Kt=p+Ot+ft*Rt,le=p+Ot+ft*(Rt+1),it=p+(Ot+1)+ft*(Rt+1),xt=p+(Ot+1)+ft*Rt;c.push(Kt,le,xt),c.push(le,it,xt),j+=6}o.addGroup(m,j,T),m+=j,p+=dt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function nr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function en(i){const t={};for(let e=0;e<i.length;e++){const n=nr(i[e]);for(const r in n)t[r]=n[r]}return t}function th(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ol(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const eh={clone:nr,merge:en};var nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nh,this.fragmentShader=ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=th(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class cl extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new w,Go=new Bt,ko=new Bt;class gn extends cl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Go,ko),e.subVectors(ko,Go)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zi=-90,Vi=1;class rh extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(zi,Vi,t,e);r.layers=this.layers,this.add(r);const s=new gn(zi,Vi,t,e);s.layers=this.layers,this.add(s);const a=new gn(zi,Vi,t,e);a.layers=this.layers,this.add(a);const o=new gn(zi,Vi,t,e);o.layers=this.layers,this.add(o);const c=new gn(zi,Vi,t,e);c.layers=this.layers,this.add(c);const u=new gn(zi,Vi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const u of e)this.remove(u);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,l]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,r),t.render(e,l),t.setRenderTarget(d,p,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ll extends rn{constructor(t,e,n,r,s,a,o,c,u,l){t=t!==void 0?t:[],e=e!==void 0?e:Ji,super(t,e,n,r,s,a,o,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sh extends bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ll(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wr(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:si});s.uniforms.tEquirect.value=e;const a=new Xe(r,s),o=e.minFilter;return e.minFilter===yi&&(e.minFilter=Un),new rh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class fo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ft(t),this.density=e}clone(){return new fo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ah extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class oh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ja,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new w;class xs{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=An(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=An(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=An(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=An(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),r=he(r,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class tn extends Ai{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hi;const ur=new w,Gi=new w,ki=new w,Wi=new Bt,hr=new Bt,ul=new Se,Xr=new w,fr=new w,qr=new w,Wo=new Bt,Zs=new Bt,Xo=new Bt;class sn extends Be{constructor(t=new tn){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new oh(e,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new xs(n,3,0,!1)),Hi.setAttribute("uv",new xs(n,2,3,!1))}this.geometry=Hi,this.material=t,this.center=new Bt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),ul.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-ki.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Yr(Xr.set(-.5,-.5,0),ki,a,Gi,r,s),Yr(fr.set(.5,-.5,0),ki,a,Gi,r,s),Yr(qr.set(.5,.5,0),ki,a,Gi,r,s),Wo.set(0,0),Zs.set(1,0),Xo.set(1,1);let o=t.ray.intersectTriangle(Xr,fr,qr,!1,ur);if(o===null&&(Yr(fr.set(-.5,.5,0),ki,a,Gi,r,s),Zs.set(0,1),o=t.ray.intersectTriangle(Xr,qr,fr,!1,ur),o===null))return;const c=t.ray.origin.distanceTo(ur);c<t.near||c>t.far||e.push({distance:c,point:ur.clone(),uv:_n.getInterpolation(ur,Xr,fr,qr,Wo,Zs,Xo,new Bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Yr(i,t,e,n,r,s){Wi.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(hr.x=s*Wi.x-r*Wi.y,hr.y=r*Wi.x+s*Wi.y):hr.copy(Wi),i.copy(t),i.x+=hr.x,i.y+=hr.y,i.applyMatrix4(ul)}const Ks=new w,ch=new w,lh=new Yt;class pi{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ks.subVectors(n,e).cross(ch.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ks),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||lh.getNormalMatrix(t),r=this.coplanarPoint(Ks).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new Ar,$r=new w;class hl{constructor(t=new pi,e=new pi,n=new pi,r=new pi,s=new pi,a=new pi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],l=r[5],d=r[6],p=r[7],m=r[8],v=r[9],M=r[10],g=r[11],f=r[12],C=r[13],A=r[14],y=r[15];if(n[0].setComponents(c-s,p-u,g-m,y-f).normalize(),n[1].setComponents(c+s,p+u,g+m,y+f).normalize(),n[2].setComponents(c+a,p+l,g+v,y+C).normalize(),n[3].setComponents(c-a,p-l,g-v,y-C).normalize(),n[4].setComponents(c-o,p-d,g-M,y-A).normalize(),e===Xn)n[5].setComponents(c+o,p+d,g+M,y+A).normalize();else if(e===_s)n[5].setComponents(o,d,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if($r.x=r.normal.x>0?t.max.x:t.min.x,$r.y=r.normal.y>0?t.max.y:t.min.y,$r.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vi extends Ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ms=new w,Ss=new w,qo=new Se,dr=new ho,Zr=new Ar,Js=new w,Yo=new w;class ys extends Be{constructor(t=new ae,e=new vi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ms.fromBufferAttribute(e,r-1),Ss.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ms.distanceTo(Ss);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Zr.radius+=s,t.ray.intersectsSphere(Zr)===!1)return;qo.copy(r).invert(),dr.copy(t.ray).applyMatrix4(qo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,l=n.index,p=n.attributes.position;if(l!==null){const m=Math.max(0,a.start),v=Math.min(l.count,a.start+a.count);for(let M=m,g=v-1;M<g;M+=u){const f=l.getX(M),C=l.getX(M+1),A=Kr(this,t,dr,c,f,C);A&&e.push(A)}if(this.isLineLoop){const M=l.getX(v-1),g=l.getX(m),f=Kr(this,t,dr,c,M,g);f&&e.push(f)}}else{const m=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let M=m,g=v-1;M<g;M+=u){const f=Kr(this,t,dr,c,M,M+1);f&&e.push(f)}if(this.isLineLoop){const M=Kr(this,t,dr,c,v-1,m);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Kr(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(Ms.fromBufferAttribute(a,r),Ss.fromBufferAttribute(a,s),e.distanceSqToSegment(Ms,Ss,Js,Yo)>n)return;Js.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Js);if(!(c<t.near||c>t.far))return{distance:c,point:Yo.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const $o=new w,Zo=new w;class Jr extends ys{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)$o.fromBufferAttribute(e,r),Zo.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+$o.distanceTo(Zo);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uh extends ys{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class an extends Ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ko=new Se,ja=new ho,jr=new Ar,Qr=new w;class Ge extends Be{constructor(t=new ae,e=new an){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),jr.radius+=s,t.ray.intersectsSphere(jr)===!1)return;Ko.copy(r).invert(),ja.copy(t.ray).applyMatrix4(Ko);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=p,M=m;v<M;v++){const g=u.getX(v);Qr.fromBufferAttribute(d,g),Jo(Qr,g,c,r,t,e,this)}}else{const p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=p,M=m;v<M;v++)Qr.fromBufferAttribute(d,v),Jo(Qr,v,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Jo(i,t,e,n,r,s,a){const o=ja.distanceSqToPoint(i);if(o<e){const c=new w;ja.closestPointToPoint(i,c),c.applyMatrix4(n);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Re extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}class jo extends rn{constructor(t,e,n,r,s,a,o,c,u){super(t,e,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fl extends rn{constructor(t,e,n,r,s,a,o,c,u,l=$i){if(l!==$i&&l!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===$i&&(n=Ti),n===void 0&&l===tr&&(n=Qi),super(null,r,s,a,o,c,l,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Cn,this.minFilter=c!==void 0?c:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,u;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),u=n[r]-a,u<0)o=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const l=n[r],p=n[r+1]-l,m=(a-l)/p;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new Bt:new w);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new w,r=[],s=[],a=[],o=new w,c=new Se;for(let m=0;m<=t;m++){const v=m/t;r[m]=this.getTangentAt(v,new w)}s[0]=new w,a[0]=new w;let u=Number.MAX_VALUE;const l=Math.abs(r[0].x),d=Math.abs(r[0].y),p=Math.abs(r[0].z);l<=u&&(u=l,n.set(1,0,0)),d<=u&&(u=d,n.set(0,1,0)),p<=u&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(jt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(o,v))}a[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(jt(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let v=1;v<=t;v++)s[v].applyMatrix4(c.makeRotationAxis(r[v],m*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class dl extends In{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Bt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,m=u-this.aY;c=p*l-m*d+this.aX,u=p*d+m*l+this.aY}return n.set(c,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class hh extends dl{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function po(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,u){r(a,o,u*(o-s),u*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,u,l,d){let p=(a-s)/u-(o-s)/(u+l)+(o-a)/l,m=(o-a)/l-(c-a)/(l+d)+(c-o)/d;p*=l,m*=l,r(a,o,p,m)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const ts=new w,js=new po,Qs=new po,ta=new po;class fh extends In{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new w){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let u,l;this.closed||o>0?u=r[(o-1)%s]:(ts.subVectors(r[0],r[1]).add(r[0]),u=ts);const d=r[o%s],p=r[(o+1)%s];if(this.closed||o+2<s?l=r[(o+2)%s]:(ts.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=ts),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(u.distanceToSquared(d),m),M=Math.pow(d.distanceToSquared(p),m),g=Math.pow(p.distanceToSquared(l),m);M<1e-4&&(M=1),v<1e-4&&(v=M),g<1e-4&&(g=M),js.initNonuniformCatmullRom(u.x,d.x,p.x,l.x,v,M,g),Qs.initNonuniformCatmullRom(u.y,d.y,p.y,l.y,v,M,g),ta.initNonuniformCatmullRom(u.z,d.z,p.z,l.z,v,M,g)}else this.curveType==="catmullrom"&&(js.initCatmullRom(u.x,d.x,p.x,l.x,this.tension),Qs.initCatmullRom(u.y,d.y,p.y,l.y,this.tension),ta.initCatmullRom(u.z,d.z,p.z,l.z,this.tension));return n.set(js.calc(c),Qs.calc(c),ta.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new w().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Qo(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function dh(i,t){const e=1-i;return e*e*t}function ph(i,t){return 2*(1-i)*i*t}function mh(i,t){return i*i*t}function vr(i,t,e,n){return dh(i,t)+ph(i,e)+mh(i,n)}function gh(i,t){const e=1-i;return e*e*e*t}function _h(i,t){const e=1-i;return 3*e*e*i*t}function vh(i,t){return 3*(1-i)*i*i*t}function xh(i,t){return i*i*i*t}function xr(i,t,e,n,r){return gh(i,t)+_h(i,e)+vh(i,n)+xh(i,r)}class Mh extends In{constructor(t=new Bt,e=new Bt,n=new Bt,r=new Bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Bt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(xr(t,r.x,s.x,a.x,o.x),xr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sh extends In{constructor(t=new w,e=new w,n=new w,r=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new w){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(xr(t,r.x,s.x,a.x,o.x),xr(t,r.y,s.y,a.y,o.y),xr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class yh extends In{constructor(t=new Bt,e=new Bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Bt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pl extends In{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eh extends In{constructor(t=new Bt,e=new Bt,n=new Bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Bt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(vr(t,r.x,s.x,a.x),vr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ml extends In{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(vr(t,r.x,s.x,a.x),vr(t,r.y,s.y,a.y),vr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Th extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Bt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],u=r[a],l=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(Qo(o,c.x,u.x,l.x,d.x),Qo(o,c.y,u.y,l.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new Bt().fromArray(r))}return this}}var Qa=Object.freeze({__proto__:null,ArcCurve:hh,CatmullRomCurve3:fh,CubicBezierCurve:Mh,CubicBezierCurve3:Sh,EllipseCurve:dl,LineCurve:yh,LineCurve3:pl,QuadraticBezierCurve:Eh,QuadraticBezierCurve3:ml,SplineCurve:Th});class bh extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),u=c===0?0:1-a/c;return o.getPointAt(u,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let u=0;u<c.length;u++){const l=c[u];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Qa[r.type]().fromJSON(r))}return this}}class ws extends ae{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),u=o+1,l=c+1,d=t/o,p=e/c,m=[],v=[],M=[],g=[];for(let f=0;f<l;f++){const C=f*p-a;for(let A=0;A<u;A++){const y=A*d-s;v.push(y,-C,0),M.push(0,0,1),g.push(A/o),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let C=0;C<o;C++){const A=C+u*f,y=C+u*(f+1),H=C+1+u*(f+1),F=C+1+u*f;m.push(A,y,F),m.push(y,H,F)}this.setIndex(m),this.setAttribute("position",new Xt(v,3)),this.setAttribute("normal",new Xt(M,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.width,t.height,t.widthSegments,t.heightSegments)}}class Es extends ae{constructor(t=.5,e=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],u=[],l=[];let d=t;const p=(e-t)/r,m=new w,v=new Bt;for(let M=0;M<=r;M++){for(let g=0;g<=n;g++){const f=s+g/n*a;m.x=d*Math.cos(f),m.y=d*Math.sin(f),c.push(m.x,m.y,m.z),u.push(0,0,1),v.x=(m.x/e+1)/2,v.y=(m.y/e+1)/2,l.push(v.x,v.y)}d+=p}for(let M=0;M<r;M++){const g=M*(n+1);for(let f=0;f<n;f++){const C=f+g,A=C,y=C+n+1,H=C+n+2,F=C+1;o.push(A,y,F),o.push(y,H,F)}}this.setIndex(o),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ts extends ae{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let u=0;const l=[],d=new w,p=new w,m=[],v=[],M=[],g=[];for(let f=0;f<=n;f++){const C=[],A=f/n;let y=0;f===0&&a===0?y=.5/e:f===n&&c===Math.PI&&(y=-.5/e);for(let H=0;H<=e;H++){const F=H/e;d.x=-t*Math.cos(r+F*s)*Math.sin(a+A*o),d.y=t*Math.cos(a+A*o),d.z=t*Math.sin(r+F*s)*Math.sin(a+A*o),v.push(d.x,d.y,d.z),p.copy(d).normalize(),M.push(p.x,p.y,p.z),g.push(F+y,1-A),C.push(u++)}l.push(C)}for(let f=0;f<n;f++)for(let C=0;C<e;C++){const A=l[f][C+1],y=l[f][C],H=l[f+1][C],F=l[f+1][C+1];(f!==0||a>0)&&m.push(A,y,F),(f!==n-1||c<Math.PI)&&m.push(y,H,F)}this.setIndex(m),this.setAttribute("position",new Xt(v,3)),this.setAttribute("normal",new Xt(M,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mo extends ae{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],u=[],l=new w,d=new w,p=new w;for(let m=0;m<=n;m++)for(let v=0;v<=r;v++){const M=v/r*s,g=m/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(M),d.y=(t+e*Math.cos(g))*Math.sin(M),d.z=e*Math.sin(g),o.push(d.x,d.y,d.z),l.x=t*Math.cos(M),l.y=t*Math.sin(M),p.subVectors(d,l).normalize(),c.push(p.x,p.y,p.z),u.push(v/r),u.push(m/n)}for(let m=1;m<=n;m++)for(let v=1;v<=r;v++){const M=(r+1)*m+v-1,g=(r+1)*(m-1)+v-1,f=(r+1)*(m-1)+v,C=(r+1)*m+v;a.push(M,g,C),a.push(g,f,C)}this.setIndex(a),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class go extends ae{constructor(t=new ml(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new w,c=new w,u=new Bt;let l=new w;const d=[],p=[],m=[],v=[];M(),this.setIndex(v),this.setAttribute("position",new Xt(d,3)),this.setAttribute("normal",new Xt(p,3)),this.setAttribute("uv",new Xt(m,2));function M(){for(let A=0;A<e;A++)g(A);g(s===!1?e:0),C(),f()}function g(A){l=t.getPointAt(A/e,l);const y=a.normals[A],H=a.binormals[A];for(let F=0;F<=r;F++){const U=F/r*Math.PI*2,k=Math.sin(U),T=-Math.cos(U);c.x=T*y.x+k*H.x,c.y=T*y.y+k*H.y,c.z=T*y.z+k*H.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=l.x+n*c.x,o.y=l.y+n*c.y,o.z=l.z+n*c.z,d.push(o.x,o.y,o.z)}}function f(){for(let A=1;A<=e;A++)for(let y=1;y<=r;y++){const H=(r+1)*(A-1)+(y-1),F=(r+1)*A+(y-1),U=(r+1)*A+y,k=(r+1)*(A-1)+y;v.push(H,F,k),v.push(F,U,k)}}function C(){for(let A=0;A<=e;A++)for(let y=0;y<=r;y++)u.x=A/e,u.y=y/r,m.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new go(new Qa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ah extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wh extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class tc extends vi{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class Rh extends cl{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ch extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ph{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ec(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ec();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ec(){return performance.now()}function nc(i,t,e,n){const r=Dh(n);switch(e){case qc:return i*t;case $c:return i*t;case Zc:return i*t*2;case Kc:return i*t/r.components*r.byteLength;case oo:return i*t/r.components*r.byteLength;case Jc:return i*t*2/r.components*r.byteLength;case co:return i*t*2/r.components*r.byteLength;case Yc:return i*t*3/r.components*r.byteLength;case Rn:return i*t*4/r.components*r.byteLength;case lo:return i*t*4/r.components*r.byteLength;case cs:case ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case us:case hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:case Ra:return Math.max(i,16)*Math.max(t,8)/4;case ba:case wa:return Math.max(i,8)*Math.max(t,8)/2;case Ca:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fs:case qa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16;case jc:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Za:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dh(i){switch(i){case $n:case kc:return{byteLength:1,components:1};case yr:case Wc:case Tr:return{byteLength:2,components:1};case so:case ao:return{byteLength:2,components:4};case Ti:case ro:case Wn:return{byteLength:4,components:1};case Xc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=io);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gl(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Lh(i){const t=new WeakMap;function e(o,c){const u=o.array,l=o.usage,d=u.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,u,l),o.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,u){const l=c.array,d=c.updateRanges;if(i.bindBuffer(u,o),d.length===0)i.bufferSubData(u,0,l);else{d.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<d.length;m++){const v=d[p],M=d[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++p,d[p]=M)}d.length=p+1;for(let m=0,v=d.length;m<v;m++){const M=d[m];i.bufferSubData(u,M.start*l.BYTES_PER_ELEMENT,l,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=t.get(o);(!l||l.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var Uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ih=`#ifdef USE_ALPHAHASH
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
#endif`,Nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zh=`#ifdef USE_AOMAP
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
#endif`,Vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hh=`#ifdef USE_BATCHING
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
#endif`,Gh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qh=`#ifdef USE_IRIDESCENCE
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
#endif`,Yh=`#ifdef USE_BUMPMAP
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
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nf=`#define PI 3.141592653589793
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
} // validated`,rf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sf=`vec3 transformedNormal = objectNormal;
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
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ff=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sf=`#ifdef USE_GRADIENTMAP
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
}`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
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
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Df=`PhysicalMaterial material;
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
#endif`,Lf=`struct PhysicalMaterial {
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
}`,Uf=`
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
#endif`,If=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Of=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kf=`#if defined( USE_POINTS_UV )
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
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`#ifdef USE_MORPHTARGETS
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
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nd=`#ifdef USE_NORMALMAP
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
#endif`,id=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,od=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ld=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vd=`float getShadowMask() {
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
}`,xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Md=`#ifdef USE_SKINNING
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
#endif`,Sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yd=`#ifdef USE_SKINNING
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
#endif`,Ed=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Td=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ad=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wd=`#ifdef USE_TRANSMISSION
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
#endif`,Rd=`#ifdef USE_TRANSMISSION
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
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ld=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Id=`uniform sampler2D t2D;
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
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`#include <common>
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
}`,Vd=`#if DEPTH_PACKING == 3200
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
}`,Hd=`#define DISTANCE
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
}`,Gd=`#define DISTANCE
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
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`uniform float scale;
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
}`,qd=`uniform vec3 diffuse;
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
}`,Yd=`#include <common>
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
}`,$d=`uniform vec3 diffuse;
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
}`,Zd=`#define LAMBERT
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
}`,Kd=`#define LAMBERT
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
}`,Jd=`#define MATCAP
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
}`,jd=`#define MATCAP
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
}`,Qd=`#define NORMAL
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
}`,tp=`#define NORMAL
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
}`,ep=`#define PHONG
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
}`,np=`#define PHONG
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
}`,ip=`#define STANDARD
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
}`,rp=`#define STANDARD
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
}`,sp=`#define TOON
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
}`,ap=`#define TOON
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
}`,op=`uniform float size;
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
}`,cp=`uniform vec3 diffuse;
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
}`,lp=`#include <common>
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
}`,up=`uniform vec3 color;
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
}`,hp=`uniform float rotation;
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
}`,fp=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Uh,alphahash_pars_fragment:Ih,alphamap_fragment:Nh,alphamap_pars_fragment:Fh,alphatest_fragment:Oh,alphatest_pars_fragment:Bh,aomap_fragment:zh,aomap_pars_fragment:Vh,batching_pars_vertex:Hh,batching_vertex:Gh,begin_vertex:kh,beginnormal_vertex:Wh,bsdfs:Xh,iridescence_fragment:qh,bumpmap_pars_fragment:Yh,clipping_planes_fragment:$h,clipping_planes_pars_fragment:Zh,clipping_planes_pars_vertex:Kh,clipping_planes_vertex:Jh,color_fragment:jh,color_pars_fragment:Qh,color_pars_vertex:tf,color_vertex:ef,common:nf,cube_uv_reflection_fragment:rf,defaultnormal_vertex:sf,displacementmap_pars_vertex:af,displacementmap_vertex:of,emissivemap_fragment:cf,emissivemap_pars_fragment:lf,colorspace_fragment:uf,colorspace_pars_fragment:hf,envmap_fragment:ff,envmap_common_pars_fragment:df,envmap_pars_fragment:pf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:Af,envmap_vertex:gf,fog_vertex:_f,fog_pars_vertex:vf,fog_fragment:xf,fog_pars_fragment:Mf,gradientmap_pars_fragment:Sf,lightmap_pars_fragment:yf,lights_lambert_fragment:Ef,lights_lambert_pars_fragment:Tf,lights_pars_begin:bf,lights_toon_fragment:wf,lights_toon_pars_fragment:Rf,lights_phong_fragment:Cf,lights_phong_pars_fragment:Pf,lights_physical_fragment:Df,lights_physical_pars_fragment:Lf,lights_fragment_begin:Uf,lights_fragment_maps:If,lights_fragment_end:Nf,logdepthbuf_fragment:Ff,logdepthbuf_pars_fragment:Of,logdepthbuf_pars_vertex:Bf,logdepthbuf_vertex:zf,map_fragment:Vf,map_pars_fragment:Hf,map_particle_fragment:Gf,map_particle_pars_fragment:kf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:qf,morphcolor_vertex:Yf,morphnormal_vertex:$f,morphtarget_pars_vertex:Zf,morphtarget_vertex:Kf,normal_fragment_begin:Jf,normal_fragment_maps:jf,normal_pars_fragment:Qf,normal_pars_vertex:td,normal_vertex:ed,normalmap_pars_fragment:nd,clearcoat_normal_fragment_begin:id,clearcoat_normal_fragment_maps:rd,clearcoat_pars_fragment:sd,iridescence_pars_fragment:ad,opaque_fragment:od,packing:cd,premultiplied_alpha_fragment:ld,project_vertex:ud,dithering_fragment:hd,dithering_pars_fragment:fd,roughnessmap_fragment:dd,roughnessmap_pars_fragment:pd,shadowmap_pars_fragment:md,shadowmap_pars_vertex:gd,shadowmap_vertex:_d,shadowmask_pars_fragment:vd,skinbase_vertex:xd,skinning_pars_vertex:Md,skinning_vertex:Sd,skinnormal_vertex:yd,specularmap_fragment:Ed,specularmap_pars_fragment:Td,tonemapping_fragment:bd,tonemapping_pars_fragment:Ad,transmission_fragment:wd,transmission_pars_fragment:Rd,uv_pars_fragment:Cd,uv_pars_vertex:Pd,uv_vertex:Dd,worldpos_vertex:Ld,background_vert:Ud,background_frag:Id,backgroundCube_vert:Nd,backgroundCube_frag:Fd,cube_vert:Od,cube_frag:Bd,depth_vert:zd,depth_frag:Vd,distanceRGBA_vert:Hd,distanceRGBA_frag:Gd,equirect_vert:kd,equirect_frag:Wd,linedashed_vert:Xd,linedashed_frag:qd,meshbasic_vert:Yd,meshbasic_frag:$d,meshlambert_vert:Zd,meshlambert_frag:Kd,meshmatcap_vert:Jd,meshmatcap_frag:jd,meshnormal_vert:Qd,meshnormal_frag:tp,meshphong_vert:ep,meshphong_frag:np,meshphysical_vert:ip,meshphysical_frag:rp,meshtoon_vert:sp,meshtoon_frag:ap,points_vert:op,points_frag:cp,shadow_vert:lp,shadow_frag:up,sprite_vert:hp,sprite_frag:fp},St={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Dn={basic:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:en([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:en([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:en([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:en([St.points,St.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:en([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:en([St.common,St.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:en([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:en([St.sprite,St.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:en([St.common,St.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:en([St.lights,St.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Dn.physical={uniforms:en([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const es={r:0,b:0,g:0},fi=new Zn,dp=new Se;function pp(i,t,e,n,r,s,a){const o=new Ft(0);let c=s===!0?0:1,u,l,d=null,p=0,m=null;function v(A){let y=A.isScene===!0?A.background:null;return y&&y.isTexture&&(y=(A.backgroundBlurriness>0?e:t).get(y)),y}function M(A){let y=!1;const H=v(A);H===null?f(o,c):H&&H.isColor&&(f(H,1),y=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(A,y){const H=v(y);H&&(H.isCubeTexture||H.mapping===As)?(l===void 0&&(l=new Xe(new wr(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:nr(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(F,U,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),fi.copy(y.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),l.material.uniforms.envMap.value=H,l.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(dp.makeRotationFromEuler(fi)),l.material.toneMapped=oe.getTransfer(H.colorSpace)!==de,(d!==H||p!==H.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=H,p=H.version,m=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):H&&H.isTexture&&(u===void 0&&(u=new Xe(new ws(2,2),new hn({name:"BackgroundMaterial",uniforms:nr(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=H,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=oe.getTransfer(H.colorSpace)!==de,H.matrixAutoUpdate===!0&&H.updateMatrix(),u.material.uniforms.uvTransform.value.copy(H.matrix),(d!==H||p!==H.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=H,p=H.version,m=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function f(A,y){A.getRGB(es,ol(i)),n.buffers.color.setClear(es.r,es.g,es.b,y,a)}function C(){l!==void 0&&(l.geometry.dispose(),l.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(A,y=1){o.set(A),c=y,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,f(o,c)},render:M,addToRenderList:g,dispose:C}}function mp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,a=!1;function o(S,B,nt,J,ht){let ft=!1;const st=d(J,nt,B);s!==st&&(s=st,u(s.object)),ft=m(S,J,nt,ht),ft&&v(S,J,nt,ht),ht!==null&&t.update(ht,i.ELEMENT_ARRAY_BUFFER),(ft||a)&&(a=!1,y(S,B,nt,J),ht!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function c(){return i.createVertexArray()}function u(S){return i.bindVertexArray(S)}function l(S){return i.deleteVertexArray(S)}function d(S,B,nt){const J=nt.wireframe===!0;let ht=n[S.id];ht===void 0&&(ht={},n[S.id]=ht);let ft=ht[B.id];ft===void 0&&(ft={},ht[B.id]=ft);let st=ft[J];return st===void 0&&(st=p(c()),ft[J]=st),st}function p(S){const B=[],nt=[],J=[];for(let ht=0;ht<e;ht++)B[ht]=0,nt[ht]=0,J[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:nt,attributeDivisors:J,object:S,attributes:{},index:null}}function m(S,B,nt,J){const ht=s.attributes,ft=B.attributes;let st=0;const dt=nt.getAttributes();for(const j in dt)if(dt[j].location>=0){const Rt=ht[j];let Ot=ft[j];if(Ot===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(Ot=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(Ot=S.instanceColor)),Rt===void 0||Rt.attribute!==Ot||Ot&&Rt.data!==Ot.data)return!0;st++}return s.attributesNum!==st||s.index!==J}function v(S,B,nt,J){const ht={},ft=B.attributes;let st=0;const dt=nt.getAttributes();for(const j in dt)if(dt[j].location>=0){let Rt=ft[j];Rt===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(Rt=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(Rt=S.instanceColor));const Ot={};Ot.attribute=Rt,Rt&&Rt.data&&(Ot.data=Rt.data),ht[j]=Ot,st++}s.attributes=ht,s.attributesNum=st,s.index=J}function M(){const S=s.newAttributes;for(let B=0,nt=S.length;B<nt;B++)S[B]=0}function g(S){f(S,0)}function f(S,B){const nt=s.newAttributes,J=s.enabledAttributes,ht=s.attributeDivisors;nt[S]=1,J[S]===0&&(i.enableVertexAttribArray(S),J[S]=1),ht[S]!==B&&(i.vertexAttribDivisor(S,B),ht[S]=B)}function C(){const S=s.newAttributes,B=s.enabledAttributes;for(let nt=0,J=B.length;nt<J;nt++)B[nt]!==S[nt]&&(i.disableVertexAttribArray(nt),B[nt]=0)}function A(S,B,nt,J,ht,ft,st){st===!0?i.vertexAttribIPointer(S,B,nt,ht,ft):i.vertexAttribPointer(S,B,nt,J,ht,ft)}function y(S,B,nt,J){M();const ht=J.attributes,ft=nt.getAttributes(),st=B.defaultAttributeValues;for(const dt in ft){const j=ft[dt];if(j.location>=0){let Mt=ht[dt];if(Mt===void 0&&(dt==="instanceMatrix"&&S.instanceMatrix&&(Mt=S.instanceMatrix),dt==="instanceColor"&&S.instanceColor&&(Mt=S.instanceColor)),Mt!==void 0){const Rt=Mt.normalized,Ot=Mt.itemSize,Kt=t.get(Mt);if(Kt===void 0)continue;const le=Kt.buffer,it=Kt.type,xt=Kt.bytesPerElement,Pt=it===i.INT||it===i.UNSIGNED_INT||Mt.gpuType===ro;if(Mt.isInterleavedBufferAttribute){const Tt=Mt.data,zt=Tt.stride,Vt=Mt.offset;if(Tt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<j.locationSize;Nt++)f(j.location+Nt,Tt.meshPerAttribute);S.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Nt=0;Nt<j.locationSize;Nt++)g(j.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Nt=0;Nt<j.locationSize;Nt++)A(j.location+Nt,Ot/j.locationSize,it,Rt,zt*xt,(Vt+Ot/j.locationSize*Nt)*xt,Pt)}else{if(Mt.isInstancedBufferAttribute){for(let Tt=0;Tt<j.locationSize;Tt++)f(j.location+Tt,Mt.meshPerAttribute);S.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Tt=0;Tt<j.locationSize;Tt++)g(j.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Tt=0;Tt<j.locationSize;Tt++)A(j.location+Tt,Ot/j.locationSize,it,Rt,Ot*xt,Ot/j.locationSize*Tt*xt,Pt)}}else if(st!==void 0){const Rt=st[dt];if(Rt!==void 0)switch(Rt.length){case 2:i.vertexAttrib2fv(j.location,Rt);break;case 3:i.vertexAttrib3fv(j.location,Rt);break;case 4:i.vertexAttrib4fv(j.location,Rt);break;default:i.vertexAttrib1fv(j.location,Rt)}}}}C()}function H(){k();for(const S in n){const B=n[S];for(const nt in B){const J=B[nt];for(const ht in J)l(J[ht].object),delete J[ht];delete B[nt]}delete n[S]}}function F(S){if(n[S.id]===void 0)return;const B=n[S.id];for(const nt in B){const J=B[nt];for(const ht in J)l(J[ht].object),delete J[ht];delete B[nt]}delete n[S.id]}function U(S){for(const B in n){const nt=n[B];if(nt[S.id]===void 0)continue;const J=nt[S.id];for(const ht in J)l(J[ht].object),delete J[ht];delete nt[S.id]}}function k(){T(),a=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:k,resetDefaultState:T,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:g,disableUnusedAttributes:C}}function gp(i,t,e){let n;function r(u){n=u}function s(u,l){i.drawArrays(n,u,l),e.update(l,n,1)}function a(u,l,d){d!==0&&(i.drawArraysInstanced(n,u,l,d),e.update(l,n,d))}function o(u,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,l,0,d);let m=0;for(let v=0;v<d;v++)m+=l[v];e.update(m,n,1)}function c(u,l,d,p){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<u.length;v++)a(u[v],l[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(n,u,0,l,0,p,0,d);let v=0;for(let M=0;M<d;M++)v+=l[M]*p[M];e.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function _p(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(U){return!(U!==Rn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const k=U===Tr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==$n&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Wn&&!k)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const l=c(u);l!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",l,"instead."),u=l);const d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),H=v>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:C,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:H,maxSamples:F}}function vp(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new pi,o=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||n!==0||r;return r=p,n=d.length,m},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){e=l(d,p,0)},this.setState=function(d,p,m){const v=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,f=i.get(d);if(!r||v===null||v.length===0||s&&!g)s?l(null):u();else{const C=s?0:n,A=C*4;let y=f.clippingState||null;c.value=y,y=l(v,p,A,m);for(let H=0;H!==A;++H)y[H]=e[H];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(d,p,m,v){const M=d!==null?d.length:0;let g=null;if(M!==0){if(g=c.value,v!==!0||g===null){const f=m+M*4,C=p.matrixWorldInverse;o.getNormalMatrix(C),(g===null||g.length<f)&&(g=new Float32Array(f));for(let A=0,y=m;A!==M;++A,y+=4)a.copy(d[A]).applyMatrix4(C,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}function xp(i){let t=new WeakMap;function e(a,o){return o===Sa?a.mapping=Ji:o===ya&&(a.mapping=ji),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sa||o===ya)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new sh(c.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",r),e(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Yi=4,ic=[.125,.215,.35,.446,.526,.582],xi=20,ea=new Rh,rc=new Ft;let na=null,ia=0,ra=0,sa=!1;const mi=(1+Math.sqrt(5))/2,Xi=1/mi,sc=[new w(-mi,Xi,0),new w(mi,Xi,0),new w(-Xi,0,mi),new w(Xi,0,mi),new w(0,mi,-Xi),new w(0,mi,Xi),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class ac{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(na,ia,ra),this._renderer.xr.enabled=sa,t.scissorTest=!1,ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Tr,format:Rn,colorSpace:er,depthBuffer:!1},r=oc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mp(s)),this._blurMaterial=Sp(s,t,e)}return r}_compileMaterial(t){const e=new Xe(this._lodPlanes[0],t);this._renderer.compile(e,ea)}_sceneToCubeUV(t,e,n,r){const o=new gn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,d=l.autoClear,p=l.toneMapping;l.getClearColor(rc),l.toneMapping=ai,l.autoClear=!1;const m=new _i({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),v=new Xe(new wr,m);let M=!1;const g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,M=!0):(m.color.copy(rc),M=!0);for(let f=0;f<6;f++){const C=f%3;C===0?(o.up.set(0,c[f],0),o.lookAt(u[f],0,0)):C===1?(o.up.set(0,0,c[f]),o.lookAt(0,u[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,u[f]));const A=this._cubeSize;ns(r,C*A,f>2?A:0,A,A),l.setRenderTarget(r),M&&l.render(v,o),l.render(t,o)}v.geometry.dispose(),v.material.dispose(),l.toneMapping=p,l.autoClear=d,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ji||t.mapping===ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Xe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;ns(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ea)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=sc[(r-s-1)%sc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,d=new Xe(this._lodPlanes[r],u),p=u.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xi-1),M=s/v,g=isFinite(s)?1+Math.floor(l*M):xi;g>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${xi}`);const f=[];let C=0;for(let U=0;U<xi;++U){const k=U/M,T=Math.exp(-k*k/2);f.push(T),U===0?C+=T:U<g&&(C+=2*T)}for(let U=0;U<f.length;U++)f[U]=f[U]/C;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:A}=this;p.dTheta.value=v,p.mipInt.value=A-n;const y=this._sizeLods[r],H=3*y*(r>A-Yi?r-A+Yi:0),F=4*(this._cubeSize-y);ns(e,H,F,3*y,2*y),c.setRenderTarget(e),c.render(d,ea)}}function Mp(i){const t=[],e=[],n=[];let r=i;const s=i-Yi+1+ic.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Yi?c=ic[a-i+Yi-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),l=-u,d=1+u,p=[l,l,d,l,d,d,l,l,d,d,l,d],m=6,v=6,M=3,g=2,f=1,C=new Float32Array(M*v*m),A=new Float32Array(g*v*m),y=new Float32Array(f*v*m);for(let F=0;F<m;F++){const U=F%3*2/3-1,k=F>2?0:-1,T=[U,k,0,U+2/3,k,0,U+2/3,k+1,0,U,k,0,U+2/3,k+1,0,U,k+1,0];C.set(T,M*v*F),A.set(p,g*v*F);const S=[F,F,F,F,F,F];y.set(S,f*v*F)}const H=new ae;H.setAttribute("position",new xe(C,M)),H.setAttribute("uv",new xe(A,g)),H.setAttribute("faceIndex",new xe(y,f)),t.push(H),r>Yi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function oc(i,t,e){const n=new bi(i,t,e);return n.texture.mapping=As,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ns(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Sp(i,t,e){const n=new Float32Array(xi),r=new w(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_o(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function cc(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function lc(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function _o(){return`

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
	`}function yp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===Sa||c===ya,l=c===Ji||c===ji;if(u||l){let d=t.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new ac(i)),d=u?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return u&&m&&m.height>0||l&&m&&r(m)?(e===null&&(e=new ac(i)),d=u?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const u=6;for(let l=0;l<u;l++)o[l]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ep(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&qi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Tp(i,t,e,n){const r={},s=new WeakMap;function a(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const v in p.attributes)t.remove(p.attributes[v]);p.removeEventListener("dispose",a),delete r[p.id];const m=s.get(p);m&&(t.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,e.memory.geometries++),p}function c(d){const p=d.attributes;for(const m in p)t.update(p[m],i.ARRAY_BUFFER)}function u(d){const p=[],m=d.index,v=d.attributes.position;let M=0;if(m!==null){const C=m.array;M=m.version;for(let A=0,y=C.length;A<y;A+=3){const H=C[A+0],F=C[A+1],U=C[A+2];p.push(H,F,F,U,U,H)}}else if(v!==void 0){const C=v.array;M=v.version;for(let A=0,y=C.length/3-1;A<y;A+=3){const H=A+0,F=A+1,U=A+2;p.push(H,F,F,U,U,H)}}else return;const g=new(tl(p)?al:sl)(p,1);g.version=M;const f=s.get(d);f&&t.remove(f),s.set(d,g)}function l(d){const p=s.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:l}}function bp(i,t,e){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,m){i.drawElements(n,m,s,p*a),e.update(m,n,1)}function u(p,m,v){v!==0&&(i.drawElementsInstanced(n,m,s,p*a,v),e.update(m,n,v))}function l(p,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,p,0,v);let g=0;for(let f=0;f<v;f++)g+=m[f];e.update(g,n,1)}function d(p,m,v,M){if(v===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<p.length;f++)u(p[f]/a,m[f],M[f]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,s,p,0,M,0,v);let f=0;for(let C=0;C<v;C++)f+=m[C]*M[C];e.update(f,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=l,this.renderMultiDrawInstances=d}function Ap(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function wp(i,t,e){const n=new WeakMap,r=new Te;function s(a,o,c){const u=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=l!==void 0?l.length:0;let p=n.get(o);if(p===void 0||p.count!==d){let S=function(){k.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var m=S;p!==void 0&&p.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],C=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let y=0;v===!0&&(y=1),M===!0&&(y=2),g===!0&&(y=3);let H=o.attributes.position.count*y,F=1;H>t.maxTextureSize&&(F=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const U=new Float32Array(H*F*4*d),k=new nl(U,H,F,d);k.type=Wn,k.needsUpdate=!0;const T=y*4;for(let B=0;B<d;B++){const nt=f[B],J=C[B],ht=A[B],ft=H*F*4*B;for(let st=0;st<nt.count;st++){const dt=st*T;v===!0&&(r.fromBufferAttribute(nt,st),U[ft+dt+0]=r.x,U[ft+dt+1]=r.y,U[ft+dt+2]=r.z,U[ft+dt+3]=0),M===!0&&(r.fromBufferAttribute(J,st),U[ft+dt+4]=r.x,U[ft+dt+5]=r.y,U[ft+dt+6]=r.z,U[ft+dt+7]=0),g===!0&&(r.fromBufferAttribute(ht,st),U[ft+dt+8]=r.x,U[ft+dt+9]=r.y,U[ft+dt+10]=r.z,U[ft+dt+11]=ht.itemSize===4?r.w:1)}}p={count:d,texture:k,size:new Bt(H,F)},n.set(o,p),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let g=0;g<u.length;g++)v+=u[g];const M=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Rp(i,t,e,n){let r=new WeakMap;function s(c){const u=n.render.frame,l=c.geometry,d=t.get(c,l);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}const _l=new rn,uc=new fl(1,1),vl=new nl,xl=new ku,Ml=new ll,hc=[],fc=[],dc=new Float32Array(16),pc=new Float32Array(9),mc=new Float32Array(4);function sr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=hc[r];if(s===void 0&&(s=new Float32Array(r),hc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rs(i,t){let e=fc[t];e===void 0&&(e=new Int32Array(t),fc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function Dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function Lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function Up(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(De(e,n))return;mc.set(n),i.uniformMatrix2fv(this.addr,!1,mc),Le(e,n)}}function Ip(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(De(e,n))return;pc.set(n),i.uniformMatrix3fv(this.addr,!1,pc),Le(e,n)}}function Np(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(De(e,n))return;dc.set(n),i.uniformMatrix4fv(this.addr,!1,dc),Le(e,n)}}function Fp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function Bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function Vp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function Gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function Wp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(uc.compareFunction=Qc,s=uc):s=_l,e.setTexture2D(t||s,r)}function Xp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||xl,r)}function qp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Ml,r)}function Yp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||vl,r)}function $p(i){switch(i){case 5126:return Cp;case 35664:return Pp;case 35665:return Dp;case 35666:return Lp;case 35674:return Up;case 35675:return Ip;case 35676:return Np;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return Bp;case 35669:case 35673:return zp;case 5125:return Vp;case 36294:return Hp;case 36295:return Gp;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}function Zp(i,t){i.uniform1fv(this.addr,t)}function Kp(i,t){const e=sr(t,this.size,2);i.uniform2fv(this.addr,e)}function Jp(i,t){const e=sr(t,this.size,3);i.uniform3fv(this.addr,e)}function jp(i,t){const e=sr(t,this.size,4);i.uniform4fv(this.addr,e)}function Qp(i,t){const e=sr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tm(i,t){const e=sr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function em(i,t){const e=sr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function nm(i,t){i.uniform1iv(this.addr,t)}function im(i,t){i.uniform2iv(this.addr,t)}function rm(i,t){i.uniform3iv(this.addr,t)}function sm(i,t){i.uniform4iv(this.addr,t)}function am(i,t){i.uniform1uiv(this.addr,t)}function om(i,t){i.uniform2uiv(this.addr,t)}function cm(i,t){i.uniform3uiv(this.addr,t)}function lm(i,t){i.uniform4uiv(this.addr,t)}function um(i,t,e){const n=this.cache,r=t.length,s=Rs(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||_l,s[a])}function hm(i,t,e){const n=this.cache,r=t.length,s=Rs(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||xl,s[a])}function fm(i,t,e){const n=this.cache,r=t.length,s=Rs(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Ml,s[a])}function dm(i,t,e){const n=this.cache,r=t.length,s=Rs(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||vl,s[a])}function pm(i){switch(i){case 5126:return Zp;case 35664:return Kp;case 35665:return Jp;case 35666:return jp;case 35674:return Qp;case 35675:return tm;case 35676:return em;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return rm;case 35669:case 35673:return sm;case 5125:return am;case 36294:return om;case 36295:return cm;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return dm}}class mm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$p(e.type)}}class gm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pm(e.type)}}class _m{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function gc(i,t){i.seq.push(t),i.map[t.id]=t}function vm(i,t,e){const n=i.name,r=n.length;for(aa.lastIndex=0;;){const s=aa.exec(n),a=aa.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){gc(e,u===void 0?new mm(o,i,t):new gm(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new _m(o),gc(e,d)),e=d}}}class ds{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);vm(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function _c(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const xm=37297;let Mm=0;function Sm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const vc=new Yt;function ym(i){oe._getMatrix(vc,oe.workingColorSpace,i);const t=`mat3( ${vc.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case gs:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Sm(i.getShaderSource(t),a)}else return r}function Em(i,t){const e=ym(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Tm(i,t){let e;switch(t){case Ql:e="Linear";break;case tu:e="Reinhard";break;case eu:e="Cineon";break;case nu:e="ACESFilmic";break;case ru:e="AgX";break;case su:e="Neutral";break;case iu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const is=new w;function bm(){oe.getLuminanceCoefficients(is);const i=is.x.toFixed(4),t=is.y.toFixed(4),e=is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Am(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function wm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function pr(i){return i!==""}function Mc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function to(i){return i.replace(Cm,Dm)}const Pm=new Map;function Dm(i,t){let e=Zt[t];if(e===void 0){const n=Pm.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return to(e)}const Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(i){return i.replace(Lm,Um)}function Um(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ec(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Im(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ll?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Nm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case ji:t="ENVMAP_TYPE_CUBE";break;case As:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ji:t="ENVMAP_MODE_REFRACTION";break}return t}function Om(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hc:t="ENVMAP_BLENDING_MULTIPLY";break;case Jl:t="ENVMAP_BLENDING_MIX";break;case jl:t="ENVMAP_BLENDING_ADD";break}return t}function Bm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zm(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Im(e),u=Nm(e),l=Fm(e),d=Om(e),p=Bm(e),m=Am(e),v=wm(s),M=r.createProgram();let g,f,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(pr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(pr).join(`
`),f.length>0&&(f+=`
`)):(g=[Ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),f=[Ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?Zt.tonemapping_pars_fragment:"",e.toneMapping!==ai?Tm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Em("linearToOutputTexel",e.outputColorSpace),bm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),a=to(a),a=Mc(a,e),a=Sc(a,e),o=to(o),o=Mc(o,e),o=Sc(o,e),a=yc(a),o=yc(o),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const A=C+g+a,y=C+f+o,H=_c(r,r.VERTEX_SHADER,A),F=_c(r,r.FRAGMENT_SHADER,y);r.attachShader(M,H),r.attachShader(M,F),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function U(B){if(i.debug.checkShaderErrors){const nt=r.getProgramInfoLog(M).trim(),J=r.getShaderInfoLog(H).trim(),ht=r.getShaderInfoLog(F).trim();let ft=!0,st=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ft=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,H,F);else{const dt=xc(r,H,"vertex"),j=xc(r,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+nt+`
`+dt+`
`+j)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(J===""||ht==="")&&(st=!1);st&&(B.diagnostics={runnable:ft,programLog:nt,vertexShader:{log:J,prefix:g},fragmentShader:{log:ht,prefix:f}})}r.deleteShader(H),r.deleteShader(F),k=new ds(r,M),T=Rm(r,M)}let k;this.getUniforms=function(){return k===void 0&&U(this),k};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(M,xm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mm++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=H,this.fragmentShader=F,this}let Vm=0;class Hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Gm(t),e.set(t,n)),n}}class Gm{constructor(t){this.id=Vm++,this.code=t,this.usedTimes=0}}function km(i,t,e,n,r,s,a){const o=new il,c=new Hm,u=new Set,l=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return u.add(T),T===0?"uv":`uv${T}`}function g(T,S,B,nt,J){const ht=nt.fog,ft=J.geometry,st=T.isMeshStandardMaterial?nt.environment:null,dt=(T.isMeshStandardMaterial?e:t).get(T.envMap||st),j=dt&&dt.mapping===As?dt.image.height:null,Mt=v[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const Rt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Ot=Rt!==void 0?Rt.length:0;let Kt=0;ft.morphAttributes.position!==void 0&&(Kt=1),ft.morphAttributes.normal!==void 0&&(Kt=2),ft.morphAttributes.color!==void 0&&(Kt=3);let le,it,xt,Pt;if(Mt){const yt=Dn[Mt];le=yt.vertexShader,it=yt.fragmentShader}else le=T.vertexShader,it=T.fragmentShader,c.update(T),xt=c.getVertexShaderID(T),Pt=c.getFragmentShaderID(T);const Tt=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Vt=J.isInstancedMesh===!0,Nt=J.isBatchedMesh===!0,_e=!!T.map,ie=!!T.matcap,ye=!!dt,L=!!T.aoMap,Ye=!!T.lightMap,Jt=!!T.bumpMap,ne=!!T.normalMap,Ut=!!T.displacementMap,fe=!!T.emissiveMap,E=!!T.metalnessMap,_=!!T.roughnessMap,h=T.anisotropy>0,b=T.clearcoat>0,I=T.dispersion>0,N=T.iridescence>0,P=T.sheen>0,Z=T.transmission>0,Y=h&&!!T.anisotropyMap,$=b&&!!T.clearcoatMap,lt=b&&!!T.clearcoatNormalMap,G=b&&!!T.clearcoatRoughnessMap,Q=N&&!!T.iridescenceMap,at=N&&!!T.iridescenceThicknessMap,ut=P&&!!T.sheenColorMap,et=P&&!!T.sheenRoughnessMap,pt=!!T.specularMap,_t=!!T.specularColorMap,Ct=!!T.specularIntensityMap,R=Z&&!!T.transmissionMap,ct=Z&&!!T.thicknessMap,z=!!T.gradientMap,V=!!T.alphaMap,K=T.alphaTest>0,tt=!!T.alphaHash,gt=!!T.extensions;let rt=ai;T.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(rt=i.toneMapping);const At={shaderID:Mt,shaderType:T.type,shaderName:T.name,vertexShader:le,fragmentShader:it,defines:T.defines,customVertexShaderID:xt,customFragmentShaderID:Pt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Nt,batchingColor:Nt&&J._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&J.instanceColor!==null,instancingMorph:Vt&&J.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Tt===null?i.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:er,alphaToCoverage:!!T.alphaToCoverage,map:_e,matcap:ie,envMap:ye,envMapMode:ye&&dt.mapping,envMapCubeUVHeight:j,aoMap:L,lightMap:Ye,bumpMap:Jt,normalMap:ne,displacementMap:p&&Ut,emissiveMap:fe,normalMapObjectSpace:ne&&T.normalMapType===uu,normalMapTangentSpace:ne&&T.normalMapType===lu,metalnessMap:E,roughnessMap:_,anisotropy:h,anisotropyMap:Y,clearcoat:b,clearcoatMap:$,clearcoatNormalMap:lt,clearcoatRoughnessMap:G,dispersion:I,iridescence:N,iridescenceMap:Q,iridescenceThicknessMap:at,sheen:P,sheenColorMap:ut,sheenRoughnessMap:et,specularMap:pt,specularColorMap:_t,specularIntensityMap:Ct,transmission:Z,transmissionMap:R,thicknessMap:ct,gradientMap:z,opaque:T.transparent===!1&&T.blending===Ei&&T.alphaToCoverage===!1,alphaMap:V,alphaTest:K,alphaHash:tt,combine:T.combine,mapUv:_e&&M(T.map.channel),aoMapUv:L&&M(T.aoMap.channel),lightMapUv:Ye&&M(T.lightMap.channel),bumpMapUv:Jt&&M(T.bumpMap.channel),normalMapUv:ne&&M(T.normalMap.channel),displacementMapUv:Ut&&M(T.displacementMap.channel),emissiveMapUv:fe&&M(T.emissiveMap.channel),metalnessMapUv:E&&M(T.metalnessMap.channel),roughnessMapUv:_&&M(T.roughnessMap.channel),anisotropyMapUv:Y&&M(T.anisotropyMap.channel),clearcoatMapUv:$&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:lt&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:at&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:et&&M(T.sheenRoughnessMap.channel),specularMapUv:pt&&M(T.specularMap.channel),specularColorMapUv:_t&&M(T.specularColorMap.channel),specularIntensityMapUv:Ct&&M(T.specularIntensityMap.channel),transmissionMapUv:R&&M(T.transmissionMap.channel),thicknessMapUv:ct&&M(T.thicknessMap.channel),alphaMapUv:V&&M(T.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(ne||h),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ft.attributes.uv&&(_e||V),fog:!!ht,useFog:T.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:zt,skinning:J.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:Kt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:_e&&T.map.isVideoTexture===!0&&oe.getTransfer(T.map.colorSpace)===de,decodeVideoTextureEmissive:fe&&T.emissiveMap.isVideoTexture===!0&&oe.getTransfer(T.emissiveMap.colorSpace)===de,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===bn,flipSided:T.side===cn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:gt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&T.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return At.vertexUv1s=u.has(1),At.vertexUv2s=u.has(2),At.vertexUv3s=u.has(3),u.clear(),At}function f(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const B in T.defines)S.push(B),S.push(T.defines[B]);return T.isRawShaderMaterial===!1&&(C(S,T),A(S,T),S.push(i.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function C(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function A(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),T.push(o.mask)}function y(T){const S=v[T.type];let B;if(S){const nt=Dn[S];B=eh.clone(nt.uniforms)}else B=T.uniforms;return B}function H(T,S){let B;for(let nt=0,J=l.length;nt<J;nt++){const ht=l[nt];if(ht.cacheKey===S){B=ht,++B.usedTimes;break}}return B===void 0&&(B=new zm(i,S,T,s),l.push(B)),B}function F(T){if(--T.usedTimes===0){const S=l.indexOf(T);l[S]=l[l.length-1],l.pop(),T.destroy()}}function U(T){c.remove(T)}function k(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:y,acquireProgram:H,releaseProgram:F,releaseShaderCache:U,programs:l,dispose:k}}function Wm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Xm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Tc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(d,p,m,v,M,g){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:p,material:m,groupOrder:v,renderOrder:d.renderOrder,z:M,group:g},i[t]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=m,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=M,f.group=g),t++,f}function o(d,p,m,v,M,g){const f=a(d,p,m,v,M,g);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):e.push(f)}function c(d,p,m,v,M,g){const f=a(d,p,m,v,M,g);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):e.unshift(f)}function u(d,p){e.length>1&&e.sort(d||Xm),n.length>1&&n.sort(p||Tc),r.length>1&&r.sort(p||Tc)}function l(){for(let d=t,p=i.length;d<p;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:l,sort:u}}function qm(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new bc,i.set(n,[a])):r>=s.length?(a=new bc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ym(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Ft};break;case"SpotLight":e={position:new w,direction:new w,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function $m(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Zm=0;function Km(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Jm(i){const t=new Ym,e=$m(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new w);const r=new w,s=new Se,a=new Se;function o(u){let l=0,d=0,p=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,v=0,M=0,g=0,f=0,C=0,A=0,y=0,H=0,F=0,U=0;u.sort(Km);for(let T=0,S=u.length;T<S;T++){const B=u[T],nt=B.color,J=B.intensity,ht=B.distance,ft=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)l+=nt.r*J,d+=nt.g*J,p+=nt.b*J;else if(B.isLightProbe){for(let st=0;st<9;st++)n.probe[st].addScaledVector(B.sh.coefficients[st],J);U++}else if(B.isDirectionalLight){const st=t.get(B);if(st.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const dt=B.shadow,j=e.get(B);j.shadowIntensity=dt.intensity,j.shadowBias=dt.bias,j.shadowNormalBias=dt.normalBias,j.shadowRadius=dt.radius,j.shadowMapSize=dt.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=ft,n.directionalShadowMatrix[m]=B.shadow.matrix,C++}n.directional[m]=st,m++}else if(B.isSpotLight){const st=t.get(B);st.position.setFromMatrixPosition(B.matrixWorld),st.color.copy(nt).multiplyScalar(J),st.distance=ht,st.coneCos=Math.cos(B.angle),st.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),st.decay=B.decay,n.spot[M]=st;const dt=B.shadow;if(B.map&&(n.spotLightMap[H]=B.map,H++,dt.updateMatrices(B),B.castShadow&&F++),n.spotLightMatrix[M]=dt.matrix,B.castShadow){const j=e.get(B);j.shadowIntensity=dt.intensity,j.shadowBias=dt.bias,j.shadowNormalBias=dt.normalBias,j.shadowRadius=dt.radius,j.shadowMapSize=dt.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=ft,y++}M++}else if(B.isRectAreaLight){const st=t.get(B);st.color.copy(nt).multiplyScalar(J),st.halfWidth.set(B.width*.5,0,0),st.halfHeight.set(0,B.height*.5,0),n.rectArea[g]=st,g++}else if(B.isPointLight){const st=t.get(B);if(st.color.copy(B.color).multiplyScalar(B.intensity),st.distance=B.distance,st.decay=B.decay,B.castShadow){const dt=B.shadow,j=e.get(B);j.shadowIntensity=dt.intensity,j.shadowBias=dt.bias,j.shadowNormalBias=dt.normalBias,j.shadowRadius=dt.radius,j.shadowMapSize=dt.mapSize,j.shadowCameraNear=dt.camera.near,j.shadowCameraFar=dt.camera.far,n.pointShadow[v]=j,n.pointShadowMap[v]=ft,n.pointShadowMatrix[v]=B.shadow.matrix,A++}n.point[v]=st,v++}else if(B.isHemisphereLight){const st=t.get(B);st.skyColor.copy(B.color).multiplyScalar(J),st.groundColor.copy(B.groundColor).multiplyScalar(J),n.hemi[f]=st,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=d,n.ambient[2]=p;const k=n.hash;(k.directionalLength!==m||k.pointLength!==v||k.spotLength!==M||k.rectAreaLength!==g||k.hemiLength!==f||k.numDirectionalShadows!==C||k.numPointShadows!==A||k.numSpotShadows!==y||k.numSpotMaps!==H||k.numLightProbes!==U)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=g,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=y+H-F,n.spotLightMap.length=H,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=U,k.directionalLength=m,k.pointLength=v,k.spotLength=M,k.rectAreaLength=g,k.hemiLength=f,k.numDirectionalShadows=C,k.numPointShadows=A,k.numSpotShadows=y,k.numSpotMaps=H,k.numLightProbes=U,n.version=Zm++)}function c(u,l){let d=0,p=0,m=0,v=0,M=0;const g=l.matrixWorldInverse;for(let f=0,C=u.length;f<C;f++){const A=u[f];if(A.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(A.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),m++}else if(A.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(A.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),p++}else if(A.isHemisphereLight){const y=n.hemi[M];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(g),M++}}}return{setup:o,setupView:c,state:n}}function Ac(i){const t=new Jm(i),e=[],n=[];function r(l){u.camera=l,e.length=0,n.length=0}function s(l){e.push(l)}function a(l){n.push(l)}function o(){t.setup(e)}function c(l){t.setupView(e,l)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function jm(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Ac(i),t.set(r,[o])):s>=a.length?(o=new Ac(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tg=`uniform sampler2D shadow_pass;
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
}`;function eg(i,t,e){let n=new hl;const r=new Bt,s=new Bt,a=new Te,o=new Ah({depthPacking:cu}),c=new wh,u={},l=e.maxTextureSize,d={[oi]:cn,[cn]:oi,[bn]:bn},p=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:Qm,fragmentShader:tg}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new ae;v.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Xe(v,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let f=this.type;this.render=function(F,U,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||F.length===0)return;const T=i.getRenderTarget(),S=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),nt=i.state;nt.setBlending(si),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const J=f!==kn&&this.type===kn,ht=f===kn&&this.type!==kn;for(let ft=0,st=F.length;ft<st;ft++){const dt=F[ft],j=dt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",dt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const Mt=j.getFrameExtents();if(r.multiply(Mt),s.copy(j.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/Mt.x),r.x=s.x*Mt.x,j.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/Mt.y),r.y=s.y*Mt.y,j.mapSize.y=s.y)),j.map===null||J===!0||ht===!0){const Ot=this.type!==kn?{minFilter:Cn,magFilter:Cn}:{};j.map!==null&&j.map.dispose(),j.map=new bi(r.x,r.y,Ot),j.map.texture.name=dt.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const Rt=j.getViewportCount();for(let Ot=0;Ot<Rt;Ot++){const Kt=j.getViewport(Ot);a.set(s.x*Kt.x,s.y*Kt.y,s.x*Kt.z,s.y*Kt.w),nt.viewport(a),j.updateMatrices(dt,Ot),n=j.getFrustum(),y(U,k,j.camera,dt,this.type)}j.isPointLightShadow!==!0&&this.type===kn&&C(j,k),j.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(T,S,B)};function C(F,U){const k=t.update(M);p.defines.VSM_SAMPLES!==F.blurSamples&&(p.defines.VSM_SAMPLES=F.blurSamples,m.defines.VSM_SAMPLES=F.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new bi(r.x,r.y)),p.uniforms.shadow_pass.value=F.map.texture,p.uniforms.resolution.value=F.mapSize,p.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(U,null,k,p,M,null),m.uniforms.shadow_pass.value=F.mapPass.texture,m.uniforms.resolution.value=F.mapSize,m.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(U,null,k,m,M,null)}function A(F,U,k,T){let S=null;const B=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)S=B;else if(S=k.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const nt=S.uuid,J=U.uuid;let ht=u[nt];ht===void 0&&(ht={},u[nt]=ht);let ft=ht[J];ft===void 0&&(ft=S.clone(),ht[J]=ft,U.addEventListener("dispose",H)),S=ft}if(S.visible=U.visible,S.wireframe=U.wireframe,T===kn?S.side=U.shadowSide!==null?U.shadowSide:U.side:S.side=U.shadowSide!==null?U.shadowSide:d[U.side],S.alphaMap=U.alphaMap,S.alphaTest=U.alphaTest,S.map=U.map,S.clipShadows=U.clipShadows,S.clippingPlanes=U.clippingPlanes,S.clipIntersection=U.clipIntersection,S.displacementMap=U.displacementMap,S.displacementScale=U.displacementScale,S.displacementBias=U.displacementBias,S.wireframeLinewidth=U.wireframeLinewidth,S.linewidth=U.linewidth,k.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const nt=i.properties.get(S);nt.light=k}return S}function y(F,U,k,T,S){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&S===kn)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const J=t.update(F),ht=F.material;if(Array.isArray(ht)){const ft=J.groups;for(let st=0,dt=ft.length;st<dt;st++){const j=ft[st],Mt=ht[j.materialIndex];if(Mt&&Mt.visible){const Rt=A(F,Mt,T,S);F.onBeforeShadow(i,F,U,k,J,Rt,j),i.renderBufferDirect(k,null,J,Rt,F,j),F.onAfterShadow(i,F,U,k,J,Rt,j)}}}else if(ht.visible){const ft=A(F,ht,T,S);F.onBeforeShadow(i,F,U,k,J,ft,null),i.renderBufferDirect(k,null,J,ft,F,null),F.onAfterShadow(i,F,U,k,J,ft,null)}}const nt=F.children;for(let J=0,ht=nt.length;J<ht;J++)y(nt[J],U,k,T,S)}function H(F){F.target.removeEventListener("dispose",H);for(const k in u){const T=u[k],S=F.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const ng={[pa]:ma,[ga]:xa,[_a]:Ma,[Ki]:va,[ma]:pa,[xa]:ga,[Ma]:_a,[va]:Ki};function ig(i,t){function e(){let R=!1;const ct=new Te;let z=null;const V=new Te(0,0,0,0);return{setMask:function(K){z!==K&&!R&&(i.colorMask(K,K,K,K),z=K)},setLocked:function(K){R=K},setClear:function(K,tt,gt,rt,At){At===!0&&(K*=rt,tt*=rt,gt*=rt),ct.set(K,tt,gt,rt),V.equals(ct)===!1&&(i.clearColor(K,tt,gt,rt),V.copy(ct))},reset:function(){R=!1,z=null,V.set(-1,0,0,0)}}}function n(){let R=!1,ct=!1,z=null,V=null,K=null;return{setReversed:function(tt){if(ct!==tt){const gt=t.get("EXT_clip_control");ct?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT);const rt=K;K=null,this.setClear(rt)}ct=tt},getReversed:function(){return ct},setTest:function(tt){tt?Tt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(tt){z!==tt&&!R&&(i.depthMask(tt),z=tt)},setFunc:function(tt){if(ct&&(tt=ng[tt]),V!==tt){switch(tt){case pa:i.depthFunc(i.NEVER);break;case ma:i.depthFunc(i.ALWAYS);break;case ga:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case _a:i.depthFunc(i.EQUAL);break;case va:i.depthFunc(i.GEQUAL);break;case xa:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}V=tt}},setLocked:function(tt){R=tt},setClear:function(tt){K!==tt&&(ct&&(tt=1-tt),i.clearDepth(tt),K=tt)},reset:function(){R=!1,z=null,V=null,K=null,ct=!1}}}function r(){let R=!1,ct=null,z=null,V=null,K=null,tt=null,gt=null,rt=null,At=null;return{setTest:function(yt){R||(yt?Tt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(yt){ct!==yt&&!R&&(i.stencilMask(yt),ct=yt)},setFunc:function(yt,Lt,It){(z!==yt||V!==Lt||K!==It)&&(i.stencilFunc(yt,Lt,It),z=yt,V=Lt,K=It)},setOp:function(yt,Lt,It){(tt!==yt||gt!==Lt||rt!==It)&&(i.stencilOp(yt,Lt,It),tt=yt,gt=Lt,rt=It)},setLocked:function(yt){R=yt},setClear:function(yt){At!==yt&&(i.clearStencil(yt),At=yt)},reset:function(){R=!1,ct=null,z=null,V=null,K=null,tt=null,gt=null,rt=null,At=null}}}const s=new e,a=new n,o=new r,c=new WeakMap,u=new WeakMap;let l={},d={},p=new WeakMap,m=[],v=null,M=!1,g=null,f=null,C=null,A=null,y=null,H=null,F=null,U=new Ft(0,0,0),k=0,T=!1,S=null,B=null,nt=null,J=null,ht=null;const ft=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let st=!1,dt=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(j)[1]),st=dt>=1):j.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),st=dt>=2);let Mt=null,Rt={};const Ot=i.getParameter(i.SCISSOR_BOX),Kt=i.getParameter(i.VIEWPORT),le=new Te().fromArray(Ot),it=new Te().fromArray(Kt);function xt(R,ct,z,V){const K=new Uint8Array(4),tt=i.createTexture();i.bindTexture(R,tt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<z;gt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,V,0,i.RGBA,i.UNSIGNED_BYTE,K):i.texImage2D(ct+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,K);return tt}const Pt={};Pt[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),Pt[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pt[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Tt(i.DEPTH_TEST),a.setFunc(Ki),Jt(!1),ne(Mo),Tt(i.CULL_FACE),L(si);function Tt(R){l[R]!==!0&&(i.enable(R),l[R]=!0)}function zt(R){l[R]!==!1&&(i.disable(R),l[R]=!1)}function Vt(R,ct){return d[R]!==ct?(i.bindFramebuffer(R,ct),d[R]=ct,R===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ct),R===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Nt(R,ct){let z=m,V=!1;if(R){z=p.get(ct),z===void 0&&(z=[],p.set(ct,z));const K=R.textures;if(z.length!==K.length||z[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,gt=K.length;tt<gt;tt++)z[tt]=i.COLOR_ATTACHMENT0+tt;z.length=K.length,V=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,V=!0);V&&i.drawBuffers(z)}function _e(R){return v!==R?(i.useProgram(R),v=R,!0):!1}const ie={[gi]:i.FUNC_ADD,[Il]:i.FUNC_SUBTRACT,[Nl]:i.FUNC_REVERSE_SUBTRACT};ie[Fl]=i.MIN,ie[Ol]=i.MAX;const ye={[Bl]:i.ZERO,[zl]:i.ONE,[Vl]:i.SRC_COLOR,[fa]:i.SRC_ALPHA,[ql]:i.SRC_ALPHA_SATURATE,[Wl]:i.DST_COLOR,[Gl]:i.DST_ALPHA,[Hl]:i.ONE_MINUS_SRC_COLOR,[da]:i.ONE_MINUS_SRC_ALPHA,[Xl]:i.ONE_MINUS_DST_COLOR,[kl]:i.ONE_MINUS_DST_ALPHA,[Yl]:i.CONSTANT_COLOR,[$l]:i.ONE_MINUS_CONSTANT_COLOR,[Zl]:i.CONSTANT_ALPHA,[Kl]:i.ONE_MINUS_CONSTANT_ALPHA};function L(R,ct,z,V,K,tt,gt,rt,At,yt){if(R===si){M===!0&&(zt(i.BLEND),M=!1);return}if(M===!1&&(Tt(i.BLEND),M=!0),R!==Ul){if(R!==g||yt!==T){if((f!==gi||y!==gi)&&(i.blendEquation(i.FUNC_ADD),f=gi,y=gi),yt)switch(R){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wt:i.blendFunc(i.ONE,i.ONE);break;case So:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wt:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case So:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}C=null,A=null,H=null,F=null,U.set(0,0,0),k=0,g=R,T=yt}return}K=K||ct,tt=tt||z,gt=gt||V,(ct!==f||K!==y)&&(i.blendEquationSeparate(ie[ct],ie[K]),f=ct,y=K),(z!==C||V!==A||tt!==H||gt!==F)&&(i.blendFuncSeparate(ye[z],ye[V],ye[tt],ye[gt]),C=z,A=V,H=tt,F=gt),(rt.equals(U)===!1||At!==k)&&(i.blendColor(rt.r,rt.g,rt.b,At),U.copy(rt),k=At),g=R,T=!1}function Ye(R,ct){R.side===bn?zt(i.CULL_FACE):Tt(i.CULL_FACE);let z=R.side===cn;ct&&(z=!z),Jt(z),R.blending===Ei&&R.transparent===!1?L(si):L(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const V=R.stencilWrite;o.setTest(V),V&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),fe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Tt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(R){S!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),S=R)}function ne(R){R!==Pl?(Tt(i.CULL_FACE),R!==B&&(R===Mo?i.cullFace(i.BACK):R===Dl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),B=R}function Ut(R){R!==nt&&(st&&i.lineWidth(R),nt=R)}function fe(R,ct,z){R?(Tt(i.POLYGON_OFFSET_FILL),(J!==ct||ht!==z)&&(i.polygonOffset(ct,z),J=ct,ht=z)):zt(i.POLYGON_OFFSET_FILL)}function E(R){R?Tt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function _(R){R===void 0&&(R=i.TEXTURE0+ft-1),Mt!==R&&(i.activeTexture(R),Mt=R)}function h(R,ct,z){z===void 0&&(Mt===null?z=i.TEXTURE0+ft-1:z=Mt);let V=Rt[z];V===void 0&&(V={type:void 0,texture:void 0},Rt[z]=V),(V.type!==R||V.texture!==ct)&&(Mt!==z&&(i.activeTexture(z),Mt=z),i.bindTexture(R,ct||Pt[R]),V.type=R,V.texture=ct)}function b(){const R=Rt[Mt];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function I(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function N(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function P(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Y(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function lt(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function G(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function at(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ut(R){le.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),le.copy(R))}function et(R){it.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),it.copy(R))}function pt(R,ct){let z=u.get(ct);z===void 0&&(z=new WeakMap,u.set(ct,z));let V=z.get(R);V===void 0&&(V=i.getUniformBlockIndex(ct,R.name),z.set(R,V))}function _t(R,ct){const V=u.get(ct).get(R);c.get(ct)!==V&&(i.uniformBlockBinding(ct,V,R.__bindingPointIndex),c.set(ct,V))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},Mt=null,Rt={},d={},p=new WeakMap,m=[],v=null,M=!1,g=null,f=null,C=null,A=null,y=null,H=null,F=null,U=new Ft(0,0,0),k=0,T=!1,S=null,B=null,nt=null,J=null,ht=null,le.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Tt,disable:zt,bindFramebuffer:Vt,drawBuffers:Nt,useProgram:_e,setBlending:L,setMaterial:Ye,setFlipSided:Jt,setCullFace:ne,setLineWidth:Ut,setPolygonOffset:fe,setScissorTest:E,activeTexture:_,bindTexture:h,unbindTexture:b,compressedTexImage2D:I,compressedTexImage3D:N,texImage2D:Q,texImage3D:at,updateUBOMapping:pt,uniformBlockBinding:_t,texStorage2D:lt,texStorage3D:G,texSubImage2D:P,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:$,scissor:ut,viewport:et,reset:Ct}}function rg(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Bt,l=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(_,h){return m?new OffscreenCanvas(_,h):vs("canvas")}function M(_,h,b){let I=1;const N=E(_);if((N.width>b||N.height>b)&&(I=b/Math.max(N.width,N.height)),I<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const P=Math.floor(I*N.width),Z=Math.floor(I*N.height);d===void 0&&(d=v(P,Z));const Y=h?v(P,Z):d;return Y.width=P,Y.height=Z,Y.getContext("2d").drawImage(_,0,0,P,Z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+P+"x"+Z+")."),Y}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),_;return _}function g(_){return _.generateMipmaps}function f(_){i.generateMipmap(_)}function C(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(_,h,b,I,N=!1){if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let P=h;if(h===i.RED&&(b===i.FLOAT&&(P=i.R32F),b===i.HALF_FLOAT&&(P=i.R16F),b===i.UNSIGNED_BYTE&&(P=i.R8)),h===i.RED_INTEGER&&(b===i.UNSIGNED_BYTE&&(P=i.R8UI),b===i.UNSIGNED_SHORT&&(P=i.R16UI),b===i.UNSIGNED_INT&&(P=i.R32UI),b===i.BYTE&&(P=i.R8I),b===i.SHORT&&(P=i.R16I),b===i.INT&&(P=i.R32I)),h===i.RG&&(b===i.FLOAT&&(P=i.RG32F),b===i.HALF_FLOAT&&(P=i.RG16F),b===i.UNSIGNED_BYTE&&(P=i.RG8)),h===i.RG_INTEGER&&(b===i.UNSIGNED_BYTE&&(P=i.RG8UI),b===i.UNSIGNED_SHORT&&(P=i.RG16UI),b===i.UNSIGNED_INT&&(P=i.RG32UI),b===i.BYTE&&(P=i.RG8I),b===i.SHORT&&(P=i.RG16I),b===i.INT&&(P=i.RG32I)),h===i.RGB_INTEGER&&(b===i.UNSIGNED_BYTE&&(P=i.RGB8UI),b===i.UNSIGNED_SHORT&&(P=i.RGB16UI),b===i.UNSIGNED_INT&&(P=i.RGB32UI),b===i.BYTE&&(P=i.RGB8I),b===i.SHORT&&(P=i.RGB16I),b===i.INT&&(P=i.RGB32I)),h===i.RGBA_INTEGER&&(b===i.UNSIGNED_BYTE&&(P=i.RGBA8UI),b===i.UNSIGNED_SHORT&&(P=i.RGBA16UI),b===i.UNSIGNED_INT&&(P=i.RGBA32UI),b===i.BYTE&&(P=i.RGBA8I),b===i.SHORT&&(P=i.RGBA16I),b===i.INT&&(P=i.RGBA32I)),h===i.RGB&&b===i.UNSIGNED_INT_5_9_9_9_REV&&(P=i.RGB9_E5),h===i.RGBA){const Z=N?gs:oe.getTransfer(I);b===i.FLOAT&&(P=i.RGBA32F),b===i.HALF_FLOAT&&(P=i.RGBA16F),b===i.UNSIGNED_BYTE&&(P=Z===de?i.SRGB8_ALPHA8:i.RGBA8),b===i.UNSIGNED_SHORT_4_4_4_4&&(P=i.RGBA4),b===i.UNSIGNED_SHORT_5_5_5_1&&(P=i.RGB5_A1)}return(P===i.R16F||P===i.R32F||P===i.RG16F||P===i.RG32F||P===i.RGBA16F||P===i.RGBA32F)&&t.get("EXT_color_buffer_float"),P}function y(_,h){let b;return _?h===null||h===Ti||h===Qi?b=i.DEPTH24_STENCIL8:h===Wn?b=i.DEPTH32F_STENCIL8:h===yr&&(b=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):h===null||h===Ti||h===Qi?b=i.DEPTH_COMPONENT24:h===Wn?b=i.DEPTH_COMPONENT32F:h===yr&&(b=i.DEPTH_COMPONENT16),b}function H(_,h){return g(_)===!0||_.isFramebufferTexture&&_.minFilter!==Cn&&_.minFilter!==Un?Math.log2(Math.max(h.width,h.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?h.mipmaps.length:1}function F(_){const h=_.target;h.removeEventListener("dispose",F),k(h),h.isVideoTexture&&l.delete(h)}function U(_){const h=_.target;h.removeEventListener("dispose",U),S(h)}function k(_){const h=n.get(_);if(h.__webglInit===void 0)return;const b=_.source,I=p.get(b);if(I){const N=I[h.__cacheKey];N.usedTimes--,N.usedTimes===0&&T(_),Object.keys(I).length===0&&p.delete(b)}n.remove(_)}function T(_){const h=n.get(_);i.deleteTexture(h.__webglTexture);const b=_.source,I=p.get(b);delete I[h.__cacheKey],a.memory.textures--}function S(_){const h=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(h.__webglFramebuffer[I]))for(let N=0;N<h.__webglFramebuffer[I].length;N++)i.deleteFramebuffer(h.__webglFramebuffer[I][N]);else i.deleteFramebuffer(h.__webglFramebuffer[I]);h.__webglDepthbuffer&&i.deleteRenderbuffer(h.__webglDepthbuffer[I])}else{if(Array.isArray(h.__webglFramebuffer))for(let I=0;I<h.__webglFramebuffer.length;I++)i.deleteFramebuffer(h.__webglFramebuffer[I]);else i.deleteFramebuffer(h.__webglFramebuffer);if(h.__webglDepthbuffer&&i.deleteRenderbuffer(h.__webglDepthbuffer),h.__webglMultisampledFramebuffer&&i.deleteFramebuffer(h.__webglMultisampledFramebuffer),h.__webglColorRenderbuffer)for(let I=0;I<h.__webglColorRenderbuffer.length;I++)h.__webglColorRenderbuffer[I]&&i.deleteRenderbuffer(h.__webglColorRenderbuffer[I]);h.__webglDepthRenderbuffer&&i.deleteRenderbuffer(h.__webglDepthRenderbuffer)}const b=_.textures;for(let I=0,N=b.length;I<N;I++){const P=n.get(b[I]);P.__webglTexture&&(i.deleteTexture(P.__webglTexture),a.memory.textures--),n.remove(b[I])}n.remove(_)}let B=0;function nt(){B=0}function J(){const _=B;return _>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+r.maxTextures),B+=1,_}function ht(_){const h=[];return h.push(_.wrapS),h.push(_.wrapT),h.push(_.wrapR||0),h.push(_.magFilter),h.push(_.minFilter),h.push(_.anisotropy),h.push(_.internalFormat),h.push(_.format),h.push(_.type),h.push(_.generateMipmaps),h.push(_.premultiplyAlpha),h.push(_.flipY),h.push(_.unpackAlignment),h.push(_.colorSpace),h.join()}function ft(_,h){const b=n.get(_);if(_.isVideoTexture&&Ut(_),_.isRenderTargetTexture===!1&&_.version>0&&b.__version!==_.version){const I=_.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(b,_,h);return}}e.bindTexture(i.TEXTURE_2D,b.__webglTexture,i.TEXTURE0+h)}function st(_,h){const b=n.get(_);if(_.version>0&&b.__version!==_.version){it(b,_,h);return}e.bindTexture(i.TEXTURE_2D_ARRAY,b.__webglTexture,i.TEXTURE0+h)}function dt(_,h){const b=n.get(_);if(_.version>0&&b.__version!==_.version){it(b,_,h);return}e.bindTexture(i.TEXTURE_3D,b.__webglTexture,i.TEXTURE0+h)}function j(_,h){const b=n.get(_);if(_.version>0&&b.__version!==_.version){xt(b,_,h);return}e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+h)}const Mt={[Ea]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},Rt={[Cn]:i.NEAREST,[au]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[Cs]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},Ot={[hu]:i.NEVER,[_u]:i.ALWAYS,[fu]:i.LESS,[Qc]:i.LEQUAL,[du]:i.EQUAL,[gu]:i.GEQUAL,[pu]:i.GREATER,[mu]:i.NOTEQUAL};function Kt(_,h){if(h.type===Wn&&t.has("OES_texture_float_linear")===!1&&(h.magFilter===Un||h.magFilter===Cs||h.magFilter===Rr||h.magFilter===yi||h.minFilter===Un||h.minFilter===Cs||h.minFilter===Rr||h.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,Mt[h.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,Mt[h.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,Mt[h.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,Rt[h.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,Rt[h.minFilter]),h.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,Ot[h.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(h.magFilter===Cn||h.minFilter!==Rr&&h.minFilter!==yi||h.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(h.anisotropy>1||n.get(h).__currentAnisotropy){const b=t.get("EXT_texture_filter_anisotropic");i.texParameterf(_,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(h.anisotropy,r.getMaxAnisotropy())),n.get(h).__currentAnisotropy=h.anisotropy}}}function le(_,h){let b=!1;_.__webglInit===void 0&&(_.__webglInit=!0,h.addEventListener("dispose",F));const I=h.source;let N=p.get(I);N===void 0&&(N={},p.set(I,N));const P=ht(h);if(P!==_.__cacheKey){N[P]===void 0&&(N[P]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,b=!0),N[P].usedTimes++;const Z=N[_.__cacheKey];Z!==void 0&&(N[_.__cacheKey].usedTimes--,Z.usedTimes===0&&T(h)),_.__cacheKey=P,_.__webglTexture=N[P].texture}return b}function it(_,h,b){let I=i.TEXTURE_2D;(h.isDataArrayTexture||h.isCompressedArrayTexture)&&(I=i.TEXTURE_2D_ARRAY),h.isData3DTexture&&(I=i.TEXTURE_3D);const N=le(_,h),P=h.source;e.bindTexture(I,_.__webglTexture,i.TEXTURE0+b);const Z=n.get(P);if(P.version!==Z.__version||N===!0){e.activeTexture(i.TEXTURE0+b);const Y=oe.getPrimaries(oe.workingColorSpace),$=h.colorSpace===ri?null:oe.getPrimaries(h.colorSpace),lt=h.colorSpace===ri||Y===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,h.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,h.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let G=M(h.image,!1,r.maxTextureSize);G=fe(h,G);const Q=s.convert(h.format,h.colorSpace),at=s.convert(h.type);let ut=A(h.internalFormat,Q,at,h.colorSpace,h.isVideoTexture);Kt(I,h);let et;const pt=h.mipmaps,_t=h.isVideoTexture!==!0,Ct=Z.__version===void 0||N===!0,R=P.dataReady,ct=H(h,G);if(h.isDepthTexture)ut=y(h.format===tr,h.type),Ct&&(_t?e.texStorage2D(i.TEXTURE_2D,1,ut,G.width,G.height):e.texImage2D(i.TEXTURE_2D,0,ut,G.width,G.height,0,Q,at,null));else if(h.isDataTexture)if(pt.length>0){_t&&Ct&&e.texStorage2D(i.TEXTURE_2D,ct,ut,pt[0].width,pt[0].height);for(let z=0,V=pt.length;z<V;z++)et=pt[z],_t?R&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,et.width,et.height,Q,at,et.data):e.texImage2D(i.TEXTURE_2D,z,ut,et.width,et.height,0,Q,at,et.data);h.generateMipmaps=!1}else _t?(Ct&&e.texStorage2D(i.TEXTURE_2D,ct,ut,G.width,G.height),R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,G.width,G.height,Q,at,G.data)):e.texImage2D(i.TEXTURE_2D,0,ut,G.width,G.height,0,Q,at,G.data);else if(h.isCompressedTexture)if(h.isCompressedArrayTexture){_t&&Ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,ut,pt[0].width,pt[0].height,G.depth);for(let z=0,V=pt.length;z<V;z++)if(et=pt[z],h.format!==Rn)if(Q!==null)if(_t){if(R)if(h.layerUpdates.size>0){const K=nc(et.width,et.height,h.format,h.type);for(const tt of h.layerUpdates){const gt=et.data.subarray(tt*K/et.data.BYTES_PER_ELEMENT,(tt+1)*K/et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,tt,et.width,et.height,1,Q,gt)}h.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,et.width,et.height,G.depth,Q,et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,ut,et.width,et.height,G.depth,0,et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _t?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,et.width,et.height,G.depth,Q,at,et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,ut,et.width,et.height,G.depth,0,Q,at,et.data)}else{_t&&Ct&&e.texStorage2D(i.TEXTURE_2D,ct,ut,pt[0].width,pt[0].height);for(let z=0,V=pt.length;z<V;z++)et=pt[z],h.format!==Rn?Q!==null?_t?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,et.width,et.height,Q,et.data):e.compressedTexImage2D(i.TEXTURE_2D,z,ut,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?R&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,et.width,et.height,Q,at,et.data):e.texImage2D(i.TEXTURE_2D,z,ut,et.width,et.height,0,Q,at,et.data)}else if(h.isDataArrayTexture)if(_t){if(Ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,ut,G.width,G.height,G.depth),R)if(h.layerUpdates.size>0){const z=nc(G.width,G.height,h.format,h.type);for(const V of h.layerUpdates){const K=G.data.subarray(V*z/G.data.BYTES_PER_ELEMENT,(V+1)*z/G.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,V,G.width,G.height,1,Q,at,K)}h.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,Q,at,G.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,G.width,G.height,G.depth,0,Q,at,G.data);else if(h.isData3DTexture)_t?(Ct&&e.texStorage3D(i.TEXTURE_3D,ct,ut,G.width,G.height,G.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,Q,at,G.data)):e.texImage3D(i.TEXTURE_3D,0,ut,G.width,G.height,G.depth,0,Q,at,G.data);else if(h.isFramebufferTexture){if(Ct)if(_t)e.texStorage2D(i.TEXTURE_2D,ct,ut,G.width,G.height);else{let z=G.width,V=G.height;for(let K=0;K<ct;K++)e.texImage2D(i.TEXTURE_2D,K,ut,z,V,0,Q,at,null),z>>=1,V>>=1}}else if(pt.length>0){if(_t&&Ct){const z=E(pt[0]);e.texStorage2D(i.TEXTURE_2D,ct,ut,z.width,z.height)}for(let z=0,V=pt.length;z<V;z++)et=pt[z],_t?R&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,Q,at,et):e.texImage2D(i.TEXTURE_2D,z,ut,Q,at,et);h.generateMipmaps=!1}else if(_t){if(Ct){const z=E(G);e.texStorage2D(i.TEXTURE_2D,ct,ut,z.width,z.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q,at,G)}else e.texImage2D(i.TEXTURE_2D,0,ut,Q,at,G);g(h)&&f(I),Z.__version=P.version,h.onUpdate&&h.onUpdate(h)}_.__version=h.version}function xt(_,h,b){if(h.image.length!==6)return;const I=le(_,h),N=h.source;e.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+b);const P=n.get(N);if(N.version!==P.__version||I===!0){e.activeTexture(i.TEXTURE0+b);const Z=oe.getPrimaries(oe.workingColorSpace),Y=h.colorSpace===ri?null:oe.getPrimaries(h.colorSpace),$=h.colorSpace===ri||Z===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,h.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,h.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const lt=h.isCompressedTexture||h.image[0].isCompressedTexture,G=h.image[0]&&h.image[0].isDataTexture,Q=[];for(let V=0;V<6;V++)!lt&&!G?Q[V]=M(h.image[V],!0,r.maxCubemapSize):Q[V]=G?h.image[V].image:h.image[V],Q[V]=fe(h,Q[V]);const at=Q[0],ut=s.convert(h.format,h.colorSpace),et=s.convert(h.type),pt=A(h.internalFormat,ut,et,h.colorSpace),_t=h.isVideoTexture!==!0,Ct=P.__version===void 0||I===!0,R=N.dataReady;let ct=H(h,at);Kt(i.TEXTURE_CUBE_MAP,h);let z;if(lt){_t&&Ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,pt,at.width,at.height);for(let V=0;V<6;V++){z=Q[V].mipmaps;for(let K=0;K<z.length;K++){const tt=z[K];h.format!==Rn?ut!==null?_t?R&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,K,0,0,tt.width,tt.height,ut,tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,K,pt,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,K,0,0,tt.width,tt.height,ut,et,tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,K,pt,tt.width,tt.height,0,ut,et,tt.data)}}}else{if(z=h.mipmaps,_t&&Ct){z.length>0&&ct++;const V=E(Q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,pt,V.width,V.height)}for(let V=0;V<6;V++)if(G){_t?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Q[V].width,Q[V].height,ut,et,Q[V].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,pt,Q[V].width,Q[V].height,0,ut,et,Q[V].data);for(let K=0;K<z.length;K++){const gt=z[K].image[V].image;_t?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,K+1,0,0,gt.width,gt.height,ut,et,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,K+1,pt,gt.width,gt.height,0,ut,et,gt.data)}}else{_t?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,ut,et,Q[V]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,pt,ut,et,Q[V]);for(let K=0;K<z.length;K++){const tt=z[K];_t?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,K+1,0,0,ut,et,tt.image[V]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,K+1,pt,ut,et,tt.image[V])}}}g(h)&&f(i.TEXTURE_CUBE_MAP),P.__version=N.version,h.onUpdate&&h.onUpdate(h)}_.__version=h.version}function Pt(_,h,b,I,N,P){const Z=s.convert(b.format,b.colorSpace),Y=s.convert(b.type),$=A(b.internalFormat,Z,Y,b.colorSpace),lt=n.get(h),G=n.get(b);if(G.__renderTarget=h,!lt.__hasExternalTextures){const Q=Math.max(1,h.width>>P),at=Math.max(1,h.height>>P);N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?e.texImage3D(N,P,$,Q,at,h.depth,0,Z,Y,null):e.texImage2D(N,P,$,Q,at,0,Z,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,_),ne(h)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,I,N,G.__webglTexture,0,Jt(h)):(N===i.TEXTURE_2D||N>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,I,N,G.__webglTexture,P),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(_,h,b){if(i.bindRenderbuffer(i.RENDERBUFFER,_),h.depthBuffer){const I=h.depthTexture,N=I&&I.isDepthTexture?I.type:null,P=y(h.stencilBuffer,N),Z=h.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=Jt(h);ne(h)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Y,P,h.width,h.height):b?i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,P,h.width,h.height):i.renderbufferStorage(i.RENDERBUFFER,P,h.width,h.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,_)}else{const I=h.textures;for(let N=0;N<I.length;N++){const P=I[N],Z=s.convert(P.format,P.colorSpace),Y=s.convert(P.type),$=A(P.internalFormat,Z,Y,P.colorSpace),lt=Jt(h);b&&ne(h)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,$,h.width,h.height):ne(h)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,$,h.width,h.height):i.renderbufferStorage(i.RENDERBUFFER,$,h.width,h.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(_,h){if(h&&h.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,_),!(h.depthTexture&&h.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const I=n.get(h.depthTexture);I.__renderTarget=h,(!I.__webglTexture||h.depthTexture.image.width!==h.width||h.depthTexture.image.height!==h.height)&&(h.depthTexture.image.width=h.width,h.depthTexture.image.height=h.height,h.depthTexture.needsUpdate=!0),ft(h.depthTexture,0);const N=I.__webglTexture,P=Jt(h);if(h.depthTexture.format===$i)ne(h)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,N,0,P):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,N,0);else if(h.depthTexture.format===tr)ne(h)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,N,0,P):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function Vt(_){const h=n.get(_),b=_.isWebGLCubeRenderTarget===!0;if(h.__boundDepthTexture!==_.depthTexture){const I=_.depthTexture;if(h.__depthDisposeCallback&&h.__depthDisposeCallback(),I){const N=()=>{delete h.__boundDepthTexture,delete h.__depthDisposeCallback,I.removeEventListener("dispose",N)};I.addEventListener("dispose",N),h.__depthDisposeCallback=N}h.__boundDepthTexture=I}if(_.depthTexture&&!h.__autoAllocateDepthBuffer){if(b)throw new Error("target.depthTexture not supported in Cube render targets");zt(h.__webglFramebuffer,_)}else if(b){h.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(e.bindFramebuffer(i.FRAMEBUFFER,h.__webglFramebuffer[I]),h.__webglDepthbuffer[I]===void 0)h.__webglDepthbuffer[I]=i.createRenderbuffer(),Tt(h.__webglDepthbuffer[I],_,!1);else{const N=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=h.__webglDepthbuffer[I];i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,N,i.RENDERBUFFER,P)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,h.__webglFramebuffer),h.__webglDepthbuffer===void 0)h.__webglDepthbuffer=i.createRenderbuffer(),Tt(h.__webglDepthbuffer,_,!1);else{const I=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=h.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,I,i.RENDERBUFFER,N)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(_,h,b){const I=n.get(_);h!==void 0&&Pt(I.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),b!==void 0&&Vt(_)}function _e(_){const h=_.texture,b=n.get(_),I=n.get(h);_.addEventListener("dispose",U);const N=_.textures,P=_.isWebGLCubeRenderTarget===!0,Z=N.length>1;if(Z||(I.__webglTexture===void 0&&(I.__webglTexture=i.createTexture()),I.__version=h.version,a.memory.textures++),P){b.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(h.mipmaps&&h.mipmaps.length>0){b.__webglFramebuffer[Y]=[];for(let $=0;$<h.mipmaps.length;$++)b.__webglFramebuffer[Y][$]=i.createFramebuffer()}else b.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(h.mipmaps&&h.mipmaps.length>0){b.__webglFramebuffer=[];for(let Y=0;Y<h.mipmaps.length;Y++)b.__webglFramebuffer[Y]=i.createFramebuffer()}else b.__webglFramebuffer=i.createFramebuffer();if(Z)for(let Y=0,$=N.length;Y<$;Y++){const lt=n.get(N[Y]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(_.samples>0&&ne(_)===!1){b.__webglMultisampledFramebuffer=i.createFramebuffer(),b.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let Y=0;Y<N.length;Y++){const $=N[Y];b.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,b.__webglColorRenderbuffer[Y]);const lt=s.convert($.format,$.colorSpace),G=s.convert($.type),Q=A($.internalFormat,lt,G,$.colorSpace,_.isXRRenderTarget===!0),at=Jt(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,b.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(b.__webglDepthRenderbuffer=i.createRenderbuffer(),Tt(b.__webglDepthRenderbuffer,_,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(P){e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,h);for(let Y=0;Y<6;Y++)if(h.mipmaps&&h.mipmaps.length>0)for(let $=0;$<h.mipmaps.length;$++)Pt(b.__webglFramebuffer[Y][$],_,h,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else Pt(b.__webglFramebuffer[Y],_,h,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);g(h)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Z){for(let Y=0,$=N.length;Y<$;Y++){const lt=N[Y],G=n.get(lt);e.bindTexture(i.TEXTURE_2D,G.__webglTexture),Kt(i.TEXTURE_2D,lt),Pt(b.__webglFramebuffer,_,lt,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,0),g(lt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(Y=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,I.__webglTexture),Kt(Y,h),h.mipmaps&&h.mipmaps.length>0)for(let $=0;$<h.mipmaps.length;$++)Pt(b.__webglFramebuffer[$],_,h,i.COLOR_ATTACHMENT0,Y,$);else Pt(b.__webglFramebuffer,_,h,i.COLOR_ATTACHMENT0,Y,0);g(h)&&f(Y),e.unbindTexture()}_.depthBuffer&&Vt(_)}function ie(_){const h=_.textures;for(let b=0,I=h.length;b<I;b++){const N=h[b];if(g(N)){const P=C(_),Z=n.get(N).__webglTexture;e.bindTexture(P,Z),f(P),e.unbindTexture()}}}const ye=[],L=[];function Ye(_){if(_.samples>0){if(ne(_)===!1){const h=_.textures,b=_.width,I=_.height;let N=i.COLOR_BUFFER_BIT;const P=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=n.get(_),Y=h.length>1;if(Y)for(let $=0;$<h.length;$++)e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let $=0;$<h.length;$++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(N|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(N|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Z.__webglColorRenderbuffer[$]);const lt=n.get(h[$]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,b,I,0,0,b,I,N,i.NEAREST),c===!0&&(ye.length=0,L.length=0,ye.push(i.COLOR_ATTACHMENT0+$),_.depthBuffer&&_.resolveDepthBuffer===!1&&(ye.push(P),L.push(P),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let $=0;$<h.length;$++){e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,Z.__webglColorRenderbuffer[$]);const lt=n.get(h[$]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&c){const h=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[h])}}}function Jt(_){return Math.min(r.maxSamples,_.samples)}function ne(_){const h=n.get(_);return _.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&h.__useRenderToTexture!==!1}function Ut(_){const h=a.render.frame;l.get(_)!==h&&(l.set(_,h),_.update())}function fe(_,h){const b=_.colorSpace,I=_.format,N=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||b!==er&&b!==ri&&(oe.getTransfer(b)===de?(I!==Rn||N!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",b)),h}function E(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(u.width=_.naturalWidth||_.width,u.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(u.width=_.displayWidth,u.height=_.displayHeight):(u.width=_.width,u.height=_.height),u}this.allocateTextureUnit=J,this.resetTextureUnits=nt,this.setTexture2D=ft,this.setTexture2DArray=st,this.setTexture3D=dt,this.setTextureCube=j,this.rebindTextures=Nt,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=ne}function sg(i,t){function e(n,r=ri){let s;const a=oe.getTransfer(r);if(n===$n)return i.UNSIGNED_BYTE;if(n===so)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kc)return i.BYTE;if(n===Wc)return i.SHORT;if(n===yr)return i.UNSIGNED_SHORT;if(n===ro)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Tr)return i.HALF_FLOAT;if(n===qc)return i.ALPHA;if(n===Yc)return i.RGB;if(n===Rn)return i.RGBA;if(n===$c)return i.LUMINANCE;if(n===Zc)return i.LUMINANCE_ALPHA;if(n===$i)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===Kc)return i.RED;if(n===oo)return i.RED_INTEGER;if(n===Jc)return i.RG;if(n===co)return i.RG_INTEGER;if(n===lo)return i.RGBA_INTEGER;if(n===cs||n===ls||n===us||n===hs)if(a===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===cs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===cs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ls)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===us)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===Aa||n===wa||n===Ra)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ba)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Aa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Pa||n===Da)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ca||n===Pa)return a===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Da)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===La||n===Ua||n===Ia||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===Va||n===Ha||n===Ga||n===ka||n===Wa||n===Xa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===La)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ia)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Va)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ha)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ga)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fs||n===qa||n===Ya)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===fs)return a===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jc||n===$a||n===Za||n===Ka)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===fs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Za)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ka)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ag={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const M of t.hand.values()){const g=e.getJointPose(M,n),f=this._getHandJoint(u,M);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const l=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],p=l.position.distanceTo(d.position),m=.02,v=.005;u.inputState.pinching&&p>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&p<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ag)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cg=`
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

}`;class lg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new rn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new hn({vertexShader:og,fragmentShader:cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xe(new ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ug extends ir{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,l=null,d=null,p=null,m=null,v=null;const M=new lg,g=e.getContextAttributes();let f=null,C=null;const A=[],y=[],H=new Bt;let F=null;const U=new gn;U.viewport=new Te;const k=new gn;k.viewport=new Te;const T=[U,k],S=new Ch;let B=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let xt=A[it];return xt===void 0&&(xt=new oa,A[it]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(it){let xt=A[it];return xt===void 0&&(xt=new oa,A[it]=xt),xt.getGripSpace()},this.getHand=function(it){let xt=A[it];return xt===void 0&&(xt=new oa,A[it]=xt),xt.getHandSpace()};function J(it){const xt=y.indexOf(it.inputSource);if(xt===-1)return;const Pt=A[xt];Pt!==void 0&&(Pt.update(it.inputSource,it.frame,u||a),Pt.dispatchEvent({type:it.type,data:it.inputSource}))}function ht(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",ht),r.removeEventListener("inputsourceschange",ft);for(let it=0;it<A.length;it++){const xt=y[it];xt!==null&&(y[it]=null,A[it].disconnect(xt))}B=null,nt=null,M.reset(),t.setRenderTarget(f),m=null,p=null,d=null,r=null,C=null,le.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(H.width,H.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){s=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(it){u=it},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(it){if(r=it,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",ht),r.addEventListener("inputsourceschange",ft),g.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(H),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let Pt=null,Tt=null,zt=null;g.depth&&(zt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=g.stencil?tr:$i,Tt=g.stencil?Qi:Ti);const Vt={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:s};d=new XRWebGLBinding(r,e),p=d.createProjectionLayer(Vt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),C=new bi(p.textureWidth,p.textureHeight,{format:Rn,type:$n,depthTexture:new fl(p.textureWidth,p.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}else{const Pt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,Pt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),C=new bi(m.framebufferWidth,m.framebufferHeight,{format:Rn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}C.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ft(it){for(let xt=0;xt<it.removed.length;xt++){const Pt=it.removed[xt],Tt=y.indexOf(Pt);Tt>=0&&(y[Tt]=null,A[Tt].disconnect(Pt))}for(let xt=0;xt<it.added.length;xt++){const Pt=it.added[xt];let Tt=y.indexOf(Pt);if(Tt===-1){for(let Vt=0;Vt<A.length;Vt++)if(Vt>=y.length){y.push(Pt),Tt=Vt;break}else if(y[Vt]===null){y[Vt]=Pt,Tt=Vt;break}if(Tt===-1)break}const zt=A[Tt];zt&&zt.connect(Pt)}}const st=new w,dt=new w;function j(it,xt,Pt){st.setFromMatrixPosition(xt.matrixWorld),dt.setFromMatrixPosition(Pt.matrixWorld);const Tt=st.distanceTo(dt),zt=xt.projectionMatrix.elements,Vt=Pt.projectionMatrix.elements,Nt=zt[14]/(zt[10]-1),_e=zt[14]/(zt[10]+1),ie=(zt[9]+1)/zt[5],ye=(zt[9]-1)/zt[5],L=(zt[8]-1)/zt[0],Ye=(Vt[8]+1)/Vt[0],Jt=Nt*L,ne=Nt*Ye,Ut=Tt/(-L+Ye),fe=Ut*-L;if(xt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(fe),it.translateZ(Ut),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),zt[10]===-1)it.projectionMatrix.copy(xt.projectionMatrix),it.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const E=Nt+Ut,_=_e+Ut,h=Jt-fe,b=ne+(Tt-fe),I=ie*_e/_*E,N=ye*_e/_*E;it.projectionMatrix.makePerspective(h,b,I,N,E,_),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Mt(it,xt){xt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(xt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(r===null)return;let xt=it.near,Pt=it.far;M.texture!==null&&(M.depthNear>0&&(xt=M.depthNear),M.depthFar>0&&(Pt=M.depthFar)),S.near=k.near=U.near=xt,S.far=k.far=U.far=Pt,(B!==S.near||nt!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),B=S.near,nt=S.far),U.layers.mask=it.layers.mask|2,k.layers.mask=it.layers.mask|4,S.layers.mask=U.layers.mask|k.layers.mask;const Tt=it.parent,zt=S.cameras;Mt(S,Tt);for(let Vt=0;Vt<zt.length;Vt++)Mt(zt[Vt],Tt);zt.length===2?j(S,U,k):S.projectionMatrix.copy(U.projectionMatrix),Rt(it,S,Tt)};function Rt(it,xt,Pt){Pt===null?it.matrix.copy(xt.matrixWorld):(it.matrix.copy(Pt.matrixWorld),it.matrix.invert(),it.matrix.multiply(xt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(xt.projectionMatrix),it.projectionMatrixInverse.copy(xt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Er*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(it){c=it,p!==null&&(p.fixedFoveation=it),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(S)};let Ot=null;function Kt(it,xt){if(l=xt.getViewerPose(u||a),v=xt,l!==null){const Pt=l.views;m!==null&&(t.setRenderTargetFramebuffer(C,m.framebuffer),t.setRenderTarget(C));let Tt=!1;Pt.length!==S.cameras.length&&(S.cameras.length=0,Tt=!0);for(let Vt=0;Vt<Pt.length;Vt++){const Nt=Pt[Vt];let _e=null;if(m!==null)_e=m.getViewport(Nt);else{const ye=d.getViewSubImage(p,Nt);_e=ye.viewport,Vt===0&&(t.setRenderTargetTextures(C,ye.colorTexture,p.ignoreDepthValues?void 0:ye.depthStencilTexture),t.setRenderTarget(C))}let ie=T[Vt];ie===void 0&&(ie=new gn,ie.layers.enable(Vt),ie.viewport=new Te,T[Vt]=ie),ie.matrix.fromArray(Nt.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Nt.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(_e.x,_e.y,_e.width,_e.height),Vt===0&&(S.matrix.copy(ie.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Tt===!0&&S.cameras.push(ie)}const zt=r.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Vt=d.getDepthInformation(Pt[0]);Vt&&Vt.isValid&&Vt.texture&&M.init(t,Vt,r.renderState)}}for(let Pt=0;Pt<A.length;Pt++){const Tt=y[Pt],zt=A[Pt];Tt!==null&&zt!==void 0&&zt.update(Tt,xt,u||a)}Ot&&Ot(it,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),v=null}const le=new gl;le.setAnimationLoop(Kt),this.setAnimationLoop=function(it){Ot=it},this.dispose=function(){}}}const di=new Zn,hg=new Se;function fg(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,ol(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,C,A,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),d(g,f)):f.isMeshPhongMaterial?(s(g,f),l(g,f)):f.isMeshStandardMaterial?(s(g,f),p(g,f),f.isMeshPhysicalMaterial&&m(g,f,y)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),M(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?c(g,f,C,A):f.isSpriteMaterial?u(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===cn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===cn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const C=t.get(f),A=C.envMap,y=C.envMapRotation;A&&(g.envMap.value=A,di.copy(y),di.x*=-1,di.y*=-1,di.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),g.envMapRotation.value.setFromMatrix4(hg.makeRotationFromEuler(di)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,C,A){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*C,g.scale.value=A*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function p(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,C){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function M(g,f){const C=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function dg(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,A){const y=A.program;n.uniformBlockBinding(C,y)}function u(C,A){let y=r[C.id];y===void 0&&(v(C),y=l(C),r[C.id]=y,C.addEventListener("dispose",g));const H=A.program;n.updateUBOMapping(C,H);const F=t.render.frame;s[C.id]!==F&&(p(C),s[C.id]=F)}function l(C){const A=d();C.__bindingPointIndex=A;const y=i.createBuffer(),H=C.__size,F=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,H,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,y),y}function d(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(C){const A=r[C.id],y=C.uniforms,H=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let F=0,U=y.length;F<U;F++){const k=Array.isArray(y[F])?y[F]:[y[F]];for(let T=0,S=k.length;T<S;T++){const B=k[T];if(m(B,F,T,H)===!0){const nt=B.__offset,J=Array.isArray(B.value)?B.value:[B.value];let ht=0;for(let ft=0;ft<J.length;ft++){const st=J[ft],dt=M(st);typeof st=="number"||typeof st=="boolean"?(B.__data[0]=st,i.bufferSubData(i.UNIFORM_BUFFER,nt+ht,B.__data)):st.isMatrix3?(B.__data[0]=st.elements[0],B.__data[1]=st.elements[1],B.__data[2]=st.elements[2],B.__data[3]=0,B.__data[4]=st.elements[3],B.__data[5]=st.elements[4],B.__data[6]=st.elements[5],B.__data[7]=0,B.__data[8]=st.elements[6],B.__data[9]=st.elements[7],B.__data[10]=st.elements[8],B.__data[11]=0):(st.toArray(B.__data,ht),ht+=dt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,nt,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(C,A,y,H){const F=C.value,U=A+"_"+y;if(H[U]===void 0)return typeof F=="number"||typeof F=="boolean"?H[U]=F:H[U]=F.clone(),!0;{const k=H[U];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return H[U]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function v(C){const A=C.uniforms;let y=0;const H=16;for(let U=0,k=A.length;U<k;U++){const T=Array.isArray(A[U])?A[U]:[A[U]];for(let S=0,B=T.length;S<B;S++){const nt=T[S],J=Array.isArray(nt.value)?nt.value:[nt.value];for(let ht=0,ft=J.length;ht<ft;ht++){const st=J[ht],dt=M(st),j=y%H,Mt=j%dt.boundary,Rt=j+Mt;y+=Mt,Rt!==0&&H-Rt<dt.storage&&(y+=H-Rt),nt.__data=new Float32Array(dt.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=y,y+=dt.storage}}}const F=y%H;return F>0&&(y+=H-F),C.__size=y,C.__cache={},this}function M(C){const A={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(A.boundary=4,A.storage=4):C.isVector2?(A.boundary=8,A.storage=8):C.isVector3||C.isColor?(A.boundary=16,A.storage=12):C.isVector4?(A.boundary=16,A.storage=16):C.isMatrix3?(A.boundary=48,A.storage=48):C.isMatrix4?(A.boundary=64,A.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),A}function g(C){const A=C.target;A.removeEventListener("dispose",g);const y=a.indexOf(A.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function f(){for(const C in r)i.deleteBuffer(r[C]);a=[],r={},s={}}return{bind:c,update:u,dispose:f}}class pg{constructor(t={}){const{canvas:e=Iu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),M=new Int32Array(4);let g=null,f=null;const C=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=ai,this.toneMappingExposure=1;const y=this;let H=!1,F=0,U=0,k=null,T=-1,S=null;const B=new Te,nt=new Te;let J=null;const ht=new Ft(0);let ft=0,st=e.width,dt=e.height,j=1,Mt=null,Rt=null;const Ot=new Te(0,0,st,dt),Kt=new Te(0,0,st,dt);let le=!1;const it=new hl;let xt=!1,Pt=!1;this.transmissionResolutionScale=1;const Tt=new Se,zt=new Se,Vt=new w,Nt=new Te,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function ye(){return k===null?j:1}let L=n;function Ye(x,O){return e.getContext(x,O)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${io}`),e.addEventListener("webglcontextlost",V,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",tt,!1),L===null){const O="webgl2";if(L=Ye(O,x),L===null)throw Ye(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Jt,ne,Ut,fe,E,_,h,b,I,N,P,Z,Y,$,lt,G,Q,at,ut,et,pt,_t,Ct,R;function ct(){Jt=new Ep(L),Jt.init(),_t=new sg(L,Jt),ne=new _p(L,Jt,t,_t),Ut=new ig(L,Jt),ne.reverseDepthBuffer&&p&&Ut.buffers.depth.setReversed(!0),fe=new Ap(L),E=new Wm,_=new rg(L,Jt,Ut,E,ne,_t,fe),h=new xp(y),b=new yp(y),I=new Lh(L),Ct=new mp(L,I),N=new Tp(L,I,fe,Ct),P=new Rp(L,N,I,fe),ut=new wp(L,ne,_),G=new vp(E),Z=new km(y,h,b,Jt,ne,Ct,G),Y=new fg(y,E),$=new qm,lt=new jm(Jt),at=new pp(y,h,b,Ut,P,m,c),Q=new eg(y,P,ne),R=new dg(L,fe,ne,Ut),et=new gp(L,Jt,fe),pt=new bp(L,Jt,fe),fe.programs=Z.programs,y.capabilities=ne,y.extensions=Jt,y.properties=E,y.renderLists=$,y.shadowMap=Q,y.state=Ut,y.info=fe}ct();const z=new ug(y,L);this.xr=z,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const x=Jt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Jt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize(st,dt,!1))},this.getSize=function(x){return x.set(st,dt)},this.setSize=function(x,O,X=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}st=x,dt=O,e.width=Math.floor(x*j),e.height=Math.floor(O*j),X===!0&&(e.style.width=x+"px",e.style.height=O+"px"),this.setViewport(0,0,x,O)},this.getDrawingBufferSize=function(x){return x.set(st*j,dt*j).floor()},this.setDrawingBufferSize=function(x,O,X){st=x,dt=O,j=X,e.width=Math.floor(x*X),e.height=Math.floor(O*X),this.setViewport(0,0,x,O)},this.getCurrentViewport=function(x){return x.copy(B)},this.getViewport=function(x){return x.copy(Ot)},this.setViewport=function(x,O,X,q){x.isVector4?Ot.set(x.x,x.y,x.z,x.w):Ot.set(x,O,X,q),Ut.viewport(B.copy(Ot).multiplyScalar(j).round())},this.getScissor=function(x){return x.copy(Kt)},this.setScissor=function(x,O,X,q){x.isVector4?Kt.set(x.x,x.y,x.z,x.w):Kt.set(x,O,X,q),Ut.scissor(nt.copy(Kt).multiplyScalar(j).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(x){Ut.setScissorTest(le=x)},this.setOpaqueSort=function(x){Mt=x},this.setTransparentSort=function(x){Rt=x},this.getClearColor=function(x){return x.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(x=!0,O=!0,X=!0){let q=0;if(x){let D=!1;if(k!==null){const W=k.texture.format;D=W===lo||W===co||W===oo}if(D){const W=k.texture.type,ot=W===$n||W===Ti||W===yr||W===Qi||W===so||W===ao,vt=at.getClearColor(),mt=at.getClearAlpha(),Et=vt.r,bt=vt.g,wt=vt.b;ot?(v[0]=Et,v[1]=bt,v[2]=wt,v[3]=mt,L.clearBufferuiv(L.COLOR,0,v)):(M[0]=Et,M[1]=bt,M[2]=wt,M[3]=mt,L.clearBufferiv(L.COLOR,0,M))}else q|=L.COLOR_BUFFER_BIT}O&&(q|=L.DEPTH_BUFFER_BIT),X&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",V,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),at.dispose(),$.dispose(),lt.dispose(),E.dispose(),h.dispose(),b.dispose(),P.dispose(),Ct.dispose(),R.dispose(),Z.dispose(),z.dispose(),z.removeEventListener("sessionstart",me),z.removeEventListener("sessionend",$t),re.stop()};function V(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const x=fe.autoReset,O=Q.enabled,X=Q.autoUpdate,q=Q.needsUpdate,D=Q.type;ct(),fe.autoReset=x,Q.enabled=O,Q.autoUpdate=X,Q.needsUpdate=q,Q.type=D}function tt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function gt(x){const O=x.target;O.removeEventListener("dispose",gt),rt(O)}function rt(x){At(x),E.remove(x)}function At(x){const O=E.get(x).programs;O!==void 0&&(O.forEach(function(X){Z.releaseProgram(X)}),x.isShaderMaterial&&Z.releaseShaderCache(x))}this.renderBufferDirect=function(x,O,X,q,D,W){O===null&&(O=_e);const ot=D.isMesh&&D.matrixWorld.determinant()<0,vt=Kn(x,O,X,q,D);Ut.setMaterial(q,ot);let mt=X.index,Et=1;if(q.wireframe===!0){if(mt=N.getWireframeAttribute(X),mt===void 0)return;Et=2}const bt=X.drawRange,wt=X.attributes.position;let Gt=bt.start*Et,kt=(bt.start+bt.count)*Et;W!==null&&(Gt=Math.max(Gt,W.start*Et),kt=Math.min(kt,(W.start+W.count)*Et)),mt!==null?(Gt=Math.max(Gt,0),kt=Math.min(kt,mt.count)):wt!=null&&(Gt=Math.max(Gt,0),kt=Math.min(kt,wt.count));const Qt=kt-Gt;if(Qt<0||Qt===1/0)return;Ct.setup(D,q,vt,X,mt);let te,qt=et;if(mt!==null&&(te=I.get(mt),qt=pt,qt.setIndex(te)),D.isMesh)q.wireframe===!0?(Ut.setLineWidth(q.wireframeLinewidth*ye()),qt.setMode(L.LINES)):qt.setMode(L.TRIANGLES);else if(D.isLine){let Dt=q.linewidth;Dt===void 0&&(Dt=1),Ut.setLineWidth(Dt*ye()),D.isLineSegments?qt.setMode(L.LINES):D.isLineLoop?qt.setMode(L.LINE_LOOP):qt.setMode(L.LINE_STRIP)}else D.isPoints?qt.setMode(L.POINTS):D.isSprite&&qt.setMode(L.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)qt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))qt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Dt=D._multiDrawStarts,Ee=D._multiDrawCounts,Ht=D._multiDrawCount,pe=mt?I.get(mt).bytesPerElement:1,Ke=E.get(q).currentProgram.getUniforms();for(let Ae=0;Ae<Ht;Ae++)Ke.setValue(L,"_gl_DrawID",Ae),qt.render(Dt[Ae]/pe,Ee[Ae])}else if(D.isInstancedMesh)qt.renderInstances(Gt,Qt,D.count);else if(X.isInstancedBufferGeometry){const Dt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ee=Math.min(X.instanceCount,Dt);qt.renderInstances(Gt,Qt,Ee)}else qt.render(Gt,Qt)};function yt(x,O,X){x.transparent===!0&&x.side===bn&&x.forceSinglePass===!1?(x.side=cn,x.needsUpdate=!0,$e(x,O,X),x.side=oi,x.needsUpdate=!0,$e(x,O,X),x.side=bn):$e(x,O,X)}this.compile=function(x,O,X=null){X===null&&(X=x),f=lt.get(X),f.init(O),A.push(f),X.traverseVisible(function(D){D.isLight&&D.layers.test(O.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),x!==X&&x.traverseVisible(function(D){D.isLight&&D.layers.test(O.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();const q=new Set;return x.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const W=D.material;if(W)if(Array.isArray(W))for(let ot=0;ot<W.length;ot++){const vt=W[ot];yt(vt,X,D),q.add(vt)}else yt(W,X,D),q.add(W)}),A.pop(),f=null,q},this.compileAsync=function(x,O,X=null){const q=this.compile(x,O,X);return new Promise(D=>{function W(){if(q.forEach(function(ot){E.get(ot).currentProgram.isReady()&&q.delete(ot)}),q.size===0){D(x);return}setTimeout(W,10)}Jt.get("KHR_parallel_shader_compile")!==null?W():setTimeout(W,10)})};let Lt=null;function It(x){Lt&&Lt(x)}function me(){re.stop()}function $t(){re.start()}const re=new gl;re.setAnimationLoop(It),typeof self<"u"&&re.setContext(self),this.setAnimationLoop=function(x){Lt=x,z.setAnimationLoop(x),x===null?re.stop():re.start()},z.addEventListener("sessionstart",me),z.addEventListener("sessionend",$t),this.render=function(x,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(O),O=z.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,O,k),f=lt.get(x,A.length),f.init(O),A.push(f),zt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),it.setFromProjectionMatrix(zt),Pt=this.localClippingEnabled,xt=G.init(this.clippingPlanes,Pt),g=$.get(x,C.length),g.init(),C.push(g),z.enabled===!0&&z.isPresenting===!0){const W=y.xr.getDepthSensingMesh();W!==null&&se(W,O,-1/0,y.sortObjects)}se(x,O,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(Mt,Rt),ie=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,ie&&at.addToRenderList(g,x),this.info.render.frame++,xt===!0&&G.beginShadows();const X=f.state.shadowsArray;Q.render(X,x,O),xt===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,D=g.transmissive;if(f.setupLights(),O.isArrayCamera){const W=O.cameras;if(D.length>0)for(let ot=0,vt=W.length;ot<vt;ot++){const mt=W[ot];ve(q,D,x,mt)}ie&&at.render(x);for(let ot=0,vt=W.length;ot<vt;ot++){const mt=W[ot];be(g,x,mt,mt.viewport)}}else D.length>0&&ve(q,D,x,O),ie&&at.render(x),be(g,x,O);k!==null&&U===0&&(_.updateMultisampleRenderTarget(k),_.updateRenderTargetMipmap(k)),x.isScene===!0&&x.onAfterRender(y,x,O),Ct.resetDefaultState(),T=-1,S=null,A.pop(),A.length>0?(f=A[A.length-1],xt===!0&&G.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,C.pop(),C.length>0?g=C[C.length-1]:g=null};function se(x,O,X,q){if(x.visible===!1)return;if(x.layers.test(O.layers)){if(x.isGroup)X=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(O);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||it.intersectsSprite(x)){q&&Nt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(zt);const ot=P.update(x),vt=x.material;vt.visible&&g.push(x,ot,vt,X,Nt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||it.intersectsObject(x))){const ot=P.update(x),vt=x.material;if(q&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Nt.copy(x.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Nt.copy(ot.boundingSphere.center)),Nt.applyMatrix4(x.matrixWorld).applyMatrix4(zt)),Array.isArray(vt)){const mt=ot.groups;for(let Et=0,bt=mt.length;Et<bt;Et++){const wt=mt[Et],Gt=vt[wt.materialIndex];Gt&&Gt.visible&&g.push(x,ot,Gt,X,Nt.z,wt)}}else vt.visible&&g.push(x,ot,vt,X,Nt.z,null)}}const W=x.children;for(let ot=0,vt=W.length;ot<vt;ot++)se(W[ot],O,X,q)}function be(x,O,X,q){const D=x.opaque,W=x.transmissive,ot=x.transparent;f.setupLightsView(X),xt===!0&&G.setGlobalState(y.clippingPlanes,X),q&&Ut.viewport(B.copy(q)),D.length>0&&ue(D,O,X),W.length>0&&ue(W,O,X),ot.length>0&&ue(ot,O,X),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function ve(x,O,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new bi(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?Tr:$n,minFilter:yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const W=f.state.transmissionRenderTarget[q.id],ot=q.viewport||B;W.setSize(ot.z*y.transmissionResolutionScale,ot.w*y.transmissionResolutionScale);const vt=y.getRenderTarget();y.setRenderTarget(W),y.getClearColor(ht),ft=y.getClearAlpha(),ft<1&&y.setClearColor(16777215,.5),y.clear(),ie&&at.render(X);const mt=y.toneMapping;y.toneMapping=ai;const Et=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),xt===!0&&G.setGlobalState(y.clippingPlanes,q),ue(x,X,q),_.updateMultisampleRenderTarget(W),_.updateRenderTargetMipmap(W),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let wt=0,Gt=O.length;wt<Gt;wt++){const kt=O[wt],Qt=kt.object,te=kt.geometry,qt=kt.material,Dt=kt.group;if(qt.side===bn&&Qt.layers.test(q.layers)){const Ee=qt.side;qt.side=cn,qt.needsUpdate=!0,ze(Qt,X,q,te,qt,Dt),qt.side=Ee,qt.needsUpdate=!0,bt=!0}}bt===!0&&(_.updateMultisampleRenderTarget(W),_.updateRenderTargetMipmap(W))}y.setRenderTarget(vt),y.setClearColor(ht,ft),Et!==void 0&&(q.viewport=Et),y.toneMapping=mt}function ue(x,O,X){const q=O.isScene===!0?O.overrideMaterial:null;for(let D=0,W=x.length;D<W;D++){const ot=x[D],vt=ot.object,mt=ot.geometry,Et=q===null?ot.material:q,bt=ot.group;vt.layers.test(X.layers)&&ze(vt,O,X,mt,Et,bt)}}function ze(x,O,X,q,D,W){x.onBeforeRender(y,O,X,q,D,W),x.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),D.onBeforeRender(y,O,X,q,x,W),D.transparent===!0&&D.side===bn&&D.forceSinglePass===!1?(D.side=cn,D.needsUpdate=!0,y.renderBufferDirect(X,O,q,D,x,W),D.side=oi,D.needsUpdate=!0,y.renderBufferDirect(X,O,q,D,x,W),D.side=bn):y.renderBufferDirect(X,O,q,D,x,W),x.onAfterRender(y,O,X,q,D,W)}function $e(x,O,X){O.isScene!==!0&&(O=_e);const q=E.get(x),D=f.state.lights,W=f.state.shadowsArray,ot=D.state.version,vt=Z.getParameters(x,D.state,W,O,X),mt=Z.getProgramCacheKey(vt);let Et=q.programs;q.environment=x.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(x.isMeshStandardMaterial?b:h).get(x.envMap||q.environment),q.envMapRotation=q.environment!==null&&x.envMap===null?O.environmentRotation:x.envMapRotation,Et===void 0&&(x.addEventListener("dispose",gt),Et=new Map,q.programs=Et);let bt=Et.get(mt);if(bt!==void 0){if(q.currentProgram===bt&&q.lightsStateVersion===ot)return Ze(x,vt),bt}else vt.uniforms=Z.getUniforms(x),x.onBeforeCompile(vt,y),bt=Z.acquireProgram(vt,mt),Et.set(mt,bt),q.uniforms=vt.uniforms;const wt=q.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(wt.clippingPlanes=G.uniform),Ze(x,vt),q.needsLights=fn(x),q.lightsStateVersion=ot,q.needsLights&&(wt.ambientLightColor.value=D.state.ambient,wt.lightProbe.value=D.state.probe,wt.directionalLights.value=D.state.directional,wt.directionalLightShadows.value=D.state.directionalShadow,wt.spotLights.value=D.state.spot,wt.spotLightShadows.value=D.state.spotShadow,wt.rectAreaLights.value=D.state.rectArea,wt.ltc_1.value=D.state.rectAreaLTC1,wt.ltc_2.value=D.state.rectAreaLTC2,wt.pointLights.value=D.state.point,wt.pointLightShadows.value=D.state.pointShadow,wt.hemisphereLights.value=D.state.hemi,wt.directionalShadowMap.value=D.state.directionalShadowMap,wt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,wt.spotShadowMap.value=D.state.spotShadowMap,wt.spotLightMatrix.value=D.state.spotLightMatrix,wt.spotLightMap.value=D.state.spotLightMap,wt.pointShadowMap.value=D.state.pointShadowMap,wt.pointShadowMatrix.value=D.state.pointShadowMatrix),q.currentProgram=bt,q.uniformsList=null,bt}function vn(x){if(x.uniformsList===null){const O=x.currentProgram.getUniforms();x.uniformsList=ds.seqWithValue(O.seq,x.uniforms)}return x.uniformsList}function Ze(x,O){const X=E.get(x);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Kn(x,O,X,q,D){O.isScene!==!0&&(O=_e),_.resetTextureUnits();const W=O.fog,ot=q.isMeshStandardMaterial?O.environment:null,vt=k===null?y.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:er,mt=(q.isMeshStandardMaterial?b:h).get(q.envMap||ot),Et=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,bt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),wt=!!X.morphAttributes.position,Gt=!!X.morphAttributes.normal,kt=!!X.morphAttributes.color;let Qt=ai;q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Qt=y.toneMapping);const te=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,qt=te!==void 0?te.length:0,Dt=E.get(q),Ee=f.state.lights;if(xt===!0&&(Pt===!0||x!==S)){const Ue=x===S&&q.id===T;G.setState(q,x,Ue)}let Ht=!1;q.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ee.state.version||Dt.outputColorSpace!==vt||D.isBatchedMesh&&Dt.batching===!1||!D.isBatchedMesh&&Dt.batching===!0||D.isBatchedMesh&&Dt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Dt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Dt.instancing===!1||!D.isInstancedMesh&&Dt.instancing===!0||D.isSkinnedMesh&&Dt.skinning===!1||!D.isSkinnedMesh&&Dt.skinning===!0||D.isInstancedMesh&&Dt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Dt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Dt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Dt.instancingMorph===!1&&D.morphTexture!==null||Dt.envMap!==mt||q.fog===!0&&Dt.fog!==W||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==G.numPlanes||Dt.numIntersection!==G.numIntersection)||Dt.vertexAlphas!==Et||Dt.vertexTangents!==bt||Dt.morphTargets!==wt||Dt.morphNormals!==Gt||Dt.morphColors!==kt||Dt.toneMapping!==Qt||Dt.morphTargetsCount!==qt)&&(Ht=!0):(Ht=!0,Dt.__version=q.version);let pe=Dt.currentProgram;Ht===!0&&(pe=$e(q,O,D));let Ke=!1,Ae=!1,pn=!1;const ce=pe.getUniforms(),Je=Dt.uniforms;if(Ut.useProgram(pe.program)&&(Ke=!0,Ae=!0,pn=!0),q.id!==T&&(T=q.id,Ae=!0),Ke||S!==x){Ut.buffers.depth.getReversed()?(Tt.copy(x.projectionMatrix),Fu(Tt),Ou(Tt),ce.setValue(L,"projectionMatrix",Tt)):ce.setValue(L,"projectionMatrix",x.projectionMatrix),ce.setValue(L,"viewMatrix",x.matrixWorldInverse);const Fe=ce.map.cameraPosition;Fe!==void 0&&Fe.setValue(L,Vt.setFromMatrixPosition(x.matrixWorld)),ne.logarithmicDepthBuffer&&ce.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ce.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,Ae=!0,pn=!0)}if(D.isSkinnedMesh){ce.setOptional(L,D,"bindMatrix"),ce.setOptional(L,D,"bindMatrixInverse");const Ue=D.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),ce.setValue(L,"boneTexture",Ue.boneTexture,_))}D.isBatchedMesh&&(ce.setOptional(L,D,"batchingTexture"),ce.setValue(L,"batchingTexture",D._matricesTexture,_),ce.setOptional(L,D,"batchingIdTexture"),ce.setValue(L,"batchingIdTexture",D._indirectTexture,_),ce.setOptional(L,D,"batchingColorTexture"),D._colorsTexture!==null&&ce.setValue(L,"batchingColorTexture",D._colorsTexture,_));const Me=X.morphAttributes;if((Me.position!==void 0||Me.normal!==void 0||Me.color!==void 0)&&ut.update(D,X,pe),(Ae||Dt.receiveShadow!==D.receiveShadow)&&(Dt.receiveShadow=D.receiveShadow,ce.setValue(L,"receiveShadow",D.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Je.envMap.value=mt,Je.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(Je.envMapIntensity.value=O.environmentIntensity),Ae&&(ce.setValue(L,"toneMappingExposure",y.toneMappingExposure),Dt.needsLights&&xn(Je,pn),W&&q.fog===!0&&Y.refreshFogUniforms(Je,W),Y.refreshMaterialUniforms(Je,q,j,dt,f.state.transmissionRenderTarget[x.id]),ds.upload(L,vn(Dt),Je,_)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ds.upload(L,vn(Dt),Je,_),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ce.setValue(L,"center",D.center),ce.setValue(L,"modelViewMatrix",D.modelViewMatrix),ce.setValue(L,"normalMatrix",D.normalMatrix),ce.setValue(L,"modelMatrix",D.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ue=q.uniformsGroups;for(let Fe=0,wi=Ue.length;Fe<wi;Fe++){const Nn=Ue[Fe];R.update(Nn,pe),R.bind(Nn,pe)}}return pe}function xn(x,O){x.ambientLightColor.needsUpdate=O,x.lightProbe.needsUpdate=O,x.directionalLights.needsUpdate=O,x.directionalLightShadows.needsUpdate=O,x.pointLights.needsUpdate=O,x.pointLightShadows.needsUpdate=O,x.spotLights.needsUpdate=O,x.spotLightShadows.needsUpdate=O,x.rectAreaLights.needsUpdate=O,x.hemisphereLights.needsUpdate=O}function fn(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(x,O,X){E.get(x.texture).__webglTexture=O,E.get(x.depthTexture).__webglTexture=X;const q=E.get(x);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,O){const X=E.get(x);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const dn=L.createFramebuffer();this.setRenderTarget=function(x,O=0,X=0){k=x,F=O,U=X;let q=!0,D=null,W=!1,ot=!1;if(x){const mt=E.get(x);if(mt.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(mt.__webglFramebuffer===void 0)_.setupRenderTarget(x);else if(mt.__hasExternalTextures)_.rebindTextures(x,E.get(x.texture).__webglTexture,E.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const wt=x.depthTexture;if(mt.__boundDepthTexture!==wt){if(wt!==null&&E.has(wt)&&(x.width!==wt.image.width||x.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(x)}}const Et=x.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ot=!0);const bt=E.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(bt[O])?D=bt[O][X]:D=bt[O],W=!0):x.samples>0&&_.useMultisampledRTT(x)===!1?D=E.get(x).__webglMultisampledFramebuffer:Array.isArray(bt)?D=bt[X]:D=bt,B.copy(x.viewport),nt.copy(x.scissor),J=x.scissorTest}else B.copy(Ot).multiplyScalar(j).floor(),nt.copy(Kt).multiplyScalar(j).floor(),J=le;if(X!==0&&(D=dn),Ut.bindFramebuffer(L.FRAMEBUFFER,D)&&q&&Ut.drawBuffers(x,D),Ut.viewport(B),Ut.scissor(nt),Ut.setScissorTest(J),W){const mt=E.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,mt.__webglTexture,X)}else if(ot){const mt=E.get(x.texture),Et=O;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,mt.__webglTexture,X,Et)}else if(x!==null&&X!==0){const mt=E.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,mt.__webglTexture,X)}T=-1},this.readRenderTargetPixels=function(x,O,X,q,D,W,ot){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=E.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ot!==void 0&&(vt=vt[ot]),vt){Ut.bindFramebuffer(L.FRAMEBUFFER,vt);try{const mt=x.texture,Et=mt.format,bt=mt.type;if(!ne.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=x.width-q&&X>=0&&X<=x.height-D&&L.readPixels(O,X,q,D,_t.convert(Et),_t.convert(bt),W)}finally{const mt=k!==null?E.get(k).__webglFramebuffer:null;Ut.bindFramebuffer(L.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(x,O,X,q,D,W,ot){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=E.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ot!==void 0&&(vt=vt[ot]),vt){const mt=x.texture,Et=mt.format,bt=mt.type;if(!ne.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=x.width-q&&X>=0&&X<=x.height-D){Ut.bindFramebuffer(L.FRAMEBUFFER,vt);const wt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,wt),L.bufferData(L.PIXEL_PACK_BUFFER,W.byteLength,L.STREAM_READ),L.readPixels(O,X,q,D,_t.convert(Et),_t.convert(bt),0);const Gt=k!==null?E.get(k).__webglFramebuffer:null;Ut.bindFramebuffer(L.FRAMEBUFFER,Gt);const kt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Nu(L,kt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,wt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,W),L.deleteBuffer(wt),L.deleteSync(kt),W}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,O=null,X=0){x.isTexture!==!0&&(qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,x=arguments[1]);const q=Math.pow(2,-X),D=Math.floor(x.image.width*q),W=Math.floor(x.image.height*q),ot=O!==null?O.x:0,vt=O!==null?O.y:0;_.setTexture2D(x,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,ot,vt,D,W),Ut.unbindTexture()};const Pn=L.createFramebuffer(),Ce=L.createFramebuffer();this.copyTextureToTexture=function(x,O,X=null,q=null,D=0,W=null){x.isTexture!==!0&&(qi("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,x=arguments[1],O=arguments[2],W=arguments[3]||0,X=null),W===null&&(D!==0?(qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),W=D,D=0):W=0);let ot,vt,mt,Et,bt,wt,Gt,kt,Qt;const te=x.isCompressedTexture?x.mipmaps[W]:x.image;if(X!==null)ot=X.max.x-X.min.x,vt=X.max.y-X.min.y,mt=X.isBox3?X.max.z-X.min.z:1,Et=X.min.x,bt=X.min.y,wt=X.isBox3?X.min.z:0;else{const Me=Math.pow(2,-D);ot=Math.floor(te.width*Me),vt=Math.floor(te.height*Me),x.isDataArrayTexture?mt=te.depth:x.isData3DTexture?mt=Math.floor(te.depth*Me):mt=1,Et=0,bt=0,wt=0}q!==null?(Gt=q.x,kt=q.y,Qt=q.z):(Gt=0,kt=0,Qt=0);const qt=_t.convert(O.format),Dt=_t.convert(O.type);let Ee;O.isData3DTexture?(_.setTexture3D(O,0),Ee=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(_.setTexture2DArray(O,0),Ee=L.TEXTURE_2D_ARRAY):(_.setTexture2D(O,0),Ee=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const Ht=L.getParameter(L.UNPACK_ROW_LENGTH),pe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ke=L.getParameter(L.UNPACK_SKIP_PIXELS),Ae=L.getParameter(L.UNPACK_SKIP_ROWS),pn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,te.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,te.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Et),L.pixelStorei(L.UNPACK_SKIP_ROWS,bt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,wt);const ce=x.isDataArrayTexture||x.isData3DTexture,Je=O.isDataArrayTexture||O.isData3DTexture;if(x.isDepthTexture){const Me=E.get(x),Ue=E.get(O),Fe=E.get(Me.__renderTarget),wi=E.get(Ue.__renderTarget);Ut.bindFramebuffer(L.READ_FRAMEBUFFER,Fe.__webglFramebuffer),Ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Nn=0;Nn<mt;Nn++)ce&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,E.get(x).__webglTexture,D,wt+Nn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,E.get(O).__webglTexture,W,Qt+Nn)),L.blitFramebuffer(Et,bt,ot,vt,Gt,kt,ot,vt,L.DEPTH_BUFFER_BIT,L.NEAREST);Ut.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(D!==0||x.isRenderTargetTexture||E.has(x)){const Me=E.get(x),Ue=E.get(O);Ut.bindFramebuffer(L.READ_FRAMEBUFFER,Pn),Ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ce);for(let Fe=0;Fe<mt;Fe++)ce?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.__webglTexture,D,wt+Fe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Me.__webglTexture,D),Je?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.__webglTexture,W,Qt+Fe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ue.__webglTexture,W),D!==0?L.blitFramebuffer(Et,bt,ot,vt,Gt,kt,ot,vt,L.COLOR_BUFFER_BIT,L.NEAREST):Je?L.copyTexSubImage3D(Ee,W,Gt,kt,Qt+Fe,Et,bt,ot,vt):L.copyTexSubImage2D(Ee,W,Gt,kt,Et,bt,ot,vt);Ut.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Je?x.isDataTexture||x.isData3DTexture?L.texSubImage3D(Ee,W,Gt,kt,Qt,ot,vt,mt,qt,Dt,te.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,W,Gt,kt,Qt,ot,vt,mt,qt,te.data):L.texSubImage3D(Ee,W,Gt,kt,Qt,ot,vt,mt,qt,Dt,te):x.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,W,Gt,kt,ot,vt,qt,Dt,te.data):x.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,W,Gt,kt,te.width,te.height,qt,te.data):L.texSubImage2D(L.TEXTURE_2D,W,Gt,kt,ot,vt,qt,Dt,te);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ht),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ke),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ae),L.pixelStorei(L.UNPACK_SKIP_IMAGES,pn),W===0&&O.generateMipmaps&&L.generateMipmap(Ee),Ut.unbindTexture()},this.copyTextureToTexture3D=function(x,O,X=null,q=null,D=0){return x.isTexture!==!0&&(qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,x=arguments[2],O=arguments[3],D=arguments[4]||0),qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,O,X,q,D)},this.initRenderTarget=function(x){E.get(x).__webglFramebuffer===void 0&&_.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?_.setTextureCube(x,0):x.isData3DTexture?_.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?_.setTexture2DArray(x,0):_.setTexture2D(x,0),Ut.unbindTexture()},this.resetState=function(){F=0,U=0,k=null,Ut.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=(i,t,e=[])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",i);return Object.keys(t).forEach(r=>{n.setAttribute(r,String(t[r]))}),e.length&&e.forEach(r=>{const s=Sl(...r);n.appendChild(s)}),n};var mg=([i,t,e])=>Sl(i,t,e);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=i=>Array.from(i.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),_g=i=>typeof i=="string"?i:!i||!i.class?"":i.class&&typeof i.class=="string"?i.class.split(" "):i.class&&Array.isArray(i.class)?i.class:"",vg=i=>i.flatMap(_g).map(e=>e.trim()).filter(Boolean).filter((e,n,r)=>r.indexOf(e)===n).join(" "),xg=i=>i.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,n)=>e.toUpperCase()+n.toLowerCase()),wc=(i,{nameAttr:t,icons:e,attrs:n})=>{var v;const r=i.getAttribute(t);if(r==null)return;const s=xg(r),a=e[s];if(!a)return console.warn(`${i.outerHTML} icon name was not found in the provided icons object.`);const o=gg(i),[c,u,l]=a,d={...u,"data-lucide":r,...n,...o},p=vg(["lucide",`lucide-${r}`,o,n]);p&&Object.assign(d,{class:p});const m=mg([c,d,l]);return(v=i.parentNode)==null?void 0:v.replaceChild(m,i)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=["svg",vo,[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=["svg",vo,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=["svg",vo,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=({icons:i={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(i).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${t}]`);if(Array.from(n).forEach(r=>wc(r,{nameAttr:t,icons:i,attrs:e})),t==="data-lucide"){const r=document.querySelectorAll("[icon-name]");r.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(r).forEach(s=>wc(s,{nameAttr:"icon-name",icons:i,attrs:e})))}};function Rc(i,t,e,n){return Math.sin(e*Math.PI*i)*Math.sin(n*Math.PI*t)-Math.sin(n*Math.PI*i)*Math.sin(e*Math.PI*t)}function Mg(i,t,e,n,r,s){return Math.sin(n*Math.PI*i)*Math.sin(r*Math.PI*t)+Math.sin(r*Math.PI*t)*Math.sin(s*Math.PI*e)+Math.sin(s*Math.PI*e)*Math.sin(n*Math.PI*i)}const ps=30,Ln=6.4,qe=10.733,bs=16.167,Pe=bs,wn=24.6,Sg=Math.round(wn*ps),Mr=4.3,yg=Ln,Cc=9.94,Pc=[[0,1],[0,2],[0,3]],Eg=.62,Al=.84,ca=[{start:0,end:1.35,nodes:[7,0,2,5]},{start:1.35,end:2.45,nodes:[3,1,4,10]},{start:2.45,end:3.45,nodes:[7,5,6,11]},{start:3.45,end:Mr,nodes:[3,8,9,10]},{start:Mr,end:wn,nodes:[7,0,2,5]}],Tg=[{start:.14,end:2,text:"很久以前，宇宙是一锅"},{start:2,end:4.3,text:"滚烫的等离子体——"},{start:4.3,end:6.38,text:"声波，在其中来回震荡。"},{start:7.28,end:9.94,text:"三十八万年后，一切忽然"},{start:9.94,end:10.733,text:"安静。"},{start:10.733,end:12.18,text:"六合乍裂——那声波"},{start:12.18,end:14.8,text:"就此被冻结在黑"},{start:14.8,end:15.4,text:"暗深处。"},{start:16.14,end:18.32,text:"它没有消失，只是化作一道"},{start:18.32,end:20.4,text:"极淡的印记，悄悄"},{start:20.4,end:22.36,text:"写进了星系与星系"},{start:22.36,end:23.66,text:"之间的距离里。"}];function bg(i){var t;return((t=Tg.find(e=>i>=e.start&&i<e.end))==null?void 0:t.text)??""}function Dc(i){return ca.find(t=>i>=t.start&&i<t.end)??ca[ca.length-1]}function Ag(i,t,e,n){const r=Math.floor(Math.max(0,i)/.55),s=new Set([t[r%t.length]]);return r%3===1&&s.add(t[(r+2)%t.length]),r%4===2&&s.add((r*5+1)%e),{main:[...s],minor:r%2===0?r*3%n:null}}function wg(i){return Tn(i,.85,1.6)+Tn(i,2.75,3.55)}function Tn(i,t,e){const n=Math.min(1,Math.max(0,(i-t)/(e-t)));return n*n*(3-2*n)}function Lc(i){if(i<Mr||i>wn)return{active:!1,progress:0,radius:0};const t=Math.min(1,(i-Mr)/(yg-Mr));return{active:!0,progress:t,radius:.06+Math.sin(t*Math.PI)*.03}}function Uc(i){const t=Math.max(0,i-Ln),e=qe-Ln,n=Math.min(e,t),r=n/e,s=1.35,a=Math.exp(-s*n);return{active:i>=Ln&&i<=qe,progress:r,absorption:r,baryonVelocity:a,silenceBrightness:Tn(i,Cc,Cc+.14),waveTime:Ln+(1-a)/s}}function Rg(i){const t=Math.max(0,i-qe),e=bs-qe,n=Math.min(1,t/e),r=Math.max(0,(t-Eg)/Al),s=Math.min(1,r),a=s,o=Math.max(0,r-1),c=Tn(i,qe+3.8,qe+4.65);return{active:i>=qe&&i<=bs,progress:n,reveal:Tn(i,qe,qe+.45),pathPosition:s,approachProgress:a,surfaceProgress:o,impactClock:r,completedImpacts:Math.floor(s+1e-9),impactIndex:0,segmentProgress:s>=1?1:s,freeze:c,rippleStrength:1-c,coreStrength:1}}function Cg(i){const t=Math.max(0,i-Pe),e=wn-Pe,n=Math.min(1,t/e),r=Tn(i,Pe+.28,Pe+2.2),s=i>=Pe?1:0,a=Tn(i,Pe+.72,Pe+2.72),o=.78*(1-a),c=.24+.76*a,u=Tn(i,Pe+1.25,Pe+4.8),l=Tn(i,Pe+2.15,Pe+4.1),d=Tn(i,Pe+.9,wn-.35);return{active:i>=Pe&&i<=wn,progress:n,reveal:Tn(i,Pe,Pe+.72),constellationReveal:r,lineReveal:s,projectionMorph:a,flatLineOpacity:o,depthLineOpacity:c,auxiliaryMorph:a,imprintFade:u,distanceReveal:l,parallaxProgress:d}}function Pg(i){const e=Math.min(1,Math.max(0,i))*Math.PI*2,n=440+Math.sin(e)*20,r=Math.sin(e-.7)*.16+Math.sin(e*2+.3)*.04;return{sourceFrequency:n,velocityRatio:r,observedFrequency:n/(1-r)}}const Qe=[16777180,16762677,16741400,16723724,9245191],ms=12183295,rs=new Ft(ms),Ic=new Ft(16777215),la=new Ft(12907477),Hn=new Ft,ua=4.2,eo={width:1220,height:896},Nc=7.2/eo.height,Fc=[eo.width/2,eo.height/2],ii={meissa:.56,betelgeuse:1.42,bellatrix:2.28,mintaka:-1.55,alnilam:-1.86,alnitak:-1.34,rigel:.58,saiph:.92};function ke([i,t],e){return[(i-Fc[0])*Nc,(Fc[1]-t)*Nc,e]}const We={betelgeuse:[380,298],bellatrix:[327,384],meissa:[612,205],mintaka:[604,476],alnilam:[578,493],alnitak:[558,529],rigel:[692,657],saiph:[456,699]},ge={betelgeuse:ke(We.betelgeuse,ii.betelgeuse),bellatrix:ke(We.bellatrix,ii.bellatrix),clubTip:ke(We.meissa,ii.meissa),beltRight:ke(We.mintaka,ii.mintaka),beltMiddle:ke(We.alnilam,ii.alnilam),beltLeft:ke(We.alnitak,ii.alnitak),rigel:ke(We.rigel,ii.rigel),saiph:ke(We.saiph,ii.saiph)},Ne={betelgeuse:ke(We.betelgeuse,.08),bellatrix:ke(We.bellatrix,.08),clubTip:ke(We.meissa,.08),beltRight:ke(We.mintaka,.08),beltMiddle:ke(We.alnilam,.08),beltLeft:ke(We.alnitak,.08),rigel:ke(We.rigel,.08),saiph:ke(We.saiph,.08)},Oc=[{label:"参宿四",latin:"BETELGEUSE",position:ge.betelgeuse,scale:.15,brightness:1.45,color:16762789},{label:"参宿五",latin:"BELLATRIX",position:ge.bellatrix,scale:.13,brightness:1.45,color:14017791},{label:"猎宿一",latin:"MEISSA",position:ge.clubTip,scale:.11,brightness:1.45,color:14543359},{label:"参宿三",latin:"MINTAKA",position:ge.beltRight,scale:.12,color:14280703},{label:"参宿二",latin:"ALNILAM",position:ge.beltMiddle,scale:.13,color:15003647},{label:"参宿一",latin:"ALNITAK",position:ge.beltLeft,scale:.11,color:14543359},{label:"参宿七",latin:"RIGEL",position:ge.rigel,scale:.15,color:14149631},{label:"参宿六",latin:"SAIPH",position:ge.saiph,scale:.12,color:13360383}],Dg=[{emphasis:1.55,points:[ge.clubTip,ge.betelgeuse]},{emphasis:1.55,points:[ge.clubTip,ge.bellatrix]},{emphasis:1.35,points:[ge.betelgeuse,ge.bellatrix]},{emphasis:1.35,points:[ge.betelgeuse,ge.beltRight]},{emphasis:1.45,points:[ge.bellatrix,ge.beltLeft]},{emphasis:.72,points:[ge.beltLeft,ge.beltMiddle]},{emphasis:.72,points:[ge.beltMiddle,ge.beltRight]},{emphasis:1.55,points:[ge.beltLeft,ge.saiph]},{emphasis:1.55,points:[ge.beltRight,ge.rigel]}],Lg=[{emphasis:1.55,points:[Ne.clubTip,Ne.betelgeuse]},{emphasis:1.55,points:[Ne.clubTip,Ne.bellatrix]},{emphasis:1.35,points:[Ne.betelgeuse,Ne.bellatrix]},{emphasis:1.35,points:[Ne.betelgeuse,Ne.beltRight]},{emphasis:1.45,points:[Ne.bellatrix,Ne.beltLeft]},{emphasis:.72,points:[Ne.beltLeft,Ne.beltMiddle]},{emphasis:.72,points:[Ne.beltMiddle,Ne.beltRight]},{emphasis:1.55,points:[Ne.beltLeft,Ne.saiph]},{emphasis:1.55,points:[Ne.beltRight,Ne.rigel]}],Ug=new Set([0,1,2]),Ig=new Set([5,6,7,8]),ss=new w(-3.35,-.12,-4.1),En=document.querySelector("#narration"),no=document.querySelector("#scene"),Ng=document.querySelector("#deep-sky-background"),mr=document.querySelector("#star-canvas"),Gn=mr.getContext("2d"),ha=document.querySelector("#labels"),Fg=document.querySelector("#subtitle"),Og=document.querySelector("#caption"),Bg=document.querySelector("#timecode"),as=document.querySelector("#play"),zg=document.querySelector("#reset"),Vg=document.querySelector(".eyebrow"),Hg=document.querySelector(".title-sub"),Bc=document.querySelector("#epoch-marker"),Gg=document.querySelector("#baryon-velocity"),zc=document.querySelector("#impact-marker"),kg=document.querySelector("#impact-count"),os=document.querySelector("#wave-equation"),Wg=document.querySelector("#wave-equation-path"),Xg=document.querySelector("#wave-f0"),qg=document.querySelector("#wave-v"),Yg=document.querySelector("#wave-fp");bl({icons:{Play:El,Pause:yl,RotateCcw:Tl}});const Mi=new pg({canvas:no,alpha:!0,antialias:!0,powerPreference:"high-performance"});Mi.setClearColor(0,0);Mi.outputColorSpace=nn;const Sr=new ah;Sr.fog=new fo(132103,.006);const on=new gn(43,1,.1,100);on.position.set(0,.1,12.5);on.lookAt(0,0,0);const Oe=new Re;Sr.add(Oe);async function $g(){const i=g(),t=await f(),e=U();Oe.add(e);const n=k();Oe.add(n);const r=[{label:"太阳",latin:"SUN",position:[-3.35,1.42,.4],radius:.62,color:Qe[1],spin:.42,phase:.2},{label:"木星",latin:"JUPITER",position:[-1.82,-1.55,.5],radius:.56,color:Qe[2],spin:-.36,phase:1.2},{label:"天狼星",latin:"SIRIUS",position:[.18,1.72,-.4],radius:.51,color:Qe[0],spin:.32,phase:2.1},{label:"土星",latin:"SATURN",position:[2.16,-1.08,.8],radius:.5,color:Qe[2],spin:.29,phase:1.6},{label:"北极星",latin:"POLARIS",position:[3.18,1.92,-.3],radius:.4,color:Qe[0],spin:-.25,phase:.4},{label:"火星",latin:"MARS",position:[1.16,.08,1.05],radius:.42,color:Qe[3],spin:.48,phase:2.8},{label:"参宿四",latin:"BETELGEUSE",position:[-3.28,-1.9,-.8],radius:.55,color:Qe[3],spin:-.31,phase:2.7},{label:"昴星团",latin:"PLEIADES",position:[-.74,.05,-1.22],radius:.64,color:Qe[0],spin:.39,phase:1.9,shape:"chladni",modes:[2,3,4],boundary:"volume",network:!0},{label:"金星",latin:"VENUS",position:[-.12,-2.55,-.95],radius:.44,color:Qe[1],spin:-.44,phase:.9},{label:"海王星",latin:"NEPTUNE",position:[3.62,-2.02,.58],radius:.46,color:Qe[2],spin:.35,phase:2.4},{label:"月球",latin:"MOON",position:[-4.02,.05,-1.2],radius:.3,color:Qe[1],spin:-.52,phase:1.3},{label:"脉冲星",latin:"PULSAR",position:[3.78,.44,-1.48],radius:.5,color:14478591,spin:.7,phase:3.1,shape:"chladni",modes:[2,3,4],boundary:"volume",network:!0}],s=r.map((E,_)=>S(E,_));s.forEach(E=>Oe.add(E.group));const a=[{label:"织女星",latin:"VEGA",position:[-4.35,2.42,-1.7],scale:.12},{label:"牛郎星",latin:"ALTAIR",position:[-2.15,2.68,-1.25],scale:.1},{label:"参宿七",latin:"RIGEL",position:[1.35,2.55,-2.1],scale:.11},{label:"五车二",latin:"CAPELLA",position:[4.35,2.35,-1.35],scale:.1},{label:"毕宿五",latin:"ALDEBARAN",position:[-4.55,-1.02,-1.8],scale:.09},{label:"角宿一",latin:"SPICA",position:[-2.28,-.18,-2.25],scale:.09},{label:"心宿二",latin:"ANTARES",position:[2.82,.72,-1.95],scale:.11},{label:"老人星",latin:"CANOPUS",position:[4.24,-2.58,-1.55],scale:.1}],o=a.map((E,_)=>ht(E,_));o.forEach(E=>Oe.add(E.group));const c=Pc.map(()=>ft());c.forEach(E=>Oe.add(E));const u=T();Sr.add(u.group);const l=st();Oe.add(l.group);const d=F(i,ha);Sr.add(d.group);const p=r.map(E=>{const _=document.createElement("div");return _.className="node-label",_.innerHTML=`${E.label}<small>${E.latin}</small>`,ha.appendChild(_),_}),m=a.map(E=>{const _=document.createElement("div");return _.className="node-label minor-label",_.innerHTML=`${E.label}<small>${E.latin}</small>`,ha.appendChild(_),_});let v=!1,M=-1;function g(){const _=document.createElement("canvas");_.width=64,_.height=64;const h=_.getContext("2d"),b=h.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);b.addColorStop(0,"rgba(255,255,255,1)"),b.addColorStop(.12,"rgba(255,255,255,0.96)"),b.addColorStop(.38,"rgba(255,255,255,0.18)"),b.addColorStop(.68,"rgba(255,255,255,0.02)"),b.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=b,h.fillRect(0,0,64,64);const I=new jo(_);return I.colorSpace=nn,I}async function f(){try{const E=await fetch("/chladni-reference.bin");return E.ok?new Float32Array(await E.arrayBuffer()):null}catch{return null}}function C(E,_){const h=new bh;for(let b=1;b<E.length;b+=1)h.add(new pl(E[b-1],E[b]));return new go(h,Math.max(3,E.length*3),_,7,!1)}function A(){const _=document.createElement("canvas");_.width=768,_.height=768;const h=_.getContext("2d"),b=(N,P)=>{const Z=Math.sin(N*12.9898+P*78.233)*43758.5453;return Z-Math.floor(Z)};h.save(),h.globalCompositeOperation="screen";for(let N=0;N<72;N+=1){const P=(N+b(N,2.3)*.8)/72,Z=768*(.26+P*.22)+(b(N,4.1)-.5)*80,Y=768*(.06+P*.9)+(b(N,5.8)-.5)*60,$=34+b(N,7.4)*100,lt=55+b(N,9.2)*150,G=h.createRadialGradient(Z,Y,0,Z,Y,Math.max($,lt)),Q=.018+b(N,11.6)*.038;G.addColorStop(0,`rgba(142, 140, 143, ${Q})`),G.addColorStop(.48,`rgba(127, 125, 131, ${Q*.46})`),G.addColorStop(1,"rgba(106, 104, 108, 0)"),h.save(),h.translate(Z,Y),h.rotate((b(N,13.7)-.5)*.9),h.scale($/lt,1),h.translate(-Z,-Y),h.fillStyle=G,h.fillRect(Z-lt,Y-lt,lt*2,lt*2),h.restore()}h.filter="blur(10px)";for(let N=0;N<28;N+=1){const P=(N+.4)/28,Z=768*(.21+P*.27),Y=768*(.08+P*.87);h.beginPath(),h.moveTo(Z-44,Y-80),h.quadraticCurveTo(Z+Math.sin(N*1.7)*48,Y-20,Z+Math.cos(N*1.2)*34,Y+96),h.strokeStyle=`rgba(134, 132, 136, ${.018+N%4*.006})`,h.lineWidth=3+N%5*2,h.stroke()}h.restore();const I=new jo(_);return I.colorSpace=nn,I}function y(){const E=new Re;E.renderOrder=-2;const _=new sn(new tn({map:A(),transparent:!0,opacity:.22,depthTest:!1,depthWrite:!1,blending:Ei}));return _.position.set(-3.35,-.12,-4.45),_.scale.set(3.4,8.1,1),_.rotation.z=-.18,_.renderOrder=-3,E.add(_),E}function H(E,_,h){return E.map(({points:b,emphasis:I},N)=>{const P=b.map(G=>new w(...G)),Z=Ig.has(N),Y=new _i({color:_==="flat"?Z?4872304:7174290:Z?7440036:12110829,transparent:!0,opacity:0,depthWrite:!1,blending:Wt}),$=new Xe(C(P,.014*I),Y),lt=new Xe(C(P,.05*I),new _i({color:_==="flat"?Z?3094860:4609392:Z?4084591:7179705,transparent:!0,opacity:0,depthWrite:!1,blending:Wt}));return $.userData={index:N,glow:lt,isUpperTriangle:Ug.has(N),isLowerShadow:Z,layerName:_},lt.userData.radius=.05*I,h.add(lt),h.add($),$})}function F(E,_){const h=new Re;h.visible=!1;const b=[],I=[];for(let z=0;z<620;z+=1){const V=z*.61803398875,K=(V*13.7%1-.5)*12.8,tt=(V*7.1%1-.5)*7.1,gt=-4.8+V*5.3%1*2.7,rt=.34+z*17%61/61*.66;b.push(K,tt,gt),I.push(rt*.82,rt*.9,rt)}const N=new ae;N.setAttribute("position",new Xt(b,3)),N.setAttribute("color",new Xt(I,3));const P=new Ge(N,new an({map:E,size:.052,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));h.add(P);const Z=y();h.add(Z);const Y=Oc.map((z,V)=>{const K=new Re,tt=new sn(new tn({map:E,color:z.color,transparent:!0,opacity:0,depthWrite:!1,blending:Wt}));tt.scale.setScalar(z.scale*4.8);const gt=new sn(new tn({map:E,color:z.color,transparent:!0,opacity:0,depthWrite:!1,blending:Wt}));gt.scale.setScalar(z.scale),K.add(tt,gt),K.position.set(...z.position),K.userData={definition:z,index:V,halo:tt,core:gt,phase:V*.73,startPosition:new w(...z.position)},h.add(K);const rt=document.createElement("div");return rt.className="node-label scene-four-label",rt.innerHTML=`${z.label}<small>${z.latin}</small>`,_.appendChild(rt),K.userData.label=rt,K}),$=H(Lg,"flat",h),lt=H(Dg,"depth",h),G=Oc[3].position,Q=new ae().setFromPoints([new w(...G),ss]),at=new tc({color:9361844,dashSize:.12,gapSize:.09,transparent:!0,opacity:0,depthWrite:!1,blending:Wt}),ut=new ys(Q,at);ut.computeLineDistances(),h.add(ut);const et=new Be;et.position.copy(new w(...G).lerp(ss,.52)),h.add(et);const pt=document.createElement("div");pt.className="node-label scene-four-distance",pt.innerHTML="147 Mpc<small>BAO SCALE</small>",_.appendChild(pt);const _t=new Re,Ct=new sn(new tn({map:E,color:7919264,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Wt}));Ct.scale.setScalar(1.65);const R=new sn(new tn({map:E,color:la,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Wt}));R.scale.setScalar(.62);const ct=[.36,.58,.82].map((z,V)=>{const K=new Xe(new Es(z,z+.012,64),new _i({color:9298102,transparent:!0,opacity:0,side:bn,depthTest:!1,depthWrite:!1,blending:Wt}));return K.userData.phase=V*.9,_t.add(K),K});return _t.add(Ct,R),_t.position.copy(ss),h.add(_t),{group:h,backdrop:P,stars:Y,flatLines:$,depthLines:lt,distanceLine:ut,distanceAnchor:et,distanceLabel:pt,imprint:_t,imprintHalo:Ct,imprintCore:R,imprintRings:ct,imprintTarget:ss.clone()}}function U(){const E=new Re,_=[{center:[-4.2,1.55,-2.1],spread:[1.45,.85,1.1]},{center:[-1.55,.25,-2.5],spread:[1.3,1.25,1.25]},{center:[2.15,1.45,-2.2],spread:[1.55,.95,1.2]},{center:[4.05,-1.15,-2.5],spread:[1.25,1.05,1.15]},{center:[-.35,-2.15,-2.15],spread:[1.75,.72,1.3]},{center:[-3.55,-1.8,-1.75],spread:[1.15,.92,1.1]}];let h=17;const b=()=>(h=h*16807%2147483647,h/2147483647),I=()=>{const N=Math.max(b(),1e-4);return Math.sqrt(-2*Math.log(N))*Math.cos(Math.PI*2*b())};return[{count:1400,size:.042,opacity:.56},{count:560,size:.078,opacity:.72},{count:170,size:.13,opacity:.64}].forEach((N,P)=>{const Z=[],Y=[],$=[],lt=[];for(let at=0;at<N.count;at+=1){let ut,et,pt;if(b()<.82){const R=_[Math.floor(b()*_.length)];ut=R.center[0]+I()*R.spread[0],et=R.center[1]+I()*R.spread[1],pt=R.center[2]+I()*R.spread[2]}else ut=(b()*2-1)*6.2,et=(b()*2-1)*3.6,pt=b()*4.5-4;Z.push(ee.clamp(ut,-6.7,6.7),ee.clamp(et,-3.9,3.9),ee.clamp(pt,-5.2,1.2));const _t=.62+b()*.38,Ct=(at*37+P*13)%31<2;Y.push(_t,_t*(Ct?.9:.16),_t*(Ct?1:.035)),$.push(b()*Math.PI*2),lt.push(2.1+b()*1.4)}const G=new ae;G.setAttribute("position",new Xt(Z,3)),G.setAttribute("color",new Xt(Y,3)),G.setAttribute("aPhase",new Xt($,1)),G.setAttribute("aSpeed",new Xt(lt,1));const Q=new hn({uniforms:{uTime:{value:0},uSize:{value:N.size*680},uOpacity:{value:N.opacity},uReveal:{value:0},uAbsorbProgress:{value:0},uAbsorbTarget:{value:new w}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Wt,vertexColors:!0});E.add(new Ge(G,Q))}),E}function k(){const _=[],h=[],b=new Ft(12144941),I=new Ft(5614016),N=new Ft(7373197);for(let $=0;$<1100;$+=1){const lt=$*73%1100/1100,G=$*419%1100/1100,Q=(lt*2-1)*6.6+Math.sin($*1.71)*.12,at=(G*2-1)*3.65+Math.cos($*1.13)*.08,ut=-4.2+Math.sin($*.37)*.7,et=Math.sin(Q*1.18)+Math.cos(at*1.76)+Math.sin((Q-at)*.63),pt=Math.min(1,Math.abs(et)/2.4),_t=N.clone().lerp(et>=0?b:I,.42+pt*.5),Ct=.28+pt*.58;_.push(Q,at,ut),h.push(_t.r*Ct,_t.g*Ct,_t.b*Ct)}const P=new ae;P.setAttribute("position",new Xt(_,3)),P.setAttribute("color",new Xt(h,3));const Z=new an({size:.07,map:i,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Wt,sizeAttenuation:!0}),Y=new Ge(P,Z);return Y.visible=!1,Y}function T(){const E=[[-2.2,0,0]],_=new Re,h=new Ft(16726797),b=new Ft(16763760),I=E.map((N,P)=>{const Y=new Float32Array(1080),$=new Float32Array(360*3),lt=new Float32Array(360*3),G=new Float32Array(360*3);for(let W=0;W<360;W+=1){const ot=W*2.39996323+P*.71,vt=Math.acos(1-2*((W+.5)/360)),Et=.64*(.94+Math.sin(W*1.73+P)*.04+Math.cos(W*.47)*.025),bt=Math.cos(ot)*Math.sin(vt)*Et,wt=Math.cos(vt)*Et,Gt=Math.sin(ot)*Math.sin(vt)*Et,kt=W*3;Y.set([bt,wt,Gt],kt),$.set([bt,wt,Gt],kt);const Qt=1/Math.max(.001,Math.hypot(bt,wt,Gt)),te=.08+(W*31+P*17)%23/23*.18;lt.set([bt*Qt*te+Math.sin(W*.83)*.035,wt*Qt*te+Math.cos(W*.57)*.025,Gt*Qt*te+Math.sin(W*1.17)*.04],kt);const qt=.18+W*13%19/19*.72,Dt=h.clone().lerp(b,qt);G.set([Dt.r,Dt.g,Dt.b],kt)}const Q=new Xe(new Ts(.62,40,28),new hn({uniforms:{uReveal:{value:0},uImpact:{value:0},uScar:{value:0},uPhase:{value:P*1.37}},vertexShader:`
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
        `,transparent:!0,depthWrite:!0}));Q.rotation.set(P*.11,P*.37,P*.08);const at=new ae;at.setAttribute("position",new xe($,3)),at.setAttribute("color",new xe(G,3));const ut=new Ge(at,new an({size:.034,map:i,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));ut.rotation.copy(Q.rotation);const et=new Xe(new Ts(.78,36,24),new hn({uniforms:{uReveal:{value:0},uImpact:{value:0},uHeat:{value:0},uPhase:{value:P*.83}},vertexShader:`
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
        `,transparent:!0,depthTest:!1,depthWrite:!1,blending:Wt}));et.renderOrder=-2;const pt=260,_t=new Float32Array(pt*3),Ct=new Float32Array(pt*3);for(let W=0;W<pt;W+=1){const ot=W*2.39996323+P*.51,vt=Math.acos(1-2*((W+.5)/pt)),mt=.72+(W*31+P*7)%29/29*.17,Et=W*3;_t.set([Math.cos(ot)*Math.sin(vt)*mt,Math.cos(vt)*mt,Math.sin(ot)*Math.sin(vt)*mt],Et);const bt=new Ft(16721416).lerp(new Ft(16751154),W*17%23/23*.45);Ct.set(bt.toArray(),Et)}const R=new ae;R.setAttribute("position",new xe(_t,3)),R.setAttribute("color",new xe(Ct,3));const ct=new Ge(R,new an({size:.052,map:i,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Wt,sizeAttenuation:!0})),z=new w(...N),K=(P===0?new w(0,0,0):new w(...E[P-1])).sub(z);K.lengthSq()<.001?K.set(1,0,0):K.normalize();const tt=new w(0,1,0).addScaledVector(K,-K.y).normalize();tt.lengthSq()<.01&&tt.set(1,0,0);const gt=K.clone().cross(tt).normalize(),rt=new sn(new tn({map:i,color:16770992,transparent:!0,opacity:0,depthWrite:!1,blending:Wt}));rt.scale.setScalar(.2),rt.position.copy(K).multiplyScalar(.642);const At=new sn(new tn({map:i,color:16773316,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Wt}));At.position.copy(rt.position),At.scale.setScalar(.3);const yt=3,Lt=96,It=yt*Lt,me=new Float32Array(It*3),$t=new Float32Array(It),re=new Float32Array(It),se=new Float32Array(It);for(let W=0;W<It;W+=1){const ot=Math.floor(W/Lt),mt=W%Lt/Lt*Math.PI*2+ot*.37,Et=W*3;me.set(K.clone().multiplyScalar(.635).toArray(),Et),$t[W]=.034+(W*17+P*7)%19/19*.026,se[W]=mt}const be=new ae;be.setAttribute("position",new xe(me,3)),be.setAttribute("aSize",new xe($t,1)),be.setAttribute("aAlpha",new xe(re,1).setUsage(To));const ve=new Ge(be,new hn({uniforms:{uColor:{value:new Ft(16766880)},uOpacity:{value:0},uPointScale:{value:180}},vertexShader:`
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
      `,transparent:!0,depthTest:!0,depthWrite:!1,blending:Wt}));ve.renderOrder=11,ve.frustumCulled=!1;const ue=3525,ze=new Float32Array(ue*3),$e=new Float32Array(ue*3),vn=new Float32Array(ue*3),Ze=new Float32Array(ue*3),Kn=new Float32Array(ue),xn=new Float32Array(ue),fn=new Float32Array(ue),dn=new Uint8Array(ue),Pn=new Float32Array(ue),Ce=new Float32Array(ue),x=new Float32Array(ue);for(let W=0;W<ue;W+=1){const ot=W*2.39996323+P*.43,vt=(W*47+P*19)%101/101,mt=vt<.38?0:vt<.88?1:2,Et=(W*29+P*11)%97/97,bt=(W*71+P*23)%103/103,wt=mt===0?.12+Et*.3:mt===1?.28+Et*1.72:1.2+Et*2.1,Gt=mt===0?.18+bt**.72*1.08:mt===1?.06+bt**.68*2.08:.28+bt**.62*2.55,kt=(W*13+P*5)%31/31,Qt=.012+Math.sqrt(kt)*.12,te=Math.cos(ot)*Qt,qt=Math.sin(ot)*Qt,Dt=K.clone().multiplyScalar(.59).addScaledVector(tt,te).addScaledVector(gt,qt),Ee=K.clone().multiplyScalar(wt).addScaledVector(tt,Math.cos(ot)*Gt).addScaledVector(gt,Math.sin(ot)*Gt),Ht=W*3;ze.set(Dt.toArray(),Ht),$e.set(Ee.toArray(),Ht);const pe=Dt.normalize();vn.set(pe.toArray(),Ht);const Ke=(W*23+P*13)%31/31,Ae=new Ft(16721416).lerp(new Ft(16773304),Ke**3.2);Ze.set(Ae.toArray(),Ht);const pn=(W*19+P*5)%43/43;Kn[W]=(mt===1?.022:.018)+pn**3*(mt===2?.075:.095),xn[W]=.35+(W*11+P*17)%37/37*.65,dn[W]=mt,Pn[W]=(W*41+P*17)%97/97*(mt===0?.38:.22),Ce[W]=mt===0?2.7+Et*.7:mt===1?3.2+Et*.8:.7+Et*.5,x[W]=mt===0?.72+Et*.32:mt===1?.28+Et*.38:.08+Et*.2}const O=new ae;O.setAttribute("position",new xe(ze,3)),O.setAttribute("color",new xe(Ze,3)),O.setAttribute("aSize",new xe(Kn,1)),O.setAttribute("aEnergy",new xe(xn,1)),O.setAttribute("aAlpha",new xe(fn,1).setUsage(To));const X=new Ge(O,new hn({uniforms:{uOpacity:{value:0},uPointScale:{value:180}},vertexShader:`
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
      `,transparent:!0,depthTest:!0,depthWrite:!1,blending:Wt}));X.renderOrder=12,X.frustumCulled=!1;const q=new Re;q.add(rt,At,ve,X);const D=new Re;return D.add(et,ct,Q,ut,q),D.position.set(...N),D.userData={shell:Q,points:ut,atmosphere:et,corona:ct,core:rt,burst:At,surfaceEffects:q,ripple:ve,splash:X,basePositions:Y,drift:lt,splashVelocities:$e,splashSurfaceDirections:vn,splashEnergy:xn,splashTypes:dn,splashDelays:Pn,splashLifetimes:Ce,splashSpinDrag:x,contactDirection:K,tangentA:tt,tangentB:gt,ripplePhase:se,surfaceBaseRotation:Q.rotation.clone(),impactSpinOrigin:0,impactCaptured:!1,phase:P*.73},_.add(D),D});return _.visible=!1,{group:_,lobes:I,positions:E.map(N=>new w(...N))}}function S(E,_){if(E.shape==="chladni"&&E.boundary==="volume")return nt(E,_);if(E.shape==="chladni")return B(E,_);const h=new Re,b=new sn(new tn({map:i,color:E.color,transparent:!0,opacity:.2,depthWrite:!1,blending:Wt}));b.scale.setScalar(E.radius*2.7),h.add(b);const I=new sn(new tn({map:i,color:E.color,transparent:!0,opacity:.42,depthWrite:!1,blending:Wt}));I.scale.setScalar(E.radius*1.65),h.add(I);const N=new sn(new tn({map:i,color:Qe[0],transparent:!0,opacity:.92,depthWrite:!1,blending:Wt}));N.scale.setScalar(E.radius*.68),h.add(N);const P=new ae,Z=[],Y=[],$=360+_%4*60,lt=new Ft(E.color);for(let ut=0;ut<$;ut+=1){const et=ut%3,pt=ut*2.39996323+E.phase,_t=Math.acos(1-2*((ut+.5)/$)),Ct=E.radius*(.38+et*.28+.06*Math.sin(ut*1.7+E.phase)),R=.78+.18*Math.sin(ut*.37+E.phase),ct=1+.12*Math.sin(pt*2.4+et);Z.push(Math.cos(pt)*Math.sin(_t)*Ct*ct,Math.cos(_t)*Ct*R,Math.sin(pt)*Math.sin(_t)*Ct*.68);const z=new Ft(Qe[Math.min(et+1,Qe.length-1)]).lerp(lt,.22),V=.7+.38*((Math.sin(pt*1.7)+1)/2);Y.push(z.r*V,z.g*V,z.b*V)}P.setAttribute("position",new Xt(Z,3)),P.setAttribute("color",new Xt(Y,3));const G=new Ge(P,new an({size:.056,map:i,vertexColors:!0,transparent:!0,opacity:.66,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));h.add(G);const Q=new mo(E.radius*.88,.006,4,64),at=new Xe(Q,new _i({color:E.color,transparent:!0,opacity:.22,blending:Wt,depthWrite:!1}));return at.rotation.x=Math.PI*.45+E.phase*.1,at.rotation.z=E.phase,h.add(at),h.position.set(...E.position),h.userData={...E,halo:b,mantle:I,core:N,particles:G,ring:at,index:_},{group:h,definition:E}}function B(E,_){const h=new Re,b=[],I=[],N=new Map,P=76,Z=.115,[Y,$]=E.modes,lt=new Ft(E.color),G=new Ft(Qe[0]);for(let ct=0;ct<P;ct+=1)for(let z=0;z<P;z+=1){const V=z/(P-1)*2-1,K=ct/(P-1)*2-1,tt=Rc(V,K,Y,$);if(Math.abs(tt)>Z)continue;const gt=1-Math.abs(tt)/Z,rt=Math.sin((ct*83+z*47+_*29)*.17)*.008,At=[(V+rt)*E.radius*1.25,(K-rt*.6)*E.radius*1.25,tt*E.radius*1.7+Math.sin((V-K)*Math.PI*(Y+$))*E.radius*.035];b.push(...At),N.set(ct*P+z,At);const yt=lt.clone().lerp(G,.28+gt*.66);I.push(yt.r,yt.g,yt.b)}const Q=new ae;Q.setAttribute("position",new Xt(b,3)),Q.setAttribute("color",new Xt(I,3));const at=new Ge(Q,new an({size:.12,map:i,color:E.color,transparent:!0,opacity:.14,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));h.add(at);const ut=new Ge(Q,new an({size:.047,map:i,vertexColors:!0,transparent:!0,opacity:.72,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));h.add(ut);let et=null;if(E.network){const ct=[],z=[[0,1],[1,0],[1,1],[1,-1]];N.forEach((K,tt)=>{const gt=Math.floor(tt/P),rt=tt%P;z.forEach(([At,yt])=>{const Lt=N.get((gt+At)*P+rt+yt);Lt&&ct.push(...K,...Lt)})});const V=new ae;V.setAttribute("position",new Xt(ct,3)),et=new Jr(V,new vi({color:E.color,transparent:!0,opacity:.16,depthWrite:!1,blending:Wt})),h.add(et)}const pt=E.radius*1.3,_t=E.boundary==="octagon"?Array.from({length:8},(ct,z)=>{const V=Math.PI/8+z*Math.PI/4,K=pt/Math.cos(Math.PI/8);return new w(Math.cos(V)*K,Math.sin(V)*K,0)}):[new w(-pt,-pt,0),new w(pt,-pt,0),new w(pt,pt,0),new w(-pt,pt,0)],Ct=new ae().setFromPoints(_t),R=new uh(Ct,new vi({color:E.color,transparent:!0,opacity:.13,depthWrite:!1,blending:Wt}));return h.add(R),h.position.set(...E.position),h.userData={...E,isChladni:!0,pattern:ut,glow:at,network:et,outline:R,index:_},{group:h,definition:E}}function nt(E,_){if(t)return J(E,_);const h=new Re,b=[],I=[],N=[],P=[],Z=new Map,[Y,$,lt]=E.modes,G=40,Q=E.radius*1.8,at=new Ft(E.color),ut=new Ft(7439516),et=new Ft(16774367),pt=Array.from({length:18},(gt,rt)=>({x:Math.sin(rt*3.71+.8)*.72,y:Math.cos(rt*2.17-.4)*.72,z:Math.sin(rt*1.43+1.9)*.72}));for(let gt=0;gt<G;gt+=1){const rt=gt/(G-1)*2-1;for(let At=0;At<G;At+=1){const yt=At/(G-1)*2-1;for(let Lt=0;Lt<G;Lt+=1){const It=Lt/(G-1)*2-1;if(rt*rt*.62+yt*yt*.86+It*It*1.16>1.05)continue;const $t=rt+Math.sin(yt*Math.PI*1.4+E.phase)*.1+Math.sin(It*Math.PI*2.1)*.045,re=yt+Math.sin(It*Math.PI*1.25-E.phase*.4)*.11-Math.sin(rt*Math.PI*1.8)*.04,se=It+Math.sin(rt*Math.PI*1.55+E.phase*.3)*.12+Math.cos(yt*Math.PI*1.9)*.04,be=Mg($t,re,se,Y,$,lt);let ve=1/0,ue=1/0,ze=1/0;pt.forEach(Pn=>{const Ce=$t-Pn.x,x=re-Pn.y,O=se-Pn.z,X=Math.sqrt(Ce*Ce+x*x+O*O);X<ve?(ze=ue,ue=ve,ve=X):X<ue?(ze=ue,ue=X):X<ze&&(ze=X)});const $e=Math.exp(-((ue-ve)**2)*28-(ze-ue)**2*44),vn=Math.exp(-Math.abs(be)*4.2),Ze=$e*(.56+vn*.62);if(Ze<.55)continue;const Kn=Math.min(1,Ze*.72+vn*.35),xn=Math.sin((gt*97+At*57+Lt*31+_*17)*.19)*.008,fn=[($t*1.12+re*.22+re*se*.055+xn)*Q,(re*.92+se*.12+Math.sin($t*Math.PI)*.055-xn*.4)*Q,(se*.94+$t*re*.07)*Q];b.push(...fn),Z.set(gt*G*G+At*G+Lt,{point:fn,filamentScore:Ze});const dn=ut.clone().lerp(at,.56+Kn*.28).lerp(et,Kn*.32);I.push(dn.r,dn.g,dn.b)}}}Z.forEach(({point:gt,filamentScore:rt},At)=>{const yt=Math.floor(At/(G*G)),Lt=At%(G*G),It=Math.floor(Lt/G),me=Lt%G;[[1,0,0],[0,1,0],[0,0,1]].forEach(([$t,re,se])=>{const be=(yt+$t)*G*G+(It+re)*G+me+se,ve=Z.get(be);ve&&(N.push(...gt,...ve.point),(rt>.76||ve.filamentScore>.76)&&P.push(...gt,...ve.point))})}),[{center:[-.72,.86,.14],size:[.52,.18],bend:.18,angle:-.22},{center:[.66,-.72,-.2],size:[.34,.14],bend:-.14,angle:.46}].forEach(gt=>{const yt=new Map;for(let Lt=0;Lt<9;Lt+=1){const It=Lt/8*2-1;for(let me=0;me<24;me+=1){const $t=me/23*2-1;if($t*$t+It*It*1.45>1)continue;const re=Rc($t,It,Y,$),se=$t*gt.size[0],be=It*gt.size[1],ve=Math.cos(gt.angle),ue=Math.sin(gt.angle),ze=[(gt.center[0]+se*ve-be*ue)*Q,(gt.center[1]+se*ue+be*ve)*Q,(gt.center[2]+re*gt.bend+$t*$t*.08)*Q];b.push(...ze),I.push(at.r,at.g,at.b),yt.set(Lt*24+me,ze)}}yt.forEach((Lt,It)=>{const me=Math.floor(It/24),$t=It%24;[[0,1],[1,0]].forEach(([re,se])=>{const be=yt.get((me+re)*24+$t+se);be&&(N.push(...Lt,...be),P.push(...Lt,...be))})})});const Ct=new ae;Ct.setAttribute("position",new Xt(b,3)),Ct.setAttribute("color",new Xt(I,3));const R=new Ge(Ct,new an({size:.065,map:i,color:E.color,transparent:!0,opacity:.045,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));h.add(R);const ct=new Ge(Ct,new an({size:.019,map:i,vertexColors:!0,transparent:!0,opacity:.62,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));h.add(ct);const z=new ae;z.setAttribute("position",new Xt(N,3));const V=new Jr(z,new vi({color:12242401,transparent:!0,opacity:.24,depthWrite:!1,blending:Wt}));h.add(V);const K=new ae;K.setAttribute("position",new Xt(P,3));const tt=new Jr(K,new vi({color:16119807,transparent:!0,opacity:.2,depthWrite:!1,blending:Wt}));return h.add(tt),h.position.set(...E.position),h.userData={...E,isChladni:!0,pattern:ct,glow:R,network:V,outline:tt,index:_},{group:h,definition:E}}function J(E,_){const h=new Re,b=[],I=[],N=t,P=E.radius*2.35,Z=[[40,150,118],[46,190,200],[70,120,235],[182,206,255],[236,182,92],[230,72,96]],Y=Array.from({length:48},(ut,et)=>{const pt=Z[Math.min(Z.length-1,Math.floor(et/8))],_t=et%8/7,Ct=_t*_t*.72,R=.32+_t*.68;return pt.map(ct=>Math.min(255,(ct*(1-Ct)+255*Ct)*R)/255)});for(let ut=0;ut<N.length;ut+=6){const et=N[ut+3],pt=N[ut+4],_t=et*pt,Ct=N[ut]*P,R=N[ut+1]*P,ct=N[ut+2]*P;b.push(Ct,R,ct);const z=Y[Math.min(47,Math.max(0,Math.round(N[ut+5])))]||Y[24],V=.38+_t*1.15;I.push(Math.min(1,z[0]*V),Math.min(1,z[1]*V),Math.min(1,z[2]*V))}const $=new ae;$.setAttribute("position",new Xt(b,3)),$.setAttribute("color",new Xt(I,3));const lt=new Ge($,new an({size:.045,map:i,color:14412031,transparent:!0,opacity:.11,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));h.add(lt);const G=new Ge($,new an({size:.02,map:i,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));h.add(G);const Q=new ae;Q.setAttribute("position",new Xt([],3));const at=new Jr(Q,new vi({color:14477823,transparent:!0,opacity:0,depthWrite:!1,blending:Wt}));return h.add(at),h.position.set(...E.position),h.userData={...E,isChladni:!0,pattern:G,glow:lt,network:null,outline:at,index:_},{group:h,definition:E}}function ht(E,_){const h=new Re,b=new sn(new tn({map:i,color:7998466,transparent:!0,opacity:.16,depthWrite:!1,blending:Wt}));b.scale.setScalar(E.scale*3.5),h.add(b);const I=new sn(new tn({map:i,color:16723724,transparent:!0,opacity:.86,depthWrite:!1,blending:Wt}));I.scale.setScalar(E.scale*1.35),h.add(I);const N=[];for(let Y=0;Y<11;Y+=1){const $=Y*2.39996323+_*.47,lt=E.scale*(.65+Y%4*.35);N.push(Math.cos($)*lt,Math.sin($)*lt*.62,Math.sin($*1.7)*lt*.35)}const P=new ae;P.setAttribute("position",new Xt(N,3));const Z=new Ge(P,new an({size:.038,map:i,color:16734751,transparent:!0,opacity:.7,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));return h.add(Z),h.position.set(...E.position),h.userData={halo:b,core:I,companions:Z,phase:_*.73},{group:h,definition:E}}function ft(){const E=new ae;E.setAttribute("position",new Xt(new Array(6).fill(0),3));const _=new ys(E,new tc({color:13095167,transparent:!0,opacity:.38,dashSize:.085,gapSize:.065,depthWrite:!1}));return _.frustumCulled=!1,_.computeLineDistances(),_}function st(){const E=new Re,_=new sn(new tn({map:i,color:ms,transparent:!0,opacity:.9,depthWrite:!1,blending:Wt}));E.add(_);const h=new sn(new tn({map:i,color:16777215,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Wt}));h.renderOrder=21,E.add(h);const b=new ae,I=new Float32Array(360*3),N=new Float32Array(360*3),P=[],Z=new Ft(ms);for(let lt=0;lt<360;lt+=1)P.push({s:lt/359*2-1,angle:lt*2.39996323,radial:.45+lt%5*.1}),N[lt*3]=Z.r,N[lt*3+1]=Z.g,N[lt*3+2]=Z.b;b.setAttribute("position",new xe(I,3)),b.setAttribute("color",new xe(N,3));const Y=new Ge(b,new an({size:.044,map:i,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,blending:Wt}));E.add(Y);const $=new Re;for(let lt=0;lt<9;lt+=1){const G=new Xe(new Es(.88,1,64),new _i({color:ms,transparent:!0,opacity:.18,side:bn,depthTest:!1,depthWrite:!1,blending:Wt}));G.userData.s=lt/8*2-1,$.add(G)}return E.add($),E.visible=!1,E.userData={core:_,frozenCoreBoost:h,particles:Y,rings:$,meta:P},{group:E,geometry:b,positions:I}}function dt(E){const _=Lc(E),h=Uc(E),b=E>Ln&&E<=qe,I=E>qe;if(!_.active||I){l.group.visible=!1;return}if(l.group.visible=!0,b){const V=l.group.userData.recombinationAnchor;V&&l.group.position.copy(V),l.group.userData.recombinationAnchorQuaternion&&l.group.quaternion.copy(l.group.userData.recombinationAnchorQuaternion);const K=h.silenceBrightness;Hn.copy(rs).lerp(Ic,K),l.group.userData.core.material.color.copy(Hn),l.group.userData.core.material.opacity=ee.lerp(.78,1,K),l.group.userData.particles.material.opacity=ee.lerp(.92,.16,h.progress),l.group.userData.rings.children.forEach(tt=>{const gt=tt.userData.s*19-h.waveTime*34,rt=Math.exp(-tt.userData.s*tt.userData.s*2.8);tt.material.opacity=(.1+Math.max(0,Math.cos(gt))*.38*rt)*(1-K)});return}const N=E,P=1,Z=1;Hn.copy(rs).lerp(Ic,h.silenceBrightness);const Y=Dc(E).nodes,$=Math.min(_.progress,.9)*Y.length,lt=Math.min(Y.length-1,Math.floor($)),G=.12+($-lt)*.76,Q=s[Y[lt]].group.position,at=s[Y[(lt+1)%Y.length]].group.position,ut=new w().subVectors(at,Q),et=Q.clone().lerp(at,Nt(G)),pt=ut.normalize(),_t=new w(0,1,0).cross(pt).normalize();_t.lengthSq()<.01&&_t.set(1,0,0);const Ct=pt.clone().cross(_t).normalize();l.group.position.copy(et).addScaledVector(Ct,Math.sin(N*19)*.045*Z),l.group.quaternion.setFromUnitVectors(new w(0,0,1),pt),l.userData=l.group.userData,l.group.userData.recombinationAnchor=l.group.position.clone(),l.group.userData.recombinationAnchorQuaternion=l.group.quaternion.clone(),l.group.userData.core.scale.setScalar(_.radius*1.65);const R=.9;l.group.userData.core.material.color.copy(Hn),l.group.userData.core.material.opacity=ee.lerp(R,1,h.silenceBrightness),l.group.userData.frozenCoreBoost.material.opacity=0,l.group.userData.particles.material.opacity=ee.lerp(.92,1,h.silenceBrightness),l.group.userData.particles.material.size=ee.lerp(.044,.072,h.silenceBrightness);const ct=l.geometry.getAttribute("position"),z=l.geometry.getAttribute("color");l.group.userData.meta.forEach((V,K)=>{const tt=V.s*19-N*34,gt=Math.exp(-V.s*V.s*3.2),rt=Math.sin(tt)*_.radius*.58*gt,At=(V.s*_.radius*2.7+rt)*(1+h.progress*.8),yt=_.radius*(.34+.12*Math.cos(tt))*P,Lt=Math.cos(V.angle)*yt*V.radial,It=Math.sin(V.angle)*yt*V.radial;ct.setXYZ(K,Lt,It,At),z.setXYZ(K,Hn.r,Hn.g,Hn.b)}),l.group.userData.rings.children.forEach(V=>{const K=V.userData.s*19-N*34,tt=Math.exp(-V.userData.s*V.userData.s*2.8);V.position.z=V.userData.s*.42+Math.sin(K)*.045*tt,V.position.z*=1+h.progress*.8,V.scale.setScalar((.31+(.5+.5*Math.cos(K))*.22*tt)*P),V.material.opacity=(.1+Math.max(0,Math.cos(K))*.38*tt)*(1-h.progress*.35),V.rotation.z=N*.7+V.userData.s}),ct.needsUpdate=!0,z.needsUpdate=!0}function j(E,_){if(u.group.visible=E.active,!E.active){u.lobes.forEach(I=>{I.userData.impactCaptured=!1});return}const h=new Ft(16730902),b=new Ft(16770990);u.lobes.forEach((I,N)=>{const P=N+1,Z=E.impactClock-P,Y=ee.clamp((E.pathPosition-P+.3)/.3,0,1),$=Z<=0?1:1-Nt(ee.clamp(Z/.34,0,1)),lt=Nt(Y)*$,G=Z<0?0:Math.exp(-Z*7.5),Q=Z<0?0:Nt(ee.clamp(Z/.7,0,1)),at=Z<0?0:Nt(ee.clamp(Z/.16,0,1)),{shell:ut,points:et,atmosphere:pt,corona:_t,core:Ct,burst:R,surfaceEffects:ct,splash:z,basePositions:V,drift:K,splashVelocities:tt,splashSurfaceDirections:gt,splashEnergy:rt,splashTypes:At,splashDelays:yt,splashLifetimes:Lt,splashSpinDrag:It,ripple:me,contactDirection:$t,tangentA:re,tangentB:se,ripplePhase:be,surfaceBaseRotation:ve,impactSpinOrigin:ue,impactCaptured:ze}=I.userData;Z>=0&&!ze&&(I.userData.impactSpinOrigin=_,I.userData.impactCaptured=!0);const $e=I.userData.impactCaptured?Math.max(0,_-I.userData.impactSpinOrigin):0,vn=_*ua+N*.52,Ze=et.geometry.getAttribute("position");for(let D=0;D<Ze.count;D+=1){const W=D*3,ot=Math.sign(V[W]||1)*Q*.1;Ze.array[W]=V[W]+K[W]*Q*1.7+ot,Ze.array[W+1]=V[W+1]+K[W+1]*Q*1.7,Ze.array[W+2]=V[W+2]+K[W+2]*Q*1.7}Ze.needsUpdate=!0,ut.rotation.set(ve.x,ve.y+vn,ve.z),et.rotation.copy(ut.rotation),pt.rotation.copy(ut.rotation),_t.rotation.set(ut.rotation.x*.72,ve.y+vn,ut.rotation.z*.66),ct.rotation.set(0,I.userData.impactCaptured?$e*ua:0,0),I.scale.setScalar(1.42),ut.material.uniforms.uReveal.value=E.reveal,ut.material.uniforms.uImpact.value=G,ut.material.uniforms.uScar.value=at,pt.material.uniforms.uReveal.value=E.reveal;const xn=Z<0?0:1-Math.exp(-Z*16);pt.material.uniforms.uImpact.value=Math.max(G,xn*.34),pt.material.uniforms.uHeat.value=xn,et.material.color.copy(h).lerp(b,G*.68),et.material.opacity=E.reveal*(.08+G*.38+at*.08),_t.material.opacity=E.reveal*(.2+lt*.08+G*.24),Ct.material.opacity=E.reveal*(G*.98+at*.045),Ct.scale.setScalar(.2+G*.46+at*.03);const fn=me.geometry.getAttribute("position"),dn=me.geometry.getAttribute("aAlpha"),Pn=E.rippleStrength;for(let D=0;D<fn.count;D+=1){const W=Math.floor(D/96),ot=$e-W*.12,vt=D*3;if(!I.userData.impactCaptured||ot<0||ot>2.9){dn.array[D]=0;continue}const Et=.06+ee.clamp(ot/2.35,0,1)*.92,bt=be[D]+ot*5.8,wt=Math.sin(Et),Gt=$t.x*Math.cos(Et)+(re.x*Math.cos(bt)+se.x*Math.sin(bt))*wt,kt=$t.y*Math.cos(Et)+(re.y*Math.cos(bt)+se.y*Math.sin(bt))*wt,Qt=$t.z*Math.cos(Et)+(re.z*Math.cos(bt)+se.z*Math.sin(bt))*wt,te=Math.hypot(Gt,kt,Qt),qt=.642/Math.max(.001,te);fn.array[vt]=Gt*qt,fn.array[vt+1]=kt*qt,fn.array[vt+2]=Qt*qt;const Dt=Nt(ee.clamp(ot/.045,0,1)),Ee=1-Nt(ee.clamp((ot-1.2)/1.7,0,1));dn.array[D]=Dt*Ee*Pn*(.68+G*.36)}fn.needsUpdate=!0,dn.needsUpdate=!0,me.material.uniforms.uOpacity.value=E.reveal*1.3,me.material.uniforms.uPointScale.value=Mi.domElement.height*.72;const Ce=z.geometry.getAttribute("position"),x=z.geometry.getAttribute("aAlpha"),O=E.rippleStrength;for(let D=0;D<Ce.count;D+=1){const W=D*3,ot=$e-yt[D],vt=Lt[D];if(!I.userData.impactCaptured||ot<0||ot>vt){x.array[D]=0;continue}const mt=ot/vt,Et=At[D],bt=rt[D],wt=D*2.39996323+I.userData.phase,Gt=4.6+It[D]*8.4,kt=wt+ot*Gt,Qt=Math.cos(kt),te=Math.sin(kt);if(Et===0){const Ht=.04+ot*(.3+bt*.42),pe=Math.min(1.05,Ht),Ke=$t.x*Math.cos(pe)+(re.x*Qt+se.x*te)*Math.sin(pe),Ae=$t.y*Math.cos(pe)+(re.y*Qt+se.y*te)*Math.sin(pe),pn=$t.z*Math.cos(pe)+(re.z*Qt+se.z*te)*Math.sin(pe),ce=Math.hypot(Ke,Ae,pn),Me=(.642+(.018+bt*.08*Math.exp(-ot*1.3)))/Math.max(.001,ce);Ce.array[W]=Ke*Me,Ce.array[W+1]=Ae*Me,Ce.array[W+2]=pn*Me}else if(Et===1){const Ht=(D*37+N*17)%997/997,pe=(D*71+13)%101/101-.5,Ke=(D*113+N*29)%991/991-.5,Ae=(D*89+N*11)%977/977-.5,pn=D%3,ce=Ht*Math.PI*4.6+pn*Math.PI*2/3,Je=.72+Ht*1.72+pe*.12,Me=Nt(ee.clamp(ot/.78,0,1)),Ue=ce*Me+ot*(.5+It[D]*.85),Fe=ee.lerp(.642,Je,Me)+Math.sin(ce*3+wt)*.028*Me,wi=.18+bt*.16,Nn=Math.cos(Ue)*Fe,xo=Math.sin(Ue)*Fe,wl=(.08+Me*.38)*(.55+Ht*.72),Rl=Ke*wl+Math.sin(ce*1.7+wt+ot*2.2)*.045*Me,Cl=Ae*(.06+Me*.24);Ce.array[W]=Nn,Ce.array[W+1]=xo*Math.sin(wi)+pe*.085*Me+Rl,Ce.array[W+2]=xo*Math.cos(wi)+Cl}else{const Ht=.018+ot*(.12+bt*.25),pe=ot*(.78+bt*.6)*Math.exp(-ot*.16),Ke=Math.sin(kt*.5)*.025*bt;Ce.array[W]=$t.x*(.642+pe)+re.x*Qt*Ht+se.x*te*Ht,Ce.array[W+1]=$t.y*(.642+pe)+re.y*Qt*Ht+se.y*te*Ht+Ke,Ce.array[W+2]=$t.z*(.642+pe)+re.z*Qt*Ht+se.z*te*Ht}const qt=Nt(ee.clamp(ot/.045,0,1)),Dt=1-Nt(ee.clamp((mt-.46)/.54,0,1)),Ee=Et===0?.7:Et===1?.92:1.08;x.array[D]=qt*Dt*Ee*(.42+bt*.7)*O}Ce.needsUpdate=!0,x.needsUpdate=!0,z.material.uniforms.uOpacity.value=E.reveal*1.9,z.material.uniforms.uPointScale.value=Mi.domElement.height*.72;const X=Nt(ee.clamp($e/.035,0,1)),q=I.userData.impactCaptured?X*Math.exp(-$e*5.2):0;R.material.opacity=E.reveal*q*.95,R.scale.setScalar(.28+q*.82)})}function Mt(E,_){const h=new w().subVectors(_,E).normalize();return new rr().setFromUnitVectors(new w(0,0,1),h)}function Rt(E=!1){const _=u.lobes[0],h=_.userData.contactDirection.clone().multiplyScalar(.642),b=E?_.userData.surfaceEffects:_;b.updateWorldMatrix(!0,!1);const I=b.localToWorld(h),N=_.getWorldPosition(new w),P=I.clone().sub(N).normalize();Oe.updateWorldMatrix(!0,!1);const Z=Oe.worldToLocal(I.clone());return{worldPoint:I,localPoint:Z,normalWorld:P}}function Ot(E,_,h,b,I){const N=new w(Math.sin(_*.12)*.28+h*.035,.12+Math.cos(_*.17)*.1,12.5-h*1.1+b.progress*1.7),P=new w(0,0,0),Z=Nt(ee.clamp((E-(qe-.42))/.42,0,1));if(!I.active&&Z<=0){on.position.copy(N),on.lookAt(P);return}const Y=l.group.getWorldPosition(new w),$=u.lobes[0].getWorldPosition(new w),lt=$.clone().lerp(Y,.34),G=lt.clone().add(new w(0,.18,7.4)),Q=I.active?1:Z,at=I.active?Nt(ee.clamp((I.impactClock-1)/.34,0,1)):0,ut=$,et=ut.clone().add(new w(0,2.15,6.9));on.position.copy(N).lerp(G,Q).lerp(et,at),on.lookAt(P.lerp(lt,Q).lerp(ut,at))}function Kt(E,_,h){const b=h.lobes[0].getWorldPosition(new w),I=b.clone().add(new w(0,2.15,6.9)),N=new w(-3.6,.48,12.5),P=new w(3.6,.48,12.5),Z=new w(-.18,.02,0),Y=new w(.24,.02,0),$=_.active?Nt(ee.clamp((E-Pe)/1.8,0,1)):0,lt=N.clone().lerp(P,_.parallaxProgress??0),G=Z.clone().lerp(Y,_.parallaxProgress??0);on.position.copy(I).lerp(lt,$),on.lookAt(b.clone().lerp(G,$))}function le(E){if(!E.active){if(!l.group.userData.sceneThreeActive)return;l.group.userData.sceneThreeActive=!1,l.group.userData.sceneThreeStart=null,l.group.userData.sceneThreeStartQuaternion=null,l.group.scale.setScalar(1),l.group.userData.core.renderOrder=0,l.group.userData.core.material.depthTest=!0,l.group.userData.frozenCoreBoost.material.opacity=0;return}l.group.userData.sceneThreeActive=!0,l.group.visible=!0;const _=u.lobes[0],h=Rt(!1).localPoint;if(E.pathPosition<=0){const Y=_.getWorldPosition(new w),$=_.userData.contactDirection.clone().normalize(),lt=Y.addScaledVector($,3.15);Oe.updateWorldMatrix(!0,!1);const G=Oe.worldToLocal(lt);l.group.userData.sceneThreeStart=G,l.group.userData.sceneThreeStartQuaternion=Mt(G,h),l.group.position.copy(G),l.group.quaternion.copy(l.group.userData.sceneThreeStartQuaternion),l.group.scale.setScalar(1),l.group.userData.core.scale.setScalar(.82),l.group.userData.core.material.color.copy(rs),l.group.userData.core.material.opacity=.94,l.group.userData.particles.material.opacity=.88,l.group.userData.frozenCoreBoost.material.opacity=0;return}const b=l.group.userData.sceneThreeStart??l.group.position.clone(),I=l.group.userData.sceneThreeStartQuaternion??l.group.quaternion.clone(),N=1-Math.pow(1-E.pathPosition,2.35),P=Math.max(0,E.impactClock-1)*Al;if(E.pathPosition<1){const Y=Mt(b,h);l.group.position.copy(b).lerp(h,N),l.group.quaternion.copy(I).slerp(Y,N)}else{const Y=new w(0,1,0),$=P*ua,lt=_.userData.contactDirection.clone().applyAxisAngle(Y,$).normalize(),G=_.getWorldPosition(new w).addScaledVector(lt,.642*1.42);Oe.updateWorldMatrix(!0,!1);const Q=Oe.worldToLocal(G),at=Oe.worldToLocal(_.getWorldPosition(new w)),ut=Y.clone().cross(lt).normalize(),et=Q.clone().add(ut);l.group.position.copy(Q).lerp(at,E.freeze),l.group.quaternion.copy(Mt(Q,et))}l.group.scale.setScalar(1),l.group.userData.particles.material.opacity=.88*E.rippleStrength,l.group.userData.rings.children.forEach(Y=>{const $=.12+Math.max(0,Math.cos(Y.userData.s*19))*.34;Y.material.opacity=$*E.rippleStrength});const Z=E.pathPosition>=1?Math.exp(-P*10):0;l.group.userData.core.scale.setScalar(.82),l.group.userData.core.renderOrder=20,Hn.copy(rs).lerp(la,E.freeze),l.group.userData.core.material.color.copy(Hn),l.group.userData.core.material.depthTest=!1,l.group.userData.core.material.opacity=E.coreStrength*(.9+Z*.1),l.group.userData.frozenCoreBoost.scale.copy(l.group.userData.core.scale),l.group.userData.frozenCoreBoost.material.color.copy(la),l.group.userData.frozenCoreBoost.material.opacity=E.freeze*.82}function it(E,_,h,b){const{group:I,backdrop:N,stars:P,flatLines:Z,depthLines:Y,distanceLine:$,distanceAnchor:lt,distanceLabel:G,imprint:Q,imprintHalo:at,imprintCore:ut,imprintRings:et,imprintTarget:pt}=E;if(!_.active){I.visible=!1,P.forEach(V=>{V.userData.label.style.opacity="0",V.userData.label.style.display="none"}),G.style.opacity="0",G.style.display="none";return}I.visible=!0,I.rotation.set(.05,-.12,0),N.material.opacity=_.reveal*.68;const _t=b.lobes[0].getWorldPosition(new w),Ct=Nt(ee.clamp((h-Pe)/1.05,0,1));Q.position.copy(_t).lerp(pt,Ct),Q.rotation.z=Math.sin((h-Pe)*.7)*.08,P.forEach(V=>{const{halo:K,core:tt,phase:gt,label:rt,startPosition:At}=V.userData,yt=V.userData.definition.brightness??1;V.position.copy(At);const Lt=.9+Math.sin(h*1.6+gt)*.1;tt.material.opacity=Math.min(1,_.constellationReveal*Lt*.92*yt),K.material.opacity=Math.min(1,_.constellationReveal*Lt*.24*yt);const It=_.constellationReveal*(.52+Lt*.22);rt.style.opacity=`${It}`,rt.style.display="block"});const R=P[3].position;$.geometry.setFromPoints([R,Q.position]),$.computeLineDistances(),lt.position.copy(R).lerp(Q.position,.52);const ct=(V,K)=>V.forEach((tt,gt)=>{const rt=gt*.075,At=Nt(ee.clamp((_.lineReveal-rt)/.24,0,1)),yt=tt.userData.isUpperTriangle?.62:.5;tt.material.opacity=At*yt*K,tt.userData.glow.material.opacity=At*yt*K*.4});ct(Z,_.flatLineOpacity),ct(Y,_.depthLineOpacity),$.material.opacity=_.distanceReveal*.54,G.style.opacity=`${_.distanceReveal*.7}`,G.style.display="block";const z=_.reveal*(1-_.imprintFade*.72);ut.material.opacity=z*.96,at.material.opacity=z*.28,ut.scale.setScalar(.62+Math.sin(h*1.4)*.018),at.scale.setScalar(1.65+Math.sin(h*1.1)*.06),et.forEach((V,K)=>{const tt=h*(1.8-K*.22)+V.userData.phase;V.scale.setScalar(1+Math.sin(tt)*.04),V.material.opacity=z*(.16-K*.025)})}function xt(E){const _=Lc(E),h=_.active&&E<=Ln;if(os.classList.toggle("is-visible",h),!h)return;const b=Pg(_.progress);Xg.textContent=Math.round(b.sourceFrequency),qg.textContent=b.velocityRatio.toFixed(2),Yg.textContent=Math.round(b.observedFrequency);const I=l.group.getWorldPosition(new w).project(on),N=ee.clamp((I.x*.5+.5)*100+7,21,79),P=ee.clamp((-I.y*.5+.5)*100-5,27,69),Z=Nt(Math.min(1,_.progress/.08)),Y=Nt(Math.min(1,(1-_.progress)/.1));os.style.left=`${N}%`,os.style.top=`${P}%`,os.style.opacity=`${Z*Y}`,Wg.style.strokeDashoffset=`${96-_.progress*192}`}function Pt(E,_=E){const h=Math.min(wn,Math.floor(E*ps)/ps),b=Uc(h),I=Rg(h),N=Cg(h),P=I.active&&h>qe,Z=P?I:{...I,active:!1},Y=N.active&&h>bs,$=Y?N:{...N,active:!1};Ng.style.opacity=Y?`${$.reveal}`:"0";const lt=h>=Ln?b.waveTime:h,G=ee.smoothstep(h,qe,qe+.76),Q=1-G,at=(1-b.progress*.46)*Q,ut=1-ee.smoothstep(b.progress,0,.12),et=_*2,pt=Math.min(Sg-1,Math.floor(h*ps));if(pt!==M){M=pt,Fg.textContent=bg(h),Og.textContent=Y?"声学印记 · d_BAO ≈ 147 Mpc · 星系间距":P?"碰撞冲量  J = ∫F dt = Δp · 声痕冻结":h>Ln?"声学俘获 · x(t) = xw + (x₀ − xw)e^(−λt)":h>=4.3?"纵波位移  ξ(x,t) = A sin(kx - ωt)":"原初光子 · 重子 · 声压峰";const rt=Y&&h>Pe+.25,At=P&&h>qe+.25,yt=h>=Ln+.3;Vg.textContent=rt?"SCENE 04 / DISTANCE IMPRINT":At?"SCENE 03 / SIXFOLD CORE":yt?"SCENE 02 / RECOMBINATION":"SCENE 01 / PRIMORDIAL PLASMA",Hg.textContent=rt?"回声，写进星系之间。":At?"一声，撞向六合。":yt?"光与物质，从此分离。":"很久以前，声音还没有名字。",Bg.textContent=`${L(h)} / 00:24.60`}const _t=Dc(h),Ct=new Set(_t.nodes),R=Ag(h,_t.nodes,s.length,o.length),ct=new Set(R.main);Oe.rotation.x=Math.sin(lt*.2)*.018,Oe.rotation.y=lt*.035,Oe.rotation.z=Math.sin(lt*.17)*.012;const z=ee.smoothstep(h,.85,1.25);e.children.forEach(rt=>{rt.material.uniforms.uTime.value=_,rt.material.uniforms.uReveal.value=z,rt.material.uniforms.uAbsorbProgress.value=b.absorption});const V=ee.lerp(1,.18,G);n.visible=b.progress>0,n.material.opacity=ee.smoothstep(b.progress,.04,.34)*.28*V;const K=ee.smoothstep(b.progress,.05,.18),tt=1-ee.smoothstep(b.progress,.84,.97);Bc.style.opacity=`${K*tt}`,Bc.style.transform=`translateY(${(1-K)*8}px)`,Gg.textContent=b.baryonVelocity.toFixed(3),zc.style.opacity=`${P?I.reveal*(1-I.freeze*.35):0}`,zc.style.transform=`translateY(${(1-I.reveal)*8}px)`,kg.textContent=String(I.completedImpacts).padStart(2,"0"),s.forEach(({group:rt,definition:At},yt)=>{const Lt=Ct.has(yt),It=Lt?1-b.progress*.82:0,me=Lt?1.18:.9,$t=ee.lerp(me,.78,b.progress);if(rt.scale.lerp(new w($t,$t,$t),.08),rt.position.x=At.position[0]*(1+b.progress*.08),rt.position.y=At.position[1]*(1+b.progress*.06)+Math.sin(lt*.32+At.phase)*.05*b.baryonVelocity,rt.position.z=At.position[2]-b.progress*.45,rt.userData.isChladni){rt.rotation.x=.58+Math.sin(et*.52+At.phase)*.24,rt.rotation.y=At.phase+et*At.spin*1.15,rt.rotation.z=At.phase*.18+et*At.spin*.62;const se=At.boundary==="volume";rt.userData.pattern.material.opacity=(se?.5+It*.38:.56+It*.38)*at,rt.userData.glow.material.opacity=(se?.01+It*.035:.08+It*.2)*at,rt.userData.network&&(rt.userData.network.material.opacity=(se?.16+It*.16:.1+It*.2)*at),rt.userData.outline.material.opacity=(se?.08+It*.16:.07+It*.2)*at,rt.userData.vertexPoints&&(rt.userData.vertexPoints.material.opacity=(.58+It*.36)*at)}else rt.rotation.y=At.phase+et*At.spin,rt.rotation.x=Math.sin(et*.6+At.phase)*.14,rt.userData.halo.material.opacity=(.07+It*.16+Math.sin(_*1.8+At.phase)*.015)*at,rt.userData.mantle.material.opacity=(.22+It*.24)*at,rt.userData.core.material.opacity=(.6+It*.32)*at,rt.userData.particles.material.opacity=(.44+It*.4)*at,rt.userData.ring.material.opacity=(.12+It*.26)*at;const re=ct.has(yt);p[yt].classList.toggle("is-focus",Lt&&re),p[yt].style.opacity=re?`${(Lt?1:.58)*ut}`:"0"}),o.forEach(({group:rt,definition:At},yt)=>{const Lt=.82+Math.sin(lt*1.35+rt.userData.phase)*.18*b.baryonVelocity;rt.scale.setScalar(Lt*ee.lerp(1,.72,b.progress)),rt.position.x=At.position[0]*(1+b.progress*.14),rt.position.y=At.position[1]*(1+b.progress*.11),rt.position.z=At.position[2]-b.progress*.55,rt.userData.companions.rotation.z=et*(.12+yt%3*.035),rt.userData.companions.rotation.y=et*.08+rt.userData.phase,rt.userData.core.material.opacity=(.68+Lt*.16)*at,rt.userData.halo.material.opacity=(.04+Lt*.07)*at,m[yt].style.opacity=yt===R.minor?`${(.46+Lt*.2)*ut}`:"0"}),Pc.forEach(([rt,At],yt)=>{const Lt=c[yt],It=s[_t.nodes[rt]].group.position,me=s[_t.nodes[At]].group.position,$t=Lt.geometry.getAttribute("position");$t.setXYZ(0,It.x,It.y,It.z),$t.setXYZ(1,me.x,me.y,me.z),$t.needsUpdate=!0,Lt.material.opacity=ee.smoothstep(h,.12,.72)*.46*ut,Lt.computeLineDistances()}),j(Z,_),dt(h),le(Z),it(d,$,h,u),e.children.forEach(rt=>{rt.material.uniforms.uAbsorbTarget.value.copy(l.group.position)});const gt=wg(h);Y?Kt(h,$,u):Ot(h,lt,gt,b,Z),on.updateMatrixWorld(),xt(h),Tt(),zt(d,$)}function Tt(){s.forEach(({group:E},_)=>{Vt(E,p[_])}),o.forEach(({group:E},_)=>{Vt(E,m[_])})}function zt(E,_){_.active&&(E.stars.forEach(h=>{Vt(h,h.userData.label)}),Vt(E.distanceAnchor,E.distanceLabel))}function Vt(E,_){const h=E.getWorldPosition(new w).project(on),b=h.z<1&&h.x>-1.1&&h.x<1.1&&h.y>-1.1&&h.y<1.1;_.style.display=b?"block":"none",b&&(_.style.left=`${(h.x*.5+.5)*100}%`,_.style.top=`${(-h.y*.5+.5)*100}%`)}function Nt(E){return E*E*(3-2*E)}function _e(E){let _=E>>>0;return()=>(_=_*1664525+1013904223>>>0,_/4294967296)}const ie=(()=>{const E=_e(20260822);return Array.from({length:230},()=>({x:E(),y:E(),r:E()*1.1+.15,alpha:E()*.53+.12}))})();function ye(){const E=mr.clientWidth,_=mr.clientHeight;if(!E||!_)return;const h=Math.min(window.devicePixelRatio||1,2);mr.width=Math.round(E*h),mr.height=Math.round(_*h),Gn.setTransform(h,0,0,h,0,0),Gn.clearRect(0,0,E,_);const b=Gn.createRadialGradient(E*.54,_*.47,0,E*.54,_*.47,Math.max(E,_)*.75);b.addColorStop(0,"rgba(22, 22, 27, .20)"),b.addColorStop(.58,"rgba(5, 6, 9, .16)"),b.addColorStop(1,"rgba(2, 3, 5, .72)"),Gn.fillStyle=b,Gn.fillRect(0,0,E,_),ie.forEach(I=>{Gn.beginPath(),Gn.fillStyle=`rgba(220, 218, 211, ${I.alpha})`,Gn.arc(I.x*E,I.y*_,I.r,0,Math.PI*2),Gn.fill()})}function L(E){return`00:${E.toFixed(2).padStart(5,"0")}`}function Ye(){const E=no.clientWidth,_=no.clientHeight,h=Math.min(window.devicePixelRatio||1,2,3840/E,2160/_);Mi.setPixelRatio(h),Mi.setSize(E,_,!1),on.aspect=E/_,on.updateProjectionMatrix(),ye()}function Jt(E){v=E,as.innerHTML=`<i data-lucide="${E?"pause":"play"}"></i>`,as.setAttribute("aria-label",E?"暂停":"播放"),as.title=E?"暂停":"播放",bl({icons:{Play:El,Pause:yl,RotateCcw:Tl}})}as.addEventListener("click",async()=>{if(v){En.pause(),Jt(!1);return}En.currentTime>=wn-.02&&(En.currentTime=0),await En.play(),Jt(!0)}),zg.addEventListener("click",()=>{En.pause(),En.currentTime=0,Jt(!1),Pt(0,Ut)}),En.addEventListener("timeupdate",()=>{En.currentTime>=wn&&(En.pause(),En.currentTime=wn,Jt(!1))}),window.addEventListener("resize",Ye),Ye(),Pt(0);const ne=new Ph;let Ut=0;function fe(){const E=Math.min(En.currentTime,wn);Ut+=Math.min(ne.getDelta(),.05),Pt(E,Ut),Mi.render(Sr,on),requestAnimationFrame(fe)}fe()}$g();
