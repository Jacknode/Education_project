<template>
  <div>
    <div>头部</div>
    <keep-alive>
      <router-view name="User"></router-view>
    </keep-alive>
    <div>尾部</div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: '',
    data(){
      return {}
    },
    computed: mapGetters([]),
    created(){
    },
    methods: {},
  }
</script>
<style scoped>

</style>
