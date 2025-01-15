<script>
  import { ref, watchEffect } from 'vue'

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
        boldFunc(event.target.id)
        const goToId = 'scrollTo_' + event.target.id
        const goToSection = document.getElementById(goToId);
        goToSection.scrollIntoView({ behavior: 'smooth' });
      },   
    },
    props: {
      componentForNav: String,
    },
    setup(props) {
      watchEffect(() => {
        // console.log('PROP', props.componentForNav)
        if (props.componentForNav !== '') {
          scrollToSectionScroll(props.componentForNav)
        }
      })
    }
  }
  const navSection = ref('')

  const scrollToSectionScroll = (event) => {
    event = event.split('').splice(9).join('')
    // console.log('EVENTNAME', event)
    boldFunc(event)
  }

  const boldFunc = (sectionId) => {
    // console.log('hit bold func', sectionId)
    const allNavTitles = document.querySelectorAll('.nav__list_item')
    allNavTitles.forEach((navTitle) => {
      navTitle.classList.remove('activeNavTitle')
    })
    const thisSection = document.getElementById(sectionId)
    thisSection.classList.add('activeNavTitle')
  }

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

  .nav__list_item {
    cursor: pointer;
  }
  .activeNavTitle {
    font-weight: bold;
    transition: 0.5s ease-in-out;
    color: var(--highlight-color);
  }

  @media (max-width: 768px) {
    .nav__main {
    position: sticky;
    display: flex;
    top: 0;
    margin: auto 0;
    height: 50px;
    background-color: var(--background-color);
    z-index: 2;
    width: 100vw;
    margin-left: -1.5rem;
  }
  .nav__list {
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
  }
}

</style>
