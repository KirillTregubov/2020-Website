<template>
  <header class="block relative justify-between mb-8 select-none md:flex xl:-ml-20">
    <div class="flex justify-between items-center z-20">
      <nuxt-link :to="isBlog ? '/blog' : '/'" class="flex items-center text-neutral-900">
        <img class="hidden h-12 w-12 rounded-full lg:h-16 lg:w-16" :class="[isBlog ? 'sm:inline-block' : 'xs:inline-block']" src="@/assets/images/profile.jpg" alt="Portrait of Kirill Tregubov" />
        <h1 v-if="!isBlog" class="xs:ml-3 lg:ml-4 text-2xl lg:text-3xl xl:text-4xl font-black leading-none">
          Kirill Tregubov
        </h1>
        <div class="flex items-center" v-else>
          <h1 class="inline-block sm:ml-3 lg:ml-4 text-2xl lg:text-3xl xl:text-4xl font-black leading-none">
            <span class="inline xs:hidden">Kirill</span><span class="hidden xs:inline">Kirill Tregubov</span>
          </h1>
          <h2 class="ml-2 py-1 px-3 text-primary-400 bg-primary-100 rounded-md font-bold uppercase tracking-wide">
            Blog
          </h2>
        </div>
      </nuxt-link>

      <button class="relative z-20 text-neutral-500 hover:text-neutral-900 focus:outline-none focus:text-neutral-900 md:hidden" @click="menu = !menu">
        <svg v-if="!menu" class="h-8 w-8 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg v-else class="h-8 w-8 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </div>

    <button v-if="menu" @click="menu = false" tabindex="-1" class="block w-full fixed inset-0 bg-neutral-400 opacity-25 cursor-default md:hidden"></button>
    <div class="flex absolute left-0 w-full mt-2 z-10 bg-neutral-050 border border-neutral-100 shadow-md rounded-md md:static md:w-auto md:pt-0 md:mt-0 md:items-center md:bg-transparent md:border-none md:shadow-none" :class="[ !menu ? 'hidden md:flex' : '']">
      <ul class="flex w-full justify-around md:space-x-3 text-neutral-600 md:text-neutral-500 font-semibold text-lg md:text-base">
        <li v-if="isBlog" class="py-5 md:py-0">
          <nuxt-link to="/" @click="menu = false" class="px-4 py-4 md:py-2 focus:outline-none hover:text-neutral-900 focus:text-neutral-900">Home</nuxt-link>
        </li>
        <li class="py-5 md:py-0">
          <a v-if="isHome" href="#projects" @click="menu = false" class="px-4 py-4 md:py-2 focus:outline-none hover:text-neutral-900 focus:text-neutral-900">Projects</a>
          <nuxt-link v-else to="/#projects" @click="menu = false" class="px-4 py-4 md:py-2 focus:outline-none hover:text-neutral-900 focus:text-neutral-900">Projects</nuxt-link>
        </li>
        <li v-if="!isBlog" class="py-5 md:py-0">
          <nuxt-link to="/blog" @click="menu = false" class="px-4 py-4 md:py-2 focus:outline-none hover:text-neutral-900 focus:text-neutral-900">Blog</nuxt-link>
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
  computed: {
    isBlog () {
      return this.$nuxt.$route.path.includes('blog')
    },
    isHome () {
      return this.$nuxt.$route.name == 'index'
    }
  },
  methods: {
    away () {
      console.log('away')
      this.menu = false
    },
    handleEscape (event) {
      if (event.key === 'Esc' || event.key === 'Escape') {
        this.menu = false
      }
    }
  },
  created () {
    if (process.browser) {
      window.addEventListener('keydown', this.handleEscape)
    }
  },
  beforeDestroy() {
    if (process.browser) {
      window.removeEventListener('keydown', this.handleEscape)
    }
  }
}
</script>
