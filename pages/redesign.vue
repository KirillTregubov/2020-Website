<template>
  <Article title="Portfolio Redesign" date="Tuesday, Dec 10, 2019">
    <p>TL;DR: I made my portfolio nicer and updated some information to reflect changes in my life.</p>

    <h2>Why redesign my website?</h2>
    <p>I think it's crucial to have set goals in mind when deciding to refactor or redesign an existing project. One of
      the main goals I decided on when setting out to redesign my website was to update all the information on it to
      reflect the fact that I am halfway through my first year at the University of Toronto and that my life has changed
      quite drastically since the previous version of my website (which was made last summer).</p>
    <p>Another key goal that I set out to accomplish was making everything simpler, more presentable, and less heavy on
      both the eyes of the users as well as the processor of the computer rendering my website. My previous website's
      colour scheme suited an application well, but it looked off when implemented in a portfolio, and the proportions of
      various elements on the page were severely unbalanced.</p>

    <h2>Previous version</h2>
    <img class="big-image object-cover rounded" src="@/assets/images/old-website.jpg" alt="Image of old website">
    <p class="mt-1">An image of what my website looked like before this redesign.</p>

    <h2>First steps</h2>
    <p>Just like with any web project I create, I started by looking at other projects for inspiration. Since I was
      making a portfolio, I looked at portfolios of a few of my web developer friends, along with websites of industry
      professionals including
      <a class="inline-link" href="https://twitter.com/adamwathan" target="_blank" rel="noopener">Adam Wathan</a>,
      <a class="inline-link" href="https://twitter.com/steveschoger" target="_blank" rel="noopener">Steve Schoger</a>, and
      <a class="inline-link" href="https://twitter.com/stolinski" target="_blank" rel="noopener">Scott Tolinski</a>.</p>
    <p>As soon as I felt like I had a solid understanding of what I wanted to create, I opened up Adobe XD and dragged in
      an iPhone X artboard. Why? Because I live and breathe by mobile-first design, and because the smaller screen space
      forces me to be a bit more creative when planning layouts.</p>
    <p>After that, I started to look for a simple colour scheme that will fit the design style I decided on during the
      planning stage. I decided to go with 10 shades of vivid orange and 10 shades of a cool grey colour from the
      <a class="inline-link" href="https://refactoringui.com/book" target="_blank" rel="noopener">Refactoring UI Book</a> (that I highly
      recommend), as orange is my favourite colour and it's pretty much essential that an interface has some neutral
      palette.</p>

    <h2>Designing the prototype</h2>
    <p>Once all the preparation was done, I started designing the prototype for my website, creating all of the sections
      including my introduction and project sections on the mobile view first and then moving it over to bigger artboards
      such as the portrait and landscape iPad screen sizes and then small and large laptop screens.</p>
    <p>You can download the finished Adobe XD file
      <a class="inline-link" href="/files/portfolio-redesign.xd" target="_blank">here.</a></p>

    <h2>Creating the Vue app</h2>
    <p>With a prototype ready to be implemented, I opened Terminal on my Mac, updated all my npm packages, and ran the
      Vue CLI in an empty folder. While working on the prototype, I also decided to try using Tailwind CSS for the first
      time, so I opened the website and followed their
      <a class="inline-link" href="https://tailwindcss.com/docs/installation/" target="_blank" rel="noopener">installation guide</a>.</p>
    <p>After creating the project, I went ahead and started creating the home page following the prototype I created,
      making minor modifications along the way as I saw fit. I then updated the Vue Router to add pages for my ongoing
      projects and this redesign post, and then wrote up and styled those pages.</p>

    <h2>Tweaking the design</h2>
    <p>After I finished the website, I connected my Mac to a monitor and tested how the website looked across all the
      popular screen dimensions, tweaking the sizes of several elements to try and make things look more uniform on the
      page.</p>
    <p>I then made sure everything looked and worked the way I wanted it to in Safari, Chrome, and Mozilla, as those are
      the most popular browsers that the majority of users will access my website with.</p>

    <h2>Refactoring using Nuxt.js</h2>
    <p>My namecheap shared hosting plan expired, which pushed me to refactor my website again and move it to a different 
      hosting solution. I decided to go with
      <a class="inline-link" href="https://nuxtjs.org/" target="_blank" rel="noopener">Nuxt.js</a> and thus configured my
      project using 
      <a class="inline-link" href="https://nuxtjs.org/guide/installation/" target="_blank" rel="noopener">create-nuxt-app</a>
      and automatically added Tailwind CSS as a plugin. I then moved all of my files and everything worked seamlessly. The
      benefit of moving to Nuxt over keeping the app in Vue is that I can now statically generate my site which makes it load
      incredibly fast in most web browsers.
    </p>

    <h2>Hosting the website</h2>
    <p>I recently moved my redesigned website to
      <a class="inline-link" href="https://vercel.com/" target="_blank" rel="noopener">Vercel</a>, and have been hosting my
      statically generated Nuxt website using their Free plan.</p>
    
    <h2>Conclusion</h2>
    <p>Now you're reading this page on my website, and if everything is formatted properly, then that means that this
      project was a success. You can click my name at the top of the page to go to the
      <nuxt-link class="inline-link" to="/">home page</nuxt-link> and check out some more info about me.</p>
  </Article>
</template>

<script>
import Article from '@/components/Article.vue'

export default {
  name: 'Redesign',
  components: {
    Article
  }
}
</script>

<style lang="postcss">
.big-image {
  @apply w-full;
}

@screen md {
  .big-image {
    @apply w-auto;
    height: 28rem;
  }
}
</style>
