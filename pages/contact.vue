<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow flex items-center justify-center">
      <div class="w-full max-w-md">
        <h1 class="text-4xl font-bold mb-4 text-center">{{ $t('contact') }}</h1>
        <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">{{ $t('name') }}</label>
            <input type="text" id="name" v-model="form.name" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">{{ $t('email') }}</label>
            <input type="email" id="email" v-model="form.email" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-6">
            <label for="message" class="block text-gray-700 text-sm font-bold mb-2">{{ $t('message') }}</label>
            <textarea id="message" v-model="form.message" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div class="flex items-center justify-between">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{{ $t('submit') }}</button>
          </div>
        </form>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

export default defineComponent({
  components: {
    Navbar,
    Footer
  },
  setup() {
    const form = ref({
      name: '',
      email: '',
      message: ''
    });

    const submitForm = () => {
      console.log('Form submitted', form.value);
    };

    return {
      form,
      submitForm
    };
  }
});
</script>
