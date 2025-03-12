<template>
    <div class="container mx-auto p-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <main class="md:col-span-2">
          <Article
            v-for="(article, index) in articles"
            :key="index"
            :title="article.title"
            :date="article.date"
            :readTime="article.readTime"
            :teaser="article.teaser"
            :tag="article.tag"
            :author="article.author"
            :authorAvatar="article.authorAvatar"
          />
        </main>
        <aside class="md:col-span-1">
          <h2 class="text-2xl font-bold border-b">Featured Articles</h2>
          <ul class="mt-2">
            <li v-for="(item, index) in featured" :key="index">
              <a href="#" class="text-blue-600">{{ item.title }}</a>
              <span class="text-gray-600">{{ item.date }}</span>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Article from '~/components/Article.vue';
  
  const articles = ref([
    {
      title: 'AiOS Dispatch 2',
      date: 'March 06, 2025',
      readTime: '5 min read',
      teaser: 'Discover the latest in AI and tech...',
      tag: 'AiOS',
      author: 'Rudrank Riyam',
      authorAvatar: '/profile.jpg',
    },
    {
      title: 'AiOS Dispatch 1',
      date: 'February 28, 2025',
      readTime: '3 min read',
      teaser: 'AiOS Dispatch 1: Claude 3.7 Sonnet drops with killer UI generation for iOS devs...',
      tag: 'AiOS',
      author: 'Rudrank Riyam',
      authorAvatar: '/profile.jpg',
    },
  ]);
  
  const featured = ref([
    {
      title: 'Exploring MLX Swift: Getting Started with Tool Use',
      date: 'Feb 14, 2025',
    },
    {
      title: 'Exploring AI: Cosine Similarity for RAG using Accelerate and Swift',
      date: 'Dec 22, 2024',
    },
  ]);
  </script>