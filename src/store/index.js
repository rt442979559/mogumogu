import Vue from 'vue'
import Vuex from 'vuex'

// import mutations from './mutations'
// import actions from './actions'
Vue.use(Vuex)

//创建state对象
// const state = {
//     cartList:[]
// }


const store = new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
        addCart(state,payload){
            const oldProduct = null;
            for(let item in this.state.cartList){
                if(item.iid == payload.iid){
                    oldProduct = item
                }
            }
            if(oldProduct){
                oldProduct.count += 1 
            }else{
                payload.count = 1
                payload.checked = true
                state.cartList.push(payload)
            }
        }
    },
})

export default store