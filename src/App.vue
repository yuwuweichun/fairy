<script setup>
import DialogBox from './components/DialogBox.vue';
import FilmLeft from './components/FilmLeft.vue';
import FilmRight from './components/FilmRight.vue';
import Fairy from './components/Fairy.vue';
import ButtonBox from './components/ButtonBox.vue';
</script>

<template>
    <div class="film-right">
        <FilmRight />
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
</template>

<style scoped>
.main-area {
    height: 75vh;
    width: 100vw;
}
.fairy-area {
    height: 50vh;
    width: 100vw;
    margin-top: -15vh;
    display: flex;
    justify-content: center;
}
.button-area {
    margin-top: 1vh;
    margin-left: 80vw;
}
.dialog-area {
    display: flex;
    justify-content: center;
}
</style>
