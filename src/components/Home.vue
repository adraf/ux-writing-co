<script setup>
  import { ref } from 'vue'
  import { useIntersectionObserver } from '@vueuse/core'

  const emit = defineEmits(['section-in-view'])
  const target = ref(null)
  const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
    target, 
    ([{ isIntersecting }], observerElement) => {
      targetIsVisible.value = isIntersecting

      if (isIntersecting) {
        emit('section-in-view', target.value.id)
        console.log('TARGET', targetIsVisible.value)
      }
    },
    { threshold: 0.8 }, {immediate: false}
  )
</script>

<template>
  <section ref="target" id="scrollTo_home" class="home__container">
    <h1>The UX Writing Company</h1>
    <!-- <img class="home__logo" src="" alt=""> -->
    <article class="home__article">
      <p class="home__article_paragraph">Crafting the perfect user experience is like planning an epic journey.</p> 
      <p class="home__article_paragraph">Your UX designers plot the route. Your UI designers draw the map. We create the conversation.</p> 
      <p class="home__article_paragraph">Just as your creative team deliberates on the perfect icons, buttons and colours, we design the words that entice, intrigue and most importantly instruct.</p> 
      <p class="home__article_paragraph">We craft microcopy that guides your users with a voice they recognise &#8208; or deftly introduces them to one they haven&#39;t met yet.</p> 
      <p class="home__article_paragraph">We turn tricky ideas into a language that your audience understands, building trust and loyalty on the way.</p> 
      <p class="home__article_paragraph">Our conversations don&#39;t just convert &#8208; they accompany your customers on their journey, wherever it is you want to take them.</p>
    </article>
  </section>
</template>

<style scoped>

  .home__container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: space-around;
  }

  h1 {
    font-family: "Unna", serif;
    font-weight: 700;
    max-width: 800px;
    /* margin: 20px auto; */
  }

  .home__article {
    height: 60vh;
    max-width: 800px;
    /* margin: 20px auto; */
  }

  @media (max-width: 768px) {
    .home__container {
      height: 90vh;
      /* margin-bottom: 20vh; */
      padding-top: 20px;
    }
    h1 {
      font-size: 2rem;
    }
  }
</style>
