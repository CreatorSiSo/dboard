<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { RouterLink } from 'vue-router';
  import { Action } from '@/types/types';

  const search = ref('');
  const actions = ref<Action[]>();

  fetch(import.meta.env.VITE_API_URL + '/actions')
    .then((response) => response.json())
    .then((data) => (actions.value = data))
    .catch((error) => console.error(error.message));

  const matchingActions = computed(() => {
    const lowerCaseSearch = search.value.toLowerCase().split(' ').join('');

    return actions.value?.filter((action) => {
      return (
        action.name
          .toLowerCase()
          .split(' ')
          .join('')
          .includes(lowerCaseSearch) ||
        action.details
          .toLowerCase()
          .split(' ')
          .join('')
          .includes(lowerCaseSearch) ||
        action.id.toString().includes(lowerCaseSearch)
      );
    });
  });
</script>

<template>
  <h1>Actions</h1>
  <input
    type="search"
    name="search-actions"
    placeholder="Search Actions"
    v-model="search"
  />
  <div v-for="action in matchingActions" :key="action.id">
    <h2>{{ action.name }}</h2>
    <p>{{ action.details }}</p>

    <RouterLink :to="{ name: 'Action', params: { id: action.id } }">
      Show more
    </RouterLink>
  </div>
</template>

<style></style>
