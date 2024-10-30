import{a as X}from"./chunk-VWVMRYOZ.js";import{a as Z,b as ee,c as te,d as ie,e as ne,f as oe,g as ae,h as v}from"./chunk-TSNCDNSH.js";import"./chunk-Y2HYYDXH.js";import"./chunk-PNVLM6ZI.js";import{A as U,B as k,E as J,F as K,G as W,c as M,d as N,e as $,f as q,h as f,i as z,j as O,v as R,w as Q,x,y as Y,z as G}from"./chunk-GLUNS6GX.js";import{f as H}from"./chunk-42JLVMS2.js";import"./chunk-XNY2RDZO.js";import"./chunk-YBIREU4P.js";import"./chunk-YYO27DDR.js";import"./chunk-RVWAFL5C.js";import"./chunk-A6LLAQQQ.js";import{l as L,m as j}from"./chunk-7C3VAOG7.js";import{d as A}from"./chunk-GD6QJMTW.js";import"./chunk-IYFM5INL.js";import"./chunk-LYXAL2MR.js";import"./chunk-JEQUEBGQ.js";import{e as h,g as u}from"./chunk-QKJGR225.js";import"./chunk-DL5MPEQY.js";import{t as I,x as V}from"./chunk-4BO4VVDC.js";import{Fb as m,Gb as d,Hb as F,Kb as E,Ob as l,a as T,c as y,eb as p,ec as P,fb as r,fc as D,m as s,pa as B,pc as C,qb as w,qc as S,zb as c}from"./chunk-GCV2IDJ5.js";import{a as g,b as _}from"./chunk-MON7YFGF.js";var b=function(o){return o.team_id="team_id",o.name="name",o.description="description",o.team_lead_id="team_lead_id",o.branch_id="branch_id",o.created_by="created_by",o.created_at="created_at",o.updated_at="updated_at",o.status="status",o.members="members",o}(b||{});var Re=(()=>{class o extends X{constructor(i,e,t,a,n,re,se,me){super(),this.headerConfigService=i,this.tableConfigService=e,this.teamsStore=t,this.formBuilderService=a,this.dialogService=n,this.messageService=re,this.confirmationService=se,this.formBuilderPrimengService=me,this.sharedHeaderComponentConfig={},this.sharedTableComponentConfig={},this.teamsList=[],this.teamsList$=new y,this.totalData$=this.teamsStore.pipe(j(ae)),this.fetchFilterdListSubscribe=new T,this.teamEnum=b,t.select(v).subscribe(de=>{this.teamsList=de.data,this.createConfigurationForTheSharedTableComponent()})}ngOnInit(){this.loadData(),this.selectTeamsStore(),this.createConfigurationForTheSharedHeaderComponent(),this.createConfigurationForTheSharedTableComponent()}loadData(){console.log("loadTeams this.pageEvent --------->",this.pageEvent),this.constructRequest(),this.dispatchRequest(this.request)}dispatchRequest(i){this.teamsStore.dispatch(Z({request:this.request,pageNo:this.pageEvent.page,pageSize:this.pageEvent.rows,sortBy:this.sortBy,sortOrder:this.sortOrder,filterBy:this.filterBy,filterValue:this.filterValue,findById:this.findById}))}selectTeamsStore(){this.teamsList$=this.teamsStore.select(oe)}createConfigurationForTheSharedHeaderComponent(){this.sharedHeaderComponentConfig=this.headerConfigService.createConfig(new M().setTitle("Team").setShowHeader(!0).setShowTitle(!0).setShowAddButton(!0).setShowEditButton(!1).setShowDeleteButton(!1).setCustomClass("dynamic-class"))}createConfigurationForTheSharedTableComponent(){this.sharedTableComponentConfig=this.tableConfigService.createConfig(new Y().setTitle("Team").setViewType(this.viewType).setShowHeader(!0).setShowFooter(!1).setCustomClass("dynamic-class").setData(this.teamsList).setTableHeader(["id",this.teamEnum.name,this.teamEnum.description,this.teamEnum.branch_id,this.teamEnum.team_lead_id,this.teamEnum.members,this.teamEnum.status,this.teamEnum.created_by,this.teamEnum.created_at,this.teamEnum.updated_at]).setDataList(this.teamsList$))}createConfigurationForFormBuilderComponent(){this.formBuilderPrimengService.addPInputTextField(this.teamEnum.name,this.teamEnum.name,`Enter ${this.teamEnum.name}`,!0).addPInputTextareaField(this.teamEnum.description,this.teamEnum.description,`Enter ${this.teamEnum.description}`,!0).addPDropdownField(this.teamEnum.branch_id,this.teamEnum.branch_id,s([{id:"1",name:"1"},{id:"2",name:"2"},{id:"3",name:"3"}])).addPDropdownField(this.teamEnum.team_lead_id,this.teamEnum.team_lead_id,s([{id:"1",name:"1"},{id:"2",name:"2"},{id:"3",name:"3"}])).addPMultiSelectField(this.teamEnum.members,this.teamEnum.members,s([{id:"1",name:"1"},{id:"2",name:"2"},{id:"3",name:"3"}])).addPDropdownField(this.teamEnum.status,this.teamEnum.status,s([{id:"1",name:"1"},{id:"2",name:"2"},{id:"3",name:"3"}]))}onAddNewBtn(i){this.createConfigurationForFormBuilderComponent(),this.ref=this.dialogService.open(Q,{header:"Create Team",width:"40vw",modal:!0,closable:!0,contentStyle:{overflow:"auto"},data:{formFields:"this.formBuilderService.getFormFields()"}}),this.ref.onClose.subscribe(e=>{console.log("onClose",e),e&&this.teamsStore.dispatch(te({team:e}));let t;if(e){let a=e?.buttonType;t=a?{summary:"No Product Selected",detail:`Pressed '${a}' button`}:{summary:"Product Selected",detail:e?.name}}else t={summary:"No Product Selected",detail:"Pressed Close button"};this.messageService.add(_(g({severity:"info"},t),{life:3e3}))}),this.ref.onMaximize.subscribe(e=>{this.messageService.add({severity:"info",summary:"Maximized",detail:`maximized: ${e.maximized}`})})}onEditBtn(i){}onDeleteBtn(i){}onView(i){}onEdit(i){this.ref=this.dialogService.open(O,{header:"Update Team "+i.data.name,width:"40vw",modal:!0,closable:!0,contentStyle:{overflow:"auto"},data:{formFieldsValues:i.data}}),this.ref.onClose.subscribe(e=>{e&&(e.id=i.id,e._id=i.id,this.teamsStore.dispatch(ie({id:e.id,newItem:e})));let t;if(e){let a=e?.buttonType;t=a?{summary:"No Product Selected",detail:`Pressed '${a}' button`}:{summary:"Product Selected",detail:e?.name}}else t={summary:"No Product Selected",detail:"Pressed Close button"};this.messageService.add(_(g({severity:"info"},t),{life:3e3}))})}onDelete(i){this.confirmationService.confirm({message:"Are you sure that you want to ?",header:"Confirmation",icon:"pi pi-exclamation-triangle",acceptIcon:"none",rejectIcon:"none",rejectButtonStyleClass:"p-button-text",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted"}),this.teamsStore.dispatch(ne({teamId:i.id}))},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}filterQueryValues(i){console.log("filterQueryValues",i),this.teamsStore.dispatch(ee({request:i,pageNo:this.pageEvent.page,pageSize:this.pageEvent.rows})),this.fetchFilterdListSubscribe&&this.fetchFilterdListSubscribe.unsubscribe(),this.fetchFilterdListSubscribe=this.teamsStore.select(v).subscribe(e=>{console.log("fetchFilterdList --------->",e)})}onChangeViewType(i){console.log("onChangeViewType",i),this.viewType=i,this.createConfigurationForTheSharedTableComponent()}onPagePaginatorChange(i){this.pageEvent=i,this.loadData()}ngOnDestroy(){this.fetchFilterdListSubscribe&&this.fetchFilterdListSubscribe.unsubscribe()}static{this.\u0275fac=function(e){return new(e||o)(r(N),r(G),r(L),r(z),r(f),r(u),r(h),r(R))}}static{this.\u0275cmp=B({type:o,selectors:[["app-teams"]],standalone:!0,features:[P([f,u,h]),w,D],decls:9,vars:8,consts:[[3,"onAddNewBtn","onEditBtn","onDeleteBtn","config"],[3,"filterFormvalues","viewTypeValue"],[3,"onViewBtn","onEditBtn","onDeleteBtn","config","length"],["TabelContent",""],[3,"onPagePaginatorChange","length"]],template:function(e,t){e&1&&(F(0,"p-toast")(1,"p-confirmDialog"),m(2,"app-component-header",0),l("onAddNewBtn",function(n){return t.onAddNewBtn(n)})("onEditBtn",function(n){return t.onEditBtn(n)})("onDeleteBtn",function(n){return t.onDeleteBtn(n)}),d(),m(3,"app-filters",1),l("filterFormvalues",function(n){return t.filterQueryValues(n)})("viewTypeValue",function(n){return t.onChangeViewType(n)}),d(),m(4,"app-table-container",2),C(5,"async"),l("onViewBtn",function(n){return t.onView(n)})("onEditBtn",function(n){return t.onEdit(n)})("onDeleteBtn",function(n){return t.onDelete(n)}),E(6,3),d(),m(7,"app-paginator",4),C(8,"async"),l("onPagePaginatorChange",function(n){return t.onPagePaginatorChange(n)}),d()),e&2&&(p(2),c("config",t.sharedHeaderComponentConfig),p(2),c("config",t.sharedTableComponentConfig)("length",S(5,4,t.totalData$)||0),p(3),c("length",S(8,6,t.totalData$)||0))},dependencies:[V,I,A,$,q,x,W,K,J,k,U,H]})}}return o})();export{Re as TeamsComponent};
