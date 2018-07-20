<template>
  <!--教育首页-->
  <div class="HomePage">
    <div class="allNav">
      <!--大导航-->
      <div class="navBigBox">
        <div class="bigImageBox">
          <ul class="bigImageList clearfix" id="bigImageList" ref="bigImageList">
            <li v-for="item,index in homePictureList" @click="imageChangeClass(item)"><img v-lazy="item.ed_re_SeriesImageURL"></li>
          </ul>
          <div class="imgNav" id="imgNav">
            <a href="javascript:;"
               v-for="item,index in homePictureList"
               :class="{active:index+1 == num}"
               @mouseover="switchSpot(index+1)"
            ></a>
          </div>
        </div>
        <div class="navBoxContent clearfix">
          <strong>全部课程分类</strong>
          <ul class="curriculumType">
            <li
              class="clearfix"
              :class="{active: classIndex == index}"
              v-for="item,index in homeNavList"
              v-show="item.children.length"
              @mouseover="showDetalis(item,index)"
            >
              <i></i>
              <strong>{{item.label}}</strong>
              <a href="javascript:;" @click.stop="goSearch(item.children[0])">{{item.children[0] ? item.children[0].label : ''}}</a>
              <a href="javascript:;" @click.stop="goSearch(item.children[1])">{{item.children[1] ? item.children[1].label : ''}}</a>
              <span></span>
            </li>
          </ul>
          <div class="allList clearfix">
            <a
              href="javascript:;"
              v-for="item,index in classTypeList"
              @click="goSearch(item)"
            >{{item.label}}</a>
          </div>
          <div class="LoginBox">
            <div v-show="!showLogin">
              <div class="headPortrait"></div>
              <button class="loginBtn" @click="goLogin">登录</button>
              <button class="registerBtn" @click="goRegister">注册</button>
            </div>
            <div class="loginOutBox clearfix" v-show="showLogin">
              <div class="headerIcon">
                <img :src="userImage" width="46" height="46">
              </div>
              <div class="headerInfo">
                <strong @click="goPersonalCenter">{{userName}}</strong>
                <a href="javascript:;" @click="outLogin">退出</a>
              </div>
            </div>
            <a href="javascript:;" class="clearfix"><i></i><span>微信公众号</span></a>
          </div>
          <!--登录 & 注册-->

        </div>
      </div>
    </div>

    <section>
      <!--精选视频-->
      <div class="SelectVideo" v-show="false">
        <!--模块线-->
        <span style="width: 100%;height: 46px;background-color: #c8c8c8;display: inline-block;"></span>
        <!--精选视频详情-->
        <div class="SelectDetail">
          <!--精选视频nav-->
          <div class="SelectNav">
            <strong>精选视频</strong>
            <dl>
              <dd class="active">编程语言</dd>
              <dd>UI/UE设计</dd>
              <dd>事业单位</dd>
              <dd>+修改兴趣</dd>
            </dl>
          </div>
          <!--精选视频内容-->
          <div class="SelectCont">
            <!--content detail-->
            <div class="LeftCarousel">
              <img src="../../assets/img/video.png" width="554" height="363" alt="">
              <div class="videoIcon"></div>
              <div class="videoIntroduce">
                <div class="teacherImage"></div>
                <strong class="teacherName">李强</strong>
                <span class="videoName">网站架构建设基础</span>
              </div>
            </div>
            <!--右边菜单栏-->
            <div class="RightMenu">
              <ul>
                <li v-for="item,index in homeVideoList">
                  <i></i>
                  <!--课程名-->
                  <strong>{{item.ed_re_Name}}</strong>
                  <!--时长-->
                  <span></span>
                  <!--btn-->
                  <button @click="goStudy">学习</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <!--课程推荐-->
      <div class="RecommendClass">
        <!--模块线-->
        <span style="width: 100%;height: 46px;background-color: #c8c8c8;display: inline-block"></span>
        <!--推荐详情-->
        <div class="RecommendDetail">
          <div class="RecommendMore">
            <strong>课程推荐</strong>
            <router-link to="VideoSearch">更多&gt;&gt;</router-link>
          </div>
          <!--推荐内容-->
          <ul class="systemCC clearfix">
            <li v-for="item,index in homeVideoList" @click="goPlayVideo(item)">
              <img v-lazy="item.ed_vo_ImageURL" width="260" height="190">
              <strong>{{item.ed_vo_Title}}</strong>
              <div class="clearfix">
                <span v-if="item.ed_vo_Price == 0" style="color: green;">免费</span>
                <span v-if="item.ed_vo_Price != 0" style="color: #f43232;">{{'￥' + item.ed_vo_Price}}</span>
                <a href="javascript:;">我要报名</a>
              </div>
            </li>
          </ul>
        </div>
      </div>


      <!--免费公开课-->
      <div class="systemCurriculum">
        <div class="systemNav">
          <div class="systemNavCon clearfix">
            <strong>免费公开课</strong>
            <!--<div class="systemN">-->
            <!--<a href="javascript:;">平面设计</a>-->
            <!--<a href="javascript:;">事业单位</a>-->
            <!--<a href="javascript:;">考研</a>-->
            <!--<a href="javascript:;">地方公务员</a>-->
            <!--</div>-->
          </div>
        </div>
        <ul class="systemCC clearfix">
          <li v-for="item,index in homeRecommendList" @click="goPlayVideo(item)">
            <img v-lazy="item.ed_re_SeriesImageURL" width="260" height="190">
            <strong>{{item.ed_re_Name}}</strong>
            <div class="clearfix">
              <span v-if="item.ed_vo_Price==0" style="color: green;">免费</span>
              <span v-else style="color: #f43232;">{{'￥' + item.ed_vo_Price}}</span>
              <a href="javascript:;">我要报名</a>
            </div>
          </li>
        </ul>
      </div>

      <!--系统课程-->
      <div class="systemCurriculum">
        <div class="systemNav">
          <div class="systemNavCon clearfix">
            <strong>系统课程</strong>
            <div class="systemN">
              <a href="javascript:;"
                 :class="{active:typeIndex == index}"
                 v-for="item,index in homeClassList"
                 v-show="item.vedio.length"
                 @mouseover="changeClassType(item,index)"
              >{{item.ed_te_Name}}</a>
            </div>
          </div>
        </div>
        <ul class="systemCC clearfix">
          <li v-for="item,index in classList" @click="goPlaySeriesVideo(item)">
            <img v-lazy="item.ed_vo_ImageURL" width="260" height="190">
            <strong>{{item.ed_vo_Title}}</strong>
            <div class="clearfix">
              <span v-if="item.ed_vo_Price==0" style="color: green;">免费</span>
              <span v-else style="color: #f43232;">{{'￥'}}{{item.ed_vo_Price!=0&&item.ed_vo_Price?item.ed_vo_Price:'0'}}</span>
              <a href="javascript:;">我要报名</a>
            </div>
          </li>
        </ul>
      </div>


    </section>


  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {Decrypt} from '@/assets/js/crypto'

  export default {
    name: '',
    data() {
      return {
        num: 1,
        timer: null,
        liW: 0,
        classTypeList: [],
        classIndex: 0,
        classList: [],
        typeIndex: 0,
        allList: [],
        showLogin: false,
        userInfo: {},
        userName: '',
        userImage: '',
      }
    },
    computed: mapGetters([
      'homePictureList',
      'homeVideoList',
      'homeRecommendList',
      'homeClassList',
      'homeNavList'
    ]),
    created() {
      if (localStorage.getItem('userName') && localStorage.getItem('userPassword')) {
        this.userID = Decrypt(localStorage.getItem('userName'))
        this.password = Decrypt(localStorage.getItem('userPassword'))
        this.loginSubmit();
      }
      if (sessionStorage.getItem('userInfo')) {
        this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
        this.showLogin = true;
        this.userName = this.userInfo.sm_ui_Name;
        this.userImage = this.userInfo.sm_ui_HeadImage;
      }
      this.initData();
    },
    methods: {
//      初始化首页数据
      initData() {
        let HomeShow = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",        //机器码
          "ed_vt_ID": "0", //类型
          "page": 1,//页码
          "rows": 100//条数
        };
        this.$store.dispatch('initHomeData', HomeShow)
          .then(() => {
            this.$nextTick(() => {
              this.playPicture();
            })
            this.classList = this.homeClassList.filter(item => {
              if (item.vedio.length) {
                return true;
              }
              return false;
            })[0].vedio;
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
      //轮播
      playPicture() {
        this.liW = document.body.offsetWidth;
        let bigImageList = document.getElementById('bigImageList');
        let lis = bigImageList.children;
        for (let i = 0; i < lis.length; i++) {
          lis[i].style.width = this.liW + 'px';
        }
        bigImageList.style.width = lis.length * this.liW + 'px';
        let ulL = (lis.length - 1) * this.liW;

        function timers(_this) {
          let ulP = _this.num * _this.liW;
          _this.num++;
          if (ulP > ulL) {
            bigImageList.style.transform = 'translateX(0px)';
            _this.num = 1;
          } else {
            bigImageList.style.transform = 'translateX(-' + ulP + 'px)';
          }
        }

        this.timer = setInterval(() => {
          timers(this);
        }, 5000);
        bigImageList.onmouseover = () => {
          clearInterval(this.timer)
        }
        bigImageList.onmouseout = () => {
          this.timer = setInterval(() => {
            timers(this);
          }, 5000);
        }
      },

      //去登录
      goLogin() {
        const {href} = this.$router.resolve({
          name: 'Login',
        });
        window.open(href, '_blank')
      },
      //去注册
      goRegister() {
        this.$router.push({name: 'Register'})
      },
      //移入变图片
      switchSpot(index) {
        this.num = index;
        this.$refs.bigImageList.style.transform = 'translateX(-' + (this.num - 1) * this.liW + 'px)';
        clearInterval(this.timer)
      },
      //学习视频
      goStudy() {
        this.$router.push({name: 'PlayVideo'})
      },
      //显示详情
      showDetalis(item, index) {
        this.allList = item;
        this.classIndex = index;
        this.classTypeList = item.children;
      },

      changeClassType(item, index) {
        this.classList = item.vedio;
        this.typeIndex = index;
      },
      //去播放视频
      goPlayVideo(item) {
        console.log(item)
        const {href} = this.$router.resolve({
          name: 'VideoSearch',
          query: {id:item.ed_vo_ID}
        });
        window.open(href, '_blank');
        //存储title
        let jumpTitle=item;

        sessionStorage.setItem('jumpTitle',JSON.stringify(jumpTitle));
      },
      //去播放视频
      goPlaySeriesVideo(item) {
        const {href} = this.$router.resolve({
          name: 'VideoSearch',
          query: {id:item.ed_vo_ID}
        });
        window.open(href, '_blank')
      },
      //带子集的查询
      goSearch(item) {
        const {href} = this.$router.resolve({
          name: 'VideoDetails',
          query: {
            id: this.allList.value,
            name: this.allList.label,
            cid: item.value,
            cname: item.label
          }
        });
        window.open(href, '_blank')
      },
      //退出登录
      outLogin() {
        sessionStorage.removeItem('userInfo');
        localStorage.removeItem('userName')
        localStorage.removeItem('userPassword')
        window.location.reload()
      },
      //去个人中心
      goPersonalCenter() {
        const {href} = this.$router.resolve({
          name: 'UserInformation'
        });
        window.open(href, '_blank')
      },
      //登录提交
      loginSubmit() {
        let userLogin = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "userID": this.userID,//用户编码
          "password": this.password//密码
        }
        this.$store.dispatch('loginSubmit', userLogin)
          .then(data => {
            this.userInfo = data.data;
            this.showLogin = true;
            this.userName = this.userInfo.sm_ui_Name;
            this.userImage = this.userInfo.sm_ui_HeadImage;
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
      imageChangeClass(item){
        console.log(item.ed_re_PropertiesID)
      }
    },
    mounted() {
//        console.log(this.homeVideoList)
        let jumpTitle='';
        sessionStorage.setItem('jumpTitle',jumpTitle);
    },
  }
</script>
<style lang="less" scoped type="text/less">
  button {
    border: none;
    background-color: transparent;
  }

  .navBigBox {
    width: 100%;
    height: 500px;
    position: relative;
  }

  .bigImageBox {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    overflow: hidden;
  }

  .bigImageList {
    transition: .5s;
  }

  .bigImageList > li {
    float: left;
    height: 500px;
  }

  .bigImageList > li img {
    display: block;
    width: 100%;
    height: 500px;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .imgNav {
    position: absolute;
    bottom: 25px;
    right: 10%;
  }

  .imgNav > a {
    float: left;
    width: 16px;
    height: 16px;
    background-color: #999999;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    margin: 0 9px;
  }

  .imgNav > a.active {
    background-color: #fff;
  }

  .navBoxContent > strong {
    font: 16px/45px "微软雅黑";
    width: 282px;
    color: #fff;
    background-color: #0059bd;
    position: absolute;
    top: -45px;
    left: 0;
    text-align: center;
  }

  .navBoxContent {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .navBoxContent .allList {
    position: absolute;
    left: 282px;
    top: 0;
    width: 500px;
    height: 500px;
    background-color: #fff;
    padding: 10px;
    font: 14px/2 "微软雅黑";
    z-index: 1;
    box-shadow: 0 0 10px #ccc;
    opacity: 0;
    transform: rotateY(90deg);
    transition: .5s;
  }

  .allList:hover {
    opacity: 1;
    transform: rotateY(0deg);
  }

  .navBoxContent .allList a {
    float: left;
    margin: 10px 20px;
    color: #808080;
  }

  .navBoxContent .allList a:hover {
    color: #286eb6;
  }

  .curriculumType {
    width: 282px;
    height: 500px;
    background-color: #fff;
    padding: 7px 0;
    float: left;
    position: relative;
    z-index: 1;
  }

  .curriculumType:hover + .allList {
    opacity: 1;
    transform: rotateY(0deg);
  }

  .curriculumType > li {
    font: 14px/60px "微软雅黑";
  }

  .curriculumType > li > i {
    float: left;
    width: 26px;
    height: 26px;
    background: url("../../assets/img/Icon.png") no-repeat;
    margin: 18px 15px 0;
  }

  .curriculumType > li:nth-of-type(1) > i {
    background-position: 0 -299px;
  }

  .curriculumType > li:nth-of-type(2) > i {
    background-position: 0 -339px;
  }

  .curriculumType > li:nth-of-type(3) > i {
    background-position: 0 -379px;
  }

  .curriculumType > li:nth-of-type(4) > i {
    background-position: 0 -419px;
  }

  .curriculumType > li:nth-of-type(5) > i {
    background-position: 0 -459px;
  }

  .curriculumType > li:nth-of-type(6) > i {
    background-position: 0 -499px;
  }

  .curriculumType > li:nth-of-type(7) > i {
    background-position: 0 -539px;
  }

  .curriculumType > li:nth-of-type(8) > i {
    background-position: 0 -579px;
  }

  .curriculumType > li > strong {
    float: left;
    font-size: 17px;
    color: #808080;
  }

  .curriculumType > li > a {
    width: 60px;
    float: left;
    color: #808080;
    margin-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .curriculumType > li > span {
    float: right;
    width: 6px;
    height: 11px;
    background: url("../../assets/img/Icon.png") no-repeat 0 -631px;
    margin: 24px 10px 0 0;
  }

  .curriculumType > li:hover,
  .curriculumType > li.active {
    background-color: #efefef;
  }

  .curriculumType > li:hover > strong,
  .curriculumType > li.active > strong {
    color: #286eb6;
  }

  .curriculumType > li:hover > a,
  .curriculumType > li.active > a {
    color: #286eb6;
  }

  .curriculumType > li:hover > i,
  .curriculumType > li:hover > span,
  .curriculumType > li.active > i,
  .curriculumType > li.active > span {
    background-position-x: -60px;
  }

  .LoginBox {
    float: right;
    width: 190px;
    text-align: center;
    background-color: #fff;
    padding: 18px 0 18px;
    margin-top: 85px;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 10px #ccc;
  }

  .headPortrait {
    width: 90px;
    height: 90px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin: 0 auto;
    background: url("../../assets/img/Icon.png") no-repeat -60px 0;
  }

  .LoginBox button {
    width: 83px;
    font: 12px/2 "微软雅黑";
    border: 2px solid #0461b1;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    display: block;
    margin: 20px auto 0;
  }

  .LoginBox .loginBtn {
    background-color: #0461b1;
    color: #fff;
  }

  .LoginBox .registerBtn {
    color: #0461b1;
  }

  .LoginBox > a {
    font: 12px/52px "微软雅黑";
    color: #8b8b8b;
    padding: 0 50px;
  }

  .LoginBox > a i {
    float: left;
    width: 19px;
    height: 15px;
    background: url("../../assets/img/Icon.png") no-repeat 0 -180px;
    margin: 18px 5px 0 0;
  }

  .LoginBox > a span {
    float: left;
  }

  section {
    background-color: #f2f2f4;
    padding: 50px 0 70px 0;
  }

  .systemCurriculum {
    margin-top: 30px;
  }

  .systemNav {
    background-color: #e3e1e5;
  }

  .systemNavCon {
    width: 1200px;
    margin: 0 auto;
  }

  .systemNavCon > strong {
    float: left;
    font: 20px/46px "微软雅黑";
    margin-left: 48px;
    color: #333333;

  }

  .systemNavCon .systemN {
    float: right;
    width: 590px;
    font: 16px/46px "微软雅黑";
  }

  .systemN > a {
    float: left;
    color: #333333;
    margin-right: 35px;
    border-bottom: 1px solid transparent;
  }

  .systemN > a.active {
    color: #0ad;
    border-color: #0ad;
  }

  .systemN > a:hover {
    color: #0ad;
    border-color: #0ad;
  }

  .systemCC {
    width: 1200px;
    margin: 15px auto 0;
  }

  .systemCC > li {
    width: 300px;
    float: left;
    padding: 10px 20px 30px;
  }

  .systemCC > li:hover {
    cursor: pointer;
    background-color: #fff;
  }

  .systemCC > li:hover strong {
    color: #0461b1;
  }

  .systemCC strong {
    display: block;
    font: 16px/3 "微软雅黑";
    color: #333333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .systemCC div {
    font: 15px/27px "微软雅黑";
  }

  .systemCC div span {
    float: left;
    font-weight: bold;
    color: #f43232;
  }

  .systemCC div a {
    float: right;
    color: #fff;
    padding: 0 10px;
    background-color: #0461b1;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .HomePage {
    width: 100%;
    background-color: rgb(245, 245, 245);
    //精选视频
    .SelectVideo {
      width: 100%;
      //精选视频详情
      .SelectDetail {
        margin: -46px auto 0px;
        width: 1200px;
        //精选视频导航
        .SelectNav {
          height: 27px;
          position: relative;
          strong {
            line-height: 46px;
            font-family: "Microsoft YaHei";
            font-size: 20px;
            position: absolute;
            left: 0;
            margin-left: 48px;
          }
          dl {
            width: 590px;
            position: absolute;
            right: 0;
            line-height: 46px;
            font-size: 16px;
            &:after {
              content: '';
              height: 0;
              display: block;
              overflow: hidden;
              clear: left;
            }
            dd {
              float: left;
              margin-right: 35px;
            }
            dd:last-of-type {
              float: right;
              margin-right: 0;
              color: #0461b1;
              font: 12px/46px "微软雅黑";
            }

            dd.active {
              height: 44px;
              color: #0ad;
              border-bottom: 1px solid #0ad;
            }

            dd {
              height: 44px;
              &:hover {
                cursor: pointer;
                color: #0ad;
                border-bottom: 1px solid #0ad;
              }
            }
            span {
              margin: 2px 10px 0px 95px;
              font-size: 12px;
              &:hover {
                opacity: .7;
                color: #0ad;
                cursor: pointer;
              }
            }
          }
        }
        //精选视频内容
        .SelectCont {
          margin-top: 25px;
          &:after {
            content: '';
            height: 0;
            display: block;
            overflow: hidden;
            clear: both;
          }
          //左边轮播
          .LeftCarousel {
            width: 554px;
            height: 363px;
            float: left;
            position: relative;
            .videoIcon {
              width: 113px;
              height: 113px;
              background: url("../../assets/img/Icon.png") no-repeat -60px -129px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translateX(-50%) translateY(-50%);
            }
            .videoIntroduce {
              position: absolute;
              left: 0;
              bottom: 0;
              color: #fff;
              height: 60px;
              width: 100%;
              background-color: rgba(0, 0, 0, .5);
              padding: 10px 0 10px 60px;
              font: 16px/40px "微软雅黑";
              .teacherImage {
                width: 40px;
                height: 40px;
                float: left;
                background: #fff;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                margin-right: 20px;
              }
              .teacherName {
                float: left;
                margin-right: 45px;
              }
              .videoName {
                float: left;
                width: 300px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              }
            }
          }
          //右边Menu
          .RightMenu {
            width: 600px;
            height: 365px;
            float: right;
            margin-left: 46px;
            position: relative;
            overflow: auto;
            box-shadow: 0 0 10px #ccc;
            ul {
              width: 570px;
              position: absolute;
              top: 0;
              left: -2px;
              list-style: none;
              .active {
                color: #0ad;
                background-color: #fff;
                border-left: 2px solid #0ad;
                i {
                  background-position-x: -60px;
                }
              }
              li {
                line-height: 48px;
                font-size: 16px;
                border-left: 2px solid rgba(0, 0, 0, 0);
                &:hover {
                  color: #0ad;
                  background-color: #fff;
                  border-left: 2px solid #0ad;
                  cursor: pointer;
                  i {
                    background-position-x: -60px;
                  }
                }
                i {
                  float: left;
                  width: 33px;
                  height: 18px;
                  background: url("../../assets/img/Icon.png") no-repeat 0 -664px;
                  margin: 18px 30px 0 18px;
                }
                strong {
                  width: 260px;
                  display: inline-block;
                  overflow: hidden;
                  float: left;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  margin-right: 20px;
                }
                button {
                  width: 70px;
                  height: 27px;
                  font-size: 18px;
                  margin-left: 50px;
                  border: none;
                  outline: none;
                  background-color: #0ad;
                  color: #fff;
                  border-radius: 3px;
                  &:hover {
                    background-color: #2af;
                  }
                }
              }
            }
          }
        }
      }
    }
    //课程推荐
    .RecommendClass {
      margin-top: 30px;
      //more
      .RecommendDetail {
        width: 1200px;
        margin: -46px auto 0px;
        .RecommendMore {
          width: 100%;
          height: 46px;
          line-height: 46px;
          position: relative;
          strong {
            font-family: "Microsoft YaHei";
            font-size: 20px;
            position: absolute;
            left: 0;
            margin-left: 48px;
            color: #333;
          }
          a {
            position: absolute;
            right: 10px;
            display: inline;
            color: #7d7d7d;
            &:hover {
              color: #0461b1;
            }
          }
        }
      }
    }
    //课程类
    .CurriculumClass {
      margin-top: 30px;
      //系统课程详情
      .CurriculumDetail {
        width: 1200px;
        margin: -30px auto 0px;
        //系统课程Nav
        .CurriculumNav {
          position: relative;
          width: 100%;
          height: 27px;
          &:after {
            content: '';
            height: 0;
            display: block;
            overflow: hidden;
            clear: left;
          }
          strong {
            line-height: 27px;
            font-family: "Microsoft YaHei";
            font-size: 20px;
            position: absolute;
            left: 0;
            margin-left: 48px;
          }
          dl {
            position: absolute;
            right: 0;
            line-height: 27px;
            font-size: 16px;
            width: 590px;
            .active {
              color: #0ad;
              height: 28px;
              border-bottom: 1px solid #0ad;
            }
            dd {
              float: left;
              margin-right: 35px;
              &:hover {
                cursor: pointer;
                color: #0ad;
                height: 28px;
                border-bottom: 1px solid #0ad;
              }
            }
          }
        }
        .CurriculumCont {
          width: 100%;
          margin-top: 30px;
          &:after {
            content: '';
            height: 0;
            display: block;
            overflow: hidden;
            clear: both;
          }
          ul {
            li {
              width: 300px;
              height: 300px;
              font-family: "Microsoft YaHei";
              font-size: 16px;
              float: left;
              &:hover {
                background-color: #fff;
              }
              p {
                margin: 10px 22px 0px 22px;
                width: 256px;
                overflow: hidden;
                &:hover {
                  color: #0ad;
                  cursor: pointer;
                }
              }
              .CurriculumValue {
                height: 50px;
                margin: 20px 22px 0px 22px;
                span {
                  color: #00a131;
                }
                button {
                  border: none;
                  width: 100px;
                  height: 24px;
                  line-height: 20px;
                  font-family: "Microsoft YaHei";
                  font-size: 16px;
                  float: right;
                  background-color: #0ad;
                  border-radius: 2px;
                  color: #fff;
                  &:hover {
                    opacity: .7;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .loginOutBox {
    padding: 0 18px 22px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 110px;
  }

  .headerIcon {
    width: 46px;
    height: 46px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
    background-color: #ccc;
    float: left;
  }

  .headerInfo {
    float: left;
    margin-left: 5px;
    font: 14px/20px "微软雅黑";
  }

  .headerInfo > strong {
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100px;
    text-align: left;
    color: #2b6fb7;
  }

  .headerInfo > strong:hover {
    cursor: pointer;
  }

  .headerInfo > a {
    display: block;
    text-align: left;
    color: #808080;
    margin-top: 10px;
    font-size: 12px;
  }
</style>
