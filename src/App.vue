<template>
  <div id="app">
    <MainTabBar class="maintabbar"></MainTabBar>
    
    <keep-alive exclude="Detail">
    <router-view ></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar
  },
}
</script>

<style scoped>
  @import "assets/css/base.css";
  .maintabbar{
    z-index: 999;
  }
</style>