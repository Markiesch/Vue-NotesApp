(function(t){function e(e){for(var a,i,c=e[0],s=e[1],l=e[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("85ec")},"85ec":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"state",(function(){return yt})),n.d(a,"mutations",(function(){return _t})),n.d(a,"actions",(function(){return kt})),n.d(a,"getters",(function(){return xt}));n("e623"),n("e379"),n("5dc8"),n("37e1");var o=n("2b0e"),r=(n("d3b7"),n("bc3a")),i=n.n(r),c={baseURL:"http://localhost:3000",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}},s=i.a.create(c);s.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},o["a"].use(Plugin);Plugin;var l,u,f,d,v,b,p,h,g,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{staticClass:"nav fill-height",attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("Navigation")],1),n("v-main",{staticClass:"background"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{scopedSlots:t._u([{key:"default",fn:function(t){t.Component}}])})],1)],1)],1)},O=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list",{attrs:{flat:""}},[n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},[t._l(t.items,(function(e,a){return n("v-list-item",{key:a,on:{click:function(n){return t.navigate(e,a)}}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),n("v-list-item",{on:{click:t.createFile}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-plus")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Create File")])],1)],1)],2)],1),n("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" Successfully created a new Note! "),[n("v-btn",{on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])]],2)],1)},N=[],y=n("6b7b"),_=n("d4ec"),k=n("bee2"),x=n("257e"),w=n("262e"),C=n("2caf"),S=n("ade3"),I=n("63ae"),V=(n("f890"),n("99af"),n("ac1f"),n("466d"),n("b0c0"),n("4bb5")),E=n("1b40"),T=n("2f62"),P=n("b85c"),$=(n("25f0"),n("a434"),n("7db0"),n("caad"),n("2532"),n("8c4f")),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{color:"primary"}},[t.recentNotes.length>0?n("v-container",[n("h1",[t._v("Recent Notes")]),n("v-row",t._l(t.recentNotes,(function(e){return n("v-col",{key:e.id,staticClass:"pointer",attrs:{lg:"3"},on:{click:function(n){return t.openNote(e.id)}}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var o=a.hover;return[n("v-card",{staticClass:"backgroundAccent",class:{backgroundAccent2:o},attrs:{outlined:""}},[n("v-card-title",[t._v(t._s(e.title))]),n("v-card-subtitle",[t._v(t._s(e.text))])],1)]}}],null,!0)})],1)})),1)],1):t._e(),n("v-container",{staticClass:"mt-6"},[n("v-badge",{attrs:{content:t.note.notes.length}},[n("h1",{staticClass:"primaryText"},[t._v("All notes")])]),t.note.length<1?n("p",[t._v("It looks like you do not have any files yet!")]):t._e(),n("v-row",[t._l(t.note.notes,(function(e){return n("v-col",{key:e.id,staticClass:"pointer",attrs:{lg:"3"},on:{click:function(n){return t.openNote(e.id)}}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var o=a.hover;return[n("v-card",{staticClass:"backgroundAccent",class:{backgroundAccent2:o},attrs:{outlined:""}},[n("v-card-title",[t._v(t._s(e.title))]),n("v-card-subtitle",[t._v(t._s(e.text))])],1)]}}],null,!0)})],1)})),n("v-col",{staticClass:"pointer",attrs:{lg:"3"},on:{click:t.createNote}},[n("v-card",{attrs:{outlined:""}},[n("v-card-title",[n("v-icon",[t._v("mdi-plus")]),t._v("Create a new Note")],1),n("v-card-subtitle",[t._v("Click to create a new note")])],1)],1)],2)],1)],1)},R=[],B=(l=Object(E["a"])({components:{},beforeRouteEnter:function(t,e,n){Lt.dispatch("getRecentNotes"),Lt.dispatch("fetchNotes").then((function(){n()}))}}),u=Object(V["b"])("getRecentNotes"),f=Object(V["c"])("note"),d=Object(V["a"])("createNote"),l((b=function(t){Object(w["a"])(n,t);var e=Object(C["a"])(n);function n(){var t;Object(_["a"])(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o)),Object(y["a"])(Object(x["a"])(t),"recentNotes",p,Object(x["a"])(t)),Object(y["a"])(Object(x["a"])(t),"note",h,Object(x["a"])(t)),Object(y["a"])(Object(x["a"])(t),"createNote",g,Object(x["a"])(t)),t}return Object(k["a"])(n,[{key:"openNote",value:function(t){this.$router.push("edit/"+t)}}]),n}(E["b"]),p=Object(I["a"])(b.prototype,"recentNotes",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=Object(I["a"])(b.prototype,"note",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=Object(I["a"])(b.prototype,"createNote",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=b))||v),J=B,L=n("2877"),z=n("6544"),D=n.n(z),F=n("4ca6"),M=n("b0af"),U=n("99d9"),q=n("62ad"),H=n("a523"),G=n("ce87"),K=n("132d"),Y=n("0fd9b"),Q=Object(L["a"])(J,A,R,!1,null,null,null),W=Q.exports;D()(Q,{VBadge:F["a"],VCard:M["a"],VCardSubtitle:U["a"],VCardTitle:U["b"],VCol:q["a"],VContainer:H["a"],VHover:G["a"],VIcon:K["a"],VRow:Y["a"]});var X,Z,tt,et,nt,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-toolbar",{attrs:{fixed:""}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-format-align-left")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-format-align-center")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-format-align-justify")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-format-align-right")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-palette")])],1),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:t.deleteNote}},[n("v-icon",[t._v("mdi-trash-can")])],1),n("v-btn",{attrs:{color:t.note.favorite?"error":"",icon:""},on:{click:t.toggleFavorite}},[n("v-icon",[t._v(t._s(t.note.favorite?"mdi-heart":"mdi-heart-plus"))])],1)],1),n("v-container",[n("v-text-field",{attrs:{autocomplete:"off",label:"Title",solo:"",contenteditable:"true"},on:{input:function(e){return t.setUnsavedChanges()}},model:{value:t.note.title,callback:function(e){t.$set(t.note,"title",e)},expression:"note.title"}}),n("v-textarea",{attrs:{label:"Text",solo:""},on:{input:function(e){return t.setUnsavedChanges()}},model:{value:t.note.text,callback:function(e){t.$set(t.note,"text",e)},expression:"note.text"}}),n("v-btn",{attrs:{disabled:!t.unsavedChanges,loading:t.loading,color:"primary"},on:{click:t.saveNote}},[t._v("Save")])],1)],1)},ot=[],rt=(X=Object(E["a"])({props:{id:{default:1}},beforeRouteEnter:function(t,e,n){Lt.dispatch("fetchNotes"),Lt.dispatch("fetchNote",t.params.id),n()},beforeRouteLeave:function(t,e,n){if(!this.unsavedChanges)return n();var a=window.confirm("Do you really want to leave? You have unsaved changes!");if(a)return n();n(!1)}}),Z=Object(V["b"])("getNoteById"),X((et=function(t){Object(w["a"])(n,t);var e=Object(C["a"])(n);function n(){var t;Object(_["a"])(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o)),Object(S["a"])(Object(x["a"])(t),"note",{title:"",text:"",favorite:!1,deleted:!1,id:0}),Object(S["a"])(Object(x["a"])(t),"startingNote",{title:"",text:"",favorite:!1}),Object(S["a"])(Object(x["a"])(t),"unsavedChanges",!1),Object(S["a"])(Object(x["a"])(t),"loading",!1),Object(y["a"])(Object(x["a"])(t),"getNoteById",nt,Object(x["a"])(t)),t}return Object(k["a"])(n,[{key:"saveNote",value:function(){var t=this;this.loading=!0;var e=this.note,n=this.note.id;Lt.dispatch("saveNote",{note:e,id:n}).then((function(){t.loading=!1,t.unsavedChanges=!1,t.startingNote.title=e.title,t.startingNote.text=e.text,t.startingNote.favorite=e.favorite}))}},{key:"toggleFavorite",value:function(){this.note.favorite=!this.note.favorite,this.setUnsavedChanges()}},{key:"deleteNote",value:function(){}},{key:"setUnsavedChanges",value:function(){this.unsavedChanges=this.note.title!==this.startingNote.title||this.note.text!==this.startingNote.text||this.note.favorite!==this.startingNote.favorite}},{key:"created",value:function(){var t=this;window.addEventListener("keydown",(function(e){"s"===e.key.toLowerCase()&&!0===e.ctrlKey&&(t.saveNote(),e.preventDefault())}));try{var e=parseInt(this.id),n=this.getNoteById(e);if(!n)return;this.note=n,this.startingNote.title=n.title,this.startingNote.text=n.text,this.startingNote.favorite=n.favorite,Lt.dispatch("addRecent",e)}catch(a){this.$router.push("/not-found"),console.warn(a)}}}]),n}(E["b"]),nt=Object(I["a"])(et.prototype,"getNoteById",[Z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),tt=et))||tt),it=rt,ct=n("8336"),st=n("2fa4"),lt=n("8654"),ut=n("a844"),ft=n("71d9"),dt=Object(L["a"])(it,at,ot,!1,null,null,null),vt=dt.exports;D()(dt,{VBtn:ct["a"],VContainer:H["a"],VIcon:K["a"],VSpacer:st["a"],VTextField:lt["a"],VTextarea:ut["a"],VToolbar:ft["a"]});var bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"text-center d-flex justify-center align-center fill-height flex-column"},[n("h1",[t._v("The page you requested was not found")]),n("v-btn",{staticClass:"primary mt-5",on:{click:function(e){return t.$router.push("/")}}},[t._v("Home")])],1)},pt=[],ht={},gt=Object(L["a"])(ht,bt,pt,!1,null,null,null),mt=gt.exports;D()(gt,{VBtn:ct["a"],VContainer:H["a"]}),o["a"].use($["a"]);var Ot=[{path:"/",name:"Dashboard",component:W},{path:"/edit/:id",name:"Editor",component:vt,props:!0},{path:"*",name:"not-found",component:mt}],jt=new $["a"]({mode:"history",routes:Ot}),Nt=jt,yt={notes:[],recentNotes:[],note:{}},_t={SET_NOTES:function(t,e){t.notes=e},SET_NOTE:function(t,e){t.note=e}},kt={createNote:function(t){var e=t.commit,n=JSON.parse(localStorage.getItem("notes"))||[],a=0;if(n.length>0){var o,r=Object(P["a"])(n);try{for(r.s();!(o=r.n()).done;){var i=o.value;i.id>=a&&(a=i.id+1)}}catch(s){r.e(s)}finally{r.f()}}var c={title:"New Note",text:"Description",favorite:!1,deleted:!1,id:a};n.push(c),localStorage.setItem("notes",JSON.stringify(n)),e("SET_NOTES",n),Nt.push({name:"Editor",params:{id:a.toString()}}).then((function(t){}))},fetchNotes:function(t){var e=t.commit,n=JSON.parse(localStorage.getItem("notes"))||[];e("SET_NOTES",n)},getRecentNotes:function(t){var e=t.state;e.recentNotes=JSON.parse(localStorage.getItem("recentNotes"))||[]},addRecent:function(t,e){var n=t.state,a=(t.commit,JSON.parse(localStorage.getItem("recentNotes"))||[]),o=a.indexOf(e);o>-1&&a.splice(o,1),a.push(e),n.recentNotes=a,localStorage.setItem("recentNotes",JSON.stringify(a))},fetchNote:function(t,e){var n=t.commit,a=t.getters,o=a.getNoteById(+e);if(o)return n("SET_NOTE",o)},saveNote:function(t,e){t.commit;for(var n=e.note,a=e.id,o=JSON.parse(localStorage.getItem("notes")),r=0;r<o.length;r++)o[r].id===a&&(o[r]=n);localStorage.setItem("notes",JSON.stringify(o))}},xt={getNotes:function(t){return t.notes},getCurrentNote:function(t){return t.note},getNoteById:function(t){return function(e){return t.notes.find((function(t){return t.id===e}))}},getRecentNotes:function(t){var e,n=t.recentNotes,a=[],o=Object(P["a"])(t.notes);try{for(o.s();!(e=o.n()).done;){var r=e.value;n.includes(r.id)&&a.push(r)}}catch(i){o.e(i)}finally{o.f()}return a}};o["a"].use(T["a"]);var wt,Ct,St,It,Vt,Et,Tt,Pt,$t,At,Rt,Bt,Jt,Lt=new T["a"].Store({modules:{note:a}}),zt=(wt=Object(E["a"])({}),Ct=Object(V["b"])("getRecentNotes"),St=Object(V["b"])("getNotes"),It=Object(V["b"])("getCurrentNote"),Vt=Object(V["a"])("createNote"),Et=Object(V["a"])("fetchNotes"),wt((Pt=function(t){Object(w["a"])(n,t);var e=Object(C["a"])(n);function n(){var t;Object(_["a"])(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o)),Object(S["a"])(Object(x["a"])(t),"selectedItem",0),Object(S["a"])(Object(x["a"])(t),"items",[{text:"Dashboard",icon:"mdi-home",route:{name:"Dashboard"}},{text:"Editor",icon:"mdi-file-cad",route:{name:"Editor",params:{id:"0"}}}]),Object(S["a"])(Object(x["a"])(t),"snackbar",!1),Object(y["a"])(Object(x["a"])(t),"recentNotes",$t,Object(x["a"])(t)),Object(y["a"])(Object(x["a"])(t),"notes",At,Object(x["a"])(t)),Object(y["a"])(Object(x["a"])(t),"note",Rt,Object(x["a"])(t)),Object(y["a"])(Object(x["a"])(t),"createNote",Bt,Object(x["a"])(t)),Object(y["a"])(Object(x["a"])(t),"fetchNotes",Jt,Object(x["a"])(t)),t}return Object(k["a"])(n,[{key:"createFile",value:function(){this.snackbar=!0,Lt.dispatch("createNote")}},{key:"navigate",value:function(t,e){var n=this;if(this.$route.name.match(t.route.name))return setTimeout((function(){return n.selectedItem=e}));if("Editor"===t.route.name){var a=null;this.notes.length>0&&(a=this.notes[0].id),this.recentNotes.length>0&&(a=this.recentNotes[0].id),this.note.id&&(a=this.note.id),a?this.$router.push({name:"Editor",params:{id:a}}):this.createNote().then((function(){n.fetchNotes().then((function(){return n.navigate(t,e)}))}))}else this.$router.push(t.route)}}]),n}(E["b"]),$t=Object(I["a"])(Pt.prototype,"recentNotes",[Ct],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),At=Object(I["a"])(Pt.prototype,"notes",[St],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Rt=Object(I["a"])(Pt.prototype,"note",[It],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Bt=Object(I["a"])(Pt.prototype,"createNote",[Vt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Jt=Object(I["a"])(Pt.prototype,"fetchNotes",[Et],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Tt=Pt))||Tt),Dt=zt,Ft=n("8860"),Mt=n("da13"),Ut=n("5d23"),qt=n("1baa"),Ht=n("34c3"),Gt=n("2db4"),Kt=Object(L["a"])(Dt,j,N,!1,null,null,null),Yt=Kt.exports;D()(Kt,{VBtn:ct["a"],VIcon:K["a"],VList:Ft["a"],VListItem:Mt["a"],VListItemContent:Ut["a"],VListItemGroup:qt["a"],VListItemIcon:Ht["a"],VListItemTitle:Ut["b"],VSnackbar:Gt["a"]});var Qt=o["a"].extend({name:"App",components:{Navigation:Yt},data:function(){return{drawer:!0}}}),Wt=Qt,Xt=(n("034f"),n("7496")),Zt=n("f6c4"),te=n("f774"),ee=Object(L["a"])(Wt,m,O,!1,null,null,null),ne=ee.exports;D()(ee,{VApp:Xt["a"],VMain:Zt["a"],VNavigationDrawer:te["a"]});var ae=n("f309");o["a"].use(ae["a"]);var oe=new ae["a"]({theme:{dark:!1,themes:{dark:{primary:"#4d5c9f",background:"#1d1e23",backgroundAccent:"#1a1b1f",backgroundAccent2:"#26272d"},light:{background:"#fff",backgroundAccent:"#fbfbfb",textColor:"#29261d"}}}});n("a5d8");o["a"].config.productionTip=!1,new o["a"]({router:Nt,store:Lt,vuetify:oe,render:function(t){return t(ne)}}).$mount("#app")}});
//# sourceMappingURL=app.ecb2add9.js.map