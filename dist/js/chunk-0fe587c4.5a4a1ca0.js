(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fe587c4"],{"0e09":function(t,a,s){t.exports=s.p+"img/feather-sprite.5113e3a1.svg"},"2bff":function(t,a,s){},"365b":function(t,a,s){},"66aa":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"dropdown"},[s("a",{attrs:{id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("div",{staticClass:"current-profile"},[s("div",{staticClass:"profile-content"},[s("img",{attrs:{src:t.urlPhotoPath}})])])]),s("div",{staticClass:"profileMenu"},[s("div",{staticClass:"dropdown-menu profileMenuList",attrs:{"aria-labelledby":"dropdownMenuButton"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("router-link",{attrs:{to:"/select"}},[t._v("Mis proyectos")])],1),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("router-link",{attrs:{to:"/notifications",id:"invitationsLink"}},[t._v("Notificaciones")])],1),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[s("router-link",{attrs:{to:"/account/configuration"}},[t._v("Configuración")])],1),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Sobre Recognizify")]),s("div",{staticClass:"dropdown-divider"}),s("a",{staticClass:"dropdown-item",staticStyle:{color:"#FF524C"},attrs:{href:"#"},on:{click:t.closeSession}},[t._v("Cerrar sesión")])])])])},n=[],i=s("8aa5"),r=s.n(i),o=(s("365b"),{data:function(){return{urlPhotoPath:""}},mounted:function(){var t=this;r.a.auth().onAuthStateChanged(function(a){r.a.storage().ref("profile_photos/".concat(a.uid)).getDownloadURL().then(function(a){return t.urlPhotoPath=a})})},methods:{closeSession:function(){r.a.auth().signOut(),window.location="/"}}}),l=o,c=s("2877"),u=Object(c["a"])(l,e,n,!1,null,null,null);a["a"]=u.exports},"7f7f":function(t,a,s){var e=s("86cc").f,n=Function.prototype,i=/^\s*function ([^ (]*)/,r="name";r in n||s("9e1e")&&e(n,r,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},8280:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"lateral-menu-container"},[t._m(0),e("div",{staticClass:"lateral-menu-body"},[e("div",{staticClass:"overline"},[t._v("General")]),e("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.feedPath}},[e("svg",{staticClass:"feather-menu"},[e("use",{attrs:{"xlink:href":s("0e09")+"#home"}})]),e("span",{staticClass:"lateralMenuLink"},[t._v("Resumen")])]),e("router-link",{staticClass:"lateralPanelOption",attrs:{to:"/account/configuration"}},[e("svg",{staticClass:"feather-menu"},[e("use",{attrs:{"xlink:href":s("0e09")+"#settings"}})]),e("span",{staticClass:"lateralMenuLink"},[t._v("Ajustes")])]),e("router-link",{staticClass:"lateralPanelOption",attrs:{to:"/notifications"}},[e("svg",{staticClass:"feather-menu",attrs:{id:"invitationsIcon"}},[e("use",{attrs:{"xlink:href":s("0e09")+"#bell"}})]),t.invitations>0?e("span",{staticClass:"badge badge-danger",domProps:{textContent:t._s(t.invitations)}},[t._v("1")]):t._e(),e("span",{staticClass:"lateralMenuLink",attrs:{id:"invitationsLink"}},[t._v("Invitaciones")])]),e("div",{staticClass:"modules",attrs:{id:"modulesContainer"}},[e("br"),e("div",{staticClass:"overline"},[t._v("Módulos")]),e("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.goalsPath}},[e("svg",{staticClass:"feather-menu"},[e("use",{attrs:{"xlink:href":s("0e09")+"#flag"}})]),e("span",{staticClass:"lateralMenuLink"},[t._v("Goals")])]),e("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.boardPath}},[e("svg",{staticClass:"feather-menu"},[e("use",{attrs:{"xlink:href":s("0e09")+"#message-square"}})]),e("span",{staticClass:"lateralMenuLink"},[t._v("Boards")])]),e("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.usersPath}},[e("svg",{staticClass:"feather-menu"},[e("use",{attrs:{"xlink:href":s("0e09")+"#users"}})]),e("span",{staticClass:"lateralMenuLink"},[t._v("Users")])])],1),e("div",{staticClass:"btn-group dropup"},[e("a",{staticClass:"lateralPanelOption modulesDropdown",attrs:{id:"dropdownModules","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("svg",{staticClass:"feather-menu"},[e("use",{attrs:{"xlink:href":s("0e09")+"#zap"}})]),e("span",{staticClass:"lateralMenuLink"},[t._v("Módulos")])]),e("div",{staticClass:"dropdown-menu animate slideIn",attrs:{"aria-labelledby":"dropdownModules"}},[e("a",{staticClass:"dropdown-item"},[e("router-link",{staticClass:"lateralPanelOption dropdownOption",attrs:{to:t.boardPath}},[e("svg",{staticClass:"feather-menu"},[e("use",{attrs:{"xlink:href":s("0e09")+"#message-square"}})]),e("span",{staticClass:"lateralMenuLink"},[t._v("Boards")])])],1),e("a",{staticClass:"dropdown-item"},[e("router-link",{staticClass:"lateralPanelOption dropdownOption",attrs:{to:t.goalsPath}},[e("svg",{staticClass:"feather-menu"},[e("use",{attrs:{"xlink:href":s("0e09")+"#flag"}})]),e("span",{staticClass:"lateralMenuLink"},[t._v("Goals")])])],1),e("a",{staticClass:"dropdown-item"},[e("router-link",{staticClass:"lateralPanelOption dropdownOption",attrs:{to:t.usersPath}},[e("svg",{staticClass:"feather-menu"},[e("use",{attrs:{"xlink:href":s("0e09")+"#users"}})]),e("span",{staticClass:"lateralMenuLink"},[t._v("Users")])])],1)])])],1)])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"lateral-menu-header"},[s("div",{staticClass:"logotype"})])}],i=s("8aa5"),r=s.n(i),o=(s("2bff"),s("365b"),{data:function(){return{activeProjects:"",currentProjectName:"",usersPath:"",feedPath:"",boardPath:"",goalsPath:"",invitations:""}},created:function(){var t=this;this.setInvitationsNumber(),this.getAndSetActiveProjects(),r.a.auth().onAuthStateChanged(function(a){var s=t.$router.history.current.params.projectId;t.usersPath="/project/".concat(s,"/membership"),t.feedPath="/project/".concat(s,"/feed"),t.boardPath="/project/".concat(s,"/board"),t.goalsPath="/project/".concat(s,"/goals")})},methods:{getAndSetActiveProjects:function(){var t=this;r.a.auth().onAuthStateChanged(function(a){r.a.firestore().collection("users").doc(a.uid).collection("projects").get().then(function(a){t.activeProjects=a.docs.length})})},setInvitationsNumber:function(){var t=this;r.a.auth().onAuthStateChanged(function(a){r.a.firestore().collection("users").doc(a.uid).collection("invitations").get().then(function(a){if(a.docs.length>0){t.invitations=a.docs.length;var s=document.getElementById("invitationsLink"),e=document.getElementById("invitationsIcon");s.style.color="#FF524C",e.style.stroke="#FF524C"}})})}}}),l=o,c=s("2877"),u=Object(c["a"])(l,e,n,!1,null,null,null);a["a"]=u.exports},"8f3a":function(t,a,s){},"9b27":function(t,a,s){"use strict";var e=s("8aa5"),n=s.n(e);n.a.auth().onAuthStateChanged(function(t){t||(console.log("No existe usuario actualmente"),"/"!=window.location&&(window.location="/"))})},d839:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"navbar"}},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light navbar-flexible"},[t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[s("router-link",{attrs:{to:t.feedPath}},[t._v("Resumen")])],1)]),s("li",[s("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[s("router-link",{attrs:{to:t.boardPath}},[t._v("Boards")])],1)]),t._m(1),t._m(2),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[s("router-link",{attrs:{to:t.usersPath}},[t._v("Usuarios")])],1)])])])])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Activar navegación"}},[s("span",[s("i",{staticClass:"fas fa-bars"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Emocionalidad")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Tareas")])])}],i=s("8aa5"),r=s.n(i),o=(s("5aea"),s("365b"),s("9b27"),s("e100"),{data:function(){return{username:"",currentProjectName:"",usersPath:"",feedPath:"",boardPath:""}},methods:{closeSession:function(){r.a.auth().signOut().then(window.location="/")}}}),l=o,c=s("2877"),u=Object(c["a"])(l,e,n,!1,null,null,null);a["a"]=u.exports},e100:function(t,a){}}]);
//# sourceMappingURL=chunk-0fe587c4.5a4a1ca0.js.map