<template>
  <div>
    <div v-if="showToast" class="toast">Added to favorites!</div>

    <div class="image-grid">
      <ImageCard
        v-for="image in images"
        :key="image.id"
        :image="image"
        @save="saveToFavorites"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ImageCard from './ImageCard.vue'
import { fetchImages } from './utils/api'
import { useToast } from 'vue-toastification'

const toast = useToast()
const images = ref([])
const showToast = ref(false)
let page = 1

const loadMore = async () => {
  const newImages = await fetchImages(page)
  images.value.push(...newImages)
  page++
}

const saveToFavorites = (image) => {
  const saved = JSON.parse(localStorage.getItem('favorites')) || []
  if (!saved.find((img) => img.id === image.id)) {
    saved.push(image)
    localStorage.setItem('favorites', JSON.stringify(saved))
    toast.success('Image added to favorites!')
  } else {
    toast.info('This image is already in favorites.')
  }
}

// const triggerToast = () => {
//   showToast.value = true
//   setTimeout(() => {
//     showToast.value = false
//   }, 2000)
// }

onMounted(() => {
  loadMore()
})
</script>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #48bb78;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 999;
}
.image-grid{
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
