import{a as Z,b as ee,c as te,d as ie,e as oe,f as re,g as ne,h as se,i as ae}from"./chunk-BCPJCSJI.js";import{a as le,u as de}from"./chunk-AVZUGMTM.js";import{a as ce,u as me}from"./chunk-IOVPE3NB.js";import{a as X}from"./chunk-56GU4Z4C.js";import"./chunk-Y2HYYDXH.js";import"./chunk-PNVLM6ZI.js";import{A as U,B as k,C as x,F as J,G as K,H as W,c as O,d as $,e as q,f as M,h as b,i as H,j as z,w as R,x as Q,y as Y,z as G}from"./chunk-UO2IZ7KW.js";import"./chunk-A3IZZUYD.js";import"./chunk-7HUMFHBN.js";import{f as j}from"./chunk-OHFRBG3E.js";import{l as g,m as h}from"./chunk-7C3VAOG7.js";import"./chunk-XNY2RDZO.js";import"./chunk-P7IJNKWV.js";import{d as N}from"./chunk-GD6QJMTW.js";import"./chunk-7LEQAJN3.js";import"./chunk-6LIPBLOC.js";import{e as u,g as f}from"./chunk-AOODTV4H.js";import"./chunk-QBCOU3F6.js";import{t as V,y as E}from"./chunk-EEICXFOG.js";import{Fb as l,Gb as d,Hb as D,Kb as I,Ob as c,a as B,c as T,eb as m,ec as A,fb as a,fc as L,m as w,pa as F,pc as _,qb as P,qc as v,zb as p}from"./chunk-GCV2IDJ5.js";import{a as S,b as C}from"./chunk-MON7YFGF.js";var t=function(s){return s.blog_id="blog_id",s.title="title",s.content="content",s.author_id="author_id",s.status="status",s.tags="tags",s.image_url="image_url",s.category_id="category_id",s.created_at="created_at",s.updated_at="updated_at",s}(t||{});var We=(()=>{class s extends X{constructor(o,e,i,n,r,pe,ge,he,ue,fe){super(),this.headerConfigService=o,this.tableConfigService=e,this.blogsStore=i,this.tagsStore=n,this.categoriesStore=r,this.formBuilderService=pe,this.formBuilderPrimengService=ge,this.dialogService=he,this.messageService=ue,this.confirmationService=fe,this.sharedHeaderComponentConfig={},this.sharedTableComponentConfig={},this.blogsList=[],this.blogsList$=new T,this.totalData$=this.blogsStore.pipe(h(ne)),this.request={pageNo:this.pageEvent.page,pageSize:this.pageEvent.rows,sortBy:this.sortBy,sortOrder:this.sortOrder,filterBy:this.filterBy,filterValue:this.filterValue,findById:this.findById,brancheId:0},this.fetchFilterdListSubscribe=new B,this.tagsListObservable$=this.tagsStore.pipe(h(de)),this.categoriesListObservable$=this.categoriesStore.pipe(h(me)),i.select(se).subscribe(y=>{console.log("fetchListPaginationSuccess blogsStore --------->",y),this.blogsList=y.data,this.createConfigurationForTheSharedTableComponent()}),n.dispatch(le({request:this.request,pageNo:1,pageSize:1e4,sortBy:"name",sortOrder:"asc",filterBy:"",filterValue:"",findById:""})),r.dispatch(ce({request:this.request,pageNo:1,pageSize:1e4,sortBy:"name",sortOrder:"asc",filterBy:"",filterValue:"",findById:""}))}ngOnInit(){this.loadData(),this.selectBlogsStore(),this.createConfigurationForTheSharedHeaderComponent(),this.createConfigurationForTheSharedTableComponent()}loadData(){this.constructRequest(),this.dispatchRequest(this.request)}dispatchRequest(o){this.blogsStore.dispatch(Z({request:this.request,pageNo:this.pageEvent.page,pageSize:this.pageEvent.rows,sortBy:this.sortBy,sortOrder:this.sortOrder,filterBy:this.filterBy,filterValue:this.filterValue,findById:this.findById}))}selectBlogsStore(){this.blogsList$=this.blogsStore.select(re)}createConfigurationForTheSharedHeaderComponent(){this.sharedHeaderComponentConfig=this.headerConfigService.createConfig(new O().setTitle("Blog").setShowHeader(!0).setShowTitle(!0).setShowAddButton(!0).setShowEditButton(!1).setShowDeleteButton(!1).setCustomClass("dynamic-class"))}createConfigurationForTheSharedTableComponent(){this.sharedTableComponentConfig=this.tableConfigService.createConfig(new G().setTitle("Blog").setViewType(this.viewType).setShowHeader(!0).setShowFooter(!1).setCustomClass("dynamic-class").setData(this.blogsList).setTableHeader(["id",t.title,t.image_url,t.content,t.author_id,t.status,t.tags,t.category_id,t.created_at,t.updated_at]).setDataList(this.blogsList$))}createConfigurationForFormBuilderPrimengComponent(){this.formBuilderPrimengService.addPInputTextField(t.title,t.title,`Enter ${t.title}`,!0).addFileField(t.image_url,t.image_url,!0).addPMultiSelectField(t.tags,t.tags,this.tagsListObservable$,!0,!1).addPDropdownField(t.status,t.status,w([{id:"published",name:"published"},{id:"archived",name:"archived"},{id:"draft",name:"draft"}]),"",!0,[]).addPDropdownField(t.category_id,t.category_id,this.categoriesListObservable$,"",!0,[]).addPInputTextareaField(t.content,t.content,`Enter ${t.content}`,!0)}onAddNewBtn(o){this.createConfigurationForFormBuilderPrimengComponent(),this.ref&&this.ref.destroy(),this.ref=this.dialogService.open(Q,{header:"Create Blog",width:"40vw",modal:!0,closable:!0,contentStyle:{overflow:"auto"},data:{formFields:"this.formBuilderService.getFormFields()"}}),this.ref.onClose.subscribe(e=>{console.log("onClose",e),e&&this.blogsStore.dispatch(te({blog:e}));let i;if(e){let n=e?.buttonType;i=n?{summary:"No Product Selected",detail:`Pressed '${n}' button`}:{summary:"Product Selected",detail:e?.name}}else i={summary:"No Product Selected",detail:"Pressed Close button"};this.messageService.add(C(S({severity:"info"},i),{life:3e3}))}),this.ref.onMaximize.subscribe(e=>{this.messageService.add({severity:"info",summary:"Maximized",detail:`maximized: ${e.maximized}`})})}onEditBtn(o){}onDeleteBtn(o){}onView(o){}onEdit(o){this.ref=this.dialogService.open(z,{header:"Update Blog "+o.data.title,width:"40vw",modal:!0,closable:!0,contentStyle:{overflow:"auto"},data:{formFieldsValues:o.data}}),this.ref.onClose.subscribe(e=>{e&&(e.id=o.id,e._id=o.id,this.blogsStore.dispatch(ie({id:e.id,newItem:e})));let i;if(e){let n=e?.buttonType;i=n?{summary:"No Product Selected",detail:`Pressed '${n}' button`}:{summary:"Product Selected",detail:e?.name}}else i={summary:"No Product Selected",detail:"Pressed Close button"};this.messageService.add(C(S({severity:"info"},i),{life:3e3}))})}onDelete(o){this.confirmationService.confirm({message:"Are you sure that you want to ?",header:"Confirmation",icon:"pi pi-exclamation-triangle",acceptIcon:"none",rejectIcon:"none",rejectButtonStyleClass:"p-button-text",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted"}),this.blogsStore.dispatch(oe({blogId:o.id}))},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}filterQueryValues(o){console.log("filterQueryValues",o),this.blogsStore.dispatch(ee({request:o,pageNo:this.pageEvent.page,pageSize:this.pageEvent.rows})),this.fetchFilterdListSubscribe&&this.fetchFilterdListSubscribe.unsubscribe(),this.fetchFilterdListSubscribe=this.blogsStore.select(ae).subscribe(e=>{console.log("fetchFilterdList --------->",e)})}onChangeViewType(o){console.log("onChangeViewType",o),this.viewType=o}onPagePaginatorChange(o){this.pageEvent=o,this.loadData()}ngOnDestroy(){this.fetchFilterdListSubscribe&&this.fetchFilterdListSubscribe.unsubscribe()}static{this.\u0275fac=function(e){return new(e||s)(a($),a(U),a(g),a(g),a(g),a(H),a(R),a(b),a(f),a(u))}}static{this.\u0275cmp=F({type:s,selectors:[["app-blog"]],standalone:!0,features:[A([b,f,u]),P,L],decls:9,vars:8,consts:[[3,"onAddNewBtn","onEditBtn","onDeleteBtn","config"],[3,"filterFormvalues","viewTypeValue"],[3,"onViewBtn","onEditBtn","onDeleteBtn","config","length"],["TabelContent",""],[3,"onPagePaginatorChange","length"]],template:function(e,i){e&1&&(D(0,"p-toast")(1,"p-confirmDialog"),l(2,"app-component-header",0),c("onAddNewBtn",function(r){return i.onAddNewBtn(r)})("onEditBtn",function(r){return i.onEditBtn(r)})("onDeleteBtn",function(r){return i.onDeleteBtn(r)}),d(),l(3,"app-filters",1),c("filterFormvalues",function(r){return i.filterQueryValues(r)})("viewTypeValue",function(r){return i.onChangeViewType(r)}),d(),l(4,"app-table-container",2),_(5,"async"),c("onViewBtn",function(r){return i.onView(r)})("onEditBtn",function(r){return i.onEdit(r)})("onDeleteBtn",function(r){return i.onDelete(r)}),I(6,3),d(),l(7,"app-paginator",4),_(8,"async"),c("onPagePaginatorChange",function(r){return i.onPagePaginatorChange(r)}),d()),e&2&&(m(2),p("config",i.sharedHeaderComponentConfig),m(2),p("config",i.sharedTableComponentConfig)("length",v(5,4,i.totalData$)||0),m(3),p("length",v(8,6,i.totalData$)||0))},dependencies:[E,V,N,q,M,Y,W,K,J,x,k,j]})}}return s})();export{We as BlogComponent};
