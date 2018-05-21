<template>
  <app-section :styleClass="{ styleClass }">
    <div ref="canvas"></div>
  </app-section>
</template>

<script>
import Section from './Section.vue';
export default {
  name: 'Hero',
  components: {
    'app-section': Section,
  },
  data () {
    return {
      styleClass: 'hero-tile',
      script: null,
      ps: null,
      x: 0,
      y: 0,
      canvas: null,
      colors: null,
      colors2: null
    }
  },
  mounted () {
    this.script = p => {
      let img;
      // p.preload = _ => {
      //   img = p.loadImage('');
      // }

      p.setup = _ => {
        this.canvas = p.createCanvas(600, 420)
        this.canvas.parent(this.$refs.canvas)
        p.noStroke()
        p.background(253,252,255)
      }

      p.draw = _ => {
        this.x = p.floor(p.random(0, 600));
        this.y = p.floor(p.random(0, 420));
        p.fill(p.floor(p.random(0, 255)), p.floor(p.random(0, 255)), p.floor(p.random(0, 255)))
        p.ellipse(this.x, this.y, 5, 5)
      }
    }
    const P5 = require('p5')
    this.ps = new P5(this.script)
    console.log(this.ps)
  }
}
</script>

<style lang="css">
</style>
