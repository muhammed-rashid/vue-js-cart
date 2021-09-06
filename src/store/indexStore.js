import {createStore} from 'vuex'
import productStore from './modules/productStore'
import cartStore from './modules/cartStore'
const store = createStore({
    modules:{
        products:productStore,
        cart:cartStore
    },
    state(){
        return{
    
        }
    }
})

export default store;