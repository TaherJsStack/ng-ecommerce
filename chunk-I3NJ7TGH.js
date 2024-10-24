import{a as F,b as V,c as I,e as G,f as J,g as K}from"./chunk-G7GKDBDS.js";import{a as H}from"./chunk-MXTATJDI.js";import{b as o,c,l as M,m as z,n as D,o as B,s as f,t as T}from"./chunk-VHK6HW5T.js";import{r as O}from"./chunk-CBDC4O62.js";import{B as S,K as w,Z as N,_ as E,ca as v,g as k,ha as x,m as C,r as A,t as j}from"./chunk-WWR4BG2S.js";import{a as m,b as h}from"./chunk-MON7YFGF.js";var L=o("[Client] Load Clients",c()),R=o("[Client] Load Clients Success",c()),b=o("[Client] Load Clients Failure",c()),Q=o("[Client] Load Filterd Clients",c()),W=o("[Client] Load Filterd Clients Success",c()),X=o("[Client] Load Filterd Clients Failure",c()),Y=o("[Client] Create Client",c()),P=o("[Client] Create Client Success",c()),Z=o("[Client] Create Client Failure",c()),tt=o("[Client] Update Client",c()),q=o("[Client] Update Client Success",c()),et=o("[Client] Update Client Failure",c()),it=o("[Client] Delete Client",c()),U=o("[Client] Delete Client Success",c()),nt=o("[Client] Delete Client Failure",c());var d=G({selectId:t=>t._id});var _=B("clients"),{selectAll:$,selectEntities:rt,selectIds:ft,selectTotal:lt}=d.getSelectors(_),At=D($,rt,lt,_,(t,l,e,s)=>{let{pageNo:a,pageSize:i}=s,r=(a-1)*i,n=r+i,p=t.slice(r,n);return{entities:l,total:e,pageNo:a,pageSize:i,data:p}}),St=D($,rt,lt,_,(t,l,e,s)=>{let{pageNo:a,pageSize:i}=s,r=a*i,n=r+i,p=t.slice(r,n);return{entities:l,total:e,pageNo:a,pageSize:i,data:p}}),xt=D(_,t=>t.totalData);var g=H,ot=(()=>{class t extends J{constructor(e){super(e),this.clientDataSubject=new k([]),this.clientData$=this.clientDataSubject.asObservable()}create(e){return this.http.post(`${g.API_URL}clients.json`,e)}getAllItems(e){let{queryParams:s}=this.initializeRequest(e);return this.http.get(`${g.API_URL}clients.json`).pipe(N(a=>{this.clientDataSubject.next(a.data)}))}updateItem(e,s){return this.http.put(`${g.API_URL}clients.json`,s)}deleteItem(e){return this.http.delete(`${g.API_URL}clients.json`)}getItem(e){throw new Error("Method not implemented.")}checkPhone(e){let s={};s.phone=e,s.pageNo=50;let{queryParams:a}=this.initializeRequest(s);return this.http.get(`${g.API_URL}/clients/check-phone/${e}?${a}`)}search(e,s){let{queryParams:a}=this.initializeRequest(s);return this.http.get(`${g.API_URL}/clients/search/${e}?${a}`)}static{this.\u0275fac=function(s){return new(s||t)(x(O))}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Ut=(()=>{class t{constructor(e,s,a){this.actions$=e,this.clientsService=s,this.store=a,this.getAllItems$=F(()=>this.actions$.pipe(I(L),E(this.store.pipe(z($))),w(([i,r])=>r.length===0?this.clientsService.getAllItems(i.request).pipe(A(n=>{let p=n.data.map(u=>h(m({},u),{id:u.user_id,_id:u.user_id})),y=n.totalData;return R({clients:p,totalData:y})}),S(n=>C(b({error:n})))):C()))),this.getFilterdItems$=F(()=>this.actions$.pipe(I(Q),E(this.store.pipe(z($))),w(([i,r])=>(console.log("data --->",r,i),r.length===0?this.clientsService.getAllItems(i.request).pipe(A(n=>{let p=n.data.map(u=>h(m({},u),{id:u.user_id,_id:u.user_id})),y=n.totalData;return W({clients:p,totalData:y})}),S(n=>C(X({error:n})))):C())))),this.createClient$=F(()=>this.actions$.pipe(I(Y),j(({client:i})=>this.clientsService.create(i).pipe(A(r=>{let n=r.data[0];return P({client:n})}),S(r=>C(Z({error:r}))))))),this.updateClient$=F(()=>this.actions$.pipe(I(tt),j(({id:i,newItem:r})=>this.clientsService.updateItem(i,r).pipe(A(n=>{let p=n.data[0];return q({client:p})}),S(n=>C(et({error:n}))))))),this.deleteClient$=F(()=>this.actions$.pipe(I(it),j(({clientId:i})=>this.clientsService.deleteItem(i).pipe(A(()=>U({clientId:i})),S(r=>C(nt({error:r})))))))}static{this.\u0275fac=function(s){return new(s||t)(x(V),x(ot),x(M))}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac})}}return t})();var ct=d.getInitialState(new K);var Mt=T(ct,f(L,(t,{pageNo:l,pageSize:e,sortBy:s,sortOrder:a,filterBy:i,filterValue:r,findById:n})=>h(m({},t),{pageNo:l,pageSize:e,loading:!0,error:null,sortBy:s,sortOrder:a,filterBy:i,filterValue:r,findById:n})),f(R,(t,{clients:l,totalData:e})=>d.setAll(l,h(m({},t),{totalData:e,loading:!1}))),f(b,(t,{error:l})=>h(m({},t),{error:l,loading:!1})),f(P,(t,{client:l})=>d.addOne(l,t)),f(q,(t,{client:l})=>d.updateOne({id:l._id,changes:l},t)),f(U,(t,{clientId:l})=>d.removeOne(l,t)));export{L as a,Q as b,Y as c,tt as d,it as e,rt as f,lt as g,St as h,Ut as i,Mt as j};
