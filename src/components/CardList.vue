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
    width: 100%;
  }

  .card {
    background: magenta;
    border-radius: 0.25rem;
    height: 10.9375rem;
    margin: 1rem 0;
  }
</style>
