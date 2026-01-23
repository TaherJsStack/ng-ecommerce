import{a as re}from"./chunk-NA5OFGLJ.js";import{da as ee,ea as k,fa as te,ga as ne,ia as ie,ja as oe,ka as x,va as B}from"./chunk-5EKUNCXT.js";import{j as J,m as W,r as X,y as Y}from"./chunk-E2EXGQ5T.js";import{$b as V,Ab as _,Fa as m,Ic as Z,Lb as C,Ub as c,Vb as u,Vc as U,Wb as v,Xb as z,_b as T,ab as N,ac as M,ca as P,cc as y,da as L,eb as s,fa as A,gc as b,ha as w,ic as r,jc as K,kc as O,lc as Q,md as F,nc as S,oa as p,oc as D,pa as l,qa as f,rc as H,ub as g,uc as G,va as E,vb as R,vc as d,wc as $,xc as q,yb as j,zb as h}from"./chunk-AUUYFGFJ.js";var le=["data-p-icon","chevron-left"],Ve=(()=>{class t extends B{static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275cmp=g({type:t,selectors:[["","data-p-icon","chevron-left"]],features:[h],attrs:le,decls:1,vars:0,consts:[["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(n,i){n&1&&(f(),T(0,"path",0))},encapsulation:2})}return t})();var de=["data-p-icon","chevron-right"],De=(()=>{class t extends B{static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275cmp=g({type:t,selectors:[["","data-p-icon","chevron-right"]],features:[h],attrs:de,decls:1,vars:0,consts:[["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(n,i){n&1&&(f(),T(0,"path",0))},encapsulation:2})}return t})();var ae=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;var me=["removeicon"],_e=["*"];function fe(t,a){if(t&1){let e=y();u(0,"img",4),b("error",function(i){p(e);let o=r();return l(o.imageError(i))}),v()}if(t&2){let e=r();d(e.cx("image")),c("pBind",e.ptm("image"))("src",e.image,N)("alt",e.alt)}}function ge(t,a){if(t&1&&z(0,"span",6),t&2){let e=r(2);d(e.icon),c("pBind",e.ptm("icon"))("ngClass",e.cx("icon"))}}function he(t,a){if(t&1&&_(0,ge,1,4,"span",5),t&2){let e=r();c("ngIf",e.icon)}}function ue(t,a){if(t&1&&(u(0,"div",7),$(1),v()),t&2){let e=r();d(e.cx("label")),c("pBind",e.ptm("label")),s(),q(e.label)}}function ve(t,a){if(t&1){let e=y();u(0,"span",11),b("click",function(i){p(e);let o=r(3);return l(o.close(i))})("keydown",function(i){p(e);let o=r(3);return l(o.onKeydown(i))}),v()}if(t&2){let e=r(3);d(e.removeIcon),c("pBind",e.ptm("removeIcon"))("ngClass",e.cx("removeIcon")),C("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel)}}function Ce(t,a){if(t&1){let e=y();f(),u(0,"svg",12),b("click",function(i){p(e);let o=r(3);return l(o.close(i))})("keydown",function(i){p(e);let o=r(3);return l(o.onKeydown(i))}),v()}if(t&2){let e=r(3);d(e.cx("removeIcon")),c("pBind",e.ptm("removeIcon")),C("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel)}}function ye(t,a){if(t&1&&(V(0),_(1,ve,1,6,"span",9)(2,Ce,1,5,"svg",10),M()),t&2){let e=r(2);s(),c("ngIf",e.removeIcon),s(),c("ngIf",!e.removeIcon)}}function be(t,a){}function xe(t,a){t&1&&_(0,be,0,0,"ng-template")}function Ie(t,a){if(t&1){let e=y();u(0,"span",13),b("click",function(i){p(e);let o=r(2);return l(o.close(i))})("keydown",function(i){p(e);let o=r(2);return l(o.onKeydown(i))}),_(1,xe,1,0,null,14),v()}if(t&2){let e=r(2);d(e.cx("removeIcon")),c("pBind",e.ptm("removeIcon")),C("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel),s(),c("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function we(t,a){if(t&1&&(V(0),_(1,ye,3,2,"ng-container",3)(2,Ie,2,6,"span",8),M()),t&2){let e=r();s(),c("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),s(),c("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var Te={root:({instance:t})=>({display:!t.visible&&"none"})},ke={root:({instance:t})=>["p-chip p-component",{"p-disabled":t.disabled}],image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},se=(()=>{class t extends ne{name="chip";style=ae;classes=ke;inlineStyles=Te;static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var pe=new A("CHIP_INSTANCE"),Be=(()=>{class t extends oe{$pcChip=w(pe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=w(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}label;icon;image;alt;styleClass;disabled=!1;removable=!1;removeIcon;onRemove=new E;onImageError=new E;visible=!0;get removeAriaLabel(){return this.config.getTranslation(te.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}_chipProps;_componentStyle=w(se);removeIconTemplate;templates;_removeIconTemplate;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}onChanges(e){if(e.chipProps&&e.chipProps.currentValue){let{currentValue:n}=e.chipProps;n.label!==void 0&&(this.label=n.label),n.icon!==void 0&&(this.icon=n.icon),n.image!==void 0&&(this.image=n.image),n.alt!==void 0&&(this.alt=n.alt),n.styleClass!==void 0&&(this.styleClass=n.styleClass),n.removable!==void 0&&(this.removable=n.removable),n.removeIcon!==void 0&&(this.removeIcon=n.removeIcon)}}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}get dataP(){return this.cn({removable:this.removable})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(t)))(i||t)}})();static \u0275cmp=g({type:t,selectors:[["p-chip"]],contentQueries:function(n,i,o){if(n&1&&Q(o,me,4)(o,ee,4),n&2){let I;S(I=D())&&(i.removeIconTemplate=I.first),S(I=D())&&(i.templates=I)}},hostVars:6,hostBindings:function(n,i){n&2&&(C("aria-label",i.label)("data-p",i.dataP),G(i.sx("root")),d(i.cn(i.cx("root"),i.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",styleClass:"styleClass",disabled:[2,"disabled","disabled",F],removable:[2,"removable","removable",F],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[Z([se,{provide:pe,useExisting:t},{provide:ie,useExisting:t}]),j([x]),h],ngContentSelectors:_e,decls:6,vars:4,consts:[["iconTemplate",""],[3,"pBind","class","src","alt","error",4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"],[4,"ngIf"],[3,"error","pBind","src","alt"],[3,"pBind","class","ngClass",4,"ngIf"],[3,"pBind","ngClass"],[3,"pBind"],["role","button",3,"pBind","class","click","keydown",4,"ngIf"],["role","button",3,"pBind","class","ngClass","click","keydown",4,"ngIf"],["data-p-icon","times-circle","role","button",3,"pBind","class","click","keydown",4,"ngIf"],["role","button",3,"click","keydown","pBind","ngClass"],["data-p-icon","times-circle","role","button",3,"click","keydown","pBind"],["role","button",3,"click","keydown","pBind"],[4,"ngTemplateOutlet"]],template:function(n,i){if(n&1&&(K(),O(0),_(1,fe,1,5,"img",1)(2,he,1,1,"ng-template",null,0,U)(4,ue,2,4,"div",2)(5,we,3,2,"ng-container",3)),n&2){let o=H(3);s(),c("ngIf",i.image)("ngIfElse",o),s(3),c("ngIf",i.label),s(),c("ngIf",i.removable)}},dependencies:[Y,J,W,X,re,k,x],encapsulation:2,changeDetection:0})}return t})(),et=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=R({type:t});static \u0275inj=L({imports:[Be,k,k]})}return t})();export{Ve as a,De as b,Be as c,et as d};
