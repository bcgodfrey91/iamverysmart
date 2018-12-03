<template>
  <div id="App">
    <home></home>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'App',
  components: {
    'home': Home,
  },
}
</script>

<style lang="css">
  body {
    background-color: #fdfcff;
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }

  .section-title-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 0 2rem;
  }

  .section-title {
    font-family: 'Roboto Slab', serif;
    font-size: 3rem;
    margin: 0 0 0.5rem;
  }

  .title-underline {
    height: 0.25rem;
    width: 4.75rem;
    background: #a044ff;
  }

  .hero-tile .title-underline {
    display: none;
  }

  .projects-tile .title-underline {
    background: #2B303A;
  }

</style>
