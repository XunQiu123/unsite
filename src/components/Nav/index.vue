<template>
    <div class="flex nav_main">
        <div class="flex nav">
            <div class="flex nav_title">
                <i class="iconfont icon-bg" style="font-size: 19px;">&#xe600;</i>
                <span @click="title = !title" class="nav_title_text" :data-text="title ? '不知名の小站' : 'Made by XunQiu & YZR'">{{ title? "不知名の小站" : "Made by XunQiu & YZR" }}</span>
            </div>
            <div class="flex nav_links">
                <span class="nav_links_text" v-for="link in links" :key="link.id">{{ link.text }}</span>
            </div>
            <div class="flex nav_func">
                <i class="iconfont icon-bg">&#xe885;</i>
            </div>
        </div>
    </div>
    
</template>
<script setup lang="ts" Name="Nav">
    import { ref } from 'vue';
    import './index.css'
    import links from '../../assets/json/nav_links.json'

    //true "不知名の小站"
    //false "Made by XunQiu & YZR"
    let title = ref<boolean>(true)
</script>