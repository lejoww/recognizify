(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37f96dfa"],{"05e6":function(t,e,a){},"0e09":function(t,e,a){t.exports=a.p+"img/feather-sprite.5113e3a1.svg"},"40da":function(t,e,a){"use strict";var o=a("ca3f"),s=a.n(o);s.a},7234:function(t,e,a){"use strict";var o=a("b164"),s=a.n(o);s.a},7323:function(t,e,a){},"7c20":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("OverlayMenuToggleButton"),o("div",{staticClass:"projectFeedPanel",attrs:{id:"projectFeedPanel"}},[o("ProjectName"),o("div",{staticClass:"projectFounder"},[o("p",{staticClass:"projectCardIndicator"},[t._v("Creador del proyecto")]),o("div",{staticClass:"projectFounderFlow"},[t._m(0),o("div",{staticStyle:{display:"flex","flex-direction":"column"}},[o("span",{staticClass:"projectFounderName"},[t._v(t._s(t.admin.name))]),o("small",{staticClass:"text-muted",staticStyle:{"font-weight":"600"}},[t._v("@"+t._s(t.admin.user))])])])]),o("div",{staticClass:"projectShortcuts"},[o("p",{staticClass:"projectCardIndicator"},[t._v("Módulos del proyecto")]),o("router-link",{staticClass:"projectShortcutLink",attrs:{to:"/dashboard/project/"+this.$route.params.projectId+"/feed"}},[o("div",{staticClass:"projectShortcutButton"},[o("svg",{staticClass:"feather-menu"},[o("use",{attrs:{"xlink:href":a("0e09")+"#activity"}})]),t._v("\n                    Feed\n                ")])]),o("router-link",{staticClass:"projectShortcutLink",attrs:{to:"/dashboard/project/"+this.$route.params.projectId+"/board"}},[o("div",{staticClass:"projectShortcutButton"},[o("svg",{staticClass:"feather-menu"},[o("use",{attrs:{"xlink:href":a("0e09")+"#message-square"}})]),t._v("\n                    Boards\n                ")])]),o("router-link",{staticClass:"projectShortcutLink",attrs:{to:"/dashboard/project/"+this.$route.params.projectId+"/tasks"}},[o("div",{staticClass:"projectShortcutButton"},[o("svg",{staticClass:"feather-menu"},[o("use",{attrs:{"xlink:href":a("0e09")+"#clock"}})]),t._v("\n                    Tasks\n                ")])]),o("router-link",{staticClass:"projectShortcutLink",attrs:{to:"/dashboard/project/"+this.$route.params.projectId+"/goals"}},[o("div",{staticClass:"projectShortcutButton"},[o("svg",{staticClass:"feather-menu"},[o("use",{attrs:{"xlink:href":a("0e09")+"#flag"}})]),t._v("\n                    Goals\n                ")])]),o("router-link",{staticClass:"projectShortcutLink",attrs:{to:"/dashboard/project/"+this.$route.params.projectId+"/membership"}},[o("div",{staticClass:"projectShortcutButton"},[o("svg",{staticClass:"feather-menu"},[o("use",{attrs:{"xlink:href":a("0e09")+"#users"}})]),t._v("\n                    Users\n                ")])]),o("router-link",{staticClass:"projectShortcutLink",attrs:{to:"/dashboard/project/"+this.$route.params.projectId+"/ads"}},[o("div",{staticClass:"projectShortcutButton"},[o("svg",{staticClass:"feather-menu"},[o("use",{attrs:{"xlink:href":a("0e09")+"#mic"}})]),t._v("\n                    Ads\n                ")])])],1)],1)],1)},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"projectFounderProfile"},[o("img",{staticClass:"projectFounderProfilePicture",attrs:{id:"projectFounderProfilePicture",src:a("f365")}})])}],r=(a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projectPresentationContainer"},[a("div",{staticClass:"projectData"},[a("p",{staticClass:"text-white"},[t._v(t._s(t.projectName))]),a("span",[t._v(t._s(t.projectDescription?t.projectDescription:""))])])])}),i=[],n=a("8aa5"),c=a.n(n),l={data:function(){return{projectName:"",projectDescription:""}},created:function(){var t=this;c.a.firestore().collection("projects").doc(this.$route.params.projectId).get().then(function(e){t.projectName=e.data()["shortName"],t.projectDescription=e.data()["description"]})}},d=l,u=(a("7234"),a("2877")),p=Object(u["a"])(d,r,i,!1,null,null,null),m=p.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("button",{staticClass:"OverlayMenuToggleButton",attrs:{id:"OverlayMenuToggleButton","data-toggle":"tooltip","data-placement":"bottom",title:"Menú del proyecto"},on:{click:t.toggleOverlayMenu}},[o("svg",{staticClass:"feather-light"},[o("use",{attrs:{"xlink:href":a("0e09")+"#package"}})])])])},v=[],g=(a("1157"),{updated:function(){$(function(){$('[data-toggle="tooltip"]').tooltip()})},methods:{toggleOverlayMenu:function(){document.getElementById("projectFeedPanel").classList.toggle("show"),document.getElementById("OverlayMenuToggleButton").classList.toggle("forward"),$("#OverlayMenuToggleButton").tooltip("disable")}}}),h=g,C=(a("40da"),Object(u["a"])(h,f,v,!1,null,null,null)),j=C.exports,b=(a("7323"),{data:function(){return{admin:{name:"",profilePicture:"",user:""}}},components:{ProjectName:m,OverlayMenuToggleButton:j},created:function(){var t=this;c.a.firestore().collection("projects").doc(this.$route.params.projectId).get().then(function(e){c.a.firestore().collection("users").doc(e.data()["admin"][0]).get().then(function(e){t.admin.name=e.data()["name"],t.admin.user=e.data()["user"]}),c.a.storage().ref("profile_photos/".concat(e.data()["admin"][0])).getDownloadURL().then(function(t){document.getElementById("projectFounderProfilePicture").setAttribute("src",t)})})},methods:{closeOverlayMenu:function(){document.getElementById("projectFeedPanel").classList.toggle("show")}}}),_=b,y=Object(u["a"])(_,o,s,!1,null,null,null);e["a"]=y.exports},"7f7f":function(t,e,a){var o=a("86cc").f,s=Function.prototype,r=/^\s*function ([^ (]*)/,i="name";i in s||a("9e1e")&&o(s,i,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},"8f3a":function(t,e,a){},"936e":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"goals"}},[o("CreateGoal"),o("div",{staticClass:"dashboardContent"},[o("div",{staticClass:"goalsLayout"},[o("div",{staticClass:"projectSummaryTitle"},[o("h3",[t._v("\n                        Metas\n                        "),o("button",{staticClass:"btn btn-primary btn-sm",attrs:{"data-toggle":"modal","data-target":"#addGoalModal"}},[o("svg",{attrs:{width:"18",height:"18",stroke:"#ffffff","stroke-width":"2"}},[o("use",{attrs:{"xlink:href":a("0e09")+"#plus"}})]),t._v("\n                            Crear una meta\n                        ")])]),o("br")]),t.goals.length>0?o("div",{staticClass:"goalsField"},t._l(t.goals,function(e){return o("div",{key:e,staticClass:"card goalCard",staticStyle:{width:"18rem"}},[o("a",{staticClass:"goalCardStar",attrs:{"data-toggle":"tooltip","data-placement":"right",title:"Marcar como importante"},on:{click:function(a){return t.setStar(e.id)}}},[o("svg",{class:e.active?"starActive":"feather-dark"},[o("use",{attrs:{"xlink:href":a("0e09")+"#star"}})])]),o("div",{staticClass:"card-body"},[o("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),o("p",{staticClass:"card-text"},[t._v(t._s(e.motivation))])])])}),0):t._e(),0==t.goals.length?o("div",{staticClass:"nonGoalsField"},[t._m(0)]):t._e()])]),o("ProjectPanel")],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticStyle:{color:"#9e95aa"}},[t._v("No tienes nuevas metas")]),a("p",{staticStyle:{color:"#9e95aa"}},[t._v("Las metas te ayudan a que todo lo que hagas dentro de Recognizify gire en torno a ellas.")])])}],r=(a("7f7f"),a("ac6a"),a("8aa5")),i=a.n(r),n=(a("8f3a"),a("05e6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"addGoalModal",tabindex:"-1",role:"dialog","aria-labelledby":"addGoalModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-container"},[a("div",{staticClass:"form-group"},[a("label",[t._v("¿Cuál es la meta?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.goal.name,expression:"goal.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ejm. Promocionar los productos por redes sociales",autocomplete:"off",spellcheck:"false"},domProps:{value:t.goal.name},on:{input:function(e){e.target.composing||t.$set(t.goal,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[t._v("Escribe una frase que te motive a hacerlo")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.goal.motivation,expression:"goal.motivation"}],staticClass:"form-control",attrs:{type:"text",placeholder:'"A hombros de gigantes"',autocomplete:"off",spellcheck:"false"},domProps:{value:t.goal.motivation},on:{input:function(e){e.target.composing||t.$set(t.goal,"motivation",e.target.value)}}})]),a("br"),a("div",{staticClass:"overline"},[t._v("PASOS PARA CUMPLIRLO")]),a("div",{staticClass:"bg-success",staticStyle:{padding:"1rem"}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-white"},[t._v("Primer paso")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.goal.steps.one,expression:"goal.steps.one"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Explica en cuatro palabras qué debes hacer"},domProps:{value:t.goal.steps.one},on:{input:function(e){e.target.composing||t.$set(t.goal.steps,"one",e.target.value)}}}),a("br")]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-white"},[t._v("Segundo paso")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.goal.steps.two,expression:"goal.steps.two"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Explica en cuatro palabras qué debes hacer"},domProps:{value:t.goal.steps.two},on:{input:function(e){e.target.composing||t.$set(t.goal.steps,"two",e.target.value)}}}),a("br")]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-white"},[t._v("Tercer paso")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.goal.steps.third,expression:"goal.steps.third"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Explica en cuatro palabras qué debes hacer"},domProps:{value:t.goal.steps.third},on:{input:function(e){e.target.composing||t.$set(t.goal.steps,"third",e.target.value)}}}),a("br")])])])]),a("div",{staticClass:"modal-footer",staticStyle:{border:"none"}},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancelar")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.saveGoal}},[t._v("Crear meta")])])])])])}),c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-success",staticStyle:{border:"none"}},[a("h2",{staticClass:"modal-title text-white"},[t._v("Crea una meta")])])}],l={data:function(){return{goal:{name:"",motivation:"",steps:{one:"",two:"",third:""}}}},methods:{saveGoal:function(){i.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("goals").add({name:this.goal.name,motivation:this.goal.motivation,steps:{one:this.goal.steps.one,two:this.goal.steps.two,third:this.goal.steps.third},active:!1}).then(function(){return window.location.reload()})}}},d=l,u=a("2877"),p=Object(u["a"])(d,n,c,!1,null,null,null),m=p.exports,f=a("e7dd"),v=a("7c20"),g={data:function(){return{goals:[]}},components:{CreateGoal:m,ProjectPanel:v["a"]},mixins:[f["a"]],created:function(){"undefined"==this.$router.history.current.params["projectId"]?this.$router.push("/dashboard/select"):(this.getGoals(),this.setActiveStarGoal())},methods:{getGoals:function(){var t=this;i.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("goals").get().then(function(e){e.forEach(function(e){t.goals.push({name:e.data()["name"],motivation:e.data()["motivation"],id:e.id,active:e.data()["active"]})})})},setStar:function(t,e){i.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("goals").doc(t).update({star:!0,active:!0}).then(function(){console.log("Bien")}).catch(function(t){return console.log(t)})}},updated:function(){$(function(){$('[data-toggle="tooltip"]').tooltip()})}},h=g,C=Object(u["a"])(h,o,s,!1,null,null,null);e["default"]=C.exports},b164:function(t,e,a){},ca3f:function(t,e,a){},e7dd:function(t,e,a){"use strict";a("ac6a");var o=a("8aa5"),s=a.n(o),r={beforeCreate:function(){var t=this;s.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("members").get().then(function(e){var a=!1;e.forEach(function(t){t.id==s.a.auth().currentUser.uid&&(a=!0)}),setInterval(function(){0==a&&t.$router.push("/error/project")},500)})}};e["a"]=r},f365:function(t,e,a){t.exports=a.p+"img/profile.f2fd1390.png"}}]);
//# sourceMappingURL=chunk-37f96dfa.19599cae.js.map