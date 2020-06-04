<template>
  <div class="detailNavBar">
      <NavBar class="navbar">
          <div slot="left" class="back" @click="backClick">
              <img src="~assets/img/back/Back.png" alt="">
          </div>
          <div slot="center" class="title">
              <div v-for="(item,index) in title" class="titleItem"
               :class="{active:index === itemIndex}"
               @click="itemClick(index)">

                  {{item}}
              </div>
          </div>
      </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name:"DetailNavBar",
    components:{
        NavBar
    },
    data() {
        return {
            title:['商品','参数','评论','推荐'],
            itemIndex:0
        }
    },
    methods: {
        itemClick(index){
            this.itemIndex = index;
            //将点击事假发送出去    
            this.$emit('itemClick',index);
        },
        backClick(){
            this.$router.back()
        }
    },
}
</script>

<style scoped>
    .navbar{
        border-bottom: 3px solid rgba(209, 209, 209,.2);
    }
    .title{
        display: flex;
        font-size: 14px;
    }
    .titleItem{
        flex:1 ;
    }
    .active{
        color: skyblue;
    }
    .back img{
        width: 25px;
        height: 25px;
        margin-top: 10px;
    }
</style>