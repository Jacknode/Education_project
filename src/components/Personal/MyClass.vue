<template>
  <div>
    <div id="wrap">
      <div class="classification clearfix">
        <a href="javascript:;" v-for="item,index in content" :class="{active:index==meatId}" @click="changeAvtive(index)">{{item}}</a>
        <!--<a href="javascript:;">学习记录</a>-->
      </div>
      <ul class="dataList">
        <li class="clearfix" v-for="item,index in myOrderList">
          <!--图片-->
          <img v-show="item.picture" v-lazy="item.picture" width="160" height="110">
          <div class="classInfo">
            <!--订单名称-->
            <strong>{{item.ed_ss_IDName}}</strong>
            <!--课时-->
            <span>1课时</span>
            <!--有效期-->
            <em>有效期至 2020.03.06</em>
          </div>
          <div class="classOperation">
            <a @click="ContinueStudy(item)">继续学习</a>

               <input type="button" value="删除" @click="goDelete(item)">

            <!--<el-button-->
              <!--size="mini"-->
              <!--type="danger"-->
              <!--@click="Delete(scope.row.ed_oi_ID)">删除-->
            <!--</el-button>-->
          </div>
        </li>
        <li v-show="!myOrderList.length" style="text-align: center;margin-top: 30px;font-weight: bold;font-size: 24px;">暂无数据</li>
      </ul>
      <!--分页-->
      <div class="paging">
        <el-pagination
          background
          :page-size="5"
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          v-show="total"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([
      'myOrderList',
      'orderDetail'
    ]),
    data() {
      return {
        total: 0,
        userInfo:{},
        meatId:0,
        content:['购买课程','学习记录']
      }
    },
    created(){
      this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
      this.initData();
    },
    methods: {
      changeAvtive(index){
        this.meatId=index
      },
      //继续学习
      ContinueStudy(item){
        if(item.ed_oi_PayState){
          const {href} = this.$router.resolve({
            name: 'PlayVideo',
            query: {id:item.ed_oi_ID}
        });

          window.open(href, '_blank')
        }else {
          sessionStorage.setItem('orderInfo',JSON.stringify(item))
          const {href} = this.$router.resolve({
            name: 'PayOrder',
            query: {orderId:item.ed_oi_ID}
          });
          window.open(href, '_blank')
        }


      },

      //删除确认
      goDelete(item){

        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.Delete(item)
        })
    },
      //删除
      Delete(item){
        let deleteOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token": this.userInfo.token,
          "data": {
            "ed_oi_ID":item.ed_oi_ID,//标识
          }
        }
        this.$store.dispatch('DeleteOrder', deleteOptions)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData()
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          });

      },
      //初始化我的订单
      initData() {
        let userId =JSON.parse(sessionStorage.getItem("userInfo")).sm_ui_ID+'';
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token":this.userInfo.token,
          "page": "1",
          "rows": "10",
          "ed_ss_ID": "",//系列编号
          "ed_oi_UserID": userId?userId:"",//用户编码
          "ed_oi_PayState": "",//支付状态（0未支付，1已支付)
        };
        this.$store.dispatch("initMyOrderAction",options)
        .then((total)=>{
          this.total = total
        })
      },
      search() {
        this.initData()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    },
  }
</script>
<style scoped>
  #wrap {
    padding: 24px 0 30px;
  }

  .classification {
    font: 15px/2 "微软雅黑";
    padding-left: 45px;
    padding-bottom: 12px;
    border-bottom: 1px solid #f4f4f4;
  }

  .classification > a {
    float: left;
    padding: 0 30px;
    border: 1px solid #b3b3b3;
    color: #333333;
  }

  .classification > a:hover,
  .classification > a.active {
    color: #fff;
    background-color: #0461b1;
    border-color: #0461b1;
  }

  .dataList {
    margin-bottom: 124px;
  }

  .dataList img {
    float: left;
  }

  .dataList > li {
    padding: 17px 30px 17px 45px;
  }

  .dataList > li:hover {
    background-color: #fafafa;
    box-shadow: 0 0 5px #ccc;
  }

  .classInfo {
    float: left;
    margin-left: 20px;
    font: 14px/24px "微软雅黑";
    color: #333333;
  }

  .classInfo strong {
    display: block;
    margin-top: 2px;
  }

  .classInfo span {
    display: block;
  }

  .classInfo em {
    display: block;
    margin-top:32px;
  }

  .classOperation {
    float: right;
    margin-top: 40px;
  }
  .classOperation input{
    height: 30px;
    width: 50px;
    border-radius: 3px;
  }
  .classOperation input:hover{
    background-color: #0461b1;
    color: white;
  }
  .classOperation a {
    float: left;
    width: 80px;
    font: 14px/2 "微软雅黑";
    border: 1px solid #0461b1;
    color: #0461b1;
    text-align: center;
    margin-right: 16px;
  }

  .classOperation a:hover {
    background-color: #0461b1;
    color: #fff;
  }

  .classOperation button {
    margin-top: 2px;
    background-color: #d9d9d9;
    border: none;
    box-shadow: 2px 2px 2px #ccc;
    color: #808080;
    width: 52px;
    font: 12px/2 "微软雅黑";
  }

  .paging {
    text-align: right;
    margin-right: 30px;
  }

</style>
