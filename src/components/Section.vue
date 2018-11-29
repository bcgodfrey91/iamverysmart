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
    margin: 0 2.5vw;
    width: 100%;
  }

  .timeline-tile,
  .contact-tile  {
    background: #2B303A;
    color: #fdfcff;
  }

  .contact-tile {
    min-height: 35vh;
  }

  .hero-tile,
  .projects-tile {
    color: #2B303A;
  }

  .projects-tile {
    margin: 1rem 0;
  }
</style>
