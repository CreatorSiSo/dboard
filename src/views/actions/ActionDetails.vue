<template>
  <h1>ActionDetails</h1>
  <div>action: {{ id }}</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: ['id'],
  });
</script>

<style></style>
