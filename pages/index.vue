<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">{{ $t('welcome') }}</h1>
        <p class="text-lg">{{ $t('welcomeDescription') }}</p>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

export default defineComponent({
  components: {
    Navbar,
    Footer
  }
});
</script>
