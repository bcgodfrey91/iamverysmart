<template>
  <app-section :styleClass="{ styleClass }">
    <card-list></card-list>
  </app-section>
</template>

<script>
import Section from './Section.vue';
import CardList from './CardList.vue';
export default {
  name: 'Projects',
  components: {
    'app-section': Section,
    'card-list': CardList,
  },
  data () {
    return {
      styleClass: 'projects-tile'
    }
  },
}
</script>

<style lang="css">
</style>
