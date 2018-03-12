import * as JsonLoaded from '../static/jenn_air.infinity.json'
import axios from 'axios'

function keysThatMatch(data) {
  let pattern = "^[^:]*$"
  return Object.keys(data).filter(key => key.match(pattern))
} 


export default function ({store}) {
  axios.get('http://192.168.100.28:4503/etc/commerce/products/jenn_air.infinity.json')
  .then(function (response) {
    let responseData = response.data
    let keys = keysThatMatch(responseData)
    
    Object.keys(responseData).forEach( key => {
      let pattern = "^[^:]*$"
      if (key.match(pattern)){
        store.commit('addParentCategories', responseData[key])
        Object.keys( responseData[key] ).forEach( key2 => {
          if (key2.match(pattern)) {
            store.commit('addL1Categories', responseData[key][key2])
            Object.keys( responseData[key][key2] ).forEach( key3 => {
              if (key3.match(pattern) && key3 != "display_image") {
                store.commit('addL2Categories', responseData[key][key2][key3])
                Object.keys( responseData[key][key2][key3] ).forEach( key4 => {
                  if (key4.match(pattern) && key4 != "display_image") {
                    store.commit('addProducts', responseData[key][key2][key3][key4])
                  }
                })
              }
            })
          }
        })
      }
    });
  })
  .catch(function (error) {
    console.log(error);
  });
}




