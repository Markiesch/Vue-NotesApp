(function(t){function e(e){for(var a,r,c=e[0],s=e[1],l=e[2],v=0,d=[];v<c.length;v++)r=c[v],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("85ec")},"85ec":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"state",(function(){return xt})),n.d(a,"mutations",(function(){return wt})),n.d(a,"actions",(function(){return St})),n.d(a,"getters",(function(){return Ct}));n("e623"),n("e379"),n("5dc8"),n("37e1");var o,i,r,c,s,l,u,v,d,f=n("2b0e"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{staticClass:"nav fill-height",attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("Navigation")],1),n("v-main",{staticClass:"background"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{scopedSlots:t._u([{key:"default",fn:function(t){t.Component}}])})],1)],1)],1)},h=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list",{attrs:{flat:""}},[n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},[t._l(t.items,(function(e,a){return n("v-list-item",{key:a,on:{click:function(n){return t.navigate(e,a)}}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),n("v-list-item",{on:{click:t.createFile}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-plus")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Create File")])],1)],1)],2)],1),n("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" Successfully created a new Note! "),[n("v-btn",{on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])]],2)],1)},m=[],g=n("6b7b"),O=n("d4ec"),N=n("bee2"),j=n("257e"),y=n("262e"),k=n("2caf"),_=n("ade3"),x=n("63ae"),w=(n("f890"),n("99af"),n("ac1f"),n("466d"),n("b0c0"),n("4bb5")),S=n("1b40"),C=n("2f62"),I=n("b85c"),V=(n("d3b7"),n("25f0"),n("a434"),n("7db0"),n("caad"),n("2532"),n("8c4f")),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{color:"primary"}},[t.recentNotes.length>0?n("v-container",[n("h1",[t._v("Recent Notes")]),n("v-row",t._l(t.recentNotes,(function(e){return n("v-col",{key:e.id,staticClass:"pointer",attrs:{lg:"3"},on:{click:function(n){return t.openNote(e.id)}}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var o=a.hover;return[n("v-card",{staticClass:"backgroundAccent",class:{backgroundAccent2:o},attrs:{ripple:!1,outlined:""},on:{contextmenu:function(n){return t.show(n,e)}}},[n("v-card-title",[t._v(t._s(e.title))]),n("v-card-subtitle",[t._v(t._s(e.text))])],1)]}}],null,!0)})],1)})),1)],1):t._e(),n("v-container",{staticClass:"mt-6"},[n("v-badge",{attrs:{content:t.note.notes.length}},[n("h1",{staticClass:"primaryText"},[t._v("All notes")])]),t.note.length<1?n("p",[t._v("It looks like you do not have any files yet!")]):t._e(),n("v-row",[t._l(t.note.notes,(function(e){return n("v-col",{key:e.id,staticClass:"pointer",attrs:{lg:"3"},on:{click:function(n){return t.openNote(e.id)}}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var o=a.hover;return[n("v-card",{staticClass:"backgroundAccent",class:{backgroundAccent2:o},attrs:{outlined:""},on:{contextmenu:function(n){return t.show(n,e)}}},[n("v-card-title",[t._v(t._s(e.title))]),n("v-card-subtitle",[t._v(t._s(e.text))])],1)]}}],null,!0)})],1)})),n("v-col",{staticClass:"pointer",attrs:{lg:"3"},on:{click:t.createNote}},[n("v-card",{attrs:{outlined:""}},[n("v-card-title",[n("v-icon",[t._v("mdi-plus")]),t._v("Create a new Note")],1),n("v-card-subtitle",[t._v("Click to create a new note")])],1)],1)],2)],1),n("v-menu",{attrs:{"position-x":t.x,"position-y":t.y,absolute:"","offset-y":""},model:{value:t.showMenu,callback:function(e){t.showMenu=e},expression:"showMenu"}},[n("v-list",{attrs:{dense:"",nav:""}},[n("v-list-item",{attrs:{link:""},on:{click:function(e){return t.openNote(t.clickedNote.id)}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-pen")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Edit")])],1)],1),n("v-list-item",{attrs:{link:""},on:{click:t.toggleFavorite}},[n("v-list-item-icon",[n("v-icon",{attrs:{color:t.clickedNote.favorite?"error":""}},[t._v(t._s(t.clickedNote.favorite?"mdi-heart":"mdi-heart-plus"))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Toggle Favorite")])],1)],1),n("v-list-item",{attrs:{link:""},on:{click:t.deleteNote}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-trash-can")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Delete Note")])],1)],1)],1)],1)],1)},E=[],J=(o=Object(S["a"])({components:{},beforeRouteEnter:function(t,e,n){Ft.dispatch("getRecentNotes"),Ft.dispatch("fetchNotes").then((function(){n()}))}}),i=Object(w["b"])("getRecentNotes"),r=Object(w["c"])("note"),c=Object(w["a"])("createNote"),o((l=function(t){Object(y["a"])(n,t);var e=Object(k["a"])(n);function n(){var t;Object(O["a"])(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o)),Object(_["a"])(Object(j["a"])(t),"showMenu",!1),Object(_["a"])(Object(j["a"])(t),"x",0),Object(_["a"])(Object(j["a"])(t),"y",0),Object(_["a"])(Object(j["a"])(t),"clickedNote",{title:"",text:"",favorite:!1,deleted:!1,id:1}),Object(g["a"])(Object(j["a"])(t),"recentNotes",u,Object(j["a"])(t)),Object(g["a"])(Object(j["a"])(t),"note",v,Object(j["a"])(t)),Object(g["a"])(Object(j["a"])(t),"createNote",d,Object(j["a"])(t)),t}return Object(N["a"])(n,[{key:"openNote",value:function(t){this.$router.push("edit/"+t)}},{key:"show",value:function(t,e){var n=this;t.preventDefault(),this.clickedNote=e,this.showMenu=!1,this.x=t.clientX,this.y=t.clientY,this.$nextTick((function(){return n.showMenu=!0}))}},{key:"toggleFavorite",value:function(){var t=this.clickedNote,e=t.id;this.clickedNote.favorite=!t.favorite,Ft.dispatch("saveNote",{note:t,id:e})}},{key:"deleteNote",value:function(){var t=this.clickedNote.id;Ft.dispatch("deleteNote",t)}}]),n}(S["b"]),u=Object(x["a"])(l.prototype,"recentNotes",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=Object(x["a"])(l.prototype,"note",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=Object(x["a"])(l.prototype,"createNote",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=l))||s),$=J,L=n("2877"),R=n("6544"),A=n.n(R),M=n("4ca6"),z=n("b0af"),B=n("99d9"),D=n("62ad"),F=n("a523"),P=n("ce87"),U=n("132d"),H=n("8860"),Y=n("da13"),q=n("5d23"),G=n("34c3"),K=n("e449"),X=n("0fd9b"),Q=Object(L["a"])($,T,E,!1,null,null,null),W=Q.exports;A()(Q,{VBadge:M["a"],VCard:z["a"],VCardSubtitle:B["a"],VCardTitle:B["b"],VCol:D["a"],VContainer:F["a"],VHover:P["a"],VIcon:U["a"],VList:H["a"],VListItem:Y["a"],VListItemContent:q["a"],VListItemIcon:G["a"],VListItemTitle:q["b"],VMenu:K["a"],VRow:X["a"]});var Z,tt,et,nt,at,ot,it,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-toolbar",{attrs:{fixed:""}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-format-align-left")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-format-align-center")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-format-align-justify")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-format-align-right")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-palette")])],1),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:t.deleteNote}},[n("v-icon",[t._v("mdi-trash-can")])],1),n("v-btn",{attrs:{color:t.note.favorite?"error":"",icon:""},on:{click:t.toggleFavorite}},[n("v-icon",[t._v(t._s(t.note.favorite?"mdi-heart":"mdi-heart-plus"))])],1)],1),n("v-container",[n("v-text-field",{attrs:{autocomplete:"off",label:"Title",solo:"",contenteditable:"true"},on:{input:function(e){return t.setUnsavedChanges()}},model:{value:t.note.title,callback:function(e){t.$set(t.note,"title",e)},expression:"note.title"}}),n("v-textarea",{attrs:{label:"Text",solo:""},on:{input:function(e){return t.setUnsavedChanges()}},model:{value:t.note.text,callback:function(e){t.$set(t.note,"text",e)},expression:"note.text"}}),n("v-btn",{attrs:{disabled:!t.unsavedChanges,loading:t.loading,color:"primary"},on:{click:t.saveNote}},[t._v("Save")])],1)],1)},ct=[],st=(Z=Object(S["a"])({props:{id:{default:1}},beforeRouteEnter:function(t,e,n){Ft.dispatch("fetchNotes"),Ft.dispatch("fetchNote",t.params.id),n()},beforeRouteLeave:function(t,e,n){if(!this.unsavedChanges)return n();var a=window.confirm("Do you really want to leave? You have unsaved changes!");if(a)return n();n(!1)}}),tt=Object(w["b"])("getNoteById"),et=Object(w["a"])("deleteNote"),Z((at=function(t){Object(y["a"])(n,t);var e=Object(k["a"])(n);function n(){var t;Object(O["a"])(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o)),Object(_["a"])(Object(j["a"])(t),"note",{title:"",text:"",favorite:!1,deleted:!1,id:0}),Object(_["a"])(Object(j["a"])(t),"startingNote",{title:"",text:"",favorite:!1}),Object(_["a"])(Object(j["a"])(t),"unsavedChanges",!1),Object(_["a"])(Object(j["a"])(t),"loading",!1),Object(g["a"])(Object(j["a"])(t),"getNoteById",ot,Object(j["a"])(t)),Object(g["a"])(Object(j["a"])(t),"delNote",it,Object(j["a"])(t)),t}return Object(N["a"])(n,[{key:"deleteNote",value:function(){this.delNote(+this.id)}},{key:"saveNote",value:function(){var t=this;this.loading=!0;var e=this.note,n=this.note.id;Ft.dispatch("saveNote",{note:e,id:n}).then((function(){t.loading=!1,t.unsavedChanges=!1,t.startingNote.title=e.title,t.startingNote.text=e.text,t.startingNote.favorite=e.favorite}))}},{key:"toggleFavorite",value:function(){this.note.favorite=!this.note.favorite,this.setUnsavedChanges()}},{key:"setUnsavedChanges",value:function(){this.unsavedChanges=this.note.title!==this.startingNote.title||this.note.text!==this.startingNote.text||this.note.favorite!==this.startingNote.favorite}},{key:"created",value:function(){var t=this;window.addEventListener("keydown",(function(e){"s"===e.key.toLowerCase()&&!0===e.ctrlKey&&(e.preventDefault(),t.unsavedChanges&&t.saveNote())}));try{var e=parseInt(this.id),n=this.getNoteById(e);if(!n)return;this.note=n,this.startingNote.title=n.title,this.startingNote.text=n.text,this.startingNote.favorite=n.favorite,Ft.dispatch("addRecent",e)}catch(a){this.$router.push("/not-found"),console.warn(a)}}}]),n}(S["b"]),ot=Object(x["a"])(at.prototype,"getNoteById",[tt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),it=Object(x["a"])(at.prototype,"delNote",[et],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),nt=at))||nt),lt=st,ut=n("8336"),vt=n("2fa4"),dt=n("8654"),ft=n("a844"),bt=n("71d9"),ht=Object(L["a"])(lt,rt,ct,!1,null,null,null),pt=ht.exports;A()(ht,{VBtn:ut["a"],VContainer:F["a"],VIcon:U["a"],VSpacer:vt["a"],VTextField:dt["a"],VTextarea:ft["a"],VToolbar:bt["a"]});var mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"text-center d-flex justify-center align-center fill-height flex-column"},[n("h1",[t._v("The page you requested was not found")]),n("v-btn",{staticClass:"primary mt-5",on:{click:function(e){return t.$router.push("/")}}},[t._v("Home")])],1)},gt=[],Ot={},Nt=Object(L["a"])(Ot,mt,gt,!1,null,null,null),jt=Nt.exports;A()(Nt,{VBtn:ut["a"],VContainer:F["a"]}),f["a"].use(V["a"]);var yt=[{path:"/",name:"Dashboard",component:W},{path:"/edit/:id",name:"Editor",component:pt,props:!0},{path:"*",name:"not-found",component:jt}],kt=new V["a"]({mode:"history",routes:yt}),_t=kt,xt={notes:[],recentNotes:[],note:{}},wt={SET_NOTES:function(t,e){t.notes=e},SET_NOTE:function(t,e){t.note=e}},St={createNote:function(t){var e=t.commit,n=JSON.parse(localStorage.getItem("notes"))||[],a=0;if(n.length>0){var o,i=Object(I["a"])(n);try{for(i.s();!(o=i.n()).done;){var r=o.value;r.id>=a&&(a=r.id+1)}}catch(s){i.e(s)}finally{i.f()}}var c={title:"New Note",text:"Description",favorite:!1,deleted:!1,id:a};n.push(c),localStorage.setItem("notes",JSON.stringify(n)),e("SET_NOTES",n),_t.push({name:"Editor",params:{id:a.toString()}}).then((function(t){}))},fetchNotes:function(t){var e=t.commit,n=JSON.parse(localStorage.getItem("notes"))||[];e("SET_NOTES",n)},getRecentNotes:function(t){var e=t.state;e.recentNotes=JSON.parse(localStorage.getItem("recentNotes"))||[]},addRecent:function(t,e){var n=t.state,a=(t.commit,JSON.parse(localStorage.getItem("recentNotes"))||[]),o=a.indexOf(e);o>-1&&a.splice(o,1),a.push(e),n.recentNotes=a,localStorage.setItem("recentNotes",JSON.stringify(a))},fetchNote:function(t,e){var n=t.commit,a=t.getters,o=a.getNoteById(+e);if(o)return n("SET_NOTE",o)},saveNote:function(t,e){t.commit;for(var n=e.note,a=e.id,o=JSON.parse(localStorage.getItem("notes")),i=0;i<o.length;i++)o[i].id===a&&(o[i]=n);localStorage.setItem("notes",JSON.stringify(o))},deleteNote:function(t,e){var n=t.dispatch,a=JSON.parse(localStorage.getItem("notes"))||[];if(!(a.length<1)){for(var o=0;o<a.length;o++){var i=a[o];i.id===e&&a.splice(o,1)}if(localStorage.setItem("notes",JSON.stringify(a)),n("fixRecentNotes"),"Dashboard"===_t.history.current.name)return _t.go();_t.push("/").then((function(){}))}},fixRecentNotes:function(){var t=JSON.parse(localStorage.getItem("recentNotes"))||[],e=JSON.parse(localStorage.getItem("notes"))||[];if(!(t.length<1)){for(var n=0;n<t.length;n++){var a,o=t[n],i=Object(I["a"])(e);try{for(i.s();!(a=i.n()).done;){var r=a.value;o!==r.id&&t.splice(n,1)}}catch(c){i.e(c)}finally{i.f()}}localStorage.setItem("recentNotes",JSON.stringify(t))}}},Ct={getNotes:function(t){return t.notes},getCurrentNote:function(t){return t.note},getNoteById:function(t){return function(e){return t.notes.find((function(t){return t.id===e}))}},getRecentNotes:function(t){var e,n=t.recentNotes,a=[],o=Object(I["a"])(t.notes);try{for(o.s();!(e=o.n()).done;){var i=e.value;n.includes(i.id)&&a.push(i)}}catch(r){o.e(r)}finally{o.f()}return a}};f["a"].use(C["a"]);var It,Vt,Tt,Et,Jt,$t,Lt,Rt,At,Mt,zt,Bt,Dt,Ft=new C["a"].Store({modules:{note:a}}),Pt=(It=Object(S["a"])({}),Vt=Object(w["b"])("getRecentNotes"),Tt=Object(w["b"])("getNotes"),Et=Object(w["b"])("getCurrentNote"),Jt=Object(w["a"])("createNote"),$t=Object(w["a"])("fetchNotes"),It((Rt=function(t){Object(y["a"])(n,t);var e=Object(k["a"])(n);function n(){var t;Object(O["a"])(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=e.call.apply(e,[this].concat(o)),Object(_["a"])(Object(j["a"])(t),"selectedItem",0),Object(_["a"])(Object(j["a"])(t),"items",[{text:"Dashboard",icon:"mdi-home",route:{name:"Dashboard"}},{text:"Editor",icon:"mdi-file-cad",route:{name:"Editor",params:{id:"0"}}}]),Object(_["a"])(Object(j["a"])(t),"snackbar",!1),Object(g["a"])(Object(j["a"])(t),"recentNotes",At,Object(j["a"])(t)),Object(g["a"])(Object(j["a"])(t),"notes",Mt,Object(j["a"])(t)),Object(g["a"])(Object(j["a"])(t),"note",zt,Object(j["a"])(t)),Object(g["a"])(Object(j["a"])(t),"createNote",Bt,Object(j["a"])(t)),Object(g["a"])(Object(j["a"])(t),"fetchNotes",Dt,Object(j["a"])(t)),t}return Object(N["a"])(n,[{key:"createFile",value:function(){this.snackbar=!0,Ft.dispatch("createNote")}},{key:"navigate",value:function(t,e){var n=this;if(this.$route.name.match(t.route.name))return setTimeout((function(){return n.selectedItem=e}));if("Editor"===t.route.name){var a=null;this.notes.length>0&&(a=this.notes[0].id),this.recentNotes.length>0&&(a=this.recentNotes[0].id),this.note.id&&(a=this.note.id),a?this.$router.push({name:"Editor",params:{id:a}}):this.createNote().then((function(){n.fetchNotes().then((function(){return n.navigate(t,e)}))}))}else this.$router.push(t.route)}}]),n}(S["b"]),At=Object(x["a"])(Rt.prototype,"recentNotes",[Vt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Mt=Object(x["a"])(Rt.prototype,"notes",[Tt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),zt=Object(x["a"])(Rt.prototype,"note",[Et],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Bt=Object(x["a"])(Rt.prototype,"createNote",[Jt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Dt=Object(x["a"])(Rt.prototype,"fetchNotes",[$t],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Lt=Rt))||Lt),Ut=Pt,Ht=n("1baa"),Yt=n("2db4"),qt=Object(L["a"])(Ut,p,m,!1,null,null,null),Gt=qt.exports;A()(qt,{VBtn:ut["a"],VIcon:U["a"],VList:H["a"],VListItem:Y["a"],VListItemContent:q["a"],VListItemGroup:Ht["a"],VListItemIcon:G["a"],VListItemTitle:q["b"],VSnackbar:Yt["a"]});var Kt=f["a"].extend({name:"App",components:{Navigation:Gt},data:function(){return{drawer:!0}}}),Xt=Kt,Qt=(n("034f"),n("7496")),Wt=n("f6c4"),Zt=n("f774"),te=Object(L["a"])(Xt,b,h,!1,null,null,null),ee=te.exports;A()(te,{VApp:Qt["a"],VMain:Wt["a"],VNavigationDrawer:Zt["a"]});var ne=n("f309");f["a"].use(ne["a"]);var ae=new ne["a"]({theme:{dark:!1,themes:{dark:{primary:"#4d5c9f",background:"#1d1e23",backgroundAccent:"#1a1b1f",backgroundAccent2:"#26272d"},light:{background:"#fff",backgroundAccent:"#fbfbfb",textColor:"#29261d"}}}});f["a"].config.productionTip=!1,new f["a"]({router:_t,store:Ft,vuetify:ae,render:function(t){return t(ee)}}).$mount("#app")}});
//# sourceMappingURL=app.fd69bd38.js.map