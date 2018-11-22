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
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem 0;
    max-width: 80rem;
    width: 100%;
  }

  .card {
    background: magenta;
    height: 17.5rem;
    margin: 0.5rem;
    width: 25rem;
  }
</style>
