<template>
  <div class="project mt-5 md:mt-6 first:mt-2 overflow-hidden bg-neutral-050 rounded-lg shadow-lg">
    <img class="object-cover h-48 md:h-56 xl:h-64 w-full" :src="getImage(name)" :alt="'Image of ' + name">
    <div class="m-4 mb-3">
      <h2 class="text-sm xl:text-base text-neutral-500 leading-tight">{{getStack}}</h2>
      <h1 class="mt-3 text-3xl font-semibold leading-none">{{name}}</h1>
      <p class="mt-1 md:mt-2 text-base xl:text-lg text-neutral-700">{{description}}</p>
      <div class="flex items-center mt-3">
        <div>
          <a class="btn primary" :href="demo" target="_blank" rel="noopener" v-if="demo">Demo</a>
          <a class="btn primary" :href="source" target="_blank" rel="noopener" v-else-if="source">Source Code</a>
          <nuxt-link class="btn primary" :to="info" v-else-if="isLive">Read Article</nuxt-link>
          <a class="btn disabled" v-else>Coming Soon</a>
        </div>
        <div class="ml-auto" v-if="!isLive">
          <a class="btn inline" :href="source" target="_blank" rel="noopener" v-if="demo && source">Source Code ›</a>
          <nuxt-link class="btn inline" :to="info" v-else-if="info">Read Article ›</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  computed: {
    getStack () {
      return this.stack.join(' • ')
    }
  },
  methods: {
    getImage (url) {
      var images = require.context('../assets/images/', false, /\.jpg$/)
      return images('./' + url.replace(/\s+/g, '-').toLowerCase() + '.jpg')
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    stack: {
      type: Array,
      required: true
    },
    demo: {
      type: String,
      required: false
    },
    source: {
      type: String,
      required: false
    },
    info: {
      type: String,
      required: false
    },
    isLive: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style lang="postcss">
a.btn {
  @apply inline-block px-4 py-2 rounded-lg text-base leading-none;
  color: theme('textColor.neutral.500');
}

a.btn.primary {
  background-color: theme('textColor.neutral.900');
  color: theme('textColor.neutral.100');
}

a.btn.inline {
  @apply px-0 text-sm;
}

a.btn.disabled {
  @apply select-none cursor-not-allowed;
  background-color: theme('textColor.neutral.100');
  color: theme('textColor.neutral.600');
}

@screen md {
  .project {
    @apply inline-block align-top;
    width: calc(50% - 1rem);
  }

  .project:nth-child(2n) {
    @apply ml-8;
  }

  .project:nth-child(2) {
    @apply mt-2;
  }
}

@screen xl {
  a.btn {
    @apply text-lg;
  }

  a.btn.inline {
    @apply text-base;
  }
}
</style>
