<script setup>
import { ref } from 'vue';
import bgm from '@/assets/audio/60daily-BGM.mp3';
// 定义音乐播放状态变量
const isPlaying = ref(false);

// 创建音频对象
const audio = new Audio(bgm);
// 设置循环播放
audio.loop = true;

// 切换音乐播放状态
const toggleMusic = () => {
  isPlaying.value = !isPlaying.value;
  if (isPlaying.value) {
    audio.play();
  } else {
    audio.pause();
  }
}
</script>

<template>
  <div class="music-btn" @click="toggleMusic">
    <p>背景音乐：{{ isPlaying ? '开' : '关' }}</p>
  </div>
</template>

<style scoped>
.music-btn {
  /* 设置合适的宽高 */
  height: 8vh;
  width: 12vw;
  /* 字体大小 */
  font-size: 1.3rem;
  background-image: url('@/assets/images/button.png');
  /* 图片完全覆盖容器 */
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  margin-bottom: 10px;
  /* 设置按钮基本样式 */
  cursor: pointer;
  /* 添加过渡效果 */
  transition: transform 0.2s;
}


.music-btn:hover {
  transform: scale(1.05);
}

.music-btn:active {
  transform: scale(0.95);
}
</style>