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
    'styleClass',
  ],
  data () {
    return {
      sectionStyle: this.styleClass.styleClass
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
    margin: 2rem 2.5vw 0;
    width: 100%;
  }

  .timeline-tile,
  .contact-tile  {
    background: #2B303A;
    color: #fdfcff;
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
    margin: 1rem 2.5vw;
    max-width: 23rem;
    min-height: 35vh;
    text-align: center;
  }

  .projects-tile .section-wrapper {
    margin: 2rem 2.5vw;
  }

  .hero-tile,
  .projects-tile {
    color: #2B303A;
  }

  .hero-tile .section-wrapper {
    margin: 0;
  }

  @media screen and (min-width: 48rem) {
    .section-wrapper {
      margin: 3rem 2.5vw 0;
    }

    .projects-tile .section-wrapper {
      margin: 3rem 2.5vw;
    }

  }
</style>
