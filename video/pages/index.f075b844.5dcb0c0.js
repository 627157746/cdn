(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{409:function(t,e,r){"use strict";r(24),r(29);var n={props:{data:{required:!0,type:Array},keywords:{required:!1,type:String,default:void 0}},data:function(){return{errorIndex:[]}},computed:{imageDomain:function(){return this.$store.state.web.imageDomain},src:function(t,e){return function(t,e){if(this.errorIndex.includes(e))return this.imageDomain+"/images/error.jpg";var i=t.indexOf(".");return this.imageDomain+t.slice(0,i)+"th"+t.slice(i)}}},methods:{error:function(t,e){this.errorIndex.push(e)}}},o=r(59),l=r(70),c=r.n(l),d=r(381),v=r(107),m=r(169),f=r(171),h=r(382),x=r(39),_=r(384),y=r(136),w=r(137),k=r(178),C=r(108),V=r(385),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"ml-0",staticStyle:{width:"100%"},attrs:{dense:"",justify:"start",align:"start"}},[t._l(t.data,(function(video,e){return r("v-col",{key:video.id,attrs:{xl:"2",md:"2",sm:"3",cols:"4"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return[r("v-card",{staticClass:"mx-sm-3 mx-md-3 mx-lg-3 mx-xl-3 mx-1",attrs:{elevation:o?24:6,nuxt:"",link:"",to:{name:"video-type-parent-tid-id-play-line-ep",params:{parent:video.parentId,tid:video.tid,id:video.id,ep:0,line:0}}}},[r("v-img",{staticClass:"grey lighten-2 mx-auto",attrs:{alt:video.name,"aspect-ratio":"0.7",src:t.src(video.pic,e)},on:{error:function(r){return t.error(t.src,e)}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"blue darken-1"}})],1)]},proxy:!0}],null,!0)},[r("v-chip",{staticClass:"video-score hidden-xs-only",attrs:{"x-small":"",color:"pink lighten-4","text-color":"white"}},[t._v("\n              "+t._s(video.score)+"\n            ")]),t._v(" "),r("v-chip",{staticClass:"video-note",attrs:{"x-small":"",color:"success","text-color":"white"}},[r("span",{staticClass:"text-truncate"},[t._v(t._s(video.note))])]),t._v(" "),r("div",{staticClass:"video-info white--text"},[t.keywords?r("div",{staticClass:"mx-2 text-truncate",domProps:{innerHTML:t._s(video.name)}}):r("div",{staticClass:"mx-2 text-truncate"},[t._v("\n                "+t._s(video.name)+"\n              ")]),t._v(" "),r("div",{staticClass:"float-left mx-1",staticStyle:{"font-size":"10px"}},[r("v-icon",{attrs:{color:"white",size:"14",dense:""}},[t._v("\n                  mdi-clock-outline\n                ")]),t._v("\n                "+t._s(t._f("formatTime")(video.updateTime))+"\n              ")],1)])],1),t._v(" "),r("v-fade-transition",[o?r("v-overlay",{attrs:{absolute:"",color:"#036358"}},[r("v-btn",{attrs:{color:"orange",icon:"",large:""}},[r("v-icon",{attrs:{large:""}},[t._v("\n                  mdi-play\n                ")])],1)],1):t._e()],1)],1)]}}],null,!0)})],1)})),t._v(" "),0===t.data.length&&t.keywords?[r("div",{staticClass:"px-4 my-4"},[r("v-alert",{attrs:{type:"warning",dense:"",outlined:""}},[t._v("\n        没有"),r("span",{staticStyle:{color:"red"}},[t._v(t._s(t.keywords))]),t._v(" 的搜索结果！\n      ")])],1)]:t._e()],2)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VAlert:d.a,VBtn:v.a,VCard:m.a,VChip:f.a,VCol:h.a,VFadeTransition:x.d,VHover:_.a,VIcon:y.a,VImg:w.a,VOverlay:k.a,VProgressCircular:C.a,VRow:V.a})},427:function(t,e,r){"use strict";r.r(e);r(24),r(29),r(90);var n=r(27),o=r(409),l=r(189),video=r(190),c={components:{Erro:l.a,VideoList:o.a},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(video.b)(t.$axios);case 2:r=e.sent,data=r.data,t.data=data;case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{data:[{video:[]}],window:0,subMenuSlide:0,errorIndex:[]}},computed:{imageDomain:function(){return this.$store.state.web.imageDomain},background:function(){return this.imageDomain+"/images/video/background.jpg"},menus:function(t){return function(t){for(var e=this.$store.state.web.menus,r=0;r<e.length;r++)if(e[r].id===t)return e[r].children;return[]}},src:function(t,e){return function(t,e){if(this.errorIndex.includes(e))return this.imageDomain+"/images/error.jpg";var i=t.indexOf(".");return this.imageDomain+t.slice(0,i)+"th"+t.slice(i)}}},methods:{error:function(t,e){this.errorIndex.push(e)}},head:function(){return{title:"花园tv - 海量高清电影电视剧动漫综艺免费在线观看和下载"}}},d=r(59),v=r(70),m=r.n(v),f=r(107),h=r(169),x=r(39),_=r(384),y=r(136),w=r(137),k=r(178),C=r(108),V=r(385),S=r(386),I=r(118),j=r(406),D=r(51),$=r(187),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-slide-group",{staticClass:"hidden-sm-and-down",attrs:{"center-active":"","show-arrows":""},model:{value:t.window,callback:function(e){t.window=e},expression:"window"}},[t._l(t.data[0].random,(function(video,e){return[r("v-hover",{key:video.id,scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return[r("v-slide-item",{scopedSlots:t._u([{key:"default",fn:function(n){var l=n.toggle;return[r("div",{staticClass:"d-flex justify-center align-center",staticStyle:{height:"370px",width:"259px"}},[r("v-card",{attrs:{elevation:o?24:2,height:o?370:340,width:o?259:238,to:{name:"video-type-parent-tid-id-play-line-ep",params:{parent:video.parentId,tid:video.tid,id:video.id,ep:0,line:0}}},on:{click:l}},[r("v-img",{staticClass:"grey lighten-2 mx-auto",attrs:{alt:video.name,"aspect-ratio":"0.7",src:t.src(video.pic,e)},on:{error:function(r){return t.error(t.src,e)}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"blue darken-1"}})],1)]},proxy:!0}],null,!0)},[r("div",{staticClass:"video-info white--text"},[r("div",{staticClass:"mx-2 text-truncate",attrs:{to:"/"}},[t._v("\n                    "+t._s(video.name)+"\n                  ")]),t._v(" "),r("div",{staticClass:" mx-2 text-truncate"},[t._v("\n                    "+t._s(video.note)+"\n                  ")])]),t._v(" "),t._v(" "),r("v-fade-transition",[o?r("v-overlay",{attrs:{absolute:"",color:"transparent"}},[r("v-btn",{attrs:{fab:"",large:"",color:"blue-grey"}},[r("v-icon",[t._v("\n                        mdi-play\n                      ")])],1)],1):t._e()],1)],1)],1)],1)]}}],null,!0)})]}}],null,!0)})]}))],2),t._v(" "),r("v-skeleton-loader",{staticClass:"mx-auto mt-lg-4 mt-md-4",attrs:{"max-width":"1400px",loading:t.$fetchState.pending,transition:"scale-transition",type:"image"}},[t.$fetchState.error?r("erro",{staticClass:"mx-auto",attrs:{"max-width":"1400px",message:t.$fetchState.error.message}}):r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1400px"}},[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",[t._v("最新更新")])],1),t._v(" "),t._l(t.data,(function(e,n){return[n>0?[r("div",{key:n,staticClass:"mx-3"},[r("v-btn",{staticClass:"my-3",attrs:{text:"",link:"",nuxt:"",to:{name:"video-type-parent-tid-page-page",params:{parent:e.parent,tid:0,page:1}}}},[r("v-icon",[t._v(t._s(e.icon))]),t._v("\n              "+t._s(e.name)+"\n            ")],1),t._v(" "),r("v-slide-group",{attrs:{"show-arrows":""},model:{value:t.subMenuSlide,callback:function(e){t.subMenuSlide=e},expression:"subMenuSlide"}},t._l(t.menus(e.parent),(function(n){return r("v-slide-item",{key:n.id},[r("v-btn",{staticClass:"mx-3",attrs:{color:"blue darken-1",outlined:"",small:"",link:"",nuxt:"",to:{name:"video-type-parent-tid-page-page",params:{parent:e.parent,tid:n.id,page:1}}}},[t._v("\n                  "+t._s(n.name)+"\n                ")])],1)})),1)],1),t._v(" "),r("video-list",{key:5*(n+1),attrs:{data:e.value}})]:t._e()]}))],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:f.a,VCard:h.a,VFadeTransition:x.d,VHover:_.a,VIcon:y.a,VImg:w.a,VOverlay:k.a,VProgressCircular:C.a,VRow:V.a,VSkeletonLoader:S.a,VSlideGroup:I.b,VSlideItem:j.a,VToolbar:D.a,VToolbarTitle:$.a})}}]);