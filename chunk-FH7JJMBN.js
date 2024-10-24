import{c as y,d as g,f as k,g as R,k as N,n as T,o as D,t as V,v as E}from"./chunk-4V5UOZBX.js";import{d as S}from"./chunk-OJYRZGEA.js";import{F,G as P,K as _,c as b,o as v}from"./chunk-CBDC4O62.js";import{Eb as t,Fb as r,Gb as l,Nb as f,Yb as d,db as n,eb as c,ec as C,hc as u,oa as h,yb as a}from"./chunk-WWR4BG2S.js";import"./chunk-MON7YFGF.js";var M=(o,w)=>({"is-invalid":o,"is-valid":w}),G=(o,w)=>({"fa-eye-slash":o,"fa-eye":w}),H=(()=>{class o{constructor(m,s){this.fb=m,this.router=s,this.showPassword=!1,this.showConfirmPassword=!1,this.submitted=!1,this.loginForm={}}ngOnInit(){this.loginForm=this.fb.group({password:["",g.required],confirmpassword:["",g.required]}),this.defaultClackSubmit()}defaultClackSubmit(){setTimeout(()=>{this.onSubmit(),this.setDefaultValues()},2e3)}setDefaultValues(){setTimeout(()=>{this.loginForm.get("password")?.setValue("test@test.com"),setTimeout(()=>{this.loginForm.get("confirmpassword")?.setValue("123456")},2e3)},2e3)}onSubmit(){if(this.submitted=!0,this.loginForm.valid){let{username:m,password:s}=this.loginForm.value;console.log("Login:",m,s),this.router.navigate(["/authentication/login"])}}ngOnDestroy(){}static{this.\u0275fac=function(s){return new(s||o)(c(V),c(F))}}static{this.\u0275cmp=h({type:o,selectors:[["app-reset-password"]],standalone:!0,features:[C],decls:18,vars:19,consts:[["novalidate","",1,"needs-validation",3,"ngSubmit","formGroup"],[1,"mb-3"],[1,"password","w-100"],["formControlName","password","placeholder","Password",1,"form-control",3,"type","ngClass"],["type","button",1,"eye",3,"click"],["aria-hidden","true",1,"fa",3,"ngClass"],["formControlName","confirmpassword","placeholder","Password","placeholder","Confirm Password",1,"form-control",3,"type","ngClass"],["routerLink","/authentication/login",1,"d-block","d-sm-none"],["type","submit"]],template:function(s,e){if(s&1&&(l(0,"h1"),t(1,"form",0),f("ngSubmit",function(){return e.onSubmit()}),t(2,"h1",1),d(3,"reset password"),r(),t(4,"span"),d(5," make it secret "),r(),t(6,"div",2),l(7,"input",3),t(8,"button",4),f("click",function(){return e.showPassword=!e.showPassword}),l(9,"i",5),r()(),t(10,"div",2),l(11,"input",6),t(12,"button",4),f("click",function(){return e.showConfirmPassword=!e.showConfirmPassword}),l(13,"i",5),r()(),t(14,"a",7),d(15,"Back to login?"),r(),t(16,"button",8),d(17,"Change Password"),r()()),s&2){let i,p;n(),a("formGroup",e.loginForm),n(6),a("type",e.showPassword?"text":"password")("ngClass",u(7,M,e.submitted&&((i=e.loginForm.get("password"))==null?null:i.errors),e.submitted&&!((i=e.loginForm.get("password"))!=null&&i.errors))),n(2),a("ngClass",u(10,G,e.showPassword,!e.showPassword)),n(2),a("type",e.showConfirmPassword?"text":"password")("ngClass",u(13,M,e.submitted&&((p=e.loginForm.get("confirmpassword"))==null?null:p.errors),e.submitted&&!((p=e.loginForm.get("confirmpassword"))!=null&&p.errors))),n(2),a("ngClass",u(16,G,e.showPassword,!e.showPassword))}},dependencies:[v,b,E,N,y,k,R,T,D,_,P,S]})}}return o})();export{H as ResetPasswordComponent};
