<template>
  <div class="antialiased font-sans text-gray-900">
    <!-- <ProgressBar v-show="progressVisible" :value="progress" /> -->
    <Header />
    <nuxt keep-alive />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      progress: 0,
      progressVisible: false,
    }
  },
  methods: {
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
      // this.onScroll()
    })
  },
  created() {
    if (process.browser) {
      // this.onScroll()
      // window.addEventListener('scroll', this.onScroll);
    }
  },
  beforeDestroy() {
    if (process.browser) {
      // window.removeEventListener('scroll', this.onScroll);
    }
  }
}
</script>
