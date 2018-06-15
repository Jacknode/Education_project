<template>
  <div id="wrap">
    <div id="content">
      <header></header>
      <section></section>
      <footer></footer>
    </div>
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
  #wrap {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url("../../assets/img/loginBg.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
</style>
