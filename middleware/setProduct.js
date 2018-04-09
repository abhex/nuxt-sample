export default function ({store, params}) {
  for (const product of store.state.products) {
    if(product.base_model_number == params.name){
      store.commit('selectedProduct', product)
    }
  }
}
