---
title: Getting Started with Nuxt 3
description: This is a quick introduction on how to get started with Nuxt 3.
date: 2023-05-24
cover: clement-helardot-95YRwf6CNw8-unsplash.jpg
tags:
  - nuxt
  - vue
---

# Getting Started with Nuxt 3

This is a quick introduction on how to get started with Nuxt 3. To get started you need to have Node.js installed on your machine. You can download it from [here](https://nodejs.org/en/download/). Once you have Node.js installed, you can install Nuxt 3 using the following command:

```bash
npx nuxi init <project-name>
cd <project-name>
npm i
```

Next you can begin to build out your application by using `app.vue`.

```vue
<script setup></script>

<template>
  <div class="flex flex-col min-h-screen">
    <SiteHeader />
    <main class=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grow items-start w-full">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>
```
