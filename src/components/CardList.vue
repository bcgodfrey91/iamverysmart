<template>
  <div class="card-list">
    <div class='card' :class="card.styleclass" v-for="card in helpers" :key="card.title">
      <a :href="card.url" target="_blank">
        <card
          :title="card.title"
          :body="card.body"
          :technologies="card.technologies"
        >
        </card>
      </a>
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
      styleclass: 'card-list',
      helpers,
    }
  },
}
</script>

<style lang="css">
  .card-list {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .card {
    border-radius: 0.25rem;
    box-shadow: 2px 2px 8px 0 rgba(0,0,0,.2);
    cursor: pointer;
    flex: 1;
    min-height: 10.9375rem;
    margin: 1rem;
    transform: translateZ(0);
    transition: transform .25s ease-out,-webkit-transform .25s ease-out;
    width: 100%;
  }

  .card > a {
    text-decoration: none;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .perpro {
    background: #1a2980;  /* fallback for old browsers */
    background: -webkit-linear-gradient(140deg, #1a2980, #00c6ff); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(140deg, #1a2980, #00c6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .crunchy-ratings {
    background: #ff8008;  /* fallback for old browsers */
    background: -webkit-linear-gradient(140deg, #ff8008, #ffc837);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(140deg, #ff8008, #ffc837); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .napkin-app {
    background: #2a0845;  /* fallback for old browsers */
    background: -webkit-linear-gradient(140deg, #2a0845, #a044ff); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(140deg, #2a0845, #a044ff);
  }

  .amptron {
    background: #aa076b;  /* fallback for old browsers */
    background: -webkit-linear-gradient(140deg, #da195b, #ff4eeb);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(140deg, #da195b, #ff4eeb); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .lights-out {
    background: #2c7744;  /* fallback for old browsers */
    background: -webkit-linear-gradient(140deg, #2c7744, #9acd32);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(140deg, #2c7744, #9acd32); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .eac {
    background: #d10000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(140deg, #d10000, #f56416);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(140deg, #d10000, #f56416); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  @media screen and (min-width: 48rem) {
    .card-list {
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 70rem;
    }

    .card {
      min-height: 15rem;
      min-width: 20.3rem;
    }
  }

  @media screen and (min-width: 62.5rem) {
    .card {
      min-width: 21.5rem;
    }
  }
</style>
