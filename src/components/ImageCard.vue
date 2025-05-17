<template>
  <div class="block">
    <img :src="image.webformatURL" :alt="image.tags" />
    <button v-if="isFavorite" @click="$emit('remove', image)">Dislike</button>
    <button v-else @click="$emit('save', image)">Like</button>
  </div>
</template>

<script setup>
defineProps({
  image: Object,
  isFavorite: Boolean,
})
</script>

<style scoped>
.block {
  display: block;
  max-width: 440px;
}
.block img {
  border-radius: 4px;
  border: solid 3px #ffefd5;
  width: 100%;
}
.block button {
  background: #d7a45cd0;
  color: antiquewhite;
  border-radius: 6px;
  border: solid 1px antiquewhite;
  padding: 4px 0;
  width: 40%;
}
</style>
