<script setup>
  import { ref } from 'vue'
  import { useIntersectionObserver } from '@vueuse/core'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  import Testimonials from '../helpers/tesimonials'

  const emit = defineEmits(['section-in-view'])
  const target = ref(null)
  const targetIsVisible = ref(false)
  const testimonials = Testimonials

  const windowWidth = ref(window.innerWidth)
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
    // console.log('WINDOW WIDTH', windowWidth.value)
  })

  const config = {
    wrapAround: true,
    // itemsToShow: windowWidth.value > 1220 ? 3.25 : windowWidth.value > 900 ? 2.25 : 1,
    transition: 1000,
    autoplay: 2500,
    snapAlign: 'center'
  }


  const { stop } = useIntersectionObserver(
    target, 
    ([{ isIntersecting }], observerElement) => {
      targetIsVisible.value = isIntersecting

      if (isIntersecting) {
        emit('section-in-view', target.value.id)
        // console.log('TARGET', targetIsVisible.value, target.value.id)
      }
    },
    { threshold: 0.8 }, {immediate: false}
  )
</script>

<template>
  <section ref="target" id="scrollTo_process" class="process_container_all">
    <article class="process__container">
      <h2 class="process__heading">How we work</h2>
      <p class="process__text">Realising a unique vision takes flexibility, so consider us your content design Swiss army-knife.</p>
      <p class="process__text">There&#39;s no UX writing job too big or small; if you need precision-engineered, user-focused copy, we want to hear about it.</p>
      <p class="process__text">We're equally comfortable settling in for the long haul with a startup as we are with time-sensitive one-off projects, we can offer you the flexibility and cost efficiencies of a freelance UX writer, with the responsiveness and integration of a full-time on-site hire.</p>
      <p class="process__text">In short, the way we work is up to you.</p>
    </article>
    <Carousel v-bind="config"
      :itemsToShow="windowWidth > 1220 ? 3 : windowWidth > 900 ? 2.25 : 1"
    >
      <Slide v-for="testimonial in testimonials" :key="testimonial.id" @click="openWork(testimonial)">
        <aside class="testimonials__single-box">
          <div class="testimonials__quote-icons start-quote">&#x201C;</div>
          <p>{{ testimonial.comment }}</p>
          <p>{{ testimonial.clientName }}, {{ testimonial.company }}</p>
          <div class="testimonials__quote-icons end-quote">&#8221;</div>
        </aside>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>

<style scoped>

  .process_container_all {
    display: flex;
    flex-direction: column;
    height: 95vh;
    justify-content: space-around;
  }

  .process__container {
    height: 40vh;
    max-width: 800px;
    padding-top: 20px;
    margin: 0 auto;
  }
  
  /* .testimonials__container {
    height: 40vh;
    max-width: 900px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
  } */

  .testimonials__single-box {
    position: relative;
    /* border: 1px solid black; */
    width: 20rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 0 25px;
    background: var(--highlight-color);
    color: var(--background-color);
    border-radius: 16px;
  }

  .testimonials__quote-icons {
    position: absolute;
    font-size: 12rem;
    font-family: "Unna", serif;
    line-height: 0;
    color: var(--text-color);
  }

  .start-quote {
    top: 5rem;
    left: -20px;
  }

  .end-quote {
    right: -20px;
    bottom: 0rem;
  }

  :deep(.carousel__prev), :deep(.carousel__next) {
    display: none;
  }

  @media (max-width: 768px) {
    .process_container_all {
      height: 120vh;
      padding-top: 20px;
    }

    .process__container {
      padding: 0;
      height: auto;
    }
    /* .testimonials__container {
      flex-direction: column;
      height: auto;
    } */
    /* .testimonials__single-box {
      width: 20rem;
      margin-top: 2rem;
      height: 20rem;
    } */
    .testimonials__quote-icons {
      font-size: 100px;
    }
    .start-quote {
      top: 2.5rem;
      left: 0;
    }
    .end-quote {
      right: 0;
    }
  }


</style>