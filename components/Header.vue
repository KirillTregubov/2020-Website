<template>
  <header class="block mb-8 select-none overflow-hidden md:flex xl:-ml-20 md:overflow-visible">
    <div class="relative md:static flex justify-between items-center z-20">
      <nuxt-link to="/" class="flex items-center text-neutral-900">
        <img class="hidden xs:inline-block h-12 w-12 rounded-full lg:h-16 lg:w-16" src="@/assets/images/profile.jpg" alt="Portrait of Kirill Tregubov" />
        <h1 v-if="$nuxt.$route.name == 'index'" class="ml-3 lg:ml-4 text-2xl lg:text-3xl xl:text-4xl font-black leading-none">
          Kirill Tregubov
        </h1>
        <div class="flex items-center" v-else>
          <h1 class="inline-block ml-3 lg:ml-4 text-2xl lg:text-3xl xl:text-4xl font-black leading-none">
            Kirill Tregubov
          </h1>
          <h2 class="inline-block ml-2 py-1 px-3 text-primary-400 bg-primary-100 rounded-md font-bold uppercase tracking-wide">
            Blog
          </h2>
        </div>
      </nuxt-link>

      <div class="md:hidden" @click="menu = !menu">
        <svg v-if="!menu" class="h-8 w-8 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg v-else class="h-8 w-8 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </div>
    </div>

    <div class="flex fixed mt-2 pt-20 z-10 bg-white inset-0 md:static md:pt-0 md:mt-0 md:ml-auto md:items-center" :class="[ !menu ? 'hidden md:flex' : '']">
      <ul class="md:flex md:space-x-3 text-neutral-500 font-semibold">
        <li>
          <a v-if="$nuxt.$route.name == 'index'" href="#projects" class="py-2 px-4 focus:outline-none hover:text-neutral-900 focus:text-neutral-900">Projects</a>
          <nuxt-link v-else to="/#projects" class="py-2 px-4 focus:outline-none hover:text-neutral-900 focus:text-neutral-900">Projects</nuxt-link>
        </li>
        <li>
          <a v-if="$nuxt.$route.name == 'index'" href="#blog" class="py-2 px-4 focus:outline-none hover:text-neutral-900 focus:text-neutral-900">Blog</a>
          <nuxt-link v-else to="/#blog" class="py-2 px-4 focus:outline-none hover:text-neutral-900 focus:text-neutral-900">Blog</nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      menu: false
    }
  },
  props: {
    isHome: {
      value: Boolean,
      default: false
    }
  }
}
</script>
