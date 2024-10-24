import{a as x,b as V,c as F,e as G,f as J,g as K}from"./chunk-G7GKDBDS.js";import{a as H}from"./chunk-MXTATJDI.js";import{b as i,c as m,l as M,m as C,n as v,o as B,s as h,t as T}from"./chunk-VHK6HW5T.js";import{r as O}from"./chunk-CBDC4O62.js";import{B as A,K as w,Z as N,_ as z,ca as j,g as k,ha as S,m as y,r as f,t as $}from"./chunk-WWR4BG2S.js";import{a as d,b as u}from"./chunk-MON7YFGF.js";var D=i("[Employee] Load Employees",m()),L=i("[Employee] Load Employees Success",m()),R=i("[Employee] Load Employees Failure",m()),Q=i("[Employee] Load Filterd Employees",m()),W=i("[Employee] Load Filterd Employees Success",m()),X=i("[Employee] Load Filterd Employees Failure",m()),Y=i("[Employee] Create Employee",m()),b=i("[Employee] Create Employee Success",m()),Z=i("[Employee] Create Employee Failure",m()),ee=i("[Employee] Update Employee",m()),P=i("[Employee] Update Employee Success",m()),te=i("[Employee] Update Employee Failure",m()),oe=i("[Employee] Delete Employee",m()),q=i("[Employee] Delete Employee Success",m()),se=i("[Employee] Delete Employee Failure",m());var n=G({selectId:e=>e._id});var U=B("employees"),{selectAll:g,selectEntities:pe,selectIds:he,selectTotal:le}=n.getSelectors(U),fe=v(g,pe,le,U,(e,l,t,r)=>{let{pageNo:c,pageSize:o}=r,p=(c-1)*o,s=p+o,a=e.slice(p,s);return{entities:l,total:t,pageNo:c,pageSize:o,data:a}}),Ae=v(g,pe,le,U,(e,l,t,r)=>{let{pageNo:c,pageSize:o}=r,p=c*o,s=p+o,a=e.slice(p,s);return{entities:l,total:t,pageNo:c,pageSize:o,data:a}}),Se=v(U,e=>e.totalData);var I=H,ie=(()=>{class e extends J{constructor(t){super(t),this.employeeDataSubject=new k([]),this.employeeData$=this.employeeDataSubject.asObservable()}create(t){return this.http.post(`${I.API_URL}employees.json`,t)}getAllItems(t){let{queryParams:r}=this.initializeRequest(t);return this.http.get(`${I.API_URL}employees.json`).pipe(N(c=>{this.employeeDataSubject.next(c.data)}))}updateItem(t,r){return this.http.put(`${I.API_URL}employees.json`,r)}deleteItem(t){return this.http.delete(`${I.API_URL}employees.json`)}getItem(t){throw new Error("Method not implemented.")}checkPhone(t){let r={};r.phone=t,r.pageNo=50;let{queryParams:c}=this.initializeRequest(r);return this.http.get(`${I.API_URL}/employees/check-phone/${t}?${c}`)}search(t,r){let{queryParams:c}=this.initializeRequest(r);return this.http.get(`${I.API_URL}/employees/search/${t}?${c}`)}static{this.\u0275fac=function(r){return new(r||e)(S(O))}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var qe=(()=>{class e{constructor(t,r,c){this.actions$=t,this.employeesService=r,this.store=c,this.getAllItems$=x(()=>this.actions$.pipe(F(D),z(this.store.pipe(C(g))),w(([o,p])=>p.length===0?this.employeesService.getAllItems(o.request).pipe(f(s=>{let a=s.data.map(E=>u(d({},E),{id:E.user_id,_id:E.user_id})),_=s.totalData;return L({employees:a,totalData:_})}),A(s=>y(R({error:s})))):y()))),this.getFilterdItems$=x(()=>this.actions$.pipe(F(Q),z(this.store.pipe(C(g))),w(([o,p])=>(console.log("data --->",p,o),p.length===0?this.employeesService.getAllItems(o.request).pipe(f(s=>{let a=s.data.map(E=>u(d({},E),{id:E.user_id,_id:E.user_id})),_=s.totalData;return W({employees:a,totalData:_})}),A(s=>y(X({error:s})))):y())))),this.createEmployee$=x(()=>this.actions$.pipe(F(Y),$(({employee:o})=>this.employeesService.create(o).pipe(f(p=>{let s=p.data[0];return b({employee:s})}),A(p=>y(Z({error:p}))))))),this.updateEmployee$=x(()=>this.actions$.pipe(F(ee),$(({id:o,newItem:p})=>this.employeesService.updateItem(o,p).pipe(f(s=>{let a=s.data[0];return P({employee:a})}),A(s=>y(te({error:s}))))))),this.deleteEmployee$=x(()=>this.actions$.pipe(F(oe),$(({employeeId:o})=>this.employeesService.deleteItem(o).pipe(f(()=>q({employeeId:o})),A(p=>y(se({error:p})))))))}static{this.\u0275fac=function(r){return new(r||e)(S(V),S(ie),S(M))}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac})}}return e})();var me=n.getInitialState(new K);var Me=T(me,h(D,(e,{pageNo:l,pageSize:t,sortBy:r,sortOrder:c,filterBy:o,filterValue:p,findById:s})=>u(d({},e),{pageNo:l,pageSize:t,loading:!0,error:null,sortBy:r,sortOrder:c,filterBy:o,filterValue:p,findById:s})),h(L,(e,{employees:l,totalData:t})=>n.setAll(l,u(d({},e),{totalData:t,loading:!1}))),h(R,(e,{error:l})=>u(d({},e),{error:l,loading:!1})),h(b,(e,{employee:l})=>n.addOne(l,e)),h(P,(e,{employee:l})=>n.updateOne({id:l._id,changes:l},e)),h(q,(e,{employeeId:l})=>n.removeOne(l,e)));export{D as a,Q as b,Y as c,ee as d,oe as e,pe as f,le as g,Ae as h,qe as i,Me as j};
