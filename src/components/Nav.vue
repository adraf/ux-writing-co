<script>
  import { ref } from 'vue'

  document.addEventListener("DOMContentLoaded", () => {

    const scrollRoot = document.querySelector('#main__body')

    let options = {
      root: scrollRoot,
      rootMargin: '0px',
      threshold: 0.5,
    }
  
    const sections = [...document.querySelectorAll('[data-section]')]
  
    const onIntersect = (entries) => {
      entries.forEach((entry) => {
        // console.log('NAV', sections, entry)
      })
    }
  
    const observer = new IntersectionObserver(onIntersect, options)

    sections.forEach((section) => {
      observer.observe(section)
    })
  })

  
  // controls the nav bar and scrolling to relevant sections.
  export default {
    methods: {
      scrollToSection(event) {
        const allNavTitles = document.querySelectorAll('.nav__list_item')
        allNavTitles.forEach((navTitle) => {
          navTitle.classList.remove('activeNavTitle')
        })
        navSection.value = document.getElementById(event.target.id)
        
        
        const goToId = 'scrollTo_' + event.target.id
        const goToSection = document.getElementById(goToId);
        goToSection.scrollIntoView({ behavior: 'smooth' });
        
        
        navSection.value.classList.add('activeNavTitle')
      },
      
    }
  }
  const navSection = ref('')



</script>

<template>
  <nav class="nav__main">
    <ul class="nav__list">
      <li class="nav__list_item" id="home" @click="scrollToSection">Home</li>
      <li class="nav__list_item" id="services" @click="scrollToSection">Services</li>
      <li class="nav__list_item" id="process" @click="scrollToSection">Process</li>
      <li class="nav__list_item" id="about" @click="scrollToSection">About</li>
      <li class="nav__list_item" id="work" @click="scrollToSection">Work</li>
      <li class="nav__list_item" id="contact" @click="scrollToSection">Contact</li>
    </ul>
  </nav>

</template>

<style scoped>
  /* keeps nav bar fixed and to the left */
  .nav__main {
    position: fixed;
    left: 5%;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 35vh;
  }

  .nav__list {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .activeNavTitle {
    font-weight: bold;
    transition: 0.5s ease-in-out;
  }

</style>
