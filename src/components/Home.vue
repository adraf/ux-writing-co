<script setup lang="ts">

</script>

<template>
  <section id="scrollTo_home" class="home__container">
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

</style>
