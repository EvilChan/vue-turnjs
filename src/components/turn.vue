<script setup>
import { ref, onMounted } from "vue";
import $ from "jquery";

const props = defineProps({
    options: Object,
});

const fadeClass = ref();

onMounted(() => {
    $(fadeClass.value).turn(Object.assign({}, props.options));
});

const prev = () => {
    $(fadeClass.value).turn("previous");
};

const next = () => {
    $(fadeClass.value).turn("next");
};

defineExpose({
    prev,
    next,
});
</script>

<template>
    <div ref="fadeClass">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss"></style>
