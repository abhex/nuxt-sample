import * as JsonLoaded from '../static/jenn_air.infinity.json'

function keysThatMatch(data) {
  let pattern = "^[^:]*$"
  return Object.keys(data).filter(key => key.match(pattern))
} 


export default function ({store}) {
  
  // console.log("I AM HERE INSIDE THE MIDDLEWARE", JsonLoaded)
  let keys = keysThatMatch(JsonLoaded)
  console.log("STORREEEEE", store.state)
  
  Object.keys(JsonLoaded).forEach( key => {
    let pattern = "^[^:]*$"
    if (key.match(pattern)){
      // console.log( "black", JsonLoaded[key] );
      store.commit('addParentCategories', JsonLoaded[key])
      Object.keys( JsonLoaded[key] ).forEach( key2 => {
        if (key2.match(pattern)) {
          store.commit('addL1Categories', JsonLoaded[key][key2])
          // console.log( JsonLoaded[key][key2])
          Object.keys( JsonLoaded[key][key2] ).forEach( key3 => {
            if (key3.match(pattern) && key3 != "display_image") {
              store.commit('addL2Categories', JsonLoaded[key][key2][key3])
              Object.keys( JsonLoaded[key][key2][key3] ).forEach( key4 => {
                if (key4.match(pattern) && key4 != "display_image") {
                  store.commit('addProducts',JsonLoaded[key][key2][key3][key4])
                  // console.log( JsonLoaded[key][key2][key3])
                }
              })
            }
          })
        }
      })
    }
  });
}