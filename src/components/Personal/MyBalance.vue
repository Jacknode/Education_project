<template>
  <div>
    <div id="wrap">
      <div class="titleNav clearfix">
        <div>
          <a
            href="javascript:;"
            v-for="item,index in navList"
            @click="changeNav(index)"
            :class="{active: navActiveIndex == index}"
          >{{item}}</a>
        </div>
        <a href="javascript:;" v-show="showMoney">余额说明</a>
      </div>
      <div class="money clearfix" v-show="showMoney">
        <div class="balance">
          <i></i>
          <strong>{{moneyObj.sm_up_Money}}.00</strong>
        </div>
        <div class="balanceOperation">
          <a href="javascript:;" class="recharge">充值</a>
          <!--<a href="javascript:;" class="putForward">提现</a>-->
        </div>
      </div>
      <dl class="balanceDetails" v-show="showMoney">
        <dt>余额明细</dt>
        <dd class="clearfix" v-for="item,index in moneyBadDetailsList">
          <div class="left">
            <strong>{{item.sm_pd_CostContent}}</strong>
            <span>余额: {{moneyObj.sm_up_Money}}.00</span>
          </div>
          <div class="right">
            <strong>{{item.sm_pd_CostTime | getUseTime}}</strong>
            <span>{{item.sm_pd_Price}}</span>
          </div>
        </dd>
      </dl>
      <div class="paging" v-show="showMoney">
        <el-pagination
          background
          :page-size="5"
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          v-show="total"
          :total="total">
        </el-pagination>
      </div>
      <ul class="integralList clearfix" v-show="!showMoney">
        <li v-for="item,index in integralList">
          <strong>{{item.sm_ust_Name}}</strong>
          <span>{{item.sm_ss_Score}} 分</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([
      'moneyObj',
      'moneyBadDetailsList',
      'integralList'
    ]),
    data() {
      return {
        total: 0,
        userInfo: {},
        navList: [
          '我的余额',
          '我的积分'
        ],
        navActiveIndex: 0,
        showMoney: true,
      }
    },
    created() {
      this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
      this.initMoney();
      this.initMoneyBadDetails();
    },
    methods: {
      //初始化钱包余额
      initMoney() {
        let selectUserPot = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "huileyou",//操作员编码
          "operatePassword": "123",//操作员密码
          "operateUserName": "",//
          "pcName": "",
          token:this.userInfo.token,
          "sm_up_ID": this.userInfo.sm_ui_ID,//钱包编码=用户编码
        };
        this.$store.dispatch('initMoney', selectUserPot)
          .then(() => {
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
      //初始化钱包消费明细
      initMoneyBadDetails(num) {
        let getUserPotInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "huileyou",//操作员编码
          "operatePassword": "123",//操作员密码
          "operateUserName": "",//
          "pcName": "",
          token:this.userInfo.token,
          "potID": this.userInfo.sm_ui_ID,//钱包编码
          "page": num ? num : 1,
          "rows": "5"
        }
        this.$store.dispatch('initMoneyBadDetails', getUserPotInfo)
          .then(total => {
            this.total = Number(total);
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
      //分页
      handleCurrentChange(num) {
        this.initMoneyBadDetails(num)
      },
      //选择导航
      changeNav(index) {
        this.navActiveIndex = index;
        if(this.navActiveIndex == 0){
          this.showMoney = true;
        }else {
          this.initIntegral();
          this.showMoney = false;
        }
      },
      //初始化积分
      initIntegral() {
        let selectUserTotalScore = {
          "loginUserID": "huileyou",//授权码
          "loginUserPass": "123",//授权密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",//机器码
          token:this.userInfo.token,
          "userCode": this.userInfo.sm_ui_ID,//用户编码
        };
        this.$store.dispatch('initIntegral', selectUserTotalScore)
          .then(() => {
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
    },
  }
</script>
<style scoped>
  #wrap {
    padding-bottom: 30px;
  }

  .titleNav {
    padding: 24px 30px 12px 45px;
    border-bottom: 1px solid #f4f4f4;
    margin-bottom: 24px;
  }

  .titleNav > div {
    float: left;
    font: 15px/28px "微软雅黑";
  }

  .titleNav > div > a {
    float: left;
    width: 120px;
    text-align: center;
    border: 1px solid #b3b3b3;
    color: #333;
  }

  .titleNav > div > a:hover,
  .titleNav > div > a.active {
    background-color: #0461b1;
    color: #fff;
    border-color: #0461b1;
  }

  .titleNav > a {
    float: right;
    font: 14px/30px "微软雅黑";
    color: #a1a1a1;
  }

  .money {
    padding-left: 45px;
    padding-right: 30px;
  }

  .balance {
    float: left;
  }

  .balance i {
    float: left;
    width: 52px;
    height: 52px;
    background: url("../../assets/img/Icon.png") no-repeat -173px -581px;
    margin-right: 35px;
  }

  .balance strong {
    float: left;
    font: bold 30px/52px "微软雅黑";
    color: #f43232;

  }

  .balanceOperation {
    float: right;
    font: 14px/2 '微软雅黑';
    margin-top: 10px;
  }

  .balanceOperation a {
    width: 100px;
    float: left;
    margin-left: 15px;
    text-align: center;
  }

  .recharge {
    background-color: #0461b1;
    color: #fff;
    border: 1px solid #0461b1;
  }

  .putForward {
    color: #0461b1;
    border: 1px solid #0461b1;
  }

  .balanceDetails {
    margin-top: 22px;
    padding-bottom: 20px;
  }

  .balanceDetails dt {
    font: 15px/40px "微软雅黑";
    border-bottom: 1px solid #f4f4f4;
    padding-left: 45px;
    color: #333;
    margin-bottom: 10px;
  }

  .balanceDetails dd {
    padding: 5px 30px 5px 45px;
    color: #333;
  }

  .balanceDetails dd:hover {
    background-color: #f1f1f1;
  }

  .balanceDetails .left {
    float: left;
  }

  .balanceDetails .left strong {
    display: block;
    font: 14px/24px "微软雅黑";
  }

  .balanceDetails .left span {
    display: block;
    font: 12px/22px "微软雅黑";
  }

  .balanceDetails .right {
    float: right;
  }

  .balanceDetails .right strong {
    display: block;
    font: 12px/22px "微软雅黑";
    color: #808080;
  }

  .balanceDetails .right span {
    display: block;
    font: 14px/24px "微软雅黑";
  }

  .paging {
    text-align: right;
    margin-right: 30px;
  }

  .integralList {
    font: 14px/3 "微软雅黑";
  }

  .integralList > li {
    float: left;
    width: 100%;
    padding: 0 20px;
    color: #333;
  }

  .integralList > li:hover {
    background-color: #f4f4f4;
  }

  .integralList strong {
    float: left;
  }

  .integralList span {
    float: right;
  }

</style>
