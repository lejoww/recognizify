(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b743cc90"],{"0e09":function(t,e,n){t.exports=n.p+"img/feather-sprite.5113e3a1.svg"},"25e3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"baseLayout"},[n("LateralPanel"),n("OverlayMenu"),n("router-view")],1)},s=[],i=(n("8f3a"),n("5874"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"headerMenu"},[t._m(0),a("div",{staticClass:"headerWrapperRight"},[a("a",{staticClass:"headerMenuButton",on:{click:t.openOverlayMenu}},[a("svg",{staticClass:"feather-light"},[a("use",{attrs:{"xlink:href":n("0e09")+"#menu"}})])])])])}),o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"headerWrapper"},[a("div",{staticClass:"headerBrand"},[a("img",{attrs:{src:n("d84c"),width:"54px"}})]),a("div",{staticClass:"headerSearch"},[a("input",{staticClass:"form-control-navbar inputSearch",attrs:{type:"text",placeholder:"Buscar en tus proyectos..."}})])])}],r=n("8aa5"),c=n.n(r),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"headerProfile"},[a("div",{staticClass:"profileWrapper"},[a("div",{staticClass:"profileData"},[t._m(0),a("div",{staticClass:"profileIdentity"},[a("span",{staticClass:"profileName text-white"},[t._v("Hola, "+t._s(this.currentAccount.nickname))])])]),a("div",{staticClass:"profileOptions"},[a("router-link",{attrs:{to:"/account/configuration"}},[a("svg",{staticClass:"feather-menu"},[a("use",{attrs:{"xlink:href":n("0e09")+"#settings"}})])]),a("a",{staticStyle:{"margin-left":"7px"},attrs:{href:"#","data-toggle":"tooltip","data-placement":"top",title:"Cerrar sesión"},on:{click:t.closeSession}},[a("svg",{staticClass:"feather-red"},[a("use",{attrs:{"xlink:href":n("0e09")+"#log-out"}})])])],1)])])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profileContent"},[a("img",{staticClass:"profilePicture",attrs:{id:"profilePicture",src:n("f365")}})])}],d=(n("984e"),{data:function(){return{currentAccount:{nickname:"",username:""}}},created:function(){this.setProfilePicture(),this.setIdentityData()},methods:{setProfilePicture:function(){c.a.auth().onAuthStateChanged(function(t){c.a.storage().ref("profile_photos/".concat(t.uid)).getDownloadURL().then(function(t){document.getElementById("profilePicture").setAttribute("src",t)})})},setIdentityData:function(){var t=this;c.a.auth().onAuthStateChanged(function(e){c.a.firestore().collection("users").doc(e.uid).get().then(function(e){t.currentAccount.nickname=e.data()["nickname"],t.currentAccount.username=e.data()["user"],""!=t.currentAccount.nickname&&void 0!=t.currentAccount.nickname&&null!=t.currentAccount.nickname||t.$router.push("/register/nickname"),""!=t.currentAccount.username&&void 0!=t.currentAccount.username&&null!=t.currentAccount.username||t.$router.push("/register/info")}).catch(function(){navigator.onLine?window.location="/register/info":alert("Parece que no tienes conexión a internet o la operación es invalida.")})})},closeSession:function(){c.a.auth().signOut(),window.location="/"}}}),v=d,h=n("2877"),f=Object(h["a"])(v,l,u,!1,null,null,null),p=f.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"menu"},on:{click:t.openMenu}},[a("svg",{staticClass:"feather-light"},[a("use",{attrs:{"xlink:href":n("0e09")+"#menu"}})])])},g=[],C={methods:{openMenu:function(){var t=document.getElementById("sidebarMenu"),e=document.getElementById("drawable");t.classList.remove("headerMenu"),t.classList.add("headerMobileMenu"),e.style.display="block"}}},y=C,k=Object(h["a"])(y,m,g,!1,null,null,null),M=k.exports,b={data:function(){return{activeProjects:"",currentProjectName:"",usersPath:"",feedPath:"",boardPath:"",goalsPath:"",invitations:""}},components:{Profile:p,BurgerMenu:M},methods:{getAndSetActiveProjects:function(){var t=this;c.a.auth().onAuthStateChanged(function(e){c.a.firestore().collection("users").doc(e.uid).collection("projects").get().then(function(e){t.activeProjects=e.docs.length})})},setInvitationsNumber:function(){var t=this;c.a.auth().onAuthStateChanged(function(e){c.a.firestore().collection("users").doc(e.uid).collection("invitations").get().then(function(e){if(e.docs.length>0){t.invitations=e.docs.length;var n=document.getElementById("invitationsLink"),a=document.getElementById("invitationsIcon");n.style.color="#FF524C",a.style.stroke="#FF524C"}})})},openOverlayMenu:function(){document.getElementById("overlayMenu").classList.toggle("overlayMenu")}}},_=b,P=Object(h["a"])(_,i,o,!1,null,null,null),x=P.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"overlayMenuHidden",attrs:{id:"overlayMenu"}},[a("div",{staticClass:"overlayMenuOption",staticStyle:{cursor:"pointer"},on:{click:t.closeOverlayMenu}},[a("svg",{staticClass:"feather-menu"},[a("use",{attrs:{"xlink:href":n("0e09")+"#arrow-left"}})]),a("span",{staticClass:"overlayMenuLink",staticStyle:{"margin-left":"12px"}},[t._v("Cerrar menú")])]),a("br"),a("Profile"),a("br"),t._m(0),a("br"),a("div",{staticClass:"overline"},[t._v("General")]),a("div",{staticClass:"overlayMenuOption",on:{click:t.closeOverlayMenu}},[a("router-link",{staticClass:"overlayMenuLink",attrs:{to:"/dashboard/project/"+t.routesPath+"/feed"}},[t._v("Resumen")])],1),a("div",{staticClass:"overlayMenuOption",staticStyle:{"margin-top":"12px"},on:{click:t.closeOverlayMenu}},[a("router-link",{staticClass:"overlayMenuLink",attrs:{to:"/account/notifications"}},[t._v("\n            Invitaciones\n            "),t.invitations>=1?a("span",{staticClass:"badge badge-danger"},[a("svg",{staticClass:"feather-mini-light"},[a("use",{attrs:{"xlink:href":n("0e09")+"#bell"}})]),t._v("\n                "+t._s(t.invitations)+"\n            ")]):t._e()])],1),a("br"),a("div",{staticClass:"overline"},[t._v("Módulos")]),a("div",{staticClass:"overlayMenuOption",on:{click:t.closeOverlayMenu}},[a("svg",{staticClass:"feather-menu"},[a("use",{attrs:{"xlink:href":n("0e09")+"#message-square"}})]),a("div",{staticClass:"optionContent"},[a("router-link",{staticClass:"overlayMenuLink",attrs:{to:"/dashboard/project/"+t.routesPath+"/board"}},[t._v("Boards")]),a("small",[t._v("Concentra las ideas en un tablero")])],1)]),a("div",{staticClass:"overlayMenuOption",on:{click:t.closeOverlayMenu}},[a("svg",{staticClass:"feather-menu"},[a("use",{attrs:{"xlink:href":n("0e09")+"#flag"}})]),a("div",{staticClass:"optionContent"},[a("router-link",{staticClass:"overlayMenuLink",attrs:{to:"/dashboard/project/"+t.routesPath+"/goals"}},[t._v("Goals")]),a("small",[t._v("Mantén tus objetivos presentes")])],1)]),a("div",{staticClass:"overlayMenuOption",on:{click:t.closeOverlayMenu}},[a("svg",{staticClass:"feather-menu"},[a("use",{attrs:{"xlink:href":n("0e09")+"#users"}})]),a("div",{staticClass:"optionContent"},[a("router-link",{staticClass:"overlayMenuLink",attrs:{to:"/dashboard/project/"+t.routesPath+"/membership"}},[t._v("Users")]),a("small",[t._v("Administra amigos en tu proyecto")])],1)]),a("div",{staticClass:"overlayMenuOption",on:{click:t.closeOverlayMenu}},[a("svg",{staticClass:"feather-menu"},[a("use",{attrs:{"xlink:href":n("0e09")+"#clock"}})]),a("div",{staticClass:"optionContent"},[a("router-link",{staticClass:"overlayMenuLink",attrs:{to:"/dashboard/project/"+t.routesPath+"/tasks"}},[t._v("Tasks")]),a("small",[t._v("Sincronizate con tareas de tu equipo")])],1)])],1)},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overlayMenuSearch"},[n("input",{staticClass:"form-control-navbar inputSearch",attrs:{type:"text",placeholder:"Buscar en tus proyectos..."}})])}],S=(n("a8de"),n("5aea"),{data:function(){return{routesPath:"",invitations:""}},components:{Profile:p},created:function(){this.getInvitations(),this.routesPath=this.$route.params.projectId},methods:{getInvitations:function(){var t=this;c.a.auth().onAuthStateChanged(function(e){c.a.firestore().collection("users").doc(e.uid).collection("invitations").get().then(function(e){t.invitations=e.docs.length})})},closeOverlayMenu:function(){document.getElementById("overlayMenu").classList.toggle("overlayMenu")}}}),w=S,j=Object(h["a"])(w,O,A,!1,null,null,null),E=j.exports,L=n("9b27"),I={created:function(){this.getCurrentUser()},methods:{getCurrentUser:function(){var t=this;c.a.auth().onAuthStateChanged(function(e){t.checkEmailState(e)})},checkEmailState:function(t){0==t.emailVerified&&this.$router.push("/verify")}}},B={components:{LateralPanel:x,OverlayMenu:E},mixins:[L["a"],I]},$=B,D=Object(h["a"])($,a,s,!1,null,null,null);e["default"]=D.exports},5874:function(t,e,n){},"5aea":function(t,e,n){},"8f3a":function(t,e,n){},"984e":function(t,e,n){},"9b27":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("8aa5"),s=n.n(a),i={beforeMount:function(){s.a.auth().onAuthStateChanged(function(t){t||(console.log("No existe usuario actualmente"),"/"!=window.location&&(window.location="/"))})}}},a8de:function(t,e,n){},d84c:function(t,e,n){t.exports=n.p+"img/isotipe-color.657e829b.svg"},f365:function(t,e,n){t.exports=n.p+"img/profile.f2fd1390.png"}}]);
//# sourceMappingURL=chunk-b743cc90.349effdc.js.map