<template>
  <div>
    <h1>{{ action.name }}</h1>
    <h3>{{ action.details }}</h3>
    <span>id: {{ action.id }}</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Action } from '$types/types';

  export default defineComponent({
    props: ['id'],
    data() {
      return {
        action: <Action>{},
      };
    },
    mounted() {
      fetch(import.meta.env.VITE_API_URL + '/actions/' + this.id)
        .then((response) => response.json())
        .then((data) => (this.action = data))
        .catch((error) => console.error(error.message));
    },
  });
</script>

<style></style>
