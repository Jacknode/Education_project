<template>
  <!--教育首页-->
  <div class="HomePage">


    <!--精选视频-->
    <div class="SelectVideo">
      <!--模块线-->
      <span style="width: 100%;height: 30px;background-color: #c8c8c8;display: inline-block"></span>
      <!--精选视频详情-->
      <div class="SelectDetail">
        <!--精选视频nav-->
        <div class="SelectNav">
          <strong>精选视频</strong>
          <dl>
            <dd>编程语言</dd>
            <dd>UI/UE设计</dd>
            <dd>事业单位</dd>
            <span>+修改兴趣</span>
          </dl>
        </div>
        <!--精选视频内容-->
        <div class="SelectCont">
          <!--content detail-->
            <!--左边视频轮播-->
            <div class="LeftCarousel">
              <img src="@/assets/img/教育_42.jpg" alt="">
            </div>
            <!--右边菜单栏-->
            <div class="RightMenu">
              <ul>
                <li v-for="ins in SelectMenuLists">
                  <!--课程名-->
                  <span>精通网络</span>
                  <!--时长-->
                  <i>00:25:00</i>
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


    <!--系统课程-->
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


  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: '',
    data(){
      return{
        //"系统课程"
        courses:["免费公开课",],
        conts:["平面设计","事业单位","考研","地方公务员"],
        SelectMenuLists:["","",""],
        ClassLists:["","","",""],
      }
    },
    computed: mapGetters([]),
    created(){
    },
    methods: {},
  }
</script>
<style lang="less" scoped type="text/less">
  .HomePage{
    width: 100%;
    background-color: rgb(245,245,245);
    //精选视频
    .SelectVideo{
      width:100%;
      //精选视频详情
      .SelectDetail{
        margin: -30px auto 0px;
        width: 1200px;
        //精选视频导航
        .SelectNav{
          height: 27px;
          position: relative;
          strong{
            line-height: 27px;
            font-family: "Microsoft YaHei";
            font-size: 20px;
            position: absolute;
            left: 0;
          }
          dl{
            position: absolute;
            right: 0;
            line-height: 27px;
            font-size: 16px;
            &:after{
              content: '';
              height: 0;
              display: block;
              overflow: hidden;
              clear: left;
            }
            dd,span{
              float: left;
              margin-left: 75px;
            }
            dd{
              height: 27px;
              &:hover{
                cursor: pointer;
                color: #0ad;
                border-bottom: 1px solid #0ad;
              }
            }
            span{
              margin: 2px 10px 0px 95px;
              font-size: 12px;
              &:hover{
                opacity: .7;
                color: #0ad;
                cursor: pointer;
              }
            }
          }
        }
        //精选视频内容
        .SelectCont{
          margin-top: 10px;
          &:after{
            content: '';
            height: 0;
            display: block;
            overflow: hidden;
            clear: both;
          }
          //左边轮播
          .LeftCarousel{
            width: 554px;
            height: 366px;
            float: left;
          }
          //右边Menu
          .RightMenu{
            width: 596px;
            height: 361px;
            float: right;
            margin-left: 46px;
            border: 2px solid #ddd;
            position: relative;
            ul{
              width: 594px;
              position: absolute;
              top: 0;
              left: -2px;
              list-style: none;
              li{
                height: 40px;
                line-height: 40px;
                font-size: 16px;
                border-left: 2px solid rgba(0,0,0,0);
                &:hover{
                  color: #0ad;
                }
                span{
                  width: 330px;
                  height: 100%;
                  display: inline-block;
                  overflow: hidden;
                  padding-left: 10px;
                  float: left;
                }
                button{
                  width: 70px;
                  height: 27px;
                  font-size: 18px;
                  margin-left: 90px;
                  border: none;
                  outline: none;
                  background-color: #0ad;
                  color: #fff;
                  border-radius: 3px;
                  &:hover{
                    background-color: #2af;
                  }
                }
                &:hover{
                  background-color: #fff;
                  cursor: pointer;
                  border-left: 2px solid #0ad;
                }
              }
            }
          }
        }
      }
    }
    //课程推荐
    .RecommendClass{
      margin-top: 50px;
      //more
      .RecommendDetail{
        width: 1200px;
        margin: -30px auto 0px;
        .RecommendMore{
          width: 100%;
          height: 27px;
          line-height: 27px;
          position: relative;
          strong{
            font-family: "Microsoft YaHei";
            font-size: 20px;
            position: absolute;
            left: 0;
          }
          a{
            position: absolute;
            right: 10px;
            display: inline;
          }
        }
        //推荐内容
        .RecommendCont{
          width: 100%;
          margin-top: 30px;
          &:after{
            content: '';
            height: 0;
            display: block;
            overflow: hidden;
            clear: both;
          }
          ul{
            li{
              width: 300px;
              height: 300px;
              font-family: "Microsoft YaHei";
              font-size: 16px;
              float: left;
              &:hover{
                background-color: #fff;
              }
              p{
                margin: 10px 22px 0px 22px;
                width: 256px;
                overflow: hidden;
                &:hover{
                  color: #0ad;
                  cursor: pointer;
                }
              }
              .ClassValue{
                height: 50px;
                margin: 20px 22px 0px 22px;
                span{
                  color: #f00;
                }
                button{
                  border:none;
                  width: 100px;
                  height: 24px;
                  line-height: 20px;
                  font-family: "Microsoft YaHei";
                  font-size: 16px;
                  float: right;
                  background-color: #0ad;
                  border-radius: 2px;
                  color: #fff;
                  &:hover{
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
    .CurriculumClass{
      margin-top: 50px;
      //系统课程详情
      .CurriculumDetail{
        width: 1200px;
        margin: -30px auto 0px;
        //系统课程Nav
        .CurriculumNav{
          position: relative;
          width: 100%;
          height: 27px;
          &:after{
            content: '';
            height: 0;
            display: block;
            overflow: hidden;
            clear: left;
          }
          strong{
            line-height: 27px;
            font-family: "Microsoft YaHei";
            font-size: 20px;
            position: absolute;
            left: 0;
          }
          dl{
            position: absolute;
            right: 0;
            line-height: 27px;
            font-size: 16px;
            dd{
              float: left;
              margin-left: 75px;
              &:hover{
                cursor: pointer;
                color: #0ad;
                border-bottom: 1px solid #0ad;
              }
            }
          }
        }
        .CurriculumCont{
          width: 100%;
          margin-top: 30px;
          &:after{
            content: '';
            height: 0;
            display: block;
            overflow: hidden;
            clear: both;
          }
          ul{
            li{
              width: 300px;
              height: 300px;
              font-family: "Microsoft YaHei";
              font-size: 16px;
              float: left;
              &:hover{
                background-color: #fff;
              }
              p{
                margin: 10px 22px 0px 22px;
                width: 256px;
                overflow: hidden;
                &:hover{
                  color: #0ad;
                  cursor: pointer;
                }
              }
              .CurriculumValue{
                height: 50px;
                margin: 20px 22px 0px 22px;
                span{
                  color: #f00;
                }
                button{
                  border:none;
                  width: 100px;
                  height: 24px;
                  line-height: 20px;
                  font-family: "Microsoft YaHei";
                  font-size: 16px;
                  float: right;
                  background-color: #0ad;
                  border-radius: 2px;
                  color: #fff;
                  &:hover{
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
