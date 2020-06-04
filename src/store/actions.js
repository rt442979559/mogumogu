export default {
     //payload:新添加的商品
     addCart(context,payload){
        //定义一个原购物车商品对象oldProduct 来判断购物车中是否已经有商品
        let oldProduct = null;
        for(let item in context.state.cartList){
            if(item.iid == payload.iid){
                oldProduct = item
            }
        }
        //如果已经有了同一商品 则在数量上加一
        if(oldProduct){
            // oldProduct.count += 1
            context.commit('addCounter',oldProduct)
        }else{
            //如果没有 则定义数量为1 ，把他重新加入到购物车
            payload.count = 1
            // context.state.cartList.push(payload)
            context.commit('addToCart',payload)
        }
    }
}