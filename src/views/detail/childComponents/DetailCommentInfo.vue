<template>
  <div class="detailcommentinfo" v-if="Object.keys(commentInfo).length !==0">
      <div class="info-user">
          <img :src="commentInfo.user.avatar" alt="" class="userimg">
          <span class="uname">{{commentInfo.user.uname}}</span>
      </div>
      <div class="rateinfo">
          <span>{{commentInfo.content}}</span>
            <div class="dateinfo">
                <span>{{commentInfo.created}}</span>
                <span>{{commentInfo.style}}</span>
            </div>
            <span class="rateimg" v-for="item in commentInfo.images">
                <img :src="item" alt="">
            </span>
      </div>
  </div>
</template>

<script>
export default {
    name:"DetailCommentInfo",
    props:{
        commentInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters: {
        showDate(value){
            //1.将时间戳转化成Date对象
            const date = new Date(value * 1000)
            //2.将date进行格式化
        }
    },
}
</script>

<style scoped>
    .detailcommentinfo{
        color: rgb(44, 44, 44);
    }
    .dateinfo{
        margin: 10px 0;
    }
    .info-user{
        height: 80px;
        width: 100%;
    }
    .userimg{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        border: 2px solid rgb(243, 243, 243);
        margin-top: 15px;
        margin-left: 20px;
    }
    .uname{
        position: absolute;
        transform: translate(10px,35px);
        font-size: 16px;
    }
    .rateimg{
        width: 500px;
        height: 60px;
    }
    .rateimg img{
        width: 60px;
        height: 60px;
        margin-right: 5px;
    }
</style>
