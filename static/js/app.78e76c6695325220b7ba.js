webpackJsonp([2],{LlWp:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),o=n("zL8q"),s=n.n(o),a=n("NYxO"),r=n("mtWM"),c=n.n(r),u=n("/ocq"),d=n("rxKx"),f=n.n(d),l={render:function(){var e=this.$createElement;return(this._self._c||e)("header",{staticClass:"v-header"},[this._v("\n\t\theader\n    ")])},staticRenderFns:[]};var m=n("VU/8")({name:"v-header",data:function(){return{}},beforeCreate:function(){},mounted:function(){},created:function(){},watch:{},computed:{},methods:{submit:function(){}}},l,!1,function(e){n("TWcL")},"data-v-82edd1c6",null).exports,v=n("pFYg"),h=n.n(v),p=n("//Fk"),b=n.n(p),x={name:"sidebar",data:function(){return{isMouseLeave:!1,navs:""}},beforeCreate:function(){},created:function(){this.getMenuJson("navs.json")},mounted:function(){var e=this;if("mobile"===this.device){var t=this.$refs.sidebar;new f.a(t).on("swipeleft",function(t){e.$emit("sidebarHide")})}},watch:{},computed:{device:function(){return this.$store.state.device}},methods:{filterLi:function(e){return e.match(/\d+\. ?\[.+?\]\(#.+?\)/g)},processLi:function(e){var t=e.match(/\[(.*?)\]\(#(.*?)\)/);return t&&(t={router:t[2],value:t[1]}),t},getMenuJson:function(e){var t=this;this.$axios.get("./static/"+e).then(function(e){t.processMenu(e.data)})},processMenu:function(e){var t=this;b.a.all(e.filter(function(e){return"folder"===e.type}).map(function(e){return t.$axios.get("./static/docs/"+e.value+"/sidebar.md").then(function(t){return{menu:e.value,submenus:t}},function(){return"err"})})).then(function(e){e=e.filter(function(e){return"object"===(void 0===e?"undefined":h()(e))}).map(function(e){var n=t.filterLi(e.submenus.data).map(function(e){return t.processLi(e)});return{name:e.menu,submenus:n}}),t.navs=e})},handleOpen:function(e,t){},handleClose:function(e,t){},select:function(e,t){this.$store.commit("activeNav",e)},mouseenter:function(e){this.isMouseLeave=!1},mouseleave:function(e){this.isMouseLeave=!0}}},w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"sidebar",staticClass:"sidebar",class:{mouseleave:e.isMouseLeave},on:{mouseenter:e.mouseenter,mouseleave:e.mouseleave}},[n("el-menu",{staticStyle:{"min-height":"100%"},attrs:{"default-active":this.$route.path,"active-text-color":"#409eff",router:!0},on:{open:e.handleOpen,close:e.handleClose,select:e.select}},e._l(e.navs,function(t,i){return n("el-submenu",{key:t.name,attrs:{index:i+""}},[n("template",{slot:"title"},[n("span",[e._v(e._s(t.name))])]),e._v(" "),e._l(t.submenus,function(i){return n("el-menu-item",{key:i.value,attrs:{index:"/docs/"+encodeURIComponent(t.name+"/"+i.router)}},[e._v(e._s(i.value))])})],2)}))],1)},staticRenderFns:[]};var _={name:"App",components:{vHeader:m,sidebar:n("VU/8")(x,w,!1,function(e){n("LlWp")},"data-v-46a99f2f",null).exports},data:function(){return{xs:14,sm:6,md:4,sidebarShow:!0,width:""}},beforeCreate:function(){},created:function(){var e=this,t=document.body.clientWidth;t<768?this.$store.commit("device","mobile"):t>=768&&this.$store.commit("device","pc"),window.onresize=function(){console.log(document.body.clientWidth),e.width=document.body.clientWidth}},mounted:function(){var e=this;if("mobile"===this.device){var t=this.$refs.content.$el;new f.a(t).on("swiperight",function(t){e.sidebarShow=!0})}},computed:{device:function(){return this.$store.state.device}},methods:{sidebarHide:function(){this.sidebarShow=!1}}},$={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",[n("div",{staticStyle:{position:"fixed",bottom:"0",right:"0","background-color":"red",color:"#fff"}},[e._v(e._s(e.width))]),e._v(" "),n("el-col",{staticClass:"sidebar-box",class:{"sidebar-show":e.sidebarShow},attrs:{xs:e.xs,sm:e.sm,md:e.md}},[n("sidebar",{on:{sidebarHide:e.sidebarHide}})],1),e._v(" "),n("el-col",{attrs:{xs:{span:24,offset:0},sm:{span:24-e.sm,offset:e.sm},md:{span:24-e.md,offset:e.md}}},[n("el-container",[n("el-header",[n("vHeader")],1),e._v(" "),n("el-main",{ref:"content",attrs:{id:"content"}},[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var L=n("VU/8")(_,$,!1,function(e){n("ZoDj")},null,null).exports;i.default.use(u.a);var g=new u.a({routes:[{path:"/",component:L,redirect:"/docs",children:[{path:"/docs",name:"note",component:function(e){n.e(0).then(function(){e(n("CxOa"))}.bind(null,n)).catch(n.oe)}},{path:"/docs/:dir",name:"docs",component:function(e){n.e(0).then(function(){e(n("CxOa"))}.bind(null,n)).catch(n.oe)}}]}]});n("q6Y6"),n("tvR6"),n("tNeA"),n("rvxr"),n("txDc");i.default.use(s.a),i.default.prototype.$axios=c.a,i.default.use(a.a);var C=new a.a.Store({state:{activeNav:"",device:"pc"},mutations:{activeNav:function(e,t){e.activeNav=t},device:function(e,t){e.device=t}},actions:{}});i.default.config.productionTip=!1,new i.default({router:g,store:C}).$mount("#app")},TWcL:function(e,t){},ZoDj:function(e,t){},q6Y6:function(e,t){},rvxr:function(e,t){},tNeA:function(e,t){},tvR6:function(e,t){},txDc:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.78e76c6695325220b7ba.js.map