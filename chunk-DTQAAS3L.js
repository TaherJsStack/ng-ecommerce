import{D as P,J as ge,N as O,P as A,V as ue,Z as R,b as H,d as F,ga as B,ia as V,ja as E,k as ce,ka as $,la as y,ma as fe,v as N,y as he,z as pe}from"./chunk-XZCLXVAJ.js";import{A as le,B as de,w as ae}from"./chunk-ZQQG3XOR.js";import{Bc as w,Da as M,Ea as b,Ga as U,Ka as X,Sc as se,Tc as oe,Vc as C,Yc as re,cd as W,ea as v,fa as T,gb as Y,gc as K,hc as J,ja as h,nc as Q,pb as k,pc as ee,qb as z,qc as te,rb as I,rc as ie,sc as ne,ta as q,tb as x,ua as G,yb as Z}from"./chunk-JEBMXVCV.js";import{a as m}from"./chunk-GAL4ENT6.js";var me=(()=>{class n extends y{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(n)))(i||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),L=(()=>{class n{document=h(G);platformId=h(X);el=h(U);injector=h(q);cd=h(re);renderer=h(Y);config=h(fe);baseComponentStyle=h(me);baseStyle=h(y);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=R("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,t="",i={}){return ue(e,t,i)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!de(this.platformId)){let{dt:t}=e;t&&t.currentValue&&(this._loadScopedThemeStyles(t.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(t.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>V.off("theme:change",e))}_loadStyles(){let e=()=>{$.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),$.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!$.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),$.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!E.isStyleNameLoaded("common")){let{primitive:e,semantic:t,global:i,style:s}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,m({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(t?.css,m({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,m({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(m({name:"global-style"},this.styleOptions),s),E.setLoadedStyleName("common")}if(!E.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:t}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,m({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(m({name:`${this.componentStyle?.name}-style`},this.styleOptions),t),E.setLoadedStyleName(this.componentStyle?.name)}if(!E.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,m({name:"layer-order",first:!0},this.styleOptions)),E.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:t}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(t,m({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){$.clearLoadedStyleNames(),V.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,t){let i=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:e}sx(e){let t=this.componentStyle?.inlineStyles?.[e];return typeof t=="function"?t({instance:this}):typeof t=="string"?t:m({},t)}get parent(){return this.parentInstance}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,inputs:{dt:"dt"},features:[w([me,y]),M]})}return n})();var we=({dt:n})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${n("badge.border.radius")};
    justify-content: center;
    padding: ${n("badge.padding")};
    background: ${n("badge.primary.background")};
    color: ${n("badge.primary.color")};
    font-size: ${n("badge.font.size")};
    font-weight: ${n("badge.font.weight")};
    min-width: ${n("badge.min.width")};
    height: ${n("badge.height")};
    line-height: ${n("badge.height")};
}

.p-badge-dot {
    width: ${n("badge.dot.size")};
    min-width: ${n("badge.dot.size")};
    height: ${n("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${n("badge.secondary.background")};
    color: ${n("badge.secondary.color")};
}

.p-badge-success {
    background: ${n("badge.success.background")};
    color: ${n("badge.success.color")};
}

.p-badge-info {
    background: ${n("badge.info.background")};
    color: ${n("badge.info.color")};
}

.p-badge-warn {
    background: ${n("badge.warn.background")};
    color: ${n("badge.warn.color")};
}

.p-badge-danger {
    background: ${n("badge.danger.background")};
    color: ${n("badge.danger.color")};
}

.p-badge-contrast {
    background: ${n("badge.contrast.background")};
    color: ${n("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${n("badge.sm.font.size")};
    min-width: ${n("badge.sm.min.width")};
    height: ${n("badge.sm.height")};
    line-height: ${n("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${n("badge.lg.font.size")};
    min-width: ${n("badge.lg.min.width")};
    height: ${n("badge.lg.height")};
    line-height: ${n("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${n("badge.xl.font.size")};
    min-width: ${n("badge.xl.min.width")};
    height: ${n("badge.xl.height")};
    line-height: ${n("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Ce={root:({props:n,instance:g})=>["p-badge p-component",{"p-badge-circle":A(n.value)&&String(n.value).length===1,"p-badge-dot":O(n.value)&&!g.$slots.default,"p-badge-sm":n.size==="small","p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge","p-badge-info":n.severity==="info","p-badge-success":n.severity==="success","p-badge-warn":n.severity==="warn","p-badge-danger":n.severity==="danger","p-badge-secondary":n.severity==="secondary","p-badge-contrast":n.severity==="contrast"}]},be=(()=>{class n extends y{name="badge";theme=we;classes=Ce;static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(n)))(i||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})();var Ee=(()=>{class n extends L{styleClass=C();style=C();badgeSize=C();size=C();severity=C();value=C();badgeDisabled=C(!1,{transform:W});_componentStyle=h(be);containerClass=se(()=>{let e="p-badge p-component";return A(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),O(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(n)))(i||n)}})();static \u0275cmp=k({type:n,selectors:[["p-badge"]],hostVars:6,hostBindings:function(t,i){t&2&&(ee(i.style()),te(i.containerClass()),Q("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[w([be]),x],decls:1,vars:1,template:function(t,i){t&1&&ie(0),t&2&&ne(i.value())},dependencies:[ae,B],encapsulation:2,changeDetection:0})}return n})(),tt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=T({imports:[Ee,B,B]})}return n})();var xe=(()=>{class n{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,t){e&&t&&(e.classList?e.classList.add(t):e.className+=" "+t)}static addMultipleClasses(e,t){if(e&&t)if(e.classList){let i=t.trim().split(" ");for(let s=0;s<i.length;s++)e.classList.add(i[s])}else{let i=t.split(" ");for(let s=0;s<i.length;s++)e.className+=" "+i[s]}}static removeClass(e,t){e&&t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,t){e&&t&&[t].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(s=>this.removeClass(e,s)))}static hasClass(e,t){return e&&t?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}static find(e,t){return Array.from(e.querySelectorAll(t))}static findSingle(e,t){return this.isElement(e)?e.querySelector(t):null}static index(e){let t=e.parentNode.childNodes,i=0;for(var s=0;s<t.length;s++){if(t[s]==e)return i;t[s].nodeType==1&&i++}return-1}static indexWithinGroup(e,t){let i=e.parentNode?e.parentNode.childNodes:[],s=0;for(var o=0;o<i.length;o++){if(i[o]==e)return s;i[o].attributes&&i[o].attributes[t]&&i[o].nodeType==1&&s++}return-1}static appendOverlay(e,t,i="self"){i!=="self"&&e&&t&&this.appendChild(e,t)}static alignOverlay(e,t,i="self",s=!0){e&&t&&(s&&(e.style.minWidth=`${n.getOuterWidth(t)}px`),i==="self"?this.relativePosition(e,t):this.absolutePosition(e,t))}static relativePosition(e,t,i=!0){let s=D=>{if(D)return getComputedStyle(D).getPropertyValue("position")==="relative"?D:s(D.parentElement)},o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=t.offsetHeight,a=t.getBoundingClientRect(),p=this.getWindowScrollTop(),l=this.getWindowScrollLeft(),d=this.getViewport(),c=s(e)?.getBoundingClientRect()||{top:-1*p,left:-1*l},f,S;a.top+r+o.height>d.height?(f=a.top-c.top-o.height,e.style.transformOrigin="bottom",a.top+f<0&&(f=-1*a.top)):(f=r+a.top-c.top,e.style.transformOrigin="top");let _=a.left+o.width-d.width,ve=a.left-c.left;o.width>d.width?S=(a.left-c.left)*-1:_>0?S=ve-_:S=a.left-c.left,e.style.top=f+"px",e.style.left=S+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,t,i=!0){let s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),o=s.height,r=s.width,a=t.offsetHeight,p=t.offsetWidth,l=t.getBoundingClientRect(),d=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),c=this.getViewport(),f,S;l.top+a+o>c.height?(f=l.top+d-o,e.style.transformOrigin="bottom",f<0&&(f=d)):(f=a+l.top+d,e.style.transformOrigin="top"),l.left+r>c.width?S=Math.max(0,l.left+u+p-r):S=l.left+u,e.style.top=f+"px",e.style.left=S+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,t=[]){return e.parentNode===null?t:this.getParents(e.parentNode,t.concat([e.parentNode]))}static getScrollableParents(e){let t=[];if(e){let i=this.getParents(e),s=/(auto|scroll)/,o=r=>{let a=window.getComputedStyle(r,null);return s.test(a.getPropertyValue("overflow"))||s.test(a.getPropertyValue("overflowX"))||s.test(a.getPropertyValue("overflowY"))};for(let r of i){let a=r.nodeType===1&&r.dataset.scrollselectors;if(a){let p=a.split(",");for(let l of p){let d=this.findSingle(r,l);d&&o(d)&&t.push(d)}}r.nodeType!==9&&o(r)&&t.push(r)}}return t}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t}static getHiddenElementDimensions(e){let t={};return e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",t}static scrollInView(e,t){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),s=i?parseFloat(i):0,o=getComputedStyle(e).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,a=e.getBoundingClientRect(),l=t.getBoundingClientRect().top+document.body.scrollTop-(a.top+document.body.scrollTop)-s-r,d=e.scrollTop,u=e.clientHeight,c=this.getOuterHeight(t);l<0?e.scrollTop=d+l:l+c>u&&(e.scrollTop=d+l-u+c)}static fadeIn(e,t){e.style.opacity=0;let i=+new Date,s=0,o=function(){s=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/t,e.style.opacity=s,i=+new Date,+s<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}static fadeOut(e,t){var i=1,s=50,o=t,r=s/o;let a=setInterval(()=>{i=i-r,i<=0&&(i=0,clearInterval(a)),e.style.opacity=i},s)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,t){var i=Element.prototype,s=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(o){return[].indexOf.call(document.querySelectorAll(o),this)!==-1};return s.call(e,t)}static getOuterWidth(e,t){let i=e.offsetWidth;if(t){let s=getComputedStyle(e);i+=parseFloat(s.marginLeft)+parseFloat(s.marginRight)}return i}static getHorizontalPadding(e){let t=getComputedStyle(e);return parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)}static getHorizontalMargin(e){let t=getComputedStyle(e);return parseFloat(t.marginLeft)+parseFloat(t.marginRight)}static innerWidth(e){let t=e.offsetWidth,i=getComputedStyle(e);return t+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}static width(e){let t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}static getInnerHeight(e){let t=e.offsetHeight,i=getComputedStyle(e);return t+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),t}static getOuterHeight(e,t){let i=e.offsetHeight;if(t){let s=getComputedStyle(e);i+=parseFloat(s.marginTop)+parseFloat(s.marginBottom)}return i}static getHeight(e){let t=e.offsetHeight,i=getComputedStyle(e);return t-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),t}static getWidth(e){let t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),t}static getViewport(){let e=window,t=document,i=t.documentElement,s=t.getElementsByTagName("body")[0],o=e.innerWidth||i.clientWidth||s.clientWidth,r=e.innerHeight||i.clientHeight||s.clientHeight;return{width:o,height:r}}static getOffset(e){var t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,t){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(t,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return!0;var i=e.indexOf("Trident/");if(i>0){var s=e.indexOf("rv:");return!0}var o=e.indexOf("Edge/");return o>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,t){if(this.isElement(t))t.appendChild(e);else if(t&&t.el&&t.el.nativeElement)t.el.nativeElement.appendChild(e);else throw"Cannot append "+t+" to "+e}static removeChild(e,t){if(this.isElement(t))t.removeChild(e);else if(t.el&&t.el.nativeElement)t.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+t}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let t=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let i=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let t=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t}static invokeElementMethod(e,t,i){e[t].apply(e,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,t){e&&document.activeElement!==e&&e.focus(t)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,t=""){let i=this.find(e,this.getFocusableSelectorString(t)),s=[];for(let o of i){let r=getComputedStyle(o);this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden"&&s.push(o)}return s}static getFocusableElement(e,t=""){let i=this.findSingle(e,this.getFocusableSelectorString(t));if(i){let s=getComputedStyle(i);if(this.isVisible(i)&&s.display!="none"&&s.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,t=""){let i=this.getFocusableElements(e,t);return i.length>0?i[0]:null}static getLastFocusableElement(e,t){let i=this.getFocusableElements(e,t);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,t=!1){let i=n.getFocusableElements(e),s=0;if(i&&i.length>0){let o=i.indexOf(i[0].ownerDocument.activeElement);t?o==-1||o===0?s=i.length-1:s=o-1:o!=-1&&o!==i.length-1&&(s=o+1)}return i[s]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,t){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return t?.nextElementSibling;case"@prev":return t?.previousElementSibling;case"@parent":return t?.parentElement;case"@grandparent":return t?.parentElement.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let o=(r=>!!(r&&r.constructor&&r.call&&r.apply))(e)?e():e;return o&&o.nodeType===9||this.isExist(o)?o:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,t){if(e){let i=e.getAttribute(t);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,t={},...i){if(e){let s=document.createElement(e);return this.setAttributes(s,t),s.append(...i),s}}static setAttribute(e,t="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(t,i)}static setAttributes(e,t={}){if(this.isElement(e)){let i=(s,o)=>{let r=e?.$attrs?.[s]?[e?.$attrs?.[s]]:[];return[o].flat().reduce((a,p)=>{if(p!=null){let l=typeof p;if(l==="string"||l==="number")a.push(p);else if(l==="object"){let d=Array.isArray(p)?i(s,p):Object.entries(p).map(([u,c])=>s==="style"&&(c||c===0)?`${u.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${c}`:c?u:void 0);a=d.length?a.concat(d.filter(u=>!!u)):a}}return a},r)};Object.entries(t).forEach(([s,o])=>{if(o!=null){let r=s.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),o):s==="pBind"?this.setAttributes(e,o):(o=s==="class"?[...new Set(i("class",o))].join(" ").trim():s==="style"?i("style",o).join(";").trim():o,(e.$attrs=e.$attrs||{})&&(e.$attrs[s]=o),e.setAttribute(s,o))}})}}static isFocusableElement(e,t=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`):!1}}return n})(),ye=class{element;listener;scrollableParents;constructor(g,e=()=>{}){this.element=g,this.listener=e}bindScrollListener(){this.scrollableParents=xe.getScrollableParents(this.element);for(let g=0;g<this.scrollableParents.length;g++)this.scrollableParents[g].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let g=0;g<this.scrollableParents.length;g++)this.scrollableParents[g].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Fe=({dt:n})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${n("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,$e={root:"p-ink"},Se=(()=>{class n extends y{name="ripple";theme=Fe;classes=$e;static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(n)))(i||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})();var pt=(()=>{class n extends L{zone=h(Z);_componentStyle=h(Se);animationListener;mouseDownListener;timeout;constructor(){super(),oe(()=>{le(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(F(t,"p-ink-active"),!N(t)&&!P(t)){let r=Math.max(ce(this.el.nativeElement),pe(this.el.nativeElement));t.style.height=r+"px",t.style.width=r+"px"}let i=he(this.el.nativeElement),s=e.pageX-i.left+this.document.body.scrollTop-P(t)/2,o=e.pageY-i.top+this.document.body.scrollLeft-N(t)/2;this.renderer.setStyle(t,"top",o+"px"),this.renderer.setStyle(t,"left",s+"px"),H(t,"p-ink-active"),this.timeout=setTimeout(()=>{let r=this.getInk();r&&F(r,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&F(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),F(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ge(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=I({type:n,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[w([Se]),x]})}return n})(),gt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=T({})}return n})();var Le=["*"],Ie=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Oe=(()=>{class n extends y{name="baseicon";inlineStyles=Ie;static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(n)))(i||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})();var xt=(()=>{class n extends L{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=O(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(n)))(i||n)}})();static \u0275cmp=k({type:n,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",W],styleClass:"styleClass"},features:[w([Oe]),x],ngContentSelectors:Le,decls:1,vars:0,template:function(t,i){t&1&&(K(),J(0))},encapsulation:2,changeDetection:0})}return n})();export{L as a,xe as b,ye as c,Ee as d,tt as e,xt as f,pt as g,gt as h};
