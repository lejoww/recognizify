(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf4c34ba"],{"0041":function(e,t,a){},2366:function(e,t){for(var a=[],o=0;o<256;++o)a[o]=(o+256).toString(16).substr(1);function r(e,t){var o=t||0,r=a;return[r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],"-",r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]],r[e[o++]]].join("")}e.exports=r},"4e68":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboardContent"},[0!=this.loading?a("Loading"):e._e(),a("div",{staticClass:"formLayout"},[a("div",{staticClass:"projectForm"},[e._m(0),a("h2",{staticClass:"projectFormTitle"},[e._v("Crea un nuevo proyecto.")]),a("h6",{staticClass:"projectFormSubtitle"},[e._v("Puedes comenzar por aquí")]),a("br"),a("div",{staticClass:"form-container"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Nombre completo del proyecto")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.largeName,expression:"largeName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"El nombre real y legítimo para el proyecto"},domProps:{value:e.largeName},on:{input:function(t){t.target.composing||(e.largeName=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("Apodo para el proyecto")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.shortName,expression:"shortName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Un nombre más corto y entendible",maxlength:"17"},domProps:{value:e.shortName},on:{input:function(t){t.target.composing||(e.shortName=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("¿De qué se trata el proyecto?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Trata de ser específico y claro"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("Agrega una foto que represente el proyecto")]),a("input",{staticClass:"form-control-file",attrs:{type:"file",id:"file"},on:{change:e.uploadImageToServer}})]),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-success",on:{click:e.createProjectOnDatabase}},[e._v("Comenzar la aventura")])])])])])],1)},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"robotDialog"},[o("img",{attrs:{src:a("c0aa"),width:"78px"}}),o("div",{staticClass:"dialogFlow"},[e._v("\n                    Fabuloso! Aquí es donde decides ejecutar tu creatividad, no solo tu proyecto, \n                    sino también tu capacidad de emprender lo que te imaginas. Responde con detalle, \n                    para que podamos ayudarte más. Bienvenido al camino de crear.\n                ")])])}],n=a("8aa5"),s=a.n(n),i=a("c437"),c=a.n(i),l=(a("8f3a"),a("9b27"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),u=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loadingScreen"},[a("div",{staticClass:"loader"},[a("div",{staticClass:"loader-inner ball-pulse-sync"},[a("div"),a("div"),a("div")]),a("span",{staticClass:"tooltip"},[a("p",[e._v("loading...")])])])])}],d=(a("0041"),{}),p=d,m=(a("9f48"),a("2877")),f=Object(m["a"])(p,l,u,!1,null,null,null),v=f.exports,g={data:function(){return{largeName:"",shortName:"",description:"",projectuid:"",type:"",loading:!1}},components:{Loading:v},methods:{createProjectOnDatabase:function(){var e=this;this.loading=!0,s.a.auth().onAuthStateChanged(function(t){if(t){var a={largeName:e.largeName,shortName:e.shortName,description:e.description},o=s.a.functions().httpsCallable("createProject");o(a).then(function(t){"ok"==t.data.status?e.$router.push("/dashboard/select"):alert("No se ha podido crear el proyecto")}).catch(function(e){return console.log(e)})}})},uploadImageToServer:function(e,t){this.projectuid=c()();var a=e.target.files[0];s.a.storage().ref("projects/".concat(this.projectuid,"/project_photo")).put(a)}}},h=g,b=Object(m["a"])(h,o,r,!1,null,null,null);t["default"]=b.exports},"8f3a":function(e,t,a){},"97b3":function(e,t,a){},"9b27":function(e,t,a){"use strict";a.d(t,"a",function(){return n});var o=a("8aa5"),r=a.n(o),n={beforeMount:function(){r.a.auth().onAuthStateChanged(function(e){e||(console.log("No existe usuario actualmente"),"/signin"!=window.location&&(window.location="/signin"))})}}},"9f48":function(e,t,a){"use strict";var o=a("97b3"),r=a.n(o);r.a},c0aa:function(e,t,a){e.exports=a.p+"img/robot-wink.32eacf3f.png"},c437:function(e,t,a){var o,r,n=a("e1f4"),s=a("2366"),i=0,c=0;function l(e,t,a){var l=t&&a||0,u=t||[];e=e||{};var d=e.node||o,p=void 0!==e.clockseq?e.clockseq:r;if(null==d||null==p){var m=n();null==d&&(d=o=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==p&&(p=r=16383&(m[6]<<8|m[7]))}var f=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:c+1,g=f-i+(v-c)/1e4;if(g<0&&void 0===e.clockseq&&(p=p+1&16383),(g<0||f>i)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");i=f,c=v,r=p,f+=122192928e5;var h=(1e4*(268435455&f)+v)%4294967296;u[l++]=h>>>24&255,u[l++]=h>>>16&255,u[l++]=h>>>8&255,u[l++]=255&h;var b=f/4294967296*1e4&268435455;u[l++]=b>>>8&255,u[l++]=255&b,u[l++]=b>>>24&15|16,u[l++]=b>>>16&255,u[l++]=p>>>8|128,u[l++]=255&p;for(var C=0;C<6;++C)u[l+C]=d[C];return t||s(u)}e.exports=l},e1f4:function(e,t){var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(a){var o=new Uint8Array(16);e.exports=function(){return a(o),o}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}}}]);
//# sourceMappingURL=chunk-cf4c34ba.1d377a6c.js.map