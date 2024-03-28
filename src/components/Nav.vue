<script setup lang="ts">


</script>

<template>
  <nav class="nav__main">
    <ul class="nav__list">
      <li class="nav__list_item">Services</li>
      <li class="nav__list_item">Process</li>
      <li class="nav__list_item">About</li>
      <li class="nav__list_item">Work</li>
      <li class="nav__list_item">Contact</li>
    </ul>
  </nav>

</template>

<style scoped>
  /* keeps nav bar fixed and to the left */
  .nav__main {
    position: fixed;
    left: 5%;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 35vh;
  }

  .nav__list {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
  }

</style>
