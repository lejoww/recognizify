(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-643bd7e7"],{1700:function(t,e,n){},"1d44":function(t,e,n){"use strict";var r=n("1700"),a=n.n(r);a.a},"8f3a":function(t,e,n){},f6b1:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"verifyScreen"},[n("div",{staticClass:"alert alert-success alertSending",staticStyle:{display:"none"},attrs:{id:"sendingAlert",role:"alert"}},[t._v("\n        Correo enviado correctamente\n    ")]),n("div",{staticClass:"alert alert-success alertSending",staticStyle:{display:"none"},attrs:{id:"errorAlert",role:"alert"}},[t._v("\n        No ha verificado su cuenta aún.\n    ")]),n("div",{staticClass:"wrapCenter"},[n("h3",[t._v("Verifica tu correo electrónico")]),n("p",[t._v("Nos importa la seguridad. Por lo tanto, para poder continuar debes verificar tu correo electrónico para continuar.")]),n("span",{staticClass:"muted-gray"},[t._v("Cuando haya verificado su cuenta, haga clic en el botón")]),n("br"),n("button",{staticClass:"btn btn-danger",on:{click:t.sendEmailVerification}},[t._v("\n            Enviar correo de verificación\n        ")]),n("br"),n("button",{staticClass:"btn btn-outline-dark",on:{click:t.checkVerificationProccess}},[t._v("\n            Comprobar verificación\n        ")])])])},a=[],i=n("8aa5"),c=n.n(i),o=(n("8f3a"),{methods:{restoreAccountToCheckVerification:function(){var t=this;c.a.auth().signOut().then(function(){return t.$router.push("/")})},sendEmailVerification:function(){c.a.auth().currentUser.sendEmailVerification().then(function(){return document.getElementById("sendingAlert").style.display="block"}).catch(function(t){return console.error(t)})},checkVerificationProccess:function(){this.$router.push("/dashboard/select")}}}),s=o,l=(n("1d44"),n("2877")),u=Object(l["a"])(s,r,a,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-643bd7e7.a115b46b.js.map