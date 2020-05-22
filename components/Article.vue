<template>
  <div class="max-w-4xl xl:max-w-5xl m-auto p-6 md:px-8">
    <Header />
    <div class="mt-12">
      <h1 class="text-3xl md:text-4xl font-semibold leading-none">{{ title }}</h1>
      <h3 class="mt-1 text-base text-neutral-600 leading-none">{{ date }}</h3>
      <img class="mt-3 h-48 md:h-56 lg:h-64 object-cover rounded" :src="getImage(title)" :alt="'Image of ' + title">
    </div>
    <div class="mt-2">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Article',
  methods: {
    getImage (url) {
      var images = require.context('../assets/images/', false, /\.jpg$/)
      return images('./' + url.replace(/\s+/g, '-').toLowerCase() + '.jpg')
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="postcss" scoped>
h2 {
  @apply mt-4 font-semibold text-2xl text-neutral-800;
}

p {
  @apply mb-3 text-lg text-neutral-800 leading-snug;
}

p:last-of-type {
  @apply mb-0;
}

.inline-link {
  @apply whitespace-no-wrap;
}
</style>
