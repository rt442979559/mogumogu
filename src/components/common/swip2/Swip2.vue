<template>
    <div class="wapper" id="swip2">
        <div class="wapperimg">
            <slot name="swipimg">
                <img src="~assets/img/swiper/1.jpg" alt="">
                <img src="~assets/img/swiper/2.jpg" alt="">
            </slot>
        </div>
        
        <div class="buttom">
            <div class="circle" >
                <slot name="swipcircle">
                
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Swip2",
    methods: {

    },
}
</script>

<style scoped>
    .wapper{
        height: 166px;
        background-color: pink;
        position: relative;
        overflow: hidden;
    }

    .buttom{
        display: flex;
        justify-content: center;
        position: absolute;
        width: 100%;
        bottom: 10px;
        height: 10px;
        background-color: black;
    }
    .circle{
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
        text-align: center;
    }
    .wapperimg img{
        height: 166px;
    }
    
</style>