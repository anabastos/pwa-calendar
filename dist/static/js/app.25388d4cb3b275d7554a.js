webpackJsonp([6],[,,,function(t,e){},,function(t,e,n){function a(t){n(11)}var r=n(2)(n(9),n(21),a,null,null);t.exports=r.exports},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),r=n(7),o=n(6),i=n.n(o),s=n(4),l=n.n(s),u=n(3),c=(n.n(u),n(5)),d=n.n(c),f=function(){return n.e(2).then(n.bind(null,17))},m=function(){return n.e(3).then(n.bind(null,18))},v=function(){return n.e(0).then(n.bind(null,20))},p=function(){return n.e(1).then(n.bind(null,19))};a.default.component("full-calendar",l.a),[r.a,i.a].map(function(t){return a.default.use(t)});var h=new r.a({mode:"history",routes:[{path:"/calendar",component:f},{path:"/calendar/new",component:m},{path:"/tasks",component:v},{path:"/tasks/new",component:p},{path:"*",component:f}]});a.default.material.registerTheme("default",{primary:"deep-orange",accent:"blue-grey",warn:"blue-grey",background:"white"}),new a.default({router:h,render:function(t){return t(d.a)}}).$mount("#app")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(16),r=n.n(a);e.default={name:"app",components:{IGHeader:r.a,IGFooter:function(){return n.e(4).then(n.bind(null,26))}},data:function(){return{msg:"Bem vindo ao seu calendário"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{toggleLeftSidenav:function(){this.$refs.leftSidenav.toggle()},toggleRightSidenav:function(){this.$refs.rightSidenav.toggle()},closeRightSidenav:function(){this.$refs.rightSidenav.close()}}}},function(t,e){},function(t,e){},,,,function(t,e,n){function a(t){n(12)}var r=n(2)(n(10),n(22),a,null,null);t.exports=r.exports},,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",attrs:{id:"app"}},[n("IGHeader"),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-toolbar",[n("md-button",{staticClass:"md-icon-button",on:{click:t.toggleLeftSidenav}},[n("md-icon",[t._v("menu")])],1),t._v(" "),n("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[t._v("Meu calendário")])],1),t._v(" "),n("md-sidenav",{ref:"leftSidenav",staticClass:"md-left"},[n("md-toolbar",{staticClass:"md-large"},[n("div",{staticClass:"md-toolbar-container"},[n("md-avatar",{staticClass:"md-avatar-icon md-large"},[n("md-icon",[t._v("calendar_today")])],1)],1)]),t._v(" "),n("md-list",[n("md-list-item",{staticClass:"item"},[n("router-link",{attrs:{to:"/"}},[n("md-icon",[t._v("bookmark")]),t._v("\n          Calendário\n      ")],1)],1),t._v(" "),n("md-list-item",{staticClass:"item"},[n("router-link",{attrs:{to:"/tasks"}},[n("md-icon",[t._v("note")]),t._v("\n          Anotações\n      ")],1)],1)],1)],1)],1)},staticRenderFns:[]}}],[8]);
//# sourceMappingURL=app.25388d4cb3b275d7554a.js.map