<template>
  <div class="container pt-32">
    <h1 v-if="error.specialMessage">{{ error.specialMessage }}</h1>
    <h1 v-else-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'default'
  }
</script>
