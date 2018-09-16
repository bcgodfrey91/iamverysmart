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
import sketch from '../helpers/sketch.js';
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
      this.img = sketch.loadImage('https://media.licdn.com/dms/image/C4E03AQEIB7WNcY3TqQ/profile-displayphoto-shrink_200_200/0?e=1542844800&v=beta&t=3fqEWww9Vxr5jCa4bpGQjiLrBWgcmxhgJKr1mfwhoPM');
    },
    setup(sketch) {
      sketch.createCanvas(this.img.height, this.img.width);
      sketch.noStroke();
      sketch.frameRate(60);
    },
    draw(sketch) {
      const x = sketch.floor(sketch.random(this.img.height));
      const y = sketch.floor(sketch.random(this.img.width));
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
  #sketch {
    width: 50%;
    height: 50%;
    border: 1px solid black;
  }
</style>
