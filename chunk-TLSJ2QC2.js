import{a as I,b as R,c as T,d as N,f as j}from"./chunk-JNEUAAT5.js";import{a as B}from"./chunk-TREU36LO.js";import"./chunk-7B2LA7N4.js";import"./chunk-Y7MV3CSA.js";import{b as z}from"./chunk-WE62FCLU.js";import"./chunk-QFCX3JCB.js";import"./chunk-PMIXLXAC.js";import"./chunk-FDANLT4R.js";import{g as s,h as k,k as A}from"./chunk-LB2C25I3.js";import"./chunk-GL5CIJKG.js";import"./chunk-YBXBVZSY.js";import"./chunk-RAWSUYSJ.js";import"./chunk-H3ONGKXQ.js";import"./chunk-4YRY4IP2.js";import{l as x,m as L}from"./chunk-5JVEGXLZ.js";import{e as M,f as O,g as y,h as P,j as w,k as _}from"./chunk-BXWG62GK.js";import{e as v}from"./chunk-I3TFT3JE.js";import{d as E}from"./chunk-DB6LPKCG.js";import{k as C,t as b,x as S}from"./chunk-YR4PHHHU.js";import{Db as l,Jb as n,Kb as i,Lb as r,c as m,ib as c,jb as o,jc as f,lc as p,ra as h,tc as u,uc as g}from"./chunk-W3XNKEV5.js";import"./chunk-MON7YFGF.js";var H=e=>({"full-screen":e}),D=(()=>{class e{constructor(t,a,d,$,F){this.router=t,this.loaderService=a,this.layoutService=d,this.authStore=$,this.screenSizeService=F,this.data={},this.asideMenuState$=new m,this.loader$=this.loaderService.loaderState,console.log("------------------> LayoutComponent constructor <------------------")}ngOnInit(){this.getScreenSize(),this.startLoaderState(),this.chaeckAuthenticated(),this.detactAsideMenuChanges()}getScreenSize(){this.screenSizeService.getScreenSize().subscribe(t=>{t===s.XS||t===s.SM?this.layoutService.changeSideMenuState(!0):this.layoutService.changeSideMenuState(!1)})}detactAsideMenuChanges(){this.asideMenuState$=this.layoutService.sideMenuStateColapsed$}chaeckAuthenticated(){this.authStore.pipe(L(z)).subscribe(t=>{t||this.router.navigate(["/authentication/login"])})}startLoaderState(){this.routerEventsSubscription=this.router.events.subscribe(t=>{t instanceof M?this.loaderService.startLoaderState(!0):(t instanceof O||t instanceof y||t instanceof P)&&this.loaderService.startLoaderState(!1)})}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe()}static{this.\u0275fac=function(a){return new(a||e)(o(_),o(k),o(B),o(x),o(A))}}static{this.\u0275cmp=h({type:e,selectors:[["app-layout"]],standalone:!0,features:[f],decls:14,vars:5,consts:[[1,"main-container"],[1,"container-fluid","pb-3",3,"ngClass"],[1,"router-outlet"]],template:function(a,d){a&1&&(n(0,"section",0)(1,"header")(2,"nav"),r(3,"app-nav"),i()(),n(4,"aside"),r(5,"app-side-menu"),i(),n(6,"main",1),u(7,"async"),r(8,"app-breadcrumb"),n(9,"div",2),r(10,"router-outlet"),i()(),n(11,"footer"),r(12,"app-footer"),i(),r(13,"app-settings-offcanvas"),i()),a&2&&(c(6),l("ngClass",p(3,H,g(7,1,d.asideMenuState$))))},dependencies:[w,S,C,b,I,R,T,N,v,E,j],styles:['.main-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:150px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-template-areas:"aside aside header header header header header header header header header header" "aside aside main   main   main   main   main   main   main   main   main   main" "aside aside footer footer footer footer footer footer footer footer footer footer";height:100vh;background-color:#0ff;transition:all .5s ease-in-out}.main-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{grid-area:header;background-color:green;height:var(--header-height);width:var(--header-width)}.main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{grid-area:aside;height:var(--asid-height)}.main-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{grid-area:main;background-color:brown;background-color:var(--bg-secondary-color);height:calc(var(--main-height) - (var(--header-height) + var(--footer-height)));width:var(--main-width);overflow:auto}.main-container[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{grid-area:footer;height:var(--footer-height);width:var(--footer-width)}.main-container[_ngcontent-%COMP%]:has(.full-screen){grid-template-columns:90px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-template-areas:"aside header header header header header header header header header header header" "aside main   main   main   main   main   main   main   main   main   main   main" "aside footer footer footer footer footer footer footer footer footer footer footer";transition:all .5s ease-in-out}@media (max-width: 575.98px){.main-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-template-areas:"header header header header header header header header header header header header" "main   main   main   main   main   main   main   main   main   main   main   main" "footer footer footer footer footer footer footer footer footer footer footer footer";transition:all 1s ease-in-out}.main-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{grid-area:header;background-color:green;height:var(--header-height);width:var(--header-width)}.main-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{grid-area:aside;background-color:red;height:var(--asid-height);position:fixed;top:0;left:0;z-index:10;transition:all 1s ease-in-out;z-index:9999999;width:250px}.main-container[_ngcontent-%COMP%]:has(.full-screen){grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-template-areas:"header header header header header header header header header header header header" "main   main   main   main   main   main   main   main   main   main   main   main" "footer footer footer footer footer footer footer footer footer footer footer footer";transition:all 1s ease-in-out}.main-container[_ngcontent-%COMP%]:has(.full-screen)   aside[_ngcontent-%COMP%]{width:0;left:-50px;transition:all 1s ease-in-out}}']})}}return e})();var se=[{path:"",component:D,children:[{path:"dashboard",loadComponent:()=>import("./chunk-E3YO5KTM.js").then(e=>e.DashboardComponent),data:{breadcrumb:"dashboard",title:"Dashboard"}},{path:"account",loadComponent:()=>import("./chunk-G6JSTXKG.js").then(e=>e.AccountComponent),data:{breadcrumb:"account",title:"Account"}},{path:"bills",loadComponent:()=>import("./chunk-HIGM3HIK.js").then(e=>e.BillsComponent),data:{breadcrumb:"bills",title:"Bills"}},{path:"blog",loadComponent:()=>import("./chunk-DGJQ7AVB.js").then(e=>e.BlogComponent),data:{breadcrumb:"blogs",title:"Blogs"}},{path:"branches",loadComponent:()=>import("./chunk-6F6BRGBH.js").then(e=>e.BranchesComponent),data:{breadcrumb:"branches",title:"Branches"}},{path:"categories",loadComponent:()=>import("./chunk-W5J4OBZT.js").then(e=>e.CategoriesComponent),data:{breadcrumb:"categories",title:"Categories"}},{path:"clients",loadComponent:()=>import("./chunk-VUILEN7J.js").then(e=>e.ClientsComponent),data:{breadcrumb:"clients",title:"Clients"}},{path:"employees",loadComponent:()=>import("./chunk-BBQS2R4L.js").then(e=>e.EmployeesComponent),data:{breadcrumb:"employees",title:"Employees"}},{path:"offers",loadComponent:()=>import("./chunk-V45XJN3E.js").then(e=>e.OffersComponent),data:{breadcrumb:"offers",title:"Offers"}},{path:"orders",loadComponent:()=>import("./chunk-WKEWDRHM.js").then(e=>e.OrdersComponent),data:{breadcrumb:"orders",title:"Orders"}},{path:"reviews",loadComponent:()=>import("./chunk-GOGAJBTG.js").then(e=>e.PreviewsComponent),data:{breadcrumb:"reviews",title:"Reviews"}},{path:"products",loadChildren:()=>import("./chunk-STGH2VDZ.js").then(e=>e.ProductsRouting),data:{breadcrumb:"products",title:"Products"}},{path:"reports",loadComponent:()=>import("./chunk-KU52RVYP.js").then(e=>e.ReportsComponent),data:{breadcrumb:"reports",title:"Reports"}},{path:"tags",loadComponent:()=>import("./chunk-MMGY3CSV.js").then(e=>e.TagsComponent),data:{breadcrumb:"tags",title:"Tags"}},{path:"teams",loadComponent:()=>import("./chunk-4KHOX5HX.js").then(e=>e.TeamsComponent),data:{breadcrumb:"teams",title:"Teams"}},{path:"",redirectTo:"dashboard",pathMatch:"full"}]}];export{se as ModulesRouting};
