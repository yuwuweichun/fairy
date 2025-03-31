<script setup>
const { output } = defineProps(['output'])
</script>

<template>

  <div class="dialog-container">
    <div class="dialog-content">
      <!-- 保留换行符 -->
      <span :style="{ whiteSpace: 'pre-wrap' }">{{ output }}</span> 
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
  /* 居中显示 */
  display: flex;
  align-items: center;
  /* 始终显示在最上方 */
  z-index: 999;
}
.dialog-content {
  margin: 4.2rem;
}
</style>