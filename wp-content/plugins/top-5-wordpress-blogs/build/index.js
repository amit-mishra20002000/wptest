(()=>{"use strict";var e,r={650:()=>{const e=window.wp.blocks,r=window.wp.i18n,t=window.wp.blockEditor,o=window.ReactJSXRuntime,i=JSON.parse('{"UU":"create-block/example-static"}');(0,e.registerBlockType)(i.UU,{edit:function(){return(0,o.jsx)("p",{...(0,t.useBlockProps)(),children:(0,r.__)("Example Static – hello from the editor!","example-static")})},save:function(){return(0,o.jsx)("p",{...t.useBlockProps.save(),children:"Example Static – hello from the saved content!"})}})}},t={};function o(e){var i=t[e];if(void 0!==i)return i.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,o),a.exports}o.m=r,e=[],o.O=(r,t,i,a)=>{if(!t){var n=1/0;for(p=0;p<e.length;p++){for(var[t,i,a]=e[p],l=!0,s=0;s<t.length;s++)(!1&a||n>=a)&&Object.keys(o.O).every((e=>o.O[e](t[s])))?t.splice(s--,1):(l=!1,a<n&&(n=a));if(l){e.splice(p--,1);var c=i();void 0!==c&&(r=c)}}return r}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[t,i,a]},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={57:0,350:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var i,a,[n,l,s]=t,c=0;if(n.some((r=>0!==e[r]))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(s)var p=s(o)}for(r&&r(t);c<n.length;c++)a=n[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(p)},t=globalThis.webpackChunkexample_static=globalThis.webpackChunkexample_static||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var i=o.O(void 0,[350],(()=>o(650)));i=o.O(i)})();