(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const f of a)if(f.type==="childList")for(const c of f.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(a){const f={};return a.integrity&&(f.integrity=a.integrity),a.referrerPolicy&&(f.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?f.credentials="include":a.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(a){if(a.ep)return;a.ep=!0;const f=i(a);fetch(a.href,f)}})();function ce(){}const Je=t=>t;function mt(t){return t()}function Xe(){return Object.create(null)}function xe(t){t.forEach(mt)}function Ue(t){return typeof t=="function"}function Tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Lt(t){return Object.keys(t).length===0}const yt=typeof window<"u";let vt=yt?()=>window.performance.now():()=>Date.now(),Ve=yt?t=>requestAnimationFrame(t):ce;const Ae=new Set;function bt(t){Ae.forEach(e=>{e.c(t)||(Ae.delete(e),e.f())}),Ae.size!==0&&Ve(bt)}function kt(t){let e;return Ae.size===0&&Ve(bt),{promise:new Promise(i=>{Ae.add(e={c:t,f:i})}),abort(){Ae.delete(e)}}}function S(t,e){t.appendChild(e)}function Ct(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function St(t){const e=U("style");return At(Ct(t),e),e.sheet}function At(t,e){return S(t.head||t,e),e.sheet}function de(t,e,i){t.insertBefore(e,i||null)}function oe(t){t.parentNode&&t.parentNode.removeChild(t)}function Ke(t,e){for(let i=0;i<t.length;i+=1)t[i]&&t[i].d(e)}function U(t){return document.createElement(t)}function be(t){return document.createTextNode(t)}function ue(){return be(" ")}function Se(t,e,i,o){return t.addEventListener(e,i,o),()=>t.removeEventListener(e,i,o)}function et(t){return function(e){return e.preventDefault(),t.call(this,e)}}function tt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function P(t,e,i){i==null?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function Mt(t){return Array.from(t.childNodes)}function He(t,e){e=""+e,t.data!==e&&(t.data=e)}function Dt(t,e,{bubbles:i=!1,cancelable:o=!1}={}){const a=document.createEvent("CustomEvent");return a.initCustomEvent(t,i,o,e),a}const Ne=new Map;let ze=0;function It(t){let e=5381,i=t.length;for(;i--;)e=(e<<5)-e^t.charCodeAt(i);return e>>>0}function Ft(t,e){const i={stylesheet:St(e),rules:{}};return Ne.set(t,i),i}function We(t,e,i,o,a,f,c,u=0){const s=16.666/o;let p=`{
`;for(let _=0;_<=1;_+=s){const L=e+(i-e)*f(_);p+=_*100+`%{${c(L,1-L)}}
`}const d=p+`100% {${c(i,1-i)}}
}`,v=`__svelte_${It(d)}_${u}`,T=Ct(t),{stylesheet:k,rules:w}=Ne.get(T)||Ft(T,t);w[v]||(w[v]=!0,k.insertRule(`@keyframes ${v} ${d}`,k.cssRules.length));const x=t.style.animation||"";return t.style.animation=`${x?`${x}, `:""}${v} ${o}ms linear ${a}ms 1 both`,ze+=1,v}function Qe(t,e){const i=(t.style.animation||"").split(", "),o=i.filter(e?f=>f.indexOf(e)<0:f=>f.indexOf("__svelte")===-1),a=i.length-o.length;a&&(t.style.animation=o.join(", "),ze-=a,ze||$t())}function $t(){Ve(()=>{ze||(Ne.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&oe(e)}),Ne.clear())})}let Ze;function Ie(t){Ze=t}const Te=[],nt=[];let Me=[];const rt=[],Pt=Promise.resolve();let Ge=!1;function Nt(){Ge||(Ge=!0,Pt.then(wt))}function ke(t){Me.push(t)}const Be=new Set;let Re=0;function wt(){if(Re!==0)return;const t=Ze;do{try{for(;Re<Te.length;){const e=Te[Re];Re++,Ie(e),zt(e.$$)}}catch(e){throw Te.length=0,Re=0,e}for(Ie(null),Te.length=0,Re=0;nt.length;)nt.pop()();for(let e=0;e<Me.length;e+=1){const i=Me[e];Be.has(i)||(Be.add(i),i())}Me.length=0}while(Te.length);for(;rt.length;)rt.pop()();Ge=!1,Be.clear(),Ie(t)}function zt(t){if(t.fragment!==null){t.update(),xe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ke)}}function jt(t){const e=[],i=[];Me.forEach(o=>t.indexOf(o)===-1?e.push(o):i.push(o)),i.forEach(o=>o()),Me=e}let De;function Et(){return De||(De=Promise.resolve(),De.then(()=>{De=null})),De}function Fe(t,e,i){t.dispatchEvent(Dt(`${e?"intro":"outro"}${i}`))}const Pe=new Set;let ge;function Ut(){ge={r:0,c:[],p:ge}}function Ht(){ge.r||xe(ge.c),ge=ge.p}function Le(t,e){t&&t.i&&(Pe.delete(t),t.i(e))}function it(t,e,i,o){if(t&&t.o){if(Pe.has(t))return;Pe.add(t),ge.c.push(()=>{Pe.delete(t),o&&(i&&t.d(1),o())}),t.o(e)}else o&&o()}const xt={duration:0};function Ot(t,e,i){const o={direction:"in"};let a=e(t,i,o),f=!1,c,u,s=0;function p(){c&&Qe(t,c)}function d(){const{delay:T=0,duration:k=300,easing:w=Je,tick:x=ce,css:_}=a||xt;_&&(c=We(t,0,1,k,T,w,_,s++)),x(0,1);const L=vt()+T,b=L+k;u&&u.abort(),f=!0,ke(()=>Fe(t,!0,"start")),u=kt(I=>{if(f){if(I>=b)return x(1,0),Fe(t,!0,"end"),p(),f=!1;if(I>=L){const te=w((I-L)/k);x(te,1-te)}}return f})}let v=!1;return{start(){v||(v=!0,Qe(t),Ue(a)?(a=a(o),Et().then(d)):d())},invalidate(){v=!1},end(){f&&(p(),f=!1)}}}function st(t,e,i,o){const a={direction:"both"};let f=e(t,i,a),c=o?0:1,u=null,s=null,p=null;function d(){p&&Qe(t,p)}function v(k,w){const x=k.b-c;return w*=Math.abs(x),{a:c,b:k.b,d:x,duration:w,start:k.start,end:k.start+w,group:k.group}}function T(k){const{delay:w=0,duration:x=300,easing:_=Je,tick:L=ce,css:b}=f||xt,I={start:vt()+w,b:k};k||(I.group=ge,ge.r+=1),u||s?s=I:(b&&(d(),p=We(t,c,k,x,w,_,b)),k&&L(0,1),u=v(I,x),ke(()=>Fe(t,k,"start")),kt(te=>{if(s&&te>s.start&&(u=v(s,x),s=null,Fe(t,u.b,"start"),b&&(d(),p=We(t,c,u.b,u.duration,0,_,f.css))),u){if(te>=u.end)L(c=u.b,1-c),Fe(t,u.b,"end"),s||(u.b?d():--u.group.r||xe(u.group.c)),u=null;else if(te>=u.start){const Ce=te-u.start;c=u.a+u.d*_(Ce/u.duration),L(c,1-c)}}return!!(u||s)}))}return{run(k){Ue(f)?Et().then(()=>{f=f(a),T(k)}):T(k)},end(){d(),u=s=null}}}function qt(t,e,i,o){const{fragment:a,after_update:f}=t.$$;a&&a.m(e,i),o||ke(()=>{const c=t.$$.on_mount.map(mt).filter(Ue);t.$$.on_destroy?t.$$.on_destroy.push(...c):xe(c),t.$$.on_mount=[]}),f.forEach(ke)}function Bt(t,e){const i=t.$$;i.fragment!==null&&(jt(i.after_update),xe(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function Kt(t,e){t.$$.dirty[0]===-1&&(Te.push(t),Nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Wt(t,e,i,o,a,f,c,u=[-1]){const s=Ze;Ie(t);const p=t.$$={fragment:null,ctx:[],props:f,update:ce,not_equal:a,bound:Xe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:Xe(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};c&&c(p.root);let d=!1;if(p.ctx=i?i(t,e.props||{},(v,T,...k)=>{const w=k.length?k[0]:T;return p.ctx&&a(p.ctx[v],p.ctx[v]=w)&&(!p.skip_bound&&p.bound[v]&&p.bound[v](w),d&&Kt(t,v)),T}):[],p.update(),d=!0,xe(p.before_update),p.fragment=o?o(p.ctx):!1,e.target){if(e.hydrate){const v=Mt(e.target);p.fragment&&p.fragment.l(v),v.forEach(oe)}else p.fragment&&p.fragment.c();e.intro&&Le(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),wt()}Ie(s)}class Qt{$destroy(){Bt(this,1),this.$destroy=ce}$on(e,i){if(!Ue(i))return ce;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(i),()=>{const a=o.indexOf(i);a!==-1&&o.splice(a,1)}}$set(e){this.$$set&&!Lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Gt=new Set(["t","%","W","L","Q","¥",")","N","ß","o","&","c","4","I","é","Φ","n","G","Π","€","X",">","f","à","s","m","l","<","d","O","p","#","~","ñ","Δ","M","x","*","$","Ü","9","P","Ø","Σ","Ξ","E","i","Ψ","1",",","ì","(","Θ","Λ","F","_","@","/","h","V","ä","+","]","z","a","D","T",'"',"e","É",":","!","k","w","ù","Ä","g","£","0","6","§","j","Y","H"," ","|","¤","-","Æ","J","y","{","?","^","2","S","¿",";","=","ö","K","b","5",".","å","ü","7","æ","U","Å","\\","Γ","ò","Ω","¡","u","ø","'","}","B","r","Z","è","3","Ö","A","8","Ç","v","q","[","Ñ","R","C"]);function je(t,{delay:e=0,duration:i=400,easing:o=Je}={}){const a=+getComputedStyle(t).opacity;return{delay:e,duration:i,easing:o,css:f=>`opacity: ${f*a}`}}var Jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rt={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(t,e){(function(i,o){t.exports=o()})(Jt,function i(){var o=typeof self<"u"?self:typeof window<"u"?window:o!==void 0?o:{},a=!o.document&&!!o.postMessage,f=o.IS_PAPA_WORKER||!1,c={},u=0,s={parse:function(r,n){var l=(n=n||{}).dynamicTyping||!1;if(M(l)&&(n.dynamicTypingFunction=l,l={}),n.dynamicTyping=l,n.transform=!!M(n.transform)&&n.transform,n.worker&&s.WORKERS_SUPPORTED){var h=function(){if(!s.WORKERS_SUPPORTED)return!1;var E=(W=o.URL||o.webkitURL||null,H=i.toString(),s.BLOB_URL||(s.BLOB_URL=W.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",H,")();"],{type:"text/javascript"})))),R=new o.Worker(E),W,H;return R.onmessage=b,R.id=u++,c[R.id]=R}();return h.userStep=n.step,h.userChunk=n.chunk,h.userComplete=n.complete,h.userError=n.error,n.step=M(n.step),n.chunk=M(n.chunk),n.complete=M(n.complete),n.error=M(n.error),delete n.worker,void h.postMessage({input:r,config:n,workerId:h.id})}var m=null;return s.NODE_STREAM_INPUT,typeof r=="string"?(r=function(E){return E.charCodeAt(0)===65279?E.slice(1):E}(r),m=n.download?new v(n):new k(n)):r.readable===!0&&M(r.read)&&M(r.on)?m=new w(n):(o.File&&r instanceof File||r instanceof Object)&&(m=new T(n)),m.stream(r)},unparse:function(r,n){var l=!1,h=!0,m=",",E=`\r
`,R='"',W=R+R,H=!1,y=null,B=!1;(function(){if(typeof n=="object"){if(typeof n.delimiter!="string"||s.BAD_DELIMITERS.filter(function(g){return n.delimiter.indexOf(g)!==-1}).length||(m=n.delimiter),(typeof n.quotes=="boolean"||typeof n.quotes=="function"||Array.isArray(n.quotes))&&(l=n.quotes),typeof n.skipEmptyLines!="boolean"&&typeof n.skipEmptyLines!="string"||(H=n.skipEmptyLines),typeof n.newline=="string"&&(E=n.newline),typeof n.quoteChar=="string"&&(R=n.quoteChar),typeof n.header=="boolean"&&(h=n.header),Array.isArray(n.columns)){if(n.columns.length===0)throw new Error("Option columns is empty");y=n.columns}n.escapeChar!==void 0&&(W=n.escapeChar+R),(typeof n.escapeFormulae=="boolean"||n.escapeFormulae instanceof RegExp)&&(B=n.escapeFormulae instanceof RegExp?n.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var O=new RegExp(_(R),"g");if(typeof r=="string"&&(r=JSON.parse(r)),Array.isArray(r)){if(!r.length||Array.isArray(r[0]))return ae(null,r,H);if(typeof r[0]=="object")return ae(y||Object.keys(r[0]),r,H)}else if(typeof r=="object")return typeof r.data=="string"&&(r.data=JSON.parse(r.data)),Array.isArray(r.data)&&(r.fields||(r.fields=r.meta&&r.meta.fields||y),r.fields||(r.fields=Array.isArray(r.data[0])?r.fields:typeof r.data[0]=="object"?Object.keys(r.data[0]):[]),Array.isArray(r.data[0])||typeof r.data[0]=="object"||(r.data=[r.data])),ae(r.fields||[],r.data||[],H);throw new Error("Unable to serialize unrecognized input");function ae(g,N,X){var q="";typeof g=="string"&&(g=JSON.parse(g)),typeof N=="string"&&(N=JSON.parse(N));var Z=Array.isArray(g)&&0<g.length,J=!Array.isArray(N[0]);if(Z&&h){for(var V=0;V<g.length;V++)0<V&&(q+=m),q+=Y(g[V],V);0<N.length&&(q+=E)}for(var C=0;C<N.length;C++){var A=Z?g.length:N[C].length,z=!1,G=Z?Object.keys(N[C]).length===0:N[C].length===0;if(X&&!Z&&(z=X==="greedy"?N[C].join("").trim()==="":N[C].length===1&&N[C][0].length===0),X==="greedy"&&Z){for(var F=[],ee=0;ee<A;ee++){var K=J?g[ee]:ee;F.push(N[C][K])}z=F.join("").trim()===""}if(!z){for(var $=0;$<A;$++){0<$&&!G&&(q+=m);var le=Z&&J?g[$]:$;q+=Y(N[C][le],$)}C<N.length-1&&(!X||0<A&&!G)&&(q+=E)}}return q}function Y(g,N){if(g==null)return"";if(g.constructor===Date)return JSON.stringify(g).slice(1,25);var X=!1;B&&typeof g=="string"&&B.test(g)&&(g="'"+g,X=!0);var q=g.toString().replace(O,W);return(X=X||l===!0||typeof l=="function"&&l(g,N)||Array.isArray(l)&&l[N]||function(Z,J){for(var V=0;V<J.length;V++)if(-1<Z.indexOf(J[V]))return!0;return!1}(q,s.BAD_DELIMITERS)||-1<q.indexOf(m)||q.charAt(0)===" "||q.charAt(q.length-1)===" ")?R+q+R:q}}};if(s.RECORD_SEP=String.fromCharCode(30),s.UNIT_SEP=String.fromCharCode(31),s.BYTE_ORDER_MARK="\uFEFF",s.BAD_DELIMITERS=["\r",`
`,'"',s.BYTE_ORDER_MARK],s.WORKERS_SUPPORTED=!a&&!!o.Worker,s.NODE_STREAM_INPUT=1,s.LocalChunkSize=10485760,s.RemoteChunkSize=5242880,s.DefaultDelimiter=",",s.Parser=L,s.ParserHandle=x,s.NetworkStreamer=v,s.FileStreamer=T,s.StringStreamer=k,s.ReadableStreamStreamer=w,o.jQuery){var p=o.jQuery;p.fn.parse=function(r){var n=r.config||{},l=[];return this.each(function(E){if(!(p(this).prop("tagName").toUpperCase()==="INPUT"&&p(this).attr("type").toLowerCase()==="file"&&o.FileReader)||!this.files||this.files.length===0)return!0;for(var R=0;R<this.files.length;R++)l.push({file:this.files[R],inputElem:this,instanceConfig:p.extend({},n)})}),h(),this;function h(){if(l.length!==0){var E,R,W,H,y=l[0];if(M(r.before)){var B=r.before(y.file,y.inputElem);if(typeof B=="object"){if(B.action==="abort")return E="AbortError",R=y.file,W=y.inputElem,H=B.reason,void(M(r.error)&&r.error({name:E},R,W,H));if(B.action==="skip")return void m();typeof B.config=="object"&&(y.instanceConfig=p.extend(y.instanceConfig,B.config))}else if(B==="skip")return void m()}var O=y.instanceConfig.complete;y.instanceConfig.complete=function(ae){M(O)&&O(ae,y.file,y.inputElem),m()},s.parse(y.file,y.instanceConfig)}else M(r.complete)&&r.complete()}function m(){l.splice(0,1),h()}}}function d(r){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(n){var l=Ce(n);l.chunkSize=parseInt(l.chunkSize),n.step||n.chunk||(l.chunkSize=null),this._handle=new x(l),(this._handle.streamer=this)._config=l}.call(this,r),this.parseChunk=function(n,l){if(this.isFirstChunk&&M(this._config.beforeFirstChunk)){var h=this._config.beforeFirstChunk(n);h!==void 0&&(n=h)}this.isFirstChunk=!1,this._halted=!1;var m=this._partialLine+n;this._partialLine="";var E=this._handle.parse(m,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var R=E.meta.cursor;this._finished||(this._partialLine=m.substring(R-this._baseIndex),this._baseIndex=R),E&&E.data&&(this._rowCount+=E.data.length);var W=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(f)o.postMessage({results:E,workerId:s.WORKER_ID,finished:W});else if(M(this._config.chunk)&&!l){if(this._config.chunk(E,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);E=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(E.data),this._completeResults.errors=this._completeResults.errors.concat(E.errors),this._completeResults.meta=E.meta),this._completed||!W||!M(this._config.complete)||E&&E.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),W||E&&E.meta.paused||this._nextChunk(),E}this._halted=!0},this._sendError=function(n){M(this._config.error)?this._config.error(n):f&&this._config.error&&o.postMessage({workerId:s.WORKER_ID,error:n,finished:!1})}}function v(r){var n;(r=r||{}).chunkSize||(r.chunkSize=s.RemoteChunkSize),d.call(this,r),this._nextChunk=a?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(l){this._input=l,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(n=new XMLHttpRequest,this._config.withCredentials&&(n.withCredentials=this._config.withCredentials),a||(n.onload=he(this._chunkLoaded,this),n.onerror=he(this._chunkError,this)),n.open(this._config.downloadRequestBody?"POST":"GET",this._input,!a),this._config.downloadRequestHeaders){var l=this._config.downloadRequestHeaders;for(var h in l)n.setRequestHeader(h,l[h])}if(this._config.chunkSize){var m=this._start+this._config.chunkSize-1;n.setRequestHeader("Range","bytes="+this._start+"-"+m)}try{n.send(this._config.downloadRequestBody)}catch(E){this._chunkError(E.message)}a&&n.status===0&&this._chunkError()}},this._chunkLoaded=function(){n.readyState===4&&(n.status<200||400<=n.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:n.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(l){var h=l.getResponseHeader("Content-Range");return h===null?-1:parseInt(h.substring(h.lastIndexOf("/")+1))}(n),this.parseChunk(n.responseText)))},this._chunkError=function(l){var h=n.statusText||l;this._sendError(new Error(h))}}function T(r){var n,l;(r=r||{}).chunkSize||(r.chunkSize=s.LocalChunkSize),d.call(this,r);var h=typeof FileReader<"u";this.stream=function(m){this._input=m,l=m.slice||m.webkitSlice||m.mozSlice,h?((n=new FileReader).onload=he(this._chunkLoaded,this),n.onerror=he(this._chunkError,this)):n=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var m=this._input;if(this._config.chunkSize){var E=Math.min(this._start+this._config.chunkSize,this._input.size);m=l.call(m,this._start,E)}var R=n.readAsText(m,this._config.encoding);h||this._chunkLoaded({target:{result:R}})},this._chunkLoaded=function(m){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(m.target.result)},this._chunkError=function(){this._sendError(n.error)}}function k(r){var n;d.call(this,r=r||{}),this.stream=function(l){return n=l,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var l,h=this._config.chunkSize;return h?(l=n.substring(0,h),n=n.substring(h)):(l=n,n=""),this._finished=!n,this.parseChunk(l)}}}function w(r){d.call(this,r=r||{});var n=[],l=!0,h=!1;this.pause=function(){d.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){d.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(m){this._input=m,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){h&&n.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),n.length?this.parseChunk(n.shift()):l=!0},this._streamData=he(function(m){try{n.push(typeof m=="string"?m:m.toString(this._config.encoding)),l&&(l=!1,this._checkIsFinished(),this.parseChunk(n.shift()))}catch(E){this._streamError(E)}},this),this._streamError=he(function(m){this._streamCleanUp(),this._sendError(m)},this),this._streamEnd=he(function(){this._streamCleanUp(),h=!0,this._streamData("")},this),this._streamCleanUp=he(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function x(r){var n,l,h,m=Math.pow(2,53),E=-m,R=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,W=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,H=this,y=0,B=0,O=!1,ae=!1,Y=[],g={data:[],errors:[],meta:{}};if(M(r.step)){var N=r.step;r.step=function(C){if(g=C,Z())q();else{if(q(),g.data.length===0)return;y+=C.data.length,r.preview&&y>r.preview?l.abort():(g.data=g.data[0],N(g,H))}}}function X(C){return r.skipEmptyLines==="greedy"?C.join("").trim()==="":C.length===1&&C[0].length===0}function q(){return g&&h&&(V("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+s.DefaultDelimiter+"'"),h=!1),r.skipEmptyLines&&(g.data=g.data.filter(function(C){return!X(C)})),Z()&&function(){if(!g)return;function C(z,G){M(r.transformHeader)&&(z=r.transformHeader(z,G)),Y.push(z)}if(Array.isArray(g.data[0])){for(var A=0;Z()&&A<g.data.length;A++)g.data[A].forEach(C);g.data.splice(0,1)}else g.data.forEach(C)}(),function(){if(!g||!r.header&&!r.dynamicTyping&&!r.transform)return g;function C(z,G){var F,ee=r.header?{}:[];for(F=0;F<z.length;F++){var K=F,$=z[F];r.header&&(K=F>=Y.length?"__parsed_extra":Y[F]),r.transform&&($=r.transform($,K)),$=J(K,$),K==="__parsed_extra"?(ee[K]=ee[K]||[],ee[K].push($)):ee[K]=$}return r.header&&(F>Y.length?V("FieldMismatch","TooManyFields","Too many fields: expected "+Y.length+" fields but parsed "+F,B+G):F<Y.length&&V("FieldMismatch","TooFewFields","Too few fields: expected "+Y.length+" fields but parsed "+F,B+G)),ee}var A=1;return!g.data.length||Array.isArray(g.data[0])?(g.data=g.data.map(C),A=g.data.length):g.data=C(g.data,0),r.header&&g.meta&&(g.meta.fields=Y),B+=A,g}()}function Z(){return r.header&&Y.length===0}function J(C,A){return z=C,r.dynamicTypingFunction&&r.dynamicTyping[z]===void 0&&(r.dynamicTyping[z]=r.dynamicTypingFunction(z)),(r.dynamicTyping[z]||r.dynamicTyping)===!0?A==="true"||A==="TRUE"||A!=="false"&&A!=="FALSE"&&(function(G){if(R.test(G)){var F=parseFloat(G);if(E<F&&F<m)return!0}return!1}(A)?parseFloat(A):W.test(A)?new Date(A):A===""?null:A):A;var z}function V(C,A,z,G){var F={type:C,code:A,message:z};G!==void 0&&(F.row=G),g.errors.push(F)}this.parse=function(C,A,z){var G=r.quoteChar||'"';if(r.newline||(r.newline=function(K,$){K=K.substring(0,1048576);var le=new RegExp(_($)+"([^]*?)"+_($),"gm"),ne=(K=K.replace(le,"")).split("\r"),fe=K.split(`
`),pe=1<fe.length&&fe[0].length<ne[0].length;if(ne.length===1||pe)return`
`;for(var re=0,j=0;j<ne.length;j++)ne[j][0]===`
`&&re++;return re>=ne.length/2?`\r
`:"\r"}(C,G)),h=!1,r.delimiter)M(r.delimiter)&&(r.delimiter=r.delimiter(C),g.meta.delimiter=r.delimiter);else{var F=function(K,$,le,ne,fe){var pe,re,j,Q;fe=fe||[",","	","|",";",s.RECORD_SEP,s.UNIT_SEP];for(var we=0;we<fe.length;we++){var D=fe[we],Oe=0,_e=0,Ee=0;j=void 0;for(var me=new L({comments:ne,delimiter:D,newline:$,preview:10}).parse(K),ye=0;ye<me.data.length;ye++)if(le&&X(me.data[ye]))Ee++;else{var ve=me.data[ye].length;_e+=ve,j!==void 0?0<ve&&(Oe+=Math.abs(ve-j),j=ve):j=ve}0<me.data.length&&(_e/=me.data.length-Ee),(re===void 0||Oe<=re)&&(Q===void 0||Q<_e)&&1.99<_e&&(re=Oe,pe=D,Q=_e)}return{successful:!!(r.delimiter=pe),bestDelimiter:pe}}(C,r.newline,r.skipEmptyLines,r.comments,r.delimitersToGuess);F.successful?r.delimiter=F.bestDelimiter:(h=!0,r.delimiter=s.DefaultDelimiter),g.meta.delimiter=r.delimiter}var ee=Ce(r);return r.preview&&r.header&&ee.preview++,n=C,l=new L(ee),g=l.parse(n,A,z),q(),O?{meta:{paused:!0}}:g||{meta:{paused:!1}}},this.paused=function(){return O},this.pause=function(){O=!0,l.abort(),n=M(r.chunk)?"":n.substring(l.getCharIndex())},this.resume=function(){H.streamer._halted?(O=!1,H.streamer.parseChunk(n,!0)):setTimeout(H.resume,3)},this.aborted=function(){return ae},this.abort=function(){ae=!0,l.abort(),g.meta.aborted=!0,M(r.complete)&&r.complete(g),n=""}}function _(r){return r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function L(r){var n,l=(r=r||{}).delimiter,h=r.newline,m=r.comments,E=r.step,R=r.preview,W=r.fastMode,H=n=r.quoteChar===void 0||r.quoteChar===null?'"':r.quoteChar;if(r.escapeChar!==void 0&&(H=r.escapeChar),(typeof l!="string"||-1<s.BAD_DELIMITERS.indexOf(l))&&(l=","),m===l)throw new Error("Comment character same as delimiter");m===!0?m="#":(typeof m!="string"||-1<s.BAD_DELIMITERS.indexOf(m))&&(m=!1),h!==`
`&&h!=="\r"&&h!==`\r
`&&(h=`
`);var y=0,B=!1;this.parse=function(O,ae,Y){if(typeof O!="string")throw new Error("Input must be a string");var g=O.length,N=l.length,X=h.length,q=m.length,Z=M(E),J=[],V=[],C=[],A=y=0;if(!O)return ie();if(r.header&&!ae){var z=O.split(h)[0].split(l),G=[],F={},ee=!1;for(var K in z){var $=z[K];M(r.transformHeader)&&($=r.transformHeader($,K));var le=$,ne=F[$]||0;for(0<ne&&(ee=!0,le=$+"_"+ne),F[$]=ne+1;G.includes(le);)le=le+"_"+ne;G.push(le)}if(ee){var fe=O.split(h);fe[0]=G.join(l),O=fe.join(h)}}if(W||W!==!1&&O.indexOf(n)===-1){for(var pe=O.split(h),re=0;re<pe.length;re++){if(C=pe[re],y+=C.length,re!==pe.length-1)y+=h.length;else if(Y)return ie();if(!m||C.substring(0,q)!==m){if(Z){if(J=[],Ee(C.split(l)),$e(),B)return ie()}else Ee(C.split(l));if(R&&R<=re)return J=J.slice(0,R),ie(!0)}}return ie()}for(var j=O.indexOf(l,y),Q=O.indexOf(h,y),we=new RegExp(_(H)+_(n),"g"),D=O.indexOf(n,y);;)if(O[y]!==n)if(m&&C.length===0&&O.substring(y,y+q)===m){if(Q===-1)return ie();y=Q+X,Q=O.indexOf(h,y),j=O.indexOf(l,y)}else if(j!==-1&&(j<Q||Q===-1))C.push(O.substring(y,j)),y=j+N,j=O.indexOf(l,y);else{if(Q===-1)break;if(C.push(O.substring(y,Q)),ve(Q+X),Z&&($e(),B))return ie();if(R&&J.length>=R)return ie(!0)}else for(D=y,y++;;){if((D=O.indexOf(n,D+1))===-1)return Y||V.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:J.length,index:y}),ye();if(D===g-1)return ye(O.substring(y,D).replace(we,n));if(n!==H||O[D+1]!==H){if(n===H||D===0||O[D-1]!==H){j!==-1&&j<D+1&&(j=O.indexOf(l,D+1)),Q!==-1&&Q<D+1&&(Q=O.indexOf(h,D+1));var Oe=me(Q===-1?j:Math.min(j,Q));if(O.substr(D+1+Oe,N)===l){C.push(O.substring(y,D).replace(we,n)),O[y=D+1+Oe+N]!==n&&(D=O.indexOf(n,y)),j=O.indexOf(l,y),Q=O.indexOf(h,y);break}var _e=me(Q);if(O.substring(D+1+_e,D+1+_e+X)===h){if(C.push(O.substring(y,D).replace(we,n)),ve(D+1+_e+X),j=O.indexOf(l,y),D=O.indexOf(n,y),Z&&($e(),B))return ie();if(R&&J.length>=R)return ie(!0);break}V.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:J.length,index:y}),D++}}else D++}return ye();function Ee(se){J.push(se),A=y}function me(se){var Ye=0;if(se!==-1){var qe=O.substring(D+1,se);qe&&qe.trim()===""&&(Ye=qe.length)}return Ye}function ye(se){return Y||(se===void 0&&(se=O.substring(y)),C.push(se),y=g,Ee(C),Z&&$e()),ie()}function ve(se){y=se,Ee(C),C=[],Q=O.indexOf(h,y)}function ie(se){return{data:J,errors:V,meta:{delimiter:l,linebreak:h,aborted:B,truncated:!!se,cursor:A+(ae||0)}}}function $e(){E(ie()),J=[],V=[]}},this.abort=function(){B=!0},this.getCharIndex=function(){return y}}function b(r){var n=r.data,l=c[n.workerId],h=!1;if(n.error)l.userError(n.error,n.file);else if(n.results&&n.results.data){var m={abort:function(){h=!0,I(n.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:te,resume:te};if(M(l.userStep)){for(var E=0;E<n.results.data.length&&(l.userStep({data:n.results.data[E],errors:n.results.errors,meta:n.results.meta},m),!h);E++);delete n.results}else M(l.userChunk)&&(l.userChunk(n.results,m,n.file),delete n.results)}n.finished&&!h&&I(n.workerId,n.results)}function I(r,n){var l=c[r];M(l.userComplete)&&l.userComplete(n),l.terminate(),delete c[r]}function te(){throw new Error("Not implemented.")}function Ce(r){if(typeof r!="object"||r===null)return r;var n=Array.isArray(r)?[]:{};for(var l in r)n[l]=Ce(r[l]);return n}function he(r,n){return function(){r.apply(n,arguments)}}function M(r){return typeof r=="function"}return f&&(o.onmessage=function(r){var n=r.data;if(s.WORKER_ID===void 0&&n&&(s.WORKER_ID=n.workerId),typeof n.input=="string")o.postMessage({workerId:s.WORKER_ID,results:s.parse(n.input,n.config),finished:!0});else if(o.File&&n.input instanceof File||n.input instanceof Object){var l=s.parse(n.input,n.config);l&&o.postMessage({workerId:s.WORKER_ID,results:l,finished:!0})}}),(v.prototype=Object.create(d.prototype)).constructor=v,(T.prototype=Object.create(d.prototype)).constructor=T,(k.prototype=Object.create(k.prototype)).constructor=k,(w.prototype=Object.create(d.prototype)).constructor=w,s})})(Rt);var Zt=Rt.exports;const ot=Vt(Zt);function at(t,e,i){const o=t.slice();return o[11]=e[i],o}function lt(t,e,i){const o=t.slice();return o[14]=e[i],o}function ft(t,e,i){const o=t.slice();return o[17]=e[i],o}function Yt(t){var k,w;let e,i,o,a,f,c,u,s,p,d=t[1]&&ut(),v=((k=t[2])==null?void 0:k.length)>0&&ct(t),T=((w=t[2])==null?void 0:w.length)>0&&dt(t);return{c(){e=U("div"),d&&d.c(),i=ue(),v&&v.c(),o=ue(),a=U("div"),T&&T.c(),f=ue(),c=U("button"),c.textContent="reset",P(c,"class","px-4 py-1 text-xs border-2 border-gray-600 rounded"),P(a,"class","flex justify-end pt-8 active:opacity-70"),P(e,"class","flex flex-col justify-between h-full")},m(x,_){de(x,e,_),d&&d.m(e,null),S(e,i),v&&v.m(e,null),S(e,o),S(e,a),T&&T.m(a,null),S(a,f),S(a,c),s||(p=Se(c,"click",t[7]),s=!0)},p(x,_){var L,b;x[1]?d||(d=ut(),d.c(),d.m(e,i)):d&&(d.d(1),d=null),((L=x[2])==null?void 0:L.length)>0?v?v.p(x,_):(v=ct(x),v.c(),v.m(e,o)):v&&(v.d(1),v=null),((b=x[2])==null?void 0:b.length)>0?T?T.p(x,_):(T=dt(x),T.c(),T.m(a,f)):T&&(T.d(1),T=null)},i(x){u||ke(()=>{u=Ot(e,je,{}),u.start()})},o:ce,d(x){x&&oe(e),d&&d.d(),v&&v.d(),T&&T.d(),s=!1,p()}}}function Xt(t){let e,i,o,a,f,c,u,s,p;return{c(){e=U("label"),i=U("div"),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M32.3936 28.6875C32.3468 28.6277 32.287 28.5794 32.2188 28.5462C32.1506 28.5129 32.0757 28.4957 31.9998 28.4957C31.9239 28.4957 31.849 28.5129 31.7808 28.5462C31.7126 28.5794 31.6528 28.6277 31.6061 28.6875L24.6061 37.5438C24.5484 37.6174 24.5126 37.7059 24.5027 37.799C24.4929 37.8921 24.5095 37.986 24.5506 38.0701C24.5917 38.1542 24.6556 38.2251 24.735 38.2746C24.8145 38.3241 24.9062 38.3502 24.9998 38.35H29.6186V53.5C29.6186 53.775 29.8436 54 30.1186 54H33.8686C34.1436 54 34.3686 53.775 34.3686 53.5V38.3563H38.9998C39.4186 38.3563 39.6498 37.875 39.3936 37.55L32.3936 28.6875Z" fill="black" fill-opacity="0.64"></path><path d="M50.7125 22.9188C47.85 15.3688 40.5563 10 32.0125 10C23.4688 10 16.175 15.3625 13.3125 22.9125C7.95625 24.3188 4 29.2 4 35C4 41.9062 9.59375 47.5 16.4937 47.5H19C19.275 47.5 19.5 47.275 19.5 47V43.25C19.5 42.975 19.275 42.75 19 42.75H16.4937C14.3875 42.75 12.4062 41.9125 10.9312 40.3937C9.4625 38.8812 8.68125 36.8438 8.75 34.7313C8.80625 33.0813 9.36875 31.5312 10.3875 30.225C11.4312 28.8938 12.8938 27.925 14.5188 27.4937L16.8875 26.875L17.7563 24.5875C18.2938 23.1625 19.0437 21.8313 19.9875 20.625C20.9192 19.4294 22.0228 18.3784 23.2625 17.5063C25.8313 15.7 28.8563 14.7437 32.0125 14.7437C35.1688 14.7437 38.1938 15.7 40.7625 17.5063C42.0063 18.3813 43.1062 19.4312 44.0375 20.625C44.9812 21.8313 45.7313 23.1687 46.2687 24.5875L47.1312 26.8687L49.4938 27.4937C52.8813 28.4062 55.25 31.4875 55.25 35C55.25 37.0688 54.4438 39.0188 52.9813 40.4813C52.264 41.2027 51.4108 41.7747 50.471 42.1641C49.5312 42.5535 48.5235 42.7527 47.5062 42.75H45C44.725 42.75 44.5 42.975 44.5 43.25V47C44.5 47.275 44.725 47.5 45 47.5H47.5062C54.4062 47.5 60 41.9062 60 35C60 29.2062 56.0563 24.3313 50.7125 22.9188Z" fill="black" fill-opacity="0.64"></path></svg>',o=ue(),a=U("div"),a.innerHTML=`<div>Drag and drop your CSV file here</div> 
          <div>or</div> 
          <div>Click here to upload</div>`,f=ue(),c=U("input"),P(i,"class","flex justify-center"),P(a,"class","mt-4 text-center"),P(c,"type","file"),P(c,"id","upload"),P(c,"accept",".csv"),c.hidden=!0,P(e,"for","upload"),P(e,"class","cursor-pointer")},m(d,v){de(d,e,v),S(e,i),S(e,o),S(e,a),S(e,f),S(e,c),s||(p=[Se(c,"change",t[6]),Se(c,"change",t[4]),Se(e,"dragover",tt(et(tn))),Se(e,"drop",tt(et(t[3])))],s=!0)},p:ce,i(d){u||ke(()=>{u=Ot(e,je,{}),u.start()})},o:ce,d(d){d&&oe(e),s=!1,xe(p)}}}function ut(t){let e;return{c(){e=U("div"),e.textContent="Scanning...",P(e,"class","flex-1")},m(i,o){de(i,e,o)},d(i){i&&oe(e)}}}function ct(t){let e,i,o,a=t[2].length+"",f,c;return{c(){e=U("div"),i=be("Possible issues detected in "),o=U("strong"),f=be(a),c=be(" of your templates."),P(o,"class","mx-2 text-xl text-amber-800"),P(e,"class","flex items-center justify-center flex-1")},m(u,s){de(u,e,s),S(e,i),S(e,o),S(o,f),S(e,c)},p(u,s){s&4&&a!==(a=u[2].length+"")&&He(f,a)},d(u){u&&oe(e)}}}function dt(t){let e,i,o;return{c(){e=U("button"),e.textContent="download report",P(e,"class","px-4 py-1 mr-2 border-2 border-gray-600 rounded")},m(a,f){de(a,e,f),i||(o=Se(e,"click",t[5]),i=!0)},p:ce,d(a){a&&oe(e),i=!1,o()}}}function ht(t){let e,i,o,a,f,c=t[2],u=[];for(let s=0;s<c.length;s+=1)u[s]=gt(at(t,c,s));return{c(){e=U("div"),i=U("div"),i.innerHTML=`<div class="w-32 text-center border-r-2">Info</div> 
        <div class="flex-1 text-center">Message</div>`,o=ue();for(let s=0;s<u.length;s+=1)u[s].c();P(i,"class","flex border-b-2"),P(e,"class","flex flex-col flex-wrap flex-1 my-4 overflow-y-auto border-gray-700 bg-black/70 text-white/90")},m(s,p){de(s,e,p),S(e,i),S(e,o);for(let d=0;d<u.length;d+=1)u[d]&&u[d].m(e,null);f=!0},p(s,p){if(p&4){c=s[2];let d;for(d=0;d<c.length;d+=1){const v=at(s,c,d);u[d]?u[d].p(v,p):(u[d]=gt(v),u[d].c(),u[d].m(e,null))}for(;d<u.length;d+=1)u[d].d(1);u.length=c.length}},i(s){f||(ke(()=>{f&&(a||(a=st(e,je,{},!0)),a.run(1))}),f=!0)},o(s){a||(a=st(e,je,{},!1)),a.run(0),f=!1},d(s){s&&oe(e),Ke(u,s),s&&a&&a.end()}}}function pt(t){let e,i=t[17]+"",o;return{c(){e=U("pre"),o=be(i),P(e,"class","mx-2 underline")},m(a,f){de(a,e,f),S(e,o)},p(a,f){f&4&&i!==(i=a[17]+"")&&He(o,i)},d(a){a&&oe(e)}}}function _t(t){let e,i=t[14]+"",o,a;return{c(){e=U("pre"),o=be(i),P(e,"class",a="my-2 border-2 border-gray-600 "+(t[11].diff.includes(t[14])?"bg-amber-500 text-slate-700 font-semibold":""))},m(f,c){de(f,e,c),S(e,o)},p(f,c){c&4&&i!==(i=f[14]+"")&&He(o,i),c&4&&a!==(a="my-2 border-2 border-gray-600 "+(f[11].diff.includes(f[14])?"bg-amber-500 text-slate-700 font-semibold":""))&&P(e,"class",a)},d(f){f&&oe(e)}}}function gt(t){let e,i,o,a,f,c=(t[11].Message?t[11].Message.length:t[11].TemplateFrom.concat(" ").concat(t[11].TemplateMessage).length)+"",u,s,p,d,v,T=t[11].diff,k=[];for(let _=0;_<T.length;_+=1)k[_]=pt(ft(t,T,_));let w=t[11].Message?t[11].Message:t[11].TemplateFrom.concat(" ").concat(t[11].TemplateMessage),x=[];for(let _=0;_<w.length;_+=1)x[_]=_t(lt(t,w,_));return{c(){e=U("div"),i=U("div"),o=U("div");for(let _=0;_<k.length;_+=1)k[_].c();a=ue(),f=U("div"),u=be(c),s=be(" chars"),p=ue(),d=U("div");for(let _=0;_<x.length;_+=1)x[_].c();v=ue(),P(o,"class","flex"),P(i,"class","flex flex-col items-center justify-between w-32 py-2 border-r-2"),P(d,"class","flex flex-wrap flex-1 pl-4"),P(e,"class","flex border-b-2")},m(_,L){de(_,e,L),S(e,i),S(i,o);for(let b=0;b<k.length;b+=1)k[b]&&k[b].m(o,null);S(i,a),S(i,f),S(f,u),S(f,s),S(e,p),S(e,d);for(let b=0;b<x.length;b+=1)x[b]&&x[b].m(d,null);S(e,v)},p(_,L){if(L&4){T=_[11].diff;let b;for(b=0;b<T.length;b+=1){const I=ft(_,T,b);k[b]?k[b].p(I,L):(k[b]=pt(I),k[b].c(),k[b].m(o,null))}for(;b<k.length;b+=1)k[b].d(1);k.length=T.length}if(L&4&&c!==(c=(_[11].Message?_[11].Message.length:_[11].TemplateFrom.concat(" ").concat(_[11].TemplateMessage).length)+"")&&He(u,c),L&4){w=_[11].Message?_[11].Message:_[11].TemplateFrom.concat(" ").concat(_[11].TemplateMessage);let b;for(b=0;b<w.length;b+=1){const I=lt(_,w,b);x[b]?x[b].p(I,L):(x[b]=_t(I),x[b].c(),x[b].m(d,null))}for(;b<x.length;b+=1)x[b].d(1);x.length=w.length}},d(_){_&&oe(e),Ke(k,_),Ke(x,_)}}}function en(t){let e,i,o,a;function f(p,d){return!p[1]&&p[2].length===0?Xt:Yt}let c=f(t),u=c(t),s=t[2].length>0&&ht(t);return{c(){e=U("main"),i=U("div"),u.c(),o=ue(),s&&s.c(),P(i,"class","flex flex-col justify-center p-4 m-auto tau svelte-10218vl"),P(e,"class","overflow-none")},m(p,d){de(p,e,d),S(e,i),u.m(i,null),S(e,o),s&&s.m(e,null),a=!0},p(p,[d]){c===(c=f(p))&&u?u.p(p,d):(u.d(1),u=c(p),u&&(u.c(),Le(u,1),u.m(i,null))),p[2].length>0?s?(s.p(p,d),d&4&&Le(s,1)):(s=ht(p),s.c(),Le(s,1),s.m(e,null)):s&&(Ut(),it(s,1,1,()=>{s=null}),Ht())},i(p){a||(Le(u),Le(s),a=!0)},o(p){it(s),a=!1},d(p){p&&oe(e),u.d(),s&&s.d()}}}function tn(t){t.dataTransfer.dropEffect="copy"}function nn(t,e){return new Set(Array.from(t).filter(i=>!e.has(i)))}function rn(t,e,i){let o,a,f=!1,c=[],u;function s(w){console.log("HANDLE DROP e:",w),a=w.dataTransfer.files,console.log("dropped:",a),d(w)}function p(w,x){i(1,f=!0),console.log("FILE COMPLETE RESULTS:",w);const{data:_,errors:L,meta:b}=w;L.length>0&&console.warn("PARSE ERRORS:",w.errors);let I="Message";I=b.fields.indexOf("Message")>-1?I:"TextMessage",console.log("MSG COL:",typeof I);function Ce(l,h){let m=new Set(I==="Message"?h[I]:h.TemplateFrom.concat(" ").concat(h[I])),E=nn(m,Gt);if(E.size>0){const R=Array.from(E).join(" ");let W=h;W.diff=R,l.push(W)}if(E.size===0&&h[I].length>160){let R=h;R.diff=R.diff?R.diff:"",l.push(R)}return l}i(2,c=_.reduce(Ce,[])),console.log("non_gsm:",c),i(1,f=!1);const M=[["non-GSM Characters","Name","Message","Description"],...c],r=ot.unparse(M);console.log("NON GSM CSV:",r);const n=new Blob(["\uFEFF",r],{type:"text/csv;charset=utf-8;"});u=URL.createObjectURL(n)}function d(w){var L,b;i(1,f=!0);const _=(((L=w.target.files)==null?void 0:L.length)>0?w.target.files:(b=w.dataTransfer)==null?void 0:b.files)[0];console.log("SCANNING FILE:",_),ot.parse(_,{header:!0,encoding:"utf-8",skipEmptyLines:"greedy",complete:(I,te)=>{p(I)}})}function v(){let w=document.createElement("a");w.href=u,w.setAttribute("download","report.csv"),document.body.appendChild(w),w.click(),document.body.removeChild(w)}function T(){o=this.files,i(0,o)}return[o,f,c,s,d,v,T,()=>{i(1,f=!1),i(2,c=[]),i(0,o=null)}]}class sn extends Qt{constructor(e){super(),Wt(this,e,rn,en,Tt,{})}}new sn({target:document.getElementById("app")});
