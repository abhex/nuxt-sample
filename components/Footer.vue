<template>
   <v-footer height="auto" class="grey darken-3">
    <v-layout row wrap justify-center>
      <v-btn
        color="white"
        flat
        v-for="link in sectionData.items"
        :key="link.lastModified"
      >
        {{ link.title }}
      </v-btn>
      <v-flex xs12 py-3 text-xs-center white--text>
        &copy;2018 — <strong>Jenn Air</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>


<script>
export default {
  name: 'Footer',
  props: ['sectionData']
}
</script>
