<template>
    <div id="about" class="px-4 md:px-40 flex flex-col justify-center" :style="!collapsed ? 'height:calc(100vh - 150px)' : 'margin: 6rem 0;'">
         <div class="header text-center text-3xl md:text-7xl font-bold">ABOUT ME</div>
         <div class="text-center text-sm md:text-2xl mt-10 md:mt-20 leading-loose">
             Hello, I'm an innovative <span class="text-main font-bold whitespace-no-wrap"> Front-End Developer </span> with a BSc in Computer Science and <span class="text-main font-bold whitespace-no-wrap"> 4+ years of experience </span> building and maintaining responsive web applications. I'm a quick learner with a passion for <span class="text-main font-bold whitespace-no-wrap"> problem-solving</span>, <span class="text-main font-bold whitespace-no-wrap">algorithm development</span> and <span class="text-main font-bold whitespace-no-wrap">UI design </span>. 
        </div>
        <div class="flex justify-center mt-6 md:mt-12">
            <a href="https://drive.google.com/file/d/1YdNJuaavETlsxKDow-UrfEkqKCsfL2K0/view?usp=sharing" target="_blank" class="text-sm md:text-base work-links mx-12 cursor-pointer">Resume</a>
            <a href="https://www.linkedin.com/in/hashim-salem-648082169/" target="_blank" class="text-sm md:text-base work-links mx-12 cursor-pointer">LinkedIn</a>
        </div>
        <div class="h-10 md:h-20"></div>
    </div>
</template>

<script>
export default {
    props: ['collapsed']
}
</script>

<style>

</style>