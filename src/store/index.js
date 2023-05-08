import { createStore } from 'vuex'

export default createStore({
  state: {
    cartState:{
        //  shopId  {  productId: {} }
    }
  },
  getters: {
  },
  mutations: {
     changeCartState(state,payload){
      const {shopId, productId, item,change} =payload;
      let shopInfo = state.cartState[shopId];
      if(!shopInfo) shopInfo ={};
      let productInfo = shopInfo[productId];
      if(!productInfo){
        productInfo = item;
        productInfo.count =0;
      } 
      productInfo.count += change;
      if(productInfo.count < 0) {
        productInfo.count = 0;
      }
      shopInfo[productId] = productInfo;
      state.cartState[shopId] = shopInfo;
      
    }
  },
  actions: {
  },
  modules: {
  }
})
