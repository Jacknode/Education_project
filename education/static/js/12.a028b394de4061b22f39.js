webpackJsonp([12],{"+8Rx":function(e,s){},fiWk:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("mvHQ"),o=t.n(a),r=t("NYxO"),i=t("Q+V3"),n={computed:Object(r.b)([]),data:function(){return{checked:!0,userID:"",password:"",loginType:["密码登录","短信登录"],loginTypeId:0,showPassworld:!0,telePhone:"",messageNum:"",sendOut:"发送验证码",isTrue:!1}},methods:{loginSubmit:function(){var e=this;if(this.userID)if(this.password){this.checked?(localStorage.setItem("userName",Object(i.b)(this.userID)),localStorage.setItem("userPassword",Object(i.b)(this.password))):localStorage.getItem("userName")&&localStorage.getItem("userPassword")&&(localStorage.removeItem("userName"),localStorage.removeItem("userPassword"));var s={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",userID:this.userID,password:this.password};this.$store.dispatch("loginSubmit",s).then(function(s){e.$notify({message:s.resultcontent,type:"success"}),e.userID="",e.password="",sessionStorage.setItem("userInfo",o()(s.data)),e.$router.push({name:"Home"})},function(s){e.$notify({message:s,type:"error"})})}else this.$notify({message:"请输入密码!!",type:"error"});else this.$notify({message:"请输入账号!!",type:"error"})},changeLoginTyle:function(e){this.loginTypeId=e,this.showPassworld=!e},sendMessage:function(){var e=this;if(!this.isTrue)if(this.telePhone){var s={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",phone:this.telePhone,sendType:"2"};this.isTrue=!0;var t=60,a=setInterval(function(){t--,e.sendOut="重新发送("+t+"s)",0==t&&(e.sendOut="重新发送",e.isTrue=!1,clearInterval(a))},1e3);this.$store.dispatch("sendMessageLogin",s).then(function(s){e.$notify({message:s,type:"success"})},function(s){e.$notify({message:s,type:"error"})})}else this.$notify({message:"请输入手机号!!",type:"error"})},messageLoginSubmit:function(){var e=this;if(this.telePhone)if(this.messageNum){var s={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",phone:this.telePhone,validateNo:this.messageNum};this.$store.dispatch("messageLoginSubmit",s).then(function(s){e.$notify({message:s.resultcontent,type:"success"}),e.telePhone="",e.messageNum="",sessionStorage.setItem("userInfo",o()(s.data)),e.$router.push({name:"Home"})},function(s){e.$notify({message:s,type:"error"})})}else this.$notify({message:"请输入动态密码!!",type:"error"});else this.$notify({message:"请输入手机号!!",type:"error"})}},mounted:function(){var e=this;document.addEventListener("keydown",function(s){13==s.keyCode&&(0==e.loginTypeId?e.loginSubmit():e.messageLoginSubmit())})}},l={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{attrs:{id:"wrap"}}),e._v(" "),t("div",{attrs:{id:"contentBox"}},[t("div",{attrs:{id:"content"}},[e._m(0),e._v(" "),t("section",[t("div",{staticClass:"qrCode"}),e._v(" "),t("div",{staticClass:"loginType clearfix"},e._l(e.loginType,function(s,a){return t("a",{class:{active:e.loginTypeId==a},attrs:{href:"javascript:;"},on:{click:function(s){e.changeLoginTyle(a)}}},[e._v(e._s(s))])})),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showPassworld,expression:"showPassworld"}],staticClass:"loginForm"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.userID,expression:"userID"}],attrs:{type:"text",placeholder:"手机号/邮箱"},domProps:{value:e.userID},on:{input:function(s){s.target.composing||(e.userID=s.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}}),e._v(" "),t("input",{attrs:{type:"button",value:"登录"},on:{click:e.loginSubmit}})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.showPassworld,expression:"!showPassworld"}],staticClass:"messageLogin"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.telePhone,expression:"telePhone"}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:e.telePhone},on:{input:function(s){s.target.composing||(e.telePhone=s.target.value)}}}),e._v(" "),t("div",{staticClass:"messageNum clearfix"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.messageNum,expression:"messageNum"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:e.messageNum},on:{input:function(s){s.target.composing||(e.messageNum=s.target.value)}}}),e._v(" "),t("button",{on:{click:e.sendMessage}},[e._v(e._s(e.sendOut))])]),e._v(" "),t("button",{on:{click:e.messageLoginSubmit}},[e._v("登录")])]),e._v(" "),t("div",{staticClass:"loginTo clearfix"},[t("strong",[t("el-checkbox",{model:{value:e.checked,callback:function(s){e.checked=s},expression:"checked"}},[e._v("下次自动登录")])],1),e._v(" "),t("span",[t("router-link",{attrs:{to:"Register"}},[e._v("注册")])],1)])]),e._v(" "),e._m(1)])])])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("header",{staticClass:"clearfix"},[s("div",{staticClass:"logo"},[this._v("LOGO")]),this._v(" "),s("span"),this._v(" "),s("strong",[this._v("通行证")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("footer",[t("strong",[e._v("Copyright © 2018 Tencent. All Rights Reserved. 版权所有")]),t("span",[e._v("|")]),t("a",{attrs:{href:"javascript:;"}},[e._v("课堂服务协议")]),t("span",[e._v("|")]),t("a",{attrs:{href:"javascript:;"}},[e._v("站点地图")]),t("span",[e._v("|")]),t("a",{attrs:{href:"javascript:;"}},[e._v("侵权投诉")]),t("span",[e._v("|")]),t("a",{attrs:{href:"javascript:;"}},[e._v("问题反馈")]),t("span",[e._v("|")]),t("a",{attrs:{href:"javascript:;"}},[e._v("帮助")])])}]};var u=t("VU/8")(n,l,!1,function(e){t("mflu"),t("+8Rx")},"data-v-a87d6d62",null);s.default=u.exports},mflu:function(e,s){}});