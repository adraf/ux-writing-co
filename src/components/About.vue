<script setup>
  import { ref } from 'vue'
  import { useIntersectionObserver } from '@vueuse/core'
  import Blobs from '../helpers/blobs'

  const blobs = Blobs
  const emit = defineEmits(['section-in-view'])
  const target = ref(null)
  const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
    target, 
    ([{ isIntersecting }], observerElement) => {
      targetIsVisible.value = isIntersecting

      if (isIntersecting) {
        emit('section-in-view', target.value.id)
        // console.log('TARGET', targetIsVisible.value)
      }
    },
    { threshold: 0.8 }, {immediate: false}
  )
</script>

<template>
  <section ref="target" class="about__container" id="scrollTo_about">
    <article class="about__article">
      <h2>And we are?</h2>
      <p class="about__text">Glad you asked...</p>
      <p class="about__text">The short answer is that we&#39;re a collection of multi-disciplinary word nerds that have held nearly every type of job you could think of in the world of commercial writing.</p>
      <p class="about__text">We set up The UX Writing Company after realising just how many passionate teams, startups and products were being held back by imperfect copy. Since then we've made it our mission to help businesses of all shapes and sizes to realise their creative vision and deliver the best possible product into a competitive and noisy marketplace.</p>    
    </article>
    <div class="mobile-images relative">
      <div class="absolute svg-box" style="display: flex; justify-content: center; align-items: center;">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="background-color: var(--background-color);">
          <path 
            fill="var(--mid-highlight)" 
            :d="blobs[0]?.code"
            transform="translate(100 100)" 
          />
        </svg>
      </div>
      <div class="about__image_mobile image-left z-1"></div>
      <div class="about__image_mobile image-right z-1"></div>
    </div>
    <div class="about__image image-left"></div>
    <div class="about__image image-right"></div>
  </section>
</template>

<style scoped>
  .about__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 90vh;
    width: 95%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .about__article {
    z-index: 1;
    position: absolute;
    width: 30vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--background-color);
    padding: 20px;
  }

  .mobile-images {
    display: none;
  }

  .about__image { 
    height: 90%;
    width: 400px;
    background-position: left;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .image-left {
    background-image: url(https://static.wixstatic.com/media/35b914_ef874738444e499199e0199876385946~mv2_d_2038_1464_s_2.jpg/v1/fill/w_490,h_851,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/35b914_ef874738444e499199e0199876385946~mv2_d_2038_1464_s_2.jpg);
  }

  .image-right {
    background-image: url(https://static.wixstatic.com/media/35b914_1c5c3753019343f9ba3165e2f6ae8827~mv2_d_1520_1212_s_2.jpg/v1/fill/w_490,h_851,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/35b914_1c5c3753019343f9ba3165e2f6ae8827~mv2_d_1520_1212_s_2.jpg);
    background-position: right;
  }
  
  @media (max-width: 768px) {
    .about__container {
      flex-direction: column;
      height: 95vh;
      margin: 0 auto;
      padding-top: 20px;
    }
    .about__article {
      z-index: 0;
      position: relative;
      width: 100%;
      top: 0; 
      left: 0;
      transform: translate(0, 0);
      background-color: unset !important;
      padding: 2rem 0 0 0;
    }
    
    .about__image {
      display: none;
    }

    .mobile-images {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 30rem;
      /* align-items: center; */
      /* height: auto; */
    }

    .svg-box {
      z-index: 0;
    }

    .svg-box svg {
      width: 100%;
      height: 100%;
    }

    .about__image_mobile.image-left {
      align-self: flex-start;
      margin-left: 5%;
    }

    .about__image_mobile.image-right {
      align-self: flex-end;
      margin-right: 5%;
    }

    .about__image_mobile { 
      width: 40%;
      height: 14rem;
      background-position: 0% 25%;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 8px;
      /* height: 35vh; */
    }
  }
</style>