(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58b5729f"],{"01de":function(t,e,a){t.exports=a.p+"img/logo-common-cutted.5b742780.png"},"402b":function(t,e,a){},"865c":function(t,e,a){t.exports=a.p+"img/leader-people.3b1d52f5.png"},a3a0:function(t,e,a){},c994:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"instructCopy"},[n("span",{staticClass:"text-gray"},[t._v("Las imagenes en la aplicación no son de nuestra autoría. Si deseas saber más, ingresa a "),n("router-link",{staticClass:"text-white",attrs:{to:"/credits"}},[t._v("nuestro sitio de referencias.")])],1)]),n("div",{attrs:{id:"login"}},[t._m(0),n("div",{staticClass:"form-container"},[n("img",{attrs:{src:a("01de"),alt:"Logotipo de Recognizify",width:"148px"}}),n("h1",{staticClass:"loginTitle"},[t._v("Conéctate de nuevo.")]),n("div",{staticClass:"form-group"},[n("label",[t._v("Correo electrónico")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg form-control-login",attrs:{type:"email","aria-describedby":"emailHelp",placeholder:"alguien@recognizify.com",spellcheck:"false"},domProps:{value:t.email},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signInWithEmailAndPassword(e)},input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",[t._v("Contraseña")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg form-control-login",attrs:{type:"password",placeholder:"Tu clave personal e intransferible"},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.signInWithEmailAndPassword(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("button",{staticClass:"btn btn-success btn-login",attrs:{id:"dynamicButton"},on:{click:t.signInWithEmailAndPassword}},[t._v("Iniciar sesión")]),n("button",{staticClass:"btn btn-warning btn-login",staticStyle:{"margin-left":".7em"}},[n("router-link",{staticClass:"text-white",attrs:{to:"/signup"}},[t._v("\n                    Registrarse\n                ")])],1),t._m(1)]),n("div",{staticClass:"alert alert-warning",attrs:{id:"loginAlert",role:"alert"}},[t._v("\n            Parece que no ingresaste bien los datos. Vuelve a intentarlo.\n        ")])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-images"},[n("img",{attrs:{src:a("865c"),alt:"Personas hablando y admirando estadísticas"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"12px"}},[a("a",{attrs:{href:"/forgot"}},[a("small",{staticClass:"form-text forgot-password"},[t._v("Restablece tu contraseña")])])])}],i=a("8aa5"),r=a.n(i),o=(a("a3a0"),a("e1c2")),l={name:"login_entry",data:function(){return{email:"",password:"",account:!0}},components:{BannerNotice:o["a"]},created:function(){r.a.auth().onAuthStateChanged(function(t){t&&(window.location="/dashboard/select")})},methods:{signInWithEmailAndPassword:function(){var t=this,e=document.getElementById("dynamicButton");e.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>',r.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(){r.a.auth().onAuthStateChanged(function(e){e.emailVerified?r.a.firestore().collection("users").doc(e.uid).get().then(function(e){null==e.data()|void 0==e.data()?t.$router.push("/register/info"):t.$router.push("/dashboard/select")}):t.$router.push("/verify")})}).catch(function(t){var a=document.querySelector("#loginAlert");a.style.display="block",e.innerHTML="Iniciar sesión"})}}},c=l,d=a("2877"),u=Object(d["a"])(c,n,s,!1,null,null,null);e["default"]=u.exports},e1c2:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"heroesBannerNotice"},[a("div",{staticStyle:{width:"80%",display:"flex","flex-direction":"row","align-items":"center"}},[a("div",{staticStyle:{display:"flex","flex-direction":"column","margin-left":"0.4rem"}},[a("h2",{staticClass:"heroesBannerTitle"},[a("small",{staticClass:"badge badge-warning badge-small"},[t._v("Artículo semanal")]),t._v(" "+t._s(this.article.title))]),a("span",{staticClass:"heroesBannerMotivation"},[t._v(t._s(t.article.abstract))])])]),a("div",{staticClass:"heroesBannerTimer"})])},s=[],i=(a("402b"),{data:function(){return{count:"",finalCount:!1}},created:function(){}}),r=i,o=a("2877"),l=Object(o["a"])(r,n,s,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-58b5729f.8852d307.js.map