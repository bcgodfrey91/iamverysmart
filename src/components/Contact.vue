<template>
  <app-section :styleClass="{ styleClass }">
    <h1>{{ msg }}</h1>
  </app-section>
</template>

<script>
import Section from './Section.vue';
export default {
  name: 'Contact',
  components: {
    'app-section': Section,
  },
  data () {
    return {
      msg: 'This is the Contact Tile',
      styleClass: 'contact-tile'
    }
  }
}
</script>

<style lang="css">
</style>
