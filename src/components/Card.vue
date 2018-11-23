<template>
  <div class="card-content">
    <p>{{ title }}</p>
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
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
</style>
