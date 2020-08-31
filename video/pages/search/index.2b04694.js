(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{386:function(t,e,r){"use strict";var n={props:{data:{required:!0,type:Array},keywords:{required:!1,type:String,default:void 0}},data:function(){return{totalVisible:7}},computed:{imageDomain:function(){return this.$store.state.web.imageDomain}}},o=r(53),l=r(64),d=r.n(l),c=r(381),m=r(101),v=r(160),y=r(163),h=r(362),f=r(36),x=r(364),_=r(161),k=r(129),w=r(169),C=r(102),V=r(365),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"ml-0",staticStyle:{width:"100%"},attrs:{justify:"start",align:"start"}},[t._l(t.data,(function(video){return r("v-col",{key:video.id,attrs:{xl:"2",md:"3",sm:"4",cols:"6"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{staticClass:"mx-sm-3 mx-md-3 mx-lg-3 mx-xl-3 mx-1",attrs:{elevation:n?24:6,nuxt:"",link:"",to:{name:"video-type-parent-tid-id-play-line-ep",params:{parent:video.parentId,tid:video.tid,id:video.id,ep:0,line:0}}}},[r("v-img",{staticClass:"grey lighten-2 mx-auto",attrs:{alt:video.name,"aspect-ratio":"0.7",src:t.imageDomain+video.pic},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"blue darken-1"}})],1)]},proxy:!0}],null,!0)},[r("v-chip",{staticClass:"video-score",attrs:{small:"",color:"pink lighten-4","text-color":"white"}},[t._v("\n              "+t._s(video.score)+"\n            ")]),t._v(" "),r("v-chip",{staticClass:"video-note",attrs:{small:"",color:"success","text-color":"white"}},[t._v("\n              "+t._s(video.note)+"\n            ")]),t._v(" "),r("div",{staticClass:"video-info white--text"},[t.keywords?r("div",{staticClass:"mx-2 text-truncate",domProps:{innerHTML:t._s(video.name)}}):r("div",{staticClass:"mx-2 text-truncate"},[t._v("\n                "+t._s(video.name)+"\n              ")]),t._v(" "),r("div",{staticClass:"float-left mx-1"},[r("v-icon",{attrs:{color:"white",dense:""}},[t._v("\n                  mdi-clock-outline\n                ")]),t._v("\n                "+t._s(t._f("formatTime")(video.updateTime))+"\n              ")],1)])],1),t._v(" "),r("v-fade-transition",[n?r("v-overlay",{attrs:{absolute:"",color:"#036358"}},[r("v-btn",{attrs:{color:"orange",icon:"",large:""}},[r("v-icon",{attrs:{large:""}},[t._v("\n                  mdi-play\n                ")])],1)],1):t._e()],1)],1)]}}],null,!0)})],1)})),t._v(" "),0===t.data.length&&t.keywords?[r("div",{staticClass:"px-4 my-4"},[r("v-alert",{attrs:{type:"warning",dense:"",outlined:""}},[t._v("\n        没有"),r("span",{staticStyle:{color:"red"}},[t._v(t._s(t.keywords))]),t._v(" 的搜索结果！\n      ")])],1)]:t._e()],2)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VAlert:c.a,VBtn:m.a,VCard:v.a,VChip:y.a,VCol:h.a,VFadeTransition:f.d,VHover:x.a,VIcon:_.a,VImg:k.a,VOverlay:w.a,VProgressCircular:C.a,VRow:V.a})},391:function(t,e,r){"use strict";r(33),r(42),r(13);var n={props:{pages:{required:!0,type:Number},tid:{required:!1,type:Number,default:0},parentId:{required:!1,type:Number,default:0},order:{required:!1,type:Number,default:0},lang:{required:!1,type:String,default:void 0},year:{required:!1,type:String,default:void 0},area:{required:!1,type:String,default:void 0},keywords:{required:!1,type:String,default:void 0},current:{required:!0,type:Number,default:1}},computed:{pageList:function(){return Array.from(Array(this.pages),(function(t,e){return e+1}))},toPage:function(t){return function(t){return this.keywords?{name:"search",query:{page:t,keywords:this.keywords,tid:this.tid}}:{name:"video-type-parent-tid-page-page",params:{parent:this.parentId,tid:this.tid,page:t},query:{year:this.year,lang:this.lang,area:this.area,order:this.order}}}}}},o=r(53),l=r(64),d=r.n(l),c=r(101),m=r(103),v=r(52),y=r(23),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-3  text-decoration-none"},[r("div",{staticClass:"d-flex"},[r("v-btn",{staticClass:"mx-2",attrs:{color:"blue darken-1",exact:"",disabled:1===t.current,to:t.toPage(t.current-1),outlined:""}},[t._v("\n      上一页\n    ")]),t._v(" "),r("v-select",{staticClass:"mx-2",staticStyle:{flex:"1"},attrs:{dense:"",items:t.pageList,outlined:""},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[r("v-list-item",{staticClass:"my-1",attrs:{block:"",to:t.toPage(n),nuxt:"",link:"",exact:""}},[r("v-list-item-content",[r("v-list-item-title",[t._v("\n              第"+t._s(n)+"页\n            ")])],1)],1)]}}]),model:{value:t.current,callback:function(e){t.current=e},expression:"current"}}),t._v(" "),r("v-btn",{staticClass:"mx-2",attrs:{color:"blue darken-1",exact:"",disabled:t.current===t.pages,to:t.toPage(t.current+1),outlined:""}},[t._v("\n      下一页\n    ")])],1)])}),[],!1,null,null,null);e.a=component.exports;d()(component,{VBtn:c.a,VListItem:m.a,VListItemContent:v.a,VListItemTitle:v.c,VSelect:y.a})},402:function(t,e,r){"use strict";r.r(e);r(13),r(84);var n=r(26),o=r(386),l=r(391),d=r(179),video=r(180),c={components:{Erro:d.a,VideoList:o.a,MPagination:l.a},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.query,n={tid:Number(r.tid)?Number(r.tid):0,page:Number(r.page)?Number(r.page):1,keywords:r.keywords},e.next=4,Object(video.d)(t.$axios,n);case 4:o=e.sent,data=o.data,t.data=data,t.pageQuery=n,t.breadcrumbs=[{text:"主页",disabled:!1,to:"/",nuxt:!0,link:!0},{text:"搜索",disabled:!0,to:"/search",nuxt:!0,link:!0}],t.title=n.keywords+"免费高清在线观看 - 花园tv";case 10:case"end":return e.stop()}}),e)})))()},data:function(){return{data:{},pageQuery:{},breadcrumbs:[],title:"",tab:0}},computed:{imageDomain:function(){return this.$store.state.web.imageDomain},menus:function(){return this.$store.state.web.menus}},watch:{"$route.query":function(t,e){this.$fetch()}},methods:{toPage:function(t){this.$router.push({name:"search",query:{keywords:this.pageQuery.keywords,page:t,tid:this.pageQuery.tid}})}},head:function(){return{title:this.title}}},m=r(53),v=r(64),y=r.n(v),h=r(378),f=r(101),x=r(160),_=r(165),k=r(161),w=r(367),C=r(366),V=r(368),S=r(382),$=r(377),I=r(226),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-skeleton-loader",{staticClass:"mx-auto mt-lg-4 mt-md-4",staticStyle:{height:"100%"},attrs:{"max-width":"1400px",loading:t.$fetchState.pending,transition:"scale-transition",type:"image"}},[t.$fetchState.error?r("erro",{staticClass:"mx-auto",attrs:{"max-width":"1400px",message:t.$fetchState.error.message}}):r("v-card",{staticClass:"mx-auto",attrs:{height:"100%","max-width":"1400px"}},[r("v-breadcrumbs",{staticClass:"hidden-sm-and-down",attrs:{items:t.breadcrumbs}}),t._v(" "),r("v-tabs",{attrs:{"show-arrows":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.menus,(function(e,n){return r("v-tab",{key:n},[r("v-icon",[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.name)+"\n      ")],1)})),1),t._v(" "),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.menus,(function(e,n){return r("v-tab-item",{key:n},[null==e.children?[r("v-btn",{staticClass:"my-2 ml-4",attrs:{color:e.id===t.pageQuery.tid?"light-green":"blue darken-1",small:"",exact:"",nuxt:"",link:"",to:{name:"search",query:{tid:e.id,page:1,keywords:t.pageQuery.keywords}},outlined:""}},[t._v("\n            "+t._s(e.name)+"\n          ")])]:void 0,t._v(" "),t._l(e.children,(function(e){return r("v-btn",{key:e.id,staticClass:"my-2 ml-4",attrs:{color:e.id===t.pageQuery.tid?"light-green":"blue darken-1",small:"",exact:"",nuxt:"",link:"",to:{name:"search",query:{tid:e.id,page:1,keywords:t.pageQuery.keywords}},outlined:""}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))],2)})),1),t._v(" "),r("v-divider"),t._v(" "),r("video-list",{attrs:{data:t.data.records,keywords:t.pageQuery.keywords}}),t._v(" "),t.data.pages>1?[r("v-pagination",{staticClass:"mt-12 px-3 hidden-xs-only",attrs:{length:t.data.pages,"total-visible":7,circle:""},on:{input:t.toPage},model:{value:t.data.current,callback:function(e){t.$set(t.data,"current",e)},expression:"data.current"}}),t._v(" "),t.data.pages>1?r("m-pagination",{staticClass:"hidden-sm-and-up",attrs:{tid:t.pageQuery.tid,current:t.data.current,pages:t.data.pages,keywords:t.pageQuery.keywords}}):t._e()]:t._e()],2)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{VBreadcrumbs:h.a,VBtn:f.a,VCard:x.a,VDivider:_.a,VIcon:k.a,VPagination:w.a,VSkeletonLoader:C.a,VTab:V.a,VTabItem:S.a,VTabs:$.a,VTabsItems:I.a})}}]);