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
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
  }

  .card {
    height: 25rem;
    margin: 0 1rem;
    max-width: 25rem;
    flex: 1;
    border: 2px solid black;
    background: magenta;
  }
</style>
