(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-958f7c5a"],{"04f8":function(t,e,a){"use strict";var s=a("18c0"),o=a.n(s);o.a},"0e09":function(t,e,a){t.exports=a.p+"img/feather-sprite.5113e3a1.svg"},"18c0":function(t,e,a){},"1d03":function(t,e,a){},"40da":function(t,e,a){"use strict";var s=a("ca3f"),o=a.n(s);o.a},7234:function(t,e,a){"use strict";var s=a("b164"),o=a.n(s);o.a},7323:function(t,e,a){},7596:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboardContent"},[1==this.modalForGoals?a("NeedGoalsModal"):t._e(),a("div",{staticClass:"tasksLayout"},[a("div",{staticClass:"tasksModuleHeader bg-gradient"},[t._m(0),a("a",{staticClass:"btn btn-success",staticStyle:{"margin-left":"2rem"},attrs:{href:"/dashboard/project/"+this.$route.params.projectId+"/tasks/create"}},[t._v("Nueva tarea")])]),a("div",{staticClass:"tasksContent"},[a("TasksTable")],1)]),a("ProjectPanel")],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"text-white",staticStyle:{"font-weight":"800","margin-bottom":"4px"}},[t._v("Tasks")]),a("span",{staticStyle:{color:"#A9A8C3","font-weight":"700"}},[t._v("Panel de tareas")])])}],r=a("8aa5"),n=a.n(r),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tasksTableContainer"},[s("table",{staticClass:"table"},[t._m(0),t.tasksList.length>=1?s("tbody",t._l(t.tasksList,function(e){return s("tr",{key:e},[s("td",[s("div",{staticClass:"taskTableField"},[s("span",{staticClass:"taskTitle"},[t._v(t._s(e.task))])])]),s("td",[s("div",{staticClass:"taskTableField"},[s("div",{staticClass:"taskCreatorProfile"},[s("img",{attrs:{src:e.creatorPhoto?e.creatorPhoto:a("f365"),width:"100%"}})])])]),s("td",[s("div",{staticClass:"taskTableField"},[s("div",{staticClass:"taskOptions"},[s("a",{staticStyle:{cursor:"pointer"},on:{click:function(a){return t.deleteTask(e.id)}}},[s("svg",{staticClass:"feather-like-options"},[s("use",{attrs:{"xlink:href":a("0e09")+"#trash"}})])])])])])])}),0):s("tbody",[s("p",{staticStyle:{margin:"25px"}},[t._v("No hay tareas. Agrega una en el botón.")])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Tarea")]),a("th",{attrs:{scope:"col"}},[t._v("Creador")]),a("th",{attrs:{scope:"col"}},[t._v("Opciones")])])])}],l=(a("ac6a"),a("1d03"),a("f365"),{data:function(){return{tasksList:[]}},created:function(){this.getTasks()},methods:{getTasks:function(){var t=this;n.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("tasks").get().then(function(e){return t.putTasksOnTable(e)})},putTasksOnTable:function(t){var e=this;t.forEach(function(t){n.a.storage().ref("profile_photos/".concat(t.data()["creator"])).getDownloadURL().then(function(a){e.tasksList.push({task:t.data()["task"],creatorPhoto:a,id:t.id})}).catch(function(){e.tasksList.push({task:t.data()["task"],id:t.id})})})},deleteTask:function(t){n.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("tasks").doc(t).delete().then(function(){return window.location.reload()})}}}),u=l,d=a("2877"),p=Object(d["a"])(u,c,i,!1,null,null,null),f=p.exports,h=a("e7dd"),m=a("7c20"),v=function(){var t=this,e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:"needGoalsModal","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[e._m(0),s("div",{staticClass:"modal-footer",staticStyle:{border:"none"}},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(){return t.$router.push("/dashboard/project/"+t.$route.params.projectId+"/goals")}}},[e._v("Ir a crear meta")])])])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-body",staticStyle:{border:"none"}},[a("span",{staticClass:"subtitleOverline text-primary"},[t._v("Acción requerida")]),a("h3",{staticStyle:{"font-weight":"800"}},[t._v("Primero necesitas crear metas")]),a("br"),a("p",[t._v("La regla es que toda tarea que añadas necesita tener un "),a("b",[t._v("por qué")]),t._v(", así\n                podemos hacer seguimiento constante. Entonces "),a("b",[t._v("primero crear una meta que\n                persigas con esta tarea, luego vuelve y podrás crearla.")])])])}],j={mounted:function(){$("#needGoalsModal  ").modal("show")}},C=j,k=(a("04f8"),Object(d["a"])(C,v,g,!1,null,null,null)),_=k.exports,b={data:function(){return{modalForGoals:!1}},components:{TasksTable:f,ProjectPanel:m["a"],NeedGoalsModal:_},mixins:[h["a"]],mounted:function(){this.checkGoalsLength()},methods:{checkGoalsLength:function(){var t=this;n.a.auth().onAuthStateChanged(function(e){e&&n.a.firestore().collection("projects").doc(t.$route.params.projectId).collection("goals").get().then(function(e){0==e.docs.length&&(t.modalForGoals=!0)})})}}},y=b,x=Object(d["a"])(y,s,o,!1,null,null,null);e["default"]=x.exports},"7c20":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("OverlayMenuToggleButton"),s("div",{staticClass:"projectFeedPanel",attrs:{id:"projectFeedPanel"}},[s("ProjectName"),s("div",{staticClass:"projectFounder"},[s("p",{staticClass:"projectCardIndicator"},[t._v("Creador del proyecto")]),s("div",{staticClass:"projectFounderFlow"},[t._m(0),s("div",{staticStyle:{display:"flex","flex-direction":"column"}},[s("span",{staticClass:"projectFounderName"},[t._v(t._s(t.admin.name))]),s("small",{staticClass:"text-muted",staticStyle:{"font-weight":"600"}},[t._v("@"+t._s(t.admin.user))])])])]),s("div",{staticClass:"projectShortcuts"},[s("p",{staticClass:"projectCardIndicator"},[t._v("Módulos del proyecto")]),s("router-link",{staticClass:"projectShortcutLink",attrs:{to:"/dashboard/project/"+this.$route.params.projectId+"/feed"}},[s("div",{staticClass:"projectShortcutButton"},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":a("0e09")+"#activity"}})]),t._v("\n                    Feed\n                ")])]),s("router-link",{staticClass:"projectShortcutLink",attrs:{to:"/dashboard/project/"+this.$route.params.projectId+"/board"}},[s("div",{staticClass:"projectShortcutButton"},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":a("0e09")+"#message-square"}})]),t._v("\n                    Boards\n                ")])]),s("router-link",{staticClass:"projectShortcutLink",attrs:{to:"/dashboard/project/"+this.$route.params.projectId+"/tasks"}},[s("div",{staticClass:"projectShortcutButton"},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":a("0e09")+"#clock"}})]),t._v("\n                    Tasks\n                ")])]),s("router-link",{staticClass:"projectShortcutLink",attrs:{to:"/dashboard/project/"+this.$route.params.projectId+"/goals"}},[s("div",{staticClass:"projectShortcutButton"},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":a("0e09")+"#flag"}})]),t._v("\n                    Goals\n                ")])]),s("router-link",{staticClass:"projectShortcutLink",attrs:{to:"/dashboard/project/"+this.$route.params.projectId+"/membership"}},[s("div",{staticClass:"projectShortcutButton"},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":a("0e09")+"#users"}})]),t._v("\n                    Users\n                ")])]),s("router-link",{staticClass:"projectShortcutLink",attrs:{to:"/dashboard/project/"+this.$route.params.projectId+"/ads"}},[s("div",{staticClass:"projectShortcutButton"},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":a("0e09")+"#mic"}})]),t._v("\n                    Ads\n                ")])])],1)],1)],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"projectFounderProfile"},[s("img",{staticClass:"projectFounderProfilePicture",attrs:{id:"projectFounderProfilePicture",src:a("f365")}})])}],r=(a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projectPresentationContainer"},[a("div",{staticClass:"projectData"},[a("p",{staticClass:"text-white"},[t._v(t._s(t.projectName))]),a("span",[t._v(t._s(t.projectDescription?t.projectDescription:""))])])])}),n=[],c=a("8aa5"),i=a.n(c),l={data:function(){return{projectName:"",projectDescription:""}},created:function(){var t=this;i.a.firestore().collection("projects").doc(this.$route.params.projectId).get().then(function(e){t.projectName=e.data()["shortName"],t.projectDescription=e.data()["description"]})}},u=l,d=(a("7234"),a("2877")),p=Object(d["a"])(u,r,n,!1,null,null,null),f=p.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"OverlayMenuToggleButton",attrs:{id:"OverlayMenuToggleButton","data-toggle":"tooltip","data-placement":"bottom",title:"Menú del proyecto"},on:{click:t.toggleOverlayMenu}},[s("svg",{staticClass:"feather-light"},[s("use",{attrs:{"xlink:href":a("0e09")+"#package"}})])])])},m=[],v=(a("1157"),{updated:function(){$(function(){$('[data-toggle="tooltip"]').tooltip()})},methods:{toggleOverlayMenu:function(){document.getElementById("projectFeedPanel").classList.toggle("show"),document.getElementById("OverlayMenuToggleButton").classList.toggle("forward"),$("#OverlayMenuToggleButton").tooltip("disable")}}}),g=v,j=(a("40da"),Object(d["a"])(g,h,m,!1,null,null,null)),C=j.exports,k=(a("7323"),{data:function(){return{admin:{name:"",profilePicture:"",user:""}}},components:{ProjectName:f,OverlayMenuToggleButton:C},created:function(){var t=this;i.a.firestore().collection("projects").doc(this.$route.params.projectId).get().then(function(e){i.a.firestore().collection("users").doc(e.data()["admin"][0]).get().then(function(e){t.admin.name=e.data()["name"],t.admin.user=e.data()["user"]}),i.a.storage().ref("profile_photos/".concat(e.data()["admin"][0])).getDownloadURL().then(function(t){document.getElementById("projectFounderProfilePicture").setAttribute("src",t)})})},methods:{closeOverlayMenu:function(){document.getElementById("projectFeedPanel").classList.toggle("show")}}}),_=k,b=Object(d["a"])(_,s,o,!1,null,null,null);e["a"]=b.exports},"7f7f":function(t,e,a){var s=a("86cc").f,o=Function.prototype,r=/^\s*function ([^ (]*)/,n="name";n in o||a("9e1e")&&s(o,n,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},b164:function(t,e,a){},ca3f:function(t,e,a){},e7dd:function(t,e,a){"use strict";a("ac6a");var s=a("8aa5"),o=a.n(s),r={beforeCreate:function(){var t=this;o.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("members").get().then(function(e){var a=!1;e.forEach(function(t){t.id==o.a.auth().currentUser.uid&&(a=!0)}),setInterval(function(){0==a&&t.$router.push("/error/project")},500)})}};e["a"]=r},f365:function(t,e,a){t.exports=a.p+"img/profile.f2fd1390.png"}}]);
//# sourceMappingURL=chunk-958f7c5a.b2e694a0.js.map