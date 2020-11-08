<template>
  <form @submit="onSubmit">
    <input type="text" placeholder="book title" v-model="title" required />
    <input type="text" placeholder="author" v-model="author" required />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'BookForm',
  data() {
    return {
      title: '',
      author: '',
    };
  },
  methods: {
    ...mapActions(['addBook']),
    onSubmit(e) {
      e.preventDefault();
      const newBook = {
        title: this.title,
        author: this.author,
      };
      this.addBook(newBook);
      this.title = '';
      this.author = '';
    },
  },
};
</script>

<style></style>
