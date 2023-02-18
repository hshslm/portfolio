<template>
  <div class="home overflow-y-hidden">
    <div class="text-center leading-tighter text-7xl font-bold flex justify-center items-center flex-col" style="height: 80vh">
      <div>I'm <span style="color:#B3A577"> Hashim Salem</span></div>
      <div>I'm a <span style="color:#B3A577"> Frontend Developer</span></div>
    </div>
    <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="options"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Header',
  data() {
    return {
      options: {"particles":{"number":{"value":66,"density":{"enable":false,"value_area":0}},"color":{"value":"#fefefe"},"shape":{"type":"circle","stroke":{"width":2,"color":"#b3a577"},"polygon":{"nb_sides":6},"image":{"src":"","width":300,"height":100}},"opacity":{"value":0,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":1,"random":true,"anim":{"enable":false,"speed":2,"size_min":0.5,"sync":false}},"line_linked":{"enable":true,"distance":208.44356791251798,"color":"#fff","opacity":0.26456299004281125,"width":0.9620472365193136},"move":{"enable":true,"speed":1.4,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}
    }
  }
}
</script>

<style lang="scss">
#tsparticles {
  position: absolute !important;
  top: 20px !important;
  left: 50% !important;
  width: calc(100% - 36px);
  height: 82vh;
  transform: translate(-50%, 0%);
}
</style>

