<script setup lang="ts">
import Slide from '../components/Slide.vue'

</script>

<template>
  <!-- carousel + info -->
  <Slide></Slide>
  <section class="work__company_section">
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
  </section>
</template>

<style>
  .work__company_section {
    max-width: 800px;
    margin: 0 auto;
  }
</style>