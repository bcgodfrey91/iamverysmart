<template>
  <app-section :styleclass="styleclass">
    <div class="section-title-wrapper">
      <h1 class="section-title">About</h1>
      <div class="title-underline"></div>
    </div>
    <div>I'm a software developer located in Austin, Texas.</div>
    <div>While my primary focus is on all things front end, I enjoy dabbling on the backend as well. <br class="text-break"> I'm constantly chasing the excitement and frustration that comes with tackling new ideas and problems.</div>
    <div class="about-icon-container">
      <div class="icon-content">
        <svg class="about-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
          <title>School</title>
          <path d="M40 10l36.719 20v26.719h-6.719v-23.125l-30 16.406-36.719-20zM16.719 43.906l23.281 12.813 23.281-12.813v13.438l-23.281 12.656-23.281-12.656v-13.438z"></path>
        </svg>
        <h2>School</h2>
        <div>After majoring in psychology at Texas A&M, I appreciate that I'm still able to provide meaningful solutions to people's problems in my career as a software developer.</div>
      </div>
      <div class="icon-content">
        <svg class="about-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
          <title>Work</title>
          <path d="M46.719 20v-6.719h-13.438v6.719h13.438zM66.719 20c3.75 0 6.563 2.969 6.563 6.719v36.563c0 3.75-2.813 6.719-6.563 6.719h-53.438c-3.75 0-6.563-2.969-6.563-6.719v-36.563c0-3.75 2.813-6.719 6.563-6.719h13.438v-6.719c0-3.75 2.813-6.563 6.563-6.563h13.438c3.75 0 6.563 2.813 6.563 6.563v6.719h13.438z"></path>
        </svg>
        <h2>Work</h2>
        <div>In the workplace I serve in a number of roles ranging from developer to Scrum Master. I enjoy the challenge and responsibility that comes with wearing multiple hats.</div>
      </div>
      <div class="icon-content">
        <svg class="about-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
          <title>Code</title>
          <path d="M48.594 55.313l15.469-15.313-15.469-15.313 4.688-4.688 20 20-20 20zM31.406 55.313l-4.688 4.688-20-20 20-20 4.688 4.688-15.469 15.313z"></path>
        </svg>
        <h2>Code</h2>
        <div>I strive to create code that is maintainable, responsive, and accessible. The web is meant for everyone, and I intend to continue developing around that principle.</div>
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
      styleclass: 'timeline-tile'
    }
  }
}
</script>

<style lang="css">
.cool {
  height: 100rem;
}
.timeline-tile {
  text-align: center;
  line-height: 1.5;
}

.text-break {
  display: none;
}

.about-icon-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2rem 0;
  max-width: 80vw;
  width: 100%;
}

.icon-content {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 2rem 0;
  text-align: center;
}

.icon-content:first-child {
  margin-top: 0;
}

.icon-content:last-child {
  margin-bottom: 0;
}

.about-icon {
  height: 5rem;
  fill: #a044ff;
  width: 5rem;
}

@media screen and (min-width: 48rem) {
  .text-break {
    display: initial;
  }
  .about-icon-container {
    margin: 4rem 0 1rem;
    flex-direction: row;
  }

  .icon-content {
    margin: 0 2rem;
  }

  .icon-content:first-child {
    margin-left: 0;
  }

  .icon-content:last-child {
    margin-right: 0;
  }
}

</style>
