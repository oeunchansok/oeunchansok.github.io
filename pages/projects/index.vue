<template>
  <section class="max-w-7xl mx-auto px-6 py-16 pt-20">
    <h1 class="text-4xl font-bold mb-8 text-center text-blue-700">Projects</h1>
    <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      Here are some of my favorite projects, showcasing my skills and creativity.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-48 object-cover"
          loading="lazy"
        />
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2 text-gray-800">{{ project.title }}</h2>
          <p class="text-gray-600 mb-4">{{ project.description }}</p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tech, index) in project.technologies"
              :key="index"
              class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: ' Web Application',
    description:
      'A full-featured website built to showcase modern web development skills, featuring a responsive and interactive design. Developed using Laravel with Blade templates for the frontend.',
    image: './web.png',
    technologies: ['Laravel', 'PHP', 'Blade', 'Tailwind CSS', 'Sass', 'Bootstrap', 'JavaScript'],
  },
  {
    title: 'Development Manager Web System',
    description:
      'A comprehensive web-based management system designed to streamline school and staff operations, including student records, staff management, class scheduling, and reporting. Built with a modern, intuitive UI for efficient daily use.',
    image: './system.png',
    technologies: ['Node.js', 'Laravel', 'Vue 3', 'Nuxt 3'],
  },
  {
    title: 'E-Commerce Web Application',
    description:
      'A fully functional e-commerce website featuring product management, shopping cart, user authentication, and responsive design.',
    image: './ecommer.png',
    technologies: ['Laravel', 'Nuxt 3', 'Bootstrap Vue', 'JavaScript'],
  }
]
</script>
