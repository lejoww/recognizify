(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b3cff48"],{"0e09":function(t,e,n){t.exports=n.p+"img/feather-sprite.5113e3a1.svg"},"1d3b":function(t,e,n){"use strict";var a=n("2dca"),s=n.n(a);s.a},"25e3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"baseLayout"},[n("LateralPanel"),n("OverlayMenu"),n("router-view")],1)])},s=[],i=(n("8f3a"),n("5874"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"headerMenu"},[t._m(0),n("div",{staticClass:"headerWrapperRight"},[n("Profile")],1)])])}),r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"headerWrapper"},[a("div",{staticClass:"headerBrand"},[a("img",{attrs:{src:n("f41c"),width:"134px"}})])])}],o=n("8aa5"),c=n.n(o),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"headerProfile"},[n("div",{staticClass:"profileWrapper"},[n("Invitations"),t._m(0)],1)]),n("ProfileMenu")],1)},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profileData",attrs:{"data-toggle":"modal","data-target":"#exampleModal"}},[a("div",{staticClass:"profileContent"},[a("img",{staticClass:"profilePicture",attrs:{id:"profilePicture",src:n("f365")}})])])}],d=(n("984e"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-link",{staticClass:"invitationsCounterContainer",attrs:{to:"/account/notifications","data-toggle":"tooltip","data-placement":"bottom",title:"Invitaciones a otros proyectos"}},[a("svg",{staticClass:"feather-menu icon"},[a("use",{attrs:{"xlink:href":n("0e09")+"#mail"}})]),t.invitations>=1?a("div",{staticClass:"invitationsCounter"},[t._v("\n            "+t._s(t.invitations)+"\n        ")]):t._e()])],1)}),f=[],v={data:function(){return{invitations:""}},created:function(){var t=this;firebase.auth().onAuthStateChanged(function(e){firebase.firestore().collection("users").doc(e.uid).collection("invitations").get().then(function(e){t.invitations=e.docs.length})})}},h=v,m=(n("1d3b"),n("2877")),p=Object(m["a"])(h,d,f,!1,null,null,null),g=p.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog",id:"exampleModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body",staticStyle:{border:"none"}},[a("div",{staticClass:"userInfo"},[a("div",[a("h5",{staticClass:"userCompleteName"},[t._v("Hola, "+t._s(t.user.name))]),a("small",{staticClass:"text-success userUsername"},[t._v("@"+t._s(t.user.user))])]),a("div",{staticStyle:{"margin-left":"12px"}},[a("a",{staticClass:"btn btn-outline-dark btn-sm",attrs:{href:"/@"+t.user.user}},[t._v("Tu perfil")])])])]),a("div",{staticClass:"rank"},[a("a",{staticClass:"btn btn-outline-dark",attrs:{href:"/account/configuration"}},[a("svg",{staticClass:"feather-menu"},[a("use",{attrs:{"xlink:href":n("0e09")+"#settings"}})]),a("span",{staticStyle:{"margin-left":"6px"}},[t._v("Configuración")])]),a("a",{staticClass:"btn btn-outline-dark",attrs:{href:"/dashboard/select"}},[a("svg",{staticClass:"feather-menu"},[a("use",{attrs:{"xlink:href":n("0e09")+"#package"}})]),a("span",{staticStyle:{"margin-left":"6px"}},[t._v("Tus proyectos")])])]),1==t.user.roles.admin?a("div",{staticClass:"padding-rank"},[a("h6",[t._v("Opciones de administrador")]),a("div",{staticClass:"rank"},[a("a",{staticClass:"btn btn-outline-dark",attrs:{href:"/account/admin/articles/new/article"}},[a("svg",{staticClass:"feather-menu"},[a("use",{attrs:{"xlink:href":n("0e09")+"#book"}})]),a("span",{staticStyle:{"margin-left":"6px"}},[t._v("Articulos")])])])]):t._e(),a("div",{staticClass:"modal-footer",staticStyle:{border:"none"}},[a("button",{staticClass:"btn btn-info btn-sm",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Volver")]),a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:t.closeSession}},[t._v("Cerrar sesión")])])])])])},b=[],y={data:function(){return{user:{name:"",user:"",photo:"",roles:{admin:!1,creator:!1,user:!0}}}},created:function(){var t=this;c.a.auth().onAuthStateChanged(function(e){c.a.firestore().collection("users").doc(e.uid).get().then(function(e){t.user.name=e.data()["nickname"],t.user.user=e.data()["user"],t.user.roles.admin=e.data()["roles"]["admin"],t.user.roles.creator=e.data()["roles"]["creator"],t.user.roles.user=e.data()["roles"]["user"]})})},methods:{closeSession:function(){c.a.auth().signOut().then(function(){return window.location="/"})}}},_=y,k=(n("6142"),Object(m["a"])(_,C,b,!1,null,null,null)),x=k.exports,M={data:function(){return{currentAccount:{nickname:"",username:""}}},components:{Invitations:g,ProfileMenu:x},created:function(){this.setProfilePicture(),this.setIdentityData()},methods:{setProfilePicture:function(){c.a.auth().onAuthStateChanged(function(t){c.a.storage().ref("profile_photos/".concat(t.uid)).getDownloadURL().then(function(t){document.getElementById("profilePicture").setAttribute("src",t)})})},setIdentityData:function(){var t=this;c.a.auth().onAuthStateChanged(function(e){c.a.firestore().collection("users").doc(e.uid).get().then(function(e){t.currentAccount.nickname=e.data()["nickname"],t.currentAccount.username=e.data()["user"],""!=t.currentAccount.nickname&&void 0!=t.currentAccount.nickname&&null!=t.currentAccount.nickname||t.$router.push("/register/nickname"),""!=t.currentAccount.username&&void 0!=t.currentAccount.username&&null!=t.currentAccount.username||t.$router.push("/register/info")}).catch(function(){navigator.onLine?window.location="/register/info":alert("Parece que no tienes conexión a internet o la operación es invalida.")})})},closeSession:function(){c.a.auth().signOut(),window.location="/"}}},P=M,S=Object(m["a"])(P,l,u,!1,null,null,null),w=S.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"menu"},on:{click:t.openMenu}},[a("svg",{staticClass:"feather-light"},[a("use",{attrs:{"xlink:href":n("0e09")+"#menu"}})])])},A=[],E={methods:{openMenu:function(){var t=document.getElementById("sidebarMenu"),e=document.getElementById("drawable");t.classList.remove("headerMenu"),t.classList.add("headerMobileMenu"),e.style.display="block"}}},I=E,j=Object(m["a"])(I,O,A,!1,null,null,null),B=j.exports,$=n("e1c2"),L={data:function(){return{activeProjects:"",currentProjectName:"",usersPath:"",feedPath:"",boardPath:"",goalsPath:"",invitations:""}},components:{Profile:w,BurgerMenu:B,BannerNotice:$["a"]},methods:{getAndSetActiveProjects:function(){var t=this;c.a.auth().onAuthStateChanged(function(e){c.a.firestore().collection("users").doc(e.uid).collection("projects").get().then(function(e){t.activeProjects=e.docs.length})})},setInvitationsNumber:function(){var t=this;c.a.auth().onAuthStateChanged(function(e){c.a.firestore().collection("users").doc(e.uid).collection("invitations").get().then(function(e){if(e.docs.length>0){t.invitations=e.docs.length;var n=document.getElementById("invitationsLink"),a=document.getElementById("invitationsIcon");n.style.color="#FF524C",a.style.stroke="#FF524C"}})})},openOverlayMenu:function(){document.getElementById("overlayMenu").classList.toggle("overlayMenu")}}},U=L,N=Object(m["a"])(U,i,r,!1,null,null,null),T=N.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"overlayMenuHidden",attrs:{id:"overlayMenu"}},[a("div",{staticClass:"overlayMenuOption",staticStyle:{cursor:"pointer"},on:{click:t.closeOverlayMenu}},[a("svg",{staticClass:"feather-menu"},[a("use",{attrs:{"xlink:href":n("0e09")+"#arrow-left"}})]),a("span",{staticClass:"overlayMenuLink",staticStyle:{"margin-left":"12px"}},[t._v("Cerrar menú")])]),a("br"),a("Profile"),a("br"),t._m(0),a("br"),a("div",{staticClass:"overline"},[t._v("General")]),a("div",{staticClass:"overlayMenuOption",on:{click:t.closeOverlayMenu}},[a("router-link",{staticClass:"overlayMenuLink",attrs:{to:"/@"+t.currentProfileUsername}},[t._v("Tu perfil")])],1),a("div",{staticClass:"overlayMenuOption",staticStyle:{"margin-top":"12px"},on:{click:t.closeOverlayMenu}},[a("router-link",{staticClass:"overlayMenuLink",attrs:{to:"/dashboard/select"}},[t._v("Tus proyectos")])],1),a("div",{staticClass:"overlayMenuOption",staticStyle:{"margin-top":"12px"},on:{click:t.closeOverlayMenu}},[a("router-link",{staticClass:"overlayMenuLink",attrs:{to:"/dashboard/project/"+t.routesPath+"/feed"}},[t._v("Resumen")])],1)],1)},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overlayMenuSearch"},[n("input",{staticClass:"form-control-navbar inputSearch",attrs:{type:"text",placeholder:"Buscar en tus proyectos..."}})])}],R=(n("a8de"),n("5aea"),{data:function(){return{routesPath:"",currentProfileUsername:""}},components:{Profile:w},created:function(){this.routesPath=this.$route.params.projectId},updated:function(){this.getCurrentUserProfile()},methods:{getCurrentUserProfile:function(){var t=this;c.a.firestore().collection("users").doc(c.a.auth().currentUser.uid).get().then(function(e){t.currentProfileUsername=e.data()["user"]})},closeOverlayMenu:function(){document.getElementById("overlayMenu").classList.toggle("overlayMenu")}}}),W=R,H=Object(m["a"])(W,D,F,!1,null,null,null),J=H.exports,V=n("9b27"),q={created:function(){this.getCurrentUser()},methods:{getCurrentUser:function(){var t=this;c.a.auth().onAuthStateChanged(function(e){t.checkEmailState(e)})},checkEmailState:function(t){0==t.emailVerified&&this.$router.push("/verify")}}},G={components:{LateralPanel:T,OverlayMenu:J},mixins:[V["a"],q]},z=G,K=Object(m["a"])(z,a,s,!1,null,null,null);e["default"]=K.exports},"25ff":function(t,e,n){},"2dca":function(t,e,n){},"402b":function(t,e,n){},5874:function(t,e,n){},"5aea":function(t,e,n){},6142:function(t,e,n){"use strict";var a=n("25ff"),s=n.n(a);s.a},"8f3a":function(t,e,n){},"984e":function(t,e,n){},"9b27":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("8aa5"),s=n.n(a),i={beforeMount:function(){s.a.auth().onAuthStateChanged(function(t){t||(console.log("No existe usuario actualmente"),"/signin"!=window.location&&(window.location="/signin"))})}}},a8de:function(t,e,n){},e1c2:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heroesBannerNotice"},[n("div",{staticStyle:{width:"80%",display:"flex","flex-direction":"row","align-items":"center"}},[n("div",{staticStyle:{display:"flex","flex-direction":"column","margin-left":"0.4rem"}},[n("h2",{staticClass:"heroesBannerTitle"},[n("small",{staticClass:"badge badge-warning badge-small"},[t._v("Artículo semanal")]),t._v(" "+t._s(this.article.title))]),n("span",{staticClass:"heroesBannerMotivation"},[t._v(t._s(t.article.abstract))])])]),n("div",{staticClass:"heroesBannerTimer"})])},s=[],i=(n("402b"),{data:function(){return{count:"",finalCount:!1}},created:function(){}}),r=i,o=n("2877"),c=Object(o["a"])(r,a,s,!1,null,null,null);e["a"]=c.exports},f365:function(t,e,n){t.exports=n.p+"img/profile.f2fd1390.png"},f41c:function(t,e,n){t.exports=n.p+"img/logo-white-cutted.1d27b0c7.png"}}]);
//# sourceMappingURL=chunk-6b3cff48.0cb6f719.js.map