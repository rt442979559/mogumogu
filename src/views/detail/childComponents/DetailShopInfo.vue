<template>
  <div class="shopInfo">
      <div class="logo-top">
          <img :src="shop.logo" alt="">
          <span class="business">{{shop.name}}</span>
      </div>
      <div class="info-centent">
          <div class="left-info">
              <span class="sells">{{shop.sells}}</span>
              <span class="goodsCount">{{shop.goodsCount}}</span>
              <div class="total">
                <span>总销量</span>
                <span>全部宝贝</span>
              </div>
              
          </div>
          <div class="tabright">
              <table class="right-info" v-for="item in shop.score">
                  <tr class="tabtr">
                      <td>{{item.name}}: </td>
                      <td class="lessgreen" :class="{'morered':item.isBetter}">{{item.score}}</td>
                      <td class="high" :class="{'morered-bgc':item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
                  </tr>
              </table>
          </div>
          <div class="join">进店逛逛</div>
      </div>
      
  </div>
</template>

<script>

export default {
    name:"DetailShopInfo",
    props:{
        shop:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scope>
    .shopInfo{
        border-bottom: 5px solid rgb(236, 236, 236);
    }
    .join{
        border-radius: 8px;
        width: 50vw;
        height: 6vh;
        background: skyblue;
        text-align: center;
        line-height:6vh;
        font-size: 15px;
        color: rgb(252, 250, 250);
        letter-spacing: 2.5px;
        opacity: .9;
        transform: translateX(50%) translateY(80%);
    }
    .tabright{
        margin-top: -95px;
        margin-left: 60vw;
        opacity: .8;
        font-size: 13px;
    }
    .right-info{
        /* 表格间距 */
        border-spacing:1px 5px;
    }
    .right-info .tabtr .high span{
        text-align: center;
    }

    .high{
        color: rgb(255, 255, 255);
        background-color: green;
    }
    .lessgreen{
        color: green;
    }
    .morered{
        color: red;
    }
    .morered-bgc{
        background-color: red;
    }

    .logo-top{
        width: 100%;
        height: 90px;
        line-height: 90px;
    }
    .logo-top img{
        width:43px;
        height: 43px;
        margin-left: 10px;
        border-radius: 50%;
        border: 2px solid rgb(214, 212, 212);
    }
    .logo-top span{
        font-size: 14px;
        display: block;
        margin-left: 65px;
        margin-top: -110px;
        color: rgb(87, 87, 87);
    }

    .info-centent{
        height: 160px;
        width: 100%;
        color: rgb(43, 43, 43);
        margin-top: -10px;
    }
    .left-info{
        width: 49vw;
        border-right: 2px solid rgb(236, 236, 236);
        
    }
    .sells{
        margin-left: 20px;
    }
    .goodsCount{
        margin-left: 23px;
    }
    .total{
        margin:20px 10px 20px 20px ;
        font-size: 13px;
        color: rgb(44, 44, 44);
    }
    .total span:nth-child(1){
        margin-right: 20px;
    }
    
    
</style>