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

  export default defineComponent({
    data() {
      return {
        actions: [
          {
            name: 'Toggle Bedroom Lights',
            id: 6023431,
            details: 'sdufho ohafp asdfhphp',
          },
          {
            name: 'Toggle Pizza Oven',
            id: 9453624,
            details: 'sdufho ohafp asdfhphp',
          },
          {
            name: 'Killswitch House',
            id: 2384174,
            details: 'Turns all IoT devices in the house off.',
          },
        ],
      };
    },
  });
</script>

<style></style>
