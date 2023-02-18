<template>
  <div class="wrapper" :class="[showContent ? 'scroll' : 'overflow-hidden']">
    <!-- Top Bar -->
    <div class="flex justify-center py-12 px-6 md:px-28 md:py-28 absolute top-0 w-full transition" style="width: calc(100% - 38px);z-index:99;">
      <svg class="logo cursor-pointer md:absolute left-1/2" style="z-index:99;" xmlns="http://www.w3.org/2000/svg" :class="[showContent ? 'w-8 md:w-12' : 'w-8']" version="1.0" preserveAspectRatio="xMidYMid meet" viewBox="446 296 308 308">
        <g transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)" stroke="none">
        <path d="M4460 4930 l0 -1110 238 2 237 3 3 867 2 868 433 2 432 3 3 238 2 237 -675 0 -675 0 0 -1110z"/>
        <path d="M6190 5390 l0 -650 -190 0 -190 0 -2 218 -3 217 -240 0 -240 0 -3 -867 -2 -868 -430 0 -430 0 0 -240 0 -240 675 0 675 0 0 650 0 650 190 0 190 0 2 -217 3 -218 240 0 240 0 3 868 2 867 430 0 430 0 0 240 0 240 -675 0 -675 0 0 -650z"/>
        <path d="M7067 5173 c-4 -3 -7 -395 -7 -870 l0 -863 -432 -2 -433 -3 -3 -237 -2 -238 675 0 675 0 0 1110 0 1110 -233 0 c-129 0 -237 -3 -240 -7z"/>
        </g>
      </svg>
      <!-- <div class="menu-icon-wrapper md:hidden">
        <div class="menu-icon z-10">
          <div class="bar top-bar"></div>
          <div class="bar bottom-bar"></div>
        </div>
      </div> -->
    </div>

    <div class="flex flex-col justify-between z-10 transition navbar-spacing" style="position: sticky;" :class="{'collapsed' : collapseHeader}">
      
      <!-- Header -->
      <div class="px-4 md:px-32 lg:px-44">
        <Header v-if="!hideHeader" :collapse="collapseHeader"/>
      </div>

      <!-- Menu -->
      <div data-aos="zoom-out-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-once="true" class="navbar-wrapper hidden md:block" :style="collapseHeader ? 'height:4rem;min-height:4rem;' : 'min-height: 8rem;height: 16vh;'">
        <div class="select-none navbar text-xs" :class="{'collapse' : showContent}">
          <div @click="openContent('about')" data-aos="fade-up" data-aos-duration="1000"  data-aos-once="true" data-aos-delay="2500" class="link">About</div>
          <div @click="openContent('skills')" data-aos="fade-up" data-aos-duration="1000"  data-aos-once="true" data-aos-delay="2600" class="link">Skills</div>
          <div @click="openContent('work')" data-aos="fade-up" data-aos-duration="1000"  data-aos-once="true" data-aos-delay="2700" class="link">Work</div>
          <div @click="openContent('contact')" data-aos="fade-up" data-aos-duration="1000"  data-aos-once="true" data-aos-delay="2800" class="link">Contact</div>
        </div>
      </div>
       <div data-aos="zoom-out-up" data-aos-duration="2000" data-aos-delay="1000" data-aos-once="true" data-aos-offset="-1000" class="navbar-wrapper md:hidden mb-0" :style="collapseHeader ? 'height:4rem;min-height:4rem;' : 'min-height: 8rem;height: 16vh;'">
        <div class="select-none navbar text-xs" :class="{'collapse' : showContent}">
          <div @click="openContent('about')" data-aos="fade-up" data-aos-duration="1000"  data-aos-once="true" data-aos-delay="2500" data-aos-offset="-1000" class="link">About</div>
          <div @click="openContent('skills')" data-aos="fade-up" data-aos-duration="1000"  data-aos-once="true" data-aos-delay="2600" data-aos-offset="-1000" class="link">Skills</div>
          <div @click="openContent('work')" data-aos="fade-up" data-aos-duration="1000"  data-aos-once="true" data-aos-delay="2700" data-aos-offset="-1000" class="link">Work</div>
          <div @click="openContent('contact')" data-aos="fade-up" data-aos-duration="1000"  data-aos-once="true" data-aos-delay="2800" data-aos-offset="-1000" class="link">Contact</div>
        </div>
      </div>
    
    </div>

    <!-- Content -->
    <transition name="fade">
      <div v-if="showContent" class="transition">
        <About :collapsed="collapseHeader"/>
        <Skills/>
        <Work/>
        <Contact/>
        <div class="text-xs md:text-base text-center bg-white pt-5 cursor-default text-main flex items-center justify-between px-2" style="color:#181818">
          <a href="https://github.com/hshslm/portfolio" target="_blank" class="cursor-pointer hover:text-main">View Code</a>
          <div>© 2023 <span class="">Hashim Salem</span></div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import Header from './components/Header.vue';
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Work from './components/Work.vue'
import Contact from './components/Contact.vue'
export default {
  components: {Header, About, Skills, Work, Contact},
  data() {
    return {
      showContent: false,
      collapseHeader: false,
      hideHeader: false
    }
  },
  methods: {
    initScroll(section) {
      this.hideHeader = true;
      this.collapseHeader = true;
      this.showContent = true;
      setTimeout(() => {
        this.openContent(section)
      }, 400);
    },
    openContent(section) {
      if (!this.hideHeader || !this.collapseHeader) { 
        this.initScroll(section);
        return;
      }
      if (!this.showContent) {
        // this.collapseHeader = false;
        setTimeout(() => {
        }, 400);
        this.showContent = true;
        setTimeout(() => {
          const myEl = document.getElementById(section)
          this.$smoothScroll({
            scrollTo: myEl,
            offset: section == 'about' ? -148 : (section == 'contact' ? 0 : (section == 'skills' ? -800 : -160)),
          })
        }, 800);
      } else {
        const myEl = document.getElementById(section)
          this.$smoothScroll({
            scrollTo: myEl,
            offset: section == 'about' ? -400 : (section == 'contact' ? 0 : -170),
          })
      }
    },
    handleScroll (event) {
      if (window.scrollY > window.innerHeight) {
        this.collapseHeader = true;
        setTimeout(() => {
          this.hideHeader = true;
        }, 400);
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style lang="scss">

</style>
