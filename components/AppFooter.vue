<template>
  <footer class="bg-blue-50 border-t mt-16">
    <div class="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">

      <!-- About -->
      <div>
        <h4 class="font-semibold text-gray-900 mb-2">AkemiSite</h4>
        <p class="text-sm">
          Built with ❤️ to share my journey, <br> showcase projects, and express ideas.  
        </p>
      </div>

      <!-- Menu Links -->
      <div>
        <h4 class="font-semibold text-gray-900 mb-2">Quick Links</h4>
        <ul class="space-y-1 text-sm">
          <li><NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-blue-600">About Me</NuxtLink></li>
          <li><NuxtLink to="/projects" class="hover:text-blue-600">Projects</NuxtLink></li>
          <li><NuxtLink to="/gallery" class="hover:text-blue-600">Gallery</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-blue-600">Contact</NuxtLink></li>
        </ul>
      </div>

      <!-- Contact / Social -->
      <div>
        <h4 class="font-semibold text-gray-900 mb-2">Connect</h4>
        <ul class="space-y-1 text-sm">
          <li><a href="mailto:youremail@example.com" class="hover:text-blue-600">Email Me</a></li>
          <li><a href="https://github.com/your-github" target="_blank" class="hover:text-blue-600">GitHub</a></li>
          <li><a href="https://twitter.com/your-twitter" target="_blank" class="hover:text-blue-600">Twitter</a></li>
        </ul>
      </div>

    </div>

    <div class="text-center text-xs text-gray-500 py-4 border-t">
      © 2025 AkemiSite. All rights reserved.
    </div>
  </footer>
</template>
