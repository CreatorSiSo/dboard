<script lang="ts">
  export default {
    data() {
      return {
        firstName: 'Simon',
        lastName: 'Sommer',
        gender: 'male',
        pictureSource: 'https://randomuser.me/api/portraits/men/3.jpg',
      };
    },
    methods: {
      async getRandomUser() {
        const res = await fetch('https://randomuser.me/api');
        const { results } = await res.json();

        this.firstName = results[0].name.first;
        this.lastName = results[0].name.last;
        this.gender = results[0].gender;
        this.pictureSource = results[0].picture.large;
      },
    },
  };
</script>

<template>
  <ul>
    <li><a href="">1231234</a></li>
    <li><a href="">4589785</a></li>
    <li><a href="">4054845</a></li>
    <li><a href="">5690ß85</a></li>
    <li><a href="">4545ß07</a></li>
    <li>{{ firstName }} {{ lastName }}</li>
  </ul>

  <div>
    <img :src="pictureSource" alt="Picture of the random user." />
    <div>Username: {{ firstName }} {{ lastName }}</div>
    <div>Gender: {{ gender }}</div>
  </div>

  <button type="button" v-on:click="getRandomUser()">Get Random User</button>
</template>

<style></style>
