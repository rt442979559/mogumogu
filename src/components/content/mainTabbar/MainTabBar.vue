<template>
    <tab-bar id="tab-bar">
      <tab-bar-item path="/home" activeColor="red">
         <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
         <img slot="item-icon-click" src="~assets/img/tabbar/homeclick.svg" alt="">
         <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/sort" activeColor="red">
         <img slot="item-icon" src="~assets/img/tabbar/sort.svg" alt="">
         <img slot="item-icon-click" src="~assets/img/tabbar/sortclick.svg" alt="">
         <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="red">
         <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
         <img slot="item-icon-click" src="~assets/img/tabbar/shopcartclick.svg" alt="">
         <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/user" activeColor="red">
         <img slot="item-icon" src="~assets/img/tabbar/user.svg" alt="">
         <img slot="item-icon-click" src="~assets/img/tabbar/userclick.svg" alt="">
         <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

 <script>
    import TabBar from 'components/common/tabbar/TabBar'
    import TabBarItem from 'components/common/tabbar/TabBarItem'
 export default {
     name:"MainTabBar",
     components:{
         TabBar,
         TabBarItem
     }
 }
 </script>

 <style scoped>
   .tab-bar{
      z-index: 999;
   }
 </style>