<script setup>
import work from '../helpers/work'
import Slide from '../components/Slide.vue'
import { ref, nextTick } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const visible = ref(false)
const clickedSlide = ref({})
const thisWork = ref({})
const showModal = ref(false)
const target = ref(null)
const targetIsVisible = ref(false)
const emit = defineEmits(['section-in-view'])

const chosenSlide = (workData, element) => {
  const selectedButtons = document.querySelectorAll('.selectedSlideButton')
  nextTick(() => {document.querySelector('.work__company_section').scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    })
  })
  selectedButtons.forEach(button => {
    button.classList.remove('selectedSlideButton')
  })  
  clickedSlide.value = workData
  element.classList.add('selectedSlideButton')
  setTimeout(() => {
    clickedSlide.value = {}
    element.classList.remove('selectedSlideButton')
  }, 3500)
}

const { stop } = useIntersectionObserver(
  target, 
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting

    if (isIntersecting) {
      emit('section-in-view', target.value.id)
    }
  },
  { threshold: 0.8 }, {immediate: false}
)


const openWorkInfo = async (workItem) => {
  document.body.style.overflow = 'hidden';
  thisWork.value = await workItem
  showModal.value = true
  nextTick(() => {document.querySelector('.modal').scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    })
  })
}

const closeModal = () => {
  showModal.value = false
  document.body.style.overflow = 'auto';
}

</script>

<template>
  <section ref="target" class="work__company_section mx-auto align-content-evenly relative" id="scrollTo_work">
    <Slide :clicked-slide="clickedSlide" @open-work-info="openWorkInfo"></Slide>
    <div class="work_company_section_badge_conatiner flex align-items-center justify-content-center justify-content-evenly mx-auto flex-wrap md:w-10 md:h-10rem gap-3"


    >
      <button
        v-for="work in work" :key="work.id"
        @click="chosenSlide(work, $event.target)"
        class="work__company_section_badge border-round-md h-4rem border-none cursor-pointer text-md"
        style="color: var(--background-color);"
      >
        {{ work.name }}
      </button>
    </div>
    <div class="blurBg" v-if="showModal"></div>
    <div class="modal border-round-md" v-if="showModal">
      <div class="w-100 flex justify-content-end">
        <button 
          @click="closeModal()" 
          class="flex align-items-center justify-content-center border-round-md border-none surface-ground mb-3" 
          style="width: 2rem; height: 2rem">
            <i class="pi pi-times"></i>
        </button>
      </div>
      <div :style="{ 
        backgroundImage: `url(${thisWork.logo})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }" class="h-14rem w-100"></div>
      <h2 class="text-center">{{ thisWork.name }}</h2>
      <p>{{ thisWork.description }}</p>
      <h5><a class="no-underline cursor-pointer text-primary" :href="`${thisWork.url}`" target="_blank">Website</a></h5>
    </div>
  </section>
</template>

<style scoped>
  .work__company_section {
    height: 95vh;
  }

  .work_company_section_badge_conatiner {
    max-width: 800px;
  }

  button {
    width: 150px;
    padding: 15px;
    background: var(--highlight-color);
    cursor: pointer;
  }

  .blurBg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(15px);

    overflow: hidden !important;
  }

  .modal {
    padding: 10px 20px;
    width: 80vw;
    max-width: 800px;
    max-height: 70vh;
    background: var(--background-color);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    overflow-y: auto;
  }

  .selectedSlideButton {
    background-color: var(--mid-highlight);
    color: black !important;
  }

  @media (max-width: 768px) {
    .work__company_section {
      width: 100%;
      padding-top: 20px;
      height: 90vh;
    }

    .modal {
      width: 90vw;
      padding: 15px;
    }
  }
</style>