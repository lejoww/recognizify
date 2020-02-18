(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1728d09e"],{"0e09":function(t,e,a){t.exports=a.p+"img/feather-sprite.5113e3a1.svg"},"231e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dashboardContent"},[0==t.projects.length?r("NonProjectsBanner"):t._e(),t.projects.length>=1?r("div",{staticClass:"projectsField",attrs:{id:"projectsContent"}},[r("WeeklyArticleCard"),r("div",{staticClass:"projectsBanner"},[t._m(0),r("a",{staticClass:"btn btn-success btn-lg",staticStyle:{display:"flex","align-items":"center"}},[r("router-link",{attrs:{to:"/account/create/project"}},[r("svg",{attrs:{width:"24px",height:"24px",stroke:"#fff","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",fill:"none"}},[r("use",{attrs:{"xlink:href":a("0e09")+"#plus"}})])])],1)]),r("br"),r("div",{staticClass:"projectsList"},[r("ul",{staticClass:"projectListElements",staticStyle:{"list-style":"none"}},t._l(t.projects,function(t){return r("ProjectCard",{key:t,attrs:{projectName:t["name"],projectPhotoUrl:t["photoUrl"],projectId:t["id"],lastActivity:"7 minutos"}})}),1)])],1):t._e()],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"projectsHeaderTitle"},[t._v("Tus proyectos")]),a("p",{staticClass:"muted-gray"},[t._v("¿En que idea trabajarás ahora? Selecciona uno de tus proyectos.")])])}],o=(a("ac6a"),a("8aa5")),n=a.n(o),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"project-el"},[a("ProjectOptionsDropdown",{attrs:{projectId:this.projectId}}),a("router-link",{attrs:{to:"/dashboard/project/"+this.projectId+"/feed"}},[a("div",{staticClass:"card projectCard mb-3",style:"background-image: url('"+this.projectPhotoUrl+"');"},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card-body"},[a("span",{staticClass:"card-title projectTitle text-white"},[t._v("\n                            "+t._s(this.projectName)+"\n                            ")])])])])])])],1)},c=[],l=(a("839d"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dropdown"},[r("DeleteProject",{attrs:{projectId:this.projectId,projectName:this.selectedProject.name}}),r("button",{staticClass:"projectCardMenuOptions",attrs:{id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[r("svg",{staticClass:"feather-menu"},[r("use",{attrs:{"xlink:href":a("0e09")+"#more-vertical"}})])]),t._m(0)],1)}),d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[a("div",{staticClass:"dropdownOverline"},[t._v("Opciones")]),a("a",{staticClass:"dropdown-item text-danger",attrs:{"data-toggle":"modal","data-target":"#exampleModalCenter"}},[t._v("\n            Salir del proyecto\n        ")])])}],u=(a("7f7f"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"deleteProjectModal"},[r("div",{staticClass:"modal fade",attrs:{id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header bg-danger",staticStyle:{border:"none"}},[r("h3",{staticClass:"modal-title text-white",attrs:{id:"exampleModalLongTitle"}},[t._v("¿Dejarás esta idea?")]),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(t){return this.$destroy()}}},[r("span",{attrs:{"aria-hidden":"true"}},[r("svg",{staticClass:"feather-light"},[r("use",{attrs:{"xlink:href":a("0e09")+"#x"}})])])])]),r("div",{staticClass:"modal-body"},[r("span",[t._v("Parece que dejarás "+t._s(t.projectName)+", recuerda que esta opción es permanente e irreversible. Para volver a acceder a este proyecto, te deben volver a invitar.")])]),r("div",{staticClass:"modal-footer",staticStyle:{border:"none"}},[r("button",{staticClass:"btn btn-info",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancelar")]),r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deleteUserForProject(t.projectId)}}},[t._v("Abandonar proyecto")])])])])])])}),p=[],f={data:function(){return{selectedProject:{name:""}}},props:["projectId","projectName"],methods:{deleteUserForProject:function(t){n.a.auth().onAuthStateChanged(function(e){n.a.firestore().collection("projects").doc(t).collection("members").doc(e.uid).delete().then(function(){return window.location.reload()}).catch(function(t){return console.log(t)})})}}},h=f,m=a("2877"),b=Object(m["a"])(h,u,p,!1,null,null,null),v=b.exports,j={data:function(){return{selectedProject:{name:""}}},props:["projectId","projectName"],components:{DeleteProject:v},methods:{getProjectInfo:function(){var t=this;firebase.firestore().collection("projects").doc(this.projectId).get().then(function(e){t.selectedProject.name=e.data()["name"]})}}},C=j,g=Object(m["a"])(C,l,d,!1,null,null,null),_=g.exports,y={props:["projectName","projectPhotoUrl","projectId","lastActivity"],components:{ProjectOptionsDropdown:_}},w=y,x=Object(m["a"])(w,i,c,!1,null,null,null),P=x.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nonProjectsBanner",attrs:{id:"bgNoneProjects"}},[t._m(0),a("br"),a("div",{staticClass:"bannerInstructions"},[a("h2",{staticClass:"nonProjectsTitle"},[t._v("Parece que aún no tienes proyectos nuevos")]),a("p",{staticStyle:{"font-size":"14px"}},[t._v("¿Qué esperas? Empieza de una vez.")]),a("br"),a("button",{staticClass:"btn btn-success actionButton"},[a("router-link",{staticClass:"text-white",attrs:{to:"/account/create/project"}},[t._v("Crea un nuevo proyecto")])],1)])])},E=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"image-representation"},[r("img",{attrs:{src:a("6385"),width:"190px"}})])}],O=(a("afab"),{}),I=O,A=Object(m["a"])(I,k,E,!1,null,null,null),N=A.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return 1==t.article.exists?r("div",{staticClass:"weeklyArticleCardContainer"},[r("router-link",{attrs:{to:"/articles/weekly"}},[r("small",{staticClass:"text-warning",staticStyle:{"font-weight":"900","letter-spacing":"-0.4px"}},[t._v("ÚLTIMO ARTÍCULO DEL BLOG")]),r("h4",{staticClass:"text-white",staticStyle:{margin:"0.4rem 0 0 0"}},[t._v(t._s(t.article.title)+" "),r("span",{staticClass:"badge badge-success"},[t._v("Artículo semanal")])]),r("p",{staticClass:"muted-gray"},[t._v(t._s(t.article.abstract))]),r("div",{staticClass:"weeklyArticleCardPublisher"},[r("div",{staticClass:"profilePictureContainer"},[r("img",{attrs:{src:t.article.publisherPhoto?t.article.publisherPhoto:a("f365"),alt:""}})]),r("small",{staticClass:"text-white"},[t._v(t._s(t.article.publisherName))])])]),1==t.admin?r("div",{staticStyle:{width:"130px"},on:{click:t.deleteArticle}},[r("br"),r("button",{staticClass:"btn btn-danger"},[t._v("Eliminar artículo")])]):t._e()],1):t._e()},S=[],U={data:function(){return{article:{exists:!1,title:"",abstract:"",publisher:"",publisherName:"",publisherPhoto:"",id:""},admin:!1}},created:function(){var t=this;n.a.firestore().collection("articles").get().then(function(e){var a=e.docs[0];t.article.exists=!0,t.article.title=a.data()["title"],t.article.abstract=a.data()["abstract"],t.article.publisher=a.data()["publisher"],t.article.id=a.id,n.a.firestore().collection("users").doc(t.article.publisher).get().then(function(e){t.article.publisherName=e.data()["name"],n.a.storage().ref("/profile_photos/".concat(t.article.publisher)).getDownloadURL().then(function(e){return t.article.publisherPhoto=e})}).catch(function(t){return console.log(t)})}).catch(function(){t.article.exists=!1}),n.a.firestore().collection("users").doc(n.a.auth().currentUser.uid).get().then(function(e){t.admin=e.data()["roles"]["admin"]})},methods:{deleteArticle:function(){n.a.firestore().collection("articles").doc(this.article.id).delete().then(function(){return window.location.reload()})}}},B=U,D=(a("cdf4"),Object(m["a"])(B,M,S,!1,null,"7ba26278",null)),L=D.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loader",attrs:{id:"loader"}})},q=[],F={beforeCreate:function(){window.onload=document.getElementById("loader").style.display="block"}},z=F,R=(a("90937"),Object(m["a"])(z,T,q,!1,null,"1b399bc8",null)),J=R.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:"featuresModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-footer",staticStyle:{border:"none"}},[a("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.setModalChecked}},[t._v("Continuar")])])])])])},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-body",staticStyle:{border:"none"}},[a("span",{staticClass:"subtitleOverline text-primary"},[t._v("Últimas novedades")]),a("h4",[t._v("Destacar ideas en Boards")]),a("br"),a("p",[t._v("En el  menú de opciones de las ideas de Boards puedes destacar ideas que puedan\n                    ser relevantes para tu proyecto. Pronto tendremos otras opciones para uno de los\n                    módulos más importantes de la familia. ")])])}],H={mounted:function(){$("#featuresModal").modal("show")}},Q=H,K=(a("a50d"),Object(m["a"])(Q,W,G,!1,null,"14fb3845",null)),V=K.exports,X={data:function(){return{projects:[]}},components:{ProjectCard:P,NonProjectsBanner:N,WeeklyArticleCard:L,Preloader:J,Features:V},mounted:function(){var t=this;n.a.firestore().collection("projects").get().then(function(e){t.checkProjectsProperty(e)})},methods:{checkProjectsProperty:function(t){var e=this;t.forEach(function(t){n.a.firestore().collection("projects").doc(t.id).collection("members").get().then(function(a){a.forEach(function(a){a.id==n.a.auth().currentUser.uid&&(n.a.storage().ref("projects/".concat(t.id,"/project_photo")).getDownloadURL().then(function(a){return e.setProjectOnArray(t.data()["shortName"],t.id,a)}).catch(function(){return e.setProjectOnArray(t.data()["shortName"],t.id,"https://source.unsplash.com/800x500/?work,innovation,idea")}),1)})}).catch(function(){return window.location.reload()})})},setProjectOnArray:function(t,e,a){this.projects.push({name:t,id:e,photoUrl:a})}}},Y=X,Z=Object(m["a"])(Y,r,s,!1,null,null,null);e["default"]=Z.exports},"481d":function(t,e,a){},"625a":function(t,e,a){},6385:function(t,e,a){t.exports=a.p+"img/MoonIcon.68d1fbd0.png"},"7f7f":function(t,e,a){var r=a("86cc").f,s=Function.prototype,o=/^\s*function ([^ (]*)/,n="name";n in s||a("9e1e")&&r(s,n,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"839d":function(t,e,a){},90937:function(t,e,a){"use strict";var r=a("625a"),s=a.n(r);s.a},"9cf8":function(t,e,a){},a50d:function(t,e,a){"use strict";var r=a("481d"),s=a.n(r);s.a},afab:function(t,e,a){},cdf4:function(t,e,a){"use strict";var r=a("9cf8"),s=a.n(r);s.a},f365:function(t,e,a){t.exports=a.p+"img/profile.f2fd1390.png"}}]);
//# sourceMappingURL=chunk-1728d09e.15dbf725.js.map