(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{388:function(e,t,r){"use strict";var n={props:{data:{required:!0,type:Array},keywords:{required:!1,type:String,default:void 0}},data:function(){return{totalVisible:7}},computed:{imageDomain:function(){return this.$store.state.web.imageDomain}}},o=r(53),l=r(64),d=r.n(l),c=r(101),m=r(160),v=r(163),y=r(363),f=r(36),h=r(365),x=r(161),_=r(129),k=r(169),Q=r(102),C=r(366),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"ml-0",staticStyle:{width:"100%"},attrs:{justify:"start",align:"start"}},e._l(e.data,(function(video){return r("v-col",{key:video.id,attrs:{xl:"2",md:"3",sm:"4",cols:"6"}},[r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.hover;return[r("v-card",{staticClass:"mx-sm-3 mx-md-3 mx-lg-3 mx-xl-3 mx-1",attrs:{elevation:n?24:6,nuxt:"",link:"",to:{name:"video-type-parent-tid-id-play-line-ep",params:{parent:video.parentId,tid:video.tid,id:video.id,ep:0,line:0}}}},[r("v-img",{staticClass:"grey lighten-2 mx-auto",attrs:{alt:video.name,"aspect-ratio":"0.7",src:e.imageDomain+video.pic},scopedSlots:e._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"blue darken-1"}})],1)]},proxy:!0}],null,!0)},[r("v-chip",{staticClass:"video-score",attrs:{small:"",color:"pink lighten-4","text-color":"white"}},[e._v("\n              "+e._s(video.score)+"\n            ")]),e._v(" "),r("div",{staticClass:"video-info white--text"},[e.keywords?r("div",{staticClass:"mx-2 text-truncate",domProps:{innerHTML:e._s(video.name)}}):r("div",{staticClass:"mx-2 text-truncate"},[e._v("\n                "+e._s(video.name)+"\n              ")]),e._v(" "),r("div",{staticClass:"video-note mx-2 text-truncate"},[e._v("\n                "+e._s(video.note)+"\n              ")]),e._v(" "),r("div",{staticClass:"float-left mx-1"},[r("v-icon",{attrs:{color:"white",dense:""}},[e._v("\n                  mdi-clock-outline\n                ")]),e._v("\n                "+e._s(e._f("formatTime")(video.updateTime))+"\n              ")],1)])],1),e._v(" "),r("v-fade-transition",[n?r("v-overlay",{attrs:{absolute:"",color:"#036358"}},[r("v-btn",{attrs:{color:"orange",icon:"",large:""}},[r("v-icon",{attrs:{large:""}},[e._v("\n                  mdi-play\n                ")])],1)],1):e._e()],1)],1)]}}],null,!0)})],1)})),1)}),[],!1,null,null,null);t.a=component.exports;d()(component,{VBtn:c.a,VCard:m.a,VChip:v.a,VCol:y.a,VFadeTransition:f.d,VHover:h.a,VIcon:x.a,VImg:_.a,VOverlay:k.a,VProgressCircular:Q.a,VRow:C.a})},392:function(e,t,r){"use strict";r(33),r(42),r(13);var n={props:{pages:{required:!0,type:Number},tid:{required:!1,type:Number,default:0},parentId:{required:!1,type:Number,default:0},order:{required:!1,type:Number,default:0},lang:{required:!1,type:String,default:void 0},year:{required:!1,type:String,default:void 0},area:{required:!1,type:String,default:void 0},keywords:{required:!1,type:String,default:void 0},current:{required:!0,type:Number,default:1}},computed:{pageList:function(){return Array.from(Array(this.pages),(function(e,t){return t+1}))},toPage:function(e){return function(e){return this.keywords?{name:"search",query:{page:e,keywords:this.keywords,tid:this.tid}}:{name:"video-type-parent-tid-page-page",params:{parent:this.parentId,tid:this.tid,page:e},query:{year:this.year,lang:this.lang,area:this.area,order:this.order}}}}}},o=r(53),l=r(64),d=r.n(l),c=r(101),m=r(103),v=r(52),y=r(23),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"px-3  text-decoration-none"},[r("div",{staticClass:"d-flex"},[r("v-btn",{staticClass:"mx-2",attrs:{color:"blue darken-1",exact:"",disabled:1===e.current,to:e.toPage(e.current-1),outlined:""}},[e._v("\n      上一页\n    ")]),e._v(" "),r("v-select",{staticClass:"mx-2",staticStyle:{flex:"1"},attrs:{dense:"",items:e.pageList,outlined:""},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[r("v-list-item",{staticClass:"my-1",attrs:{block:"",to:e.toPage(n),nuxt:"",link:"",exact:""}},[r("v-list-item-content",[r("v-list-item-title",[e._v("\n              第"+e._s(n)+"页\n            ")])],1)],1)]}}]),model:{value:e.current,callback:function(t){e.current=t},expression:"current"}}),e._v(" "),r("v-btn",{staticClass:"mx-2",attrs:{color:"blue darken-1",exact:"",disabled:e.current===e.pages,to:e.toPage(e.current+1),outlined:""}},[e._v("\n      下一页\n    ")])],1)])}),[],!1,null,null,null);t.a=component.exports;d()(component,{VBtn:c.a,VListItem:m.a,VListItemContent:v.a,VListItemTitle:v.c,VSelect:y.a})},406:function(e,t,r){"use strict";r.r(t);r(19),r(13),r(84);var n=r(26),o=r(388),l=r(392),d=r(179),video=r(180),c={components:{Erro:d.a,VideoList:o.a,MPagination:l.a},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,l,d,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$route,n=r.params,o=r.query,l={tid:Number(n.tid),parentId:Number(n.parent),page:Number(n.page)?Number(n.page):1,order:o.order?Number(o.order):1,lang:o.lang,area:o.area,year:o.year},t.next=4,Object(video.d)(e.$axios,l);case 4:d=t.sent,data=d.data,e.data=data,e.pageQuery=l,data.records.length>0&&(e.title=0!==l.tid?data.records[0].type:e.parentName(),e.breadcrumbs=[{text:"主页",disabled:!1,to:"/",nuxt:!0,link:!0},{text:e.title,disabled:!0,href:"/video/type/"+l.parentId+"/"+n.tid+"/page/1",nuxt:!0,link:!0}]),(0!==Number(n.tid)||o.lang||o.area||o.year)&&(e.panel=0);case 10:case"end":return t.stop()}}),t)})))()},data:function(){return{data:{},pageQuery:{},breadcrumbs:[],panel:null,title:"",langs:["国语","英语","韩语","日语","德语","其他"],orders:[{label:"更新时间",value:1},{label:"点击量",value:2},{label:"评分",value:3}]}},computed:{years:function(){for(var e=[],t=(new Date).getFullYear(),i=t-12;i<=t;i++)e.push(i);return e},imageDomain:function(){return this.$store.state.web.imageDomain},menus:function(){for(var e=Number(this.$route.params.parent),t=this.$store.state.web.menus,r=0;r<t.length;r++)if(t[r].id===e)return t[r].children?t[r].children:[];return[]}},watch:{"$route.query":function(e,t){JSON.stringify(e)!==JSON.stringify(t)&&this.$fetch()}},methods:{toPage:function(e){this.$router.push({name:"video-type-parent-tid-page-page",params:{parent:this.pageQuery.parentId,tid:this.pageQuery.tid,page:e},query:{year:this.pageQuery.year,lang:this.pageQuery.lang,area:this.pageQuery.area,order:this.pageQuery.order}})},parentName:function(){for(var e=Number(this.$route.params.parent),t=this.$store.state.web.menus,r=0;r<t.length;r++)if(t[r].id===e)return t[r].name}},head:function(){return{title:"最新"+this.title+" - 第"+this.$route.params.page+"页 - "}}},m=r(53),v=r(64),y=r.n(v),f=r(378),h=r(101),x=r(160),_=r(165),k=r(370),Q=r(371),C=r(372),V=r(373),w=r(161),S=r(368),I=r(374),$=r(367),N=r(46),P=r(177),T=r(362),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-skeleton-loader",{staticClass:"mx-auto mt-lg-4 mt-md-4",staticStyle:{height:"100%"},attrs:{"max-width":"1400px mt-lg-4 mt-md-4",loading:e.$fetchState.pending,transition:"scale-transition",type:"image"}},[e.$fetchState.error?r("erro",{staticClass:"mx-auto",attrs:{"max-width":"1400px",message:e.$fetchState.error.message}}):r("v-card",{staticClass:"mx-auto",attrs:{height:"100%","max-width":"1400px"}},[r("v-breadcrumbs",{staticClass:"hidden-sm-and-down",attrs:{items:e.breadcrumbs}}),e._v(" "),r("v-expansion-panels",{attrs:{flat:"",hover:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[r("v-expansion-panel",[r("v-expansion-panel-header",[e._v("\n          筛选\n        ")]),e._v(" "),r("v-expansion-panel-content",[r("v-toolbar",{staticClass:"hidden-xs-only",attrs:{flat:""}},[r("v-toolbar-title",[r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-btn",e._g(e._b({attrs:{nuxt:"",icon:"",fab:"",link:"",to:{name:"video-type-parent-tid-page-page",params:{parent:e.pageQuery.parentId,tid:e.pageQuery.parentId===e.pageQuery.tid?e.pageQuery.parentId:0,page:1}}}},"v-btn",o,!1),n),[r("v-icon",[e._v("\n                      mdi-refresh\n                    ")])],1)]}}])},[e._v(" "),r("span",[e._v("重置条件")])])],1)],1),e._v(" "),r("v-simple-table",{attrs:{dense:""},scopedSlots:e._u([{key:"default",fn:function(){return[r("tbody",[e.menus.length>0?r("tr",[r("td",[e._v("分类")]),e._v(" "),r("td",e._l(e.menus,(function(menu){return r("v-btn",{key:menu.id,staticClass:"ma-1",attrs:{color:menu.id===e.pageQuery.tid?"light-green":"blue darken-1",small:"",exact:"",nuxt:"",link:"",to:{name:"video-type-parent-tid-page-page",params:{parent:e.pageQuery.parentId,tid:menu.id,page:1},query:{year:e.pageQuery.year,lang:e.pageQuery.lang,area:e.pageQuery.area,order:e.pageQuery.order}},outlined:""}},[e._v("\n                      "+e._s(menu.name)+"\n                    ")])})),1)]):e._e(),e._v(" "),r("tr",{staticClass:"hidden-xs-only"},[r("td",[e._v("年代")]),e._v(" "),r("td",e._l(e.years,(function(t){return r("v-btn",{key:t,staticClass:"ma-1",attrs:{small:"",color:t===e.pageQuery.year?"light-green":"blue darken-1",exact:"",nuxt:"",link:"",to:{name:"video-type-parent-tid-page-page",params:{parent:e.pageQuery.parentId,tid:e.pageQuery.tid,page:1},query:{year:t,lang:e.pageQuery.lang,area:e.pageQuery.area,order:e.pageQuery.order}},outlined:""}},[e._v("\n                      "+e._s(t)+"\n                    ")])})),1)]),e._v(" "),r("tr",[r("td",[e._v("语言")]),e._v(" "),r("td",e._l(e.langs,(function(t,n){return r("v-btn",{key:n,staticClass:"ma-1",attrs:{color:t===e.pageQuery.lang?"light-green":"blue darken-1",exact:"",small:"",nuxt:"",link:"",to:{name:"video-type-parent-tid-page-page",params:{parent:e.pageQuery.parentId,tid:e.pageQuery.tid,page:1},query:{lang:t,year:e.pageQuery.year,area:e.pageQuery.area,order:e.pageQuery.order}},outlined:""}},[e._v("\n                      "+e._s(t)+"\n                    ")])})),1)]),e._v(" "),r("tr",[r("td",[e._v("排序")]),e._v(" "),r("td",e._l(e.orders,(function(t){return r("v-btn",{key:t.value,staticClass:"ma-1",attrs:{color:t.value===e.pageQuery.order?"light-green":"blue darken-1",exact:"",small:"",nuxt:"",link:"",to:{name:"video-type-parent-tid-page-page",params:{parent:e.pageQuery.parentId,tid:e.pageQuery.tid,page:1},query:{year:e.pageQuery.year,lang:e.pageQuery.lang,area:e.pageQuery.area,order:t.value}},outlined:""}},[e._v("\n                      "+e._s(t.label)+"\n                    ")])})),1)])])]},proxy:!0}])})],1)],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("video-list",{attrs:{data:e.data.records}}),e._v(" "),e.data.pages>1?[r("v-pagination",{staticClass:"mt-12 px-3 hidden-xs-only",attrs:{length:e.data.pages,"total-visible":7,circle:""},on:{input:e.toPage},model:{value:e.data.current,callback:function(t){e.$set(e.data,"current",t)},expression:"data.current"}}),e._v(" "),e.data.pages>1?r("m-pagination",{staticClass:"hidden-sm-and-up",attrs:{tid:e.pageQuery.tid,"parent-id":e.pageQuery.parentId,order:e.pageQuery.order,lang:e.pageQuery.lang,area:e.pageQuery.area,year:e.pageQuery.year,current:e.data.current,pages:e.data.pages}}):e._e()]:e._e()],2)],1)}),[],!1,null,null,null);t.default=component.exports;y()(component,{VBreadcrumbs:f.a,VBtn:h.a,VCard:x.a,VDivider:_.a,VExpansionPanel:k.a,VExpansionPanelContent:Q.a,VExpansionPanelHeader:C.a,VExpansionPanels:V.a,VIcon:w.a,VPagination:S.a,VSimpleTable:I.a,VSkeletonLoader:$.a,VToolbar:N.a,VToolbarTitle:P.a,VTooltip:T.a})}}]);