<template>
  <div class="detailInfo" v-if="Object.keys(detailInfo).length !==0">
      <div v-for="item in detailInfo.detailImage[0].list" class="detailimage">
          <img :src="item" alt="">
      </div>
  </div>
</template>

<script>
export default {
    name:"DetailInfo",
    props:{
        detailInfo:{
            type:Object,
        }
    },
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
    .detailimage img{
        width: 100%;
    }
</style>