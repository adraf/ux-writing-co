<script setup>
  import { ref } from 'vue'
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
    console.log(form.value)
    // TODO:  once for is submitted, clear the fields - 
    clearFields()
  }

  const clearFields = () => {
    form.value.email = ''
    form.value.name = ''
    form.value.subject = ''
    form.value.message = ''
  }

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
  <section ref="target" id="scrollTo_contact" class="contact__container">
    <form class="contact__form" ref="contact" @submit.prevent>
      <input v-model="form.name" class="contact__form_input" id="input_name" type="text" name="name" placeholder="Name" aria-label="Name" required>
      <input v-model="form.email" class="contact__form_input" id="input_email" type="email" name="email" placeholder="Email" aria-label="Email" required>
      <input v-model="form.subject" class="contact__form_input" id="input_subject" type="text" name="subject" placeholder="Subject" aria-label="Subject" required>
      <textarea v-model="form.message" class="contact__form_input" id="input_message" aria-label="Message" name="message" form="scrollTo_contact" cols="30" rows="10" placeholder="Message"></textarea>
      <input @click="onSubmit" class="contact__form_input" id="input_submit" type="submit" value="Send" aria-label="Send">
    </form>
  </section>
</template>

<style scoped>

  .contact__container {
    display: flex;
    height: 90vh;
    justify-content: center;
    align-items: center;
  }
  .contact__form {
    display: flex;
    flex-direction: column;
    width: 50vw;
    max-width: 500px;
    /* margin: 0 auto; */
  }

  .contact__form_input {
    margin: 5px 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }

  #input_message {
    resize: none;
    font-family: inherit;
  }

@media (max-width: 768px) {
  .contact__container {
    height: 70vh;
  }

  .contact__form {
    width: 85vw;
  }
}
</style>