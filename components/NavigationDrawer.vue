<template>
  <v-navigation-drawer
    clipped
    fixed
    v-model="mutableDrawer"
    app
    >
    <v-list dense>
      <v-list-tile href="/" nuxt>
        <v-list-tile-action>
          <v-icon>layers</v-icon>
        </v-list-tile-action >
        <v-list-tile-content>
          <v-list-tile-title>Categories</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(pCat,i) in parentCat" :key="i">
          <div slot="header" :key="pCat['jcr:title']">{{pCat['jcr:title']}}</div>
          <v-expansion-panel>
            <div class="child" v-for="(subCati, k) in getSubCat(pCat)" :key="k">
              <v-expansion-panel-content >
                <div slot="header" :key="subCati['jcr:title']">{{subCati['jcr:title']}}</div>
                  <v-expansion-panel>
                    <div class="child2" v-for="(subCatl2, v) in getSubCat(subCati)" :key="v">
                      <v-expansion-panel-content hide-actions >
                        <div v-on:click="$store.commit('changeProducts',subCatl2['jcr:title'])" slot="header" :key="subCatl2['jcr:title']">{{subCatl2['jcr:title']}}</div>
                      </v-expansion-panel-content>
                    </div>        
                  </v-expansion-panel>
              </v-expansion-panel-content>
            </div>        
          </v-expansion-panel>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-layout row wrap>
                <v-flex xs9>
                  <v-slider :change="$store.commit('changePrice',price)" label="Price" :max="10000" v-model="price"></v-slider>
                </v-flex>
                <v-flex xs3>
                  <v-text-field :change="$store.commit('changePrice',price)" v-model="price" type="number"></v-text-field>
                </v-flex>
              </v-layout>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  props: ['drawer', 'parentCategories'],
  data () {
      return {
          mutableDrawer: this.drawer,
          parentCat: this.parentCategories,
          price: 5000
      }
  },
  methods: {
    getSubCat: function(obj) {
      let subCat = []
      Object.keys( obj ).forEach( key => {
              if (key.match("^[^:]*$")) {
                subCat.push(obj[key])
              }
            })      
      return subCat
    }
  }
}
</script>

<style>
.child {
  width: 100%;
  
}
.child2 {
  width: 100%;
  
}
.child .expansion-panel__header
{
  background-color: rgb(197, 113, 92);
}
.child2 .expansion-panel__header
{
  background-color: rgb(14, 10, 10);
}
</style>

