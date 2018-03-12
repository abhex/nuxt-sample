<template>
  <v-layout>
      <v-flex xs8 offset-xs0 offset-md0 offset-lg3>
        <v-card>
          <v-card-media
            contain
            class="white--text"
            height="500px"
            :src="$store.state.product.display_image"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{$store.state.product['display_name']}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">${{$store.state.product.price}}</span><br>
              <span>{{$store.state.product.base_model_number}}</span><br>
              <span class="status">{{$store.state.product.status}}</span><br><br>
              <span v-html="$store.state.product.description"></span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
</template>
<script>
export default {
  middleware: 'setProduct'
}
</script>


<style scoped>
.card {
    margin-top: 115px;
}

.status {
  float: right;
}
</style>
