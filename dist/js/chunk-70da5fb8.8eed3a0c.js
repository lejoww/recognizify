(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70da5fb8"],{"628d":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"configuration"}},[s("div",{staticClass:"dashboardContent"},[s("div",{staticClass:"dashboardContent"},[s("div",{staticClass:"alert alert-secondary",staticStyle:{display:"none"},attrs:{role:"alert",id:"alert-success"}},[t._v("\n                    Bien! Tus datos han sido correctamente cambiados.\n                ")]),s("div",{staticClass:"configurationView"},[s("div",{staticClass:"configurationAlignment"},[s("a",{staticStyle:{display:"flex","margin-bottom":"1rem"},attrs:{href:"javascript: history.go(-1)"}},[s("svg",{staticClass:"feather-dark"},[s("use",{attrs:{"xlink:href":e("0e09")+"#arrow-left"}})]),s("h6",[t._v("Volver atrás")])]),s("h2",[t._v("Configuración")]),s("br"),t._m(0),s("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[t._m(1),s("div",{staticClass:"tab-pane fade",attrs:{id:"account",role:"tabpanel","aria-labelledby":"account-tab"}},[s("br"),s("h4",[t._v("Cambiar datos de tu cuenta")]),s("p",[t._v("Escribe cómo eres. Recuerda que si no completas todos los datos no podrás actualizar tu información.")]),s("br"),s("div",{staticClass:"changeForm"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[t._v("Tu nombre completo")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Como deseas que te llamemos",spellcheck:"false",autocomplete:"off"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"bio"}},[t._v("Tu descripción")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",id:"bio",placeholder:"Descríbete como eres",spellcheck:"false",autocomplete:"off"},domProps:{value:t.description},on:{input:function(a){a.target.composing||(t.description=a.target.value)}}})]),s("div",{staticClass:"input-group mb-3"},[t._m(2),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Escribe un nombre de usuario","aria-label":"Username","aria-describedby":"basic-addon1"},domProps:{value:t.user},on:{input:function(a){a.target.composing||(t.user=a.target.value)}}})]),s("button",{staticClass:"btn btn-secondary",on:{click:t.saveNewDataConfig}},[t._v("Guardar cambios")])])]),t._m(3)])])])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{id:"general-tab","data-toggle":"tab",href:"#general",role:"tab","aria-controls":"general","aria-selected":"true"}},[t._v("General")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"account-tab","data-toggle":"tab",href:"#account",role:"tab","aria-controls":"account","aria-selected":"false"}},[t._v("Cuenta")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{id:"security-tab","data-toggle":"tab",href:"#security",role:"tab","aria-controls":"security","aria-selected":"false"}},[t._v("Seguridad")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"tab-pane fade show active",attrs:{id:"general",role:"tabpanel","aria-labelledby":"general-tab"}},[s("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[s("img",{attrs:{src:e("9a4c"),width:"400px"}}),s("h3",{staticStyle:{color:"#9e95aa"}},[t._v("Seguimos trabajando en este apartado")]),s("p",{staticStyle:{color:"#9e95aa"}},[t._v("Intenta volver luego. Pronto tendremos estas opciones en funcionamiento.")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("@")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"tab-pane fade",attrs:{id:"security",role:"tabpanel","aria-labelledby":"security-tab"}},[s("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[s("img",{attrs:{src:e("9a4c"),width:"400px"}}),s("h3",{staticStyle:{color:"#9e95aa"}},[t._v("Seguimos trabajando en este apartado")]),s("p",{staticStyle:{color:"#9e95aa"}},[t._v("Intenta volver luego. Pronto tendremos estas opciones en funcionamiento.")])])])}],n=(e("7f7f"),e("8aa5")),r=e.n(n),o=e("8280"),l=e("e7b4"),c=(e("8f3a"),{components:{LateralPanel:o["a"],BurgerMenu:l["a"]},data:function(){return{name:"",description:"",user:""}},methods:{saveNewDataConfig:function(){var t=this;r.a.auth().onAuthStateChanged(function(a){r.a.firestore().collection("users").doc(a.uid).update({name:t.name,bio:t.description,user:t.user}).then(function(){var t=document.getElementById("alert-success");t.style.display="block"})})}}}),d=c,u=e("2877"),m=Object(u["a"])(d,s,i,!1,null,null,null);a["default"]=m.exports},"9a4c":function(t,a,e){t.exports=e.p+"img/nothing.26c4b763.png"}}]);
//# sourceMappingURL=chunk-70da5fb8.8eed3a0c.js.map