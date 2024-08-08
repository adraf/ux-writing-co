<script setup>
import work from '../helpers/work'
import Slide from '../components/Slide.vue'
import { ref } from 'vue'

// Had to add the below to tsconfig.json as was getting an error on import. 
// "noImplicitAny": false,
// "allowJs": true,

const clickedSlide = ref({})

const chosenSlide = (workData) => {
  clickedSlide.value = workData
  console.log('clicked', clickedSlide.value)
}

</script>

<template>
  <!-- carousel + info -->
  <section class="work__company_section mx-auto align-content-evenly" id="scrollTo_work">
    <Slide :clicked-slide="clickedSlide"></Slide>
    <div class="work_company_section_badge_conatiner flex align-items-center justify-content-center justify-content-evenly mx-auto flex-wrap w-10 h-10rem gap-3">
      <button
        v-for="work in work" :key="work.id"
        @click="chosenSlide(work)"
        class="work__company_section_badge border-round-md border-none h-3rem cursor-pointer"
      >
        {{ work.name }}
      </button>
    </div>
  </section>
</template>

<style scoped>
  .work__company_section {
    max-width: 1000px;
    height: 95vh;
    width: 95%;
  }

  button {
    width: 150px;
    padding: 15px;
  }
</style>