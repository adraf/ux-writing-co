<script>
  // Had to use a standard script block for defineComponent to work.
  // Vue3-carousel
  // https://ismail9k.github.io/vue3-carousel/configs.html
  import { defineComponent, onMounted, ref, defineProps, watchEffect } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  
  import Work from '../helpers/work'
  
  export default defineComponent({
    name: 'WrapAround',
    components: {
      Carousel,
      Slide,
      Navigation,
    }
  })
  
</script>
<script setup>

  const props = defineProps({
    clickedSlide: {
      type: Object,
      default: () => {},
      required: true,
    },
  })

  watchEffect(() => {
    const { clickedSlide } = props;
    if (Object.keys(clickedSlide).length > 0) {
      workCarousel.value.slideTo(clickedSlide.id - 1)
      // console.log('SLIDEDECK', clickedSlide);
    }
  }, { props })

  const workCarousel = ref(null)
  const work = Work

</script>

<template>
  <Carousel ref="workCarousel" :items-to-show="2.25" :wrap-around="true" :autoplay="2500" class="carousel__wrapper" :transition="1000">
    <Slide v-for="workItem in work" :key="workItem.id">
      <div 
        :style="`background-image: url('${workItem.logo}');`"
        class="carousel__item"
      >
      {{ workItem.name }}
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style scoped>

  .carousel__wrapper {
    width: 95%;
    margin: 20px auto;
  }

  .carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 250px;
    width: 100%;
    /* background-image: url('src/images/placeholder.png'); */
    background-position: center;
    background-size: cover;
    /* background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white); */
    /* font-size: 20px; */
    border-radius: 8px;
  }

  .carousel__slide {
    padding: 10px;
  }

  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    padding: 10px;
    height: 90%;
    margin: 0;
  }
  
  .carousel__prev {
    background: linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,1));
  }
  
  .carousel__next {
    background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1));
 
  }

</style>

