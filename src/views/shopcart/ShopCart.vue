<template>
    <div class="shop-cart">
        <!-- 导航 -->
        <NavBar class="shopcart-topbar">
            <div slot="center">购物车({{cartLength}})</div>
        </NavBar>

        <!-- 商品列表 -->
        <CartList></CartList>

        <!-- 底部汇总 -->
        <CartBottonBar></CartBottonBar>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import CartList from './childComps/CartList'
    import CartBottonBar from './childComps/CartBottonBar'
    export default {
        name:"ShopCart",
        components:{
            NavBar,
            CartList,
            CartBottonBar
        },
        computed: {
            cartLength(){
                return this.$store.state.cartList.filter((item)=>item.checked).length
            }
        },
    }
</script>

<style scoped>
    .shopcart-topbar{
        background-color: skyblue;
        color: white;
        font-size: 18px;
    }
    .shop-cart{
        height: 100vh;
    }
    
</style>