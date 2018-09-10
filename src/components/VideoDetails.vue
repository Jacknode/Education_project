<template>
  <div>
    <div id="wrap">
      <div id="wrapBox">
        <!--全部课程-->
        <nav class="clearfix">
          <a href="javascript:;" @click="searchAll">{{'全部课程'}}</a><span>&gt;</span>
          <a href="javascript:;" v-for="item,index in childrenList" @click="searchChildrenList(item.ed_te_ID)">{{item.ed_te_Name}}<span>&gt;</span></a>
        </nav>
        <!--课程分类-->
        <dl class="classType clearfix" v-loading="isloading">
          <dt>课程分类</dt>
          <dd

            v-for="item,index in videoDetailsList"
            v-if="videoDetailsList.length"
            @click="changeClassType(item,index)"
            :class="{active: item.ed_te_ID==''}"
          >{{item.ed_te_Name}}
          </dd>
          <dd v-if="!videoDetailsList.length" class="lastClass">暂无课程分类</dd>
        </dl>
        <!--课程详细分类-->
        <ul class="screenCondition clearfix">
          <!--<li><a href="javascript:;">综合排序</a></li>-->
          <!--<li><a href="javascript:;">好评率</a><i></i></li>-->
          <!--<li><a href="javascript:;">人气</a><i></i></li>-->
          <!--<li><a href="javascript:;">最新</a><i></i></li>-->
          <!--<li><a href="javascript:;">价格</a><i></i></li>-->
          <!--<li><a href="javascript:;">价格区间</a></li>-->
          <li><a href="javascript:;" @click="initTypeVideo('')">全部</a></li>
          <li><a href="javascript:;" @click="initTypeVideo('0')">免费</a></li>
          <li><a href="javascript:;" @click="initTypeVideo('1')">付费</a></li>
        </ul>
        <!--<ul class="classList clearfix" v-show="listIsLoading">-->
        <ul class="classList clearfix" v-loading="listLoading" v-show="listIsLoading">
          <li class="prompt" v-show="!CourseList.length">暂无相关视频</li>
          <li v-for="item,index in CourseList" @click="goVideoSearch(item)">
            <img v-lazy="item.ed_ss_SeriesImageURL" width="260" height="193">
            <strong>{{item.ed_ss_Name}}</strong>
            <div class="clearfix">
              <span v-if="item.ed_vo_Price == 0" style="color: green;">免费</span>
              <span v-if="item.ed_vo_Price != 0">￥{{item.ed_ss_Price}}</span>
              <a href="javascript:;">我要报名</a>
            </div>
          </li>
        </ul>
        <!--是否收费-->
<!--        <ul class="classList clearfix" v-loading="freeIsLoading">
          <li class="prompt" v-show="!CourseList.length">暂无相关视频</li>
          <li v-for="item,index in CourseList" @click="goVideoSearch(item)">
            <img v-lazy="item.ed_ss_SeriesImageURL" width="260" height="193">
            <strong>{{item.ed_ss_Name}}</strong>
            <div class="clearfix">
              <span v-if="item.ed_vo_Price == 0" style="color: green;">免费</span>
              <span v-if="item.ed_vo_Price != 0">￥{{item.ed_ss_Price}}</span>
              <a href="javascript:;">我要报名</a>
            </div>
          </li>
        </ul>-->
        <div class="paging">
          <el-pagination
            background
            :page-size="12"
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :total="total"
            v-show="total"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([
      'videoDetailsList',
      'typeVideoList',
      'searchIsFreeList',
      'CourseList',
    ]),
    data() {
      return {
        isloading:false,
        listLoading:false,
        freeIsLoading:false,
        listIsLoading:true,
        childrenList:[],//全部课程面包屑
        typeId: '',//类型Id
        crumbsId: '',//面包屑Id
        freeType: '',//免费的类型
        typeName: '',
        typeCId: '',
        childrenName: '',
        seriesId: '',
        newCourseId: '',//新课程编号
        activeIndex: 0,
        total: 0,
        tType:'',//传入课程类型
        comObj:{
          "ed_te_ID":'',
          "ed_te_Name":'',
          "ed_te_ParentID":0,
        },//传入课程类型合成对象
      }
    },
    created() {
      //初始化课程分类
      this.initData();
      //初始化课程信息
      this.initTypeVideo('','','0',1);
    },
    mounted(){
//      this.comObj.ed_te_ID=this.$route.query.cid;
//      this.comObj.ed_te_Name=this.$route.query.cname;
//      this.childrenList.push(this.comObj)
    },
    methods: {
/*
 * 分页
 * */

      handleCurrentChange(num) {
        this.initTypeVideo('','','',num)
      },

/*
 * 初始化课程分类
 * */

      initData(id) {
        let option = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",        //机器码
          "ed_vt_ID": id?id:'' //课程类型ID
        };
        this.isloading = true;
        this.$store.dispatch('initVideoDetails', option)
          .then(() => {
            this.isloading = false;
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },

/*
 * 点击课程分类
 * */

      changeClassType(item, index) {
        //清空点击首页分类进入详情页的分类
//        this.childrenList.shift();
        for(let i =0;i<this.childrenList.length;i++){
//          this.childrenList[i]=this.comObj;
//          this.childrenList.remove(this.comObj);
//          break;
        };
        //刷新面包屑
        this.childrenList.push(item);
        //刷新课程分类
        this.initData(item.ed_te_ID);
        //刷新课程信息
        console.log(item.ed_te_ID);
        this.newCourseId=item.ed_te_ID;
        console.log(111,this.newCourseId)
        this.initTypeVideo('','',this.newCourseId,1);
      },

/*
 *点击面包屑
 * */

      searchChildrenList(id){
        //刷新课程分类
        this.initData(id);
        //刷新面包屑
        let arr = this.childrenList;
        this.childrenList=[];
        for(let i = 0;i<arr.length;i++){
          //重新添加面包屑
          this.childrenList.push(arr[i]);
          //到点击对象时停止添加
          if(arr[i].ed_te_ID==id){
            break;
          };

        };
        //刷新课程列表

      },

/*
 *初始化课程
 * */

      initTypeVideo(isCharge,name,typeId,num) {
        let option = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",        //机器码
          "token":"",
          "charge": isCharge?isCharge:"",   //是否收费（0不收费，1要收费）
          'Name':name?name:'',//模糊查询的课程名称
          "ed_vt_ID": typeId?typeId:'0', //类型ID
          "page": num ? num : 1,//页码
          "rows": 8//条数
        };
        console.log('option:',option)
        this.listLoading = true;
        this.$store.dispatch('initCourseAction', option)
          .then(
            (total)=>{
              this.total=total;
              this.listLoading = false;
            },
            ()=>{}
          )
      },

/*
 *点击全部去查询全部课程
 *  */

      searchAll(){
        this.childrenList = [];
        this.initData(0)
      },

/*
 *是否收费
 *  */
//      searchIsFree(free){
//        let isFree=free;
//        this.initTypeVideo(isFree,'','','');
//      },



      goVideoSearch(item) {
//        return
        this.$router.push({name: 'VideoSearch', query: {id: item.ed_ss_ID}})
      },
    },
  }
</script>
<style scoped>
  #wrap {
    background-color: #fafafa;
    padding-bottom: 60px;
  }

  #wrapBox {
    width: 1200px;
    margin: 0 auto;
  }

  nav {
    font: 14px/40px "微软雅黑";
    /*color: #454545;*/
  }

  nav > a {
    float: left;
    color: #808080;
  }
  nav > a >span{
    margin: 0 10px;
    color: #454545;
  }
  nav > span {
    float: left;
    margin: 0 10px;
  }

  .classType {
    border: 1px solid #d9d9d9;
    background-color: #f7f7f7;
  }

  .classType > dt {
    float: left;
    width: 56px;
    height: 50px;
    margin: -1px 0 -1px -1px;
    font: 14px/18px "微软雅黑";
    color: #ffffff;
    background-color: #2693e0;
    padding: 5px 12px 0;
    margin-right: 22px;
  }

  .classType > dd {
    float: left;
    margin: 0 16px;
    font: 13px/48px "微软雅黑";
  }
  .lastClass:hover{
    color: #aaa;
  }
  .lastClass{
    color: #aaa;
  }

  .classType > dd:hover,
  .classType > dd.active {
    color: #2693e0;
  }

  .classType > dd:hover {
    cursor: pointer;
  }

  .screenCondition {
    margin-top: 17px;
    width: 601px;
    border: 1px solid #e6e6e6;
  }

  .screenCondition li {
    float: left;
    font: 14px/33px "微软雅黑";
    width: 100px;
    text-align: center;
    position: relative;
    border-right: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: -1px;
  }

  .screenCondition li:hover a,
  .screenCondition li:hover a.active {
    color: #0461b1;
  }

  .screenCondition li:nth-of-type(6) {
    margin-right: -1px;
  }

  .screenCondition li i {
    position: absolute;
    width: 8px;
    height: 11px;
    background: url("../assets/img/Icon.png") no-repeat -60px -762px;
    top: 10px;
    right: 15px;
  }

  .classList {
    margin-top: 25px;
  }

  .classList > li {
    float: left;
    width: 300px;
    padding: 16px 20px 15px;
    margin-top: 30px;
  }

  .classList > li:hover {
    cursor: pointer;
    background-color: #ffffff;
    box-shadow: 0 0 5px #ccc;
  }

  .classList > li:hover strong {
    color: #0461b1;
    text-decoration: underline;
  }

  .classList strong {
    font: 14px/39px "微软雅黑";
    color: #333333;
  }

  .classList div {
    margin-top: 10px;
  }

  .classList span {
    float: left;
    font: 15px/27px "微软雅黑";
    color: #f43232;
  }

  .classList a {
    float: right;
    color: #e4e9f1;
    font: 15px/27px "微软雅黑";
    padding: 0 10px;
    background-color: #0461b1;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .paging {
    text-align: center;
    margin-top: 20px;
  }

  .classList .prompt:hover {
    box-shadow: none;
    background-color: #fafafa;
    cursor: inherit;
  }

  .classList .prompt {
    width: 100%;
    display: block;
    float: none;
    text-align: center;
    color: #ccc;
  }

</style>
