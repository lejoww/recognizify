(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1376cf69"],{"0e09":function(t,a,e){t.exports=e.p+"img/feather-sprite.5113e3a1.svg"},1008:function(t,a,e){t.exports=e.p+"img/logo-common-cutted.41f77807.svg"},"2bff":function(t,a,e){},"365b":function(t,a,e){},"66aa":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dropdown"},[e("a",{attrs:{id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("div",{staticClass:"current-profile"},[e("div",{staticClass:"profile-content"},[e("img",{attrs:{src:t.urlPhotoPath}})])])]),e("div",{staticClass:"profileMenu"},[e("div",{staticClass:"dropdown-menu profileMenuList",attrs:{"aria-labelledby":"dropdownMenuButton"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/select"}},[t._v("Mis proyectos")])],1),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/notifications",id:"invitationsLink"}},[t._v("Notificaciones")])],1),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/account/configuration"}},[t._v("Configuración")])],1),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Sobre Recognizify")]),e("div",{staticClass:"dropdown-divider"}),e("a",{staticClass:"dropdown-item",staticStyle:{color:"#FF524C"},attrs:{href:"#"},on:{click:t.closeSession}},[t._v("Cerrar sesión")])])])])},n=[],i=e("8aa5"),r=e.n(i),o=(e("365b"),{data:function(){return{urlPhotoPath:""}},mounted:function(){var t=this;r.a.auth().onAuthStateChanged(function(a){r.a.storage().ref("profile_photos/".concat(a.uid)).getDownloadURL().then(function(a){return t.urlPhotoPath=a})}),r.a.auth().onAuthStateChanged(function(t){r.a.firestore().collection("users").doc(t.uid).collection("invitations").get().then(function(t){if(t.docs.length>=1){var a=document.getElementById("invitationsLink");a.insertAdjacentHTML("beforeend",' <span class="badge badge-danger">'.concat(t.docs.length,"</span>"))}})})},methods:{closeSession:function(){r.a.auth().signOut(),window.location="/"}}}),l=o,c=e("2877"),d=Object(c["a"])(l,s,n,!1,null,null,null);a["a"]=d.exports},8280:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"lateral-menu-container"},[t._m(0),s("div",{staticClass:"lateral-menu-body"},[s("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.feedPath}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":e("0e09")+"#home"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Resumen")])]),s("router-link",{staticClass:"lateralPanelOption",attrs:{to:"/account/configuration"}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":e("0e09")+"#settings"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Configuración")])]),s("router-link",{staticClass:"lateralPanelOption",attrs:{to:"#"}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":e("0e09")+"#package"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Tienda de paquetes")])]),s("br"),s("div",{staticClass:"text-muted"},[t._v("Módulos")]),s("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.boardPath}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":e("0e09")+"#message-square"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Boards")])]),s("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.usersPath}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":e("0e09")+"#users"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Usuarios")])])],1)])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"lateral-menu-header"},[s("img",{attrs:{src:e("1008"),width:"147px",alt:"Logotipo de Recognizify"}})])}],i=e("8aa5"),r=e.n(i),o=(e("2bff"),e("365b"),{data:function(){return{activeProjects:"",currentProjectName:"",usersPath:"",feedPath:"",boardPath:""}},created:function(){var t=this;this.getAndSetActiveProjects(),r.a.auth().onAuthStateChanged(function(a){var e=t.$router.history.current.params.projectId;t.usersPath="/project/".concat(e,"/membership"),t.feedPath="/project/".concat(e,"/feed"),t.boardPath="/project/".concat(e,"/board")})},methods:{getAndSetActiveProjects:function(){var t=this;r.a.auth().onAuthStateChanged(function(a){r.a.firestore().collection("users").doc(a.uid).collection("projects").get().then(function(a){t.activeProjects=a.docs.length})})}}}),l=o,c=e("2877"),d=Object(c["a"])(l,s,n,!1,null,null,null);a["a"]=d.exports},"8f3a":function(t,a,e){},"9b27":function(t,a,e){"use strict";var s=e("8aa5"),n=e.n(s);n.a.auth().onAuthStateChanged(function(t){t||(console.log("No existe usuario actualmente"),"/"!=window.location&&(window.location="/"))})},aa6a:function(t,a,e){t.exports=e.p+"img/meeting.887f71b7.png"},acfc:function(t,a,e){},d839:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"navbar"}},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light navbar-flexible"},[t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[e("router-link",{attrs:{to:t.feedPath}},[t._v("Resumen")])],1)]),e("li",[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[e("router-link",{attrs:{to:t.boardPath}},[t._v("Boards")])],1)]),t._m(1),t._m(2),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[e("router-link",{attrs:{to:t.usersPath}},[t._v("Usuarios")])],1)])])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Activar navegación"}},[e("span",[e("i",{staticClass:"fas fa-bars"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Emocionalidad")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Tareas")])])}],i=e("8aa5"),r=e.n(i),o=(e("5aea"),e("365b"),e("9b27"),e("e100"),{data:function(){return{username:"",currentProjectName:"",usersPath:"",feedPath:"",boardPath:""}},methods:{closeSession:function(){r.a.auth().signOut().then(window.location="/")}}}),l=o,c=e("2877"),d=Object(c["a"])(l,s,n,!1,null,null,null);a["a"]=d.exports},d84c:function(t,a,e){t.exports=e.p+"img/isotipe-color.657e829b.svg"},e100:function(t,a){},e4a4:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"board"}},[e("div",{staticClass:"screenContent"},[e("Profile"),e("div",{staticClass:"dashboardContent"},[e("LateralPanel"),t._m(0),t._m(1)],1)],1)])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal fade in",attrs:{id:"helpingModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header",staticStyle:{"border-bottom":"0"}},[s("div",{staticStyle:{width:"100%",margin:"0 auto","text-align":"center"}},[s("h1",{staticClass:"modal-title"},[t._v("Boards")]),s("p",{staticClass:"text-muted"},[t._v("Una nueva forma de transmitir ideas")])]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"modal-body"},[s("p",[s("strong",[t._v("Boards")]),t._v(" es un módulo más de la familia de Recognizify. Permite que todo tu equipo pueda aportar ideas y mantenerlas frescas, en todo momento. Podrás convertirlas en tareas, objetivos, crear listas con ellas y más. Explora y descubre.")]),s("img",{attrs:{src:e("aa6a"),width:"100%"}})]),s("div",{staticClass:"modal-footer",staticStyle:{"border-top":"0"}},[s("button",{staticClass:"btn btn-success",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Continuar")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"projectBoard"},[s("div",{staticClass:"row"},[s("input",{staticClass:"form-control-special form-control-xl",attrs:{type:"text",spellcheck:"false",placeholder:"Escribe el nombre del tablero"}})]),s("div",{staticClass:"toast",attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true"}},[s("div",{staticClass:"toast-header"},[s("img",{staticClass:"rounded mr-2",attrs:{src:e("d84c"),width:"32px",height:"32px",alt:"..."}}),s("strong",{staticClass:"mr-auto"},[t._v("Recognizify")]),s("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),s("div",{staticClass:"toast-body"},[t._v("\n                        Hola, bienvenido al módulo de Boards de Recognizify. Aquí todo tu equipo puede dejar notas y contribuir.\n                        "),s("a",{attrs:{href:"#","data-toggle":"modal","data-target":"#helpingModal"}},[t._v("Da click aquí para saber más")])])])])}],i=(e("8aa5"),e("8280")),r=e("66aa"),o=e("d839"),l=(e("8f3a"),e("acfc"),{components:{LateralPanel:i["a"],Profile:r["a"],UserNavbar:o["a"]},mounted:function(){}}),c=l,d=e("2877"),u=Object(d["a"])(c,s,n,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-1376cf69.958566d7.js.map