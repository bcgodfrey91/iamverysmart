<template>
  <app-section :styleclass="styleclass">
    <div class="section-title-wrapper">
      <h1 class="section-title">Projects</h1>
      <div class="title-underline"></div>
    </div>
    <div class="working-on">
      Currently working on:
      <a
        v-if="dataReady"
        v-bind:href="'https://github.com/'+currentProject.name"
      >
        <span>{{ currentProject.name.split("/").pop() }}</span>
      </a>
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
      currentProject: {},
      dataReady: false
    }
  },
  mounted () {
    fetch('https://api.github.com/users/bcgodfrey91/events')
      .then(response => response.json())
      .then(data => {
        this.currentProject = data[0].repo;
        this.dataReady = true;
      });
  }
}
</script>

<style lang="css">
  .working-on {
    margin: 0 0 2rem;
  }
</style>
