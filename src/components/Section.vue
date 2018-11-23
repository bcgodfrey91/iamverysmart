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
    align-items: center;
    display: flex;
    justify-content: center;
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
  }

  .projects-tile {
  }
</style>
