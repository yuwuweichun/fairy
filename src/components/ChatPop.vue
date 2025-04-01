<script setup>
import { ref } from 'vue'
const inputText = ref('')
</script>

<template>
    <div class="chat-container">
        <input 
            type="text" 
            class="chat-input" 
            placeholder="Hi，Fairy" 
            v-model="inputText" 
            @keydown.enter="() => { $emit('send-message', inputText); inputText = '' }">
    </div>
</template>

<style scoped>
.chat-container {
    width: 50vw;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.chat-input {
    width: 45vw;
    height: 8vh;
    border: 2px solid #FEFEFE;
    border-radius: 10px;
    padding: 0 15px;
    font-size: 1.4rem;
    color: #FEFEFE;
    background: transparent;
    outline: none;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);
}


/* 聚焦 */
.chat-input:focus {
    border: 2px solid rgba(74, 158, 255, 0.3);
    box-shadow: 0 0 10px rgba(74, 158, 255, 0.3);
}
</style>