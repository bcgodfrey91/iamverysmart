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
        <svg class="about-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>School</title>
          <path d="M12 3l11.016 6v8.016h-2.016v-6.938l-9 4.922-11.016-6zM5.016 13.172l6.984 3.844 6.984-3.844v4.031l-6.984 3.797-6.984-3.797v-4.031z"></path>
        </svg>
        <h2>School</h2>
        <div>After majoring in psychology at Texas A&M, I appreciate that I'm still able to provide meaningful solutions to people's problems in my career as a software developer.</div>
      </div>
      <div class="icon-content">
        <svg class="about-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>Work</title>
          <path d="M14.016 6v-2.016h-4.031v2.016h4.031zM20.016 6c1.125 0 1.969 0.891 1.969 2.016v10.969c0 1.125-0.844 2.016-1.969 2.016h-16.031c-1.125 0-1.969-0.891-1.969-2.016v-10.969c0-1.125 0.844-2.016 1.969-2.016h4.031v-2.016c0-1.125 0.844-1.969 1.969-1.969h4.031c1.125 0 1.969 0.844 1.969 1.969v2.016h4.031z"></path>
        </svg>
        <h2>Work</h2>
        <div>In the workplace I serve in a number of roles ranging from developer to Scrum Master. I enjoy the challenge and responsibility that comes with wearing multiple hats.</div>
      </div>
      <div class="icon-content">
        <svg class="about-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>Code</title>
          <path d="M14.578 16.594l4.641-4.594-4.641-4.594 1.406-1.406 6 6-6 6zM9.422 16.594l-1.406 1.406-6-6 6-6 1.406 1.406-4.641 4.594z"></path>
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
  height: 6rem;
  fill: #a044ff;
  width: 6rem;
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
