<template>
  <div id="wrap">
    <header>
      <div class="thisVideoWrap">
        <nav class="clearfix">
          <!--<a href="javascript:;">全部课程</a>-->
          <router-link to="home">全部课程</router-link>
          <span>&gt;</span>
          <a href="javascript:;">软件技术</a>
          <span>&gt;</span>
          <a href="javascript:;">编程语言</a>
          <span>&gt;</span>
          <a href="javascript:;">精通网络Socket套接字技术</a>
        </nav>
        <div class="videlAndInformation clearfix">
          <div class="videoShow">
            <img v-lazy="courseMainIfoObj.ed_vo_ImageURL" width="610" height="400">
            <div class="videoIcon" @click="goPlay(courseMainIfoObj)"></div>
            <div class="videoTeacher">
              <div class="headIcon"></div>
              <strong>李强</strong>
              <span>{{courseMainIfoObj.ed_vo_Title}}</span>
            </div>
          </div>
          <div class="informationShow">
            <h4 @click="goPlay(courseMainIfoObj)">{{courseMainIfoObj.ed_vo_Title}}</h4>
            <div class="videoOperation clearfix">
              <strong>326 人学习</strong>
              <a href="javascript:;" class="share"><i></i>分享</a>
              <a href="javascript:;" class="collection"><i></i>收藏</a>
            </div>
            <div class="price clearfix">
              <strong>价格</strong>
              <span>￥<em>{{courseMainIfoObj.ed_vo_Price}}.00</em></span>
            </div>
            <div class="classTime">
              <strong>课程安排 :</strong>
              <span> {{Number(courseMainIfoObj.ed_vo_Time)}}课时</span>
            </div>
            <div class="aboutMe clearfix">
              <button @click="apply(courseMainIfoObj)">我要报名</button>
              <button>咨询课程</button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="secNavWrap">
        <div class="secNav clearfix">
          <a href="javascript:;" class="active">课程介绍</a>
          <a href="javascript:;">课程目录</a>
          <a href="javascript:;">学员评价</a>
        </div>
      </div>
      <div class="secContentWrap clearfix">
        <!--课程介绍-->
        <div class="secContent">
          <div class="classRecommend">
            <!--课程介绍-->
            <div>
              <strong class="classType">课程介绍</strong>
              <ul class="classRecommendList clearfix">
                <li>
                  <strong class="addEm">简介</strong><em>:</em>
                  <span>{{courseMainIfoObj.ed_vo_Introduce}}</span>
                </li>
                <li>
                  <strong>学习目标 :</strong>
                  <span>{{courseMainIfoObj.ed_vo_Target}}</span>
                </li>
                <li>
                  <strong>适合人群 :</strong>
                  <span>{{courseMainIfoObj.ed_vo_Crowd}}</span>
                </li>
                <li>
                  <strong>详细介绍 :</strong>
                  <span>{{courseMainIfoObj.ed_vo_Remark}}</span>
                </li>
              </ul>
            </div>
            <!--课程目录-->
            <div class="classMeun">
              <strong class="classType">课程目录</strong>
              <dl>
                <dd class="clearfix" v-for="item,index in videoAboutList">
                  <strong>{{item.ed_vo_Title}}</strong>
                  <span></span>
                  <i></i>
                  <em>{{item.ed_vo_Time ? item.ed_vo_Time : '' | getTiem}}</em>
                  <b></b>
                  <a href="JavaScript:;" @click="goPlayVideo(item)">播放视频</a>
                </dd>
              </dl>
            </div>
            <!--学员评价-->
            <div class="studentEvaluate">
              <strong class="classType">学员评价</strong>
              <div class="evaluateNav clearfix">
                <strong><span>95%</span>好评度</strong>
                <div>
                  <el-radio v-model="radio" label="1">全部评价(168)</el-radio>
                  <el-radio v-model="radio" label="2">好评(150)</el-radio>
                  <el-radio v-model="radio" label="3">中评(15)</el-radio>
                  <el-radio v-model="radio" label="4">差评(3)</el-radio>
                </div>
              </div>
              <ul class="evaluateList">
                <li class="clearfix" v-for="item,index in videoCommentList">
                  <div class="studentBox">
                    <div class="studentIcon" :style="{backgroundImage: 'url('+ item.ed_se_UserHead +')'}"></div>
                    <div class="studentName">{{item.ed_se_UserName}}</div>
                  </div>
                  <div class="studentContent">
                    <div class="evaluateStar">
                      <el-rate
                        v-model="item.ed_se_Score"
                        disabled
                        :colors="['#e8751a', '#e8751a', '#e8751a']"
                      >
                      </el-rate>
                    </div>
                    <p>{{item.ed_se_Comment}}</p>
                    <span>{{item.ed_se_CreateTime | getUseTime}}</span>
                  </div>
                </li>
              </ul>
            </div>
            <!--分页-->
            <div class="paging">
              <el-pagination
                background
                v-show="total"
                :page-size="5"
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
                :total="total">
              </el-pagination>
            </div>
          </div>
        </div>
        <!--课程推荐-->
        <div class="secRecommend">
          <strong>课程推荐</strong>
          <ul class="recommendList">
            <li v-for="item in courseRecommendList"  @click="goPlayVideo(item)">
              <img src="" v-show="item.ed_re_SeriesImageURL" v-lazy="item.ed_re_SeriesImageURL" width="230" height="160">
              <strong>{{item.ed_re_Name}}</strong>
              <div class="clearfix">
                <span>{{item.ed_vo_Price}}</span>
                <a href="javascript:;">开始学习</a>
                <!--<router-link to="/components/OrderDetails">开始学习</router-link>-->
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([
      'courseMainIfoObj',
      'videoAboutList',
      'courseRecommendList',//课程推荐列表
      'videoCommentList'
    ]),
    data() {
      return {
        //用户信息
        userInfo:'',
        radio: '1',
        starValue: 4,
        total: 0,
        videoId: '',
      }
    },
    created() {
      this.videoId = this.$route.query.id;
      this.initData();
      this.initVideoComment();
      //课程推荐查询
      this.initCourseRecommend();
    },
    methods: {
      //去播放视频
      goPlayVideo(item) {
        const {href} = this.$router.resolve({
          name: 'VideoSearch',
          query: {id:item.ed_re_ID}
        });
        window.open(href, '_blank')
      },
      //课程推荐查询
      initCourseRecommend(){
        let courseRecommendOption={
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "page": "1",
          "rows": "10",
          "ed_re_ID": "",//推荐编码
          "ed_re_PropertiesID": "",//被推荐的编码
          "ed_re_SeriesImageURL": "",//推荐图片
          "ed_re_Name": "",//推荐名称
          "ed_re_Difference": "",//推荐的是视频还是系列（0视频，1系列）
        };
        this.$store.dispatch('courseRecommendAction',courseRecommendOption)
          .then(() => {
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          });
      },
      //我要报名
      apply(courseMainIfoObj){
        const {href} = this.$router.resolve({
          name: 'OrderDetails',
          query: {id:courseMainIfoObj.ed_vo_ID,seriesId:courseMainIfoObj.ed_vo_SeriesID,}
        });
        if(this.userInfo){
           window.open(href, '_blank');
        };

      },
      //初始化课程信息
      initData() {
        let option = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",        //机器码
          "ed_vo_ID": this.videoId, //视频编号
        };
        this.$store.dispatch('initCourseIfo', option)
          .then(() => {
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
      initVideoComment(num) {
        let selectEdScoreInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "page": num ? num : 1,
          "rows": 5,
          "ed_se_ID": "",//视频评分ID
          "ed_se_VedioID": this.videoId,//视频编号
          "ed_se_UserID": "",//用户编码
          "ed_se_Score": "",//分数
        }
        this.$store.dispatch('initVideoComment', selectEdScoreInfo)
          .then(total => {
            this.total = Number(total);
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
      handleCurrentChange(num) {
        this.initVideoComment(num);
      },
      //去播放
      goPlay(item) {
        const {href} = this.$router.resolve({
          name: 'PlayVideo',
          query: {
            id: item.ed_vo_ID
          }
        });
        window.open(href, '_blank')
      },
      goPlayVideo(item) {
        const {href} = this.$router.resolve({
          name: 'PlayVideo',
          query: {
            id: item.ed_fs_VedioID
          }
        });
        window.open(href, '_blank')
      }
    },
    mounted() {
      //获取用户信息
      this.userInfo=JSON.parse(sessionStorage.getItem('userInfo'));
      //获取课程网页标题
      let title = JSON.parse(sessionStorage.getItem('jumpTitle')).ed_vo_Title;
      if(title){
        document.title = title;
      };
    },
  }
</script>
<style scoped>
  header {
    background-color: #d2dfed;
    padding-bottom: 25px;
  }

  .thisVideoWrap {
    width: 1200px;
    margin: 0 auto;
  }

  nav {
    font: bold 14px/40px "微软雅黑";
    padding-left: 25px;
  }

  nav a {
    float: left;
  }

  nav a:hover {
    color: #0461b1;
  }

  nav span {
    float: left;
    margin: 0 10px;
  }

  .videlAndInformation {
    background-color: #fff;
    padding: 25px;
  }

  .videoShow {
    float: left;
    position: relative;
    margin-right: 25px;
  }

  .videoIcon {
    width: 113px;
    height: 113px;
    background: transparent url("../assets/img/Icon.png") no-repeat -60px -129px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .videoTeacher {
    width: 100%;
    position: absolute;
    bottom: 1px;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    font: 16px/55px "微软雅黑";
  }

  .videoTeacher div {
    float: left;
    width: 40px;
    height: 40px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background-color: #fff;
    margin: 7px 18px 0 60px;
  }

  .videoTeacher strong {
    float: left;
    margin-right: 45px;
  }

  .videoTeacher span {
    float: left;
  }

  .informationShow {
    float: left;
    width: 515px;
  }

  .informationShow h4 {
    font: 23px/70px "微软雅黑";
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .informationShow h4:hover {
    cursor: pointer;
    color: #0461b1;
  }

  .videoOperation {
    font: 14px/18px "微软雅黑";
    color: #333333;
    margin-bottom: 58px;
  }

  .videoOperation strong {
    float: left;
    width: 200px;
  }

  .videoOperation a {
    float: left;
    margin-right: 20px;
  }

  .videoOperation a i {
    float: left;
    margin-right: 5px;
  }

  .share > i {
    width: 18px;
    height: 18px;
    background: url("../assets/img/Icon.png") no-repeat 0 -704px;
  }

  .collection > i {
    width: 18px;
    height: 18px;
    background: url("../assets/img/Icon.png") no-repeat -60px -704px;
  }

  .price {
    font: 16px/32px "微软雅黑";
  }

  .price strong {
    float: left;
    margin-right: 20px;
    color: #333333;
  }

  .price span {
    float: left;
    color: #f43232;
    margin-top: -3px;
  }

  .price em {
    font-size: 30px;
    font-weight: bold;
  }

  .classTime {
    margin: 30px 0 90px 0;
    font: 14px/2 "微软雅黑";
    color: #333333;
  }

  .aboutMe > button {
    border: none;
    background-color: #0461b1;
    color: #fff;
    font: 16px/3 "微软雅黑";
    margin-right: 70px;
    padding: 0 35px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    float: left;
  }

  section {
    padding-bottom: 70px;
    background-color: #f4f4f4;
  }

  .secNavWrap {
    width: 100%;
    background-color: #e3e1e5;

  }

  .secNav {
    width: 1200px;
    margin: 0 auto;
    padding-left: 25px;
    font: 18px/45px "微软雅黑";
  }

  .secNav a {
    float: left;
    padding: 0 23px;
    color: #333333;
  }

  .secNav a:hover,
  .secNav a.active {
    background-color: #0059bd;
    color: #fff;
  }

  .secContentWrap {
    width: 1200px;
    margin: 0 auto;
  }

  .secContent {
    float: left;
    width: 880px;
    margin-right: 22px;
    background-color: #fff;
    padding: 30px 0;
  }

  .classType {
    font: 14px/20px "微软雅黑";
    border-left: 3px solid #0059bd;
    padding-left: 5px;
    color: #333333;
  }

  .classRecommendList {
    font: 14px/26px "微软雅黑";
    padding: 0 20px;
  }

  .classRecommendList > li {
    float: left;
    width: 100%;
    margin-top: 13px;
  }

  .classRecommendList > li > * {
    float: left;
  }

  .classRecommendList > li > strong {
    width: 95px;
  }

  .classRecommendList > li > em {
    margin-left: -35px;
  }

  .addEm {
    letter-spacing: 28px;
  }

  .classRecommendList > li > span {
    width: 745px;
  }

  .classMeun {
    margin-top: 24px;
  }

  .classMeun dl {
    font: 16px/3 "微软雅黑";
    max-height: 600px;
    overflow: auto;
  }

  .classMeun dt {
    font-weight: bold;
    color: #333333;
    padding-left: 25px;
  }

  .classMeun dd {
    padding: 0 20px 0 25px;
    color: #333;
  }

  .classMeun dd strong {
    width: 283px;
    float: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .classMeun dd span {
    float: left;
    width: 300px;
    border-bottom: 1px dashed #b3b3b3;
    margin-top: 25px;
    margin-right: 7px;
  }

  .classMeun dd i {
    float: left;
    width: 33px;
    height: 18px;
    background: url("../assets/img/Icon.png") no-repeat 0 -664px;
    margin-top: 15px;
    margin-right: 25px;
  }

  .classMeun dd em {
    float: left;
  }

  .classMeun dd b {
    float: right;
    width: 27px;
    height: 27px;
    background: url("../assets/img/Icon.png") no-repeat 0 -762px;
    margin: 10px 25px 0 0;
  }

  .classMeun dd a {
    float: right;
    margin-right: 20px;
    font: 12px/2 "微软雅黑";
    background-color: #0461b1;
    color: #e6e6e6;
    padding: 0 10px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin-top: 13px;
    display: none;
  }

  .classMeun dd:hover {
    background-color: #f4f4f4;
    box-shadow: 0 0 1px 2px #ececec;
  }

  .classMeun dd:hover strong,
  .classMeun dd:hover span,
  .classMeun dd:hover em,
  .classMeun dd:hover i {
    color: #0059bd;
    border-color: #0059bd;
    background-position-x: -60px;
  }

  .classMeun dd:hover b {
    display: none;
  }

  .classMeun dd:hover a {
    display: block;
  }

  .studentEvaluate {
    margin-top: 20px;
  }

  .evaluateNav {
    margin-top: 22px;
    background-color: #e3e1e5;
    box-shadow: 0 0 1px 2px #dedddf;
    padding: 10px 0;
  }

  .evaluateNav > strong {
    float: left;
    font: 16px/30px "微软雅黑";
    width: 170px;
    text-align: center;
    border-right: 1px solid #b3b3b3;
    margin-right: 30px;
    color: #333333;
  }

  .evaluateNav > strong span {
    color: #f43232;
  }

  .evaluateNav .el-radio {
    line-height: 30px;
  }

  .evaluateList {
    padding: 10px 22px 0 14px;
  }

  .evaluateList > li {
    padding: 15px 0 10px;
    border-bottom: 1px solid #ccc8c8;
  }

  .studentBox {
    float: left;
    width: 64px;
  }

  .studentIcon {
    width: 64px;
    height: 64px;
    background-color: #ccc;
    border-radius: 50%;
    -webkit-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .studentContent {
    float: left;
    margin-left: 14px;
    width: 755px;
    font: 13px/20px "微软雅黑";
  }

  .studentName {
    font: 14px/2 "微软雅黑";
    text-align: center;
    color: #494949;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .evaluateStar {
    margin-bottom: 12px;
  }

  .studentContent p {
    color: #494949;
  }

  .studentContent span {
    color: #e3e1e5;
    display: block;
    text-align: right;
  }

  .paging {
    margin-top: 20px;
    text-align: center;
  }

  /**/
  .secRecommend {
    float: left;
    width: 296px;
    background-color: #f0edf2;
    margin-top: 30px;
    box-shadow: 1px 1px 2px 1px #ccc;
    padding: 0 15px 20px 16px;
  }

  .secRecommend > strong {
    font: bold 16px/64px "微软雅黑";
    color: #333333;
  }

  .recommendList > li {
    background-color: #fff;
    padding: 13px 17px;
    margin-bottom: 18px;
    box-shadow: 1px 1px 1px 1px #ccc;
  }

  .recommendList > li:hover {
    background-color: #f1f1f1;
  }

  .recommendList strong {
    font: 15px/3 "微软雅黑";
    color: #333333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    white-space: nowrap;
  }

  .recommendList div {
    font: 15px/22px "微软雅黑";
  }

  .recommendList div span {
    float: left;
    color: #00a131;
  }

  .recommendList div a {
    float: right;
    font: 13px/22px "微软雅黑";
    padding: 0 8px;
    color: #e6e6e6;
    background-color: #0461b1;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
</style>
