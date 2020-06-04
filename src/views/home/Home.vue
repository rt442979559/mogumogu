<template>
    <div id="home" class="wrapper">
        <nav-bar class="home-nav">
            <div slot="center">蘑菇街</div>
        </nav-bar>
        
        <Scroll class="content" ref="scroll" 
        :probeType="3" @scroll="contentScroll"
        :pull-up-load="true"
        @pullingUp="loadMore"
        >
        <swiper>
            <SwiperItem v-for="(item,index) in banners" >
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </SwiperItem>
        </swiper>
  

        <RecommendView :recommends="recommends"></RecommendView>
        <FeatureView></FeatureView>
        <TabControl class="tab-control" :titles="['流行','新款','精选']" 
        @tabClick="tabClick"
        ref="tabControl"
        :class="{fixed:isTabFixed}"></TabControl>

        <GoodsList :goods="goods[currentType].list"></GoodsList>
       
    </Scroll>
        <BackTop @click.native="backClick" v-show="isShow"/>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata,getHomeGoods} from 'network/home'
import {Swiper,SwiperItem} from 'components/common/swiper'
import Swip2 from 'components/common/swip2/Swip2'
import Swip2Child from 'components/common/swip2/Swip2Child'
import RecommendView from 'views/home/childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import TabControl from 'components/content/tabControl/TabControl'

import GoodsList from 'components/content/goods/GoodsList'

import Scroll from 'components/common/scroll/Scroll'
import BScroll from 'better-scroll'

//返回按钮
import BackTop from 'components/content/backTop/BackTop'
export default {
    name:"Home",
    components:{
        NavBar,
        Swiper,
        SwiperItem,
        Swip2,
        Swip2Child,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
    },
    data() {
        return {
            banners:[],
            recommends:[],
            //定义从接口接收过来的goods格式
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]},
            },
            //定义默认类型 currentType
            currentType:'pop',
            isShow:false,
            tabOffsetTop:0,
            isTabFixed:false,
            saveY:0,
        }
    },
    
    created() {
        this.getHomeMultidata()
        
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')

    },
    mounted() {
         //监听item中图片加载完成
        this.$bus.$on('imgLoad',() =>{
            // console.log('hi');
            this.$refs.scroll.scroll.refresh();
        })
        //获取tabControl的offset top值
        var tabControlTop = setTimeout(() => {
             this.$refs.tabControl.$el.offsetTop;
        }, 500);
        
    },
    methods: {
         // 1.请求多个数据+
        getHomeMultidata(){
          getHomeMultidata().then((res) => {
            console.log(res);
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
            }) 
        },
        //请求首页宝贝列表
        getHomeGoods(type){
            const page = this.goods[type].page + 1
          getHomeGoods(type,page).then(res =>{
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1 
            
            //完成上拉加载更多
            this.$refs.scroll.finishPullUp()
            })
        },

        //事件监听相关
        tabClick(index){
            switch (index) {
                case 0:
                    this.currentType = 'pop'
                    break;
                case 1:
                    this.currentType = 'new'
                    break;
                case 2:
                    this.currentType = 'sell'
                    break;
            }
        },
        backClick(){
            this.$refs.scroll.scroll.scrollTo(0,0,1000)
        },
        contentScroll(position){
            // console.log(position);
            //1.判断backtop是否显示
            this.isShow = position.y < -1000
            //.2决定tabOffsetTop是否吸顶(position:fixed)
            this.isTabFixed = (-position.y) > this.tabControlTop

        },
        loadMore(){
            this.getHomeGoods(this.currentType)
        }

    },
    //当首页激活时，调用scroll中的refresh先来刷新一次，
    // 避免图片未加载而卡滚动
    activated() {
      this.$refs.scroll.scroll.refresh();
    }
    
}
</script>

<style scoped>
    #home{
        position: relative;
        padding-top: 44px;
    }
    .home-nav{
        background-color: skyblue;
        color:white;
        font-size: 18px;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 999;
    }
    .content{
        height:100vh;
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
    /* .fixed{
        position: fixed;
        left: 0;
        right: 0;
        top: 44px;
    } */
    
</style>