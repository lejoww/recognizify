(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b9f3734"],{"0e09":function(t,e,a){t.exports=a.p+"img/feather-sprite.5113e3a1.svg"},"40da":function(t,e,a){"use strict";var s=a("ca3f"),o=a.n(s);o.a},7234:function(t,e,a){"use strict";var s=a("b164"),o=a.n(s);o.a},7323:function(t,e,a){},"7c20":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("OverlayMenuToggleButton"),s("div",{staticClass:"projectFeedPanel",attrs:{id:"projectFeedPanel"}},[s("ProjectName"),s("div",{staticClass:"projectFounder"},[s("p",{staticClass:"projectCardIndicator"},[t._v("Creador del proyecto")]),s("div",{staticClass:"projectFounderFlow"},[t._m(0),s("div",{staticStyle:{display:"flex","flex-direction":"column"}},[s("span",{staticClass:"projectFounderName"},[t._v(t._s(t.admin.name))]),s("small",{staticClass:"text-muted",staticStyle:{"font-weight":"600"}},[t._v("@"+t._s(t.admin.user))])])])]),s("div",{staticClass:"projectShortcuts"},[s("p",{staticClass:"projectCardIndicator"},[t._v("Módulos del proyecto")]),s("router-link",{staticClass:"projectShortcutLink",attrs:{to:"/dashboard/project/"+this.$route.params.projectId+"/feed"}},[s("div",{staticClass:"projectShortcutButton"},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":a("0e09")+"#activity"}})]),t._v("\n                    Feed\n                ")])]),s("router-link",{staticClass:"projectShortcutLink",attrs:{to:"/dashboard/project/"+this.$route.params.projectId+"/board"}},[s("div",{staticClass:"projectShortcutButton"},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":a("0e09")+"#message-square"}})]),t._v("\n                    Boards\n                ")])]),s("router-link",{staticClass:"projectShortcutLink",attrs:{to:"/dashboard/project/"+this.$route.params.projectId+"/tasks"}},[s("div",{staticClass:"projectShortcutButton"},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":a("0e09")+"#clock"}})]),t._v("\n                    Tasks\n                ")])]),s("router-link",{staticClass:"projectShortcutLink",attrs:{to:"/dashboard/project/"+this.$route.params.projectId+"/goals"}},[s("div",{staticClass:"projectShortcutButton"},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":a("0e09")+"#flag"}})]),t._v("\n                    Goals\n                ")])]),s("router-link",{staticClass:"projectShortcutLink",attrs:{to:"/dashboard/project/"+this.$route.params.projectId+"/membership"}},[s("div",{staticClass:"projectShortcutButton"},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":a("0e09")+"#users"}})]),t._v("\n                    Users\n                ")])]),s("router-link",{staticClass:"projectShortcutLink",attrs:{to:"/dashboard/project/"+this.$route.params.projectId+"/ads"}},[s("div",{staticClass:"projectShortcutButton"},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":a("0e09")+"#mic"}})]),t._v("\n                    Ads\n                ")])])],1)],1)],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"projectFounderProfile"},[s("img",{staticClass:"projectFounderProfilePicture",attrs:{id:"projectFounderProfilePicture",src:a("f365")}})])}],n=(a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projectPresentationContainer"},[a("div",{staticClass:"projectData"},[a("p",{staticClass:"text-white"},[t._v(t._s(t.projectName))]),a("span",[t._v(t._s(t.projectDescription?t.projectDescription:""))])])])}),r=[],i=a("8aa5"),c=a.n(i),l={data:function(){return{projectName:"",projectDescription:""}},created:function(){var t=this;c.a.firestore().collection("projects").doc(this.$route.params.projectId).get().then(function(e){t.projectName=e.data()["shortName"],t.projectDescription=e.data()["description"]})}},u=l,d=(a("7234"),a("2877")),p=Object(d["a"])(u,n,r,!1,null,null,null),f=p.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"OverlayMenuToggleButton",attrs:{id:"OverlayMenuToggleButton","data-toggle":"tooltip","data-placement":"bottom",title:"Menú del proyecto"},on:{click:t.toggleOverlayMenu}},[s("svg",{staticClass:"feather-light"},[s("use",{attrs:{"xlink:href":a("0e09")+"#package"}})])])])},m=[],v=(a("1157"),{updated:function(){$(function(){$('[data-toggle="tooltip"]').tooltip()})},methods:{toggleOverlayMenu:function(){document.getElementById("projectFeedPanel").classList.toggle("show"),document.getElementById("OverlayMenuToggleButton").classList.toggle("forward"),$("#OverlayMenuToggleButton").tooltip("disable")}}}),g=v,j=(a("40da"),Object(d["a"])(g,h,m,!1,null,null,null)),k=j.exports,C=(a("7323"),{data:function(){return{admin:{name:"",profilePicture:"",user:""}}},components:{ProjectName:f,OverlayMenuToggleButton:k},created:function(){var t=this;c.a.firestore().collection("projects").doc(this.$route.params.projectId).get().then(function(e){c.a.firestore().collection("users").doc(e.data()["admin"][0]).get().then(function(e){t.admin.name=e.data()["name"],t.admin.user=e.data()["user"]}),c.a.storage().ref("profile_photos/".concat(e.data()["admin"][0])).getDownloadURL().then(function(t){document.getElementById("projectFounderProfilePicture").setAttribute("src",t)})})},methods:{closeOverlayMenu:function(){document.getElementById("projectFeedPanel").classList.toggle("show")}}}),b=C,_=Object(d["a"])(b,s,o,!1,null,null,null);e["a"]=_.exports},"7f7f":function(t,e,a){var s=a("86cc").f,o=Function.prototype,n=/^\s*function ([^ (]*)/,r="name";r in o||a("9e1e")&&s(o,r,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},a42f:function(t,e,a){},b164:function(t,e,a){},c98d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboardContent"},[a("AdsPanel"),a("ProjectPanel")],1)},o=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tasksPanel"},[s("div",{staticClass:"taskMiniBanner bg-primary"},[s("svg",{staticClass:"feather-mini-light"},[s("use",{attrs:{"xlink:href":a("0e09")+"#check-circle"}})]),s("span",{staticClass:"tasksPanelTitle text-white"},[t._v("Anuncios de tu equipo")])]),s("div",{staticClass:"tasksPanelWrapper"},[t.ads.length>0?s("div",{staticClass:"tasksPanelList"},t._l(t.ads,function(t){return s("Ad",{key:t,attrs:{todo:t.message,publisher:"por "+t.name,id:t.publisherId}})}),1):t._e(),0==t.ads.length?s("div",{staticClass:"tasksPanelList"},[s("Ad",{attrs:{todo:"Mantente sincronizado ⌚ con nuevas tareas para tu equipo aquí 🚀. Agrega alguna 💡.",publisher:"por Recognizify"}})],1):t._e()]),s("br"),s("br"),s("br"),s("br"),s("NewAd")],1)},r=[],i=(a("7f7f"),a("ac6a"),a("a42f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"taskCard"},[a("p",{staticClass:"taskToDo"},[t._v(t._s(this.todo))]),a("div",{staticClass:"taskBottom"},[a("div",{staticClass:"taskPublisher"},[a("span",{},[t._v(t._s(this.publisher))])])])])}),c=[],l=a("8aa5"),u=a.n(l),d={props:["todo","publisher","id"],created:function(){u.a.storage().ref("/profile_photos/".concat(this.id)).getDownloadURL().then(function(t){return document.getElementById("taskPublisherProfilePicture").setAttribute("src",t)})}},p=d,f=a("2877"),h=Object(f["a"])(p,i,c,!1,null,null,null),m=h.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"taskSetting"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],staticClass:"form-control-special taskSettingInput",attrs:{type:"text",placeholder:"Escribe aqui una nueva tarea para tu equipo..."},domProps:{value:t.task},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveTask(e)},input:function(e){e.target.composing||(t.task=e.target.value)}}}),a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("button",{staticClass:"btn btn-success btn-sm",staticStyle:{"margin-top":"7px"},on:{click:t.saveTask}},[t._v("Publicar")]),a("small",{staticClass:"text-muted",staticStyle:{"margin-left":"7px"}},[t._v("o presiona ENTER")])])])},g=[],j=a("e010"),k={data:function(){return{task:""}},mixins:[j["a"]],methods:{saveTask:function(){var t=this;this.checkTaskContent()?u.a.auth().onAuthStateChanged(function(e){u.a.firestore().collection("users").doc(e.uid).get().then(function(a){u.a.firestore().collection("projects").doc(t.$route.params.projectId).collection("ads").add({name:a.data()["name"],ad:t.task.trim(),publisherId:e.uid}).then(function(){t.addActivityPoint(),window.location.reload()})}).catch(function(t){console.log(t)})}):console.log("Debes escribir algo")},checkTaskContent:function(){return!/^\s+$/.test(this.task)&&""!=this.task&&void 0!=this.task}}},C=k,b=Object(f["a"])(C,v,g,!1,null,null,null),_=b.exports,y={data:function(){return{ads:[]}},components:{Ad:m,NewAd:_},created:function(){this.getAds()},methods:{getAds:function(){var t=this;u.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("ads").get().then(function(e){e.forEach(function(e){t.ads.push({name:e.data()["name"],message:e.data()["ad"],publisherId:e.data()["publisherId"]})})})}}},P=y,x=Object(f["a"])(P,n,r,!1,null,null,null),I=x.exports,$=a("7c20"),w={components:{AdsPanel:I,ProjectPanel:$["a"]}},S=w,B=Object(f["a"])(S,s,o,!1,null,null,null);e["default"]=B.exports},ca3f:function(t,e,a){},e010:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var s=a("8aa5"),o=a.n(s),n={methods:{addActivityPoint:function(){var t=this,e=new Date,a="".concat(e.getUTCDate()).concat(e.getMonth()).concat(e.getFullYear());o.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("dates").doc(a).get().then(function(e){var s=void 0==e.data()?0:e.data()["activityPoints"];t.setActivityPoint(a,s)})},setActivityPoint:function(t,e){o.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("dates").doc(t).set({activityPoints:e+1,date:o.a.firestore.Timestamp.fromDate(new Date)})}}}},f365:function(t,e,a){t.exports=a.p+"img/profile.f2fd1390.png"}}]);
//# sourceMappingURL=chunk-1b9f3734.c697eee2.js.map