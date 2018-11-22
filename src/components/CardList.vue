<template>
  <div class="card-list">
    <div class='card' v-for="card in helpers" :key="card.title">
      <card
        :title="card.title"
        :body="card.body"
        :link="card.link"
        :url="card.url"
      >
      </card>
    </div>
  </div>
</template>

<script>
import helpers from '../helpers/projectsHelpers.js'
import Card from './Card.vue'
export default {
  name: 'CardList',
  components: {
    'card': Card,
  },
  data () {
    return {
      styleClass: 'card-list',
      helpers,
    }
  },
}
</script>

<style lang="css">
  .card-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 80rem;
    flex-wrap: wrap;
    width: 100%;
    margin: 1rem 0;
  }

  .card {
    height: 17.5rem;
    margin: 0.5rem;
    width: 25rem;
    border: 2px solid black;
    background: magenta;
  }
</style>
