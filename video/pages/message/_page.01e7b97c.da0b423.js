(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{424:function(e,t,n){"use strict";n.r(t);n(13),n(90);var r=n(27),o={components:{Erro:n(189).a},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$route.params,r={current:Number(n.page)?Number(n.page):1,size:20},t.next=4,c=e.$axios,l=r,c.$get("/messages",{params:l});case 4:o=t.sent,data=o.data,e.data=data;case 7:case"end":return t.stop()}var c,l}),t)})))()},data:function(){return{data:{records:[]},message:{name:void 0,content:""},breadcrumbs:[{text:"主页",disabled:!1,to:"/",nuxt:!0,link:!0},{text:"求片留言",disabled:!0,to:"/message/1",nuxt:!0,link:!0}],timer:null,currentTime:0,loading:!1}},computed:{imageDomain:function(){return this.$store.state.web.imageDomain}},destroyed:function(){null!=this.timer&&(clearInterval(this.timer),this.timer=null)},methods:{HandleSend:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,code;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e.message.content){t.next=4;break}e.$toast.show("留言内容不能为空!"),t.next=11;break;case 4:return e.loading=!0,t.next=7,r=e.$axios,o=e.message,r.$post("/messages",o,{headers:{flag:!0}});case 7:n=t.sent,code=n.code,e.loading=!1,200===code&&(e.message={name:void 0,content:""},e.currentTime=60,e.timer=setInterval((function(){e.currentTime>0&&e.currentTime--}),1e3),e.$toast.show("感谢您的留言!"));case 11:case"end":return t.stop()}var r,o}),t)})))()},click:function(){},toPage:function(e){this.$router.push({name:"message-page",params:{page:e}})}},head:function(){return{title:"求片留言 - 花园tv"}}},c=n(59),l=n(70),m=n.n(l),d=n(384),v=n(404),h=n(107),x=n(169),f=n(173),_=n(136),w=n(137),k=n(174),V=n(109),$=n(175),C=n(58),S=n(94),T=n(390),I=n(50),y=n(389),L=n(46),R=n(398),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-skeleton-loader",{staticClass:"mx-auto mt-lg-4 mt-md-4",staticStyle:{height:"100%"},attrs:{"max-width":"1400px mt-lg-4 mt-md-4",loading:e.$fetchState.pending,transition:"scale-transition",type:"image"}},[e.$fetchState.error?n("erro",{staticClass:"mx-auto",attrs:{"max-width":"1400px",message:e.$fetchState.error.message}}):e._e(),e._v(" "),n("v-card",{directives:[{name:"show",rawName:"v-show",value:!e.$fetchState.error,expression:"!$fetchState.error"}],staticClass:"mx-auto",attrs:{height:"100%","max-width":"1400px"}},[n("v-breadcrumbs",{staticClass:"hidden-sm-and-down",attrs:{items:e.breadcrumbs}}),e._v(" "),n("v-sheet",{staticClass:"pa-4"},[n("v-alert",{attrs:{dense:"",type:"success",outlined:""}},[e._v("\n        有任何疑问和想看的片子都可以在下方留言，敏感词汇将会被过滤，请注意发言内容！\n      ")])],1),e._v(" "),n("v-sheet",{attrs:{"max-width":"300px"}},[n("v-text-field",{staticClass:"px-4 pt-4",attrs:{label:"昵称","single-line":"",dense:"",outlined:""},model:{value:e.message.name,callback:function(t){e.$set(e.message,"name",t)},expression:"message.name"}})],1),e._v(" "),n("v-textarea",{staticClass:"px-4",attrs:{clearable:"",counter:"","no-resize":"",solo:"",label:"留言内容"},model:{value:e.message.content,callback:function(t){e.$set(e.message,"content",t)},expression:"message.content"}}),e._v(" "),n("v-btn",{staticClass:"mx-4 mb-2",attrs:{color:"blue darken-1",disabled:0!=e.currentTime,outlined:"",loading:e.loading},on:{click:e.HandleSend}},[e._v("\n      "+e._s(0==e.currentTime?"提交":e.currentTime+"s")+"\n    ")]),e._v(" "),n("v-divider"),e._v(" "),0===e.data.records.length?[n("v-sheet",{staticClass:"pa-4"},[n("v-alert",{attrs:{type:"warning",outlined:""}},[e._v("\n          暂无留言记录!\n        ")])],1)]:[n("v-sheet",{staticClass:"pa-4"},[n("v-alert",{attrs:{dense:"",type:"warning",outlined:""}},[e._v("\n          留言记录每4小时更新一次！\n        ")])],1),e._v(" "),n("v-list",{attrs:{"three-line":""}},[e._l(e.data.records,(function(t,r){return[n("v-list-item",{key:t.id,attrs:{"three-line":""},on:{click:e.click}},[n("v-list-item-avatar",[n("v-img",{attrs:{src:e.imageDomain+t.head}})],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("\n                "+e._s(t.name)+"\n              ")]),e._v(" "),n("v-list-item-subtitle",{domProps:{textContent:e._s(t.content)}}),e._v(" "),n("v-list-item-subtitle",[t.isRead?n("span",{staticStyle:{color:"green"}},[n("v-icon",{attrs:{color:"success"}},[e._v("\n                    mdi-check\n                  ")]),e._v("\n                  站长已读\n                ")],1):e._e()])],1),e._v(" "),n("v-list-item-icon",[n("span",{staticStyle:{"font-size":"10px",color:"#757575"}},[e._v(e._s(e._f("formatTime")(t.createTime)))])])],1),e._v(" "),n("v-divider",{key:r})]}))],2),e._v(" "),e.data.pages>1?[n("v-pagination",{staticClass:"mt-12 px-3",attrs:{length:e.data.pages,"total-visible":5,circle:""},on:{input:e.toPage},model:{value:e.data.current,callback:function(t){e.$set(e.data,"current",t)},expression:"data.current"}})]:e._e()]],2)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VAlert:d.a,VBreadcrumbs:v.a,VBtn:h.a,VCard:x.a,VDivider:f.a,VIcon:_.a,VImg:w.a,VList:k.a,VListItem:V.a,VListItemAvatar:$.a,VListItemContent:C.a,VListItemIcon:S.a,VListItemSubtitle:C.b,VListItemTitle:C.c,VPagination:T.a,VSheet:I.a,VSkeletonLoader:y.a,VTextField:L.a,VTextarea:R.a})}}]);