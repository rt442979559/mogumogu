<template>
  <div class="goodsParam" v-if="Object.keys(goodsParam).length !==0">
    <table v-for="item in goodsParam.sizes">
      <!-- 因为里面是数组 所以还需要继续遍历 -->
      <tr v-for="tr in item">
        <!-- 因为里面是数组 所以还需要继续遍历 -->
        <td v-for="td in tr">
          {{td}}
        </td>
      </tr>
    </table>
    <table v-for="item in goodsParam.paramset">
      <!-- 因为里面是对象 所以可以直接取出来 -->
      <tr>
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
    name:"DetailGoodsParam",
    props:{
      goodsParam:{
        type:Object,
        default(){
          return{}
        }
      }
    }
}
</script>

<style scoped>

</style>