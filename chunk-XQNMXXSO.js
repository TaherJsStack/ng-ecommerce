import{a as K}from"./chunk-KVKTAYWA.js";import{A as G,B as U,E as k,F as x,G as J,c as N,d as q,e as O,f as $,h as u,i as z,j as S,x as R,y as Q,z as Y}from"./chunk-ZC7EBUGC.js";import{f as M}from"./chunk-7B2LA7N4.js";import"./chunk-Y7MV3CSA.js";import{a as W,b as X,c as Z,d as ee,e as te,f as ie,g as re,h as v}from"./chunk-NS2RRWFP.js";import"./chunk-5SPO2ULR.js";import"./chunk-PMIXLXAC.js";import"./chunk-FDANLT4R.js";import"./chunk-GZYRISK6.js";import"./chunk-Q77QSA2R.js";import"./chunk-YBXBVZSY.js";import"./chunk-MZE32LOX.js";import"./chunk-S6EMH63M.js";import"./chunk-RAWSUYSJ.js";import{e as m,g as h}from"./chunk-H3ONGKXQ.js";import"./chunk-4YRY4IP2.js";import"./chunk-L7L4RKUY.js";import{l as H,m as I}from"./chunk-5JVEGXLZ.js";import"./chunk-BXWG62GK.js";import"./chunk-I3TFT3JE.js";import{d as j}from"./chunk-DB6LPKCG.js";import{t as L,x as A}from"./chunk-YR4PHHHU.js";import{Db as c,Jb as a,Kb as d,Lb as D,Ob as P,Sb as l,a as T,c as B,ib as p,ic as V,jb as s,jc as E,ra as w,tc as g,ub as F,uc as C}from"./chunk-W3XNKEV5.js";import{a as f,b as _}from"./chunk-MON7YFGF.js";var b=function(i){return i.order_id="order_id",i.user_id="user_id",i.total_amount="total_amount",i.payment_method="payment_method",i.order_status="order_status",i.created_at="created_at",i.updated_at="updated_at",i.total_price="total_price",i.discount_applied="discount_applied",i.status="status",i.ordered_at="ordered_at",i.shipped_at="shipped_at",i.delivered_at="delivered_at",i.created_by="created_by",i.products="products",i.shipping_address="shipping_address",i.billing_address="billing_address",i}(b||{});var Ne=(()=>{class i extends K{constructor(r,e,t,n,o,oe,ne){super(),this.headerConfigService=r,this.tableConfigService=e,this.ordersStore=t,this.formBuilderService=n,this.dialogService=o,this.messageService=oe,this.confirmationService=ne,this.sharedHeaderComponentConfig={},this.sharedTableComponentConfig={},this.ordersList=[],this.ordersList$=new B,this.totalData$=this.ordersStore.pipe(I(re)),this.fetchFilterdListSubscribe=new T,this.orderEnum=b,t.select(v).subscribe(y=>{console.log("fetchListPaginationSuccess --------->",y),this.ordersList=y.data,this.createConfigurationForTheSharedTableComponent()})}ngOnInit(){this.loadData(),this.selectOrdersStore(),this.createConfigurationForTheSharedHeaderComponent(),this.createConfigurationForTheSharedTableComponent()}loadData(){console.log("loadOrders this.pageEvent --------->",this.pageEvent),this.constructRequest(),this.dispatchRequest(this.request)}dispatchRequest(r){this.ordersStore.dispatch(W({request:this.request,pageNo:this.pageEvent.page,pageSize:this.pageEvent.rows,sortBy:this.sortBy,sortOrder:this.sortOrder,filterBy:this.filterBy,filterValue:this.filterValue,findById:this.findById}))}selectOrdersStore(){this.ordersList$=this.ordersStore.select(ie)}createConfigurationForTheSharedHeaderComponent(){this.sharedHeaderComponentConfig=this.headerConfigService.createConfig(new N().setTitle("Order").setShowHeader(!0).setShowTitle(!0).setShowAddButton(!1).setShowEditButton(!1).setShowDeleteButton(!1).setCustomClass("dynamic-class"))}createConfigurationForTheSharedTableComponent(){this.sharedTableComponentConfig=this.tableConfigService.createConfig(new Q().setTitle("Order").setViewType(this.viewType).setShowHeader(!0).setShowFooter(!1).setCustomClass("dynamic-class").setData(this.ordersList).setTableHeader(["id",this.orderEnum.user_id,this.orderEnum.created_by,this.orderEnum.products,this.orderEnum.total_price,this.orderEnum.status,this.orderEnum.discount_applied,this.orderEnum.payment_method,this.orderEnum.delivered_at,this.orderEnum.shipped_at,this.orderEnum.ordered_at,this.orderEnum.updated_at]).setDataList(this.ordersList$))}onAddNewBtn(r){this.ref=this.dialogService.open(S,{header:"Create Order",width:"40vw",modal:!0,closable:!0,contentStyle:{overflow:"auto"},data:{formFields:"this.formBuilderService.getFormFields()"}}),this.ref.onClose.subscribe(e=>{console.log("onClose",e),e&&this.ordersStore.dispatch(Z({order:e}));let t;if(e){let n=e?.buttonType;t=n?{summary:"No Product Selected",detail:`Pressed '${n}' button`}:{summary:"Product Selected",detail:e?.name}}else t={summary:"No Product Selected",detail:"Pressed Close button"};this.messageService.add(_(f({severity:"info"},t),{life:3e3}))}),this.ref.onMaximize.subscribe(e=>{this.messageService.add({severity:"info",summary:"Maximized",detail:`maximized: ${e.maximized}`})})}onEditBtn(r){}onDeleteBtn(r){}onView(r){}onEdit(r){this.ref=this.dialogService.open(S,{header:"Update Order "+r.data.description,width:"40vw",modal:!0,closable:!0,contentStyle:{overflow:"auto"},data:{formFieldsValues:r.data}}),this.ref.onClose.subscribe(e=>{e&&(e.id=r.id,e._id=r.id,this.ordersStore.dispatch(ee({id:e.id,newItem:e})));let t;if(e){let n=e?.buttonType;t=n?{summary:"No Product Selected",detail:`Pressed '${n}' button`}:{summary:"Product Selected",detail:e?.name}}else t={summary:"No Product Selected",detail:"Pressed Close button"};this.messageService.add(_(f({severity:"info"},t),{life:3e3}))})}onDelete(r){this.confirmationService.confirm({message:"Are you sure that you want to ?",header:"Confirmation",icon:"pi pi-exclamation-triangle",acceptIcon:"none",rejectIcon:"none",rejectButtonStyleClass:"p-button-text",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted"}),this.ordersStore.dispatch(te({orderId:r.id}))},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}filterQueryValues(r){console.log("filterQueryValues",r),this.ordersStore.dispatch(X({request:r,pageNo:this.pageEvent.page,pageSize:this.pageEvent.rows})),this.fetchFilterdListSubscribe&&this.fetchFilterdListSubscribe.unsubscribe(),this.fetchFilterdListSubscribe=this.ordersStore.select(v).subscribe(e=>{console.log("fetchFilterdList --------->",e)})}onChangeViewType(r){console.log("onChangeViewType",r),this.viewType=r,this.createConfigurationForTheSharedTableComponent()}onPagePaginatorChange(r){this.pageEvent=r,this.loadData()}ngOnDestroy(){this.fetchFilterdListSubscribe&&this.fetchFilterdListSubscribe.unsubscribe()}static{this.\u0275fac=function(e){return new(e||i)(s(q),s(Y),s(H),s(z),s(u),s(h),s(m))}}static{this.\u0275cmp=w({type:i,selectors:[["app-orders"]],standalone:!0,features:[V([u,h,m]),F,E],decls:9,vars:8,consts:[[3,"onAddNewBtn","onEditBtn","onDeleteBtn","config"],[3,"filterFormvalues","viewTypeValue"],[3,"onViewBtn","onEditBtn","onDeleteBtn","config","length"],["TabelContent",""],[3,"onPagePaginatorChange","length"]],template:function(e,t){e&1&&(D(0,"p-toast")(1,"p-confirmDialog"),a(2,"app-component-header",0),l("onAddNewBtn",function(o){return t.onAddNewBtn(o)})("onEditBtn",function(o){return t.onEditBtn(o)})("onDeleteBtn",function(o){return t.onDeleteBtn(o)}),d(),a(3,"app-filters",1),l("filterFormvalues",function(o){return t.filterQueryValues(o)})("viewTypeValue",function(o){return t.onChangeViewType(o)}),d(),a(4,"app-table-container",2),g(5,"async"),l("onViewBtn",function(o){return t.onView(o)})("onEditBtn",function(o){return t.onEdit(o)})("onDeleteBtn",function(o){return t.onDelete(o)}),P(6,3),d(),a(7,"app-paginator",4),g(8,"async"),l("onPagePaginatorChange",function(o){return t.onPagePaginatorChange(o)}),d()),e&2&&(p(2),c("config",t.sharedHeaderComponentConfig),p(2),c("config",t.sharedTableComponentConfig)("length",C(5,4,t.totalData$)||0),p(3),c("length",C(8,6,t.totalData$)||0))},dependencies:[A,L,j,O,$,R,J,x,k,U,G,M]})}}return i})();export{Ne as OrdersComponent};
