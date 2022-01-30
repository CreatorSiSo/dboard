<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  import PageNavigation from '@/components/PageNavigation.vue';
</script>

<template>
  <header>
    <PageNavigation>
      <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'Actions' }">Actions</RouterLink>
      <RouterLink :to="{ name: 'Devices' }">Devices</RouterLink>
      <RouterLink :to="{ name: 'Settings' }">Settings</RouterLink>
    </PageNavigation>
  </header>
  <main>
    <RouterView></RouterView>
  </main>
  <footer></footer>
</template>

<style></style>
