<template>
  <div id="app">
   <v-app light>
    <component :is="toolBar2" v-bind:navList='navList'></component>
    <v-content >
      <div v-for="section in getSections" :key=section.columnClassNames>
        <component :is="componentType(section[':type'])" :sectionData="section"></component>
      </div>      
    </v-content>
  </v-app>
 </div>
</template>

<script>
import Content from '~/components/Content'
import parallaxSection from '~/components/ParallaxSection'
import videoSection from '~/components/VideoSection'
import toolBar2 from '../components/ToolBar2'
import footer from '../components/Footer'
import GetOnSection from '../components/GetOnSection'
import axios from 'axios'
// import * as BoundByNothingJSON from '../static/bound_by_nothing.json'

export default {
  asyncData(){
    // return { responseData: BoundByNothingJSON }
    return axios.get('http://192.168.1.150:4503/content/jenn-air/bound-by-nothing.model.json')
    .then(response => {
      return {responseData: response.data}
    }).catch(function (error) {
      console.log("Error", error);
    });
  },
  layout: 'bound',
  data(){
    return {
      parallaxSection,
      videoSection,
      toolBar2,
      GetOnSection,
      footer
    }
  },
  methods: {
    navList2: function() {
      return this.responseData[':items.root.:items.responsivegrid.:items.list.items']
    },
    checkType: function(type){
      switch (type.split('/').pop()) {
      case 'video':
        return 'video' 
        break;
      case 'footerlinks':
        return 'footerlinks'
        break;
      case 'navigation':
        return 'navigation'
        break;  
      default:
        return 'notvideo'
      }
    },
    componentType: function(type){
      switch (type.split('/').pop()) {
      case 'video':
        return videoSection
        break;
      case 'footerlinks':
        return footer
        break;
      case 'navigation':
        break;  
      case 'getOn':
        return GetOnSection
        break;  
      default:
        return parallaxSection
      }
    }
  },
  computed: {
    navList: function(){
      console.log(this.responseData)
      return this.responseData[':items']['root'][':items']['responsivegrid'][':items']['navigation']['items']
    },
    getSections: function(){
      let itemOrder = this.responseData[':items']['root'][':items']['responsivegrid'][':itemsOrder']  //array
      // :items.root.:items.responsivegrid.:items                                                        path
      let items = this.responseData[':items']['root'][':items']['responsivegrid'][':items']
      let sections = []
      itemOrder.forEach(function(item) {
        if(item !== 'list'){
          sections.push(items[item])
        }
      });
      return sections
    },

  }
}
</script>