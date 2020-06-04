<template>
    <div class="goods">
        <GoodsListItem v-for="item in goods" :goods-item="item" ></GoodsListItem>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    name:"GoodsList",
    components:{
        GoodsListItem
    },
    // 这里的props用来接收首页传过来的goods信息
    props:{
        goods:{
            type:Array,
            default(){
                return[]
            }
        }
    }
}
</script>

<style>
    .goods{
        margin-top: 8px;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-around;
    }

</style>

