<template>
  <nuxt-link to="/" class="flex xl:-ml-20 text-neutral-900">
    <img
      class="h-12 w-12 lg:h-16 lg:w-16 rounded-full"
      src="@/assets/images/profile.jpg"
      alt=""
    />
    <h1
      class="self-center ml-3 lg:ml-4 text-2xl lg:text-3xl xl:text-4xl font-black leading-none"
    >
      Kirill Tregubov
    </h1>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Header'
}
</script>
