<template>
  <div>
    <Header />
    <article class="">
      <div class="text-center pb-6">
        <dl class="flex justify-center text-base leading-4 font-medium text-neutral-500">
          <div>
            <dt class="sr-only">Published on</dt>
            <dd>
              <time :datetime="article.createdAt">{{ formatDate(article.createdAt) }}</time>
            </dd>
          </div>
          <p class="mx-2">•</p>
          <dd>{{ article.timeToRead }} minute read</dd>
        </dl>
        <h1 class="inline-block text-3xl font-bold text-neutral-900 tracking-tight sm:text-4xl md:text-5xl">{{ article.title }}</h1>
      </div>
      <div class="flex w-full">
        <div class="w-1/5 break-words mr-10">
          <p>sidebarrrrrrrrrrrrrrrrrrrrrrrrrrrrr</p>
          <client-only placeholder="Loading...">
            <twitter-button class="share-button--circle" :description="article.title" btnText />
            <facebook-button class="share-button--circle" btnText />
            <linked-in-button class="share-button--circle" btnText />
          </client-only>
        </div>
        <div class="w-full min-w-0 prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
          <h4 class="toc">Table of Contents</h4>
          <ul>
            <li v-for="link of tableOfContents" :key="link.id">
              <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
              <ul v-if="link.children.length > 0">
                <li v-for="child of link.children" :key="child.id">
                  <NuxtLink :to="`#${child.id}`">{{ child.text }}</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
          <nuxt-content :document="article" />
        </div>
      </div>
      
      <!-- <pre>{{ article }}</pre> -->
    </article>
  </div>
</template>

<script>
import TwitterButton from "~/node_modules/vue-share-buttons/src/components/TwitterButton"
import FacebookButton from "~/node_modules/vue-share-buttons/src/components/FacebookButton"
import LinkedInButton from "~/node_modules/vue-share-buttons/src/components/LinkedInButton"

export default {
  layout: 'blogPost',
  head() {
    return {
      title: this.article.title + ' - Kirill Tregubov',
      meta: [
        { hid: 'description', property: 'description', content: this.article.description },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:image', property: 'og:image', content: 'https://kirilltregubov.com/_nuxt/img/3ac6461.jpg' },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
        { hid: 'og:url', property: 'og:url', content: 'https://kirilltregubov.com' + this.$route.fullPath }
      ]
    }
  },
  data: function () {
    return {
      progress: 0,
      progressVisible: false
    }
  },
  async asyncData ({ $content, params, redirect }) {
    const article = await $content('/blog/', params.slug).fetch()
    .catch(e => {
      return redirect('/blog')
      // error({ statusCode: 404, specialMessage: 'Blog post not found' })
    })

    const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },
  computed: {
    tableOfContents () {
      var toc = []
      this.article.toc.forEach(element => {
        if (element.depth === 2) {
          element.children = []
          toc.push(element)
        } else {
          toc[toc.length - 1].children.push(element)
        }
      }
      );
      return toc
    },
    currentPath () {
      return $nuxt.$route.path
    }
  },
  methods: {
    formatDate (date) {
      return this.$moment(date).format('dddd, MMMM Do, YYYY')
    },
    onScroll () {
      var progress = 100 * window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      if (progress > 100) {
        this.progress = 100
      } else if (progress < 0) {
        this.progress = 0
      } else {
        this.progress = progress
      }
    }
  },
  mounted() {
    window.onNuxtReady(() => {
      this.progressVisible = true
      this.onScroll()
    })
  },
  created() {
    if (process.browser) {
      this.onScroll()
      window.addEventListener('scroll', this.onScroll);
    }
  },
  beforeDestroy() {
    if (process.browser) {
      window.removeEventListener('scroll', this.onScroll);
    }
  },
  components: {
    TwitterButton,
    FacebookButton,
    LinkedInButton
  }
}
</script>

<style lang="postcss">
h4.toc {
  margin-bottom: 0 !important;
}

.share-button {
  @apply ml-0 leading-none !important;
}

.share-button svg {
  @apply w-full h-full text-white fill-current !important;
}

.nuxt-content img {
  @apply rounded;
}
@screen sm {
  .nuxt-content img {
    @apply rounded-md;
  }
}
@screen xl {
  .nuxt-content img {
    @apply rounded-lg;
  }
}
</style>