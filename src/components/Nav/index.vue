<template>
    <div class="flex nav_main">
        <div class="flex nav">
            <div class="flex nav_title">
                <span class="nav_title_icon"></span>
                <span @click="title = !title" class="nav_title_text">{{ title? "不知名の小站" : "Made by XunQiu" }}</span>
            </div>
            <div class="flex nav_links">
                <span class="nav_links_text" v-for="link in links" :key="link.id">{{ link.text }}</span>
            </div>
            <div class="nav_func"></div>
        </div>
    </div>
    
</template>
<script setup lang="ts" Name="Nav">
    import { ref } from 'vue';
    import './index.css'
    import links from '../../json/nav_links.json'

    //true "不知名の小站"
    //false "Made by XunQiu"
    let title = ref<boolean>(true)
</script>