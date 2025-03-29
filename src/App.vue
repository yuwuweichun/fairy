<script setup>
import DialogBox from './components/DialogBox.vue';
import FilmLeft from './components/FilmLeft.vue';
import FilmRight from './components/FilmRight.vue';
import Fairy from './components/Fairy.vue';
import ButtonBox from './components/ButtonBox.vue';
import ChatPop from './components/ChatPop.vue';

import { ref } from 'vue';

let isPop = ref(false);

// 键盘监听事件处理 按下ctrl+space时，改变isPop的值
const handleKeyDown = (event) => {
  if (event.ctrlKey && event.code === 'Space') {
    isPop.value = !isPop.value
    console.log('isPop changed:', isPop.value) // 用于调试
  }
}

// 添加键盘事件监听器
window.addEventListener('keydown', handleKeyDown);
</script>

<template>
    <div class="film-right">
        <FilmRight />
    </div>
    <div class="logo-area">
        <img src="./assets/zzz.svg" alt="zzz-logo" style="width: 50%; height: 50%;">
    </div>
    <div class="main-area">
        <div class="button-area">
            <ButtonBox />
        </div>
        <div class="fairy-area">
            <Fairy />
        </div>
        <div class="dialog-area">
            <DialogBox />
        </div>
    </div>

    <div class="film-left">
        <FilmLeft />
    </div>


    <div class="chat-area" v-if="isPop">
        <ChatPop/>
    </div>
</template>

<style scoped>
.logo-area {
    position: fixed;
    /* 使用定位和transform实现水平垂直居中 */
    top: 20%;
    left: 15%;
    transform: translate(-50%, -50%);
    z-index: 9999;
}

.main-area {
    height: 75vh;
    width: 100vw;
}
.fairy-area {
    height: 40vh;
    width: 100vw;
    margin-top: 5vh;
    display: flex;
    justify-content: center;
}
.button-area {
    margin-top: 3vh;
    margin-left: 80vw;
}
.dialog-area {
    display: flex;
    justify-content: center;
}

.chat-area {
    position: fixed;
    /* 使用定位和transform实现水平垂直居中 */
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
}
</style>
