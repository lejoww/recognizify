(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f041424"],{"01de":function(e,t,a){e.exports=a.p+"img/logo-common-cutted.5b742780.png"},"1aea":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"forgotPasswordLayout"},[a("div",{staticClass:"forgotPasswordContainer"},[e._m(0),a("h3",[e._v(e._s(e.message))]),a("p",[e._v(e._s(e.recommendation))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control-special form-control-xl form-control-variable",attrs:{id:"inputEmail",type:"text",placeholder:"Ingresa tu correo electrónico aquí",autocomplete:"off",spellcheck:"false"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("br"),a("br"),a("button",{staticClass:"btn btn-success",on:{click:e.restorePassword}},[e._v("Enviar correo de restablecimiento")])])])},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"forgotPasswordBrand"},[s("img",{attrs:{src:a("01de"),width:"200px"}})])}],n=a("8aa5"),r=a.n(n),i={data:function(){return{email:"",message:"",recommendation:""}},created:function(){this.message="Desea restablecer la contraseña para"},methods:{restorePassword:function(){var e=this;r.a.auth().sendPasswordResetEmail(this.email).then(function(){e.message="Revisa tu correo electrónico",e.recommendation="Enviamos un enlace para restablecer tu contraseña",document.getElementById("inputEmail").style.display="none",setTimeout(function(){e.$router.push("/")},1e4)})}}},c=i,l=(a("1c69"),a("2877")),u=Object(l["a"])(c,s,o,!1,null,"248751cf",null);t["default"]=u.exports},"1c69":function(e,t,a){"use strict";var s=a("3587"),o=a.n(s);o.a},3587:function(e,t,a){}}]);
//# sourceMappingURL=chunk-9f041424.e4c520c4.js.map