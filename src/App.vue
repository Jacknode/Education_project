<template>
  <div id="app">
    <!--loading加载-->
    <div class="loadingMask" v-show="isLoading">
      <div class="loadingMaskBox"></div>
      <div class="loadingContentBox">
        <i></i>
        <p>拼命加载中</p>
      </div>
    </div>
    <!--<comment></comment>-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'app',
    computed:mapGetters([
      'isLoading'
    ]),
    mounted(){
      //获取当前位置
      if(returnCitySN.cname.indexOf('省')){
        let n = returnCitySN.cname.indexOf('省')+1;
        let obj = {
          province:returnCitySN.cname.substring(0,n),
          city:returnCitySN.cname.substring(n)
        }
        sessionStorage.setItem('addComp',JSON.stringify(obj))
      }
    }
  }
</script>

<style>
  @keyframes rotating{
    from{transform:rotate(0)}
    to{transform:rotate(360deg)}
  }

  /*加载遮罩*/
  .loadingMask .loadingContentBox {
    width: 100%;
    text-align: center;
    color: #409eff;
    position: fixed;
    z-index: 9999;
    top: 50%;
  }

  .loadingMask .loadingContentBox i {
    width: 31px;
    height: 32px;
    background: url("./assets/img/loadingICon.png") no-repeat;
    display: block;
    margin: 0 auto 10px;
    animation: rotating 2s linear infinite;
  }
  .loadingMask .loadingMaskBox {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    background-color: #fff;
    /*opacity: .9;*/
  }
  .el-loading-spinner .circular {
    /*margin-left: 50%;*/
  }
</style>
