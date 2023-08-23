(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function he(){}const Ve=t=>t;function kt(t){return t()}function et(){return Object.create(null)}function xe(t){t.forEach(kt)}function qe(t){return typeof t=="function"}function St(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function It(t){return Object.keys(t).length===0}const wt=typeof window<"u";let Ct=wt?()=>window.performance.now():()=>Date.now(),Ze=wt?t=>requestAnimationFrame(t):he;const Se=new Set;function Et(t){Se.forEach(e=>{e.c(t)||(Se.delete(e),e.f())}),Se.size!==0&&Ze(Et)}function Ot(t){let e;return Se.size===0&&Ze(Et),{promise:new Promise(r=>{Se.add(e={c:t,f:r})}),abort(){Se.delete(e)}}}function T(t,e){t.appendChild(e)}function Rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Dt(t){const e=P("style");return Ft(Rt(t),e),e.sheet}function Ft(t,e){return T(t.head||t,e),e.sheet}function se(t,e,r){t.insertBefore(e,r||null)}function te(t){t.parentNode&&t.parentNode.removeChild(t)}function We(t,e){for(let r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function P(t){return document.createElement(t)}function ne(t){return document.createTextNode(t)}function ie(){return ne(" ")}function Pt(){return ne("")}function we(t,e,r,s){return t.addEventListener(e,r,s),()=>t.removeEventListener(e,r,s)}function tt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function nt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function I(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function Nt(t){return Array.from(t.childNodes)}function Re(t,e){e=""+e,t.data!==e&&(t.data=e)}function $t(t,e,{bubbles:r=!1,cancelable:s=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,r,s,e),o}const ze=new Map;let He=0;function jt(t){let e=5381,r=t.length;for(;r--;)e=(e<<5)-e^t.charCodeAt(r);return e>>>0}function zt(t,e){const r={stylesheet:Dt(e),rules:{}};return ze.set(t,r),r}function Qe(t,e,r,s,o,a,c,d=0){const l=16.666/s;let p=`{
`;for(let g=0;g<=1;g+=l){const L=e+(r-e)*a(g);p+=g*100+`%{${c(L,1-L)}}
`}const f=p+`100% {${c(r,1-r)}}
}`,h=`__svelte_${jt(f)}_${d}`,w=Rt(t),{stylesheet:k,rules:A}=ze.get(w)||zt(w,t);A[h]||(A[h]=!0,k.insertRule(`@keyframes ${h} ${f}`,k.cssRules.length));const C=t.style.animation||"";return t.style.animation=`${C?`${C}, `:""}${h} ${s}ms linear ${o}ms 1 both`,He+=1,h}function Ge(t,e){const r=(t.style.animation||"").split(", "),s=r.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),o=r.length-s.length;o&&(t.style.animation=s.join(", "),He-=o,He||Ht())}function Ht(){Ze(()=>{He||(ze.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&te(e)}),ze.clear())})}let Ye;function Pe(t){Ye=t}const Ae=[],rt=[];let Ie=[];const it=[],Ut=Promise.resolve();let Je=!1;function qt(){Je||(Je=!0,Ut.then(xt))}function Ce(t){Ie.push(t)}const Ke=new Set;let Le=0;function xt(){if(Le!==0)return;const t=Ye;do{try{for(;Le<Ae.length;){const e=Ae[Le];Le++,Pe(e),Bt(e.$$)}}catch(e){throw Ae.length=0,Le=0,e}for(Pe(null),Ae.length=0,Le=0;rt.length;)rt.pop()();for(let e=0;e<Ie.length;e+=1){const r=Ie[e];Ke.has(r)||(Ke.add(r),r())}Ie.length=0}while(Ae.length);for(;it.length;)it.pop()();Je=!1,Ke.clear(),Pe(t)}function Bt(t){if(t.fragment!==null){t.update(),xe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ce)}}function Kt(t){const e=[],r=[];Ie.forEach(s=>t.indexOf(s)===-1?e.push(s):r.push(s)),r.forEach(s=>s()),Ie=e}let Fe;function Tt(){return Fe||(Fe=Promise.resolve(),Fe.then(()=>{Fe=null})),Fe}function Ne(t,e,r){t.dispatchEvent($t(`${e?"intro":"outro"}${r}`))}const je=new Set;let ve;function Wt(){ve={r:0,c:[],p:ve}}function Qt(){ve.r||xe(ve.c),ve=ve.p}function Me(t,e){t&&t.i&&(je.delete(t),t.i(e))}function st(t,e,r,s){if(t&&t.o){if(je.has(t))return;je.add(t),ve.c.push(()=>{je.delete(t),s&&(r&&t.d(1),s())}),t.o(e)}else s&&s()}const Lt={duration:0};function At(t,e,r){const s={direction:"in"};let o=e(t,r,s),a=!1,c,d,l=0;function p(){c&&Ge(t,c)}function f(){const{delay:w=0,duration:k=300,easing:A=Ve,tick:C=he,css:g}=o||Lt;g&&(c=Qe(t,0,1,k,w,A,g,l++)),C(0,1);const L=Ct()+w,y=L+k;d&&d.abort(),a=!0,Ce(()=>Ne(t,!0,"start")),d=Ot(x=>{if(a){if(x>=y)return C(1,0),Ne(t,!0,"end"),p(),a=!1;if(x>=L){const oe=A((x-L)/k);C(oe,1-oe)}}return a})}let h=!1;return{start(){h||(h=!0,Ge(t),qe(o)?(o=o(s),Tt().then(f)):f())},invalidate(){h=!1},end(){a&&(p(),a=!1)}}}function ot(t,e,r,s){const o={direction:"both"};let a=e(t,r,o),c=s?0:1,d=null,l=null,p=null;function f(){p&&Ge(t,p)}function h(k,A){const C=k.b-c;return A*=Math.abs(C),{a:c,b:k.b,d:C,duration:A,start:k.start,end:k.start+A,group:k.group}}function w(k){const{delay:A=0,duration:C=300,easing:g=Ve,tick:L=he,css:y}=a||Lt,x={start:Ct()+A,b:k};k||(x.group=ve,ve.r+=1),d||l?l=x:(y&&(f(),p=Qe(t,c,k,C,A,g,y)),k&&L(0,1),d=h(x,C),Ce(()=>Ne(t,k,"start")),Ot(oe=>{if(l&&oe>l.start&&(d=h(l,C),l=null,Ne(t,d.b,"start"),y&&(f(),p=Qe(t,c,d.b,d.duration,0,g,a.css))),d){if(oe>=d.end)L(c=d.b,1-c),Ne(t,d.b,"end"),l||(d.b?f():--d.group.r||xe(d.group.c)),d=null;else if(oe>=d.start){const pe=oe-d.start;c=d.a+d.d*g(pe/d.duration),L(c,1-c)}}return!!(d||l)}))}return{run(k){qe(a)?Tt().then(()=>{a=a(o),w(k)}):w(k)},end(){f(),d=l=null}}}function Gt(t,e,r,s){const{fragment:o,after_update:a}=t.$$;o&&o.m(e,r),s||Ce(()=>{const c=t.$$.on_mount.map(kt).filter(qe);t.$$.on_destroy?t.$$.on_destroy.push(...c):xe(c),t.$$.on_mount=[]}),a.forEach(Ce)}function Jt(t,e){const r=t.$$;r.fragment!==null&&(Kt(r.after_update),xe(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function Vt(t,e){t.$$.dirty[0]===-1&&(Ae.push(t),qt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Zt(t,e,r,s,o,a,c,d=[-1]){const l=Ye;Pe(t);const p=t.$$={fragment:null,ctx:[],props:a,update:he,not_equal:o,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:et(),dirty:d,skip_bound:!1,root:e.target||l.$$.root};c&&c(p.root);let f=!1;if(p.ctx=r?r(t,e.props||{},(h,w,...k)=>{const A=k.length?k[0]:w;return p.ctx&&o(p.ctx[h],p.ctx[h]=A)&&(!p.skip_bound&&p.bound[h]&&p.bound[h](A),f&&Vt(t,h)),w}):[],p.update(),f=!0,xe(p.before_update),p.fragment=s?s(p.ctx):!1,e.target){if(e.hydrate){const h=Nt(e.target);p.fragment&&p.fragment.l(h),h.forEach(te)}else p.fragment&&p.fragment.c();e.intro&&Me(t.$$.fragment),Gt(t,e.target,e.anchor,e.customElement),xt()}Pe(l)}class Yt{$destroy(){Jt(this,1),this.$destroy=he}$on(e,r){if(!qe(r))return he;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(r),()=>{const o=s.indexOf(r);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!It(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ue(t,{delay:e=0,duration:r=400,easing:s=Ve}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:r,easing:s,css:a=>`opacity: ${a*o}`}}var Xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function en(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mt={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(t,e){(function(r,s){t.exports=s()})(Xt,function r(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},o=!s.document&&!!s.postMessage,a=s.IS_PAPA_WORKER||!1,c={},d=0,l={parse:function(i,n){var u=(n=n||{}).dynamicTyping||!1;if(S(u)&&(n.dynamicTypingFunction=u,u={}),n.dynamicTyping=u,n.transform=!!S(n.transform)&&n.transform,n.worker&&l.WORKERS_SUPPORTED){var _=function(){if(!l.WORKERS_SUPPORTED)return!1;var R=(W=s.URL||s.webkitURL||null,z=r.toString(),l.BLOB_URL||(l.BLOB_URL=W.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",z,")();"],{type:"text/javascript"})))),M=new s.Worker(R),W,z;return M.onmessage=y,M.id=d++,c[M.id]=M}();return _.userStep=n.step,_.userChunk=n.chunk,_.userComplete=n.complete,_.userError=n.error,n.step=S(n.step),n.chunk=S(n.chunk),n.complete=S(n.complete),n.error=S(n.error),delete n.worker,void _.postMessage({input:i,config:n,workerId:_.id})}var b=null;return l.NODE_STREAM_INPUT,typeof i=="string"?(i=function(R){return R.charCodeAt(0)===65279?R.slice(1):R}(i),b=n.download?new h(n):new k(n)):i.readable===!0&&S(i.read)&&S(i.on)?b=new A(n):(s.File&&i instanceof File||i instanceof Object)&&(b=new w(n)),b.stream(i)},unparse:function(i,n){var u=!1,_=!0,b=",",R=`\r
`,M='"',W=M+M,z=!1,m=null,D=!1;(function(){if(typeof n=="object"){if(typeof n.delimiter!="string"||l.BAD_DELIMITERS.filter(function(v){return n.delimiter.indexOf(v)!==-1}).length||(b=n.delimiter),(typeof n.quotes=="boolean"||typeof n.quotes=="function"||Array.isArray(n.quotes))&&(u=n.quotes),typeof n.skipEmptyLines!="boolean"&&typeof n.skipEmptyLines!="string"||(z=n.skipEmptyLines),typeof n.newline=="string"&&(R=n.newline),typeof n.quoteChar=="string"&&(M=n.quoteChar),typeof n.header=="boolean"&&(_=n.header),Array.isArray(n.columns)){if(n.columns.length===0)throw new Error("Option columns is empty");m=n.columns}n.escapeChar!==void 0&&(W=n.escapeChar+M),(typeof n.escapeFormulae=="boolean"||n.escapeFormulae instanceof RegExp)&&(D=n.escapeFormulae instanceof RegExp?n.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var E=new RegExp(g(M),"g");if(typeof i=="string"&&(i=JSON.parse(i)),Array.isArray(i)){if(!i.length||Array.isArray(i[0]))return ce(null,i,z);if(typeof i[0]=="object")return ce(m||Object.keys(i[0]),i,z)}else if(typeof i=="object")return typeof i.data=="string"&&(i.data=JSON.parse(i.data)),Array.isArray(i.data)&&(i.fields||(i.fields=i.meta&&i.meta.fields||m),i.fields||(i.fields=Array.isArray(i.data[0])?i.fields:typeof i.data[0]=="object"?Object.keys(i.data[0]):[]),Array.isArray(i.data[0])||typeof i.data[0]=="object"||(i.data=[i.data])),ce(i.fields||[],i.data||[],z);throw new Error("Unable to serialize unrecognized input");function ce(v,H,X){var B="";typeof v=="string"&&(v=JSON.parse(v)),typeof H=="string"&&(H=JSON.parse(H));var Z=Array.isArray(v)&&0<v.length,J=!Array.isArray(H[0]);if(Z&&_){for(var V=0;V<v.length;V++)0<V&&(B+=b),B+=Y(v[V],V);0<H.length&&(B+=R)}for(var O=0;O<H.length;O++){var F=Z?v.length:H[O].length,U=!1,G=Z?Object.keys(H[O]).length===0:H[O].length===0;if(X&&!Z&&(U=X==="greedy"?H[O].join("").trim()==="":H[O].length===1&&H[O][0].length===0),X==="greedy"&&Z){for(var $=[],ee=0;ee<F;ee++){var K=J?v[ee]:ee;$.push(H[O][K])}U=$.join("").trim()===""}if(!U){for(var j=0;j<F;j++){0<j&&!G&&(B+=b);var de=Z&&J?v[j]:j;B+=Y(H[O][de],j)}O<H.length-1&&(!X||0<F&&!G)&&(B+=R)}}return B}function Y(v,H){if(v==null)return"";if(v.constructor===Date)return JSON.stringify(v).slice(1,25);var X=!1;D&&typeof v=="string"&&D.test(v)&&(v="'"+v,X=!0);var B=v.toString().replace(E,W);return(X=X||u===!0||typeof u=="function"&&u(v,H)||Array.isArray(u)&&u[H]||function(Z,J){for(var V=0;V<J.length;V++)if(-1<Z.indexOf(J[V]))return!0;return!1}(B,l.BAD_DELIMITERS)||-1<B.indexOf(b)||B.charAt(0)===" "||B.charAt(B.length-1)===" ")?M+B+M:B}}};if(l.RECORD_SEP=String.fromCharCode(30),l.UNIT_SEP=String.fromCharCode(31),l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!o&&!!s.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=L,l.ParserHandle=C,l.NetworkStreamer=h,l.FileStreamer=w,l.StringStreamer=k,l.ReadableStreamStreamer=A,s.jQuery){var p=s.jQuery;p.fn.parse=function(i){var n=i.config||{},u=[];return this.each(function(R){if(!(p(this).prop("tagName").toUpperCase()==="INPUT"&&p(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var M=0;M<this.files.length;M++)u.push({file:this.files[M],inputElem:this,instanceConfig:p.extend({},n)})}),_(),this;function _(){if(u.length!==0){var R,M,W,z,m=u[0];if(S(i.before)){var D=i.before(m.file,m.inputElem);if(typeof D=="object"){if(D.action==="abort")return R="AbortError",M=m.file,W=m.inputElem,z=D.reason,void(S(i.error)&&i.error({name:R},M,W,z));if(D.action==="skip")return void b();typeof D.config=="object"&&(m.instanceConfig=p.extend(m.instanceConfig,D.config))}else if(D==="skip")return void b()}var E=m.instanceConfig.complete;m.instanceConfig.complete=function(ce){S(E)&&E(ce,m.file,m.inputElem),b()},l.parse(m.file,m.instanceConfig)}else S(i.complete)&&i.complete()}function b(){u.splice(0,1),_()}}}function f(i){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(n){var u=pe(n);u.chunkSize=parseInt(u.chunkSize),n.step||n.chunk||(u.chunkSize=null),this._handle=new C(u),(this._handle.streamer=this)._config=u}.call(this,i),this.parseChunk=function(n,u){if(this.isFirstChunk&&S(this._config.beforeFirstChunk)){var _=this._config.beforeFirstChunk(n);_!==void 0&&(n=_)}this.isFirstChunk=!1,this._halted=!1;var b=this._partialLine+n;this._partialLine="";var R=this._handle.parse(b,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var M=R.meta.cursor;this._finished||(this._partialLine=b.substring(M-this._baseIndex),this._baseIndex=M),R&&R.data&&(this._rowCount+=R.data.length);var W=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(a)s.postMessage({results:R,workerId:l.WORKER_ID,finished:W});else if(S(this._config.chunk)&&!u){if(this._config.chunk(R,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);R=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(R.data),this._completeResults.errors=this._completeResults.errors.concat(R.errors),this._completeResults.meta=R.meta),this._completed||!W||!S(this._config.complete)||R&&R.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),W||R&&R.meta.paused||this._nextChunk(),R}this._halted=!0},this._sendError=function(n){S(this._config.error)?this._config.error(n):a&&this._config.error&&s.postMessage({workerId:l.WORKER_ID,error:n,finished:!1})}}function h(i){var n;(i=i||{}).chunkSize||(i.chunkSize=l.RemoteChunkSize),f.call(this,i),this._nextChunk=o?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(u){this._input=u,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(n=new XMLHttpRequest,this._config.withCredentials&&(n.withCredentials=this._config.withCredentials),o||(n.onload=re(this._chunkLoaded,this),n.onerror=re(this._chunkError,this)),n.open(this._config.downloadRequestBody?"POST":"GET",this._input,!o),this._config.downloadRequestHeaders){var u=this._config.downloadRequestHeaders;for(var _ in u)n.setRequestHeader(_,u[_])}if(this._config.chunkSize){var b=this._start+this._config.chunkSize-1;n.setRequestHeader("Range","bytes="+this._start+"-"+b)}try{n.send(this._config.downloadRequestBody)}catch(R){this._chunkError(R.message)}o&&n.status===0&&this._chunkError()}},this._chunkLoaded=function(){n.readyState===4&&(n.status<200||400<=n.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:n.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(u){var _=u.getResponseHeader("Content-Range");return _===null?-1:parseInt(_.substring(_.lastIndexOf("/")+1))}(n),this.parseChunk(n.responseText)))},this._chunkError=function(u){var _=n.statusText||u;this._sendError(new Error(_))}}function w(i){var n,u;(i=i||{}).chunkSize||(i.chunkSize=l.LocalChunkSize),f.call(this,i);var _=typeof FileReader<"u";this.stream=function(b){this._input=b,u=b.slice||b.webkitSlice||b.mozSlice,_?((n=new FileReader).onload=re(this._chunkLoaded,this),n.onerror=re(this._chunkError,this)):n=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var b=this._input;if(this._config.chunkSize){var R=Math.min(this._start+this._config.chunkSize,this._input.size);b=u.call(b,this._start,R)}var M=n.readAsText(b,this._config.encoding);_||this._chunkLoaded({target:{result:M}})},this._chunkLoaded=function(b){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(b.target.result)},this._chunkError=function(){this._sendError(n.error)}}function k(i){var n;f.call(this,i=i||{}),this.stream=function(u){return n=u,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var u,_=this._config.chunkSize;return _?(u=n.substring(0,_),n=n.substring(_)):(u=n,n=""),this._finished=!n,this.parseChunk(u)}}}function A(i){f.call(this,i=i||{});var n=[],u=!0,_=!1;this.pause=function(){f.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){f.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(b){this._input=b,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){_&&n.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),n.length?this.parseChunk(n.shift()):u=!0},this._streamData=re(function(b){try{n.push(typeof b=="string"?b:b.toString(this._config.encoding)),u&&(u=!1,this._checkIsFinished(),this.parseChunk(n.shift()))}catch(R){this._streamError(R)}},this),this._streamError=re(function(b){this._streamCleanUp(),this._sendError(b)},this),this._streamEnd=re(function(){this._streamCleanUp(),_=!0,this._streamData("")},this),this._streamCleanUp=re(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function C(i){var n,u,_,b=Math.pow(2,53),R=-b,M=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,W=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,z=this,m=0,D=0,E=!1,ce=!1,Y=[],v={data:[],errors:[],meta:{}};if(S(i.step)){var H=i.step;i.step=function(O){if(v=O,Z())B();else{if(B(),v.data.length===0)return;m+=O.data.length,i.preview&&m>i.preview?u.abort():(v.data=v.data[0],H(v,z))}}}function X(O){return i.skipEmptyLines==="greedy"?O.join("").trim()==="":O.length===1&&O[0].length===0}function B(){return v&&_&&(V("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),_=!1),i.skipEmptyLines&&(v.data=v.data.filter(function(O){return!X(O)})),Z()&&function(){if(!v)return;function O(U,G){S(i.transformHeader)&&(U=i.transformHeader(U,G)),Y.push(U)}if(Array.isArray(v.data[0])){for(var F=0;Z()&&F<v.data.length;F++)v.data[F].forEach(O);v.data.splice(0,1)}else v.data.forEach(O)}(),function(){if(!v||!i.header&&!i.dynamicTyping&&!i.transform)return v;function O(U,G){var $,ee=i.header?{}:[];for($=0;$<U.length;$++){var K=$,j=U[$];i.header&&(K=$>=Y.length?"__parsed_extra":Y[$]),i.transform&&(j=i.transform(j,K)),j=J(K,j),K==="__parsed_extra"?(ee[K]=ee[K]||[],ee[K].push(j)):ee[K]=j}return i.header&&($>Y.length?V("FieldMismatch","TooManyFields","Too many fields: expected "+Y.length+" fields but parsed "+$,D+G):$<Y.length&&V("FieldMismatch","TooFewFields","Too few fields: expected "+Y.length+" fields but parsed "+$,D+G)),ee}var F=1;return!v.data.length||Array.isArray(v.data[0])?(v.data=v.data.map(O),F=v.data.length):v.data=O(v.data,0),i.header&&v.meta&&(v.meta.fields=Y),D+=F,v}()}function Z(){return i.header&&Y.length===0}function J(O,F){return U=O,i.dynamicTypingFunction&&i.dynamicTyping[U]===void 0&&(i.dynamicTyping[U]=i.dynamicTypingFunction(U)),(i.dynamicTyping[U]||i.dynamicTyping)===!0?F==="true"||F==="TRUE"||F!=="false"&&F!=="FALSE"&&(function(G){if(M.test(G)){var $=parseFloat(G);if(R<$&&$<b)return!0}return!1}(F)?parseFloat(F):W.test(F)?new Date(F):F===""?null:F):F;var U}function V(O,F,U,G){var $={type:O,code:F,message:U};G!==void 0&&($.row=G),v.errors.push($)}this.parse=function(O,F,U){var G=i.quoteChar||'"';if(i.newline||(i.newline=function(K,j){K=K.substring(0,1048576);var de=new RegExp(g(j)+"([^]*?)"+g(j),"gm"),le=(K=K.replace(de,"")).split("\r"),_e=K.split(`
`),ge=1<_e.length&&_e[0].length<le[0].length;if(le.length===1||ge)return`
`;for(var ae=0,q=0;q<le.length;q++)le[q][0]===`
`&&ae++;return ae>=le.length/2?`\r
`:"\r"}(O,G)),_=!1,i.delimiter)S(i.delimiter)&&(i.delimiter=i.delimiter(O),v.meta.delimiter=i.delimiter);else{var $=function(K,j,de,le,_e){var ge,ae,q,Q;_e=_e||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var Ee=0;Ee<_e.length;Ee++){var N=_e[Ee],Te=0,me=0,Oe=0;q=void 0;for(var ye=new L({comments:le,delimiter:N,newline:j,preview:10}).parse(K),be=0;be<ye.data.length;be++)if(de&&X(ye.data[be]))Oe++;else{var ke=ye.data[be].length;me+=ke,q!==void 0?0<ke&&(Te+=Math.abs(ke-q),q=ke):q=ke}0<ye.data.length&&(me/=ye.data.length-Oe),(ae===void 0||Te<=ae)&&(Q===void 0||Q<me)&&1.99<me&&(ae=Te,ge=N,Q=me)}return{successful:!!(i.delimiter=ge),bestDelimiter:ge}}(O,i.newline,i.skipEmptyLines,i.comments,i.delimitersToGuess);$.successful?i.delimiter=$.bestDelimiter:(_=!0,i.delimiter=l.DefaultDelimiter),v.meta.delimiter=i.delimiter}var ee=pe(i);return i.preview&&i.header&&ee.preview++,n=O,u=new L(ee),v=u.parse(n,F,U),B(),E?{meta:{paused:!0}}:v||{meta:{paused:!1}}},this.paused=function(){return E},this.pause=function(){E=!0,u.abort(),n=S(i.chunk)?"":n.substring(u.getCharIndex())},this.resume=function(){z.streamer._halted?(E=!1,z.streamer.parseChunk(n,!0)):setTimeout(z.resume,3)},this.aborted=function(){return ce},this.abort=function(){ce=!0,u.abort(),v.meta.aborted=!0,S(i.complete)&&i.complete(v),n=""}}function g(i){return i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function L(i){var n,u=(i=i||{}).delimiter,_=i.newline,b=i.comments,R=i.step,M=i.preview,W=i.fastMode,z=n=i.quoteChar===void 0||i.quoteChar===null?'"':i.quoteChar;if(i.escapeChar!==void 0&&(z=i.escapeChar),(typeof u!="string"||-1<l.BAD_DELIMITERS.indexOf(u))&&(u=","),b===u)throw new Error("Comment character same as delimiter");b===!0?b="#":(typeof b!="string"||-1<l.BAD_DELIMITERS.indexOf(b))&&(b=!1),_!==`
`&&_!=="\r"&&_!==`\r
`&&(_=`
`);var m=0,D=!1;this.parse=function(E,ce,Y){if(typeof E!="string")throw new Error("Input must be a string");var v=E.length,H=u.length,X=_.length,B=b.length,Z=S(R),J=[],V=[],O=[],F=m=0;if(!E)return fe();if(i.header&&!ce){var U=E.split(_)[0].split(u),G=[],$={},ee=!1;for(var K in U){var j=U[K];S(i.transformHeader)&&(j=i.transformHeader(j,K));var de=j,le=$[j]||0;for(0<le&&(ee=!0,de=j+"_"+le),$[j]=le+1;G.includes(de);)de=de+"_"+le;G.push(de)}if(ee){var _e=E.split(_);_e[0]=G.join(u),E=_e.join(_)}}if(W||W!==!1&&E.indexOf(n)===-1){for(var ge=E.split(_),ae=0;ae<ge.length;ae++){if(O=ge[ae],m+=O.length,ae!==ge.length-1)m+=_.length;else if(Y)return fe();if(!b||O.substring(0,B)!==b){if(Z){if(J=[],Oe(O.split(u)),$e(),D)return fe()}else Oe(O.split(u));if(M&&M<=ae)return J=J.slice(0,M),fe(!0)}}return fe()}for(var q=E.indexOf(u,m),Q=E.indexOf(_,m),Ee=new RegExp(g(z)+g(n),"g"),N=E.indexOf(n,m);;)if(E[m]!==n)if(b&&O.length===0&&E.substring(m,m+B)===b){if(Q===-1)return fe();m=Q+X,Q=E.indexOf(_,m),q=E.indexOf(u,m)}else if(q!==-1&&(q<Q||Q===-1))O.push(E.substring(m,q)),m=q+H,q=E.indexOf(u,m);else{if(Q===-1)break;if(O.push(E.substring(m,Q)),ke(Q+X),Z&&($e(),D))return fe();if(M&&J.length>=M)return fe(!0)}else for(N=m,m++;;){if((N=E.indexOf(n,N+1))===-1)return Y||V.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:J.length,index:m}),be();if(N===v-1)return be(E.substring(m,N).replace(Ee,n));if(n!==z||E[N+1]!==z){if(n===z||N===0||E[N-1]!==z){q!==-1&&q<N+1&&(q=E.indexOf(u,N+1)),Q!==-1&&Q<N+1&&(Q=E.indexOf(_,N+1));var Te=ye(Q===-1?q:Math.min(q,Q));if(E.substr(N+1+Te,H)===u){O.push(E.substring(m,N).replace(Ee,n)),E[m=N+1+Te+H]!==n&&(N=E.indexOf(n,m)),q=E.indexOf(u,m),Q=E.indexOf(_,m);break}var me=ye(Q);if(E.substring(N+1+me,N+1+me+X)===_){if(O.push(E.substring(m,N).replace(Ee,n)),ke(N+1+me+X),q=E.indexOf(u,m),N=E.indexOf(n,m),Z&&($e(),D))return fe();if(M&&J.length>=M)return fe(!0);break}V.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:J.length,index:m}),N++}}else N++}return be();function Oe(ue){J.push(ue),F=m}function ye(ue){var Xe=0;if(ue!==-1){var Be=E.substring(N+1,ue);Be&&Be.trim()===""&&(Xe=Be.length)}return Xe}function be(ue){return Y||(ue===void 0&&(ue=E.substring(m)),O.push(ue),m=v,Oe(O),Z&&$e()),fe()}function ke(ue){m=ue,Oe(O),O=[],Q=E.indexOf(_,m)}function fe(ue){return{data:J,errors:V,meta:{delimiter:u,linebreak:_,aborted:D,truncated:!!ue,cursor:F+(ce||0)}}}function $e(){R(fe()),J=[],V=[]}},this.abort=function(){D=!0},this.getCharIndex=function(){return m}}function y(i){var n=i.data,u=c[n.workerId],_=!1;if(n.error)u.userError(n.error,n.file);else if(n.results&&n.results.data){var b={abort:function(){_=!0,x(n.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:oe,resume:oe};if(S(u.userStep)){for(var R=0;R<n.results.data.length&&(u.userStep({data:n.results.data[R],errors:n.results.errors,meta:n.results.meta},b),!_);R++);delete n.results}else S(u.userChunk)&&(u.userChunk(n.results,b,n.file),delete n.results)}n.finished&&!_&&x(n.workerId,n.results)}function x(i,n){var u=c[i];S(u.userComplete)&&u.userComplete(n),u.terminate(),delete c[i]}function oe(){throw new Error("Not implemented.")}function pe(i){if(typeof i!="object"||i===null)return i;var n=Array.isArray(i)?[]:{};for(var u in i)n[u]=pe(i[u]);return n}function re(i,n){return function(){i.apply(n,arguments)}}function S(i){return typeof i=="function"}return a&&(s.onmessage=function(i){var n=i.data;if(l.WORKER_ID===void 0&&n&&(l.WORKER_ID=n.workerId),typeof n.input=="string")s.postMessage({workerId:l.WORKER_ID,results:l.parse(n.input,n.config),finished:!0});else if(s.File&&n.input instanceof File||n.input instanceof Object){var u=l.parse(n.input,n.config);u&&s.postMessage({workerId:l.WORKER_ID,results:u,finished:!0})}}),(h.prototype=Object.create(f.prototype)).constructor=h,(w.prototype=Object.create(f.prototype)).constructor=w,(k.prototype=Object.create(k.prototype)).constructor=k,(A.prototype=Object.create(f.prototype)).constructor=A,l})})(Mt);var tn=Mt.exports;const lt=en(tn);function at(t,e,r){const s=t.slice();return s[16]=e[r],s[18]=r,s}function ft(t,e,r){const s=t.slice();return s[19]=e[r],s}function ut(t,e,r){const s=t.slice();return s[22]=e[r],s}function nn(t){var k,A;let e,r,s,o,a,c,d,l,p,f=t[1]&&ct(),h=((k=t[2])==null?void 0:k.length)>0&&dt(t),w=((A=t[2])==null?void 0:A.length)>0&&ht(t);return{c(){e=P("div"),f&&f.c(),r=ie(),h&&h.c(),s=ie(),o=P("div"),w&&w.c(),a=ie(),c=P("button"),c.textContent="reset",I(c,"class","px-4 py-1 text-xs border-2 border-gray-600 rounded"),I(o,"class","flex justify-end pt-8 active:opacity-70"),I(e,"class","flex flex-col justify-between h-full")},m(C,g){se(C,e,g),f&&f.m(e,null),T(e,r),h&&h.m(e,null),T(e,s),T(e,o),w&&w.m(o,null),T(o,a),T(o,c),l||(p=we(c,"click",t[9]),l=!0)},p(C,g){var L,y;C[1]?f||(f=ct(),f.c(),f.m(e,r)):f&&(f.d(1),f=null),((L=C[2])==null?void 0:L.length)>0?h?h.p(C,g):(h=dt(C),h.c(),h.m(e,s)):h&&(h.d(1),h=null),((y=C[2])==null?void 0:y.length)>0?w?w.p(C,g):(w=ht(C),w.c(),w.m(o,a)):w&&(w.d(1),w=null)},i(C){d||Ce(()=>{d=At(e,Ue,{}),d.start()})},o:he,d(C){C&&te(e),f&&f.d(),h&&h.d(),w&&w.d(),l=!1,p()}}}function rn(t){let e,r,s,o,a,c,d,l,p;return{c(){e=P("label"),r=P("div"),r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M32.3936 28.6875C32.3468 28.6277 32.287 28.5794 32.2188 28.5462C32.1506 28.5129 32.0757 28.4957 31.9998 28.4957C31.9239 28.4957 31.849 28.5129 31.7808 28.5462C31.7126 28.5794 31.6528 28.6277 31.6061 28.6875L24.6061 37.5438C24.5484 37.6174 24.5126 37.7059 24.5027 37.799C24.4929 37.8921 24.5095 37.986 24.5506 38.0701C24.5917 38.1542 24.6556 38.2251 24.735 38.2746C24.8145 38.3241 24.9062 38.3502 24.9998 38.35H29.6186V53.5C29.6186 53.775 29.8436 54 30.1186 54H33.8686C34.1436 54 34.3686 53.775 34.3686 53.5V38.3563H38.9998C39.4186 38.3563 39.6498 37.875 39.3936 37.55L32.3936 28.6875Z" fill="black" fill-opacity="0.64"></path><path d="M50.7125 22.9188C47.85 15.3688 40.5563 10 32.0125 10C23.4688 10 16.175 15.3625 13.3125 22.9125C7.95625 24.3188 4 29.2 4 35C4 41.9062 9.59375 47.5 16.4937 47.5H19C19.275 47.5 19.5 47.275 19.5 47V43.25C19.5 42.975 19.275 42.75 19 42.75H16.4937C14.3875 42.75 12.4062 41.9125 10.9312 40.3937C9.4625 38.8812 8.68125 36.8438 8.75 34.7313C8.80625 33.0813 9.36875 31.5312 10.3875 30.225C11.4312 28.8938 12.8938 27.925 14.5188 27.4937L16.8875 26.875L17.7563 24.5875C18.2938 23.1625 19.0437 21.8313 19.9875 20.625C20.9192 19.4294 22.0228 18.3784 23.2625 17.5063C25.8313 15.7 28.8563 14.7437 32.0125 14.7437C35.1688 14.7437 38.1938 15.7 40.7625 17.5063C42.0063 18.3813 43.1062 19.4312 44.0375 20.625C44.9812 21.8313 45.7313 23.1687 46.2687 24.5875L47.1312 26.8687L49.4938 27.4937C52.8813 28.4062 55.25 31.4875 55.25 35C55.25 37.0688 54.4438 39.0188 52.9813 40.4813C52.264 41.2027 51.4108 41.7747 50.471 42.1641C49.5312 42.5535 48.5235 42.7527 47.5062 42.75H45C44.725 42.75 44.5 42.975 44.5 43.25V47C44.5 47.275 44.725 47.5 45 47.5H47.5062C54.4062 47.5 60 41.9062 60 35C60 29.2062 56.0563 24.3313 50.7125 22.9188Z" fill="black" fill-opacity="0.64"></path></svg>',s=ie(),o=P("div"),o.innerHTML=`<div>Drag and drop your CSV file here</div> 
          <div>or</div> 
          <div>Click here to upload</div>`,a=ie(),c=P("input"),I(r,"class","flex justify-center"),I(o,"class","mt-4 text-center"),I(c,"type","file"),I(c,"id","upload"),I(c,"accept",".csv"),c.hidden=!0,I(e,"for","upload"),I(e,"class","cursor-pointer")},m(f,h){se(f,e,h),T(e,r),T(e,s),T(e,o),T(e,a),T(e,c),l||(p=[we(c,"change",t[8]),we(c,"change",t[5]),we(e,"dragover",nt(tt(on))),we(e,"drop",nt(tt(t[4])))],l=!0)},p:he,i(f){d||Ce(()=>{d=At(e,Ue,{}),d.start()})},o:he,d(f){f&&te(e),l=!1,xe(p)}}}function ct(t){let e;return{c(){e=P("div"),e.textContent="Scanning...",I(e,"class","flex-1")},m(r,s){se(r,e,s)},d(r){r&&te(e)}}}function dt(t){let e,r,s,o=t[2].length+"",a,c;return{c(){e=P("div"),r=ne("Possible issues detected in "),s=P("strong"),a=ne(o),c=ne(" of your messages."),I(s,"class","mx-2 text-xl text-amber-800"),I(e,"class","flex items-center justify-center flex-1")},m(d,l){se(d,e,l),T(e,r),T(e,s),T(s,a),T(e,c)},p(d,l){l&4&&o!==(o=d[2].length+"")&&Re(a,o)},d(d){d&&te(e)}}}function ht(t){let e,r,s;return{c(){e=P("button"),e.textContent="download report",I(e,"class","px-4 py-1 mr-2 border-2 border-gray-600 rounded")},m(o,a){se(o,e,a),r||(s=we(e,"click",t[6]),r=!0)},p:he,d(o){o&&te(e),r=!1,s()}}}function pt(t){let e,r,s,o,a,c,d=t[3]+De+"",l,p,f=t[2].length+"",h,w,k,A,C,g,L=t[3]>0&&_t(t);return{c(){e=P("div"),r=P("div"),L&&L.c(),s=ie(),o=P("div"),a=ne(t[3]),c=ne(" - "),l=ne(d),p=ne(" / "),h=ne(f),w=ie(),k=P("div"),A=P("button"),A.innerHTML=`<span class="pl-2">Next 100</span> 
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>`,I(r,"class","flex-1"),I(o,"class","flex-1 text-center"),I(A,"class","flex items-center justify-center py-2 bg-lime-500 active:opacity-70"),I(k,"class","flex justify-end flex-1"),I(e,"class","sticky top-0 flex items-center justify-between text-xs bg-white/80")},m(y,x){se(y,e,x),T(e,r),L&&L.m(r,null),T(e,s),T(e,o),T(o,a),T(o,c),T(o,l),T(o,p),T(o,h),T(e,w),T(e,k),T(k,A),C||(g=we(A,"click",t[11]),C=!0)},p(y,x){y[3]>0?L?L.p(y,x):(L=_t(y),L.c(),L.m(r,null)):L&&(L.d(1),L=null),x&8&&Re(a,y[3]),x&8&&d!==(d=y[3]+De+"")&&Re(l,d),x&4&&f!==(f=y[2].length+"")&&Re(h,f)},d(y){y&&te(e),L&&L.d(),C=!1,g()}}}function _t(t){let e,r,s;return{c(){e=P("button"),e.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path></svg> 
            <span class="pr-2">Prev 100</span>`,I(e,"class","flex items-center justify-center py-2 bg-lime-500 active:opacity-70")},m(o,a){se(o,e,a),r||(s=we(e,"click",t[10]),r=!0)},p:he,d(o){o&&te(e),r=!1,s()}}}function gt(t){let e,r,s,o,a,c=t[2],d=[];for(let l=0;l<c.length;l+=1)d[l]=bt(at(t,c,l));return{c(){e=P("div"),r=P("div"),r.innerHTML=`<div class="w-32 text-center border-r-2">Info</div> 
        <div class="flex-1 text-center">Message</div>`,s=ie();for(let l=0;l<d.length;l+=1)d[l].c();I(r,"class","flex border-b-2"),I(e,"class","flex flex-col flex-wrap flex-1 my-4 overflow-y-auto border-gray-700 bg-black/70 text-white/90")},m(l,p){se(l,e,p),T(e,r),T(e,s);for(let f=0;f<d.length;f+=1)d[f]&&d[f].m(e,null);a=!0},p(l,p){if(p&12){c=l[2];let f;for(f=0;f<c.length;f+=1){const h=at(l,c,f);d[f]?d[f].p(h,p):(d[f]=bt(h),d[f].c(),d[f].m(e,null))}for(;f<d.length;f+=1)d[f].d(1);d.length=c.length}},i(l){a||(Ce(()=>{a&&(o||(o=ot(e,Ue,{},!0)),o.run(1))}),a=!0)},o(l){o||(o=ot(e,Ue,{},!1)),o.run(0),a=!1},d(l){l&&te(e),We(d,l),l&&o&&o.end()}}}function mt(t){let e,r,s,o,a,c=(t[16].Message?t[16].Message.length:t[16].TemplateFrom.concat(" ").concat(t[16].TemplateMessage).length)+"",d,l,p,f,h,w=t[16].non_gsm,k=[];for(let g=0;g<w.length;g+=1)k[g]=vt(ut(t,w,g));let A=t[16].Message?t[16].Message:t[16].TemplateFrom.concat(" ").concat(t[16].TemplateMessage),C=[];for(let g=0;g<A.length;g+=1)C[g]=yt(ft(t,A,g));return{c(){e=P("div"),r=P("div"),s=P("div");for(let g=0;g<k.length;g+=1)k[g].c();o=ie(),a=P("div"),d=ne(c),l=ne(" chars"),p=ie(),f=P("div");for(let g=0;g<C.length;g+=1)C[g].c();h=ie(),I(s,"class","flex"),I(r,"class","flex flex-col items-center justify-between w-32 py-2 border-r-2"),I(f,"class","flex flex-wrap items-center flex-1 pl-4"),I(e,"class","flex border-b-2")},m(g,L){se(g,e,L),T(e,r),T(r,s);for(let y=0;y<k.length;y+=1)k[y]&&k[y].m(s,null);T(r,o),T(r,a),T(a,d),T(a,l),T(e,p),T(e,f);for(let y=0;y<C.length;y+=1)C[y]&&C[y].m(f,null);T(e,h)},p(g,L){if(L&4){w=g[16].non_gsm;let y;for(y=0;y<w.length;y+=1){const x=ut(g,w,y);k[y]?k[y].p(x,L):(k[y]=vt(x),k[y].c(),k[y].m(s,null))}for(;y<k.length;y+=1)k[y].d(1);k.length=w.length}if(L&4&&c!==(c=(g[16].Message?g[16].Message.length:g[16].TemplateFrom.concat(" ").concat(g[16].TemplateMessage).length)+"")&&Re(d,c),L&4){A=g[16].Message?g[16].Message:g[16].TemplateFrom.concat(" ").concat(g[16].TemplateMessage);let y;for(y=0;y<A.length;y+=1){const x=ft(g,A,y);C[y]?C[y].p(x,L):(C[y]=yt(x),C[y].c(),C[y].m(f,null))}for(;y<C.length;y+=1)C[y].d(1);C.length=A.length}},d(g){g&&te(e),We(k,g),We(C,g)}}}function vt(t){let e,r=t[22]+"",s;return{c(){e=P("pre"),s=ne(r),I(e,"class","mx-2 underline")},m(o,a){se(o,e,a),T(e,s)},p(o,a){a&4&&r!==(r=o[22]+"")&&Re(s,r)},d(o){o&&te(e)}}}function yt(t){let e,r=t[19]+"",s,o;return{c(){e=P("pre"),s=ne(r),I(e,"class",o="my-2 border-2 border-gray-600 "+(t[16].non_gsm.includes(t[19])?"bg-amber-500 text-slate-700 font-semibold":""))},m(a,c){se(a,e,c),T(e,s)},p(a,c){c&4&&r!==(r=a[19]+"")&&Re(s,r),c&4&&o!==(o="my-2 border-2 border-gray-600 "+(a[16].non_gsm.includes(a[19])?"bg-amber-500 text-slate-700 font-semibold":""))&&I(e,"class",o)},d(a){a&&te(e)}}}function bt(t){let e,r=t[18]>=t[3]&&t[18]<t[3]+De&&mt(t);return{c(){r&&r.c(),e=Pt()},m(s,o){r&&r.m(s,o),se(s,e,o)},p(s,o){s[18]>=s[3]&&s[18]<s[3]+De?r?r.p(s,o):(r=mt(s),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},d(s){r&&r.d(s),s&&te(e)}}}function sn(t){let e,r,s,o,a;function c(h,w){return!h[1]&&h[2].length===0?rn:nn}let d=c(t),l=d(t),p=t[2].length>100&&pt(t),f=t[2].length>0&&gt(t);return{c(){e=P("main"),r=P("div"),l.c(),s=ie(),p&&p.c(),o=ie(),f&&f.c(),I(r,"class","flex flex-col justify-center p-4 m-auto tau svelte-10218vl"),I(e,"class","overflow-none")},m(h,w){se(h,e,w),T(e,r),l.m(r,null),T(e,s),p&&p.m(e,null),T(e,o),f&&f.m(e,null),a=!0},p(h,[w]){d===(d=c(h))&&l?l.p(h,w):(l.d(1),l=d(h),l&&(l.c(),Me(l,1),l.m(r,null))),h[2].length>100?p?p.p(h,w):(p=pt(h),p.c(),p.m(e,o)):p&&(p.d(1),p=null),h[2].length>0?f?(f.p(h,w),w&4&&Me(f,1)):(f=gt(h),f.c(),Me(f,1),f.m(e,null)):f&&(Wt(),st(f,1,1,()=>{f=null}),Qt())},i(h){a||(Me(l),Me(f),a=!0)},o(h){st(f),a=!1},d(h){h&&te(e),l.d(),p&&p.d(),f&&f.d()}}}let De=100;function on(t){t.dataTransfer.dropEffect="copy"}function ln(t,e,r){let s,o,a=!1,c=[],d,l="",p=0;function f(x){console.log("HANDLE DROP e:",x),o=x.dataTransfer.files,console.log("dropped:",o),w(x)}function h(x,oe){r(1,a=!0),console.log("FILE COMPLETE RESULTS:",x);const{data:pe,errors:re,meta:S}=x;l=S.fields,l.concat("non_gsm"),console.log("HEADERS:",l),re.length>0&&console.warn("PARSE ERRORS:",x.errors);let i="Message";i=S.fields.indexOf("Message")>-1?i:"TextMessage",console.log("MSG COL:",i);function u(R,M){const W=i==="Message"?M[i]:M.TemplateFrom.concat(" ").concat(M[i]);let z=new Set(W),m=[];for(const D of z)D.charCodeAt(0)>128&&(console.error("CHAR:",D),m.push(D));if(m.length>0){const D=Array.from(m).join(" ");let E=M;E.non_gsm=D,R.push(E)}if(m.length===0&&W.length>160){let D=M;D.non_gsm="",R.push(D)}return R}r(2,c=pe.reduce(u,[])),console.log("non_gsm:",c),r(1,a=!1),[...c];const _=lt.unparse(c);console.log("NON GSM CSV:",_);const b=new Blob(["\uFEFF",_],{type:"text/csv;charset=utf-8;"});d=URL.createObjectURL(b),console.log("AT THE END non_gsm:",c)}function w(x){var re,S;r(1,a=!0);const pe=(((re=x.target.files)==null?void 0:re.length)>0?x.target.files:(S=x.dataTransfer)==null?void 0:S.files)[0];console.log("SCANNING FILE:",pe),lt.parse(pe,{header:!0,encoding:"utf-8",skipEmptyLines:"greedy",complete:(i,n)=>{h(i)}})}function k(){let x=document.createElement("a");x.href=d,x.setAttribute("download","report.csv"),document.body.appendChild(x),x.click(),document.body.removeChild(x)}function A(x){console.log("PAGINATION type:",x),x==="inc"&&r(3,p=Math.min(p+De,c.length-1)),x==="dec"&&r(3,p=Math.max(p-De,0))}function C(){s=this.files,r(0,s)}return[s,a,c,p,f,w,k,A,C,()=>{r(1,a=!1),r(2,c=[]),r(0,s=null)},()=>A("dec"),()=>{A("inc")}]}class an extends Yt{constructor(e){super(),Zt(this,e,ln,sn,St,{})}}new an({target:document.getElementById("app")});
