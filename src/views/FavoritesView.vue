<template>
  <div>
    <h2>My Favorites</h2>
    <div class="image-grid">
      <ImageCard
        v-for="image in favorites"
        :key="image.id"
        :image="image"
        :isFavorite="true"
        @remove="removeFromFavorites"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ImageCard from '../components/ImageCard.vue'

const favorites = ref([])

const loadFavorites = () => {
  favorites.value = JSON.parse(localStorage.getItem('favorites')) || []
}

const removeFromFavorites = (imageToRemove) => {
  favorites.value = favorites.value.filter((img) => img.id !== imageToRemove.id)
  localStorage.setItem('favorites', JSON.stringify(favorites.value))
}

onMounted(() => {
  loadFavorites()
})
</script>
<style>
h2{
  text-align: center;
  margin-top: 80px;
}
.image-grid {
  position: absolute;
  top: 70px;
  left: 50px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin-top: 50px;
  width: 100%;
  gap: 40px;
}
</style>
