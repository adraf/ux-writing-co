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
    // console.log('EMIT ITEM', workItem)
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
    /* width: 95%; */
    margin: 20px auto;
  }

  .carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 16rem;
    width: 100%;
    max-width: 500px;
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    position: relative;
    background-color: var(--background-color);
  }

  .backdropBlur {
    position: absolute;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
    color: var(--background-color);
    font-size: 1.5rem;
    border-radius: 8px;
    /* top: 0; */
    /* height: 100%; */
    /* align-items: center; */
    align-items: flex-end;
    bottom: 0;
    height: 40%;
    padding: 0 0 1rem 0;
    mask-image: linear-gradient(to top,black 50%,transparent 100%);
  }

  .carousel__slide {
    padding: 10px;
  }

  :deep(.carousel__prev), :deep(.carousel__next) {
    display: none;
  }
 
  @media (max-width: 768px) {
    .carousel__wrapper {
      width: calc(100% + 3rem);
      margin-left: -1.5rem;
    }
    .carousel__item {
      background-position: 20% 50%;
    }

    .backdropBlur {
      height: 50%;
    }

    :deep(.carousel__prev) {
      left: 0 !important;
    }
    :deep(.carousel__next) {
      right: 0 !important;
    }
  }

</style>

