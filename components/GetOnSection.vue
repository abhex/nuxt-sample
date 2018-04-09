<template>
  <section>
    <v-parallax :src="baseUrl+sectionData.backgroungImageSrc" height="600">
      <v-layout
        column
        align-center
        justify-center
        class="white--text"
      >
      <div class="get-on"  v-html="sectionData.htmlStructure"></div>
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
export default {
  name: 'GetOnSection',
  props: ['sectionData'],
  data() {
    return {
      baseUrl: process.env.baseUrl
    }
  }
}
</script>
