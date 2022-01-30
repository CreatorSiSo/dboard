<script setup lang="ts">
  import { ref } from 'vue';
  import { Action } from '@/types/types';

  const props = defineProps(['id']);

  const action = ref<Action>();

  fetch(import.meta.env.VITE_API_URL + '/actions/' + props.id)
    .then((response) => response.json())
    .then((data) => (action.value = data))
    .catch((error) => console.error(error.message));
</script>

<template>
  <div v-if="action">
    <h1>{{ action.name }}</h1>
    <h3>{{ action.details }}</h3>
    <span>id: {{ action.id }}</span>
  </div>
  <div v-else>Loading Action...</div>
</template>

<style></style>
