<script setup>
  import { defineComponent, onMounted, ref, defineProps, watchEffect } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  import Work from '../helpers/work'

  const config = {
    wrapAround: true,
    itemsToShow: 2.25,
    transition: 1000,
    autoplay: 2500,
    snapAlign: 'center',
  }

  const emit = defineEmits(['open-work-info'])

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

  const openWork = (workItem) => {
    console.log('EMIT ITEM', workItem)
    emit('open-work-info', workItem)
  }

  const workCarousel = ref(null)
  const work = Work
  const visible = ref(false);

</script>

<template>
  <Carousel ref="workCarousel" v-bind="config" class="carousel__wrapper">
    <Slide v-for="workItem in work" :key="workItem.id" @click="openWork(workItem)">
      <div 
        :style="`background-image: url('${workItem.logo}');`"
        class="carousel__item"
      >
        <div class="backdropBlur" style="backdrop-filter: blur(2px);">
          {{ workItem.name }}
        </div>
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
    min-height: 16rem;
    width: 100%;
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    position: relative;
  }

  .backdropBlur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    font-size: 1.5rem;
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
    right: -2.5rem !important;
  }
  :deep(.carousel__prev) {
    left: -2.5rem !important;
  }
  :deep(.carousel__next) {
    right: -2.5rem !important;
  }

  @media (max-width: 768px) {
    .carousel__wrapper {
      width: calc(100% + 3rem);
      margin-left: -1.5rem;
    }
    :deep(.carousel__prev) {
      left: 0 !important;
    }
    :deep(.carousel__next) {
      right: 0 !important;
    }
  }

</style>

