<script setup>
import { ref, watch, onUnmounted } from 'vue'

const props = defineProps({
  output: {
    type: String,
    required: true
  }
})

const displayedText = ref('')
let intervalId = null
let currentIndex = 0

// 清除定时器
const clearTyping = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
    currentIndex = 0
  }
}

// 监听output变化
watch(() => props.output, (newVal) => {
  clearTyping()
  displayedText.value = ''
  
  if (newVal) {
    intervalId = setInterval(() => {
      if (currentIndex < newVal.length) {
        displayedText.value += newVal[currentIndex]
        currentIndex++
      } else {
        clearTyping()
      }
    }, 50) // 调整这个值控制打字速度（单位：毫秒）
  }
}, { immediate: true })

// 组件卸载时清除定时器
onUnmounted(() => {
  clearTyping()
})
</script>

<template>
  <div class="dialog-container">
    <span class="dialog-role">Fairy</span>
    <div class="dialog-content">
      <!-- 显示逐步输出的内容 -->
      <span :style="{ whiteSpace: 'pre-wrap' }">{{ displayedText }}</span>
    </div>
  </div>
</template>

<style scoped>
.dialog-container {
  /* 使用背景图片 */
  background-image: url('/dialog.png');
  /* 图片完全覆盖容器 */
  background-size: 100% 100%;  background-repeat: no-repeat;
  /* 设置合适的宽度 */
  width: 60vw;
  /* 设置合适的高度 */
  height: 20vh;
  /* 添加内边距 */
  padding: 20px;
  /* 显示方向：列 */
  display: flex;
  flex-direction: column;
  /* 始终显示在最上方 */
  z-index: 999;
}
.dialog-role {
  margin: -1.5vh auto 0 auto;
  font-size: 1.2rem;
  padding: 0;
}

.dialog-content {
  margin: auto 4.2rem;
  padding: 0;
}
</style>