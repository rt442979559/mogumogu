<template>
    <div class="cartbottonbar">
      <!-- native用来监听组件事件 -->
        <div class="checkall">
          <CheckButton class="checkbtn" :is-checked="isSelectAll"
          @click.native="checkClick">
          </CheckButton>
          <span>全选</span>
        </div>
        <div class="heji">
          <span>合计:{{totalPrice.toFixed(2)}}</span>
        </div>
        <div>
          <span class="calc">
            去计算({{checkLength}})
          </span>
        </div>
    </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name:"CartBottonBar",
  components:{
    CheckButton
  },
  computed: {
    totalPrice(){
      return this.$store.state.cartList.filter((item) => {
        return item.checked
      }).reduce((prevalue,item) => {
        return prevalue + item.price * item.count
      },0)
    },
    checkLength(){
      return this.$store.state.cartList.filter((item) => item.checked).length
    },
    //全选
    isSelectAll(){
      // return !(this.$store.state.cartList.filter(item => !item.checked).length)
      this.$store.state.cartList.find(item => item.checked)
    }
  },
  methods: {
    checkClick(){
      if(this.isSelectAll){
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else{
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    }
  },
  
}
</script>

<style scoped>
    .cartbottonbar{
      height: 50px;
      background-color: rgb(240, 240, 240);
      position: relative;
      line-height: 50px;
      align-items: center;
      font-size: 17px;
    }
    
    .checkbtn{
      position: absolute;
      top: -5vh;
      left: 3vw;
      z-index: 999;
      width: 20px;
      height: 20px;
    }
    .checkall span{
      position: absolute;
      left: 12vw;
      top: 0.6vh;
    }
    .heji{
      position: absolute;
      left: 25vw;
      top: 0.6vh;
      align-items: center;
    }
    .calc{
      position: absolute;
      right: 0vw;
      align-items: center;
      background-color: rgba(255, 79, 67,.84);
      width: 25vw;
      align-items: center;
      text-align: center;
    }
</style>