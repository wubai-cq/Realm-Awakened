(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mo="172",tu=0,Go=1,eu=2,al=1,nu=2,$n=3,fi=0,Sn=1,Ln=2,ui=0,ir=1,le=2,ko=3,Wo=4,iu=5,yi=100,ru=101,su=102,au=103,ou=104,cu=200,lu=201,uu=202,hu=203,Ca=204,Ra=205,fu=206,du=207,pu=208,mu=209,gu=210,_u=211,vu=212,xu=213,Mu=214,Pa=0,Da=1,La=2,cr=3,Ia=4,Ua=5,Na=6,Fa=7,ol=0,Su=1,yu=2,hi=0,Eu=1,bu=2,Tu=3,Au=4,wu=5,Cu=6,Ru=7,cl=300,lr=301,ur=302,Oa=303,Ba=304,Hs=306,za=1e3,Ai=1001,Va=1002,Nn=1003,Pu=1004,Vr=1005,Bn=1006,Ws=1007,wi=1008,ti=1009,ll=1010,ul=1011,Ur=1012,So=1013,Ci=1014,Zn=1015,Fr=1016,yo=1017,Eo=1018,hr=1020,hl=35902,fl=1021,dl=1022,Un=1023,pl=1024,ml=1025,rr=1026,fr=1027,gl=1028,bo=1029,_l=1030,To=1031,Ao=1033,Ss=33776,ys=33777,Es=33778,bs=33779,Ha=35840,Ga=35841,ka=35842,Wa=35843,Xa=36196,qa=37492,Ya=37496,$a=37808,Za=37809,Ja=37810,Ka=37811,ja=37812,Qa=37813,to=37814,eo=37815,no=37816,io=37817,ro=37818,so=37819,ao=37820,oo=37821,Ts=36492,co=36494,lo=36495,vl=36283,uo=36284,ho=36285,fo=36286,Du=3200,Lu=3201,Iu=0,Uu=1,li="",cn="srgb",dr="srgb-linear",Ps="linear",Ne="srgb",Ui=7680,Xo=519,Nu=512,Fu=513,Ou=514,xl=515,Bu=516,zu=517,Vu=518,Hu=519,po=35044,qo=35048,Yo="300 es",Jn=2e3,Ds=2001;class mr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $o=1234567;const Rr=Math.PI/180,Nr=180/Math.PI;function jn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function wo(i,t){return(i%t+t)%t}function Gu(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function ku(i,t,e){return i!==t?(e-i)/(t-i):0}function Pr(i,t,e){return(1-e)*i+e*t}function Wu(i,t,e,n){return Pr(i,t,1-Math.exp(-e*n))}function Xu(i,t=1){return t-Math.abs(wo(i,t*2)-t)}function qu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Yu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $u(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zu(i,t){return i+Math.random()*(t-i)}function Ju(i){return i*(.5-Math.random())}function Ku(i){i!==void 0&&($o=i);let t=$o+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ju(i){return i*Rr}function Qu(i){return i*Nr}function th(i){return(i&i-1)===0&&i!==0}function eh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ih(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),u=s((t+n)/2),l=a((t+n)/2),f=s((t-n)/2),d=a((t-n)/2),p=s((n-t)/2),_=a((n-t)/2);switch(r){case"XYX":i.set(o*l,c*f,c*d,o*u);break;case"YZY":i.set(c*d,o*l,c*f,o*u);break;case"ZXZ":i.set(c*f,c*d,o*l,o*u);break;case"XZX":i.set(o*l,c*_,c*p,o*u);break;case"YXY":i.set(c*p,o*l,c*_,o*u);break;case"ZYZ":i.set(c*_,c*p,o*l,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const de={DEG2RAD:Rr,RAD2DEG:Nr,generateUUID:jn,clamp:Se,euclideanModulo:wo,mapLinear:Gu,inverseLerp:ku,lerp:Pr,damp:Wu,pingpong:Xu,smoothstep:qu,smootherstep:Yu,randInt:$u,randFloat:Zu,randFloatSpread:Ju,seededRandom:Ku,degToRad:ju,radToDeg:Qu,isPowerOfTwo:th,ceilPowerOfTwo:eh,floorPowerOfTwo:nh,setQuaternionFromProperEuler:ih,normalize:Ue,denormalize:In};class se{constructor(t=0,e=0){se.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ge{constructor(t,e,n,r,s,a,o,c,u){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,u)}set(t,e,n,r,s,a,o,c,u){const l=this.elements;return l[0]=t,l[1]=r,l[2]=o,l[3]=e,l[4]=s,l[5]=c,l[6]=n,l[7]=a,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],l=n[4],f=n[7],d=n[2],p=n[5],_=n[8],x=r[0],m=r[3],h=r[6],I=r[1],w=r[4],b=r[7],G=r[2],B=r[5],F=r[8];return s[0]=a*x+o*I+c*G,s[3]=a*m+o*w+c*B,s[6]=a*h+o*b+c*F,s[1]=u*x+l*I+f*G,s[4]=u*m+l*w+f*B,s[7]=u*h+l*b+f*F,s[2]=d*x+p*I+_*G,s[5]=d*m+p*w+_*B,s[8]=d*h+p*b+_*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],l=t[8];return e*a*l-e*o*u-n*s*l+n*o*c+r*s*u-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],l=t[8],f=l*a-o*u,d=o*c-l*s,p=u*s-a*c,_=e*f+n*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=f*x,t[1]=(r*u-l*n)*x,t[2]=(o*n-r*a)*x,t[3]=d*x,t[4]=(l*e-r*c)*x,t[5]=(r*s-o*e)*x,t[6]=p*x,t[7]=(n*c-u*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+t,-r*u,r*c,-r*(-u*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xs.makeScale(t,e)),this}rotate(t){return this.premultiply(Xs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xs=new ge;function Ml(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rh(){const i=Ls("canvas");return i.style.display="block",i}const Zo={};function Qi(i){i in Zo||(Zo[i]=!0,console.warn(i))}function sh(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function ah(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function oh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jo=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ko=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ch(){const i={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ne&&(r.r=Qn(r.r),r.g=Qn(r.g),r.b=Qn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ne&&(r.r=sr(r.r),r.g=sr(r.g),r.b=sr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?Ps:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[dr]:{primaries:t,whitePoint:n,transfer:Ps,toXYZ:Jo,fromXYZ:Ko,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:t,whitePoint:n,transfer:Ne,toXYZ:Jo,fromXYZ:Ko,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),i}const Ce=ch();function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class lh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ni===void 0&&(Ni=Ls("canvas")),Ni.width=t.width,Ni.height=t.height;const n=Ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ls("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Qn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uh=0;class Sl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=jn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(qs(r[a].image)):s.push(qs(r[a]))}else s=qs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function qs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hh=0;class vn extends mr{constructor(t=vn.DEFAULT_IMAGE,e=vn.DEFAULT_MAPPING,n=Ai,r=Ai,s=Bn,a=wi,o=Un,c=ti,u=vn.DEFAULT_ANISOTROPY,l=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=jn(),this.name="",this.source=new Sl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case za:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case za:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=cl;vn.DEFAULT_ANISOTROPY=1;class We{constructor(t=0,e=0,n=0,r=1){We.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,u=c[0],l=c[4],f=c[8],d=c[1],p=c[5],_=c[9],x=c[2],m=c[6],h=c[10];if(Math.abs(l-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(u+1)/2,b=(p+1)/2,G=(h+1)/2,B=(l+d)/4,F=(f+x)/4,q=(_+m)/4;return w>b&&w>G?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=B/n,s=F/n):b>G?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=B/r,s=q/r):G<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(G),n=F/s,r=q/s),this.set(n,r,s,e),this}let I=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(d-l)*(d-l));return Math.abs(I)<.001&&(I=1),this.x=(m-_)/I,this.y=(f-x)/I,this.z=(d-l)/I,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fh extends mr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new vn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Sl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends fh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yl extends vn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dh extends vn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],u=n[r+1],l=n[r+2],f=n[r+3];const d=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];if(o===0){t[e+0]=c,t[e+1]=u,t[e+2]=l,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=x;return}if(f!==x||c!==d||u!==p||l!==_){let m=1-o;const h=c*d+u*p+l*_+f*x,I=h>=0?1:-1,w=1-h*h;if(w>Number.EPSILON){const G=Math.sqrt(w),B=Math.atan2(G,h*I);m=Math.sin(m*B)/G,o=Math.sin(o*B)/G}const b=o*I;if(c=c*m+d*b,u=u*m+p*b,l=l*m+_*b,f=f*m+x*b,m===1-o){const G=1/Math.sqrt(c*c+u*u+l*l+f*f);c*=G,u*=G,l*=G,f*=G}}t[e]=c,t[e+1]=u,t[e+2]=l,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],u=n[r+2],l=n[r+3],f=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return t[e]=o*_+l*f+c*p-u*d,t[e+1]=c*_+l*d+u*f-o*p,t[e+2]=u*_+l*p+o*d-c*f,t[e+3]=l*_-o*f-c*d-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(n/2),l=o(r/2),f=o(s/2),d=c(n/2),p=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=d*l*f+u*p*_,this._y=u*p*f-d*l*_,this._z=u*l*_+d*p*f,this._w=u*l*f-d*p*_;break;case"YXZ":this._x=d*l*f+u*p*_,this._y=u*p*f-d*l*_,this._z=u*l*_-d*p*f,this._w=u*l*f+d*p*_;break;case"ZXY":this._x=d*l*f-u*p*_,this._y=u*p*f+d*l*_,this._z=u*l*_+d*p*f,this._w=u*l*f-d*p*_;break;case"ZYX":this._x=d*l*f-u*p*_,this._y=u*p*f+d*l*_,this._z=u*l*_-d*p*f,this._w=u*l*f+d*p*_;break;case"YZX":this._x=d*l*f+u*p*_,this._y=u*p*f+d*l*_,this._z=u*l*_-d*p*f,this._w=u*l*f-d*p*_;break;case"XZY":this._x=d*l*f-u*p*_,this._y=u*p*f-d*l*_,this._z=u*l*_+d*p*f,this._w=u*l*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],u=e[2],l=e[6],f=e[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(l-c)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(l-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+l)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,u=e._z,l=e._w;return this._x=n*l+a*o+r*u-s*c,this._y=r*l+a*c+s*o-n*u,this._z=s*l+a*u+n*c-r*o,this._w=a*l-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const u=Math.sqrt(c),l=Math.atan2(u,o),f=Math.sin((1-e)*l)/u,d=Math.sin(e*l)/u;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,u=2*(a*r-o*n),l=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+c*u+a*f-o*l,this.y=n+c*l+o*u-s*f,this.z=r+c*f+s*l-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ys.copy(this).projectOnVector(t),this.sub(Ys)}reflect(t){return this.sub(Ys.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ys=new P,jo=new Pi;class Or{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Rn):Rn.fromBufferAttribute(s,a),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),Gr.subVectors(this.max,vr),Fi.subVectors(t.a,vr),Oi.subVectors(t.b,vr),Bi.subVectors(t.c,vr),ni.subVectors(Oi,Fi),ii.subVectors(Bi,Oi),di.subVectors(Fi,Bi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-di.z,di.y,ni.z,0,-ni.x,ii.z,0,-ii.x,di.z,0,-di.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-di.y,di.x,0];return!$s(e,Fi,Oi,Bi,Gr)||(e=[1,0,0,0,1,0,0,0,1],!$s(e,Fi,Oi,Bi,Gr))?!1:(kr.crossVectors(ni,ii),e=[kr.x,kr.y,kr.z],$s(e,Fi,Oi,Bi,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hn=[new P,new P,new P,new P,new P,new P,new P,new P],Rn=new P,Hr=new Or,Fi=new P,Oi=new P,Bi=new P,ni=new P,ii=new P,di=new P,vr=new P,Gr=new P,kr=new P,pi=new P;function $s(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){pi.fromArray(i,s);const o=r.x*Math.abs(pi.x)+r.y*Math.abs(pi.y)+r.z*Math.abs(pi.z),c=t.dot(pi),u=e.dot(pi),l=n.dot(pi);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>o)return!1}return!0}const ph=new Or,xr=new P,Zs=new P;class Br{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ph.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);const e=xr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(xr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(Zs)),this.expandByPoint(xr.copy(t.center).sub(Zs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new P,Js=new P,Wr=new P,ri=new P,Ks=new P,Xr=new P,js=new P;class Co{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Js.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(Js);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Wr),o=ri.dot(this.direction),c=-ri.dot(Wr),u=ri.lengthSq(),l=Math.abs(1-a*a);let f,d,p,_;if(l>0)if(f=a*c-o,d=a*o-c,_=s*l,f>=0)if(d>=-_)if(d<=_){const x=1/l;f*=x,d*=x,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+u}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Js).addScaledVector(Wr,d),p}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),r=Gn.dot(Gn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const u=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,r=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,r=(t.min.x-d.x)*u),l>=0?(s=(t.min.y-d.y)*l,a=(t.max.y-d.y)*l):(s=(t.max.y-d.y)*l,a=(t.min.y-d.y)*l),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,r,s){Ks.subVectors(e,t),Xr.subVectors(n,t),js.crossVectors(Ks,Xr);let a=this.direction.dot(js),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,t);const c=o*this.direction.dot(Xr.crossVectors(ri,Xr));if(c<0)return null;const u=o*this.direction.dot(Ks.cross(ri));if(u<0||c+u>a)return null;const l=-o*ri.dot(js);return l<0?null:this.at(l/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(t,e,n,r,s,a,o,c,u,l,f,d,p,_,x,m){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,u,l,f,d,p,_,x,m)}set(t,e,n,r,s,a,o,c,u,l,f,d,p,_,x,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=u,h[6]=l,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/zi.setFromMatrixColumn(t,0).length(),s=1/zi.setFromMatrixColumn(t,1).length(),a=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),l=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*l,p=a*f,_=o*l,x=o*f;e[0]=c*l,e[4]=-c*f,e[8]=u,e[1]=p+_*u,e[5]=d-x*u,e[9]=-o*c,e[2]=x-d*u,e[6]=_+p*u,e[10]=a*c}else if(t.order==="YXZ"){const d=c*l,p=c*f,_=u*l,x=u*f;e[0]=d+x*o,e[4]=_*o-p,e[8]=a*u,e[1]=a*f,e[5]=a*l,e[9]=-o,e[2]=p*o-_,e[6]=x+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*l,p=c*f,_=u*l,x=u*f;e[0]=d-x*o,e[4]=-a*f,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*l,e[9]=x-d*o,e[2]=-a*u,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*l,p=a*f,_=o*l,x=o*f;e[0]=c*l,e[4]=_*u-p,e[8]=d*u+x,e[1]=c*f,e[5]=x*u+d,e[9]=p*u-_,e[2]=-u,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*u,_=o*c,x=o*u;e[0]=c*l,e[4]=x-d*f,e[8]=_*f+p,e[1]=f,e[5]=a*l,e[9]=-o*l,e[2]=-u*l,e[6]=p*f+_,e[10]=d-x*f}else if(t.order==="XZY"){const d=a*c,p=a*u,_=o*c,x=o*u;e[0]=c*l,e[4]=-f,e[8]=u*l,e[1]=d*f+x,e[5]=a*l,e[9]=p*f-_,e[2]=_*f-p,e[6]=o*l,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mh,t,gh)}lookAt(t,e,n){const r=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),si.crossVectors(n,En),si.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),si.crossVectors(n,En)),si.normalize(),qr.crossVectors(En,si),r[0]=si.x,r[4]=qr.x,r[8]=En.x,r[1]=si.y,r[5]=qr.y,r[9]=En.y,r[2]=si.z,r[6]=qr.z,r[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],l=n[1],f=n[5],d=n[9],p=n[13],_=n[2],x=n[6],m=n[10],h=n[14],I=n[3],w=n[7],b=n[11],G=n[15],B=r[0],F=r[4],q=r[8],T=r[12],S=r[1],z=r[5],rt=r[9],Q=r[13],dt=r[2],gt=r[6],ot=r[10],vt=r[14],et=r[3],Ut=r[7],Vt=r[11],re=r[15];return s[0]=a*B+o*S+c*dt+u*et,s[4]=a*F+o*z+c*gt+u*Ut,s[8]=a*q+o*rt+c*ot+u*Vt,s[12]=a*T+o*Q+c*vt+u*re,s[1]=l*B+f*S+d*dt+p*et,s[5]=l*F+f*z+d*gt+p*Ut,s[9]=l*q+f*rt+d*ot+p*Vt,s[13]=l*T+f*Q+d*vt+p*re,s[2]=_*B+x*S+m*dt+h*et,s[6]=_*F+x*z+m*gt+h*Ut,s[10]=_*q+x*rt+m*ot+h*Vt,s[14]=_*T+x*Q+m*vt+h*re,s[3]=I*B+w*S+b*dt+G*et,s[7]=I*F+w*z+b*gt+G*Ut,s[11]=I*q+w*rt+b*ot+G*Vt,s[15]=I*T+w*Q+b*vt+G*re,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],u=t[13],l=t[2],f=t[6],d=t[10],p=t[14],_=t[3],x=t[7],m=t[11],h=t[15];return _*(+s*c*f-r*u*f-s*o*d+n*u*d+r*o*p-n*c*p)+x*(+e*c*p-e*u*d+s*a*d-r*a*p+r*u*l-s*c*l)+m*(+e*u*f-e*o*p-s*a*f+n*a*p+s*o*l-n*u*l)+h*(-r*o*l-e*c*f+e*o*d+r*a*f-n*a*d+n*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],l=t[8],f=t[9],d=t[10],p=t[11],_=t[12],x=t[13],m=t[14],h=t[15],I=f*m*u-x*d*u+x*c*p-o*m*p-f*c*h+o*d*h,w=_*d*u-l*m*u-_*c*p+a*m*p+l*c*h-a*d*h,b=l*x*u-_*f*u+_*o*p-a*x*p-l*o*h+a*f*h,G=_*f*c-l*x*c-_*o*d+a*x*d+l*o*m-a*f*m,B=e*I+n*w+r*b+s*G;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/B;return t[0]=I*F,t[1]=(x*d*s-f*m*s-x*r*p+n*m*p+f*r*h-n*d*h)*F,t[2]=(o*m*s-x*c*s+x*r*u-n*m*u-o*r*h+n*c*h)*F,t[3]=(f*c*s-o*d*s-f*r*u+n*d*u+o*r*p-n*c*p)*F,t[4]=w*F,t[5]=(l*m*s-_*d*s+_*r*p-e*m*p-l*r*h+e*d*h)*F,t[6]=(_*c*s-a*m*s-_*r*u+e*m*u+a*r*h-e*c*h)*F,t[7]=(a*d*s-l*c*s+l*r*u-e*d*u-a*r*p+e*c*p)*F,t[8]=b*F,t[9]=(_*f*s-l*x*s-_*n*p+e*x*p+l*n*h-e*f*h)*F,t[10]=(a*x*s-_*o*s+_*n*u-e*x*u-a*n*h+e*o*h)*F,t[11]=(l*o*s-a*f*s-l*n*u+e*f*u+a*n*p-e*o*p)*F,t[12]=G*F,t[13]=(l*x*r-_*f*r+_*n*d-e*x*d-l*n*m+e*f*m)*F,t[14]=(_*o*r-a*x*r-_*n*c+e*x*c+a*n*m-e*o*m)*F,t[15]=(a*f*r-l*o*r+l*n*c-e*f*c-a*n*d+e*o*d)*F,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,u=s*a,l=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,l*o+n,l*c-r*a,0,u*c-r*o,l*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,u=s+s,l=a+a,f=o+o,d=s*u,p=s*l,_=s*f,x=a*l,m=a*f,h=o*f,I=c*u,w=c*l,b=c*f,G=n.x,B=n.y,F=n.z;return r[0]=(1-(x+h))*G,r[1]=(p+b)*G,r[2]=(_-w)*G,r[3]=0,r[4]=(p-b)*B,r[5]=(1-(d+h))*B,r[6]=(m+I)*B,r[7]=0,r[8]=(_+w)*F,r[9]=(m-I)*F,r[10]=(1-(d+x))*F,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=zi.set(r[0],r[1],r[2]).length();const a=zi.set(r[4],r[5],r[6]).length(),o=zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Pn.copy(this);const u=1/s,l=1/a,f=1/o;return Pn.elements[0]*=u,Pn.elements[1]*=u,Pn.elements[2]*=u,Pn.elements[4]*=l,Pn.elements[5]*=l,Pn.elements[6]*=l,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,e.setFromRotationMatrix(Pn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Jn){const c=this.elements,u=2*s/(e-t),l=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let p,_;if(o===Jn)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ds)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=l,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Jn){const c=this.elements,u=1/(e-t),l=1/(n-r),f=1/(a-s),d=(e+t)*u,p=(n+r)*l;let _,x;if(o===Jn)_=(a+s)*f,x=-2*f;else if(o===Ds)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const zi=new P,Pn=new Ve,mh=new P(0,0,0),gh=new P(1,1,1),si=new P,qr=new P,En=new P,Qo=new Ve,tc=new Pi;class zn{constructor(t=0,e=0,n=0,r=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],l=r[9],f=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tc.setFromEuler(this),this.setFromQuaternion(tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class El{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _h=0;const ec=new P,Vi=new Pi,kn=new Ve,Yr=new P,Mr=new P,vh=new P,xh=new Pi,nc=new P(1,0,0),ic=new P(0,1,0),rc=new P(0,0,1),sc={type:"added"},Mh={type:"removed"},Hi={type:"childadded",child:null},Qs={type:"childremoved",child:null};class nn extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const t=new P,e=new zn,n=new Pi,r=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ge}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(nc,t)}rotateY(t){return this.rotateOnAxis(ic,t)}rotateZ(t){return this.rotateOnAxis(rc,t)}translateOnAxis(t,e){return ec.copy(t).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nc,t)}translateY(t){return this.translateOnAxis(ic,t)}translateZ(t){return this.translateOnAxis(rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yr.copy(t):Yr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Mr,Yr,this.up):kn.lookAt(Yr,Mr,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),Vi.setFromRotationMatrix(kn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mh),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,vh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,xh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){const f=c[u];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),u=a(t.textures),l=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const c=[];for(const u in o){const l=o[u];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}nn.DEFAULT_UP=new P(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new P,Wn=new P,ta=new P,Xn=new P,Gi=new P,ki=new P,ac=new P,ea=new P,na=new P,ia=new P,ra=new We,sa=new We,aa=new We;class wn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Dn.subVectors(t,e),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Dn.subVectors(r,e),Wn.subVectors(n,e),ta.subVectors(t,e);const a=Dn.dot(Dn),o=Dn.dot(Wn),c=Dn.dot(ta),u=Wn.dot(Wn),l=Wn.dot(ta),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*c-o*l)*d,_=(a*l-o*c)*d;return s.set(1-p-_,_,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Xn.x),c.addScaledVector(a,Xn.y),c.addScaledVector(o,Xn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return ra.setScalar(0),sa.setScalar(0),aa.setScalar(0),ra.fromBufferAttribute(t,e),sa.fromBufferAttribute(t,n),aa.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ra,s.x),a.addScaledVector(sa,s.y),a.addScaledVector(aa,s.z),a}static isFrontFacing(t,e,n,r){return Dn.subVectors(n,e),Wn.subVectors(t,e),Dn.cross(Wn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Dn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return wn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Gi.subVectors(r,n),ki.subVectors(s,n),ea.subVectors(t,n);const c=Gi.dot(ea),u=ki.dot(ea);if(c<=0&&u<=0)return e.copy(n);na.subVectors(t,r);const l=Gi.dot(na),f=ki.dot(na);if(l>=0&&f<=l)return e.copy(r);const d=c*f-l*u;if(d<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(n).addScaledVector(Gi,a);ia.subVectors(t,s);const p=Gi.dot(ia),_=ki.dot(ia);if(_>=0&&p<=_)return e.copy(s);const x=p*u-c*_;if(x<=0&&u>=0&&_<=0)return o=u/(u-_),e.copy(n).addScaledVector(ki,o);const m=l*_-p*f;if(m<=0&&f-l>=0&&p-_>=0)return ac.subVectors(s,r),o=(f-l)/(f-l+(p-_)),e.copy(r).addScaledVector(ac,o);const h=1/(m+x+d);return a=x*h,o=d*h,e.copy(n).addScaledVector(Gi,a).addScaledVector(ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},$r={h:0,s:0,l:0};function oa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ce.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Ce.workingColorSpace){if(t=wo(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=oa(a,s,t+1/3),this.g=oa(a,s,t),this.b=oa(a,s,t-1/3)}return Ce.toWorkingColorSpace(this,r),this}setStyle(t,e=cn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=bl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return Ce.fromWorkingColorSpace(an.copy(this),t),Math.round(Se(an.r*255,0,255))*65536+Math.round(Se(an.g*255,0,255))*256+Math.round(Se(an.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.fromWorkingColorSpace(an.copy(this),e);const n=an.r,r=an.g,s=an.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,u;const l=(o+a)/2;if(o===a)c=0,u=0;else{const f=a-o;switch(u=l<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=u,t.l=l,t}getRGB(t,e=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=cn){Ce.fromWorkingColorSpace(an.copy(this),t);const e=an.r,n=an.g,r=an.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL($r);const n=Pr(ai.h,$r.h,e),r=Pr(ai.s,$r.s,e),s=Pr(ai.l,$r.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new ee;ee.NAMES=bl;let Sh=0;class Di extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=ir,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Ra,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==Ra&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tr extends Di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xe=new P,Zr=new se;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=po,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),r=Ue(r,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==po&&(t.usage=this.usage),t}}class Tl extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Al extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Kt extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yh=0;const Tn=new Ve,ca=new nn,Wi=new P,bn=new Or,Sr=new Or,Je=new P;class Ee extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ml(t)?Al:Tl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ge().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return ca.lookAt(t),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kt(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(bn.min,Sr.min),bn.expandByPoint(Je),Je.addVectors(bn.max,Sr.max),bn.expandByPoint(Je)):(bn.expandByPoint(Sr.min),bn.expandByPoint(Sr.max))}bn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Je.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Je));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let u=0,l=o.count;u<l;u++)Je.fromBufferAttribute(o,u),c&&(Wi.fromBufferAttribute(t,u),Je.add(Wi)),r=Math.max(r,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let q=0;q<n.count;q++)o[q]=new P,c[q]=new P;const u=new P,l=new P,f=new P,d=new se,p=new se,_=new se,x=new P,m=new P;function h(q,T,S){u.fromBufferAttribute(n,q),l.fromBufferAttribute(n,T),f.fromBufferAttribute(n,S),d.fromBufferAttribute(s,q),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,S),l.sub(u),f.sub(u),p.sub(d),_.sub(d);const z=1/(p.x*_.y-_.x*p.y);isFinite(z)&&(x.copy(l).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(z),m.copy(f).multiplyScalar(p.x).addScaledVector(l,-_.x).multiplyScalar(z),o[q].add(x),o[T].add(x),o[S].add(x),c[q].add(m),c[T].add(m),c[S].add(m))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let q=0,T=I.length;q<T;++q){const S=I[q],z=S.start,rt=S.count;for(let Q=z,dt=z+rt;Q<dt;Q+=3)h(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const w=new P,b=new P,G=new P,B=new P;function F(q){G.fromBufferAttribute(r,q),B.copy(G);const T=o[q];w.copy(T),w.sub(G.multiplyScalar(G.dot(T))).normalize(),b.crossVectors(B,T);const z=b.dot(c[q])<0?-1:1;a.setXYZW(q,w.x,w.y,w.z,z)}for(let q=0,T=I.length;q<T;++q){const S=I[q],z=S.start,rt=S.count;for(let Q=z,dt=z+rt;Q<dt;Q+=3)F(t.getX(Q+0)),F(t.getX(Q+1)),F(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new P,s=new P,a=new P,o=new P,c=new P,u=new P,l=new P,f=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),l.subVectors(a,s),f.subVectors(r,s),l.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,m),o.add(l),c.add(l),u.add(l),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),l.subVectors(a,s),f.subVectors(r,s),l.cross(f),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,c){const u=o.array,l=o.itemSize,f=o.normalized,d=new u.constructor(c.length*l);let p=0,_=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*l;for(let h=0;h<l;h++)d[_++]=u[p++]}return new Be(d,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=t(c,n);e.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let l=0,f=u.length;l<f;l++){const d=u[l],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],l=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];l.push(p.toJSON(t.data))}l.length>0&&(r[c]=l,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const u in r){const l=r[u];this.setAttribute(u,l.clone(e))}const s=t.morphAttributes;for(const u in s){const l=[],f=s[u];for(let d=0,p=f.length;d<p;d++)l.push(f[d].clone(e));this.morphAttributes[u]=l}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,l=a.length;u<l;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oc=new Ve,mi=new Co,Jr=new Br,cc=new P,Kr=new P,jr=new P,Qr=new P,la=new P,ts=new P,lc=new P,es=new P;class _n extends nn{constructor(t=new Ee,e=new tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){ts.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const l=o[c],f=s[c];l!==0&&(la.fromBufferAttribute(f,t),a?ts.addScaledVector(la,l):ts.addScaledVector(la.sub(e),l))}e.add(ts)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),mi.copy(t.ray).recast(t.near),!(Jr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Jr,cc)===null||mi.origin.distanceToSquared(cc)>(t.far-t.near)**2))&&(oc.copy(s).invert(),mi.copy(t.ray).applyMatrix4(oc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,l=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],h=a[m.materialIndex],I=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=I,G=w;b<G;b+=3){const B=o.getX(b),F=o.getX(b+1),q=o.getX(b+2);r=ns(this,h,t,n,u,l,f,B,F,q),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const I=o.getX(m),w=o.getX(m+1),b=o.getX(m+2);r=ns(this,a,t,n,u,l,f,I,w,b),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],h=a[m.materialIndex],I=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=I,G=w;b<G;b+=3){const B=b,F=b+1,q=b+2;r=ns(this,h,t,n,u,l,f,B,F,q),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const I=m,w=m+1,b=m+2;r=ns(this,a,t,n,u,l,f,I,w,b),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Eh(i,t,e,n,r,s,a,o){let c;if(t.side===Sn?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===fi,o),c===null)return null;es.copy(o),es.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(es);return u<e.near||u>e.far?null:{distance:u,point:es.clone(),object:i}}function ns(i,t,e,n,r,s,a,o,c,u){i.getVertexPosition(o,Kr),i.getVertexPosition(c,jr),i.getVertexPosition(u,Qr);const l=Eh(i,t,e,n,Kr,jr,Qr,lc);if(l){const f=new P;wn.getBarycoord(lc,Kr,jr,Qr,f),r&&(l.uv=wn.getInterpolatedAttribute(r,o,c,u,f,new se)),s&&(l.uv1=wn.getInterpolatedAttribute(s,o,c,u,f,new se)),a&&(l.normal=wn.getInterpolatedAttribute(a,o,c,u,f,new P),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const d={a:o,b:c,c:u,normal:new P,materialIndex:0};wn.getNormal(Kr,jr,Qr,d.normal),l.face=d,l.barycoord=f}return l}class zr extends Ee{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],l=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,r,a,2),_("x","z","y",1,-1,t,n,-e,r,a,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(f,2));function _(x,m,h,I,w,b,G,B,F,q,T){const S=b/F,z=G/q,rt=b/2,Q=G/2,dt=B/2,gt=F+1,ot=q+1;let vt=0,et=0;const Ut=new P;for(let Vt=0;Vt<ot;Vt++){const re=Vt*z-Q;for(let xe=0;xe<gt;xe++){const Le=xe*S-rt;Ut[x]=Le*I,Ut[m]=re*w,Ut[h]=dt,u.push(Ut.x,Ut.y,Ut.z),Ut[x]=0,Ut[m]=0,Ut[h]=B>0?1:-1,l.push(Ut.x,Ut.y,Ut.z),f.push(xe/F),f.push(1-Vt/q),vt+=1}}for(let Vt=0;Vt<q;Vt++)for(let re=0;re<F;re++){const xe=d+re+gt*Vt,Le=d+re+gt*(Vt+1),st=d+(re+1)+gt*(Vt+1),Et=d+(re+1)+gt*Vt;c.push(xe,Le,Et),c.push(Le,st,Et),et+=6}o.addGroup(p,et,T),p+=et,d+=vt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function mn(i){const t={};for(let e=0;e<i.length;e++){const n=pr(i[e]);for(const r in n)t[r]=n[r]}return t}function bh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const Th={clone:pr,merge:mn};var Ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ah,this.fragmentShader=wh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pr(t.uniforms),this.uniformsGroups=bh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Cl extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new P,uc=new se,hc=new se;class An extends Cl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,uc,hc),e.subVectors(hc,uc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xi=-90,qi=1;class Ch extends nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(Xi,qi,t,e);r.layers=this.layers,this.add(r);const s=new An(Xi,qi,t,e);s.layers=this.layers,this.add(s);const a=new An(Xi,qi,t,e);a.layers=this.layers,this.add(a);const o=new An(Xi,qi,t,e);o.layers=this.layers,this.add(o);const c=new An(Xi,qi,t,e);c.layers=this.layers,this.add(c);const u=new An(Xi,qi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const u of e)this.remove(u);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,l]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,l),t.setRenderTarget(f,d,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Rl extends vn{constructor(t,e,n,r,s,a,o,c,u,l){t=t!==void 0?t:[],e=e!==void 0?e:lr,super(t,e,n,r,s,a,o,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rh extends Ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Rl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zr(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:ui});s.uniforms.tEquirect.value=e;const a=new _n(r,s),o=e.minFilter;return e.minFilter===wi&&(e.minFilter=Bn),new Ch(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class Ro{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ee(t),this.density=e}clone(){return new Ro(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ph extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Dh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=po,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new P;class Is{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),r=Ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),r=Ue(r,this.array),s=Ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Is(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qe extends Di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Yi;const yr=new P,$i=new P,Zi=new P,Ji=new se,Er=new se,Pl=new Ve,is=new P,br=new P,rs=new P,fc=new se,ua=new se,dc=new se;class on extends nn{constructor(t=new Qe){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new Ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Dh(e,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new Is(n,3,0,!1)),Yi.setAttribute("uv",new Is(n,2,3,!1))}this.geometry=Yi,this.material=t,this.center=new se(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),Pl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-Zi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;ss(is.set(-.5,-.5,0),Zi,a,$i,r,s),ss(br.set(.5,-.5,0),Zi,a,$i,r,s),ss(rs.set(.5,.5,0),Zi,a,$i,r,s),fc.set(0,0),ua.set(1,0),dc.set(1,1);let o=t.ray.intersectTriangle(is,br,rs,!1,yr);if(o===null&&(ss(br.set(-.5,.5,0),Zi,a,$i,r,s),ua.set(0,1),o=t.ray.intersectTriangle(is,rs,br,!1,yr),o===null))return;const c=t.ray.origin.distanceTo(yr);c<t.near||c>t.far||e.push({distance:c,point:yr.clone(),uv:wn.getInterpolation(yr,is,br,rs,fc,ua,dc,new se),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ss(i,t,e,n,r,s){Ji.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Er.x=s*Ji.x-r*Ji.y,Er.y=r*Ji.x+s*Ji.y):Er.copy(Ji),i.copy(t),i.x+=Er.x,i.y+=Er.y,i.applyMatrix4(Pl)}const ha=new P,Lh=new P,Ih=new ge;class Mi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ha.subVectors(n,e).cross(Lh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ha),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ih.getNormalMatrix(t),r=this.coplanarPoint(ha).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Br,as=new P;class Dl{constructor(t=new Mi,e=new Mi,n=new Mi,r=new Mi,s=new Mi,a=new Mi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],l=r[5],f=r[6],d=r[7],p=r[8],_=r[9],x=r[10],m=r[11],h=r[12],I=r[13],w=r[14],b=r[15];if(n[0].setComponents(c-s,d-u,m-p,b-h).normalize(),n[1].setComponents(c+s,d+u,m+p,b+h).normalize(),n[2].setComponents(c+a,d+l,m+_,b+I).normalize(),n[3].setComponents(c-a,d-l,m-_,b-I).normalize(),n[4].setComponents(c-o,d-f,m-x,b-w).normalize(),e===Jn)n[5].setComponents(c+o,d+f,m+x,b+w).normalize();else if(e===Ds)n[5].setComponents(o,f,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(as.x=r.normal.x>0?t.max.x:t.min.x,as.y=r.normal.y>0?t.max.y:t.min.y,as.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(as)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ei extends Di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Us=new P,Ns=new P,pc=new Ve,Tr=new Co,os=new Br,fa=new P,mc=new P;class Fs extends nn{constructor(t=new Ee,e=new Ei){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Us.fromBufferAttribute(e,r-1),Ns.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Us.distanceTo(Ns);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(r),os.radius+=s,t.ray.intersectsSphere(os)===!1)return;pc.copy(r).invert(),Tr.copy(t.ray).applyMatrix4(pc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,l=n.index,d=n.attributes.position;if(l!==null){const p=Math.max(0,a.start),_=Math.min(l.count,a.start+a.count);for(let x=p,m=_-1;x<m;x+=u){const h=l.getX(x),I=l.getX(x+1),w=cs(this,t,Tr,c,h,I);w&&e.push(w)}if(this.isLineLoop){const x=l.getX(_-1),m=l.getX(p),h=cs(this,t,Tr,c,x,m);h&&e.push(h)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let x=p,m=_-1;x<m;x+=u){const h=cs(this,t,Tr,c,x,x+1);h&&e.push(h)}if(this.isLineLoop){const x=cs(this,t,Tr,c,_-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function cs(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(Us.fromBufferAttribute(a,r),Ns.fromBufferAttribute(a,s),e.distanceSqToSegment(Us,Ns,fa,mc)>n)return;fa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(fa);if(!(c<t.near||c>t.far))return{distance:c,point:mc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const gc=new P,_c=new P;class Ar extends Fs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)gc.fromBufferAttribute(e,r),_c.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+gc.distanceTo(_c);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Uh extends Fs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class pn extends Di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vc=new Ve,mo=new Co,ls=new Br,us=new P;class Ke extends nn{constructor(t=new Ee,e=new pn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(r),ls.radius+=s,t.ray.intersectsSphere(ls)===!1)return;vc.copy(r).invert(),mo.copy(t.ray).applyMatrix4(vc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,x=p;_<x;_++){const m=u.getX(_);us.fromBufferAttribute(f,m),xc(us,m,c,r,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,x=p;_<x;_++)us.fromBufferAttribute(f,_),xc(us,_,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function xc(i,t,e,n,r,s,a){const o=mo.distanceSqToPoint(i);if(o<e){const c=new P;mo.closestPointToPoint(i,c),c.applyMatrix4(n);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ge extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class da extends vn{constructor(t,e,n,r,s,a,o,c,u){super(t,e,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ll extends vn{constructor(t,e,n,r,s,a,o,c,u,l=rr){if(l!==rr&&l!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===rr&&(n=Ci),n===void 0&&l===fr&&(n=hr),super(null,r,s,a,o,c,l,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Nn,this.minFilter=c!==void 0?c:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,u;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),u=n[r]-a,u<0)o=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const l=n[r],d=n[r+1]-l,p=(a-l)/d;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new se:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,r=[],s=[],a=[],o=new P,c=new Ve;for(let p=0;p<=t;p++){const _=p/t;r[p]=this.getTangentAt(_,new P)}s[0]=new P,a[0]=new P;let u=Number.MAX_VALUE;const l=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=u&&(u=l,n.set(1,0,0)),f<=u&&(u=f,n.set(0,1,0)),d<=u&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Se(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,_))}a[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(Se(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let _=1;_<=t;_++)s[_].applyMatrix4(c.makeRotationAxis(r[_],p*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Il extends Vn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new se){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,p=u-this.aY;c=d*l-p*f+this.aX,u=d*f+p*l+this.aY}return n.set(c,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Nh extends Il{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Po(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,u){r(a,o,u*(o-s),u*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,u,l,f){let d=(a-s)/u-(o-s)/(u+l)+(o-a)/l,p=(o-a)/l-(c-a)/(l+f)+(c-o)/f;d*=l,p*=l,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const hs=new P,pa=new Po,ma=new Po,ga=new Po;class Fh extends Vn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new P){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let u,l;this.closed||o>0?u=r[(o-1)%s]:(hs.subVectors(r[0],r[1]).add(r[0]),u=hs);const f=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?l=r[(o+2)%s]:(hs.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=hs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),pa.initNonuniformCatmullRom(u.x,f.x,d.x,l.x,_,x,m),ma.initNonuniformCatmullRom(u.y,f.y,d.y,l.y,_,x,m),ga.initNonuniformCatmullRom(u.z,f.z,d.z,l.z,_,x,m)}else this.curveType==="catmullrom"&&(pa.initCatmullRom(u.x,f.x,d.x,l.x,this.tension),ma.initCatmullRom(u.y,f.y,d.y,l.y,this.tension),ga.initCatmullRom(u.z,f.z,d.z,l.z,this.tension));return n.set(pa.calc(c),ma.calc(c),ga.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new P().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Mc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function Oh(i,t){const e=1-i;return e*e*t}function Bh(i,t){return 2*(1-i)*i*t}function zh(i,t){return i*i*t}function Dr(i,t,e,n){return Oh(i,t)+Bh(i,e)+zh(i,n)}function Vh(i,t){const e=1-i;return e*e*e*t}function Hh(i,t){const e=1-i;return 3*e*e*i*t}function Gh(i,t){return 3*(1-i)*i*i*t}function kh(i,t){return i*i*i*t}function Lr(i,t,e,n,r){return Vh(i,t)+Hh(i,e)+Gh(i,n)+kh(i,r)}class Wh extends Vn{constructor(t=new se,e=new se,n=new se,r=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new se){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Lr(t,r.x,s.x,a.x,o.x),Lr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xh extends Vn{constructor(t=new P,e=new P,n=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new P){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Lr(t,r.x,s.x,a.x,o.x),Lr(t,r.y,s.y,a.y,o.y),Lr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qh extends Vn{constructor(t=new se,e=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new se){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new se){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ul extends Vn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yh extends Vn{constructor(t=new se,e=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new se){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Dr(t,r.x,s.x,a.x),Dr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nl extends Vn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Dr(t,r.x,s.x,a.x),Dr(t,r.y,s.y,a.y),Dr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $h extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new se){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],u=r[a],l=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(Mc(o,c.x,u.x,l.x,f.x),Mc(o,c.y,u.y,l.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new se().fromArray(r))}return this}}var go=Object.freeze({__proto__:null,ArcCurve:Nh,CatmullRomCurve3:Fh,CubicBezierCurve:Wh,CubicBezierCurve3:Xh,EllipseCurve:Il,LineCurve:qh,LineCurve3:Ul,QuadraticBezierCurve:Yh,QuadraticBezierCurve3:Nl,SplineCurve:$h});class Zh extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new go[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),u=c===0?0:1-a/c;return o.getPointAt(u,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let u=0;u<c.length;u++){const l=c[u];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new go[r.type]().fromJSON(r))}return this}}class Gs extends Ee{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),u=o+1,l=c+1,f=t/o,d=e/c,p=[],_=[],x=[],m=[];for(let h=0;h<l;h++){const I=h*d-a;for(let w=0;w<u;w++){const b=w*f-s;_.push(b,-I,0),x.push(0,0,1),m.push(w/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let I=0;I<o;I++){const w=I+u*h,b=I+u*(h+1),G=I+1+u*(h+1),B=I+1+u*h;p.push(w,b,B),p.push(b,G,B)}this.setIndex(p),this.setAttribute("position",new Kt(_,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Os extends Ee{constructor(t=.5,e=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],u=[],l=[];let f=t;const d=(e-t)/r,p=new P,_=new se;for(let x=0;x<=r;x++){for(let m=0;m<=n;m++){const h=s+m/n*a;p.x=f*Math.cos(h),p.y=f*Math.sin(h),c.push(p.x,p.y,p.z),u.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,l.push(_.x,_.y)}f+=d}for(let x=0;x<r;x++){const m=x*(n+1);for(let h=0;h<n;h++){const I=h+m,w=I,b=I+n+1,G=I+n+2,B=I+1;o.push(w,b,B),o.push(b,G,B)}}this.setIndex(o),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Bs extends Ee{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let u=0;const l=[],f=new P,d=new P,p=[],_=[],x=[],m=[];for(let h=0;h<=n;h++){const I=[],w=h/n;let b=0;h===0&&a===0?b=.5/e:h===n&&c===Math.PI&&(b=-.5/e);for(let G=0;G<=e;G++){const B=G/e;f.x=-t*Math.cos(r+B*s)*Math.sin(a+w*o),f.y=t*Math.cos(a+w*o),f.z=t*Math.sin(r+B*s)*Math.sin(a+w*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(B+b,1-w),I.push(u++)}l.push(I)}for(let h=0;h<n;h++)for(let I=0;I<e;I++){const w=l[h][I+1],b=l[h][I],G=l[h+1][I],B=l[h+1][I+1];(h!==0||a>0)&&p.push(w,b,B),(h!==n-1||c<Math.PI)&&p.push(b,G,B)}this.setIndex(p),this.setAttribute("position",new Kt(_,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Do extends Ee{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],u=[],l=new P,f=new P,d=new P;for(let p=0;p<=n;p++)for(let _=0;_<=r;_++){const x=_/r*s,m=p/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),l.x=t*Math.cos(x),l.y=t*Math.sin(x),d.subVectors(f,l).normalize(),c.push(d.x,d.y,d.z),u.push(_/r),u.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=r;_++){const x=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,h=(r+1)*(p-1)+_,I=(r+1)*p+_;a.push(x,m,I),a.push(m,h,I)}this.setIndex(a),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Lo extends Ee{constructor(t=new Nl(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,c=new P,u=new se;let l=new P;const f=[],d=[],p=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new Kt(f,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(p,2));function x(){for(let w=0;w<e;w++)m(w);m(s===!1?e:0),I(),h()}function m(w){l=t.getPointAt(w/e,l);const b=a.normals[w],G=a.binormals[w];for(let B=0;B<=r;B++){const F=B/r*Math.PI*2,q=Math.sin(F),T=-Math.cos(F);c.x=T*b.x+q*G.x,c.y=T*b.y+q*G.y,c.z=T*b.z+q*G.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=l.x+n*c.x,o.y=l.y+n*c.y,o.z=l.z+n*c.z,f.push(o.x,o.y,o.z)}}function h(){for(let w=1;w<=e;w++)for(let b=1;b<=r;b++){const G=(r+1)*(w-1)+(b-1),B=(r+1)*w+(b-1),F=(r+1)*w+b,q=(r+1)*(w-1)+b;_.push(G,B,q),_.push(B,F,q)}}function I(){for(let w=0;w<=e;w++)for(let b=0;b<=r;b++)u.x=w/e,u.y=b/r,p.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Lo(new go[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Jh extends Di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kh extends Di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Sc extends Ei{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class jh extends Cl{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Qh extends An{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class tf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=yc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function yc(){return performance.now()}function Ec(i,t,e,n){const r=ef(n);switch(e){case fl:return i*t;case pl:return i*t;case ml:return i*t*2;case gl:return i*t/r.components*r.byteLength;case bo:return i*t/r.components*r.byteLength;case _l:return i*t*2/r.components*r.byteLength;case To:return i*t*2/r.components*r.byteLength;case dl:return i*t*3/r.components*r.byteLength;case Un:return i*t*4/r.components*r.byteLength;case Ao:return i*t*4/r.components*r.byteLength;case Ss:case ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Es:case bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:case Wa:return Math.max(i,16)*Math.max(t,8)/4;case Ha:case ka:return Math.max(i,8)*Math.max(t,8)/2;case Xa:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case eo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ao:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ts:case co:case lo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vl:case uo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ho:case fo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ef(i){switch(i){case ti:case ll:return{byteLength:1,components:1};case Ur:case ul:case Fr:return{byteLength:2,components:1};case yo:case Eo:return{byteLength:2,components:4};case Ci:case So:case Zn:return{byteLength:4,components:1};case hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fl(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function nf(i){const t=new WeakMap;function e(o,c){const u=o.array,l=o.usage,f=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,l),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,u){const l=c.array,f=c.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,l);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];i.bufferSubData(u,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=t.get(o);(!l||l.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sf=`#ifdef USE_ALPHAHASH
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
#endif`,af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
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
#endif`,hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ff=`#ifdef USE_BATCHING
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
#endif`,df=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_f=`#ifdef USE_IRIDESCENCE
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
#endif`,vf=`#ifdef USE_BUMPMAP
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wf=`#define PI 3.141592653589793
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
} // validated`,Cf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rf=`vec3 transformedNormal = objectNormal;
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
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,If=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bf=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xf=`#ifdef USE_GRADIENTMAP
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
}`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zf=`uniform bool receiveShadow;
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
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ed=`PhysicalMaterial material;
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
#endif`,nd=`struct PhysicalMaterial {
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
}`,id=`
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
#endif`,rd=`#if defined( RE_IndirectDiffuse )
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
#endif`,sd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ad=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,od=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ld=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dd=`#if defined( USE_POINTS_UV )
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
#endif`,pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,md=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_d=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xd=`#ifdef USE_MORPHTARGETS
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
#endif`,Md=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ad=`#ifdef USE_NORMALMAP
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
#endif`,wd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ld=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gd=`float getShadowMask() {
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
}`,kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wd=`#ifdef USE_SKINNING
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
#endif`,Xd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qd=`#ifdef USE_SKINNING
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
#endif`,Yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kd=`#ifdef USE_TRANSMISSION
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
#endif`,jd=`#ifdef USE_TRANSMISSION
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
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rp=`uniform sampler2D t2D;
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
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`#ifdef ENVMAP_TYPE_CUBE
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
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`#include <common>
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
}`,up=`#if DEPTH_PACKING == 3200
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
}`,hp=`#define DISTANCE
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
}`,fp=`#define DISTANCE
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
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`uniform float scale;
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
}`,gp=`uniform vec3 diffuse;
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
}`,_p=`#include <common>
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
}`,vp=`uniform vec3 diffuse;
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
}`,xp=`#define LAMBERT
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
}`,Mp=`#define LAMBERT
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
}`,Sp=`#define MATCAP
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
}`,yp=`#define MATCAP
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
}`,Ep=`#define NORMAL
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
}`,bp=`#define NORMAL
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
}`,Tp=`#define PHONG
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
}`,Ap=`#define PHONG
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
}`,wp=`#define STANDARD
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
}`,Cp=`#define STANDARD
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
}`,Rp=`#define TOON
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
}`,Pp=`#define TOON
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
}`,Dp=`uniform float size;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Ip=`#include <common>
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
}`,Up=`uniform vec3 color;
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
}`,Np=`uniform float rotation;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:rf,alphahash_pars_fragment:sf,alphamap_fragment:af,alphamap_pars_fragment:of,alphatest_fragment:cf,alphatest_pars_fragment:lf,aomap_fragment:uf,aomap_pars_fragment:hf,batching_pars_vertex:ff,batching_vertex:df,begin_vertex:pf,beginnormal_vertex:mf,bsdfs:gf,iridescence_fragment:_f,bumpmap_pars_fragment:vf,clipping_planes_fragment:xf,clipping_planes_pars_fragment:Mf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:yf,color_fragment:Ef,color_pars_fragment:bf,color_pars_vertex:Tf,color_vertex:Af,common:wf,cube_uv_reflection_fragment:Cf,defaultnormal_vertex:Rf,displacementmap_pars_vertex:Pf,displacementmap_vertex:Df,emissivemap_fragment:Lf,emissivemap_pars_fragment:If,colorspace_fragment:Uf,colorspace_pars_fragment:Nf,envmap_fragment:Ff,envmap_common_pars_fragment:Of,envmap_pars_fragment:Bf,envmap_pars_vertex:zf,envmap_physical_pars_fragment:Jf,envmap_vertex:Vf,fog_vertex:Hf,fog_pars_vertex:Gf,fog_fragment:kf,fog_pars_fragment:Wf,gradientmap_pars_fragment:Xf,lightmap_pars_fragment:qf,lights_lambert_fragment:Yf,lights_lambert_pars_fragment:$f,lights_pars_begin:Zf,lights_toon_fragment:Kf,lights_toon_pars_fragment:jf,lights_phong_fragment:Qf,lights_phong_pars_fragment:td,lights_physical_fragment:ed,lights_physical_pars_fragment:nd,lights_fragment_begin:id,lights_fragment_maps:rd,lights_fragment_end:sd,logdepthbuf_fragment:ad,logdepthbuf_pars_fragment:od,logdepthbuf_pars_vertex:cd,logdepthbuf_vertex:ld,map_fragment:ud,map_pars_fragment:hd,map_particle_fragment:fd,map_particle_pars_fragment:dd,metalnessmap_fragment:pd,metalnessmap_pars_fragment:md,morphinstance_vertex:gd,morphcolor_vertex:_d,morphnormal_vertex:vd,morphtarget_pars_vertex:xd,morphtarget_vertex:Md,normal_fragment_begin:Sd,normal_fragment_maps:yd,normal_pars_fragment:Ed,normal_pars_vertex:bd,normal_vertex:Td,normalmap_pars_fragment:Ad,clearcoat_normal_fragment_begin:wd,clearcoat_normal_fragment_maps:Cd,clearcoat_pars_fragment:Rd,iridescence_pars_fragment:Pd,opaque_fragment:Dd,packing:Ld,premultiplied_alpha_fragment:Id,project_vertex:Ud,dithering_fragment:Nd,dithering_pars_fragment:Fd,roughnessmap_fragment:Od,roughnessmap_pars_fragment:Bd,shadowmap_pars_fragment:zd,shadowmap_pars_vertex:Vd,shadowmap_vertex:Hd,shadowmask_pars_fragment:Gd,skinbase_vertex:kd,skinning_pars_vertex:Wd,skinning_vertex:Xd,skinnormal_vertex:qd,specularmap_fragment:Yd,specularmap_pars_fragment:$d,tonemapping_fragment:Zd,tonemapping_pars_fragment:Jd,transmission_fragment:Kd,transmission_pars_fragment:jd,uv_pars_fragment:Qd,uv_pars_vertex:tp,uv_vertex:ep,worldpos_vertex:np,background_vert:ip,background_frag:rp,backgroundCube_vert:sp,backgroundCube_frag:ap,cube_vert:op,cube_frag:cp,depth_vert:lp,depth_frag:up,distanceRGBA_vert:hp,distanceRGBA_frag:fp,equirect_vert:dp,equirect_frag:pp,linedashed_vert:mp,linedashed_frag:gp,meshbasic_vert:_p,meshbasic_frag:vp,meshlambert_vert:xp,meshlambert_frag:Mp,meshmatcap_vert:Sp,meshmatcap_frag:yp,meshnormal_vert:Ep,meshnormal_frag:bp,meshphong_vert:Tp,meshphong_frag:Ap,meshphysical_vert:wp,meshphysical_frag:Cp,meshtoon_vert:Rp,meshtoon_frag:Pp,points_vert:Dp,points_frag:Lp,shadow_vert:Ip,shadow_frag:Up,sprite_vert:Np,sprite_frag:Fp},It={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Fn={basic:{uniforms:mn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:mn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ee(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:mn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:mn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:mn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new ee(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:mn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:mn([It.points,It.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:mn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:mn([It.common,It.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:mn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:mn([It.sprite,It.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:mn([It.common,It.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:mn([It.lights,It.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Fn.physical={uniforms:mn([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const fs={r:0,b:0,g:0},_i=new zn,Op=new Ve;function Bp(i,t,e,n,r,s,a){const o=new ee(0);let c=s===!0?0:1,u,l,f=null,d=0,p=null;function _(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?e:t).get(b)),b}function x(w){let b=!1;const G=_(w);G===null?h(o,c):G&&G.isColor&&(h(G,1),b=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,a):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,b){const G=_(b);G&&(G.isCubeTexture||G.mapping===Hs)?(l===void 0&&(l=new _n(new zr(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:pr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(B,F,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),_i.copy(b.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),l.material.uniforms.envMap.value=G,l.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Op.makeRotationFromEuler(_i)),l.material.toneMapped=Ce.getTransfer(G.colorSpace)!==Ne,(f!==G||d!==G.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=G,d=G.version,p=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):G&&G.isTexture&&(u===void 0&&(u=new _n(new Gs(2,2),new gn({name:"BackgroundMaterial",uniforms:pr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=G,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=Ce.getTransfer(G.colorSpace)!==Ne,G.matrixAutoUpdate===!0&&G.updateMatrix(),u.material.uniforms.uvTransform.value.copy(G.matrix),(f!==G||d!==G.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=G,d=G.version,p=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null))}function h(w,b){w.getRGB(fs,wl(i)),n.buffers.color.setClear(fs.r,fs.g,fs.b,b,a)}function I(){l!==void 0&&(l.geometry.dispose(),l.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(w,b=1){o.set(w),c=b,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,h(o,c)},render:x,addToRenderList:m,dispose:I}}function zp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(S,z,rt,Q,dt){let gt=!1;const ot=f(Q,rt,z);s!==ot&&(s=ot,u(s.object)),gt=p(S,Q,rt,dt),gt&&_(S,Q,rt,dt),dt!==null&&t.update(dt,i.ELEMENT_ARRAY_BUFFER),(gt||a)&&(a=!1,b(S,z,rt,Q),dt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function c(){return i.createVertexArray()}function u(S){return i.bindVertexArray(S)}function l(S){return i.deleteVertexArray(S)}function f(S,z,rt){const Q=rt.wireframe===!0;let dt=n[S.id];dt===void 0&&(dt={},n[S.id]=dt);let gt=dt[z.id];gt===void 0&&(gt={},dt[z.id]=gt);let ot=gt[Q];return ot===void 0&&(ot=d(c()),gt[Q]=ot),ot}function d(S){const z=[],rt=[],Q=[];for(let dt=0;dt<e;dt++)z[dt]=0,rt[dt]=0,Q[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:rt,attributeDivisors:Q,object:S,attributes:{},index:null}}function p(S,z,rt,Q){const dt=s.attributes,gt=z.attributes;let ot=0;const vt=rt.getAttributes();for(const et in vt)if(vt[et].location>=0){const Vt=dt[et];let re=gt[et];if(re===void 0&&(et==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),et==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),Vt===void 0||Vt.attribute!==re||re&&Vt.data!==re.data)return!0;ot++}return s.attributesNum!==ot||s.index!==Q}function _(S,z,rt,Q){const dt={},gt=z.attributes;let ot=0;const vt=rt.getAttributes();for(const et in vt)if(vt[et].location>=0){let Vt=gt[et];Vt===void 0&&(et==="instanceMatrix"&&S.instanceMatrix&&(Vt=S.instanceMatrix),et==="instanceColor"&&S.instanceColor&&(Vt=S.instanceColor));const re={};re.attribute=Vt,Vt&&Vt.data&&(re.data=Vt.data),dt[et]=re,ot++}s.attributes=dt,s.attributesNum=ot,s.index=Q}function x(){const S=s.newAttributes;for(let z=0,rt=S.length;z<rt;z++)S[z]=0}function m(S){h(S,0)}function h(S,z){const rt=s.newAttributes,Q=s.enabledAttributes,dt=s.attributeDivisors;rt[S]=1,Q[S]===0&&(i.enableVertexAttribArray(S),Q[S]=1),dt[S]!==z&&(i.vertexAttribDivisor(S,z),dt[S]=z)}function I(){const S=s.newAttributes,z=s.enabledAttributes;for(let rt=0,Q=z.length;rt<Q;rt++)z[rt]!==S[rt]&&(i.disableVertexAttribArray(rt),z[rt]=0)}function w(S,z,rt,Q,dt,gt,ot){ot===!0?i.vertexAttribIPointer(S,z,rt,dt,gt):i.vertexAttribPointer(S,z,rt,Q,dt,gt)}function b(S,z,rt,Q){x();const dt=Q.attributes,gt=rt.getAttributes(),ot=z.defaultAttributeValues;for(const vt in gt){const et=gt[vt];if(et.location>=0){let Ut=dt[vt];if(Ut===void 0&&(vt==="instanceMatrix"&&S.instanceMatrix&&(Ut=S.instanceMatrix),vt==="instanceColor"&&S.instanceColor&&(Ut=S.instanceColor)),Ut!==void 0){const Vt=Ut.normalized,re=Ut.itemSize,xe=t.get(Ut);if(xe===void 0)continue;const Le=xe.buffer,st=xe.type,Et=xe.bytesPerElement,$t=st===i.INT||st===i.UNSIGNED_INT||Ut.gpuType===So;if(Ut.isInterleavedBufferAttribute){const Nt=Ut.data,ae=Nt.stride,ue=Ut.offset;if(Nt.isInstancedInterleavedBuffer){for(let Me=0;Me<et.locationSize;Me++)h(et.location+Me,Nt.meshPerAttribute);S.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let Me=0;Me<et.locationSize;Me++)m(et.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let Me=0;Me<et.locationSize;Me++)w(et.location+Me,re/et.locationSize,st,Vt,ae*Et,(ue+re/et.locationSize*Me)*Et,$t)}else{if(Ut.isInstancedBufferAttribute){for(let Nt=0;Nt<et.locationSize;Nt++)h(et.location+Nt,Ut.meshPerAttribute);S.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let Nt=0;Nt<et.locationSize;Nt++)m(et.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let Nt=0;Nt<et.locationSize;Nt++)w(et.location+Nt,re/et.locationSize,st,Vt,re*Et,re/et.locationSize*Nt*Et,$t)}}else if(ot!==void 0){const Vt=ot[vt];if(Vt!==void 0)switch(Vt.length){case 2:i.vertexAttrib2fv(et.location,Vt);break;case 3:i.vertexAttrib3fv(et.location,Vt);break;case 4:i.vertexAttrib4fv(et.location,Vt);break;default:i.vertexAttrib1fv(et.location,Vt)}}}}I()}function G(){q();for(const S in n){const z=n[S];for(const rt in z){const Q=z[rt];for(const dt in Q)l(Q[dt].object),delete Q[dt];delete z[rt]}delete n[S]}}function B(S){if(n[S.id]===void 0)return;const z=n[S.id];for(const rt in z){const Q=z[rt];for(const dt in Q)l(Q[dt].object),delete Q[dt];delete z[rt]}delete n[S.id]}function F(S){for(const z in n){const rt=n[z];if(rt[S.id]===void 0)continue;const Q=rt[S.id];for(const dt in Q)l(Q[dt].object),delete Q[dt];delete rt[S.id]}}function q(){T(),a=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:q,resetDefaultState:T,dispose:G,releaseStatesOfGeometry:B,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:m,disableUnusedAttributes:I}}function Vp(i,t,e){let n;function r(u){n=u}function s(u,l){i.drawArrays(n,u,l),e.update(l,n,1)}function a(u,l,f){f!==0&&(i.drawArraysInstanced(n,u,l,f),e.update(l,n,f))}function o(u,l,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,l,0,f);let p=0;for(let _=0;_<f;_++)p+=l[_];e.update(p,n,1)}function c(u,l,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)a(u[_],l[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,l,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=l[x]*d[x];e.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Hp(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(F){return!(F!==Un&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){const q=F===Fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==ti&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Zn&&!q)}function c(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const l=c(u);l!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",l,"instead."),u=l);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),G=_>0,B=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:I,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:G,maxSamples:B}}function Gp(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Mi,o=new ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=l(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!r||_===null||_.length===0||s&&!m)s?l(null):u();else{const I=s?0:n,w=I*4;let b=h.clippingState||null;c.value=b,b=l(_,d,w,p);for(let G=0;G!==w;++G)b[G]=e[G];h.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=I}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(f,d,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const h=p+x*4,I=d.matrixWorldInverse;o.getNormalMatrix(I),(m===null||m.length<h)&&(m=new Float32Array(h));for(let w=0,b=p;w!==x;++w,b+=4)a.copy(f[w]).applyMatrix4(I,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function kp(i){let t=new WeakMap;function e(a,o){return o===Oa?a.mapping=lr:o===Ba&&(a.mapping=ur),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Oa||o===Ba)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Rh(c.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",r),e(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const er=4,bc=[.125,.215,.35,.446,.526,.582],bi=20,_a=new jh,Tc=new ee;let va=null,xa=0,Ma=0,Sa=!1;const Si=(1+Math.sqrt(5))/2,Ki=1/Si,Ac=[new P(-Si,Ki,0),new P(Si,Ki,0),new P(-Ki,0,Si),new P(Ki,0,Si),new P(0,Si,-Ki),new P(0,Si,Ki),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class wc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){va=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(va,xa,Ma),this._renderer.xr.enabled=Sa,t.scissorTest=!1,ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===lr||t.mapping===ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),va=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Fr,format:Un,colorSpace:dr,depthBuffer:!1},r=Cc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wp(s)),this._blurMaterial=Xp(s,t,e)}return r}_compileMaterial(t){const e=new _n(this._lodPlanes[0],t);this._renderer.compile(e,_a)}_sceneToCubeUV(t,e,n,r){const o=new An(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,d=l.toneMapping;l.getClearColor(Tc),l.toneMapping=hi,l.autoClear=!1;const p=new tr({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),_=new _n(new zr,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Tc),x=!0);for(let h=0;h<6;h++){const I=h%3;I===0?(o.up.set(0,c[h],0),o.lookAt(u[h],0,0)):I===1?(o.up.set(0,0,c[h]),o.lookAt(0,u[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,u[h]));const w=this._cubeSize;ds(r,I*w,h>2?w:0,w,w),l.setRenderTarget(r),x&&l.render(_,o),l.render(t,o)}_.geometry.dispose(),_.material.dispose(),l.toneMapping=d,l.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===lr||t.mapping===ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new _n(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;ds(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,_a)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ac[(r-s-1)%Ac.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,f=new _n(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*bi-1),x=s/_,m=isFinite(s)?1+Math.floor(l*x):bi;m>bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const h=[];let I=0;for(let F=0;F<bi;++F){const q=F/x,T=Math.exp(-q*q/2);h.push(T),F===0?I+=T:F<m&&(I+=2*T)}for(let F=0;F<h.length;F++)h[F]=h[F]/I;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-n;const b=this._sizeLods[r],G=3*b*(r>w-er?r-w+er:0),B=4*(this._cubeSize-b);ds(e,G,B,3*b,2*b),c.setRenderTarget(e),c.render(f,_a)}}function Wp(i){const t=[],e=[],n=[];let r=i;const s=i-er+1+bc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-er?c=bc[a-i+er-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),l=-u,f=1+u,d=[l,l,f,l,f,f,l,l,f,f,l,f],p=6,_=6,x=3,m=2,h=1,I=new Float32Array(x*_*p),w=new Float32Array(m*_*p),b=new Float32Array(h*_*p);for(let B=0;B<p;B++){const F=B%3*2/3-1,q=B>2?0:-1,T=[F,q,0,F+2/3,q,0,F+2/3,q+1,0,F,q,0,F+2/3,q+1,0,F,q+1,0];I.set(T,x*_*B),w.set(d,m*_*B);const S=[B,B,B,B,B,B];b.set(S,h*_*B)}const G=new Ee;G.setAttribute("position",new Be(I,x)),G.setAttribute("uv",new Be(w,m)),G.setAttribute("faceIndex",new Be(b,h)),t.push(G),r>er&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cc(i,t,e){const n=new Ri(i,t,e);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ds(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Xp(i,t,e){const n=new Float32Array(bi),r=new P(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Io(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Rc(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Pc(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Io(){return`

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
	`}function qp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===Oa||c===Ba,l=c===lr||c===ur;if(u||l){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new wc(i)),f=u?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return u&&p&&p.height>0||l&&p&&r(p)?(e===null&&(e=new wc(i)),f=u?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const u=6;for(let l=0;l<u;l++)o[l]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Yp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Qi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function $p(i,t,e,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function u(f){const d=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const I=p.array;x=p.version;for(let w=0,b=I.length;w<b;w+=3){const G=I[w+0],B=I[w+1],F=I[w+2];d.push(G,B,B,F,F,G)}}else if(_!==void 0){const I=_.array;x=_.version;for(let w=0,b=I.length/3-1;w<b;w+=3){const G=w+0,B=w+1,F=w+2;d.push(G,B,B,F,F,G)}}else return;const m=new(Ml(d)?Al:Tl)(d,1);m.version=x;const h=s.get(f);h&&t.remove(h),s.set(f,m)}function l(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:l}}function Zp(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*a),e.update(p,n,1)}function u(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,s,d*a,_),e.update(p,n,_))}function l(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];e.update(m,n,1)}function f(d,p,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)u(d[h]/a,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,x,0,_);let h=0;for(let I=0;I<_;I++)h+=p[I]*x[I];e.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function Jp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Kp(i,t,e){const n=new WeakMap,r=new We;function s(a,o,c){const u=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=l!==void 0?l.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let S=function(){q.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],I=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let G=o.attributes.position.count*b,B=1;G>t.maxTextureSize&&(B=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const F=new Float32Array(G*B*4*f),q=new yl(F,G,B,f);q.type=Zn,q.needsUpdate=!0;const T=b*4;for(let z=0;z<f;z++){const rt=h[z],Q=I[z],dt=w[z],gt=G*B*4*z;for(let ot=0;ot<rt.count;ot++){const vt=ot*T;_===!0&&(r.fromBufferAttribute(rt,ot),F[gt+vt+0]=r.x,F[gt+vt+1]=r.y,F[gt+vt+2]=r.z,F[gt+vt+3]=0),x===!0&&(r.fromBufferAttribute(Q,ot),F[gt+vt+4]=r.x,F[gt+vt+5]=r.y,F[gt+vt+6]=r.z,F[gt+vt+7]=0),m===!0&&(r.fromBufferAttribute(dt,ot),F[gt+vt+8]=r.x,F[gt+vt+9]=r.y,F[gt+vt+10]=r.z,F[gt+vt+11]=dt.itemSize===4?r.w:1)}}d={count:f,texture:q,size:new se(G,B)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const x=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function jp(i,t,e,n){let r=new WeakMap;function s(c){const u=n.render.frame,l=c.geometry,f=t.get(c,l);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}const Ol=new vn,Dc=new Ll(1,1),Bl=new yl,zl=new dh,Vl=new Rl,Lc=[],Ic=[],Uc=new Float32Array(16),Nc=new Float32Array(9),Fc=new Float32Array(4);function gr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Lc[r];if(s===void 0&&(s=new Float32Array(r),Lc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function $e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ks(i,t){let e=Ic[t];e===void 0&&(e=new Int32Array(t),Ic[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2fv(this.addr,t),Ze(e,t)}}function em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;i.uniform3fv(this.addr,t),Ze(e,t)}}function nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4fv(this.addr,t),Ze(e,t)}}function im(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,n))return;Fc.set(n),i.uniformMatrix2fv(this.addr,!1,Fc),Ze(e,n)}}function rm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,n))return;Nc.set(n),i.uniformMatrix3fv(this.addr,!1,Nc),Ze(e,n)}}function sm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,n))return;Uc.set(n),i.uniformMatrix4fv(this.addr,!1,Uc),Ze(e,n)}}function am(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2iv(this.addr,t),Ze(e,t)}}function cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3iv(this.addr,t),Ze(e,t)}}function lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4iv(this.addr,t),Ze(e,t)}}function um(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2uiv(this.addr,t),Ze(e,t)}}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3uiv(this.addr,t),Ze(e,t)}}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4uiv(this.addr,t),Ze(e,t)}}function pm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Dc.compareFunction=xl,s=Dc):s=Ol,e.setTexture2D(t||s,r)}function mm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||zl,r)}function gm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Vl,r)}function _m(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Bl,r)}function vm(i){switch(i){case 5126:return Qp;case 35664:return tm;case 35665:return em;case 35666:return nm;case 35674:return im;case 35675:return rm;case 35676:return sm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return cm;case 35669:case 35673:return lm;case 5125:return um;case 36294:return hm;case 36295:return fm;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return _m}}function xm(i,t){i.uniform1fv(this.addr,t)}function Mm(i,t){const e=gr(t,this.size,2);i.uniform2fv(this.addr,e)}function Sm(i,t){const e=gr(t,this.size,3);i.uniform3fv(this.addr,e)}function ym(i,t){const e=gr(t,this.size,4);i.uniform4fv(this.addr,e)}function Em(i,t){const e=gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bm(i,t){const e=gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Tm(i,t){const e=gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Am(i,t){i.uniform1iv(this.addr,t)}function wm(i,t){i.uniform2iv(this.addr,t)}function Cm(i,t){i.uniform3iv(this.addr,t)}function Rm(i,t){i.uniform4iv(this.addr,t)}function Pm(i,t){i.uniform1uiv(this.addr,t)}function Dm(i,t){i.uniform2uiv(this.addr,t)}function Lm(i,t){i.uniform3uiv(this.addr,t)}function Im(i,t){i.uniform4uiv(this.addr,t)}function Um(i,t,e){const n=this.cache,r=t.length,s=ks(e,r);$e(n,s)||(i.uniform1iv(this.addr,s),Ze(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Ol,s[a])}function Nm(i,t,e){const n=this.cache,r=t.length,s=ks(e,r);$e(n,s)||(i.uniform1iv(this.addr,s),Ze(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||zl,s[a])}function Fm(i,t,e){const n=this.cache,r=t.length,s=ks(e,r);$e(n,s)||(i.uniform1iv(this.addr,s),Ze(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Vl,s[a])}function Om(i,t,e){const n=this.cache,r=t.length,s=ks(e,r);$e(n,s)||(i.uniform1iv(this.addr,s),Ze(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Bl,s[a])}function Bm(i){switch(i){case 5126:return xm;case 35664:return Mm;case 35665:return Sm;case 35666:return ym;case 35674:return Em;case 35675:return bm;case 35676:return Tm;case 5124:case 35670:return Am;case 35667:case 35671:return wm;case 35668:case 35672:return Cm;case 35669:case 35673:return Rm;case 5125:return Pm;case 36294:return Dm;case 36295:return Lm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Om}}class zm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vm(e.type)}}class Vm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bm(e.type)}}class Hm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function Oc(i,t){i.seq.push(t),i.map[t.id]=t}function Gm(i,t,e){const n=i.name,r=n.length;for(ya.lastIndex=0;;){const s=ya.exec(n),a=ya.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Oc(e,u===void 0?new zm(o,i,t):new Vm(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Hm(o),Oc(e,f)),e=f}}}class As{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Gm(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Bc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const km=37297;let Wm=0;function Xm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const zc=new ge;function qm(i){Ce._getMatrix(zc,Ce.workingColorSpace,i);const t=`mat3( ${zc.elements.map(e=>e.toFixed(4))} )`;switch(Ce.getTransfer(i)){case Ps:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Xm(i.getShaderSource(t),a)}else return r}function Ym(i,t){const e=qm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function $m(i,t){let e;switch(t){case Eu:e="Linear";break;case bu:e="Reinhard";break;case Tu:e="Cineon";break;case Au:e="ACESFilmic";break;case Cu:e="AgX";break;case Ru:e="Neutral";break;case wu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ps=new P;function Zm(){Ce.getLuminanceCoefficients(ps);const i=ps.x.toFixed(4),t=ps.y.toFixed(4),e=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function Km(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function wr(i){return i!==""}function Hc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(i){return i.replace(Qm,e0)}const t0=new Map;function e0(i,t){let e=ve[t];if(e===void 0){const n=t0.get(t);if(n!==void 0)e=ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _o(e)}const n0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kc(i){return i.replace(n0,i0)}function i0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function r0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===al?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===nu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function s0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lr:case ur:t="ENVMAP_TYPE_CUBE";break;case Hs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function a0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ur:t="ENVMAP_MODE_REFRACTION";break}return t}function o0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ol:t="ENVMAP_BLENDING_MULTIPLY";break;case Su:t="ENVMAP_BLENDING_MIX";break;case yu:t="ENVMAP_BLENDING_ADD";break}return t}function c0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function l0(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=r0(e),u=s0(e),l=a0(e),f=o0(e),d=c0(e),p=Jm(e),_=Km(s),x=r.createProgram();let m,h,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(wr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(wr).join(`
`),h.length>0&&(h+=`
`)):(m=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),h=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?ve.tonemapping_pars_fragment:"",e.toneMapping!==hi?$m("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,Ym("linearToOutputTexel",e.outputColorSpace),Zm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wr).join(`
`)),a=_o(a),a=Hc(a,e),a=Gc(a,e),o=_o(o),o=Hc(o,e),o=Gc(o,e),a=kc(a),o=kc(o),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const w=I+m+a,b=I+h+o,G=Bc(r,r.VERTEX_SHADER,w),B=Bc(r,r.FRAGMENT_SHADER,b);r.attachShader(x,G),r.attachShader(x,B),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function F(z){if(i.debug.checkShaderErrors){const rt=r.getProgramInfoLog(x).trim(),Q=r.getShaderInfoLog(G).trim(),dt=r.getShaderInfoLog(B).trim();let gt=!0,ot=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(gt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,G,B);else{const vt=Vc(r,G,"vertex"),et=Vc(r,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+rt+`
`+vt+`
`+et)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(Q===""||dt==="")&&(ot=!1);ot&&(z.diagnostics={runnable:gt,programLog:rt,vertexShader:{log:Q,prefix:m},fragmentShader:{log:dt,prefix:h}})}r.deleteShader(G),r.deleteShader(B),q=new As(r,x),T=jm(r,x)}let q;this.getUniforms=function(){return q===void 0&&F(this),q};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,km)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=G,this.fragmentShader=B,this}let u0=0;class h0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new f0(t),e.set(t,n)),n}}class f0{constructor(t){this.id=u0++,this.code=t,this.usedTimes=0}}function d0(i,t,e,n,r,s,a){const o=new El,c=new h0,u=new Set,l=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,S,z,rt,Q){const dt=rt.fog,gt=Q.geometry,ot=T.isMeshStandardMaterial?rt.environment:null,vt=(T.isMeshStandardMaterial?e:t).get(T.envMap||ot),et=vt&&vt.mapping===Hs?vt.image.height:null,Ut=_[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Vt=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,re=Vt!==void 0?Vt.length:0;let xe=0;gt.morphAttributes.position!==void 0&&(xe=1),gt.morphAttributes.normal!==void 0&&(xe=2),gt.morphAttributes.color!==void 0&&(xe=3);let Le,st,Et,$t;if(Ut){const pt=Fn[Ut];Le=pt.vertexShader,st=pt.fragmentShader}else Le=T.vertexShader,st=T.fragmentShader,c.update(T),Et=c.getVertexShaderID(T),$t=c.getFragmentShaderID(T);const Nt=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),ue=Q.isInstancedMesh===!0,Me=Q.isBatchedMesh===!0,Oe=!!T.map,Ae=!!T.matcap,He=!!vt,N=!!T.aoMap,rn=!!T.lightMap,be=!!T.bumpMap,Te=!!T.normalMap,jt=!!T.displacementMap,ce=!!T.emissiveMap,ne=!!T.metalnessMap,A=!!T.roughnessMap,v=T.anisotropy>0,J=T.clearcoat>0,lt=T.dispersion>0,mt=T.iridescence>0,it=T.sheen>0,zt=T.transmission>0,Ct=v&&!!T.anisotropyMap,Ht=J&&!!T.clearcoatMap,ye=J&&!!T.clearcoatNormalMap,Mt=J&&!!T.clearcoatRoughnessMap,M=mt&&!!T.iridescenceMap,E=mt&&!!T.iridescenceThicknessMap,R=it&&!!T.sheenColorMap,C=it&&!!T.sheenRoughnessMap,k=!!T.specularMap,Z=!!T.specularColorMap,$=!!T.specularIntensityMap,y=zt&&!!T.transmissionMap,H=zt&&!!T.thicknessMap,D=!!T.gradientMap,U=!!T.alphaMap,V=T.alphaTest>0,X=!!T.alphaHash,tt=!!T.extensions;let ct=hi;T.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(ct=i.toneMapping);const _t={shaderID:Ut,shaderType:T.type,shaderName:T.name,vertexShader:Le,fragmentShader:st,defines:T.defines,customVertexShaderID:Et,customFragmentShaderID:$t,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Me,batchingColor:Me&&Q._colorsTexture!==null,instancing:ue,instancingColor:ue&&Q.instanceColor!==null,instancingMorph:ue&&Q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Nt===null?i.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:dr,alphaToCoverage:!!T.alphaToCoverage,map:Oe,matcap:Ae,envMap:He,envMapMode:He&&vt.mapping,envMapCubeUVHeight:et,aoMap:N,lightMap:rn,bumpMap:be,normalMap:Te,displacementMap:d&&jt,emissiveMap:ce,normalMapObjectSpace:Te&&T.normalMapType===Uu,normalMapTangentSpace:Te&&T.normalMapType===Iu,metalnessMap:ne,roughnessMap:A,anisotropy:v,anisotropyMap:Ct,clearcoat:J,clearcoatMap:Ht,clearcoatNormalMap:ye,clearcoatRoughnessMap:Mt,dispersion:lt,iridescence:mt,iridescenceMap:M,iridescenceThicknessMap:E,sheen:it,sheenColorMap:R,sheenRoughnessMap:C,specularMap:k,specularColorMap:Z,specularIntensityMap:$,transmission:zt,transmissionMap:y,thicknessMap:H,gradientMap:D,opaque:T.transparent===!1&&T.blending===ir&&T.alphaToCoverage===!1,alphaMap:U,alphaTest:V,alphaHash:X,combine:T.combine,mapUv:Oe&&x(T.map.channel),aoMapUv:N&&x(T.aoMap.channel),lightMapUv:rn&&x(T.lightMap.channel),bumpMapUv:be&&x(T.bumpMap.channel),normalMapUv:Te&&x(T.normalMap.channel),displacementMapUv:jt&&x(T.displacementMap.channel),emissiveMapUv:ce&&x(T.emissiveMap.channel),metalnessMapUv:ne&&x(T.metalnessMap.channel),roughnessMapUv:A&&x(T.roughnessMap.channel),anisotropyMapUv:Ct&&x(T.anisotropyMap.channel),clearcoatMapUv:Ht&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:ye&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:M&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:E&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:R&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:C&&x(T.sheenRoughnessMap.channel),specularMapUv:k&&x(T.specularMap.channel),specularColorMapUv:Z&&x(T.specularColorMap.channel),specularIntensityMapUv:$&&x(T.specularIntensityMap.channel),transmissionMapUv:y&&x(T.transmissionMap.channel),thicknessMapUv:H&&x(T.thicknessMap.channel),alphaMapUv:U&&x(T.alphaMap.channel),vertexTangents:!!gt.attributes.tangent&&(Te||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!gt.attributes.uv&&(Oe||U),fog:!!dt,useFog:T.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ae,skinning:Q.isSkinnedMesh===!0,morphTargets:gt.morphAttributes.position!==void 0,morphNormals:gt.morphAttributes.normal!==void 0,morphColors:gt.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:Oe&&T.map.isVideoTexture===!0&&Ce.getTransfer(T.map.colorSpace)===Ne,decodeVideoTextureEmissive:ce&&T.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(T.emissiveMap.colorSpace)===Ne,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ln,flipSided:T.side===Sn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:tt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&T.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return _t.vertexUv1s=u.has(1),_t.vertexUv2s=u.has(2),_t.vertexUv3s=u.has(3),u.clear(),_t}function h(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)S.push(z),S.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(I(S,T),w(S,T),S.push(i.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function I(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function w(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),T.push(o.mask)}function b(T){const S=_[T.type];let z;if(S){const rt=Fn[S];z=Th.clone(rt.uniforms)}else z=T.uniforms;return z}function G(T,S){let z;for(let rt=0,Q=l.length;rt<Q;rt++){const dt=l[rt];if(dt.cacheKey===S){z=dt,++z.usedTimes;break}}return z===void 0&&(z=new l0(i,S,T,s),l.push(z)),z}function B(T){if(--T.usedTimes===0){const S=l.indexOf(T);l[S]=l[l.length-1],l.pop(),T.destroy()}}function F(T){c.remove(T)}function q(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:b,acquireProgram:G,releaseProgram:B,releaseShaderCache:F,programs:l,dispose:q}}function p0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function m0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,d,p,_,x,m){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},i[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=x,h.group=m),t++,h}function o(f,d,p,_,x,m){const h=a(f,d,p,_,x,m);p.transmission>0?n.push(h):p.transparent===!0?r.push(h):e.push(h)}function c(f,d,p,_,x,m){const h=a(f,d,p,_,x,m);p.transmission>0?n.unshift(h):p.transparent===!0?r.unshift(h):e.unshift(h)}function u(f,d){e.length>1&&e.sort(f||m0),n.length>1&&n.sort(d||Xc),r.length>1&&r.sort(d||Xc)}function l(){for(let f=t,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:l,sort:u}}function g0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new qc,i.set(n,[a])):r>=s.length?(a=new qc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function _0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new ee};break;case"SpotLight":e={position:new P,direction:new P,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function v0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let x0=0;function M0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function S0(i){const t=new _0,e=v0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new P);const r=new P,s=new Ve,a=new Ve;function o(u){let l=0,f=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,_=0,x=0,m=0,h=0,I=0,w=0,b=0,G=0,B=0,F=0;u.sort(M0);for(let T=0,S=u.length;T<S;T++){const z=u[T],rt=z.color,Q=z.intensity,dt=z.distance,gt=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)l+=rt.r*Q,f+=rt.g*Q,d+=rt.b*Q;else if(z.isLightProbe){for(let ot=0;ot<9;ot++)n.probe[ot].addScaledVector(z.sh.coefficients[ot],Q);F++}else if(z.isDirectionalLight){const ot=t.get(z);if(ot.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const vt=z.shadow,et=e.get(z);et.shadowIntensity=vt.intensity,et.shadowBias=vt.bias,et.shadowNormalBias=vt.normalBias,et.shadowRadius=vt.radius,et.shadowMapSize=vt.mapSize,n.directionalShadow[p]=et,n.directionalShadowMap[p]=gt,n.directionalShadowMatrix[p]=z.shadow.matrix,I++}n.directional[p]=ot,p++}else if(z.isSpotLight){const ot=t.get(z);ot.position.setFromMatrixPosition(z.matrixWorld),ot.color.copy(rt).multiplyScalar(Q),ot.distance=dt,ot.coneCos=Math.cos(z.angle),ot.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ot.decay=z.decay,n.spot[x]=ot;const vt=z.shadow;if(z.map&&(n.spotLightMap[G]=z.map,G++,vt.updateMatrices(z),z.castShadow&&B++),n.spotLightMatrix[x]=vt.matrix,z.castShadow){const et=e.get(z);et.shadowIntensity=vt.intensity,et.shadowBias=vt.bias,et.shadowNormalBias=vt.normalBias,et.shadowRadius=vt.radius,et.shadowMapSize=vt.mapSize,n.spotShadow[x]=et,n.spotShadowMap[x]=gt,b++}x++}else if(z.isRectAreaLight){const ot=t.get(z);ot.color.copy(rt).multiplyScalar(Q),ot.halfWidth.set(z.width*.5,0,0),ot.halfHeight.set(0,z.height*.5,0),n.rectArea[m]=ot,m++}else if(z.isPointLight){const ot=t.get(z);if(ot.color.copy(z.color).multiplyScalar(z.intensity),ot.distance=z.distance,ot.decay=z.decay,z.castShadow){const vt=z.shadow,et=e.get(z);et.shadowIntensity=vt.intensity,et.shadowBias=vt.bias,et.shadowNormalBias=vt.normalBias,et.shadowRadius=vt.radius,et.shadowMapSize=vt.mapSize,et.shadowCameraNear=vt.camera.near,et.shadowCameraFar=vt.camera.far,n.pointShadow[_]=et,n.pointShadowMap[_]=gt,n.pointShadowMatrix[_]=z.shadow.matrix,w++}n.point[_]=ot,_++}else if(z.isHemisphereLight){const ot=t.get(z);ot.skyColor.copy(z.color).multiplyScalar(Q),ot.groundColor.copy(z.groundColor).multiplyScalar(Q),n.hemi[h]=ot,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=f,n.ambient[2]=d;const q=n.hash;(q.directionalLength!==p||q.pointLength!==_||q.spotLength!==x||q.rectAreaLength!==m||q.hemiLength!==h||q.numDirectionalShadows!==I||q.numPointShadows!==w||q.numSpotShadows!==b||q.numSpotMaps!==G||q.numLightProbes!==F)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=b+G-B,n.spotLightMap.length=G,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=F,q.directionalLength=p,q.pointLength=_,q.spotLength=x,q.rectAreaLength=m,q.hemiLength=h,q.numDirectionalShadows=I,q.numPointShadows=w,q.numSpotShadows=b,q.numSpotMaps=G,q.numLightProbes=F,n.version=x0++)}function c(u,l){let f=0,d=0,p=0,_=0,x=0;const m=l.matrixWorldInverse;for(let h=0,I=u.length;h<I;h++){const w=u[h];if(w.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(w.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function Yc(i){const t=new S0(i),e=[],n=[];function r(l){u.camera=l,e.length=0,n.length=0}function s(l){e.push(l)}function a(l){n.push(l)}function o(){t.setup(e)}function c(l){t.setupView(e,l)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function y0(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Yc(i),t.set(r,[o])):s>=a.length?(o=new Yc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const E0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b0=`uniform sampler2D shadow_pass;
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
}`;function T0(i,t,e){let n=new Dl;const r=new se,s=new se,a=new We,o=new Jh({depthPacking:Lu}),c=new Kh,u={},l=e.maxTextureSize,f={[fi]:Sn,[Sn]:fi,[Ln]:Ln},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:E0,fragmentShader:b0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ee;_.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new _n(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=al;let h=this.type;this.render=function(B,F,q){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||B.length===0)return;const T=i.getRenderTarget(),S=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),rt=i.state;rt.setBlending(ui),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const Q=h!==$n&&this.type===$n,dt=h===$n&&this.type!==$n;for(let gt=0,ot=B.length;gt<ot;gt++){const vt=B[gt],et=vt.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",vt,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;r.copy(et.mapSize);const Ut=et.getFrameExtents();if(r.multiply(Ut),s.copy(et.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(s.x=Math.floor(l/Ut.x),r.x=s.x*Ut.x,et.mapSize.x=s.x),r.y>l&&(s.y=Math.floor(l/Ut.y),r.y=s.y*Ut.y,et.mapSize.y=s.y)),et.map===null||Q===!0||dt===!0){const re=this.type!==$n?{minFilter:Nn,magFilter:Nn}:{};et.map!==null&&et.map.dispose(),et.map=new Ri(r.x,r.y,re),et.map.texture.name=vt.name+".shadowMap",et.camera.updateProjectionMatrix()}i.setRenderTarget(et.map),i.clear();const Vt=et.getViewportCount();for(let re=0;re<Vt;re++){const xe=et.getViewport(re);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),rt.viewport(a),et.updateMatrices(vt,re),n=et.getFrustum(),b(F,q,et.camera,vt,this.type)}et.isPointLightShadow!==!0&&this.type===$n&&I(et,q),et.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(T,S,z)};function I(B,F){const q=t.update(x);d.defines.VSM_SAMPLES!==B.blurSamples&&(d.defines.VSM_SAMPLES=B.blurSamples,p.defines.VSM_SAMPLES=B.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ri(r.x,r.y)),d.uniforms.shadow_pass.value=B.map.texture,d.uniforms.resolution.value=B.mapSize,d.uniforms.radius.value=B.radius,i.setRenderTarget(B.mapPass),i.clear(),i.renderBufferDirect(F,null,q,d,x,null),p.uniforms.shadow_pass.value=B.mapPass.texture,p.uniforms.resolution.value=B.mapSize,p.uniforms.radius.value=B.radius,i.setRenderTarget(B.map),i.clear(),i.renderBufferDirect(F,null,q,p,x,null)}function w(B,F,q,T){let S=null;const z=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(z!==void 0)S=z;else if(S=q.isPointLight===!0?c:o,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const rt=S.uuid,Q=F.uuid;let dt=u[rt];dt===void 0&&(dt={},u[rt]=dt);let gt=dt[Q];gt===void 0&&(gt=S.clone(),dt[Q]=gt,F.addEventListener("dispose",G)),S=gt}if(S.visible=F.visible,S.wireframe=F.wireframe,T===$n?S.side=F.shadowSide!==null?F.shadowSide:F.side:S.side=F.shadowSide!==null?F.shadowSide:f[F.side],S.alphaMap=F.alphaMap,S.alphaTest=F.alphaTest,S.map=F.map,S.clipShadows=F.clipShadows,S.clippingPlanes=F.clippingPlanes,S.clipIntersection=F.clipIntersection,S.displacementMap=F.displacementMap,S.displacementScale=F.displacementScale,S.displacementBias=F.displacementBias,S.wireframeLinewidth=F.wireframeLinewidth,S.linewidth=F.linewidth,q.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const rt=i.properties.get(S);rt.light=q}return S}function b(B,F,q,T,S){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&S===$n)&&(!B.frustumCulled||n.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const Q=t.update(B),dt=B.material;if(Array.isArray(dt)){const gt=Q.groups;for(let ot=0,vt=gt.length;ot<vt;ot++){const et=gt[ot],Ut=dt[et.materialIndex];if(Ut&&Ut.visible){const Vt=w(B,Ut,T,S);B.onBeforeShadow(i,B,F,q,Q,Vt,et),i.renderBufferDirect(q,null,Q,Vt,B,et),B.onAfterShadow(i,B,F,q,Q,Vt,et)}}}else if(dt.visible){const gt=w(B,dt,T,S);B.onBeforeShadow(i,B,F,q,Q,gt,null),i.renderBufferDirect(q,null,Q,gt,B,null),B.onAfterShadow(i,B,F,q,Q,gt,null)}}const rt=B.children;for(let Q=0,dt=rt.length;Q<dt;Q++)b(rt[Q],F,q,T,S)}function G(B){B.target.removeEventListener("dispose",G);for(const q in u){const T=u[q],S=B.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const A0={[Pa]:Da,[La]:Na,[Ia]:Fa,[cr]:Ua,[Da]:Pa,[Na]:La,[Fa]:Ia,[Ua]:cr};function w0(i,t){function e(){let y=!1;const H=new We;let D=null;const U=new We(0,0,0,0);return{setMask:function(V){D!==V&&!y&&(i.colorMask(V,V,V,V),D=V)},setLocked:function(V){y=V},setClear:function(V,X,tt,ct,_t){_t===!0&&(V*=ct,X*=ct,tt*=ct),H.set(V,X,tt,ct),U.equals(H)===!1&&(i.clearColor(V,X,tt,ct),U.copy(H))},reset:function(){y=!1,D=null,U.set(-1,0,0,0)}}}function n(){let y=!1,H=!1,D=null,U=null,V=null;return{setReversed:function(X){if(H!==X){const tt=t.get("EXT_clip_control");H?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT);const ct=V;V=null,this.setClear(ct)}H=X},getReversed:function(){return H},setTest:function(X){X?Nt(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(X){D!==X&&!y&&(i.depthMask(X),D=X)},setFunc:function(X){if(H&&(X=A0[X]),U!==X){switch(X){case Pa:i.depthFunc(i.NEVER);break;case Da:i.depthFunc(i.ALWAYS);break;case La:i.depthFunc(i.LESS);break;case cr:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case Ua:i.depthFunc(i.GEQUAL);break;case Na:i.depthFunc(i.GREATER);break;case Fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}U=X}},setLocked:function(X){y=X},setClear:function(X){V!==X&&(H&&(X=1-X),i.clearDepth(X),V=X)},reset:function(){y=!1,D=null,U=null,V=null,H=!1}}}function r(){let y=!1,H=null,D=null,U=null,V=null,X=null,tt=null,ct=null,_t=null;return{setTest:function(pt){y||(pt?Nt(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(pt){H!==pt&&!y&&(i.stencilMask(pt),H=pt)},setFunc:function(pt,Bt,Rt){(D!==pt||U!==Bt||V!==Rt)&&(i.stencilFunc(pt,Bt,Rt),D=pt,U=Bt,V=Rt)},setOp:function(pt,Bt,Rt){(X!==pt||tt!==Bt||ct!==Rt)&&(i.stencilOp(pt,Bt,Rt),X=pt,tt=Bt,ct=Rt)},setLocked:function(pt){y=pt},setClear:function(pt){_t!==pt&&(i.clearStencil(pt),_t=pt)},reset:function(){y=!1,H=null,D=null,U=null,V=null,X=null,tt=null,ct=null,_t=null}}}const s=new e,a=new n,o=new r,c=new WeakMap,u=new WeakMap;let l={},f={},d=new WeakMap,p=[],_=null,x=!1,m=null,h=null,I=null,w=null,b=null,G=null,B=null,F=new ee(0,0,0),q=0,T=!1,S=null,z=null,rt=null,Q=null,dt=null;const gt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ot=!1,vt=0;const et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(vt=parseFloat(/^WebGL (\d)/.exec(et)[1]),ot=vt>=1):et.indexOf("OpenGL ES")!==-1&&(vt=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),ot=vt>=2);let Ut=null,Vt={};const re=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),Le=new We().fromArray(re),st=new We().fromArray(xe);function Et(y,H,D,U){const V=new Uint8Array(4),X=i.createTexture();i.bindTexture(y,X),i.texParameteri(y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let tt=0;tt<D;tt++)y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY?i.texImage3D(H,0,i.RGBA,1,1,U,0,i.RGBA,i.UNSIGNED_BYTE,V):i.texImage2D(H+tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,V);return X}const $t={};$t[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),$t[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$t[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$t[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Nt(i.DEPTH_TEST),a.setFunc(cr),be(!1),Te(Go),Nt(i.CULL_FACE),N(ui);function Nt(y){l[y]!==!0&&(i.enable(y),l[y]=!0)}function ae(y){l[y]!==!1&&(i.disable(y),l[y]=!1)}function ue(y,H){return f[y]!==H?(i.bindFramebuffer(y,H),f[y]=H,y===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=H),y===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=H),!0):!1}function Me(y,H){let D=p,U=!1;if(y){D=d.get(H),D===void 0&&(D=[],d.set(H,D));const V=y.textures;if(D.length!==V.length||D[0]!==i.COLOR_ATTACHMENT0){for(let X=0,tt=V.length;X<tt;X++)D[X]=i.COLOR_ATTACHMENT0+X;D.length=V.length,U=!0}}else D[0]!==i.BACK&&(D[0]=i.BACK,U=!0);U&&i.drawBuffers(D)}function Oe(y){return _!==y?(i.useProgram(y),_=y,!0):!1}const Ae={[yi]:i.FUNC_ADD,[ru]:i.FUNC_SUBTRACT,[su]:i.FUNC_REVERSE_SUBTRACT};Ae[au]=i.MIN,Ae[ou]=i.MAX;const He={[cu]:i.ZERO,[lu]:i.ONE,[uu]:i.SRC_COLOR,[Ca]:i.SRC_ALPHA,[gu]:i.SRC_ALPHA_SATURATE,[pu]:i.DST_COLOR,[fu]:i.DST_ALPHA,[hu]:i.ONE_MINUS_SRC_COLOR,[Ra]:i.ONE_MINUS_SRC_ALPHA,[mu]:i.ONE_MINUS_DST_COLOR,[du]:i.ONE_MINUS_DST_ALPHA,[_u]:i.CONSTANT_COLOR,[vu]:i.ONE_MINUS_CONSTANT_COLOR,[xu]:i.CONSTANT_ALPHA,[Mu]:i.ONE_MINUS_CONSTANT_ALPHA};function N(y,H,D,U,V,X,tt,ct,_t,pt){if(y===ui){x===!0&&(ae(i.BLEND),x=!1);return}if(x===!1&&(Nt(i.BLEND),x=!0),y!==iu){if(y!==m||pt!==T){if((h!==yi||b!==yi)&&(i.blendEquation(i.FUNC_ADD),h=yi,b=yi),pt)switch(y){case ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case le:i.blendFunc(i.ONE,i.ONE);break;case ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case le:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}I=null,w=null,G=null,B=null,F.set(0,0,0),q=0,m=y,T=pt}return}V=V||H,X=X||D,tt=tt||U,(H!==h||V!==b)&&(i.blendEquationSeparate(Ae[H],Ae[V]),h=H,b=V),(D!==I||U!==w||X!==G||tt!==B)&&(i.blendFuncSeparate(He[D],He[U],He[X],He[tt]),I=D,w=U,G=X,B=tt),(ct.equals(F)===!1||_t!==q)&&(i.blendColor(ct.r,ct.g,ct.b,_t),F.copy(ct),q=_t),m=y,T=!1}function rn(y,H){y.side===Ln?ae(i.CULL_FACE):Nt(i.CULL_FACE);let D=y.side===Sn;H&&(D=!D),be(D),y.blending===ir&&y.transparent===!1?N(ui):N(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),a.setFunc(y.depthFunc),a.setTest(y.depthTest),a.setMask(y.depthWrite),s.setMask(y.colorWrite);const U=y.stencilWrite;o.setTest(U),U&&(o.setMask(y.stencilWriteMask),o.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),o.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),ce(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?Nt(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(y){S!==y&&(y?i.frontFace(i.CW):i.frontFace(i.CCW),S=y)}function Te(y){y!==tu?(Nt(i.CULL_FACE),y!==z&&(y===Go?i.cullFace(i.BACK):y===eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),z=y}function jt(y){y!==rt&&(ot&&i.lineWidth(y),rt=y)}function ce(y,H,D){y?(Nt(i.POLYGON_OFFSET_FILL),(Q!==H||dt!==D)&&(i.polygonOffset(H,D),Q=H,dt=D)):ae(i.POLYGON_OFFSET_FILL)}function ne(y){y?Nt(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function A(y){y===void 0&&(y=i.TEXTURE0+gt-1),Ut!==y&&(i.activeTexture(y),Ut=y)}function v(y,H,D){D===void 0&&(Ut===null?D=i.TEXTURE0+gt-1:D=Ut);let U=Vt[D];U===void 0&&(U={type:void 0,texture:void 0},Vt[D]=U),(U.type!==y||U.texture!==H)&&(Ut!==D&&(i.activeTexture(D),Ut=D),i.bindTexture(y,H||$t[y]),U.type=y,U.texture=H)}function J(){const y=Vt[Ut];y!==void 0&&y.type!==void 0&&(i.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function lt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function zt(){try{i.texSubImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ye(){try{i.texStorage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Mt(){try{i.texStorage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function M(){try{i.texImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function E(){try{i.texImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function R(y){Le.equals(y)===!1&&(i.scissor(y.x,y.y,y.z,y.w),Le.copy(y))}function C(y){st.equals(y)===!1&&(i.viewport(y.x,y.y,y.z,y.w),st.copy(y))}function k(y,H){let D=u.get(H);D===void 0&&(D=new WeakMap,u.set(H,D));let U=D.get(y);U===void 0&&(U=i.getUniformBlockIndex(H,y.name),D.set(y,U))}function Z(y,H){const U=u.get(H).get(y);c.get(H)!==U&&(i.uniformBlockBinding(H,U,y.__bindingPointIndex),c.set(H,U))}function $(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},Ut=null,Vt={},f={},d=new WeakMap,p=[],_=null,x=!1,m=null,h=null,I=null,w=null,b=null,G=null,B=null,F=new ee(0,0,0),q=0,T=!1,S=null,z=null,rt=null,Q=null,dt=null,Le.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Nt,disable:ae,bindFramebuffer:ue,drawBuffers:Me,useProgram:Oe,setBlending:N,setMaterial:rn,setFlipSided:be,setCullFace:Te,setLineWidth:jt,setPolygonOffset:ce,setScissorTest:ne,activeTexture:A,bindTexture:v,unbindTexture:J,compressedTexImage2D:lt,compressedTexImage3D:mt,texImage2D:M,texImage3D:E,updateUBOMapping:k,uniformBlockBinding:Z,texStorage2D:ye,texStorage3D:Mt,texSubImage2D:it,texSubImage3D:zt,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Ht,scissor:R,viewport:C,reset:$}}function C0(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new se,l=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,v){return p?new OffscreenCanvas(A,v):Ls("canvas")}function x(A,v,J){let lt=1;const mt=ne(A);if((mt.width>J||mt.height>J)&&(lt=J/Math.max(mt.width,mt.height)),lt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const it=Math.floor(lt*mt.width),zt=Math.floor(lt*mt.height);f===void 0&&(f=_(it,zt));const Ct=v?_(it,zt):f;return Ct.width=it,Ct.height=zt,Ct.getContext("2d").drawImage(A,0,0,it,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+it+"x"+zt+")."),Ct}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),A;return A}function m(A){return A.generateMipmaps}function h(A){i.generateMipmap(A)}function I(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,v,J,lt,mt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let it=v;if(v===i.RED&&(J===i.FLOAT&&(it=i.R32F),J===i.HALF_FLOAT&&(it=i.R16F),J===i.UNSIGNED_BYTE&&(it=i.R8)),v===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(it=i.R8UI),J===i.UNSIGNED_SHORT&&(it=i.R16UI),J===i.UNSIGNED_INT&&(it=i.R32UI),J===i.BYTE&&(it=i.R8I),J===i.SHORT&&(it=i.R16I),J===i.INT&&(it=i.R32I)),v===i.RG&&(J===i.FLOAT&&(it=i.RG32F),J===i.HALF_FLOAT&&(it=i.RG16F),J===i.UNSIGNED_BYTE&&(it=i.RG8)),v===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(it=i.RG8UI),J===i.UNSIGNED_SHORT&&(it=i.RG16UI),J===i.UNSIGNED_INT&&(it=i.RG32UI),J===i.BYTE&&(it=i.RG8I),J===i.SHORT&&(it=i.RG16I),J===i.INT&&(it=i.RG32I)),v===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(it=i.RGB8UI),J===i.UNSIGNED_SHORT&&(it=i.RGB16UI),J===i.UNSIGNED_INT&&(it=i.RGB32UI),J===i.BYTE&&(it=i.RGB8I),J===i.SHORT&&(it=i.RGB16I),J===i.INT&&(it=i.RGB32I)),v===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),J===i.UNSIGNED_INT&&(it=i.RGBA32UI),J===i.BYTE&&(it=i.RGBA8I),J===i.SHORT&&(it=i.RGBA16I),J===i.INT&&(it=i.RGBA32I)),v===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),v===i.RGBA){const zt=mt?Ps:Ce.getTransfer(lt);J===i.FLOAT&&(it=i.RGBA32F),J===i.HALF_FLOAT&&(it=i.RGBA16F),J===i.UNSIGNED_BYTE&&(it=zt===Ne?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function b(A,v){let J;return A?v===null||v===Ci||v===hr?J=i.DEPTH24_STENCIL8:v===Zn?J=i.DEPTH32F_STENCIL8:v===Ur&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ci||v===hr?J=i.DEPTH_COMPONENT24:v===Zn?J=i.DEPTH_COMPONENT32F:v===Ur&&(J=i.DEPTH_COMPONENT16),J}function G(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Nn&&A.minFilter!==Bn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function B(A){const v=A.target;v.removeEventListener("dispose",B),q(v),v.isVideoTexture&&l.delete(v)}function F(A){const v=A.target;v.removeEventListener("dispose",F),S(v)}function q(A){const v=n.get(A);if(v.__webglInit===void 0)return;const J=A.source,lt=d.get(J);if(lt){const mt=lt[v.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&T(A),Object.keys(lt).length===0&&d.delete(J)}n.remove(A)}function T(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const J=A.source,lt=d.get(J);delete lt[v.__cacheKey],a.memory.textures--}function S(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(v.__webglFramebuffer[lt]))for(let mt=0;mt<v.__webglFramebuffer[lt].length;mt++)i.deleteFramebuffer(v.__webglFramebuffer[lt][mt]);else i.deleteFramebuffer(v.__webglFramebuffer[lt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[lt])}else{if(Array.isArray(v.__webglFramebuffer))for(let lt=0;lt<v.__webglFramebuffer.length;lt++)i.deleteFramebuffer(v.__webglFramebuffer[lt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let lt=0;lt<v.__webglColorRenderbuffer.length;lt++)v.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[lt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const J=A.textures;for(let lt=0,mt=J.length;lt<mt;lt++){const it=n.get(J[lt]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(J[lt])}n.remove(A)}let z=0;function rt(){z=0}function Q(){const A=z;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),z+=1,A}function dt(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function gt(A,v){const J=n.get(A);if(A.isVideoTexture&&jt(A),A.isRenderTargetTexture===!1&&A.version>0&&J.__version!==A.version){const lt=A.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(J,A,v);return}}e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+v)}function ot(A,v){const J=n.get(A);if(A.version>0&&J.__version!==A.version){st(J,A,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+v)}function vt(A,v){const J=n.get(A);if(A.version>0&&J.__version!==A.version){st(J,A,v);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+v)}function et(A,v){const J=n.get(A);if(A.version>0&&J.__version!==A.version){Et(J,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+v)}const Ut={[za]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},Vt={[Nn]:i.NEAREST,[Pu]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[Ws]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},re={[Nu]:i.NEVER,[Hu]:i.ALWAYS,[Fu]:i.LESS,[xl]:i.LEQUAL,[Ou]:i.EQUAL,[Vu]:i.GEQUAL,[Bu]:i.GREATER,[zu]:i.NOTEQUAL};function xe(A,v){if(v.type===Zn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Bn||v.magFilter===Ws||v.magFilter===Vr||v.magFilter===wi||v.minFilter===Bn||v.minFilter===Ws||v.minFilter===Vr||v.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ut[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ut[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ut[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Vt[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Vt[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,re[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Nn||v.minFilter!==Vr&&v.minFilter!==wi||v.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Le(A,v){let J=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",B));const lt=v.source;let mt=d.get(lt);mt===void 0&&(mt={},d.set(lt,mt));const it=dt(v);if(it!==A.__cacheKey){mt[it]===void 0&&(mt[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),mt[it].usedTimes++;const zt=mt[A.__cacheKey];zt!==void 0&&(mt[A.__cacheKey].usedTimes--,zt.usedTimes===0&&T(v)),A.__cacheKey=it,A.__webglTexture=mt[it].texture}return J}function st(A,v,J){let lt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(lt=i.TEXTURE_3D);const mt=Le(A,v),it=v.source;e.bindTexture(lt,A.__webglTexture,i.TEXTURE0+J);const zt=n.get(it);if(it.version!==zt.__version||mt===!0){e.activeTexture(i.TEXTURE0+J);const Ct=Ce.getPrimaries(Ce.workingColorSpace),Ht=v.colorSpace===li?null:Ce.getPrimaries(v.colorSpace),ye=v.colorSpace===li||Ct===Ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Mt=x(v.image,!1,r.maxTextureSize);Mt=ce(v,Mt);const M=s.convert(v.format,v.colorSpace),E=s.convert(v.type);let R=w(v.internalFormat,M,E,v.colorSpace,v.isVideoTexture);xe(lt,v);let C;const k=v.mipmaps,Z=v.isVideoTexture!==!0,$=zt.__version===void 0||mt===!0,y=it.dataReady,H=G(v,Mt);if(v.isDepthTexture)R=b(v.format===fr,v.type),$&&(Z?e.texStorage2D(i.TEXTURE_2D,1,R,Mt.width,Mt.height):e.texImage2D(i.TEXTURE_2D,0,R,Mt.width,Mt.height,0,M,E,null));else if(v.isDataTexture)if(k.length>0){Z&&$&&e.texStorage2D(i.TEXTURE_2D,H,R,k[0].width,k[0].height);for(let D=0,U=k.length;D<U;D++)C=k[D],Z?y&&e.texSubImage2D(i.TEXTURE_2D,D,0,0,C.width,C.height,M,E,C.data):e.texImage2D(i.TEXTURE_2D,D,R,C.width,C.height,0,M,E,C.data);v.generateMipmaps=!1}else Z?($&&e.texStorage2D(i.TEXTURE_2D,H,R,Mt.width,Mt.height),y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt.width,Mt.height,M,E,Mt.data)):e.texImage2D(i.TEXTURE_2D,0,R,Mt.width,Mt.height,0,M,E,Mt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Z&&$&&e.texStorage3D(i.TEXTURE_2D_ARRAY,H,R,k[0].width,k[0].height,Mt.depth);for(let D=0,U=k.length;D<U;D++)if(C=k[D],v.format!==Un)if(M!==null)if(Z){if(y)if(v.layerUpdates.size>0){const V=Ec(C.width,C.height,v.format,v.type);for(const X of v.layerUpdates){const tt=C.data.subarray(X*V/C.data.BYTES_PER_ELEMENT,(X+1)*V/C.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,D,0,0,X,C.width,C.height,1,M,tt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,D,0,0,0,C.width,C.height,Mt.depth,M,C.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,D,R,C.width,C.height,Mt.depth,0,C.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,D,0,0,0,C.width,C.height,Mt.depth,M,E,C.data):e.texImage3D(i.TEXTURE_2D_ARRAY,D,R,C.width,C.height,Mt.depth,0,M,E,C.data)}else{Z&&$&&e.texStorage2D(i.TEXTURE_2D,H,R,k[0].width,k[0].height);for(let D=0,U=k.length;D<U;D++)C=k[D],v.format!==Un?M!==null?Z?y&&e.compressedTexSubImage2D(i.TEXTURE_2D,D,0,0,C.width,C.height,M,C.data):e.compressedTexImage2D(i.TEXTURE_2D,D,R,C.width,C.height,0,C.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?y&&e.texSubImage2D(i.TEXTURE_2D,D,0,0,C.width,C.height,M,E,C.data):e.texImage2D(i.TEXTURE_2D,D,R,C.width,C.height,0,M,E,C.data)}else if(v.isDataArrayTexture)if(Z){if($&&e.texStorage3D(i.TEXTURE_2D_ARRAY,H,R,Mt.width,Mt.height,Mt.depth),y)if(v.layerUpdates.size>0){const D=Ec(Mt.width,Mt.height,v.format,v.type);for(const U of v.layerUpdates){const V=Mt.data.subarray(U*D/Mt.data.BYTES_PER_ELEMENT,(U+1)*D/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,U,Mt.width,Mt.height,1,M,E,V)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,M,E,Mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,R,Mt.width,Mt.height,Mt.depth,0,M,E,Mt.data);else if(v.isData3DTexture)Z?($&&e.texStorage3D(i.TEXTURE_3D,H,R,Mt.width,Mt.height,Mt.depth),y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,M,E,Mt.data)):e.texImage3D(i.TEXTURE_3D,0,R,Mt.width,Mt.height,Mt.depth,0,M,E,Mt.data);else if(v.isFramebufferTexture){if($)if(Z)e.texStorage2D(i.TEXTURE_2D,H,R,Mt.width,Mt.height);else{let D=Mt.width,U=Mt.height;for(let V=0;V<H;V++)e.texImage2D(i.TEXTURE_2D,V,R,D,U,0,M,E,null),D>>=1,U>>=1}}else if(k.length>0){if(Z&&$){const D=ne(k[0]);e.texStorage2D(i.TEXTURE_2D,H,R,D.width,D.height)}for(let D=0,U=k.length;D<U;D++)C=k[D],Z?y&&e.texSubImage2D(i.TEXTURE_2D,D,0,0,M,E,C):e.texImage2D(i.TEXTURE_2D,D,R,M,E,C);v.generateMipmaps=!1}else if(Z){if($){const D=ne(Mt);e.texStorage2D(i.TEXTURE_2D,H,R,D.width,D.height)}y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,M,E,Mt)}else e.texImage2D(i.TEXTURE_2D,0,R,M,E,Mt);m(v)&&h(lt),zt.__version=it.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Et(A,v,J){if(v.image.length!==6)return;const lt=Le(A,v),mt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+J);const it=n.get(mt);if(mt.version!==it.__version||lt===!0){e.activeTexture(i.TEXTURE0+J);const zt=Ce.getPrimaries(Ce.workingColorSpace),Ct=v.colorSpace===li?null:Ce.getPrimaries(v.colorSpace),Ht=v.colorSpace===li||zt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const ye=v.isCompressedTexture||v.image[0].isCompressedTexture,Mt=v.image[0]&&v.image[0].isDataTexture,M=[];for(let U=0;U<6;U++)!ye&&!Mt?M[U]=x(v.image[U],!0,r.maxCubemapSize):M[U]=Mt?v.image[U].image:v.image[U],M[U]=ce(v,M[U]);const E=M[0],R=s.convert(v.format,v.colorSpace),C=s.convert(v.type),k=w(v.internalFormat,R,C,v.colorSpace),Z=v.isVideoTexture!==!0,$=it.__version===void 0||lt===!0,y=mt.dataReady;let H=G(v,E);xe(i.TEXTURE_CUBE_MAP,v);let D;if(ye){Z&&$&&e.texStorage2D(i.TEXTURE_CUBE_MAP,H,k,E.width,E.height);for(let U=0;U<6;U++){D=M[U].mipmaps;for(let V=0;V<D.length;V++){const X=D[V];v.format!==Un?R!==null?Z?y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,V,0,0,X.width,X.height,R,X.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,V,k,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,V,0,0,X.width,X.height,R,C,X.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,V,k,X.width,X.height,0,R,C,X.data)}}}else{if(D=v.mipmaps,Z&&$){D.length>0&&H++;const U=ne(M[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,H,k,U.width,U.height)}for(let U=0;U<6;U++)if(Mt){Z?y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,M[U].width,M[U].height,R,C,M[U].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,k,M[U].width,M[U].height,0,R,C,M[U].data);for(let V=0;V<D.length;V++){const tt=D[V].image[U].image;Z?y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,V+1,0,0,tt.width,tt.height,R,C,tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,V+1,k,tt.width,tt.height,0,R,C,tt.data)}}else{Z?y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,R,C,M[U]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,k,R,C,M[U]);for(let V=0;V<D.length;V++){const X=D[V];Z?y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,V+1,0,0,R,C,X.image[U]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,V+1,k,R,C,X.image[U])}}}m(v)&&h(i.TEXTURE_CUBE_MAP),it.__version=mt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function $t(A,v,J,lt,mt,it){const zt=s.convert(J.format,J.colorSpace),Ct=s.convert(J.type),Ht=w(J.internalFormat,zt,Ct,J.colorSpace),ye=n.get(v),Mt=n.get(J);if(Mt.__renderTarget=v,!ye.__hasExternalTextures){const M=Math.max(1,v.width>>it),E=Math.max(1,v.height>>it);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,it,Ht,M,E,v.depth,0,zt,Ct,null):e.texImage2D(mt,it,Ht,M,E,0,zt,Ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Te(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,mt,Mt.__webglTexture,0,be(v)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,mt,Mt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(A,v,J){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const lt=v.depthTexture,mt=lt&&lt.isDepthTexture?lt.type:null,it=b(v.stencilBuffer,mt),zt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=be(v);Te(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,it,v.width,v.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,it,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,it,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,zt,i.RENDERBUFFER,A)}else{const lt=v.textures;for(let mt=0;mt<lt.length;mt++){const it=lt[mt],zt=s.convert(it.format,it.colorSpace),Ct=s.convert(it.type),Ht=w(it.internalFormat,zt,Ct,it.colorSpace),ye=be(v);J&&Te(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,Ht,v.width,v.height):Te(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,Ht,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ht,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=n.get(v.depthTexture);lt.__renderTarget=v,(!lt.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),gt(v.depthTexture,0);const mt=lt.__webglTexture,it=be(v);if(v.depthTexture.format===rr)Te(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0);else if(v.depthTexture.format===fr)Te(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function ue(A){const v=n.get(A),J=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const lt=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),lt){const mt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,lt.removeEventListener("dispose",mt)};lt.addEventListener("dispose",mt),v.__depthDisposeCallback=mt}v.__boundDepthTexture=lt}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");ae(v.__webglFramebuffer,A)}else if(J){v.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[lt]),v.__webglDepthbuffer[lt]===void 0)v.__webglDepthbuffer[lt]=i.createRenderbuffer(),Nt(v.__webglDepthbuffer[lt],A,!1);else{const mt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=v.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Nt(v.__webglDepthbuffer,A,!1);else{const lt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(A,v,J){const lt=n.get(A);v!==void 0&&$t(lt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&ue(A)}function Oe(A){const v=A.texture,J=n.get(A),lt=n.get(v);A.addEventListener("dispose",F);const mt=A.textures,it=A.isWebGLCubeRenderTarget===!0,zt=mt.length>1;if(zt||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=v.version,a.memory.textures++),it){J.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(v.mipmaps&&v.mipmaps.length>0){J.__webglFramebuffer[Ct]=[];for(let Ht=0;Ht<v.mipmaps.length;Ht++)J.__webglFramebuffer[Ct][Ht]=i.createFramebuffer()}else J.__webglFramebuffer[Ct]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ct=0;Ct<v.mipmaps.length;Ct++)J.__webglFramebuffer[Ct]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(zt)for(let Ct=0,Ht=mt.length;Ct<Ht;Ct++){const ye=n.get(mt[Ct]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Te(A)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ct=0;Ct<mt.length;Ct++){const Ht=mt[Ct];J.__webglColorRenderbuffer[Ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Ct]);const ye=s.convert(Ht.format,Ht.colorSpace),Mt=s.convert(Ht.type),M=w(Ht.internalFormat,ye,Mt,Ht.colorSpace,A.isXRRenderTarget===!0),E=be(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,E,M,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,J.__webglColorRenderbuffer[Ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Nt(J.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),xe(i.TEXTURE_CUBE_MAP,v);for(let Ct=0;Ct<6;Ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ht=0;Ht<v.mipmaps.length;Ht++)$t(J.__webglFramebuffer[Ct][Ht],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ht);else $t(J.__webglFramebuffer[Ct],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);m(v)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let Ct=0,Ht=mt.length;Ct<Ht;Ct++){const ye=mt[Ct],Mt=n.get(ye);e.bindTexture(i.TEXTURE_2D,Mt.__webglTexture),xe(i.TEXTURE_2D,ye),$t(J.__webglFramebuffer,A,ye,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,0),m(ye)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let Ct=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ct=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,lt.__webglTexture),xe(Ct,v),v.mipmaps&&v.mipmaps.length>0)for(let Ht=0;Ht<v.mipmaps.length;Ht++)$t(J.__webglFramebuffer[Ht],A,v,i.COLOR_ATTACHMENT0,Ct,Ht);else $t(J.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,Ct,0);m(v)&&h(Ct),e.unbindTexture()}A.depthBuffer&&ue(A)}function Ae(A){const v=A.textures;for(let J=0,lt=v.length;J<lt;J++){const mt=v[J];if(m(mt)){const it=I(A),zt=n.get(mt).__webglTexture;e.bindTexture(it,zt),h(it),e.unbindTexture()}}}const He=[],N=[];function rn(A){if(A.samples>0){if(Te(A)===!1){const v=A.textures,J=A.width,lt=A.height;let mt=i.COLOR_BUFFER_BIT;const it=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=n.get(A),Ct=v.length>1;if(Ct)for(let Ht=0;Ht<v.length;Ht++)e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Ht=0;Ht<v.length;Ht++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),Ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Ht]);const ye=n.get(v[Ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,J,lt,0,0,J,lt,mt,i.NEAREST),c===!0&&(He.length=0,N.length=0,He.push(i.COLOR_ATTACHMENT0+Ht),A.depthBuffer&&A.resolveDepthBuffer===!1&&(He.push(it),N.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ct)for(let Ht=0;Ht<v.length;Ht++){e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Ht]);const ye=n.get(v[Ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,ye,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function be(A){return Math.min(r.maxSamples,A.samples)}function Te(A){const v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function jt(A){const v=a.render.frame;l.get(A)!==v&&(l.set(A,v),A.update())}function ce(A,v){const J=A.colorSpace,lt=A.format,mt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||J!==dr&&J!==li&&(Ce.getTransfer(J)===Ne?(lt!==Un||mt!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),v}function ne(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=Q,this.resetTextureUnits=rt,this.setTexture2D=gt,this.setTexture2DArray=ot,this.setTexture3D=vt,this.setTextureCube=et,this.rebindTextures=Me,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=$t,this.useMultisampledRTT=Te}function R0(i,t){function e(n,r=li){let s;const a=Ce.getTransfer(r);if(n===ti)return i.UNSIGNED_BYTE;if(n===yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Eo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ll)return i.BYTE;if(n===ul)return i.SHORT;if(n===Ur)return i.UNSIGNED_SHORT;if(n===So)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===Fr)return i.HALF_FLOAT;if(n===fl)return i.ALPHA;if(n===dl)return i.RGB;if(n===Un)return i.RGBA;if(n===pl)return i.LUMINANCE;if(n===ml)return i.LUMINANCE_ALPHA;if(n===rr)return i.DEPTH_COMPONENT;if(n===fr)return i.DEPTH_STENCIL;if(n===gl)return i.RED;if(n===bo)return i.RED_INTEGER;if(n===_l)return i.RG;if(n===To)return i.RG_INTEGER;if(n===Ao)return i.RGBA_INTEGER;if(n===Ss||n===ys||n===Es||n===bs)if(a===Ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Ga||n===ka||n===Wa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xa||n===qa||n===Ya)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xa||n===qa)return a===Ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ya)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$a||n===Za||n===Ja||n===Ka||n===ja||n===Qa||n===to||n===eo||n===no||n===io||n===ro||n===so||n===ao||n===oo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$a)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Za)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ja)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qa)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===to)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eo)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===no)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===io)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ro)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===so)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ao)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oo)return a===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ts||n===co||n===lo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ts)return a===Ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===co)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vl||n===uo||n===ho||n===fo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ts)return s.COMPRESSED_RED_RGTC1_EXT;if(n===uo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ho)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const P0={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),h=this._getHandJoint(u,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const l=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=l.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(P0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const D0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L0=`
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

}`;class I0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new vn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new gn({vertexShader:D0,fragmentShader:L0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _n(new Gs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U0 extends mr{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,l=null,f=null,d=null,p=null,_=null;const x=new I0,m=e.getContextAttributes();let h=null,I=null;const w=[],b=[],G=new se;let B=null;const F=new An;F.viewport=new We;const q=new An;q.viewport=new We;const T=[F,q],S=new Qh;let z=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let Et=w[st];return Et===void 0&&(Et=new Ea,w[st]=Et),Et.getTargetRaySpace()},this.getControllerGrip=function(st){let Et=w[st];return Et===void 0&&(Et=new Ea,w[st]=Et),Et.getGripSpace()},this.getHand=function(st){let Et=w[st];return Et===void 0&&(Et=new Ea,w[st]=Et),Et.getHandSpace()};function Q(st){const Et=b.indexOf(st.inputSource);if(Et===-1)return;const $t=w[Et];$t!==void 0&&($t.update(st.inputSource,st.frame,u||a),$t.dispatchEvent({type:st.type,data:st.inputSource}))}function dt(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",dt),r.removeEventListener("inputsourceschange",gt);for(let st=0;st<w.length;st++){const Et=b[st];Et!==null&&(b[st]=null,w[st].disconnect(Et))}z=null,rt=null,x.reset(),t.setRenderTarget(h),p=null,d=null,f=null,r=null,I=null,Le.stop(),n.isPresenting=!1,t.setPixelRatio(B),t.setSize(G.width,G.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){s=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){o=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(st){u=st},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(st){if(r=st,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",dt),r.addEventListener("inputsourceschange",gt),m.xrCompatible!==!0&&await e.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(G),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let $t=null,Nt=null,ae=null;m.depth&&(ae=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$t=m.stencil?fr:rr,Nt=m.stencil?hr:Ci);const ue={colorFormat:e.RGBA8,depthFormat:ae,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(ue),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),I=new Ri(d.textureWidth,d.textureHeight,{format:Un,type:ti,depthTexture:new Ll(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,$t),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const $t={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,$t),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),I=new Ri(p.framebufferWidth,p.framebufferHeight,{format:Un,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}I.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),Le.setContext(r),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function gt(st){for(let Et=0;Et<st.removed.length;Et++){const $t=st.removed[Et],Nt=b.indexOf($t);Nt>=0&&(b[Nt]=null,w[Nt].disconnect($t))}for(let Et=0;Et<st.added.length;Et++){const $t=st.added[Et];let Nt=b.indexOf($t);if(Nt===-1){for(let ue=0;ue<w.length;ue++)if(ue>=b.length){b.push($t),Nt=ue;break}else if(b[ue]===null){b[ue]=$t,Nt=ue;break}if(Nt===-1)break}const ae=w[Nt];ae&&ae.connect($t)}}const ot=new P,vt=new P;function et(st,Et,$t){ot.setFromMatrixPosition(Et.matrixWorld),vt.setFromMatrixPosition($t.matrixWorld);const Nt=ot.distanceTo(vt),ae=Et.projectionMatrix.elements,ue=$t.projectionMatrix.elements,Me=ae[14]/(ae[10]-1),Oe=ae[14]/(ae[10]+1),Ae=(ae[9]+1)/ae[5],He=(ae[9]-1)/ae[5],N=(ae[8]-1)/ae[0],rn=(ue[8]+1)/ue[0],be=Me*N,Te=Me*rn,jt=Nt/(-N+rn),ce=jt*-N;if(Et.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(ce),st.translateZ(jt),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),ae[10]===-1)st.projectionMatrix.copy(Et.projectionMatrix),st.projectionMatrixInverse.copy(Et.projectionMatrixInverse);else{const ne=Me+jt,A=Oe+jt,v=be-ce,J=Te+(Nt-ce),lt=Ae*Oe/A*ne,mt=He*Oe/A*ne;st.projectionMatrix.makePerspective(v,J,lt,mt,ne,A),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function Ut(st,Et){Et===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(Et.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(r===null)return;let Et=st.near,$t=st.far;x.texture!==null&&(x.depthNear>0&&(Et=x.depthNear),x.depthFar>0&&($t=x.depthFar)),S.near=q.near=F.near=Et,S.far=q.far=F.far=$t,(z!==S.near||rt!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),z=S.near,rt=S.far),F.layers.mask=st.layers.mask|2,q.layers.mask=st.layers.mask|4,S.layers.mask=F.layers.mask|q.layers.mask;const Nt=st.parent,ae=S.cameras;Ut(S,Nt);for(let ue=0;ue<ae.length;ue++)Ut(ae[ue],Nt);ae.length===2?et(S,F,q):S.projectionMatrix.copy(F.projectionMatrix),Vt(st,S,Nt)};function Vt(st,Et,$t){$t===null?st.matrix.copy(Et.matrixWorld):(st.matrix.copy($t.matrixWorld),st.matrix.invert(),st.matrix.multiply(Et.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(Et.projectionMatrix),st.projectionMatrixInverse.copy(Et.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Nr*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(st){c=st,d!==null&&(d.fixedFoveation=st),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=st)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let re=null;function xe(st,Et){if(l=Et.getViewerPose(u||a),_=Et,l!==null){const $t=l.views;p!==null&&(t.setRenderTargetFramebuffer(I,p.framebuffer),t.setRenderTarget(I));let Nt=!1;$t.length!==S.cameras.length&&(S.cameras.length=0,Nt=!0);for(let ue=0;ue<$t.length;ue++){const Me=$t[ue];let Oe=null;if(p!==null)Oe=p.getViewport(Me);else{const He=f.getViewSubImage(d,Me);Oe=He.viewport,ue===0&&(t.setRenderTargetTextures(I,He.colorTexture,d.ignoreDepthValues?void 0:He.depthStencilTexture),t.setRenderTarget(I))}let Ae=T[ue];Ae===void 0&&(Ae=new An,Ae.layers.enable(ue),Ae.viewport=new We,T[ue]=Ae),Ae.matrix.fromArray(Me.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Me.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ue===0&&(S.matrix.copy(Ae.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Nt===!0&&S.cameras.push(Ae)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const ue=f.getDepthInformation($t[0]);ue&&ue.isValid&&ue.texture&&x.init(t,ue,r.renderState)}}for(let $t=0;$t<w.length;$t++){const Nt=b[$t],ae=w[$t];Nt!==null&&ae!==void 0&&ae.update(Nt,Et,u||a)}re&&re(st,Et),Et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Et}),_=null}const Le=new Fl;Le.setAnimationLoop(xe),this.setAnimationLoop=function(st){re=st},this.dispose=function(){}}}const vi=new zn,N0=new Ve;function F0(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,wl(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,I,w,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),l(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,b)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,I,w):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Sn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Sn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const I=t.get(h),w=I.envMap,b=I.envMapRotation;w&&(m.envMap.value=w,vi.copy(b),vi.x*=-1,vi.y*=-1,vi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(N0.makeRotationFromEuler(vi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,I,w){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*I,m.scale.value=w*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,I){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=I.texture,m.transmissionSamplerSize.value.set(I.width,I.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const I=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(I.matrixWorld),m.nearDistance.value=I.shadow.camera.near,m.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function O0(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(I,w){const b=w.program;n.uniformBlockBinding(I,b)}function u(I,w){let b=r[I.id];b===void 0&&(_(I),b=l(I),r[I.id]=b,I.addEventListener("dispose",m));const G=w.program;n.updateUBOMapping(I,G);const B=t.render.frame;s[I.id]!==B&&(d(I),s[I.id]=B)}function l(I){const w=f();I.__bindingPointIndex=w;const b=i.createBuffer(),G=I.__size,B=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,G,B),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,b),b}function f(){for(let I=0;I<o;I++)if(a.indexOf(I)===-1)return a.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(I){const w=r[I.id],b=I.uniforms,G=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let B=0,F=b.length;B<F;B++){const q=Array.isArray(b[B])?b[B]:[b[B]];for(let T=0,S=q.length;T<S;T++){const z=q[T];if(p(z,B,T,G)===!0){const rt=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let dt=0;for(let gt=0;gt<Q.length;gt++){const ot=Q[gt],vt=x(ot);typeof ot=="number"||typeof ot=="boolean"?(z.__data[0]=ot,i.bufferSubData(i.UNIFORM_BUFFER,rt+dt,z.__data)):ot.isMatrix3?(z.__data[0]=ot.elements[0],z.__data[1]=ot.elements[1],z.__data[2]=ot.elements[2],z.__data[3]=0,z.__data[4]=ot.elements[3],z.__data[5]=ot.elements[4],z.__data[6]=ot.elements[5],z.__data[7]=0,z.__data[8]=ot.elements[6],z.__data[9]=ot.elements[7],z.__data[10]=ot.elements[8],z.__data[11]=0):(ot.toArray(z.__data,dt),dt+=vt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,rt,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(I,w,b,G){const B=I.value,F=w+"_"+b;if(G[F]===void 0)return typeof B=="number"||typeof B=="boolean"?G[F]=B:G[F]=B.clone(),!0;{const q=G[F];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return G[F]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function _(I){const w=I.uniforms;let b=0;const G=16;for(let F=0,q=w.length;F<q;F++){const T=Array.isArray(w[F])?w[F]:[w[F]];for(let S=0,z=T.length;S<z;S++){const rt=T[S],Q=Array.isArray(rt.value)?rt.value:[rt.value];for(let dt=0,gt=Q.length;dt<gt;dt++){const ot=Q[dt],vt=x(ot),et=b%G,Ut=et%vt.boundary,Vt=et+Ut;b+=Ut,Vt!==0&&G-Vt<vt.storage&&(b+=G-Vt),rt.__data=new Float32Array(vt.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=b,b+=vt.storage}}}const B=b%G;return B>0&&(b+=G-B),I.__size=b,I.__cache={},this}function x(I){const w={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(w.boundary=4,w.storage=4):I.isVector2?(w.boundary=8,w.storage=8):I.isVector3||I.isColor?(w.boundary=16,w.storage=12):I.isVector4?(w.boundary=16,w.storage=16):I.isMatrix3?(w.boundary=48,w.storage=48):I.isMatrix4?(w.boundary=64,w.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),w}function m(I){const w=I.target;w.removeEventListener("dispose",m);const b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function h(){for(const I in r)i.deleteBuffer(r[I]);a=[],r={},s={}}return{bind:c,update:u,dispose:h}}class B0{constructor(t={}){const{canvas:e=rh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,h=null;const I=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=hi,this.toneMappingExposure=1;const b=this;let G=!1,B=0,F=0,q=null,T=-1,S=null;const z=new We,rt=new We;let Q=null;const dt=new ee(0);let gt=0,ot=e.width,vt=e.height,et=1,Ut=null,Vt=null;const re=new We(0,0,ot,vt),xe=new We(0,0,ot,vt);let Le=!1;const st=new Dl;let Et=!1,$t=!1;this.transmissionResolutionScale=1;const Nt=new Ve,ae=new Ve,ue=new P,Me=new We,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function He(){return q===null?et:1}let N=n;function rn(g,L){return e.getContext(g,L)}try{const g={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mo}`),e.addEventListener("webglcontextlost",U,!1),e.addEventListener("webglcontextrestored",V,!1),e.addEventListener("webglcontextcreationerror",X,!1),N===null){const L="webgl2";if(N=rn(L,g),N===null)throw rn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw console.error("THREE.WebGLRenderer: "+g.message),g}let be,Te,jt,ce,ne,A,v,J,lt,mt,it,zt,Ct,Ht,ye,Mt,M,E,R,C,k,Z,$,y;function H(){be=new Yp(N),be.init(),Z=new R0(N,be),Te=new Hp(N,be,t,Z),jt=new w0(N,be),Te.reverseDepthBuffer&&d&&jt.buffers.depth.setReversed(!0),ce=new Jp(N),ne=new p0,A=new C0(N,be,jt,ne,Te,Z,ce),v=new kp(b),J=new qp(b),lt=new nf(N),$=new zp(N,lt),mt=new $p(N,lt,ce,$),it=new jp(N,mt,lt,ce),R=new Kp(N,Te,A),Mt=new Gp(ne),zt=new d0(b,v,J,be,Te,$,Mt),Ct=new F0(b,ne),Ht=new g0,ye=new y0(be),E=new Bp(b,v,J,jt,it,p,c),M=new T0(b,it,Te),y=new O0(N,ce,Te,jt),C=new Vp(N,be,ce),k=new Zp(N,be,ce),ce.programs=zt.programs,b.capabilities=Te,b.extensions=be,b.properties=ne,b.renderLists=Ht,b.shadowMap=M,b.state=jt,b.info=ce}H();const D=new U0(b,N);this.xr=D,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const g=be.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=be.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(g){g!==void 0&&(et=g,this.setSize(ot,vt,!1))},this.getSize=function(g){return g.set(ot,vt)},this.setSize=function(g,L,W=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=g,vt=L,e.width=Math.floor(g*et),e.height=Math.floor(L*et),W===!0&&(e.style.width=g+"px",e.style.height=L+"px"),this.setViewport(0,0,g,L)},this.getDrawingBufferSize=function(g){return g.set(ot*et,vt*et).floor()},this.setDrawingBufferSize=function(g,L,W){ot=g,vt=L,et=W,e.width=Math.floor(g*W),e.height=Math.floor(L*W),this.setViewport(0,0,g,L)},this.getCurrentViewport=function(g){return g.copy(z)},this.getViewport=function(g){return g.copy(re)},this.setViewport=function(g,L,W,Y){g.isVector4?re.set(g.x,g.y,g.z,g.w):re.set(g,L,W,Y),jt.viewport(z.copy(re).multiplyScalar(et).round())},this.getScissor=function(g){return g.copy(xe)},this.setScissor=function(g,L,W,Y){g.isVector4?xe.set(g.x,g.y,g.z,g.w):xe.set(g,L,W,Y),jt.scissor(rt.copy(xe).multiplyScalar(et).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(g){jt.setScissorTest(Le=g)},this.setOpaqueSort=function(g){Ut=g},this.setTransparentSort=function(g){Vt=g},this.getClearColor=function(g){return g.copy(E.getClearColor())},this.setClearColor=function(){E.setClearColor.apply(E,arguments)},this.getClearAlpha=function(){return E.getClearAlpha()},this.setClearAlpha=function(){E.setClearAlpha.apply(E,arguments)},this.clear=function(g=!0,L=!0,W=!0){let Y=0;if(g){let O=!1;if(q!==null){const nt=q.texture.format;O=nt===Ao||nt===To||nt===bo}if(O){const nt=q.texture.type,St=nt===ti||nt===Ci||nt===Ur||nt===hr||nt===yo||nt===Eo,Tt=E.getClearColor(),Pt=E.getClearAlpha(),qt=Tt.r,te=Tt.g,K=Tt.b;St?(_[0]=qt,_[1]=te,_[2]=K,_[3]=Pt,N.clearBufferuiv(N.COLOR,0,_)):(x[0]=qt,x[1]=te,x[2]=K,x[3]=Pt,N.clearBufferiv(N.COLOR,0,x))}else Y|=N.COLOR_BUFFER_BIT}L&&(Y|=N.DEPTH_BUFFER_BIT),W&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",U,!1),e.removeEventListener("webglcontextrestored",V,!1),e.removeEventListener("webglcontextcreationerror",X,!1),E.dispose(),Ht.dispose(),ye.dispose(),ne.dispose(),v.dispose(),J.dispose(),it.dispose(),$.dispose(),y.dispose(),zt.dispose(),D.dispose(),D.removeEventListener("sessionstart",Ft),D.removeEventListener("sessionend",kt),Wt.stop()};function U(g){g.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const g=ce.autoReset,L=M.enabled,W=M.autoUpdate,Y=M.needsUpdate,O=M.type;H(),ce.autoReset=g,M.enabled=L,M.autoUpdate=W,M.needsUpdate=Y,M.type=O}function X(g){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function tt(g){const L=g.target;L.removeEventListener("dispose",tt),ct(L)}function ct(g){_t(g),ne.remove(g)}function _t(g){const L=ne.get(g).programs;L!==void 0&&(L.forEach(function(W){zt.releaseProgram(W)}),g.isShaderMaterial&&zt.releaseShaderCache(g))}this.renderBufferDirect=function(g,L,W,Y,O,nt){L===null&&(L=Oe);const St=O.isMesh&&O.matrixWorld.determinant()<0,Tt=Xt(g,L,W,Y,O);jt.setMaterial(Y,St);let Pt=W.index,qt=1;if(Y.wireframe===!0){if(Pt=mt.getWireframeAttribute(W),Pt===void 0)return;qt=2}const te=W.drawRange,K=W.attributes.position;let ft=te.start*qt,ht=(te.start+te.count)*qt;nt!==null&&(ft=Math.max(ft,nt.start*qt),ht=Math.min(ht,(nt.start+nt.count)*qt)),Pt!==null?(ft=Math.max(ft,0),ht=Math.min(ht,Pt.count)):K!=null&&(ft=Math.max(ft,0),ht=Math.min(ht,K.count));const yt=ht-ft;if(yt<0||yt===1/0)return;$.setup(O,Y,Tt,W,Pt);let Gt,wt=C;if(Pt!==null&&(Gt=lt.get(Pt),wt=k,wt.setIndex(Gt)),O.isMesh)Y.wireframe===!0?(jt.setLineWidth(Y.wireframeLinewidth*He()),wt.setMode(N.LINES)):wt.setMode(N.TRIANGLES);else if(O.isLine){let j=Y.linewidth;j===void 0&&(j=1),jt.setLineWidth(j*He()),O.isLineSegments?wt.setMode(N.LINES):O.isLineLoop?wt.setMode(N.LINE_LOOP):wt.setMode(N.LINE_STRIP)}else O.isPoints?wt.setMode(N.POINTS):O.isSprite&&wt.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)wt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))wt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const j=O._multiDrawStarts,Jt=O._multiDrawCounts,ie=O._multiDrawCount,pe=Pt?lt.get(Pt).bytesPerElement:1,he=ne.get(Y).currentProgram.getUniforms();for(let fe=0;fe<ie;fe++)he.setValue(N,"_gl_DrawID",fe),wt.render(j[fe]/pe,Jt[fe])}else if(O.isInstancedMesh)wt.renderInstances(ft,yt,O.count);else if(W.isInstancedBufferGeometry){const j=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Jt=Math.min(W.instanceCount,j);wt.renderInstances(ft,yt,Jt)}else wt.render(ft,yt)};function pt(g,L,W){g.transparent===!0&&g.side===Ln&&g.forceSinglePass===!1?(g.side=Sn,g.needsUpdate=!0,bt(g,L,W),g.side=fi,g.needsUpdate=!0,bt(g,L,W),g.side=Ln):bt(g,L,W)}this.compile=function(g,L,W=null){W===null&&(W=g),h=ye.get(W),h.init(L),w.push(h),W.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),g!==W&&g.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();const Y=new Set;return g.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const nt=O.material;if(nt)if(Array.isArray(nt))for(let St=0;St<nt.length;St++){const Tt=nt[St];pt(Tt,W,O),Y.add(Tt)}else pt(nt,W,O),Y.add(nt)}),w.pop(),h=null,Y},this.compileAsync=function(g,L,W=null){const Y=this.compile(g,L,W);return new Promise(O=>{function nt(){if(Y.forEach(function(St){ne.get(St).currentProgram.isReady()&&Y.delete(St)}),Y.size===0){O(g);return}setTimeout(nt,10)}be.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Bt=null;function Rt(g){Bt&&Bt(g)}function Ft(){Wt.stop()}function kt(){Wt.start()}const Wt=new Fl;Wt.setAnimationLoop(Rt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(g){Bt=g,D.setAnimationLoop(g),g===null?Wt.stop():Wt.start()},D.addEventListener("sessionstart",Ft),D.addEventListener("sessionend",kt),this.render=function(g,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(L),L=D.getCamera()),g.isScene===!0&&g.onBeforeRender(b,g,L,q),h=ye.get(g,w.length),h.init(L),w.push(h),ae.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),st.setFromProjectionMatrix(ae),$t=this.localClippingEnabled,Et=Mt.init(this.clippingPlanes,$t),m=Ht.get(g,I.length),m.init(),I.push(m),D.enabled===!0&&D.isPresenting===!0){const nt=b.xr.getDepthSensingMesh();nt!==null&&Dt(nt,L,-1/0,b.sortObjects)}Dt(g,L,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(Ut,Vt),Ae=D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1,Ae&&E.addToRenderList(m,g),this.info.render.frame++,Et===!0&&Mt.beginShadows();const W=h.state.shadowsArray;M.render(W,g,L),Et===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,O=m.transmissive;if(h.setupLights(),L.isArrayCamera){const nt=L.cameras;if(O.length>0)for(let St=0,Tt=nt.length;St<Tt;St++){const Pt=nt[St];Zt(Y,O,g,Pt)}Ae&&E.render(g);for(let St=0,Tt=nt.length;St<Tt;St++){const Pt=nt[St];Yt(m,g,Pt,Pt.viewport)}}else O.length>0&&Zt(Y,O,g,L),Ae&&E.render(g),Yt(m,g,L);q!==null&&F===0&&(A.updateMultisampleRenderTarget(q),A.updateRenderTargetMipmap(q)),g.isScene===!0&&g.onAfterRender(b,g,L),$.resetDefaultState(),T=-1,S=null,w.pop(),w.length>0?(h=w[w.length-1],Et===!0&&Mt.setGlobalState(b.clippingPlanes,h.state.camera)):h=null,I.pop(),I.length>0?m=I[I.length-1]:m=null};function Dt(g,L,W,Y){if(g.visible===!1)return;if(g.layers.test(L.layers)){if(g.isGroup)W=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(L);else if(g.isLight)h.pushLight(g),g.castShadow&&h.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||st.intersectsSprite(g)){Y&&Me.setFromMatrixPosition(g.matrixWorld).applyMatrix4(ae);const St=it.update(g),Tt=g.material;Tt.visible&&m.push(g,St,Tt,W,Me.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||st.intersectsObject(g))){const St=it.update(g),Tt=g.material;if(Y&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),Me.copy(g.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Me.copy(St.boundingSphere.center)),Me.applyMatrix4(g.matrixWorld).applyMatrix4(ae)),Array.isArray(Tt)){const Pt=St.groups;for(let qt=0,te=Pt.length;qt<te;qt++){const K=Pt[qt],ft=Tt[K.materialIndex];ft&&ft.visible&&m.push(g,St,ft,W,Me.z,K)}}else Tt.visible&&m.push(g,St,Tt,W,Me.z,null)}}const nt=g.children;for(let St=0,Tt=nt.length;St<Tt;St++)Dt(nt[St],L,W,Y)}function Yt(g,L,W,Y){const O=g.opaque,nt=g.transmissive,St=g.transparent;h.setupLightsView(W),Et===!0&&Mt.setGlobalState(b.clippingPlanes,W),Y&&jt.viewport(z.copy(Y)),O.length>0&&ut(O,L,W),nt.length>0&&ut(nt,L,W),St.length>0&&ut(St,L,W),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function Zt(g,L,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[Y.id]===void 0&&(h.state.transmissionRenderTarget[Y.id]=new Ri(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?Fr:ti,minFilter:wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const nt=h.state.transmissionRenderTarget[Y.id],St=Y.viewport||z;nt.setSize(St.z*b.transmissionResolutionScale,St.w*b.transmissionResolutionScale);const Tt=b.getRenderTarget();b.setRenderTarget(nt),b.getClearColor(dt),gt=b.getClearAlpha(),gt<1&&b.setClearColor(16777215,.5),b.clear(),Ae&&E.render(W);const Pt=b.toneMapping;b.toneMapping=hi;const qt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),h.setupLightsView(Y),Et===!0&&Mt.setGlobalState(b.clippingPlanes,Y),ut(g,W,Y),A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt),be.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let K=0,ft=L.length;K<ft;K++){const ht=L[K],yt=ht.object,Gt=ht.geometry,wt=ht.material,j=ht.group;if(wt.side===Ln&&yt.layers.test(Y.layers)){const Jt=wt.side;wt.side=Sn,wt.needsUpdate=!0,xt(yt,W,Y,Gt,wt,j),wt.side=Jt,wt.needsUpdate=!0,te=!0}}te===!0&&(A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt))}b.setRenderTarget(Tt),b.setClearColor(dt,gt),qt!==void 0&&(Y.viewport=qt),b.toneMapping=Pt}function ut(g,L,W){const Y=L.isScene===!0?L.overrideMaterial:null;for(let O=0,nt=g.length;O<nt;O++){const St=g[O],Tt=St.object,Pt=St.geometry,qt=Y===null?St.material:Y,te=St.group;Tt.layers.test(W.layers)&&xt(Tt,L,W,Pt,qt,te)}}function xt(g,L,W,Y,O,nt){g.onBeforeRender(b,L,W,Y,O,nt),g.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),O.onBeforeRender(b,L,W,Y,g,nt),O.transparent===!0&&O.side===Ln&&O.forceSinglePass===!1?(O.side=Sn,O.needsUpdate=!0,b.renderBufferDirect(W,L,Y,O,g,nt),O.side=fi,O.needsUpdate=!0,b.renderBufferDirect(W,L,Y,O,g,nt),O.side=Ln):b.renderBufferDirect(W,L,Y,O,g,nt),g.onAfterRender(b,L,W,Y,O,nt)}function bt(g,L,W){L.isScene!==!0&&(L=Oe);const Y=ne.get(g),O=h.state.lights,nt=h.state.shadowsArray,St=O.state.version,Tt=zt.getParameters(g,O.state,nt,L,W),Pt=zt.getProgramCacheKey(Tt);let qt=Y.programs;Y.environment=g.isMeshStandardMaterial?L.environment:null,Y.fog=L.fog,Y.envMap=(g.isMeshStandardMaterial?J:v).get(g.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&g.envMap===null?L.environmentRotation:g.envMapRotation,qt===void 0&&(g.addEventListener("dispose",tt),qt=new Map,Y.programs=qt);let te=qt.get(Pt);if(te!==void 0){if(Y.currentProgram===te&&Y.lightsStateVersion===St)return At(g,Tt),te}else Tt.uniforms=zt.getUniforms(g),g.onBeforeCompile(Tt,b),te=zt.acquireProgram(Tt,Pt),qt.set(Pt,te),Y.uniforms=Tt.uniforms;const K=Y.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(K.clippingPlanes=Mt.uniform),At(g,Tt),Y.needsLights=Ot(g),Y.lightsStateVersion=St,Y.needsLights&&(K.ambientLightColor.value=O.state.ambient,K.lightProbe.value=O.state.probe,K.directionalLights.value=O.state.directional,K.directionalLightShadows.value=O.state.directionalShadow,K.spotLights.value=O.state.spot,K.spotLightShadows.value=O.state.spotShadow,K.rectAreaLights.value=O.state.rectArea,K.ltc_1.value=O.state.rectAreaLTC1,K.ltc_2.value=O.state.rectAreaLTC2,K.pointLights.value=O.state.point,K.pointLightShadows.value=O.state.pointShadow,K.hemisphereLights.value=O.state.hemi,K.directionalShadowMap.value=O.state.directionalShadowMap,K.directionalShadowMatrix.value=O.state.directionalShadowMatrix,K.spotShadowMap.value=O.state.spotShadowMap,K.spotLightMatrix.value=O.state.spotLightMatrix,K.spotLightMap.value=O.state.spotLightMap,K.pointShadowMap.value=O.state.pointShadowMap,K.pointShadowMatrix.value=O.state.pointShadowMatrix),Y.currentProgram=te,Y.uniformsList=null,te}function at(g){if(g.uniformsList===null){const L=g.currentProgram.getUniforms();g.uniformsList=As.seqWithValue(L.seq,g.uniforms)}return g.uniformsList}function At(g,L){const W=ne.get(g);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function Xt(g,L,W,Y,O){L.isScene!==!0&&(L=Oe),A.resetTextureUnits();const nt=L.fog,St=Y.isMeshStandardMaterial?L.environment:null,Tt=q===null?b.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:dr,Pt=(Y.isMeshStandardMaterial?J:v).get(Y.envMap||St),qt=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,te=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),K=!!W.morphAttributes.position,ft=!!W.morphAttributes.normal,ht=!!W.morphAttributes.color;let yt=hi;Y.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(yt=b.toneMapping);const Gt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,wt=Gt!==void 0?Gt.length:0,j=ne.get(Y),Jt=h.state.lights;if(Et===!0&&($t===!0||g!==S)){const De=g===S&&Y.id===T;Mt.setState(Y,g,De)}let ie=!1;Y.version===j.__version?(j.needsLights&&j.lightsStateVersion!==Jt.state.version||j.outputColorSpace!==Tt||O.isBatchedMesh&&j.batching===!1||!O.isBatchedMesh&&j.batching===!0||O.isBatchedMesh&&j.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&j.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&j.instancing===!1||!O.isInstancedMesh&&j.instancing===!0||O.isSkinnedMesh&&j.skinning===!1||!O.isSkinnedMesh&&j.skinning===!0||O.isInstancedMesh&&j.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&j.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&j.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&j.instancingMorph===!1&&O.morphTexture!==null||j.envMap!==Pt||Y.fog===!0&&j.fog!==nt||j.numClippingPlanes!==void 0&&(j.numClippingPlanes!==Mt.numPlanes||j.numIntersection!==Mt.numIntersection)||j.vertexAlphas!==qt||j.vertexTangents!==te||j.morphTargets!==K||j.morphNormals!==ft||j.morphColors!==ht||j.toneMapping!==yt||j.morphTargetsCount!==wt)&&(ie=!0):(ie=!0,j.__version=Y.version);let pe=j.currentProgram;ie===!0&&(pe=bt(Y,L,O));let he=!1,fe=!1,Re=!1;const me=pe.getUniforms(),Pe=j.uniforms;if(jt.useProgram(pe.program)&&(he=!0,fe=!0,Re=!0),Y.id!==T&&(T=Y.id,fe=!0),he||S!==g){jt.buffers.depth.getReversed()?(Nt.copy(g.projectionMatrix),ah(Nt),oh(Nt),me.setValue(N,"projectionMatrix",Nt)):me.setValue(N,"projectionMatrix",g.projectionMatrix),me.setValue(N,"viewMatrix",g.matrixWorldInverse);const ze=me.map.cameraPosition;ze!==void 0&&ze.setValue(N,ue.setFromMatrixPosition(g.matrixWorld)),Te.logarithmicDepthBuffer&&me.setValue(N,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&me.setValue(N,"isOrthographic",g.isOrthographicCamera===!0),S!==g&&(S=g,fe=!0,Re=!0)}if(O.isSkinnedMesh){me.setOptional(N,O,"bindMatrix"),me.setOptional(N,O,"bindMatrixInverse");const De=O.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),me.setValue(N,"boneTexture",De.boneTexture,A))}O.isBatchedMesh&&(me.setOptional(N,O,"batchingTexture"),me.setValue(N,"batchingTexture",O._matricesTexture,A),me.setOptional(N,O,"batchingIdTexture"),me.setValue(N,"batchingIdTexture",O._indirectTexture,A),me.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&me.setValue(N,"batchingColorTexture",O._colorsTexture,A));const Ie=W.morphAttributes;if((Ie.position!==void 0||Ie.normal!==void 0||Ie.color!==void 0)&&R.update(O,W,pe),(fe||j.receiveShadow!==O.receiveShadow)&&(j.receiveShadow=O.receiveShadow,me.setValue(N,"receiveShadow",O.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Pe.envMap.value=Pt,Pe.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&L.environment!==null&&(Pe.envMapIntensity.value=L.environmentIntensity),fe&&(me.setValue(N,"toneMappingExposure",b.toneMappingExposure),j.needsLights&&Lt(Pe,Re),nt&&Y.fog===!0&&Ct.refreshFogUniforms(Pe,nt),Ct.refreshMaterialUniforms(Pe,Y,et,vt,h.state.transmissionRenderTarget[g.id]),As.upload(N,at(j),Pe,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(As.upload(N,at(j),Pe,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&me.setValue(N,"center",O.center),me.setValue(N,"modelViewMatrix",O.modelViewMatrix),me.setValue(N,"normalMatrix",O.normalMatrix),me.setValue(N,"modelMatrix",O.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const De=Y.uniformsGroups;for(let ze=0,xn=De.length;ze<xn;ze++){const yn=De[ze];y.update(yn,pe),y.bind(yn,pe)}}return pe}function Lt(g,L){g.ambientLightColor.needsUpdate=L,g.lightProbe.needsUpdate=L,g.directionalLights.needsUpdate=L,g.directionalLightShadows.needsUpdate=L,g.pointLights.needsUpdate=L,g.pointLightShadows.needsUpdate=L,g.spotLights.needsUpdate=L,g.spotLightShadows.needsUpdate=L,g.rectAreaLights.needsUpdate=L,g.hemisphereLights.needsUpdate=L}function Ot(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(g,L,W){ne.get(g.texture).__webglTexture=L,ne.get(g.depthTexture).__webglTexture=W;const Y=ne.get(g);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=W===void 0,Y.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(g,L){const W=ne.get(g);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0};const oe=N.createFramebuffer();this.setRenderTarget=function(g,L=0,W=0){q=g,B=L,F=W;let Y=!0,O=null,nt=!1,St=!1;if(g){const Pt=ne.get(g);if(Pt.__useDefaultFramebuffer!==void 0)jt.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1;else if(Pt.__webglFramebuffer===void 0)A.setupRenderTarget(g);else if(Pt.__hasExternalTextures)A.rebindTextures(g,ne.get(g.texture).__webglTexture,ne.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const K=g.depthTexture;if(Pt.__boundDepthTexture!==K){if(K!==null&&ne.has(K)&&(g.width!==K.image.width||g.height!==K.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(g)}}const qt=g.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(St=!0);const te=ne.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(te[L])?O=te[L][W]:O=te[L],nt=!0):g.samples>0&&A.useMultisampledRTT(g)===!1?O=ne.get(g).__webglMultisampledFramebuffer:Array.isArray(te)?O=te[W]:O=te,z.copy(g.viewport),rt.copy(g.scissor),Q=g.scissorTest}else z.copy(re).multiplyScalar(et).floor(),rt.copy(xe).multiplyScalar(et).floor(),Q=Le;if(W!==0&&(O=oe),jt.bindFramebuffer(N.FRAMEBUFFER,O)&&Y&&jt.drawBuffers(g,O),jt.viewport(z),jt.scissor(rt),jt.setScissorTest(Q),nt){const Pt=ne.get(g.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,Pt.__webglTexture,W)}else if(St){const Pt=ne.get(g.texture),qt=L;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pt.__webglTexture,W,qt)}else if(g!==null&&W!==0){const Pt=ne.get(g.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Pt.__webglTexture,W)}T=-1},this.readRenderTargetPixels=function(g,L,W,Y,O,nt,St){if(!(g&&g.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=ne.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&St!==void 0&&(Tt=Tt[St]),Tt){jt.bindFramebuffer(N.FRAMEBUFFER,Tt);try{const Pt=g.texture,qt=Pt.format,te=Pt.type;if(!Te.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=g.width-Y&&W>=0&&W<=g.height-O&&N.readPixels(L,W,Y,O,Z.convert(qt),Z.convert(te),nt)}finally{const Pt=q!==null?ne.get(q).__webglFramebuffer:null;jt.bindFramebuffer(N.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(g,L,W,Y,O,nt,St){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=ne.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&St!==void 0&&(Tt=Tt[St]),Tt){const Pt=g.texture,qt=Pt.format,te=Pt.type;if(!Te.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=g.width-Y&&W>=0&&W<=g.height-O){jt.bindFramebuffer(N.FRAMEBUFFER,Tt);const K=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,K),N.bufferData(N.PIXEL_PACK_BUFFER,nt.byteLength,N.STREAM_READ),N.readPixels(L,W,Y,O,Z.convert(qt),Z.convert(te),0);const ft=q!==null?ne.get(q).__webglFramebuffer:null;jt.bindFramebuffer(N.FRAMEBUFFER,ft);const ht=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await sh(N,ht,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,K),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,nt),N.deleteBuffer(K),N.deleteSync(ht),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(g,L=null,W=0){g.isTexture!==!0&&(Qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,g=arguments[1]);const Y=Math.pow(2,-W),O=Math.floor(g.image.width*Y),nt=Math.floor(g.image.height*Y),St=L!==null?L.x:0,Tt=L!==null?L.y:0;A.setTexture2D(g,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,St,Tt,O,nt),jt.unbindTexture()};const Qt=N.createFramebuffer(),_e=N.createFramebuffer();this.copyTextureToTexture=function(g,L,W=null,Y=null,O=0,nt=null){g.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,g=arguments[1],L=arguments[2],nt=arguments[3]||0,W=null),nt===null&&(O!==0?(Qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=O,O=0):nt=0);let St,Tt,Pt,qt,te,K,ft,ht,yt;const Gt=g.isCompressedTexture?g.mipmaps[nt]:g.image;if(W!==null)St=W.max.x-W.min.x,Tt=W.max.y-W.min.y,Pt=W.isBox3?W.max.z-W.min.z:1,qt=W.min.x,te=W.min.y,K=W.isBox3?W.min.z:0;else{const Ie=Math.pow(2,-O);St=Math.floor(Gt.width*Ie),Tt=Math.floor(Gt.height*Ie),g.isDataArrayTexture?Pt=Gt.depth:g.isData3DTexture?Pt=Math.floor(Gt.depth*Ie):Pt=1,qt=0,te=0,K=0}Y!==null?(ft=Y.x,ht=Y.y,yt=Y.z):(ft=0,ht=0,yt=0);const wt=Z.convert(L.format),j=Z.convert(L.type);let Jt;L.isData3DTexture?(A.setTexture3D(L,0),Jt=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(A.setTexture2DArray(L,0),Jt=N.TEXTURE_2D_ARRAY):(A.setTexture2D(L,0),Jt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);const ie=N.getParameter(N.UNPACK_ROW_LENGTH),pe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),he=N.getParameter(N.UNPACK_SKIP_PIXELS),fe=N.getParameter(N.UNPACK_SKIP_ROWS),Re=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Gt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Gt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,qt),N.pixelStorei(N.UNPACK_SKIP_ROWS,te),N.pixelStorei(N.UNPACK_SKIP_IMAGES,K);const me=g.isDataArrayTexture||g.isData3DTexture,Pe=L.isDataArrayTexture||L.isData3DTexture;if(g.isDepthTexture){const Ie=ne.get(g),De=ne.get(L),ze=ne.get(Ie.__renderTarget),xn=ne.get(De.__renderTarget);jt.bindFramebuffer(N.READ_FRAMEBUFFER,ze.__webglFramebuffer),jt.bindFramebuffer(N.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let yn=0;yn<Pt;yn++)me&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ne.get(g).__webglTexture,O,K+yn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ne.get(L).__webglTexture,nt,yt+yn)),N.blitFramebuffer(qt,te,St,Tt,ft,ht,St,Tt,N.DEPTH_BUFFER_BIT,N.NEAREST);jt.bindFramebuffer(N.READ_FRAMEBUFFER,null),jt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(O!==0||g.isRenderTargetTexture||ne.has(g)){const Ie=ne.get(g),De=ne.get(L);jt.bindFramebuffer(N.READ_FRAMEBUFFER,Qt),jt.bindFramebuffer(N.DRAW_FRAMEBUFFER,_e);for(let ze=0;ze<Pt;ze++)me?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ie.__webglTexture,O,K+ze):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ie.__webglTexture,O),Pe?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.__webglTexture,nt,yt+ze):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,De.__webglTexture,nt),O!==0?N.blitFramebuffer(qt,te,St,Tt,ft,ht,St,Tt,N.COLOR_BUFFER_BIT,N.NEAREST):Pe?N.copyTexSubImage3D(Jt,nt,ft,ht,yt+ze,qt,te,St,Tt):N.copyTexSubImage2D(Jt,nt,ft,ht,qt,te,St,Tt);jt.bindFramebuffer(N.READ_FRAMEBUFFER,null),jt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Pe?g.isDataTexture||g.isData3DTexture?N.texSubImage3D(Jt,nt,ft,ht,yt,St,Tt,Pt,wt,j,Gt.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(Jt,nt,ft,ht,yt,St,Tt,Pt,wt,Gt.data):N.texSubImage3D(Jt,nt,ft,ht,yt,St,Tt,Pt,wt,j,Gt):g.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,nt,ft,ht,St,Tt,wt,j,Gt.data):g.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,nt,ft,ht,Gt.width,Gt.height,wt,Gt.data):N.texSubImage2D(N.TEXTURE_2D,nt,ft,ht,St,Tt,wt,j,Gt);N.pixelStorei(N.UNPACK_ROW_LENGTH,ie),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,he),N.pixelStorei(N.UNPACK_SKIP_ROWS,fe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Re),nt===0&&L.generateMipmaps&&N.generateMipmap(Jt),jt.unbindTexture()},this.copyTextureToTexture3D=function(g,L,W=null,Y=null,O=0){return g.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,Y=arguments[1]||null,g=arguments[2],L=arguments[3],O=arguments[4]||0),Qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(g,L,W,Y,O)},this.initRenderTarget=function(g){ne.get(g).__webglFramebuffer===void 0&&A.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?A.setTextureCube(g,0):g.isData3DTexture?A.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?A.setTexture2DArray(g,0):A.setTexture2D(g,0),jt.unbindTexture()},this.resetState=function(){B=0,F=0,q=null,jt.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ce._getUnpackColorSpace()}}/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=(i,t,e=[])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",i);return Object.keys(t).forEach(r=>{n.setAttribute(r,String(t[r]))}),e.length&&e.forEach(r=>{const s=Hl(...r);n.appendChild(s)}),n};var z0=([i,t,e])=>Hl(i,t,e);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=i=>Array.from(i.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),H0=i=>typeof i=="string"?i:!i||!i.class?"":i.class&&typeof i.class=="string"?i.class.split(" "):i.class&&Array.isArray(i.class)?i.class:"",G0=i=>i.flatMap(H0).map(e=>e.trim()).filter(Boolean).filter((e,n,r)=>r.indexOf(e)===n).join(" "),k0=i=>i.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,n)=>e.toUpperCase()+n.toLowerCase()),$c=(i,{nameAttr:t,icons:e,attrs:n})=>{var _;const r=i.getAttribute(t);if(r==null)return;const s=k0(r),a=e[s];if(!a)return console.warn(`${i.outerHTML} icon name was not found in the provided icons object.`);const o=V0(i),[c,u,l]=a,f={...u,"data-lucide":r,...n,...o},d=G0(["lucide",`lucide-${r}`,o,n]);d&&Object.assign(f,{class:d});const p=z0([c,f,l]);return(_=i.parentNode)==null?void 0:_.replaceChild(p,i)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=["svg",Uo,[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=["svg",Uo,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=["svg",Uo,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=({icons:i={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(i).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${t}]`);if(Array.from(n).forEach(r=>$c(r,{nameAttr:t,icons:i,attrs:e})),t==="data-lucide"){const r=document.querySelectorAll("[icon-name]");r.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(r).forEach(s=>$c(s,{nameAttr:"icon-name",icons:i,attrs:e})))}};function Zc(i,t,e,n){return Math.sin(e*Math.PI*i)*Math.sin(n*Math.PI*t)-Math.sin(n*Math.PI*i)*Math.sin(e*Math.PI*t)}function W0(i,t,e,n,r,s){return Math.sin(n*Math.PI*i)*Math.sin(r*Math.PI*t)+Math.sin(r*Math.PI*t)*Math.sin(s*Math.PI*e)+Math.sin(s*Math.PI*e)*Math.sin(n*Math.PI*i)}const ar=30,On=6.4,ln=10.733,zs=16.167,qe=zs,Kn=24.6,vo=36.667,Mn=vo,X0=Math.round(Mn*ar),Vs=-83.2,ws=-1.5,Ir=4.3,q0=On,Jc=9.94,Kc=[[0,1],[0,2],[0,3]],Y0=.62,ql=.84,Yl=Kn-qe,ba=[{start:0,end:1.35,nodes:[7,0,2,5]},{start:1.35,end:2.45,nodes:[3,1,4,10]},{start:2.45,end:3.45,nodes:[7,5,6,11]},{start:3.45,end:Ir,nodes:[3,8,9,10]},{start:Ir,end:Mn,nodes:[7,0,2,5]}],$0=[{start:.14,end:2,text:"很久以前，宇宙是一锅"},{start:2,end:4.3,text:"滚烫的等离子体——"},{start:4.3,end:6.38,text:"声波，在其中来回震荡。"},{start:7.28,end:9.94,text:"三十八万年后，一切忽然"},{start:9.94,end:10.733,text:"安静。"},{start:10.733,end:12.18,text:"六合乍裂——那声波"},{start:12.18,end:14.8,text:"就此被冻结在黑"},{start:14.8,end:15.4,text:"暗深处。"},{start:16.14,end:18.32,text:"它没有消失，只是化作一道"},{start:18.32,end:20.4,text:"极淡的印记，悄悄"},{start:20.4,end:22.36,text:"写进了星系与星系"},{start:22.36,end:23.66,text:"之间的距离里。"},{start:24.6,end:26.9,text:"往后的138亿年，宇"},{start:26.9,end:28.48,text:"宙都在把这道回声"},{start:28.48,end:32.18,text:"织成一张网，而我们都是"},{start:32.18,end:35,text:"网上那一点被轻轻托"},{start:35,end:35.62,text:"起的光。"}];function Z0(i){var t;return((t=$0.find(e=>i>=e.start&&i<e.end))==null?void 0:t.text)??""}function jc(i){return ba.find(t=>i>=t.start&&i<t.end)??ba[ba.length-1]}function J0(i,t,e,n){const r=Math.floor(Math.max(0,i)/.55),s=new Set([t[r%t.length]]);return r%3===1&&s.add(t[(r+2)%t.length]),r%4===2&&s.add((r*5+1)%e),{main:[...s],minor:r%2===0?r*3%n:null}}function K0(i){return Ye(i,.85,1.6)+Ye(i,2.75,3.55)}function Ye(i,t,e){const n=Math.min(1,Math.max(0,(i-t)/(e-t)));return n*n*(3-2*n)}function Qc(i){if(i<Ir||i>Mn)return{active:!1,progress:0,radius:0};const t=Math.min(1,(i-Ir)/(q0-Ir));return{active:!0,progress:t,radius:.06+Math.sin(t*Math.PI)*.03}}function tl(i){const t=Math.max(0,i-On),e=ln-On,n=Math.min(e,t),r=n/e,s=1.35,a=Math.exp(-s*n);return{active:i>=On&&i<=ln,progress:r,absorption:r,baryonVelocity:a,silenceBrightness:Ye(i,Jc,Jc+.14),waveTime:On+(1-a)/s}}function j0(i){const t=Math.max(0,i-ln),e=zs-ln,n=Math.min(1,t/e),r=Math.max(0,(t-Y0)/ql),s=Math.min(1,r),a=s,o=Math.max(0,r-1),c=Ye(i,ln+3.8,ln+4.65);return{active:i>=ln&&i<=zs,progress:n,reveal:Ye(i,ln,ln+.45),pathPosition:s,approachProgress:a,surfaceProgress:o,impactClock:r,completedImpacts:Math.floor(s+1e-9),impactIndex:0,segmentProgress:s>=1?1:s,freeze:c,rippleStrength:1-c,coreStrength:1}}function Q0(i){const t=Math.min(1,Math.max(0,(i-qe)/Yl));return t*t*(3-2*t)}function tg(i){const t=Math.max(0,i-qe),n=Math.min(1,t/Yl),r=Ye(i,qe+.28,qe+2.2),s=i>=qe?1:0,a=Ye(i,qe+.72,qe+2.72),o=.35+.65*a,c=Ye(i,qe+1.25,qe+4.8),u=Ye(i,qe+2.15,qe+4.1),l=Ye(i,qe+1/ar,Kn-1/ar),f=Vs+(ws-Vs)*l,d=Q0(i);return{active:i>=qe&&i<=Kn,progress:n,reveal:Ye(i,qe,qe+.72),constellationReveal:r,lineReveal:s,projectionMorph:a,flatLineOpacity:.78*(1-d),depthLineOpacity:o,auxiliaryMorph:a,imprintFade:c,distanceReveal:u,parallaxProgress:l,viewOffsetLy:f,morphProgress:d}}const eg=28.8,ms=28.85,ng=31.6,ig=32.2,rg=31.9,sg=29.6,ag=32.5,og=31.7,cg=33.3,lg=Math.PI*2/3,ug=14543359;function hg(i){const t=Math.min(1,Math.max(0,(i-Kn)/(vo-Kn))),e=Ye(i,Kn+.08,eg),n=Ye(i,ms,ms+.5)*(1-Ye(i,ng,ig)),r=Ye(i,32.18,35.62);return{active:i>=Kn&&i<=vo,progress:t,dispersal:e,hop:n,hopClock:Math.max(0,i-ms),rotation:Ye(i,ms+.05,rg)*lg,networkReveal:Ye(i,sg,ag),lineColorShift:Ye(i,og,cg),distributedLight:r,lift:Ye(i,32.18,35.3),reveal:1}}function fg(i){const e=Math.min(1,Math.max(0,i))*Math.PI*2,n=440+Math.sin(e)*20,r=Math.sin(e-.7)*.16+Math.sin(e*2+.3)*.04;return{sourceFrequency:n,velocityRatio:r,observedFrequency:n/(1-r)}}const fn=[16777180,16762677,16741400,16723724,9245191],Cs=12183295,gs=new ee(Cs),el=new ee(16777215),Ta=new ee(12907477),qn=new ee,Aa=4.2,dg=2.55,pg=new ee(ug),en={betelgeuse:{raJ2000:"05 55 10.305",decJ2000:"+07 24 25.43",distanceLy:548},rigel:{raJ2000:"05 14 32.272",decJ2000:"-08 12 05.898",distanceLy:848},bellatrix:{raJ2000:"05 25 07.863",decJ2000:"+06 20 58.932",distanceLy:250},mintaka:{raJ2000:"05 32 00.400",decJ2000:"-00 17 56.742",distanceLy:1246},alnilam:{raJ2000:"05 36 12.813",decJ2000:"-01 12 06.909",distanceLy:1250},alnitak:{raJ2000:"05 40 45.527",decJ2000:"-01 56 34.265",distanceLy:1260},saiph:{raJ2000:"05 47 45.389",decJ2000:"-09 40 10.578",distanceLy:650},meissa:{raJ2000:"05 35 08.276",decJ2000:"+09 56 02.991",distanceLy:1300}},nr=12.5,Rs=8.6,nl=.5,mg=.65,il=.006,$l=new zn(.05,-.12,0),gg=new Pi().setFromEuler($l).invert();function _g(i){const[t=0,e=0,n=0]=i.trim().split(/\s+/u).map(Number);return t+e/60+n/3600}function vg(i){const t=i.trim().startsWith("-")?-1:1,[e=0,n=0,r=0]=i.trim().replace(/^[+-]/u,"").split(/\s+/u).map(Number);return t*(e+n/60+r/3600)}function No(i){const t=_g(i.raJ2000)*15*Math.PI/180,e=vg(i.decJ2000)*Math.PI/180,n=Math.cos(e);return new P(n*Math.cos(t),n*Math.sin(t),Math.sin(e))}const Fo=(()=>{const t=Object.values(en).map(No).reduce((a,o)=>a.add(o),new P).normalize(),e=new P(t.y,-t.x,0).normalize(),n=new P().crossVectors(e,t).normalize(),r=Object.values(en).map(({distanceLy:a})=>a).sort((a,o)=>a-o),s=Math.exp((Math.log(r[3])+Math.log(r[4]))*.5);return{forward:t,right:e,up:n,pivotLy:s,minDistanceLy:r[0],maxDistanceLy:r[r.length-1]}})();function ci(i){const t=No(i),e=Fo,n=i.distanceLy*(nr/e.pivotLy);return new P(t.dot(e.right)*n,t.dot(e.up)*n,nr-t.dot(e.forward)*n).applyQuaternion(gg).toArray()}function xi(i){const t=No(i),e=Fo,n=Math.max(.15,t.dot(e.forward));return[t.dot(e.right)/n*Rs,t.dot(e.up)/n*Rs,-Rs]}const we={betelgeuse:ci(en.betelgeuse),bellatrix:ci(en.bellatrix),clubTip:ci(en.meissa),beltRight:ci(en.mintaka),beltMiddle:ci(en.alnilam),beltLeft:ci(en.alnitak),rigel:ci(en.rigel),saiph:ci(en.saiph)},Fe={betelgeuse:xi(en.betelgeuse),bellatrix:[.3623692852,.9025956076,-Rs],clubTip:xi(en.meissa),beltRight:xi(en.mintaka),beltMiddle:xi(en.alnilam),beltLeft:xi(en.alnitak),rigel:xi(en.rigel),saiph:xi(en.saiph)},_s=[{label:"参宿四",latin:"BETELGEUSE",position:we.betelgeuse,scale:.22,brightness:1.6,color:16754258},{label:"参宿五",latin:"BELLATRIX",position:we.bellatrix,scale:.18,brightness:1.5,color:14017791},{label:"觜宿一",latin:"MEISSA",position:we.clubTip,scale:.15,brightness:1.4,color:14543359},{label:"参宿三",latin:"MINTAKA",position:we.beltRight,scale:.16,brightness:1.45,color:14280703},{label:"参宿二",latin:"ALNILAM",position:we.beltMiddle,scale:.17,brightness:1.5,color:15003647},{label:"参宿一",latin:"ALNITAK",position:we.beltLeft,scale:.16,brightness:1.45,color:14543359},{label:"参宿七",latin:"RIGEL",position:we.rigel,scale:.22,brightness:1.6,color:15259303},{label:"参宿六",latin:"SAIPH",position:we.saiph,scale:.16,brightness:1.45,color:13360383}],xg=[{emphasis:1.35,points:[we.betelgeuse,we.bellatrix]},{emphasis:1.35,points:[we.betelgeuse,we.beltLeft]},{emphasis:1.45,points:[we.bellatrix,we.beltRight]},{emphasis:.72,points:[we.beltMiddle,we.beltRight]},{emphasis:.72,points:[we.beltMiddle,we.beltLeft]},{emphasis:1.55,points:[we.beltLeft,we.saiph]},{emphasis:1.55,points:[we.beltRight,we.rigel]},{emphasis:1.55,points:[we.clubTip,we.betelgeuse]},{emphasis:1.55,points:[we.clubTip,we.bellatrix]}],Mg=[{emphasis:1.35,points:[Fe.betelgeuse,Fe.bellatrix]},{emphasis:1.35,points:[Fe.betelgeuse,Fe.beltLeft]},{emphasis:1.45,points:[Fe.bellatrix,Fe.beltRight]},{emphasis:.72,points:[Fe.beltMiddle,Fe.beltRight]},{emphasis:.72,points:[Fe.beltMiddle,Fe.beltLeft]},{emphasis:1.55,points:[Fe.beltLeft,Fe.saiph]},{emphasis:1.55,points:[Fe.beltRight,Fe.rigel]},{emphasis:1.55,points:[Fe.clubTip,Fe.betelgeuse]},{emphasis:1.55,points:[Fe.clubTip,Fe.bellatrix]}],Sg=new Set([0,1,2]),yg=new Set([5,6,7,8]),vs=new P(-3.35,-.12,-4.1),ji={betelgeuse:{start:Fe.betelgeuse,target:we.betelgeuse},bellatrix:{start:Fe.bellatrix,target:we.bellatrix},meissa:{start:Fe.clubTip,target:we.clubTip},mintaka:{start:Fe.beltRight,target:we.beltRight},alnilam:{start:Fe.beltMiddle,target:we.beltMiddle},alnitak:{start:Fe.beltLeft,target:we.beltLeft},rigel:{start:Fe.rigel,target:we.rigel},saiph:{start:Fe.saiph,target:we.saiph}},dn=document.querySelector("#narration"),xo=document.querySelector("#scene"),Eg=document.querySelector("#deep-sky-background"),Cr=document.querySelector("#star-canvas"),Yn=Cr.getContext("2d"),wa=document.querySelector("#labels"),bg=document.querySelector("#subtitle"),Tg=document.querySelector("#caption"),Ag=document.querySelector("#timecode"),xs=document.querySelector("#play"),wg=document.querySelector("#reset"),Cg=document.querySelector(".eyebrow"),Rg=document.querySelector(".title-sub"),rl=document.querySelector("#epoch-marker"),Pg=document.querySelector("#cosmic-clock"),Dg=document.querySelector("#cosmic-clock-value"),Lg=document.querySelector("#gravity-note"),Ig=document.querySelector("#baryon-velocity"),sl=document.querySelector("#impact-marker"),Ug=document.querySelector("#impact-count"),Ms=document.querySelector("#wave-equation"),Ng=document.querySelector("#wave-equation-path"),Fg=document.querySelector("#wave-f0"),Og=document.querySelector("#wave-v"),Bg=document.querySelector("#wave-fp");Xl({icons:{Play:kl,Pause:Gl,RotateCcw:Wl}});const Ti=new B0({canvas:xo,alpha:!0,antialias:!0,powerPreference:"high-performance"});Ti.setClearColor(0,0);Ti.outputColorSpace=cn;const or=new Ph;or.fog=new Ro(132103,.006);const ke=new An(43,1,.1,100);ke.position.set(0,.1,12.5);ke.lookAt(0,0,0);or.add(ke);const Zl=new Ge;ke.add(Zl);const tn=new Ge;or.add(tn);async function zg(){const i=h(),t=await w(),e=Q();tn.add(e);const n=dt();tn.add(n);const r=[{label:"太阳",latin:"SUN",position:[-3.35,1.42,.4],radius:.62,color:fn[1],spin:.42,phase:.2},{label:"木星",latin:"JUPITER",position:[-1.82,-1.55,.5],radius:.56,color:fn[2],spin:-.36,phase:1.2},{label:"天狼星",latin:"SIRIUS",position:[.18,1.72,-.4],radius:.51,color:fn[0],spin:.32,phase:2.1},{label:"土星",latin:"SATURN",position:[2.16,-1.08,.8],radius:.5,color:fn[2],spin:.29,phase:1.6},{label:"北极星",latin:"POLARIS",position:[3.18,1.92,-.3],radius:.4,color:fn[0],spin:-.25,phase:.4},{label:"火星",latin:"MARS",position:[1.16,.08,1.05],radius:.42,color:fn[3],spin:.48,phase:2.8},{label:"参宿四",latin:"BETELGEUSE",position:[-3.28,-1.9,-.8],radius:.55,color:fn[3],spin:-.31,phase:2.7},{label:"昴星团",latin:"PLEIADES",position:[-.74,.05,-1.22],radius:.64,color:fn[0],spin:.39,phase:1.9,shape:"chladni",modes:[2,3,4],boundary:"volume",network:!0},{label:"金星",latin:"VENUS",position:[-.12,-2.55,-.95],radius:.44,color:fn[1],spin:-.44,phase:.9},{label:"海王星",latin:"NEPTUNE",position:[3.62,-2.02,.58],radius:.46,color:fn[2],spin:.35,phase:2.4},{label:"月球",latin:"MOON",position:[-4.02,.05,-1.2],radius:.3,color:fn[1],spin:-.52,phase:1.3},{label:"脉冲星",latin:"PULSAR",position:[3.78,.44,-1.48],radius:.5,color:14478591,spin:.7,phase:3.1,shape:"chladni",modes:[2,3,4],boundary:"volume",network:!0}],s=r.map((M,E)=>ot(M,E));s.forEach(M=>tn.add(M.group));const a=[{label:"织女星",latin:"VEGA",position:[-4.35,2.42,-1.7],scale:.12},{label:"牛郎星",latin:"ALTAIR",position:[-2.15,2.68,-1.25],scale:.1},{label:"参宿七",latin:"RIGEL",position:[1.35,2.55,-2.1],scale:.11},{label:"五车二",latin:"CAPELLA",position:[4.35,2.35,-1.35],scale:.1},{label:"毕宿五",latin:"ALDEBARAN",position:[-4.55,-1.02,-1.8],scale:.09},{label:"角宿一",latin:"SPICA",position:[-2.28,-.18,-2.25],scale:.09},{label:"心宿二",latin:"ANTARES",position:[2.82,.72,-1.95],scale:.11},{label:"老人星",latin:"CANOPUS",position:[4.24,-2.58,-1.55],scale:.1}],o=a.map((M,E)=>Vt(M,E));o.forEach(M=>tn.add(M.group));const c=Kc.map(()=>re());c.forEach(M=>tn.add(M));const u=gt();or.add(u.group);const l=xe();tn.add(l.group);const f=q(i,wa,Zl);or.add(f.group);const d=rt();f.group.add(d.group);const p=r.map(M=>{const E=document.createElement("div");return E.className="node-label",E.innerHTML=`${M.label}<small>${M.latin}</small>`,wa.appendChild(E),E}),_=a.map(M=>{const E=document.createElement("div");return E.className="node-label minor-label",E.innerHTML=`${M.label}<small>${M.latin}</small>`,wa.appendChild(E),E});let x=!1,m=-1;function h(){const E=document.createElement("canvas");E.width=64,E.height=64;const R=E.getContext("2d"),C=R.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);C.addColorStop(0,"rgba(255,255,255,1)"),C.addColorStop(.12,"rgba(255,255,255,0.96)"),C.addColorStop(.38,"rgba(255,255,255,0.18)"),C.addColorStop(.68,"rgba(255,255,255,0.02)"),C.addColorStop(1,"rgba(255,255,255,0)"),R.fillStyle=C,R.fillRect(0,0,64,64);const k=new da(E);return k.colorSpace=cn,k}function I(M=16777215,E=256){const R=document.createElement("canvas");R.width=E,R.height=E;const C=R.getContext("2d"),k=E/2,Z=new ee(M),$=Math.round(Z.r*255),y=Math.round(Z.g*255),H=Math.round(Z.b*255),D=C.createRadialGradient(k,k,0,k,k,k*.85);D.addColorStop(0,`rgba(${$}, ${y}, ${H}, 0.85)`),D.addColorStop(.2,`rgba(${$}, ${y}, ${H}, 0.4)`),D.addColorStop(.55,`rgba(${$}, ${y}, ${H}, 0.1)`),D.addColorStop(1,"rgba(0, 0, 0, 0)"),C.fillStyle=D,C.fillRect(0,0,E,E),C.save(),C.globalCompositeOperation="screen";const U=C.createLinearGradient(0,k,E,k);U.addColorStop(0,"rgba(255, 255, 255, 0)"),U.addColorStop(.35,`rgba(${$}, ${y}, ${H}, 0.5)`),U.addColorStop(.48,"rgba(255, 255, 255, 0.95)"),U.addColorStop(.5,"rgba(255, 255, 255, 1)"),U.addColorStop(.52,"rgba(255, 255, 255, 0.95)"),U.addColorStop(.65,`rgba(${$}, ${y}, ${H}, 0.5)`),U.addColorStop(1,"rgba(255, 255, 255, 0)"),C.fillStyle=U,C.fillRect(0,k-2.5,E,5);const V=C.createLinearGradient(k,0,k,E);V.addColorStop(0,"rgba(255, 255, 255, 0)"),V.addColorStop(.35,`rgba(${$}, ${y}, ${H}, 0.5)`),V.addColorStop(.48,"rgba(255, 255, 255, 0.95)"),V.addColorStop(.5,"rgba(255, 255, 255, 1)"),V.addColorStop(.52,"rgba(255, 255, 255, 0.95)"),V.addColorStop(.65,`rgba(${$}, ${y}, ${H}, 0.5)`),V.addColorStop(1,"rgba(255, 255, 255, 0)"),C.fillStyle=V,C.fillRect(k-2.5,0,5,E);const X=C.createRadialGradient(k,k,0,k,k,k*.22);X.addColorStop(0,"rgba(255, 255, 255, 1)"),X.addColorStop(.4,"rgba(255, 255, 255, 0.95)"),X.addColorStop(.7,`rgba(${$}, ${y}, ${H}, 0.6)`),X.addColorStop(1,"rgba(0, 0, 0, 0)"),C.fillStyle=X,C.beginPath(),C.arc(k,k,k*.22,0,Math.PI*2),C.fill(),C.restore();const tt=new da(R);return tt.colorSpace=cn,tt}async function w(){try{const M=await fetch("/chladni-reference.bin");return M.ok?new Float32Array(await M.arrayBuffer()):null}catch{return null}}function b(M,E,R=null){const C=new Zh;for(let U=1;U<M.length;U+=1)C.add(new Ul(M[U-1],M[U]));const k=Math.max(3,M.length*3),Z=7,$=new Lo(C,k,E,Z,!1);if(!R)return $;const y=$.getAttribute("position"),H=new P,D=new P;for(let U=0;U<=k;U+=1){C.getPointAt(U/k,H);const V=ue(H,R);for(let X=0;X<=Z;X+=1){const tt=U*(Z+1)+X;D.fromBufferAttribute(y,tt).sub(H).multiplyScalar(V).add(H),y.setXYZ(tt,D.x,D.y,D.z)}}return y.needsUpdate=!0,$.computeBoundingSphere(),$}function G(){const R=document.createElement("canvas");R.width=512,R.height=768;const C=R.getContext("2d"),k=Rt=>{let Ft=Rt>>>0;return()=>{Ft=Ft+1831565813|0;let kt=Math.imul(Ft^Ft>>>15,1|Ft);return kt=kt+Math.imul(kt^kt>>>7,61|kt)^kt,((kt^kt>>>14)>>>0)/4294967296}},Z=(Rt,Ft)=>{const kt=k(Rt),Wt=Ft+1,Dt=new Float32Array(Wt*Wt);for(let ut=0;ut<Dt.length;ut+=1)Dt[ut]=kt();const Yt=ut=>ut*ut*ut*(ut*(ut*6-15)+10),Zt=(ut,xt)=>{const bt=(ut%Ft+Ft)%Ft,at=(xt%Ft+Ft)%Ft;return Dt[at*Wt+bt]};return(ut,xt)=>{const bt=Math.floor(ut),at=Math.floor(xt),At=Yt(ut-bt),Xt=Yt(xt-at),Lt=Zt(bt,at)+(Zt(bt+1,at)-Zt(bt,at))*At,Ot=Zt(bt,at+1)+(Zt(bt+1,at+1)-Zt(bt,at+1))*At;return Lt+(Ot-Lt)*Xt}},$=(Rt,Ft,kt,Wt,Dt,Yt)=>{let Zt=.5,ut=1,xt=0,bt=0;for(let at=0;at<Wt;at+=1)xt+=Zt*Rt(Ft*ut,kt*ut),bt+=Zt,Zt*=Yt,ut*=Dt;return xt/bt},y=Z(2026,16),H=Z(8888,8),D=Z(9999,8),U=Z(777,6),V=Rt=>.82-.64*Rt+.07*Math.sin(Rt*4.5+.3),X=C.createImageData(512,768),tt=X.data,ct=[28,25,38],_t=[72,65,84],pt=[135,124,142];for(let Rt=0;Rt<768;Rt+=1){const Ft=Rt/767,kt=V(Ft),Dt=.26*(1+.5*($(U,Ft*3.5,.5,3,2,.5)-.5)),Yt=Math.sin(Ft*Math.PI);for(let Zt=0;Zt<512;Zt+=1){const ut=Zt/511,xt=Math.sin(ut*Math.PI),bt=Math.pow(xt*Yt,.65),at=ut*6,At=Ft*8,Xt=at+($(H,at*.6,At*.6,3,2,.5)-.5)*1.2,Lt=At+($(D,at*.6,At*.6,3,2,.5)-.5)*1.2;let Ot=$(y,Xt,Lt,6,2.2,.5);Ot=Math.pow(Math.max(0,Ot),1.35);const oe=(ut-kt)/Dt,Qt=Math.exp(-.55*oe*oe),_e=Math.min(1,Ot*Qt);let g,L,W;if(_e<.4){const nt=_e/.4;g=ct[0]*nt,L=ct[1]*nt,W=ct[2]*nt}else if(_e<.78){const nt=(_e-.4)/.38;g=ct[0]+(_t[0]-ct[0])*nt,L=ct[1]+(_t[1]-ct[1])*nt,W=ct[2]+(_t[2]-ct[2])*nt}else{const nt=(_e-.78)/.22;g=_t[0]+(pt[0]-_t[0])*nt,L=_t[1]+(pt[1]-_t[1])*nt,W=_t[2]+(pt[2]-_t[2])*nt}const Y=Math.min(.75,_e*1.25)*bt,O=(Rt*512+Zt)*4;tt[O]=Math.round(g),tt[O+1]=Math.round(L),tt[O+2]=Math.round(W),tt[O+3]=Math.round(Y*255)}}C.putImageData(X,0,0);const Bt=new da(R);return Bt.colorSpace=cn,Bt}function B(){const M=new Ge;M.renderOrder=-2;const E=G(),R=new on(new Qe({map:E,transparent:!0,opacity:.68,depthTest:!1,depthWrite:!1,blending:le}));R.position.set(-.6,.1,-4.5),R.scale.set(13.5,16.5,1),R.rotation.z=-.58,R.renderOrder=-3,M.add(R);const C=new on(new Qe({map:E,transparent:!0,opacity:.35,depthTest:!1,depthWrite:!1,blending:le}));C.position.set(-.2,.3,-3.9),C.scale.set(14.2,17.5,1),C.rotation.z=-.52,C.renderOrder=-2,M.add(C);const k=(U,V)=>{const X=Math.sin(U*12.9898+V*78.233)*43758.5453;return X-Math.floor(X)},Z=750,$=[],y=[];for(let U=0;U<Z;U+=1){const V=k(U,40.2),X=Math.pow(k(U,41.7),1.2)*2.5,tt=2.8-V*6.6,ct=4.5-V*9.3,_t=tt+(k(U,42.9)-.5)*X,pt=ct+(k(U,44.1)-.5)*X*1.2,Bt=-4.8+(k(U,45.4)-.5)*2.8,Rt=.2+k(U,46.8)*.48;$.push(_t,pt,Bt),y.push(Rt*.88,Rt*.84,Rt*1)}const H=new Ee;H.setAttribute("position",new Kt($,3)),H.setAttribute("color",new Kt(y,3));const D=new Ke(H,new pn({map:h(),size:.18,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.35,depthTest:!1,depthWrite:!1,blending:le}));return D.renderOrder=-1,M.add(D),M}function F(M,E,R){return M.map(({points:C,emphasis:k},Z)=>{const $=C.map(U=>new P(...U)),y=yg.has(Z),H=new tr({color:E==="flat"?y?4872304:7174290:y?7440036:12110829,transparent:!0,opacity:0,depthWrite:!1,blending:le}),D=new _n(b($,il*k),H);return D.userData={index:Z,isUpperTriangle:Sg.has(Z),isLowerShadow:y,layerName:E,pathPoints:C,emphasis:k},R.add(D),D})}function q(M,E,R){const C=new Ge;C.visible=!1;const k=[],Z=[];for(let ut=0;ut<620;ut+=1){const xt=ut*.61803398875,bt=(xt*13.7%1-.5)*12.8,at=(xt*7.1%1-.5)*7.1,At=-4.8+xt*5.3%1*2.7,Xt=.34+ut*17%61/61*.66;k.push(bt,at,At),Z.push(Xt*.82,Xt*.9,Xt)}const $=new Ee;$.setAttribute("position",new Kt(k,3)),$.setAttribute("color",new Kt(Z,3));const y=new Ke($,new pn({map:M,size:.052,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:le,sizeAttenuation:!0}));C.add(y);const H=B();C.add(H);const D=new Map;_s.forEach(ut=>{D.set(ut.color,I(ut.color,256))});const U=I(4943784,128),V=_s.map((ut,xt)=>{const bt=new Ge,at=D.get(ut.color),At=new on(new Qe({map:at,transparent:!0,opacity:0,depthWrite:!1,blending:le}));At.scale.setScalar(ut.scale*3.8);const Xt=new on(new Qe({map:at,transparent:!0,opacity:0,depthWrite:!1,blending:le}));Xt.scale.setScalar(ut.scale*1.5),bt.add(At,Xt),bt.position.set(...ut.position),bt.userData={definition:ut,index:xt,halo:At,core:Xt,phase:xt*.73,startPosition:new P(...ut.position)},C.add(bt);const Lt=document.createElement("div");return Lt.className="node-label scene-four-label",Lt.innerHTML=`${ut.label}<small>${ut.latin}</small>`,E.appendChild(Lt),bt.userData.label=Lt,bt}),X=_s.map((ut,xt)=>{const bt=new on(new Qe({map:U,transparent:!0,opacity:0,depthWrite:!1,blending:le}));bt.scale.setScalar(ut.scale*1.8);const at=ji[ut.latin.toLowerCase()]??ji[ut.label];return at?bt.position.set(...at.start):bt.position.set(...ut.position),bt.userData={definition:ut,index:xt,phase:xt*.73},R.add(bt),bt}),tt=F(Mg,"flat",R),ct=F(xg,"depth",C),_t=_s[4].position,pt=new Ee().setFromPoints([new P(..._t),vs]),Bt=new Sc({color:9361844,dashSize:.12,gapSize:.09,transparent:!0,opacity:0,depthWrite:!1,blending:le}),Rt=new Fs(pt,Bt);Rt.computeLineDistances(),C.add(Rt);const Ft=new nn;Ft.position.copy(new P(..._t).lerp(vs,.52)),C.add(Ft);const kt=document.createElement("div");kt.className="node-label scene-four-distance",kt.innerHTML="147 Mpc<small>BAO SCALE</small>",E.appendChild(kt);const Wt=new Ge,Dt=new on(new Qe({map:M,color:7919264,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:le}));Dt.scale.setScalar(1.65);const Yt=new on(new Qe({map:M,color:Ta,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:le}));Yt.scale.setScalar(.62);const Zt=[.36,.58,.82].map((ut,xt)=>{const bt=new _n(new Os(ut,ut+.012,64),new tr({color:9298102,transparent:!0,opacity:0,side:Ln,depthTest:!1,depthWrite:!1,blending:le}));return bt.userData.phase=xt*.9,Wt.add(bt),bt});return Wt.add(Dt,Yt),Wt.position.copy(vs),C.add(Wt),{group:C,screenGroup:R,backdrop:y,stars:V,flatStars:X,flatLines:tt,depthLines:ct,distanceLine:Rt,distanceAnchor:Ft,distanceLabel:kt,imprint:Wt,imprintHalo:Dt,imprintCore:Yt,imprintRings:Zt,imprintTarget:vs.clone()}}function T(M,E,R,C,k,Z,$){const y=[],H=M.length;let D=E*M[0].x+R*M[0].y+C*M[0].z-k;for(let U=0;U<H;U+=1){const V=M[U],X=M[(U+1)%H],tt=D,ct=E*X.x+R*X.y+C*X.z-k;if(D=ct,tt<=$&&y.push(V),tt>$&&ct<-$||tt<-$&&ct>$){const _t=tt/(tt-ct),pt=new P(V.x+(X.x-V.x)*_t,V.y+(X.y-V.y)*_t,V.z+(X.z-V.z)*_t);y.push(pt),Z.push(pt)}}return y}function S(M,E){const R=new Set,C=[];return M.forEach(k=>{const Z=`${Math.round(k.x/E)},${Math.round(k.y/E)},${Math.round(k.z/E)}`;R.has(Z)||(R.add(Z),C.push(k))}),C}function z(M,E){const R=["x","y","z"],C=[];for(let H=0;H<3;H+=1)for(const D of[1,-1]){const U=new P;U[R[H]]=D;const V=R[(H+1)%3],X=R[(H+2)%3],tt=[];for(const[ct,_t]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const pt=new P;pt[R[H]]=D*E,pt[V]=ct*E,pt[X]=_t*E,tt.push(pt)}C.push({normal:U,verts:tt})}const k=1e-5,Z=new P,$=new P,y=new P;return M.map((H,D)=>{let U=C;const V=[];for(let X=0;X<M.length;X+=1)X!==D&&V.push(X);V.sort((X,tt)=>M[X].distanceToSquared(H)-M[tt].distanceToSquared(H));for(const X of V){const tt=M[X],ct=tt.x-H.x,_t=tt.y-H.y,pt=tt.z-H.z,Bt=Math.sqrt(ct*ct+_t*_t+pt*pt);if(Bt<1e-6)continue;const Rt=ct/Bt,Ft=_t/Bt,kt=pt/Bt,Wt=(Rt*(tt.x+H.x)+Ft*(tt.y+H.y)+kt*(tt.z+H.z))*.5;let Dt=-1/0;for(const ut of U)for(const xt of ut.verts){const bt=Rt*xt.x+Ft*xt.y+kt*xt.z-Wt;bt>Dt&&(Dt=bt)}if(Dt<=k)continue;const Yt=[],Zt=[];for(const ut of U){const xt=T(ut.verts,Rt,Ft,kt,Wt,Yt,k);xt.length>=3&&Zt.push({normal:ut.normal,verts:xt})}if(Yt.length>=3){const ut=S(Yt,2e-4);if(ut.length>=3){const xt=new P;ut.forEach(bt=>xt.add(bt)),xt.multiplyScalar(1/ut.length),Z.set(Rt,Ft,kt),$.set(1,0,0),Math.abs(Rt)>.9&&$.set(0,1,0),$.cross(Z).normalize(),y.crossVectors(Z,$),ut.sort((bt,at)=>{const At=Math.atan2((bt.x-xt.x)*y.x+(bt.y-xt.y)*y.y+(bt.z-xt.z)*y.z,(bt.x-xt.x)*$.x+(bt.y-xt.y)*$.y+(bt.z-xt.z)*$.z),Xt=Math.atan2((at.x-xt.x)*y.x+(at.y-xt.y)*y.y+(at.z-xt.z)*y.z,(at.x-xt.x)*$.x+(at.y-xt.y)*$.y+(at.z-xt.z)*$.z);return At-Xt}),Zt.push({normal:Z.clone(),verts:ut})}}if(U=Zt,U.length<4)break}return{faces:U}})}function rt(){const M=new Ge;M.visible=!1,M.renderOrder=4;const E=ne(20260824),R=()=>{const K=Math.max(E(),1e-4);return Math.sqrt(-2*Math.log(K))*Math.cos(Math.PI*2*E())},C=dg,k=Array.from({length:7},()=>new P((E()*2-1)*C*.6,(E()*2-1)*C*.6,(E()*2-1)*C*.6)),Z=[];let $=0;for(;Z.length<300&&$<14e3;){$+=1;const K=new P;if(E()<.58){const ht=k[Math.floor(E()*k.length)];K.set(ht.x+R()*.6,ht.y+R()*.6,ht.z+R()*.6)}else K.set(E()*2-1,E()*2-1,E()*2-1).multiplyScalar(C);K.clampScalar(-C+.06,C-.06);let ft=!1;for(const ht of Z)if(ht.distanceToSquared(K)<.0169){ft=!0;break}ft||Z.push(K)}const y=z(Z,C),H=new Map,D=K=>{const ft=`${Math.round(K.x/6e-4)},${Math.round(K.y/6e-4)},${Math.round(K.z/6e-4)}`;let ht=H.get(ft);return ht||(ht={index:H.size,position:K.clone(),degree:0},H.set(ft,ht)),ht.degree+=1,ht},U=new Map;y.forEach(K=>{K.faceNodes=K.faces.map(ft=>ft.verts.length<3?null:ft.verts.map(ht=>D(ht))),K.faceNodes.forEach(ft=>{if(ft)for(let ht=0;ht<ft.length;ht+=1){const yt=ft[ht],Gt=ft[(ht+1)%ft.length];if(yt.index===Gt.index)continue;const wt=yt.index<Gt.index?`${yt.index}:${Gt.index}`:`${Gt.index}:${yt.index}`;U.has(wt)||U.set(wt,{a:Math.min(yt.index,Gt.index),b:Math.max(yt.index,Gt.index),length:yt.position.distanceTo(Gt.position)})}})});const V=new Array(H.size);H.forEach(K=>{V[K.index]=K});const X=[],tt=[],ct=[],_t=[],pt=[],Bt=[],Rt=[],Ft=[],kt=[],Wt=C*1.62,Dt=K=>[K.x,K.y,K.z].filter(ft=>Math.abs(Math.abs(ft)-C)<.0012).length;V.forEach(K=>{const ft=K.position,ht=Math.min(3,Dt(ft)),yt=Math.min(K.degree,9);X.push(ft.x,ft.y,ft.z),tt.push(R()*.09,R()*.09,R()*.09),ct.push((50+yt*5+ht*11)*(.88+E()*.26)),_t.push(Math.min(1.05,.62+yt*.05+ht*.07+E()*.1)),pt.push(E()*Math.PI*2),Bt.push(Math.min(1,ft.length()/Wt)*.72+E()*.28),Rt.push(Math.min(.78,E()*.34+(yt>=6?0:.08))),Ft.push(.13+E()*.1),kt.push((ft.y+C)/(C*2)*2+E()*.7)}),U.forEach(({a:K,b:ft,length:ht})=>{if(ht<.1)return;const yt=V[K].position,Gt=V[ft].position,wt=Math.max(1,Math.round(ht/.13)-1);for(let j=1;j<=wt;j+=1){const Jt=j/(wt+1),ie=yt.x+(Gt.x-yt.x)*Jt,pe=yt.y+(Gt.y-yt.y)*Jt,he=yt.z+(Gt.z-yt.z)*Jt;X.push(ie,pe,he),tt.push(R()*.09,R()*.09,R()*.09),ct.push(28+E()*16),_t.push(.4+E()*.2),pt.push(E()*Math.PI*2),Bt.push(Math.min(1,Math.sqrt(ie*ie+pe*pe+he*he)/Wt)*.72+E()*.28),Rt.push(Math.min(.8,.24+E()*.4)),Ft.push(.1+E()*.09),kt.push((pe+C)/(C*2)*2+E()*.7)}});const Yt=K=>{let ft=0;for(let ht=0;ht<K.length;ht+=1){const yt=K[ht],Gt=K[(ht+1)%K.length];ft+=yt.x*Gt.y-Gt.x*yt.y+(yt.y*Gt.z-Gt.y*yt.z)+(yt.z*Gt.x-yt.z*Gt.x)}return Math.abs(ft)*.5},Zt=K=>{for(let ft=0;ft<3;ft+=1){let ht=0;for(const yt of K)Math.abs(Math.abs(yt.getComponent(ft))-C)<.0012&&(ht+=1);if(ht===K.length)return!0}return!1},ut=new P;y.forEach(K=>{K.faces.forEach((ft,ht)=>{if(!K.faceNodes[ht])return;const Gt=ft.verts,wt=Yt(Gt);if(wt<.008)return;const j=Zt(Gt),Jt=Math.min(420,Math.round(wt*(j?26:17)));for(let ie=0;ie<Jt;ie+=1){const pe=1+Math.floor(E()*(Gt.length-1));let he=Math.sqrt(E()),fe=E();he+fe>1&&(he=1-he,fe=1-fe);const Re=Gt[0],me=Gt[pe],Pe=Gt[pe===Gt.length-1?1:pe+1];ut.set(Re.x+(me.x-Re.x)*he+(Pe.x-Re.x)*fe,Re.y+(me.y-Re.y)*he+(Pe.y-Re.y)*fe,Re.z+(me.z-Re.z)*he+(Pe.z-Re.z)*fe),X.push(ut.x,ut.y,ut.z),tt.push(R()*.09,R()*.09,R()*.09),ct.push((17+E()*11)*(j?1.16:1)),_t.push((.2+E()*.16)*(j?1.32:1)),pt.push(E()*Math.PI*2),Bt.push(Math.min(1,ut.length()/Wt)*.72+E()*.28),Rt.push(Math.min(.82,.38+E()*.44)),Ft.push(.07+E()*.07),kt.push((ut.y+C)/(C*2)*2+E()*.7)}})});const xt=new Ee;xt.setAttribute("position",new Kt(X,3)),xt.setAttribute("aStart",new Kt(tt,3)),xt.setAttribute("aSize",new Kt(ct,1)),xt.setAttribute("aBase",new Kt(_t,1)),xt.setAttribute("aPhase",new Kt(pt,1)),xt.setAttribute("aOrder",new Kt(Bt,1)),xt.setAttribute("aLightThreshold",new Kt(Rt,1)),xt.setAttribute("aHopAmp",new Kt(Ft,1)),xt.setAttribute("aHopPhase",new Kt(kt,1));const bt=new gn({uniforms:{uAssemble:{value:0},uHopClock:{value:0},uHopEnv:{value:0},uLight:{value:0},uPointLightColor:{value:pg},uTime:{value:0},uOpacity:{value:.7},uPixelRatio:{value:1}},vertexShader:`
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
      varying float vAlpha;
      void main() {
        float local = clamp((uAssemble - aOrder * 0.62) / 0.38, 0.0, 1.0);
        float ease = local * local * (3.0 - 2.0 * local);
        float overshoot = 1.0 + 0.16 * sin(ease * 3.14159) * (1.0 - local);
        vec3 foamPosition = mix(aStart, position, ease * overshoot);
        float hop = max(0.0, sin(uHopClock * 7.3 - aHopPhase)) * aHopAmp * uHopEnv * ease;
        foamPosition.y += hop;
        vec4 mvPosition = modelViewMatrix * vec4(foamPosition, 1.0);
        gl_PointSize = aSize * uPixelRatio / max(1.0, -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
        float lift = clamp((uLight * 1.3 - aLightThreshold) / 0.34, 0.0, 1.0);
        lift = lift * lift * (3.0 - 2.0 * lift);
        float shimmer = 1.0 + sin(uTime * 2.3 + aPhase) * 0.055;
        float brightness = aBase * (0.62 + lift * 1.05) * shimmer;
        vec3 foamWhite = vec3(0.87, 0.94, 1.0);
        // Meissa (觜宿一) is the cue's reference star in Scene 04. Its
        // pale blue-white tint blooms into the foam only as each point's
        // distributed-light threshold is crossed.
        vColor = brightness * mix(foamWhite, uPointLightColor, lift * 0.9);
        vAlpha = ease;
      }
    `,fragmentShader:`
      uniform float uOpacity;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        float distanceToCenter = length(gl_PointCoord - vec2(0.5));
        float core = 1.0 - smoothstep(0.0, 0.17, distanceToCenter);
        float halo = 1.0 - smoothstep(0.12, 0.5, distanceToCenter);
        float alpha = (core * 0.88 + halo * 0.24) * uOpacity * vAlpha;
        if (alpha < 0.012) discard;
        gl_FragColor = vec4(vColor, alpha);
      }
    `,transparent:!0,depthWrite:!1,blending:le}),at=new Ke(xt,bt);at.renderOrder=5,at.frustumCulled=!1,M.add(at);const At=new Set,Xt=[],Lt=(K,ft)=>{for(let ht=0;ht<3;ht+=1){const yt=Math.abs(Math.abs(K.position.getComponent(ht))-C)<.0012,Gt=Math.abs(Math.abs(ft.position.getComponent(ht))-C)<.0012;if(yt&&Gt)return!0}return!1};U.forEach(({a:K,b:ft,length:ht})=>{if(ht<.14||ht>2.6||Lt(V[K],V[ft]))return;const yt=`${K}:${ft}`;At.has(yt)||(At.add(yt),Xt.push({a:K,b:ft,length:ht}))});const Ot=V.map((K,ft)=>({node:K,index:ft})).filter(({node:K})=>K.degree>=6).sort((K,ft)=>ft.node.degree-K.node.degree).slice(0,56);let oe=0;Ot.forEach(K=>{if(oe>=84)return;let ft=null,ht=2.1;if(Ot.forEach(yt=>{if(yt===K)return;const Gt=Math.min(K.index,yt.index),wt=Math.max(K.index,yt.index);if(At.has(`${Gt}:${wt}`))return;const j=K.node.position.distanceTo(yt.node.position);j<ht&&(ht=j,ft=yt)}),ft){const yt=Math.min(K.index,ft.index),Gt=Math.max(K.index,ft.index);At.add(`${yt}:${Gt}`),Xt.push({a:yt,b:Gt,length:ht}),oe+=1}});const Qt=new Map;Xt.forEach(({a:K,b:ft})=>{Qt.has(K)||Qt.set(K,[]),Qt.has(ft)||Qt.set(ft,[]),Qt.get(K).push(ft),Qt.get(ft).push(K)});let _e=0,g=-1/0;V.forEach((K,ft)=>{const ht=K.degree-K.position.length()*.8;ht>g&&(g=ht,_e=ft)});const L=new Map([[_e,0]]),W=[_e];for(;W.length;){const K=W.shift(),ft=L.get(K);(Qt.get(K)??[]).forEach(ht=>{L.has(ht)||(L.set(ht,ft+1),W.push(ht))})}let Y=1;L.forEach(K=>{Y=Math.max(Y,K)});const O=[],nt=[],St=[],Tt=[],Pt=[];Xt.forEach(({a:K,b:ft})=>{const ht=V[K].position,yt=V[ft].position,Gt=Math.min(1,.08+(L.get(K)??9)/Y*.58+E()*.3);O.push(ht.x,ht.y,ht.z,yt.x,yt.y,yt.z),nt.push(ht.x,ht.y,ht.z,ht.x,ht.y,ht.z),St.push(yt.x,yt.y,yt.z,yt.x,yt.y,yt.z),Tt.push(0,1),Pt.push(Gt,Gt)});const qt=new Ee;qt.setAttribute("position",new Kt(O,3)),qt.setAttribute("aStart",new Kt(nt,3)),qt.setAttribute("aEnd",new Kt(St,3)),qt.setAttribute("aT",new Kt(Tt,1)),qt.setAttribute("aDelay",new Kt(Pt,1));const te=new Ar(qt,new gn({uniforms:{uReveal:{value:0},uColorShift:{value:0},uOpacity:{value:0}},vertexShader:`
      attribute vec3 aStart;
      attribute vec3 aEnd;
      attribute float aT;
      attribute float aDelay;
      uniform float uReveal;
      varying float vGlow;
      void main() {
        float growth = clamp((uReveal - aDelay * 0.72) / 0.28, 0.0, 1.0);
        vec3 webPosition = mix(aStart, aEnd, min(aT, growth));
        vGlow = 0.45 + 0.55 * growth;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(webPosition, 1.0);
      }
    `,fragmentShader:`
      uniform float uColorShift;
      uniform float uOpacity;
      varying float vGlow;
      void main() {
        vec3 webWhite = vec3(0.97, 1.0, 0.985);
        vec3 webBlue = vec3(0.42, 0.8, 0.97);
        vec3 color = mix(webWhite, webBlue, uColorShift);
        float alpha = uOpacity * vGlow;
        if (alpha < 0.01) discard;
        gl_FragColor = vec4(color * (0.72 + 0.5 * vGlow), alpha);
      }
    `,transparent:!0,depthWrite:!1,blending:le}));return te.renderOrder=6,te.frustumCulled=!1,M.add(te),{group:M,points:at,lines:te}}function Q(){const M=new Ge,E=[{center:[-4.2,1.55,-2.1],spread:[1.45,.85,1.1]},{center:[-1.55,.25,-2.5],spread:[1.3,1.25,1.25]},{center:[2.15,1.45,-2.2],spread:[1.55,.95,1.2]},{center:[4.05,-1.15,-2.5],spread:[1.25,1.05,1.15]},{center:[-.35,-2.15,-2.15],spread:[1.75,.72,1.3]},{center:[-3.55,-1.8,-1.75],spread:[1.15,.92,1.1]}];let R=17;const C=()=>(R=R*16807%2147483647,R/2147483647),k=()=>{const Z=Math.max(C(),1e-4);return Math.sqrt(-2*Math.log(Z))*Math.cos(Math.PI*2*C())};return[{count:1400,size:.042,opacity:.56},{count:560,size:.078,opacity:.72},{count:170,size:.13,opacity:.64}].forEach((Z,$)=>{const y=[],H=[],D=[],U=[];for(let tt=0;tt<Z.count;tt+=1){let ct,_t,pt;if(C()<.82){const Ft=E[Math.floor(C()*E.length)];ct=Ft.center[0]+k()*Ft.spread[0],_t=Ft.center[1]+k()*Ft.spread[1],pt=Ft.center[2]+k()*Ft.spread[2]}else ct=(C()*2-1)*6.2,_t=(C()*2-1)*3.6,pt=C()*4.5-4;y.push(de.clamp(ct,-6.7,6.7),de.clamp(_t,-3.9,3.9),de.clamp(pt,-5.2,1.2));const Bt=.62+C()*.38,Rt=(tt*37+$*13)%31<2;H.push(Bt,Bt*(Rt?.9:.16),Bt*(Rt?1:.035)),D.push(C()*Math.PI*2),U.push(2.1+C()*1.4)}const V=new Ee;V.setAttribute("position",new Kt(y,3)),V.setAttribute("color",new Kt(H,3)),V.setAttribute("aPhase",new Kt(D,1)),V.setAttribute("aSpeed",new Kt(U,1));const X=new gn({uniforms:{uTime:{value:0},uSize:{value:Z.size*680},uOpacity:{value:Z.opacity},uReveal:{value:0},uAbsorbProgress:{value:0},uAbsorbTarget:{value:new P}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:le,vertexColors:!0});M.add(new Ke(V,X))}),M}function dt(){const E=[],R=[],C=new ee(12144941),k=new ee(5614016),Z=new ee(7373197);for(let D=0;D<1100;D+=1){const U=D*73%1100/1100,V=D*419%1100/1100,X=(U*2-1)*6.6+Math.sin(D*1.71)*.12,tt=(V*2-1)*3.65+Math.cos(D*1.13)*.08,ct=-4.2+Math.sin(D*.37)*.7,_t=Math.sin(X*1.18)+Math.cos(tt*1.76)+Math.sin((X-tt)*.63),pt=Math.min(1,Math.abs(_t)/2.4),Bt=Z.clone().lerp(_t>=0?C:k,.42+pt*.5),Rt=.28+pt*.58;E.push(X,tt,ct),R.push(Bt.r*Rt,Bt.g*Rt,Bt.b*Rt)}const $=new Ee;$.setAttribute("position",new Kt(E,3)),$.setAttribute("color",new Kt(R,3));const y=new pn({size:.07,map:i,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:le,sizeAttenuation:!0}),H=new Ke($,y);return H.visible=!1,H}function gt(){const M=[[-2.2,0,0]],E=new Ge,R=new ee(16726797),C=new ee(16763760),k=M.map((Z,$)=>{const H=new Float32Array(1080),D=new Float32Array(360*3),U=new Float32Array(360*3),V=new Float32Array(360*3);for(let j=0;j<360;j+=1){const Jt=j*2.39996323+$*.71,ie=Math.acos(1-2*((j+.5)/360)),he=.64*(.94+Math.sin(j*1.73+$)*.04+Math.cos(j*.47)*.025),fe=Math.cos(Jt)*Math.sin(ie)*he,Re=Math.cos(ie)*he,me=Math.sin(Jt)*Math.sin(ie)*he,Pe=j*3;H.set([fe,Re,me],Pe),D.set([fe,Re,me],Pe);const Ie=1/Math.max(.001,Math.hypot(fe,Re,me)),De=.08+(j*31+$*17)%23/23*.18;U.set([fe*Ie*De+Math.sin(j*.83)*.035,Re*Ie*De+Math.cos(j*.57)*.025,me*Ie*De+Math.sin(j*1.17)*.04],Pe);const ze=.18+j*13%19/19*.72,xn=R.clone().lerp(C,ze);V.set([xn.r,xn.g,xn.b],Pe)}const X=new _n(new Bs(.62,40,28),new gn({uniforms:{uReveal:{value:0},uImpact:{value:0},uScar:{value:0},uPhase:{value:$*1.37}},vertexShader:`
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
        `,transparent:!0,depthWrite:!0}));X.rotation.set($*.11,$*.37,$*.08);const tt=new Ee;tt.setAttribute("position",new Be(D,3)),tt.setAttribute("color",new Be(V,3));const ct=new Ke(tt,new pn({size:.034,map:i,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:le,sizeAttenuation:!0}));ct.rotation.copy(X.rotation);const _t=new _n(new Bs(.78,36,24),new gn({uniforms:{uReveal:{value:0},uImpact:{value:0},uHeat:{value:0},uPhase:{value:$*.83}},vertexShader:`
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
        `,transparent:!0,depthTest:!1,depthWrite:!1,blending:le}));_t.renderOrder=-2;const pt=260,Bt=new Float32Array(pt*3),Rt=new Float32Array(pt*3);for(let j=0;j<pt;j+=1){const Jt=j*2.39996323+$*.51,ie=Math.acos(1-2*((j+.5)/pt)),pe=.72+(j*31+$*7)%29/29*.17,he=j*3;Bt.set([Math.cos(Jt)*Math.sin(ie)*pe,Math.cos(ie)*pe,Math.sin(Jt)*Math.sin(ie)*pe],he);const fe=new ee(16721416).lerp(new ee(16751154),j*17%23/23*.45);Rt.set(fe.toArray(),he)}const Ft=new Ee;Ft.setAttribute("position",new Be(Bt,3)),Ft.setAttribute("color",new Be(Rt,3));const kt=new Ke(Ft,new pn({size:.052,map:i,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:le,sizeAttenuation:!0})),Wt=new P(...Z),Yt=($===0?new P(0,0,0):new P(...M[$-1])).sub(Wt);Yt.lengthSq()<.001?Yt.set(1,0,0):Yt.normalize();const Zt=new P(0,1,0).addScaledVector(Yt,-Yt.y).normalize();Zt.lengthSq()<.01&&Zt.set(1,0,0);const ut=Yt.clone().cross(Zt).normalize(),xt=new on(new Qe({map:i,color:16770992,transparent:!0,opacity:0,depthWrite:!1,blending:le}));xt.scale.setScalar(.2),xt.position.copy(Yt).multiplyScalar(.642);const bt=new on(new Qe({map:i,color:16773316,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:le}));bt.position.copy(xt.position),bt.scale.setScalar(.3);const at=3,At=96,Xt=at*At,Lt=new Float32Array(Xt*3),Ot=new Float32Array(Xt),oe=new Float32Array(Xt),Qt=new Float32Array(Xt);for(let j=0;j<Xt;j+=1){const Jt=Math.floor(j/At),pe=j%At/At*Math.PI*2+Jt*.37,he=j*3;Lt.set(Yt.clone().multiplyScalar(.635).toArray(),he),Ot[j]=.034+(j*17+$*7)%19/19*.026,Qt[j]=pe}const _e=new Ee;_e.setAttribute("position",new Be(Lt,3)),_e.setAttribute("aSize",new Be(Ot,1)),_e.setAttribute("aAlpha",new Be(oe,1).setUsage(qo));const g=new Ke(_e,new gn({uniforms:{uColor:{value:new ee(16766880)},uOpacity:{value:0},uPointScale:{value:180}},vertexShader:`
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
      `,transparent:!0,depthTest:!0,depthWrite:!1,blending:le}));g.renderOrder=11,g.frustumCulled=!1;const L=3525,W=new Float32Array(L*3),Y=new Float32Array(L*3),O=new Float32Array(L*3),nt=new Float32Array(L*3),St=new Float32Array(L),Tt=new Float32Array(L),Pt=new Float32Array(L),qt=new Uint8Array(L),te=new Float32Array(L),K=new Float32Array(L),ft=new Float32Array(L);for(let j=0;j<L;j+=1){const Jt=j*2.39996323+$*.43,ie=(j*47+$*19)%101/101,pe=ie<.38?0:ie<.88?1:2,he=(j*29+$*11)%97/97,fe=(j*71+$*23)%103/103,Re=pe===0?.12+he*.3:pe===1?.28+he*1.72:1.2+he*2.1,me=pe===0?.18+fe**.72*1.08:pe===1?.06+fe**.68*2.08:.28+fe**.62*2.55,Pe=(j*13+$*5)%31/31,Ie=.012+Math.sqrt(Pe)*.12,De=Math.cos(Jt)*Ie,ze=Math.sin(Jt)*Ie,xn=Yt.clone().multiplyScalar(.59).addScaledVector(Zt,De).addScaledVector(ut,ze),yn=Yt.clone().multiplyScalar(Re).addScaledVector(Zt,Math.cos(Jt)*me).addScaledVector(ut,Math.sin(Jt)*me),je=j*3;W.set(xn.toArray(),je),Y.set(yn.toArray(),je);const un=xn.normalize();O.set(un.toArray(),je);const ei=(j*23+$*13)%31/31,Li=new ee(16721416).lerp(new ee(16773304),ei**3.2);nt.set(Li.toArray(),je);const Ii=(j*19+$*5)%43/43;St[j]=(pe===1?.022:.018)+Ii**3*(pe===2?.075:.095),Tt[j]=.35+(j*11+$*17)%37/37*.65,qt[j]=pe,te[j]=(j*41+$*17)%97/97*(pe===0?.38:.22),K[j]=pe===0?2.7+he*.7:pe===1?3.2+he*.8:.7+he*.5,ft[j]=pe===0?.72+he*.32:pe===1?.28+he*.38:.08+he*.2}const ht=new Ee;ht.setAttribute("position",new Be(W,3)),ht.setAttribute("color",new Be(nt,3)),ht.setAttribute("aSize",new Be(St,1)),ht.setAttribute("aEnergy",new Be(Tt,1)),ht.setAttribute("aAlpha",new Be(Pt,1).setUsage(qo));const yt=new Ke(ht,new gn({uniforms:{uOpacity:{value:0},uPointScale:{value:180}},vertexShader:`
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
      `,transparent:!0,depthTest:!0,depthWrite:!1,blending:le}));yt.renderOrder=12,yt.frustumCulled=!1;const Gt=new Ge;Gt.add(xt,bt,g,yt);const wt=new Ge;return wt.add(_t,kt,X,ct,Gt),wt.position.set(...Z),wt.userData={shell:X,points:ct,atmosphere:_t,corona:kt,core:xt,burst:bt,surfaceEffects:Gt,ripple:g,splash:yt,basePositions:H,drift:U,splashVelocities:Y,splashSurfaceDirections:O,splashEnergy:Tt,splashTypes:qt,splashDelays:te,splashLifetimes:K,splashSpinDrag:ft,contactDirection:Yt,tangentA:Zt,tangentB:ut,ripplePhase:Qt,surfaceBaseRotation:X.rotation.clone(),impactSpinOrigin:0,impactCaptured:!1,phase:$*.73},E.add(wt),wt});return E.visible=!1,{group:E,lobes:k,positions:M.map(Z=>new P(...Z))}}function ot(M,E){if(M.shape==="chladni"&&M.boundary==="volume")return et(M,E);if(M.shape==="chladni")return vt(M,E);const R=new Ge,C=new on(new Qe({map:i,color:M.color,transparent:!0,opacity:.2,depthWrite:!1,blending:le}));C.scale.setScalar(M.radius*2.7),R.add(C);const k=new on(new Qe({map:i,color:M.color,transparent:!0,opacity:.42,depthWrite:!1,blending:le}));k.scale.setScalar(M.radius*1.65),R.add(k);const Z=new on(new Qe({map:i,color:fn[0],transparent:!0,opacity:.92,depthWrite:!1,blending:le}));Z.scale.setScalar(M.radius*.68),R.add(Z);const $=new Ee,y=[],H=[],D=360+E%4*60,U=new ee(M.color);for(let ct=0;ct<D;ct+=1){const _t=ct%3,pt=ct*2.39996323+M.phase,Bt=Math.acos(1-2*((ct+.5)/D)),Rt=M.radius*(.38+_t*.28+.06*Math.sin(ct*1.7+M.phase)),Ft=.78+.18*Math.sin(ct*.37+M.phase),kt=1+.12*Math.sin(pt*2.4+_t);y.push(Math.cos(pt)*Math.sin(Bt)*Rt*kt,Math.cos(Bt)*Rt*Ft,Math.sin(pt)*Math.sin(Bt)*Rt*.68);const Wt=new ee(fn[Math.min(_t+1,fn.length-1)]).lerp(U,.22),Dt=.7+.38*((Math.sin(pt*1.7)+1)/2);H.push(Wt.r*Dt,Wt.g*Dt,Wt.b*Dt)}$.setAttribute("position",new Kt(y,3)),$.setAttribute("color",new Kt(H,3));const V=new Ke($,new pn({size:.056,map:i,vertexColors:!0,transparent:!0,opacity:.66,depthWrite:!1,blending:le,sizeAttenuation:!0}));R.add(V);const X=new Do(M.radius*.88,.006,4,64),tt=new _n(X,new tr({color:M.color,transparent:!0,opacity:.22,blending:le,depthWrite:!1}));return tt.rotation.x=Math.PI*.45+M.phase*.1,tt.rotation.z=M.phase,R.add(tt),R.position.set(...M.position),R.userData={...M,halo:C,mantle:k,core:Z,particles:V,ring:tt,index:E},{group:R,definition:M}}function vt(M,E){const R=new Ge,C=[],k=[],Z=new Map,$=76,y=.115,[H,D]=M.modes,U=new ee(M.color),V=new ee(fn[0]);for(let kt=0;kt<$;kt+=1)for(let Wt=0;Wt<$;Wt+=1){const Dt=Wt/($-1)*2-1,Yt=kt/($-1)*2-1,Zt=Zc(Dt,Yt,H,D);if(Math.abs(Zt)>y)continue;const ut=1-Math.abs(Zt)/y,xt=Math.sin((kt*83+Wt*47+E*29)*.17)*.008,bt=[(Dt+xt)*M.radius*1.25,(Yt-xt*.6)*M.radius*1.25,Zt*M.radius*1.7+Math.sin((Dt-Yt)*Math.PI*(H+D))*M.radius*.035];C.push(...bt),Z.set(kt*$+Wt,bt);const at=U.clone().lerp(V,.28+ut*.66);k.push(at.r,at.g,at.b)}const X=new Ee;X.setAttribute("position",new Kt(C,3)),X.setAttribute("color",new Kt(k,3));const tt=new Ke(X,new pn({size:.12,map:i,color:M.color,transparent:!0,opacity:.14,depthWrite:!1,blending:le,sizeAttenuation:!0}));R.add(tt);const ct=new Ke(X,new pn({size:.047,map:i,vertexColors:!0,transparent:!0,opacity:.72,depthWrite:!1,blending:le,sizeAttenuation:!0}));R.add(ct);let _t=null;if(M.network){const kt=[],Wt=[[0,1],[1,0],[1,1],[1,-1]];Z.forEach((Yt,Zt)=>{const ut=Math.floor(Zt/$),xt=Zt%$;Wt.forEach(([bt,at])=>{const At=Z.get((ut+bt)*$+xt+at);At&&kt.push(...Yt,...At)})});const Dt=new Ee;Dt.setAttribute("position",new Kt(kt,3)),_t=new Ar(Dt,new Ei({color:M.color,transparent:!0,opacity:.16,depthWrite:!1,blending:le})),R.add(_t)}const pt=M.radius*1.3,Bt=M.boundary==="octagon"?Array.from({length:8},(kt,Wt)=>{const Dt=Math.PI/8+Wt*Math.PI/4,Yt=pt/Math.cos(Math.PI/8);return new P(Math.cos(Dt)*Yt,Math.sin(Dt)*Yt,0)}):[new P(-pt,-pt,0),new P(pt,-pt,0),new P(pt,pt,0),new P(-pt,pt,0)],Rt=new Ee().setFromPoints(Bt),Ft=new Uh(Rt,new Ei({color:M.color,transparent:!0,opacity:.13,depthWrite:!1,blending:le}));return R.add(Ft),R.position.set(...M.position),R.userData={...M,isChladni:!0,pattern:ct,glow:tt,network:_t,outline:Ft,index:E},{group:R,definition:M}}function et(M,E){if(t)return Ut(M,E);const R=new Ge,C=[],k=[],Z=[],$=[],y=new Map,[H,D,U]=M.modes,V=40,X=M.radius*1.8,tt=new ee(M.color),ct=new ee(7439516),_t=new ee(16774367),pt=Array.from({length:18},(ut,xt)=>({x:Math.sin(xt*3.71+.8)*.72,y:Math.cos(xt*2.17-.4)*.72,z:Math.sin(xt*1.43+1.9)*.72}));for(let ut=0;ut<V;ut+=1){const xt=ut/(V-1)*2-1;for(let bt=0;bt<V;bt+=1){const at=bt/(V-1)*2-1;for(let At=0;At<V;At+=1){const Xt=At/(V-1)*2-1;if(xt*xt*.62+at*at*.86+Xt*Xt*1.16>1.05)continue;const Ot=xt+Math.sin(at*Math.PI*1.4+M.phase)*.1+Math.sin(Xt*Math.PI*2.1)*.045,oe=at+Math.sin(Xt*Math.PI*1.25-M.phase*.4)*.11-Math.sin(xt*Math.PI*1.8)*.04,Qt=Xt+Math.sin(xt*Math.PI*1.55+M.phase*.3)*.12+Math.cos(at*Math.PI*1.9)*.04,_e=W0(Ot,oe,Qt,H,D,U);let g=1/0,L=1/0,W=1/0;pt.forEach(te=>{const K=Ot-te.x,ft=oe-te.y,ht=Qt-te.z,yt=Math.sqrt(K*K+ft*ft+ht*ht);yt<g?(W=L,L=g,g=yt):yt<L?(W=L,L=yt):yt<W&&(W=yt)});const Y=Math.exp(-((L-g)**2)*28-(W-L)**2*44),O=Math.exp(-Math.abs(_e)*4.2),nt=Y*(.56+O*.62);if(nt<.55)continue;const St=Math.min(1,nt*.72+O*.35),Tt=Math.sin((ut*97+bt*57+At*31+E*17)*.19)*.008,Pt=[(Ot*1.12+oe*.22+oe*Qt*.055+Tt)*X,(oe*.92+Qt*.12+Math.sin(Ot*Math.PI)*.055-Tt*.4)*X,(Qt*.94+Ot*oe*.07)*X];C.push(...Pt),y.set(ut*V*V+bt*V+At,{point:Pt,filamentScore:nt});const qt=ct.clone().lerp(tt,.56+St*.28).lerp(_t,St*.32);k.push(qt.r,qt.g,qt.b)}}}y.forEach(({point:ut,filamentScore:xt},bt)=>{const at=Math.floor(bt/(V*V)),At=bt%(V*V),Xt=Math.floor(At/V),Lt=At%V;[[1,0,0],[0,1,0],[0,0,1]].forEach(([Ot,oe,Qt])=>{const _e=(at+Ot)*V*V+(Xt+oe)*V+Lt+Qt,g=y.get(_e);g&&(Z.push(...ut,...g.point),(xt>.76||g.filamentScore>.76)&&$.push(...ut,...g.point))})}),[{center:[-.72,.86,.14],size:[.52,.18],bend:.18,angle:-.22},{center:[.66,-.72,-.2],size:[.34,.14],bend:-.14,angle:.46}].forEach(ut=>{const at=new Map;for(let At=0;At<9;At+=1){const Xt=At/8*2-1;for(let Lt=0;Lt<24;Lt+=1){const Ot=Lt/23*2-1;if(Ot*Ot+Xt*Xt*1.45>1)continue;const oe=Zc(Ot,Xt,H,D),Qt=Ot*ut.size[0],_e=Xt*ut.size[1],g=Math.cos(ut.angle),L=Math.sin(ut.angle),W=[(ut.center[0]+Qt*g-_e*L)*X,(ut.center[1]+Qt*L+_e*g)*X,(ut.center[2]+oe*ut.bend+Ot*Ot*.08)*X];C.push(...W),k.push(tt.r,tt.g,tt.b),at.set(At*24+Lt,W)}}at.forEach((At,Xt)=>{const Lt=Math.floor(Xt/24),Ot=Xt%24;[[0,1],[1,0]].forEach(([oe,Qt])=>{const _e=at.get((Lt+oe)*24+Ot+Qt);_e&&(Z.push(...At,..._e),$.push(...At,..._e))})})});const Rt=new Ee;Rt.setAttribute("position",new Kt(C,3)),Rt.setAttribute("color",new Kt(k,3));const Ft=new Ke(Rt,new pn({size:.065,map:i,color:M.color,transparent:!0,opacity:.045,depthWrite:!1,blending:le,sizeAttenuation:!0}));R.add(Ft);const kt=new Ke(Rt,new pn({size:.019,map:i,vertexColors:!0,transparent:!0,opacity:.62,depthWrite:!1,blending:le,sizeAttenuation:!0}));R.add(kt);const Wt=new Ee;Wt.setAttribute("position",new Kt(Z,3));const Dt=new Ar(Wt,new Ei({color:12242401,transparent:!0,opacity:.24,depthWrite:!1,blending:le}));R.add(Dt);const Yt=new Ee;Yt.setAttribute("position",new Kt($,3));const Zt=new Ar(Yt,new Ei({color:16119807,transparent:!0,opacity:.2,depthWrite:!1,blending:le}));return R.add(Zt),R.position.set(...M.position),R.userData={...M,isChladni:!0,pattern:kt,glow:Ft,network:Dt,outline:Zt,index:E},{group:R,definition:M}}function Ut(M,E){const R=new Ge,C=[],k=[],Z=t,$=M.radius*2.35,y=[[40,150,118],[46,190,200],[70,120,235],[182,206,255],[236,182,92],[230,72,96]],H=Array.from({length:48},(ct,_t)=>{const pt=y[Math.min(y.length-1,Math.floor(_t/8))],Bt=_t%8/7,Rt=Bt*Bt*.72,Ft=.32+Bt*.68;return pt.map(kt=>Math.min(255,(kt*(1-Rt)+255*Rt)*Ft)/255)});for(let ct=0;ct<Z.length;ct+=6){const _t=Z[ct+3],pt=Z[ct+4],Bt=_t*pt,Rt=Z[ct]*$,Ft=Z[ct+1]*$,kt=Z[ct+2]*$;C.push(Rt,Ft,kt);const Wt=H[Math.min(47,Math.max(0,Math.round(Z[ct+5])))]||H[24],Dt=.38+Bt*1.15;k.push(Math.min(1,Wt[0]*Dt),Math.min(1,Wt[1]*Dt),Math.min(1,Wt[2]*Dt))}const D=new Ee;D.setAttribute("position",new Kt(C,3)),D.setAttribute("color",new Kt(k,3));const U=new Ke(D,new pn({size:.045,map:i,color:14412031,transparent:!0,opacity:.11,depthWrite:!1,blending:le,sizeAttenuation:!0}));R.add(U);const V=new Ke(D,new pn({size:.02,map:i,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:le,sizeAttenuation:!0}));R.add(V);const X=new Ee;X.setAttribute("position",new Kt([],3));const tt=new Ar(X,new Ei({color:14477823,transparent:!0,opacity:0,depthWrite:!1,blending:le}));return R.add(tt),R.position.set(...M.position),R.userData={...M,isChladni:!0,pattern:V,glow:U,network:null,outline:tt,index:E},{group:R,definition:M}}function Vt(M,E){const R=new Ge,C=new on(new Qe({map:i,color:7998466,transparent:!0,opacity:.16,depthWrite:!1,blending:le}));C.scale.setScalar(M.scale*3.5),R.add(C);const k=new on(new Qe({map:i,color:16723724,transparent:!0,opacity:.86,depthWrite:!1,blending:le}));k.scale.setScalar(M.scale*1.35),R.add(k);const Z=[];for(let H=0;H<11;H+=1){const D=H*2.39996323+E*.47,U=M.scale*(.65+H%4*.35);Z.push(Math.cos(D)*U,Math.sin(D)*U*.62,Math.sin(D*1.7)*U*.35)}const $=new Ee;$.setAttribute("position",new Kt(Z,3));const y=new Ke($,new pn({size:.038,map:i,color:16734751,transparent:!0,opacity:.7,depthWrite:!1,blending:le,sizeAttenuation:!0}));return R.add(y),R.position.set(...M.position),R.userData={halo:C,core:k,companions:y,phase:E*.73},{group:R,definition:M}}function re(){const M=new Ee;M.setAttribute("position",new Kt(new Array(6).fill(0),3));const E=new Fs(M,new Sc({color:13095167,transparent:!0,opacity:.38,dashSize:.085,gapSize:.065,depthWrite:!1}));return E.frustumCulled=!1,E.computeLineDistances(),E}function xe(){const M=new Ge,E=new on(new Qe({map:i,color:Cs,transparent:!0,opacity:.9,depthWrite:!1,blending:le}));M.add(E);const R=new on(new Qe({map:i,color:16777215,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:le}));R.renderOrder=21,M.add(R);const C=new Ee,k=new Float32Array(360*3),Z=new Float32Array(360*3),$=[],y=new ee(Cs);for(let U=0;U<360;U+=1)$.push({s:U/359*2-1,angle:U*2.39996323,radial:.45+U%5*.1}),Z[U*3]=y.r,Z[U*3+1]=y.g,Z[U*3+2]=y.b;C.setAttribute("position",new Be(k,3)),C.setAttribute("color",new Be(Z,3));const H=new Ke(C,new pn({size:.044,map:i,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,blending:le}));M.add(H);const D=new Ge;for(let U=0;U<9;U+=1){const V=new _n(new Os(.88,1,64),new tr({color:Cs,transparent:!0,opacity:.18,side:Ln,depthTest:!1,depthWrite:!1,blending:le}));V.userData.s=U/8*2-1,D.add(V)}return M.add(D),M.visible=!1,M.userData={core:E,frozenCoreBoost:R,particles:H,rings:D,meta:$},{group:M,geometry:C,positions:k}}function Le(M){const E=Qc(M),R=tl(M),C=M>On&&M<=ln,k=M>ln;if(!E.active||k){l.group.visible=!1;return}if(l.group.visible=!0,C){const Dt=l.group.userData.recombinationAnchor;Dt&&l.group.position.copy(Dt),l.group.userData.recombinationAnchorQuaternion&&l.group.quaternion.copy(l.group.userData.recombinationAnchorQuaternion);const Yt=R.silenceBrightness;qn.copy(gs).lerp(el,Yt),l.group.userData.core.material.color.copy(qn),l.group.userData.core.material.opacity=de.lerp(.78,1,Yt),l.group.userData.particles.material.opacity=de.lerp(.92,.16,R.progress),l.group.userData.rings.children.forEach(Zt=>{const ut=Zt.userData.s*19-R.waveTime*34,xt=Math.exp(-Zt.userData.s*Zt.userData.s*2.8);Zt.material.opacity=(.1+Math.max(0,Math.cos(ut))*.38*xt)*(1-Yt)});return}const Z=M,$=1,y=1;qn.copy(gs).lerp(el,R.silenceBrightness);const H=jc(M).nodes,D=Math.min(E.progress,.9)*H.length,U=Math.min(H.length-1,Math.floor(D)),V=.12+(D-U)*.76,X=s[H[U]].group.position,tt=s[H[(U+1)%H.length]].group.position,ct=new P().subVectors(tt,X),_t=X.clone().lerp(tt,ce(V)),pt=ct.normalize(),Bt=new P(0,1,0).cross(pt).normalize();Bt.lengthSq()<.01&&Bt.set(1,0,0);const Rt=pt.clone().cross(Bt).normalize();l.group.position.copy(_t).addScaledVector(Rt,Math.sin(Z*19)*.045*y),l.group.quaternion.setFromUnitVectors(new P(0,0,1),pt),l.userData=l.group.userData,l.group.userData.recombinationAnchor=l.group.position.clone(),l.group.userData.recombinationAnchorQuaternion=l.group.quaternion.clone(),l.group.userData.core.scale.setScalar(E.radius*1.65);const Ft=.9;l.group.userData.core.material.color.copy(qn),l.group.userData.core.material.opacity=de.lerp(Ft,1,R.silenceBrightness),l.group.userData.frozenCoreBoost.material.opacity=0,l.group.userData.particles.material.opacity=de.lerp(.92,1,R.silenceBrightness),l.group.userData.particles.material.size=de.lerp(.044,.072,R.silenceBrightness);const kt=l.geometry.getAttribute("position"),Wt=l.geometry.getAttribute("color");l.group.userData.meta.forEach((Dt,Yt)=>{const Zt=Dt.s*19-Z*34,ut=Math.exp(-Dt.s*Dt.s*3.2),xt=Math.sin(Zt)*E.radius*.58*ut,bt=(Dt.s*E.radius*2.7+xt)*(1+R.progress*.8),at=E.radius*(.34+.12*Math.cos(Zt))*$,At=Math.cos(Dt.angle)*at*Dt.radial,Xt=Math.sin(Dt.angle)*at*Dt.radial;kt.setXYZ(Yt,At,Xt,bt),Wt.setXYZ(Yt,qn.r,qn.g,qn.b)}),l.group.userData.rings.children.forEach(Dt=>{const Yt=Dt.userData.s*19-Z*34,Zt=Math.exp(-Dt.userData.s*Dt.userData.s*2.8);Dt.position.z=Dt.userData.s*.42+Math.sin(Yt)*.045*Zt,Dt.position.z*=1+R.progress*.8,Dt.scale.setScalar((.31+(.5+.5*Math.cos(Yt))*.22*Zt)*$),Dt.material.opacity=(.1+Math.max(0,Math.cos(Yt))*.38*Zt)*(1-R.progress*.35),Dt.rotation.z=Z*.7+Dt.userData.s}),kt.needsUpdate=!0,Wt.needsUpdate=!0}function st(M,E){if(u.group.visible=M.active,!M.active){u.lobes.forEach(k=>{k.userData.impactCaptured=!1});return}const R=new ee(16730902),C=new ee(16770990);u.lobes.forEach((k,Z)=>{const $=Z+1,y=M.impactClock-$,H=de.clamp((M.pathPosition-$+.3)/.3,0,1),D=y<=0?1:1-ce(de.clamp(y/.34,0,1)),U=ce(H)*D,V=y<0?0:Math.exp(-y*7.5),X=y<0?0:ce(de.clamp(y/.7,0,1)),tt=y<0?0:ce(de.clamp(y/.16,0,1)),{shell:ct,points:_t,atmosphere:pt,corona:Bt,core:Rt,burst:Ft,surfaceEffects:kt,splash:Wt,basePositions:Dt,drift:Yt,splashVelocities:Zt,splashSurfaceDirections:ut,splashEnergy:xt,splashTypes:bt,splashDelays:at,splashLifetimes:At,splashSpinDrag:Xt,ripple:Lt,contactDirection:Ot,tangentA:oe,tangentB:Qt,ripplePhase:_e,surfaceBaseRotation:g,impactSpinOrigin:L,impactCaptured:W}=k.userData;y>=0&&!W&&(k.userData.impactSpinOrigin=E,k.userData.impactCaptured=!0);const Y=k.userData.impactCaptured?Math.max(0,E-k.userData.impactSpinOrigin):0,O=E*Aa+Z*.52,nt=_t.geometry.getAttribute("position");for(let wt=0;wt<nt.count;wt+=1){const j=wt*3,Jt=Math.sign(Dt[j]||1)*X*.1;nt.array[j]=Dt[j]+Yt[j]*X*1.7+Jt,nt.array[j+1]=Dt[j+1]+Yt[j+1]*X*1.7,nt.array[j+2]=Dt[j+2]+Yt[j+2]*X*1.7}nt.needsUpdate=!0,ct.rotation.set(g.x,g.y+O,g.z),_t.rotation.copy(ct.rotation),pt.rotation.copy(ct.rotation),Bt.rotation.set(ct.rotation.x*.72,g.y+O,ct.rotation.z*.66),kt.rotation.set(0,k.userData.impactCaptured?Y*Aa:0,0),k.scale.setScalar(1.42),ct.material.uniforms.uReveal.value=M.reveal,ct.material.uniforms.uImpact.value=V,ct.material.uniforms.uScar.value=tt,pt.material.uniforms.uReveal.value=M.reveal;const Tt=y<0?0:1-Math.exp(-y*16);pt.material.uniforms.uImpact.value=Math.max(V,Tt*.34),pt.material.uniforms.uHeat.value=Tt,_t.material.color.copy(R).lerp(C,V*.68),_t.material.opacity=M.reveal*(.08+V*.38+tt*.08),Bt.material.opacity=M.reveal*(.2+U*.08+V*.24),Rt.material.opacity=M.reveal*(V*.98+tt*.045),Rt.scale.setScalar(.2+V*.46+tt*.03);const Pt=Lt.geometry.getAttribute("position"),qt=Lt.geometry.getAttribute("aAlpha"),te=M.rippleStrength;for(let wt=0;wt<Pt.count;wt+=1){const j=Math.floor(wt/96),Jt=Y-j*.12,ie=wt*3;if(!k.userData.impactCaptured||Jt<0||Jt>2.9){qt.array[wt]=0;continue}const he=.06+de.clamp(Jt/2.35,0,1)*.92,fe=_e[wt]+Jt*5.8,Re=Math.sin(he),me=Ot.x*Math.cos(he)+(oe.x*Math.cos(fe)+Qt.x*Math.sin(fe))*Re,Pe=Ot.y*Math.cos(he)+(oe.y*Math.cos(fe)+Qt.y*Math.sin(fe))*Re,Ie=Ot.z*Math.cos(he)+(oe.z*Math.cos(fe)+Qt.z*Math.sin(fe))*Re,De=Math.hypot(me,Pe,Ie),ze=.642/Math.max(.001,De);Pt.array[ie]=me*ze,Pt.array[ie+1]=Pe*ze,Pt.array[ie+2]=Ie*ze;const xn=ce(de.clamp(Jt/.045,0,1)),yn=1-ce(de.clamp((Jt-1.2)/1.7,0,1));qt.array[wt]=xn*yn*te*(.68+V*.36)}Pt.needsUpdate=!0,qt.needsUpdate=!0,Lt.material.uniforms.uOpacity.value=M.reveal*1.3,Lt.material.uniforms.uPointScale.value=Ti.domElement.height*.72;const K=Wt.geometry.getAttribute("position"),ft=Wt.geometry.getAttribute("aAlpha"),ht=M.rippleStrength;for(let wt=0;wt<K.count;wt+=1){const j=wt*3,Jt=Y-at[wt],ie=At[wt];if(!k.userData.impactCaptured||Jt<0||Jt>ie){ft.array[wt]=0;continue}const pe=Jt/ie,he=bt[wt],fe=xt[wt],Re=wt*2.39996323+k.userData.phase,me=4.6+Xt[wt]*8.4,Pe=Re+Jt*me,Ie=Math.cos(Pe),De=Math.sin(Pe);if(he===0){const je=.04+Jt*(.3+fe*.42),un=Math.min(1.05,je),ei=Ot.x*Math.cos(un)+(oe.x*Ie+Qt.x*De)*Math.sin(un),Li=Ot.y*Math.cos(un)+(oe.y*Ie+Qt.y*De)*Math.sin(un),Ii=Ot.z*Math.cos(un)+(oe.z*Ie+Qt.z*De)*Math.sin(un),_r=Math.hypot(ei,Li,Ii),Cn=(.642+(.018+fe*.08*Math.exp(-Jt*1.3)))/Math.max(.001,_r);K.array[j]=ei*Cn,K.array[j+1]=Li*Cn,K.array[j+2]=Ii*Cn}else if(he===1){const je=(wt*37+Z*17)%997/997,un=(wt*71+13)%101/101-.5,ei=(wt*113+Z*29)%991/991-.5,Li=(wt*89+Z*11)%977/977-.5,Ii=wt%3,_r=je*Math.PI*4.6+Ii*Math.PI*2/3,Oo=.72+je*1.72+un*.12,Cn=ce(de.clamp(Jt/.78,0,1)),Bo=_r*Cn+Jt*(.5+Xt[wt]*.85),zo=de.lerp(.642,Oo,Cn)+Math.sin(_r*3+Re)*.028*Cn,Vo=.18+fe*.16,Jl=Math.cos(Bo)*zo,Ho=Math.sin(Bo)*zo,Kl=(.08+Cn*.38)*(.55+je*.72),jl=ei*Kl+Math.sin(_r*1.7+Re+Jt*2.2)*.045*Cn,Ql=Li*(.06+Cn*.24);K.array[j]=Jl,K.array[j+1]=Ho*Math.sin(Vo)+un*.085*Cn+jl,K.array[j+2]=Ho*Math.cos(Vo)+Ql}else{const je=.018+Jt*(.12+fe*.25),un=Jt*(.78+fe*.6)*Math.exp(-Jt*.16),ei=Math.sin(Pe*.5)*.025*fe;K.array[j]=Ot.x*(.642+un)+oe.x*Ie*je+Qt.x*De*je,K.array[j+1]=Ot.y*(.642+un)+oe.y*Ie*je+Qt.y*De*je+ei,K.array[j+2]=Ot.z*(.642+un)+oe.z*Ie*je+Qt.z*De*je}const ze=ce(de.clamp(Jt/.045,0,1)),xn=1-ce(de.clamp((pe-.46)/.54,0,1)),yn=he===0?.7:he===1?.92:1.08;ft.array[wt]=ze*xn*yn*(.42+fe*.7)*ht}K.needsUpdate=!0,ft.needsUpdate=!0,Wt.material.uniforms.uOpacity.value=M.reveal*1.9,Wt.material.uniforms.uPointScale.value=Ti.domElement.height*.72;const yt=ce(de.clamp(Y/.035,0,1)),Gt=k.userData.impactCaptured?yt*Math.exp(-Y*5.2):0;Ft.material.opacity=M.reveal*Gt*.95,Ft.scale.setScalar(.28+Gt*.82)})}function Et(M,E){const R=new P().subVectors(E,M).normalize();return new Pi().setFromUnitVectors(new P(0,0,1),R)}function $t(M=!1){const E=u.lobes[0],R=E.userData.contactDirection.clone().multiplyScalar(.642),C=M?E.userData.surfaceEffects:E;C.updateWorldMatrix(!0,!1);const k=C.localToWorld(R),Z=E.getWorldPosition(new P),$=k.clone().sub(Z).normalize();tn.updateWorldMatrix(!0,!1);const y=tn.worldToLocal(k.clone());return{worldPoint:k,localPoint:y,normalWorld:$}}function Nt(M,E,R,C,k){const Z=new P(Math.sin(E*.12)*.28+R*.035,.12+Math.cos(E*.17)*.1,12.5-R*1.1+C.progress*1.7),$=new P(0,0,0),y=ce(de.clamp((M-(ln-.42))/.42,0,1));if(!k.active&&y<=0){ke.position.copy(Z),ke.lookAt($);return}const H=l.group.getWorldPosition(new P),D=u.lobes[0].getWorldPosition(new P),U=D.clone().lerp(H,.34),V=U.clone().add(new P(0,.18,7.4)),X=k.active?1:y,tt=k.active?ce(de.clamp((k.impactClock-1)/.34,0,1)):0,ct=D,_t=ct.clone().add(new P(0,2.15,6.9));ke.position.copy(Z).lerp(V,X).lerp(_t,tt),ke.lookAt($.lerp(U,X).lerp(ct,tt))}function ae(M){const E=de.clamp(M/Fo.pivotLy,-.92,.92),R=Math.asin(E),C=R*.26,k=Math.cos(R),Z=Math.cos(C),$=Math.sin(C);return new P(-E*nr,-k*$*nr,k*Z*nr)}function ue(M,E){const R=M.clone().applyEuler($l);return E.distanceTo(R)/nr}function Me(M,E,R){const C=E.viewOffsetLy??de.lerp(Vs,ws,E.parallaxProgress??0);ke.position.copy(ae(C)),ke.lookAt(0,0,0),ke.fov!==43&&(ke.fov=43,ke.updateProjectionMatrix())}function Oe(M){if(!M.active){if(!l.group.userData.sceneThreeActive)return;l.group.userData.sceneThreeActive=!1,l.group.userData.sceneThreeStart=null,l.group.userData.sceneThreeStartQuaternion=null,l.group.scale.setScalar(1),l.group.userData.core.renderOrder=0,l.group.userData.core.material.depthTest=!0,l.group.userData.frozenCoreBoost.material.opacity=0;return}l.group.userData.sceneThreeActive=!0,l.group.visible=!0;const E=u.lobes[0],R=$t(!1).localPoint;if(M.pathPosition<=0){const H=E.getWorldPosition(new P),D=E.userData.contactDirection.clone().normalize(),U=H.addScaledVector(D,3.15);tn.updateWorldMatrix(!0,!1);const V=tn.worldToLocal(U);l.group.userData.sceneThreeStart=V,l.group.userData.sceneThreeStartQuaternion=Et(V,R),l.group.position.copy(V),l.group.quaternion.copy(l.group.userData.sceneThreeStartQuaternion),l.group.scale.setScalar(1),l.group.userData.core.scale.setScalar(.82),l.group.userData.core.material.color.copy(gs),l.group.userData.core.material.opacity=.94,l.group.userData.particles.material.opacity=.88,l.group.userData.frozenCoreBoost.material.opacity=0;return}const C=l.group.userData.sceneThreeStart??l.group.position.clone(),k=l.group.userData.sceneThreeStartQuaternion??l.group.quaternion.clone(),Z=1-Math.pow(1-M.pathPosition,2.35),$=Math.max(0,M.impactClock-1)*ql;if(M.pathPosition<1){const H=Et(C,R);l.group.position.copy(C).lerp(R,Z),l.group.quaternion.copy(k).slerp(H,Z)}else{const H=new P(0,1,0),D=$*Aa,U=E.userData.contactDirection.clone().applyAxisAngle(H,D).normalize(),V=E.getWorldPosition(new P).addScaledVector(U,.642*1.42);tn.updateWorldMatrix(!0,!1);const X=tn.worldToLocal(V),tt=tn.worldToLocal(E.getWorldPosition(new P)),ct=H.clone().cross(U).normalize(),_t=X.clone().add(ct);l.group.position.copy(X).lerp(tt,M.freeze),l.group.quaternion.copy(Et(X,_t))}l.group.scale.setScalar(1),l.group.userData.particles.material.opacity=.88*M.rippleStrength,l.group.userData.rings.children.forEach(H=>{const D=.12+Math.max(0,Math.cos(H.userData.s*19))*.34;H.material.opacity=D*M.rippleStrength});const y=M.pathPosition>=1?Math.exp(-$*10):0;l.group.userData.core.scale.setScalar(.82),l.group.userData.core.renderOrder=20,qn.copy(gs).lerp(Ta,M.freeze),l.group.userData.core.material.color.copy(qn),l.group.userData.core.material.depthTest=!1,l.group.userData.core.material.opacity=M.coreStrength*(de.lerp(.9,.56,M.freeze)+y*.1),l.group.userData.frozenCoreBoost.scale.copy(l.group.userData.core.scale),l.group.userData.frozenCoreBoost.material.color.copy(Ta),l.group.userData.frozenCoreBoost.material.opacity=M.freeze*.3}function Ae(M,E,R,C){const{group:k,screenGroup:Z,backdrop:$,stars:y,flatStars:H,flatLines:D,depthLines:U,distanceLine:V,distanceAnchor:X,distanceLabel:tt,imprint:ct,imprintHalo:_t,imprintCore:pt,imprintRings:Bt,imprintTarget:Rt}=M;if(!E.active){k.visible=!1,Z.visible=!1,y.forEach(Lt=>{Lt.userData.label.style.opacity="0",Lt.userData.label.style.display="none"}),H&&H.forEach(Lt=>{Lt.material.opacity=0}),tt.style.opacity="0",tt.style.display="none";return}k.visible=!0,Z.visible=!0;const Ft=E.viewOffsetLy??de.lerp(Vs,ws,E.parallaxProgress??0),kt=ae(Ft);k.rotation.set(.05,-.12,0),$.material.opacity=E.reveal*.68;const Wt=C.lobes[0].getWorldPosition(new P),Dt=ce(de.clamp((R-qe)/1.05,0,1));ct.position.copy(Wt).lerp(Rt,Dt);const Yt=y[5].position,Zt=ct.position.clone().sub(Yt);Zt.lengthSq()>1e-6&&ct.position.addScaledVector(Zt.normalize(),E.imprintFade*.55),ct.rotation.z=Math.sin((R-qe)*.7)*.08;const ut=new Map,xt=new Map;y.forEach(Lt=>{const{halo:Ot,core:oe,phase:Qt,label:_e}=Lt.userData,g=Lt.userData.definition.brightness??1,L=Lt.userData.definition.latin.toLowerCase(),W=["mintaka","alnilam","alnitak"].includes(L)?mg:1,Y=ji[L]??ji[Lt.userData.definition.label];if(Y){const St=new P(...Y.target);Lt.position.copy(St),xt.set(Y.target,St);const Tt=ue(St,kt);Ot.scale.setScalar(Lt.userData.definition.scale*3.8*Tt),oe.scale.setScalar(Lt.userData.definition.scale*1.5*Tt)}else Lt.position.set(...Lt.userData.definition.position);const O=.9+Math.sin(R*1.6+Qt)*.1;oe.material.opacity=Math.min(1,E.constellationReveal*O*.96*g*nl*W),Ot.material.opacity=Math.min(1,E.constellationReveal*O*.85*g*nl*W);const nt=E.constellationReveal*(.52+O*.22);_e.style.opacity=`${nt}`,_e.style.display="block"}),H&&H.forEach(Lt=>{const Ot=Lt.userData.definition.latin.toLowerCase(),oe=ji[Ot]??ji[Lt.userData.definition.label];if(oe){const Qt=new P(...oe.start);Lt.position.copy(Qt),ut.set(oe.start,Qt);const _e=.9+Math.sin(R*1.6+Lt.userData.phase)*.1,g=Math.min(1,E.constellationReveal*_e*.1);Lt.material.opacity=g}});const bt=y[4].position;V.geometry.setFromPoints([bt,ct.position]),V.computeLineDistances(),X.position.copy(bt).lerp(ct.position,.52);const at=(Lt,Ot,oe)=>{Lt.forEach((Qt,_e)=>{const g=_e*.075,L=ce(de.clamp((E.lineReveal-g)/.24,0,1)),W=Qt.userData.isUpperTriangle?.62:.5,Y=L*W*oe;Qt.material.opacity=Y;const O=Qt.userData.pathPoints;if(O){const nt=O.map(St=>Ot.get(St)??new P(...St));Qt.geometry.dispose(),Qt.geometry=b(nt,il*Qt.userData.emphasis,Qt.userData.layerName==="depth"?kt:null)}})};at(D,ut,E.flatLineOpacity),at(U,xt,E.depthLineOpacity),V.material.opacity=E.distanceReveal*.54,tt.style.opacity=`${E.distanceReveal*.7}`,tt.style.display="block";const At=E.reveal*(1-E.imprintFade*.72);pt.material.opacity=At*.96,_t.material.opacity=At*.28,pt.scale.setScalar(.62+Math.sin(R*1.4)*.018),_t.scale.setScalar(1.65+Math.sin(R*1.1)*.06);const Xt=Math.exp(-Math.pow((1-E.progress)/.012,2));Bt.forEach((Lt,Ot)=>{const oe=R*(1.8-Ot*.22)+Lt.userData.phase;Lt.scale.setScalar(1+Math.sin(oe)*.04),Lt.material.opacity=Math.min(1,At*(.16-Ot*.025)+Xt*(.28-Ot*.035))})}function He(M,E,R,C){if(!E.active){M.group.visible=!1;return}C.group.visible=!0,M.group.visible=!0,C.screenGroup.visible=!1,C.stars.forEach(D=>{D.userData.halo.material.opacity=0,D.userData.core.material.opacity=0,D.userData.label.style.opacity="0",D.userData.label.style.display="none"}),C.flatStars.forEach(D=>{D.material.opacity=0}),C.flatLines.forEach(D=>{D.material.opacity=0}),C.depthLines.forEach(D=>{D.material.opacity=0}),C.distanceLine.material.opacity=0,C.distanceLabel.style.opacity="0",C.distanceLabel.style.display="none";const k=1-ce(de.clamp((R-Kn)/.72,0,1));C.imprintCore.material.opacity=k*.82,C.imprintHalo.material.opacity=k*.24,C.imprintRings.forEach((D,U)=>{D.material.opacity=k*(.18-U*.025)});const Z=ce(de.clamp(E.distributedLight,0,1));M.group.position.copy(C.imprintTarget),M.group.position.y+=E.lift*.3,M.group.rotation.set(E.rotation*.3,E.rotation,E.rotation*.16);const $=M.points.material.uniforms;$.uAssemble.value=ce(de.clamp(E.dispersal,0,1)),$.uHopClock.value=E.hopClock,$.uHopEnv.value=E.hop,$.uLight.value=Z,$.uTime.value=R,$.uOpacity.value=.7+Z*.3;const y=M.lines.material.uniforms,H=ce(de.clamp(E.networkReveal,0,1));y.uReveal.value=H,y.uColorShift.value=ce(de.clamp(E.lineColorShift,0,1)),y.uOpacity.value=H*(.5+Z*.34)}function N(M){const E=Qc(M),R=E.active&&M<=On;if(Ms.classList.toggle("is-visible",R),!R)return;const C=fg(E.progress);Fg.textContent=Math.round(C.sourceFrequency),Og.textContent=C.velocityRatio.toFixed(2),Bg.textContent=Math.round(C.observedFrequency);const k=l.group.getWorldPosition(new P).project(ke),Z=de.clamp((k.x*.5+.5)*100+7,21,79),$=de.clamp((-k.y*.5+.5)*100-5,27,69),y=ce(Math.min(1,E.progress/.08)),H=ce(Math.min(1,(1-E.progress)/.1));Ms.style.left=`${Z}%`,Ms.style.top=`${$}%`,Ms.style.opacity=`${y*H}`,Ng.style.strokeDashoffset=`${96-E.progress*192}`}function rn(M,E=M){const R=it?Math.min(Mn,Math.max(0,M)):Math.min(Mn,Math.floor(M*ar)/ar),C=tl(R),k=j0(R),Z=tg(R),$=hg(R),y=k.active&&R>ln,H=y?k:{...k,active:!1},D=Z.active&&R>zs,U=D?Z:{...Z,active:!1},V=$.active&&R>Kn;Eg.style.opacity=D||V?"1":"0";const X=R>=On?C.waveTime:R,tt=de.smoothstep(R,ln,ln+.52),ct=1-tt,_t=(1-C.progress*.46)*ct,pt=1-de.smoothstep(C.progress,0,.12),Bt=E*2,Rt=Math.min(X0-1,Math.floor(R*ar));if(Rt!==m){m=Rt,bg.textContent=Z0(R),Tg.textContent=V?"三维结构示意 · Voronoi 泡沫（空洞-壁-丝-节点）":D?"声学印记 · d_BAO ≈ 147 Mpc · 星系间距":y?"碰撞冲量  J = ∫F dt = Δp · 声痕冻结":R>On?"声学俘获 · x(t) = xw + (x₀ − xw)e^(−λt)":R>=4.3?"纵波位移  ξ(x,t) = A sin(kx - ωt)":"原初光子 · 重子 · 声压峰";const at=V,At=D&&R>qe+.25,Xt=y&&R>ln+.25,Lt=R>=On+.3;Cg.textContent=at?"SCENE 05 / COSMIC WEB":At?"SCENE 04 / DISTANCE IMPRINT":Xt?"SCENE 03 / SIXFOLD CORE":Lt?"SCENE 02 / RECOMBINATION":"SCENE 01 / PRIMORDIAL PLASMA",Rg.textContent=at?"回声，被宇宙织成一张网。":At?"回声，写进星系之间。":Xt?"一声，撞向六合。":Lt?"光与物质，从此分离。":"很久以前，声音还没有名字。",Ag.textContent=`${J(R)} / 00:36.667`,Pg.style.opacity=V?"1":"0",Lg.style.opacity=V?"1":"0",V&&(Dg.textContent=$.networkReveal>.4?"t ≈ 118.5 亿年":"t ≈ 2.4 亿年")}const Ft=jc(R),kt=new Set(Ft.nodes),Wt=J0(R,Ft.nodes,s.length,o.length),Dt=new Set(Wt.main);tn.rotation.x=Math.sin(X*.2)*.018,tn.rotation.y=X*.035,tn.rotation.z=Math.sin(X*.17)*.012;const Yt=de.smoothstep(R,.85,1.25);e.children.forEach(at=>{at.material.uniforms.uTime.value=E,at.material.uniforms.uReveal.value=Yt,at.material.uniforms.uAbsorbProgress.value=C.absorption});const Zt=de.lerp(1,.18,tt);n.visible=C.progress>0,n.material.opacity=de.smoothstep(C.progress,.04,.34)*.28*Zt;const ut=de.smoothstep(C.progress,.05,.18),xt=1-de.smoothstep(C.progress,.84,.97);rl.style.opacity=`${ut*xt}`,rl.style.transform=`translateY(${(1-ut)*8}px)`,Ig.textContent=C.baryonVelocity.toFixed(3),sl.style.opacity=`${y?k.reveal*(1-k.freeze*.35):0}`,sl.style.transform=`translateY(${(1-k.reveal)*8}px)`,Ug.textContent=String(k.completedImpacts).padStart(2,"0"),s.forEach(({group:at,definition:At},Xt)=>{const Lt=kt.has(Xt),Ot=Lt?1-C.progress*.82:0,oe=Lt?1.18:.9,Qt=de.lerp(oe,.78,C.progress);if(at.scale.lerp(new P(Qt,Qt,Qt),.08),at.position.x=At.position[0]*(1+C.progress*.08),at.position.y=At.position[1]*(1+C.progress*.06)+Math.sin(X*.32+At.phase)*.05*C.baryonVelocity,at.position.z=At.position[2]-C.progress*.45,at.userData.isChladni){at.rotation.x=.58+Math.sin(Bt*.52+At.phase)*.24,at.rotation.y=At.phase+Bt*At.spin*1.15,at.rotation.z=At.phase*.18+Bt*At.spin*.62;const g=At.boundary==="volume";at.userData.pattern.material.opacity=(g?.5+Ot*.38:.56+Ot*.38)*_t,at.userData.glow.material.opacity=(g?.01+Ot*.035:.08+Ot*.2)*_t,at.userData.network&&(at.userData.network.material.opacity=(g?.16+Ot*.16:.1+Ot*.2)*_t),at.userData.outline.material.opacity=(g?.08+Ot*.16:.07+Ot*.2)*_t,at.userData.vertexPoints&&(at.userData.vertexPoints.material.opacity=(.58+Ot*.36)*_t)}else at.rotation.y=At.phase+Bt*At.spin,at.rotation.x=Math.sin(Bt*.6+At.phase)*.14,at.userData.halo.material.opacity=(.07+Ot*.16+Math.sin(E*1.8+At.phase)*.015)*_t,at.userData.mantle.material.opacity=(.22+Ot*.24)*_t,at.userData.core.material.opacity=(.6+Ot*.32)*_t,at.userData.particles.material.opacity=(.44+Ot*.4)*_t,at.userData.ring.material.opacity=(.12+Ot*.26)*_t;const _e=Dt.has(Xt);p[Xt].classList.toggle("is-focus",Lt&&_e),p[Xt].style.opacity=_e?`${(Lt?1:.58)*pt}`:"0"}),o.forEach(({group:at,definition:At},Xt)=>{const Lt=.82+Math.sin(X*1.35+at.userData.phase)*.18*C.baryonVelocity;at.scale.setScalar(Lt*de.lerp(1,.72,C.progress)),at.position.x=At.position[0]*(1+C.progress*.14),at.position.y=At.position[1]*(1+C.progress*.11),at.position.z=At.position[2]-C.progress*.55,at.userData.companions.rotation.z=Bt*(.12+Xt%3*.035),at.userData.companions.rotation.y=Bt*.08+at.userData.phase,at.userData.core.material.opacity=(.68+Lt*.16)*_t,at.userData.halo.material.opacity=(.04+Lt*.07)*_t,_[Xt].style.opacity=Xt===Wt.minor?`${(.46+Lt*.2)*pt}`:"0"}),Kc.forEach(([at,At],Xt)=>{const Lt=c[Xt],Ot=s[Ft.nodes[at]].group.position,oe=s[Ft.nodes[At]].group.position,Qt=Lt.geometry.getAttribute("position");Qt.setXYZ(0,Ot.x,Ot.y,Ot.z),Qt.setXYZ(1,oe.x,oe.y,oe.z),Qt.needsUpdate=!0,Lt.material.opacity=de.smoothstep(R,.12,.72)*.46*pt,Lt.computeLineDistances()}),st(H,E),Le(R),Oe(H),Ae(f,U,R,u),He(d,V?$:{...$,active:!1},R,f),e.children.forEach(at=>{at.material.uniforms.uAbsorbTarget.value.copy(l.group.position)});const bt=K0(R);D?Me(R,U):V?(ke.position.copy(ae(ws)),ke.lookAt(0,0,0)):Nt(R,X,bt,C,H),ke.updateMatrixWorld(),N(R),be(),Te(f,U)}function be(){s.forEach(({group:M},E)=>{jt(M,p[E])}),o.forEach(({group:M},E)=>{jt(M,_[E])})}function Te(M,E){E.active&&(M.stars.forEach(R=>{jt(R,R.userData.label)}),jt(M.distanceAnchor,M.distanceLabel))}function jt(M,E){const R=M.getWorldPosition(new P).project(ke),C=R.z<1&&R.x>-1.1&&R.x<1.1&&R.y>-1.1&&R.y<1.1;E.style.display=C?"block":"none",C&&(E.style.left=`${(R.x*.5+.5)*100}%`,E.style.top=`${(-R.y*.5+.5)*100}%`)}function ce(M){return M*M*(3-2*M)}function ne(M){let E=M>>>0;return()=>(E=E*1664525+1013904223>>>0,E/4294967296)}const A=(()=>{const M=ne(20260822);return Array.from({length:230},()=>({x:M(),y:M(),r:M()*1.1+.15,alpha:M()*.53+.12}))})();function v(){const M=Cr.clientWidth,E=Cr.clientHeight;if(!M||!E)return;const R=Math.min(window.devicePixelRatio||1,2);Cr.width=Math.round(M*R),Cr.height=Math.round(E*R),Yn.setTransform(R,0,0,R,0,0),Yn.clearRect(0,0,M,E);const C=Yn.createRadialGradient(M*.54,E*.47,0,M*.54,E*.47,Math.max(M,E)*.75);C.addColorStop(0,"rgba(22, 22, 27, .20)"),C.addColorStop(.58,"rgba(5, 6, 9, .16)"),C.addColorStop(1,"rgba(2, 3, 5, .72)"),Yn.fillStyle=C,Yn.fillRect(0,0,M,E),A.forEach(k=>{Yn.beginPath(),Yn.fillStyle=`rgba(220, 218, 211, ${k.alpha})`,Yn.arc(k.x*M,k.y*E,k.r,0,Math.PI*2),Yn.fill()})}function J(M){return`00:${M.toFixed(2).padStart(5,"0")}`}function lt(){const M=xo.clientWidth,E=xo.clientHeight,R=Math.min(window.devicePixelRatio||1,2,3840/M,2160/E);Ti.setPixelRatio(R),Ti.setSize(M,E,!1),ke.aspect=M/E,ke.updateProjectionMatrix(),d.points.material.uniforms.uPixelRatio.value=R,v()}const mt=Number(new URLSearchParams(window.location.search).get("t")),it=Number.isFinite(mt)&&mt>=0;let zt=it?Math.min(mt,Mn):0;function Ct(M){x=M,xs.innerHTML=`<i data-lucide="${M?"pause":"play"}"></i>`,xs.setAttribute("aria-label",M?"暂停":"播放"),xs.title=M?"暂停":"播放",Xl({icons:{Play:kl,Pause:Gl,RotateCcw:Wl}})}xs.addEventListener("click",async()=>{if(x){dn.pause(),Ct(!1);return}(zt>=Mn-.02||dn.currentTime>=Mn-.02)&&(dn.currentTime=0,zt=0);try{await dn.play()}catch(M){console.warn("音频播放受阻，已启用自动画面时钟:",M)}Ct(!0)}),wg.addEventListener("click",()=>{dn.pause(),dn.currentTime=0,zt=0,Ct(!1),rn(0,ye)}),dn.addEventListener("timeupdate",()=>{dn.currentTime>=Mn&&(dn.pause(),dn.currentTime=Mn,zt=Mn,Ct(!1))}),window.addEventListener("resize",lt),lt(),it&&(dn.pause(),Ct(!1)),rn(zt);const Ht=new tf;let ye=0;function Mt(){const M=Math.min(Ht.getDelta(),.05);ye+=M,x&&(!dn.paused&&dn.currentTime>0?zt=dn.currentTime:zt+=M,zt>=Mn&&(zt=Mn,dn.pause(),Ct(!1)));const E=Math.min(zt,Mn);rn(E,ye),Ti.render(or,ke),requestAnimationFrame(Mt)}Mt()}zg();
