(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7567853f"],{1941:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"users"}},[a("div",{staticClass:"dashboardContent"},[a("UserRegistry")],1)])},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"usersRegistry"}},[a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},[a("p",[t._v("Para añadir un miembro a tu proyecto, ya debe de estar registrado en la plataforma: escribe su nombre de usuario")]),a("br"),a("br"),a("div",{staticClass:"input-group mb-3"},[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Escribe el @user del usuario","aria-describedby":"basic-addon1"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])]),a("div",{staticClass:"modal-footer",staticStyle:{border:"none"}},[a("button",{staticClass:"btn btn-info",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancelar")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#invitationModal"},on:{click:t.proposeAnUserWithSearch}},[t._v("Buscar usuario")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"invitationModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(2),a("div",{staticClass:"modal-body"},[a("p",[t._v("Asegúrate de que conoces a esta persona antes de enviarle una invitación a participar de tu idea.")]),a("br"),a("h4",{staticStyle:{"text-align":"center"},domProps:{textContent:t._s(t.UserNameInvited)}})]),a("div",{staticClass:"modal-footer",staticStyle:{border:"none"}},[a("button",{staticClass:"btn btn-info",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancelar")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.sendInvitationToSelectedUser}},[t._v("Enviar invitación")])])])])]),t._m(3),t._m(4)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header",staticStyle:{border:"none"}},[a("h5",{staticClass:"modal-title"},[t._v("¿Quién trabaja contigo?")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("@")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header",staticStyle:{border:"none"}},[a("h5",{staticClass:"modal-title"},[t._v("Enviar invitación")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"usersListTable",attrs:{id:"usersListTable"}},[a("h6",[t._v("Usuarios en tu proyecto")]),a("table",{staticClass:"table"},[a("thead",{staticClass:"thead-dark"},[a("tr",{staticStyle:{"font-size":"14px"}},[a("th",{attrs:{scope:"col"}},[t._v("Nombre")]),a("th",{attrs:{scope:"col"}},[t._v("Usuario")]),a("th",{attrs:{scope:"col"}},[t._v("Rol")])])]),a("tbody",{attrs:{id:"projectUsersField"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bannerNonUsers",attrs:{id:"bannerNonUsers"}},[a("div",[a("h3",[t._v("Invita a más personas a tu proyecto")]),a("p",[t._v("Puedes agregar a más usuarios en el proyecto si conoces su nombre de usuario.")]),a("button",{staticClass:"btn btn-success btn-sm",attrs:{"data-toggle":"modal","data-target":"#exampleModal"}},[t._v("Invitar a alguien")])])])}],i=(a("386d"),a("6b54"),a("7f7f"),a("ac6a"),a("8aa5")),c=a.n(i),d=(a("f880"),a("e010")),l={data:function(){return{search:"",UserNameInvited:"",UserInvited:""}},mounted:function(){this.getUsersOnThisProject()},mixins:[d["a"]],methods:{getUsersOnThisProject:function(){var t=this.$router.history.current.params["projectId"];c.a.firestore().collection("projects").doc(t).collection("members").get().then(function(t){if(console.log(t.docs.length),t.docs.length>=1){var e=document.getElementById("usersListTable"),a=document.getElementById("projectUsersField");e.style.display="block",t.forEach(function(t){a.insertAdjacentHTML("beforeend","\n                <tr>\n                  <td>".concat(t.data()["name"],"</td>\n                  <td>").concat(t.data()["user"]?"@"+t.data()["user"]:"No tiene un usuario","</td>\n                  <td>").concat(t.data()["role"]?t.data()["role"]:"No tiene rol asignado","</td>\n                </tr>\n              "))})}if(0==t.docs.length){var s=document.getElementById("bannerNonUsers");s.style.display="block"}})},proposeAnUserWithSearch:function(){var t=this;c.a.firestore().collection("users").get().then(function(e){e.forEach(function(e){t.search.toString()==e.data()["user"]&&(t.UserInvited=e.data()["user"],t.enableNewMemberInvitationCard(e.data()["name"]))})})},enableNewMemberInvitationCard:function(t){this.UserNameInvited=t},sendInvitationToSelectedUser:function(){var t=this;c.a.firestore().collection("users").get().then(function(e){e.docs.forEach(function(e){if(e.data()["user"]==t.UserInvited){var a=e.id,s=t.$router.history.current.params["projectId"];c.a.firestore().collection("projects").doc(s).get().then(function(e){t.addActivityPoint(),c.a.firestore().collection("users").doc(a).collection("invitations").doc(s).set({pname:e.data()["shortName"]})})}})})}}},u=l,v=a("2877"),m=Object(v["a"])(u,r,o,!1,null,null,null),f=m.exports,p=(a("8f3a"),{components:{UserRegistry:f},created:function(){"undefined"==this.$router.history.current.params["projectId"]&&this.$router.push("/dashboard/select")}}),b=p,h=Object(v["a"])(b,s,n,!1,null,null,null);e["default"]=h.exports},"386d":function(t,e,a){"use strict";var s=a("cb7c"),n=a("83a1"),r=a("5f1b");a("214f")("search",1,function(t,e,a,o){return[function(a){var s=t(this),n=void 0==a?void 0:a[e];return void 0!==n?n.call(a,s):new RegExp(a)[e](String(s))},function(t){var e=o(a,t,this);if(e.done)return e.value;var i=s(t),c=String(this),d=i.lastIndex;n(d,0)||(i.lastIndex=0);var l=r(i,c);return n(i.lastIndex,d)||(i.lastIndex=d),null===l?-1:l.index}]})},"7f7f":function(t,e,a){var s=a("86cc").f,n=Function.prototype,r=/^\s*function ([^ (]*)/,o="name";o in n||a("9e1e")&&s(n,o,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8f3a":function(t,e,a){},e010:function(t,e,a){"use strict";a.d(e,"a",function(){return r});var s=a("8aa5"),n=a.n(s),r={methods:{addActivityPoint:function(){var t=this,e=new Date,a="".concat(e.getUTCDate()).concat(e.getMonth()).concat(e.getFullYear());n.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("dates").doc(a).get().then(function(e){var s=void 0===e.data()||NaN===e.data()?0:e.data()["activityPoints"];t.setActivityPoint(a,s)})},setActivityPoint:function(t,e){n.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("dates").doc(t).set({activityPoints:e+1})}}}},f880:function(t,e,a){}}]);
//# sourceMappingURL=chunk-7567853f.9280a7f0.js.map