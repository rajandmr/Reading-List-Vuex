<template>
  <li>
    <div class="title">{{ book.title }}</div>
    <div class="author">{{ book.author }}</div>
  </li>
</template>

<script>
export default {
  name: 'BookDetails',
  props: ['book'],
};
</script>

<style></style>
