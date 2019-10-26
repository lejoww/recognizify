(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8cce274"],{2366:function(t,a){for(var e=[],r=0;r<256;++r)e[r]=(r+256).toString(16).substr(1);function o(t,a){var r=a||0,o=e;return[o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]]].join("")}t.exports=o},"365b":function(t,a,e){},"4e68":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"create-form"}},[e("div",{staticClass:"screenContent"},[e("Profile"),e("div",{staticClass:"dashboardContent"},[e("div",{staticClass:"content-flex"},[e("a",{attrs:{href:"/feed"}},[e("svg",{staticStyle:{margin:"12px"},attrs:{id:"i-arrow-left",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3"}},[e("path",{attrs:{d:"M10 6 L2 16 10 26 M2 16 L30 16"}})])]),t._m(0),e("div",{staticClass:"info-inputs"},[e("h2",[t._v("Crea un nuevo proyecto.")]),e("h5",[t._v("Puedes comenzar por aquí")]),e("br"),e("div",{staticClass:"form-container"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Nombre completo del proyecto")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.largeName,expression:"largeName"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Un nombre largo para el proyecto"},domProps:{value:t.largeName},on:{input:function(a){a.target.composing||(t.largeName=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("Apodo para el proyecto")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.shortName,expression:"shortName"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Un nombre más corto"},domProps:{value:t.shortName},on:{input:function(a){a.target.composing||(t.shortName=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("¿De qué se trata el proyecto?")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control form-textarea form-control-lg",attrs:{rows:"7"},domProps:{value:t.description},on:{input:function(a){a.target.composing||(t.description=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("Agrega una foto que represente el proyecto")]),e("input",{staticClass:"form-control-file",attrs:{type:"file",id:"file"},on:{change:t.uploadImageToServer}})]),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-success",on:{click:t.createProjectOnDatabase}},[t._v("Listo, crear proyecto")])])])])])])],1)])},o=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"bg-image"},[r("div",[r("img",{attrs:{src:e("b5f1")}}),r("br"),r("h3",{staticStyle:{color:"#99A0C4"}},[t._v("Es hora de ser el mejor.")]),r("span",{staticStyle:{color:"#99A0C4"}},[t._v("Asegúrate de escoger bien la información que pondrás aquí, de eso depende la ayuda que te podamos dar.")])])])}],n=(e("7f7f"),e("d839")),s=e("66aa"),i=e("8aa5"),c=e.n(i),l=e("c437"),u=e.n(l),d=(e("8f3a"),e("365b"),e("9b27"),{data:function(){return{largeName:"",shortName:"",description:"",projectuid:""}},components:{UserNavbar:n["a"],Profile:s["a"]},methods:{createProjectOnDatabase:function(){var t=this;c.a.auth().onAuthStateChanged(function(a){void 0!=t.projectuid&&""!=t.projectuid||(t.projectuid=u()()),c.a.firestore().collection("projects").doc(t.projectuid).set({name:t.largeName,shortName:t.shortName,description:t.description,admin:[a.uid]}).then(function(){return t.$router.push("/feed")}).catch(function(t){return console.log("Has tenido un error llamado ".concat(t.name))})})},uploadImageToServer:function(t,a){this.projectuid=u()();var e=t.target.files[0];c.a.storage().ref("projects/".concat(this.projectuid,"/project_photo")).put(e)}}}),f=d,p=e("2877"),v=Object(p["a"])(f,r,o,!1,null,null,null);a["default"]=v.exports},"66aa":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dropdown"},[e("a",{attrs:{id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("div",{staticClass:"current-profile"},[e("div",{staticClass:"profile-content"},[e("img",{attrs:{src:t.urlPhotoPath}})])])]),e("div",{staticClass:"profileMenu"},[e("div",{staticClass:"dropdown-menu profileMenuList",attrs:{"aria-labelledby":"dropdownMenuButton"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/select"}},[t._v("Mis proyectos")])],1),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/notifications",id:"invitationsLink"}},[t._v("Notificaciones")])],1),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e("router-link",{attrs:{to:"/account/configuration"}},[t._v("Configuración")])],1),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Sobre Recognizify")]),e("div",{staticClass:"dropdown-divider"}),e("a",{staticClass:"dropdown-item",staticStyle:{color:"#FF524C"},attrs:{href:"#"},on:{click:t.closeSession}},[t._v("Cerrar sesión")])])])])},o=[],n=e("8aa5"),s=e.n(n),i=(e("365b"),{data:function(){return{urlPhotoPath:""}},mounted:function(){var t=this;s.a.auth().onAuthStateChanged(function(a){s.a.storage().ref("profile_photos/".concat(a.uid)).getDownloadURL().then(function(a){return t.urlPhotoPath=a})}),s.a.auth().onAuthStateChanged(function(t){s.a.firestore().collection("users").doc(t.uid).collection("invitations").get().then(function(t){if(t.docs.length>=1){var a=document.getElementById("invitationsLink");a.insertAdjacentHTML("beforeend",' <span class="badge badge-danger">'.concat(t.docs.length,"</span>"))}})})},methods:{closeSession:function(){s.a.auth().signOut(),window.location="/"}}}),c=i,l=e("2877"),u=Object(l["a"])(c,r,o,!1,null,null,null);a["a"]=u.exports},"7f7f":function(t,a,e){var r=e("86cc").f,o=Function.prototype,n=/^\s*function ([^ (]*)/,s="name";s in o||e("9e1e")&&r(o,s,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},"8f3a":function(t,a,e){},"9b27":function(t,a,e){"use strict";var r=e("8aa5"),o=e.n(r);o.a.auth().onAuthStateChanged(function(t){t||(console.log("No existe usuario actualmente"),"/"!=window.location&&(window.location="/"))})},b5f1:function(t,a,e){t.exports=e.p+"img/office-work.f79f8313.png"},c437:function(t,a,e){var r,o,n=e("e1f4"),s=e("2366"),i=0,c=0;function l(t,a,e){var l=a&&e||0,u=a||[];t=t||{};var d=t.node||r,f=void 0!==t.clockseq?t.clockseq:o;if(null==d||null==f){var p=n();null==d&&(d=r=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==f&&(f=o=16383&(p[6]<<8|p[7]))}var v=void 0!==t.msecs?t.msecs:(new Date).getTime(),m=void 0!==t.nsecs?t.nsecs:c+1,h=v-i+(m-c)/1e4;if(h<0&&void 0===t.clockseq&&(f=f+1&16383),(h<0||v>i)&&void 0===t.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");i=v,c=m,o=f,v+=122192928e5;var g=(1e4*(268435455&v)+m)%4294967296;u[l++]=g>>>24&255,u[l++]=g>>>16&255,u[l++]=g>>>8&255,u[l++]=255&g;var b=v/4294967296*1e4&268435455;u[l++]=b>>>8&255,u[l++]=255&b,u[l++]=b>>>24&15|16,u[l++]=b>>>16&255,u[l++]=f>>>8|128,u[l++]=255&f;for(var C=0;C<6;++C)u[l+C]=d[C];return a||s(u)}t.exports=l},d839:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"navbar"}},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light navbar-flexible"},[t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[e("router-link",{attrs:{to:t.feedPath}},[t._v("Resumen")])],1)]),e("li",[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[e("router-link",{attrs:{to:t.boardPath}},[t._v("Boards")])],1)]),t._m(1),t._m(2),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[e("router-link",{attrs:{to:t.usersPath}},[t._v("Usuarios")])],1)])])])])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Activar navegación"}},[e("span",[e("i",{staticClass:"fas fa-bars"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Emocionalidad")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Tareas")])])}],n=e("8aa5"),s=e.n(n),i=(e("5aea"),e("365b"),e("9b27"),e("e100"),{data:function(){return{username:"",currentProjectName:"",usersPath:"",feedPath:"",boardPath:""}},methods:{closeSession:function(){s.a.auth().signOut().then(window.location="/")}}}),c=i,l=e("2877"),u=Object(l["a"])(c,r,o,!1,null,null,null);a["a"]=u.exports},e100:function(t,a){},e1f4:function(t,a){var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(e){var r=new Uint8Array(16);t.exports=function(){return e(r),r}}else{var o=new Array(16);t.exports=function(){for(var t,a=0;a<16;a++)0===(3&a)&&(t=4294967296*Math.random()),o[a]=t>>>((3&a)<<3)&255;return o}}}}]);
//# sourceMappingURL=chunk-e8cce274.3ff7c1e5.js.map