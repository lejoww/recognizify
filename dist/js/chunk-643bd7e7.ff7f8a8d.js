(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-643bd7e7"],{1700:function(n,t,a){},"1d44":function(n,t,a){"use strict";var e=a("1700"),i=a.n(e);i.a},"8f3a":function(n,t,a){},f6b1:function(n,t,a){"use strict";a.r(t);var e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"verifyScreen"},[a("div",{staticClass:"alert alert-success alertSending",staticStyle:{display:"none"},attrs:{id:"sendingAlert",role:"alert"}},[n._v("\n        No ha verificado su cuenta aún.\n    ")]),a("div",{staticClass:"wrapCenter"},[a("h3",[n._v("Verifica tu correo electrónico")]),a("p",[n._v("Nos importa la seguridad. Por lo tanto, para poder continuar debes verificar tu correo electrónico para continuar.")]),a("span",{staticClass:"muted-gray"},[n._v("Cuando haya verificado su cuenta, haga clic en el botón")]),a("br"),a("button",{staticClass:"btn btn-danger",on:{click:n.sendEmailVerification}},[n._v("\n            Enviar correo de verificación\n        ")]),a("br"),a("button",{staticClass:"btn btn-outline-dark",on:{click:n.checkVerificationProccess}},[n._v("\n            Comprobar verificación\n        ")])])])},i=[],r=a("8aa5"),c=a.n(r),o=(a("8f3a"),{methods:{restoreAccountToCheckVerification:function(){var n=this;c.a.auth().signOut().then(function(){return n.$router.push("/")})},sendEmailVerification:function(){c.a.auth().currentUser.sendEmailVerification()},checkVerificationProccess:function(){this.$router.push("/dashboard/select")}}}),s=o,u=(a("1d44"),a("2877")),l=Object(u["a"])(s,e,i,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-643bd7e7.ff7f8a8d.js.map