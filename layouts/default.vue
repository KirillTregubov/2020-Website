<template>
  <div id="app" class="antialiased font-sans text-gray-900 bg-gray-50">
    <Header />
    <nuxt />
  </div>
</template>

<style lang="postcss">
.anchor-link {
  scroll-margin-top: 100px;
  scroll-snap-margin-top: 100px;
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

svg {
  display: initial;
}
</style>
