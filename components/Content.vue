<template>
  <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
            <v-card>
              <v-container color="white-grey" fluid grid-list-md align-center>
                <v-layout row wrap>
                  <v-flex
                    v-bind="{ [`xs4`]: true }"
                    v-for="product in filteredProducts"
                    :key="product.title"
                  >
                    <v-card>
                      <v-card-media
                        v-if="product.display_image"
                        :src="product.display_image"
                        height="400px"
                      >

                      </v-card-media>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline">{{product['display_name']}}</div>
                          <span class="grey--text">${{product.price}}</span> 
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn icon :href="'/products/' + product['base_model_number']" nuxt>
                          <v-icon>open_in_browser</v-icon>
                        </v-btn>
                        <v-btn icon @click.native="show = !show">
                          <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                      </v-card-actions>
                      <v-slide-y-transition>
                        <v-card-text v-show="show" v-html="product['description']"> 
                        </v-card-text>
                      </v-slide-y-transition>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-alert class='warning' v-if="filteredProducts.length <= 0" type="warning" :value="true">
                Sorry... No products present for this price filter
              </v-alert>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
export default {
  name: 'Content',
  fetch ({ store, params }) {
    console.log("THIS IS MY NEW", store)
  },
  data() {
    return {
      show: true
    }
  },
  computed: {
     filteredProducts: function () {
      let filteredProducts = []
      for(var product of this.$store.state.products){
        if (product.price <= this.$store.state.price){
          filteredProducts.push(product)
        }
      }
      return filteredProducts
    }
  }
}
</script>

<style>

span.grey--text{
  float: left;
}

.card.card--tile{
  padding-left: 70px;
    padding-right: 70px;
}
.warning{
      margin-top: -15px;
}

.container{
  min-height: 0%
}

</style>


