<template>
  <app-section :styleClass="{ styleClass }">
    <vue-p5
      @preload="preload"
      @setup="setup"
      @draw="draw"
    >
    </vue-p5>
  </app-section>
</template>

<script>
import Section from './Section.vue';
import VueP5 from 'vue-p5';

export default {
  name: 'Hero',
  components: {
    'app-section': Section,
    'vue-p5': VueP5,
  },
  data () {
    return {
      styleClass: 'hero-tile',
      img: '',
    }
  },
  methods: {
    preload(sketch) {
      this.img = sketch.loadImage('https://i.imgur.com/woXkXH3.jpg');
    },
    setup(sketch) {
      sketch.createCanvas(this.img.width, this.img.height);
      sketch.noStroke();
      sketch.frameRate(60);
    },
    draw(sketch) {
      const x = sketch.floor(sketch.random(this.img.width));
      const y = sketch.floor(sketch.random(this.img.height));
      const pix = this.img.get(x, y);
      sketch.fill(pix, 128);
      sketch.ellipse(x, y, 10, 10);
    },
  },
  mounted () {
  }
}
</script>

<style lang="css">

</style>
