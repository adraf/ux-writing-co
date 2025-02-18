<script setup>
  import { nextTick, ref, watch } from 'vue'
  import { useIntersectionObserver } from '@vueuse/core'
  import { Button } from 'primevue'
  const emit = defineEmits(['section-in-view'])
  const target = ref(null)
  const targetIsVisible = ref(false)
  const sentMessage = ref(false)
  const formComplete = ref(false)
  const form = ref({
    email: '',
    name: '',
    subject: '',
    message: '',
  })

  const onSubmit = async (e) => {
    e.preventDefault();
    const contactForm = document.querySelector('.contact__form')
    await contactForm.reset()
    sentMessage.value = true
    // console.log('form submitted', form.value)
  
    setTimeout(() => {
      sentMessage.value = false
    }, 5000)
    nextTick(() => {
      form.value = {
        email: '',
        name: '',
        subject: '',
        message: '',
      }
      formComplete.value = false
    })
  }

  watch(form, (newVal) => {
    if (newVal.email && newVal.name && newVal.subject) {
      formComplete.value = true
    } else {
      formComplete.value = false
    }
  }, { deep: true })

  const { stop } = useIntersectionObserver(
    target, 
    ([{ isIntersecting }], observerElement) => {
      targetIsVisible.value = isIntersecting

      if (isIntersecting) {
        emit('section-in-view', target.value.id)
      }
    },
    { threshold: 0.8 }, {immediate: false}
  )
</script>

<template>
  <section ref="target" id="scrollTo_contact" class="contact__container">
    <div class="w-full">
      <h2>Get in touch</h2>
    </div>
    <form class="contact__form" id="contact__form" ref="contact" @submit.prevent>
      <label class="contact__form_label" for="input_name">Name <span class="required-field font-normal" style="color: var(--highlight-color)">&ast;</span></label>
      <input v-model="form.name" class="contact__form_input" id="input_name" type="text" name="name" placeholder="Name" aria-label="Name" required>
      <label class="contact__form_label" for="input_email">Email <span class="required-field font-normal" style="color: var(--highlight-color)">&ast;</span></label>
      <input v-model="form.email" class="contact__form_input" id="input_email" type="email" name="email" placeholder="Email" aria-label="Email" required>
      <label class="contact__form_label" for="input_subject">Subject <span class="required-field font-normal" style="color: var(--highlight-color)">&ast;</span></label>
      <input v-model="form.subject" class="contact__form_input" id="input_subject" type="text" name="subject" placeholder="Subject" aria-label="Subject" required>
      <label class="contact__form_label" for="input_message">Further information</label>
      <textarea v-model="form.message" class="contact__form_input" id="input_message" aria-label="Message" name="message" form="contact__form" cols="30" rows="10" placeholder="Message"></textarea>
      <Button 
        @click="onSubmit" 
        class="contact__form_input" 
        id="input_submit" 
        type="submit" 
        aria-label="Send"
        :disabled="!formComplete"
      >
        <p v-if="sentMessage" class="p-0 m-0 mr-2 inline">Sent</p>
        <p v-else class="p-0 m-0 inline">Send</p>
        <i v-if="sentMessage" class="pi pi-send"></i>
      </Button>
    </form>
  </section>
</template>

<style scoped>

  .contact__container {
    display: flex;
    height: 95vh;
    justify-content: center;
    align-items: center;
    margin: 5rem auto;
    max-width: 800px;
    flex-direction: column;
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
  #input_submit:hover {
    border: 0.95px solid var(--highlight-color);
    color: var(--highlight-color);
    background: var(--background-color);
  }

  #input_submit {
    border: 0.95px solid var(--background-color);
    color: var(--background-color);
    background: var(--highlight-color);
  }

  #input_submit:disabled {
    border: 0.95px solid var(--mid-highlight);
    color: var(--mid-highlight);
    background: var(--background-color);
  }

  #input_message {
    resize: none;
    font-family: inherit;
  }

@media (max-width: 768px) {
  .contact__container {
    height: 90vh;
  }

  .contact__form {
    width: 90vw;
  }
}
</style>