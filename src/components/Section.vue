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
  mounted () {
    console.log(this.styleClass.styleClass);
  }
}
</script>

<style lang="css">
  .section {
    height: 95vh;
    margin: 0 2.5vw;
    border: 2px solid black;
  }

  .hero-tile {
    display: flex;
    justify-content: center;
    align-items: center;
    color: magenta;
  }
</style>
