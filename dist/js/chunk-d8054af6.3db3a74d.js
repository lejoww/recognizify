(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8054af6"],{"1d03":function(t,e,a){},"26c8":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"formCuttedLayout"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.task.name,expression:"task.name"}],staticClass:"form-control-special form-control-xl form-control-variable",attrs:{type:"text",spellcheck:"false",placeholder:"Un nombre para la tarea"},domProps:{value:t.task.name},on:{input:function(e){e.target.composing||t.$set(t.task,"name",e.target.value)}}}),a("br"),a("div",{staticClass:"formContent"},[a("span",{staticClass:"formSubtitle"},[t._v("Información de la tarea")]),a("p",{staticClass:"formText"},[t._v("Recopilamos la mayor cantidad de información de tu equipo")]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.task.because,expression:"task.because"}],staticClass:"form-control",attrs:{type:"text",placeholder:"¿Por qué deben hacer esto?"},domProps:{value:t.task.because},on:{input:function(e){e.target.composing||t.$set(t.task,"because",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col"},[a("select",{staticClass:"form-control",staticStyle:{border:"1px solid #e0e0e0"},on:{change:t.getGoals}},[a("option",{attrs:{selected:""}},[t._v("¿Con qué objetivo hacen esto?")]),t._l(t.objectivesAchieved,function(e){return a("option",{key:e},[t._v(t._s(e["name"]))])})],2)]),a("div",{staticClass:"col"},[a("select",{staticClass:"form-control",staticStyle:{border:"1px solid #e0e0e0"},attrs:{id:"steps"}},[a("option",{attrs:{selected:""}},[t._v("¿Qué relación tiene esta tarea con el objetivo?")]),t._l(t.objectivesStepsAchieved,function(e){return a("option",{key:e},[t._v(t._s(e))])})],2)])]),a("br"),a("button",{staticClass:"btn btn-success",on:{click:t.saveTask}},[t._v("Guardar tarea")])])])},s=[],c=(a("7f7f"),a("ac6a"),a("1d03"),a("8aa5")),n=a.n(c),r=a("e7dd"),i={data:function(){return{task:{name:"",because:""},objectivesAchieved:[],objectivesStepsAchieved:[]}},mixins:[r["a"]],mounted:function(){var t=this;n.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("goals").get().then(function(e){e.forEach(function(e){return t.objectivesAchieved.push({name:e.data()["name"],id:e.id})})})},methods:{getGoals:function(t){var e=this;this.objectivesAchieved.forEach(function(a){t.target.value==a["name"]&&n.a.firestore().collection("projects").doc(e.$route.params.projectId).collection("goals").doc(a["id"]).get().then(function(t){e.objectivesStepsAchieved.push(t.data().steps["one"],t.data().steps["two"],t.data().steps["third"])})})},saveTask:function(){var t=this,e=document.getElementById("steps"),a=e.options[e.selectedIndex].text;n.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("tasks").add({task:this.task.name,because:this.task.because,for:a,creator:n.a.auth().currentUser.uid}).then(function(){return t.$router.push("/dashboard/project/".concat(t.$route.params.projectId,"/tasks"))})}}},l=i,u=a("2877"),d=Object(u["a"])(l,o,s,!1,null,null,null);e["default"]=d.exports},"7f7f":function(t,e,a){var o=a("86cc").f,s=Function.prototype,c=/^\s*function ([^ (]*)/,n="name";n in s||a("9e1e")&&o(s,n,{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(t){return""}}})},e7dd:function(t,e,a){"use strict";a("ac6a");var o=a("8aa5"),s=a.n(o),c={beforeCreate:function(){var t=this;s.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("members").get().then(function(e){var a=!1;e.forEach(function(t){t.id==s.a.auth().currentUser.uid&&(a=!0)}),setInterval(function(){0==a&&t.$router.push("/error/project")},500)})}};e["a"]=c}}]);
//# sourceMappingURL=chunk-d8054af6.3db3a74d.js.map