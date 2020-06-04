<template>
  <div class="toast" v-show="show">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    name:"Toast",
    props:{
        message:{
            type:String,
            default:''
        },
        show:{
            type:Boolean,
            default:false
        }
    },
}
</script>

<style scoped>
    .toast{
        position: fixed;
        top: 50%;
        left: 50%;
        background-color: rgba(66, 66, 66, 0.5);
        color: white;
        transform: translate(-50%,-50%);
        font-size: 22px;
    }
</style>