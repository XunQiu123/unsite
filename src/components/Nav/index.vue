<template>
    <div class="flex nav">
        <div class="flex nav_title">
            <span class="nav_title_icon"></span>
            <span @click="title = !title" class="nav_title_text">{{ title? "不知名の小站" : "Made by XunQiu" }}</span>
        </div>
        <div class="nav_links">
            
        </div>
        <div class="nav_func"></div>
    </div>
</template>
<script setup lang="ts" Name="Nav">
    import { ref } from 'vue';
    import './index.css'

    let title = ref(true)
</script>