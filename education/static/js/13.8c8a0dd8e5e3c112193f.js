webpackJsonp([13],{"+vEQ":function(e,s,t){e.exports=t.p+"static/img/video.7c6604a.png"},"43ZR":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=t("mvHQ"),a=t.n(i),r=t("NYxO"),o=t("Q+V3"),n={name:"",data:function(){return{num:1,timer:null,liW:0,classTypeList:[],classIndex:0,classList:[],typeIndex:0,allList:[],showLogin:!1,userInfo:{},userName:"",userImage:""}},computed:Object(r.b)(["homePictureList","homeVideoList","homeRecommendList","homeClassList","homeNavList"]),created:function(){localStorage.getItem("userName")&&localStorage.getItem("userPassword")&&(this.userID=Object(o.a)(localStorage.getItem("userName")),this.password=Object(o.a)(localStorage.getItem("userPassword")),this.loginSubmit()),sessionStorage.getItem("userInfo")&&(this.userInfo=JSON.parse(sessionStorage.getItem("userInfo")),this.showLogin=!0,this.userName=this.userInfo.sm_ui_Name,this.userImage=this.userInfo.sm_ui_HeadImage),this.initData()},methods:{initData:function(){var e=this;this.$store.dispatch("initHomeData",{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",ed_vt_ID:"0",page:1,rows:100}).then(function(){e.$nextTick(function(){e.playPicture()}),e.classList=e.homeClassList.filter(function(e){return!!e.vedio.length})[0].vedio},function(s){e.$notify({message:s,type:"error"})})},playPicture:function(){var e=this;this.liW=document.body.offsetWidth;for(var s=document.getElementById("bigImageList"),t=s.children,i=0;i<t.length;i++)t[i].style.width=this.liW+"px";s.style.width=t.length*this.liW+"px";var a=(t.length-1)*this.liW;function r(e){var t=e.num*e.liW;e.num++,t>a?(s.style.transform="translateX(0px)",e.num=1):s.style.transform="translateX(-"+t+"px)"}this.timer=setInterval(function(){r(e)},5e3),s.onmouseover=function(){clearInterval(e.timer)},s.onmouseout=function(){e.timer=setInterval(function(){r(e)},5e3)}},goLogin:function(){var e=this.$router.resolve({name:"Login"}).href;window.open(e,"_blank")},goRegister:function(){this.$router.push({name:"Register"})},switchSpot:function(e){this.num=e,this.$refs.bigImageList.style.transform="translateX(-"+(this.num-1)*this.liW+"px)",clearInterval(this.timer)},goStudy:function(){this.$router.push({name:"PlayVideo"})},showDetalis:function(e,s){this.allList=e,this.classIndex=s,this.classTypeList=e.children},changeClassType:function(e,s){this.classList=e.vedio,this.typeIndex=s},goPlayRecommendVideo:function(e){var s=this.$router.resolve({name:"VideoSearch",query:{id:e.ed_ss_ID,title:e.ed_ss_Name}}).href;window.open(s,"_blank");var t=e;sessionStorage.setItem("jumpTitle",a()(t))},goPlayVideo:function(e){var s=this.$router.resolve({name:"VideoSearch",query:{id:e.ed_ss_ID,title:e.ed_ss_Name}}).href;window.open(s,"_blank");var t=e;sessionStorage.setItem("jumpTitle",a()(t))},goPlaySeriesVideo:function(e){var s=this.$router.resolve({name:"VideoSearch",query:{id:e.ed_vo_ID}}).href;window.open(s,"_blank")},goSearch:function(e){var s=this.$router.resolve({name:"VideoDetails",query:{id:this.allList.value,name:this.allList.label,cid:e.value,cname:e.label}}).href;window.open(s,"_blank")},outLogin:function(){sessionStorage.removeItem("userInfo"),localStorage.removeItem("userName"),localStorage.removeItem("userPassword"),window.location.reload()},goPersonalCenter:function(){var e=this.$router.resolve({name:"UserInformation"}).href;window.open(e,"_blank")},loginSubmit:function(){var e=this,s={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",userID:this.userID,password:this.password};this.$store.dispatch("loginSubmit",s).then(function(s){e.userInfo=s.data,e.showLogin=!0,e.userName=e.userInfo.sm_ui_Name,e.userImage=e.userInfo.sm_ui_HeadImage},function(s){e.$notify({message:s,type:"error"})})},imageChangeClass:function(e){}},mounted:function(){}},l={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"HomePage"},[t("div",{staticClass:"allNav"},[t("div",{staticClass:"navBigBox"},[t("div",{staticClass:"bigImageBox"},[t("ul",{ref:"bigImageList",staticClass:"bigImageList clearfix",attrs:{id:"bigImageList"}},e._l(e.homePictureList,function(s,i){return t("li",{on:{click:function(t){e.imageChangeClass(s)}}},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.ed_ss_SeriesImageURL,expression:"item.ed_ss_SeriesImageURL"}]})])})),e._v(" "),t("div",{staticClass:"imgNav",attrs:{id:"imgNav"}},e._l(e.homePictureList,function(s,i){return t("a",{class:{active:i+1==e.num},attrs:{href:"javascript:;"},on:{mouseover:function(s){e.switchSpot(i+1)}}})}))]),e._v(" "),t("div",{staticClass:"navBoxContent clearfix"},[t("strong",[e._v("全部课程分类")]),e._v(" "),t("ul",{staticClass:"curriculumType"},e._l(e.homeNavList,function(s,i){return t("li",{directives:[{name:"show",rawName:"v-show",value:s.children.length,expression:"item.children.length"}],staticClass:"clearfix",class:{active:e.classIndex==i},on:{mouseover:function(t){e.showDetalis(s,i)}}},[t("i"),e._v(" "),t("strong",[e._v(e._s(s.label))]),e._v(" "),t("a",{attrs:{href:"javascript:;"},on:{click:function(t){t.stopPropagation(),e.goSearch(s.children[0])}}},[e._v(e._s(s.children[0]?s.children[0].label:""))]),e._v(" "),t("a",{attrs:{href:"javascript:;"},on:{click:function(t){t.stopPropagation(),e.goSearch(s.children[1])}}},[e._v(e._s(s.children[1]?s.children[1].label:""))]),e._v(" "),t("span")])})),e._v(" "),t("div",{staticClass:"allList clearfix"},e._l(e.classTypeList,function(s,i){return t("a",{attrs:{href:"javascript:;"},on:{click:function(t){e.goSearch(s)}}},[e._v(e._s(s.label))])})),e._v(" "),t("div",{staticClass:"LoginBox"},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.showLogin,expression:"!showLogin"}]},[t("div",{staticClass:"headPortrait"}),e._v(" "),t("button",{staticClass:"loginBtn",on:{click:e.goLogin}},[e._v("登录")]),e._v(" "),t("button",{staticClass:"registerBtn",on:{click:e.goRegister}},[e._v("注册")])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showLogin,expression:"showLogin"}],staticClass:"loginOutBox clearfix"},[t("div",{staticClass:"headerIcon"},[t("img",{attrs:{src:e.userImage,width:"46",height:"46"}})]),e._v(" "),t("div",{staticClass:"headerInfo"},[t("strong",{on:{click:e.goPersonalCenter}},[e._v(e._s(e.userName))]),e._v(" "),t("a",{attrs:{href:"javascript:;"},on:{click:e.outLogin}},[e._v("退出")])])]),e._v(" "),e._m(0)])])])]),e._v(" "),t("section",[t("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"SelectVideo"},[t("span",{staticStyle:{width:"100%",height:"46px","background-color":"#c8c8c8",display:"inline-block"}}),e._v(" "),t("div",{staticClass:"SelectDetail"},[e._m(1),e._v(" "),t("div",{staticClass:"SelectCont"},[e._m(2),e._v(" "),t("div",{staticClass:"RightMenu"},[t("ul",e._l(e.homeVideoList,function(s,i){return t("li",[t("i"),e._v(" "),t("strong",[e._v(e._s(s.ed_re_Name))]),e._v(" "),t("span"),e._v(" "),t("button",{on:{click:e.goStudy}},[e._v("学习")])])}))])])])]),e._v(" "),t("div",{staticClass:"RecommendClass"},[t("span",{staticStyle:{width:"100%",height:"46px","background-color":"#c8c8c8",display:"inline-block"}}),e._v(" "),t("div",{staticClass:"RecommendDetail"},[t("div",{staticClass:"RecommendMore"},[t("strong",[e._v("课程推荐")]),e._v(" "),t("router-link",{attrs:{to:"VideoDetails"}},[e._v("更多>>")])],1),e._v(" "),t("ul",{staticClass:"systemCC clearfix"},e._l(e.homeVideoList,function(s,i){return t("li",{on:{click:function(t){e.goPlayRecommendVideo(s)}}},[t("img",{directives:[{name:"show",rawName:"v-show",value:s.ed_ss_SeriesImageURL,expression:"item.ed_ss_SeriesImageURL"},{name:"lazy",rawName:"v-lazy",value:s.ed_ss_SeriesImageURL,expression:"item.ed_ss_SeriesImageURL"}],attrs:{width:"260",height:"190"}}),e._v(" "),t("strong",[e._v(e._s(s.ed_ss_Name))]),e._v(" "),t("div",{staticClass:"clearfix"},[0==s.ed_ss_Price?t("span",{staticStyle:{color:"green"}},[e._v("免费")]):e._e(),e._v(" "),0!=s.ed_ss_Price?t("span",{staticStyle:{color:"#f43232"}},[e._v(e._s("￥"+s.ed_ss_Price))]):e._e(),e._v(" "),t("a",{attrs:{href:"javascript:;"}},[e._v("我要报名")])])])}))])]),e._v(" "),t("div",{staticClass:"systemCurriculum"},[e._m(3),e._v(" "),t("ul",{staticClass:"systemCC clearfix"},e._l(e.homeRecommendList,function(s,i){return t("li",{on:{click:function(t){e.goPlayVideo(s)}}},[t("img",{directives:[{name:"show",rawName:"v-show",value:s.ed_ss_SeriesImageURL,expression:"item.ed_ss_SeriesImageURL"},{name:"lazy",rawName:"v-lazy",value:s.ed_ss_SeriesImageURL,expression:"item.ed_ss_SeriesImageURL"}],attrs:{width:"260",height:"190"}}),e._v(" "),t("strong",[e._v(e._s(s.ed_ss_Name))]),e._v(" "),t("div",{staticClass:"clearfix"},[0==s.ed_vo_Price?t("span",{staticStyle:{color:"green"}},[e._v("免费")]):t("span",{staticStyle:{color:"#f43232"}},[e._v(e._s("￥"+s.ed_ss_Price))]),e._v(" "),t("a",{attrs:{href:"javascript:;"}},[e._v("我要报名")])])])}))]),e._v(" "),t("div",{staticClass:"systemCurriculum"},[t("div",{staticClass:"systemNav"},[t("div",{staticClass:"systemNavCon clearfix"},[t("strong",[e._v("系统课程")]),e._v(" "),t("div",{staticClass:"systemN"},e._l(e.homeClassList,function(s,i){return t("a",{directives:[{name:"show",rawName:"v-show",value:s,expression:"item"}],class:{active:e.typeIndex==i},attrs:{href:"javascript:;"},on:{mouseover:function(t){e.changeClassType(s,i)}}},[e._v(e._s(s.ed_te_Name))])}))])]),e._v(" "),t("ul",{staticClass:"systemCC clearfix"},e._l(e.classList,function(s,i){return t("li",{on:{click:function(t){e.goPlaySeriesVideo(s)}}},[t("img",{directives:[{name:"show",rawName:"v-show",value:s.ed_ss_SeriesImageURL,expression:"item.ed_ss_SeriesImageURL"}],attrs:{src:s.ed_ss_SeriesImageURL,width:"260",height:"190"}}),e._v(" "),t("strong",[e._v(e._s(s.ed_ss_Name))]),e._v(" "),t("div",{staticClass:"clearfix"},[0==s.ed_vo_Price?t("span",{staticStyle:{color:"green"}},[e._v("免费")]):t("span",{staticStyle:{color:"#f43232"}},[e._v(e._s("￥")+e._s(s.ed_ss_Price))]),e._v(" "),t("a",{attrs:{href:"javascript:;"}},[e._v("我要报名")])])])}))])])])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("a",{staticClass:"clearfix",attrs:{href:"javascript:;"}},[s("i"),s("span",[this._v("微信公众号")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"SelectNav"},[t("strong",[e._v("精选视频")]),e._v(" "),t("dl",[t("dd",{staticClass:"active"},[e._v("编程语言")]),e._v(" "),t("dd",[e._v("UI/UE设计")]),e._v(" "),t("dd",[e._v("事业单位")]),e._v(" "),t("dd",[e._v("+修改兴趣")])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"LeftCarousel"},[s("img",{attrs:{src:t("+vEQ"),width:"554",height:"363",alt:""}}),this._v(" "),s("div",{staticClass:"videoIcon"}),this._v(" "),s("div",{staticClass:"videoIntroduce"},[s("div",{staticClass:"teacherImage"}),this._v(" "),s("strong",{staticClass:"teacherName"},[this._v("李强")]),this._v(" "),s("span",{staticClass:"videoName"},[this._v("网站架构建设基础")])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"systemNav"},[s("div",{staticClass:"systemNavCon clearfix"},[s("strong",[this._v("免费公开课")])])])}]};var c=t("VU/8")(n,l,!1,function(e){t("NgcL")},"data-v-78d6a7fd",null);s.default=c.exports},NgcL:function(e,s){}});