import{g as S,i as k,j as b,b as m,s as D,a as L,c as y,k as H,l as I,m as A,n as M,h as T,o as Y,p as q}from"./disclose-version.CG72ULzR.js";import{q as C,t as P,v as V,w as $,x as j,i as z,y as B,z as W,A as F,c as G}from"./runtime.DIY8MX26.js";const J=new Set,O=new Set;function w(a){var R;var r=this,s=r.ownerDocument,l=a.type,o=((R=a.composedPath)==null?void 0:R.call(a))||[],e=o[0]||a.target,d=0,c=a.__root;if(c){var f=o.indexOf(c);if(f!==-1&&(r===document||r===window)){a.__root=r;return}var u=o.indexOf(r);if(u===-1)return;f<=u&&(d=f)}if(e=o[d]||a.target,e!==r){C(a,"currentTarget",{configurable:!0,get(){return e||s}});try{for(var _,t=[];e!==null;){var i=e.parentNode||e.host||null;try{var n=e["__"+l];if(n!==void 0&&!e.disabled)if(P(n)){var[p,...g]=n;p.apply(e,[a,...g])}else n.call(e,a)}catch(v){_?t.push(v):_=v}if(a.cancelBubble||i===r||i===null)break;e=i}if(_){for(let v of t)queueMicrotask(()=>{throw v});throw _}}finally{a.__root=r,e=r}}}function X(a,r){(a.__t??(a.__t=a.nodeValue))!==r&&(a.nodeValue=a.__t=r)}function K(a,r){const s=r.anchor??r.target.appendChild(S());return N(a,{...r,anchor:s})}function Z(a,r){r.intro=r.intro??!1;const s=r.target,l=T,o=y;try{for(var e=s.firstChild;e&&(e.nodeType!==8||e.data!==k);)e=e.nextSibling;if(!e)throw b;m(!0),D(e),L();const d=N(a,{...r,anchor:e});if(y===null||y.nodeType!==8||y.data!==H)throw I(),b;return m(!1),d}catch(d){if(d===b)return r.recover===!1&&V(),A(),M(s),m(!1),K(a,r);throw d}finally{m(l),D(o)}}const h=new Map;function N(a,{target:r,anchor:s,props:l={},events:o,context:e,intro:d=!0}){A();var c=new Set,f=t=>{for(var i=0;i<t.length;i++){var n=t[i];if(!c.has(n)){c.add(n);var p=q.includes(n);r.addEventListener(n,w,{passive:p});var g=h.get(n);g===void 0?(document.addEventListener(n,w,{passive:p}),h.set(n,1)):h.set(n,g+1)}}};f($(J)),O.add(f);var u=void 0,_=j(()=>(z(()=>{if(e){B({});var t=G;t.c=e}o&&(l.$$events=o),T&&Y(s,null),u=a(s,l)||{},T&&(W.nodes.end=y),e&&F()}),()=>{for(var t of c){r.removeEventListener(t,w);var i=h.get(t);--i===0?(document.removeEventListener(t,w),h.delete(t)):h.set(t,i)}O.delete(f),E.delete(u)}));return E.set(u,_),u}let E=new WeakMap;function x(a){const r=E.get(a);r==null||r()}export{Z as h,K as m,X as s,x as u};
