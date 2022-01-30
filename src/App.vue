<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import PageNavigation from '@/components/PageNavigation.vue';
</script>

<template>
  <PageNavigation
    :homePage="{ name: 'Home' }"
    :pages="[{ name: 'Actions' }, { name: 'Devices' }, { name: 'Settings' }]"
  />
  <main>
    <RouterView></RouterView>
  </main>
  <footer></footer>
</template>

<style>
<style></style>

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
