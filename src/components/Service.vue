<script setup lang="ts">

</script>

<template>
  <section class="services__section" id="scrollTo_services">
    <article class="services__article">
      <img class="services__image" src="../images/iconmonstr-speech-bubble-26-240.png" alt="">
      <div class="servives__article_text-box">
        <h3 class="services__title">Tone of Voice</h3>
        <p class="services__text">People like talking to other people. They&#39;re not as fond of talking to robots. We design UX copy that weaves the unique personality of your startup into every word &#8208; creating more meaningful experiences for your users.</p>
      </div>
    </article>
    <article class="services__article">
      <img class="services__image" src="../images/iconmonstr-share-2-240.png" alt="">
      <div class="servives__article_text-box">
        <h3 class="services__title">Optimisation</h3>
        <p class="services__text">After putting all your energy into designing an experience that&#39;ll get people hooked &#8208; it&#39;d be a shame if the words let you down.<br>We optimise content for mobile apps, digital platforms, Smart TV and online forms.</p>
      </div>
    </article>
    <article class="services__article">
      <img class="services__image" src="../images/iconmonstr-school-2-240.png" alt="">
      <div class="servives__article_text-box">
        <h3 class="services__title">Localisation</h3>
        <p class="services__text">Geography shouldn&#39;t stand in the way of a great idea. Whether your startup is based in Lima or London, Beijing or Beirut, we can help you craft UX copy that resonates with your target audience &#8208; no matter where they are in the world.</p>
      </div>
    </article>
  </section>
</template>

<style scoped>
  .services__section {
    display: flex;
    width: 100%;
    height: 90vh;
    justify-content: space-evenly;
    padding: 5vh 0;
  }

  .services__article {
    display: flex;
    flex-direction: column;
    width: 25%;
    max-width: 300px;
    height: 100%;
    text-align: center;
    justify-content: space-around;
  }

  .services__image {
    width: 60%;
    max-width: 150px;
    height: auto;
    margin: 0 auto;
  }

  .servives__article_text-box {
    min-height: 40vh;
  }
</style>