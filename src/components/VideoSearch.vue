<template>
  <div id="wrap">
    <header>
      <div class="thisVideoWrap">
        <nav class="clearfix">
          <a href="javascript:;">全部课程</a>
          <span>&gt;</span>
          <a href="javascript:;">软件技术</a>
          <span>&gt;</span>
          <a href="javascript:;">编程语言</a>
          <span>&gt;</span>
          <a href="javascript:;">精通网络Socket套接字技术</a>
        </nav>
        <div class="videlAndInformation clearfix">
          <div class="videoShow">
            <img src="../assets/img/video.png" width="610" height="400">
            <div class="videoIcon" @click="goPlay"></div>
            <div class="videoTeacher">
              <div class="headIcon"></div>
              <strong>李强</strong>
              <span>网站构架建设基础</span>
            </div>
          </div>
          <div class="informationShow">
            <h4 @click="goPlay">电商运营实操在线系统网课 玩转2017淘宝新规</h4>
            <div class="videoOperation clearfix">
              <strong>326 人学习</strong>
              <a href="javascript:;" class="share"><i></i>分享</a>
              <a href="javascript:;" class="collection"><i></i>收藏</a>
            </div>
            <div class="price clearfix">
              <strong>价格</strong>
              <span>￥<em>1800.00</em></span>
            </div>
            <div class="classTime">
              <strong>课程安排 :</strong>
              <span> 20课时</span>
            </div>
            <div class="aboutMe clearfix">
              <button>我要报名</button>
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
                  <span>《电商运营实操在线系统网课 玩转2017淘宝新规》由中公优就业电商研究院倾力打造，让您熟练掌握开店技巧 ，打造黄金旺铺。通过全黄金旺铺。通过全黄金旺铺。通过全</span>
                </li>
                <li>
                  <strong>学习目标 :</strong>
                  <span>《电商运营实操在线系统网课 玩转2017淘宝新规》，《电商运营实操在线系统网课 玩转2017淘宝新规》，共有7篇，分别是《EPM基础篇》、《开店基础篇》、《开店实操篇》、《旺铺装《电商运营实操在线系统网课 玩转2017淘宝新规》，共有7篇，分别是《EPM基础篇》、《开店基础篇》、《开店实操篇》、《旺铺装共有7篇，分别是《EPM基础篇》、《开店基础篇》、《开店实操篇》、《旺铺装《电商运营实操在线系统网课 玩转2017淘宝新规》，共有7篇，分别是《EPM基础篇》、《开店基础篇》、《开店实操篇》、《旺铺装《电商运营实操在线系统网课 玩转2017淘宝新规》，共有7篇，分别是《EPM基础篇》、《开店基础篇》、《开店实操篇》、《旺铺装《电商运营实操在线系统网课 玩转2017淘宝新规》，共有7篇，分别是《EPM基础篇》、《开店基础篇》、《开店实操篇》、《旺铺装《电商运营实操在线系统网课 玩转2017淘宝新规》，共有7篇，分别是《EPM基础篇》、《开店基础篇》、《开店实操篇》、《旺铺装</span>
                </li>
                <li>
                  <strong>适合人群 :</strong>
                  <span>适合人群： 零基础小白、无互联网相关经验人员。</span>
                </li>
                <li>
                  <strong>详细介绍 :</strong>
                  <span>√学员后续服务： 学习及售后的一系列问题欢迎加入我们的QQ群，群号：496038649qq√相关面授课程推</span>
                </li>
              </ul>
            </div>
            <!--课程目录-->
            <div class="classMeun">
              <strong class="classType">课程目录</strong>
              <dl>
                <dt>第1章节·EPM基础篇</dt>
                <dd class="clearfix" v-for="item,index in 20">
                  <strong>第1节·EPM基础篇-初识电商EPM(上)</strong>
                  <span></span>
                  <i></i>
                  <em>24:06</em>
                  <b></b>
                  <a href="JavaScript:;">播放视频</a>
                </dd>
                <dt>第2章节·EPM基础篇</dt>
                <dd class="clearfix" v-for="item,index in 20">
                  <strong>第1节·EPM基础篇-初识电商EPM(上)</strong>
                  <span></span>
                  <i></i>
                  <em>24:06</em>
                  <b></b>
                  <a href="JavaScript:;">播放视频</a>
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
                <li class="clearfix" v-for="item,index in 3">
                  <div class="studentBox">
                    <div class="studentIcon"></div>
                    <div class="studentName">纯粹</div>
                  </div>
                  <div class="studentContent">
                    <div class="evaluateStar">
                      <el-rate
                        v-model="starValue"
                        disabled
                        :colors="['#e8751a', '#e8751a', '#e8751a']"
                      >
                      </el-rate>
                    </div>
                    <p>我从一个小白，到认识这个软件，一直能做些简单的图画，这些都是从腾讯课堂上学的，课程非常细心，讲的知识点也很容易让人明白理解。真</p>
                    <span>2018-06-16</span>
                  </div>
                </li>
              </ul>
            </div>
            <!--分页-->
            <div class="paging">
              <el-pagination
                background
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
            <li v-for="item,index in 4">
              <img src="../assets/img/video.png" width="230" height="160">
              <strong>高考语文高分复习指导</strong>
              <div class="clearfix">
                <span>免费</span>
                <a href="javascript:;">开始学习</a>
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
    computed: mapGetters([]),
    data() {
      return {
        radio: '1',
        starValue: 4,
        total: 1000,
      }
    },
    methods: {
      initData() {
      },
      search() {
        this.initData()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      //去播放
      goPlay(){
        this.$router.push({name:'PlayVideo'});
      }
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
    height: 600px;
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
    margin-top:20px;
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
