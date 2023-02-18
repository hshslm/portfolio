import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.scss'
import './assets/tailwind.css'
Vue.config.productionTip = false

// Particles
import Particles from "particles.vue";
Vue.use(Particles);

// Smooth Scroll
import VueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(VueSmoothScroll)

// Tooltip
import VTooltip from 'v-tooltip'
Vue.use(VTooltip)

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Google Analytics
import './config/analytics';

new Vue({
  router,
  render: h => h(App),
  mounted() {
    AOS.init()
  }
}).$mount('#app')
