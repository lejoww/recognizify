(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f62eb80a"],{"209c":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"invitation"}},[n("div",{staticClass:"text-left"},[n("div",{staticClass:"spinner-grow text-primary",staticStyle:{width:"3rem",height:"3rem"},attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])]),n("br"),n("h1",[t._v("Procesando tu invitación...")])])}],i=(n("7f7f"),n("8aa5")),a=n.n(i),r=n("e010"),s={mixins:[r["a"]],mounted:function(){var t=this;a.a.auth().onAuthStateChanged(function(e){var n=t.$route.params.projectId;a.a.firestore().collection("users").doc(e.uid).get().then(function(o){a.a.firestore().collection("projects").doc(n).collection("members").doc(e.uid).set({name:o.data()["name"],user:o.data()["user"],member:!0,role:""}).then(function(){t.addActivityPoint(),a.a.firestore().collection("users").doc(e.uid).collection("invitations").doc(n).delete().then(function(){t.$router.push("/dashboard/select")}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)})})}},u=s,l=(n("ba75"),n("2877")),d=Object(l["a"])(u,o,c,!1,null,"cbc0fc26",null);e["default"]=d.exports},"62c2":function(t,e,n){},"7f7f":function(t,e,n){var o=n("86cc").f,c=Function.prototype,i=/^\s*function ([^ (]*)/,a="name";a in c||n("9e1e")&&o(c,a,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},ba75:function(t,e,n){"use strict";var o=n("62c2"),c=n.n(o);c.a},e010:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n("8aa5"),c=n.n(o),i={methods:{addActivityPoint:function(){var t=this,e=new Date,n="".concat(e.getUTCDate()).concat(e.getMonth()).concat(e.getFullYear());c.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("dates").doc(n).get().then(function(e){var o=void 0==e.data()?0:e.data()["activityPoints"];t.setActivityPoint(n,o)})},setActivityPoint:function(t,e){c.a.firestore().collection("projects").doc(this.$route.params.projectId).collection("dates").doc(t).set({activityPoints:e+1,date:c.a.firestore.Timestamp.fromDate(new Date)})}}}}}]);
//# sourceMappingURL=chunk-f62eb80a.bfb8708c.js.map