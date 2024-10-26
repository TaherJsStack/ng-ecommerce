import{a as F,b as V,c as I,e as J,f as K}from"./chunk-Y2HYYDXH.js";import{a as G}from"./chunk-PNVLM6ZI.js";import{b as d,c,l as N,m as w,n as E,o as B,s as f,t as T}from"./chunk-7C3VAOG7.js";import{a as H}from"./chunk-P7IJNKWV.js";import{F as M}from"./chunk-EEICXFOG.js";import{$ as y,C as S,L as _,_ as z,da as j,g as k,ia as x,m as l,r as A,t as $}from"./chunk-GCV2IDJ5.js";import{a as m,b as h}from"./chunk-MON7YFGF.js";var v=d("[Order] Load Orders",c()),D=d("[Order] Load Orders Success",c()),R=d("[Order] Load Orders Failure",c()),Q=d("[Order] Load Filterd Orders",c()),W=d("[Order] Load Filterd Orders Success",c()),X=d("[Order] Load Filterd Orders Failure",c()),Y=d("[Order] Create Order",c()),L=d("[Order] Create Order Success",c()),Z=d("[Order] Create Order Failure",c()),ee=d("[Order] Update Order",c()),b=d("[Order] Update Order Success",c()),re=d("[Order] Update Order Failure",c()),te=d("[Order] Delete Order",c()),q=d("[Order] Delete Order Success",c()),se=d("[Order] Delete Order Failure",c());var p=G({selectId:e=>e._id});var C=B("orders"),{selectAll:P,selectEntities:ce,selectIds:fe,selectTotal:ae}=p.getSelectors(C),Ae=E(P,ce,ae,C,(e,a,r,s)=>{let{pageNo:n,pageSize:o}=s,i=n*o,t=i+o,O=e.slice(i,t);return{entities:a,total:r,pageNo:n,pageSize:o,data:O}}),Se=E(C,e=>e.totalData);var g=H,ie=(()=>{class e extends J{constructor(r){super(r),this.clientDataSubject=new k([]),this.clientData$=this.clientDataSubject.asObservable()}create(r){return this.http.post(`${g.API_URL}orders.json`,r)}getAllItems(r){let{queryParams:s}=this.initializeRequest(r);return this.http.get(`${g.API_URL}orders.json`).pipe(z(n=>{this.clientDataSubject.next(n.data)}))}updateItem(r,s){return this.http.put(`${g.API_URL}orders.json`,s)}deleteItem(r){return this.http.delete(`${g.API_URL}orders.json`)}getItem(r){throw new Error("Method not implemented.")}checkPhone(r){let s={};s.phone=r,s.pageNo=50;let{queryParams:n}=this.initializeRequest(s);return this.http.get(`${g.API_URL}/orders/check-phone/${r}?${n}`)}search(r,s){let{queryParams:n}=this.initializeRequest(s);return this.http.get(`${g.API_URL}/orders/search/${r}?${n}`)}static{this.\u0275fac=function(s){return new(s||e)(x(M))}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Pe=(()=>{class e{constructor(r,s,n){this.actions$=r,this.ordersService=s,this.store=n,this.getAllItems$=F(()=>this.actions$.pipe(I(v),y(this.store.pipe(w(P))),_(([o,i])=>i.length===0?this.ordersService.getAllItems(o.request).pipe(A(t=>{let O=t.data.map(u=>h(m({},u),{id:u.order_id,_id:u.order_id})),U=t.totalData;return D({orders:O,totalData:U})}),S(t=>l(R({error:t})))):l()))),this.getFilterdItems$=F(()=>this.actions$.pipe(I(Q),y(this.store.pipe(w(P))),_(([o,i])=>i.length===0?this.ordersService.getAllItems(o.request).pipe(A(t=>{let O=t.data.map(u=>h(m({},u),{id:u.user_id,_id:u.user_id})),U=t.totalData;return W({orders:O,totalData:U})}),S(t=>l(X({error:t})))):l()))),this.createOrder$=F(()=>this.actions$.pipe(I(Y),$(({order:o})=>this.ordersService.create(o).pipe(A(i=>{let t=i.data[0];return L({order:t})}),S(i=>l(Z({error:i}))))))),this.updateOrder$=F(()=>this.actions$.pipe(I(ee),$(({id:o,newItem:i})=>this.ordersService.updateItem(o,i).pipe(A(t=>{let O=t.data[0];return b({order:O})}),S(t=>l(re({error:t}))))))),this.deleteOrder$=F(()=>this.actions$.pipe(I(te),$(({orderId:o})=>this.ordersService.deleteItem(o).pipe(A(()=>q({orderId:o})),S(i=>l(se({error:i})))))))}static{this.\u0275fac=function(s){return new(s||e)(x(V),x(ie),x(N))}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac})}}return e})();var de=p.getInitialState(new K);var Me=T(de,f(v,(e,{pageNo:a,pageSize:r,sortBy:s,sortOrder:n,filterBy:o,filterValue:i,findById:t})=>h(m({},e),{pageNo:a,pageSize:r,loading:!0,error:null,sortBy:s,sortOrder:n,filterBy:o,filterValue:i,findById:t})),f(D,(e,{orders:a,totalData:r})=>p.setAll(a,h(m({},e),{totalData:r,loading:!1}))),f(R,(e,{error:a})=>h(m({},e),{error:a,loading:!1})),f(L,(e,{order:a})=>p.addOne(a,e)),f(b,(e,{order:a})=>p.updateOne({id:a._id,changes:a},e)),f(q,(e,{orderId:a})=>p.removeOne(a,e)));export{v as a,Q as b,Y as c,ee as d,te as e,ce as f,ae as g,Ae as h,Pe as i,Me as j};
