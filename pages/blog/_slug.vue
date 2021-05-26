<template>
  <div>
    <button class="fixed bottom-0 right-0 m-6 text-primary-400 rounded-full focus:outline-none focus:shadow-outline">
      <svg class="h-10 w-10 -m-1 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="divide-y divide-gray-200">
      <Container class="text-center pb-3 pt-36">
        <dl class="block xs:flex justify-center text-base leading-4 font-medium text-gray-500">
          <div>
            <dt class="sr-only">Published on</dt>
            <dd>
              <time :datetime="article.createdAt">{{ formatDate(article.createdAt) }}</time>
            </dd>
          </div>
          <p class="hidden xs:block mx-2">•</p>
          <dd class="mt-2 xs:mt-0">{{ article.timeToRead }} minute read</dd>
        </dl>
        <h1 class="inline-block text-3xl leading-8 py-3 font-bold text-gray-900 tracking-tight sm:text-4xl md:py-6 md:text-5xl">{{ article.title }}</h1>
      </Container>
      <Container>
        <div class="flex flex-col md:flex-row w-full">
          <article class="w-full pt-5 min-w-0 divide-y divide-gray-200 border-b border-gray-200 md:border-0">
            <div class="prose lg:prose-lg xl:prose-xl">
              <!-- <div v-if="tableOfContents.length > 0">
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
              </div> -->
              <nuxt-content :document="article" />
            </div>
            <div>
              <h4 class="py-6 text-lg text-gray">Like what you read? <nuxt-link to="/blog" class="inline-link">Read more ›</nuxt-link></h4>
            </div>
          </article>
          <div class="w-full md:w-1/4 sticky top-0 break-words ml-10 divide-y divide-gray-200">
            <div>
              <div v-if="next" class="my-6">
                <h2 class="text-sm tracking-wide font-medium uppercase text-gray-500">Next Article</h2>
                <nuxt-link :to="'/blog/' + next.slug" class="text-base font-medium text-primary-500">{{ next.title }}</nuxt-link>
              </div>
              <div v-if="prev" class="my-6">
                <h2 class="text-sm tracking-wide font-medium uppercase text-gray-500">Prev Article</h2>
                <nuxt-link :to="'/blog/' + prev.slug" class="text-base font-medium text-primary-500">{{ prev.title }}</nuxt-link>
              </div>
            </div>
            <div class="py-6">
              <h2 class="text-sm tracking-wide font-medium uppercase text-gray-500">Share article</h2>
              <!-- <client-only placeholder="Loading...">
                <twitter-button class="share-button--circle" :description="article.title" btnText />
                <facebook-button class="share-button--circle" :description="article.title" btnText />
              </client-only> -->
            </div>
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>
  
<script>
import BackToTop from '~/node_modules/vue-backtotop'
import TwitterButton from "~/node_modules/vue-share-buttons/src/components/TwitterButton"
import FacebookButton from "~/node_modules/vue-share-buttons/src/components/FacebookButton"

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
  async asyncData ({ $content, params, redirect }) {
    const article = await $content('/blog/', params.slug).fetch()
    .catch(e => {
      return redirect('/blog')
    })

    const [prev, next] = await $content('blog')
      .only(['title', 'slug', 'hidden'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },
  methods: {
    formatDate (date) {
      return this.$moment(date).format('dddd, MMMM Do, YYYY')
    },
    scrollToTop() {
      window.scrollTo(0,0);
    }
  },
  components: {
    BackToTop,
    TwitterButton,
    FacebookButton
  }
}
</script>

<style lang="postcss">
h4.toc {
  @apply my-0 !important;
}

.share-button {
  @apply ml-0 leading-none !important;
}

.share-button svg {
  @apply w-full h-full text-white fill-current !important;
}

article > *:first-child {
  @apply mt-0 !important;
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