(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-721329ac"],{"0e09":function(t,a,e){t.exports=e.p+"img/feather-sprite.5113e3a1.svg"},1008:function(t,a,e){t.exports=e.p+"img/logo-common-cutted.41f77807.svg"},"2bff":function(t,a,e){},"365b":function(t,a,e){},"54dd":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"notifications"}},[n("div",{staticClass:"screenContent"},[n("Profile"),n("div",{staticClass:"dashboardContent"},[n("br"),n("div",{staticClass:"notificationsContent",attrs:{id:"notificationsContent"}},[n("a",{staticStyle:{display:"flex","margin-bottom":"1rem"},attrs:{href:"javascript: history.go(-1)"}},[n("svg",{staticClass:"feather-dark"},[n("use",{attrs:{"xlink:href":e("0e09")+"#arrow-left"}})]),n("h6",[t._v("Volver atrás")])]),n("h2",[t._v("Notificaciones")]),n("p",[t._v("Puede haber cosas aquí que no salgan muy bien. Recuerda que estamos en versión BETA.")])])])],1)])},s=[],o=(e("ac6a"),e("8aa5")),i=e.n(o),r=e("8280"),c=e("66aa"),l=(e("8f3a"),{components:{LateralPanel:r["a"],Profile:c["a"]},mounted:function(){this.getInvitations()},methods:{getInvitations:function(){i.a.auth().onAuthStateChanged(function(t){i.a.firestore().collection("users").doc(t.uid).collection("invitations").get().then(function(t){var a=document.getElementById("notificationsContent");t.docs.length>=1?t.forEach(function(t){a.insertAdjacentHTML("beforeend",'\n                                    <div class="card w-75">\n                                        <div class="card-body">\n                                            <h5 class="card-title">Te acaban de invitar a '.concat(t.data()["pname"],'</h5>\n                                            <p class="card-text">Esto es una solicitud hacia el proyecto de alguien que probablemente te conoce. Tu decides aceptarla o rechazarla</p>\n                                            <a href="/account/').concat(t.id,'/accept" class="btn btn-warning">Aceptar</a>\n                                        </div>\n                                    </div>\n                                '))}):a.insertAdjacentHTML("beforeend","\n                                <p>Aún no tienes invitaciones a otros proyectos</p>\n                            ")})})},acceptInvitation:function(){console.log("Hola mundo")}}}),u=l,d=e("2877"),f=Object(d["a"])(u,n,s,!1,null,null,null);a["default"]=f.exports},"66aa":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dropdown"},[e("a",{attrs:{id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("div",{staticClass:"current-profile"},[e("div",{staticClass:"profile-content"},[e("img",{attrs:{src:t.urlPhotoPath}})])])]),e("div",{staticClass:"profileMenu"},[e("div",{staticClass:"dropdown-menu profileMenuList",attrs:{"aria-labelledby":"dropdownMenuButton"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/select"}},[t._v("Mis proyectos")])],1),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/notifications",id:"invitationsLink"}},[t._v("Notificaciones")])],1),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/account/configuration"}},[t._v("Configuración")])],1),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Sobre Recognizify")]),e("div",{staticClass:"dropdown-divider"}),e("a",{staticClass:"dropdown-item",staticStyle:{color:"#FF524C"},attrs:{href:"#"},on:{click:t.closeSession}},[t._v("Cerrar sesión")])])])])},s=[],o=e("8aa5"),i=e.n(o),r=(e("365b"),{data:function(){return{urlPhotoPath:""}},mounted:function(){var t=this;i.a.auth().onAuthStateChanged(function(a){i.a.storage().ref("profile_photos/".concat(a.uid)).getDownloadURL().then(function(a){return t.urlPhotoPath=a})}),i.a.auth().onAuthStateChanged(function(t){i.a.firestore().collection("users").doc(t.uid).collection("invitations").get().then(function(t){if(t.docs.length>=1){var a=document.getElementById("invitationsLink");a.insertAdjacentHTML("beforeend",' <span class="badge badge-danger">'.concat(t.docs.length,"</span>"))}})})},methods:{closeSession:function(){i.a.auth().signOut(),window.location="/"}}}),c=r,l=e("2877"),u=Object(l["a"])(c,n,s,!1,null,null,null);a["a"]=u.exports},8280:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"lateral-menu-container"},[t._m(0),n("div",{staticClass:"lateral-menu-body"},[n("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.feedPath}},[n("svg",{staticClass:"feather-menu"},[n("use",{attrs:{"xlink:href":e("0e09")+"#home"}})]),n("span",{staticClass:"lateralMenuLink"},[t._v("Resumen")])]),n("router-link",{staticClass:"lateralPanelOption",attrs:{to:"/account/configuration"}},[n("svg",{staticClass:"feather-menu"},[n("use",{attrs:{"xlink:href":e("0e09")+"#settings"}})]),n("span",{staticClass:"lateralMenuLink"},[t._v("Configuración")])]),n("router-link",{staticClass:"lateralPanelOption",attrs:{to:"#"}},[n("svg",{staticClass:"feather-menu"},[n("use",{attrs:{"xlink:href":e("0e09")+"#package"}})]),n("span",{staticClass:"lateralMenuLink"},[t._v("Tienda de paquetes")])]),n("br"),n("div",{staticClass:"text-muted"},[t._v("Módulos")]),n("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.boardPath}},[n("svg",{staticClass:"feather-menu"},[n("use",{attrs:{"xlink:href":e("0e09")+"#message-square"}})]),n("span",{staticClass:"lateralMenuLink"},[t._v("Boards")])]),n("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.usersPath}},[n("svg",{staticClass:"feather-menu"},[n("use",{attrs:{"xlink:href":e("0e09")+"#users"}})]),n("span",{staticClass:"lateralMenuLink"},[t._v("Usuarios")])])],1)])},s=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"lateral-menu-header"},[n("img",{attrs:{src:e("1008"),width:"147px",alt:"Logotipo de Recognizify"}})])}],o=e("8aa5"),i=e.n(o),r=(e("2bff"),e("365b"),{data:function(){return{activeProjects:"",currentProjectName:"",usersPath:"",feedPath:"",boardPath:""}},created:function(){var t=this;this.getAndSetActiveProjects(),i.a.auth().onAuthStateChanged(function(a){var e=t.$router.history.current.params.projectId;t.usersPath="/project/".concat(e,"/membership"),t.feedPath="/project/".concat(e,"/feed"),t.boardPath="/project/".concat(e,"/board")})},methods:{getAndSetActiveProjects:function(){var t=this;i.a.auth().onAuthStateChanged(function(a){i.a.firestore().collection("users").doc(a.uid).collection("projects").get().then(function(a){t.activeProjects=a.docs.length})})}}}),c=r,l=e("2877"),u=Object(l["a"])(c,n,s,!1,null,null,null);a["a"]=u.exports},"8f3a":function(t,a,e){}}]);
//# sourceMappingURL=chunk-721329ac.37475b72.js.map