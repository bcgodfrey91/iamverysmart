<template>
  <div class="card-content">
    <div class="card-title">{{ title }}</div>
    <div class="card-body">{{ body }}</div>
    <div class="card-technologies">{{technologies}}</div>
    <div class="view-project">View Project →</div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: [
    'title',
    'body',
    'technologies',
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
    align-items: flex-start;
    color: #fdfcff;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    min-height: 10.9375rem;
  }

  .card-content > div {
    margin: 0.5rem 1.5rem;
  }

  .card-content > div:first-child {
    margin: 1rem 1.5rem 0.5rem;
  }

  .card-content > div:last-child {
    margin: 0.5rem 1.5rem 1rem;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: 800;
  }

  .card-body {
    font-size: 1.15rem;
  }

  .card-technologies {
    font-size: 0.95rem;
  }

  .view-project {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 1rem;
    font-size: 0.875rem;
    padding: 0.25rem 0.75rem;
  }

  @media screen and (min-width: 48rem) {
    .card-content {
      min-height: 15rem;
    }
  }
</style>
