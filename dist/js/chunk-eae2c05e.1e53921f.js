(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eae2c05e"],{"207e":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"account-feed",attrs:{id:"accountFeed"}},[t._m(0),t._m(1),e("LateralPanel"),e("Profile"),e("div",{staticClass:"dashboardContent"},[e("div",{staticClass:"feed-card-bg",attrs:{id:"bgNoneProjects"}},[t._m(2),e("div",{staticClass:"content-instruct"},[e("h3",{staticStyle:{color:"#f2f2f2"}},[t._v("Parece que aún no tienes proyectos nuevos")]),e("p",[t._v("¿Qué te parece si empezamos de una vez?")]),e("br"),e("a",{staticClass:"btn btn-success btn-lg",staticStyle:{width:"318px",display:"flex","justify-content":"space-around","align-items":"center"},attrs:{href:"#"}},[e("router-link",{attrs:{to:"/create/project"}},[t._v("Crea un nuevo proyecto")])],1)])]),e("div",{staticClass:"layoutContainer",attrs:{id:"projectLayout"}},[e("div",{staticClass:"projectsField",attrs:{id:"projectsContent"}},[e("h2",[t._v("¿Qué idea vas a potenciar ahora?")]),e("br"),e("div",{attrs:{id:"projectsField"}},[e("a",{attrs:{href:"/create/project"}},[e("div",{staticClass:"card project-card",staticStyle:{width:"22rem","margin-right":"1rem"}},[e("div",{staticClass:"card-body"},[e("h6",{staticClass:"card-title"},[e("span",[e("svg",{attrs:{id:"i-plus",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"16",height:"16",fill:"none",stroke:"#14141f","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3.5"}},[e("path",{attrs:{d:"M16 2 L16 30 M2 16 L30 16"}})])]),t._v("\n                    Agrega un nuevo proyecto\n                  ")])])])])])])])])],1)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"preloader-wall",attrs:{id:"preloaderWall"}},[s("div",{staticClass:"preloader"},[s("img",{staticClass:"planet",attrs:{src:e("aec5")}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal fade",attrs:{id:"deleteProjectModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header",staticStyle:{"border-bottom":"none"}},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("¿Qué le pasó a tu idea?")])]),e("div",{staticClass:"modal-body"},[e("p",[t._v("Parece que no salió algo bien, debes de pasar por una prueba antes de cancelar tu proyecto.")])]),e("div",{staticClass:"modal-footer",staticStyle:{"border-top":"none"}},[e("button",{staticClass:"btn btn-info",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancelar")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v("Comenzar prueba")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"image-representation"},[s("img",{attrs:{src:e("f776"),alt:"Robot despertando"}})])}],r=e("d839"),i=e("8280"),o=e("66aa"),l=e("8aa5"),c=e.n(l);e("ac6a");c.a.auth().onAuthStateChanged(function(t){c.a.firestore().collection("projects").get().then(function(a){var e=0;if(a.forEach(function(a){if(a.data()["admin"][0]==t.uid){var s=document.getElementById("projectsField"),n='\n                        <a href="/project/'.concat(a.id,'/feed">\n                            <div class="card project-card" style="width: 17rem; margin-right: 1rem">\n                                <div class="card-body">\n                                    <h6 class="card-title">').concat(a.data()["shortName"],' <span class="badge badge-pill badge-secondary"><strong>Activo</strong></span></h6>\n                                </div>\n                            </div>\n                        </a>\n                        ');s.insertAdjacentHTML("afterbegin",n),e+=1}}),0==e){var s=document.getElementById("bgNoneProjects");s.style.display="flex"}if(e>=1){var n=document.getElementById("projectLayout");n.style.display="flex"}})});e("8f3a"),e("365b");var d={name:"account_feed",components:{UserNavbar:r["a"],LateralPanel:i["a"],Profile:o["a"]},mounted:function(){var t=document.querySelector("#preloaderWall");setTimeout(function(){return t.style.display="none"},2e3)}},u=d,f=e("2877"),h=Object(f["a"])(u,s,n,!1,null,null,null);a["default"]=h.exports},"365b":function(t,a,e){},"66aa":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dropdown"},[e("a",{attrs:{id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("div",{staticClass:"current-profile"},[e("div",{staticClass:"profile-content"},[e("img",{attrs:{src:t.urlPhotoPath}})])])]),e("div",{staticClass:"profileMenu"},[e("div",{staticClass:"dropdown-menu profileMenuList",attrs:{"aria-labelledby":"dropdownMenuButton"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Mi cuenta")]),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Sobre Recognizify")]),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Configuración")]),e("div",{staticClass:"dropdown-divider"}),e("a",{staticClass:"dropdown-item",staticStyle:{color:"#FF524C"},attrs:{href:"#"},on:{click:t.closeSession}},[t._v("Cerrar sesión")])])])])},n=[],r=e("8aa5"),i=e.n(r),o={data:function(){return{urlPhotoPath:""}},mounted:function(){var t=this;i.a.auth().onAuthStateChanged(function(a){i.a.storage().ref("profile_photos/".concat(a.uid)).getDownloadURL().then(function(a){return t.urlPhotoPath=a})})},methods:{closeSession:function(){i.a.auth().signOut(),window.location="/"}}},l=o,c=e("2877"),d=Object(c["a"])(l,s,n,!1,null,null,null);a["a"]=d.exports},8280:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"lateral-menu-container"},[e("div",{staticClass:"lateral-menu-bg-correction"},[t._m(0),e("a",{staticClass:"lateralPanelOption",attrs:{href:"/feed","data-toggle":"tooltip","data-placement":"right",title:"Inicio"}},[e("svg",{attrs:{id:"i-home",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"24",height:"24",fill:"none",stroke:"#f9f8fe","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5"}},[e("path",{attrs:{d:"M12 20 L12 30 4 30 4 12 16 2 28 12 28 30 20 30 20 20 Z"}})])]),e("a",{staticClass:"lateralPanelOption",attrs:{href:"/notifications","data-toggle":"tooltip","data-placement":"right",title:"Notificaciones"}},[e("svg",{attrs:{id:"i-msg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"24",height:"24",fill:"none",stroke:"#f9f8fe","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5"}},[e("path",{attrs:{d:"M2 4 L30 4 30 22 16 22 8 29 8 22 2 22 Z"}})])]),e("a",{staticClass:"lateralPanelOption",attrs:{href:"#","data-toggle":"tooltip","data-placement":"right",title:"Configuración"}},[e("svg",{attrs:{id:"i-settings",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"24",height:"24",fill:"none",stroke:"#f9f8fe","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5"}},[e("path",{attrs:{d:"M13 2 L13 6 11 7 8 4 4 8 7 11 6 13 2 13 2 19 6 19 7 21 4 24 8 28 11 25 13 26 13 30 19 30 19 26 21 25 24 28 28 24 25 21 26 19 30 19 30 13 26 13 25 11 28 8 24 4 21 7 19 6 19 2 Z"}}),e("circle",{attrs:{cx:"16",cy:"16",r:"4"}})])]),e("a",{staticClass:"lateralPanelOption",attrs:{href:"#","data-toggle":"tooltip","data-placement":"right",title:"Módulos de la comunidad"}},[e("svg",{attrs:{id:"i-tag",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"24",height:"24",fill:"none",stroke:"#f9f8fe","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5"}},[e("circle",{attrs:{cx:"24",cy:"8",r:"2"}}),e("path",{attrs:{d:"M2 18 L18 2 30 2 30 14 14 30 Z"}})])])])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"markup-container"},[s("img",{staticClass:"logo",attrs:{src:e("d84c"),width:"60px",alt:"Recognizify"}})])}],r=e("8aa5"),i=e.n(r),o=(e("8f3a"),e("365b"),{data:function(){return{activeProjects:"",currentProjectName:"",usersPath:"",feedPath:""}},created:function(){this.getAndSetActiveProjects()},methods:{getAndSetActiveProjects:function(){var t=this;i.a.auth().onAuthStateChanged(function(a){i.a.firestore().collection("users").doc(a.uid).collection("projects").get().then(function(a){t.activeProjects=a.docs.length})})}}}),l=o,c=e("2877"),d=Object(c["a"])(l,s,n,!1,null,null,null);a["a"]=d.exports},"8f3a":function(t,a,e){},"9b27":function(t,a,e){"use strict";var s=e("8aa5"),n=e.n(s);n.a.auth().onAuthStateChanged(function(t){t||(console.log("No existe usuario actualmente"),"/"!=window.location&&(window.location="/"))})},aec5:function(t,a,e){t.exports=e.p+"img/Brand-planet.94dbb326.png"},d839:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"navbar"}},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light navbar-flexible"},[t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[e("router-link",{attrs:{to:t.feedPath}},[t._v("Resumen")])],1)]),e("li",[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[e("router-link",{attrs:{to:t.boardPath}},[t._v("Boards")])],1)]),t._m(1),t._m(2),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[e("router-link",{attrs:{to:t.usersPath}},[t._v("Usuarios")])],1)])])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Activar navegación"}},[e("span",[e("i",{staticClass:"fas fa-bars"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Emocionalidad")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Tareas")])])}],r=e("8aa5"),i=e.n(r),o=(e("5aea"),e("365b"),e("9b27"),e("e100"),{data:function(){return{username:"",currentProjectName:"",usersPath:"",feedPath:"",boardPath:""}},created:function(){var t=this;i.a.auth().onAuthStateChanged(function(a){var e=t.$router.history.current.params.projectId;t.usersPath="/project/".concat(e,"/membership"),t.feedPath="/project/".concat(e,"/feed"),t.boardPath="/project/".concat(e,"/board")})},methods:{closeSession:function(){i.a.auth().signOut().then(window.location="/")}}}),l=o,c=e("2877"),d=Object(c["a"])(l,s,n,!1,null,null,null);a["a"]=d.exports},d84c:function(t,a,e){t.exports=e.p+"img/isotipe-color.657e829b.svg"},e100:function(t,a){document.querySelector("#profileMenuButton")},f776:function(t,a,e){t.exports=e.p+"img/born-robot.64c4c6d5.png"}}]);
//# sourceMappingURL=chunk-eae2c05e.1e53921f.js.map