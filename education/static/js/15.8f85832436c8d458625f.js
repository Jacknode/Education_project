webpackJsonp([15],{"zGR/":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("NYxO"),r=t("jvWE"),n={computed:Object(a.b)([]),data:function(){return{checked:!0,telePhone:"",userPassworld:"",messageNum:"",outSend:"发送短信",num:60,isTrue:!1}},methods:{sendRegisterMessage:function(){if(Object(r.b)(this.telePhone)){var e={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",phone:this.telePhone,sendType:"0"};return this.$store.dispatch("sendRegisterMessage",e)}this.$notify({message:"手机号格式不正确!!",type:"error"})},sendMessage:function(){var e=this;if(Object(r.b)(this.telePhone)){if(!this.isTrue){this.isTrue=!0;var s=setInterval(function(){e.num--,e.outSend="重新发送("+e.num+"s)",e.num<=0&&(e.outSend="重新发送",e.isTrue=!1,e.num=60,clearInterval(s))},1e3);this.sendRegisterMessage().then(function(s){e.$notify({message:s,type:"success"})},function(t){e.$notify({message:t,type:"error"}),clearInterval(s)})}}else this.$notify({message:"手机号格式不正确!!",type:"error"})},registerSubmit:function(){var e=this;if(Object(r.b)(this.telePhone)&&this.userPassworld&&this.messageNum){var s={loginUserID:"huileyou",loginUserPass:"123",phone:this.telePhone,extensionID:"",password:this.userPassworld,validateNo:this.messageNum};this.$store.dispatch("registerSubmit",s).then(function(s){e.$notify({message:s,type:"success"}),setTimeout(function(){var s=e.$router.resolve({name:"Login"}).href;window.open(s,"_blank")},500)},function(s){e.$notify({message:s,type:"error"})})}else this.$notify({message:"请将注册信息填写完整并核对手机号是否正确!!",type:"error"})},goLogin:function(){var e=this.$router.resolve({name:"Login"}).href;window.open(e,"_blank")}}},i={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{attrs:{id:"wrapBox"}}),e._v(" "),t("div",{attrs:{id:"wrap"}},[t("header",{staticClass:"clearfix"},[e._m(0),e._v(" "),t("div",{staticClass:"goHome"},[t("span",[e._v("已有账号,")]),e._v(" "),t("a",{staticClass:"login",attrs:{href:"javascript:;"},on:{click:e.goLogin}},[e._v("登录")]),e._v(" "),t("em"),e._v(" "),t("router-link",{attrs:{to:"Home"}},[e._v("返回首页")])],1)]),e._v(" "),t("section",[t("h2",[e._v("注册会员")]),e._v(" "),t("div",[t("div",{staticClass:"formBox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.telePhone,expression:"telePhone"}],attrs:{placeholder:"请输入手机号"},domProps:{value:e.telePhone},on:{input:function(s){s.target.composing||(e.telePhone=s.target.value)}}}),e._v(" "),t("div",{staticClass:"messageBox clearfix"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.messageNum,expression:"messageNum"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:e.messageNum},on:{input:function(s){s.target.composing||(e.messageNum=s.target.value)}}}),e._v(" "),t("button",{on:{click:e.sendMessage}},[e._v(e._s(e.outSend))])]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.userPassworld,expression:"userPassworld"}],attrs:{placeholder:"请输入密码",type:"password"},domProps:{value:e.userPassworld},on:{input:function(s){s.target.composing||(e.userPassworld=s.target.value)}}})]),e._v(" "),t("div",{staticClass:"userFont"},[t("el-checkbox",{model:{value:e.checked,callback:function(s){e.checked=s},expression:"checked"}}),e._v(" "),t("span",{attrs:{unselectable:"on"}},[e._v("我已阅读并接受用户协议")])],1),e._v(" "),t("div",{staticClass:"registerSub"},[t("button",{on:{click:e.registerSubmit}},[e._v("注册")])])])]),e._v(" "),e._m(1)])])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"logoBox"},[s("div",[this._v("logo")]),this._v(" "),s("strong",[this._v("通行证")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("footer",[t("strong",[e._v("Copyright © 2018 Tencent. All Rights Reserved. 版权所有")]),t("span",[e._v("|")]),t("a",{attrs:{href:"javascript:;"}},[e._v("课堂服务协议")]),t("span",[e._v("|")]),t("a",{attrs:{href:"javascript:;"}},[e._v("站点地图")]),t("span",[e._v("|")]),t("a",{attrs:{href:"javascript:;"}},[e._v("侵权投诉")]),t("span",[e._v("|")]),t("a",{attrs:{href:"javascript:;"}},[e._v("问题反馈")]),t("span",[e._v("|")]),t("a",{attrs:{href:"javascript:;"}},[e._v("帮助")])])}]};var o=t("VU/8")(n,i,!1,function(e){t("zX/7")},"data-v-5f8f13a0",null);s.default=o.exports},"zX/7":function(e,s){}});