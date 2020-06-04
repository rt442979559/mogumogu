<template>
    <div class="goods-item" @click="itemClick">
        <img v-lazy="showImage" alt="" @load="imgLoad">
        <div>
            <p>{{goodsItem.title}}</p>
            <span class="price">价格:{{goodsItem.price}}</span>
            <span class="cfav">收藏:{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"GoodsListItem",
    // 这里的props用来接收首GoodsList传来的信息
    props:{
        goodsItem:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    computed: {
        showImage(){
            return this.goodsItem.image || this.goodsItem.show.img
        }
    },
    methods: {
        imgLoad(){
            this.$bus.$emit('imgLoad')
        },
        itemClick(){
            //添加动态路由
            this.$router.push('/detail/' +  this.goodsItem.iid)
        }
    },
}
</script>

<style scoped>
    .goods-item{
        position: relative; 
        padding-bottom: 30px; 
        width: 46vw;
    }
    .goods-item img{
        width: 100%;
        border-radius: 5px;
    }
    .goods-item p{
        /* 设置文字超出部分变成省略 */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 6px;
    }
    .price{
        font-size: 16px;
        color: rgb(247, 80, 80);
        margin-right: 10px;
    }
    .cfav{
        width: 20px;
        height: 5px;
        font-size: 12px;
        color: skyblue;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

</style>