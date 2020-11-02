(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{637:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=function(e){return e.$get("/videos",{progress:!1})},o=function(e,data){return e.$post("/videos/score",data,{progress:!1})}},638:function(e,t,n){},642:function(e,t,n){"use strict";var r=n(638);n.n(r).a},651:function(e,t,n){"use strict";n.r(t);n(27),n(31),n(100);var r=n(30),video=n(637),o={middleware:"video-client",fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(video.a)(e.$axios).then((function(e){return e.data}));case 2:e.videos=t.sent;case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{videos:[],video:null,loop:!1,current:0,error:!1,show:!1,loading:!1,iconPlayShow:!1,likeList:[],dislikeList:[]}},computed:{disableLike:function(){return function(e){return this.likeList.includes(e)}},disableDislike:function(){return function(e){return this.dislikeList.includes(e)}}},watch:{"$fetchState.pending":function(){this.playVideo()}},destroyed:function(){this.video.pause(),this.video.src=""},mounted:function(){var e=this;document.onkeyup=function(t){switch(t.code){case"ArrowUp":e.changeVideo(!1);break;case"ArrowDown":e.changeVideo(!0)}},this.playVideo()},methods:{playVideo:function(){var e=this;this.$fetchState.pending||(this.video=this.$refs.video,setTimeout((function(){e.video.play(),e.video.paused&&(e.iconPlayShow=!0)}),100))},changeVideo:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(document.fullscreenElement?t.show=!0:t.show=!1,t.error=!1,setTimeout((function(){t.video.pause(),t.iconPlayShow=!1,e?t.current+=1:t.current>0&&(t.current-=1),t.video.src=t.videos[t.current],t.video.play(),t.video.paused&&(t.iconPlayShow=!0)}),500),!(t.videos.length-t.current<=3)){n.next=9;break}return n.next=6,Object(video.a)(t.$axios);case 6:r=n.sent,r.data.forEach((function(e){t.videos.push(e)}));case 9:case"end":return n.stop()}}),n)})))()},pauseVideo:function(){var e=this;this.video.paused?setTimeout((function(){e.iconPlayShow=!1,e.video.play()}),100):setTimeout((function(){e.iconPlayShow=!0,e.video.pause()}),100)},canPlay:function(){this.loading=!1,this.show=!0},waiting:function(){this.loading=!0},onPlayerEnded:function(){this.changeVideo()},videoLoadError:function(){this.error=!0},fullscreenVideo:function(){var video=this.video;video.requestFullScreen?video.requestFullScreen():video.mozRequestFullScreen?video.mozRequestFullScreen():video.webkitRequestFullScreen?video.webkitRequestFullScreen():video.msRequestFullscreen?video.msRequestFullscreen():this.$toast.show("抱歉您的浏览器不支持全屏播放")},like:function(e){this.likeList.push(e);var data={url:e,type:1};Object(video.b)(this.$axios,data)},dislike:function(e){this.dislikeList.push(e);var data={url:e,type:2};Object(video.b)(this.$axios,data)}},head:function(){return{title:"短视频"}}},c=(n(642),n(53)),l=n(64),d=n.n(l),v=n(136),h=n(223),f=n(224),w=n(172),m=n(229),k=n(137),y=n(605),_=n(618),S=n(584),x=n.n(S),V=n(46),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"video-box d-flex justify-center align-center"},[e.videos?[n("div",{staticClass:"video",staticStyle:{position:"relative"}},[n("transition",{attrs:{name:"fade"}},[n("video",{directives:[{name:"show",rawName:"v-show",value:e.show&&!e.error,expression:"show&&!error"}],ref:"video",staticClass:"video",attrs:{preload:"",loop:e.loop,src:e.videos[0]},on:{click:e.pauseVideo,ended:e.onPlayerEnded,waiting:e.waiting,canplay:e.canPlay,error:function(t){return t.preventDefault(),e.videoLoadError(t)}}})]),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("v-overlay",{directives:[{name:"show",rawName:"v-show",value:!e.show&&!e.error||e.loading,expression:"(!show&&!error)||loading"}],attrs:{opacity:"0.1",value:!0,absolute:""}},[n("v-progress-circular",{attrs:{color:"pink",indeterminate:"",size:"64"}})],1)],1),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticClass:"load-error"},[n("v-card",{staticClass:"load-error d-flex align-center justify-center"},[n("v-chip",{attrs:{color:"pink",label:"",outlined:""}},[e._v("\n              视频加载失败请切换视频或者刷新浏览器！\n            ")])],1)],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.iconPlayShow&&!e.error,expression:"iconPlayShow&&!error"}],staticClass:"icon-play",staticStyle:{left:"50%"}},[n("v-btn",{attrs:{fab:"",dark:"",large:"",color:"grey darken-3"},on:{click:e.pauseVideo}},[n("v-icon",[e._v("\n            mdi-play\n          ")])],1)],1)],1),e._v(" "),n("div",{staticClass:"d-flex flex-column mx-5"},[n("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"my-2",attrs:{fab:"",dark:"",large:"",color:"pink",disabled:e.disableLike(e.videos[e.current])},on:{click:function(t){return e.like(e.videos[e.current])}}},"v-btn",o,!1),r),[n("v-icon",[e._v("\n              mdi-heart\n            ")])],1)]}}],null,!1,740837772)},[e._v(" "),n("span",[e._v("喜欢")])]),e._v(" "),n("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"my-2",attrs:{fab:"",dark:"",large:"",color:"grey",disabled:e.disableDislike(e.videos[e.current])},on:{click:function(t){return e.dislike(e.videos[e.current])}}},"v-btn",o,!1),r),[n("v-icon",[e._v("\n              mdi-thumb-down\n            ")])],1)]}}],null,!1,2449808362)},[e._v(" "),n("span",[e._v("不喜欢")])]),e._v(" "),n("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"my-2",attrs:{fab:"",dark:"",large:"",color:"light-blue"},on:{click:function(t){return e.changeVideo(!0)}}},"v-btn",o,!1),r),[n("v-icon",[e._v("\n              mdi-autorenew\n            ")])],1)]}}],null,!1,945918304)},[e._v(" "),n("span",[e._v("切换")])]),e._v(" "),n("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"my-2",attrs:{fab:"",dark:"",large:"",color:"light-green"},on:{click:e.fullscreenVideo}},"v-btn",o,!1),r),[n("v-icon",[e._v("\n              mdi-fullscreen\n            ")])],1)]}}],null,!1,423684791)},[e._v(" "),n("span",[e._v("全屏")])]),e._v(" "),n("v-switch",{attrs:{primary:"",color:"orange",label:"循环播放"},model:{value:e.loop,callback:function(t){e.loop=t},expression:"loop"}}),e._v(" "),n("v-chip",{attrs:{color:"pink",outlined:""}},[e._v("\n        键盘上下按键切换视频!\n      ")])],1)]:[n("v-chip",{attrs:{color:"pink",label:"",outlined:""}},[e._v("\n      无法获取到视频源\n    ")])]],2)}),[],!1,null,"02e2fb2c",null);t.default=component.exports;d()(component,{VBtn:v.a,VCard:h.a,VChip:f.a,VIcon:w.a,VOverlay:m.a,VProgressCircular:k.a,VSwitch:y.a,VTooltip:_.a}),x()(component,{Ripple:V.a})}}]);