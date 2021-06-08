<template>
  <header class="fixed top-0 bg-gray-900 bg-opacity-95 transform-gpu text-gray-050 w-full z-10">
    <Container class="block justify-between select-none md:flex">
      <div class="flex justify-between items-center z-20 xl:-ml-24">
        <!-- isBlog ? '/blog' : '/'  -->
        <nuxt-link :to="'/'" class="flex items-center group" v-on:click.native="scrollToTop(isBlog)">
          <img class="hidden h-12 w-12 rounded-full lg:h-16 lg:w-16" :class="[isBlog ? 'sm:inline-block' : 'xs:inline-block']" src="@/assets/images/profile.jpg" alt="Portrait of Kirill Tregubov" />
          <h1 v-if="!isBlog" class="xs:ml-3 xl:ml-8 text-2xl lg:text-3xl xl:text-4xl font-black leading-none">
            Kirill Tregubov
          </h1>
          <div class="flex items-center" v-else>
            <h1 class="inline-block sm:ml-3 xl:ml-8 text-2xl lg:text-3xl xl:text-4xl font-black leading-none">
              <span class="inline xs:hidden">Kirill</span><span class="hidden xs:inline">Kirill Tregubov</span>
            </h1>
            <h2 class="ml-3 py-1 px-3 text-primary-200 bg-primary-900 rounded-md font-bold uppercase tracking-wide">
              Blog
            </h2>
          </div>
        </nuxt-link>

        <button class="relative z-20 text-gray-200 hover:text-gray-100 md:hidden" @click="menu = !menu">
          <svg v-if="!menu" class="h-8 w-8 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <svg v-else class="h-8 w-8 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>

      <div class="smooth transform-gpu flex w-full z-10 text-gray-100 md:text-gray-200 rounded-md md:w-auto md:mt-0 md:items-center md:opacity-100" :class="[ !menu ? 'collapsed' : '']">
        <ul class="mt-6 md:mt-0 flex w-full justify-around md:space-x-3 font-semibold text-lg md:text-base">
          <!-- <li v-if="isHome" class="py-2 md:py-0">
            <a href="#experience" @click="menu = false" class="px-4 py-4 md:py-2 focus:outline-none hover:text-gray-50 focus:text-gray-50">Experience</a>
          </li> -->
          <li class="py-2 md:py-0">
            <a v-if="isHome" href="#projects" @click="menu = false" class="px-4 py-4 md:py-2 focus:outline-none hover:text-gray-50 focus:text-gray-50">Projects</a>
            <nuxt-link v-if="latestArticle" :to="latestArticle" @click="menu = false" class="px-4 py-4 md:py-2 focus:outline-none hover:text-gray-50 focus:text-gray-50">Latest Article</nuxt-link>
          </li>
          <li class="py-2 md:py-0">
            <!-- <nuxt-link v-if="isHome" to="/blog" @click="menu = false" class="px-4 py-4 md:py-2 focus:outline-none hover:text-gray-50 focus:text-gray-50">Blog</nuxt-link> -->
            <nuxt-link v-if="!isHome" to="/" @click="menu = false" class="px-4 py-4 md:py-2 focus:outline-none hover:text-gray-50 focus:text-gray-50">About Me</nuxt-link>
          </li>
        </ul>
      </div>
    </Container>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      latestArticle: null,
      menu: false
    }
  },
  async fetch() {
    const article = await this.$content('blog')
      .only([])
      .where({ hidden: { $ne: true } })
      .sortBy('createdAt', 'desc')
      .limit(1)
      .fetch()
    this.latestArticle = article[0].path
  },
  computed: {
    isArticle () {
      return this.$nuxt.$route.path.slice(this.$nuxt.$route.path.indexOf('blog') + 5).length > 0;
    },
    isBlog () {
      return this.$nuxt.$route.path.includes('blog')
    },
    isHome () {
      return this.$nuxt.$route.name == 'index'
    }
  },
  methods: {
    away () {
      this.menu = false
    },
    handleEscape (event) {
      if (event.key === 'Esc' || event.key === 'Escape') away()
    },
    scrollToTop(isBlog) {
      if (!isBlog) {
        if (this.menu) this.menu = false
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth'
        });
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

<style lang="postcss" scoped>
@media (max-width : 767px) {
  .smooth {
    will-change: max-height, opacity;
    transition: all 350ms ease-in-out;
    max-height: 650px;
    opacity: 1;
    margin-top: -1px;
  }
}
@media (max-width : 767px) {
  .smooth.collapsed {
    max-height: 0px;
    overflow: hidden;
    opacity: 0.3;
  }
}

</style>