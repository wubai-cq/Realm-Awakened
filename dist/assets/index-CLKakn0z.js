(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ao="172",Ul=0,bo=1,Nl=2,Gc=1,Fl=2,kn=3,oi=0,fn=1,wn=2,si=0,$i=1,Wt=2,To=3,Ao=4,Ol=5,gi=100,Bl=101,zl=102,Vl=103,Hl=104,Gl=200,kl=201,Wl=202,Xl=203,ma=204,ga=205,ql=206,Yl=207,$l=208,Zl=209,Kl=210,Jl=211,jl=212,Ql=213,tu=214,_a=0,va=1,xa=2,Ji=3,Ma=4,Sa=5,ya=6,Ea=7,kc=0,eu=1,nu=2,ai=0,iu=1,ru=2,su=3,au=4,ou=5,cu=6,lu=7,Wc=300,ji=301,Qi=302,ba=303,Ta=304,Rs=306,Aa=1e3,Si=1001,wa=1002,Pn=1003,uu=1004,Cr=1005,Un=1006,Ds=1007,yi=1008,$n=1009,Xc=1010,qc=1011,Er=1012,oo=1013,Ei=1014,Wn=1015,Tr=1016,co=1017,lo=1018,tr=1020,Yc=35902,$c=1021,Zc=1022,Cn=1023,Kc=1024,Jc=1025,Zi=1026,er=1027,jc=1028,uo=1029,Qc=1030,ho=1031,fo=1033,us=33776,hs=33777,ds=33778,fs=33779,Ra=35840,Ca=35841,Pa=35842,Da=35843,La=36196,Ia=37492,Ua=37496,Na=37808,Fa=37809,Oa=37810,Ba=37811,za=37812,Va=37813,Ha=37814,Ga=37815,ka=37816,Wa=37817,Xa=37818,qa=37819,Ya=37820,$a=37821,ps=36492,Za=36494,Ka=36495,tl=36283,Ja=36284,ja=36285,Qa=36286,hu=3200,du=3201,fu=0,pu=1,ri="",je="srgb",nr="srgb-linear",vs="linear",Me="srgb",wi=7680,wo=519,mu=512,gu=513,_u=514,el=515,vu=516,xu=517,Mu=518,Su=519,to=35044,Ro=35048,Co="300 es",Xn=2e3,xs=2001;class rr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Po=1234567;const _r=Math.PI/180,br=180/Math.PI;function qn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function po(i,t){return(i%t+t)%t}function yu(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Eu(i,t,e){return i!==t?(e-i)/(t-i):0}function vr(i,t,e){return(1-e)*i+e*t}function bu(i,t,e,n){return vr(i,t,1-Math.exp(-e*n))}function Tu(i,t=1){return t-Math.abs(po(i,t*2)-t)}function Au(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function wu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ru(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Cu(i,t){return i+Math.random()*(t-i)}function Pu(i){return i*(.5-Math.random())}function Du(i){i!==void 0&&(Po=i);let t=Po+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lu(i){return i*_r}function Iu(i){return i*br}function Uu(i){return(i&i-1)===0&&i!==0}function Nu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ou(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),u=s((t+n)/2),l=a((t+n)/2),f=s((t-n)/2),p=a((t-n)/2),m=s((n-t)/2),_=a((n-t)/2);switch(r){case"XYX":i.set(o*l,c*f,c*p,o*u);break;case"YZY":i.set(c*p,o*l,c*f,o*u);break;case"ZXZ":i.set(c*f,c*p,o*l,o*u);break;case"XZX":i.set(o*l,c*_,c*m,o*u);break;case"YXY":i.set(c*m,o*l,c*_,o*u);break;case"ZYZ":i.set(c*_,c*m,o*l,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const oe={DEG2RAD:_r,RAD2DEG:br,generateUUID:qn,clamp:se,euclideanModulo:po,mapLinear:yu,inverseLerp:Eu,lerp:vr,damp:bu,pingpong:Tu,smoothstep:Au,smootherstep:wu,randInt:Ru,randFloat:Cu,randFloatSpread:Pu,seededRandom:Du,degToRad:Lu,radToDeg:Iu,isPowerOfTwo:Uu,ceilPowerOfTwo:Nu,floorPowerOfTwo:Fu,setQuaternionFromProperEuler:Ou,normalize:xe,denormalize:Rn};class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,r,s,a,o,c,u){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,u)}set(t,e,n,r,s,a,o,c,u){const l=this.elements;return l[0]=t,l[1]=r,l[2]=o,l[3]=e,l[4]=s,l[5]=c,l[6]=n,l[7]=a,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],l=n[4],f=n[7],p=n[2],m=n[5],_=n[8],x=r[0],g=r[3],d=r[6],D=r[1],A=r[4],E=r[7],V=r[2],U=r[5],I=r[8];return s[0]=a*x+o*D+c*V,s[3]=a*g+o*A+c*U,s[6]=a*d+o*E+c*I,s[1]=u*x+l*D+f*V,s[4]=u*g+l*A+f*U,s[7]=u*d+l*E+f*I,s[2]=p*x+m*D+_*V,s[5]=p*g+m*A+_*U,s[8]=p*d+m*E+_*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],l=t[8];return e*a*l-e*o*u-n*s*l+n*o*c+r*s*u-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],l=t[8],f=l*a-o*u,p=o*c-l*s,m=u*s-a*c,_=e*f+n*p+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=f*x,t[1]=(r*u-l*n)*x,t[2]=(o*n-r*a)*x,t[3]=p*x,t[4]=(l*e-r*c)*x,t[5]=(r*s-o*e)*x,t[6]=m*x,t[7]=(n*c-u*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+t,-r*u,r*c,-r*(-u*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ls.makeScale(t,e)),this}rotate(t){return this.premultiply(Ls.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ls.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ls=new te;function nl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bu(){const i=Ms("canvas");return i.style.display="block",i}const Do={};function qi(i){i in Do||(Do[i]=!0,console.warn(i))}function zu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Vu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Lo=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Io=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gu(){const i={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Me&&(r.r=Yn(r.r),r.g=Yn(r.g),r.b=Yn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Me&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ri?vs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[nr]:{primaries:t,whitePoint:n,transfer:vs,toXYZ:Lo,fromXYZ:Io,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:Lo,fromXYZ:Io,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),i}const me=Gu();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ri;class ku{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ri===void 0&&(Ri=Ms("canvas")),Ri.width=t.width,Ri.height=t.height;const n=Ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ms("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wu=0;class il{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Is(r[a].image)):s.push(Is(r[a]))}else s=Is(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Is(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ku.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xu=0;class cn extends rr{constructor(t=cn.DEFAULT_IMAGE,e=cn.DEFAULT_MAPPING,n=Si,r=Si,s=Un,a=yi,o=Cn,c=$n,u=cn.DEFAULT_ANISOTROPY,l=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=qn(),this.name="",this.source=new il(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Aa:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Aa:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Wc;cn.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,e=0,n=0,r=1){De.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,u=c[0],l=c[4],f=c[8],p=c[1],m=c[5],_=c[9],x=c[2],g=c[6],d=c[10];if(Math.abs(l-p)<.01&&Math.abs(f-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(l+p)<.1&&Math.abs(f+x)<.1&&Math.abs(_+g)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(u+1)/2,E=(m+1)/2,V=(d+1)/2,U=(l+p)/4,I=(f+x)/4,H=(_+g)/4;return A>E&&A>V?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=U/n,s=I/n):E>V?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=U/r,s=H/r):V<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(V),n=I/s,r=H/s),this.set(n,r,s,e),this}let D=Math.sqrt((g-_)*(g-_)+(f-x)*(f-x)+(p-l)*(p-l));return Math.abs(D)<.001&&(D=1),this.x=(g-_)/D,this.y=(f-x)/D,this.z=(p-l)/D,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qu extends rr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new cn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new il(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends qu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rl extends cn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yu extends cn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],u=n[r+1],l=n[r+2],f=n[r+3];const p=s[a+0],m=s[a+1],_=s[a+2],x=s[a+3];if(o===0){t[e+0]=c,t[e+1]=u,t[e+2]=l,t[e+3]=f;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=_,t[e+3]=x;return}if(f!==x||c!==p||u!==m||l!==_){let g=1-o;const d=c*p+u*m+l*_+f*x,D=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){const V=Math.sqrt(A),U=Math.atan2(V,d*D);g=Math.sin(g*U)/V,o=Math.sin(o*U)/V}const E=o*D;if(c=c*g+p*E,u=u*g+m*E,l=l*g+_*E,f=f*g+x*E,g===1-o){const V=1/Math.sqrt(c*c+u*u+l*l+f*f);c*=V,u*=V,l*=V,f*=V}}t[e]=c,t[e+1]=u,t[e+2]=l,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],u=n[r+2],l=n[r+3],f=s[a],p=s[a+1],m=s[a+2],_=s[a+3];return t[e]=o*_+l*f+c*m-u*p,t[e+1]=c*_+l*p+u*f-o*m,t[e+2]=u*_+l*m+o*p-c*f,t[e+3]=l*_-o*f-c*p-u*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(n/2),l=o(r/2),f=o(s/2),p=c(n/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=p*l*f+u*m*_,this._y=u*m*f-p*l*_,this._z=u*l*_+p*m*f,this._w=u*l*f-p*m*_;break;case"YXZ":this._x=p*l*f+u*m*_,this._y=u*m*f-p*l*_,this._z=u*l*_-p*m*f,this._w=u*l*f+p*m*_;break;case"ZXY":this._x=p*l*f-u*m*_,this._y=u*m*f+p*l*_,this._z=u*l*_+p*m*f,this._w=u*l*f-p*m*_;break;case"ZYX":this._x=p*l*f-u*m*_,this._y=u*m*f+p*l*_,this._z=u*l*_-p*m*f,this._w=u*l*f+p*m*_;break;case"YZX":this._x=p*l*f+u*m*_,this._y=u*m*f+p*l*_,this._z=u*l*_-p*m*f,this._w=u*l*f-p*m*_;break;case"XZY":this._x=p*l*f-u*m*_,this._y=u*m*f-p*l*_,this._z=u*l*_+p*m*f,this._w=u*l*f+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],u=e[2],l=e[6],f=e[10],p=n+o+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(l-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(l-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+l)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+l)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,u=e._z,l=e._w;return this._x=n*l+a*o+r*u-s*c,this._y=r*l+a*c+s*o-n*u,this._z=s*l+a*u+n*c-r*o,this._w=a*l-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const u=Math.sqrt(c),l=Math.atan2(u,o),f=Math.sin((1-e)*l)/u,p=Math.sin(e*l)/u;return this._w=a*f+this._w*p,this._x=n*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,n=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,u=2*(a*r-o*n),l=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+c*u+a*f-o*l,this.y=n+c*l+o*u-s*f,this.z=r+c*f+s*l-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Us.copy(this).projectOnVector(t),this.sub(Us)}reflect(t){return this.sub(Us.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Us=new w,Uo=new sr;class Ar{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,En):En.fromBufferAttribute(s,a),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(t.matrixWorld),this.union(Pr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),Dr.subVectors(this.max,or),Ci.subVectors(t.a,or),Pi.subVectors(t.b,or),Di.subVectors(t.c,or),Jn.subVectors(Pi,Ci),jn.subVectors(Di,Pi),ci.subVectors(Ci,Di);let e=[0,-Jn.z,Jn.y,0,-jn.z,jn.y,0,-ci.z,ci.y,Jn.z,0,-Jn.x,jn.z,0,-jn.x,ci.z,0,-ci.x,-Jn.y,Jn.x,0,-jn.y,jn.x,0,-ci.y,ci.x,0];return!Ns(e,Ci,Pi,Di,Dr)||(e=[1,0,0,0,1,0,0,0,1],!Ns(e,Ci,Pi,Di,Dr))?!1:(Lr.crossVectors(Jn,jn),e=[Lr.x,Lr.y,Lr.z],Ns(e,Ci,Pi,Di,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fn=[new w,new w,new w,new w,new w,new w,new w,new w],En=new w,Pr=new Ar,Ci=new w,Pi=new w,Di=new w,Jn=new w,jn=new w,ci=new w,or=new w,Dr=new w,Lr=new w,li=new w;function Ns(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){li.fromArray(i,s);const o=r.x*Math.abs(li.x)+r.y*Math.abs(li.y)+r.z*Math.abs(li.z),c=t.dot(li),u=e.dot(li),l=n.dot(li);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>o)return!1}return!0}const $u=new Ar,cr=new w,Fs=new w;class wr{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$u.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cr.subVectors(t,this.center);const e=cr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(cr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cr.copy(t.center).add(Fs)),this.expandByPoint(cr.copy(t.center).sub(Fs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new w,Os=new w,Ir=new w,Qn=new w,Bs=new w,Ur=new w,zs=new w;class mo{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Os.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(Os);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ir),o=Qn.dot(this.direction),c=-Qn.dot(Ir),u=Qn.lengthSq(),l=Math.abs(1-a*a);let f,p,m,_;if(l>0)if(f=a*c-o,p=a*o-c,_=s*l,f>=0)if(p>=-_)if(p<=_){const x=1/l;f*=x,p*=x,m=f*(f+a*p+2*o)+p*(a*f+p+2*c)+u}else p=s,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+u;else p=-s,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+u;else p<=-_?(f=Math.max(0,-(-a*s+o)),p=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+p*(p+2*c)+u):p<=_?(f=0,p=Math.min(Math.max(-s,-c),s),m=p*(p+2*c)+u):(f=Math.max(0,-(a*s+o)),p=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+p*(p+2*c)+u);else p=a>0?-s:s,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Os).addScaledVector(Ir,p),m}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),r=On.dot(On)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const u=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(n=(t.min.x-p.x)*u,r=(t.max.x-p.x)*u):(n=(t.max.x-p.x)*u,r=(t.min.x-p.x)*u),l>=0?(s=(t.min.y-p.y)*l,a=(t.max.y-p.y)*l):(s=(t.max.y-p.y)*l,a=(t.min.y-p.y)*l),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(o=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,r,s){Bs.subVectors(e,t),Ur.subVectors(n,t),zs.crossVectors(Bs,Ur);let a=this.direction.dot(zs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,t);const c=o*this.direction.dot(Ur.crossVectors(Qn,Ur));if(c<0)return null;const u=o*this.direction.dot(Bs.cross(Qn));if(u<0||c+u>a)return null;const l=-o*Qn.dot(zs);return l<0?null:this.at(l/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(t,e,n,r,s,a,o,c,u,l,f,p,m,_,x,g){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,u,l,f,p,m,_,x,g)}set(t,e,n,r,s,a,o,c,u,l,f,p,m,_,x,g){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=u,d[6]=l,d[10]=f,d[14]=p,d[3]=m,d[7]=_,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Li.setFromMatrixColumn(t,0).length(),s=1/Li.setFromMatrixColumn(t,1).length(),a=1/Li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),l=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const p=a*l,m=a*f,_=o*l,x=o*f;e[0]=c*l,e[4]=-c*f,e[8]=u,e[1]=m+_*u,e[5]=p-x*u,e[9]=-o*c,e[2]=x-p*u,e[6]=_+m*u,e[10]=a*c}else if(t.order==="YXZ"){const p=c*l,m=c*f,_=u*l,x=u*f;e[0]=p+x*o,e[4]=_*o-m,e[8]=a*u,e[1]=a*f,e[5]=a*l,e[9]=-o,e[2]=m*o-_,e[6]=x+p*o,e[10]=a*c}else if(t.order==="ZXY"){const p=c*l,m=c*f,_=u*l,x=u*f;e[0]=p-x*o,e[4]=-a*f,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*l,e[9]=x-p*o,e[2]=-a*u,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const p=a*l,m=a*f,_=o*l,x=o*f;e[0]=c*l,e[4]=_*u-m,e[8]=p*u+x,e[1]=c*f,e[5]=x*u+p,e[9]=m*u-_,e[2]=-u,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const p=a*c,m=a*u,_=o*c,x=o*u;e[0]=c*l,e[4]=x-p*f,e[8]=_*f+m,e[1]=f,e[5]=a*l,e[9]=-o*l,e[2]=-u*l,e[6]=m*f+_,e[10]=p-x*f}else if(t.order==="XZY"){const p=a*c,m=a*u,_=o*c,x=o*u;e[0]=c*l,e[4]=-f,e[8]=u*l,e[1]=p*f+x,e[5]=a*l,e[9]=m*f-_,e[2]=_*f-m,e[6]=o*l,e[10]=x*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zu,t,Ku)}lookAt(t,e,n){const r=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ti.crossVectors(n,pn),ti.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ti.crossVectors(n,pn)),ti.normalize(),Nr.crossVectors(pn,ti),r[0]=ti.x,r[4]=Nr.x,r[8]=pn.x,r[1]=ti.y,r[5]=Nr.y,r[9]=pn.y,r[2]=ti.z,r[6]=Nr.z,r[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],l=n[1],f=n[5],p=n[9],m=n[13],_=n[2],x=n[6],g=n[10],d=n[14],D=n[3],A=n[7],E=n[11],V=n[15],U=r[0],I=r[4],H=r[8],b=r[12],S=r[1],F=r[5],st=r[9],tt=r[13],dt=r[2],pt=r[6],ct=r[10],_t=r[14],nt=r[3],wt=r[7],Pt=r[11],zt=r[15];return s[0]=a*U+o*S+c*dt+u*nt,s[4]=a*I+o*F+c*pt+u*wt,s[8]=a*H+o*st+c*ct+u*Pt,s[12]=a*b+o*tt+c*_t+u*zt,s[1]=l*U+f*S+p*dt+m*nt,s[5]=l*I+f*F+p*pt+m*wt,s[9]=l*H+f*st+p*ct+m*Pt,s[13]=l*b+f*tt+p*_t+m*zt,s[2]=_*U+x*S+g*dt+d*nt,s[6]=_*I+x*F+g*pt+d*wt,s[10]=_*H+x*st+g*ct+d*Pt,s[14]=_*b+x*tt+g*_t+d*zt,s[3]=D*U+A*S+E*dt+V*nt,s[7]=D*I+A*F+E*pt+V*wt,s[11]=D*H+A*st+E*ct+V*Pt,s[15]=D*b+A*tt+E*_t+V*zt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],u=t[13],l=t[2],f=t[6],p=t[10],m=t[14],_=t[3],x=t[7],g=t[11],d=t[15];return _*(+s*c*f-r*u*f-s*o*p+n*u*p+r*o*m-n*c*m)+x*(+e*c*m-e*u*p+s*a*p-r*a*m+r*u*l-s*c*l)+g*(+e*u*f-e*o*m-s*a*f+n*a*m+s*o*l-n*u*l)+d*(-r*o*l-e*c*f+e*o*p+r*a*f-n*a*p+n*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],l=t[8],f=t[9],p=t[10],m=t[11],_=t[12],x=t[13],g=t[14],d=t[15],D=f*g*u-x*p*u+x*c*m-o*g*m-f*c*d+o*p*d,A=_*p*u-l*g*u-_*c*m+a*g*m+l*c*d-a*p*d,E=l*x*u-_*f*u+_*o*m-a*x*m-l*o*d+a*f*d,V=_*f*c-l*x*c-_*o*p+a*x*p+l*o*g-a*f*g,U=e*D+n*A+r*E+s*V;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/U;return t[0]=D*I,t[1]=(x*p*s-f*g*s-x*r*m+n*g*m+f*r*d-n*p*d)*I,t[2]=(o*g*s-x*c*s+x*r*u-n*g*u-o*r*d+n*c*d)*I,t[3]=(f*c*s-o*p*s-f*r*u+n*p*u+o*r*m-n*c*m)*I,t[4]=A*I,t[5]=(l*g*s-_*p*s+_*r*m-e*g*m-l*r*d+e*p*d)*I,t[6]=(_*c*s-a*g*s-_*r*u+e*g*u+a*r*d-e*c*d)*I,t[7]=(a*p*s-l*c*s+l*r*u-e*p*u-a*r*m+e*c*m)*I,t[8]=E*I,t[9]=(_*f*s-l*x*s-_*n*m+e*x*m+l*n*d-e*f*d)*I,t[10]=(a*x*s-_*o*s+_*n*u-e*x*u-a*n*d+e*o*d)*I,t[11]=(l*o*s-a*f*s-l*n*u+e*f*u+a*n*m-e*o*m)*I,t[12]=V*I,t[13]=(l*x*r-_*f*r+_*n*p-e*x*p-l*n*g+e*f*g)*I,t[14]=(_*o*r-a*x*r-_*n*c+e*x*c+a*n*g-e*o*g)*I,t[15]=(a*f*r-l*o*r+l*n*c-e*f*c-a*n*p+e*o*p)*I,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,u=s*a,l=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,l*o+n,l*c-r*a,0,u*c-r*o,l*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,u=s+s,l=a+a,f=o+o,p=s*u,m=s*l,_=s*f,x=a*l,g=a*f,d=o*f,D=c*u,A=c*l,E=c*f,V=n.x,U=n.y,I=n.z;return r[0]=(1-(x+d))*V,r[1]=(m+E)*V,r[2]=(_-A)*V,r[3]=0,r[4]=(m-E)*U,r[5]=(1-(p+d))*U,r[6]=(g+D)*U,r[7]=0,r[8]=(_+A)*I,r[9]=(g-D)*I,r[10]=(1-(p+x))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Li.set(r[0],r[1],r[2]).length();const a=Li.set(r[4],r[5],r[6]).length(),o=Li.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],bn.copy(this);const u=1/s,l=1/a,f=1/o;return bn.elements[0]*=u,bn.elements[1]*=u,bn.elements[2]*=u,bn.elements[4]*=l,bn.elements[5]*=l,bn.elements[6]*=l,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,e.setFromRotationMatrix(bn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Xn){const c=this.elements,u=2*s/(e-t),l=2*s/(n-r),f=(e+t)/(e-t),p=(n+r)/(n-r);let m,_;if(o===Xn)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===xs)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=l,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Xn){const c=this.elements,u=1/(e-t),l=1/(n-r),f=1/(a-s),p=(e+t)*u,m=(n+r)*l;let _,x;if(o===Xn)_=(a+s)*f,x=-2*f;else if(o===xs)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Li=new w,bn=new Ce,Zu=new w(0,0,0),Ku=new w(1,1,1),ti=new w,Nr=new w,pn=new w,No=new Ce,Fo=new sr;class Zn{constructor(t=0,e=0,n=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],l=r[9],f=r[2],p=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-se(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(se(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return No.makeRotationFromQuaternion(t),this.setFromRotationMatrix(No,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fo.setFromEuler(this),this.setFromQuaternion(Fo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class sl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ju=0;const Oo=new w,Ii=new sr,Bn=new Ce,Fr=new w,lr=new w,ju=new w,Qu=new sr,Bo=new w(1,0,0),zo=new w(0,1,0),Vo=new w(0,0,1),Ho={type:"added"},th={type:"removed"},Ui={type:"childadded",child:null},Vs={type:"childremoved",child:null};class qe extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new w,e=new Zn,n=new sr,r=new w(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ce},normalMatrix:{value:new te}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(Bo,t)}rotateY(t){return this.rotateOnAxis(zo,t)}rotateZ(t){return this.rotateOnAxis(Vo,t)}translateOnAxis(t,e){return Oo.copy(t).applyQuaternion(this.quaternion),this.position.add(Oo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bo,t)}translateY(t){return this.translateOnAxis(zo,t)}translateZ(t){return this.translateOnAxis(Vo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fr.copy(t):Fr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(lr,Fr,this.up):Bn.lookAt(Fr,lr,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),Ii.setFromRotationMatrix(Bn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ho),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(th),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ho),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,ju),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){const f=c[u];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),u=a(t.textures),l=a(t.images),f=a(t.shapes),p=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const c=[];for(const u in o){const l=o[u];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}qe.DEFAULT_UP=new w(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new w,zn=new w,Hs=new w,Vn=new w,Ni=new w,Fi=new w,Go=new w,Gs=new w,ks=new w,Ws=new w,Xs=new De,qs=new De,Ys=new De;class Sn{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Tn.subVectors(t,e),r.cross(Tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Tn.subVectors(r,e),zn.subVectors(n,e),Hs.subVectors(t,e);const a=Tn.dot(Tn),o=Tn.dot(zn),c=Tn.dot(Hs),u=zn.dot(zn),l=zn.dot(Hs),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const p=1/f,m=(u*c-o*l)*p,_=(a*l-o*c)*p;return s.set(1-m-_,_,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Vn.x),c.addScaledVector(a,Vn.y),c.addScaledVector(o,Vn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return Xs.setScalar(0),qs.setScalar(0),Ys.setScalar(0),Xs.fromBufferAttribute(t,e),qs.fromBufferAttribute(t,n),Ys.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Xs,s.x),a.addScaledVector(qs,s.y),a.addScaledVector(Ys,s.z),a}static isFrontFacing(t,e,n,r){return Tn.subVectors(n,e),zn.subVectors(t,e),Tn.cross(zn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Tn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Ni.subVectors(r,n),Fi.subVectors(s,n),Gs.subVectors(t,n);const c=Ni.dot(Gs),u=Fi.dot(Gs);if(c<=0&&u<=0)return e.copy(n);ks.subVectors(t,r);const l=Ni.dot(ks),f=Fi.dot(ks);if(l>=0&&f<=l)return e.copy(r);const p=c*f-l*u;if(p<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(n).addScaledVector(Ni,a);Ws.subVectors(t,s);const m=Ni.dot(Ws),_=Fi.dot(Ws);if(_>=0&&m<=_)return e.copy(s);const x=m*u-c*_;if(x<=0&&u>=0&&_<=0)return o=u/(u-_),e.copy(n).addScaledVector(Fi,o);const g=l*_-m*f;if(g<=0&&f-l>=0&&m-_>=0)return Go.subVectors(s,r),o=(f-l)/(f-l+(m-_)),e.copy(r).addScaledVector(Go,o);const d=1/(g+x+p);return a=x*d,o=p*d,e.copy(n).addScaledVector(Ni,a).addScaledVector(Fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Or={h:0,s:0,l:0};function $s(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=me.workingColorSpace){if(t=po(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=$s(a,s,t+1/3),this.g=$s(a,s,t),this.b=$s(a,s,t-1/3)}return me.toWorkingColorSpace(this,r),this}setStyle(t,e=je){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const n=al[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return me.fromWorkingColorSpace($e.copy(this),t),Math.round(se($e.r*255,0,255))*65536+Math.round(se($e.g*255,0,255))*256+Math.round(se($e.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace($e.copy(this),e);const n=$e.r,r=$e.g,s=$e.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,u;const l=(o+a)/2;if(o===a)c=0,u=0;else{const f=a-o;switch(u=l<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=u,t.l=l,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=je){me.fromWorkingColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,r=$e.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Or);const n=vr(ei.h,Or.h,e),r=vr(ei.s,Or.s,e),s=vr(ei.l,Or.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new Bt;Bt.NAMES=al;let eh=0;class Ti extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=$i,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ga&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _i extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new w,Br=new Ht;class we{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=to,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Br.fromBufferAttribute(this,e),Br.applyMatrix3(t),this.setXY(e,Br.x,Br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),r=xe(r,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==to&&(t.usage=this.usage),t}}class ol extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cl extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yt extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}}let nh=0;const xn=new Ce,Zs=new qe,Oi=new w,mn=new Ar,ur=new Ar,He=new w;class de extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nl(t)?cl:ol)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return Zs.lookAt(t),Zs.updateMatrix(),this.applyMatrix4(Zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(mn.min,ur.min),mn.expandByPoint(He),He.addVectors(mn.max,ur.max),mn.expandByPoint(He)):(mn.expandByPoint(ur.min),mn.expandByPoint(ur.max))}mn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)He.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(He));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let u=0,l=o.count;u<l;u++)He.fromBufferAttribute(o,u),c&&(Oi.fromBufferAttribute(t,u),He.add(Oi)),r=Math.max(r,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let H=0;H<n.count;H++)o[H]=new w,c[H]=new w;const u=new w,l=new w,f=new w,p=new Ht,m=new Ht,_=new Ht,x=new w,g=new w;function d(H,b,S){u.fromBufferAttribute(n,H),l.fromBufferAttribute(n,b),f.fromBufferAttribute(n,S),p.fromBufferAttribute(s,H),m.fromBufferAttribute(s,b),_.fromBufferAttribute(s,S),l.sub(u),f.sub(u),m.sub(p),_.sub(p);const F=1/(m.x*_.y-_.x*m.y);isFinite(F)&&(x.copy(l).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(F),g.copy(f).multiplyScalar(m.x).addScaledVector(l,-_.x).multiplyScalar(F),o[H].add(x),o[b].add(x),o[S].add(x),c[H].add(g),c[b].add(g),c[S].add(g))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let H=0,b=D.length;H<b;++H){const S=D[H],F=S.start,st=S.count;for(let tt=F,dt=F+st;tt<dt;tt+=3)d(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const A=new w,E=new w,V=new w,U=new w;function I(H){V.fromBufferAttribute(r,H),U.copy(V);const b=o[H];A.copy(b),A.sub(V.multiplyScalar(V.dot(b))).normalize(),E.crossVectors(U,b);const F=E.dot(c[H])<0?-1:1;a.setXYZW(H,A.x,A.y,A.z,F)}for(let H=0,b=D.length;H<b;++H){const S=D[H],F=S.start,st=S.count;for(let tt=F,dt=F+st;tt<dt;tt+=3)I(t.getX(tt+0)),I(t.getX(tt+1)),I(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new w,s=new w,a=new w,o=new w,c=new w,u=new w,l=new w,f=new w;if(t)for(let p=0,m=t.count;p<m;p+=3){const _=t.getX(p+0),x=t.getX(p+1),g=t.getX(p+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),l.subVectors(a,s),f.subVectors(r,s),l.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,g),o.add(l),c.add(l),u.add(l),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let p=0,m=e.count;p<m;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),l.subVectors(a,s),f.subVectors(r,s),l.cross(f),n.setXYZ(p+0,l.x,l.y,l.z),n.setXYZ(p+1,l.x,l.y,l.z),n.setXYZ(p+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,c){const u=o.array,l=o.itemSize,f=o.normalized,p=new u.constructor(c.length*l);let m=0,_=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*l;for(let d=0;d<l;d++)p[_++]=u[m++]}return new we(p,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new de,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=t(c,n);e.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let l=0,f=u.length;l<f;l++){const p=u[l],m=t(p,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],l=[];for(let f=0,p=u.length;f<p;f++){const m=u[f];l.push(m.toJSON(t.data))}l.length>0&&(r[c]=l,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const u in r){const l=r[u];this.setAttribute(u,l.clone(e))}const s=t.morphAttributes;for(const u in s){const l=[],f=s[u];for(let p=0,m=f.length;p<m;p++)l.push(f[p].clone(e));this.morphAttributes[u]=l}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,l=a.length;u<l;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ko=new Ce,ui=new mo,zr=new wr,Wo=new w,Vr=new w,Hr=new w,Gr=new w,Ks=new w,kr=new w,Xo=new w,Wr=new w;class Qe extends qe{constructor(t=new de,e=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){kr.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const l=o[c],f=s[c];l!==0&&(Ks.fromBufferAttribute(f,t),a?kr.addScaledVector(Ks,l):kr.addScaledVector(Ks.sub(e),l))}e.add(kr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),ui.copy(t.ray).recast(t.near),!(zr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(zr,Wo)===null||ui.origin.distanceToSquared(Wo)>(t.far-t.near)**2))&&(ko.copy(s).invert(),ui.copy(t.ray).applyMatrix4(ko),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,l=s.attributes.uv1,f=s.attributes.normal,p=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=p.length;_<x;_++){const g=p[_],d=a[g.materialIndex],D=Math.max(g.start,m.start),A=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let E=D,V=A;E<V;E+=3){const U=o.getX(E),I=o.getX(E+1),H=o.getX(E+2);r=Xr(this,d,t,n,u,l,f,U,I,H),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let g=_,d=x;g<d;g+=3){const D=o.getX(g),A=o.getX(g+1),E=o.getX(g+2);r=Xr(this,a,t,n,u,l,f,D,A,E),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=p.length;_<x;_++){const g=p[_],d=a[g.materialIndex],D=Math.max(g.start,m.start),A=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let E=D,V=A;E<V;E+=3){const U=E,I=E+1,H=E+2;r=Xr(this,d,t,n,u,l,f,U,I,H),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let g=_,d=x;g<d;g+=3){const D=g,A=g+1,E=g+2;r=Xr(this,a,t,n,u,l,f,D,A,E),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function ih(i,t,e,n,r,s,a,o){let c;if(t.side===fn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===oi,o),c===null)return null;Wr.copy(o),Wr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Wr);return u<e.near||u>e.far?null:{distance:u,point:Wr.clone(),object:i}}function Xr(i,t,e,n,r,s,a,o,c,u){i.getVertexPosition(o,Vr),i.getVertexPosition(c,Hr),i.getVertexPosition(u,Gr);const l=ih(i,t,e,n,Vr,Hr,Gr,Xo);if(l){const f=new w;Sn.getBarycoord(Xo,Vr,Hr,Gr,f),r&&(l.uv=Sn.getInterpolatedAttribute(r,o,c,u,f,new Ht)),s&&(l.uv1=Sn.getInterpolatedAttribute(s,o,c,u,f,new Ht)),a&&(l.normal=Sn.getInterpolatedAttribute(a,o,c,u,f,new w),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const p={a:o,b:c,c:u,normal:new w,materialIndex:0};Sn.getNormal(Vr,Hr,Gr,p.normal),l.face=p,l.barycoord=f}return l}class Rr extends de{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],l=[],f=[];let p=0,m=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,r,a,2),_("x","z","y",1,-1,t,n,-e,r,a,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(f,2));function _(x,g,d,D,A,E,V,U,I,H,b){const S=E/I,F=V/H,st=E/2,tt=V/2,dt=U/2,pt=I+1,ct=H+1;let _t=0,nt=0;const wt=new w;for(let Pt=0;Pt<ct;Pt++){const zt=Pt*F-tt;for(let ne=0;ne<pt;ne++){const _e=ne*S-st;wt[x]=_e*D,wt[g]=zt*A,wt[d]=dt,u.push(wt.x,wt.y,wt.z),wt[x]=0,wt[g]=0,wt[d]=U>0?1:-1,l.push(wt.x,wt.y,wt.z),f.push(ne/I),f.push(1-Pt/H),_t+=1}}for(let Pt=0;Pt<H;Pt++)for(let zt=0;zt<I;zt++){const ne=p+zt+pt*Pt,_e=p+zt+pt*(Pt+1),at=p+(zt+1)+pt*(Pt+1),St=p+(zt+1)+pt*Pt;c.push(ne,_e,St),c.push(_e,at,St),nt+=6}o.addGroup(m,nt,b),m+=nt,p+=_t}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ir(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function an(i){const t={};for(let e=0;e<i.length;e++){const n=ir(i[e]);for(const r in n)t[r]=n[r]}return t}function rh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ll(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}const sh={clone:ir,merge:an};var ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ah,this.fragmentShader=oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=rh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ul extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new w,qo=new Ht,Yo=new Ht;class Mn extends ul{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return br*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,qo,Yo),e.subVectors(Yo,qo)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bi=-90,zi=1;class ch extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(Bi,zi,t,e);r.layers=this.layers,this.add(r);const s=new Mn(Bi,zi,t,e);s.layers=this.layers,this.add(s);const a=new Mn(Bi,zi,t,e);a.layers=this.layers,this.add(a);const o=new Mn(Bi,zi,t,e);o.layers=this.layers,this.add(o);const c=new Mn(Bi,zi,t,e);c.layers=this.layers,this.add(c);const u=new Mn(Bi,zi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const u of e)this.remove(u);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,l]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,l),t.setRenderTarget(f,p,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class hl extends cn{constructor(t,e,n,r,s,a,o,c,u,l){t=t!==void 0?t:[],e=e!==void 0?e:ji,super(t,e,n,r,s,a,o,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lh extends bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new hl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rr(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:si});s.uniforms.tEquirect.value=e;const a=new Qe(r,s),o=e.minFilter;return e.minFilter===yi&&(e.minFilter=Un),new ch(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class go{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new go(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uh extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class hh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=to,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new w;class Ss{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),r=xe(r,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new we(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ss(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class We extends Ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Vi;const hr=new w,Hi=new w,Gi=new w,ki=new Ht,dr=new Ht,dl=new Ce,qr=new w,fr=new w,Yr=new w,$o=new Ht,Js=new Ht,Zo=new Ht;class Ze extends qe{constructor(t=new We){if(super(),this.isSprite=!0,this.type="Sprite",Vi===void 0){Vi=new de;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hh(e,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new Ss(n,3,0,!1)),Vi.setAttribute("uv",new Ss(n,2,3,!1))}this.geometry=Vi,this.material=t,this.center=new Ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),dl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Gi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;$r(qr.set(-.5,-.5,0),Gi,a,Hi,r,s),$r(fr.set(.5,-.5,0),Gi,a,Hi,r,s),$r(Yr.set(.5,.5,0),Gi,a,Hi,r,s),$o.set(0,0),Js.set(1,0),Zo.set(1,1);let o=t.ray.intersectTriangle(qr,fr,Yr,!1,hr);if(o===null&&($r(fr.set(-.5,.5,0),Gi,a,Hi,r,s),Js.set(0,1),o=t.ray.intersectTriangle(qr,Yr,fr,!1,hr),o===null))return;const c=t.ray.origin.distanceTo(hr);c<t.near||c>t.far||e.push({distance:c,point:hr.clone(),uv:Sn.getInterpolation(hr,qr,fr,Yr,$o,Js,Zo,new Ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function $r(i,t,e,n,r,s){ki.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(dr.x=s*ki.x-r*ki.y,dr.y=r*ki.x+s*ki.y):dr.copy(ki),i.copy(t),i.x+=dr.x,i.y+=dr.y,i.applyMatrix4(dl)}const js=new w,dh=new w,fh=new te;class pi{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=js.subVectors(n,e).cross(dh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(js),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fh.getNormalMatrix(t),r=this.coplanarPoint(js).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new wr,Zr=new w;class fl{constructor(t=new pi,e=new pi,n=new pi,r=new pi,s=new pi,a=new pi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],l=r[5],f=r[6],p=r[7],m=r[8],_=r[9],x=r[10],g=r[11],d=r[12],D=r[13],A=r[14],E=r[15];if(n[0].setComponents(c-s,p-u,g-m,E-d).normalize(),n[1].setComponents(c+s,p+u,g+m,E+d).normalize(),n[2].setComponents(c+a,p+l,g+_,E+D).normalize(),n[3].setComponents(c-a,p-l,g-_,E-D).normalize(),n[4].setComponents(c-o,p-f,g-x,E-A).normalize(),e===Xn)n[5].setComponents(c+o,p+f,g+x,E+A).normalize();else if(e===xs)n[5].setComponents(o,f,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Zr.x=r.normal.x>0?t.max.x:t.min.x,Zr.y=r.normal.y>0?t.max.y:t.min.y,Zr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vi extends Ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ys=new w,Es=new w,Ko=new Ce,pr=new mo,Kr=new wr,Qs=new w,Jo=new w;class bs extends qe{constructor(t=new de,e=new vi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)ys.fromBufferAttribute(e,r-1),Es.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=ys.distanceTo(Es);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Kr.radius+=s,t.ray.intersectsSphere(Kr)===!1)return;Ko.copy(r).invert(),pr.copy(t.ray).applyMatrix4(Ko);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,l=n.index,p=n.attributes.position;if(l!==null){const m=Math.max(0,a.start),_=Math.min(l.count,a.start+a.count);for(let x=m,g=_-1;x<g;x+=u){const d=l.getX(x),D=l.getX(x+1),A=Jr(this,t,pr,c,d,D);A&&e.push(A)}if(this.isLineLoop){const x=l.getX(_-1),g=l.getX(m),d=Jr(this,t,pr,c,x,g);d&&e.push(d)}}else{const m=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let x=m,g=_-1;x<g;x+=u){const d=Jr(this,t,pr,c,x,x+1);d&&e.push(d)}if(this.isLineLoop){const x=Jr(this,t,pr,c,_-1,m);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Jr(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(ys.fromBufferAttribute(a,r),Es.fromBufferAttribute(a,s),e.distanceSqToSegment(ys,Es,Qs,Jo)>n)return;Qs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Qs);if(!(c<t.near||c>t.far))return{distance:c,point:Jo.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const jo=new w,Qo=new w;class jr extends bs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)jo.fromBufferAttribute(e,r),Qo.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+jo.distanceTo(Qo);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ph extends bs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class sn extends Ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const tc=new Ce,eo=new mo,Qr=new wr,ts=new w;class ke extends qe{constructor(t=new de,e=new sn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),Qr.radius+=s,t.ray.intersectsSphere(Qr)===!1)return;tc.copy(r).invert(),eo.copy(t.ray).applyMatrix4(tc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=p,x=m;_<x;_++){const g=u.getX(_);ts.fromBufferAttribute(f,g),ec(ts,g,c,r,t,e,this)}}else{const p=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=p,x=m;_<x;_++)ts.fromBufferAttribute(f,_),ec(ts,_,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ec(i,t,e,n,r,s,a){const o=eo.distanceSqToPoint(i);if(o<e){const c=new w;eo.closestPointToPoint(i,c),c.applyMatrix4(n);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ie extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ta extends cn{constructor(t,e,n,r,s,a,o,c,u){super(t,e,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pl extends cn{constructor(t,e,n,r,s,a,o,c,u,l=Zi){if(l!==Zi&&l!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Zi&&(n=Ei),n===void 0&&l===er&&(n=tr),super(null,r,s,a,o,c,l,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Pn,this.minFilter=c!==void 0?c:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,u;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),u=n[r]-a,u<0)o=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const l=n[r],p=n[r+1]-l,m=(a-l)/p;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new Ht:new w);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new w,r=[],s=[],a=[],o=new w,c=new Ce;for(let m=0;m<=t;m++){const _=m/t;r[m]=this.getTangentAt(_,new w)}s[0]=new w,a[0]=new w;let u=Number.MAX_VALUE;const l=Math.abs(r[0].x),f=Math.abs(r[0].y),p=Math.abs(r[0].z);l<=u&&(u=l,n.set(1,0,0)),f<=u&&(u=f,n.set(0,1,0)),p<=u&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(se(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(o,_))}a[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(se(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let _=1;_<=t;_++)s[_].applyMatrix4(c.makeRotationAxis(r[_],m*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ml extends Nn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Ht){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=c-this.aX,m=u-this.aY;c=p*l-m*f+this.aX,u=p*f+m*l+this.aY}return n.set(c,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class mh extends ml{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function _o(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,u){r(a,o,u*(o-s),u*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,u,l,f){let p=(a-s)/u-(o-s)/(u+l)+(o-a)/l,m=(o-a)/l-(c-a)/(l+f)+(c-o)/f;p*=l,m*=l,r(a,o,p,m)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const es=new w,ea=new _o,na=new _o,ia=new _o;class gh extends Nn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new w){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let u,l;this.closed||o>0?u=r[(o-1)%s]:(es.subVectors(r[0],r[1]).add(r[0]),u=es);const f=r[o%s],p=r[(o+1)%s];if(this.closed||o+2<s?l=r[(o+2)%s]:(es.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=es),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(f),m),x=Math.pow(f.distanceToSquared(p),m),g=Math.pow(p.distanceToSquared(l),m);x<1e-4&&(x=1),_<1e-4&&(_=x),g<1e-4&&(g=x),ea.initNonuniformCatmullRom(u.x,f.x,p.x,l.x,_,x,g),na.initNonuniformCatmullRom(u.y,f.y,p.y,l.y,_,x,g),ia.initNonuniformCatmullRom(u.z,f.z,p.z,l.z,_,x,g)}else this.curveType==="catmullrom"&&(ea.initCatmullRom(u.x,f.x,p.x,l.x,this.tension),na.initCatmullRom(u.y,f.y,p.y,l.y,this.tension),ia.initCatmullRom(u.z,f.z,p.z,l.z,this.tension));return n.set(ea.calc(c),na.calc(c),ia.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new w().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function nc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function _h(i,t){const e=1-i;return e*e*t}function vh(i,t){return 2*(1-i)*i*t}function xh(i,t){return i*i*t}function xr(i,t,e,n){return _h(i,t)+vh(i,e)+xh(i,n)}function Mh(i,t){const e=1-i;return e*e*e*t}function Sh(i,t){const e=1-i;return 3*e*e*i*t}function yh(i,t){return 3*(1-i)*i*i*t}function Eh(i,t){return i*i*i*t}function Mr(i,t,e,n,r){return Mh(i,t)+Sh(i,e)+yh(i,n)+Eh(i,r)}class bh extends Nn{constructor(t=new Ht,e=new Ht,n=new Ht,r=new Ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Ht){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Mr(t,r.x,s.x,a.x,o.x),Mr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Th extends Nn{constructor(t=new w,e=new w,n=new w,r=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new w){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Mr(t,r.x,s.x,a.x,o.x),Mr(t,r.y,s.y,a.y,o.y),Mr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ah extends Nn{constructor(t=new Ht,e=new Ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gl extends Nn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wh extends Nn{constructor(t=new Ht,e=new Ht,n=new Ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ht){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(xr(t,r.x,s.x,a.x),xr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _l extends Nn{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(xr(t,r.x,s.x,a.x),xr(t,r.y,s.y,a.y),xr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rh extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ht){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],u=r[a],l=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(nc(o,c.x,u.x,l.x,f.x),nc(o,c.y,u.y,l.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new Ht().fromArray(r))}return this}}var no=Object.freeze({__proto__:null,ArcCurve:mh,CatmullRomCurve3:gh,CubicBezierCurve:bh,CubicBezierCurve3:Th,EllipseCurve:ml,LineCurve:Ah,LineCurve3:gl,QuadraticBezierCurve:wh,QuadraticBezierCurve3:_l,SplineCurve:Rh});class Ch extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new no[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),u=c===0?0:1-a/c;return o.getPointAt(u,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let u=0;u<c.length;u++){const l=c[u];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new no[r.type]().fromJSON(r))}return this}}class Cs extends de{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),u=o+1,l=c+1,f=t/o,p=e/c,m=[],_=[],x=[],g=[];for(let d=0;d<l;d++){const D=d*p-a;for(let A=0;A<u;A++){const E=A*f-s;_.push(E,-D,0),x.push(0,0,1),g.push(A/o),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let D=0;D<o;D++){const A=D+u*d,E=D+u*(d+1),V=D+1+u*(d+1),U=D+1+u*d;m.push(A,E,U),m.push(E,V,U)}this.setIndex(m),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ts extends de{constructor(t=.5,e=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],u=[],l=[];let f=t;const p=(e-t)/r,m=new w,_=new Ht;for(let x=0;x<=r;x++){for(let g=0;g<=n;g++){const d=s+g/n*a;m.x=f*Math.cos(d),m.y=f*Math.sin(d),c.push(m.x,m.y,m.z),u.push(0,0,1),_.x=(m.x/e+1)/2,_.y=(m.y/e+1)/2,l.push(_.x,_.y)}f+=p}for(let x=0;x<r;x++){const g=x*(n+1);for(let d=0;d<n;d++){const D=d+g,A=D,E=D+n+1,V=D+n+2,U=D+1;o.push(A,E,U),o.push(E,V,U)}}this.setIndex(o),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class As extends de{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let u=0;const l=[],f=new w,p=new w,m=[],_=[],x=[],g=[];for(let d=0;d<=n;d++){const D=[],A=d/n;let E=0;d===0&&a===0?E=.5/e:d===n&&c===Math.PI&&(E=-.5/e);for(let V=0;V<=e;V++){const U=V/e;f.x=-t*Math.cos(r+U*s)*Math.sin(a+A*o),f.y=t*Math.cos(a+A*o),f.z=t*Math.sin(r+U*s)*Math.sin(a+A*o),_.push(f.x,f.y,f.z),p.copy(f).normalize(),x.push(p.x,p.y,p.z),g.push(U+E,1-A),D.push(u++)}l.push(D)}for(let d=0;d<n;d++)for(let D=0;D<e;D++){const A=l[d][D+1],E=l[d][D],V=l[d+1][D],U=l[d+1][D+1];(d!==0||a>0)&&m.push(A,E,U),(d!==n-1||c<Math.PI)&&m.push(E,V,U)}this.setIndex(m),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new As(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vo extends de{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],u=[],l=new w,f=new w,p=new w;for(let m=0;m<=n;m++)for(let _=0;_<=r;_++){const x=_/r*s,g=m/n*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(x),f.y=(t+e*Math.cos(g))*Math.sin(x),f.z=e*Math.sin(g),o.push(f.x,f.y,f.z),l.x=t*Math.cos(x),l.y=t*Math.sin(x),p.subVectors(f,l).normalize(),c.push(p.x,p.y,p.z),u.push(_/r),u.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=r;_++){const x=(r+1)*m+_-1,g=(r+1)*(m-1)+_-1,d=(r+1)*(m-1)+_,D=(r+1)*m+_;a.push(x,g,D),a.push(g,d,D)}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class xo extends de{constructor(t=new _l(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new w,c=new w,u=new Ht;let l=new w;const f=[],p=[],m=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(p,3)),this.setAttribute("uv",new Yt(m,2));function x(){for(let A=0;A<e;A++)g(A);g(s===!1?e:0),D(),d()}function g(A){l=t.getPointAt(A/e,l);const E=a.normals[A],V=a.binormals[A];for(let U=0;U<=r;U++){const I=U/r*Math.PI*2,H=Math.sin(I),b=-Math.cos(I);c.x=b*E.x+H*V.x,c.y=b*E.y+H*V.y,c.z=b*E.z+H*V.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=l.x+n*c.x,o.y=l.y+n*c.y,o.z=l.z+n*c.z,f.push(o.x,o.y,o.z)}}function d(){for(let A=1;A<=e;A++)for(let E=1;E<=r;E++){const V=(r+1)*(A-1)+(E-1),U=(r+1)*A+(E-1),I=(r+1)*A+E,H=(r+1)*(A-1)+E;_.push(V,U,H),_.push(U,I,H)}}function D(){for(let A=0;A<=e;A++)for(let E=0;E<=r;E++)u.x=A/e,u.y=E/r,m.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new xo(new no[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ph extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dh extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ic extends vi{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class Lh extends ul{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ih extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Uh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=rc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function rc(){return performance.now()}function sc(i,t,e,n){const r=Nh(n);switch(e){case $c:return i*t;case Kc:return i*t;case Jc:return i*t*2;case jc:return i*t/r.components*r.byteLength;case uo:return i*t/r.components*r.byteLength;case Qc:return i*t*2/r.components*r.byteLength;case ho:return i*t*2/r.components*r.byteLength;case Zc:return i*t*3/r.components*r.byteLength;case Cn:return i*t*4/r.components*r.byteLength;case fo:return i*t*4/r.components*r.byteLength;case us:case hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ds:case fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:case Da:return Math.max(i,16)*Math.max(t,8)/4;case Ra:case Pa:return Math.max(i,8)*Math.max(t,8)/2;case La:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $a:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ps:case Za:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*16;case tl:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ja:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Nh(i){switch(i){case $n:case Xc:return{byteLength:1,components:1};case Er:case qc:case Tr:return{byteLength:2,components:1};case co:case lo:return{byteLength:2,components:4};case Ei:case oo:case Wn:return{byteLength:4,components:1};case Yc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ao}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ao);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vl(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Fh(i){const t=new WeakMap;function e(o,c){const u=o.array,l=o.usage,f=u.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,u,l),o.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,u){const l=c.array,f=c.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,l);else{f.sort((m,_)=>m.start-_.start);let p=0;for(let m=1;m<f.length;m++){const _=f[p],x=f[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++p,f[p]=x)}f.length=p+1;for(let m=0,_=f.length;m<_;m++){const x=f[m];i.bufferSubData(u,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=t.get(o);(!l||l.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var Oh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bh=`#ifdef USE_ALPHAHASH
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
#endif`,zh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kh=`#ifdef USE_AOMAP
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
#endif`,Wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xh=`#ifdef USE_BATCHING
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
#endif`,qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kh=`#ifdef USE_IRIDESCENCE
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
#endif`,Jh=`#ifdef USE_BUMPMAP
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
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ad=`#define PI 3.141592653589793
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
} // validated`,od=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cd=`vec3 transformedNormal = objectNormal;
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
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,Md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bd=`#ifdef USE_GRADIENTMAP
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
}`,Td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rd=`uniform bool receiveShadow;
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
#endif`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ud=`PhysicalMaterial material;
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
#endif`,Nd=`struct PhysicalMaterial {
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
}`,Fd=`
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
#endif`,Od=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qd=`#if defined( USE_POINTS_UV )
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
#endif`,Yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$d=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,af=`#ifdef USE_NORMALMAP
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
#endif`,of=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,df=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yf=`float getShadowMask() {
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
}`,Ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bf=`#ifdef USE_SKINNING
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
#endif`,Tf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Af=`#ifdef USE_SKINNING
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
#endif`,wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Df=`#ifdef USE_TRANSMISSION
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
#endif`,Lf=`#ifdef USE_TRANSMISSION
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ff=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bf=`uniform sampler2D t2D;
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`#include <common>
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
}`,Wf=`#if DEPTH_PACKING == 3200
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
}`,Xf=`#define DISTANCE
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
}`,qf=`#define DISTANCE
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
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$f=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`uniform float scale;
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Jf=`#include <common>
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
}`,jf=`uniform vec3 diffuse;
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
}`,Qf=`#define LAMBERT
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
}`,tp=`#define LAMBERT
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
}`,ep=`#define MATCAP
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
}`,np=`#define MATCAP
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
}`,ip=`#define NORMAL
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
}`,rp=`#define NORMAL
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
}`,sp=`#define PHONG
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
}`,ap=`#define PHONG
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
}`,op=`#define STANDARD
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
}`,cp=`#define STANDARD
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
}`,lp=`#define TOON
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
}`,up=`#define TOON
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
}`,hp=`uniform float size;
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
}`,dp=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,pp=`uniform vec3 color;
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
}`,mp=`uniform float rotation;
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
}`,gp=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:Oh,alphahash_pars_fragment:Bh,alphamap_fragment:zh,alphamap_pars_fragment:Vh,alphatest_fragment:Hh,alphatest_pars_fragment:Gh,aomap_fragment:kh,aomap_pars_fragment:Wh,batching_pars_vertex:Xh,batching_vertex:qh,begin_vertex:Yh,beginnormal_vertex:$h,bsdfs:Zh,iridescence_fragment:Kh,bumpmap_pars_fragment:Jh,clipping_planes_fragment:jh,clipping_planes_pars_fragment:Qh,clipping_planes_pars_vertex:td,clipping_planes_vertex:ed,color_fragment:nd,color_pars_fragment:id,color_pars_vertex:rd,color_vertex:sd,common:ad,cube_uv_reflection_fragment:od,defaultnormal_vertex:cd,displacementmap_pars_vertex:ld,displacementmap_vertex:ud,emissivemap_fragment:hd,emissivemap_pars_fragment:dd,colorspace_fragment:fd,colorspace_pars_fragment:pd,envmap_fragment:md,envmap_common_pars_fragment:gd,envmap_pars_fragment:_d,envmap_pars_vertex:vd,envmap_physical_pars_fragment:Cd,envmap_vertex:xd,fog_vertex:Md,fog_pars_vertex:Sd,fog_fragment:yd,fog_pars_fragment:Ed,gradientmap_pars_fragment:bd,lightmap_pars_fragment:Td,lights_lambert_fragment:Ad,lights_lambert_pars_fragment:wd,lights_pars_begin:Rd,lights_toon_fragment:Pd,lights_toon_pars_fragment:Dd,lights_phong_fragment:Ld,lights_phong_pars_fragment:Id,lights_physical_fragment:Ud,lights_physical_pars_fragment:Nd,lights_fragment_begin:Fd,lights_fragment_maps:Od,lights_fragment_end:Bd,logdepthbuf_fragment:zd,logdepthbuf_pars_fragment:Vd,logdepthbuf_pars_vertex:Hd,logdepthbuf_vertex:Gd,map_fragment:kd,map_pars_fragment:Wd,map_particle_fragment:Xd,map_particle_pars_fragment:qd,metalnessmap_fragment:Yd,metalnessmap_pars_fragment:$d,morphinstance_vertex:Zd,morphcolor_vertex:Kd,morphnormal_vertex:Jd,morphtarget_pars_vertex:jd,morphtarget_vertex:Qd,normal_fragment_begin:tf,normal_fragment_maps:ef,normal_pars_fragment:nf,normal_pars_vertex:rf,normal_vertex:sf,normalmap_pars_fragment:af,clearcoat_normal_fragment_begin:of,clearcoat_normal_fragment_maps:cf,clearcoat_pars_fragment:lf,iridescence_pars_fragment:uf,opaque_fragment:hf,packing:df,premultiplied_alpha_fragment:ff,project_vertex:pf,dithering_fragment:mf,dithering_pars_fragment:gf,roughnessmap_fragment:_f,roughnessmap_pars_fragment:vf,shadowmap_pars_fragment:xf,shadowmap_pars_vertex:Mf,shadowmap_vertex:Sf,shadowmask_pars_fragment:yf,skinbase_vertex:Ef,skinning_pars_vertex:bf,skinning_vertex:Tf,skinnormal_vertex:Af,specularmap_fragment:wf,specularmap_pars_fragment:Rf,tonemapping_fragment:Cf,tonemapping_pars_fragment:Pf,transmission_fragment:Df,transmission_pars_fragment:Lf,uv_pars_fragment:If,uv_pars_vertex:Uf,uv_vertex:Nf,worldpos_vertex:Ff,background_vert:Of,background_frag:Bf,backgroundCube_vert:zf,backgroundCube_frag:Vf,cube_vert:Hf,cube_frag:Gf,depth_vert:kf,depth_frag:Wf,distanceRGBA_vert:Xf,distanceRGBA_frag:qf,equirect_vert:Yf,equirect_frag:$f,linedashed_vert:Zf,linedashed_frag:Kf,meshbasic_vert:Jf,meshbasic_frag:jf,meshlambert_vert:Qf,meshlambert_frag:tp,meshmatcap_vert:ep,meshmatcap_frag:np,meshnormal_vert:ip,meshnormal_frag:rp,meshphong_vert:sp,meshphong_frag:ap,meshphysical_vert:op,meshphysical_frag:cp,meshtoon_vert:lp,meshtoon_frag:up,points_vert:hp,points_frag:dp,shadow_vert:fp,shadow_frag:pp,sprite_vert:mp,sprite_frag:gp},At={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Ln={basic:{uniforms:an([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:an([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Bt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:an([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:an([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:an([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Bt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:an([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:an([At.points,At.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:an([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:an([At.common,At.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:an([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:an([At.sprite,At.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:an([At.common,At.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:an([At.lights,At.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Ln.physical={uniforms:an([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const ns={r:0,b:0,g:0},di=new Zn,_p=new Ce;function vp(i,t,e,n,r,s,a){const o=new Bt(0);let c=s===!0?0:1,u,l,f=null,p=0,m=null;function _(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?e:t).get(E)),E}function x(A){let E=!1;const V=_(A);V===null?d(o,c):V&&V.isColor&&(d(V,1),E=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(A,E){const V=_(E);V&&(V.isCubeTexture||V.mapping===Rs)?(l===void 0&&(l=new Qe(new Rr(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:ir(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(U,I,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),di.copy(E.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),l.material.uniforms.envMap.value=V,l.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(_p.makeRotationFromEuler(di)),l.material.toneMapped=me.getTransfer(V.colorSpace)!==Me,(f!==V||p!==V.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=V,p=V.version,m=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):V&&V.isTexture&&(u===void 0&&(u=new Qe(new Cs(2,2),new gn({name:"BackgroundMaterial",uniforms:ir(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=V,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=me.getTransfer(V.colorSpace)!==Me,V.matrixAutoUpdate===!0&&V.updateMatrix(),u.material.uniforms.uvTransform.value.copy(V.matrix),(f!==V||p!==V.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=V,p=V.version,m=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function d(A,E){A.getRGB(ns,ll(i)),n.buffers.color.setClear(ns.r,ns.g,ns.b,E,a)}function D(){l!==void 0&&(l.geometry.dispose(),l.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(A,E=1){o.set(A),c=E,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,d(o,c)},render:x,addToRenderList:g,dispose:D}}function xp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,a=!1;function o(S,F,st,tt,dt){let pt=!1;const ct=f(tt,st,F);s!==ct&&(s=ct,u(s.object)),pt=m(S,tt,st,dt),pt&&_(S,tt,st,dt),dt!==null&&t.update(dt,i.ELEMENT_ARRAY_BUFFER),(pt||a)&&(a=!1,E(S,F,st,tt),dt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function c(){return i.createVertexArray()}function u(S){return i.bindVertexArray(S)}function l(S){return i.deleteVertexArray(S)}function f(S,F,st){const tt=st.wireframe===!0;let dt=n[S.id];dt===void 0&&(dt={},n[S.id]=dt);let pt=dt[F.id];pt===void 0&&(pt={},dt[F.id]=pt);let ct=pt[tt];return ct===void 0&&(ct=p(c()),pt[tt]=ct),ct}function p(S){const F=[],st=[],tt=[];for(let dt=0;dt<e;dt++)F[dt]=0,st[dt]=0,tt[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:st,attributeDivisors:tt,object:S,attributes:{},index:null}}function m(S,F,st,tt){const dt=s.attributes,pt=F.attributes;let ct=0;const _t=st.getAttributes();for(const nt in _t)if(_t[nt].location>=0){const Pt=dt[nt];let zt=pt[nt];if(zt===void 0&&(nt==="instanceMatrix"&&S.instanceMatrix&&(zt=S.instanceMatrix),nt==="instanceColor"&&S.instanceColor&&(zt=S.instanceColor)),Pt===void 0||Pt.attribute!==zt||zt&&Pt.data!==zt.data)return!0;ct++}return s.attributesNum!==ct||s.index!==tt}function _(S,F,st,tt){const dt={},pt=F.attributes;let ct=0;const _t=st.getAttributes();for(const nt in _t)if(_t[nt].location>=0){let Pt=pt[nt];Pt===void 0&&(nt==="instanceMatrix"&&S.instanceMatrix&&(Pt=S.instanceMatrix),nt==="instanceColor"&&S.instanceColor&&(Pt=S.instanceColor));const zt={};zt.attribute=Pt,Pt&&Pt.data&&(zt.data=Pt.data),dt[nt]=zt,ct++}s.attributes=dt,s.attributesNum=ct,s.index=tt}function x(){const S=s.newAttributes;for(let F=0,st=S.length;F<st;F++)S[F]=0}function g(S){d(S,0)}function d(S,F){const st=s.newAttributes,tt=s.enabledAttributes,dt=s.attributeDivisors;st[S]=1,tt[S]===0&&(i.enableVertexAttribArray(S),tt[S]=1),dt[S]!==F&&(i.vertexAttribDivisor(S,F),dt[S]=F)}function D(){const S=s.newAttributes,F=s.enabledAttributes;for(let st=0,tt=F.length;st<tt;st++)F[st]!==S[st]&&(i.disableVertexAttribArray(st),F[st]=0)}function A(S,F,st,tt,dt,pt,ct){ct===!0?i.vertexAttribIPointer(S,F,st,dt,pt):i.vertexAttribPointer(S,F,st,tt,dt,pt)}function E(S,F,st,tt){x();const dt=tt.attributes,pt=st.getAttributes(),ct=F.defaultAttributeValues;for(const _t in pt){const nt=pt[_t];if(nt.location>=0){let wt=dt[_t];if(wt===void 0&&(_t==="instanceMatrix"&&S.instanceMatrix&&(wt=S.instanceMatrix),_t==="instanceColor"&&S.instanceColor&&(wt=S.instanceColor)),wt!==void 0){const Pt=wt.normalized,zt=wt.itemSize,ne=t.get(wt);if(ne===void 0)continue;const _e=ne.buffer,at=ne.type,St=ne.bytesPerElement,Ut=at===i.INT||at===i.UNSIGNED_INT||wt.gpuType===oo;if(wt.isInterleavedBufferAttribute){const Tt=wt.data,Gt=Tt.stride,Xt=wt.offset;if(Tt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<nt.locationSize;Kt++)d(nt.location+Kt,Tt.meshPerAttribute);S.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Kt=0;Kt<nt.locationSize;Kt++)g(nt.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Kt=0;Kt<nt.locationSize;Kt++)A(nt.location+Kt,zt/nt.locationSize,at,Pt,Gt*St,(Xt+zt/nt.locationSize*Kt)*St,Ut)}else{if(wt.isInstancedBufferAttribute){for(let Tt=0;Tt<nt.locationSize;Tt++)d(nt.location+Tt,wt.meshPerAttribute);S.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Tt=0;Tt<nt.locationSize;Tt++)g(nt.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Tt=0;Tt<nt.locationSize;Tt++)A(nt.location+Tt,zt/nt.locationSize,at,Pt,zt*St,zt/nt.locationSize*Tt*St,Ut)}}else if(ct!==void 0){const Pt=ct[_t];if(Pt!==void 0)switch(Pt.length){case 2:i.vertexAttrib2fv(nt.location,Pt);break;case 3:i.vertexAttrib3fv(nt.location,Pt);break;case 4:i.vertexAttrib4fv(nt.location,Pt);break;default:i.vertexAttrib1fv(nt.location,Pt)}}}}D()}function V(){H();for(const S in n){const F=n[S];for(const st in F){const tt=F[st];for(const dt in tt)l(tt[dt].object),delete tt[dt];delete F[st]}delete n[S]}}function U(S){if(n[S.id]===void 0)return;const F=n[S.id];for(const st in F){const tt=F[st];for(const dt in tt)l(tt[dt].object),delete tt[dt];delete F[st]}delete n[S.id]}function I(S){for(const F in n){const st=n[F];if(st[S.id]===void 0)continue;const tt=st[S.id];for(const dt in tt)l(tt[dt].object),delete tt[dt];delete st[S.id]}}function H(){b(),a=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:H,resetDefaultState:b,dispose:V,releaseStatesOfGeometry:U,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:D}}function Mp(i,t,e){let n;function r(u){n=u}function s(u,l){i.drawArrays(n,u,l),e.update(l,n,1)}function a(u,l,f){f!==0&&(i.drawArraysInstanced(n,u,l,f),e.update(l,n,f))}function o(u,l,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,l,0,f);let m=0;for(let _=0;_<f;_++)m+=l[_];e.update(m,n,1)}function c(u,l,f,p){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<u.length;_++)a(u[_],l[_],p[_]);else{m.multiDrawArraysInstancedWEBGL(n,u,0,l,0,p,0,f);let _=0;for(let x=0;x<f;x++)_+=l[x]*p[x];e.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Sp(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==Cn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const H=I===Tr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==$n&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Wn&&!H)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const l=c(u);l!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",l,"instead."),u=l);const f=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),V=_>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:D,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:V,maxSamples:U}}function yp(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new pi,o=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||n!==0||r;return r=p,n=f.length,m},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){e=l(f,p,0)},this.setState=function(f,p,m){const _=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,d=i.get(f);if(!r||_===null||_.length===0||s&&!g)s?l(null):u();else{const D=s?0:n,A=D*4;let E=d.clippingState||null;c.value=E,E=l(_,p,A,m);for(let V=0;V!==A;++V)E[V]=e[V];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=D}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(f,p,m,_){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=c.value,_!==!0||g===null){const d=m+x*4,D=p.matrixWorldInverse;o.getNormalMatrix(D),(g===null||g.length<d)&&(g=new Float32Array(d));for(let A=0,E=m;A!==x;++A,E+=4)a.copy(f[A]).applyMatrix4(D,o),a.normal.toArray(g,E),g[E+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Ep(i){let t=new WeakMap;function e(a,o){return o===ba?a.mapping=ji:o===Ta&&(a.mapping=Qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ba||o===Ta)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new lh(c.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",r),e(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Yi=4,ac=[.125,.215,.35,.446,.526,.582],xi=20,ra=new Lh,oc=new Bt;let sa=null,aa=0,oa=0,ca=!1;const mi=(1+Math.sqrt(5))/2,Wi=1/mi,cc=[new w(-mi,Wi,0),new w(mi,Wi,0),new w(-Wi,0,mi),new w(Wi,0,mi),new w(0,mi,-Wi),new w(0,mi,Wi),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class lc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){sa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sa,aa,oa),this._renderer.xr.enabled=ca,t.scissorTest=!1,is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Tr,format:Cn,colorSpace:nr,depthBuffer:!1},r=uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bp(s)),this._blurMaterial=Tp(s,t,e)}return r}_compileMaterial(t){const e=new Qe(this._lodPlanes[0],t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,n,r){const o=new Mn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,p=l.toneMapping;l.getClearColor(oc),l.toneMapping=ai,l.autoClear=!1;const m=new _i({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),_=new Qe(new Rr,m);let x=!1;const g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,x=!0):(m.color.copy(oc),x=!0);for(let d=0;d<6;d++){const D=d%3;D===0?(o.up.set(0,c[d],0),o.lookAt(u[d],0,0)):D===1?(o.up.set(0,0,c[d]),o.lookAt(0,u[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,u[d]));const A=this._cubeSize;is(r,D*A,d>2?A:0,A,A),l.setRenderTarget(r),x&&l.render(_,o),l.render(t,o)}_.geometry.dispose(),_.material.dispose(),l.toneMapping=p,l.autoClear=f,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ji||t.mapping===Qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;is(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ra)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=cc[(r-s-1)%cc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,f=new Qe(this._lodPlanes[r],u),p=u.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xi-1),x=s/_,g=isFinite(s)?1+Math.floor(l*x):xi;g>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${xi}`);const d=[];let D=0;for(let I=0;I<xi;++I){const H=I/x,b=Math.exp(-H*H/2);d.push(b),I===0?D+=b:I<g&&(D+=2*b)}for(let I=0;I<d.length;I++)d[I]=d[I]/D;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:A}=this;p.dTheta.value=_,p.mipInt.value=A-n;const E=this._sizeLods[r],V=3*E*(r>A-Yi?r-A+Yi:0),U=4*(this._cubeSize-E);is(e,V,U,3*E,2*E),c.setRenderTarget(e),c.render(f,ra)}}function bp(i){const t=[],e=[],n=[];let r=i;const s=i-Yi+1+ac.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Yi?c=ac[a-i+Yi-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),l=-u,f=1+u,p=[l,l,f,l,f,f,l,l,f,f,l,f],m=6,_=6,x=3,g=2,d=1,D=new Float32Array(x*_*m),A=new Float32Array(g*_*m),E=new Float32Array(d*_*m);for(let U=0;U<m;U++){const I=U%3*2/3-1,H=U>2?0:-1,b=[I,H,0,I+2/3,H,0,I+2/3,H+1,0,I,H,0,I+2/3,H+1,0,I,H+1,0];D.set(b,x*_*U),A.set(p,g*_*U);const S=[U,U,U,U,U,U];E.set(S,d*_*U)}const V=new de;V.setAttribute("position",new we(D,x)),V.setAttribute("uv",new we(A,g)),V.setAttribute("faceIndex",new we(E,d)),t.push(V),r>Yi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uc(i,t,e){const n=new bi(i,t,e);return n.texture.mapping=Rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function is(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Tp(i,t,e){const n=new Float32Array(xi),r=new w(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function hc(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function dc(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Mo(){return`

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
	`}function Ap(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===ba||c===Ta,l=c===ji||c===Qi;if(u||l){let f=t.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new lc(i)),f=u?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return u&&m&&m.height>0||l&&m&&r(m)?(e===null&&(e=new lc(i)),f=u?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const u=6;for(let l=0;l<u;l++)o[l]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function wp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&qi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Rp(i,t,e,n){const r={},s=new WeakMap;function a(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);p.removeEventListener("dispose",a),delete r[p.id];const m=s.get(p);m&&(t.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const m in p)t.update(p[m],i.ARRAY_BUFFER)}function u(f){const p=[],m=f.index,_=f.attributes.position;let x=0;if(m!==null){const D=m.array;x=m.version;for(let A=0,E=D.length;A<E;A+=3){const V=D[A+0],U=D[A+1],I=D[A+2];p.push(V,U,U,I,I,V)}}else if(_!==void 0){const D=_.array;x=_.version;for(let A=0,E=D.length/3-1;A<E;A+=3){const V=A+0,U=A+1,I=A+2;p.push(V,U,U,I,I,V)}}else return;const g=new(nl(p)?cl:ol)(p,1);g.version=x;const d=s.get(f);d&&t.remove(d),s.set(f,g)}function l(f){const p=s.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:l}}function Cp(i,t,e){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,m){i.drawElements(n,m,s,p*a),e.update(m,n,1)}function u(p,m,_){_!==0&&(i.drawElementsInstanced(n,m,s,p*a,_),e.update(m,n,_))}function l(p,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,p,0,_);let g=0;for(let d=0;d<_;d++)g+=m[d];e.update(g,n,1)}function f(p,m,_,x){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<p.length;d++)u(p[d]/a,m[d],x[d]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,s,p,0,x,0,_);let d=0;for(let D=0;D<_;D++)d+=m[D]*x[D];e.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function Pp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Dp(i,t,e){const n=new WeakMap,r=new De;function s(a,o,c){const u=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=l!==void 0?l.length:0;let p=n.get(o);if(p===void 0||p.count!==f){let S=function(){H.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var m=S;p!==void 0&&p.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],D=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),x===!0&&(E=2),g===!0&&(E=3);let V=o.attributes.position.count*E,U=1;V>t.maxTextureSize&&(U=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const I=new Float32Array(V*U*4*f),H=new rl(I,V,U,f);H.type=Wn,H.needsUpdate=!0;const b=E*4;for(let F=0;F<f;F++){const st=d[F],tt=D[F],dt=A[F],pt=V*U*4*F;for(let ct=0;ct<st.count;ct++){const _t=ct*b;_===!0&&(r.fromBufferAttribute(st,ct),I[pt+_t+0]=r.x,I[pt+_t+1]=r.y,I[pt+_t+2]=r.z,I[pt+_t+3]=0),x===!0&&(r.fromBufferAttribute(tt,ct),I[pt+_t+4]=r.x,I[pt+_t+5]=r.y,I[pt+_t+6]=r.z,I[pt+_t+7]=0),g===!0&&(r.fromBufferAttribute(dt,ct),I[pt+_t+8]=r.x,I[pt+_t+9]=r.y,I[pt+_t+10]=r.z,I[pt+_t+11]=dt.itemSize===4?r.w:1)}}p={count:f,texture:H,size:new Ht(V,U)},n.set(o,p),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const x=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Lp(i,t,e,n){let r=new WeakMap;function s(c){const u=n.render.frame,l=c.geometry,f=t.get(c,l);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}const xl=new cn,fc=new pl(1,1),Ml=new rl,Sl=new Yu,yl=new hl,pc=[],mc=[],gc=new Float32Array(16),_c=new Float32Array(9),vc=new Float32Array(4);function ar(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=pc[r];if(s===void 0&&(s=new Float32Array(r),pc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ps(i,t){let e=mc[t];e===void 0&&(e=new Int32Array(t),mc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ip(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function Np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function Fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function Op(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;vc.set(n),i.uniformMatrix2fv(this.addr,!1,vc),Oe(e,n)}}function Bp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;_c.set(n),i.uniformMatrix3fv(this.addr,!1,_c),Oe(e,n)}}function zp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;gc.set(n),i.uniformMatrix4fv(this.addr,!1,gc),Oe(e,n)}}function Vp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function Gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function Wp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function Yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function $p(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(fc.compareFunction=el,s=fc):s=xl,e.setTexture2D(t||s,r)}function Zp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Sl,r)}function Kp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||yl,r)}function Jp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Ml,r)}function jp(i){switch(i){case 5126:return Ip;case 35664:return Up;case 35665:return Np;case 35666:return Fp;case 35674:return Op;case 35675:return Bp;case 35676:return zp;case 5124:case 35670:return Vp;case 35667:case 35671:return Hp;case 35668:case 35672:return Gp;case 35669:case 35673:return kp;case 5125:return Wp;case 36294:return Xp;case 36295:return qp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Jp}}function Qp(i,t){i.uniform1fv(this.addr,t)}function tm(i,t){const e=ar(t,this.size,2);i.uniform2fv(this.addr,e)}function em(i,t){const e=ar(t,this.size,3);i.uniform3fv(this.addr,e)}function nm(i,t){const e=ar(t,this.size,4);i.uniform4fv(this.addr,e)}function im(i,t){const e=ar(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function rm(i,t){const e=ar(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sm(i,t){const e=ar(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function am(i,t){i.uniform1iv(this.addr,t)}function om(i,t){i.uniform2iv(this.addr,t)}function cm(i,t){i.uniform3iv(this.addr,t)}function lm(i,t){i.uniform4iv(this.addr,t)}function um(i,t){i.uniform1uiv(this.addr,t)}function hm(i,t){i.uniform2uiv(this.addr,t)}function dm(i,t){i.uniform3uiv(this.addr,t)}function fm(i,t){i.uniform4uiv(this.addr,t)}function pm(i,t,e){const n=this.cache,r=t.length,s=Ps(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||xl,s[a])}function mm(i,t,e){const n=this.cache,r=t.length,s=Ps(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Sl,s[a])}function gm(i,t,e){const n=this.cache,r=t.length,s=Ps(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||yl,s[a])}function _m(i,t,e){const n=this.cache,r=t.length,s=Ps(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Ml,s[a])}function vm(i){switch(i){case 5126:return Qp;case 35664:return tm;case 35665:return em;case 35666:return nm;case 35674:return im;case 35675:return rm;case 35676:return sm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return cm;case 35669:case 35673:return lm;case 5125:return um;case 36294:return hm;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return _m}}class xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jp(e.type)}}class Mm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vm(e.type)}}class Sm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function xc(i,t){i.seq.push(t),i.map[t.id]=t}function ym(i,t,e){const n=i.name,r=n.length;for(la.lastIndex=0;;){const s=la.exec(n),a=la.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){xc(e,u===void 0?new xm(o,i,t):new Mm(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Sm(o),xc(e,f)),e=f}}}class ms{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);ym(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Mc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Em=37297;let bm=0;function Tm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Sc=new te;function Am(i){me._getMatrix(Sc,me.workingColorSpace,i);const t=`mat3( ${Sc.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case vs:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Tm(i.getShaderSource(t),a)}else return r}function wm(i,t){const e=Am(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rm(i,t){let e;switch(t){case iu:e="Linear";break;case ru:e="Reinhard";break;case su:e="Cineon";break;case au:e="ACESFilmic";break;case cu:e="AgX";break;case lu:e="Neutral";break;case ou:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const rs=new w;function Cm(){me.getLuminanceCoefficients(rs);const i=rs.x.toFixed(4),t=rs.y.toFixed(4),e=rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function Dm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function mr(i){return i!==""}function Ec(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Im=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(i){return i.replace(Im,Nm)}const Um=new Map;function Nm(i,t){let e=ee[t];if(e===void 0){const n=Um.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return io(e)}const Fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(i){return i.replace(Fm,Om)}function Om(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ac(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Bm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function zm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ji:case Qi:t="ENVMAP_TYPE_CUBE";break;case Rs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qi:t="ENVMAP_MODE_REFRACTION";break}return t}function Hm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kc:t="ENVMAP_BLENDING_MULTIPLY";break;case eu:t="ENVMAP_BLENDING_MIX";break;case nu:t="ENVMAP_BLENDING_ADD";break}return t}function Gm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function km(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Bm(e),u=zm(e),l=Vm(e),f=Hm(e),p=Gm(e),m=Pm(e),_=Dm(s),x=r.createProgram();let g,d,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(mr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(mr).join(`
`),d.length>0&&(d+=`
`)):(g=[Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),d=[Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?ee.tonemapping_pars_fragment:"",e.toneMapping!==ai?Rm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,wm("linearToOutputTexel",e.outputColorSpace),Cm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mr).join(`
`)),a=io(a),a=Ec(a,e),a=bc(a,e),o=io(o),o=Ec(o,e),o=bc(o,e),a=Tc(a),o=Tc(o),e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===Co?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Co?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=D+g+a,E=D+d+o,V=Mc(r,r.VERTEX_SHADER,A),U=Mc(r,r.FRAGMENT_SHADER,E);r.attachShader(x,V),r.attachShader(x,U),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function I(F){if(i.debug.checkShaderErrors){const st=r.getProgramInfoLog(x).trim(),tt=r.getShaderInfoLog(V).trim(),dt=r.getShaderInfoLog(U).trim();let pt=!0,ct=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(pt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,V,U);else{const _t=yc(r,V,"vertex"),nt=yc(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+st+`
`+_t+`
`+nt)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(tt===""||dt==="")&&(ct=!1);ct&&(F.diagnostics={runnable:pt,programLog:st,vertexShader:{log:tt,prefix:g},fragmentShader:{log:dt,prefix:d}})}r.deleteShader(V),r.deleteShader(U),H=new ms(r,x),b=Lm(r,x)}let H;this.getUniforms=function(){return H===void 0&&I(this),H};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,Em)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=V,this.fragmentShader=U,this}let Wm=0;class Xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qm(t),e.set(t,n)),n}}class qm{constructor(t){this.id=Wm++,this.code=t,this.usedTimes=0}}function Ym(i,t,e,n,r,s,a){const o=new sl,c=new Xm,u=new Set,l=[],f=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return u.add(b),b===0?"uv":`uv${b}`}function g(b,S,F,st,tt){const dt=st.fog,pt=tt.geometry,ct=b.isMeshStandardMaterial?st.environment:null,_t=(b.isMeshStandardMaterial?e:t).get(b.envMap||ct),nt=_t&&_t.mapping===Rs?_t.image.height:null,wt=_[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const Pt=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,zt=Pt!==void 0?Pt.length:0;let ne=0;pt.morphAttributes.position!==void 0&&(ne=1),pt.morphAttributes.normal!==void 0&&(ne=2),pt.morphAttributes.color!==void 0&&(ne=3);let _e,at,St,Ut;if(wt){const Z=Ln[wt];_e=Z.vertexShader,at=Z.fragmentShader}else _e=b.vertexShader,at=b.fragmentShader,c.update(b),St=c.getVertexShaderID(b),Ut=c.getFragmentShaderID(b);const Tt=i.getRenderTarget(),Gt=i.state.buffers.depth.getReversed(),Xt=tt.isInstancedMesh===!0,Kt=tt.isBatchedMesh===!0,Jt=!!b.map,ue=!!b.matcap,Pe=!!_t,L=!!b.aoMap,ln=!!b.lightMap,ae=!!b.bumpMap,$t=!!b.normalMap,Nt=!!b.displacementMap,Se=!!b.emissiveMap,Ot=!!b.metalnessMap,T=!!b.roughnessMap,h=b.anisotropy>0,M=b.clearcoat>0,y=b.dispersion>0,R=b.iridescence>0,C=b.sheen>0,$=b.transmission>0,z=h&&!!b.anisotropyMap,Y=M&&!!b.clearcoatMap,rt=M&&!!b.clearcoatNormalMap,G=M&&!!b.clearcoatRoughnessMap,q=R&&!!b.iridescenceMap,j=R&&!!b.iridescenceThicknessMap,ot=C&&!!b.sheenColorMap,Q=C&&!!b.sheenRoughnessMap,ht=!!b.specularMap,ft=!!b.specularColorMap,yt=!!b.specularIntensityMap,P=$&&!!b.transmissionMap,et=$&&!!b.thicknessMap,B=!!b.gradientMap,k=!!b.alphaMap,it=b.alphaTest>0,K=!!b.alphaHash,xt=!!b.extensions;let mt=ai;b.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(mt=i.toneMapping);const Mt={shaderID:wt,shaderType:b.type,shaderName:b.name,vertexShader:_e,fragmentShader:at,defines:b.defines,customVertexShaderID:St,customFragmentShaderID:Ut,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Kt,batchingColor:Kt&&tt._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&tt.instanceColor!==null,instancingMorph:Xt&&tt.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Tt===null?i.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:nr,alphaToCoverage:!!b.alphaToCoverage,map:Jt,matcap:ue,envMap:Pe,envMapMode:Pe&&_t.mapping,envMapCubeUVHeight:nt,aoMap:L,lightMap:ln,bumpMap:ae,normalMap:$t,displacementMap:p&&Nt,emissiveMap:Se,normalMapObjectSpace:$t&&b.normalMapType===pu,normalMapTangentSpace:$t&&b.normalMapType===fu,metalnessMap:Ot,roughnessMap:T,anisotropy:h,anisotropyMap:z,clearcoat:M,clearcoatMap:Y,clearcoatNormalMap:rt,clearcoatRoughnessMap:G,dispersion:y,iridescence:R,iridescenceMap:q,iridescenceThicknessMap:j,sheen:C,sheenColorMap:ot,sheenRoughnessMap:Q,specularMap:ht,specularColorMap:ft,specularIntensityMap:yt,transmission:$,transmissionMap:P,thicknessMap:et,gradientMap:B,opaque:b.transparent===!1&&b.blending===$i&&b.alphaToCoverage===!1,alphaMap:k,alphaTest:it,alphaHash:K,combine:b.combine,mapUv:Jt&&x(b.map.channel),aoMapUv:L&&x(b.aoMap.channel),lightMapUv:ln&&x(b.lightMap.channel),bumpMapUv:ae&&x(b.bumpMap.channel),normalMapUv:$t&&x(b.normalMap.channel),displacementMapUv:Nt&&x(b.displacementMap.channel),emissiveMapUv:Se&&x(b.emissiveMap.channel),metalnessMapUv:Ot&&x(b.metalnessMap.channel),roughnessMapUv:T&&x(b.roughnessMap.channel),anisotropyMapUv:z&&x(b.anisotropyMap.channel),clearcoatMapUv:Y&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:rt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:j&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Q&&x(b.sheenRoughnessMap.channel),specularMapUv:ht&&x(b.specularMap.channel),specularColorMapUv:ft&&x(b.specularColorMap.channel),specularIntensityMapUv:yt&&x(b.specularIntensityMap.channel),transmissionMapUv:P&&x(b.transmissionMap.channel),thicknessMapUv:et&&x(b.thicknessMap.channel),alphaMapUv:k&&x(b.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&($t||h),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!pt.attributes.uv&&(Jt||k),fog:!!dt,useFog:b.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Gt,skinning:tt.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,decodeVideoTexture:Jt&&b.map.isVideoTexture===!0&&me.getTransfer(b.map.colorSpace)===Me,decodeVideoTextureEmissive:Se&&b.emissiveMap.isVideoTexture===!0&&me.getTransfer(b.emissiveMap.colorSpace)===Me,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===wn,flipSided:b.side===fn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:xt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&b.extensions.multiDraw===!0||Kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Mt.vertexUv1s=u.has(1),Mt.vertexUv2s=u.has(2),Mt.vertexUv3s=u.has(3),u.clear(),Mt}function d(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)S.push(F),S.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(D(S,b),A(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function D(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function A(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function E(b){const S=_[b.type];let F;if(S){const st=Ln[S];F=sh.clone(st.uniforms)}else F=b.uniforms;return F}function V(b,S){let F;for(let st=0,tt=l.length;st<tt;st++){const dt=l[st];if(dt.cacheKey===S){F=dt,++F.usedTimes;break}}return F===void 0&&(F=new km(i,S,b,s),l.push(F)),F}function U(b){if(--b.usedTimes===0){const S=l.indexOf(b);l[S]=l[l.length-1],l.pop(),b.destroy()}}function I(b){c.remove(b)}function H(){c.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:E,acquireProgram:V,releaseProgram:U,releaseShaderCache:I,programs:l,dispose:H}}function $m(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Zm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function wc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,p,m,_,x,g){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:m,groupOrder:_,renderOrder:f.renderOrder,z:x,group:g},i[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=m,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=g),t++,d}function o(f,p,m,_,x,g){const d=a(f,p,m,_,x,g);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):e.push(d)}function c(f,p,m,_,x,g){const d=a(f,p,m,_,x,g);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):e.unshift(d)}function u(f,p){e.length>1&&e.sort(f||Zm),n.length>1&&n.sort(p||wc),r.length>1&&r.sort(p||wc)}function l(){for(let f=t,p=i.length;f<p;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:l,sort:u}}function Km(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Rc,i.set(n,[a])):r>=s.length?(a=new Rc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Jm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Bt};break;case"SpotLight":e={position:new w,direction:new w,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function jm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Qm=0;function tg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function eg(i){const t=new Jm,e=jm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new w);const r=new w,s=new Ce,a=new Ce;function o(u){let l=0,f=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,_=0,x=0,g=0,d=0,D=0,A=0,E=0,V=0,U=0,I=0;u.sort(tg);for(let b=0,S=u.length;b<S;b++){const F=u[b],st=F.color,tt=F.intensity,dt=F.distance,pt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)l+=st.r*tt,f+=st.g*tt,p+=st.b*tt;else if(F.isLightProbe){for(let ct=0;ct<9;ct++)n.probe[ct].addScaledVector(F.sh.coefficients[ct],tt);I++}else if(F.isDirectionalLight){const ct=t.get(F);if(ct.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const _t=F.shadow,nt=e.get(F);nt.shadowIntensity=_t.intensity,nt.shadowBias=_t.bias,nt.shadowNormalBias=_t.normalBias,nt.shadowRadius=_t.radius,nt.shadowMapSize=_t.mapSize,n.directionalShadow[m]=nt,n.directionalShadowMap[m]=pt,n.directionalShadowMatrix[m]=F.shadow.matrix,D++}n.directional[m]=ct,m++}else if(F.isSpotLight){const ct=t.get(F);ct.position.setFromMatrixPosition(F.matrixWorld),ct.color.copy(st).multiplyScalar(tt),ct.distance=dt,ct.coneCos=Math.cos(F.angle),ct.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ct.decay=F.decay,n.spot[x]=ct;const _t=F.shadow;if(F.map&&(n.spotLightMap[V]=F.map,V++,_t.updateMatrices(F),F.castShadow&&U++),n.spotLightMatrix[x]=_t.matrix,F.castShadow){const nt=e.get(F);nt.shadowIntensity=_t.intensity,nt.shadowBias=_t.bias,nt.shadowNormalBias=_t.normalBias,nt.shadowRadius=_t.radius,nt.shadowMapSize=_t.mapSize,n.spotShadow[x]=nt,n.spotShadowMap[x]=pt,E++}x++}else if(F.isRectAreaLight){const ct=t.get(F);ct.color.copy(st).multiplyScalar(tt),ct.halfWidth.set(F.width*.5,0,0),ct.halfHeight.set(0,F.height*.5,0),n.rectArea[g]=ct,g++}else if(F.isPointLight){const ct=t.get(F);if(ct.color.copy(F.color).multiplyScalar(F.intensity),ct.distance=F.distance,ct.decay=F.decay,F.castShadow){const _t=F.shadow,nt=e.get(F);nt.shadowIntensity=_t.intensity,nt.shadowBias=_t.bias,nt.shadowNormalBias=_t.normalBias,nt.shadowRadius=_t.radius,nt.shadowMapSize=_t.mapSize,nt.shadowCameraNear=_t.camera.near,nt.shadowCameraFar=_t.camera.far,n.pointShadow[_]=nt,n.pointShadowMap[_]=pt,n.pointShadowMatrix[_]=F.shadow.matrix,A++}n.point[_]=ct,_++}else if(F.isHemisphereLight){const ct=t.get(F);ct.skyColor.copy(F.color).multiplyScalar(tt),ct.groundColor.copy(F.groundColor).multiplyScalar(tt),n.hemi[d]=ct,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=f,n.ambient[2]=p;const H=n.hash;(H.directionalLength!==m||H.pointLength!==_||H.spotLength!==x||H.rectAreaLength!==g||H.hemiLength!==d||H.numDirectionalShadows!==D||H.numPointShadows!==A||H.numSpotShadows!==E||H.numSpotMaps!==V||H.numLightProbes!==I)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=g,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=E+V-U,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=I,H.directionalLength=m,H.pointLength=_,H.spotLength=x,H.rectAreaLength=g,H.hemiLength=d,H.numDirectionalShadows=D,H.numPointShadows=A,H.numSpotShadows=E,H.numSpotMaps=V,H.numLightProbes=I,n.version=Qm++)}function c(u,l){let f=0,p=0,m=0,_=0,x=0;const g=l.matrixWorldInverse;for(let d=0,D=u.length;d<D;d++){const A=u[d];if(A.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),f++}else if(A.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),m++}else if(A.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(A.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const E=n.point[p];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(g),p++}else if(A.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(g),x++}}}return{setup:o,setupView:c,state:n}}function Cc(i){const t=new eg(i),e=[],n=[];function r(l){u.camera=l,e.length=0,n.length=0}function s(l){e.push(l)}function a(l){n.push(l)}function o(){t.setup(e)}function c(l){t.setupView(e,l)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function ng(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Cc(i),t.set(r,[o])):s>=a.length?(o=new Cc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const ig=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rg=`uniform sampler2D shadow_pass;
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
}`;function sg(i,t,e){let n=new fl;const r=new Ht,s=new Ht,a=new De,o=new Ph({depthPacking:du}),c=new Dh,u={},l=e.maxTextureSize,f={[oi]:fn,[fn]:oi,[wn]:wn},p=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:ig,fragmentShader:rg}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new de;_.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qe(_,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let d=this.type;this.render=function(U,I,H){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||U.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),st=i.state;st.setBlending(si),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const tt=d!==kn&&this.type===kn,dt=d===kn&&this.type!==kn;for(let pt=0,ct=U.length;pt<ct;pt++){const _t=U[pt],nt=_t.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",_t,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;r.copy(nt.mapSize);const wt=nt.getFrameExtents();if(r.multiply(wt),s.copy(nt.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/wt.x),r.x=s.x*wt.x,nt.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/wt.y),r.y=s.y*wt.y,nt.mapSize.y=s.y)),nt.map===null||tt===!0||dt===!0){const zt=this.type!==kn?{minFilter:Pn,magFilter:Pn}:{};nt.map!==null&&nt.map.dispose(),nt.map=new bi(r.x,r.y,zt),nt.map.texture.name=_t.name+".shadowMap",nt.camera.updateProjectionMatrix()}i.setRenderTarget(nt.map),i.clear();const Pt=nt.getViewportCount();for(let zt=0;zt<Pt;zt++){const ne=nt.getViewport(zt);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),st.viewport(a),nt.updateMatrices(_t,zt),n=nt.getFrustum(),E(I,H,nt.camera,_t,this.type)}nt.isPointLightShadow!==!0&&this.type===kn&&D(nt,H),nt.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(b,S,F)};function D(U,I){const H=t.update(x);p.defines.VSM_SAMPLES!==U.blurSamples&&(p.defines.VSM_SAMPLES=U.blurSamples,m.defines.VSM_SAMPLES=U.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new bi(r.x,r.y)),p.uniforms.shadow_pass.value=U.map.texture,p.uniforms.resolution.value=U.mapSize,p.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(I,null,H,p,x,null),m.uniforms.shadow_pass.value=U.mapPass.texture,m.uniforms.resolution.value=U.mapSize,m.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(I,null,H,m,x,null)}function A(U,I,H,b){let S=null;const F=H.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(F!==void 0)S=F;else if(S=H.isPointLight===!0?c:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const st=S.uuid,tt=I.uuid;let dt=u[st];dt===void 0&&(dt={},u[st]=dt);let pt=dt[tt];pt===void 0&&(pt=S.clone(),dt[tt]=pt,I.addEventListener("dispose",V)),S=pt}if(S.visible=I.visible,S.wireframe=I.wireframe,b===kn?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:f[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,H.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const st=i.properties.get(S);st.light=H}return S}function E(U,I,H,b,S){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&S===kn)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,U.matrixWorld);const tt=t.update(U),dt=U.material;if(Array.isArray(dt)){const pt=tt.groups;for(let ct=0,_t=pt.length;ct<_t;ct++){const nt=pt[ct],wt=dt[nt.materialIndex];if(wt&&wt.visible){const Pt=A(U,wt,b,S);U.onBeforeShadow(i,U,I,H,tt,Pt,nt),i.renderBufferDirect(H,null,tt,Pt,U,nt),U.onAfterShadow(i,U,I,H,tt,Pt,nt)}}}else if(dt.visible){const pt=A(U,dt,b,S);U.onBeforeShadow(i,U,I,H,tt,pt,null),i.renderBufferDirect(H,null,tt,pt,U,null),U.onAfterShadow(i,U,I,H,tt,pt,null)}}const st=U.children;for(let tt=0,dt=st.length;tt<dt;tt++)E(st[tt],I,H,b,S)}function V(U){U.target.removeEventListener("dispose",V);for(const H in u){const b=u[H],S=U.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const ag={[_a]:va,[xa]:ya,[Ma]:Ea,[Ji]:Sa,[va]:_a,[ya]:xa,[Ea]:Ma,[Sa]:Ji};function og(i,t){function e(){let P=!1;const et=new De;let B=null;const k=new De(0,0,0,0);return{setMask:function(it){B!==it&&!P&&(i.colorMask(it,it,it,it),B=it)},setLocked:function(it){P=it},setClear:function(it,K,xt,mt,Mt){Mt===!0&&(it*=mt,K*=mt,xt*=mt),et.set(it,K,xt,mt),k.equals(et)===!1&&(i.clearColor(it,K,xt,mt),k.copy(et))},reset:function(){P=!1,B=null,k.set(-1,0,0,0)}}}function n(){let P=!1,et=!1,B=null,k=null,it=null;return{setReversed:function(K){if(et!==K){const xt=t.get("EXT_clip_control");et?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT);const mt=it;it=null,this.setClear(mt)}et=K},getReversed:function(){return et},setTest:function(K){K?Tt(i.DEPTH_TEST):Gt(i.DEPTH_TEST)},setMask:function(K){B!==K&&!P&&(i.depthMask(K),B=K)},setFunc:function(K){if(et&&(K=ag[K]),k!==K){switch(K){case _a:i.depthFunc(i.NEVER);break;case va:i.depthFunc(i.ALWAYS);break;case xa:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case Ma:i.depthFunc(i.EQUAL);break;case Sa:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case Ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=K}},setLocked:function(K){P=K},setClear:function(K){it!==K&&(et&&(K=1-K),i.clearDepth(K),it=K)},reset:function(){P=!1,B=null,k=null,it=null,et=!1}}}function r(){let P=!1,et=null,B=null,k=null,it=null,K=null,xt=null,mt=null,Mt=null;return{setTest:function(Z){P||(Z?Tt(i.STENCIL_TEST):Gt(i.STENCIL_TEST))},setMask:function(Z){et!==Z&&!P&&(i.stencilMask(Z),et=Z)},setFunc:function(Z,ut,bt){(B!==Z||k!==ut||it!==bt)&&(i.stencilFunc(Z,ut,bt),B=Z,k=ut,it=bt)},setOp:function(Z,ut,bt){(K!==Z||xt!==ut||mt!==bt)&&(i.stencilOp(Z,ut,bt),K=Z,xt=ut,mt=bt)},setLocked:function(Z){P=Z},setClear:function(Z){Mt!==Z&&(i.clearStencil(Z),Mt=Z)},reset:function(){P=!1,et=null,B=null,k=null,it=null,K=null,xt=null,mt=null,Mt=null}}}const s=new e,a=new n,o=new r,c=new WeakMap,u=new WeakMap;let l={},f={},p=new WeakMap,m=[],_=null,x=!1,g=null,d=null,D=null,A=null,E=null,V=null,U=null,I=new Bt(0,0,0),H=0,b=!1,S=null,F=null,st=null,tt=null,dt=null;const pt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ct=!1,_t=0;const nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(_t=parseFloat(/^WebGL (\d)/.exec(nt)[1]),ct=_t>=1):nt.indexOf("OpenGL ES")!==-1&&(_t=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),ct=_t>=2);let wt=null,Pt={};const zt=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),_e=new De().fromArray(zt),at=new De().fromArray(ne);function St(P,et,B,k){const it=new Uint8Array(4),K=i.createTexture();i.bindTexture(P,K),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xt=0;xt<B;xt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(et,0,i.RGBA,1,1,k,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(et+xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return K}const Ut={};Ut[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),Ut[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ut[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ut[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Tt(i.DEPTH_TEST),a.setFunc(Ji),ae(!1),$t(bo),Tt(i.CULL_FACE),L(si);function Tt(P){l[P]!==!0&&(i.enable(P),l[P]=!0)}function Gt(P){l[P]!==!1&&(i.disable(P),l[P]=!1)}function Xt(P,et){return f[P]!==et?(i.bindFramebuffer(P,et),f[P]=et,P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=et),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=et),!0):!1}function Kt(P,et){let B=m,k=!1;if(P){B=p.get(et),B===void 0&&(B=[],p.set(et,B));const it=P.textures;if(B.length!==it.length||B[0]!==i.COLOR_ATTACHMENT0){for(let K=0,xt=it.length;K<xt;K++)B[K]=i.COLOR_ATTACHMENT0+K;B.length=it.length,k=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,k=!0);k&&i.drawBuffers(B)}function Jt(P){return _!==P?(i.useProgram(P),_=P,!0):!1}const ue={[gi]:i.FUNC_ADD,[Bl]:i.FUNC_SUBTRACT,[zl]:i.FUNC_REVERSE_SUBTRACT};ue[Vl]=i.MIN,ue[Hl]=i.MAX;const Pe={[Gl]:i.ZERO,[kl]:i.ONE,[Wl]:i.SRC_COLOR,[ma]:i.SRC_ALPHA,[Kl]:i.SRC_ALPHA_SATURATE,[$l]:i.DST_COLOR,[ql]:i.DST_ALPHA,[Xl]:i.ONE_MINUS_SRC_COLOR,[ga]:i.ONE_MINUS_SRC_ALPHA,[Zl]:i.ONE_MINUS_DST_COLOR,[Yl]:i.ONE_MINUS_DST_ALPHA,[Jl]:i.CONSTANT_COLOR,[jl]:i.ONE_MINUS_CONSTANT_COLOR,[Ql]:i.CONSTANT_ALPHA,[tu]:i.ONE_MINUS_CONSTANT_ALPHA};function L(P,et,B,k,it,K,xt,mt,Mt,Z){if(P===si){x===!0&&(Gt(i.BLEND),x=!1);return}if(x===!1&&(Tt(i.BLEND),x=!0),P!==Ol){if(P!==g||Z!==b){if((d!==gi||E!==gi)&&(i.blendEquation(i.FUNC_ADD),d=gi,E=gi),Z)switch(P){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wt:i.blendFunc(i.ONE,i.ONE);break;case To:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ao:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wt:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case To:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ao:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}D=null,A=null,V=null,U=null,I.set(0,0,0),H=0,g=P,b=Z}return}it=it||et,K=K||B,xt=xt||k,(et!==d||it!==E)&&(i.blendEquationSeparate(ue[et],ue[it]),d=et,E=it),(B!==D||k!==A||K!==V||xt!==U)&&(i.blendFuncSeparate(Pe[B],Pe[k],Pe[K],Pe[xt]),D=B,A=k,V=K,U=xt),(mt.equals(I)===!1||Mt!==H)&&(i.blendColor(mt.r,mt.g,mt.b,Mt),I.copy(mt),H=Mt),g=P,b=!1}function ln(P,et){P.side===wn?Gt(i.CULL_FACE):Tt(i.CULL_FACE);let B=P.side===fn;et&&(B=!B),ae(B),P.blending===$i&&P.transparent===!1?L(si):L(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const k=P.stencilWrite;o.setTest(k),k&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Se(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Tt(i.SAMPLE_ALPHA_TO_COVERAGE):Gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(P){S!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),S=P)}function $t(P){P!==Ul?(Tt(i.CULL_FACE),P!==F&&(P===bo?i.cullFace(i.BACK):P===Nl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Gt(i.CULL_FACE),F=P}function Nt(P){P!==st&&(ct&&i.lineWidth(P),st=P)}function Se(P,et,B){P?(Tt(i.POLYGON_OFFSET_FILL),(tt!==et||dt!==B)&&(i.polygonOffset(et,B),tt=et,dt=B)):Gt(i.POLYGON_OFFSET_FILL)}function Ot(P){P?Tt(i.SCISSOR_TEST):Gt(i.SCISSOR_TEST)}function T(P){P===void 0&&(P=i.TEXTURE0+pt-1),wt!==P&&(i.activeTexture(P),wt=P)}function h(P,et,B){B===void 0&&(wt===null?B=i.TEXTURE0+pt-1:B=wt);let k=Pt[B];k===void 0&&(k={type:void 0,texture:void 0},Pt[B]=k),(k.type!==P||k.texture!==et)&&(wt!==B&&(i.activeTexture(B),wt=B),i.bindTexture(P,et||Ut[P]),k.type=P,k.texture=et)}function M(){const P=Pt[wt];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function R(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function C(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(P){_e.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),_e.copy(P))}function Q(P){at.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),at.copy(P))}function ht(P,et){let B=u.get(et);B===void 0&&(B=new WeakMap,u.set(et,B));let k=B.get(P);k===void 0&&(k=i.getUniformBlockIndex(et,P.name),B.set(P,k))}function ft(P,et){const k=u.get(et).get(P);c.get(et)!==k&&(i.uniformBlockBinding(et,k,P.__bindingPointIndex),c.set(et,k))}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},wt=null,Pt={},f={},p=new WeakMap,m=[],_=null,x=!1,g=null,d=null,D=null,A=null,E=null,V=null,U=null,I=new Bt(0,0,0),H=0,b=!1,S=null,F=null,st=null,tt=null,dt=null,_e.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Tt,disable:Gt,bindFramebuffer:Xt,drawBuffers:Kt,useProgram:Jt,setBlending:L,setMaterial:ln,setFlipSided:ae,setCullFace:$t,setLineWidth:Nt,setPolygonOffset:Se,setScissorTest:Ot,activeTexture:T,bindTexture:h,unbindTexture:M,compressedTexImage2D:y,compressedTexImage3D:R,texImage2D:q,texImage3D:j,updateUBOMapping:ht,uniformBlockBinding:ft,texStorage2D:rt,texStorage3D:G,texSubImage2D:C,texSubImage3D:$,compressedTexSubImage2D:z,compressedTexSubImage3D:Y,scissor:ot,viewport:Q,reset:yt}}function cg(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ht,l=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,h){return m?new OffscreenCanvas(T,h):Ms("canvas")}function x(T,h,M){let y=1;const R=Ot(T);if((R.width>M||R.height>M)&&(y=M/Math.max(R.width,R.height)),y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const C=Math.floor(y*R.width),$=Math.floor(y*R.height);f===void 0&&(f=_(C,$));const z=h?_(C,$):f;return z.width=C,z.height=$,z.getContext("2d").drawImage(T,0,0,C,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+C+"x"+$+")."),z}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),T;return T}function g(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function D(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(T,h,M,y,R=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let C=h;if(h===i.RED&&(M===i.FLOAT&&(C=i.R32F),M===i.HALF_FLOAT&&(C=i.R16F),M===i.UNSIGNED_BYTE&&(C=i.R8)),h===i.RED_INTEGER&&(M===i.UNSIGNED_BYTE&&(C=i.R8UI),M===i.UNSIGNED_SHORT&&(C=i.R16UI),M===i.UNSIGNED_INT&&(C=i.R32UI),M===i.BYTE&&(C=i.R8I),M===i.SHORT&&(C=i.R16I),M===i.INT&&(C=i.R32I)),h===i.RG&&(M===i.FLOAT&&(C=i.RG32F),M===i.HALF_FLOAT&&(C=i.RG16F),M===i.UNSIGNED_BYTE&&(C=i.RG8)),h===i.RG_INTEGER&&(M===i.UNSIGNED_BYTE&&(C=i.RG8UI),M===i.UNSIGNED_SHORT&&(C=i.RG16UI),M===i.UNSIGNED_INT&&(C=i.RG32UI),M===i.BYTE&&(C=i.RG8I),M===i.SHORT&&(C=i.RG16I),M===i.INT&&(C=i.RG32I)),h===i.RGB_INTEGER&&(M===i.UNSIGNED_BYTE&&(C=i.RGB8UI),M===i.UNSIGNED_SHORT&&(C=i.RGB16UI),M===i.UNSIGNED_INT&&(C=i.RGB32UI),M===i.BYTE&&(C=i.RGB8I),M===i.SHORT&&(C=i.RGB16I),M===i.INT&&(C=i.RGB32I)),h===i.RGBA_INTEGER&&(M===i.UNSIGNED_BYTE&&(C=i.RGBA8UI),M===i.UNSIGNED_SHORT&&(C=i.RGBA16UI),M===i.UNSIGNED_INT&&(C=i.RGBA32UI),M===i.BYTE&&(C=i.RGBA8I),M===i.SHORT&&(C=i.RGBA16I),M===i.INT&&(C=i.RGBA32I)),h===i.RGB&&M===i.UNSIGNED_INT_5_9_9_9_REV&&(C=i.RGB9_E5),h===i.RGBA){const $=R?vs:me.getTransfer(y);M===i.FLOAT&&(C=i.RGBA32F),M===i.HALF_FLOAT&&(C=i.RGBA16F),M===i.UNSIGNED_BYTE&&(C=$===Me?i.SRGB8_ALPHA8:i.RGBA8),M===i.UNSIGNED_SHORT_4_4_4_4&&(C=i.RGBA4),M===i.UNSIGNED_SHORT_5_5_5_1&&(C=i.RGB5_A1)}return(C===i.R16F||C===i.R32F||C===i.RG16F||C===i.RG32F||C===i.RGBA16F||C===i.RGBA32F)&&t.get("EXT_color_buffer_float"),C}function E(T,h){let M;return T?h===null||h===Ei||h===tr?M=i.DEPTH24_STENCIL8:h===Wn?M=i.DEPTH32F_STENCIL8:h===Er&&(M=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):h===null||h===Ei||h===tr?M=i.DEPTH_COMPONENT24:h===Wn?M=i.DEPTH_COMPONENT32F:h===Er&&(M=i.DEPTH_COMPONENT16),M}function V(T,h){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Pn&&T.minFilter!==Un?Math.log2(Math.max(h.width,h.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?h.mipmaps.length:1}function U(T){const h=T.target;h.removeEventListener("dispose",U),H(h),h.isVideoTexture&&l.delete(h)}function I(T){const h=T.target;h.removeEventListener("dispose",I),S(h)}function H(T){const h=n.get(T);if(h.__webglInit===void 0)return;const M=T.source,y=p.get(M);if(y){const R=y[h.__cacheKey];R.usedTimes--,R.usedTimes===0&&b(T),Object.keys(y).length===0&&p.delete(M)}n.remove(T)}function b(T){const h=n.get(T);i.deleteTexture(h.__webglTexture);const M=T.source,y=p.get(M);delete y[h.__cacheKey],a.memory.textures--}function S(T){const h=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let y=0;y<6;y++){if(Array.isArray(h.__webglFramebuffer[y]))for(let R=0;R<h.__webglFramebuffer[y].length;R++)i.deleteFramebuffer(h.__webglFramebuffer[y][R]);else i.deleteFramebuffer(h.__webglFramebuffer[y]);h.__webglDepthbuffer&&i.deleteRenderbuffer(h.__webglDepthbuffer[y])}else{if(Array.isArray(h.__webglFramebuffer))for(let y=0;y<h.__webglFramebuffer.length;y++)i.deleteFramebuffer(h.__webglFramebuffer[y]);else i.deleteFramebuffer(h.__webglFramebuffer);if(h.__webglDepthbuffer&&i.deleteRenderbuffer(h.__webglDepthbuffer),h.__webglMultisampledFramebuffer&&i.deleteFramebuffer(h.__webglMultisampledFramebuffer),h.__webglColorRenderbuffer)for(let y=0;y<h.__webglColorRenderbuffer.length;y++)h.__webglColorRenderbuffer[y]&&i.deleteRenderbuffer(h.__webglColorRenderbuffer[y]);h.__webglDepthRenderbuffer&&i.deleteRenderbuffer(h.__webglDepthRenderbuffer)}const M=T.textures;for(let y=0,R=M.length;y<R;y++){const C=n.get(M[y]);C.__webglTexture&&(i.deleteTexture(C.__webglTexture),a.memory.textures--),n.remove(M[y])}n.remove(T)}let F=0;function st(){F=0}function tt(){const T=F;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),F+=1,T}function dt(T){const h=[];return h.push(T.wrapS),h.push(T.wrapT),h.push(T.wrapR||0),h.push(T.magFilter),h.push(T.minFilter),h.push(T.anisotropy),h.push(T.internalFormat),h.push(T.format),h.push(T.type),h.push(T.generateMipmaps),h.push(T.premultiplyAlpha),h.push(T.flipY),h.push(T.unpackAlignment),h.push(T.colorSpace),h.join()}function pt(T,h){const M=n.get(T);if(T.isVideoTexture&&Nt(T),T.isRenderTargetTexture===!1&&T.version>0&&M.__version!==T.version){const y=T.image;if(y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(M,T,h);return}}e.bindTexture(i.TEXTURE_2D,M.__webglTexture,i.TEXTURE0+h)}function ct(T,h){const M=n.get(T);if(T.version>0&&M.__version!==T.version){at(M,T,h);return}e.bindTexture(i.TEXTURE_2D_ARRAY,M.__webglTexture,i.TEXTURE0+h)}function _t(T,h){const M=n.get(T);if(T.version>0&&M.__version!==T.version){at(M,T,h);return}e.bindTexture(i.TEXTURE_3D,M.__webglTexture,i.TEXTURE0+h)}function nt(T,h){const M=n.get(T);if(T.version>0&&M.__version!==T.version){St(M,T,h);return}e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+h)}const wt={[Aa]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[wa]:i.MIRRORED_REPEAT},Pt={[Pn]:i.NEAREST,[uu]:i.NEAREST_MIPMAP_NEAREST,[Cr]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[Ds]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},zt={[mu]:i.NEVER,[Su]:i.ALWAYS,[gu]:i.LESS,[el]:i.LEQUAL,[_u]:i.EQUAL,[Mu]:i.GEQUAL,[vu]:i.GREATER,[xu]:i.NOTEQUAL};function ne(T,h){if(h.type===Wn&&t.has("OES_texture_float_linear")===!1&&(h.magFilter===Un||h.magFilter===Ds||h.magFilter===Cr||h.magFilter===yi||h.minFilter===Un||h.minFilter===Ds||h.minFilter===Cr||h.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,wt[h.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,wt[h.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,wt[h.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Pt[h.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Pt[h.minFilter]),h.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,zt[h.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(h.magFilter===Pn||h.minFilter!==Cr&&h.minFilter!==yi||h.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(h.anisotropy>1||n.get(h).__currentAnisotropy){const M=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,M.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(h.anisotropy,r.getMaxAnisotropy())),n.get(h).__currentAnisotropy=h.anisotropy}}}function _e(T,h){let M=!1;T.__webglInit===void 0&&(T.__webglInit=!0,h.addEventListener("dispose",U));const y=h.source;let R=p.get(y);R===void 0&&(R={},p.set(y,R));const C=dt(h);if(C!==T.__cacheKey){R[C]===void 0&&(R[C]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,M=!0),R[C].usedTimes++;const $=R[T.__cacheKey];$!==void 0&&(R[T.__cacheKey].usedTimes--,$.usedTimes===0&&b(h)),T.__cacheKey=C,T.__webglTexture=R[C].texture}return M}function at(T,h,M){let y=i.TEXTURE_2D;(h.isDataArrayTexture||h.isCompressedArrayTexture)&&(y=i.TEXTURE_2D_ARRAY),h.isData3DTexture&&(y=i.TEXTURE_3D);const R=_e(T,h),C=h.source;e.bindTexture(y,T.__webglTexture,i.TEXTURE0+M);const $=n.get(C);if(C.version!==$.__version||R===!0){e.activeTexture(i.TEXTURE0+M);const z=me.getPrimaries(me.workingColorSpace),Y=h.colorSpace===ri?null:me.getPrimaries(h.colorSpace),rt=h.colorSpace===ri||z===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,h.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,h.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let G=x(h.image,!1,r.maxTextureSize);G=Se(h,G);const q=s.convert(h.format,h.colorSpace),j=s.convert(h.type);let ot=A(h.internalFormat,q,j,h.colorSpace,h.isVideoTexture);ne(y,h);let Q;const ht=h.mipmaps,ft=h.isVideoTexture!==!0,yt=$.__version===void 0||R===!0,P=C.dataReady,et=V(h,G);if(h.isDepthTexture)ot=E(h.format===er,h.type),yt&&(ft?e.texStorage2D(i.TEXTURE_2D,1,ot,G.width,G.height):e.texImage2D(i.TEXTURE_2D,0,ot,G.width,G.height,0,q,j,null));else if(h.isDataTexture)if(ht.length>0){ft&&yt&&e.texStorage2D(i.TEXTURE_2D,et,ot,ht[0].width,ht[0].height);for(let B=0,k=ht.length;B<k;B++)Q=ht[B],ft?P&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,Q.width,Q.height,q,j,Q.data):e.texImage2D(i.TEXTURE_2D,B,ot,Q.width,Q.height,0,q,j,Q.data);h.generateMipmaps=!1}else ft?(yt&&e.texStorage2D(i.TEXTURE_2D,et,ot,G.width,G.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,G.width,G.height,q,j,G.data)):e.texImage2D(i.TEXTURE_2D,0,ot,G.width,G.height,0,q,j,G.data);else if(h.isCompressedTexture)if(h.isCompressedArrayTexture){ft&&yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,et,ot,ht[0].width,ht[0].height,G.depth);for(let B=0,k=ht.length;B<k;B++)if(Q=ht[B],h.format!==Cn)if(q!==null)if(ft){if(P)if(h.layerUpdates.size>0){const it=sc(Q.width,Q.height,h.format,h.type);for(const K of h.layerUpdates){const xt=Q.data.subarray(K*it/Q.data.BYTES_PER_ELEMENT,(K+1)*it/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,K,Q.width,Q.height,1,q,xt)}h.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,Q.width,Q.height,G.depth,q,Q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,ot,Q.width,Q.height,G.depth,0,Q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,Q.width,Q.height,G.depth,q,j,Q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,B,ot,Q.width,Q.height,G.depth,0,q,j,Q.data)}else{ft&&yt&&e.texStorage2D(i.TEXTURE_2D,et,ot,ht[0].width,ht[0].height);for(let B=0,k=ht.length;B<k;B++)Q=ht[B],h.format!==Cn?q!==null?ft?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,Q.width,Q.height,q,Q.data):e.compressedTexImage2D(i.TEXTURE_2D,B,ot,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?P&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,Q.width,Q.height,q,j,Q.data):e.texImage2D(i.TEXTURE_2D,B,ot,Q.width,Q.height,0,q,j,Q.data)}else if(h.isDataArrayTexture)if(ft){if(yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,et,ot,G.width,G.height,G.depth),P)if(h.layerUpdates.size>0){const B=sc(G.width,G.height,h.format,h.type);for(const k of h.layerUpdates){const it=G.data.subarray(k*B/G.data.BYTES_PER_ELEMENT,(k+1)*B/G.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,k,G.width,G.height,1,q,j,it)}h.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,q,j,G.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ot,G.width,G.height,G.depth,0,q,j,G.data);else if(h.isData3DTexture)ft?(yt&&e.texStorage3D(i.TEXTURE_3D,et,ot,G.width,G.height,G.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,q,j,G.data)):e.texImage3D(i.TEXTURE_3D,0,ot,G.width,G.height,G.depth,0,q,j,G.data);else if(h.isFramebufferTexture){if(yt)if(ft)e.texStorage2D(i.TEXTURE_2D,et,ot,G.width,G.height);else{let B=G.width,k=G.height;for(let it=0;it<et;it++)e.texImage2D(i.TEXTURE_2D,it,ot,B,k,0,q,j,null),B>>=1,k>>=1}}else if(ht.length>0){if(ft&&yt){const B=Ot(ht[0]);e.texStorage2D(i.TEXTURE_2D,et,ot,B.width,B.height)}for(let B=0,k=ht.length;B<k;B++)Q=ht[B],ft?P&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,q,j,Q):e.texImage2D(i.TEXTURE_2D,B,ot,q,j,Q);h.generateMipmaps=!1}else if(ft){if(yt){const B=Ot(G);e.texStorage2D(i.TEXTURE_2D,et,ot,B.width,B.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,q,j,G)}else e.texImage2D(i.TEXTURE_2D,0,ot,q,j,G);g(h)&&d(y),$.__version=C.version,h.onUpdate&&h.onUpdate(h)}T.__version=h.version}function St(T,h,M){if(h.image.length!==6)return;const y=_e(T,h),R=h.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+M);const C=n.get(R);if(R.version!==C.__version||y===!0){e.activeTexture(i.TEXTURE0+M);const $=me.getPrimaries(me.workingColorSpace),z=h.colorSpace===ri?null:me.getPrimaries(h.colorSpace),Y=h.colorSpace===ri||$===z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,h.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,h.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const rt=h.isCompressedTexture||h.image[0].isCompressedTexture,G=h.image[0]&&h.image[0].isDataTexture,q=[];for(let k=0;k<6;k++)!rt&&!G?q[k]=x(h.image[k],!0,r.maxCubemapSize):q[k]=G?h.image[k].image:h.image[k],q[k]=Se(h,q[k]);const j=q[0],ot=s.convert(h.format,h.colorSpace),Q=s.convert(h.type),ht=A(h.internalFormat,ot,Q,h.colorSpace),ft=h.isVideoTexture!==!0,yt=C.__version===void 0||y===!0,P=R.dataReady;let et=V(h,j);ne(i.TEXTURE_CUBE_MAP,h);let B;if(rt){ft&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,et,ht,j.width,j.height);for(let k=0;k<6;k++){B=q[k].mipmaps;for(let it=0;it<B.length;it++){const K=B[it];h.format!==Cn?ot!==null?ft?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,it,0,0,K.width,K.height,ot,K.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,it,ht,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,it,0,0,K.width,K.height,ot,Q,K.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,it,ht,K.width,K.height,0,ot,Q,K.data)}}}else{if(B=h.mipmaps,ft&&yt){B.length>0&&et++;const k=Ot(q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,et,ht,k.width,k.height)}for(let k=0;k<6;k++)if(G){ft?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,q[k].width,q[k].height,ot,Q,q[k].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,ht,q[k].width,q[k].height,0,ot,Q,q[k].data);for(let it=0;it<B.length;it++){const xt=B[it].image[k].image;ft?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,it+1,0,0,xt.width,xt.height,ot,Q,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,it+1,ht,xt.width,xt.height,0,ot,Q,xt.data)}}else{ft?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,ot,Q,q[k]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,ht,ot,Q,q[k]);for(let it=0;it<B.length;it++){const K=B[it];ft?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,it+1,0,0,ot,Q,K.image[k]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,it+1,ht,ot,Q,K.image[k])}}}g(h)&&d(i.TEXTURE_CUBE_MAP),C.__version=R.version,h.onUpdate&&h.onUpdate(h)}T.__version=h.version}function Ut(T,h,M,y,R,C){const $=s.convert(M.format,M.colorSpace),z=s.convert(M.type),Y=A(M.internalFormat,$,z,M.colorSpace),rt=n.get(h),G=n.get(M);if(G.__renderTarget=h,!rt.__hasExternalTextures){const q=Math.max(1,h.width>>C),j=Math.max(1,h.height>>C);R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?e.texImage3D(R,C,Y,q,j,h.depth,0,$,z,null):e.texImage2D(R,C,Y,q,j,0,$,z,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),$t(h)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,y,R,G.__webglTexture,0,ae(h)):(R===i.TEXTURE_2D||R>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&R<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,y,R,G.__webglTexture,C),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(T,h,M){if(i.bindRenderbuffer(i.RENDERBUFFER,T),h.depthBuffer){const y=h.depthTexture,R=y&&y.isDepthTexture?y.type:null,C=E(h.stencilBuffer,R),$=h.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=ae(h);$t(h)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,z,C,h.width,h.height):M?i.renderbufferStorageMultisample(i.RENDERBUFFER,z,C,h.width,h.height):i.renderbufferStorage(i.RENDERBUFFER,C,h.width,h.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,T)}else{const y=h.textures;for(let R=0;R<y.length;R++){const C=y[R],$=s.convert(C.format,C.colorSpace),z=s.convert(C.type),Y=A(C.internalFormat,$,z,C.colorSpace),rt=ae(h);M&&$t(h)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Y,h.width,h.height):$t(h)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,Y,h.width,h.height):i.renderbufferStorage(i.RENDERBUFFER,Y,h.width,h.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Gt(T,h){if(h&&h.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(h.depthTexture&&h.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const y=n.get(h.depthTexture);y.__renderTarget=h,(!y.__webglTexture||h.depthTexture.image.width!==h.width||h.depthTexture.image.height!==h.height)&&(h.depthTexture.image.width=h.width,h.depthTexture.image.height=h.height,h.depthTexture.needsUpdate=!0),pt(h.depthTexture,0);const R=y.__webglTexture,C=ae(h);if(h.depthTexture.format===Zi)$t(h)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,R,0,C):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,R,0);else if(h.depthTexture.format===er)$t(h)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,R,0,C):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,R,0);else throw new Error("Unknown depthTexture format")}function Xt(T){const h=n.get(T),M=T.isWebGLCubeRenderTarget===!0;if(h.__boundDepthTexture!==T.depthTexture){const y=T.depthTexture;if(h.__depthDisposeCallback&&h.__depthDisposeCallback(),y){const R=()=>{delete h.__boundDepthTexture,delete h.__depthDisposeCallback,y.removeEventListener("dispose",R)};y.addEventListener("dispose",R),h.__depthDisposeCallback=R}h.__boundDepthTexture=y}if(T.depthTexture&&!h.__autoAllocateDepthBuffer){if(M)throw new Error("target.depthTexture not supported in Cube render targets");Gt(h.__webglFramebuffer,T)}else if(M){h.__webglDepthbuffer=[];for(let y=0;y<6;y++)if(e.bindFramebuffer(i.FRAMEBUFFER,h.__webglFramebuffer[y]),h.__webglDepthbuffer[y]===void 0)h.__webglDepthbuffer[y]=i.createRenderbuffer(),Tt(h.__webglDepthbuffer[y],T,!1);else{const R=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=h.__webglDepthbuffer[y];i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,C)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,h.__webglFramebuffer),h.__webglDepthbuffer===void 0)h.__webglDepthbuffer=i.createRenderbuffer(),Tt(h.__webglDepthbuffer,T,!1);else{const y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,R=h.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,R),i.framebufferRenderbuffer(i.FRAMEBUFFER,y,i.RENDERBUFFER,R)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(T,h,M){const y=n.get(T);h!==void 0&&Ut(y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),M!==void 0&&Xt(T)}function Jt(T){const h=T.texture,M=n.get(T),y=n.get(h);T.addEventListener("dispose",I);const R=T.textures,C=T.isWebGLCubeRenderTarget===!0,$=R.length>1;if($||(y.__webglTexture===void 0&&(y.__webglTexture=i.createTexture()),y.__version=h.version,a.memory.textures++),C){M.__webglFramebuffer=[];for(let z=0;z<6;z++)if(h.mipmaps&&h.mipmaps.length>0){M.__webglFramebuffer[z]=[];for(let Y=0;Y<h.mipmaps.length;Y++)M.__webglFramebuffer[z][Y]=i.createFramebuffer()}else M.__webglFramebuffer[z]=i.createFramebuffer()}else{if(h.mipmaps&&h.mipmaps.length>0){M.__webglFramebuffer=[];for(let z=0;z<h.mipmaps.length;z++)M.__webglFramebuffer[z]=i.createFramebuffer()}else M.__webglFramebuffer=i.createFramebuffer();if($)for(let z=0,Y=R.length;z<Y;z++){const rt=n.get(R[z]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&$t(T)===!1){M.__webglMultisampledFramebuffer=i.createFramebuffer(),M.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,M.__webglMultisampledFramebuffer);for(let z=0;z<R.length;z++){const Y=R[z];M.__webglColorRenderbuffer[z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,M.__webglColorRenderbuffer[z]);const rt=s.convert(Y.format,Y.colorSpace),G=s.convert(Y.type),q=A(Y.internalFormat,rt,G,Y.colorSpace,T.isXRRenderTarget===!0),j=ae(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,q,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,M.__webglColorRenderbuffer[z])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(M.__webglDepthRenderbuffer=i.createRenderbuffer(),Tt(M.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(C){e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture),ne(i.TEXTURE_CUBE_MAP,h);for(let z=0;z<6;z++)if(h.mipmaps&&h.mipmaps.length>0)for(let Y=0;Y<h.mipmaps.length;Y++)Ut(M.__webglFramebuffer[z][Y],T,h,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Y);else Ut(M.__webglFramebuffer[z],T,h,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);g(h)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if($){for(let z=0,Y=R.length;z<Y;z++){const rt=R[z],G=n.get(rt);e.bindTexture(i.TEXTURE_2D,G.__webglTexture),ne(i.TEXTURE_2D,rt),Ut(M.__webglFramebuffer,T,rt,i.COLOR_ATTACHMENT0+z,i.TEXTURE_2D,0),g(rt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let z=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(z=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(z,y.__webglTexture),ne(z,h),h.mipmaps&&h.mipmaps.length>0)for(let Y=0;Y<h.mipmaps.length;Y++)Ut(M.__webglFramebuffer[Y],T,h,i.COLOR_ATTACHMENT0,z,Y);else Ut(M.__webglFramebuffer,T,h,i.COLOR_ATTACHMENT0,z,0);g(h)&&d(z),e.unbindTexture()}T.depthBuffer&&Xt(T)}function ue(T){const h=T.textures;for(let M=0,y=h.length;M<y;M++){const R=h[M];if(g(R)){const C=D(T),$=n.get(R).__webglTexture;e.bindTexture(C,$),d(C),e.unbindTexture()}}}const Pe=[],L=[];function ln(T){if(T.samples>0){if($t(T)===!1){const h=T.textures,M=T.width,y=T.height;let R=i.COLOR_BUFFER_BIT;const C=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=n.get(T),z=h.length>1;if(z)for(let Y=0;Y<h.length;Y++)e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,$.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let Y=0;Y<h.length;Y++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(R|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(R|=i.STENCIL_BUFFER_BIT)),z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$.__webglColorRenderbuffer[Y]);const rt=n.get(h[Y]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,M,y,0,0,M,y,R,i.NEAREST),c===!0&&(Pe.length=0,L.length=0,Pe.push(i.COLOR_ATTACHMENT0+Y),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Pe.push(C),L.push(C),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),z)for(let Y=0;Y<h.length;Y++){e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,$.__webglColorRenderbuffer[Y]);const rt=n.get(h[Y]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,$.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const h=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[h])}}}function ae(T){return Math.min(r.maxSamples,T.samples)}function $t(T){const h=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&h.__useRenderToTexture!==!1}function Nt(T){const h=a.render.frame;l.get(T)!==h&&(l.set(T,h),T.update())}function Se(T,h){const M=T.colorSpace,y=T.format,R=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||M!==nr&&M!==ri&&(me.getTransfer(M)===Me?(y!==Cn||R!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",M)),h}function Ot(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=tt,this.resetTextureUnits=st,this.setTexture2D=pt,this.setTexture2DArray=ct,this.setTexture3D=_t,this.setTextureCube=nt,this.rebindTextures=Kt,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=$t}function lg(i,t){function e(n,r=ri){let s;const a=me.getTransfer(r);if(n===$n)return i.UNSIGNED_BYTE;if(n===co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xc)return i.BYTE;if(n===qc)return i.SHORT;if(n===Er)return i.UNSIGNED_SHORT;if(n===oo)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Tr)return i.HALF_FLOAT;if(n===$c)return i.ALPHA;if(n===Zc)return i.RGB;if(n===Cn)return i.RGBA;if(n===Kc)return i.LUMINANCE;if(n===Jc)return i.LUMINANCE_ALPHA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===jc)return i.RED;if(n===uo)return i.RED_INTEGER;if(n===Qc)return i.RG;if(n===ho)return i.RG_INTEGER;if(n===fo)return i.RGBA_INTEGER;if(n===us||n===hs||n===ds||n===fs)if(a===Me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===us)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===us)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ds)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Ca||n===Pa||n===Da)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ra)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ca)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Ia||n===Ua)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===La||n===Ia)return a===Me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ua)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Na||n===Fa||n===Oa||n===Ba||n===za||n===Va||n===Ha||n===Ga||n===ka||n===Wa||n===Xa||n===qa||n===Ya||n===$a)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Na)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fa)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oa)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Va)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ha)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ka)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wa)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qa)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$a)return a===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ps||n===Za||n===Ka)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ps)return a===Me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tl||n===Ja||n===ja||n===Qa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ps)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ja)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ug={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),d=this._getHandJoint(u,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const l=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=l.position.distanceTo(f.position),m=.02,_=.005;u.inputState.pinching&&p>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&p<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ug)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dg=`
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

}`;class fg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new cn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new gn({vertexShader:hg,fragmentShader:dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qe(new Cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pg extends rr{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,l=null,f=null,p=null,m=null,_=null;const x=new fg,g=e.getContextAttributes();let d=null,D=null;const A=[],E=[],V=new Ht;let U=null;const I=new Mn;I.viewport=new De;const H=new Mn;H.viewport=new De;const b=[I,H],S=new Ih;let F=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let St=A[at];return St===void 0&&(St=new ua,A[at]=St),St.getTargetRaySpace()},this.getControllerGrip=function(at){let St=A[at];return St===void 0&&(St=new ua,A[at]=St),St.getGripSpace()},this.getHand=function(at){let St=A[at];return St===void 0&&(St=new ua,A[at]=St),St.getHandSpace()};function tt(at){const St=E.indexOf(at.inputSource);if(St===-1)return;const Ut=A[St];Ut!==void 0&&(Ut.update(at.inputSource,at.frame,u||a),Ut.dispatchEvent({type:at.type,data:at.inputSource}))}function dt(){r.removeEventListener("select",tt),r.removeEventListener("selectstart",tt),r.removeEventListener("selectend",tt),r.removeEventListener("squeeze",tt),r.removeEventListener("squeezestart",tt),r.removeEventListener("squeezeend",tt),r.removeEventListener("end",dt),r.removeEventListener("inputsourceschange",pt);for(let at=0;at<A.length;at++){const St=E[at];St!==null&&(E[at]=null,A[at].disconnect(St))}F=null,st=null,x.reset(),t.setRenderTarget(d),m=null,p=null,f=null,r=null,D=null,_e.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){s=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){o=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(at){u=at},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(at){if(r=at,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",tt),r.addEventListener("selectstart",tt),r.addEventListener("selectend",tt),r.addEventListener("squeeze",tt),r.addEventListener("squeezestart",tt),r.addEventListener("squeezeend",tt),r.addEventListener("end",dt),r.addEventListener("inputsourceschange",pt),g.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(V),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let Ut=null,Tt=null,Gt=null;g.depth&&(Gt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ut=g.stencil?er:Zi,Tt=g.stencil?tr:Ei);const Xt={colorFormat:e.RGBA8,depthFormat:Gt,scaleFactor:s};f=new XRWebGLBinding(r,e),p=f.createProjectionLayer(Xt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),D=new bi(p.textureWidth,p.textureHeight,{format:Cn,type:$n,depthTexture:new pl(p.textureWidth,p.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}else{const Ut={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,Ut),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),D=new bi(m.framebufferWidth,m.framebufferHeight,{format:Cn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}D.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),_e.setContext(r),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function pt(at){for(let St=0;St<at.removed.length;St++){const Ut=at.removed[St],Tt=E.indexOf(Ut);Tt>=0&&(E[Tt]=null,A[Tt].disconnect(Ut))}for(let St=0;St<at.added.length;St++){const Ut=at.added[St];let Tt=E.indexOf(Ut);if(Tt===-1){for(let Xt=0;Xt<A.length;Xt++)if(Xt>=E.length){E.push(Ut),Tt=Xt;break}else if(E[Xt]===null){E[Xt]=Ut,Tt=Xt;break}if(Tt===-1)break}const Gt=A[Tt];Gt&&Gt.connect(Ut)}}const ct=new w,_t=new w;function nt(at,St,Ut){ct.setFromMatrixPosition(St.matrixWorld),_t.setFromMatrixPosition(Ut.matrixWorld);const Tt=ct.distanceTo(_t),Gt=St.projectionMatrix.elements,Xt=Ut.projectionMatrix.elements,Kt=Gt[14]/(Gt[10]-1),Jt=Gt[14]/(Gt[10]+1),ue=(Gt[9]+1)/Gt[5],Pe=(Gt[9]-1)/Gt[5],L=(Gt[8]-1)/Gt[0],ln=(Xt[8]+1)/Xt[0],ae=Kt*L,$t=Kt*ln,Nt=Tt/(-L+ln),Se=Nt*-L;if(St.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Se),at.translateZ(Nt),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Gt[10]===-1)at.projectionMatrix.copy(St.projectionMatrix),at.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const Ot=Kt+Nt,T=Jt+Nt,h=ae-Se,M=$t+(Tt-Se),y=ue*Jt/T*Ot,R=Pe*Jt/T*Ot;at.projectionMatrix.makePerspective(h,M,y,R,Ot,T),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function wt(at,St){St===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(St.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(r===null)return;let St=at.near,Ut=at.far;x.texture!==null&&(x.depthNear>0&&(St=x.depthNear),x.depthFar>0&&(Ut=x.depthFar)),S.near=H.near=I.near=St,S.far=H.far=I.far=Ut,(F!==S.near||st!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),F=S.near,st=S.far),I.layers.mask=at.layers.mask|2,H.layers.mask=at.layers.mask|4,S.layers.mask=I.layers.mask|H.layers.mask;const Tt=at.parent,Gt=S.cameras;wt(S,Tt);for(let Xt=0;Xt<Gt.length;Xt++)wt(Gt[Xt],Tt);Gt.length===2?nt(S,I,H):S.projectionMatrix.copy(I.projectionMatrix),Pt(at,S,Tt)};function Pt(at,St,Ut){Ut===null?at.matrix.copy(St.matrixWorld):(at.matrix.copy(Ut.matrixWorld),at.matrix.invert(),at.matrix.multiply(St.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(St.projectionMatrix),at.projectionMatrixInverse.copy(St.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=br*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(at){c=at,p!==null&&(p.fixedFoveation=at),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=at)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let zt=null;function ne(at,St){if(l=St.getViewerPose(u||a),_=St,l!==null){const Ut=l.views;m!==null&&(t.setRenderTargetFramebuffer(D,m.framebuffer),t.setRenderTarget(D));let Tt=!1;Ut.length!==S.cameras.length&&(S.cameras.length=0,Tt=!0);for(let Xt=0;Xt<Ut.length;Xt++){const Kt=Ut[Xt];let Jt=null;if(m!==null)Jt=m.getViewport(Kt);else{const Pe=f.getViewSubImage(p,Kt);Jt=Pe.viewport,Xt===0&&(t.setRenderTargetTextures(D,Pe.colorTexture,p.ignoreDepthValues?void 0:Pe.depthStencilTexture),t.setRenderTarget(D))}let ue=b[Xt];ue===void 0&&(ue=new Mn,ue.layers.enable(Xt),ue.viewport=new De,b[Xt]=ue),ue.matrix.fromArray(Kt.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Kt.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Xt===0&&(S.matrix.copy(ue.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Tt===!0&&S.cameras.push(ue)}const Gt=r.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")){const Xt=f.getDepthInformation(Ut[0]);Xt&&Xt.isValid&&Xt.texture&&x.init(t,Xt,r.renderState)}}for(let Ut=0;Ut<A.length;Ut++){const Tt=E[Ut],Gt=A[Ut];Tt!==null&&Gt!==void 0&&Gt.update(Tt,St,u||a)}zt&&zt(at,St),St.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:St}),_=null}const _e=new vl;_e.setAnimationLoop(ne),this.setAnimationLoop=function(at){zt=at},this.dispose=function(){}}}const fi=new Zn,mg=new Ce;function gg(i,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,ll(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,D,A,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),l(g,d)):d.isMeshStandardMaterial?(s(g,d),p(g,d),d.isMeshPhysicalMaterial&&m(g,d,E)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),x(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?c(g,d,D,A):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===fn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===fn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const D=t.get(d),A=D.envMap,E=D.envMapRotation;A&&(g.envMap.value=A,fi.copy(E),fi.x*=-1,fi.y*=-1,fi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),g.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(fi)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,D,A){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*D,g.scale.value=A*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function p(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,D){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===fn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=D.texture,g.transmissionSamplerSize.value.set(D.width,D.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){const D=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(D.matrixWorld),g.nearDistance.value=D.shadow.camera.near,g.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function _g(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(D,A){const E=A.program;n.uniformBlockBinding(D,E)}function u(D,A){let E=r[D.id];E===void 0&&(_(D),E=l(D),r[D.id]=E,D.addEventListener("dispose",g));const V=A.program;n.updateUBOMapping(D,V);const U=t.render.frame;s[D.id]!==U&&(p(D),s[D.id]=U)}function l(D){const A=f();D.__bindingPointIndex=A;const E=i.createBuffer(),V=D.__size,U=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,V,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,E),E}function f(){for(let D=0;D<o;D++)if(a.indexOf(D)===-1)return a.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(D){const A=r[D.id],E=D.uniforms,V=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let U=0,I=E.length;U<I;U++){const H=Array.isArray(E[U])?E[U]:[E[U]];for(let b=0,S=H.length;b<S;b++){const F=H[b];if(m(F,U,b,V)===!0){const st=F.__offset,tt=Array.isArray(F.value)?F.value:[F.value];let dt=0;for(let pt=0;pt<tt.length;pt++){const ct=tt[pt],_t=x(ct);typeof ct=="number"||typeof ct=="boolean"?(F.__data[0]=ct,i.bufferSubData(i.UNIFORM_BUFFER,st+dt,F.__data)):ct.isMatrix3?(F.__data[0]=ct.elements[0],F.__data[1]=ct.elements[1],F.__data[2]=ct.elements[2],F.__data[3]=0,F.__data[4]=ct.elements[3],F.__data[5]=ct.elements[4],F.__data[6]=ct.elements[5],F.__data[7]=0,F.__data[8]=ct.elements[6],F.__data[9]=ct.elements[7],F.__data[10]=ct.elements[8],F.__data[11]=0):(ct.toArray(F.__data,dt),dt+=_t.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,st,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(D,A,E,V){const U=D.value,I=A+"_"+E;if(V[I]===void 0)return typeof U=="number"||typeof U=="boolean"?V[I]=U:V[I]=U.clone(),!0;{const H=V[I];if(typeof U=="number"||typeof U=="boolean"){if(H!==U)return V[I]=U,!0}else if(H.equals(U)===!1)return H.copy(U),!0}return!1}function _(D){const A=D.uniforms;let E=0;const V=16;for(let I=0,H=A.length;I<H;I++){const b=Array.isArray(A[I])?A[I]:[A[I]];for(let S=0,F=b.length;S<F;S++){const st=b[S],tt=Array.isArray(st.value)?st.value:[st.value];for(let dt=0,pt=tt.length;dt<pt;dt++){const ct=tt[dt],_t=x(ct),nt=E%V,wt=nt%_t.boundary,Pt=nt+wt;E+=wt,Pt!==0&&V-Pt<_t.storage&&(E+=V-Pt),st.__data=new Float32Array(_t.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=E,E+=_t.storage}}}const U=E%V;return U>0&&(E+=V-U),D.__size=E,D.__cache={},this}function x(D){const A={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(A.boundary=4,A.storage=4):D.isVector2?(A.boundary=8,A.storage=8):D.isVector3||D.isColor?(A.boundary=16,A.storage=12):D.isVector4?(A.boundary=16,A.storage=16):D.isMatrix3?(A.boundary=48,A.storage=48):D.isMatrix4?(A.boundary=64,A.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),A}function g(D){const A=D.target;A.removeEventListener("dispose",g);const E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const D in r)i.deleteBuffer(r[D]);a=[],r={},s={}}return{bind:c,update:u,dispose:d}}class vg{constructor(t={}){const{canvas:e=Bu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),x=new Int32Array(4);let g=null,d=null;const D=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this.toneMapping=ai,this.toneMappingExposure=1;const E=this;let V=!1,U=0,I=0,H=null,b=-1,S=null;const F=new De,st=new De;let tt=null;const dt=new Bt(0);let pt=0,ct=e.width,_t=e.height,nt=1,wt=null,Pt=null;const zt=new De(0,0,ct,_t),ne=new De(0,0,ct,_t);let _e=!1;const at=new fl;let St=!1,Ut=!1;this.transmissionResolutionScale=1;const Tt=new Ce,Gt=new Ce,Xt=new w,Kt=new De,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function Pe(){return H===null?nt:1}let L=n;function ln(v,N){return e.getContext(v,N)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ao}`),e.addEventListener("webglcontextlost",k,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",K,!1),L===null){const N="webgl2";if(L=ln(N,v),L===null)throw ln(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let ae,$t,Nt,Se,Ot,T,h,M,y,R,C,$,z,Y,rt,G,q,j,ot,Q,ht,ft,yt,P;function et(){ae=new wp(L),ae.init(),ft=new lg(L,ae),$t=new Sp(L,ae,t,ft),Nt=new og(L,ae),$t.reverseDepthBuffer&&p&&Nt.buffers.depth.setReversed(!0),Se=new Pp(L),Ot=new $m,T=new cg(L,ae,Nt,Ot,$t,ft,Se),h=new Ep(E),M=new Ap(E),y=new Fh(L),yt=new xp(L,y),R=new Rp(L,y,Se,yt),C=new Lp(L,R,y,Se),ot=new Dp(L,$t,T),G=new yp(Ot),$=new Ym(E,h,M,ae,$t,yt,G),z=new gg(E,Ot),Y=new Km,rt=new ng(ae),j=new vp(E,h,M,Nt,C,m,c),q=new sg(E,C,$t),P=new _g(L,Se,$t,Nt),Q=new Mp(L,ae,Se),ht=new Cp(L,ae,Se),Se.programs=$.programs,E.capabilities=$t,E.extensions=ae,E.properties=Ot,E.renderLists=Y,E.shadowMap=q,E.state=Nt,E.info=Se}et();const B=new pg(E,L);this.xr=B,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const v=ae.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=ae.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(v){v!==void 0&&(nt=v,this.setSize(ct,_t,!1))},this.getSize=function(v){return v.set(ct,_t)},this.setSize=function(v,N,W=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ct=v,_t=N,e.width=Math.floor(v*nt),e.height=Math.floor(N*nt),W===!0&&(e.style.width=v+"px",e.style.height=N+"px"),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(ct*nt,_t*nt).floor()},this.setDrawingBufferSize=function(v,N,W){ct=v,_t=N,nt=W,e.width=Math.floor(v*W),e.height=Math.floor(N*W),this.setViewport(0,0,v,N)},this.getCurrentViewport=function(v){return v.copy(F)},this.getViewport=function(v){return v.copy(zt)},this.setViewport=function(v,N,W,X){v.isVector4?zt.set(v.x,v.y,v.z,v.w):zt.set(v,N,W,X),Nt.viewport(F.copy(zt).multiplyScalar(nt).round())},this.getScissor=function(v){return v.copy(ne)},this.setScissor=function(v,N,W,X){v.isVector4?ne.set(v.x,v.y,v.z,v.w):ne.set(v,N,W,X),Nt.scissor(st.copy(ne).multiplyScalar(nt).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(v){Nt.setScissorTest(_e=v)},this.setOpaqueSort=function(v){wt=v},this.setTransparentSort=function(v){Pt=v},this.getClearColor=function(v){return v.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(v=!0,N=!0,W=!0){let X=0;if(v){let O=!1;if(H!==null){const vt=H.texture.format;O=vt===fo||vt===ho||vt===uo}if(O){const vt=H.texture.type,lt=vt===$n||vt===Ei||vt===Er||vt===tr||vt===co||vt===lo,J=j.getClearColor(),gt=j.getClearAlpha(),It=J.r,Dt=J.g,Et=J.b;lt?(_[0]=It,_[1]=Dt,_[2]=Et,_[3]=gt,L.clearBufferuiv(L.COLOR,0,_)):(x[0]=It,x[1]=Dt,x[2]=Et,x[3]=gt,L.clearBufferiv(L.COLOR,0,x))}else X|=L.COLOR_BUFFER_BIT}N&&(X|=L.DEPTH_BUFFER_BIT),W&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",k,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",K,!1),j.dispose(),Y.dispose(),rt.dispose(),Ot.dispose(),h.dispose(),M.dispose(),C.dispose(),yt.dispose(),P.dispose(),$.dispose(),B.dispose(),B.removeEventListener("sessionstart",Ct),B.removeEventListener("sessionend",Rt),Zt.stop()};function k(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const v=Se.autoReset,N=q.enabled,W=q.autoUpdate,X=q.needsUpdate,O=q.type;et(),Se.autoReset=v,q.enabled=N,q.autoUpdate=W,q.needsUpdate=X,q.type=O}function K(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function xt(v){const N=v.target;N.removeEventListener("dispose",xt),mt(N)}function mt(v){Mt(v),Ot.remove(v)}function Mt(v){const N=Ot.get(v).programs;N!==void 0&&(N.forEach(function(W){$.releaseProgram(W)}),v.isShaderMaterial&&$.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,W,X,O,vt){N===null&&(N=Jt);const lt=O.isMesh&&O.matrixWorld.determinant()<0,J=en(v,N,W,X,O);Nt.setMaterial(X,lt);let gt=W.index,It=1;if(X.wireframe===!0){if(gt=R.getWireframeAttribute(W),gt===void 0)return;It=2}const Dt=W.drawRange,Et=W.attributes.position;let Ft=Dt.start*It,qt=(Dt.start+Dt.count)*It;vt!==null&&(Ft=Math.max(Ft,vt.start*It),qt=Math.min(qt,(vt.start+vt.count)*It)),gt!==null?(Ft=Math.max(Ft,0),qt=Math.min(qt,gt.count)):Et!=null&&(Ft=Math.max(Ft,0),qt=Math.min(qt,Et.count));const pe=qt-Ft;if(pe<0||pe===1/0)return;yt.setup(O,X,J,W,gt);let le,kt=Q;if(gt!==null&&(le=y.get(gt),kt=ht,kt.setIndex(le)),O.isMesh)X.wireframe===!0?(Nt.setLineWidth(X.wireframeLinewidth*Pe()),kt.setMode(L.LINES)):kt.setMode(L.TRIANGLES);else if(O.isLine){let Lt=X.linewidth;Lt===void 0&&(Lt=1),Nt.setLineWidth(Lt*Pe()),O.isLineSegments?kt.setMode(L.LINES):O.isLineLoop?kt.setMode(L.LINE_LOOP):kt.setMode(L.LINE_STRIP)}else O.isPoints?kt.setMode(L.POINTS):O.isSprite&&kt.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)kt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))kt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Lt=O._multiDrawStarts,ye=O._multiDrawCounts,Qt=O._multiDrawCount,Ge=gt?y.get(gt).bytesPerElement:1,Re=Ot.get(X).currentProgram.getUniforms();for(let ve=0;ve<Qt;ve++)Re.setValue(L,"_gl_DrawID",ve),kt.render(Lt[ve]/Ge,ye[ve])}else if(O.isInstancedMesh)kt.renderInstances(Ft,pe,O.count);else if(W.isInstancedBufferGeometry){const Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ye=Math.min(W.instanceCount,Lt);kt.renderInstances(Ft,pe,ye)}else kt.render(Ft,pe)};function Z(v,N,W){v.transparent===!0&&v.side===wn&&v.forceSinglePass===!1?(v.side=fn,v.needsUpdate=!0,re(v,N,W),v.side=oi,v.needsUpdate=!0,re(v,N,W),v.side=wn):re(v,N,W)}this.compile=function(v,N,W=null){W===null&&(W=v),d=rt.get(W),d.init(N),A.push(d),W.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),v!==W&&v.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const X=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const vt=O.material;if(vt)if(Array.isArray(vt))for(let lt=0;lt<vt.length;lt++){const J=vt[lt];Z(J,W,O),X.add(J)}else Z(vt,W,O),X.add(vt)}),A.pop(),d=null,X},this.compileAsync=function(v,N,W=null){const X=this.compile(v,N,W);return new Promise(O=>{function vt(){if(X.forEach(function(lt){Ot.get(lt).currentProgram.isReady()&&X.delete(lt)}),X.size===0){O(v);return}setTimeout(vt,10)}ae.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let ut=null;function bt(v){ut&&ut(v)}function Ct(){Zt.stop()}function Rt(){Zt.start()}const Zt=new vl;Zt.setAnimationLoop(bt),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(v){ut=v,B.setAnimationLoop(v),v===null?Zt.stop():Zt.start()},B.addEventListener("sessionstart",Ct),B.addEventListener("sessionend",Rt),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(N),N=B.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,N,H),d=rt.get(v,A.length),d.init(N),A.push(d),Gt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),at.setFromProjectionMatrix(Gt),Ut=this.localClippingEnabled,St=G.init(this.clippingPlanes,Ut),g=Y.get(v,D.length),g.init(),D.push(g),B.enabled===!0&&B.isPresenting===!0){const vt=E.xr.getDepthSensingMesh();vt!==null&&Vt(vt,N,-1/0,E.sortObjects)}Vt(v,N,0,E.sortObjects),g.finish(),E.sortObjects===!0&&g.sort(wt,Pt),ue=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,ue&&j.addToRenderList(g,v),this.info.render.frame++,St===!0&&G.beginShadows();const W=d.state.shadowsArray;q.render(W,v,N),St===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,O=g.transmissive;if(d.setupLights(),N.isArrayCamera){const vt=N.cameras;if(O.length>0)for(let lt=0,J=vt.length;lt<J;lt++){const gt=vt[lt];jt(X,O,v,gt)}ue&&j.render(v);for(let lt=0,J=vt.length;lt<J;lt++){const gt=vt[lt];ie(g,v,gt,gt.viewport)}}else O.length>0&&jt(X,O,v,N),ue&&j.render(v),ie(g,v,N);H!==null&&I===0&&(T.updateMultisampleRenderTarget(H),T.updateRenderTargetMipmap(H)),v.isScene===!0&&v.onAfterRender(E,v,N),yt.resetDefaultState(),b=-1,S=null,A.pop(),A.length>0?(d=A[A.length-1],St===!0&&G.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,D.pop(),D.length>0?g=D[D.length-1]:g=null};function Vt(v,N,W,X){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||at.intersectsSprite(v)){X&&Kt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Gt);const lt=C.update(v),J=v.material;J.visible&&g.push(v,lt,J,W,Kt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||at.intersectsObject(v))){const lt=C.update(v),J=v.material;if(X&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Kt.copy(v.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Kt.copy(lt.boundingSphere.center)),Kt.applyMatrix4(v.matrixWorld).applyMatrix4(Gt)),Array.isArray(J)){const gt=lt.groups;for(let It=0,Dt=gt.length;It<Dt;It++){const Et=gt[It],Ft=J[Et.materialIndex];Ft&&Ft.visible&&g.push(v,lt,Ft,W,Kt.z,Et)}}else J.visible&&g.push(v,lt,J,W,Kt.z,null)}}const vt=v.children;for(let lt=0,J=vt.length;lt<J;lt++)Vt(vt[lt],N,W,X)}function ie(v,N,W,X){const O=v.opaque,vt=v.transmissive,lt=v.transparent;d.setupLightsView(W),St===!0&&G.setGlobalState(E.clippingPlanes,W),X&&Nt.viewport(F.copy(X)),O.length>0&&ce(O,N,W),vt.length>0&&ce(vt,N,W),lt.length>0&&ce(lt,N,W),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function jt(v,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new bi(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Tr:$n,minFilter:yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));const vt=d.state.transmissionRenderTarget[X.id],lt=X.viewport||F;vt.setSize(lt.z*E.transmissionResolutionScale,lt.w*E.transmissionResolutionScale);const J=E.getRenderTarget();E.setRenderTarget(vt),E.getClearColor(dt),pt=E.getClearAlpha(),pt<1&&E.setClearColor(16777215,.5),E.clear(),ue&&j.render(W);const gt=E.toneMapping;E.toneMapping=ai;const It=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),St===!0&&G.setGlobalState(E.clippingPlanes,X),ce(v,W,X),T.updateMultisampleRenderTarget(vt),T.updateRenderTargetMipmap(vt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let Et=0,Ft=N.length;Et<Ft;Et++){const qt=N[Et],pe=qt.object,le=qt.geometry,kt=qt.material,Lt=qt.group;if(kt.side===wn&&pe.layers.test(X.layers)){const ye=kt.side;kt.side=fn,kt.needsUpdate=!0,he(pe,W,X,le,kt,Lt),kt.side=ye,kt.needsUpdate=!0,Dt=!0}}Dt===!0&&(T.updateMultisampleRenderTarget(vt),T.updateRenderTargetMipmap(vt))}E.setRenderTarget(J),E.setClearColor(dt,pt),It!==void 0&&(X.viewport=It),E.toneMapping=gt}function ce(v,N,W){const X=N.isScene===!0?N.overrideMaterial:null;for(let O=0,vt=v.length;O<vt;O++){const lt=v[O],J=lt.object,gt=lt.geometry,It=X===null?lt.material:X,Dt=lt.group;J.layers.test(W.layers)&&he(J,N,W,gt,It,Dt)}}function he(v,N,W,X,O,vt){v.onBeforeRender(E,N,W,X,O,vt),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(E,N,W,X,v,vt),O.transparent===!0&&O.side===wn&&O.forceSinglePass===!1?(O.side=fn,O.needsUpdate=!0,E.renderBufferDirect(W,N,X,O,v,vt),O.side=oi,O.needsUpdate=!0,E.renderBufferDirect(W,N,X,O,v,vt),O.side=wn):E.renderBufferDirect(W,N,X,O,v,vt),v.onAfterRender(E,N,W,X,O,vt)}function re(v,N,W){N.isScene!==!0&&(N=Jt);const X=Ot.get(v),O=d.state.lights,vt=d.state.shadowsArray,lt=O.state.version,J=$.getParameters(v,O.state,vt,N,W),gt=$.getProgramCacheKey(J);let It=X.programs;X.environment=v.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(v.isMeshStandardMaterial?M:h).get(v.envMap||X.environment),X.envMapRotation=X.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,It===void 0&&(v.addEventListener("dispose",xt),It=new Map,X.programs=It);let Dt=It.get(gt);if(Dt!==void 0){if(X.currentProgram===Dt&&X.lightsStateVersion===lt)return Be(v,J),Dt}else J.uniforms=$.getUniforms(v),v.onBeforeCompile(J,E),Dt=$.acquireProgram(J,gt),It.set(gt,Dt),X.uniforms=J.uniforms;const Et=X.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Et.clippingPlanes=G.uniform),Be(v,J),X.needsLights=Kn(v),X.lightsStateVersion=lt,X.needsLights&&(Et.ambientLightColor.value=O.state.ambient,Et.lightProbe.value=O.state.probe,Et.directionalLights.value=O.state.directional,Et.directionalLightShadows.value=O.state.directionalShadow,Et.spotLights.value=O.state.spot,Et.spotLightShadows.value=O.state.spotShadow,Et.rectAreaLights.value=O.state.rectArea,Et.ltc_1.value=O.state.rectAreaLTC1,Et.ltc_2.value=O.state.rectAreaLTC2,Et.pointLights.value=O.state.point,Et.pointLightShadows.value=O.state.pointShadow,Et.hemisphereLights.value=O.state.hemi,Et.directionalShadowMap.value=O.state.directionalShadowMap,Et.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Et.spotShadowMap.value=O.state.spotShadowMap,Et.spotLightMatrix.value=O.state.spotLightMatrix,Et.spotLightMap.value=O.state.spotLightMap,Et.pointShadowMap.value=O.state.pointShadowMap,Et.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Dt,X.uniformsList=null,Dt}function Ee(v){if(v.uniformsList===null){const N=v.currentProgram.getUniforms();v.uniformsList=ms.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function Be(v,N){const W=Ot.get(v);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function en(v,N,W,X,O){N.isScene!==!0&&(N=Jt),T.resetTextureUnits();const vt=N.fog,lt=X.isMeshStandardMaterial?N.environment:null,J=H===null?E.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:nr,gt=(X.isMeshStandardMaterial?M:h).get(X.envMap||lt),It=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Dt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Et=!!W.morphAttributes.position,Ft=!!W.morphAttributes.normal,qt=!!W.morphAttributes.color;let pe=ai;X.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(pe=E.toneMapping);const le=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,kt=le!==void 0?le.length:0,Lt=Ot.get(X),ye=d.state.lights;if(St===!0&&(Ut===!0||v!==S)){const Ve=v===S&&X.id===b;G.setState(X,v,Ve)}let Qt=!1;X.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==ye.state.version||Lt.outputColorSpace!==J||O.isBatchedMesh&&Lt.batching===!1||!O.isBatchedMesh&&Lt.batching===!0||O.isBatchedMesh&&Lt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Lt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Lt.instancing===!1||!O.isInstancedMesh&&Lt.instancing===!0||O.isSkinnedMesh&&Lt.skinning===!1||!O.isSkinnedMesh&&Lt.skinning===!0||O.isInstancedMesh&&Lt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Lt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Lt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Lt.instancingMorph===!1&&O.morphTexture!==null||Lt.envMap!==gt||X.fog===!0&&Lt.fog!==vt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==G.numPlanes||Lt.numIntersection!==G.numIntersection)||Lt.vertexAlphas!==It||Lt.vertexTangents!==Dt||Lt.morphTargets!==Et||Lt.morphNormals!==Ft||Lt.morphColors!==qt||Lt.toneMapping!==pe||Lt.morphTargetsCount!==kt)&&(Qt=!0):(Qt=!0,Lt.__version=X.version);let Ge=Lt.currentProgram;Qt===!0&&(Ge=re(X,N,O));let Re=!1,ve=!1,un=!1;const ge=Ge.getUniforms(),Ne=Lt.uniforms;if(Nt.useProgram(Ge.program)&&(Re=!0,ve=!0,un=!0),X.id!==b&&(b=X.id,ve=!0),Re||S!==v){Nt.buffers.depth.getReversed()?(Tt.copy(v.projectionMatrix),Vu(Tt),Hu(Tt),ge.setValue(L,"projectionMatrix",Tt)):ge.setValue(L,"projectionMatrix",v.projectionMatrix),ge.setValue(L,"viewMatrix",v.matrixWorldInverse);const Te=ge.map.cameraPosition;Te!==void 0&&Te.setValue(L,Xt.setFromMatrixPosition(v.matrixWorld)),$t.logarithmicDepthBuffer&&ge.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ge.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,ve=!0,un=!0)}if(O.isSkinnedMesh){ge.setOptional(L,O,"bindMatrix"),ge.setOptional(L,O,"bindMatrixInverse");const Ve=O.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),ge.setValue(L,"boneTexture",Ve.boneTexture,T))}O.isBatchedMesh&&(ge.setOptional(L,O,"batchingTexture"),ge.setValue(L,"batchingTexture",O._matricesTexture,T),ge.setOptional(L,O,"batchingIdTexture"),ge.setValue(L,"batchingIdTexture",O._indirectTexture,T),ge.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&ge.setValue(L,"batchingColorTexture",O._colorsTexture,T));const ze=W.morphAttributes;if((ze.position!==void 0||ze.normal!==void 0||ze.color!==void 0)&&ot.update(O,W,Ge),(ve||Lt.receiveShadow!==O.receiveShadow)&&(Lt.receiveShadow=O.receiveShadow,ge.setValue(L,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ne.envMap.value=gt,Ne.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(Ne.envMapIntensity.value=N.environmentIntensity),ve&&(ge.setValue(L,"toneMappingExposure",E.toneMappingExposure),Lt.needsLights&&be(Ne,un),vt&&X.fog===!0&&z.refreshFogUniforms(Ne,vt),z.refreshMaterialUniforms(Ne,X,nt,_t,d.state.transmissionRenderTarget[v.id]),ms.upload(L,Ee(Lt),Ne,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ms.upload(L,Ee(Lt),Ne,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ge.setValue(L,"center",O.center),ge.setValue(L,"modelViewMatrix",O.modelViewMatrix),ge.setValue(L,"normalMatrix",O.normalMatrix),ge.setValue(L,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ve=X.uniformsGroups;for(let Te=0,Ai=Ve.length;Te<Ai;Te++){const Dn=Ve[Te];P.update(Dn,Ge),P.bind(Dn,Ge)}}return Ge}function be(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function Kn(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(v,N,W){Ot.get(v.texture).__webglTexture=N,Ot.get(v.depthTexture).__webglTexture=W;const X=Ot.get(v);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,N){const W=Ot.get(v);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0};const yn=L.createFramebuffer();this.setRenderTarget=function(v,N=0,W=0){H=v,U=N,I=W;let X=!0,O=null,vt=!1,lt=!1;if(v){const gt=Ot.get(v);if(gt.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(gt.__webglFramebuffer===void 0)T.setupRenderTarget(v);else if(gt.__hasExternalTextures)T.rebindTextures(v,Ot.get(v.texture).__webglTexture,Ot.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Et=v.depthTexture;if(gt.__boundDepthTexture!==Et){if(Et!==null&&Ot.has(Et)&&(v.width!==Et.image.width||v.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(v)}}const It=v.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(lt=!0);const Dt=Ot.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Dt[N])?O=Dt[N][W]:O=Dt[N],vt=!0):v.samples>0&&T.useMultisampledRTT(v)===!1?O=Ot.get(v).__webglMultisampledFramebuffer:Array.isArray(Dt)?O=Dt[W]:O=Dt,F.copy(v.viewport),st.copy(v.scissor),tt=v.scissorTest}else F.copy(zt).multiplyScalar(nt).floor(),st.copy(ne).multiplyScalar(nt).floor(),tt=_e;if(W!==0&&(O=yn),Nt.bindFramebuffer(L.FRAMEBUFFER,O)&&X&&Nt.drawBuffers(v,O),Nt.viewport(F),Nt.scissor(st),Nt.setScissorTest(tt),vt){const gt=Ot.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,gt.__webglTexture,W)}else if(lt){const gt=Ot.get(v.texture),It=N;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.__webglTexture,W,It)}else if(v!==null&&W!==0){const gt=Ot.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,gt.__webglTexture,W)}b=-1},this.readRenderTargetPixels=function(v,N,W,X,O,vt,lt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let J=Ot.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(J=J[lt]),J){Nt.bindFramebuffer(L.FRAMEBUFFER,J);try{const gt=v.texture,It=gt.format,Dt=gt.type;if(!$t.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-X&&W>=0&&W<=v.height-O&&L.readPixels(N,W,X,O,ft.convert(It),ft.convert(Dt),vt)}finally{const gt=H!==null?Ot.get(H).__webglFramebuffer:null;Nt.bindFramebuffer(L.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(v,N,W,X,O,vt,lt){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let J=Ot.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(J=J[lt]),J){const gt=v.texture,It=gt.format,Dt=gt.type;if(!$t.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=v.width-X&&W>=0&&W<=v.height-O){Nt.bindFramebuffer(L.FRAMEBUFFER,J);const Et=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Et),L.bufferData(L.PIXEL_PACK_BUFFER,vt.byteLength,L.STREAM_READ),L.readPixels(N,W,X,O,ft.convert(It),ft.convert(Dt),0);const Ft=H!==null?Ot.get(H).__webglFramebuffer:null;Nt.bindFramebuffer(L.FRAMEBUFFER,Ft);const qt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await zu(L,qt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Et),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,vt),L.deleteBuffer(Et),L.deleteSync(qt),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,N=null,W=0){v.isTexture!==!0&&(qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,v=arguments[1]);const X=Math.pow(2,-W),O=Math.floor(v.image.width*X),vt=Math.floor(v.image.height*X),lt=N!==null?N.x:0,J=N!==null?N.y:0;T.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,lt,J,O,vt),Nt.unbindTexture()};const _n=L.createFramebuffer(),vn=L.createFramebuffer();this.copyTextureToTexture=function(v,N,W=null,X=null,O=0,vt=null){v.isTexture!==!0&&(qi("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,v=arguments[1],N=arguments[2],vt=arguments[3]||0,W=null),vt===null&&(O!==0?(qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=O,O=0):vt=0);let lt,J,gt,It,Dt,Et,Ft,qt,pe;const le=v.isCompressedTexture?v.mipmaps[vt]:v.image;if(W!==null)lt=W.max.x-W.min.x,J=W.max.y-W.min.y,gt=W.isBox3?W.max.z-W.min.z:1,It=W.min.x,Dt=W.min.y,Et=W.isBox3?W.min.z:0;else{const ze=Math.pow(2,-O);lt=Math.floor(le.width*ze),J=Math.floor(le.height*ze),v.isDataArrayTexture?gt=le.depth:v.isData3DTexture?gt=Math.floor(le.depth*ze):gt=1,It=0,Dt=0,Et=0}X!==null?(Ft=X.x,qt=X.y,pe=X.z):(Ft=0,qt=0,pe=0);const kt=ft.convert(N.format),Lt=ft.convert(N.type);let ye;N.isData3DTexture?(T.setTexture3D(N,0),ye=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),ye=L.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),ye=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Qt=L.getParameter(L.UNPACK_ROW_LENGTH),Ge=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Re=L.getParameter(L.UNPACK_SKIP_PIXELS),ve=L.getParameter(L.UNPACK_SKIP_ROWS),un=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,le.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,It),L.pixelStorei(L.UNPACK_SKIP_ROWS,Dt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Et);const ge=v.isDataArrayTexture||v.isData3DTexture,Ne=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){const ze=Ot.get(v),Ve=Ot.get(N),Te=Ot.get(ze.__renderTarget),Ai=Ot.get(Ve.__renderTarget);Nt.bindFramebuffer(L.READ_FRAMEBUFFER,Te.__webglFramebuffer),Nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Dn=0;Dn<gt;Dn++)ge&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ot.get(v).__webglTexture,O,Et+Dn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ot.get(N).__webglTexture,vt,pe+Dn)),L.blitFramebuffer(It,Dt,lt,J,Ft,qt,lt,J,L.DEPTH_BUFFER_BIT,L.NEAREST);Nt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||Ot.has(v)){const ze=Ot.get(v),Ve=Ot.get(N);Nt.bindFramebuffer(L.READ_FRAMEBUFFER,_n),Nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,vn);for(let Te=0;Te<gt;Te++)ge?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ze.__webglTexture,O,Et+Te):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ze.__webglTexture,O),Ne?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ve.__webglTexture,vt,pe+Te):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ve.__webglTexture,vt),O!==0?L.blitFramebuffer(It,Dt,lt,J,Ft,qt,lt,J,L.COLOR_BUFFER_BIT,L.NEAREST):Ne?L.copyTexSubImage3D(ye,vt,Ft,qt,pe+Te,It,Dt,lt,J):L.copyTexSubImage2D(ye,vt,Ft,qt,It,Dt,lt,J);Nt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ne?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(ye,vt,Ft,qt,pe,lt,J,gt,kt,Lt,le.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(ye,vt,Ft,qt,pe,lt,J,gt,kt,le.data):L.texSubImage3D(ye,vt,Ft,qt,pe,lt,J,gt,kt,Lt,le):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,vt,Ft,qt,lt,J,kt,Lt,le.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,vt,Ft,qt,le.width,le.height,kt,le.data):L.texSubImage2D(L.TEXTURE_2D,vt,Ft,qt,lt,J,kt,Lt,le);L.pixelStorei(L.UNPACK_ROW_LENGTH,Qt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ge),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Re),L.pixelStorei(L.UNPACK_SKIP_ROWS,ve),L.pixelStorei(L.UNPACK_SKIP_IMAGES,un),vt===0&&N.generateMipmaps&&L.generateMipmap(ye),Nt.unbindTexture()},this.copyTextureToTexture3D=function(v,N,W=null,X=null,O=0){return v.isTexture!==!0&&(qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,v=arguments[2],N=arguments[3],O=arguments[4]||0),qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,N,W,X,O)},this.initRenderTarget=function(v){Ot.get(v).__webglFramebuffer===void 0&&T.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?T.setTextureCube(v,0):v.isData3DTexture?T.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?T.setTexture2DArray(v,0):T.setTexture2D(v,0),Nt.unbindTexture()},this.resetState=function(){U=0,I=0,H=null,Nt.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}}/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=(i,t,e=[])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",i);return Object.keys(t).forEach(r=>{n.setAttribute(r,String(t[r]))}),e.length&&e.forEach(r=>{const s=El(...r);n.appendChild(s)}),n};var xg=([i,t,e])=>El(i,t,e);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=i=>Array.from(i.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),Sg=i=>typeof i=="string"?i:!i||!i.class?"":i.class&&typeof i.class=="string"?i.class.split(" "):i.class&&Array.isArray(i.class)?i.class:"",yg=i=>i.flatMap(Sg).map(e=>e.trim()).filter(Boolean).filter((e,n,r)=>r.indexOf(e)===n).join(" "),Eg=i=>i.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,n)=>e.toUpperCase()+n.toLowerCase()),Pc=(i,{nameAttr:t,icons:e,attrs:n})=>{var _;const r=i.getAttribute(t);if(r==null)return;const s=Eg(r),a=e[s];if(!a)return console.warn(`${i.outerHTML} icon name was not found in the provided icons object.`);const o=Mg(i),[c,u,l]=a,f={...u,"data-lucide":r,...n,...o},p=yg(["lucide",`lucide-${r}`,o,n]);p&&Object.assign(f,{class:p});const m=xg([c,f,l]);return(_=i.parentNode)==null?void 0:_.replaceChild(m,i)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=["svg",So,[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=["svg",So,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=["svg",So,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=({icons:i={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(i).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${t}]`);if(Array.from(n).forEach(r=>Pc(r,{nameAttr:t,icons:i,attrs:e})),t==="data-lucide"){const r=document.querySelectorAll("[icon-name]");r.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(r).forEach(s=>Pc(s,{nameAttr:"icon-name",icons:i,attrs:e})))}};function Dc(i,t,e,n){return Math.sin(e*Math.PI*i)*Math.sin(n*Math.PI*t)-Math.sin(n*Math.PI*i)*Math.sin(e*Math.PI*t)}function bg(i,t,e,n,r,s){return Math.sin(n*Math.PI*i)*Math.sin(r*Math.PI*t)+Math.sin(r*Math.PI*t)*Math.sin(s*Math.PI*e)+Math.sin(s*Math.PI*e)*Math.sin(n*Math.PI*i)}const gs=30,In=6.4,tn=10.733,ws=16.167,Ue=ws,on=24.6,Tg=Math.round(on*gs),Sr=4.3,Ag=In,Lc=9.94,Ic=[[0,1],[0,2],[0,3]],wg=.62,Rl=.84,Cl=on-Ue,ha=[{start:0,end:1.35,nodes:[7,0,2,5]},{start:1.35,end:2.45,nodes:[3,1,4,10]},{start:2.45,end:3.45,nodes:[7,5,6,11]},{start:3.45,end:Sr,nodes:[3,8,9,10]},{start:Sr,end:on,nodes:[7,0,2,5]}],Rg=[{start:.14,end:2,text:"很久以前，宇宙是一锅"},{start:2,end:4.3,text:"滚烫的等离子体——"},{start:4.3,end:6.38,text:"声波，在其中来回震荡。"},{start:7.28,end:9.94,text:"三十八万年后，一切忽然"},{start:9.94,end:10.733,text:"安静。"},{start:10.733,end:12.18,text:"六合乍裂——那声波"},{start:12.18,end:14.8,text:"就此被冻结在黑"},{start:14.8,end:15.4,text:"暗深处。"},{start:16.14,end:18.32,text:"它没有消失，只是化作一道"},{start:18.32,end:20.4,text:"极淡的印记，悄悄"},{start:20.4,end:22.36,text:"写进了星系与星系"},{start:22.36,end:23.66,text:"之间的距离里。"}];function Cg(i){var t;return((t=Rg.find(e=>i>=e.start&&i<e.end))==null?void 0:t.text)??""}function Uc(i){return ha.find(t=>i>=t.start&&i<t.end)??ha[ha.length-1]}function Pg(i,t,e,n){const r=Math.floor(Math.max(0,i)/.55),s=new Set([t[r%t.length]]);return r%3===1&&s.add(t[(r+2)%t.length]),r%4===2&&s.add((r*5+1)%e),{main:[...s],minor:r%2===0?r*3%n:null}}function Dg(i){return An(i,.85,1.6)+An(i,2.75,3.55)}function An(i,t,e){const n=Math.min(1,Math.max(0,(i-t)/(e-t)));return n*n*(3-2*n)}function Nc(i){if(i<Sr||i>on)return{active:!1,progress:0,radius:0};const t=Math.min(1,(i-Sr)/(Ag-Sr));return{active:!0,progress:t,radius:.06+Math.sin(t*Math.PI)*.03}}function Fc(i){const t=Math.max(0,i-In),e=tn-In,n=Math.min(e,t),r=n/e,s=1.35,a=Math.exp(-s*n);return{active:i>=In&&i<=tn,progress:r,absorption:r,baryonVelocity:a,silenceBrightness:An(i,Lc,Lc+.14),waveTime:In+(1-a)/s}}function Lg(i){const t=Math.max(0,i-tn),e=ws-tn,n=Math.min(1,t/e),r=Math.max(0,(t-wg)/Rl),s=Math.min(1,r),a=s,o=Math.max(0,r-1),c=An(i,tn+3.8,tn+4.65);return{active:i>=tn&&i<=ws,progress:n,reveal:An(i,tn,tn+.45),pathPosition:s,approachProgress:a,surfaceProgress:o,impactClock:r,completedImpacts:Math.floor(s+1e-9),impactIndex:0,segmentProgress:s>=1?1:s,freeze:c,rippleStrength:1-c,coreStrength:1}}function Ig(i){const t=Math.min(1,Math.max(0,(i-Ue)/Cl));return t*t*(3-2*t)}function Ug(i){const t=Math.max(0,i-Ue),n=Math.min(1,t/Cl),r=An(i,Ue+.28,Ue+2.2),s=i>=Ue?1:0,a=An(i,Ue+.72,Ue+2.72),o=.35+.65*a,c=An(i,Ue+1.25,Ue+4.8),u=An(i,Ue+2.15,Ue+4.1),l=An(i,Ue+.9,on-.35),f=Ig(i);return{active:i>=Ue&&i<=on,progress:n,reveal:An(i,Ue,Ue+.72),constellationReveal:r,lineReveal:s,projectionMorph:a,flatLineOpacity:.78*(1-.35*f),depthLineOpacity:o,auxiliaryMorph:a,imprintFade:c,distanceReveal:u,parallaxProgress:l,morphProgress:f}}function Ng(i){const e=Math.min(1,Math.max(0,i))*Math.PI*2,n=440+Math.sin(e)*20,r=Math.sin(e-.7)*.16+Math.sin(e*2+.3)*.04;return{sourceFrequency:n,velocityRatio:r,observedFrequency:n/(1-r)}}const rn=[16777180,16762677,16741400,16723724,9245191],_s=12183295,ss=new Bt(_s),Oc=new Bt(16777215),da=new Bt(12907477),Hn=new Bt,fa=4.2,ro={width:1220,height:896},Bc=7.2/ro.height,zc=[ro.width/2,ro.height/2],ii={meissa:.56,betelgeuse:1.42,bellatrix:2.28,mintaka:-1.55,alnilam:-1.86,alnitak:-1.34,rigel:.58,saiph:.92};function Ke([i,t],e){return[(i-zc[0])*Bc,(zc[1]-t)*Bc,e]}const Je={betelgeuse:[380,298],bellatrix:[327,384],meissa:[612,205],mintaka:[604,476],alnilam:[578,493],alnitak:[558,529],rigel:[692,657],saiph:[456,699]},fe={betelgeuse:Ke(Je.betelgeuse,ii.betelgeuse),bellatrix:Ke(Je.bellatrix,ii.bellatrix),clubTip:Ke(Je.meissa,ii.meissa),beltRight:Ke(Je.mintaka,ii.mintaka),beltMiddle:Ke(Je.alnilam,ii.alnilam),beltLeft:Ke(Je.alnitak,ii.alnitak),rigel:Ke(Je.rigel,ii.rigel),saiph:Ke(Je.saiph,ii.saiph)},Ae={betelgeuse:Ke(Je.betelgeuse,.08),bellatrix:Ke(Je.bellatrix,.08),clubTip:Ke(Je.meissa,.08),beltRight:Ke(Je.mintaka,.08),beltMiddle:Ke(Je.alnilam,.08),beltLeft:Ke(Je.alnitak,.08),rigel:Ke(Je.rigel,.08),saiph:Ke(Je.saiph,.08)},as=[{label:"参宿四",latin:"BETELGEUSE",position:fe.betelgeuse,scale:.22,brightness:1.6,color:16754258},{label:"参宿五",latin:"BELLATRIX",position:fe.bellatrix,scale:.18,brightness:1.5,color:14017791},{label:"觜宿一",latin:"MEISSA",position:fe.clubTip,scale:.15,brightness:1.4,color:14543359},{label:"参宿三",latin:"MINTAKA",position:fe.beltRight,scale:.16,brightness:1.45,color:14280703},{label:"参宿二",latin:"ALNILAM",position:fe.beltMiddle,scale:.17,brightness:1.5,color:15003647},{label:"参宿一",latin:"ALNITAK",position:fe.beltLeft,scale:.16,brightness:1.45,color:14543359},{label:"参宿七",latin:"RIGEL",position:fe.rigel,scale:.22,brightness:1.6,color:13361919},{label:"参宿六",latin:"SAIPH",position:fe.saiph,scale:.16,brightness:1.45,color:13360383}],Fg=[{emphasis:1.55,points:[fe.clubTip,fe.betelgeuse]},{emphasis:1.55,points:[fe.clubTip,fe.bellatrix]},{emphasis:1.35,points:[fe.betelgeuse,fe.bellatrix]},{emphasis:1.35,points:[fe.betelgeuse,fe.beltRight]},{emphasis:1.45,points:[fe.bellatrix,fe.beltLeft]},{emphasis:.72,points:[fe.beltLeft,fe.beltMiddle]},{emphasis:.72,points:[fe.beltMiddle,fe.beltRight]},{emphasis:1.55,points:[fe.beltLeft,fe.saiph]},{emphasis:1.55,points:[fe.beltRight,fe.rigel]}],Og=[{emphasis:1.55,points:[Ae.clubTip,Ae.betelgeuse]},{emphasis:1.55,points:[Ae.clubTip,Ae.bellatrix]},{emphasis:1.35,points:[Ae.betelgeuse,Ae.bellatrix]},{emphasis:1.35,points:[Ae.betelgeuse,Ae.beltRight]},{emphasis:1.45,points:[Ae.bellatrix,Ae.beltLeft]},{emphasis:.72,points:[Ae.beltLeft,Ae.beltMiddle]},{emphasis:.72,points:[Ae.beltMiddle,Ae.beltRight]},{emphasis:1.55,points:[Ae.beltLeft,Ae.saiph]},{emphasis:1.55,points:[Ae.beltRight,Ae.rigel]}],Bg=new Set([0,1,2]),zg=new Set([5,6,7,8]),os=new w(-3.35,-.12,-4.1),Xi={betelgeuse:{start:Ae.betelgeuse,target:fe.betelgeuse},bellatrix:{start:Ae.bellatrix,target:fe.bellatrix},meissa:{start:Ae.clubTip,target:fe.clubTip},mintaka:{start:Ae.beltRight,target:fe.beltRight},alnilam:{start:Ae.beltMiddle,target:fe.beltMiddle},alnitak:{start:Ae.beltLeft,target:fe.beltLeft},rigel:{start:Ae.rigel,target:fe.rigel},saiph:{start:Ae.saiph,target:fe.saiph}},hn=document.querySelector("#narration"),so=document.querySelector("#scene"),Vg=document.querySelector("#deep-sky-background"),gr=document.querySelector("#star-canvas"),Gn=gr.getContext("2d"),pa=document.querySelector("#labels"),Hg=document.querySelector("#subtitle"),Gg=document.querySelector("#caption"),kg=document.querySelector("#timecode"),cs=document.querySelector("#play"),Wg=document.querySelector("#reset"),Xg=document.querySelector(".eyebrow"),qg=document.querySelector(".title-sub"),Vc=document.querySelector("#epoch-marker"),Yg=document.querySelector("#baryon-velocity"),Hc=document.querySelector("#impact-marker"),$g=document.querySelector("#impact-count"),ls=document.querySelector("#wave-equation"),Zg=document.querySelector("#wave-equation-path"),Kg=document.querySelector("#wave-f0"),Jg=document.querySelector("#wave-v"),jg=document.querySelector("#wave-fp");wl({icons:{Play:Tl,Pause:bl,RotateCcw:Al}});const Mi=new vg({canvas:so,alpha:!0,antialias:!0,powerPreference:"high-performance"});Mi.setClearColor(0,0);Mi.outputColorSpace=je;const yr=new uh;yr.fog=new go(132103,.006);const dn=new Mn(43,1,.1,100);dn.position.set(0,.1,12.5);dn.lookAt(0,0,0);const Xe=new Ie;yr.add(Xe);async function Qg(){const i=g(),t=await D(),e=H();Xe.add(e);const n=b();Xe.add(n);const r=[{label:"太阳",latin:"SUN",position:[-3.35,1.42,.4],radius:.62,color:rn[1],spin:.42,phase:.2},{label:"木星",latin:"JUPITER",position:[-1.82,-1.55,.5],radius:.56,color:rn[2],spin:-.36,phase:1.2},{label:"天狼星",latin:"SIRIUS",position:[.18,1.72,-.4],radius:.51,color:rn[0],spin:.32,phase:2.1},{label:"土星",latin:"SATURN",position:[2.16,-1.08,.8],radius:.5,color:rn[2],spin:.29,phase:1.6},{label:"北极星",latin:"POLARIS",position:[3.18,1.92,-.3],radius:.4,color:rn[0],spin:-.25,phase:.4},{label:"火星",latin:"MARS",position:[1.16,.08,1.05],radius:.42,color:rn[3],spin:.48,phase:2.8},{label:"参宿四",latin:"BETELGEUSE",position:[-3.28,-1.9,-.8],radius:.55,color:rn[3],spin:-.31,phase:2.7},{label:"昴星团",latin:"PLEIADES",position:[-.74,.05,-1.22],radius:.64,color:rn[0],spin:.39,phase:1.9,shape:"chladni",modes:[2,3,4],boundary:"volume",network:!0},{label:"金星",latin:"VENUS",position:[-.12,-2.55,-.95],radius:.44,color:rn[1],spin:-.44,phase:.9},{label:"海王星",latin:"NEPTUNE",position:[3.62,-2.02,.58],radius:.46,color:rn[2],spin:.35,phase:2.4},{label:"月球",latin:"MOON",position:[-4.02,.05,-1.2],radius:.3,color:rn[1],spin:-.52,phase:1.3},{label:"脉冲星",latin:"PULSAR",position:[3.78,.44,-1.48],radius:.5,color:14478591,spin:.7,phase:3.1,shape:"chladni",modes:[2,3,4],boundary:"volume",network:!0}],s=r.map((h,M)=>F(h,M));s.forEach(h=>Xe.add(h.group));const a=[{label:"织女星",latin:"VEGA",position:[-4.35,2.42,-1.7],scale:.12},{label:"牛郎星",latin:"ALTAIR",position:[-2.15,2.68,-1.25],scale:.1},{label:"参宿七",latin:"RIGEL",position:[1.35,2.55,-2.1],scale:.11},{label:"五车二",latin:"CAPELLA",position:[4.35,2.35,-1.35],scale:.1},{label:"毕宿五",latin:"ALDEBARAN",position:[-4.55,-1.02,-1.8],scale:.09},{label:"角宿一",latin:"SPICA",position:[-2.28,-.18,-2.25],scale:.09},{label:"心宿二",latin:"ANTARES",position:[2.82,.72,-1.95],scale:.11},{label:"老人星",latin:"CANOPUS",position:[4.24,-2.58,-1.55],scale:.1}],o=a.map((h,M)=>pt(h,M));o.forEach(h=>Xe.add(h.group));const c=Ic.map(()=>ct());c.forEach(h=>Xe.add(h));const u=S();yr.add(u.group);const l=_t();Xe.add(l.group);const f=I(i,pa);yr.add(f.group);const p=r.map(h=>{const M=document.createElement("div");return M.className="node-label",M.innerHTML=`${h.label}<small>${h.latin}</small>`,pa.appendChild(M),M}),m=a.map(h=>{const M=document.createElement("div");return M.className="node-label minor-label",M.innerHTML=`${h.label}<small>${h.latin}</small>`,pa.appendChild(M),M});let _=!1,x=-1;function g(){const M=document.createElement("canvas");M.width=64,M.height=64;const y=M.getContext("2d"),R=y.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);R.addColorStop(0,"rgba(255,255,255,1)"),R.addColorStop(.12,"rgba(255,255,255,0.96)"),R.addColorStop(.38,"rgba(255,255,255,0.18)"),R.addColorStop(.68,"rgba(255,255,255,0.02)"),R.addColorStop(1,"rgba(255,255,255,0)"),y.fillStyle=R,y.fillRect(0,0,64,64);const C=new ta(M);return C.colorSpace=je,C}function d(h=16777215,M=256){const y=document.createElement("canvas");y.width=M,y.height=M;const R=y.getContext("2d"),C=M/2,$=new Bt(h),z=Math.round($.r*255),Y=Math.round($.g*255),rt=Math.round($.b*255),G=R.createRadialGradient(C,C,0,C,C,C*.85);G.addColorStop(0,`rgba(${z}, ${Y}, ${rt}, 0.85)`),G.addColorStop(.2,`rgba(${z}, ${Y}, ${rt}, 0.4)`),G.addColorStop(.55,`rgba(${z}, ${Y}, ${rt}, 0.1)`),G.addColorStop(1,"rgba(0, 0, 0, 0)"),R.fillStyle=G,R.fillRect(0,0,M,M),R.save(),R.globalCompositeOperation="screen";const q=R.createLinearGradient(0,C,M,C);q.addColorStop(0,"rgba(255, 255, 255, 0)"),q.addColorStop(.35,`rgba(${z}, ${Y}, ${rt}, 0.5)`),q.addColorStop(.48,"rgba(255, 255, 255, 0.95)"),q.addColorStop(.5,"rgba(255, 255, 255, 1)"),q.addColorStop(.52,"rgba(255, 255, 255, 0.95)"),q.addColorStop(.65,`rgba(${z}, ${Y}, ${rt}, 0.5)`),q.addColorStop(1,"rgba(255, 255, 255, 0)"),R.fillStyle=q,R.fillRect(0,C-2.5,M,5);const j=R.createLinearGradient(C,0,C,M);j.addColorStop(0,"rgba(255, 255, 255, 0)"),j.addColorStop(.35,`rgba(${z}, ${Y}, ${rt}, 0.5)`),j.addColorStop(.48,"rgba(255, 255, 255, 0.95)"),j.addColorStop(.5,"rgba(255, 255, 255, 1)"),j.addColorStop(.52,"rgba(255, 255, 255, 0.95)"),j.addColorStop(.65,`rgba(${z}, ${Y}, ${rt}, 0.5)`),j.addColorStop(1,"rgba(255, 255, 255, 0)"),R.fillStyle=j,R.fillRect(C-2.5,0,5,M);const ot=R.createRadialGradient(C,C,0,C,C,C*.22);ot.addColorStop(0,"rgba(255, 255, 255, 1)"),ot.addColorStop(.4,"rgba(255, 255, 255, 0.95)"),ot.addColorStop(.7,`rgba(${z}, ${Y}, ${rt}, 0.6)`),ot.addColorStop(1,"rgba(0, 0, 0, 0)"),R.fillStyle=ot,R.beginPath(),R.arc(C,C,C*.22,0,Math.PI*2),R.fill(),R.restore();const Q=new ta(y);return Q.colorSpace=je,Q}async function D(){try{const h=await fetch("/chladni-reference.bin");return h.ok?new Float32Array(await h.arrayBuffer()):null}catch{return null}}function A(h,M){const y=new Ch;for(let R=1;R<h.length;R+=1)y.add(new gl(h[R-1],h[R]));return new xo(y,Math.max(3,h.length*3),M,7,!1)}function E(){const y=document.createElement("canvas");y.width=512,y.height=768;const R=y.getContext("2d"),C=et=>{let B=et>>>0;return()=>{B=B+1831565813|0;let k=Math.imul(B^B>>>15,1|B);return k=k+Math.imul(k^k>>>7,61|k)^k,((k^k>>>14)>>>0)/4294967296}},$=(et,B)=>{const k=C(et),it=B+1,K=new Float32Array(it*it);for(let Mt=0;Mt<K.length;Mt+=1)K[Mt]=k();const xt=Mt=>Mt*Mt*Mt*(Mt*(Mt*6-15)+10),mt=(Mt,Z)=>{const ut=(Mt%B+B)%B,bt=(Z%B+B)%B;return K[bt*it+ut]};return(Mt,Z)=>{const ut=Math.floor(Mt),bt=Math.floor(Z),Ct=xt(Mt-ut),Rt=xt(Z-bt),Zt=mt(ut,bt)+(mt(ut+1,bt)-mt(ut,bt))*Ct,Vt=mt(ut,bt+1)+(mt(ut+1,bt+1)-mt(ut,bt+1))*Ct;return Zt+(Vt-Zt)*Rt}},z=(et,B,k,it,K,xt)=>{let mt=.5,Mt=1,Z=0,ut=0;for(let bt=0;bt<it;bt+=1)Z+=mt*et(B*Mt,k*Mt),ut+=mt,mt*=xt,Mt*=K;return Z/ut},Y=$(2026,16),rt=$(8888,8),G=$(9999,8),q=$(777,6),j=et=>.82-.64*et+.07*Math.sin(et*4.5+.3),ot=R.createImageData(512,768),Q=ot.data,ht=[28,25,38],ft=[72,65,84],yt=[135,124,142];for(let et=0;et<768;et+=1){const B=et/767,k=j(B),K=.26*(1+.5*(z(q,B*3.5,.5,3,2,.5)-.5)),xt=Math.sin(B*Math.PI);for(let mt=0;mt<512;mt+=1){const Mt=mt/511,Z=Math.sin(Mt*Math.PI),ut=Math.pow(Z*xt,.65),bt=Mt*6,Ct=B*8,Rt=bt+(z(rt,bt*.6,Ct*.6,3,2,.5)-.5)*1.2,Zt=Ct+(z(G,bt*.6,Ct*.6,3,2,.5)-.5)*1.2;let Vt=z(Y,Rt,Zt,6,2.2,.5);Vt=Math.pow(Math.max(0,Vt),1.35);const ie=(Mt-k)/K,jt=Math.exp(-.55*ie*ie),ce=Math.min(1,Vt*jt);let he,re,Ee;if(ce<.4){const be=ce/.4;he=ht[0]*be,re=ht[1]*be,Ee=ht[2]*be}else if(ce<.78){const be=(ce-.4)/.38;he=ht[0]+(ft[0]-ht[0])*be,re=ht[1]+(ft[1]-ht[1])*be,Ee=ht[2]+(ft[2]-ht[2])*be}else{const be=(ce-.78)/.22;he=ft[0]+(yt[0]-ft[0])*be,re=ft[1]+(yt[1]-ft[1])*be,Ee=ft[2]+(yt[2]-ft[2])*be}const Be=Math.min(.75,ce*1.25)*ut,en=(et*512+mt)*4;Q[en]=Math.round(he),Q[en+1]=Math.round(re),Q[en+2]=Math.round(Ee),Q[en+3]=Math.round(Be*255)}}R.putImageData(ot,0,0);const P=new ta(y);return P.colorSpace=je,P}function V(){const h=new Ie;h.renderOrder=-2;const M=E(),y=new Ze(new We({map:M,transparent:!0,opacity:.68,depthTest:!1,depthWrite:!1,blending:Wt}));y.position.set(-.6,.1,-4.5),y.scale.set(13.5,16.5,1),y.rotation.z=-.58,y.renderOrder=-3,h.add(y);const R=new Ze(new We({map:M,transparent:!0,opacity:.35,depthTest:!1,depthWrite:!1,blending:Wt}));R.position.set(-.2,.3,-3.9),R.scale.set(14.2,17.5,1),R.rotation.z=-.52,R.renderOrder=-2,h.add(R);const C=(q,j)=>{const ot=Math.sin(q*12.9898+j*78.233)*43758.5453;return ot-Math.floor(ot)},$=750,z=[],Y=[];for(let q=0;q<$;q+=1){const j=C(q,40.2),ot=Math.pow(C(q,41.7),1.2)*2.5,Q=2.8-j*6.6,ht=4.5-j*9.3,ft=Q+(C(q,42.9)-.5)*ot,yt=ht+(C(q,44.1)-.5)*ot*1.2,P=-4.8+(C(q,45.4)-.5)*2.8,et=.2+C(q,46.8)*.48;z.push(ft,yt,P),Y.push(et*.88,et*.84,et*1)}const rt=new de;rt.setAttribute("position",new Yt(z,3)),rt.setAttribute("color",new Yt(Y,3));const G=new ke(rt,new sn({map:g(),size:.18,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.35,depthTest:!1,depthWrite:!1,blending:Wt}));return G.renderOrder=-1,h.add(G),h}function U(h,M,y){return h.map(({points:R,emphasis:C},$)=>{const z=R.map(j=>new w(...j)),Y=zg.has($),rt=new _i({color:M==="flat"?Y?4872304:7174290:Y?7440036:12110829,transparent:!0,opacity:0,depthWrite:!1,blending:Wt}),G=new Qe(A(z,.014*C),rt),q=new Qe(A(z,.05*C),new _i({color:M==="flat"?Y?3094860:4609392:Y?4084591:7179705,transparent:!0,opacity:0,depthWrite:!1,blending:Wt}));return G.userData={index:$,glow:q,isUpperTriangle:Bg.has($),isLowerShadow:Y,layerName:M,pathPoints:R,emphasis:C},q.userData.radius=.05*C,y.add(q),y.add(G),G})}function I(h,M){const y=new Ie;y.visible=!1;const R=[],C=[];for(let mt=0;mt<620;mt+=1){const Mt=mt*.61803398875,Z=(Mt*13.7%1-.5)*12.8,ut=(Mt*7.1%1-.5)*7.1,bt=-4.8+Mt*5.3%1*2.7,Ct=.34+mt*17%61/61*.66;R.push(Z,ut,bt),C.push(Ct*.82,Ct*.9,Ct)}const $=new de;$.setAttribute("position",new Yt(R,3)),$.setAttribute("color",new Yt(C,3));const z=new ke($,new sn({map:h,size:.052,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));y.add(z);const Y=V();y.add(Y);const rt=new Map;as.forEach(mt=>{rt.set(mt.color,d(mt.color,256))});const G=d(4943784,128),q=as.map((mt,Mt)=>{const Z=new Ie,ut=rt.get(mt.color),bt=new Ze(new We({map:ut,transparent:!0,opacity:0,depthWrite:!1,blending:Wt}));bt.scale.setScalar(mt.scale*3.8);const Ct=new Ze(new We({map:ut,transparent:!0,opacity:0,depthWrite:!1,blending:Wt}));Ct.scale.setScalar(mt.scale*1.5),Z.add(bt,Ct),Z.position.set(...mt.position),Z.userData={definition:mt,index:Mt,halo:bt,core:Ct,phase:Mt*.73,startPosition:new w(...mt.position)},y.add(Z);const Rt=document.createElement("div");return Rt.className="node-label scene-four-label",Rt.innerHTML=`${mt.label}<small>${mt.latin}</small>`,M.appendChild(Rt),Z.userData.label=Rt,Z}),j=as.map((mt,Mt)=>{const Z=new Ze(new We({map:G,transparent:!0,opacity:0,depthWrite:!1,blending:Wt}));Z.scale.setScalar(mt.scale*1.8);const ut=Xi[mt.latin.toLowerCase()]??Xi[mt.label];return ut?Z.position.set(...ut.start):Z.position.set(...mt.position),Z.userData={definition:mt,index:Mt,phase:Mt*.73},y.add(Z),Z}),ot=U(Og,"flat",y),Q=U(Fg,"depth",y),ht=as[3].position,ft=new de().setFromPoints([new w(...ht),os]),yt=new ic({color:9361844,dashSize:.12,gapSize:.09,transparent:!0,opacity:0,depthWrite:!1,blending:Wt}),P=new bs(ft,yt);P.computeLineDistances(),y.add(P);const et=new qe;et.position.copy(new w(...ht).lerp(os,.52)),y.add(et);const B=document.createElement("div");B.className="node-label scene-four-distance",B.innerHTML="147 Mpc<small>BAO SCALE</small>",M.appendChild(B);const k=new Ie,it=new Ze(new We({map:h,color:7919264,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Wt}));it.scale.setScalar(1.65);const K=new Ze(new We({map:h,color:da,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Wt}));K.scale.setScalar(.62);const xt=[.36,.58,.82].map((mt,Mt)=>{const Z=new Qe(new Ts(mt,mt+.012,64),new _i({color:9298102,transparent:!0,opacity:0,side:wn,depthTest:!1,depthWrite:!1,blending:Wt}));return Z.userData.phase=Mt*.9,k.add(Z),Z});return k.add(it,K),k.position.copy(os),y.add(k),{group:y,backdrop:z,stars:q,flatStars:j,flatLines:ot,depthLines:Q,distanceLine:P,distanceAnchor:et,distanceLabel:B,imprint:k,imprintHalo:it,imprintCore:K,imprintRings:xt,imprintTarget:os.clone()}}function H(){const h=new Ie,M=[{center:[-4.2,1.55,-2.1],spread:[1.45,.85,1.1]},{center:[-1.55,.25,-2.5],spread:[1.3,1.25,1.25]},{center:[2.15,1.45,-2.2],spread:[1.55,.95,1.2]},{center:[4.05,-1.15,-2.5],spread:[1.25,1.05,1.15]},{center:[-.35,-2.15,-2.15],spread:[1.75,.72,1.3]},{center:[-3.55,-1.8,-1.75],spread:[1.15,.92,1.1]}];let y=17;const R=()=>(y=y*16807%2147483647,y/2147483647),C=()=>{const $=Math.max(R(),1e-4);return Math.sqrt(-2*Math.log($))*Math.cos(Math.PI*2*R())};return[{count:1400,size:.042,opacity:.56},{count:560,size:.078,opacity:.72},{count:170,size:.13,opacity:.64}].forEach(($,z)=>{const Y=[],rt=[],G=[],q=[];for(let Q=0;Q<$.count;Q+=1){let ht,ft,yt;if(R()<.82){const B=M[Math.floor(R()*M.length)];ht=B.center[0]+C()*B.spread[0],ft=B.center[1]+C()*B.spread[1],yt=B.center[2]+C()*B.spread[2]}else ht=(R()*2-1)*6.2,ft=(R()*2-1)*3.6,yt=R()*4.5-4;Y.push(oe.clamp(ht,-6.7,6.7),oe.clamp(ft,-3.9,3.9),oe.clamp(yt,-5.2,1.2));const P=.62+R()*.38,et=(Q*37+z*13)%31<2;rt.push(P,P*(et?.9:.16),P*(et?1:.035)),G.push(R()*Math.PI*2),q.push(2.1+R()*1.4)}const j=new de;j.setAttribute("position",new Yt(Y,3)),j.setAttribute("color",new Yt(rt,3)),j.setAttribute("aPhase",new Yt(G,1)),j.setAttribute("aSpeed",new Yt(q,1));const ot=new gn({uniforms:{uTime:{value:0},uSize:{value:$.size*680},uOpacity:{value:$.opacity},uReveal:{value:0},uAbsorbProgress:{value:0},uAbsorbTarget:{value:new w}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Wt,vertexColors:!0});h.add(new ke(j,ot))}),h}function b(){const M=[],y=[],R=new Bt(12144941),C=new Bt(5614016),$=new Bt(7373197);for(let G=0;G<1100;G+=1){const q=G*73%1100/1100,j=G*419%1100/1100,ot=(q*2-1)*6.6+Math.sin(G*1.71)*.12,Q=(j*2-1)*3.65+Math.cos(G*1.13)*.08,ht=-4.2+Math.sin(G*.37)*.7,ft=Math.sin(ot*1.18)+Math.cos(Q*1.76)+Math.sin((ot-Q)*.63),yt=Math.min(1,Math.abs(ft)/2.4),P=$.clone().lerp(ft>=0?R:C,.42+yt*.5),et=.28+yt*.58;M.push(ot,Q,ht),y.push(P.r*et,P.g*et,P.b*et)}const z=new de;z.setAttribute("position",new Yt(M,3)),z.setAttribute("color",new Yt(y,3));const Y=new sn({size:.07,map:i,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Wt,sizeAttenuation:!0}),rt=new ke(z,Y);return rt.visible=!1,rt}function S(){const h=[[-2.2,0,0]],M=new Ie,y=new Bt(16726797),R=new Bt(16763760),C=h.map(($,z)=>{const rt=new Float32Array(1080),G=new Float32Array(360*3),q=new Float32Array(360*3),j=new Float32Array(360*3);for(let J=0;J<360;J+=1){const gt=J*2.39996323+z*.71,It=Math.acos(1-2*((J+.5)/360)),Et=.64*(.94+Math.sin(J*1.73+z)*.04+Math.cos(J*.47)*.025),Ft=Math.cos(gt)*Math.sin(It)*Et,qt=Math.cos(It)*Et,pe=Math.sin(gt)*Math.sin(It)*Et,le=J*3;rt.set([Ft,qt,pe],le),G.set([Ft,qt,pe],le);const kt=1/Math.max(.001,Math.hypot(Ft,qt,pe)),Lt=.08+(J*31+z*17)%23/23*.18;q.set([Ft*kt*Lt+Math.sin(J*.83)*.035,qt*kt*Lt+Math.cos(J*.57)*.025,pe*kt*Lt+Math.sin(J*1.17)*.04],le);const ye=.18+J*13%19/19*.72,Qt=y.clone().lerp(R,ye);j.set([Qt.r,Qt.g,Qt.b],le)}const ot=new Qe(new As(.62,40,28),new gn({uniforms:{uReveal:{value:0},uImpact:{value:0},uScar:{value:0},uPhase:{value:z*1.37}},vertexShader:`
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
        `,transparent:!0,depthWrite:!0}));ot.rotation.set(z*.11,z*.37,z*.08);const Q=new de;Q.setAttribute("position",new we(G,3)),Q.setAttribute("color",new we(j,3));const ht=new ke(Q,new sn({size:.034,map:i,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));ht.rotation.copy(ot.rotation);const ft=new Qe(new As(.78,36,24),new gn({uniforms:{uReveal:{value:0},uImpact:{value:0},uHeat:{value:0},uPhase:{value:z*.83}},vertexShader:`
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
        `,transparent:!0,depthTest:!1,depthWrite:!1,blending:Wt}));ft.renderOrder=-2;const yt=260,P=new Float32Array(yt*3),et=new Float32Array(yt*3);for(let J=0;J<yt;J+=1){const gt=J*2.39996323+z*.51,It=Math.acos(1-2*((J+.5)/yt)),Dt=.72+(J*31+z*7)%29/29*.17,Et=J*3;P.set([Math.cos(gt)*Math.sin(It)*Dt,Math.cos(It)*Dt,Math.sin(gt)*Math.sin(It)*Dt],Et);const Ft=new Bt(16721416).lerp(new Bt(16751154),J*17%23/23*.45);et.set(Ft.toArray(),Et)}const B=new de;B.setAttribute("position",new we(P,3)),B.setAttribute("color",new we(et,3));const k=new ke(B,new sn({size:.052,map:i,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Wt,sizeAttenuation:!0})),it=new w(...$),xt=(z===0?new w(0,0,0):new w(...h[z-1])).sub(it);xt.lengthSq()<.001?xt.set(1,0,0):xt.normalize();const mt=new w(0,1,0).addScaledVector(xt,-xt.y).normalize();mt.lengthSq()<.01&&mt.set(1,0,0);const Mt=xt.clone().cross(mt).normalize(),Z=new Ze(new We({map:i,color:16770992,transparent:!0,opacity:0,depthWrite:!1,blending:Wt}));Z.scale.setScalar(.2),Z.position.copy(xt).multiplyScalar(.642);const ut=new Ze(new We({map:i,color:16773316,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Wt}));ut.position.copy(Z.position),ut.scale.setScalar(.3);const bt=3,Ct=96,Rt=bt*Ct,Zt=new Float32Array(Rt*3),Vt=new Float32Array(Rt),ie=new Float32Array(Rt),jt=new Float32Array(Rt);for(let J=0;J<Rt;J+=1){const gt=Math.floor(J/Ct),Dt=J%Ct/Ct*Math.PI*2+gt*.37,Et=J*3;Zt.set(xt.clone().multiplyScalar(.635).toArray(),Et),Vt[J]=.034+(J*17+z*7)%19/19*.026,jt[J]=Dt}const ce=new de;ce.setAttribute("position",new we(Zt,3)),ce.setAttribute("aSize",new we(Vt,1)),ce.setAttribute("aAlpha",new we(ie,1).setUsage(Ro));const he=new ke(ce,new gn({uniforms:{uColor:{value:new Bt(16766880)},uOpacity:{value:0},uPointScale:{value:180}},vertexShader:`
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
      `,transparent:!0,depthTest:!0,depthWrite:!1,blending:Wt}));he.renderOrder=11,he.frustumCulled=!1;const re=3525,Ee=new Float32Array(re*3),Be=new Float32Array(re*3),en=new Float32Array(re*3),be=new Float32Array(re*3),Kn=new Float32Array(re),yn=new Float32Array(re),_n=new Float32Array(re),vn=new Uint8Array(re),v=new Float32Array(re),N=new Float32Array(re),W=new Float32Array(re);for(let J=0;J<re;J+=1){const gt=J*2.39996323+z*.43,It=(J*47+z*19)%101/101,Dt=It<.38?0:It<.88?1:2,Et=(J*29+z*11)%97/97,Ft=(J*71+z*23)%103/103,qt=Dt===0?.12+Et*.3:Dt===1?.28+Et*1.72:1.2+Et*2.1,pe=Dt===0?.18+Ft**.72*1.08:Dt===1?.06+Ft**.68*2.08:.28+Ft**.62*2.55,le=(J*13+z*5)%31/31,kt=.012+Math.sqrt(le)*.12,Lt=Math.cos(gt)*kt,ye=Math.sin(gt)*kt,Qt=xt.clone().multiplyScalar(.59).addScaledVector(mt,Lt).addScaledVector(Mt,ye),Ge=xt.clone().multiplyScalar(qt).addScaledVector(mt,Math.cos(gt)*pe).addScaledVector(Mt,Math.sin(gt)*pe),Re=J*3;Ee.set(Qt.toArray(),Re),Be.set(Ge.toArray(),Re);const ve=Qt.normalize();en.set(ve.toArray(),Re);const un=(J*23+z*13)%31/31,ge=new Bt(16721416).lerp(new Bt(16773304),un**3.2);be.set(ge.toArray(),Re);const Ne=(J*19+z*5)%43/43;Kn[J]=(Dt===1?.022:.018)+Ne**3*(Dt===2?.075:.095),yn[J]=.35+(J*11+z*17)%37/37*.65,vn[J]=Dt,v[J]=(J*41+z*17)%97/97*(Dt===0?.38:.22),N[J]=Dt===0?2.7+Et*.7:Dt===1?3.2+Et*.8:.7+Et*.5,W[J]=Dt===0?.72+Et*.32:Dt===1?.28+Et*.38:.08+Et*.2}const X=new de;X.setAttribute("position",new we(Ee,3)),X.setAttribute("color",new we(be,3)),X.setAttribute("aSize",new we(Kn,1)),X.setAttribute("aEnergy",new we(yn,1)),X.setAttribute("aAlpha",new we(_n,1).setUsage(Ro));const O=new ke(X,new gn({uniforms:{uOpacity:{value:0},uPointScale:{value:180}},vertexShader:`
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
      `,transparent:!0,depthTest:!0,depthWrite:!1,blending:Wt}));O.renderOrder=12,O.frustumCulled=!1;const vt=new Ie;vt.add(Z,ut,he,O);const lt=new Ie;return lt.add(ft,k,ot,ht,vt),lt.position.set(...$),lt.userData={shell:ot,points:ht,atmosphere:ft,corona:k,core:Z,burst:ut,surfaceEffects:vt,ripple:he,splash:O,basePositions:rt,drift:q,splashVelocities:Be,splashSurfaceDirections:en,splashEnergy:yn,splashTypes:vn,splashDelays:v,splashLifetimes:N,splashSpinDrag:W,contactDirection:xt,tangentA:mt,tangentB:Mt,ripplePhase:jt,surfaceBaseRotation:ot.rotation.clone(),impactSpinOrigin:0,impactCaptured:!1,phase:z*.73},M.add(lt),lt});return M.visible=!1,{group:M,lobes:C,positions:h.map($=>new w(...$))}}function F(h,M){if(h.shape==="chladni"&&h.boundary==="volume")return tt(h,M);if(h.shape==="chladni")return st(h,M);const y=new Ie,R=new Ze(new We({map:i,color:h.color,transparent:!0,opacity:.2,depthWrite:!1,blending:Wt}));R.scale.setScalar(h.radius*2.7),y.add(R);const C=new Ze(new We({map:i,color:h.color,transparent:!0,opacity:.42,depthWrite:!1,blending:Wt}));C.scale.setScalar(h.radius*1.65),y.add(C);const $=new Ze(new We({map:i,color:rn[0],transparent:!0,opacity:.92,depthWrite:!1,blending:Wt}));$.scale.setScalar(h.radius*.68),y.add($);const z=new de,Y=[],rt=[],G=360+M%4*60,q=new Bt(h.color);for(let ht=0;ht<G;ht+=1){const ft=ht%3,yt=ht*2.39996323+h.phase,P=Math.acos(1-2*((ht+.5)/G)),et=h.radius*(.38+ft*.28+.06*Math.sin(ht*1.7+h.phase)),B=.78+.18*Math.sin(ht*.37+h.phase),k=1+.12*Math.sin(yt*2.4+ft);Y.push(Math.cos(yt)*Math.sin(P)*et*k,Math.cos(P)*et*B,Math.sin(yt)*Math.sin(P)*et*.68);const it=new Bt(rn[Math.min(ft+1,rn.length-1)]).lerp(q,.22),K=.7+.38*((Math.sin(yt*1.7)+1)/2);rt.push(it.r*K,it.g*K,it.b*K)}z.setAttribute("position",new Yt(Y,3)),z.setAttribute("color",new Yt(rt,3));const j=new ke(z,new sn({size:.056,map:i,vertexColors:!0,transparent:!0,opacity:.66,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));y.add(j);const ot=new vo(h.radius*.88,.006,4,64),Q=new Qe(ot,new _i({color:h.color,transparent:!0,opacity:.22,blending:Wt,depthWrite:!1}));return Q.rotation.x=Math.PI*.45+h.phase*.1,Q.rotation.z=h.phase,y.add(Q),y.position.set(...h.position),y.userData={...h,halo:R,mantle:C,core:$,particles:j,ring:Q,index:M},{group:y,definition:h}}function st(h,M){const y=new Ie,R=[],C=[],$=new Map,z=76,Y=.115,[rt,G]=h.modes,q=new Bt(h.color),j=new Bt(rn[0]);for(let k=0;k<z;k+=1)for(let it=0;it<z;it+=1){const K=it/(z-1)*2-1,xt=k/(z-1)*2-1,mt=Dc(K,xt,rt,G);if(Math.abs(mt)>Y)continue;const Mt=1-Math.abs(mt)/Y,Z=Math.sin((k*83+it*47+M*29)*.17)*.008,ut=[(K+Z)*h.radius*1.25,(xt-Z*.6)*h.radius*1.25,mt*h.radius*1.7+Math.sin((K-xt)*Math.PI*(rt+G))*h.radius*.035];R.push(...ut),$.set(k*z+it,ut);const bt=q.clone().lerp(j,.28+Mt*.66);C.push(bt.r,bt.g,bt.b)}const ot=new de;ot.setAttribute("position",new Yt(R,3)),ot.setAttribute("color",new Yt(C,3));const Q=new ke(ot,new sn({size:.12,map:i,color:h.color,transparent:!0,opacity:.14,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));y.add(Q);const ht=new ke(ot,new sn({size:.047,map:i,vertexColors:!0,transparent:!0,opacity:.72,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));y.add(ht);let ft=null;if(h.network){const k=[],it=[[0,1],[1,0],[1,1],[1,-1]];$.forEach((xt,mt)=>{const Mt=Math.floor(mt/z),Z=mt%z;it.forEach(([ut,bt])=>{const Ct=$.get((Mt+ut)*z+Z+bt);Ct&&k.push(...xt,...Ct)})});const K=new de;K.setAttribute("position",new Yt(k,3)),ft=new jr(K,new vi({color:h.color,transparent:!0,opacity:.16,depthWrite:!1,blending:Wt})),y.add(ft)}const yt=h.radius*1.3,P=h.boundary==="octagon"?Array.from({length:8},(k,it)=>{const K=Math.PI/8+it*Math.PI/4,xt=yt/Math.cos(Math.PI/8);return new w(Math.cos(K)*xt,Math.sin(K)*xt,0)}):[new w(-yt,-yt,0),new w(yt,-yt,0),new w(yt,yt,0),new w(-yt,yt,0)],et=new de().setFromPoints(P),B=new ph(et,new vi({color:h.color,transparent:!0,opacity:.13,depthWrite:!1,blending:Wt}));return y.add(B),y.position.set(...h.position),y.userData={...h,isChladni:!0,pattern:ht,glow:Q,network:ft,outline:B,index:M},{group:y,definition:h}}function tt(h,M){if(t)return dt(h,M);const y=new Ie,R=[],C=[],$=[],z=[],Y=new Map,[rt,G,q]=h.modes,j=40,ot=h.radius*1.8,Q=new Bt(h.color),ht=new Bt(7439516),ft=new Bt(16774367),yt=Array.from({length:18},(Mt,Z)=>({x:Math.sin(Z*3.71+.8)*.72,y:Math.cos(Z*2.17-.4)*.72,z:Math.sin(Z*1.43+1.9)*.72}));for(let Mt=0;Mt<j;Mt+=1){const Z=Mt/(j-1)*2-1;for(let ut=0;ut<j;ut+=1){const bt=ut/(j-1)*2-1;for(let Ct=0;Ct<j;Ct+=1){const Rt=Ct/(j-1)*2-1;if(Z*Z*.62+bt*bt*.86+Rt*Rt*1.16>1.05)continue;const Vt=Z+Math.sin(bt*Math.PI*1.4+h.phase)*.1+Math.sin(Rt*Math.PI*2.1)*.045,ie=bt+Math.sin(Rt*Math.PI*1.25-h.phase*.4)*.11-Math.sin(Z*Math.PI*1.8)*.04,jt=Rt+Math.sin(Z*Math.PI*1.55+h.phase*.3)*.12+Math.cos(bt*Math.PI*1.9)*.04,ce=bg(Vt,ie,jt,rt,G,q);let he=1/0,re=1/0,Ee=1/0;yt.forEach(v=>{const N=Vt-v.x,W=ie-v.y,X=jt-v.z,O=Math.sqrt(N*N+W*W+X*X);O<he?(Ee=re,re=he,he=O):O<re?(Ee=re,re=O):O<Ee&&(Ee=O)});const Be=Math.exp(-((re-he)**2)*28-(Ee-re)**2*44),en=Math.exp(-Math.abs(ce)*4.2),be=Be*(.56+en*.62);if(be<.55)continue;const Kn=Math.min(1,be*.72+en*.35),yn=Math.sin((Mt*97+ut*57+Ct*31+M*17)*.19)*.008,_n=[(Vt*1.12+ie*.22+ie*jt*.055+yn)*ot,(ie*.92+jt*.12+Math.sin(Vt*Math.PI)*.055-yn*.4)*ot,(jt*.94+Vt*ie*.07)*ot];R.push(..._n),Y.set(Mt*j*j+ut*j+Ct,{point:_n,filamentScore:be});const vn=ht.clone().lerp(Q,.56+Kn*.28).lerp(ft,Kn*.32);C.push(vn.r,vn.g,vn.b)}}}Y.forEach(({point:Mt,filamentScore:Z},ut)=>{const bt=Math.floor(ut/(j*j)),Ct=ut%(j*j),Rt=Math.floor(Ct/j),Zt=Ct%j;[[1,0,0],[0,1,0],[0,0,1]].forEach(([Vt,ie,jt])=>{const ce=(bt+Vt)*j*j+(Rt+ie)*j+Zt+jt,he=Y.get(ce);he&&($.push(...Mt,...he.point),(Z>.76||he.filamentScore>.76)&&z.push(...Mt,...he.point))})}),[{center:[-.72,.86,.14],size:[.52,.18],bend:.18,angle:-.22},{center:[.66,-.72,-.2],size:[.34,.14],bend:-.14,angle:.46}].forEach(Mt=>{const bt=new Map;for(let Ct=0;Ct<9;Ct+=1){const Rt=Ct/8*2-1;for(let Zt=0;Zt<24;Zt+=1){const Vt=Zt/23*2-1;if(Vt*Vt+Rt*Rt*1.45>1)continue;const ie=Dc(Vt,Rt,rt,G),jt=Vt*Mt.size[0],ce=Rt*Mt.size[1],he=Math.cos(Mt.angle),re=Math.sin(Mt.angle),Ee=[(Mt.center[0]+jt*he-ce*re)*ot,(Mt.center[1]+jt*re+ce*he)*ot,(Mt.center[2]+ie*Mt.bend+Vt*Vt*.08)*ot];R.push(...Ee),C.push(Q.r,Q.g,Q.b),bt.set(Ct*24+Zt,Ee)}}bt.forEach((Ct,Rt)=>{const Zt=Math.floor(Rt/24),Vt=Rt%24;[[0,1],[1,0]].forEach(([ie,jt])=>{const ce=bt.get((Zt+ie)*24+Vt+jt);ce&&($.push(...Ct,...ce),z.push(...Ct,...ce))})})});const et=new de;et.setAttribute("position",new Yt(R,3)),et.setAttribute("color",new Yt(C,3));const B=new ke(et,new sn({size:.065,map:i,color:h.color,transparent:!0,opacity:.045,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));y.add(B);const k=new ke(et,new sn({size:.019,map:i,vertexColors:!0,transparent:!0,opacity:.62,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));y.add(k);const it=new de;it.setAttribute("position",new Yt($,3));const K=new jr(it,new vi({color:12242401,transparent:!0,opacity:.24,depthWrite:!1,blending:Wt}));y.add(K);const xt=new de;xt.setAttribute("position",new Yt(z,3));const mt=new jr(xt,new vi({color:16119807,transparent:!0,opacity:.2,depthWrite:!1,blending:Wt}));return y.add(mt),y.position.set(...h.position),y.userData={...h,isChladni:!0,pattern:k,glow:B,network:K,outline:mt,index:M},{group:y,definition:h}}function dt(h,M){const y=new Ie,R=[],C=[],$=t,z=h.radius*2.35,Y=[[40,150,118],[46,190,200],[70,120,235],[182,206,255],[236,182,92],[230,72,96]],rt=Array.from({length:48},(ht,ft)=>{const yt=Y[Math.min(Y.length-1,Math.floor(ft/8))],P=ft%8/7,et=P*P*.72,B=.32+P*.68;return yt.map(k=>Math.min(255,(k*(1-et)+255*et)*B)/255)});for(let ht=0;ht<$.length;ht+=6){const ft=$[ht+3],yt=$[ht+4],P=ft*yt,et=$[ht]*z,B=$[ht+1]*z,k=$[ht+2]*z;R.push(et,B,k);const it=rt[Math.min(47,Math.max(0,Math.round($[ht+5])))]||rt[24],K=.38+P*1.15;C.push(Math.min(1,it[0]*K),Math.min(1,it[1]*K),Math.min(1,it[2]*K))}const G=new de;G.setAttribute("position",new Yt(R,3)),G.setAttribute("color",new Yt(C,3));const q=new ke(G,new sn({size:.045,map:i,color:14412031,transparent:!0,opacity:.11,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));y.add(q);const j=new ke(G,new sn({size:.02,map:i,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));y.add(j);const ot=new de;ot.setAttribute("position",new Yt([],3));const Q=new jr(ot,new vi({color:14477823,transparent:!0,opacity:0,depthWrite:!1,blending:Wt}));return y.add(Q),y.position.set(...h.position),y.userData={...h,isChladni:!0,pattern:j,glow:q,network:null,outline:Q,index:M},{group:y,definition:h}}function pt(h,M){const y=new Ie,R=new Ze(new We({map:i,color:7998466,transparent:!0,opacity:.16,depthWrite:!1,blending:Wt}));R.scale.setScalar(h.scale*3.5),y.add(R);const C=new Ze(new We({map:i,color:16723724,transparent:!0,opacity:.86,depthWrite:!1,blending:Wt}));C.scale.setScalar(h.scale*1.35),y.add(C);const $=[];for(let rt=0;rt<11;rt+=1){const G=rt*2.39996323+M*.47,q=h.scale*(.65+rt%4*.35);$.push(Math.cos(G)*q,Math.sin(G)*q*.62,Math.sin(G*1.7)*q*.35)}const z=new de;z.setAttribute("position",new Yt($,3));const Y=new ke(z,new sn({size:.038,map:i,color:16734751,transparent:!0,opacity:.7,depthWrite:!1,blending:Wt,sizeAttenuation:!0}));return y.add(Y),y.position.set(...h.position),y.userData={halo:R,core:C,companions:Y,phase:M*.73},{group:y,definition:h}}function ct(){const h=new de;h.setAttribute("position",new Yt(new Array(6).fill(0),3));const M=new bs(h,new ic({color:13095167,transparent:!0,opacity:.38,dashSize:.085,gapSize:.065,depthWrite:!1}));return M.frustumCulled=!1,M.computeLineDistances(),M}function _t(){const h=new Ie,M=new Ze(new We({map:i,color:_s,transparent:!0,opacity:.9,depthWrite:!1,blending:Wt}));h.add(M);const y=new Ze(new We({map:i,color:16777215,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Wt}));y.renderOrder=21,h.add(y);const R=new de,C=new Float32Array(360*3),$=new Float32Array(360*3),z=[],Y=new Bt(_s);for(let q=0;q<360;q+=1)z.push({s:q/359*2-1,angle:q*2.39996323,radial:.45+q%5*.1}),$[q*3]=Y.r,$[q*3+1]=Y.g,$[q*3+2]=Y.b;R.setAttribute("position",new we(C,3)),R.setAttribute("color",new we($,3));const rt=new ke(R,new sn({size:.044,map:i,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,blending:Wt}));h.add(rt);const G=new Ie;for(let q=0;q<9;q+=1){const j=new Qe(new Ts(.88,1,64),new _i({color:_s,transparent:!0,opacity:.18,side:wn,depthTest:!1,depthWrite:!1,blending:Wt}));j.userData.s=q/8*2-1,G.add(j)}return h.add(G),h.visible=!1,h.userData={core:M,frozenCoreBoost:y,particles:rt,rings:G,meta:z},{group:h,geometry:R,positions:C}}function nt(h){const M=Nc(h),y=Fc(h),R=h>In&&h<=tn,C=h>tn;if(!M.active||C){l.group.visible=!1;return}if(l.group.visible=!0,R){const K=l.group.userData.recombinationAnchor;K&&l.group.position.copy(K),l.group.userData.recombinationAnchorQuaternion&&l.group.quaternion.copy(l.group.userData.recombinationAnchorQuaternion);const xt=y.silenceBrightness;Hn.copy(ss).lerp(Oc,xt),l.group.userData.core.material.color.copy(Hn),l.group.userData.core.material.opacity=oe.lerp(.78,1,xt),l.group.userData.particles.material.opacity=oe.lerp(.92,.16,y.progress),l.group.userData.rings.children.forEach(mt=>{const Mt=mt.userData.s*19-y.waveTime*34,Z=Math.exp(-mt.userData.s*mt.userData.s*2.8);mt.material.opacity=(.1+Math.max(0,Math.cos(Mt))*.38*Z)*(1-xt)});return}const $=h,z=1,Y=1;Hn.copy(ss).lerp(Oc,y.silenceBrightness);const rt=Uc(h).nodes,G=Math.min(M.progress,.9)*rt.length,q=Math.min(rt.length-1,Math.floor(G)),j=.12+(G-q)*.76,ot=s[rt[q]].group.position,Q=s[rt[(q+1)%rt.length]].group.position,ht=new w().subVectors(Q,ot),ft=ot.clone().lerp(Q,Jt(j)),yt=ht.normalize(),P=new w(0,1,0).cross(yt).normalize();P.lengthSq()<.01&&P.set(1,0,0);const et=yt.clone().cross(P).normalize();l.group.position.copy(ft).addScaledVector(et,Math.sin($*19)*.045*Y),l.group.quaternion.setFromUnitVectors(new w(0,0,1),yt),l.userData=l.group.userData,l.group.userData.recombinationAnchor=l.group.position.clone(),l.group.userData.recombinationAnchorQuaternion=l.group.quaternion.clone(),l.group.userData.core.scale.setScalar(M.radius*1.65);const B=.9;l.group.userData.core.material.color.copy(Hn),l.group.userData.core.material.opacity=oe.lerp(B,1,y.silenceBrightness),l.group.userData.frozenCoreBoost.material.opacity=0,l.group.userData.particles.material.opacity=oe.lerp(.92,1,y.silenceBrightness),l.group.userData.particles.material.size=oe.lerp(.044,.072,y.silenceBrightness);const k=l.geometry.getAttribute("position"),it=l.geometry.getAttribute("color");l.group.userData.meta.forEach((K,xt)=>{const mt=K.s*19-$*34,Mt=Math.exp(-K.s*K.s*3.2),Z=Math.sin(mt)*M.radius*.58*Mt,ut=(K.s*M.radius*2.7+Z)*(1+y.progress*.8),bt=M.radius*(.34+.12*Math.cos(mt))*z,Ct=Math.cos(K.angle)*bt*K.radial,Rt=Math.sin(K.angle)*bt*K.radial;k.setXYZ(xt,Ct,Rt,ut),it.setXYZ(xt,Hn.r,Hn.g,Hn.b)}),l.group.userData.rings.children.forEach(K=>{const xt=K.userData.s*19-$*34,mt=Math.exp(-K.userData.s*K.userData.s*2.8);K.position.z=K.userData.s*.42+Math.sin(xt)*.045*mt,K.position.z*=1+y.progress*.8,K.scale.setScalar((.31+(.5+.5*Math.cos(xt))*.22*mt)*z),K.material.opacity=(.1+Math.max(0,Math.cos(xt))*.38*mt)*(1-y.progress*.35),K.rotation.z=$*.7+K.userData.s}),k.needsUpdate=!0,it.needsUpdate=!0}function wt(h,M){if(u.group.visible=h.active,!h.active){u.lobes.forEach(C=>{C.userData.impactCaptured=!1});return}const y=new Bt(16730902),R=new Bt(16770990);u.lobes.forEach((C,$)=>{const z=$+1,Y=h.impactClock-z,rt=oe.clamp((h.pathPosition-z+.3)/.3,0,1),G=Y<=0?1:1-Jt(oe.clamp(Y/.34,0,1)),q=Jt(rt)*G,j=Y<0?0:Math.exp(-Y*7.5),ot=Y<0?0:Jt(oe.clamp(Y/.7,0,1)),Q=Y<0?0:Jt(oe.clamp(Y/.16,0,1)),{shell:ht,points:ft,atmosphere:yt,corona:P,core:et,burst:B,surfaceEffects:k,splash:it,basePositions:K,drift:xt,splashVelocities:mt,splashSurfaceDirections:Mt,splashEnergy:Z,splashTypes:ut,splashDelays:bt,splashLifetimes:Ct,splashSpinDrag:Rt,ripple:Zt,contactDirection:Vt,tangentA:ie,tangentB:jt,ripplePhase:ce,surfaceBaseRotation:he,impactSpinOrigin:re,impactCaptured:Ee}=C.userData;Y>=0&&!Ee&&(C.userData.impactSpinOrigin=M,C.userData.impactCaptured=!0);const Be=C.userData.impactCaptured?Math.max(0,M-C.userData.impactSpinOrigin):0,en=M*fa+$*.52,be=ft.geometry.getAttribute("position");for(let lt=0;lt<be.count;lt+=1){const J=lt*3,gt=Math.sign(K[J]||1)*ot*.1;be.array[J]=K[J]+xt[J]*ot*1.7+gt,be.array[J+1]=K[J+1]+xt[J+1]*ot*1.7,be.array[J+2]=K[J+2]+xt[J+2]*ot*1.7}be.needsUpdate=!0,ht.rotation.set(he.x,he.y+en,he.z),ft.rotation.copy(ht.rotation),yt.rotation.copy(ht.rotation),P.rotation.set(ht.rotation.x*.72,he.y+en,ht.rotation.z*.66),k.rotation.set(0,C.userData.impactCaptured?Be*fa:0,0),C.scale.setScalar(1.42),ht.material.uniforms.uReveal.value=h.reveal,ht.material.uniforms.uImpact.value=j,ht.material.uniforms.uScar.value=Q,yt.material.uniforms.uReveal.value=h.reveal;const yn=Y<0?0:1-Math.exp(-Y*16);yt.material.uniforms.uImpact.value=Math.max(j,yn*.34),yt.material.uniforms.uHeat.value=yn,ft.material.color.copy(y).lerp(R,j*.68),ft.material.opacity=h.reveal*(.08+j*.38+Q*.08),P.material.opacity=h.reveal*(.2+q*.08+j*.24),et.material.opacity=h.reveal*(j*.98+Q*.045),et.scale.setScalar(.2+j*.46+Q*.03);const _n=Zt.geometry.getAttribute("position"),vn=Zt.geometry.getAttribute("aAlpha"),v=h.rippleStrength;for(let lt=0;lt<_n.count;lt+=1){const J=Math.floor(lt/96),gt=Be-J*.12,It=lt*3;if(!C.userData.impactCaptured||gt<0||gt>2.9){vn.array[lt]=0;continue}const Et=.06+oe.clamp(gt/2.35,0,1)*.92,Ft=ce[lt]+gt*5.8,qt=Math.sin(Et),pe=Vt.x*Math.cos(Et)+(ie.x*Math.cos(Ft)+jt.x*Math.sin(Ft))*qt,le=Vt.y*Math.cos(Et)+(ie.y*Math.cos(Ft)+jt.y*Math.sin(Ft))*qt,kt=Vt.z*Math.cos(Et)+(ie.z*Math.cos(Ft)+jt.z*Math.sin(Ft))*qt,Lt=Math.hypot(pe,le,kt),ye=.642/Math.max(.001,Lt);_n.array[It]=pe*ye,_n.array[It+1]=le*ye,_n.array[It+2]=kt*ye;const Qt=Jt(oe.clamp(gt/.045,0,1)),Ge=1-Jt(oe.clamp((gt-1.2)/1.7,0,1));vn.array[lt]=Qt*Ge*v*(.68+j*.36)}_n.needsUpdate=!0,vn.needsUpdate=!0,Zt.material.uniforms.uOpacity.value=h.reveal*1.3,Zt.material.uniforms.uPointScale.value=Mi.domElement.height*.72;const N=it.geometry.getAttribute("position"),W=it.geometry.getAttribute("aAlpha"),X=h.rippleStrength;for(let lt=0;lt<N.count;lt+=1){const J=lt*3,gt=Be-bt[lt],It=Ct[lt];if(!C.userData.impactCaptured||gt<0||gt>It){W.array[lt]=0;continue}const Dt=gt/It,Et=ut[lt],Ft=Z[lt],qt=lt*2.39996323+C.userData.phase,pe=4.6+Rt[lt]*8.4,le=qt+gt*pe,kt=Math.cos(le),Lt=Math.sin(le);if(Et===0){const Re=.04+gt*(.3+Ft*.42),ve=Math.min(1.05,Re),un=Vt.x*Math.cos(ve)+(ie.x*kt+jt.x*Lt)*Math.sin(ve),ge=Vt.y*Math.cos(ve)+(ie.y*kt+jt.y*Lt)*Math.sin(ve),Ne=Vt.z*Math.cos(ve)+(ie.z*kt+jt.z*Lt)*Math.sin(ve),ze=Math.hypot(un,ge,Ne),Te=(.642+(.018+Ft*.08*Math.exp(-gt*1.3)))/Math.max(.001,ze);N.array[J]=un*Te,N.array[J+1]=ge*Te,N.array[J+2]=Ne*Te}else if(Et===1){const Re=(lt*37+$*17)%997/997,ve=(lt*71+13)%101/101-.5,un=(lt*113+$*29)%991/991-.5,ge=(lt*89+$*11)%977/977-.5,Ne=lt%3,ze=Re*Math.PI*4.6+Ne*Math.PI*2/3,Ve=.72+Re*1.72+ve*.12,Te=Jt(oe.clamp(gt/.78,0,1)),Ai=ze*Te+gt*(.5+Rt[lt]*.85),Dn=oe.lerp(.642,Ve,Te)+Math.sin(ze*3+qt)*.028*Te,yo=.18+Ft*.16,Pl=Math.cos(Ai)*Dn,Eo=Math.sin(Ai)*Dn,Dl=(.08+Te*.38)*(.55+Re*.72),Ll=un*Dl+Math.sin(ze*1.7+qt+gt*2.2)*.045*Te,Il=ge*(.06+Te*.24);N.array[J]=Pl,N.array[J+1]=Eo*Math.sin(yo)+ve*.085*Te+Ll,N.array[J+2]=Eo*Math.cos(yo)+Il}else{const Re=.018+gt*(.12+Ft*.25),ve=gt*(.78+Ft*.6)*Math.exp(-gt*.16),un=Math.sin(le*.5)*.025*Ft;N.array[J]=Vt.x*(.642+ve)+ie.x*kt*Re+jt.x*Lt*Re,N.array[J+1]=Vt.y*(.642+ve)+ie.y*kt*Re+jt.y*Lt*Re+un,N.array[J+2]=Vt.z*(.642+ve)+ie.z*kt*Re+jt.z*Lt*Re}const ye=Jt(oe.clamp(gt/.045,0,1)),Qt=1-Jt(oe.clamp((Dt-.46)/.54,0,1)),Ge=Et===0?.7:Et===1?.92:1.08;W.array[lt]=ye*Qt*Ge*(.42+Ft*.7)*X}N.needsUpdate=!0,W.needsUpdate=!0,it.material.uniforms.uOpacity.value=h.reveal*1.9,it.material.uniforms.uPointScale.value=Mi.domElement.height*.72;const O=Jt(oe.clamp(Be/.035,0,1)),vt=C.userData.impactCaptured?O*Math.exp(-Be*5.2):0;B.material.opacity=h.reveal*vt*.95,B.scale.setScalar(.28+vt*.82)})}function Pt(h,M){const y=new w().subVectors(M,h).normalize();return new sr().setFromUnitVectors(new w(0,0,1),y)}function zt(h=!1){const M=u.lobes[0],y=M.userData.contactDirection.clone().multiplyScalar(.642),R=h?M.userData.surfaceEffects:M;R.updateWorldMatrix(!0,!1);const C=R.localToWorld(y),$=M.getWorldPosition(new w),z=C.clone().sub($).normalize();Xe.updateWorldMatrix(!0,!1);const Y=Xe.worldToLocal(C.clone());return{worldPoint:C,localPoint:Y,normalWorld:z}}function ne(h,M,y,R,C){const $=new w(Math.sin(M*.12)*.28+y*.035,.12+Math.cos(M*.17)*.1,12.5-y*1.1+R.progress*1.7),z=new w(0,0,0),Y=Jt(oe.clamp((h-(tn-.42))/.42,0,1));if(!C.active&&Y<=0){dn.position.copy($),dn.lookAt(z);return}const rt=l.group.getWorldPosition(new w),G=u.lobes[0].getWorldPosition(new w),q=G.clone().lerp(rt,.34),j=q.clone().add(new w(0,.18,7.4)),ot=C.active?1:Y,Q=C.active?Jt(oe.clamp((C.impactClock-1)/.34,0,1)):0,ht=G,ft=ht.clone().add(new w(0,2.15,6.9));dn.position.copy($).lerp(j,ot).lerp(ft,Q),dn.lookAt(z.lerp(q,ot).lerp(ht,Q))}function _e(h,M,y){const R=y.lobes[0].getWorldPosition(new w),C=R.clone().add(new w(0,2.15,6.9)),$=new w(-3.6,.48,12.5),z=new w(3.6,.48,12.5),Y=new w(-.18,.02,0),rt=new w(.24,.02,0),G=M.active?Jt(oe.clamp((h-Ue)/1.8,0,1)):0,q=$.clone().lerp(z,M.parallaxProgress??0),j=Y.clone().lerp(rt,M.parallaxProgress??0);dn.position.copy(C).lerp(q,G),dn.lookAt(R.clone().lerp(j,G))}function at(h){if(!h.active){if(!l.group.userData.sceneThreeActive)return;l.group.userData.sceneThreeActive=!1,l.group.userData.sceneThreeStart=null,l.group.userData.sceneThreeStartQuaternion=null,l.group.scale.setScalar(1),l.group.userData.core.renderOrder=0,l.group.userData.core.material.depthTest=!0,l.group.userData.frozenCoreBoost.material.opacity=0;return}l.group.userData.sceneThreeActive=!0,l.group.visible=!0;const M=u.lobes[0],y=zt(!1).localPoint;if(h.pathPosition<=0){const rt=M.getWorldPosition(new w),G=M.userData.contactDirection.clone().normalize(),q=rt.addScaledVector(G,3.15);Xe.updateWorldMatrix(!0,!1);const j=Xe.worldToLocal(q);l.group.userData.sceneThreeStart=j,l.group.userData.sceneThreeStartQuaternion=Pt(j,y),l.group.position.copy(j),l.group.quaternion.copy(l.group.userData.sceneThreeStartQuaternion),l.group.scale.setScalar(1),l.group.userData.core.scale.setScalar(.82),l.group.userData.core.material.color.copy(ss),l.group.userData.core.material.opacity=.94,l.group.userData.particles.material.opacity=.88,l.group.userData.frozenCoreBoost.material.opacity=0;return}const R=l.group.userData.sceneThreeStart??l.group.position.clone(),C=l.group.userData.sceneThreeStartQuaternion??l.group.quaternion.clone(),$=1-Math.pow(1-h.pathPosition,2.35),z=Math.max(0,h.impactClock-1)*Rl;if(h.pathPosition<1){const rt=Pt(R,y);l.group.position.copy(R).lerp(y,$),l.group.quaternion.copy(C).slerp(rt,$)}else{const rt=new w(0,1,0),G=z*fa,q=M.userData.contactDirection.clone().applyAxisAngle(rt,G).normalize(),j=M.getWorldPosition(new w).addScaledVector(q,.642*1.42);Xe.updateWorldMatrix(!0,!1);const ot=Xe.worldToLocal(j),Q=Xe.worldToLocal(M.getWorldPosition(new w)),ht=rt.clone().cross(q).normalize(),ft=ot.clone().add(ht);l.group.position.copy(ot).lerp(Q,h.freeze),l.group.quaternion.copy(Pt(ot,ft))}l.group.scale.setScalar(1),l.group.userData.particles.material.opacity=.88*h.rippleStrength,l.group.userData.rings.children.forEach(rt=>{const G=.12+Math.max(0,Math.cos(rt.userData.s*19))*.34;rt.material.opacity=G*h.rippleStrength});const Y=h.pathPosition>=1?Math.exp(-z*10):0;l.group.userData.core.scale.setScalar(.82),l.group.userData.core.renderOrder=20,Hn.copy(ss).lerp(da,h.freeze),l.group.userData.core.material.color.copy(Hn),l.group.userData.core.material.depthTest=!1,l.group.userData.core.material.opacity=h.coreStrength*(.9+Y*.1),l.group.userData.frozenCoreBoost.scale.copy(l.group.userData.core.scale),l.group.userData.frozenCoreBoost.material.color.copy(da),l.group.userData.frozenCoreBoost.material.opacity=h.freeze*.82}function St(h,M,y,R){const{group:C,backdrop:$,stars:z,flatStars:Y,flatLines:rt,depthLines:G,distanceLine:q,distanceAnchor:j,distanceLabel:ot,imprint:Q,imprintHalo:ht,imprintCore:ft,imprintRings:yt,imprintTarget:P}=h;if(!M.active){C.visible=!1,z.forEach(ut=>{ut.userData.label.style.opacity="0",ut.userData.label.style.display="none"}),Y&&Y.forEach(ut=>{ut.material.opacity=0}),ot.style.opacity="0",ot.style.display="none";return}C.visible=!0,C.rotation.set(.05,-.12,0),$.material.opacity=M.reveal*.68;const et=R.lobes[0].getWorldPosition(new w),B=Jt(oe.clamp((y-Ue)/1.05,0,1));Q.position.copy(et).lerp(P,B),Q.rotation.z=Math.sin((y-Ue)*.7)*.08;const k=M.morphProgress??0,it=new Map,K=new Map,xt=new w(-.035,-.025,-.04);z.forEach(ut=>{const{halo:bt,core:Ct,phase:Rt,label:Zt}=ut.userData,Vt=ut.userData.definition.brightness??1,ie=ut.userData.definition.latin.toLowerCase(),jt=Xi[ie]??Xi[ut.userData.definition.label];if(jt){const re=new w(...jt.start),Ee=new w(...jt.target),Be=re.clone().lerp(Ee,k);ut.position.copy(Be),K.set(jt.target,Be)}else ut.position.set(...ut.userData.definition.position);const ce=.9+Math.sin(y*1.6+Rt)*.1;Ct.material.opacity=Math.min(1,M.constellationReveal*ce*.96*Vt),bt.material.opacity=Math.min(1,M.constellationReveal*ce*.85*Vt);const he=M.constellationReveal*(.52+ce*.22);Zt.style.opacity=`${he}`,Zt.style.display="block"}),Y&&Y.forEach(ut=>{const bt=ut.userData.definition.latin.toLowerCase(),Ct=Xi[bt]??Xi[ut.userData.definition.label];if(Ct){const Zt=new w(...Ct.target).clone().add(xt);ut.position.copy(Zt),it.set(Ct.start,Zt);const Vt=.9+Math.sin(y*1.6+ut.userData.phase)*.1,ie=Math.min(1,M.constellationReveal*Vt*.45);ut.material.opacity=ie}});const mt=z[3].position;q.geometry.setFromPoints([mt,Q.position]),q.computeLineDistances(),j.position.copy(mt).lerp(Q.position,.52);const Mt=(ut,bt,Ct)=>{ut.forEach((Rt,Zt)=>{const Vt=Zt*.075,ie=Jt(oe.clamp((M.lineReveal-Vt)/.24,0,1)),jt=Rt.userData.isUpperTriangle?.62:.5,ce=ie*jt*Ct;Rt.material.opacity=ce,Rt.userData.glow&&(Rt.userData.glow.material.opacity=ce*.4);const he=Rt.userData.pathPoints;if(he){const re=he.map(Ee=>bt.get(Ee)??new w(...Ee));Rt.geometry.dispose(),Rt.geometry=A(re,.014*Rt.userData.emphasis),Rt.userData.glow&&(Rt.userData.glow.geometry.dispose(),Rt.userData.glow.geometry=A(re,.05*Rt.userData.emphasis))}})};Mt(rt,it,M.flatLineOpacity),Mt(G,K,M.depthLineOpacity),q.material.opacity=M.distanceReveal*.54,ot.style.opacity=`${M.distanceReveal*.7}`,ot.style.display="block";const Z=M.reveal*(1-M.imprintFade*.72);ft.material.opacity=Z*.96,ht.material.opacity=Z*.28,ft.scale.setScalar(.62+Math.sin(y*1.4)*.018),ht.scale.setScalar(1.65+Math.sin(y*1.1)*.06),yt.forEach((ut,bt)=>{const Ct=y*(1.8-bt*.22)+ut.userData.phase;ut.scale.setScalar(1+Math.sin(Ct)*.04),ut.material.opacity=Z*(.16-bt*.025)})}function Ut(h){const M=Nc(h),y=M.active&&h<=In;if(ls.classList.toggle("is-visible",y),!y)return;const R=Ng(M.progress);Kg.textContent=Math.round(R.sourceFrequency),Jg.textContent=R.velocityRatio.toFixed(2),jg.textContent=Math.round(R.observedFrequency);const C=l.group.getWorldPosition(new w).project(dn),$=oe.clamp((C.x*.5+.5)*100+7,21,79),z=oe.clamp((-C.y*.5+.5)*100-5,27,69),Y=Jt(Math.min(1,M.progress/.08)),rt=Jt(Math.min(1,(1-M.progress)/.1));ls.style.left=`${$}%`,ls.style.top=`${z}%`,ls.style.opacity=`${Y*rt}`,Zg.style.strokeDashoffset=`${96-M.progress*192}`}function Tt(h,M=h){const y=Math.min(on,Math.floor(h*gs)/gs),R=Fc(y),C=Lg(y),$=Ug(y),z=C.active&&y>tn,Y=z?C:{...C,active:!1},rt=$.active&&y>ws,G=rt?$:{...$,active:!1};Vg.style.opacity=rt?`${G.reveal}`:"0";const q=y>=In?R.waveTime:y,j=oe.smoothstep(y,tn,tn+.76),ot=1-j,Q=(1-R.progress*.46)*ot,ht=1-oe.smoothstep(R.progress,0,.12),ft=M*2,yt=Math.min(Tg-1,Math.floor(y*gs));if(yt!==x){x=yt,Hg.textContent=Cg(y),Gg.textContent=rt?"声学印记 · d_BAO ≈ 147 Mpc · 星系间距":z?"碰撞冲量  J = ∫F dt = Δp · 声痕冻结":y>In?"声学俘获 · x(t) = xw + (x₀ − xw)e^(−λt)":y>=4.3?"纵波位移  ξ(x,t) = A sin(kx - ωt)":"原初光子 · 重子 · 声压峰";const Z=rt&&y>Ue+.25,ut=z&&y>tn+.25,bt=y>=In+.3;Xg.textContent=Z?"SCENE 04 / DISTANCE IMPRINT":ut?"SCENE 03 / SIXFOLD CORE":bt?"SCENE 02 / RECOMBINATION":"SCENE 01 / PRIMORDIAL PLASMA",qg.textContent=Z?"回声，写进星系之间。":ut?"一声，撞向六合。":bt?"光与物质，从此分离。":"很久以前，声音还没有名字。",kg.textContent=`${ln(y)} / 00:24.60`}const P=Uc(y),et=new Set(P.nodes),B=Pg(y,P.nodes,s.length,o.length),k=new Set(B.main);Xe.rotation.x=Math.sin(q*.2)*.018,Xe.rotation.y=q*.035,Xe.rotation.z=Math.sin(q*.17)*.012;const it=oe.smoothstep(y,.85,1.25);e.children.forEach(Z=>{Z.material.uniforms.uTime.value=M,Z.material.uniforms.uReveal.value=it,Z.material.uniforms.uAbsorbProgress.value=R.absorption});const K=oe.lerp(1,.18,j);n.visible=R.progress>0,n.material.opacity=oe.smoothstep(R.progress,.04,.34)*.28*K;const xt=oe.smoothstep(R.progress,.05,.18),mt=1-oe.smoothstep(R.progress,.84,.97);Vc.style.opacity=`${xt*mt}`,Vc.style.transform=`translateY(${(1-xt)*8}px)`,Yg.textContent=R.baryonVelocity.toFixed(3),Hc.style.opacity=`${z?C.reveal*(1-C.freeze*.35):0}`,Hc.style.transform=`translateY(${(1-C.reveal)*8}px)`,$g.textContent=String(C.completedImpacts).padStart(2,"0"),s.forEach(({group:Z,definition:ut},bt)=>{const Ct=et.has(bt),Rt=Ct?1-R.progress*.82:0,Zt=Ct?1.18:.9,Vt=oe.lerp(Zt,.78,R.progress);if(Z.scale.lerp(new w(Vt,Vt,Vt),.08),Z.position.x=ut.position[0]*(1+R.progress*.08),Z.position.y=ut.position[1]*(1+R.progress*.06)+Math.sin(q*.32+ut.phase)*.05*R.baryonVelocity,Z.position.z=ut.position[2]-R.progress*.45,Z.userData.isChladni){Z.rotation.x=.58+Math.sin(ft*.52+ut.phase)*.24,Z.rotation.y=ut.phase+ft*ut.spin*1.15,Z.rotation.z=ut.phase*.18+ft*ut.spin*.62;const jt=ut.boundary==="volume";Z.userData.pattern.material.opacity=(jt?.5+Rt*.38:.56+Rt*.38)*Q,Z.userData.glow.material.opacity=(jt?.01+Rt*.035:.08+Rt*.2)*Q,Z.userData.network&&(Z.userData.network.material.opacity=(jt?.16+Rt*.16:.1+Rt*.2)*Q),Z.userData.outline.material.opacity=(jt?.08+Rt*.16:.07+Rt*.2)*Q,Z.userData.vertexPoints&&(Z.userData.vertexPoints.material.opacity=(.58+Rt*.36)*Q)}else Z.rotation.y=ut.phase+ft*ut.spin,Z.rotation.x=Math.sin(ft*.6+ut.phase)*.14,Z.userData.halo.material.opacity=(.07+Rt*.16+Math.sin(M*1.8+ut.phase)*.015)*Q,Z.userData.mantle.material.opacity=(.22+Rt*.24)*Q,Z.userData.core.material.opacity=(.6+Rt*.32)*Q,Z.userData.particles.material.opacity=(.44+Rt*.4)*Q,Z.userData.ring.material.opacity=(.12+Rt*.26)*Q;const ie=k.has(bt);p[bt].classList.toggle("is-focus",Ct&&ie),p[bt].style.opacity=ie?`${(Ct?1:.58)*ht}`:"0"}),o.forEach(({group:Z,definition:ut},bt)=>{const Ct=.82+Math.sin(q*1.35+Z.userData.phase)*.18*R.baryonVelocity;Z.scale.setScalar(Ct*oe.lerp(1,.72,R.progress)),Z.position.x=ut.position[0]*(1+R.progress*.14),Z.position.y=ut.position[1]*(1+R.progress*.11),Z.position.z=ut.position[2]-R.progress*.55,Z.userData.companions.rotation.z=ft*(.12+bt%3*.035),Z.userData.companions.rotation.y=ft*.08+Z.userData.phase,Z.userData.core.material.opacity=(.68+Ct*.16)*Q,Z.userData.halo.material.opacity=(.04+Ct*.07)*Q,m[bt].style.opacity=bt===B.minor?`${(.46+Ct*.2)*ht}`:"0"}),Ic.forEach(([Z,ut],bt)=>{const Ct=c[bt],Rt=s[P.nodes[Z]].group.position,Zt=s[P.nodes[ut]].group.position,Vt=Ct.geometry.getAttribute("position");Vt.setXYZ(0,Rt.x,Rt.y,Rt.z),Vt.setXYZ(1,Zt.x,Zt.y,Zt.z),Vt.needsUpdate=!0,Ct.material.opacity=oe.smoothstep(y,.12,.72)*.46*ht,Ct.computeLineDistances()}),wt(Y,M),nt(y),at(Y),St(f,G,y,u),e.children.forEach(Z=>{Z.material.uniforms.uAbsorbTarget.value.copy(l.group.position)});const Mt=Dg(y);rt?_e(y,G,u):ne(y,q,Mt,R,Y),dn.updateMatrixWorld(),Ut(y),Gt(),Xt(f,G)}function Gt(){s.forEach(({group:h},M)=>{Kt(h,p[M])}),o.forEach(({group:h},M)=>{Kt(h,m[M])})}function Xt(h,M){M.active&&(h.stars.forEach(y=>{Kt(y,y.userData.label)}),Kt(h.distanceAnchor,h.distanceLabel))}function Kt(h,M){const y=h.getWorldPosition(new w).project(dn),R=y.z<1&&y.x>-1.1&&y.x<1.1&&y.y>-1.1&&y.y<1.1;M.style.display=R?"block":"none",R&&(M.style.left=`${(y.x*.5+.5)*100}%`,M.style.top=`${(-y.y*.5+.5)*100}%`)}function Jt(h){return h*h*(3-2*h)}function ue(h){let M=h>>>0;return()=>(M=M*1664525+1013904223>>>0,M/4294967296)}const Pe=(()=>{const h=ue(20260822);return Array.from({length:230},()=>({x:h(),y:h(),r:h()*1.1+.15,alpha:h()*.53+.12}))})();function L(){const h=gr.clientWidth,M=gr.clientHeight;if(!h||!M)return;const y=Math.min(window.devicePixelRatio||1,2);gr.width=Math.round(h*y),gr.height=Math.round(M*y),Gn.setTransform(y,0,0,y,0,0),Gn.clearRect(0,0,h,M);const R=Gn.createRadialGradient(h*.54,M*.47,0,h*.54,M*.47,Math.max(h,M)*.75);R.addColorStop(0,"rgba(22, 22, 27, .20)"),R.addColorStop(.58,"rgba(5, 6, 9, .16)"),R.addColorStop(1,"rgba(2, 3, 5, .72)"),Gn.fillStyle=R,Gn.fillRect(0,0,h,M),Pe.forEach(C=>{Gn.beginPath(),Gn.fillStyle=`rgba(220, 218, 211, ${C.alpha})`,Gn.arc(C.x*h,C.y*M,C.r,0,Math.PI*2),Gn.fill()})}function ln(h){return`00:${h.toFixed(2).padStart(5,"0")}`}function ae(){const h=so.clientWidth,M=so.clientHeight,y=Math.min(window.devicePixelRatio||1,2,3840/h,2160/M);Mi.setPixelRatio(y),Mi.setSize(h,M,!1),dn.aspect=h/M,dn.updateProjectionMatrix(),L()}let $t=0;function Nt(h){_=h,cs.innerHTML=`<i data-lucide="${h?"pause":"play"}"></i>`,cs.setAttribute("aria-label",h?"暂停":"播放"),cs.title=h?"暂停":"播放",wl({icons:{Play:Tl,Pause:bl,RotateCcw:Al}})}cs.addEventListener("click",async()=>{if(_){hn.pause(),Nt(!1);return}($t>=on-.02||hn.currentTime>=on-.02)&&(hn.currentTime=0,$t=0);try{await hn.play()}catch(h){console.warn("音频播放受阻，已启用自动画面时钟:",h)}Nt(!0)}),Wg.addEventListener("click",()=>{hn.pause(),hn.currentTime=0,$t=0,Nt(!1),Tt(0,Ot)}),hn.addEventListener("timeupdate",()=>{hn.currentTime>=on&&(hn.pause(),hn.currentTime=on,$t=on,Nt(!1))}),window.addEventListener("resize",ae),ae(),Tt(0);const Se=new Uh;let Ot=0;function T(){const h=Math.min(Se.getDelta(),.05);Ot+=h,_&&(!hn.paused&&hn.currentTime>0?$t=hn.currentTime:$t+=h,$t>=on&&($t=on,hn.pause(),Nt(!1)));const M=Math.min($t,on);Tt(M,Ot),Mi.render(yr,dn),requestAnimationFrame(T)}T()}Qg();
