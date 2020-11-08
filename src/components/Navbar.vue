<template>
  <div class="navbar">
    <h1>Kalwar's Reading List</h1>
    <p>Currently you have {{ allBooks.length }} books to get through...</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Navbar',
  computed: {
    ...mapGetters(['allBooks']),
  },
};
</script>

<style></style>
