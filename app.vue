<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-91LV7TYNYN',
      async: true
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-91LV7TYNYN');
      `
    }
  ],
  title: "Welcome Akime's Blog 🧑‍💻",   
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/log.png'  
    }
  ]
})
</script>