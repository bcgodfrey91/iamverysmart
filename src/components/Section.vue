<template>
  <section class="section" :class="sectionStyle">
    <div class="section-wrapper">
      <slot>This is a section</slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: [
    'styleclass',
  ],
  data () {
    return {
      sectionStyle: this.styleclass
    }
  },
}
</script>

<style lang="css">
  .section {
    display: flex;
    min-height: 80vh;
    width: 100%;
  }

  .section-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin: 2rem 5vw;
    width: 100%;
  }

  .hero-tile,
  .projects-tile {
    color: #2B303A;
  }

  .timeline-tile,
  .contact-tile  {
    background: #2B303A;
    color: #fdfcff;
  }

  .hero-tile .section-wrapper {
    margin: 0;
  }

  .timeline-tile {
    min-height: 50vh;
  }

  .contact-tile {
    display: flex;
    justify-content: center;
    min-height: 35vh;
  }

  .contact-tile .section-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    margin: 2rem 5vw 1rem;
    max-width: 23rem;
    min-height: 35vh;
    text-align: center;
  }

  @media screen and (min-width: 48rem) {
    .section-wrapper {
      margin: 3rem 5vw;
    }

    .contact-tile .section-wrapper {
      margin: 3rem 5vw 2rem;
    }
  }
</style>
