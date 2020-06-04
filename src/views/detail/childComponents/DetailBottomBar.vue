<template>
  <div class="bottomBar">
      <div class="bar-kefu">客服</div>
      <div class="bar-dianpu">店铺</div>
      <div class="select">收藏</div>
      <div class="shopcart" @click="addToCart">购物车</div>
      <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
    name:"DetailBottomBar",
    methods: {
        addToCart(){
            this.$emit('addCart')
            
        }
    },
}
</script>

<style scoped>
    .bottomBar{
        position: fixed;
        height: 50px;
        width: 100vw;
        background: white;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        /* align-items: center; */
        /* border-top: 1px solid rgba(182, 182, 182, 0.5); */
    }
    .bottomBar div{
        height: 50px;
        text-align: center;
        line-height: 50px;
        color: black;
    }
    .bottomBar div:nth-child(1){
        font-size: 13px;
        color: red;
        flex: 1;
    }
    .bottomBar div:nth-child(2){
        font-size: 13px;
        flex: 1;
    }
    .bottomBar div:nth-child(3){
        font-size: 13px;
        flex: 1;
    }
    .bottomBar div:nth-child(4){
        flex: 2;
        background-color: rgb(248, 216, 157);
        border-top-left-radius: 10%;
        color: white;
    }
    .bottomBar div:nth-child(5){
        flex: 2;
        background-color: rgb(235, 98, 80);
        color: white;
    }
</style>