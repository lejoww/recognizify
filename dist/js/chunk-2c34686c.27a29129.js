(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c34686c"],{"0e09":function(t,e,a){t.exports=a.p+"img/feather-sprite.5113e3a1.svg"},1491:function(t,e,a){"use strict";var s=a("c2ac"),o=a.n(s);o.a},"231e":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=this,s=e.$createElement,o=e._self._c||s;return o("div",{staticClass:"dashboardContent"},[e.loading?o("Loading"):e._e(),0==e.projects.length?o("NonProjectsBanner"):o("div",{staticClass:"rowStructure"},[o("div",{staticClass:"helperCard"},[o("WeeklyArticleCard"),o("video",{staticStyle:{outline:"none"},attrs:{controls:""}},[o("source",{attrs:{src:a("4594"),type:"video/mp4"}})]),o("div",{staticClass:"asesor",staticStyle:{"margin-top":"2rem"}},[o("img",{attrs:{src:a("fec5"),alt:""}}),o("div",{staticStyle:{width:"64%"}},[o("h5",{staticStyle:{"font-weight":"800","text-transform":"uppercase","font-size":"14px",color:"#645B8C"}},[e._v("\n              ¿Necesitas asesoramiento para tu proyecto?\n            ")]),o("p",{staticStyle:{"font-size":"21px","font-weight":"900"}},[e._v("Estamos para ayudarte, dentro de poco tiempo ofreceremos servicio al ciente para tu proyecto.")]),o("button",{staticClass:"btn btn-primary",on:{click:function(){t.notification=!0}}},[e._v(e._s(1==this.notification?"Te notificaremos":"Notificarme"))])])])],1),e.projects.length>=1?o("div",{staticClass:"projectsField",attrs:{id:"projectsContent"}},[o("div",{staticClass:"projectsBanner"},[o("div",[o("h2",{staticClass:"projectsHeaderTitle"},[e._v("Proyectos")])]),o("a",{staticClass:"btn btn-success btn-lg",staticStyle:{display:"flex","align-items":"center"}},[o("router-link",{attrs:{to:"/account/create/project"}},[o("svg",{attrs:{width:"24px",height:"24px",stroke:"#fff","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",fill:"none"}},[o("use",{attrs:{"xlink:href":a("0e09")+"#plus"}})])])],1)]),o("br"),o("div",{staticClass:"projectsList"},[o("ul",{staticClass:"projectListElements",staticStyle:{"list-style":"none"}},e._l(e.projects,function(t){return o("ProjectCard",{key:t,attrs:{projectName:t["name"],projectPhotoUrl:t["photoUrl"],projectId:t["id"],lastActivity:"un tiempo"}})}),1)])]):e._e()])],1)},o=[],r=(a("ac6a"),a("8aa5")),i=a.n(r),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"project-el"},[s("div",{staticClass:"card projectCard mb-3"},[s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card-body"},[s("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[s("router-link",{attrs:{to:"/dashboard/project/"+this.projectId+"/feed"}},[s("div",{staticStyle:{display:"flex","flex-direction":"column"}},[s("span",{staticClass:"card-title projectTitle"},[t._v("\n                                        "+t._s(this.projectName)+"\n                                    ")]),s("div",{staticStyle:{"margin-top":"1rem"}},[s("span",{staticClass:"state-badge-success"},[t._v("Activo")])])])]),s("div",[s("a",{attrs:{"data-toggle":"tooltip","data-placement":"right",title:"Característica inhabilitada."}},[s("svg",{staticClass:"feather-like-options"},[s("use",{attrs:{"xlink:href":a("0e09")+"#star"}})])]),s("ProjectOptionsDropdown",{attrs:{projectId:this.projectId}})],1)],1)])])])])])},c=[],l=(a("839d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dropdown"},[s("DeleteProject",{attrs:{projectId:this.projectId,projectName:this.selectedProject.name}}),s("a",{staticClass:"projectCardMenuOptions",attrs:{id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("svg",{staticClass:"feather-like-options"},[s("use",{attrs:{"xlink:href":a("0e09")+"#more-horizontal"}})])]),t._m(0)],1)}),d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[a("div",{staticClass:"dropdownOverline"},[t._v("Opciones")]),a("a",{staticClass:"dropdown-item text-danger",attrs:{"data-toggle":"modal","data-target":"#exampleModalCenter"}},[t._v("\n            Salir del proyecto\n        ")])])}],u=(a("7f7f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"deleteProjectModal"},[s("div",{staticClass:"modal fade",attrs:{id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header bg-danger",staticStyle:{border:"none"}},[s("h3",{staticClass:"modal-title text-white",attrs:{id:"exampleModalLongTitle"}},[t._v("¿Dejarás esta idea?")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(t){return this.$destroy()}}},[s("span",{attrs:{"aria-hidden":"true"}},[s("svg",{staticClass:"feather-light"},[s("use",{attrs:{"xlink:href":a("0e09")+"#x"}})])])])]),s("div",{staticClass:"modal-body"},[s("span",[t._v("Parece que dejarás "+t._s(t.projectName)+", recuerda que esta opción es permanente e irreversible. Para volver a acceder a este proyecto, te deben volver a invitar.")])]),s("div",{staticClass:"modal-footer",staticStyle:{border:"none"}},[s("button",{staticClass:"btn btn-info",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancelar")]),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deleteUserForProject(t.projectId)}}},[t._v("Abandonar proyecto")])])])])])])}),p=[],f={data:function(){return{selectedProject:{name:""}}},props:["projectId","projectName"],methods:{deleteUserForProject:function(t){i.a.auth().onAuthStateChanged(function(e){i.a.firestore().collection("projects").doc(t).collection("members").doc(e.uid).delete().then(function(){return window.location.reload()}).catch(function(t){return console.log(t)})})}}},h=f,m=a("2877"),v=Object(m["a"])(h,u,p,!1,null,null,null),b=v.exports,g={data:function(){return{selectedProject:{name:""}}},props:["projectId","projectName"],components:{DeleteProject:b},methods:{getProjectInfo:function(){var t=this;firebase.firestore().collection("projects").doc(this.projectId).get().then(function(e){t.selectedProject.name=e.data()["name"]})}}},C=g,j=Object(m["a"])(C,l,d,!1,null,null,null),y=j.exports,_={props:["projectName","projectPhotoUrl","projectId","projectAutor","lastActivity"],components:{ProjectOptionsDropdown:y},mounted:function(){$(function(){$('[data-toggle="tooltip"]').tooltip()})}},x=_,w=Object(m["a"])(x,n,c,!1,null,null,null),P=w.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nonProjectsBanner",attrs:{id:"bgNoneProjects"}},[t._m(0),a("br"),a("div",{staticClass:"bannerInstructions"},[a("h2",{staticClass:"nonProjectsTitle"},[t._v("Parece que aún no tienes proyectos nuevos")]),a("p",{staticStyle:{"font-size":"14px"}},[t._v("¿Qué esperas? Empieza de una vez.")]),a("br"),a("button",{staticClass:"btn btn-success actionButton"},[a("router-link",{staticClass:"text-white",attrs:{to:"/account/create/project"}},[t._v("Crea un nuevo proyecto")])],1)])])},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"image-representation"},[s("img",{attrs:{src:a("6385"),width:"190px"}})])}],E=(a("afab"),{}),I=E,A=Object(m["a"])(I,k,S,!1,null,null,null),N=A.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 1==t.article.exists?s("div",{staticClass:"weeklyArticleCardContainer bg-secondary"},[s("div",{staticClass:"cardInfo"},[s("router-link",{attrs:{to:"/articles/weekly"}},[s("span",{staticClass:"badge badge-primary"},[t._v("Artículo semanal")]),s("h2",{staticClass:"text-white",staticStyle:{"font-family":"'Inter'","font-weight":"800","margin-top":"12px","line-height":"1.2"}},[t._v(t._s(t.article.title))]),s("p",{staticClass:"text-warning",staticStyle:{"font-weight":"600","letter-spacing":"0.4px"}},[t._v(t._s(t.article.abstract))]),s("div",{staticClass:"weeklyArticleCardPublisher"},[s("div",{staticClass:"profilePictureContainer"},[s("img",{attrs:{src:t.article.publisherPhoto?t.article.publisherPhoto:a("f365"),alt:""}})]),s("span",{staticClass:"text-white autor"},[t._v(t._s(t.article.publisherName)+"  "),s("span",{staticClass:"badge badge-secondary"},[t._v("Miembro del equipo")])])])])],1),t._m(0)]):t._e()},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-success postImageContainer",staticStyle:{width:"50%",height:"100%"}},[s("img",{staticClass:"postImage",staticStyle:{position:"relative",right:"-82px"},attrs:{src:a("aa6a")}})])}],U={data:function(){return{article:{exists:!1,title:"",abstract:"",publisher:"",publisherName:"",publisherPhoto:"",id:""},admin:!1}},created:function(){var t=this;i.a.firestore().collection("articles").get().then(function(e){var a=e.docs[0];t.article.exists=!0,t.article.title=a.data()["title"],t.article.abstract=a.data()["abstract"],t.article.publisher=a.data()["publisher"],t.article.id=a.id,i.a.firestore().collection("users").doc(t.article.publisher).get().then(function(e){t.article.publisherName=e.data()["name"],i.a.storage().ref("/profile_photos/".concat(t.article.publisher)).getDownloadURL().then(function(e){return t.article.publisherPhoto=e})}).catch(function(t){return console.log(t)})}).catch(function(){t.article.exists=!1}),i.a.firestore().collection("users").doc(i.a.auth().currentUser.uid).get().then(function(e){t.admin=e.data()["roles"]["admin"]})},methods:{deleteArticle:function(){i.a.firestore().collection("articles").doc(this.article.id).delete().then(function(){return window.location.reload()})}}},B=U,z=(a("2d2e"),Object(m["a"])(B,O,M,!1,null,"43d17b7e",null)),D=z.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loader",attrs:{id:"loader"}})},T=[],q={beforeCreate:function(){window.onload=document.getElementById("loader").style.display="block"}},F=q,R=(a("90937"),Object(m["a"])(F,L,T,!1,null,"1b399bc8",null)),H=(R.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:"featuresModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-footer",staticStyle:{border:"none"}},[a("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.setModalChecked}},[t._v("Continuar")])])])])])}),J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-body",staticStyle:{border:"none"}},[a("span",{staticClass:"subtitleOverline text-primary"},[t._v("Últimas novedades")]),a("h4",[t._v("Envio de correos automático")]),a("br"),a("p",[t._v("Ahora Recognizify es más inteligente, dependiendo de las acciones\n                    en tus proyectos, se te enviarán correos con información a detalle\n                    que siempre pueden resultarte útiles.")])])}],W={mounted:function(){$("#featuresModal").modal("show")}},Q=W,G=(a("1491"),Object(m["a"])(Q,H,J,!1,null,"0dc0f250",null)),K=G.exports,V=a("45d6"),X={data:function(){return{projects:[],notification:!1,loading:!0}},components:{ProjectCard:P,NonProjectsBanner:N,WeeklyArticleCard:D,Loading:V["a"],Features:K},mounted:function(){var t=this;i.a.firestore().collection("projects").get().then(function(e){t.checkProjectsProperty(e)})},methods:{checkProjectsProperty:function(t){var e=this;t.forEach(function(t){i.a.firestore().collection("projects").doc(t.id).collection("members").get().then(function(a){a.forEach(function(a){a.id==i.a.auth().currentUser.uid&&(i.a.storage().ref("projects/".concat(t.id,"/project_photo")).getDownloadURL().then(function(a){return e.setProjectOnArray(t.data()["shortName"],t.id,a)}).catch(function(){return e.setProjectOnArray(t.data()["shortName"],t.id,"https://source.unsplash.com/800x500/?work,innovation,idea")}),1)})}).catch(function(){return window.location.reload()})}),this.loading=!1},setProjectOnArray:function(t,e,a){this.projects.push({name:t,id:e,photoUrl:a})}}},Y=X,Z=Object(m["a"])(Y,s,o,!1,null,null,null);e["default"]=Z.exports},"2d2e":function(t,e,a){"use strict";var s=a("3236"),o=a.n(s);o.a},3236:function(t,e,a){},4594:function(t,e,a){t.exports=a.p+"media/RecognizifyAtHome.349c71b0.mp4"},"625a":function(t,e,a){},6385:function(t,e,a){t.exports=a.p+"img/MoonIcon.68d1fbd0.png"},"7f7f":function(t,e,a){var s=a("86cc").f,o=Function.prototype,r=/^\s*function ([^ (]*)/,i="name";i in o||a("9e1e")&&s(o,i,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},"839d":function(t,e,a){},90937:function(t,e,a){"use strict";var s=a("625a"),o=a.n(s);o.a},aa6a:function(t,e,a){t.exports=a.p+"img/meeting.887f71b7.png"},afab:function(t,e,a){},c2ac:function(t,e,a){},f365:function(t,e,a){t.exports=a.p+"img/profile.f2fd1390.png"},fec5:function(t,e,a){t.exports=a.p+"img/person-working.114e322e.png"}}]);
//# sourceMappingURL=chunk-2c34686c.27a29129.js.map