(this["webpackJsonppersonal-area"]=this["webpackJsonppersonal-area"]||[]).push([[0],{101:function(t,e,n){t.exports=n(209)},106:function(t,e,n){},107:function(t,e,n){},209:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(42),l=n.n(o),r=(n(106),n(91)),i=n(92),u=n(100),m=n(97),d=n(45),s=n.n(d),E=function(){return c.a.createElement("div",{className:s.a.header},c.a.createElement("div",{className:s.a.logo},"Personal Area"),c.a.createElement("div",{className:s.a.loginBlock},"Profile Name"))},p=(n(107),n(211)),b=n(210),v=Object(b.a)({form:"login"})((function(t){return c.a.createElement("form",{onSubmit:t.handleSubmit},c.a.createElement("div",null,c.a.createElement(p.a,{placeholder:"Login",name:"login",component:"input"})),c.a.createElement("div",null,c.a.createElement(p.a,{placeholder:"password",name:"password",component:"input"})),c.a.createElement("div",null,c.a.createElement("button",null,"Login")))})),h=function(t){return c.a.createElement("div",null,c.a.createElement("h1",null,"Login"),c.a.createElement(v,{onSubmit:function(t){console.log(t)}}))},f=n(20),g=n(18),C=n(98),O=n(15),A={contacts:[{id:1,name:"Cartman",email:"cartman@gmail.com",phone:"01"},{id:2,name:"Stan",email:"stan@gmail.com",phone:"02"},{id:3,name:"Kyle",email:"kyle@gmail.com",phone:"03"},{id:4,name:"Kenny",email:"kenny@gmail.com",phone:"04"},{id:5,name:"Batters",email:"batters@gmail.com",phone:"05"}],buttonActive:!1},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD-CONTACT":var n={id:t.contacts.length?t.contacts[t.contacts.length-1].id+1:1,name:"",email:"",phone:""};return t.buttonActive=!0,Object(O.a)(Object(O.a)({},t),{},{contacts:[].concat(Object(C.a)(t.contacts),[n])});case"EDIT-CONTACT":return t.buttonActive=!1,Object(O.a)(Object(O.a)({},t),{},{contacts:t.contacts.map((function(t){return t.id===e.contactId&&(t.name=e.contactData.name,t.email=e.contactData.email,t.phone=e.contactData.phone),t}))});case"DELETE-CONTACT":return t.buttonActive=!1,Object(O.a)(Object(O.a)({},t),{},{contacts:t.contacts.filter((function(t){return t.id!==e.contactId}))});case"CHANGE_BUTTONS_STATE":return Object(O.a)(Object(O.a)({},t),{},{buttonActive:e.active});default:return t}},j=n(99),S=Object(b.a)({form:"contact"})((function(t){return c.a.createElement("form",{onSubmit:t.handleSubmit},c.a.createElement("div",null,c.a.createElement("button",null,"save")),c.a.createElement("div",null,c.a.createElement(p.a,{required:!0,placeholder:"name",name:"name",component:"input"})),c.a.createElement("div",null,c.a.createElement(p.a,{placeholder:"email",name:"email",component:"input"})),c.a.createElement("div",null,c.a.createElement(p.a,{placeholder:"phone",name:"phone",component:"input"})))})),N=function(t){var e=Object(a.useState)(!1),n=Object(j.a)(e,2),o=n[0],l=n[1];return c.a.createElement("div",null,o||!t.contact.name?c.a.createElement("div",null,c.a.createElement(S,{initialValues:t.contact,onSubmit:function(e){console.log(e),t.editContact(e,t.contact.id),l(!1)},contactId:t.contact.id})):c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){l(!0),t.changeButtonsState(!0)},disabled:t.buttonActive},"Edit"),c.a.createElement("button",{onClick:function(){t.deleteContact(t.contact.id)},disabled:t.buttonActive},"Delete")),c.a.createElement("div",null,c.a.createElement("div",null,"name: ",t.contact.name),c.a.createElement("div",null,"email: ",t.contact.email),c.a.createElement("div",null,"phone: ",t.contact.phone))))},B=n(95),_=n.n(B),k=function(t){return c.a.createElement("div",null,c.a.createElement("h3",null,"Contacts:"),c.a.createElement("button",{onClick:t.addContact,disabled:t.buttonActive},"Add contact"),c.a.createElement("div",{className:_.a.contacts},t.contacts.map((function(e){return c.a.createElement(N,{contact:e,key:e.id,deleteContact:t.deleteContact,editContact:t.editContact,buttonActive:t.buttonActive,changeButtonsState:t.changeButtonsState})}))))},w=Object(g.b)((function(t){return{contacts:t.contactsPage.contacts,buttonActive:t.contactsPage.buttonActive}}),{addContact:function(){return{type:"ADD-CONTACT"}},editContact:function(t,e){return{type:"EDIT-CONTACT",contactData:t,contactId:e}},deleteContact:function(t){return{type:"DELETE-CONTACT",contactId:t}},changeButtonsState:function(t){return{type:"CHANGE_BUTTONS_STATE",active:t}}})((function(t){return c.a.createElement("div",null,c.a.createElement(k,{contacts:t.contacts,addContact:t.addContact,deleteContact:t.deleteContact,editContact:t.editContact,buttonActive:t.buttonActive,changeButtonsState:t.changeButtonsState}))})),y=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"app-wrapper"},c.a.createElement(E,null),c.a.createElement("div",{className:"app-wrapper-content"},c.a.createElement(f.d,null,c.a.createElement(f.b,{path:"/contacts",render:function(){return c.a.createElement(w,null)}}),c.a.createElement(f.b,{path:"/login",render:function(){return c.a.createElement(h,null)}}),c.a.createElement(f.a,{from:"/",to:"/contacts"}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=n(63),I=n(6),H=n(212),L=Object(I.b)({contactsPage:T,form:H.a}),P=Object(I.c)(L);l.a.render(c.a.createElement(D.a,null,c.a.createElement(g.a,{store:P},c.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},45:function(t,e,n){t.exports={header:"Header_header__9Gvmm",logo:"Header_logo__3OnwY",loginBlock:"Header_loginBlock__2f-0t"}},95:function(t,e,n){t.exports={contacts:"Contacts_contacts__ZDtBB"}}},[[101,1,2]]]);
//# sourceMappingURL=main.691f357e.chunk.js.map