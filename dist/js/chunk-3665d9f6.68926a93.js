(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3665d9f6"],{"01de":function(t,e,a){t.exports=a.p+"img/logo-common-cutted.5b742780.png"},a3a0:function(t,e,a){},a693:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"register"}},[t._m(0),o("div",{staticClass:"form-container"},[o("img",{attrs:{src:a("01de"),alt:"Logotipo de Recognizify",width:"148px"}}),o("h4",{staticStyle:{"margin-top":"1em"}},[t._v("Crea una cuenta y comienza a progresar.")]),o("div",{staticClass:"form-group"},[o("label",[t._v("Un correo electrónico")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg form-control-login",attrs:{type:"email","aria-describedby":"emailHelp",placeholder:"alguien@recognizify.com",spellcheck:"false",value:"test@recognizify.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[t._v("Contraseña")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg form-control-login",attrs:{type:"password",placeholder:"Tu clave personal e intransferible",value:"test123"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._m(1),o("button",{staticClass:"btn btn-danger btn-login"},[o("router-link",{staticClass:"text-white",attrs:{to:"/"}},[t._v("\n                Cancelar\n            ")])],1),o("button",{staticClass:"btn btn-success btn-login",staticStyle:{"margin-left":".7em"},attrs:{id:"dynamicButton"},on:{click:t.createAccountWithEmailAndPassword}},[t._v("Crear cuenta")])]),o("div",{staticClass:"alert alert-warning",attrs:{id:"loginAlert",role:"alert"}},[t._v("\n        Parece que no ingresaste bien los datos. Vuelve a intentarlo.\n    ")])])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-images"},[o("img",{attrs:{src:a("e11d"),alt:"Personas hablando y admirando estadísticas"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group betacheckbox"},[a("label",{staticClass:"betaswitch"},[a("input",{attrs:{type:"checkbox",id:"checkbox"}}),a("div",{staticClass:"slider round"})]),a("p",[t._v("Deseas participar en el programa BETA de Recognizify para darnos retroalimentación de la aplicación.")])])}],r=a("8aa5"),s=a.n(r),i=(a("a3a0"),{data:function(){return{email:"",password:""}},created:function(){this.checkbox()},methods:{createAccountWithEmailAndPassword:function(){var t=this,e=document.getElementById("checkbox").checked;s.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(){s.a.auth().onAuthStateChanged(function(a){s.a.firestore().collection("users").doc(a.uid).get().then(function(a){null==a.data()|void 0==a.data()?(localStorage.betaAccess=e,t.$router.push("/register/info")):t.$router.push("/dashboard/select")})})}).catch(function(t){var e=document.querySelector("#loginAlert");e.style.display="block",loginButton.innerHTML="Iniciar sesión"})}}}),c=i,l=a("2877"),d=Object(l["a"])(c,o,n,!1,null,null,null);e["default"]=d.exports},e11d:function(t,e,a){t.exports=a.p+"img/rocket.49808f45.svg"}}]);
//# sourceMappingURL=chunk-3665d9f6.68926a93.js.map