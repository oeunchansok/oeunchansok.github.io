<template>
  <section class="max-w-7xl mx-auto px-6 py-16 pt-20">
    <!-- Gallery Title & Description -->
    <h1 class="text-4xl font-bold mb-8 text-center text-blue-700">
      Gallery
    </h1>
    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      A collection of my favorite photos — nature, sunsets, and my creative workspace.
    </p>

    <!-- Image Grid -->
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
      <div
        v-for="(image, index) in displayedImages"
        :key="index"
        class="overflow-hidden rounded-lg shadow-lg cursor-pointer group relative"
        @click="openLightbox(index)"
      >
        <img
          :src="image.src"
          class="w-full h-70 object-cover transform transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Toggle Show More / Less -->
    <div class="text-center mt-12">
      <button
        @click="toggleShowMore"
        class="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
      >
        {{ showAll ? "Show Less" : "Show More" }}
      </button>
    </div>

    <!-- vue-easy-lightbox component -->
    <VueEasyLightbox
      :visible="lightboxVisible"
      :imgs="imageSources"
      :index="lightboxIndex"
      @hide="lightboxVisible = false"
    >
      <!-- Optional: customize prev/next/close buttons via slots -->
    </VueEasyLightbox>
  </section>
</template>

<script setup>
import { ref, computed } from "vue"
import VueEasyLightbox from "vue-easy-lightbox"

const showAll = ref(false)
const lightboxVisible = ref(false)
const lightboxIndex = ref(0)

const someMoment = [
  { src: "/gallery/1.png" },
  { src: "/gallery/28.png" },
  { src: "/gallery/2.png" },
  { src: "/gallery/31.png" },
  { src: "/gallery/3.png" },
  { src: "/gallery/moon.png" },
  { src: "/gallery/4.png" },
  { src: "/gallery/family.png" },
  { src: "/gallery/mountain.png" },
  { src: "/gallery/5.png" },
  { src: "/gallery/trip.png" },
  { src: "/gallery/6.png" },
  { src: "/gallery/7.png" },
  { src: "/gallery/8.png" },
  { src: "/gallery/9.png" },
  { src: "/gallery/10.png" },
  { src: "/gallery/11.png" },
  { src: "/gallery/12.png" },
  { src: "/gallery/13.png" },
  { src: "/gallery/14.png" },
  { src: "/gallery/15.png" },
  { src: "/gallery/16.png" },
  { src: "/gallery/17.png" },
  { src: "/gallery/18.png" },
  { src: "/gallery/19.png" },
  { src: "/gallery/20.png" },
  { src: "/gallery/21.png" },
  { src: "/gallery/22.png" },
  { src: "/gallery/23.png" },
  { src: "/gallery/24.png" },
  { src: "/gallery/25.png" },
  { src: "/gallery/26.png" },
  { src: "/gallery/27.png" },
  { src: "/gallery/flower.png" },
  { src: "/gallery/29.png" },
  { src: "/gallery/30.png" },
]
const displayedImages = ref(someMoment.slice(0, 12))

function toggleShowMore() {
  showAll.value = !showAll.value
  displayedImages.value = showAll.value ? someMoment : someMoment.slice(0, 12)
}

const imageSources = someMoment.map((img) => img.src)

function openLightbox(index) {
  lightboxIndex.value = index
  lightboxVisible.value = true
}
// const displayedImages = computed(() =>
//   showAll.value ? someMoment : someMoment.slice(0, 12)
// )

// const imageSources = computed(() =>
//   someMoment.map((img) => img.src)
// )

// function toggleShowMore() {
//   showAll.value = !showAll.value
// }

// function openLightbox(index) {
//   lightboxIndex.value = index
//   lightboxVisible.value = true
// }
</script>

<style scoped>
/* Preserve your existing styles */
</style>
