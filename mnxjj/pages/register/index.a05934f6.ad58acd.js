(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{648:function(e,r,t){"use strict";t.r(r);t(100);var n=t(30),o=t(168),c={data:function(){return{valid:!0,loading:!1,captchaUrl:"/api/users/captcha?"+new Date,registerForm:{email:void 0,nickname:void 0,password:void 0,captcha:void 0,passwords:void 0},passwordShow:!1,emailRules:[function(e){return!!e||"登录邮箱不能为空"},function(e){return/.+@.+\..+/.test(e)||"不是正确的邮箱"}],nicknameRules:[function(e){return!!e||"昵称不能为空"},function(e){return e&&e.length>=3&&e.length<=8||"昵称不能少于3位大于8位"}],passwordRules:[function(e){return!!e||"密码不能为空"},function(e){return e&&e.length>=7&&e.length<=20||"密码不能少于7大于20位"}],captchaRules:[function(e){return!!e||"验证码不能为空"}]}},computed:{passwordsRules:function(){var e=this,r=[];return r.push((function(r){return r===e.registerForm.password||"两次输入密码不一致"})),r}},methods:{register:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.$refs.form.validate()){r.next=14;break}return e.loading=!0,r.next=5,Object(o.e)(e.$axios,e.registerForm);case 5:if(t=r.sent,200!==t.code){r.next=13;break}return e.$toast.success("注册成功！"),n={username:e.registerForm.email,password:e.registerForm.password},r.next=12,e.$store.dispatch("auth/login",n);case 12:window.history.length<=1?e.$router.push({path:"/"}):e.$router.go(-1);case 13:e.loading=!1;case 14:case"end":return r.stop()}}),r)})))()}},head:function(){return{title:"注册"}}},l=t(53),d=t(64),m=t.n(d),w=t(136),h=t(223),f=t(611),v=t(141),x=t(227),k=t(75),component=Object(l.a)(c,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-card",{attrs:{height:"100%"}},[t("v-form",{ref:"form",staticClass:"mx-auto pa-3 pt-sm-12",staticStyle:{"max-width":"500px"},attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(r){e.valid=r},expression:"valid"}},[t("h1",{staticClass:"text-center"},[e._v("\n      注册账号\n    ")]),e._v(" "),t("v-text-field",{attrs:{"append-icon":"mdi-email",rules:e.emailRules,label:"邮箱",required:""},model:{value:e.registerForm.email,callback:function(r){e.$set(e.registerForm,"email",r)},expression:"registerForm.email"}}),e._v(" "),t("v-text-field",{attrs:{"append-icon":"mdi-account",rules:e.nicknameRules,label:"昵称",required:""},model:{value:e.registerForm.nickname,callback:function(r){e.$set(e.registerForm,"nickname",r)},expression:"registerForm.nickname"}}),e._v(" "),t("v-text-field",{attrs:{"append-icon":e.passwordShow?"mdi-eye":"mdi-eye-off",type:e.passwordShow?"text":"password",rules:e.passwordRules,label:"密码",required:""},on:{"click:append":function(r){e.passwordShow=!e.passwordShow}},model:{value:e.registerForm.password,callback:function(r){e.$set(e.registerForm,"password",r)},expression:"registerForm.password"}}),e._v(" "),t("v-text-field",{attrs:{"append-icon":e.passwordShow?"mdi-eye":"mdi-eye-off",type:e.passwordShow?"text":"password",rules:e.passwordsRules,label:"再次输入密码",required:""},on:{"click:append":function(r){e.passwordShow=!e.passwordShow}},model:{value:e.registerForm.passwords,callback:function(r){e.$set(e.registerForm,"passwords",r)},expression:"registerForm.passwords"}}),e._v(" "),t("div",{staticClass:"d-flex"},[t("v-text-field",{staticClass:"mr-2",attrs:{"append-icon":"mdi-fencing",rules:e.captchaRules,label:"验证码",required:""},on:{"click:append":function(r){e.passwordShow=!e.passwordShow}},model:{value:e.registerForm.captcha,callback:function(r){e.$set(e.registerForm,"captcha",r)},expression:"registerForm.captcha"}}),e._v(" "),t("v-img",{attrs:{src:e.captchaUrl,height:"50",contain:""},on:{click:function(r){e.captchaUrl="/api/users/captcha?"+new Date}}})],1),e._v(" "),t("v-btn",{staticClass:"mr-4",attrs:{color:"success"},on:{click:e.register}},[e._v("\n      注册\n    ")]),e._v(" "),t("v-subheader",{staticClass:"my-3"},[e._v("\n      已有账号?立即\n      "),t("v-btn",{attrs:{text:"",nuxt:"",to:"/login",color:"pink"}},[e._v("\n        登录\n      ")])],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports;m()(component,{VBtn:w.a,VCard:h.a,VForm:f.a,VImg:v.a,VSubheader:x.a,VTextField:k.a})}}]);