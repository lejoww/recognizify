(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20502712"],{"0e09":function(t,e,a){t.exports=a.p+"img/feather-sprite.5113e3a1.svg"},"2bff":function(t,e,a){},"365b":function(t,e,a){},"5e6a":function(t,e,a){t.exports=a.p+"img/logo-white-cutted.caf3a5ce.svg"},"66aa":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebarProfile"},[s("div",{staticClass:"profileWrapper"},[s("div",{staticClass:"profileData"},[s("div",{staticClass:"profileContent"},[s("img",{staticClass:"profilePicture",attrs:{src:t.urlPhotoPath}})]),s("div",{staticClass:"profileIdentity"},[s("span",{staticClass:"profileName text-white"},[t._v(t._s(this.currentAccount.nickname))]),s("span",{staticClass:"profileUsername"},[t._v(t._s("@"+t.currentAccount.username))])])]),s("div",{staticClass:"profileOptions"},[s("router-link",{attrs:{to:"/account/configuration"}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":a("0e09")+"#settings"}})])]),s("a",{staticStyle:{"margin-left":"7px"},attrs:{href:"#","data-toggle":"tooltip","data-placement":"top",title:"Cerrar sesión"},on:{click:t.closeSession}},[s("svg",{staticClass:"feather-red"},[s("use",{attrs:{"xlink:href":a("0e09")+"#log-out"}})])])],1)])])},n=[],i=a("8aa5"),r=a.n(i),o=(a("984e"),a("365b"),{data:function(){return{urlPhotoPath:"",currentAccount:{nickname:"",username:""}}},created:function(){this.setProfilePicture(),this.setIdentityData(),this.checkExistentIdentity()},methods:{setProfilePicture:function(){var t=this;r.a.auth().onAuthStateChanged(function(e){r.a.storage().ref("profile_photos/".concat(e.uid)).getDownloadURL().then(function(e){return t.urlPhotoPath=e})})},setIdentityData:function(){var t=this;r.a.auth().onAuthStateChanged(function(e){r.a.firestore().collection("users").doc(e.uid).get().then(function(e){t.currentAccount.nickname=e.data()["nickname"],t.currentAccount.username=e.data()["user"],console.log(t.currentAccount.nickname)})})},checkExistentIdentity:function(){""!=this.currentAccount.nickname&&void 0!=this.currentAccount.nickname&&null!=this.currentAccount.nickname&&""!=this.currentAccount.username&&void 0!=this.currentAccount.username&&null!=this.currentAccount.username||this.$route.push("/register/info")},closeSession:function(){r.a.auth().signOut(),window.location="/"}}}),c=o,l=a("2877"),u=Object(l["a"])(c,s,n,!1,null,null,null);e["a"]=u.exports},8280:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebarMenu",attrs:{id:"sidebarMenu"}},[s("div",{staticClass:"sidebarWrapper"},[t._m(0),s("div",{staticClass:"sidebarAccount"},[s("Profile")],1),s("ul",{staticClass:"sidebarNav"},[s("div",{staticClass:"overline"},[t._v("General")]),s("li",[s("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.feedPath}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":a("0e09")+"#home"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Resumen")])])],1),s("li",[s("router-link",{staticClass:"lateralPanelOption",attrs:{to:"/account/notifications"}},[s("div",{staticClass:"stackable"},[s("div",{staticClass:"littleStack"},[s("svg",{staticClass:"feather-menu",attrs:{id:"invitationsIcon"}},[s("use",{attrs:{"xlink:href":a("0e09")+"#bell"}})]),t.invitations>0?s("span",{staticClass:"badge badge-danger",domProps:{textContent:t._s(t.invitations)}}):t._e()]),s("span",{staticClass:"lateralMenuLink",attrs:{id:"invitationsLink"}},[t._v("Invitaciones")])])])],1),s("br"),s("div",{staticClass:"overline"},[t._v("Módulos")]),s("li",[s("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.goalsPath}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":a("0e09")+"#flag"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Goals")])])],1),s("li",[s("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.boardPath}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":a("0e09")+"#message-square"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Boards")])])],1),s("li",[s("router-link",{staticClass:"lateralPanelOption",attrs:{to:t.usersPath}},[s("svg",{staticClass:"feather-menu"},[s("use",{attrs:{"xlink:href":a("0e09")+"#users"}})]),s("span",{staticClass:"lateralMenuLink"},[t._v("Users")])])],1)])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebarBrand"},[s("img",{attrs:{src:a("5e6a"),width:"142px"}})])}],i=a("8aa5"),r=a.n(i),o=(a("2bff"),a("365b"),a("66aa")),c={data:function(){return{activeProjects:"",currentProjectName:"",usersPath:"",feedPath:"",boardPath:"",goalsPath:"",invitations:""}},components:{Profile:o["a"]},mounted:function(){var t=this;this.setInvitationsNumber(),this.getAndSetActiveProjects(),r.a.auth().onAuthStateChanged(function(e){var a=t.$route.params.projectId;t.usersPath="/dashboard/project/".concat(a,"/membership"),t.feedPath="/dashboard/project/".concat(a,"/feed"),t.boardPath="/dashboard/project/".concat(a,"/board"),t.goalsPath="/dashboard/project/".concat(a,"/goals")})},methods:{getAndSetActiveProjects:function(){var t=this;r.a.auth().onAuthStateChanged(function(e){r.a.firestore().collection("users").doc(e.uid).collection("projects").get().then(function(e){t.activeProjects=e.docs.length})})},setInvitationsNumber:function(){var t=this;r.a.auth().onAuthStateChanged(function(e){r.a.firestore().collection("users").doc(e.uid).collection("invitations").get().then(function(e){if(e.docs.length>0){t.invitations=e.docs.length;var a=document.getElementById("invitationsLink"),s=document.getElementById("invitationsIcon");a.style.color="#FF524C",s.style.stroke="#FF524C"}})})}}},l=c,u=a("2877"),d=Object(u["a"])(l,s,n,!1,null,null,null);e["a"]=d.exports},"8f3a":function(t,e,a){},"984e":function(t,e,a){},e7b4:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{id:"menu"},on:{click:t.openMenu}},[s("svg",{staticClass:"feather-burger"},[s("use",{attrs:{"xlink:href":a("0e09")+"#menu"}})])])},n=[],i={methods:{openMenu:function(){var t=document.getElementById("sidebarMenu");t.classList.toggle("sidebarActive")}}},r=i,o=a("2877"),c=Object(o["a"])(r,s,n,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-20502712.c7bc0879.js.map