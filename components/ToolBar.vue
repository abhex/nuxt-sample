<template>
  <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="mutableDrawer = !mutableDrawer"></v-toolbar-side-icon>
        <v-toolbar-title>JennAir</v-toolbar-title>
      </v-toolbar>
</template>

<script>
export default {
  name: 'ToolBar',
  props: ['drawer'],
  data () {
      return {
          mutableDrawer: this.drawer
      }
    }
}
</script>
