import{D as U,Da as T,Ec as $,G as m,Ja as p,V,Y as P,da as d,ea as G,fb as F,ga as w,ia as l,m as o,o as u,qa as B,r as E,sa as H,v as _,w as A,x as K}from"./chunk-GCV2IDJ5.js";import{a as S}from"./chunk-MON7YFGF.js";var L=class{},q=(()=>{class n extends L{getTranslation(e){return o({})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=T(n)))(i||n)}})();static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),D=class{},J=(()=>{class n{handle(e){return e.key}static \u0275fac=function(t){return new(t||n)};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})();function y(n,r){if(n===r)return!0;if(n===null||r===null)return!1;if(n!==n&&r!==r)return!0;let e=typeof n,t=typeof r,i,s,a;if(e==t&&e=="object")if(Array.isArray(n)){if(!Array.isArray(r))return!1;if((i=n.length)==r.length){for(s=0;s<i;s++)if(!y(n[s],r[s]))return!1;return!0}}else{if(Array.isArray(r))return!1;a=Object.create(null);for(s in n){if(!y(n[s],r[s]))return!1;a[s]=!0}for(s in r)if(!(s in a)&&typeof r[s]<"u")return!1;return!0}return!1}function h(n){return typeof n<"u"&&n!==null}function M(n){return n&&typeof n=="object"&&!Array.isArray(n)}function W(n,r){let e=Object.assign({},n);return M(n)&&M(r)&&Object.keys(r).forEach(t=>{M(r[t])?t in n?e[t]=W(n[t],r[t]):Object.assign(e,{[t]:r[t]}):Object.assign(e,{[t]:r[t]})}),e}var C=class{},X=(()=>{class n extends C{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,t){let i;return typeof e=="string"?i=this.interpolateString(e,t):typeof e=="function"?i=this.interpolateFunction(e,t):i=e,i}getValue(e,t){let i=typeof t=="string"?t.split("."):[t];t="";do t+=i.shift(),h(e)&&h(e[t])&&(typeof e[t]=="object"||!i.length)?(e=e[t],t=""):i.length?t+=".":e=void 0;while(i.length);return e}interpolateFunction(e,t){return e(t)}interpolateString(e,t){return t?e.replace(this.templateMatcher,(i,s)=>{let a=this.getValue(t,s);return h(a)?a:i}):e}static \u0275fac=(()=>{let e;return function(i){return(e||(e=T(n)))(i||n)}})();static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),v=class{},z=(()=>{class n extends v{compile(e,t){return e}compileTranslations(e,t){return e}static \u0275fac=(()=>{let e;return function(i){return(e||(e=T(n)))(i||n)}})();static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),j=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new p;onLangChange=new p;onDefaultLangChange=new p},R=new w("USE_STORE"),I=new w("USE_DEFAULT_LANG"),N=new w("DEFAULT_LANGUAGE"),O=new w("USE_EXTEND"),x=(()=>{class n{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;isolate;extend;loadingTranslations;pending=!1;_onTranslationChange=new p;_onLangChange=new p;_onDefaultLangChange=new p;_defaultLang;_currentLang;_langs=[];_translations={};_translationRequests={};get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(e){this.isolate?this._defaultLang=e:this.store.defaultLang=e}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(e){this.isolate?this._currentLang=e:this.store.currentLang=e}get langs(){return this.isolate?this._langs:this.store.langs}set langs(e){this.isolate?this._langs=e:this.store.langs=e}get translations(){return this.isolate?this._translations:this.store.translations}set translations(e){this.isolate?this._translations=e:this.store.translations=e}constructor(e,t,i,s,a,f=!0,g=!1,c=!1,b){this.store=e,this.currentLoader=t,this.compiler=i,this.parser=s,this.missingTranslationHandler=a,this.useDefaultLang=f,this.isolate=g,this.extend=c,b&&this.setDefaultLang(b)}setDefaultLang(e){if(e===this.defaultLang)return;let t=this.retrieveTranslations(e);typeof t<"u"?(this.defaultLang==null&&(this.defaultLang=e),t.pipe(m(1)).subscribe(i=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(e===this.currentLang)return o(this.translations[e]);let t=this.retrieveTranslations(e);return typeof t<"u"?(this.currentLang||(this.currentLang=e),t.pipe(m(1)).subscribe(i=>{this.changeLang(e)}),t):(this.changeLang(e),o(this.translations[e]))}retrieveTranslations(e){let t;return(typeof this.translations[e]>"u"||this.extend)&&(this._translationRequests[e]=this._translationRequests[e]||this.getTranslation(e),t=this._translationRequests[e]),t}getTranslation(e){this.pending=!0;let t=this.currentLoader.getTranslation(e).pipe(V(1),m(1));return this.loadingTranslations=t.pipe(E(i=>this.compiler.compileTranslations(i,e)),V(1),m(1)),this.loadingTranslations.subscribe({next:i=>{this.translations[e]=this.extend&&this.translations[e]?S(S({},i),this.translations[e]):i,this.updateLangs(),this.pending=!1},error:i=>{this.pending=!1}}),t}setTranslation(e,t,i=!1){t=this.compiler.compileTranslations(t,e),(i||this.extend)&&this.translations[e]?this.translations[e]=W(this.translations[e],t):this.translations[e]=t,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){e.forEach(t=>{this.langs.indexOf(t)===-1&&this.langs.push(t)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(e,t,i){let s;if(t instanceof Array){let a={},f=!1;for(let g of t)a[g]=this.getParsedResult(e,g,i),u(a[g])&&(f=!0);if(f){let g=t.map(c=>u(a[c])?a[c]:o(a[c]));return K(g).pipe(E(c=>{let b={};return c.forEach((Z,Q)=>{b[t[Q]]=Z}),b}))}return a}if(e&&(s=this.parser.interpolate(this.parser.getValue(e,t),i)),typeof s>"u"&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(s=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],t),i)),typeof s>"u"){let a={key:t,translateService:this};typeof i<"u"&&(a.interpolateParams=i),s=this.missingTranslationHandler.handle(a)}return typeof s<"u"?s:t}get(e,t){if(!h(e)||!e.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe(U(i=>(i=this.getParsedResult(i,e,t),u(i)?i:o(i))));{let i=this.getParsedResult(this.translations[this.currentLang],e,t);return u(i)?i:o(i)}}getStreamOnTranslationChange(e,t){if(!h(e)||!e.length)throw new Error('Parameter "key" required');return _(A(()=>this.get(e,t)),this.onTranslationChange.pipe(P(i=>{let s=this.getParsedResult(i.translations,e,t);return typeof s.subscribe=="function"?s:o(s)})))}stream(e,t){if(!h(e)||!e.length)throw new Error('Parameter "key" required');return _(A(()=>this.get(e,t)),this.onLangChange.pipe(P(i=>{let s=this.getParsedResult(i.translations,e,t);return u(s)?s:o(s)})))}instant(e,t){if(!h(e)||!e.length)throw new Error('Parameter "key" required');let i=this.getParsedResult(this.translations[this.currentLang],e,t);if(u(i)){if(e instanceof Array){let s={};return e.forEach((a,f)=>{s[e[f]]=e[f]}),s}return e}else return i}set(e,t,i=this.currentLang){this.translations[i][e]=this.compiler.compile(t,i),this.updateLangs(),this.onTranslationChange.emit({lang:i,translations:this.translations[i]})}changeLang(e){this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),this.defaultLang==null&&this.changeDefaultLang(e)}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.getTranslation(e)}resetLang(e){this._translationRequests[e]=void 0,this.translations[e]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;if(e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,!(typeof e>"u"))return e.indexOf("-")!==-1&&(e=e.split("-")[0]),e.indexOf("_")!==-1&&(e=e.split("_")[0]),e}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;return e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,e}static \u0275fac=function(t){return new(t||n)(l(j),l(L),l(v),l(C),l(D),l(I),l(R),l(O),l(N))};static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})();var he=(()=>{class n{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(e,t){this.translate=e,this._ref=t}updateValue(e,t,i){let s=a=>{this.value=a!==void 0?a:e,this.lastKey=e,this._ref.markForCheck()};if(i){let a=this.translate.getParsedResult(i,e,t);u(a.subscribe)?a.subscribe(s):s(a)}this.translate.get(e,t).subscribe(s)}transform(e,...t){if(!e||!e.length)return e;if(y(e,this.lastKey)&&y(t,this.lastParams))return this.value;let i;if(h(t[0])&&t.length)if(typeof t[0]=="string"&&t[0].length){let s=t[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g,'"$2":').replace(/:(\s)?(\')(.*?)(\')/g,':"$3"');try{i=JSON.parse(s)}catch{throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${t[0]}`)}}else typeof t[0]=="object"&&!Array.isArray(t[0])&&(i=t[0]);return this.lastKey=e,this.lastParams=t,this.updateValue(e,i),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(s=>{this.lastKey&&s.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(e,i,s.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(s=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,i,s.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,i))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(t){return new(t||n)(F(x,16),F($,16))};static \u0275pipe=H({name:"translate",type:n,pure:!1});static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})(),fe=(()=>{class n{static forRoot(e={}){return{ngModule:n,providers:[e.loader||{provide:L,useClass:q},e.compiler||{provide:v,useClass:z},e.parser||{provide:C,useClass:X},e.missingTranslationHandler||{provide:D,useClass:J},j,{provide:R,useValue:e.isolate},{provide:I,useValue:e.useDefaultLang},{provide:O,useValue:e.extend},{provide:N,useValue:e.defaultLanguage},x]}}static forChild(e={}){return{ngModule:n,providers:[e.loader||{provide:L,useClass:q},e.compiler||{provide:v,useClass:z},e.parser||{provide:C,useClass:X},e.missingTranslationHandler||{provide:D,useClass:J},{provide:R,useValue:e.isolate},{provide:I,useValue:e.useDefaultLang},{provide:O,useValue:e.extend},{provide:N,useValue:e.defaultLanguage},x]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=B({type:n});static \u0275inj=G({})}return n})();export{L as a,x as b,he as c,fe as d};
