<template>
  <app-section :styleClass="{ styleClass }">
    <div class="section-title-wrapper">
      <h1 class="section-title">About</h1>
      <div class="title-underline"></div>
    </div>
    <div>I continuously strive to write code that is responsive, reusable, and accessible.</div>
    <div class="about-icon-container">
      <div class="icon-content">
        <img class="icon" src=""/>
        <div>Placeholder Text</div>
      </div>
      <div class="icon-content">
        <img class="icon" src=""/>
        <div>Placeholder Text</div>
      </div>
      <div class="icon-content">
        <img class="icon" src=""/>
        <div>Placeholder Text</div>
      </div>
    </div>
  </app-section>
</template>

<script>
import Section from './Section.vue';
export default {
  name: 'Timeline',
  components: {
    'app-section': Section,
  },
  data () {
    return {
      styleClass: 'timeline-tile'
    }
  }
}
</script>

<style lang="css">
.about-icon-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60vw;
}

</style>
