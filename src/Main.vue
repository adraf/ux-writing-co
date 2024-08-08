<script setup>
  import Home from './components/Home.vue'
  import Service from './components/Service.vue'
  import Process from './components/Process.vue'
  import About from './components/About.vue'
  import Work from './components/Work.vue'
  import Contact from './components/Contact.vue'
  import Footer from './components/Footer.vue'

  import { ref, onMounted } from 'vue'
  import { useIntersectionObserver } from '@vueuse/core'

  const emit = defineEmits(['section-in-view'])
  const home = ref(null)
  const service = ref(null)
  const process = ref(null)
  const about = ref(null)
  const workSection = ref(null)
  const contact = ref(null)
  const targetIsVisible = ref(false)

  onMounted(() => console.log(workSection, contact)
);

  const sections = [home, service, process, about, contact, workSection]
  const { stop } = useIntersectionObserver(
    sections, 
    ([{ isIntersecting }], observerElement) => {
      targetIsVisible.value = isIntersecting
      if (isIntersecting) {
        emit('section-in-view', observerElement)
        console.log('TARGET', targetIsVisible.value, observerElement, sections)
      }
    },
    { threshold: 0.8 }, {immediate: false}
  )

</script>

<template>
  <main id="main__body">
    <Home ref="home"></Home>
    <Service ref="service"></Service>
    <Process ref="process"></Process>
    <About ref="about"></About>
    <Work ref="workSection"></Work>
    <Contact ref="contact"></Contact>
    <Footer></Footer>
  </main>
</template>

<style scoped>

</style>