<script setup>
import FilmImage from '@/assets/images/film.png'
</script>

<template>
  <div class="film-container">
    <div class="film-scroll">
      <!-- 为了实现无缝滚动，需要两张相同的图片 -->
      <img :src= "FilmImage" alt="Film" />
      <img :src= "FilmImage" alt="Film" />
    </div>
  </div>
</template>

<style scoped>
.film-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.film-scroll {
  display: flex;
  animation: scrollRight 20s linear infinite;
  width: 200%; /* 两倍宽度以容纳两张图片 */
}

.film-scroll img {
  width: 50%; /* 每张图片占总宽度的一半 */
  height: auto;
  object-fit: cover;
}

@keyframes scrollRight {
  0% {
    transform: translateX(-50%); /* 从左侧开始 */
  }
  100% {
    transform: translateX(0); /* 向右滚动到原始位置 */
  }
}
</style>