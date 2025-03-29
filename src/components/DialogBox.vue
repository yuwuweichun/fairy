<script setup>

</script>

<template>

  <div class="dialog-container">
    <div class="dialog-content">
      系统启动完成——我是Ⅲ型总序式集成泛用人工智能，开发代号Fairy。你好，主人！
      <br>
      (主人，按下ctrl+space以唤出Fairy，输入文本后按下enter向Fairy发送消息)
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
  justify-content: center;
  align-items: center;

  /* 始终显示在最上方 */
  z-index: 999;
}

</style>