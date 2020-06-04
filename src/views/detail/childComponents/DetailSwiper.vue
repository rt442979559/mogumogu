<template>
      <Swiper class="swp">
          <SwiperItem v-for="item in topImages" class="swpitem">
              <img :src="item" alt="">
          </SwiperItem>
      </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    name:"DetailSwiper",
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .swp{
        height: 300px;
        overflow: hidden;
    }
</style>