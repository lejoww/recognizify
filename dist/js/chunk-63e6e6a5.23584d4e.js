(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63e6e6a5"],{"01de":function(t,e,a){t.exports=a.p+"img/logo-common-cutted.5b742780.png"},a3a0:function(t,e,a){},a693:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"register"}},[t._m(0),r("div",{staticClass:"form-container"},[r("img",{attrs:{src:a("01de"),alt:"Logotipo de Recognizify",width:"148px"}}),r("h4",{staticStyle:{"margin-top":"1em"}},[t._v("Crea una cuenta y comienza a progresar.")]),r("div",{staticClass:"form-group"},[r("label",[t._v("Un correo electrónico")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg form-control-login",attrs:{type:"email","aria-describedby":"emailHelp",placeholder:"alguien@recognizify.com",spellcheck:"false",value:"test@recognizify.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Contraseña")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg form-control-login",attrs:{type:"password",placeholder:"Tu clave personal e intransferible",value:"test123"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._m(1),r("button",{staticClass:"btn btn-danger btn-login"},[r("router-link",{staticClass:"text-white",attrs:{to:"/"}},[t._v("\n                Cancelar\n            ")])],1),r("button",{staticClass:"btn btn-success btn-login",staticStyle:{"margin-left":".7em"},attrs:{id:"dynamicButton"},on:{click:t.createAccountWithEmailAndPassword}},[t._v("Crear cuenta")])]),r("div",{staticClass:"alert alert-warning",attrs:{id:"loginAlert",role:"alert"}},[t._v("\n        Parece que no ingresaste bien los datos. Vuelve a intentarlo.\n    ")])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-images"},[r("img",{attrs:{src:a("e11d"),alt:"Personas hablando y admirando estadísticas"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group betacheckbox"},[a("label",{staticClass:"betaswitch"},[a("input",{attrs:{type:"checkbox",id:"checkbox"}}),a("div",{staticClass:"slider round"})]),a("p",[t._v("Deseas participar en el programa BETA de Recognizify para darnos retroalimentación de la aplicación.")])])}],o=a("8aa5"),n=a.n(o),i=(a("a3a0"),{data:function(){return{email:"",password:""}},methods:{createAccountWithEmailAndPassword:function(){var t=this;n.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(){t.$router.push("/verify")}).catch(function(t){var e=document.querySelector("#loginAlert");e.style.display="block"})}}}),l=i,c=a("2877"),d=Object(c["a"])(l,r,s,!1,null,null,null);e["default"]=d.exports},e11d:function(t,e,a){t.exports=a.p+"img/rocket.49808f45.svg"}}]);
//# sourceMappingURL=chunk-63e6e6a5.23584d4e.js.map