(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d2dc05ec"],{"0e09":function(e,t,o){e.exports=o.p+"img/feather-sprite.5113e3a1.svg"},2366:function(e,t){for(var o=[],r=0;r<256;++r)o[r]=(r+256).toString(16).substr(1);function a(e,t){var r=t||0,a=o;return[a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]]].join("")}e.exports=a},"4e68":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dashboardContent"},[r("div",{staticClass:"formLayout"},[e._m(0),r("div",{staticClass:"projectForm"},[r("a",{staticStyle:{display:"flex","align-items":"center"},attrs:{href:"javascript: history.go(-1)"}},[r("svg",{staticClass:"feather-dark"},[r("use",{attrs:{"xlink:href":o("0e09")+"#arrow-left"}})]),r("span",{staticClass:"backButton text-dark"},[e._v("Volver atrás")])]),r("br"),r("h2",[e._v("Crea un nuevo proyecto.")]),r("h5",[e._v("Puedes comenzar por aquí")]),r("br"),r("div",{staticClass:"form-container"},[r("div",{staticClass:"form-group"},[r("label",[e._v("Nombre completo del proyecto")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.largeName,expression:"largeName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Un nombre largo para el proyecto"},domProps:{value:e.largeName},on:{input:function(t){t.target.composing||(e.largeName=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Apodo para el proyecto")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.shortName,expression:"shortName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Un nombre más corto",maxlength:"17"},domProps:{value:e.shortName},on:{input:function(t){t.target.composing||(e.shortName=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("¿De qué se trata el proyecto?")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Trata de ser específico y claro"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Agrega una foto que represente el proyecto")]),r("input",{staticClass:"form-control-file",attrs:{type:"file",id:"file"},on:{change:e.uploadImageToServer}})]),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-success",on:{click:e.createProjectOnDatabase}},[e._v("Listo, crear proyecto")])])])])])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"projectAd"},[r("div",{staticClass:"projectAdWrapper"},[r("img",{attrs:{src:o("b5f1")}}),r("br"),r("h3",{staticClass:"text-white"},[e._v("Es hora de ser el "),r("span",{staticClass:"text-secondary"},[e._v("mejor")]),e._v(".")])])])}],n=(o("7f7f"),o("8aa5")),s=o.n(n),c=o("c437"),i=o.n(c),u=(o("8f3a"),o("9b27"),{data:function(){return{largeName:"",shortName:"",description:"",projectuid:"",type:""}},methods:{createProjectOnDatabase:function(){var e=this;s.a.auth().onAuthStateChanged(function(t){void 0!=e.projectuid&&""!=e.projectuid||(e.projectuid=i()()),s.a.firestore().collection("projects").doc(e.projectuid).set({name:e.largeName,shortName:e.shortName,description:e.description,admin:[t.uid]}).then(function(){s.a.firestore().collection("users").doc(t.uid).get().then(function(o){s.a.firestore().collection("projects").doc(e.projectuid).collection("members").doc(t.uid).set({name:o.data()["name"],user:o.data()["user"],member:!0,role:""}).then(function(){return e.$router.push("/dashboard/select")}).catch(function(e){return console.error(e)})}).catch(function(e){return console.error(e)})}).catch(function(e){return console.error(e)})})},uploadImageToServer:function(e,t){this.projectuid=i()();var o=e.target.files[0];s.a.storage().ref("projects/".concat(this.projectuid,"/project_photo")).put(o)}}}),l=u,p=o("2877"),d=Object(p["a"])(l,r,a,!1,null,null,null);t["default"]=d.exports},"7f7f":function(e,t,o){var r=o("86cc").f,a=Function.prototype,n=/^\s*function ([^ (]*)/,s="name";s in a||o("9e1e")&&r(a,s,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(e){return""}}})},"8f3a":function(e,t,o){},"9b27":function(e,t,o){"use strict";o.d(t,"a",function(){return n});var r=o("8aa5"),a=o.n(r),n={beforeMount:function(){a.a.auth().onAuthStateChanged(function(e){e||(console.log("No existe usuario actualmente"),"/signin"!=window.location&&(window.location="/signin"))})}}},b5f1:function(e,t,o){e.exports=o.p+"img/office-work.f79f8313.png"},c437:function(e,t,o){var r,a,n=o("e1f4"),s=o("2366"),c=0,i=0;function u(e,t,o){var u=t&&o||0,l=t||[];e=e||{};var p=e.node||r,d=void 0!==e.clockseq?e.clockseq:a;if(null==p||null==d){var f=n();null==p&&(p=r=[1|f[0],f[1],f[2],f[3],f[4],f[5]]),null==d&&(d=a=16383&(f[6]<<8|f[7]))}var m=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:i+1,h=m-c+(v-i)/1e4;if(h<0&&void 0===e.clockseq&&(d=d+1&16383),(h<0||m>c)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=m,i=v,a=d,m+=122192928e5;var g=(1e4*(268435455&m)+v)%4294967296;l[u++]=g>>>24&255,l[u++]=g>>>16&255,l[u++]=g>>>8&255,l[u++]=255&g;var y=m/4294967296*1e4&268435455;l[u++]=y>>>8&255,l[u++]=255&y,l[u++]=y>>>24&15|16,l[u++]=y>>>16&255,l[u++]=d>>>8|128,l[u++]=255&d;for(var b=0;b<6;++b)l[u+b]=p[b];return t||s(l)}e.exports=u},e1f4:function(e,t){var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(o){var r=new Uint8Array(16);e.exports=function(){return o(r),r}}else{var a=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}}}]);
//# sourceMappingURL=chunk-d2dc05ec.558f4bf5.js.map