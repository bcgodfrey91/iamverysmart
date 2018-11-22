<template>
  <section class="section" :class="sectionStyle">
    <slot>This is a section</slot>
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
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 80vh;
    width: 100%;
  }

  .hero-tile {
    align-items: flex-end;
    background: #fdfff7;
  }

  .timeline-tile {
    color: lime;
  }

  .projects-tile {
    color: blue;
  }

  .contact-tile {
    color: gold;
  }
</style>
