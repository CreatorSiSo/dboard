<template>
  <h1>Actions</h1>
  <router-link
    v-for="action in actions"
    :key="action.id"
    :to="{ name: 'ActionDetails', params: { id: action.id } }"
  >
    <h2>
      {{ action.name }}
    </h2>
    <p>{{ action.details }}</p>
  </router-link>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Action } from '$types/types';

  export default defineComponent({
    data() {
      return {
        actions: <Action[]>[],
      };
    },
    mounted() {
      fetch(import.meta.env.VITE_API_URL + '/actions')
        .then((response) => response.json())
        .then((data) => (this.actions = data))
        .catch((error) => console.error(error.message));
    },
  });
</script>

<style></style>
