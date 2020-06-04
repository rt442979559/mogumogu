<template>
  <div class="detail">
      <DetailNavBar class="navbar" @itemClick="itemClick" ref="nav"></DetailNavBar>
      <!-- <ul>
              <li v-for="item in $store.state.cartList">
                  {{item}}
              </li>
          </ul> -->
      <Scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
          
      <DetailSwiper :top-images="topImages"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailCommentInfo ref="comment" :comment-info="commentInfo"></DetailCommentInfo>
      <DetailInfo :detail-info="detailInfo"></DetailInfo>
      <DetailGoodsParam ref="params" :goods-param="goodsParam"></DetailGoodsParam>  
      <GoodsList ref="recommend" :goods="recommends"></GoodsList>
      </Scroll>
      <DetailBottomBar @addCart="addToCart" class="bottombar"></DetailBottomBar>
      <BackTop @click.native="backClick" v-show="isShow"/>
      <Toast message="加入购物车成功！" :show="show"></Toast>
  </div>
</template>

<script>
import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import DetailNavBar from './childComponents/DetailNavBar'
import DetailSwiper from './childComponents/DetailSwiper'
import DetailBaseInfo from './childComponents/DetailBaseInfo'
import DetailShopInfo from './childComponents/DetailShopInfo'
import DetailInfo from './childComponents/DetailInfo'
import DetailGoodsParam from './childComponents/DetailGoodsParam'
import DetailCommentInfo from './childComponents/DetailCommentInfo'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

//防抖
import debounce from '../../common/debounce.js'

import DetailBottomBar from './childComponents/DetailBottomBar'

//回到顶部
import BackTop from 'components/content/backTop/BackTop'

import Toast from 'components/common/toast/Toast'
export default {
    name:"Detail",
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailInfo,
        DetailGoodsParam,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar,
        BackTop,
        Toast,
    },
    data() {
        return {
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            goodsParam:{},
            commentInfo:{},
            //获取到请求数据后 保存到这里
            recommends:[],
            //将setofftop的值保存到这里
            themeTopYs:[],
            itemIndex:0,
            isShow:false,
            show:false,
            message:'',
            show:false
        }
    },
    created() {
        //  一 获取iid
        this.iid = this.$route.params.iid

        // 二 请求详情数据
        getDetail(this.iid).then((res)=>{
            console.log(res);
            //1.获取商品轮播图
            this.topImages = res.result.itemInfo.topImages

            //2.获取商品信息
            const data = res.result
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

            //3.获取店铺信息的对象
            this.shop = new Shop(data.shopInfo)

            //4.获取商品详细信息
            this.detailInfo = data.detailInfo

            //5.获取商品参数
            this.goodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule)

            //6.取出评论信息。判断是否有评论信息
            if(data.rate.cRate !== 0){
                this.commentInfo = data.rate.list[0]
            }

            //(nextTick:下一帧)等前面的东西渲染完成 会执行$nextTick
            this.$nextTick(() => {
                //根据最新的数据，对应的DOM已经渲染出来了
                // 但是图片还是没有加载完成

                // this.themeTopYs = []
                // this.themeTopYs.push(0);
            //获取params的offsetTop
                // this.themeTopYs.push(this.$refs.params.$el.offsetTop);
                // this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
                // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
                // console.log(this.themeTopYs); 
            })
        })

        // 三 请求推荐数据
        getRecommend().then((res) =>{
            console.log(res);
            this.recommends = res.data.list
        })

        this.getThemeTopY = debounce(() => {
                this.themeTopYs = []
                this.themeTopYs.push(0);
            //获取params的offsetTop
                this.themeTopYs.push(this.$refs.params.$el.offsetTop);
                this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
                this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
                console.log(this.themeTopYs); 
        },100)

    },
    methods: {
        itemClick(index){
            console.log(index);
            this.$refs.scroll.scroll.scrollTo(0,-this.themeTopYs[index],1500)
            //     this.themeTopYs = []
            //     this.themeTopYs.push(0);
            // 获取params的offsetTop
            //     this.themeTopYs.push(this.$refs.params.$el.offsetTop);
            //     this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
            //     this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
            //     console.log(this.themeTopYs); 
            this.getThemeTopY()
        },
        contentScroll(position){
            // console.log(position);
            //1.判断backtop是否显示
            this.isShow = position.y < -1000
            //.2决定tabOffsetTop是否吸顶(position:fixed)
            this.isTabFixed = (-position.y) > this.tabControlTop

        },
        backClick(){
            this.$refs.scroll.scroll.scrollTo(0,0,1000)
        },
        //添加购物车
        addToCart(){
            //1.获取购物车需要展示的信息
            const product = {}
            product.image = this.topImages[0];
            product.title = this.goods.title;
            product.desc = this.goods.desc;
            product.price = this.goods.realPrice;
            product.iid = this.iid;

            //2.将商品添加到购物车里面
            this.$store.commit('addCart',product)

            //3.点击购物车提示信息
            this.show = true;
            setTimeout(() => {
                this.show = false;
            }, 1000);
           
        } ,
        
        
    },
    mounted() {

    },
    activated() {
        this.$refs.scroll.scroll.refresh();
    },
}
</script>

<style scoped>
    .detail{
        position: relative;
        z-index: 9999;
        background-color: #FFF;
        height: 100vh;
    }
    .navbar{
        position: relative;
        top: 0;
        z-index: 999;
        background-color: white;
        overflow: hidden;
    }
    .content{
        height: 100vh;
        height: calc(100% - 47px - 50px);
    }
    .bottombar{
        z-index: 99;
    }
</style>