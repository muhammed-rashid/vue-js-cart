


const cartStore = {
    namespaced:true,
    state(){
        return{
            items: [], 
            total: 0, 
            qty: 0 
        }
    },
    getters:{
        cartItems(state){
            return state.items
        },
        cartTotal(state){
            return state.total
        },
        cartQty(state){
            return state.qty
        }
    },
    mutations:{
        addProductToCart(state,payload) {
           
            var productData = payload
            const productInCartIndex =state.items.findIndex(
              (ci) => ci.productId === productData.id
            );
      
            if (productInCartIndex >= 0) {
              state.items[productInCartIndex].qty++;
            } else {
              const newItem = {
                productId: productData.id,
                title: productData.title,
                image: productData.image,
                price: productData.price,
                qty: 1,
              };
              state.items.push(newItem);
            }
           state.qty++;
          state.total += productData.price;
          },
      
          removeProductFromCart(state,prodId) {
            const productInCartIndex = state.items.findIndex(
              (cartItem) => cartItem.productId === prodId
            );
            const prodData = state.items[productInCartIndex];
            console.log(productInCartIndex);
            state.items.splice(productInCartIndex, 1);
           state.qty -= prodData.qty;
            state.total -= prodData.price * prodData.qty;
          },
          
    },
    
    actions:{
        addtoCart(context,payload){
          context.commit('addProductToCart',payload)
        },
      removeCart(context,payload){
          context.commit('removeProductFromCart',payload)
      }  

    }
}




export default cartStore