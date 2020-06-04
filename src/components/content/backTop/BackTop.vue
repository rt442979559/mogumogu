<template>
    <div class="backTop">
        <img src="~assets/img/back/back-top.svg" alt="">
    </div>
</template>

<script>
export default {
    name:"BackTop",

}
</script>

<style scoped>
    .backTop{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: white;
        position: fixed;
        right: 10px;
        bottom: 50px;
        text-align: center;
        opacity: .8;
    }
    .backTop img{
        width: 30px;
        height: 30px;
        margin-top: 12px;
    }
</style>