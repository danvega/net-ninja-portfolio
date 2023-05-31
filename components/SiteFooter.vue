<script setup>
const links = [
  { name: 'GitHub', href: 'https://github.com', icon: 'entypo-social:github-with-circle' },
  { name: 'Twitter', href: 'https://twitter.com', icon: 'entypo-social:twitter' },
  { name: 'Facebook', href: 'https://facebook.com', icon: 'entypo-social:facebook' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'entypo-social:linkedin-with-circle' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'entypo-social:instagram' }
]
</script>

<template>
  <footer class="bg-gray-800">
    <section class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-6 text-gray-300 flex flex-row">
      <p class="flex-1">&copy; Your Name 2023. All Rights Reserved</p>
      <div class="flex flex-row justify-center gap-4 mb-4 mt-2">
        <a v-for="link in links" :key="link.name" :href="link.href">
          <Icon :name="link.icon" size="1.5rem" class="text-gray-300" />
        </a>
      </div>
    </section>
  </footer>
</template>
