(this["webpackJsonppersonal-area"]=this["webpackJsonppersonal-area"]||[]).push([[0],{107:function(t,e,n){t.exports={login:"Login_login__1vxFn"}},114:function(t,e,n){t.exports=n(239)},119:function(t,e,n){},120:function(t,e,n){},239:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(45),l=n.n(o),i=(n(119),n(103)),r=n(104),u=n(113),m=n(111),s=(n(120),n(241)),d=n(240),h=n(12),E=n(14),b=n(106).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"6dc64a36-ec10-411f-b11d-c98c17f272e5"}}),v=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return b.post("auth/login",{email:t,password:e,rememberMe:n})},p=function(){return b.delete("auth/login")},f={isAuth:!1},g=function(t){return{type:"LOGIN",isAuth:t}},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOGIN":return Object(E.a)(Object(E.a)({},t),{},{isAuth:e.isAuth});default:return t}},C=n(21),O=n(107),_=n.n(O),j=Object(d.a)({form:"login"})((function(t){return c.a.createElement("form",{onSubmit:t.handleSubmit},c.a.createElement("div",null,c.a.createElement(s.a,{placeholder:"email",name:"email",component:"input"})),c.a.createElement("div",null,c.a.createElement(s.a,{placeholder:"password",name:"password",component:"input"})),c.a.createElement("div",null,c.a.createElement("button",null,"Login")))})),S=Object(h.b)((function(t){return{isAuth:t.auth.isAuth}}),{login:function(t,e){return function(n){v(t,e).then((function(t){0===t.data.resultCode&&n(g(!0))}))}}})((function(t){return t.isAuth?c.a.createElement(C.a,{to:"/contacts"}):c.a.createElement("div",{className:_.a.login},c.a.createElement("h3",null,"Login"),c.a.createElement(j,{onSubmit:function(e){t.login(e.email,e.password)}}))})),T=n(112),w={contacts:[{id:1,name:"Cartman",email:"cartman@gmail.com",phone:"01"},{id:2,name:"Stan",email:"stan@gmail.com",phone:"02"},{id:3,name:"Kyle",email:"kyle@gmail.com",phone:"03"},{id:4,name:"Kenny",email:"kenny@gmail.com",phone:"04"},{id:5,name:"Batters",email:"batters@gmail.com",phone:"05"}],buttonActive:!1},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD-CONTACT":var n={id:t.contacts.length?t.contacts[t.contacts.length-1].id+1:1,name:"",email:"",phone:""};return t.buttonActive=!0,Object(E.a)(Object(E.a)({},t),{},{contacts:[].concat(Object(T.a)(t.contacts),[n])});case"EDIT-CONTACT":return t.buttonActive=!1,Object(E.a)(Object(E.a)({},t),{},{contacts:t.contacts.map((function(t){return t.id===e.contactId&&(t.name=e.contactData.name,t.email=e.contactData.email,t.phone=e.contactData.phone),t}))});case"DELETE-CONTACT":return t.buttonActive=!1,Object(E.a)(Object(E.a)({},t),{},{contacts:t.contacts.filter((function(t){return t.id!==e.contactId}))});case"CHANGE_BUTTONS_STATE":return Object(E.a)(Object(E.a)({},t),{},{buttonActive:e.active});default:return t}},y=n(36),k=Object(d.a)({form:"contact"})((function(t){return c.a.createElement("form",{onSubmit:t.handleSubmit},c.a.createElement("div",null,c.a.createElement("button",null,"save")),c.a.createElement("div",null,c.a.createElement(s.a,{required:!0,placeholder:"name",name:"name",component:"input"})),c.a.createElement("div",null,c.a.createElement(s.a,{placeholder:"email",name:"email",component:"input"})),c.a.createElement("div",null,c.a.createElement(s.a,{placeholder:"phone",name:"phone",component:"input"})))})),B=n(71),D=n.n(B),I=function(t){var e=Object(a.useState)(!1),n=Object(y.a)(e,2),o=n[0],l=n[1];return c.a.createElement("div",{className:D.a.contact},o||!t.contact.name?c.a.createElement("div",null,c.a.createElement(k,{initialValues:t.contact,onSubmit:function(e){t.editContact(e,t.contact.id),l(!1)},contactId:t.contact.id})):c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("button",{className:D.a.edit,onClick:function(){l(!0),t.changeButtonsState(!0)},disabled:t.buttonActive},"Edit"),c.a.createElement("button",{onClick:function(){t.deleteContact(t.contact.id),t.deleteSearchContact(t.contact.id)},disabled:t.buttonActive},"Delete")),c.a.createElement("div",null,c.a.createElement("div",null,"name: ",t.contact.name),c.a.createElement("div",null,"email: ",t.contact.email),c.a.createElement("div",null,"phone: ",t.contact.phone))))},L=n(49),P=n.n(L),x=function(t){var e=Object(a.useState)(!1),n=Object(y.a)(e,2),o=n[0],l=n[1],i=Object(a.useState)(t.contacts),r=Object(y.a)(i,2),u=r[0],m=r[1];u.length===t.contacts.length||o||m(t.contacts);var s=function(t){o&&m(u.filter((function(e){return e.id!==t})))};return t.isAuth?c.a.createElement("div",null,c.a.createElement("h3",null,"Contacts"),c.a.createElement("div",{className:P.a.search},"Search:",c.a.createElement("input",{disabled:t.buttonActive,placeholder:"search by name",onChange:function(e){return function(e){var n=e.target.value;n?(m(t.contacts.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))),l(!0)):(m(t.contacts),l(!1))}(e)},type:"text"})),c.a.createElement("div",{className:P.a.contacts},!u.length&&o?c.a.createElement("div",null,"Contacts not found"):u.map((function(e){return c.a.createElement(I,{contact:e,key:e.id,deleteContact:t.deleteContact,editContact:t.editContact,buttonActive:t.buttonActive,changeButtonsState:t.changeButtonsState,deleteSearchContact:s})}))),c.a.createElement("button",{className:P.a.add,onClick:t.addContact,disabled:t.buttonActive||o},"Add contact")):c.a.createElement(C.a,{to:"/login"})},H=Object(h.b)((function(t){return{contacts:t.contactsPage.contacts,buttonActive:t.contactsPage.buttonActive,isAuth:t.auth.isAuth}}),{addContact:function(){return{type:"ADD-CONTACT"}},editContact:function(t,e){return{type:"EDIT-CONTACT",contactData:t,contactId:e}},deleteContact:function(t){return{type:"DELETE-CONTACT",contactId:t}},changeButtonsState:function(t){return{type:"CHANGE_BUTTONS_STATE",active:t}}})((function(t){return c.a.createElement("div",null,c.a.createElement(x,{contacts:t.contacts,addContact:t.addContact,deleteContact:t.deleteContact,editContact:t.editContact,buttonActive:t.buttonActive,changeButtonsState:t.changeButtonsState,isAuth:t.isAuth}))})),G=n(50),J=n.n(G),U=function(t){return c.a.createElement("div",{className:J.a.header},c.a.createElement("div",{className:J.a.logo},"Personal Area"),c.a.createElement("div",{className:J.a.loginBlock},t.isAuth?c.a.createElement("button",{disabled:t.buttonActive,onClick:t.logout},"logout"):null))},K=Object(h.b)((function(t){return{isAuth:t.auth.isAuth,buttonActive:t.contactsPage.buttonActive}}),{logout:function(){return function(t){p().then((function(e){0===e.data.resultCode&&t(g(!1))}))}}})((function(t){return c.a.createElement("div",null,c.a.createElement(U,{isAuth:t.isAuth,logout:t.logout,buttonActive:t.buttonActive}))})),M=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"app-wrapper"},c.a.createElement(K,null),c.a.createElement("div",{className:"app-wrapper-content"},c.a.createElement(C.d,null,c.a.createElement(C.b,{path:"/contacts",render:function(){return c.a.createElement(H,null)}}),c.a.createElement(C.b,{path:"/login",render:function(){return c.a.createElement(S,null)}}),c.a.createElement(C.a,{from:"/",to:"/contacts"}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n(31),V=n(6),W=n(242),X=n(110),Y=Object(V.c)({contactsPage:N,auth:A,form:W.a}),q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.d,F=Object(V.e)(Y,q(Object(V.a)(X.a)));window.__store__=F;var Z=F;l.a.render(c.a.createElement(R.a,null,c.a.createElement(h.a,{store:Z},c.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},49:function(t,e,n){t.exports={contacts:"Contacts_contacts__ZDtBB",add:"Contacts_add__1SbPS",search:"Contacts_search__3moJH"}},50:function(t,e,n){t.exports={header:"Header_header__9Gvmm",logo:"Header_logo__3OnwY",loginBlock:"Header_loginBlock__2f-0t"}},71:function(t,e,n){t.exports={edit:"Contact_edit__2J98v",contact:"Contact_contact__1tStk"}}},[[114,1,2]]]);
//# sourceMappingURL=main.25cc1728.chunk.js.map