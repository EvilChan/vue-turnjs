<script setup>
import { ref } from "vue";
import $ from "jquery";
import Turn from "@/components/turn.vue";

const turnRef = ref();

const options = {
    width: 800,
    height: 600,
    autoCenter: true,
    display: "double",
    acceleration: true,
    elevation: 50,
    gradients: !$.isTouch,
    when: {
        turned: function (e, page) {
            console.log("Current view: ", $(this).turn("view"));
        },
    },
};

const pages = [
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg",
];

const prev = () => {
    turnRef.value.prev();
};

const next = () => {
    turnRef.value.next();
};
</script>

<template>
    <button @click="prev">上一页</button>
    <button @click="next">下一页</button>
    <Turn ref="turnRef" :options="options" class="magazine">
        <div v-for="(page, index) in pages" :key="index" class="page">
            <img :src="page" alt="" />
        </div>
    </Turn>
</template>

<style scoped lang="scss">
.magazine {
    margin: 0 auto;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.magazine .page {
    height: 100%;
}

.magazine .page img {
    max-width: 100%;
    height: 100%;
}
</style>
