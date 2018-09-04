<template>
  <div>
    <div id="wrap">
      <div id="wrapBox">
        <nav class="clearfix">
          <a href="javascript:;" @click="searchAll">{{'全部课程'}}</a>
          <a href="javascript:;" v-for="item in childrenList" @click="searchChildrenList(item.ed_te_ID)"><span>&gt;</span>{{item.ed_te_Name}}</a>
        </nav>
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
        <ul class="screenCondition clearfix">
          <!--<li><a href="javascript:;">综合排序</a></li>-->
          <!--<li><a href="javascript:;">好评率</a><i></i></li>-->
          <!--<li><a href="javascript:;">人气</a><i></i></li>-->
          <!--<li><a href="javascript:;">最新</a><i></i></li>-->
          <!--<li><a href="javascript:;">价格</a><i></i></li>-->
          <!--<li><a href="javascript:;">价格区间</a></li>-->
          <li><a href="javascript:;">全部</a></li>
          <li><a href="javascript:;">免费</a></li>
          <li><a href="javascript:;">付费</a></li>
        </ul>
        <ul class="classList clearfix" v-loading="listLoading">
          <li class="prompt" v-show="!typeVideoList.length">暂无相关视频</li>
          <li v-for="item,index in typeVideoList" @click="goVideoSearch(item)">
            <img v-lazy="item.ed_ss_SeriesImageURL" width="260" height="193">
            <strong>{{item.ed_ss_Name}}</strong>
            <div class="clearfix">
              <span v-if="item.ed_vo_Price == 0" style="color: green;">免费</span>
              <span v-if="item.ed_vo_Price != 0">￥{{item.ed_ss_Price}}</span>
              <a href="javascript:;">我要报名</a>
            </div>
          </li>
        </ul>
        <div class="paging">
          <el-pagination
            background
            :page-size="12"
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :total="total"
            v-show="total
"
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
      'typeVideoList'
    ]),
    data() {
      return {
        isloading:false,
        listLoading:false,
        childrenList:[],
        total: 1000,
        typeId: '',
        typeName: '',
        typeCId: '',
        childrenName: '',
        seriesId: '',
        activeIndex: 0,
        total: 0,
      }
    },
    created() {
      this.typeId = this.$route.query.id;
      this.seriesId = this.$route.query.seriesId;
      this.typeName = this.$route.query.name;
      this.typeCId = this.$route.query.cid;
      this.childrenName = this.$route.query.cname;
      this.initData();
      this.initTypeVideo(1,this.$route.query.keyword);
    },
    methods: {

      searchAll(){
        this.childrenList = [];
        this.initData(0)
      },
      searchChildrenList(id){
        this.childrenList = this.childrenList.filter(item=>{
          if(item.ed_te_ID==id){
            return true
          }
          return false
        })
        this.typeCId = id;
        this.initData(id);
        this.initTypeVideo(1)
      },
      //查询类型
      initData(id) {
//        if( !this.typeId ){
//          return
//        }
        let SecondaryPage = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",        //机器码
          "ed_vt_ID": this.typeId?this.typeId:'' //类型
        };
        if(id||id==0){
          SecondaryPage.ed_vt_ID = id;
        }
        this.isloading = true;
        this.$store.dispatch('initVideoDetails', SecondaryPage)
          .then(() => {
          this.isloading = false;
            for (let i = 0; i < this.videoDetailsList.length; i++) {
              if (this.videoDetailsList[i].ed_te_ID == this.typeCId) {
//                this.childrenName = this.videoDetailsList[i].ed_te_Name;
                this.activeIndex = i;
              }
            }
            if(!this.videoDetailsList.length){
//              this.childrenList = [];
////              this.initData()
//              window.location.reload()
            }
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
      //查询类型对应得视频
      initTypeVideo(num,name) {
        let SecondaryVode = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",        //机器码
          "ed_vt_ID": this.typeCId?this.typeCId:'', //类型
          Name:name?name:''
//          "page": num ? num : 1,//页码
//          "rows": 12//条数
        };
        this.listLoading = true;
        if(num){
          SecondaryVode.page = num
          SecondaryVode.rows = 12
        }
        this.$store.dispatch('initTypeVideo', SecondaryVode)
          .then(total => {
            this.listLoading = false;
            this.total = Number(total)
          })
      },
      //分页
      handleCurrentChange(num) {
        this.initTypeVideo(num)
      },
      changeClassType(item, index) {
        this.activeIndex = index;
//        this.childrenList.filter(v=>{
//          if(v.)
//        })
//        const filterNonUnique = arr => arr.filter(i => arr.indexOf(i.ed_te_ParentID) === arr.lastIndexOf(i.ed_te_ParentID))


//        const reducedFilter = (data, keys, fn) =>
//          data.filter(fn).map(el =>
//            keys.reduce((acc, key) => {
//              acc[key] = el[key];
//              return acc;
//            }, {})
//          );
//        console.log(filterNonUnique(this.childrenList))
        this.childrenList.push(item)
        let arr = this.childrenList;
        for(var i=0;i<arr.length;i++){
          if(arr[i].ed_te_ParentID==item.ed_te_ParentID){
//            this.childrenList = [];
            this.childrenList.push(item)
            break
          }
        }
        this.childrenList = Array.from(new Set(this.childrenList))
//        this.childrenName = item.ed_te_Name;
        this.typeCId = item.ed_te_ID;
        this.typeId = item.ed_te_ID;
        if(item.ed_te_ID==''){
          this.childrenList = []
        }
        this.initData()

        this.initTypeVideo(1);
      },
      goVideoSearch(item) {
//        console.log(item)
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
