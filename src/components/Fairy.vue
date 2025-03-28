<script setup>

</script>

<template>
  <div class="fairy-container">
    
    <img src="/fairy_self/layer1.png" alt="Layer 1" class="layer1" />
    
    <img src="/fairy_self/layer2.png" alt="Layer 2" class="layer2" />
    
    <img src="/fairy_self/layer3.png" alt="Layer 3" class="layer3" />
    
    <img src="/fairy_self/layer4.png" alt="Layer 4" class="layer4" />

    <img src="/fairy_self/layer5.png" alt="Layer 5" class="layer5" />

    <img src="/fairy_self/layer6.png" alt="Layer 6" class="layer6" />

    <img src="/fairy_self/layer7.png" alt="Layer 7" class="layer7" />

    <img src="/fairy_self/layer8.png" alt="Layer 8" class="layer8" />
    
  </div>
</template>

<style scoped>
.fairy-container {
  /* 容器样式 */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.layer1 {
  /* 设置底层图片大小 */
  width: 300px;
  height: 300px;
  position: absolute;
  z-index: 1;
}

.layer2 {
  /* 设置图片大小 */
  width: 210px;
  height: 210px;
  /* 添加旋转动画 */
  animation: rotate 10s linear infinite;
  position: absolute;
  z-index: 2;
}

.layer3 { /* 白环，周期性的放缩效果作用在白环及以上图层 */
  /* 设置图片大小 */
  width: 220px;
  height: 220px;
  position: absolute;
  z-index: 3;
  animation: scale3 4s ease-in-out infinite;
}

.layer4 {
  /* 设置图片大小 */
  width: 120px;
  height: 120px;
  position: absolute;
  z-index: 4;
  animation: scale4 4s ease-in-out infinite;
}

.layer5 {
  /* 设置图片大小 */
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: 5;
  animation: scale5 4s ease-in-out infinite;
}

.layer6 {
  /* 设置图片大小 */
  width: 60px;
  height: 60px;
  position: absolute;
  z-index: 6;
  animation: scale6 4s ease-in-out infinite;
}

.layer7 {
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: 7;
  /* 向右下偏移 */
  transform: translate(20px, 20px);
  animation: scale7 4s ease-in-out infinite;
}

.layer8 {
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: 8;
  transform: scale(6.0);
  animation: scale8 2s ease-in-out infinite;
  opacity: 1;
}

@keyframes rotate {
  /* 定义旋转动画 */
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes scale8 {
  0% { transform: scale(6.0); opacity: 0; }
  5% { transform: scale(6.0); opacity: 1; }
  95% { transform: scale(16.0); opacity: 0.2; }
  100% { transform: scale(16.0); opacity: 0; }
}

@keyframes scale7 {
  0%, 100% { transform: translate(20px, 20px) scale(1); }
  10% { transform: translate(20px, 20px) scale(0.9); }
  15% { transform: translate(20px, 20px) scale(1.1); }
  30% { transform: translate(20px, 20px) scale(1); }
}

@keyframes scale6 {
  0%, 100% { transform: scale(1); }
  15% { transform: scale(0.9); }
  20% { transform: scale(1.1); }
  35% { transform: scale(1); }
}

@keyframes scale5 {
  0%, 100% { transform: scale(1); }
  20% { transform: scale(0.9); }
  25% { transform: scale(1.1); }
  40% { transform: scale(1); }
}

@keyframes scale4 {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(0.9); }
  30% { transform: scale(1.1); }
  45% { transform: scale(1); }
}

@keyframes scale3 {
  0%, 100% { transform: scale(1); }
  30% { transform: scale(0.9); }
  35% { transform: scale(1.1); }
  50% { transform: scale(1); }
}


</style>