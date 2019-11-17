(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ee798fa"],{"0e09":function(t,e,o){t.exports=o.p+"img/feather-sprite.5113e3a1.svg"},2366:function(t,e){for(var o=[],r=0;r<256;++r)o[r]=(r+256).toString(16).substr(1);function a(t,e){var r=e||0,a=o;return[a[t[r++]],a[t[r++]],a[t[r++]],a[t[r++]],"-",a[t[r++]],a[t[r++]],"-",a[t[r++]],a[t[r++]],"-",a[t[r++]],a[t[r++]],"-",a[t[r++]],a[t[r++]],a[t[r++]],a[t[r++]],a[t[r++]],a[t[r++]]].join("")}t.exports=a},"365b":function(t,e,o){},"4e68":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"create-form"}},[r("div",{staticClass:"screenContent"},[r("Profile"),r("div",{staticClass:"dashboardContent"},[t._m(0),r("div",{staticClass:"info-inputs"},[r("a",{staticStyle:{display:"flex","align-items":"center"},attrs:{href:"javascript: history.go(-1)"}},[r("svg",{staticClass:"feather-dark"},[r("use",{attrs:{"xlink:href":o("0e09")+"#arrow-left"}})]),r("h6",[t._v("Volver atrás")])]),r("br"),r("h2",[t._v("Crea un nuevo proyecto.")]),r("h5",[t._v("Puedes comenzar por aquí")]),r("br"),r("div",{staticClass:"form-container"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Nombre completo del proyecto")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.largeName,expression:"largeName"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Un nombre largo para el proyecto"},domProps:{value:t.largeName},on:{input:function(e){e.target.composing||(t.largeName=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Apodo para el proyecto")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.shortName,expression:"shortName"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Un nombre más corto"},domProps:{value:t.shortName},on:{input:function(e){e.target.composing||(t.shortName=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("¿De qué se trata el proyecto?")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control form-textarea form-control-lg",attrs:{rows:"7"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Agrega una foto que represente el proyecto")]),r("input",{staticClass:"form-control-file",attrs:{type:"file",id:"file"},on:{change:t.uploadImageToServer}})]),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-success",on:{click:t.createProjectOnDatabase}},[t._v("Listo, crear proyecto")])])])])])],1)])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-image"},[r("div",[r("img",{attrs:{src:o("b5f1")}}),r("br"),r("h3",{staticStyle:{color:"#99A0C4"}},[t._v("Es hora de ser el mejor.")]),r("span",{staticStyle:{color:"#99A0C4"}},[t._v("Asegúrate de escoger bien la información que pondrás aquí, de eso depende la ayuda que te podamos dar.")])])])}],n=(o("7f7f"),o("66aa")),s=o("8aa5"),i=o.n(s),c=o("c437"),u=o.n(c),l=(o("8f3a"),o("365b"),o("9b27"),{data:function(){return{largeName:"",shortName:"",description:"",projectuid:""}},components:{Profile:n["a"]},methods:{createProjectOnDatabase:function(){var t=this;i.a.auth().onAuthStateChanged(function(e){void 0!=t.projectuid&&""!=t.projectuid||(t.projectuid=u()()),i.a.firestore().collection("projects").doc(t.projectuid).set({name:t.largeName,shortName:t.shortName,description:t.description,admin:[e.uid]}).then(function(){i.a.firestore().collection("users").doc(e.uid).get().then(function(o){i.a.firestore().collection("projects").doc(t.projectuid).collection("members").doc(e.uid).set({name:o.data()["name"],user:o.data()["user"],member:!0,role:""}).then(function(){return t.$router.push("/dashboard/select")}).catch(function(t){return console.error(t)})}).catch(function(t){return console.error(t)})}).catch(function(t){return console.error(t)})})},uploadImageToServer:function(t,e){this.projectuid=u()();var o=t.target.files[0];i.a.storage().ref("projects/".concat(this.projectuid,"/project_photo")).put(o)}}}),f=l,d=o("2877"),p=Object(d["a"])(f,r,a,!1,null,null,null);e["default"]=p.exports},"66aa":function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebarProfile"},[r("div",{staticClass:"profileWrapper"},[r("div",{staticClass:"profileData"},[r("div",{staticClass:"profileContent"},[r("img",{staticClass:"profilePicture",attrs:{src:t.urlPhotoPath}})]),r("div",{staticClass:"profileIdentity"},[r("span",{staticClass:"profileName text-white",domProps:{textContent:t._s(t.currentAccount.name)}}),r("span",{staticClass:"profileUsername",domProps:{textContent:t._s("@"+t.currentAccount.username)}})])]),r("div",{staticClass:"profileOptions"},[r("router-link",{attrs:{to:"/account/configuration"}},[r("svg",{staticClass:"feather-menu"},[r("use",{attrs:{"xlink:href":o("0e09")+"#settings"}})])]),r("a",{staticStyle:{"margin-left":"7px"},attrs:{href:"#","data-toggle":"tooltip","data-placement":"top",title:"Cerrar sesión"},on:{click:t.closeSession}},[r("svg",{staticClass:"feather-red"},[r("use",{attrs:{"xlink:href":o("0e09")+"#log-out"}})])])],1)])])},a=[],n=(o("7f7f"),o("8aa5")),s=o.n(n),i=(o("984e"),o("365b"),{data:function(){return{urlPhotoPath:"",currentAccount:{name:"",username:""}}},mounted:function(){this.setProfilePicture(),this.setIdentityData()},methods:{setProfilePicture:function(){var t=this;s.a.auth().onAuthStateChanged(function(e){s.a.storage().ref("profile_photos/".concat(e.uid)).getDownloadURL().then(function(e){return t.urlPhotoPath=e})})},setIdentityData:function(){var t=this;s.a.auth().onAuthStateChanged(function(e){s.a.firestore().collection("users").doc(e.uid).get().then(function(e){t.currentAccount.name=e.data()["name"],t.currentAccount.username=e.data()["user"]})})},closeSession:function(){s.a.auth().signOut(),window.location="/"}}}),c=i,u=o("2877"),l=Object(u["a"])(c,r,a,!1,null,null,null);e["a"]=l.exports},"7f7f":function(t,e,o){var r=o("86cc").f,a=Function.prototype,n=/^\s*function ([^ (]*)/,s="name";s in a||o("9e1e")&&r(a,s,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},"8f3a":function(t,e,o){},"984e":function(t,e,o){},"9b27":function(t,e,o){"use strict";var r=o("8aa5"),a=o.n(r);a.a.auth().onAuthStateChanged(function(t){t||(console.log("No existe usuario actualmente"),"/"!=window.location&&(window.location="/"))})},b5f1:function(t,e,o){t.exports=o.p+"img/office-work.f79f8313.png"},c437:function(t,e,o){var r,a,n=o("e1f4"),s=o("2366"),i=0,c=0;function u(t,e,o){var u=e&&o||0,l=e||[];t=t||{};var f=t.node||r,d=void 0!==t.clockseq?t.clockseq:a;if(null==f||null==d){var p=n();null==f&&(f=r=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==d&&(d=a=16383&(p[6]<<8|p[7]))}var m=void 0!==t.msecs?t.msecs:(new Date).getTime(),v=void 0!==t.nsecs?t.nsecs:c+1,h=m-i+(v-c)/1e4;if(h<0&&void 0===t.clockseq&&(d=d+1&16383),(h<0||m>i)&&void 0===t.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");i=m,c=v,a=d,m+=122192928e5;var g=(1e4*(268435455&m)+v)%4294967296;l[u++]=g>>>24&255,l[u++]=g>>>16&255,l[u++]=g>>>8&255,l[u++]=255&g;var C=m/4294967296*1e4&268435455;l[u++]=C>>>8&255,l[u++]=255&C,l[u++]=C>>>24&15|16,l[u++]=C>>>16&255,l[u++]=d>>>8|128,l[u++]=255&d;for(var b=0;b<6;++b)l[u+b]=f[b];return e||s(l)}t.exports=u},e1f4:function(t,e){var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(o){var r=new Uint8Array(16);t.exports=function(){return o(r),r}}else{var a=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0===(3&e)&&(t=4294967296*Math.random()),a[e]=t>>>((3&e)<<3)&255;return a}}}}]);
//# sourceMappingURL=chunk-4ee798fa.f7545efb.js.map