<template>
  <header class="bg-white shadow-md fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <NuxtLink to="/">
          <div class="flex-shrink-0 text-xl font-bold text-blue-600">
            AkemiSite 🧑‍💻
          </div>
        </NuxtLink>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-6">
          <NuxtLink
            to="/"
            :class="[
              'hover:text-blue-600',
              route.path === '/' ? 'text-blue-600 font-semibold' : 'text-gray-700'
            ]"
          >Home</NuxtLink>

          <NuxtLink
            to="/about"
            :class="[
              'hover:text-blue-600',
              route.path === '/about' ? 'text-blue-600 font-semibold' : 'text-gray-700'
            ]"
          >About Me</NuxtLink>

          <NuxtLink
            to="/projects"
            :class="[
              'hover:text-blue-600',
              route.path === '/projects' ? 'text-blue-600 font-semibold' : 'text-gray-700'
            ]"
          >Projects</NuxtLink>

          <NuxtLink
            to="/gallery"
            :class="[
              'hover:text-blue-600',
              route.path === '/gallery' ? 'text-blue-600 font-semibold' : 'text-gray-700'
            ]"
          >Gallery</NuxtLink>

          <NuxtLink
            to="/contact"
            :class="[
              'hover:text-blue-600',
              route.path === '/contact' ? 'text-blue-600 font-semibold' : 'text-gray-700'
            ]"
          >Contact</NuxtLink>
        </nav>

        <!-- Mobile Hamburger -->
        <div class="md:hidden">
          <button @click="menuOpen = !menuOpen" class="text-gray-700 focus:outline-none">
            <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden bg-white border-t">
      <div class="px-4 py-3 space-y-2">
        <NuxtLink
          to="/"
          @click="menuOpen = false"
          :class="[
            'block hover:text-blue-600',
            route.path === '/' ? 'text-blue-600 font-semibold' : 'text-gray-700'
          ]"
        >Home</NuxtLink>

        <NuxtLink
          to="/about"
          @click="menuOpen = false"
          :class="[
            'block hover:text-blue-600',
            route.path === '/about' ? 'text-blue-600 font-semibold' : 'text-gray-700'
          ]"
        >About Me</NuxtLink>

        <NuxtLink
          to="/projects"
          @click="menuOpen = false"
          :class="[
            'block hover:text-blue-600',
            route.path === '/projects' ? 'text-blue-600 font-semibold' : 'text-gray-700'
          ]"
        >Projects</NuxtLink>

        <NuxtLink
          to="/gallery"
          @click="menuOpen = false"
          :class="[
            'block hover:text-blue-600',
            route.path === '/gallery' ? 'text-blue-600 font-semibold' : 'text-gray-700'
          ]"
        >Gallery</NuxtLink>

        <NuxtLink
          to="/contact"
          @click="menuOpen = false"
          :class="[
            'block hover:text-blue-600',
            route.path === '/contact' ? 'text-blue-600 font-semibold' : 'text-gray-700'
          ]"
        >Contact</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
const route = useRoute()
</script>
