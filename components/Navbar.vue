<template>
  <nav class="bg-gray-900 text-white p-4 flex justify-between items-center">
    <ul class="flex space-x-4">
      <li><nuxt-link :to="{ path: '/', query: { lang: $i18n.locale } }" class="hover:text-gray-400">{{ $t('welcome') }}</nuxt-link></li>
      <li><nuxt-link :to="{ path: '/about', query: { lang: $i18n.locale } }" class="hover:text-gray-400">{{ $t('about') }}</nuxt-link></li>
      <li><nuxt-link :to="{ path: '/services', query: { lang: $i18n.locale } }" class="hover:text-gray-400">{{ $t('services') }}</nuxt-link></li>
      <li><nuxt-link :to="{ path: '/contact', query: { lang: $i18n.locale } }" class="hover:text-gray-400">{{ $t('contact') }}</nuxt-link></li>
    </ul>
    <div>
      <button @click="changeLocale('en')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">EN</button>
      <button @click="changeLocale('ru')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">RU</button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    changeLocale(locale: string) {
      this.$i18n.locale = locale;
    }
  }
});
</script>
