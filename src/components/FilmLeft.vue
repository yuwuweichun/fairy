<script setup>

</script>

<template>
  <div class="film-container">
    <div class="film-scroll">
      <!-- 为了实现无缝滚动，需要两张相同的图片 -->
      <img src="/film.png" alt="Film" />
      <img src="/film.png" alt="Film" />
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
  animation: scrollLeft 20s linear infinite;
  width: 200%; /* 两倍宽度以容纳两张图片 */
}

.film-scroll img {
  width: 50%; /* 每张图片占总宽度的一半 */
  height: auto;
  object-fit: cover;
}

@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* 向左滚动一半宽度 */
  }
}
</style>