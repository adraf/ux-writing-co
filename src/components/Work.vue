<script setup lang="ts">
import Slide from '../components/Slide.vue'

// Had to add the below to tsconfig.json as was getting an error on import. 
// "noImplicitAny": false,
// "allowJs": true,

</script>

<template>
  <!-- carousel + info -->
  <section class="work__company_section" id="scrollTo_work">
    <Slide></Slide>
    <div class="work_company_section_badge_conatiner">
      <button class="work__company_section_badge">Monetha</button>
      <button class="work__company_section_badge">Base Camp</button>
      <button class="work__company_section_badge">Smart Plan</button>
      <button class="work__company_section_badge">Designit</button>
      <button class="work__company_section_badge">MyPermissions</button>
      <button class="work__company_section_badge">CB4</button>
      <button class="work__company_section_badge">oneoneday</button>
      <button class="work__company_section_badge">H4</button>
      <button class="work__company_section_badge">Oodies</button>
      <button class="work__company_section_badge">MyPrivacy</button>
    </div>
  </section>
</template>

<style scoped>
  .work__company_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    height: 95vh;
    width: 95%;
  }

  .work_company_section_badge_conatiner {
    display: flex;
    width: 80%;
    height: 30%;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  button {
    /* height: 35px; */
    width: 150px;
    padding: 15px;
  }
</style>