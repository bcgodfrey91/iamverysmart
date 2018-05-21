<template>
  <div class="card-content">
    <h1>{{ title }}</h1>
    <p>{{ body }}</p>
    <div>{{ link }}</div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: [
    'title',
    'body',
    'link',
    'url'
  ],
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
  .card-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
