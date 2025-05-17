<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class="base">
      <a href="/">Home Page</a>
      <a href="/favorites">Favourites</a>
    </div>
    <router-view />
  </div>
</template>

<style>
.base {
  position: absolute;
  top: 20px;
  left: 50px;
  display: flex;
  justify-content: start;
}
a {
  color: black;
  margin-right: 15px;
  background: #ffefd5;
  border-radius: 6px;
  border: solid 1px rgb(161, 118, 118);
  padding: 12px;
  text-decoration: none;
}
</style>
