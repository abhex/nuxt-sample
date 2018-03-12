export default function ({store, params}) {
  for (const product of store.state.products) {
    console.log("BASE MODEL NUMBER",product.base_model_number)
    if(product.base_model_number == params.name){
      console.log("IM INISDE EFFY")
      store.commit('selectedProduct', product)
    }
  }
}
