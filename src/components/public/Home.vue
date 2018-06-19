<template>
  <!--教育首页-->
  <div class="HomePage">

    <div class="allNav">
      <!--大导航-->
      <div class="navBigBox">
        <div class="navBoxContent clearfix">
          <strong>全部课程分类</strong>
          <ul class="curriculumType">
            <li class="clearfix">
              <i></i>
              <strong>软件技术</strong>
              <a href="javascript:;">前端开发</a>
              <a href="javascript:;">Java</a>
              <span></span>
            </li>
            <li class="clearfix">
              <i></i>
              <strong>设计创作</strong>
              <a href="javascript:;">平面设计</a>
              <a href="javascript:;">UI设计</a>
              <span></span>
            </li>
            <li class="clearfix">
              <i></i>
              <strong>职称考试</strong>
              <a href="javascript:;">教师考试</a>
              <a href="javascript:;">公务员</a>
              <span></span>
            </li>
            <li class="clearfix">
              <i></i>
              <strong>技工技术</strong>
              <a href="javascript:;">会计</a>
              <a href="javascript:;">人力资源</a>
              <span></span>
            </li>
            <li class="clearfix">
              <i></i>
              <strong>名师讲座</strong>
              <a href="javascript:;">邢海龙</a>
              <a href="javascript:;">崔永元</a>
              <span></span>
            </li>
            <li class="clearfix">
              <i></i>
              <strong>兴趣生活</strong>
              <a href="javascript:;">摄影</a>
              <a href="javascript:;">美妆</a>
              <span></span>
            </li>
            <li class="clearfix">
              <i></i>
              <strong>自学外语</strong>
              <a href="javascript:;">实用英语</a>
              <a href="javascript:;">托福</a>
              <span></span>
            </li>
            <li class="clearfix">
              <i></i>
              <strong>大纲教育</strong>
              <a href="javascript:;">小学</a>
              <a href="javascript:;">初中</a>
              <span></span>
            </li>
          </ul>
          <div class="allList clearfix">
            <a href="javascript:;" v-for="item,index in 20">前端开发</a>
          </div>
          <!--登录 & 注册-->
          <div class="LoginBox">
            <div class="headPortrait"></div>
            <button class="loginBtn" @click="goLogin">登录</button>
            <button class="registerBtn">注册</button>
            <a href="javascript:;" class="clearfix"><i></i><span>微信公众号</span></a>
          </div>
        </div>
      </div>
    </div>


    <section>
      <!--精选视频-->
      <div class="SelectVideo">
        <!--模块线-->
        <span style="width: 100%;height: 30px;background-color: #c8c8c8;display: inline-block;"></span>
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
            <!--左边视频轮播-->
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
                <li v-for="ins in 10">
                  <i></i>
                  <!--课程名-->
                  <strong>精通网络精通网络精通网络精通网络精通网络精通网络精通网络</strong>
                  <!--时长-->
                  <span>00:25:00</span>
                  <!--btn-->
                  <button>学习</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <!--课程推荐-->
      <div class="RecommendClass">
        <!--模块线-->
        <span style="width: 100%;height: 30px;background-color: #c8c8c8;display: inline-block"></span>
        <!--推荐详情-->
        <div class="RecommendDetail">
          <div class="RecommendMore">
            <strong>课程推荐</strong>
            <a href="">更多&gt;&gt;</a>
          </div>
          <!--推荐内容-->
          <div class="RecommendCont">
            <ul>
              <li v-for="ils in ClassLists">
                <img src="@/assets/img/教育_90.jpg" alt="" style="width: 256px;height: 188px;margin: 15px 22px 0px 22px;">
                <p>高考语文高分复习指导</p>
                <div class="ClassValue">
                  <span>￥18.00</span>
                  <button>我要报名</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <!--免费公开课-->
      <div class="CurriculumClass" v-for="its in courses">
        <!--模块线-->
        <span style="width: 100%;height: 30px;background-color: #c8c8c8;display: inline-block"></span>
        <!--系统课程详情-->
        <div class="CurriculumDetail">
          <!--系统课程Nav-->
          <div class="CurriculumNav">
            <strong>{{its}}</strong>
            <!--栏目Menu-->
            <dl>
              <!--<dl>-->
              <dd v-for="ims in conts">{{ims}}</dd>
            </dl>
          </div>
          <!--系统课程内容-->
          <div class="CurriculumCont">
            <ul>
              <li v-for="is in ClassLists">
                <img src="@/assets/img/教育_64.jpg" alt="" style="width: 256px;height: 188px;margin: 15px 22px 0px 22px;">
                <p>高考语文高分复习指导</p>
                <div class="CurriculumValue">
                  <span>免费</span>
                  <button>我要报名</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!--系统课程-->
      <div class="systemCurriculum">
        <div class="systemNav">
          <div class="systemNavCon clearfix">
            <strong>系统课程</strong>
            <div class="systemN">
              <a href="javascript:;">平面设计</a>
              <a href="javascript:;">事业单位</a>
              <a href="javascript:;">考研</a>
              <a href="javascript:;">地方公务员</a>
            </div>
          </div>
        </div>
        <ul class="systemCC clearfix">
          <li v-for="item,index in 4">
            <img src="../../assets/img/video.png" width="260" height="190">
            <strong>高考语文高分复习指导</strong>
            <div class="clearfix">
              <span>¥1800:00</span>
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

  export default {
    name: '',
    data() {
      return {
        //"系统课程"
        courses: ["免费公开课",],
        conts: ["平面设计", "事业单位", "考研", "地方公务员"],
        ClassLists: ["", "", "", ""],
      }
    },
    computed: mapGetters([]),
    created() {
    },
    methods: {
      //去登录
      goLogin() {
        this.$router.push({name: 'Login'})
      }
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
    height: 550px;
    background: url("../../assets/img/homeBg.png") no-repeat center center;
  }

  .navBoxContent > strong {
    font: 16px/45px "微软雅黑";
    width: 304px;
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
    left: 304px;
    top: 0;
    width: 500px;
    height: 490.5px;
    background-color: #fff;
    padding: 10px;
    font: 14px/2 "微软雅黑";
  }

  .navBoxContent .allList a {
    float: left;
    margin: 0 10px;
  }

  .curriculumType {
    width: 304px;
    background-color: #fff;
    padding: 7px 0;
    float: left;
  }

  .curriculumType > li {
    font: 14px/60px "微软雅黑";
  }

  .curriculumType > li > i {
    float: left;
  }

  .curriculumType > li > i {
    width: 26px;
    height: 26px;
    background: url("../../assets/img/Icon.png") no-repeat;
    margin: 18px 19px 0;
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
    float: left;
    color: #808080;
    margin-left: 20px;
  }

  .curriculumType > li > span {
    float: right;
    width: 6px;
    height: 11px;
    background: url("../../assets/img/Icon.png") no-repeat 0 -631px;
    margin: 24px 10px 0 0;
  }

  .curriculumType > li:hover {
    background-color: #efefef;
  }

  .curriculumType > li:hover > strong {
    color: #286eb6;
  }

  .curriculumType > li:hover > a {
    color: #286eb6;
  }

  .curriculumType > li:hover > i,
  .curriculumType > li:hover > span {
    background-position-x: -60px;
  }

  .LoginBox {
    float: right;
    width: 190px;
    text-align: center;
    background-color: #fff;
    padding: 20px 50px 40px;
    margin-top: 85px;
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

  .LoginBox > button {
    width: 83px;
    font: 12px/2 "微软雅黑";
    border: 2px solid #0461b1;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin-top: 20px;
  }

  .LoginBox .loginBtn {
    background-color: #0461b1;
    color: #fff;
  }

  .LoginBox .registerBtn {
    color: #0461b1;
  }

  .LoginBox a {
    font: 12px/52px "微软雅黑";
    color: #8b8b8b;
  }

  .LoginBox a i {
    float: left;
    width: 19px;
    height: 15px;
    background: url("../../assets/img/Icon.png") no-repeat 0 -180px;
    margin: 18px 5px 0 0;
  }

  .LoginBox a span {
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
        margin: -30px auto 0px;
        width: 1200px;
        //精选视频导航
        .SelectNav {
          height: 27px;
          position: relative;
          strong {
            line-height: 27px;
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
            line-height: 27px;
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
              font: 12px/30px "微软雅黑";
            }

            dd.active {
              height: 28px;
              color: #0ad;
              border-bottom: 1px solid #0ad;
            }

            dd {
              height: 28px;
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
              }
            }
          }
          //右边Menu
          .RightMenu {
            width: 596px;
            height: 361px;
            float: right;
            margin-left: 46px;
            border: 2px solid #ddd;
            position: relative;
            overflow: auto;
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
        margin: -30px auto 0px;
        .RecommendMore {
          width: 100%;
          height: 27px;
          line-height: 27px;
          position: relative;
          strong {
            font-family: "Microsoft YaHei";
            font-size: 20px;
            position: absolute;
            left: 0;
            margin-left: 48px;
            color: #0461b1;
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
        //推荐内容
        .RecommendCont {
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
              .ClassValue {
                height: 50px;
                margin: 20px 22px 0px 22px;
                span {
                  color: #f00;
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
</style>
