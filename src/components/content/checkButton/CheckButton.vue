<template>
  <div class="checkbutton"  :class="isChecked">
    
    <img src="~assets/img/check/checkboxtrue.svg"  alt=""
    v-if="isChecked" />
    <img src="~assets/img/check/checkboxfalse.svg" alt="" 
     v-else/>
  </div>
</template>

<script>
export default {
    name:"CheckButton",
    props:{
        isChecked: {
            type:Boolean,
            default:true
        }
    },
    
    methods: {
       itemClick(){
        //    if(this.isClick == 0){
        //        this.isClick = 1
        //    }else{
        //        this.isClick = 0
        //    }
        //     this.isClick = !this.isClick
            // this.isChecked = !this.isChecked
       }
    },
    
}
</script>

<style scoped>
    .checkbutton{
        text-align: center;
        height: 20vh;
        line-height: 20vh;
    }
    .checkbutton img{
        width: 30px;
        height: 30px;
    }
    
</style>
    
