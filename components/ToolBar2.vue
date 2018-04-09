<template>
  <v-toolbar color="black">
      <v-toolbar-title><img height="56px" width="56px" src="https://www.underconsideration.com/brandnew/archives/jennair_logo_with_tagline.png"/></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" v-for="navItem in navList" :key="navItem.lastModified">
          <v-btn color="white" flat>{{navItem.title}}</v-btn>         
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'ToolBar',
  props: ['navList'],
  data () {
      return {
        list: this.navList
      }
  }
}
</script>


<style>
.nav-link{
  color: white
}
</style>
