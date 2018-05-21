<template>
  <app-section :styleClass="{ styleClass }">
    <h1>{{ msg }}</h1>
  </app-section>
</template>

<script>
import Section from './Section.vue';
export default {
  name: 'Projects',
  components: {
    'app-section': Section,
  },
  data () {
    return {
      msg: 'This is the Projects Tile',
      styleClass: 'projects-tile'
    }
  }
}
</script>

<style lang="css">
</style>
