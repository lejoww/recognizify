(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e78768ea"],{"0e09":function(t,e,n){t.exports=n.p+"img/feather-sprite.5113e3a1.svg"},"122a":function(t,e,n){},"1d3b":function(t,e,n){"use strict";var a=n("2dca"),s=n.n(a);s.a},"2a38":function(t,e,n){},"2dca":function(t,e,n){},"5e6a":function(t,e,n){t.exports=n.p+"img/logo-white-cutted.06c07b3d.svg"},"66aa":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"headerProfile"},[n("div",{staticClass:"profileWrapper"},[t.invitations?n("Invitations"):t._e(),t._m(0)],1)]),n("ProfileMenu")],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profileData",attrs:{"data-toggle":"modal","data-target":"#exampleModal"}},[a("div",{staticClass:"profileContent",staticStyle:{cursor:"pointer"}},[a("img",{staticClass:"profilePicture",attrs:{id:"profilePicture",src:n("f365")}})])])}],i=n("8aa5"),r=n.n(i),o=(n("984e"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-link",{staticClass:"invitationsCounterContainer",attrs:{to:"/account/notifications","data-toggle":"tooltip","data-placement":"bottom",title:"Notificaciones"}},[a("svg",{staticClass:"feather-like-options icon"},[a("use",{attrs:{"xlink:href":n("0e09")+"#mail"}})]),t.invitations>0?a("div",{staticClass:"invitationsCounter"},[t._v("\n            "+t._s(t.invitations)+"\n        ")]):t._e()])],1)}),c=[],u={data:function(){return{invitations:0}},created:function(){var t=this;r.a.auth().onAuthStateChanged(function(e){r.a.firestore().collection("users").doc(e.uid).collection("invitations").get().then(function(e){return t.invitations=e.docs.length})})}},l=u,d=(n("1d3b"),n("2877")),f=Object(d["a"])(l,o,c,!1,null,null,null),m=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:"exampleModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body",staticStyle:{border:"none"}},[a("div",{staticClass:"userInfo"},[a("div",[a("h5",{staticClass:"userCompleteName"},[t._v("Hola, "+t._s(t.user.name))]),a("small",{staticClass:"text-success userUsername"},[t._v("@"+t._s(t.user.user))])]),a("div",{staticStyle:{"margin-left":"12px"}},[a("a",{staticClass:"btn btn-outline-dark btn-sm",attrs:{href:"/@"+t.user.user}},[t._v("Tu perfil")])])])]),a("div",{staticClass:"rank"},[a("a",{staticClass:"btn btn-outline-dark",attrs:{href:"/account/configuration"}},[a("svg",{staticClass:"feather-menu"},[a("use",{attrs:{"xlink:href":n("0e09")+"#settings"}})]),a("span",{staticStyle:{"margin-left":"6px"}},[t._v("Configuración")])]),a("a",{staticClass:"btn btn-outline-dark",attrs:{href:"/dashboard/select"}},[a("svg",{staticClass:"feather-menu"},[a("use",{attrs:{"xlink:href":n("0e09")+"#package"}})]),a("span",{staticStyle:{"margin-left":"6px"}},[t._v("Tus proyectos")])])]),1==t.user.roles.admin?a("div",{staticClass:"padding-rank"},[a("h6",[t._v("Opciones de administrador")]),a("div",{staticClass:"rank"},[a("a",{staticClass:"btn btn-outline-dark",attrs:{href:"/account/admin/articles/panel"}},[a("svg",{staticClass:"feather-menu"},[a("use",{attrs:{"xlink:href":n("0e09")+"#book"}})]),a("span",{staticStyle:{"margin-left":"6px"}},[t._v("Articulos")])]),a("a",{staticClass:"btn btn-outline-dark",attrs:{href:"/account/admin/users/ban"}},[a("svg",{staticClass:"feather-menu"},[a("use",{attrs:{"xlink:href":n("0e09")+"#alert-octagon"}})]),a("span",{staticStyle:{"margin-left":"6px"}},[t._v("Prohibiciones")])])])]):t._e(),a("div",{staticClass:"modal-footer",staticStyle:{border:"none"}},[a("button",{staticClass:"btn btn-info btn-sm",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Volver")]),a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:t.closeSession}},[t._v("Cerrar sesión")])])])])])},v=[],p=(n("122a"),{data:function(){return{user:{name:"",user:"",photo:"",roles:{admin:!1,creator:!1,user:!0}}}},created:function(){var t=this;r.a.auth().onAuthStateChanged(function(e){r.a.firestore().collection("users").doc(e.uid).get().then(function(e){t.user.name=e.data()["nickname"],t.user.user=e.data()["user"],t.user.roles.admin=e.data()["roles"]["admin"],t.user.roles.creator=e.data()["roles"]["creator"],t.user.roles.user=e.data()["roles"]["user"]})})},methods:{closeSession:function(){r.a.auth().signOut().then(function(){return window.location="/"})}}}),g=p,C=Object(d["a"])(g,h,v,!1,null,null,null),b=C.exports,_={data:function(){return{currentAccount:{nickname:"",username:""}}},props:["invitations"],components:{Invitations:m,ProfileMenu:b},created:function(){this.setProfilePicture(),this.setIdentityData()},methods:{setProfilePicture:function(){r.a.auth().onAuthStateChanged(function(t){r.a.storage().ref("profile_photos/".concat(t.uid)).getDownloadURL().then(function(t){document.getElementById("profilePicture").setAttribute("src",t)})})},setIdentityData:function(){var t=this;r.a.auth().onAuthStateChanged(function(e){r.a.firestore().collection("users").doc(e.uid).get().then(function(e){t.currentAccount.nickname=e.data()["nickname"],t.currentAccount.username=e.data()["user"],""!=t.currentAccount.nickname&&void 0!=t.currentAccount.nickname&&null!=t.currentAccount.nickname||t.$router.push("/register/nickname"),""!=t.currentAccount.username&&void 0!=t.currentAccount.username&&null!=t.currentAccount.username||t.$router.push("/register/info")}).catch(function(){navigator.onLine?window.location="/register/info":alert("Parece que no tienes conexión a internet o la operación es invalida.")})})},closeSession:function(){r.a.auth().signOut(),window.location="/"}}},k=_,x=Object(d["a"])(k,a,s,!1,null,null,null);e["a"]=x.exports},"7f7f":function(t,e,n){var a=n("86cc").f,s=Function.prototype,i=/^\s*function ([^ (]*)/,r="name";r in s||n("9e1e")&&a(s,r,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},"984e":function(t,e,n){},bfb8:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"baseContainer"},[n("div",{staticClass:"headerContainer"},[t._m(0),n("Profile",{attrs:{invitations:!1}})],1),n("div",{staticClass:"searchBanner"},[n("h2",{staticClass:"supertitle text-white",staticStyle:{"font-weight":"700"}},[t._v(t._s(this.user.name)+", ¿en qué necesitas ayuda?")]),t._m(1)]),n("br"),n("br"),n("br"),n("h1",{staticStyle:{"text-align":"center"}},[t._v("Estamos preparando el centro de ayuda, vuelve pronto.")])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("img",{attrs:{src:n("5e6a"),alt:"logo"}}),a("span",{staticClass:"pageIndicator"},[t._v("Help Center and Support")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-ellipsis"},[n("div"),n("div"),n("div"),n("div")])}],i=(n("7f7f"),n("2a38"),n("8aa5")),r=n.n(i),o=n("66aa"),c={data:function(){return{user:{name:""}}},components:{Profile:o["a"]},mounted:function(){this.getUser()},methods:{getUser:function(){var t=this;r.a.auth().onAuthStateChanged(function(e){if(e){var n=r.a.functions().httpsCallable("getUser");n({uid:e.uid}).then(function(e){t.user={name:e.data.user.name}}).catch(function(t){console.log("No se ejecuto la función")})}else t.$router.push("/signup")})}}},u=c,l=n("2877"),d=Object(l["a"])(u,a,s,!1,null,null,null);e["default"]=d.exports},f365:function(t,e,n){t.exports=n.p+"img/profile.f2fd1390.png"}}]);
//# sourceMappingURL=chunk-e78768ea.500e39eb.js.map