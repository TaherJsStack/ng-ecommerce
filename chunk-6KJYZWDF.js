import{c as C,d as w,f as y,g as _,k,n as D,q as N,v as E,x as M}from"./chunk-PA4I2Q35.js";import{l as S,p as F}from"./chunk-SPWQV7SM.js";import"./chunk-R4K2WD2X.js";import{d as v}from"./chunk-E7PRHJWB.js";import{k as h,x as b}from"./chunk-XJBCGK7A.js";import{Cb as a,Ib as e,Jb as n,Kb as p,Rb as f,ac as m,hb as u,ib as d,ic as g,lc as c,ra as l}from"./chunk-UXABPLNP.js";import"./chunk-MON7YFGF.js";var T=(t,V)=>({"is-invalid":t,"is-valid":V}),A=(()=>{class t{constructor(r){this.fb=r,this.showPassword=!1,this.submitted=!1,this.loginForm={}}ngOnInit(){this.loginForm=this.fb.group({username:["",w.required]}),this.defaultClackSubmit()}defaultClackSubmit(){setTimeout(()=>{this.onSubmit(),this.setDefaultValues()},2e3)}setDefaultValues(){setTimeout(()=>{this.loginForm.get("username")?.setValue("test@test.com")},2e3)}onSubmit(){if(this.submitted=!0,this.loginForm.valid){let{username:r,password:o}=this.loginForm.value;console.log("Login:",r,o)}}ngOnDestroy(){}static{this.\u0275fac=function(o){return new(o||t)(d(E))}}static{this.\u0275cmp=l({type:t,selectors:[["app-forgot-password"]],standalone:!0,features:[g],decls:11,vars:5,consts:[["novalidate","",1,"needs-validation",3,"ngSubmit","formGroup"],[1,"mb-3"],[1,"e-mail","w-100"],["formControlName","username","type","email","placeholder","Email",1,"form-control",3,"ngClass"],["routerLink","/authentication/login",1,"d-block","d-sm-none"],["type","submit","routerLink","/authentication/otp"]],template:function(o,i){if(o&1&&(e(0,"form",0),f("ngSubmit",function(){return i.onSubmit()}),e(1,"h1",1),m(2,"Sign in"),n(),e(3,"span"),m(4," use your account"),n(),e(5,"div",2),p(6,"input",3),n(),e(7,"a",4),m(8,"back to login?"),n(),e(9,"button",5),m(10,"Send"),n()()),o&2){let s;a("formGroup",i.loginForm),u(6),a("ngClass",c(2,T,i.submitted&&((s=i.loginForm.get("username"))==null?null:s.errors),i.submitted&&!((s=i.loginForm.get("username"))!=null&&s.errors)))}},dependencies:[F,S,M,k,C,y,_,D,N,b,h,v]})}}return t})();export{A as ForgotPasswordComponent};
