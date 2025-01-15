<script setup>
  import Home from './components/Home.vue'
  import Service from './components/Service.vue'
  import Process from './components/Process.vue'
  import About from './components/About.vue'
  import Work from './components/Work.vue'
  import Contact from './components/Contact.vue'
  import Footer from './components/Footer.vue'
  import { ref, watchEffect } from 'vue'
  const emit = defineEmits(['component-in-view'])
  const componentForNav = ref('')
  const sectionInView = (sectionInView) => {
    componentForNav.value = sectionInView
    // console.log('sectionInView, MAIN', sectionInView)
  }

  watchEffect(() => {
    componentForNav.value,
    emit('component-in-view', componentForNav.value)
    // console.log('componentForNav, MAIN', componentForNav.value)
  })

</script>

<template>
  <main id="main__body">
    <Home ref="home" @section-in-view="sectionInView"></Home>
    <Service ref="service" @section-in-view="sectionInView"></Service>
    <Process ref="process" @section-in-view="sectionInView"></Process>
    <About ref="about" @section-in-view="sectionInView"></About>
    <Work ref="workSection" @section-in-view="sectionInView"></Work>
    <Contact ref="contact" @section-in-view="sectionInView"></Contact>
    <Footer></Footer>
  </main>
</template>

<style scoped>

</style>