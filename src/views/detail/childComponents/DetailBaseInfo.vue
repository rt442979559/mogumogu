<template>
  <div class="baseInfo" v-if="Object.keys(goods).length !==0">
      <div class="info-title">
        <span class="intotitle">{{goods.title}}</span>
      </div>
        <div class="info-price">
          <span>¥{{goods.realPrice}}</span>
          <span>{{goods.oldPrice}}</span>
          <span>{{goods.discount}}</span>
      </div>
      <div class="info-sell">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.columns[2]}}</span>
      </div>
      <div class="info-service">
        <span v-for="index in goods.services.length-1" :key="index">
          <img :src="goods.services[index-1].icon" alt="">
          <span>{{goods.services[index-1].name}}</span>
        </span>
          
      </div>
  </div>
</template>

<script>
export default {
    name:"DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return{}
        }
      }
    }
}
</script>

<style scoped>
  .intotitle{
      font-size: 15px;
      display: block;
      margin: 6px 6px 8px 6px;
      letter-spacing:0.5px;
  }
  .info-price{
    width: 100%;
    display: flex;
    text-align: center;
    line-height: 22px;
    margin:15px 0 20px;
  }
  .info-price span{
    display: block;
  }
  .info-price span:nth-child(1){
    font-size: 24px;
    color: rgb(221, 72, 72);
    margin-right: 8px;
    margin-left: 10px;
  }
  .info-price span:nth-child(2){
    font-size: 14px;
    text-decoration-line:line-through;
    margin-right: 8px;
    margin-top: 4px;
    color: silver;
  }
  .info-price span:nth-child(3){
    font-size: 14px;
    letter-spacing:0.3px;
    border-radius: 9px;
    border: 2px solid skyblue;
    background-color: skyblue;
    color: white;
  }


  .info-sell{
    display: flex;
    width: 100%;
    height: 30px;
    line-height: 30px;
  }
  .info-sell span{
    flex: 1;
    display: block;
    color: rgb(133, 131, 131);
    border-bottom: 2px solid rgb(236, 236, 236);
    font-size: 13px;
  }
  .info-sell span:nth-child(1){
    text-align: center;
  }
  .info-sell span:nth-child(2){
    text-align: center;
  }
  .info-sell span:nth-child(3){
    text-align: center;
  }

  .info-service{
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 15px 0 8px 0 ;
    border-bottom: 3px solid rgb(236, 236, 236);
  }
  .info-service span{
    flex: 1;
    text-align: center;
  }
  .info-service span>img{
    flex: 1;
    width: 11px;
    height: 11px;
  }
  .info-service span>span{
    font-size: 10px;
  }

  
</style>