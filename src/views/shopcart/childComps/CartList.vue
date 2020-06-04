<template>
    <div class="cartList">
        <div class="wrapper">
        <Scroll class="content" ref="scroll">
            <!-- 把遍历出来的item保存在product中 传给cartlistitem -->
            <CartListItem 
            v-for="(item,index) in cartList" 
            :product="item"
            :key="index">
            </CartListItem>
        </Scroll>
        </div>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'
export default {
  name:"CartList",
  components:{
      Scroll,
      CartListItem,
  },
    computed: {
      cartList(){
        return this.$store.state.cartList
       },
  },
  activated() {
      this.$refs.scroll.scroll.refresh();
  },
}
</script>

<style scoped>
    .wrapper{
        height:calc(100vh - 143px);
        /* background-color: red; */
        overflow: hidden;
    }
</style>