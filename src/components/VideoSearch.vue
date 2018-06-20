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
            <div class="videoIcon"></div>
            <div class="videoTeacher">
              <div class="headIcon"></div>
              <strong>李强</strong>
              <span>网站构架建设基础</span>
            </div>
          </div>
          <div class="informationShow">
            <h4>电商运营实操在线系统网课 玩转2017淘宝新规</h4>
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
        <div class="secContent">
          <div class="classRecommend">
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
        </div>
        <div class="secRecommend">

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
      return {}
    },
    methods: {
      initData() {
      },
      search() {
        this.initData()
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
    margin-top:13px;
  }

  .classRecommendList > li > * {
    float: left;
  }

  .classRecommendList > li > strong {
    width: 95px;
  }

  .classRecommendList > li > em {
    margin-left:-35px;
  }

  .addEm {
    letter-spacing: 28px;
  }

  .classRecommendList > li > span {
    width:745px;
  }

  /**/
  .secRecommend {
    float: left;
    width: 296px;
  }
</style>
