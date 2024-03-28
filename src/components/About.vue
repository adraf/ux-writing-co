<script setup lang="ts">

</script>

<template>
  <section class="about__container">
    <div class="about__image image-left"></div>
    <article class="about__article">
      <h2>And we are?</h2>
      <p class="about__text">Glad you asked...</p>
      <p class="about__text">The short answer is that we&#39;re a collection of multi-disciplinary word nerds that have held nearly every type of job you could think of in the world of commercial writing.</p>
      <p class="about__text">We set up The UX Writing Company after realising just how many passionate teams, startups and products were being held back by imperfect copy. Since then we've made it our mission to help businesses of all shapes and sizes to realise their creative vision and deliver the best possible product into a competitive and noisy marketplace.</p>    
    </article>
    <div class="about__image image-right"></div>
  </section>
</template>

<style>
  .about__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 90vh;
    width: 95%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .about__article {
    z-index: 1;
    position: absolute;
    width: 30vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--background-color);
    padding: 20px;
  }

  .about__image { 
    height: 90%;
    width: 400px;
    background-position: left;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .image-left {
    background-image: url(https://static.wixstatic.com/media/35b914_ef874738444e499199e0199876385946~mv2_d_2038_1464_s_2.jpg/v1/fill/w_490,h_851,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/35b914_ef874738444e499199e0199876385946~mv2_d_2038_1464_s_2.jpg);
  }

  .image-right {
    background-image: url(https://static.wixstatic.com/media/35b914_1c5c3753019343f9ba3165e2f6ae8827~mv2_d_1520_1212_s_2.jpg/v1/fill/w_490,h_851,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/35b914_1c5c3753019343f9ba3165e2f6ae8827~mv2_d_1520_1212_s_2.jpg);
    background-position: right;
  }

</style>