<script setup>
import DialogBox from '@/components/DialogBox.vue'
import FilmLeft from '@/components/FilmLeft.vue'
import FilmRight from '@/components/FilmRight.vue'
import Fairy from '@/components/Fairy.vue'
import ButtonBox from '@/components/ButtonBox.vue'
import ChatPop from '@/components/ChatPop.vue'

import ZIcon from '@/assets/icon/zzz.svg'

import { ref } from 'vue'

import { prompt, guidingText, rousingText, loadingText, key } from './system'
/**
 * output
 */
let output = ref("")
output.value = guidingText


/**
 * 唤出Fairy
 */

let isPop = ref(false)

// 键盘监听事件处理 按下ctrl+space时，改变isPop的值
window.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.code === 'Space') {
    isPop.value = !isPop.value
    console.log('isPop changed:', isPop.value) // 用于调试
    output.value = rousingText
  }
})
document.addEventListener('click', (event) => {
  if (!event.target.closest('.chat-container')) {
    isPop.value = false
  }
})

/**
 * Fetch
 */
let chatList = [
    {
        role: "system",
        content: prompt
    }
]

const sendToFairy = () => {
    // 动态生成 options（每次请求都用最新 chatList）
    const dynamicOptions = {
        method: 'POST',
        headers: {
            Authorization: key,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "deepseek-ai/DeepSeek-V3",
            messages: chatList,
            stream: false,
            max_tokens: 1024,
            temperature: 0.7,
            top_p: 0.7,
            top_k: 50,
            frequency_penalty: 0.5,
            n: 1,
            response_format: {
                type: "text"
            }
        })
    };
    console.log("dynamicOptions: ", dynamicOptions)
    fetch('https://api.siliconflow.cn/v1/chat/completions', dynamicOptions)
        .then(response => response.json()) // response.json()解析后的数据传递给下一个.then()
        .then(response => {
            console.log("response :", response)
            output.value = response.choices[0].message.content
            console.log("output.value :", output.value)
            chatList.push( { role: "assistant", content: output.value})
        })
        .catch(err => console.error(err))
}

// 处理从ChatPop接收到的消息
const handMessage = (inputText) => {
    // loadingText
    output.value = loadingText
    console.log("inputText: ", inputText)
    chatList.push({ role: "user", content: inputText })
    console.log("chatList: ",chatList)
    sendToFairy()

}
</script>

<template>
    <div class="film-right">
        <FilmRight />
    </div>

    <div class="logo-area">
        <img :src="ZIcon" alt="" style="width: 50%;">
    </div>

    <div class="main-area">
        <div class="button-area">
            <ButtonBox />
        </div>
        <div class="fairy-area">
            <Fairy />
        </div>
        <div class="dialog-area">
            <DialogBox :output="output" />
        </div>
    </div>

    <div class="film-left">
        <FilmLeft />
    </div>

    <div class="chat-area" v-if="isPop"><!-- 输入的文本信息emit -->
        <ChatPop @send-message="handMessage"/>
    </div>
</template>

<style scoped>
.logo-area {
    position: fixed;
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
