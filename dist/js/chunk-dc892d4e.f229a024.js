(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc892d4e"],{"0e09":function(t,a,e){t.exports=e.p+"img/feather-sprite.5113e3a1.svg"},1008:function(t,a,e){t.exports=e.p+"img/logo-common-cutted.41f77807.svg"},"2bff":function(t,a,e){},"365b":function(t,a,e){},"628d":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"configuration"}},[e("div",{staticClass:"screenContent"},[e("Profile"),e("div",{staticClass:"dashboardContent"},[e("LateralPanel"),e("div",{staticClass:"configurationView"},[e("h2",[t._v("Configuración")]),e("br"),e("div",{staticClass:"row tabSelector"},[t._m(0),e("div",{attrs:{clas:"tabsContent"}},[e("div",{staticClass:"tab-content",attrs:{id:"v-pills-tabContent"}},[t._m(1),e("div",{staticClass:"tab-pane fade show active",attrs:{id:"v-pills-account",role:"tabpanel","aria-labelledby":"v-pills-account-tab"}},[e("div",{staticClass:"tabInputControls"},[e("h4",[t._v("Cambiar datos de tu cuenta")]),e("p",[t._v("Escribe cómo eres. Recuerda que si no completas todos los datos no podrás actualizar tu información.")]),e("br"),e("div",{staticClass:"changeForm"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("Tu nombre completo")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Como deseas que te llamemos",spellcheck:"false",autocomplete:"off"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"bio"}},[t._v("Tu descripción")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",id:"bio",placeholder:"Descríbete como eres",spellcheck:"false",autocomplete:"off"},domProps:{value:t.description},on:{input:function(a){a.target.composing||(t.description=a.target.value)}}})]),e("div",{staticClass:"input-group mb-3"},[t._m(2),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Escribe un nombre de usuario","aria-label":"Username","aria-describedby":"basic-addon1"},domProps:{value:t.user},on:{input:function(a){a.target.composing||(t.user=a.target.value)}}})]),e("button",{staticClass:"btn btn-secondary",on:{click:t.saveNewDataConfig}},[t._v("Guardar cambios")])])])]),t._m(3)])])])])],1)],1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tabsLinks"},[e("div",{staticClass:"nav flex-column nav-pills",attrs:{id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"}},[e("a",{staticClass:"nav-link",attrs:{id:"v-pills-general-tab","data-toggle":"pill",href:"#v-pills-general",role:"tab","aria-controls":"v-pills-general","aria-selected":"true"}},[t._v("General")]),e("a",{staticClass:"nav-link active",attrs:{id:"v-pills-account-tab","data-toggle":"pill",href:"#v-pills-account",role:"tab","aria-controls":"v-pills-home","aria-selected":"false"}},[t._v("Cuenta")]),e("a",{staticClass:"nav-link",attrs:{id:"v-pills-security-tab","data-toggle":"pill",href:"#v-pills-security",role:"tab","aria-controls":"v-pills-security","aria-selected":"false"}},[t._v("Seguridad")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"tab-pane fade",attrs:{id:"v-pills-general",role:"tabpanel","aria-labelledby":"v-pills-general-tab"}},[s("div",{staticClass:"tabInputControls"},[s("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[s("img",{attrs:{src:e("9a4c"),width:"400px"}}),s("h3",{staticStyle:{color:"#9e95aa"}},[t._v("Seguimos trabajando en este apartado")]),s("p",{staticStyle:{color:"#9e95aa"}},[t._v("Intenta volver luego. Pronto tendremos estas opciones en funcionamiento.")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("@")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"tab-pane fade",attrs:{id:"v-pills-security",role:"tabpanel","aria-labelledby":"v-pills-security-tab"}},[s("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[s("img",{attrs:{src:e("9a4c"),width:"400px"}}),s("h3",{staticStyle:{color:"#9e95aa"}},[t._v("Aún no tenemos opciones de seguridad")]),s("p",{staticStyle:{color:"#9e95aa"}},[t._v("Intenta volver luego. Pronto tendremos estas opciones en funcionamiento.")])])])}],i=(e("7f7f"),e("8aa5")),r=e.n(i),o=e("8280"),l=e("66aa"),c=e("d839"),u=(e("8f3a"),{components:{LateralPanel:o["a"],Profile:l["a"],UserNavbar:c["a"]},data:function(){return{name:"",description:"",user:""}},methods:{saveNewDataConfig:function(){var t=this;r.a.auth().onAuthStateChanged(function(a){r.a.firestore().collection("users").doc(a.uid).update({name:t.name,bio:t.description,user:"@".concat(t.user)}).then(function(){var t=document.getElementById("alert-success");t.style.display="block"})})}}}),d=u,v=e("2877"),f=Object(v["a"])(d,s,n,!1,null,null,null);a["default"]=f.exports},"66aa":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dropdown"},[e("a",{attrs:{id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("div",{staticClass:"current-profile"},[e("div",{staticClass:"profile-content"},[e("img",{attrs:{src:t.urlPhotoPath}})])])]),e("div",{staticClass:"profileMenu"},[e("div",{staticClass:"dropdown-menu profileMenuList",attrs:{"aria-labelledby":"dropdownMenuButton"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/select"}},[t._v("Mis proyectos")])],1),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/notifications",id:"invitationsLink"}},[t._v("Notificaciones")])],1),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/account/configuration"}},[t._v("Configuración")])],1),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Sobre Recognizify")]),e("div",{staticClass:"dropdown-divider"}),e("a",{staticClass:"dropdown-item",staticStyle:{color:"#FF524C"},attrs:{href:"#"},on:{click:t.closeSession}},[t._v("Cerrar sesión")])])])])},n=[],i=e("8aa5"),r=e.n(i),o=(e("365b"),{data:function(){return{urlPhotoPath:""}},mounted:function(){var t=this;r.a.auth().onAuthStateChanged(function(a){r.a.storage().ref("profile_photos/".concat(a.uid)).getDownloadURL().then(function(a){return t.urlPhotoPath=a})}),r.a.auth().onAuthStateChanged(function(t){r.a.firestore().collection("users").doc(t.uid).collection("invitations").get().then(function(t){if(t.docs.length>=1){var a=document.getElementById("invitationsLink");a.insertAdjacentHTML("beforeend",' <span class="badge badge-danger">'.concat(t.docs.length,"</span>"))}})})},methods:{closeSession:function(){r.a.auth().signOut(),window.location="/"}}}),l=o,c=e("2877"),u=Object(c["a"])(l,s,n,!1,null,null,null);a["a"]=u.exports},"7f7f":function(t,a,e){var s=e("86cc").f,n=Function.prototype,i=/^\s*function ([^ (]*)/,r="name";r in n||e("9e1e")&&s(n,r,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},8280:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"lateral-menu-container"},[t._m(0),s("div",{staticClass:"lateral-menu-body"},[s("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.feedPath}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":e("0e09")+"#home"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Resumen")])]),s("router-link",{staticClass:"lateralPanelOption",attrs:{to:"/account/configuration"}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":e("0e09")+"#settings"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Configuración")])]),s("router-link",{staticClass:"lateralPanelOption",attrs:{to:"#"}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":e("0e09")+"#package"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Tienda de paquetes")])]),s("br"),s("div",{staticClass:"text-muted"},[t._v("Módulos")]),s("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.boardPath}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":e("0e09")+"#message-square"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Boards")])]),s("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.usersPath}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":e("0e09")+"#users"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Usuarios")])])],1)])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"lateral-menu-header"},[s("img",{attrs:{src:e("1008"),width:"147px",alt:"Logotipo de Recognizify"}})])}],i=e("8aa5"),r=e.n(i),o=(e("2bff"),e("365b"),{data:function(){return{activeProjects:"",currentProjectName:"",usersPath:"",feedPath:"",boardPath:""}},created:function(){var t=this;this.getAndSetActiveProjects(),r.a.auth().onAuthStateChanged(function(a){var e=t.$router.history.current.params.projectId;t.usersPath="/project/".concat(e,"/membership"),t.feedPath="/project/".concat(e,"/feed"),t.boardPath="/project/".concat(e,"/board")})},methods:{getAndSetActiveProjects:function(){var t=this;r.a.auth().onAuthStateChanged(function(a){r.a.firestore().collection("users").doc(a.uid).collection("projects").get().then(function(a){t.activeProjects=a.docs.length})})}}}),l=o,c=e("2877"),u=Object(c["a"])(l,s,n,!1,null,null,null);a["a"]=u.exports},"8f3a":function(t,a,e){},"9a4c":function(t,a,e){t.exports=e.p+"img/nothing.26c4b763.png"},"9b27":function(t,a,e){"use strict";var s=e("8aa5"),n=e.n(s);n.a.auth().onAuthStateChanged(function(t){t||(console.log("No existe usuario actualmente"),"/"!=window.location&&(window.location="/"))})},d839:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"navbar"}},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light navbar-flexible"},[t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[e("router-link",{attrs:{to:t.feedPath}},[t._v("Resumen")])],1)]),e("li",[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[e("router-link",{attrs:{to:t.boardPath}},[t._v("Boards")])],1)]),t._m(1),t._m(2),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[e("router-link",{attrs:{to:t.usersPath}},[t._v("Usuarios")])],1)])])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Activar navegación"}},[e("span",[e("i",{staticClass:"fas fa-bars"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Emocionalidad")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Tareas")])])}],i=e("8aa5"),r=e.n(i),o=(e("5aea"),e("365b"),e("9b27"),e("e100"),{data:function(){return{username:"",currentProjectName:"",usersPath:"",feedPath:"",boardPath:""}},methods:{closeSession:function(){r.a.auth().signOut().then(window.location="/")}}}),l=o,c=e("2877"),u=Object(c["a"])(l,s,n,!1,null,null,null);a["a"]=u.exports},e100:function(t,a){}}]);
//# sourceMappingURL=chunk-dc892d4e.f229a024.js.map