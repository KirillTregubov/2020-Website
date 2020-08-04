<template>
  <nav class="w-full top-0">
    <div class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        
      <div class="pl-4">
        <nuxt-link to="/" class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"  href="#"> 
          Kirill Tregubov
        </nuxt-link>
      </div>

      <div class="block lg:hidden pr-4">
        <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>

      <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 md:bg-transparent z-20" id="nav-content">
        <ul class="lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <a class="inline-block py-2 px-4 text-gray-900 font-bold no-underline" href="#">Active</a>
          </li>
          <li class="mr-3">
            <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="#">link</a>
          </li>
          <li class="mr-3">
            <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="#">link</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: function () {
    return {
      header: false,
      progress: 0,
    }
  },
  // props: {
  //   progress: {
  //     type: Number
  //   }
  // },
  computed: {
    hasScrolled () {
      if (process.browser) {
        console.log(window.scrollY !== 0)
        return window.scrollY !== 0;
      }
    }
  }
}
</script>
