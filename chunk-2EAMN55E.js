import{a as J,b as K,c as W,d as X,e as Z,f as ee,g as te,h as S}from"./chunk-DFFGZMOK.js";import{a as ie}from"./chunk-QBJXXOSF.js";import"./chunk-G7GKDBDS.js";import{c as M,d as N,e as q,f as $,g as u,h as z,i as _,l as O,m as x,n as R,o as Q,p as Y,q as G,r as U,s as k}from"./chunk-AR54IGPP.js";import"./chunk-DVDV44HM.js";import{f as j}from"./chunk-HVR775ON.js";import"./chunk-4V5UOZBX.js";import"./chunk-XNY2RDZO.js";import"./chunk-MXTATJDI.js";import{l as L,m as H}from"./chunk-VHK6HW5T.js";import{d as I}from"./chunk-OJYRZGEA.js";import"./chunk-DQONCCFF.js";import"./chunk-EQUQ7CBC.js";import{e as c,g as h}from"./chunk-XZNJALMM.js";import{l as A,o as E}from"./chunk-CBDC4O62.js";import{Eb as a,Fb as l,Gb as F,Jb as D,Nb as d,a as y,c as B,db as m,dc as P,eb as s,ec as V,nc as g,oa as T,oc as C,pb as w,yb as p}from"./chunk-WWR4BG2S.js";import{a as f,b}from"./chunk-MON7YFGF.js";var v=function(n){return n.bill_id="bill_id",n.user_id="user_id",n.order_id="order_id",n.bill_date="bill_date",n.due_date="due_date",n.total_amount="total_amount",n.status="status",n.payment_method="payment_method",n.created_at="created_at",n.updated_at="updated_at",n}(v||{});var $e=(()=>{class n extends ie{constructor(i,e,t,r,o,oe,ne){super(),this.headerConfigService=i,this.tableConfigService=e,this.billsStore=t,this.formBuilderService=r,this.dialogService=o,this.messageService=oe,this.confirmationService=ne,this.sharedHeaderComponentConfig={},this.sharedTableComponentConfig={},this.billsList=[],this.billsList$=new B,this.totalData$=this.billsStore.pipe(H(te)),this.fetchFilterdListSubscribe=new y,this.billEnum=v,t.select(S).subscribe(re=>{this.billsList=re.data,this.createConfigurationForTheSharedTableComponent()})}ngOnInit(){this.loadData(),this.selectBillsStore(),this.createConfigurationForTheSharedHeaderComponent(),this.createConfigurationForTheSharedTableComponent()}loadData(){console.log("loadBills this.pageEvent --------->",this.pageEvent),this.constructRequest(),this.dispatchRequest(this.request)}dispatchRequest(i){this.billsStore.dispatch(J({request:this.request,pageNo:this.pageEvent.page,pageSize:this.pageEvent.rows,sortBy:this.sortBy,sortOrder:this.sortOrder,filterBy:this.filterBy,filterValue:this.filterValue,findById:this.findById}))}selectBillsStore(){this.billsList$=this.billsStore.select(ee)}createConfigurationForTheSharedHeaderComponent(){this.sharedHeaderComponentConfig=this.headerConfigService.createConfig(new M().setTitle("Bill").setShowHeader(!0).setShowTitle(!0).setShowAddButton(!1).setShowEditButton(!1).setShowDeleteButton(!1).setCustomClass("dynamic-class"))}createConfigurationForTheSharedTableComponent(){this.sharedTableComponentConfig=this.tableConfigService.createConfig(new x().setTitle("Bill").setViewType(this.viewType).setShowHeader(!0).setShowFooter(!1).setCustomClass("dynamic-class").setData(this.billsList).setTableHeader(["id",this.billEnum.user_id,this.billEnum.order_id,this.billEnum.status,this.billEnum.total_amount,this.billEnum.payment_method,this.billEnum.created_at,this.billEnum.updated_at]).setDataList(this.billsList$))}onAddNewBtn(i){this.ref=this.dialogService.open(_,{header:"Create Bill",width:"40vw",modal:!0,closable:!0,contentStyle:{overflow:"auto"},data:{formFields:"this.formBuilderService.getFormFields()"}}),this.ref.onClose.subscribe(e=>{console.log("onClose",e),e&&this.billsStore.dispatch(W({bill:e}));let t;if(e){let r=e?.buttonType;t=r?{summary:"No Product Selected",detail:`Pressed '${r}' button`}:{summary:"Product Selected",detail:e?.name}}else t={summary:"No Product Selected",detail:"Pressed Close button"};this.messageService.add(b(f({severity:"info"},t),{life:3e3}))}),this.ref.onMaximize.subscribe(e=>{this.messageService.add({severity:"info",summary:"Maximized",detail:`maximized: ${e.maximized}`})})}onEditBtn(i){}onDeleteBtn(i){}onView(i){}onEdit(i){this.ref=this.dialogService.open(_,{header:"Update Bill "+i.data.status,width:"40vw",modal:!0,closable:!0,contentStyle:{overflow:"auto"},data:{formFieldsValues:i.data}}),this.ref.onClose.subscribe(e=>{e&&(e.id=i.id,e._id=i.id,this.billsStore.dispatch(X({id:e.id,newItem:e})));let t;if(e){let r=e?.buttonType;t=r?{summary:"No Product Selected",detail:`Pressed '${r}' button`}:{summary:"Product Selected",detail:e?.name}}else t={summary:"No Product Selected",detail:"Pressed Close button"};this.messageService.add(b(f({severity:"info"},t),{life:3e3}))})}onDelete(i){this.confirmationService.confirm({message:"Are you sure that you want to ?",header:"Confirmation",icon:"pi pi-exclamation-triangle",acceptIcon:"none",rejectIcon:"none",rejectButtonStyleClass:"p-button-text",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted"}),this.billsStore.dispatch(Z({billId:i.id}))},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}filterQueryValues(i){console.log("filterQueryValues",i),this.billsStore.dispatch(K({request:i,pageNo:this.pageEvent.page,pageSize:this.pageEvent.rows})),this.fetchFilterdListSubscribe&&this.fetchFilterdListSubscribe.unsubscribe(),this.fetchFilterdListSubscribe=this.billsStore.select(S).subscribe(e=>{console.log("fetchFilterdList --------->",e)})}onChangeViewType(i){console.log("onChangeViewType",i),this.viewType=i,this.createConfigurationForTheSharedTableComponent()}onPagePaginatorChange(i){this.pageEvent=i,this.loadData()}ngOnDestroy(){this.fetchFilterdListSubscribe&&this.fetchFilterdListSubscribe.unsubscribe()}static{this.\u0275fac=function(e){return new(e||n)(s(N),s(R),s(L),s(z),s(u),s(h),s(c))}}static{this.\u0275cmp=T({type:n,selectors:[["app-bills"]],standalone:!0,features:[P([u,h,c]),w,V],decls:9,vars:8,consts:[[3,"onAddNewBtn","onEditBtn","onDeleteBtn","config"],[3,"filterFormvalues","viewTypeValue"],[3,"onViewBtn","onEditBtn","onDeleteBtn","config","length"],["TabelContent",""],[3,"onPagePaginatorChange","length"]],template:function(e,t){e&1&&(F(0,"p-toast")(1,"p-confirmDialog"),a(2,"app-component-header",0),d("onAddNewBtn",function(o){return t.onAddNewBtn(o)})("onEditBtn",function(o){return t.onEditBtn(o)})("onDeleteBtn",function(o){return t.onDeleteBtn(o)}),l(),a(3,"app-filters",1),d("filterFormvalues",function(o){return t.filterQueryValues(o)})("viewTypeValue",function(o){return t.onChangeViewType(o)}),l(),a(4,"app-table-container",2),g(5,"async"),d("onViewBtn",function(o){return t.onView(o)})("onEditBtn",function(o){return t.onEdit(o)})("onDeleteBtn",function(o){return t.onDelete(o)}),D(6,3),l(),a(7,"app-paginator",4),g(8,"async"),d("onPagePaginatorChange",function(o){return t.onPagePaginatorChange(o)}),l()),e&2&&(m(2),p("config",t.sharedHeaderComponentConfig),m(2),p("config",t.sharedTableComponentConfig)("length",C(5,4,t.totalData$)||0),m(3),p("length",C(8,6,t.totalData$)||0))},dependencies:[E,A,I,q,$,O,k,U,G,Y,Q,j]})}}return n})();export{$e as BillsComponent};
