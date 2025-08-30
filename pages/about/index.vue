<template>
  <section class="bg-gradient-to-b from-blue-50 to-white py-16 pt-20">
    <div class="container mx-auto px-6 max-w-6xl space-y-14">

      <!-- Header -->
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-8 text-center text-blue-700">About Me</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Get to know me better — my habits, what I love, and how I spend my free time.
        </p>
      </div>

      <!-- Profile & Intro -->
      <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-10 space-y-6 md:space-y-0 bg-white rounded-2xl shadow-lg p-8">
        <img
          :src="img"
          alt="akime Profile"
          class="w-64 h-64 rounded-lg object-cover border-2 border-blue-300 shadow-md"
        />
        <div class="space-y-4">
          <p class="text-lg text-gray-700 leading-relaxed">
            <span class="font-bold text-blue-600 text-2xl"> Hi! I’m Akime (あけみ).</span> <br>
             I'm a web developer and tech lover from Cambodia 🇰🇭. 
            I love creating websites using Nuxt, Vue, Node JS, Laravel, JavaScript, Blade, Vuetify, Bootstrap Vue, Bootstrap, Sass, and Tailwind. I enjoy learning, sharing, and building beautiful things on the web.
          </p>

        </div>
      </div>

      <!-- My Habits -->
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h3 class="text-2xl font-semibold text-blue-600 mb-4">My Habits</h3>
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Write in my journal every night 📝</li>
          <li>Take quiet evening walks 🌙</li>
          <li>Read or watch something educational daily 📚</li>
        </ul>
      </div>

      <!-- Free Time -->
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h3 class="text-2xl font-semibold text-blue-600 mb-4">What I Do in My Free Time</h3>
        <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
          <li>Write blog posts about coding and life 🧑‍💻</li>
          <li>Explore and take photos of nature and sunsets 🌅</li>
          <li>Write and read poems to express my feelings 📝</li>
          <li>Listen to calming instrumental music 🎵🎶</li>
          <li>Watch inspiring movies or anime 📽️</li>
          <li>Draw the pictue ✏️ </li>
        </ul>
      </div>

      <!-- Likes -->
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h3 class="text-2xl font-semibold text-blue-600 mb-4">What I Like</h3>
        <p class="text-lg text-gray-700 leading-relaxed">
          I love the color <span class="font-bold text-blue-500">blue</span>, quiet nights under the stars 🌌, full moons 🌕, and peaceful places that help me think and create.
        </p>
      </div>

      <!-- Picture Gallery -->

      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h3 class="text-2xl font-semibold text-blue-600 mb-6">Some Moments I Love</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="overflow-hidden rounded-lg shadow-lg cursor-pointer group relative"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-lg font-semibold"
          >
            {{ image.title }}
          </div>
        </div>
      </div>

      </div>
      <!-- <div class="bg-white rounded-2xl shadow-lg p-8">
        <img :src="img" alt="">
        <h3 class="text-2xl font-semibold text-blue-600 mb-6">Some Moments I Love</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(imgs, index) in someMoment" :key="index">
            <img
              :src="imgs.img"
              alt="Nature"
              class="rounded-xl shadow hover:scale-105 transition-transform duration-300 object-cover w-full h-48"
            />
          </div>
        </div>

      </div> -->

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const img = " ./gallery/working.png"
const images = [
  { 
    src : " ./drawing.png",
    alt: 'Lush green forest',
    title: 'Drawing and a Poem',
  },
  { 
    src : " ./family.png",
    alt: 'Lush green forest',
    title: 'eats with family',
  },
  {
    src : " ./moon.png",
    alt: 'Lush green forest',
    title: 'Moon and Stars',
  },
  {
    src : " ./music.png",
    alt: 'Lush green forest',
    title: 'Listening to Music',
  },
  {
    src : " ./rain.png",
    alt: 'Lush green forest',
    title: 'Rainy Days',
  },
  {
    src : " ./silence.png",
    alt: 'Lush green forest',
    title: 'Peace and Silence',
  },
  {
    src : " ./sunrise.png",
    alt: 'Lush green forest',
    title: 'Sunset',
  },
  {
    src : " ./walk.png",
    alt: 'Lush green forest',
    title: 'Walking in Nature',
  },
  {
    src : " ./write.png",
    alt: 'Lush green forest',
    title: 'Writing and drinking ',
  },
]

</script>

<style scoped>
/* Optional: if you want smoother shadow on hover */
/* img:hover { box-shadow: 0 10px 20px rgba(0,0,0,0.2); } */
</style>
