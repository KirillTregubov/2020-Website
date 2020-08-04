<template>
<div class="antialiased font-sans">
  <ProgressBar v-show="progressVisible" :value="progress" />
  <nuxt class="max-w-4xl xl:max-w-5xl m-auto p-6 md:px-8" />
</div>
</template>

<script>
export default {
  data: function () {
    return {
      progress: 0,
      progressVisible: false,
    }
  }
}
</script>

<style lang="postcss">
/*a:focus {
  @apply outline-none shadow-outline;
}*/

/* body {
  @apply text-neutral-900;
  margin: 0;
}

.inline-link {
  @apply relative font-semibold;
}

.inline-link::after {
  @apply absolute w-full bottom-0 left-0 font-semibold;
  background: linear-gradient(to top right, theme('textColor.primary.600'), theme('textColor.primary.300'));
  content: '';
  transform: scaleX(1);
  height: 2px;
  transform-origin: bottom left;
  transition: transform .3s ease-in-out;
}

.inline-link:hover::after {
  transform: scaleX(0);
  transform-origin: bottom right;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
} */
</style>
