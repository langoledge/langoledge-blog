<script>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  },
}
</script>

<template>
  <TheHeader/>
  <o-backtop :right="50" :bottom="200" />
  <RouterView/>
  <TheFooter/>
</template>

<style>
/*Bulma for style*/
@import 'bulma/css/bulma.css'
/*Import a google font*/

</style>
