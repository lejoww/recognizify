(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-016be239"],{"05e6":function(t,a,e){},"0e09":function(t,a,e){t.exports=e.p+"img/feather-sprite.5113e3a1.svg"},"7f7f":function(t,a,e){var o=e("86cc").f,s=Function.prototype,i=/^\s*function ([^ (]*)/,l="name";l in s||e("9e1e")&&o(s,l,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},"8f3a":function(t,a,e){},"936e":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{attrs:{id:"goals"}},[o("div",{staticClass:"modal fade",attrs:{id:"addGoalModal",tabindex:"-1",role:"dialog","aria-labelledby":"addGoalModalLabel","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[t._m(0),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"form-container"},[o("div",{staticClass:"form-group"},[o("label",[t._v("¿Cuál es la meta?")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.goal.name,expression:"goal.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ejm. Promocionar los productos por redes sociales",autocomplete:"off",spellcheck:"false"},domProps:{value:t.goal.name},on:{input:function(a){a.target.composing||t.$set(t.goal,"name",a.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[t._v("Escribe una frase que te motive a hacerlo")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.goal.motivation,expression:"goal.motivation"}],staticClass:"form-control",attrs:{type:"text",placeholder:'"A hombros de gigantes"',autocomplete:"off",spellcheck:"false"},domProps:{value:t.goal.motivation},on:{input:function(a){a.target.composing||t.$set(t.goal,"motivation",a.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[t._v("De 1 a 100 ¿Qué grado de importancia crees que tiene esta meta?")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.goal.importance,expression:"goal.importance"}],staticClass:"form-control",attrs:{type:"number",placeholder:"76",min:"0",max:"100"},domProps:{value:t.goal.importance},on:{input:function(a){a.target.composing||t.$set(t.goal,"importance",a.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[t._v("Si tuvieras que definir con una sola palabra tu meta, ¿Con cuál la harías?")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.goal.word,expression:"goal.word"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Productividad"},domProps:{value:t.goal.word},on:{input:function(a){a.target.composing||t.$set(t.goal,"word",a.target.value)}}})])])]),o("div",{staticClass:"modal-footer",staticStyle:{border:"none"}},[o("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancelar")]),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.saveGoal}},[t._v("Crear meta")])])])])]),o("div",{staticClass:"dashboardContent"},[o("div",{staticClass:"goalsLayout"},[o("div",{staticClass:"projectSummaryTitle"},[o("h3",[t._v("\n                        Metas\n                        "),o("button",{staticClass:"btn btn-primary btn-sm",attrs:{"data-toggle":"modal","data-target":"#addGoalModal"}},[o("svg",{attrs:{width:"18",height:"18",stroke:"#ffffff","stroke-width":"2"}},[o("use",{attrs:{"xlink:href":e("0e09")+"#plus"}})]),t._v("\n                            Crear una meta\n                        ")])]),o("br")]),t.goals.length>0?o("div",{staticClass:"goalsField"},t._l(t.goals,function(a,e,s){return o("div",{key:a["name"],staticClass:"card goalCard",staticStyle:{width:"18rem"}},[o("div",{staticClass:"card-body"},[o("h5",{key:e,staticClass:"card-title"},[t._v(t._s(a["name"]))]),o("p",{key:s,staticClass:"card-text"},[t._v(t._s(a["motivation"]))])])])}),0):t._e(),0==t.goals.length?o("div",{staticClass:"nonGoalsField"},[t._m(1)]):t._e()])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header",staticStyle:{border:"none"}},[e("h2",{staticClass:"modal-title"},[t._v("Crea una meta")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h3",{staticStyle:{color:"#9e95aa"}},[t._v("No tienes nuevas metas")]),e("p",{staticStyle:{color:"#9e95aa"}},[t._v("Las metas te ayudan a que todo lo que hagas dentro de Recognizify gire en torno a ellas.")])])}],i=(e("ac6a"),e("7f7f"),e("8aa5")),l=e.n(i),n=(e("8f3a"),e("05e6"),{data:function(){return{goal:{name:"",motivation:"",importance:"",word:""},goals:[]}},created:function(){"undefined"==this.$router.history.current.params["projectId"]?this.$router.push("/dashboard/select"):this.getGoals()},methods:{saveGoal:function(){l.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("goals").add({name:this.goal.name,motivation:this.goal.motivation,importance:this.goal.importance,word:this.goal.word}).then(function(){return window.location.reload()})},getGoals:function(){var t=this;l.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("goals").get().then(function(a){a.forEach(function(a){t.goals.push({name:a.data()["name"],motivation:a.data()["motivation"]})})})}}}),r=n,c=e("2877"),d=Object(c["a"])(r,o,s,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-016be239.5b46f691.js.map