<template>
  <video class='anthem-video' controls autoplay>
  <source :src="'http://192.168.1.150:4503'+sectionData.asset" type="video/mp4">
  Your browser does not support the video tag.
  </video>
</template>

<script>
export default {
  name: 'VideoSection',
  props: ['sectionData']
}
</script>


<style>
.anthem-video{
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: 50% 50%;
    object-position: 50% 50%;
    z-index: 1;
}
</style>
