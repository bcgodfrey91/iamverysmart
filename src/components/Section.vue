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
    height: 95vh;
    margin: 0 2.5vw;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-tile {
    color: magenta;
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
