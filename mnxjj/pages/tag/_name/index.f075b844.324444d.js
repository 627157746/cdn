(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{629:function(t,e,r){"use strict";var n={computed:{hot:function(){return this.$store.state.web.hot},imageDomain:function(){return this.$store.state.web.imageDomain}}},o=r(53),l=r(64),c=r.n(l),d=r(223),m=r(355),v=r(616),h=r(617),f=r(613),y=r(172),_=r(228),x=r(138),k=r(63),C=r(112),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{attrs:{elevation:n?24:6}},[r("v-carousel",{staticClass:"mb-6",attrs:{cycle:"",height:"400",interval:"3000","show-arrows-on-hover":"","hide-delimiter-background":""}},t._l(t.hot.slice(0,5),(function(e){return r("v-carousel-item",{key:e.id,attrs:{nuxt:"",link:"",to:{name:"t-tid-aid",params:{tid:e.tid,aid:e.id}},src:t.imageDomain+e.cover}})})),1)],1)]}}])}),t._v(" "),r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{attrs:{elevation:n?24:6}},[r("v-card-title",[r("v-icon",[t._v("\n            mdi-fire\n          ")]),t._v("\n          热门\n        ")],1),t._v(" "),r("v-list",t._l(t.hot,(function(e,n){return r("v-list-item",{key:e.id,staticClass:"my-2",attrs:{nuxt:"",link:"",to:{name:"t-tid-aid",params:{tid:e.tid,aid:e.id}}}},[r("v-list-item-icon",[r("v-icon",{attrs:{large:"",color:n<3?"pink":""}},[t._v("\n                "+t._s("mdi-numeric-"+(n+1)+"-box-outline")+"\n              ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),r("v-list-item-subtitle",{staticClass:"mx-3"},[r("v-icon",[t._v("\n                  mdi-eye\n                ")]),t._v("\n                "+t._s(e.hits)+"\n                "),r("v-icon",[t._v("\n                  mdi-image\n                ")]),t._v("\n                "+t._s(e.count)+"\n              ")],1)],1)],1)})),1)],1)]}}])})],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:d.a,VCardTitle:m.a,VCarousel:v.a,VCarouselItem:h.a,VHover:f.a,VIcon:y.a,VList:_.a,VListItem:x.a,VListItemContent:k.a,VListItemIcon:C.a,VListItemSubtitle:k.b,VListItemTitle:k.c})},630:function(t,e,r){"use strict";r(237),r(15),r(41),r(54);var n={props:{pages:{required:!0,type:Number},tid:{required:!1,type:Number,default:1},o:{required:!1,type:Number,default:0},ky:{required:!1,type:String,default:void 0},search:{required:!1,type:Boolean,default:!1},current:{required:!0,type:Number,default:1},tag:{required:!1,type:Boolean,default:!1},tagName:{required:!1,type:String,default:void 0}},computed:{_current:{get:function(){return this.current},set:function(t){this.$emit("current",t)}},pageList:function(){return Array.from(Array(this.pages),(function(t,e){return e+1}))},toPage:function(t){return function(t){return this.ky?{name:"search",query:{pg:t,o:this.o,ky:this.ky}}:this.tag?{name:"tag-name",params:{name:this.tagName},query:{pg:t}}:{name:"t-tid",params:{tid:this.tid},query:{pg:t,o:this.o}}}}}},o=r(53),l=r(64),c=r.n(l),d=r(136),m=r(138),v=r(63),h=r(26),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-3 d-flex text-decoration-none"},[r("v-btn",{staticClass:"mx-2",attrs:{color:"pink",disabled:1===t._current,to:t.toPage(t._current-1),exact:"",nuxt:"",link:"",outlined:""}},[t._v("\n    上一页\n  ")]),t._v(" "),r("v-select",{staticClass:"mx-2",staticStyle:{flex:"1"},attrs:{dense:"",items:t.pageList},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[r("v-list-item",{staticClass:"my-1",attrs:{block:"",to:t.toPage(n),nuxt:"",link:"",exact:""}},[r("v-list-item-content",[r("v-list-item-title",[t._v("\n            第"+t._s(n)+"页\n          ")])],1)],1)]}}]),model:{value:t.current,callback:function(e){t.current=e},expression:"current"}}),t._v(" "),r("v-btn",{staticClass:"mx-2",attrs:{color:"pink",disabled:t._current===t.pages,to:t.toPage(t._current+1),exact:"",nuxt:"",link:"",outlined:""}},[t._v("\n    下一页\n  ")])],1)}),[],!1,null,null,null),f=component.exports;c()(component,{VBtn:d.a,VListItem:m.a,VListItemContent:v.a,VListItemTitle:v.c,VSelect:h.a});var y={components:{MbPagination:f},props:{pageData:{required:!0,type:Object},tid:{required:!1,type:Number,default:1},o:{required:!1,type:Number,default:0},ky:{required:!1,type:String,default:void 0},search:{required:!1,type:Boolean,default:!1},tag:{required:!1,type:Boolean,default:!1},tagName:{required:!1,type:String,default:void 0}},data:function(){return{imageSize:{width:"100%"},totalVisible:7}},computed:{imageDomain:function(){return this.$store.state.web.imageDomain},display:function(){return this.$store.state.web.display}},methods:{toPage:function(t){this.search?this.$router.push({name:"search",query:{pg:t,o:this.o,ky:this.ky}}):this.tag?this.$router.push({name:"tag-name",params:{name:this.tagName},query:{pg:t}}):this.$router.push({name:"t-tid",params:{tid:this.tid},query:{pg:t,o:this.o}})},setCurrent:function(t){this.pageData.current=t}}},_=r(223),x=r(224),k=r(612),C=r(71),V=r(613),w=r(172),S=r(141),$=r(229),D=r(614),N=r(137),L=r(615),I=Object(o.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{dense:"",justify:"start",align:"start"}},[t._l(t.pageData.records,(function(e){return r("v-col",{key:e.id,attrs:{xl:"3",md:"3",sm:"4",cols:t.display}},[r("v-hover",{attrs:{disabled:!1},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return[r("v-card",{staticClass:"mx-sm-3 mx-md-3 mx-lg-3 mx-xl-3 mx-1",attrs:{elevation:o?24:6,nuxt:"",link:"",to:{name:"t-tid-aid",params:{tid:e.tid,aid:e.id}}}},[r("v-img",{staticClass:"grey lighten-2 mx-auto",attrs:{alt:e.title,"aspect-ratio":"0.7",src:t.imageDomain+e.cover},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"pink"}})],1)]},proxy:!0}],null,!0)},[r("div",{staticClass:"img-title white--text"},[t.ky?r("div",{staticClass:"mx-2 text-truncate",staticStyle:{"font-size":"14px"},attrs:{to:"/"},domProps:{innerHTML:t._s(e.title)}}):r("div",{staticClass:"mx-2 text-truncate",staticStyle:{"font-size":"14px"},attrs:{to:"/"}},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),r("div",{staticClass:"float-left mx-1",staticStyle:{"font-size":"10px"}},[r("v-icon",{attrs:{color:"white",dense:""}},[t._v("\n                  mdi-clock-outline\n                ")]),t._v("\n                "+t._s(t._f("formatTime")(e.createTime))+"\n              ")],1)])]),t._v(" "),r("v-fade-transition",[o?r("v-overlay",{attrs:{absolute:"",color:"#036358"}},[r("v-btn",{attrs:{color:"pink",icon:""}},[r("v-icon",[t._v("mdi-eye")])],1)],1):t._e()],1)],1)]}}],null,!0)})],1)})),t._v(" "),t.ky&&0===t.pageData.total?r("v-chip",{staticClass:"ml-6 my-3",attrs:{color:"pink lighten-3"}},[r("span",{staticClass:"mx-2",staticStyle:{color:"white"}},[t._v(t._s(t.ky))]),t._v("的搜索结果为空\n  ")]):t._e(),t._v(" "),t.pageData.pages>1?r("v-col",{staticClass:"hidden-xs-only"},[r("v-pagination",{staticClass:"mt-12 px-3",attrs:{length:t.pageData.pages,"total-visible":t.totalVisible,circle:""},on:{input:t.toPage},model:{value:t.pageData.current,callback:function(e){t.$set(t.pageData,"current",e)},expression:"pageData.current"}})],1):t._e(),t._v(" "),t.pageData.pages>1?r("v-col",{staticClass:"hidden-sm-and-up"},[r("mb-pagination",{attrs:{current:t.pageData.current,pages:t.pageData.pages,search:t.search,tid:t.tid,o:t.o,ky:t.ky,"tag-name":t.tagName,tag:t.tag},on:{current:t.setCurrent}})],1):t._e()],2)}),[],!1,null,null,null);e.a=I.exports;c()(I,{VBtn:d.a,VCard:_.a,VChip:x.a,VCol:k.a,VFadeTransition:C.d,VHover:V.a,VIcon:w.a,VImg:S.a,VOverlay:$.a,VPagination:D.a,VProgressCircular:N.a,VRow:L.a})},652:function(t,e,r){"use strict";r.r(e);r(15),r(21),r(100);var n=r(30),o=r(240),l=r(630),c=r(629),d=r(183),m={components:{Erro:o.a,AlbumList:l.a,Hot:c.a},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c,m,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route,n=r.params,o=r.query,l=n.name,c={pg:Number(o.pg)?Number(o.pg):1,ky:l},e.next=5,Object(d.b)(t.$axios,c);case 5:if(m=e.sent,0!==(data=m.data).records.length){e.next=10;break}throw new Error("网页未找到");case 10:t.data=data,t.pageQuery=c,t.breadcrumbs=[{text:"主页",disabled:!1,href:"/"},{text:"专题",disabled:!1,href:"/tags/"},{text:l,disabled:!0,href:"/tags/"+l}],t.name=l;case 14:case"end":return e.stop()}}),e)})))()},data:function(){return{data:{},pageQuery:{},breadcrumbs:[],name:""}},watch:{"$route.query":function(t,e){!1===this._inactive&&JSON.stringify(t)!==JSON.stringify(e)&&this.$fetch()}},methods:{setOrder:function(t){this.pageQuery.o=t},setT:function(t){this.pageQuery.t=t}},head:function(){return{title:this.name+" - 专题"}}},v=r(53),h=r(64),f=r.n(h),y=r(623),_=r(223),x=r(612),k=r(615),C=r(618),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",{attrs:{lg:"9",md:"12"}},[r("v-skeleton-loader",{attrs:{loading:t.$fetchState.pending,transition:"scale-transition",type:"image"}},[t.$fetchState.error?r("erro",{attrs:{message:t.$fetchState.error.message}}):r("v-card",[r("v-breadcrumbs",{staticClass:"hidden-sm-and-down",attrs:{items:t.breadcrumbs}}),t._v(" "),r("album-list",{attrs:{"page-data":t.data,tag:!0,"tag-name":t.name}})],1)],1)],1),t._v(" "),r("v-col",{staticClass:"hidden-md-and-down",attrs:{lg:"3",md:"0"}},[r("hot")],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBreadcrumbs:y.a,VCard:_.a,VCol:x.a,VRow:k.a,VSkeletonLoader:C.a})}}]);