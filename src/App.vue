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
    margin: 0;
  }
</style>
