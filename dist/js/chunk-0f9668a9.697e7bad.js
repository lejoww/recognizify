(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f9668a9"],{"0e09":function(t,a,e){t.exports=e.p+"img/feather-sprite.5113e3a1.svg"},"2bff":function(t,a,e){},"365b":function(t,a,e){},"386d":function(t,a,e){"use strict";var s=e("cb7c"),n=e("83a1"),r=e("5f1b");e("214f")("search",1,function(t,a,e,i){return[function(e){var s=t(this),n=void 0==e?void 0:e[a];return void 0!==n?n.call(e,s):new RegExp(e)[a](String(s))},function(t){var a=i(e,t,this);if(a.done)return a.value;var o=s(t),l=String(this),c=o.lastIndex;n(c,0)||(o.lastIndex=0);var d=r(o,l);return n(o.lastIndex,c)||(o.lastIndex=c),null===d?-1:d.index}]})},"66aa":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dropdown"},[e("a",{attrs:{id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("div",{staticClass:"current-profile"},[e("div",{staticClass:"profile-content"},[e("img",{attrs:{src:t.urlPhotoPath}})])])]),e("div",{staticClass:"profileMenu"},[e("div",{staticClass:"dropdown-menu profileMenuList",attrs:{"aria-labelledby":"dropdownMenuButton"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/select"}},[t._v("Mis proyectos")])],1),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/notifications",id:"invitationsLink"}},[t._v("Notificaciones")])],1),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/account/configuration"}},[t._v("Configuración")])],1),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Sobre Recognizify")]),e("div",{staticClass:"dropdown-divider"}),e("a",{staticClass:"dropdown-item",staticStyle:{color:"#FF524C"},attrs:{href:"#"},on:{click:t.closeSession}},[t._v("Cerrar sesión")])])])])},n=[],r=e("8aa5"),i=e.n(r),o=(e("365b"),{data:function(){return{urlPhotoPath:""}},mounted:function(){var t=this;i.a.auth().onAuthStateChanged(function(a){i.a.storage().ref("profile_photos/".concat(a.uid)).getDownloadURL().then(function(a){return t.urlPhotoPath=a})}),i.a.auth().onAuthStateChanged(function(t){i.a.firestore().collection("users").doc(t.uid).collection("invitations").get().then(function(t){if(t.docs.length>=1){var a=document.getElementById("invitationsLink");a.insertAdjacentHTML("beforeend",' <span class="badge badge-danger">'.concat(t.docs.length,"</span>"))}})})},methods:{closeSession:function(){i.a.auth().signOut(),window.location="/"}}}),l=o,c=e("2877"),d=Object(c["a"])(l,s,n,!1,null,null,null);a["a"]=d.exports},"7f7f":function(t,a,e){var s=e("86cc").f,n=Function.prototype,r=/^\s*function ([^ (]*)/,i="name";i in n||e("9e1e")&&s(n,i,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},8280:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"lateral-menu-container"},[t._m(0),s("div",{staticClass:"lateral-menu-body"},[s("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.feedPath}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":e("0e09")+"#home"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Resumen")])]),s("router-link",{staticClass:"lateralPanelOption",attrs:{to:"/account/configuration"}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":e("0e09")+"#settings"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Ajustes")])]),s("router-link",{staticClass:"lateralPanelOption",attrs:{to:"#"}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":e("0e09")+"#package"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Paquetes")])]),s("br"),s("div",{staticClass:"text-muted"},[t._v("Módulos")]),s("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.boardPath}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":e("0e09")+"#message-square"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Boards")])]),s("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.usersPath}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":e("0e09")+"#users"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Usuarios")])])],1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"lateral-menu-header"},[e("div",{staticClass:"logotype"})])}],r=e("8aa5"),i=e.n(r),o=(e("2bff"),e("365b"),{data:function(){return{activeProjects:"",currentProjectName:"",usersPath:"",feedPath:"",boardPath:""}},created:function(){var t=this;this.getAndSetActiveProjects(),i.a.auth().onAuthStateChanged(function(a){var e=t.$router.history.current.params.projectId;t.usersPath="/project/".concat(e,"/membership"),t.feedPath="/project/".concat(e,"/feed"),t.boardPath="/project/".concat(e,"/board")})},methods:{getAndSetActiveProjects:function(){var t=this;i.a.auth().onAuthStateChanged(function(a){i.a.firestore().collection("users").doc(a.uid).collection("projects").get().then(function(a){t.activeProjects=a.docs.length})})}}}),l=o,c=e("2877"),d=Object(c["a"])(l,s,n,!1,null,null,null);a["a"]=d.exports},"83a1":function(t,a){t.exports=Object.is||function(t,a){return t===a?0!==t||1/t===1/a:t!=t&&a!=a}},"8f3a":function(t,a,e){},"9b27":function(t,a,e){"use strict";var s=e("8aa5"),n=e.n(s);n.a.auth().onAuthStateChanged(function(t){t||(console.log("No existe usuario actualmente"),"/"!=window.location&&(window.location="/"))})},d839:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"navbar"}},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light navbar-flexible"},[t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[e("router-link",{attrs:{to:t.feedPath}},[t._v("Resumen")])],1)]),e("li",[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[e("router-link",{attrs:{to:t.boardPath}},[t._v("Boards")])],1)]),t._m(1),t._m(2),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[e("router-link",{attrs:{to:t.usersPath}},[t._v("Usuarios")])],1)])])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Activar navegación"}},[e("span",[e("i",{staticClass:"fas fa-bars"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Emocionalidad")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Tareas")])])}],r=e("8aa5"),i=e.n(r),o=(e("5aea"),e("365b"),e("9b27"),e("e100"),{data:function(){return{username:"",currentProjectName:"",usersPath:"",feedPath:"",boardPath:""}},methods:{closeSession:function(){i.a.auth().signOut().then(window.location="/")}}}),l=o,c=e("2877"),d=Object(c["a"])(l,s,n,!1,null,null,null);a["a"]=d.exports},e100:function(t,a){},ea20:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"users"}},[e("div",{staticClass:"screenContent"},[e("Profile"),e("div",{staticClass:"dashboardContent"},[e("LateralPanel"),e("UserRegistry")],1)],1)])},n=[],r=e("d839"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"usersRegistry"}},[e("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),e("div",{staticClass:"modal-body"},[e("p",[t._v("Para añadir un miembro a tu proyecto, ya debe de estar registrado en la plataforma: escribe su nombre de usuario")]),e("br"),e("br"),e("div",{staticClass:"input-group mb-3"},[t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Escribe el @user del usuario","aria-describedby":"basic-addon1"},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}})])]),e("div",{staticClass:"modal-footer",staticStyle:{border:"none"}},[e("button",{staticClass:"btn btn-info",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancelar")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#invitationModal"},on:{click:t.proposeAnUserWithSearch}},[t._v("Buscar usuario")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"invitationModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(2),e("div",{staticClass:"modal-body"},[e("p",[t._v("Asegúrate de que conoces a esta persona antes de enviarle una invitación a participar de tu idea.")]),e("br"),e("h4",{staticStyle:{"text-align":"center"},domProps:{textContent:t._s(t.UserNameInvited)}})]),e("div",{staticClass:"modal-footer",staticStyle:{border:"none"}},[e("button",{staticClass:"btn btn-info",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancelar")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.sendInvitationToSelectedUser}},[t._v("Enviar invitación")])])])])]),t._m(3),t._m(4)])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header",staticStyle:{border:"none"}},[e("h5",{staticClass:"modal-title"},[t._v("¿Quién trabaja contigo?")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("@")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header",staticStyle:{border:"none"}},[e("h5",{staticClass:"modal-title"},[t._v("Enviar invitación")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"usersListTable",attrs:{id:"usersListTable"}},[e("h6",[t._v("Usuarios en tu proyecto")]),e("table",{staticClass:"table",staticStyle:{width:"56%"}},[e("thead",{staticClass:"thead-dark"},[e("tr",{staticStyle:{"font-size":"14px"}},[e("th",{attrs:{scope:"col"}},[t._v("Nombre")]),e("th",{attrs:{scope:"col"}},[t._v("Usuario")]),e("th",{attrs:{scope:"col"}},[t._v("Rol")])])]),e("tbody",{attrs:{id:"projectUsersField"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bannerNonUsers",attrs:{id:"bannerNonUsers"}},[e("div",[e("h3",[t._v("Invita a más personas a tu proyecto")]),e("p",[t._v("Puedes agregar a más usuarios en el proyecto si conoces su nombre de usuario.")]),e("button",{staticClass:"btn btn-success btn-sm",attrs:{"data-toggle":"modal","data-target":"#exampleModal"}},[t._v("Invitar a alguien")])])])}],l=(e("386d"),e("6b54"),e("7f7f"),e("ac6a"),e("8aa5")),c=e.n(l),d=(e("f880"),{data:function(){return{search:"",UserNameInvited:"",UserInvited:""}},mounted:function(){this.getUsersOnThisProject()},methods:{getUsersOnThisProject:function(){var t=this.$router.history.current.params["projectId"];c.a.firestore().collection("projects").doc(t).collection("members").get().then(function(t){if(console.log(t.docs.length),t.docs.length>=1){var a=document.getElementById("usersListTable"),e=document.getElementById("projectUsersField");a.style.display="block",t.forEach(function(t){e.insertAdjacentHTML("beforeend","\n                <tr>\n                  <td>".concat(t.data()["name"],"</td>\n                  <td>").concat(t.data()["user"]?"@"+t.data()["user"]:"No tiene un usuario","</td>\n                  <td>").concat(t.data()["role"]?t.data()["role"]:"No tiene rol asignado","</td>\n                </tr>\n              "))})}if(t.docs.length<1){var s=document.getElementById("bannerNonUsers");s.style.display="none"}})},proposeAnUserWithSearch:function(){var t=this;c.a.firestore().collection("users").get().then(function(a){a.forEach(function(a){t.search.toString()==a.data()["user"]&&(t.UserInvited=a.data()["user"],t.enableNewMemberInvitationCard(a.data()["name"]))})})},enableNewMemberInvitationCard:function(t){this.UserNameInvited=t},sendInvitationToSelectedUser:function(){var t=this;c.a.firestore().collection("users").get().then(function(a){a.docs.forEach(function(a){if(a.data()["user"]==t.UserInvited){var e=a.id,s=t.$router.history.current.params["projectId"];c.a.firestore().collection("projects").doc(s).get().then(function(t){c.a.firestore().collection("users").doc(e).collection("invitations").doc(s).set({pname:t.data()["shortName"]})})}})})}}}),u=d,v=e("2877"),f=Object(v["a"])(u,i,o,!1,null,null,null),h=f.exports,m=e("8280"),b=e("66aa"),p=(e("8f3a"),{components:{UserNavbar:r["a"],UserRegistry:h,LateralPanel:m["a"],Profile:b["a"]},mounted:function(){"undefined"==this.$router.history.current.params["projectId"]&&this.$router.push("/select")}}),g=p,C=Object(v["a"])(g,s,n,!1,null,null,null);a["default"]=C.exports},f880:function(t,a,e){}}]);
//# sourceMappingURL=chunk-0f9668a9.697e7bad.js.map