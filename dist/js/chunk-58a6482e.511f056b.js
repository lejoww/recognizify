(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58a6482e"],{"0e09":function(t,s,a){t.exports=a.p+"img/feather-sprite.5113e3a1.svg"},"5c8d":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tasksPanel"},[e("div",{staticClass:"tasksPanelWrapper"},[e("svg",{staticClass:"feather-menu"},[e("use",{attrs:{"xlink:href":a("0e09")+"#check-circle"}})]),e("span",{staticClass:"tasksPanelTitle"},[t._v(" Tareas de tu equipo")]),t.tasks.length>0?e("div",{staticClass:"tasksPanelList"},t._l(t.tasks,function(t){return e("Task",{key:t,attrs:{todo:t.message,publisher:"por "+t.name}})}),1):t._e(),0==t.tasks.length?e("div",{staticClass:"tasksPanelList"},[e("Task",{attrs:{todo:"Mantente sincronizado ⌚ con nuevas tareas para tu equipo aquí 🚀. Agrega alguna 💡.",publisher:"por Recognizify"}})],1):t._e()]),e("br"),e("br"),e("br"),e("br"),e("NewTask")],1)},n=[],i=(a("7f7f"),a("ac6a"),a("96a5"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"taskCard"},[e("p",{staticClass:"taskToDo"},[t._v(t._s(this.todo))]),e("div",{staticClass:"taskBottom"},[e("div",{staticClass:"taskPublisher"},[e("div",{staticClass:"taskPublisherProfile",attrs:{id:"taskPublisherProfile"}}),e("span",{},[t._v(t._s(this.publisher))])]),e("span",[e("svg",{staticClass:"feather-like-options"},[e("use",{attrs:{"xlink:href":a("0e09")+"#thumbs-up"}})]),e("svg",{staticClass:"feather-like-options"},[e("use",{attrs:{"xlink:href":a("0e09")+"#thumbs-down"}})])])])])}),o=[],r={props:["todo","publisher"]},c=r,l=a("2877"),u=Object(l["a"])(c,i,o,!1,null,null,null),p=u.exports,d=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"taskSetting"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],staticClass:"form-control-special taskSettingInput",attrs:{type:"text",placeholder:"Escribe aqui una nueva tarea para tu equipo..."},domProps:{value:t.task},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.saveTask(s)},input:function(s){s.target.composing||(t.task=s.target.value)}}}),a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("button",{staticClass:"btn btn-success btn-sm",staticStyle:{"margin-top":"7px"},on:{click:t.saveTask}},[t._v("Publicar")]),a("small",{staticClass:"text-muted",staticStyle:{"margin-left":"7px"}},[t._v("o presiona ENTER")])])])},k=[],f=a("8aa5"),h=a.n(f),v={data:function(){return{task:""}},methods:{saveTask:function(){var t=this;h.a.auth().onAuthStateChanged(function(s){h.a.firestore().collection("users").doc(s.uid).get().then(function(s){h.a.firestore().collection("projects").doc(t.$route.params.projectId).collection("tasks").add({name:s.data()["name"],task:t.task}).then(function(){return window.location.reload()})}).catch(function(t){console.log(t)})})}}},m=v,b=Object(l["a"])(m,d,k,!1,null,null,null),g=b.exports,C={data:function(){return{tasks:[]}},components:{Task:p,NewTask:g},created:function(){this.getTasks()},methods:{getTasks:function(){var t=this;h.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("tasks").get().then(function(s){s.forEach(function(s){t.tasks.push({name:s.data()["name"],message:s.data()["task"]})})})}}},_=C,T=Object(l["a"])(_,e,n,!1,null,null,null);s["a"]=T.exports},7596:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dashboardContent"},[a("div",{staticClass:"tasksLayout"},[a("TasksPanel")],1)])},n=[],i=(a("deb3"),a("5c8d")),o={components:{TasksPanel:i["a"]}},r=o,c=a("2877"),l=Object(c["a"])(r,e,n,!1,null,null,null);s["default"]=l.exports},"7f7f":function(t,s,a){var e=a("86cc").f,n=Function.prototype,i=/^\s*function ([^ (]*)/,o="name";o in n||a("9e1e")&&e(n,o,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},"96a5":function(t,s,a){},deb3:function(t,s,a){}}]);
//# sourceMappingURL=chunk-58a6482e.511f056b.js.map