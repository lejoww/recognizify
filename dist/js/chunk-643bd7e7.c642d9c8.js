(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-643bd7e7"],{1700:function(e,t,n){},"1d44":function(e,t,n){"use strict";var a=n("1700"),i=n.n(a);i.a},"8f3a":function(e,t,n){},f6b1:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"verifyScreen"},[n("div",{staticClass:"alert alert-success alertSending",staticStyle:{display:"none"},attrs:{id:"sendingAlert",role:"alert"}},[e._v("\n        No ha verificado su cuenta aún.\n    ")]),n("div",{staticClass:"wrapCenter"},[n("h3",[e._v("Verifica tu correo electrónico")]),n("p",[e._v("Nos importa la seguridad. Por lo tanto, para poder continuar debes verificar tu correo electrónico para continuar.")]),n("span",{staticClass:"muted-gray"},[e._v("Cuando haya verificado su cuenta, haga clic en el botón")]),n("br"),n("button",{staticClass:"btn btn-danger",on:{click:e.sendEmailVerification}},[e._v("\n            Enviar correo de verificación\n        ")]),n("br"),n("button",{staticClass:"btn btn-outline-dark",on:{click:e.checkVerificationProccess}},[e._v("\n            Comprobar verificación\n        ")])])])},i=[],r=n("8aa5"),c=n.n(r),s=(n("8f3a"),{methods:{restoreAccountToCheckVerification:function(){var e=this;c.a.auth().signOut().then(function(){return e.$router.push("/")})},sendEmailVerification:function(){c.a.auth().currentUser.sendEmailVerification()},checkVerificationProccess:function(){1==c.a.auth().currentUser.emailVerified?this.$router.push("/dashboard/select"):document.getElementById("sendingAlert").style.display="block"}}}),o=s,u=(n("1d44"),n("2877")),l=Object(u["a"])(o,a,i,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-643bd7e7.c642d9c8.js.map