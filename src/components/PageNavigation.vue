<script setup lang="ts">
  import { LocationAsRelativeRaw, RouterLink } from 'vue-router';

  defineProps<{
    homePage: LocationAsRelativeRaw;
    pages: LocationAsRelativeRaw[];
  }>();
</script>

<template>
  <nav class="p-6 text-slate-100 bg-neutral-800 flex gap-6">
    <RouterLink :to="homePage">dBoard</RouterLink>
    <span class="flex-grow flex gap-2">
      <RouterLink
        v-for="page in pages"
        :key="page.name"
        :to="page"
        class="page-link px-3 py-1 rounded-md bg-neutral-700/90 hover:bg-neutral-700/70"
      >
        {{ page.name }}
      </RouterLink>
    </span>
    <input type="search" placeholder="Search page" />
    <span>Account</span>
  </nav>
</template>

<style>
  .page-link.router-link-active,
  .page-link.router-link-active:hover {
    @apply bg-teal-700;
  }
</style>
