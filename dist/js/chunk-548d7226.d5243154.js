(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-548d7226"],{1649:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"select-project"}},[n("div",{staticClass:"feed-card-bg",attrs:{id:"bgNoneProjects"}},[t._m(0),n("div",{staticClass:"content-instruct"},[n("h3",{staticStyle:{color:"#f2f2f2"}},[t._v("Parece que aún no tienes proyectos nuevos")]),n("p",[t._v("¿Qué te parece si empezamos de una vez?")]),n("br"),n("a",{staticClass:"btn btn-success btn-lg",staticStyle:{width:"318px",display:"flex","justify-content":"space-around","align-items":"center"},attrs:{href:"#"}},[n("router-link",{staticClass:"text-white",attrs:{to:"/create/project"}},[t._v("Crea un nuevo proyecto")])],1)])]),n("div",{staticClass:"projectsField",attrs:{id:"projectsContent"}},[n("Profile"),n("img",{attrs:{src:a("f1f0"),alt:"Personas seleccionando una opción entre una lista",width:"417px"}}),n("h2",[t._v("¿En qué idea trabajarás ahora?")]),n("p",[t._v("Selecciona uno de tus proyectos o de los que haces parte")]),n("br"),n("div",{attrs:{id:"projectsField"}},[n("ul",{staticStyle:{"list-style":"none"}},t._l(t.projects,function(e){return n("li",{key:e,staticClass:"project-el"},[n("router-link",{attrs:{to:"/project/"+e.id+"/feed"}},[n("div",{staticClass:"card project-card",staticStyle:{width:"17rem","margin-right":"1rem"}},[n("div",{staticClass:"card-body"},[n("h6",{staticClass:"card-title"},[t._v("\n                  "+t._s(e["name"])+"\n                  "),n("span",{staticClass:"badge badge-pill badge-secondary"},[n("strong",[t._v("Activo")])])])])])])],1)}),0)])],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-representation"},[n("img",{attrs:{src:a("f776"),alt:"Robot despertando"}})])}],o=(a("ac6a"),a("8aa5")),i=a.n(o),r=(a("8f3a"),a("66aa")),c={data:function(){return{projects:[]}},components:{Profile:r["a"]},mounted:function(){var t=document.querySelector("#preloaderWall");setTimeout(function(){return t.style.display="none"},2e3),this.setProjectsOnListFeed()},methods:{setProjectsOnListFeed:function(){var t=this;i.a.auth().onAuthStateChanged(function(e){i.a.firestore().collection("projects").get().then(function(a){var n=0;if(a.forEach(function(a){a.data()["admin"][0]==e.uid&&(t.projects.push({name:a.data()["shortName"],id:a.id}),n+=1)}),0==n){var s=document.getElementById("bgNoneProjects");s.style.display="flex";var o=document.getElementById("projectsContent");o.style.display="none"}if(n>=1){var i=document.getElementById("projectLayout");i.style.display="flex"}})})}}},d=c,l=a("2877"),u=Object(l["a"])(d,n,s,!1,null,null,null);e["default"]=u.exports},"365b":function(t,e,a){},"66aa":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dropdown"},[a("a",{attrs:{id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("div",{staticClass:"current-profile"},[a("div",{staticClass:"profile-content"},[a("img",{attrs:{src:t.urlPhotoPath}})])])]),a("div",{staticClass:"profileMenu"},[a("div",{staticClass:"dropdown-menu profileMenuList",attrs:{"aria-labelledby":"dropdownMenuButton"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[a("router-link",{attrs:{to:"/select"}},[t._v("Mis proyectos")])],1),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[a("router-link",{attrs:{to:"/notifications",id:"invitationsLink"}},[t._v("Notificaciones")])],1),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[a("router-link",{attrs:{to:"/account/configuration"}},[t._v("Configuración")])],1),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Sobre Recognizify")]),a("div",{staticClass:"dropdown-divider"}),a("a",{staticClass:"dropdown-item",staticStyle:{color:"#FF524C"},attrs:{href:"#"},on:{click:t.closeSession}},[t._v("Cerrar sesión")])])])])},s=[],o=a("8aa5"),i=a.n(o),r=(a("365b"),{data:function(){return{urlPhotoPath:""}},mounted:function(){var t=this;i.a.auth().onAuthStateChanged(function(e){i.a.storage().ref("profile_photos/".concat(e.uid)).getDownloadURL().then(function(e){return t.urlPhotoPath=e})}),i.a.auth().onAuthStateChanged(function(t){i.a.firestore().collection("users").doc(t.uid).collection("invitations").get().then(function(t){if(t.docs.length>=1){var e=document.getElementById("invitationsLink");e.insertAdjacentHTML("beforeend",' <span class="badge badge-danger">'.concat(t.docs.length,"</span>"))}})})},methods:{closeSession:function(){i.a.auth().signOut(),window.location="/"}}}),c=r,d=a("2877"),l=Object(d["a"])(c,n,s,!1,null,null,null);e["a"]=l.exports},"8f3a":function(t,e,a){},f1f0:function(t,e,a){t.exports=a.p+"img/selection.bd742a7f.png"},f776:function(t,e,a){t.exports=a.p+"img/born-robot.64c4c6d5.png"}}]);
//# sourceMappingURL=chunk-548d7226.d5243154.js.map