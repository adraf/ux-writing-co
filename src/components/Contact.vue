<script setup>
  import { nextTick, ref } from 'vue'
  import { useIntersectionObserver } from '@vueuse/core'

  const emit = defineEmits(['section-in-view'])
  const target = ref(null)
  const targetIsVisible = ref(false)

  const form = ref({
    email: '',
    name: '',
    subject: '',
    message: '',
  })

  const onSubmit = async (e) => {
    e.preventDefault();
    const contactForm = document.querySelector('.contact__form')
    contactForm.reset()
    nextTick(() => {
      alert('Thank you for your message!')
    })
  }

const { stop } = useIntersectionObserver(
    target, 
    ([{ isIntersecting }], observerElement) => {
      targetIsVisible.value = isIntersecting

      if (isIntersecting) {
        emit('section-in-view', target.value.id)
        // console.log('TARGET', targetIsVisible.value)
      }
    },
    { threshold: 0.8 }, {immediate: false}
  )
</script>

<template>
  <section ref="target" id="scrollTo_contact" class="contact__container">
    <form class="contact__form" id="contact__form" ref="contact" @submit.prevent>
      <label class="contact__form_label" for="input_name">Name <span class="required-field font-normal" style="color: var(--highlight-color)">&ast;</span></label>
      <input v-model="form.name" class="contact__form_input" id="input_name" type="text" name="name" placeholder="Name" aria-label="Name" required>
      <label class="contact__form_label" for="input_email">Email <span class="required-field font-normal" style="color: var(--highlight-color)">&ast;</span></label>
      <input v-model="form.email" class="contact__form_input" id="input_email" type="email" name="email" placeholder="Email" aria-label="Email" required>
      <label class="contact__form_label" for="input_subject">Subject <span class="required-field font-normal" style="color: var(--highlight-color)">&ast;</span></label>
      <input v-model="form.subject" class="contact__form_input" id="input_subject" type="text" name="subject" placeholder="Subject" aria-label="Subject" required>
      <label class="contact__form_label" for="input_message">Further information</label>
      <textarea v-model="form.message" class="contact__form_input" id="input_message" aria-label="Message" name="message" form="contact__form" cols="30" rows="10" placeholder="Message"></textarea>
      <input @click="onSubmit" class="contact__form_input" id="input_submit" type="submit" value="Send" aria-label="Send">
      <!-- // TODO: add disabled unless forms are complete - remove @click to get required responses or add custom ones -->
    </form>
  </section>
</template>

<style scoped>

  .contact__container {
    display: flex;
    height: 80vh;
    justify-content: center;
    align-items: center;
    margin: 5rem 0;
  }
  .contact__form {
    display: flex;
    flex-direction: column;
    width: 50vw;
    max-width: 500px;
    /* margin: 0 auto; */
  }

  .contact__form_label {
    margin: 12px 0px 5px 10px;
    font-size: 1.4rem;
    font-weight: bold;
  }

  .required-field {
    font-size: 1rem;
    padding-left: 3px;
    position: absolute;
  }

  .contact__form_input {
    margin: 5px 10px;
    padding: 10px;
    border: 0.95px solid var(--text-color);
    border-radius: 5px;
    background: var(--background-color);
  }

  .contact__form_input:focus-visible {
    outline: 1px auto var(--highlight-color);
    outline-offset: 0px;

  }
  #input_submit {
    border: 0.95px solid var(--highlight-color);
    color: var(--highlight-color);
  }

  #input_submit:hover {
    border: 1px solid var(--background-color);
    color: var(--background-color);
    background: var(--highlight-color);
  }

  #input_message {
    resize: none;
    font-family: inherit;
  }

@media (max-width: 768px) {
  .contact__container {
    height: 80vh;
  }

  .contact__form {
    width: 85vw;
  }
}
</style>