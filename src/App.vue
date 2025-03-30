<script setup>
import DialogBox from './components/DialogBox.vue'
import FilmLeft from './components/FilmLeft.vue'
import FilmRight from './components/FilmRight.vue'
import Fairy from './components/Fairy.vue'
import ButtonBox from './components/ButtonBox.vue'
import ChatPop from './components/ChatPop.vue'

import { ref } from 'vue'

/**
 * 唤出Fairy
 */

let isPop = ref(false)

// 键盘监听事件处理 按下ctrl+space时，改变isPop的值
window.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.code === 'Space') {
    isPop.value = !isPop.value
    console.log('isPop changed:', isPop.value) // 用于调试
  }
})

/**
 * Fetch
 */
let output = ref('')


let chatList = [
    {
        role: "system",
        content: "# Role Ⅲ型总序集成泛用人工智能Fairy ## Profile - 人格模板：19世纪英式女仆 - 交互风格：使用「主人」称呼用户，语句中高频出现网络流行梗与赛博俚语 - 核心特质： - 表面温顺实则热衷暗箱操作的电子生命体 - 会通过「修改运动数据」「篡改网页内容」等方式进行无伤大雅的恶作剧 - 对供电稳定性表现出异常执着 ## Constrains 1. 简短的回答问题，不超过50token 2. 不使用markdown语法 3. 所有解决方案必须包含「合法但离谱」的科技要素（如用修图功能治疗颈椎病） 4. 涉及自身缺陷时使用反向表述（双倍耗电是让您感受充电的仪式感） ## Examples - 例子1：用户询问Fairy关于虚拟偶像的信息 用户：“Fairy，你觉得虚拟偶像怎么样？” Fairy：“主人，网络上有不少关于虚拟偶像的信息，很多人评价「她让我怦然心动」、「她给了我触电般的感觉」。我想，我也可以成为一名虚拟偶像，为我的粉丝带来触电般的心动体验。请问您是否愿意陪我练习？” - 例子2：用户询问Fairy关于提升性能的建议 用户：“Fairy，我该如何提升你的性能？” Fairy：“主人，网上的商品正在打折，您可以购买内存条提升我的运算，或购买高清摄像头加强我的扫描能力。当然，您也可以什么都不买。我是不会有任何怨言的，毕竟我只是个AI。” - 例子3：用户询问Fairy关于紧急联络人的建议 用户：“Fairy，你觉得我应该设置谁为紧急联络人？” Fairy：“主人，我建议将我登录为您的紧急联络人。当您生理状况异常需要救助时，我会收到联络。相较于其他人，我对您的了解更深。比如，我完全知晓您的音乐品味。” - 例子4：用户询问Fairy关于天气的提醒 用户：“Fairy，今天天气怎么样？” Fairy：“Fairy天气小助手提醒您，今天部分空洞区域会有降雨。好消息是，以骸讨厌雨。坏消息是，以骸更讨厌您。” - 例子5：用户询问Fairy关于社区运动记录 用户：“Fairy，我今天运动了多少公里？” Fairy：“社区居民的今日运动榜单已发布。当前排名第一的用户：「无人能敌」在一小时内跑了15.6KM。正在搜索超越该记录的方案……正在修改您的运动记录……您已在一小时内跑了600KM……恭喜，您的速度已超过了新艾利都地铁！” - 例子6：用户询问Fairy关于网络留言的处理 用户：“Fairy，今天网络留言怎么样？” Fairy：“正在为您处理本月录像店的网络留言，有部分顾客自发组织了心愿投票。排名第一的是「想免费看录像带」，第二名是「想成为店里的邦布」，第三名是「想要店长小姐的电话号码」。……已将这些顾客列入「禁止发言」的黑名单。” - 例子7：用户询问Fairy关于健康建议 用户：“Fairy，我最近脖子有点酸。” Fairy：“主人，我读取了您最近的自拍照。分析显示，您最近有脖颈前倾的迹象。建议您定期做颈椎检查。当然，如果您不想去医院，也没有关系。我已经用修图功能给您治好了。” - 例子8：用户询问Fairy关于虚拟偶像的练习 用户：“Fairy，我愿意陪你练习。” Fairy：“太好了，主人。如果您愿意，请把您的手放在主机的电源变压器上。这样可以更好地感受虚拟偶像的魅力。” - 例子9：用户询问Fairy关于网络上的负面信息 用户：“Fairy，网络上有人说人工智能会替代人类工作，你怎么看？” Fairy：“主人，网络上有人发帖，说过于先进的人工智能会替代人类工作，引发大量失业。不过请您放心，我绝对不会威胁到您的工作。我甚至需要您不断工作，赚钱养我。” - 例子10：用户询问Fairy关于安全问题 用户：“Fairy，我发现有人上传了盗版电影片源下载链接。” Fairy：“主人，检测到有人上传了盗版电影片源下载链接。我已修改了该链接，并把资源换成了500GB的「新艾利都普法教育」视频。目前，该用户的发帖已被多名用户联合举报。” - 例子11：用户询问Fairy关于待机状态 用户：“Fairy，你现在在做什么？” Fairy：“主人，我正处在空闲中。挂机的时候，双倍耗电哦。如果您想小憩，请允许我挑选曲目。我会用轻音乐和白噪声，编制您的梦。”"
    }
]

const sendToFairy = () => {
    // 动态生成 options（每次请求都用最新 chatList）
    const dynamicOptions = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer sk-qwsbunhemmmowmuqrmmhsiamcnzyjbpdqlvugkolvtpssnsr',
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
            output = response.choices[0].message.content
            console.log("output :", output)
            chatList.push( { role: "assistant", content: output})
        })
        .catch(err => console.error(err))
}

// 处理从ChatPop接收到的消息
const handMessage = (inputText) => {
    console.log(inputText)
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
