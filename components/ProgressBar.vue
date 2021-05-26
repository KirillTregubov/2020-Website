<template>
  <transition name="fade">
    <div class="fixed top-0 left-0 h-2 w-full overflow-hidden z-20">
      <div id="progressbar" class="h-full bg-primary-300 transition-width duration-150 ease-in-out" :style="{ width: `${value}%` }"></div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="postcss">
#progressbar {
  transition: width ease-in-out;
}
</style>