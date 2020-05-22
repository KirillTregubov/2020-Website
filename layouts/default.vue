<template>
  <div id="app" class="font-body">
    <nuxt />
  </div>
</template>

<style lang="postcss">
@font-face {
  font-family: 'Proxima';
  font-weight: 400;
  src: url('/fonts/ProximaNova-Regular.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Proxima';
  font-weight: 600;
  src: url('/fonts/ProximaNova-Semibold.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Proxima';
  font-weight: 700;
  src: url('/fonts/ProximaNova-Bold.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Proxima';
  font-weight: 900;
  src: url('/fonts/ProximaNova-Black.woff') format('woff');
  font-display: swap;
}

body {
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
</style>
