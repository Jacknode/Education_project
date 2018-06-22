<template>
  <div>
    <div class="playWrap">
      <!--视频播放-->
      <div class="playBox">
        <div class="titlePart clearfix">
          <strong>课件1：电商运营实操在线系统网课 玩转2017淘宝新规</strong>
          <a href="javascript:;">&lt;返回课程主页</a>
        </div>
        <div class="videoPart clearfix">
          <div class="playVideoBox">
            <video src="" width="880" height="500"></video>
            <div class="videoIcon">
              <img src="../assets/img/video.png" width="880" height="500">
              <div></div>
            </div>
          </div>
          <div class="catalogVideo">
            <strong>目录</strong>
            <ul class="videoMenu">
              <li class="clearfix" v-for="item,index in 60">
                <span>01. 【视频】 电商运营实操在线系统网课   玩转2017淘宝新规</span>
                <i></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="videoOperation clearfix">
          <div class="collection"><i></i><span>收藏</span></div>
          <div class="share"><i></i><span>分享</span></div>
        </div>
      </div>
    </div>
    <!--视频介绍-->
    <section>
      <div class="sectionContents clearfix">
        <div class="aboutVideo">
          <nav class="clearfix">
            <a href="javascript:;" class="active">本节介绍</a>
            <a href="javascript:;">资料下载</a>
          </nav>
          <p>
            《电商运营实操在线系统网课 玩转2017淘宝新规》由中公优就业电商研究院倾力打造，让您熟练掌握开 店技巧 ，打造黄金旺铺。通过《电商运营实操在线系统网课 玩转2017淘宝新规》由中公优就业电商研究院倾力打造，让您熟练掌握开 店技巧 ，打造黄金旺铺。通过</p>
          <div class="aboutClass">
            <strong>相关课程</strong>
            <div class="clearfix">
              <div class="leftLast" id="lastIcon"><i></i></div>
              <div class="classList">
                <ul class="clearfix" id="classList">
                  <li v-for="item,index in 10">
                    <img src="../assets/img/video.png" width="230" height="160">
                    <strong>高考语文高分复习指导</strong>
                    <div class="clearfix">
                      <span>免费</span>
                      <a href="javascript:;">开始学习</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="rightNext" id="nextIcon"><i></i></div>
            </div>
          </div>
        </div>
        <div class="commentStudent">
          <strong>学员评价(236)</strong>
          <ul class="commentList">
            <li class="clearfix" v-for="item,index in 4">
              <div class="studentIcon">
                <div class="headerIcon"></div>
                <span>纯粹</span>
              </div>
              <div class="commentContent">
                <div class="starBox">
                  <el-rate
                    v-model="videoStar"
                    disabled
                    disabled-void-color="#999999"
                    :colors="['#e8751a', '#e8751a', '#e8751a']"
                    score-template="{value}">
                  </el-rate>
                </div>
                <p>我从一个小白，到认识这个软件，一直能做些简单的图画，这些都是</p>
              </div>
            </li>
          </ul>
          <div class="commentRegion">
            <div class="pushComment clearfix">
              <span>发表评论</span>
              <div class="publishStar">
                <el-rate
                  v-model="choiceValue"
                  show-text
                  :texts="['1分','2分','3分','4分','5分']"
                  text-color="#e8751a"
                  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                </el-rate>
              </div>

            </div>
            <div class="commentCon clearfix">
              <textarea placeholder="我也说一句..."></textarea>
              <button>发表</button>
            </div>
            <el-checkbox v-model="checked">匿名评价</el-checkbox>
          </div>

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
        checked: false,
        videoStar: 4,
        choiceValue: null,
      }
    },
    methods: {
      initData() {
      },
      search() {
        this.initData()
      }
    },
    mounted() {
      //相关课程轮播
      let classList = document.getElementById('classList');
      let classLTs = classList.children;
      let withData = 0;
      let boxLength = 804;
      let num = 0;
      for (let i = 0; i < classLTs.length; i++) {
        withData += classLTs[i].offsetWidth;
      }
      classList.style.width = withData + 'px';
      let lastIcon = document.getElementById('lastIcon');
      let nextIcon = document.getElementById('nextIcon');
//      上一页
      lastIcon.onclick = () => {
        if (num <= 0) {
          this.$notify({
            message: '已经是最前面了!!',
            type: 'error'
          })
          return
        } else {
          num--;
          classList.style.transform = 'translateX(-' + num * 804 + 'px)';
        }
      };
//      下一页
      nextIcon.onclick = () => {
        num++;
        if (num * 804 >= withData) {
          this.$notify({
            message: '没有更多视频了!!',
            type: 'error'
          })
          return
        } else {
          classList.style.transform = 'translateX(-' + num * 804 + 'px)';
        }
      }
      //相关课程轮播结束


    }
  }
</script>
<style scoped>

  .playWrap {
    width: 100%;
    background-color: #292929;
    padding-bottom: 30px;
  }

  .playBox {
    width: 1200px;
    margin: 0 auto;
  }

  .titlePart {
    color: #b3b3b3;
    font: 14px/40px "微软雅黑";
  }

  .titlePart strong {
    float: left;
    padding-left: 10px;
  }

  .titlePart a {
    float: right;
    color: #b3b3b3;
  }

  .videoPart {

  }

  .playVideoBox {
    float: left;
    position: relative;
  }

  .videoIcon {
    position: absolute;
    top: 0;
    left: 0;
  }

  .videoIcon > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 113px;
    height: 113px;
    background: url("../assets/img/Icon.png") no-repeat -60px -129px;
  }

  .catalogVideo {
    float: left;
    width: 320px;
  }

  .catalogVideo > strong {
    font: 14px/30px "微软雅黑";
    display: block;
    background-color: #154784;
    color: #eaecf1;
    text-align: center;
  }

  .videoMenu {
    height: 470px;
    overflow: auto;
    font: 12px/20px "微软雅黑";
    color: #eaecf1;
  }

  .videoMenu > li {
    padding: 12px 20px 12px 10px;
  }

  .videoMenu > li:hover,
  .videoMenu > li.active {
    color: #e94500;
    background-color: #000;
    box-shadow: 0 1px 0 1px #585858;
    cursor: pointer;
  }

  .videoMenu span {
    float: left;
    width: 224px;
    text-align: center;
  }

  .videoMenu i {
    float: right;
    width: 26px;
    height: 26px;
    background: url("../assets/img/Icon.png") no-repeat 0 -762px;
    margin-top: 8px;
  }

  .videoOperation {
    width: 100%;
    margin-top: 12px;
    font: 14px/18px "微软雅黑";
    padding-left: 55px;
  }

  .collection {
    float: left;
    width: 100px;
  }

  .collection > i {
    float: left;
    width: 18px;
    height: 18px;
    background: url("../assets/img/Icon.png") no-repeat -60px -828px;
    margin-right: 12px;
  }

  .collection span,
  .share span {
    color: #cccccc;
  }

  .collection:hover,
  .share:hover {
    cursor: pointer;
  }

  .share {
    width: 100px;
    float: left;
  }

  .share > i {
    float: left;
    width: 18px;
    height: 18px;
    background: url("../assets/img/Icon.png") no-repeat 0 -828px;
    margin-right: 12px;
  }

  section {
    background-color: #f4f4f4;
    padding-bottom: 30px;
  }

  .sectionContents {
    width: 1200px;
    margin: 0 auto;
  }

  .aboutVideo {
    float: left;
    width: 880px;
    padding-top: 22px;
    background-color: #fff;
  }

  nav {
    width: 100%;
    border-bottom: 1px solid #e3e1e5;
    font: 16px/2 "微软雅黑";
  }

  nav a {
    float: left;
    padding: 5px 24px 0;
    border: 1px solid transparent;
    border-top: 2px solid transparent;
    margin-bottom: -1px;
    color: #333333;
  }

  nav a:hover,
  nav a.active {
    border-color: #e3e1e5;
    border-top-color: #0059bd;
    border-bottom-color: #fff;
    font-weight: bold;
  }

  .aboutVideo > p {
    font: 14px/24px "微软雅黑";
    color: #5d5d5d;
    padding: 65px 100px 23px 35px;
    text-indent: 2rem;
  }

  .aboutClass > strong {
    font: bold 15px/65px "微软雅黑";
    display: block;
    padding-left: 25px;
    color: #333333;
  }

  .aboutClass > div {
    border: 1px solid #dcdcdc;
  }

  .aboutClass .leftLast {
    float: left;
    width: 37px;
    height: 260px;
  }

  .leftLast > i {
    display: block;
    width: 24px;
    height: 66px;
    background: url("../assets/img/Icon.png") no-repeat 0 -886px;
    margin: 95px 0 0 10px;
  }

  .aboutClass .classList {
    float: left;
    width: 804px;
    overflow: hidden;
  }

  .classList li {
    float: left;
    width: 268px;
    padding: 12px 19px 17px;
  }

  .classList li:hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }

  .classList li:hover strong {
    color: #0461b1;
  }

  .classList ul {
    transition: .5s;
  }

  .classList strong {
    font: bold 14px/44px "微软雅黑";
    color: #333;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .classList span {
    float: left;
    font: 14px/22px "微软雅黑";
    color: #00a131;
  }

  .classList a {
    float: right;
    font: 12px/22px "微软雅黑";
    color: #e6e6e6;
    background-color: #0461b1;
    padding: 0 10px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .aboutClass .rightNext {
    float: left;
    width: 37px;
    height: 260px;
  }

  .rightNext > i {
    display: block;
    width: 24px;
    height: 66px;
    background: url("../assets/img/Icon.png") no-repeat -60px -886px;
    margin: 95px 0 0 4px;
  }

  .leftLast:hover,
  .rightNext:hover {
    cursor: pointer;
    opacity: .4;
  }

  .commentStudent {
    float: left;
    margin-left: 15px;
    width: 305px;
  }

  .commentStudent > strong {
    font: 15px/55px "微软雅黑";
  }

  .commentList {
    border: 1px solid #dedddf;
    overflow: auto;
    height: 180px;
    margin-bottom: 8px;
  }

  .commentList > li {
    padding: 10px 0 10px 7px;
  }

  .studentIcon {
    float: left;
    width: 40px;
    margin-right: 8px;
  }

  .headerIcon {
    width: 40px;
    height: 40px;
    background-color: #fff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin-bottom: 6px;
  }

  .studentIcon > span {
    font: 12px/2 "微软雅黑";
    display: block;
    text-align: center;
    color: #474748;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .commentContent {
    float: right;
  }

  .commentContent {
    float: left;
    width: 230px;
  }

  .commentContent .starBox {
    margin: 3px 0 9px;
  }

  .commentContent p {
    font: 12px/20px "微软雅黑";
    color: #474748;
  }

  .commentRegion {
    margin-top: 30px;
  }

  .pushComment {
    margin-bottom: 20px;
  }

  .pushComment span {
    float: left;
    font: 14px/20px "微软雅黑";
    color: #333333;
    margin-right: 10px;
  }

  .publishStar {
    float: left;
  }

  .commentCon {
    margin-bottom: 15px;
  }

  .commentCon > textarea {
    width: 240px;
    height: 80px;
    float: left;
    font: 14px/2 "微软雅黑";
  }

  .commentCon > button {
    height: 80px;
    width: 62px;
    text-align: center;
    float: left;
    border: none;
    background-color: #ff4c00;
    color: #ffffff;
    font: 16px/80px "微软雅黑";
  }

</style>
