import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      products: [],
      parentCategories: [],
      l1Categories: [],
      l2Categories: [],
      drawer: true,
      price: 2000, 
      product: {}
    },
    actions: {
      async nuxtServerInit({ commit }) {
        await axios.get('http://192.168.100.28:4503/etc/commerce/products/jenn_air.infinity.json')
        .then(function (response) {
          // console.log("AXIOS Response",response);
          let responseData = response.data
          let keys = Object.keys(responseData).filter(key => key.match("^[^:]*$"))
          Object.keys(responseData).forEach( key => {
            let pattern = "^[^:]*$"
            if (key.match(pattern)){
              commit('addParentCategories', responseData[key])
              Object.keys( responseData[key] ).forEach( key2 => {
                if (key2.match(pattern)) {
                  commit('addL1Categories', responseData[key][key2])
                  // console.log( responseData[key][key2])
                  Object.keys( responseData[key][key2] ).forEach( key3 => {
                    if (key3.match(pattern) && key3 != "display_image") {
                      commit('addL2Categories', responseData[key][key2][key3])
                      Object.keys( responseData[key][key2][key3] ).forEach( key4 => {
                        if (key4.match(pattern) && key4 != "display_image") {
                          commit('addProducts', responseData[key][key2][key3][key4])
                        }
                      })
                    }
                  })
                }
              })
            }
          });
        })
      }, 
    },
    mutations: {
      changePrice (state, payload) {
        state.price = payload
      },
      addProducts (state, payload){
        state.products.push(payload);
      },
      addParentCategories (state, payload){
        state.parentCategories.push(payload);
      },
      addL1Categories (state, payload){
        state.l1Categories.push(payload);
      },
      addL2Categories (state, payload){
        state.l2Categories.push(payload);
      },
      changeProducts (state, payload) {
        for(var sVal of state.l2Categories){
          if (sVal['jcr:title'] == payload){   // they match
            state.products = []
            Object.keys( sVal ).forEach( key => {
                if (key.match("^[^:]*$")) {
                  state.products.push(sVal[key])
                }
              })
          }
        }
      },
      selectedProduct (state, payload){
        state.product = payload
      }
    }
  })
}

export default createStore