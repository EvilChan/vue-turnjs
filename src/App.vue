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
    {
        arr: [{ id: 1, title: "A" }],
        img: "/01.jpg",
    },
    {
        arr: [{ id: 1, title: "B" }],
        img: "/02.jpg",
    },
    {
        arr: [{ id: 2, title: "C" }],
        img: "/03.jpg",
    },
    {
        arr: [{ id: 3, title: "D" }],
        img: "/04.jpg",
    },
    {
        arr: [{ id: 4, title: "E" }],
        img: "/05.jpg",
    },
    {
        arr: [{ id: 5, title: "F" }],
        img: "/06.jpg",
    },
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
            <el-table :data="page.arr">
                <el-table-column prop="id" label="ID" />
                <el-table-column prop="title" label="Title" />
            </el-table>
            <img :src="page.img" alt="" />
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
    display: flex;
    flex-direction: column;
    height: 100%;
}

.magazine .page img {
    flex: 1;
    max-width: 100%;
}
</style>
