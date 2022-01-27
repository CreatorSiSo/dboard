<template>
  <header>
    <PageNavigation>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Actions' }">Actions</router-link>
      <router-link :to="{ name: 'Devices' }">Devices</router-link>
      <router-link :to="{ name: 'Settings' }">Settings</router-link>
    </PageNavigation>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer></footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import PageNavigation from '$components/PageNavigation.vue';

  export default defineComponent({
    components: {
      PageNavigation,
    },
    setup() {
      return {};
    },
    data() {
      return {};
    },
    methods: {},
  });
</script>

<style></style>
