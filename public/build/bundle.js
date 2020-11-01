var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function s(t){return null==t?"":t}function l(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function f(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function h(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function $(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function b(t,n){t.value=null==n?"":n}let g;function v(t){g=t}const y=[],x=[],_=[],w=[],k=Promise.resolve();let C=!1;function E(t){_.push(t)}let O=!1;const A=new Set;function S(){if(!O){O=!0;do{for(let t=0;t<y.length;t+=1){const n=y[t];v(n),T(n.$$)}for(v(null),y.length=0;x.length;)x.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];A.has(n)||(A.add(n),n())}_.length=0}while(y.length);for(;w.length;)w.pop()();C=!1,O=!1,A.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const j=new Set;function N(t,n){t&&t.i&&(j.delete(t),t.i(n))}function I(t,e,u){const{fragment:c,on_mount:s,on_destroy:l,after_update:i}=t.$$;c&&c.m(e,u),E((()=>{const e=s.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(E)}function L(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function P(t,n){-1===t.$$.dirty[0]&&(y.push(t),C||(C=!0,k.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function q(n,r,u,c,s,l,i=[-1]){const a=g;v(n);const d=r.props||{},p=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:e(),dirty:i,skip_bound:!1};let h=!1;if(p.ctx=u?u(n,d,((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&s(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),h&&P(n,t)),e})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();r.intro&&N(n.$$.fragment),I(n,r.target,r.anchor),S()}v(a)}class B{$destroy(){L(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const D=[];function J(n,e=t){let o;const r=[];function c(t){if(u(n,t)&&(n=t,o)){const t=!D.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),D.push(e,n)}if(t){for(let t=0;t<D.length;t+=2)D[t][0](D[t+1]);D.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(u,s=t){const l=[u,s];return r.push(l),1===r.length&&(o=e(c)||t),u(n),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}const M={subscribe:J(["Jonas","Dannie","Peter"],W).subscribe};var W;const z=J(0);const F=function(){const{subscribe:t,set:n,update:e}=J(0);let o;return{subscribe:t,start:function(){o=setInterval((()=>{e((t=>t+1))}),1e3)},stop:function(){clearInterval(o)}}}();function G(n){let e,o,r;return{c(){e=a("button"),e.textContent="Start Typer"},m(t,u){i(t,e,u),o||(r=h(e,"click",n[9]),o=!0)},p:t,d(t){t&&f(e),o=!1,r()}}}function H(n){let e,u,c,g,v,y,x,_;return{c(){e=a("p"),u=d(n[1]),g=p(),v=a("input"),m(e,"class",c=s(n[2]?"moveOut":"")+" svelte-bvhv34"),m(v,"type","text"),m(v,"class","svelte-bvhv34")},m(o,c){var s;i(o,e,c),l(e,u),i(o,g,c),i(o,v,c),b(v,n[0]),x||(_=[h(e,"transitionend",n[8]),(s=y=Q.call(null,v),s&&r(s.destroy)?s.destroy:t),h(v,"input",n[10]),h(v,"input",n[7])],x=!0)},p(t,n){2&n&&$(u,t[1]),4&n&&c!==(c=s(t[2]?"moveOut":"")+" svelte-bvhv34")&&m(e,"class",c),1&n&&v.value!==t[0]&&b(v,t[0])},d(t){t&&f(e),t&&f(g),t&&f(v),x=!1,o(_)}}}function K(n){let e,o,r,u,c,s,h,b,g,v,y=(n[4][n[5]]?n[4][n[5]]:"Completed!!!!")+"",x=!n[3]&&G(n),_=n[3]&&H(n);return{c(){e=a("h1"),e.textContent="Write:",o=p(),r=a("h2"),u=d(y),c=p(),s=a("h3"),h=d(n[6]),b=p(),g=a("div"),x&&x.c(),v=p(),_&&_.c(),m(g,"class","svelte-bvhv34")},m(t,n){i(t,e,n),i(t,o,n),i(t,r,n),l(r,u),i(t,c,n),i(t,s,n),l(s,h),i(t,b,n),i(t,g,n),x&&x.m(g,null),l(g,v),_&&_.m(g,null)},p(t,[n]){48&n&&y!==(y=(t[4][t[5]]?t[4][t[5]]:"Completed!!!!")+"")&&$(u,y),64&n&&$(h,t[6]),t[3]?x&&(x.d(1),x=null):x?x.p(t,n):(x=G(t),x.c(),x.m(g,v)),t[3]?_?_.p(t,n):(_=H(t),_.c(),_.m(g,null)):_&&(_.d(1),_=null)},i:t,o:t,d(t){t&&f(e),t&&f(o),t&&f(r),t&&f(c),t&&f(s),t&&f(b),t&&f(g),x&&x.d(),_&&_.d()}}}function Q(t){t.focus()}function R(t,n,e){let o,r,u;c(t,M,(t=>e(4,o=t))),c(t,z,(t=>e(5,r=t))),c(t,F,(t=>e(6,u=t)));let s="",l="",i=!1,f=!1;return[s,l,i,f,o,r,u,function(){s===o[r]&&(z.update((t=>t+1)),e(2,i=!0),e(1,l=s),e(0,s=""),r>=o.length&&(F.stop(),e(3,f=!1)))},function(){e(2,i=!1),e(1,l="")},()=>{e(3,f=!0),F.start()},function(){s=this.value,e(0,s)}]}class U extends B{constructor(t){super(),q(this,t,R,K,u,{})}}function V(n){let e,o,r,u,c;return u=new U({}),{c(){var t;e=a("main"),o=a("h1"),o.textContent="SpeedTyper",r=p(),(t=u.$$.fragment)&&t.c(),m(o,"class","svelte-1e9puaw"),m(e,"class","svelte-1e9puaw")},m(t,n){i(t,e,n),l(e,o),l(e,r),I(u,e,null),c=!0},p:t,i(t){c||(N(u.$$.fragment,t),c=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(j.has(t))return;j.add(t),(void 0).c.push((()=>{j.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}(u.$$.fragment,t),c=!1},d(t){t&&f(e),L(u)}}}return new class extends B{constructor(t){super(),q(this,t,null,V,u,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map