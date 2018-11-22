<template>
  <div>
    <hero></hero>
    <timeline></timeline>
  </div>
</template>

<script>
import Hero from './Hero.vue';
import Timeline from './Timeline.vue';
import Projects from './Projects.vue';
import Contact from './Contact.vue';

export default {
  name: 'Home',
  components: {
    'hero': Hero,
    'timeline': Timeline,
    'projects': Projects,
    'contact': Contact,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js app!'
    }
  },
  methods: {
  },
  mounted () {
  },
}
</script>

<style lang="css">
</style>
