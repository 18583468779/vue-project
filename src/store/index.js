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
      let shopInfo = state.cartState[shopId] || {};
      let productInfo = shopInfo[productId];
      if(!productInfo){
        productInfo = item;
        productInfo.count =0;
        productInfo.checked = true;
      } 
      productInfo.count += change;
      (productInfo.count < 0 && (productInfo.count = 0));
      
      shopInfo[productId] = productInfo;
      state.cartState[shopId] = shopInfo;
    },
    changeCartChecked(state,payload){
      const {shopId, productId} =payload;
      let shopInfo = state.cartState[shopId];
      let productInfo = shopInfo[productId];
      productInfo.checked = !productInfo.checked
      state.cartState[shopId] = shopInfo;
    },
    changeCartAllChecked(state,payload){
      const {shopId} =payload;
      let shopInfo = state.cartState[shopId];
      if(shopInfo){
        for(let item in shopInfo){
          const product = shopInfo[item]
          product.checked = true;
        }
        state.cartState[shopId] = shopInfo;

      }
    },
    changeCartAllClear(state,payload){
      const {shopId} =payload;
      let shopInfo = state.cartState[shopId];
      if(shopInfo){
        shopInfo = {};
        state.cartState[shopId] = shopInfo;
      }
    }
    
  },
  actions: {
  },
  modules: {
  }
})
