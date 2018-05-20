<template>
  <hero></hero>
</template>

<script>
import Hero from './Hero.vue';
export default {
  name: 'Home',
  components: {
    'hero': Hero,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js app!'
    }
  }
}
</script>

<style lang="css">
</style>
