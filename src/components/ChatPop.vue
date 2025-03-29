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
}


/* 聚焦 */
.chat-input:focus {
    border-color: #08397A;
    box-shadow: 0 0 10px rgba(74, 158, 255, 0.3);
}
</style>