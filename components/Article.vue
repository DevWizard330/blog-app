<template>
    <article class="mb-6">
      <h1 class="text-3xl font-bold">{{ title }}</h1>
      <p class="text-gray-600">{{ date }} — {{ readTime }}</p>
      <p class="mt-2">{{ teaser }}</p>
      <span class="inline-block bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded mt-2">{{ tag }}</span>
      <div class="flex items-center mt-2">
        <img :src="authorAvatar" class="w-8 h-8 rounded-full mr-2" alt="Author" />
        <span class="text-gray-600">{{ author }}</span>
      </div>
      <button class="mt-2 bg-black text-white px-4 py-2 rounded">Continue Reading</button>
    </article>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    date: String,
    readTime: String,
    teaser: String,
    tag: String,
    author: String,
    authorAvatar: String,
  });
  </script>