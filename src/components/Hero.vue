<template>
  <app-section :styleclass="styleclass">
    <div class="section-title-wrapper">
      <h1 class="section-title hero-title">Ben Godfrey</h1>
      <div class="title-underline"></div>
    </div>
    <div class="p5-wrapper">
      <vue-p5
        @preload="preload"
        @setup="setup"
        @draw="draw"
      >
    </vue-p5>
    </div>
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
      styleclass: 'hero-tile',
      img: '',
    }
  },
  methods: {
    preload(sketch) {
      this.img = sketch.loadImage('https://i.imgur.com/eMzwIsi.png');
    },
    setup(sketch) {
      sketch.createCanvas(this.img.width, this.img.height);
      sketch.noStroke();
      sketch.frameRate(60);
      this.img.loadPixels();
    },
    draw(sketch) {
      const x = sketch.floor(sketch.random(this.img.width));
      const y = sketch.floor(sketch.random(this.img.height));
      const pix = this.img.get(x, y);
      sketch.fill(pix, 128);
      sketch.ellipse(x, y, 5, 5);

      const x2 = sketch.floor(sketch.random(this.img.width));
      const y2 = sketch.floor(sketch.random(this.img.height));
      const pix2 = this.img.get(x2, y2);
      sketch.fill(pix2, 128);
      sketch.ellipse(x2, y2, 10, 10);

      const x3 = sketch.floor(sketch.random(this.img.width));
      const y3 = sketch.floor(sketch.random(this.img.height));
      const pix3 = this.img.get(x3, y3);
      sketch.fill(pix3, 128);
      sketch.ellipse(x3, y3, 15, 15);
    },
  },
}
</script>

<style lang="css">
  .hero-title {
    font-size: 6rem;
    margin: 1rem 0 2rem;
    text-align: center;
  }

  .p5-wrapper {
    display: flex;
    justify-content: center;
    margin: -0.25rem 0;
    overflow: hidden;
    width: 100%;
  }
</style>
