(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{404:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{loading:!0,viewHistory:[],breadcrumbs:[{text:"主页",disabled:!1,to:"/",nuxt:!0,link:!0},{text:"播放历史",disabled:!0,to:"/history",nuxt:!0,link:!0}],dialog:!1}},computed:{imageDomain:function(){return this.$store.state.web.imageDomain}},mounted:function(){this.getHistory()},methods:{getHistory:function(){this.loading=!0;var t=localStorage.getItem("viewHistory");""!==t&&t&&null!==t&&(this.viewHistory=JSON.parse(t),this.viewHistory.sort((function(a,b){return a.date>b.date?-1:a.date===b.date?0:1}))),this.loading=!1},removeHistory:function(t){this.viewHistory.splice(t,1),localStorage.setItem("viewHistory",JSON.stringify(this.viewHistory))},removeAll:function(){this.viewHistory=[],localStorage.setItem("viewHistory",JSON.stringify(this.viewHistory))}},head:function(){return{title:"播放历史 - 花园tv"}}},o=n(53),l=n(64),c=n.n(l),v=n(381),d=n(378),m=n(101),_=n(160),y=n(228),f=n(362),h=n(363),x=n(165),w=n(364),k=n(161),C=n(129),V=n(102),H=n(365),S=n(45),I=n(366),D=n(360),J=n(361),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-skeleton-loader",{staticClass:"mx-auto mt-lg-4 mt-md-4",staticStyle:{height:"100%"},attrs:{"max-width":"1400px mt-lg-4 mt-md-4",loading:t.loading,transition:"scale-transition",type:"image"}},[n("v-card",{staticClass:"mx-auto",attrs:{height:"100%","max-width":"1400px"}},[n("v-breadcrumbs",{staticClass:"hidden-sm-and-down",attrs:{items:t.breadcrumbs}}),t._v(" "),0===t.viewHistory.length?[n("v-sheet",{staticClass:"pa-4"},[n("v-alert",{attrs:{type:"warning",outlined:""}},[t._v("\n          暂无播放记录!\n        ")])],1)]:[n("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"ma-6",attrs:{color:"red",outlined:""}},"v-btn",o,!1),r),[t._v("\n            清空\n          ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",[t._v("\n            再次确认\n          ")]),t._v(" "),n("v-card-text",[t._v("\n            确认删除所有播放记录吗\n          ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"blue darken-1",icon:"",text:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("\n                mdi-cancel\n              ")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red",icon:"",text:""},on:{click:t.removeAll}},[n("v-icon",[t._v("\n                mdi-check\n              ")])],1)],1)],1)],1),t._v(" "),n("v-sheet",{staticClass:"pa-4"},[n("v-alert",{attrs:{dense:"",type:"warning",outlined:""}},[t._v("\n          观看记录存放于浏览器本地！\n        ")])],1),t._v(" "),n("v-row",{staticClass:"ml-0",staticStyle:{width:"100%"},attrs:{justify:"start",align:"start"}},t._l(t.viewHistory,(function(video,e){return n("v-col",{key:video.id,attrs:{xl:"2",md:"3",sm:"4",cols:"6"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.hover;return[n("v-card",{staticClass:"mx-sm-3 mx-md-3 mx-lg-3 mx-xl-3 mx-1",attrs:{elevation:o?24:6}},[n("v-img",{staticClass:"grey lighten-2 mx-auto",attrs:{alt:video.name,"aspect-ratio":"0.9",src:t.imageDomain+video.pic},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"blue darken-1"}})],1)]},proxy:!0}],null,!0)},[n("div",{staticClass:"video-info white--text"},[n("div",{staticClass:"mx-2 text-truncate",attrs:{to:"/"}},[t._v("\n                      "+t._s(video.name)+"\n                    ")]),t._v(" "),n("div",{staticClass:"mx-2 text-truncate",attrs:{to:"/"}},[t._v("\n                      观看到第"+t._s(video.ep+1)+"集\n                    ")])])]),t._v(" "),n("div",{staticClass:"ma-2 text-truncate",staticStyle:{"font-size":"12px"}},[t._v("\n                  "+t._s(t._f("formatTime")(video.date))+"观看过\n                ")]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"blue darken-1",to:{name:"video-type-parent-tid-id-play-line-ep",params:{parent:video.parentId,tid:video.tid,id:video.id,ep:video.ep,line:video.line},query:{type:video.type}},nuxt:"",fab:"",icon:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{large:""}},[t._v("\n                        mdi-play\n                      ")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("继续播放")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,l=r.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"red",icon:"",fab:""},on:{click:function(n){return t.removeHistory(e)}}},"v-btn",l,!1),o),[n("v-icon",{attrs:{large:""}},[t._v("\n                        mdi-delete\n                      ")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("删除")])])],1)]}}],null,!0)})],1)})),1)]],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAlert:v.a,VBreadcrumbs:d.a,VBtn:m.a,VCard:_.a,VCardActions:y.a,VCardText:y.b,VCardTitle:y.c,VCol:f.a,VDialog:h.a,VDivider:x.a,VHover:w.a,VIcon:k.a,VImg:C.a,VProgressCircular:V.a,VRow:H.a,VSheet:S.a,VSkeletonLoader:I.a,VSpacer:D.a,VTooltip:J.a})}}]);