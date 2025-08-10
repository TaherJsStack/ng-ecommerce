import{a as Te,b as Ce}from"./chunk-QWUWUJU2.js";import"./chunk-3DGDPFJK.js";import{a as Ie,b as xe}from"./chunk-A7RSOKQF.js";import{a as ve,d as he,e as ye,g as ke}from"./chunk-DTQAAS3L.js";import{D as T,U as _e,fa as Q,ga as q,la as ge,q as de,r as fe,s as O,y as W}from"./chunk-XZCLXVAJ.js";import{p as me,r as P,s as V,t as be,x as D}from"./chunk-GAL7N4MA.js";import{A as U,i as se,k as ce,l as B,p as pe,q as ue,w as R}from"./chunk-ZQQG3XOR.js";import{$b as L,Bc as ie,Cc as ae,Dc as oe,Ea as Y,Ec as re,Fc as le,Kb as g,Nc as E,Rb as r,Sb as p,Tb as u,Ub as d,Yb as C,Za as H,Zb as w,_a as A,_b as ne,cb as s,cd as j,dc as $,ea as G,fa as J,fc as l,ic as S,ja as x,jc as v,kc as f,lc as _,mc as M,pb as F,qa as h,qb as Z,qc as k,ra as y,rc as I,sc as N,tb as ee,tc as z,vb as b,xb as te,ya as X}from"./chunk-JEBMXVCV.js";import"./chunk-GAL4ENT6.js";var Ae=["item"],Fe=["previousicon"],Be=["nexticon"],Re=["content"],Pe=["navbar"],Ve=["inkbar"],De=["prevBtn"],Oe=["nextBtn"],Qe=["tabLink"],qe=["tab"],He=t=>({"p-tabmenu p-component":!0,"p-tabmenu-scrollable":t}),Ne=(t,o,e)=>({"p-tabmenuitem":!0,"p-disabled":t,"p-tabmenuitem-active":o,"p-hidden":e}),ze=(t,o)=>({$implicit:t,index:o}),je=()=>({exact:!1});function Ue(t,o){t&1&&d(0,"ChevronLeftIcon"),t&2&&g("aria-hidden",!0)}function We(t,o){}function Ke(t,o){t&1&&b(0,We,0,0,"ng-template")}function Ge(t,o){if(t&1){let e=L();p(0,"button",17,3),$("click",function(){h(e);let i=l();return y(i.navBackward())}),b(2,Ue,1,1,"ChevronLeftIcon",18)(3,Ke,1,0,null,19),u()}if(t&2){let e=l();s(2),r("ngIf",!e.previousIconTemplate&&!e._previousIconTemplate),s(),r("ngTemplateOutlet",e.previousIconTemplate||e._previousIconTemplate)}}function Je(t,o){if(t&1&&d(0,"span",28),t&2){let e=l(2).$implicit;r("ngClass",e.icon)("ngStyle",e.iconStyle)}}function Xe(t,o){if(t&1&&(p(0,"span",29),I(1),u()),t&2){let e=l(2).$implicit,n=l();s(),N(n.getItemProp(e,"label"))}}function Ye(t,o){if(t&1&&d(0,"span",30),t&2){let e=l(2).$implicit,n=l();r("innerHTML",n.getItemProp(e,"label"),H)}}function Ze(t,o){if(t&1&&d(0,"p-badge",31),t&2){let e=l(2).$implicit,n=l();r("styleClass",e.badgeStyleClass)("value",n.getItemProp(e,"badge"))}}function et(t,o){if(t&1&&(p(0,"a",24,5),C(2),b(3,Je,1,2,"span",25)(4,Xe,2,1,"span",26)(5,Ye,1,1,"ng-template",null,6,E)(7,Ze,1,2,"p-badge",27),w(),u()),t&2){let e=M(6),n=l().$implicit,i=l();r("target",i.getItemProp(n,"target"))("tabindex",-1),g("href",i.getItemProp(n,"url"),A)("id",i.getItemProp(n,"id"))("aria-disabled",i.disabled(n)),s(3),r("ngIf",n.icon),s(),r("ngIf",n.escape!==!1)("ngIfElse",e),s(3),r("ngIf",n.badge)}}function tt(t,o){if(t&1&&d(0,"span",28),t&2){let e=l(2).$implicit;r("ngClass",e.icon)("ngStyle",e.iconStyle),g("aria-hidden",!0)}}function nt(t,o){if(t&1&&(p(0,"span",29),I(1),u()),t&2){let e=l(2).$implicit,n=l();s(),N(n.getItemProp(e,"label"))}}function it(t,o){if(t&1&&d(0,"span",30),t&2){let e=l(2).$implicit,n=l();r("innerHTML",n.getItemProp(e,"label"),H)}}function at(t,o){if(t&1&&d(0,"p-badge",31),t&2){let e=l(2).$implicit,n=l();r("styleClass",e.badgeStyleClass)("value",n.getItemProp(e,"badge"))}}function ot(t,o){if(t&1&&(p(0,"a",32,5),C(2),b(3,tt,1,3,"span",25)(4,nt,2,1,"span",26)(5,it,1,1,"ng-template",null,7,E)(7,at,1,2,"p-badge",27),w(),u()),t&2){let e=M(6),n=l().$implicit,i=l();r("routerLink",n.routerLink)("queryParams",n.queryParams)("routerLinkActive","p-menuitem-link-active")("routerLinkActiveOptions",n.routerLinkActiveOptions||ae(18,je))("target",n.target)("tabindex",-1)("fragment",n.fragment)("queryParamsHandling",n.queryParamsHandling)("preserveFragment",n.preserveFragment)("skipLocationChange",n.skipLocationChange)("replaceUrl",n.replaceUrl)("state",n.state),g("id",i.getItemProp(n,"id"))("aria-disabled",i.disabled(n)),s(3),r("ngIf",n.icon),s(),r("ngIf",n.escape!==!1)("ngIfElse",e),s(3),r("ngIf",n.badge)}}function rt(t,o){t&1&&ne(0)}function lt(t,o){if(t&1){let e=L();p(0,"li",20,4),$("click",function(i){let a=h(e).$implicit,c=l();return y(c.itemClick(i,a))})("keydown",function(i){let a=h(e),c=a.$implicit,m=a.index,$e=l();return y($e.onKeydownItem(i,m,c))})("focus",function(){let i=h(e).$implicit,a=l();return y(a.onMenuItemFocus(i))}),b(2,et,8,9,"a",21)(3,ot,8,19,"a",22)(4,rt,1,0,"ng-container",23),u()}if(t&2){let e=o.$implicit,n=o.index,i=l();k(e.styleClass),r("ngStyle",e.style)("ngClass",le(13,Ne,i.getItemProp(e,"disabled"),i.isActive(e),e.visible===!1))("tooltipOptions",e.tooltipOptions),g("data-p-disabled",i.disabled(e))("data-p-highlight",i.focusedItemInfo()===e)("aria-label",i.getItemProp(e,"label"))("tabindex",i.disabled(e)?-1:0),s(2),r("ngIf",!e.routerLink&&!i.itemTemplate&&!i._itemTemplate),s(),r("ngIf",e.routerLink&&!i.itemTemplate&&!i._itemTemplate),s(),r("ngTemplateOutlet",i.itemTemplate)("ngTemplateOutletContext",re(17,ze,e,n))}}function st(t,o){t&1&&d(0,"ChevronRightIcon"),t&2&&g("aria-hidden",!0)}function ct(t,o){}function pt(t,o){t&1&&b(0,ct,0,0,"ng-template")}function ut(t,o){if(t&1){let e=L();p(0,"button",33,8),$("click",function(){h(e);let i=l();return y(i.navForward())}),b(2,st,1,1,"ChevronRightIcon",18)(3,pt,1,0,null,19),u()}if(t&2){let e=l();s(2),r("ngIf",!e.previousIconTemplate&&!e._previousIconTemplate),s(),r("ngTemplateOutlet",e.nextIconTemplate||e._nextIconTemplate)}}var mt=({dt:t})=>`

/* For PrimeNG */
.p-tabmenu.p-component {
    display: flex;
    flex-direction: column;
}

.p-tabmenu-nav-container {
    display: flex;
    position: relative;
}

.p-tabmenu.p-tabmenu-scrollable .p-tabmenu-nav-container {
    overflow: hidden;
}

.p-tabmenu-nav-content {
    flex-grow: 1;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tabmenu-nav {
    padding: 0;
    margin: 0;
    list-style-type: none;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    background: ${t("tabs.tablist.background")};
    border-style: solid;
    border-color: ${t("tabs.tablist.border.color")};
    border-width: ${t("tabs.tablist.border.width")};
}

.p-tabmenuitem {
    display: flex;
    flex-shrink: 0;
    cursor: pointer;
    position: relative;
    border-style: solid;
    background: ${t("tabs.tab.background")};
    border-width: ${t("tabs.tab.border.width")};
    border-color: ${t("tabs.tab.border.color")};
    padding: ${t("tabs.tab.padding")};
    transition: background ${t("tabs.transition.duration")}, border-color ${t("tabs.transition.duration")}, color ${t("tabs.transition.duration")}, outline-color ${t("tabs.transition.duration")}, box-shadow ${t("tabs.transition.duration")};
    margin: ${t("tabs.tab.margin")};
    outline-color: transparent;
}

.p-tabmenuitem > .p-menuitem-link {
    white-space: nowrap;
    user-select: none;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    gap: ${t("tabs.tab.gap")};
    color: ${t("tabs.tab.color")};
    font-weight: ${t("tabs.tab.font.weight")};
}

.p-tabmenuitem.p-tabmenuitem-active .p-menuitem-link {
    color: ${t("tabs.tab.active.color")};
}

.p-tabmenuitem:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: ${t("tabs.tab.focus.ring.shadow")};
    outline: ${t("tabs.tab.focus.ring.width")} ${t("tabs.tab.focus.ring.style")} ${t("tabs.tab.focus.ring.color")};
    outline-offset: ${t("tabs.tab.focus.ring.offset")};
}

.p-tabmenuitem:not(.p-tabmenuitem-active):not(.p-disabled):hover {
    background: ${t("tabs.tab.hover.background")};
    border-color: ${t("tabs.tab.hover.border.color")};
    color: ${t("tabs.tab.hover.color")};
}

.p-tabmenuitem-active {
    background: ${t("tabs.tab.active.background")};
    border-color: ${t("tabs.tab.active.border.color")};
    color: ${t("tabs.tab.active.color")};
}

.p-tabmenuitem-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: ${t("tabs.active.bar.bottom")};
    height: ${t("tabs.active.bar.height")};
    background: ${t("tabs.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}

.p-tabmenu-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${t("tabs.nav.button.background")};
    color: ${t("tabs.nav.button.color")};
    width: ${t("tabs.nav.button.width")};
    transition: color ${t("tabs.transition.duration")}, outline-color ${t("tabs.transition.duration")}, box-shadow ${t("tabs.transition.duration")};
    box-shadow: ${t("tabs.nav.button.shadow")};
    outline-color: transparent;
    cursor: pointer;
}

.p-tabmenu-nav-button:focus-visible {
    z-index: 1;
    box-shadow: ${t("tabs.nav.button.focus.ring.shadow")};
    outline: ${t("tabs.nav.button.focus.ring.width")} ${t("tabs.nav.button.focus.ring.style")} ${t("tabs.nav.button.focus.ring.color")};
    outline-offset: ${t("tabs.nav.button.focus.ring.offset")};
}

.p-tabmenu-nav-button:hover {
    color: ${t("tabs.nav.button.hover.color")};
}

.p-tabmenu-nav-prev-button {
    left: 0;
}

.p-tabmenu-nav-next-button {
    right: 0;
}`,we=(()=>{class t extends ge{name="tabs";theme=mt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=Y(t)))(i||t)}})();static \u0275prov=G({token:t,factory:t.\u0275fac})}return t})();var K=(()=>{class t extends ve{set model(e){this._model=e,this._focusableItems=(this._model||[]).reduce((n,i)=>(n.push(i),n),[])}get model(){return this._model}set activeItem(e){this._activeItem=e,this.activeItemChange.emit(e),this.tabChanged=!0}get activeItem(){return this._activeItem}scrollable;popup;style;styleClass;ariaLabel;ariaLabelledBy;activeItemChange=new te;content;navbar;inkbar;prevBtn;nextBtn;tabLink;tab;itemTemplate;previousIconTemplate;nextIconTemplate;templates;_itemTemplate;_nextIconTemplate;_previousIconTemplate;tabChanged;backwardIsDisabled=!0;forwardIsDisabled=!1;timerIdForInitialAutoScroll=null;_focusableItems;_model;_activeItem;focusedItemInfo=X(null);router=x(P);route=x(me);_componentStyle=x(we);get focusableItems(){return(!this._focusableItems||!this._focusableItems.length)&&(this._focusableItems=(this.model||[]).reduce((e,n)=>(e.push(n),e),[])),this._focusableItems}constructor(){super(),console.log("TabMenu is deprecated as of v18. Use tabs component instead https://primeng.org/tabs#tabmenu")}ngAfterViewInit(){super.ngAfterViewInit(),U(this.platformId)&&(this.updateInkBar(),this.initAutoScrollForActiveItem(),this.initButtonState())}ngAfterViewChecked(){U(this.platformId)&&(this.updateInkBar(),this.tabChanged=!1)}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"nexticon":this._nextIconTemplate=e.template;break;case"previousicon":this._previousIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngOnDestroy(){this.clearAutoScrollHandler(),super.ngOnDestroy()}isActive(e){if(e.routerLink){let n=Array.isArray(e.routerLink)?e.routerLink:[e.routerLink];return this.router.isActive(this.router.createUrlTree(n,{relativeTo:this.route}).toString(),e.routerLinkActiveOptions?.exact??e.routerLinkActiveOptions??!1)}return e===this.activeItem}getItemProp(e,n){return e?_e(e[n]):void 0}visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1}disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled}onMenuItemFocus(e){this.focusedItemInfo.set(e)}itemClick(e,n){if(n.disabled){e.preventDefault();return}!n.url&&!n.routerLink&&e.preventDefault(),n.command&&n.command({originalEvent:e,item:n}),this.activeItem=n,this.activeItemChange.emit(n),this.tabChanged=!0,this.cd.markForCheck()}onKeydownItem(e,n,i){let a=n,c={},m=this.tab.toArray();switch(e.code){case"ArrowRight":c=this.findNextItem(m,a),a=c.i,this.changeFocusedTab(e,c.nextItem,a);break;case"ArrowLeft":c=this.findPrevItem(m,a),a=c.i,this.changeFocusedTab(e,c.prevItem,a);break;case"End":c=this.findPrevItem(m,this.model.length),a=c.i,this.changeFocusedTab(e,c.prevItem,a),e.preventDefault();break;case"Home":c=this.findNextItem(m,-1),a=c.i,this.changeFocusedTab(e,c.nextItem,a),e.preventDefault();break;case"Space":case"Enter":this.itemClick(e,i);break;case"Tab":this.onTabKeyDown(m);break;default:break}m[a]&&m[n]&&(m[n].nativeElement.tabIndex="-1",m[a].nativeElement.tabIndex="0",m[a].nativeElement.focus()),this.cd.markForCheck()}onTabKeyDown(e){e.forEach(n=>{n.nativeElement.tabIndex=O(n.nativeElement.parentElement,"data-p-highlight")?"0":"-1"})}changeFocusedTab(e,n,i){n&&(fe(n),n.scrollIntoView({block:"nearest"}),this.itemClick(e,n))}findNextItem(e,n){let i=n+1;if(i>=e.length)return{nextItem:e[e.length],i:e.length};let a=e[i];return a?O(a.nativeElement,"data-p-disabled")?this.findNextItem(e,i):{nextItem:a.nativeElement,i}:null}findPrevItem(e,n){let i=n-1;if(i<0)return{prevItem:e[0],i:0};let a=e[i];return a?O(a.nativeElement,"data-p-disabled")?this.findPrevItem(e,i):{prevItem:a.nativeElement,i}:null}updateInkBar(){let e=de(this.navbar?.nativeElement,"li.p-tabmenu-active");e&&(this.inkbar.nativeElement.style.width=T(e)+"px",this.inkbar.nativeElement.style.left=W(e).left-W(this.navbar?.nativeElement).left+"px")}getVisibleButtonWidths(){return[this.prevBtn?.nativeElement,this.nextBtn?.nativeElement].reduce((e,n)=>n?e+T(n):e,0)}updateButtonState(){let e=this.content?.nativeElement,{scrollLeft:n,scrollWidth:i}=e,a=T(e);this.backwardIsDisabled=n===0,this.forwardIsDisabled=parseInt(n)===i-a}updateScrollBar(e){let n=this.navbar?.nativeElement.children[e];n&&n.scrollIntoView({block:"nearest"})}onScroll(e){this.scrollable&&this.updateButtonState(),e.preventDefault()}navBackward(){let e=this.content?.nativeElement,n=T(e)-this.getVisibleButtonWidths(),i=e.scrollLeft-n;e.scrollLeft=i<=0?0:i}navForward(){let e=this.content?.nativeElement,n=T(e)-this.getVisibleButtonWidths(),i=e.scrollLeft+n,a=e.scrollWidth-n;e.scrollLeft=i>=a?a:i}initAutoScrollForActiveItem(){this.scrollable&&(this.clearAutoScrollHandler(),this.timerIdForInitialAutoScroll=setTimeout(()=>{let e=this.model.findIndex(n=>this.isActive(n));e!==-1&&this.updateScrollBar(e)}))}clearAutoScrollHandler(){this.timerIdForInitialAutoScroll&&(clearTimeout(this.timerIdForInitialAutoScroll),this.timerIdForInitialAutoScroll=null)}initButtonState(){this.scrollable&&Promise.resolve().then(()=>{this.updateButtonState(),this.cd.markForCheck()})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=F({type:t,selectors:[["p-tabMenu"],["p-tabmenu"]],contentQueries:function(n,i,a){if(n&1&&(S(a,Ae,4),S(a,Fe,4),S(a,Be,4),S(a,Q,4)),n&2){let c;f(c=_())&&(i.itemTemplate=c.first),f(c=_())&&(i.previousIconTemplate=c.first),f(c=_())&&(i.nextIconTemplate=c.first),f(c=_())&&(i.templates=c)}},viewQuery:function(n,i){if(n&1&&(v(Re,5),v(Pe,5),v(Ve,5),v(De,5),v(Oe,5),v(Qe,5),v(qe,5)),n&2){let a;f(a=_())&&(i.content=a.first),f(a=_())&&(i.navbar=a.first),f(a=_())&&(i.inkbar=a.first),f(a=_())&&(i.prevBtn=a.first),f(a=_())&&(i.nextBtn=a.first),f(a=_())&&(i.tabLink=a),f(a=_())&&(i.tab=a)}},inputs:{model:"model",activeItem:"activeItem",scrollable:[2,"scrollable","scrollable",j],popup:[2,"popup","popup",j],style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{activeItemChange:"activeItemChange"},features:[ie([we]),ee],decls:11,vars:12,consts:[["content",""],["navbar",""],["inkbar",""],["prevBtn",""],["tab",""],["tabLink",""],["htmlLabel",""],["htmlRouteLabel",""],["nextBtn",""],[3,"ngClass","ngStyle"],[1,"p-tabmenu-nav-container"],["class","p-tabmenu-nav-prev-button p-tabmenu-nav-button","type","button","role","navigation","pRipple","",3,"click",4,"ngIf"],[1,"p-tabmenu-nav-content",3,"scroll"],["role","menubar",1,"p-tabmenu-nav","p-reset"],["role","menuitem","pTooltip","","pRipple","",3,"ngStyle","class","ngClass","tooltipOptions","click","keydown","focus",4,"ngFor","ngForOf"],["role","presentation",1,"p-tabmenuitem-active-bar"],["class","p-tabmenu-nav-next-button p-tabmenu-nav-button","type","button","role","navigation","pRipple","",3,"click",4,"ngIf"],["type","button","role","navigation","pRipple","",1,"p-tabmenu-nav-prev-button","p-tabmenu-nav-button",3,"click"],[4,"ngIf"],[4,"ngTemplateOutlet"],["role","menuitem","pTooltip","","pRipple","",3,"click","keydown","focus","ngStyle","ngClass","tooltipOptions"],["class","p-menuitem-link","role","presentation",3,"target","tabindex",4,"ngIf"],["role","presentation","class","p-menuitem-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","tabindex","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["role","presentation",1,"p-menuitem-link",3,"target","tabindex"],["class","p-menuitem-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-menuitem-text",4,"ngIf","ngIfElse"],["size","small",3,"styleClass","value",4,"ngIf"],[1,"p-menuitem-icon",3,"ngClass","ngStyle"],[1,"p-menuitem-text"],[1,"p-menuitem-text",3,"innerHTML"],["size","small",3,"styleClass","value"],["role","presentation",1,"p-menuitem-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","tabindex","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["type","button","role","navigation","pRipple","",1,"p-tabmenu-nav-next-button","p-tabmenu-nav-button",3,"click"]],template:function(n,i){if(n&1){let a=L();p(0,"div",9)(1,"div",10),b(2,Ge,4,2,"button",11),p(3,"div",12,0),$("scroll",function(m){return h(a),y(i.onScroll(m))}),p(5,"ul",13,1),b(7,lt,5,20,"li",14),d(8,"li",15,2),u()(),b(10,ut,4,2,"button",16),u()()}n&2&&(k(i.styleClass),r("ngClass",oe(10,He,i.scrollable))("ngStyle",i.style),s(2),r("ngIf",i.scrollable&&!i.backwardIsDisabled),s(3),g("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel),s(2),r("ngForOf",i.focusableItems),s(),g("data-pc-section","inkbar"),s(2),r("ngIf",i.scrollable&&!i.forwardIsDisabled))},dependencies:[R,se,ce,B,ue,pe,D,V,be,ke,Ce,Te,Ie,xe,ye,he,q],encapsulation:2,changeDetection:0})}return t})(),Le=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Z({type:t});static \u0275inj=J({imports:[K,q,q]})}return t})();function dt(t,o){if(t&1&&(C(0),p(1,"a",5),d(2,"span"),p(3,"span",6),I(4),u()(),w()),t&2){let e=l().$implicit;s(),r("routerLink",e.route),s(),k(e.icon),s(2),z(" ",e.label," ")}}function ft(t,o){if(t&1&&(p(0,"a",7),d(1,"span"),p(2,"span",6),I(3),u()()),t&2){let e=l().$implicit;r("href",e.url,A),s(),k(e.icon),s(2),z(" ",e.label," ")}}function _t(t,o){if(t&1&&b(0,dt,5,4,"ng-container",4)(1,ft,4,4,"ng-template",null,0,E),t&2){let e=o.$implicit,n=M(2);r("ngIf",e.route)("ngIfElse",n)}}var Wt=(()=>{let o=class o{constructor(){this.router=x(P)}ngOnInit(){this.items=[{label:"Router Link",icon:"pi pi-home",route:"/tabmenu"},{label:"Programmatic",icon:"pi pi-palette",command:()=>{this.router.navigate(["/theming"])}},{label:"External",icon:"pi pi-link",url:"https://angular.io/"}]}};o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=F({type:o,selectors:[["app-account"]],decls:5,vars:1,consts:[["elseBlock",""],[1,"card"],[3,"model"],["pTemplate","item"],[4,"ngIf","ngIfElse"],[1,"p-menuitem-link",3,"routerLink"],[1,"ml-2"],[1,"p-menuitem-link",3,"href"]],template:function(i,a){i&1&&(p(0,"p"),I(1,"account works!"),u(),p(2,"div",1)(3,"p-tabMenu",2),b(4,_t,3,2,"ng-template",3),u()()),i&2&&(s(3),r("model",a.items))},dependencies:[R,B,D,V,Le,K,Q],encapsulation:2});let t=o;return t})();export{Wt as AccountComponent};
