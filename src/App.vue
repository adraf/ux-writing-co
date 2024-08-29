<script setup>
  import Nav from './components/Nav.vue'
  import Main from './Main.vue'
  import { ref, watchEffect } from 'vue'

  const componentForNav = ref('')

  watchEffect(() => {
    componentForNav.value
  })

  const componentInView = (componentInView) => {
    componentForNav.value = componentInView
    console.log('componentInView, APP', componentInView)
  }
</script>

<template>
  <Nav :componentForNav="componentForNav"></Nav>
  <Main @component-in-view="componentInView"></Main>
</template>

<style scoped>

</style>
