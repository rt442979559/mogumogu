<template>
    <div class="tabControl">
        <div v-for="(item,index) in titles" class="tabItem"
        :class="{active:index === currentIndex}"
        @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"TabControl",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            currentIndex:0
        }
    },
    methods: {
        itemClick(index){
            this.currentIndex = index;
            this.$emit('tabClick',index)
        }
    },
}
</script>

<style>
    .tabControl{
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        background-color: white;
    }
    .tabItem{
        flex: 1;
    }
    .tabControl span{
        padding: 10px;
    }
    .active{
        color:skyblue;
    }
    .active span{
        border-bottom:3px solid skyblue;
    }
</style>