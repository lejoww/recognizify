(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67887b86"],{1008:function(e,t,n){e.exports=n.p+"img/logo-common-cutted.41f77807.svg"},5118:function(e,t,n){(function(e){var o="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,a=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(a.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new i(a.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},6017:function(e,t,n){(function(e,t){(function(e,n){"use strict";if(!e.setImmediate){var o,a=1,i={},s=!1,r=e.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(e);c=c&&c.setTimeout?c:e,"[object process]"==={}.toString.call(e.process)?d():p()?h():e.MessageChannel?v():r&&"onreadystatechange"in r.createElement("script")?g():b(),c.setImmediate=u,c.clearImmediate=l}function u(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var s={callback:e,args:t};return i[a]=s,o(a),a++}function l(e){delete i[e]}function f(e){var t=e.callback,o=e.args;switch(o.length){case 0:t();break;case 1:t(o[0]);break;case 2:t(o[0],o[1]);break;case 3:t(o[0],o[1],o[2]);break;default:t.apply(n,o);break}}function m(e){if(s)setTimeout(m,0,e);else{var t=i[e];if(t){s=!0;try{f(t)}finally{l(e),s=!1}}}}function d(){o=function(e){t.nextTick(function(){m(e)})}}function p(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function h(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&m(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),o=function(n){e.postMessage(t+n,"*")}}function v(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;m(t)},o=function(t){e.port2.postMessage(t)}}function g(){var e=r.documentElement;o=function(t){var n=r.createElement("script");n.onreadystatechange=function(){m(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function b(){o=function(e){setTimeout(m,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,n("c8ba"),n("f28c"))},a3a0:function(e,t,n){},eed3:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"view-content"},[o("div",{staticClass:"account-complete",attrs:{id:"welcomeAccountComplete"}},[o("img",{attrs:{src:n("1008"),alt:"Logotipo de Recognizify",width:"148px"}}),o("br"),o("div",{staticClass:"form-content complete-account-form"},[o("h2",{staticStyle:{width:"100%","letter-spacing":"-0.7px"}},[e._v("Ahora solo falta que completes algunos datos.")]),o("br"),o("div",{staticClass:"form-row"},[o("label",{attrs:{for:"file"}},[e._v("Tu foto de perfil (selecciona un archivo)")]),o("input",{staticClass:"form-control-file",attrs:{type:"file",id:"file"},on:{change:e.checkUrlPath}})]),o("br"),o("div",{staticClass:"form-group"},[o("label",[e._v("¿Cuál es tu nombre?")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ejm. Pepito Gonzáles",spellcheck:"false",autocomplete:"off"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Descríbete tal y como eres")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.bio,expression:"bio"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Autentico",spellcheck:"false",autocomplete:"off"},domProps:{value:e.bio},on:{input:function(t){t.target.composing||(e.bio=t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",[e._v("Escoge un nombre de usuario")]),o("div",{staticClass:"input-group mb-3"},[e._m(0),o("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Escribe un nombre de usuario",spellcheck:"false",autocomplete:"off"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}})])]),o("button",{staticClass:"btn btn-warning btn-save",staticStyle:{"margin-bottom":"2rem"},on:{click:e.saveInfoOnDatabase}},[e._v("Continuar")])])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[e._v("@")])])}],i=(n("a3a0"),n("8aa5")),s=n.n(i),r=(n("5118"),{data:function(){return{username:"",urlPhotoPath:"",bio:"",user:""}},mounted:function(){var e=this;s.a.auth().onAuthStateChanged(function(t){t?console.log("Complete los datos"):e.$router.push("/")})},methods:{checkUrlPath:function(e){s.a.auth().onAuthStateChanged(function(t){if(t){var n=e.target.files[0],o=s.a.storage().ref("profile_photos/".concat(t.uid));o.put(n).then(function(){return console.log("Foto subida correctamente")}).catch(function(e){return console.log("No se ha podido subir la foto de perfil por ".concat(e))})}})},saveInfoOnDatabase:function(){var e=this;s.a.auth().onAuthStateChanged(function(t){s.a.firestore().collection("users").doc(t.uid).set({name:e.normalizeString(e.username),bio:e.bio,user:e.user,roles:{admin:!1,creator:!1,user:!0},visibilityMode:"public"}).then(function(){e.$router.push("/dashboard/select")}).catch(function(e){return console.log(e)})})},normalizeString:function(){for(var e="ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",t="AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",n={},o=0,a=e.length;o<a;o++)n[e.charAt(o)]=t.charAt(o);for(var i=[],s=0,r=this.username.length;s<r;s++){var c=this.username.charAt(s);n.hasOwnProperty(this.username.charAt(s))?i.push(n[c]):i.push(c)}return i.join("")}}}),c=r,u=n("2877"),l=Object(u["a"])(c,o,a,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-67887b86.deeb492c.js.map