<template>
  <section>
    <v-parallax :src="baseUrl+sectionData.backgroungImageSrc" height="600">
      <v-layout
        column
        align-center
        justify-center
        class="white--text"
      >
      <h1 class="white--text mb-2 display-1 text-xs-center">{{sectionData.tileTitle}}</h1>
      <div class="subheading mb-3 text-xs-center" v-html="sectionData.tileDescription" ></div> 
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
export default {
  name: 'ParallaxSection',
  props: ['sectionData'],
  data() {
    return {
      baseUrl: process.env.baseUrl
    }
  }
}
</script>
