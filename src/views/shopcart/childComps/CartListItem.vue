<template>
  <div class="cartListItem">
      <div class="left">
        <CheckButton :is-checked="product.checked" @click.native="checkClick"></CheckButton>
        <img :src="product.image" alt="" class="productimg">
      </div>
      <div class="right">
        <div class="pro-title">
            {{product.title}}
        </div>
        <div class="pro-desc">
            {{product.desc}}
        </div>
        <div class="pro-price">
           <span>¥{{product.price}}</span> 
           <span class="count">x1</span>
        </div>
      </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton';
export default {
    name:"CartListItem",
    components:{
        CheckButton
    },
    props:{
        product:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        checkClick(){
            this.product.checked = !this.product.checked
        }
    },
}
</script>

<style scoped>

    .cartListItem{
        display: flex;
        width: 100%;
        border-bottom: 2px solid rgba(202, 202, 202, 0.5);
    }
    .left{
        display: flex;
    }
    .left img{
        width: 25vw;
        height: 18vh;
        margin: 8px 15px 8px 5px;
        border-radius: 10px;
    }
    .right{
        display: flex;
        flex-direction: column;
        justify-content:space-evenly;
        letter-spacing: 0.8px;
    }
    .pro-title{
        width:60vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 6px;
    }
    .pro-desc{
        width:60vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 6px;
        color: rgba(24, 24, 24, 0.5);
        font-size: 13px;
        letter-spacing: 0.5px;
    }
    .pro-price span:nth-child(1){
        color: rgb(247, 97, 28);
    }
    .pro-price .count{
        float: right;
        margin-right: 10vw;
    }

</style>
vue