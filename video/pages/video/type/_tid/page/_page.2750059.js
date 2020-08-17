(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{366:function(t,e,r){"use strict";var n={props:{data:{required:!0,type:Array},keywords:{required:!1,type:String,default:void 0}},data:function(){return{totalVisible:7}},computed:{imageDomain:function(){return this.$store.state.web.imageDomain}}},o=r(52),d=r(62),l=r.n(d),c=r(98),v=r(155),m=r(158),y=r(346),_=r(36),f=r(345),h=r(156),x=r(124),k=r(163),C=r(99),V=r(347),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"start",align:"start"}},t._l(t.data,(function(video){return r("v-col",{key:video.id,attrs:{xl:"2",md:"3",sm:"4",cols:"6"}},[r("v-hover",{attrs:{disabled:!1},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{staticClass:"mx-sm-3 mx-md-3 mx-lg-3 mx-xl-3 mx-1",attrs:{elevation:n?24:6,nuxt:"",link:"",to:{name:"video-type-tid-id-play-ep",params:{tid:video.tid,id:video.id,ep:0}}}},[r("v-img",{staticClass:"grey lighten-2 mx-auto",attrs:{alt:video.name,"aspect-ratio":"0.7",src:t.imageDomain+video.pic},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"blue darken-1"}})],1)]},proxy:!0}],null,!0)},[r("v-chip",{staticClass:"video-score",attrs:{small:"",color:"orange","text-color":"white"}},[t._v("\n              "+t._s(video.score)+"\n              "),r("v-icon",{attrs:{right:"",small:""}},[t._v("\n                mdi-star\n              ")])],1),t._v(" "),r("div",{staticClass:"video-info white--text"},[t.keywords?r("div",{staticClass:"mx-2 text-truncate",attrs:{to:"/"},domProps:{innerHTML:t._s(video.name)}}):r("div",{staticClass:"mx-2 text-truncate",attrs:{to:"/"}},[t._v("\n                "+t._s(video.name)+"\n              ")]),t._v(" "),r("div",{staticClass:"video-note mx-2 text-truncate"},[t._v("\n                "+t._s(video.note)+"\n              ")]),t._v(" "),r("div",{staticClass:"float-left mx-1"},[r("v-icon",{attrs:{color:"white",dense:""}},[t._v("\n                  mdi-clock-outline\n                ")]),t._v("\n                "+t._s(t._f("formatTime")(video.updateTime))+"\n              ")],1),t._v(" "),r("div",{staticClass:"float-left mx-1 hidden-xs-only"},[r("v-icon",{attrs:{color:"white",dense:""}},[t._v("\n                  mdi-eye\n                ")]),t._v("\n                "+t._s(video.hit)+"\n              ")],1)])],1),t._v(" "),r("v-fade-transition",[n?r("v-overlay",{attrs:{absolute:"",color:"#036358"}},[r("v-btn",{attrs:{color:"orange",icon:"",large:""}},[r("v-icon",{attrs:{large:""}},[t._v("\n                  mdi-play\n                ")])],1)],1):t._e()],1)],1)]}}],null,!0)})],1)})),1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VBtn:c.a,VCard:v.a,VChip:m.a,VCol:y.a,VFadeTransition:_.d,VHover:f.a,VIcon:h.a,VImg:x.a,VOverlay:k.a,VProgressCircular:C.a,VRow:V.a})},368:function(t,e,r){"use strict";var n={computed:{rank:function(){return this.$store.state.web.rank},imageDomain:function(){return this.$store.state.web.imageDomain}}},o=r(52),d=r(62),l=r.n(d),c=r(155),v=r(222),m=r(345),y=r(156),_=r(161),f=r(100),h=r(51),x=r(86),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.rank,(function(e,n){return r("div",{key:n},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return[r("v-card",{staticClass:"mb-3",attrs:{dense:"",elevation:o?24:6}},[r("v-card-title",[r("v-icon",[t._v("\n            mdi-fire\n          ")]),t._v("\n          热播"+t._s(e.name)+"\n        ")],1),t._v(" "),r("v-list",{attrs:{dense:""}},t._l(e.value,(function(e,n){return r("v-list-item",{key:e.id,staticClass:"my-2",attrs:{dense:"",nuxt:"",link:"",to:{name:"video-type-tid-id-play-ep",params:{tid:e.tid,id:e.id,ep:0}}}},[r("v-list-item-icon",{attrs:{dense:""}},[r("v-icon",{attrs:{large:"",color:n<3?"pink":""}},[t._v("\n                "+t._s("mdi-numeric-"+(n+1)+"-box-outline")+"\n              ")])],1),t._v(" "),r("v-list-item-content",{attrs:{dense:""}},[r("v-list-item-title",[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),r("v-list-item-subtitle",{staticClass:"mx-3",attrs:{dense:""}},[r("v-icon",[t._v("\n                  mdi-eye\n                ")]),t._v("\n                "+t._s(e.hit)+"\n              ")],1)],1)],1)})),1)],1)]}}],null,!0)})],1)})),0)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VCard:c.a,VCardTitle:v.b,VHover:m.a,VIcon:y.a,VList:_.a,VListItem:f.a,VListItemContent:h.a,VListItemIcon:x.a,VListItemSubtitle:h.b,VListItemTitle:h.c})},372:function(t,e,r){"use strict";r(33),r(40),r(13);var n={props:{pages:{required:!0,type:Number},tid:{required:!1,type:Number,default:1},order:{required:!1,type:Number,default:0},keywords:{required:!1,type:String,default:void 0},current:{required:!0,type:Number,default:1}},computed:{pageList:function(){return Array.from(Array(this.pages),(function(t,e){return e+1}))},toPage:function(t){return function(t){return this.keywords?{name:"search",query:{page:t,keywords:this.keywords}}:{name:"video-type-tid-page-page",params:{tid:this.tid,page:t}}}}}},o=r(52),d=r(62),l=r.n(d),c=r(98),v=r(21),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-3  text-decoration-none"},[r("div",{staticClass:"d-flex"},[r("v-btn",{staticClass:"mx-2",attrs:{text:"",color:"blue darken-1",disabled:1===t.current,to:t.toPage(t.current-1)}},[t._v("\n      上一页\n    ")]),t._v(" "),r("v-select",{staticClass:"mx-2",staticStyle:{flex:"1"},attrs:{dense:"",items:t.pageList,outlined:""},on:{change:t.toPage},scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return[t._v("\n        第"+t._s(r)+"页\n      ")]}}]),model:{value:t.current,callback:function(e){t.current=e},expression:"current"}}),t._v(" "),r("v-btn",{staticClass:"mx-2",attrs:{text:"",color:"blue darken-1",disabled:t.current===t.pages,to:t.toPage(t.current+1)}},[t._v("\n      下一页\n    ")])],1)])}),[],!1,null,null,null);e.a=component.exports;l()(component,{VBtn:c.a,VSelect:v.a})},380:function(t,e,r){"use strict";r.r(e);r(13),r(81);var n=r(24),o=r(368),d=r(366),l=r(372),c=r(173),video=r(172),v={components:{Rank:o.a,Erro:c.a,VideoList:d.a,MPagination:l.a},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,d,l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route,n=r.params,o=r.query,d={tid:Number(n.tid),page:Number(n.page)?Number(n.page):1,order:o.order?Number(o.order):1,lang:o.lang,area:o.area,year:o.year},t.parent=Number(o.parent),e.next=5,Object(video.d)(t.$axios,d);case 5:l=e.sent,data=l.data,t.data=data,t.pageQuery=d,data.records.length>0&&(t.breadcrumbs=[{text:"主页",disabled:!1,href:"/"},{text:data.records[0].type,disabled:!0,href:"/video/type/"+n.tid+"/page/1"}],t.title=data.records[0].type);case 10:case"end":return e.stop()}}),e)})))()},data:function(){return{data:{},pageQuery:{},breadcrumbs:[],title:"",parent:0,areas:["中国","美国","韩国","澳大利亚","英国","法国","台湾","香港","泰国","俄罗斯"],langs:["国语","英语","韩语","日语","德语","其他"],orders:[{label:"更新时间",value:1},{label:"点击量",value:2},{label:"评分",value:3}]}},computed:{years:function(){for(var t=[],e=(new Date).getFullYear(),i=e-12;i<=e;i++)t.push(i);return t},imageDomain:function(){return this.$store.state.web.imageDomain},menus:function(){for(var t=this.$store.state.web.menus,e=0;e<t.length;e++)if(t[e].id===this.parent)return t[e].children;return[]}},watch:{"$route.query":function(t,e){JSON.stringify(t)!==JSON.stringify(e)&&this.$fetch()}},methods:{toPage:function(t){this.$router.push({name:"video-type-tid-page-page",params:{tid:this.pageQuery.tid,page:Number(t)}})}},head:function(){return{title:this.title}}},m=r(52),y=r(62),_=r.n(y),f=r(359),h=r(98),x=r(155),k=r(346),C=r(160),V=r(348),w=r(347),Q=r(350),$=r(349),S=r(44),N=r(169),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",{attrs:{lg:"9",md:"12"}},[r("v-skeleton-loader",{attrs:{loading:t.$fetchState.pending,transition:"scale-transition",type:"image"}},[t.$fetchState.error?r("erro",{attrs:{message:t.$fetchState.error.message}}):r("v-card",[r("v-breadcrumbs",{staticClass:"hidden-sm-and-down",attrs:{items:t.breadcrumbs}}),t._v(" "),t.parent?r("v-toolbar",{staticClass:"hidden-xs-only",attrs:{flat:""}},[r("v-toolbar-title",[r("v-btn",{attrs:{nuxt:"",link:"",to:{name:"video-type-tid-page-page",params:{tid:t.pageQuery.tid,page:1},query:{parent:t.parent}},text:""}},[t._v("\n              重置\n            ")])],1)],1):t._e(),t._v(" "),r("v-divider"),t._v(" "),r("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[r("tbody",[t.parent?r("tr",[r("td",[t._v("分类")]),t._v(" "),r("td",t._l(t.menus,(function(menu){return r("v-btn",{key:menu.id,staticClass:"my-1",attrs:{dense:"",nuxt:"",link:"",to:{name:"video-type-tid-page-page",params:{tid:menu.id,page:1},query:{parent:t.parent}},disabled:menu.id===t.pageQuery.tid,text:""}},[t._v("\n                    "+t._s(menu.name)+"\n                  ")])})),1)]):t._e(),t._v(" "),r("tr",{staticClass:"hidden-xs-only"},[r("td",[t._v("时间")]),t._v(" "),r("td",t._l(t.years,(function(e){return r("v-btn",{key:e,staticClass:"ma-1",attrs:{dense:"",nuxt:"",link:"",to:{name:"video-type-tid-page-page",params:{tid:t.pageQuery.tid,page:1},query:{parent:t.parent,year:e,lang:t.pageQuery.lang,area:t.pageQuery.area}},disabled:e===t.pageQuery.year,text:""}},[t._v("\n                    "+t._s(e)+"\n                  ")])})),1)]),t._v(" "),r("tr",{staticClass:"hidden-xs-only"},[r("td",[t._v("地区")]),t._v(" "),r("td",t._l(t.areas,(function(area,e){return r("v-btn",{key:e,staticClass:"ma-1",attrs:{dense:"",nuxt:"",link:"",to:{name:"video-type-tid-page-page",params:{tid:t.pageQuery.tid,page:1},query:{parent:t.parent,area:area,year:t.pageQuery.year,lang:t.pageQuery.lang}},disabled:area===t.pageQuery.area,text:""}},[t._v("\n                    "+t._s(area)+"\n                  ")])})),1)]),t._v(" "),r("tr",{staticClass:"hidden-xs-only"},[r("td",[t._v("语言")]),t._v(" "),r("td",t._l(t.langs,(function(e,n){return r("v-btn",{key:n,staticClass:"ma-1",attrs:{dense:"",nuxt:"",link:"",to:{name:"video-type-tid-page-page",params:{tid:t.pageQuery.tid,page:1},query:{parent:t.parent,lang:e,year:t.pageQuery.year,area:t.pageQuery.area}},disabled:e===t.pageQuery.lang,text:""}},[t._v("\n                    "+t._s(e)+"\n                  ")])})),1)]),t._v(" "),r("tr",[r("td",[t._v("排序")]),t._v(" "),r("td",t._l(t.orders,(function(e){return r("v-btn",{key:e.value,staticClass:"ma-2",attrs:{nuxt:"",link:"",to:{name:"video-type-tid-page-page",params:{tid:t.pageQuery.tid,page:1},query:{parent:t.parent,order:e.value}},disabled:e.value===t.pageQuery.order,text:""}},[t._v("\n                    "+t._s(e.label)+"\n                  ")])})),1)])])]},proxy:!0}])}),t._v(" "),r("v-divider"),t._v(" "),r("video-list",{attrs:{data:t.data.records}}),t._v(" "),t.data.pages>1?[r("v-pagination",{staticClass:"mt-12 px-3 hidden-xs-only",attrs:{length:t.data.pages,"total-visible":7,circle:""},on:{input:t.toPage},model:{value:t.data.current,callback:function(e){t.$set(t.data,"current",e)},expression:"data.current"}}),t._v(" "),t.data.pages>1?r("m-pagination",{staticClass:"hidden-sm-and-up",attrs:{tid:t.pageQuery.tid,current:t.data.current,pages:t.data.pages}}):t._e()]:t._e()],2)],1)],1),t._v(" "),r("v-col",{staticClass:"hidden-md-and-down",attrs:{lg:"3",md:"0"}},[r("rank")],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBreadcrumbs:f.a,VBtn:h.a,VCard:x.a,VCol:k.a,VDivider:C.a,VPagination:V.a,VRow:w.a,VSimpleTable:Q.a,VSkeletonLoader:$.a,VToolbar:S.a,VToolbarTitle:N.a})}}]);