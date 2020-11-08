<template>
  <div>
    <div v-if="allBooks.length" class="book-list">
      <ul>
        <li v-for="book in allBooks" :key="book.id">
          <BookDetails v-bind:book="book" />
        </li>
      </ul>
    </div>
    <div v-else class="empty">
      No books to read
    </div>
  </div>
</template>

<script>
// System Modules
import { mapGetters, mapActions } from 'vuex';

// Component modules
import BookDetails from './BookDetails';

export default {
  name: 'BookList',
  components: {
    BookDetails,
  },
  methods: {
    ...mapActions(['fetchBooks']),
  },
  computed: {
    ...mapGetters(['allBooks']),
  },
  created() {
    this.fetchBooks();
  },
};
</script>

<style></style>
