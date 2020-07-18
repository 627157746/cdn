(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{538:function(e,t,r){},540:function(e,t,r){"use strict";r(11),r(8),r(6),r(4),r(9);var n=r(2),o=(r(538),r(13)),c=r(3);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(c.a)(o.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(e){return e("div",{staticClass:"v-subheader",class:d({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},578:function(e,t,r){"use strict";r.r(t);r(83);var n=r(22),o=r(148),c={data:function(){return{valid:!0,loading:!1,captchaUrl:"/api/users/captcha?"+new Date,registerForm:{email:void 0,nickname:void 0,password:void 0,captcha:void 0,passwords:void 0},passwordShow:!1,emailRules:[function(e){return!!e||"登录邮箱不能为空"},function(e){return/.+@.+\..+/.test(e)||"不是正确的邮箱"}],nicknameRules:[function(e){return!!e||"昵称不能为空"},function(e){return e&&e.length>=3&&e.length<=8||"昵称不能少于3位大于8位"}],passwordRules:[function(e){return!!e||"密码不能为空"},function(e){return e&&e.length>=7&&e.length<=20||"密码不能少于7大于20位"}],captchaRules:[function(e){return!!e||"验证码不能为空"}]}},computed:{passwordsRules:function(){var e=this,t=[];return t.push((function(t){return t===e.registerForm.password||"两次输入密码不一致"})),t}},methods:{register:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=14;break}return e.loading=!0,t.next=5,Object(o.e)(e.$axios,e.registerForm);case 5:if(r=t.sent,200!==r.code){t.next=13;break}return e.$toast.success("注册成功！"),n={username:e.registerForm.email,password:e.registerForm.password},t.next=12,e.$store.dispatch("auth/login",n);case 12:window.history.length<=1?e.$router.push({path:"/"}):e.$router.go(-1);case 13:e.loading=!1;case 14:case"end":return t.stop()}}),t)})))()}},head:function(){return{title:"注册"}}},l=r(38),d=r(47),m=r.n(d),f=r(192),h=r(511),w=r(530),v=r(153),x=r(540),k=r(517),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{height:"100%"}},[r("v-form",{ref:"form",staticClass:"mx-auto pa-3 pt-sm-12",staticStyle:{"max-width":"500px"},attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("h1",{staticClass:"text-center"},[e._v("\n      注册账号\n    ")]),e._v(" "),r("v-text-field",{attrs:{"append-icon":"mdi-email",rules:e.emailRules,label:"邮箱",required:""},model:{value:e.registerForm.email,callback:function(t){e.$set(e.registerForm,"email",t)},expression:"registerForm.email"}}),e._v(" "),r("v-text-field",{attrs:{"append-icon":"mdi-account",rules:e.nicknameRules,label:"昵称",required:""},model:{value:e.registerForm.nickname,callback:function(t){e.$set(e.registerForm,"nickname",t)},expression:"registerForm.nickname"}}),e._v(" "),r("v-text-field",{attrs:{"append-icon":e.passwordShow?"mdi-eye":"mdi-eye-off",type:e.passwordShow?"text":"password",rules:e.passwordRules,label:"密码",required:""},on:{"click:append":function(t){e.passwordShow=!e.passwordShow}},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}}),e._v(" "),r("v-text-field",{attrs:{"append-icon":e.passwordShow?"mdi-eye":"mdi-eye-off",type:e.passwordShow?"text":"password",rules:e.passwordsRules,label:"再次输入密码",required:""},on:{"click:append":function(t){e.passwordShow=!e.passwordShow}},model:{value:e.registerForm.passwords,callback:function(t){e.$set(e.registerForm,"passwords",t)},expression:"registerForm.passwords"}}),e._v(" "),r("div",{staticClass:"d-flex"},[r("v-text-field",{staticClass:"mr-2",attrs:{"append-icon":"mdi-fencing",rules:e.captchaRules,label:"验证码",required:""},on:{"click:append":function(t){e.passwordShow=!e.passwordShow}},model:{value:e.registerForm.captcha,callback:function(t){e.$set(e.registerForm,"captcha",t)},expression:"registerForm.captcha"}}),e._v(" "),r("v-img",{attrs:{src:e.captchaUrl,height:"50",contain:""},on:{click:function(t){e.captchaUrl="/api/users/captcha?"+new Date}}})],1),e._v(" "),r("v-btn",{staticClass:"mr-4",attrs:{color:"success"},on:{click:e.register}},[e._v("\n      注册\n    ")]),e._v(" "),r("v-subheader",{staticClass:"my-3"},[e._v("\n      已有账号?立即\n      "),r("v-btn",{attrs:{text:"",nuxt:"",to:"/login",color:"pink"}},[e._v("\n        登录\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:f.a,VCard:h.a,VForm:w.a,VImg:v.a,VSubheader:x.a,VTextField:k.a})}}]);