(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c730729"],{"0e09":function(t,e,a){t.exports=a.p+"img/feather-sprite.5113e3a1.svg"},"231e":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboardContent"},[0==t.projects.length?s("NonProjectsBanner"):t._e(),t.projects.length>=1?s("div",{staticClass:"projectsField",attrs:{id:"projectsContent"}},[s("WeeklyArticleCard"),s("div",{staticClass:"projectsBanner"},[t._m(0),s("a",{staticClass:"btn btn-success btn-lg",staticStyle:{display:"flex","align-items":"center"}},[s("router-link",{attrs:{to:"/account/create/project"}},[s("svg",{attrs:{width:"24px",height:"24px",stroke:"#fff","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",fill:"none"}},[s("use",{attrs:{"xlink:href":a("0e09")+"#plus"}})])])],1)]),s("br"),s("div",{staticClass:"projectsList"},[s("ul",{staticClass:"projectListElements",staticStyle:{"list-style":"none"}},t._l(t.projects,function(t){return s("ProjectCard",{key:t,attrs:{projectName:t["name"],projectPhotoUrl:t["photoUrl"],projectId:t["id"],lastActivity:"7 minutos"}})}),1)])],1):t._e()],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"projectsHeaderTitle"},[t._v("Tus proyectos")]),a("p",{staticClass:"muted-gray"},[t._v("¿En que idea trabajarás ahora? Selecciona uno de tus proyectos.")])])}],o=(a("ac6a"),a("8aa5")),n=a.n(o),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"project-el"},[a("ProjectOptionsDropdown",{attrs:{projectId:this.projectId}}),a("router-link",{attrs:{to:"/dashboard/project/"+this.projectId+"/feed"}},[a("div",{staticClass:"card projectCard mb-3",style:"background-image: url('"+this.projectPhotoUrl+"');"},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card-body"},[a("span",{staticClass:"card-title projectTitle text-white"},[t._v("\n                            "+t._s(this.projectName)+"\n                            "),a("span",{staticClass:"badge badge-secondary"},[t._v("Activo")])])])])])])])],1)},i=[],l=(a("839d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dropdown"},[s("DeleteProject",{attrs:{projectId:this.projectId}}),s("button",{staticClass:"projectCardMenuOptions",attrs:{id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":a("0e09")+"#more-vertical"}})])]),t._m(0)],1)}),d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[a("div",{staticClass:"dropdownOverline"},[t._v("Opciones")]),a("a",{staticClass:"dropdown-item text-danger",attrs:{"data-toggle":"modal","data-target":"#exampleModalCenter"}},[t._v("\n            Salir del proyecto\n        ")])])}],u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"deleteProjectModal"},[s("div",{staticClass:"modal fade",attrs:{id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header bg-danger",staticStyle:{border:"none"}},[s("h3",{staticClass:"modal-title text-white",attrs:{id:"exampleModalLongTitle"}},[t._v("¿Dejarás esta idea?")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[s("svg",{staticClass:"feather-light"},[s("use",{attrs:{"xlink:href":a("0e09")+"#x"}})])])])]),s("div",{staticClass:"modal-body"},[s("span",[t._v("Parece que dejarás "+t._s(this.selectedProject.name)+", recuerda que esta opción es permanente e irreversible. Para volver a acceder a este proyecto, te deben volver a invitar.")])]),s("div",{staticClass:"modal-footer",staticStyle:{border:"none"}},[s("button",{staticClass:"btn btn-info",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancelar")]),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteUserForProject}},[t._v("Abandonar proyecto")])])])])])])},p=[],f=(a("7f7f"),{data:function(){return{selectedProject:{name:""}}},props:["projectId"],beforeMount:function(){this.getProjectInfo()},methods:{deleteUserForProject:function(){var t=this;n.a.auth().onAuthStateChanged(function(e){n.a.firestore().collection("projects").doc(t.projectId).collection("members").doc(e.uid).delete().then(function(){return window.location.reload()}).catch(function(t){return console.log(t)})})},getProjectInfo:function(){var t=this;n.a.firestore().collection("projects").doc(this.projectId).get().then(function(e){t.selectedProject.name=e.data()["name"]})}}}),h=f,m=a("2877"),b=Object(m["a"])(h,u,p,!1,null,null,null),v=b.exports,C={props:["projectId"],components:{DeleteProject:v}},j=C,g=Object(m["a"])(j,l,d,!1,null,null,null),_=g.exports,y={props:["projectName","projectPhotoUrl","projectId","lastActivity"],components:{ProjectOptionsDropdown:_}},w=y,x=Object(m["a"])(w,c,i,!1,null,null,null),P=x.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nonProjectsBanner",attrs:{id:"bgNoneProjects"}},[t._m(0),a("br"),a("div",{staticClass:"bannerInstructions"},[a("h2",{staticClass:"nonProjectsTitle"},[t._v("Parece que aún no tienes proyectos nuevos")]),a("p",{staticStyle:{"font-size":"14px"}},[t._v("¿Qué esperas? Empieza de una vez.")]),a("br"),a("button",{staticClass:"btn btn-success actionButton"},[a("router-link",{staticClass:"text-white",attrs:{to:"/account/create/project"}},[t._v("Crea un nuevo proyecto")])],1)])])},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"image-representation"},[s("img",{attrs:{src:a("6385"),width:"190px"}})])}],I=(a("afab"),{}),O=I,A=Object(m["a"])(O,k,E,!1,null,null,null),M=A.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 1==t.article.exists?s("div",{staticClass:"weeklyArticleCardContainer"},[s("router-link",{attrs:{to:"/articles/weekly"}},[s("h3",{staticClass:"text-white"},[t._v(t._s(t.article.title)+" "),s("span",{staticClass:"badge badge-success"},[t._v("Artículo semanal")])]),s("p",{staticClass:"text-white"},[t._v(t._s(t.article.abstract))]),s("div",{staticClass:"weeklyArticleCardPublisher"},[s("div",{staticClass:"profilePictureContainer"},[s("img",{attrs:{src:t.article.publisherPhoto?t.article.publisherPhoto:a("f365"),alt:""}})]),s("small",{staticClass:"text-white"},[t._v(t._s(t.article.publisherName))])])]),1==t.admin?s("div",{staticStyle:{width:"130px"},on:{click:t.deleteArticle}},[s("br"),s("button",{staticClass:"btn btn-danger"},[t._v("Eliminar artículo")])]):t._e()],1):t._e()},N=[],U={data:function(){return{article:{exists:!1,title:"",abstract:"",publisher:"",publisherName:"",publisherPhoto:"",id:""},admin:!1}},created:function(){var t=this;n.a.firestore().collection("articles").get().then(function(e){var a=e.docs[0];t.article.exists=!0,t.article.title=a.data()["title"],t.article.abstract=a.data()["abstract"],t.article.publisher=a.data()["publisher"],t.article.id=a.id,n.a.firestore().collection("users").doc(t.article.publisher).get().then(function(e){t.article.publisherName=e.data()["name"],n.a.storage().ref("/profile_photos/".concat(t.article.publisher)).getDownloadURL().then(function(e){return t.publisherPhoto=e})}).catch(function(t){return console.log(t)})}).catch(function(){t.article.exists=!1}),n.a.firestore().collection("users").doc(n.a.auth().currentUser.uid).get().then(function(e){t.admin=e.data()["roles"]["admin"]})},methods:{deleteArticle:function(){n.a.firestore().collection("articles").doc(this.article.id).delete().then(function(){return window.location.reload()})}}},B=U,q=(a("cf46"),Object(m["a"])(B,S,N,!1,null,"635d6683",null)),D=q.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loader",attrs:{id:"loader"}})},F=[],L={beforeCreate:function(){window.onload=document.getElementById("loader").style.display="block"}},z=L,J=(a("90937"),Object(m["a"])(z,T,F,!1,null,"1b399bc8",null)),R=J.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:"featuresModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-footer",staticStyle:{border:"none"}},[a("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.setModalChecked}},[t._v("Continuar")])])])])])},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-body",staticStyle:{border:"none"}},[a("span",{staticClass:"subtitleOverline text-primary"},[t._v("Últimas novedades")]),a("h4",[t._v("Buscador de usuarios")]),a("br"),a("p",[t._v("Ahora puedes buscar usuarios en el buscador del encabezado. \n                Escribe su nombre y podrás ver un listado de los posibles usuarios que buscas. ")]),a("p",[t._v(" Ten en cuenta que ahí\n                solo puedes buscar perfiles que este configurados como públicos.")])])}],Q={mounted:function(){"checked"!=localStorage.getItem("featuresModalChecked")&&$("#featuresModal").modal("show")},methods:{setModalChecked:function(){localStorage.setItem("featuresModalChecked","checked")}}},G=Q,K=(a("a484"),Object(m["a"])(G,W,H,!1,null,"5ac6a758",null)),V=K.exports,X={data:function(){return{projects:[]}},components:{ProjectCard:P,NonProjectsBanner:M,WeeklyArticleCard:D,Preloader:R,Features:V},mounted:function(){var t=this;n.a.firestore().collection("projects").get().then(function(e){t.checkProjectsProperty(e)})},methods:{checkProjectsProperty:function(t){var e=this;t.forEach(function(t){n.a.firestore().collection("projects").doc(t.id).collection("members").get().then(function(a){a.forEach(function(a){a.id==n.a.auth().currentUser.uid&&(n.a.storage().ref("projects/".concat(t.id,"/project_photo")).getDownloadURL().then(function(a){return e.setProjectOnArray(t.data()["shortName"],t.id,a)}).catch(function(){return e.setProjectOnArray(t.data()["shortName"],t.id,"https://source.unsplash.com/800x500/?work,innovation,idea")}),1)})}).catch(function(){return window.location.reload()})})},setProjectOnArray:function(t,e,a){this.projects.push({name:t,id:e,photoUrl:a})}}},Y=X,Z=Object(m["a"])(Y,s,r,!1,null,null,null);e["default"]=Z.exports},"625a":function(t,e,a){},6385:function(t,e,a){t.exports=a.p+"img/MoonIcon.68d1fbd0.png"},"7f7f":function(t,e,a){var s=a("86cc").f,r=Function.prototype,o=/^\s*function ([^ (]*)/,n="name";n in r||a("9e1e")&&s(r,n,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"839d":function(t,e,a){},90937:function(t,e,a){"use strict";var s=a("625a"),r=a.n(s);r.a},a484:function(t,e,a){"use strict";var s=a("c8ef"),r=a.n(s);r.a},afab:function(t,e,a){},c8ef:function(t,e,a){},cf46:function(t,e,a){"use strict";var s=a("d64c"),r=a.n(s);r.a},d64c:function(t,e,a){},f365:function(t,e,a){t.exports=a.p+"img/profile.f2fd1390.png"}}]);
//# sourceMappingURL=chunk-2c730729.6bd79a2b.js.map