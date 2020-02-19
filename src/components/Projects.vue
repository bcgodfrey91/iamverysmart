<template>
  <app-section :styleclass="styleclass">
    <div class="section-title-wrapper">
      <h1 class="section-title">Projects</h1>
      <div class="title-underline"></div>
    </div>
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
      styleclass: 'projects-tile',
    }
  },
  mounted () {
  }
}
</script>

<style lang="css">
</style>
