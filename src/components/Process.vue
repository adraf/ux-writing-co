<script setup lang="ts">

</script>

<template>
  <section data-section="process" id="scrollTo_process" class="process_container_all">
    <article class="process__container">
      <h2 class="process__heading">How we work</h2>
      <p class="process__text">Realising a unique vision takes flexibility, so consider us your content design Swiss army-knife.</p>
      <p class="process__text">There&#39;s no UX writing job too big or small; if you need precision-engineered, user-focused copy, we want to hear about it.</p>
      <p class="process__text">We're equally comfortable settling in for the long haul with a startup as we are with time-sensitive one-off projects, we can offer you the flexibility and cost efficiencies of a freelance UX writer, with the responsiveness and integration of a full-time on-site hire.</p>
      <p class="process__text">In short, the way we work is up to you.</p>
    </article>
    <div class="testimonials__container">
      <aside class="testimonials__single-box">
        <!-- start quote -->
        <div class="testimonials__quote-icons start-quote">&#x201C;</div>
        <p class="testimonials__text">Alice and Dominic are highly knowledgeable, creative and skilled copywriters.  We would absolutely recommend The UX Writing Company to anyone looking for a great company to work with.</p>
        <p class="testimonials__person">Rick Tsing, OneOneDay</p>
        <!-- end quote -->
        <div class="testimonials__quote-icons end-quote">&#8221;</div>
      </aside>
      <aside class="testimonials__single-box">
        <!-- start quote -->
        <div class="testimonials__quote-icons start-quote">&#x201C;</div>
        <p class="testimonials__text">The best!! Outstanding work. Very prompt and adept microcopy and brand identity creators</p>
        <p class="testimonials__person">Kongkiat Sermtavisub, Ksip App</p>
          <!-- end quote -->
        <div class="testimonials__quote-icons end-quote">&#8221;</div>
      </aside>
    </div>
  </section>
</template>

<style scoped>

  .process_container_all {
    display: flex;
    flex-direction: column;
    height: 95vh;
    justify-content: space-around;
  }

  .process__container {
    height: 40vh;
    max-width: 800px;
    padding-top: 20px;
    margin: 0 auto;
  }
  
  .testimonials__container {
    height: 40vh;
    max-width: 900px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
  }

  .testimonials__single-box {
    position: relative;
    border: 1px solid black;
    width: 40%;
    max-width: 450px;
    height: 60%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 0 25px;
  }

  .testimonials__quote-icons {
    position: absolute;
    font-size: 200px;
    font-family: "Unna", serif;
    line-height: 0;
  }

  .start-quote {
    top: 30px;
    left: 0;
  }

  .end-quote {
    right: 0;
    bottom: -50px;
  }



</style>