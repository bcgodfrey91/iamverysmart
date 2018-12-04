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
      sketch.ellipse(x3, y3, 10, 10);

      const x4 = sketch.floor(sketch.random(this.img.width));
      const y4 = sketch.floor(sketch.random(this.img.height));
      const pix4 = this.img.get(x4, y4);
      sketch.fill(pix4, 128);
      sketch.ellipse(x4, y4, 5, 5);

      const x5 = sketch.floor(sketch.random(this.img.width));
      const y5 = sketch.floor(sketch.random(this.img.height));
      const pix5 = this.img.get(x5, y5);
      sketch.fill(pix5, 128);
      sketch.ellipse(x5, y5, 10, 10);

      const x6 = sketch.floor(sketch.random(this.img.width));
      const y6 = sketch.floor(sketch.random(this.img.height));
      const pix6 = this.img.get(x6, y6);
      sketch.fill(pix6, 128);
      sketch.ellipse(x6, y6, 15, 15);

      const x7 = sketch.floor(sketch.random(this.img.width));
      const y7 = sketch.floor(sketch.random(this.img.height));
      const pix7 = this.img.get(x7, y7);
      sketch.fill(pix7, 128);
      sketch.ellipse(x7, y7, 5, 5);

      const x8 = sketch.floor(sketch.random(this.img.width));
      const y8 = sketch.floor(sketch.random(this.img.height));
      const pix8 = this.img.get(x8, y8);
      sketch.fill(pix8, 128);
      sketch.ellipse(x8, y8, 10, 10);

      const x9 = sketch.floor(sketch.random(this.img.width));
      const y9 = sketch.floor(sketch.random(this.img.height));
      const pix9 = this.img.get(x9, y9);
      sketch.fill(pix9, 128);
      sketch.ellipse(x9, y9, 15, 15);

      const x10 = sketch.floor(sketch.random(this.img.width));
      const y10 = sketch.floor(sketch.random(this.img.height));
      const pix10 = this.img.get(x10, y10);
      sketch.fill(pix10, 128);
      sketch.ellipse(x10, y10, 20, 20);

      const x11 = sketch.floor(sketch.random(this.img.width));
      const y11 = sketch.floor(sketch.random(this.img.height));
      const pix11 = this.img.get(x11, y11);
      sketch.fill(pix11, 128);
      sketch.ellipse(x11, y11, 7.5, 7.5);

      const x12 = sketch.floor(sketch.random(this.img.width));
      const y12 = sketch.floor(sketch.random(this.img.height));
      const pix12 = this.img.get(x12, y12);
      sketch.fill(pix12, 128);
      sketch.ellipse(x12, y12, 10, 10);

      const x13 = sketch.floor(sketch.random(this.img.width));
      const y13 = sketch.floor(sketch.random(this.img.height));
      const pix13 = this.img.get(x13, y13);
      sketch.fill(pix13, 128);
      sketch.ellipse(x13, y13, 10, 10);

      const x14 = sketch.floor(sketch.random(this.img.width));
      const y14 = sketch.floor(sketch.random(this.img.height));
      const pix14 = this.img.get(x14, y14);
      sketch.fill(pix14, 128);
      sketch.ellipse(x14, y14, 10, 10);

      const x15 = sketch.floor(sketch.random(this.img.width));
      const y15 = sketch.floor(sketch.random(this.img.height));
      const pix15 = this.img.get(x15, y15);
      sketch.fill(pix15, 128);
      sketch.ellipse(x15, y15, 10, 10);

      const x16 = sketch.floor(sketch.random(this.img.width));
      const y16 = sketch.floor(sketch.random(this.img.height));
      const pix16 = this.img.get(x16, y16);
      sketch.fill(pix16, 128);
      sketch.ellipse(x16, y16, 10, 10);

      const x22 = sketch.floor(sketch.random(this.img.width));
      const y22 = sketch.floor(sketch.random(this.img.height));
      const pix22 = this.img.get(x22, y22);
      sketch.fill(pix22, 128);
      sketch.ellipse(x22, y22, 7.5, 7.5);

      const x23 = sketch.floor(sketch.random(this.img.width));
      const y23 = sketch.floor(sketch.random(this.img.height));
      const pix23 = this.img.get(x23, y23);
      sketch.fill(pix23, 128);
      sketch.ellipse(x23, y23, 12.5, 12.5);

      const x24 = sketch.floor(sketch.random(this.img.width));
      const y24 = sketch.floor(sketch.random(this.img.height));
      const pix24 = this.img.get(x24, y24);
      sketch.fill(pix24, 128);
      sketch.ellipse(x24, y24, 7.5, 7.5);

      const x20 = sketch.floor(sketch.random(this.img.width));
      const y20 = sketch.floor(sketch.random(this.img.height));
      const pix20 = this.img.get(x20, y20);
      sketch.fill(pix20, 128);
      sketch.ellipse(x20, y20, 17.5, 17.5);

      const x21 = sketch.floor(sketch.random(this.img.width));
      const y21 = sketch.floor(sketch.random(this.img.height));
      const pix21 = this.img.get(x21, y21);
      sketch.fill(pix21, 128);
      sketch.ellipse(x21, y21, 5, 5);

      const x17 = sketch.floor(sketch.random(this.img.width));
      const y17 = sketch.floor(sketch.random(this.img.height));
      const pix17 = this.img.get(x17, y17);
      sketch.fill(pix17, 128);
      sketch.ellipse(x17, y17, 7.5, 7.5);

      const x18 = sketch.floor(sketch.random(this.img.width));
      const y18 = sketch.floor(sketch.random(this.img.height));
      const pix18 = this.img.get(x18, y18);
      sketch.fill(pix18, 128);
      sketch.ellipse(x18, y18, 10.5, 10.5);

      const x19 = sketch.floor(sketch.random(this.img.width));
      const y19 = sketch.floor(sketch.random(this.img.height));
      const pix19 = this.img.get(x19, y19);
      sketch.fill(pix19, 128);
      sketch.ellipse(x19, y19, 12.5, 12.5);

      const x25 = sketch.floor(sketch.random(this.img.width));
      const y25 = sketch.floor(sketch.random(this.img.height));
      const pix25 = this.img.get(x25, y25);
      sketch.fill(pix25, 128);
      sketch.ellipse(x25, y25, 17.5, 17.5);
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
