<template>
    <div class="tab-bar-item" @click="itemClick">
        <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
        <div>首页</div> -->
        <div v-if="!isClick">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-click"></slot>
        </div>
        <div :class="{active:isClick}">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data() {
        return {
            // isClick:true
        }
    },
    computed: {
        isClick(){
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {}
        }
    },
    methods: {
        itemClick(){
            this.$router.replace(this.path).catch(err => err)
        }
    },
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 13px;
  }
  .tab-bar-item img{
    margin-top: 6px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 0px;
  }
  .active{
      color: red;
  }

</style>