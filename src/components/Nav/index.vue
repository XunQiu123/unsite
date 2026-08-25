<template>
    <div class="flex nav_main">
        <div class="flex nav">
            <div class="flex nav_title">
                <i class="iconfont icon-bg" style="font-size: 19px; cursor: pointer;">&#xe600;</i>
                <span @click="titleIndex++" class="nav_title_text" :data-text="titleList[titleIndex]">{{ titleList[titleIndex] }}</span>
            </div>
            <div class="flex nav_links">
                <span class="nav_links_text" v-for="link in links" :key="link.id">{{ link.text }}</span>
            </div>
            <div class="flex nav_func">
                <i style="cursor: pointer;" class="iconfont icon-bg">&#xe885;</i>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts" Name="Nav">
    import { computed, ref } from 'vue'
    import links from './links.json'
    
    const titleList = [
        "不知名の小站",
        "Made by XunQiu"
    ]
    const titleNum = ref<number>(0)
    const titleIndex = computed(()=> {
        return titleNum.value % titleList.length
    })
</script>

<style scoped>
    .nav_main {
        width: 100%;
        justify-content: center;
    }

    .nav {
        max-width: 1350px;
        width: 100%;
        height: 60px;
        background-color: var(--unsite-card-background);
        border: 2px solid var(--unsite-border);
        border-radius: 10px;
        margin: 10px;
        transition: border 0.3s ease-out;
    }

    .nav_title,
    .nav_links,
    .nav_func {
        flex: 1;
        height: 100%;
    }

    .nav_title {
        align-items: center;
        justify-content: flex-start;
        padding-left: 19px;
    }
    
    
    .nav_title_text {
        color: var(--unsite-font-color-white);
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        position: relative;
        margin-left: 19px;
    }
    
    .nav_title_text::before {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        background: var(--unsite-theme-green-blue-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        opacity: 0;
        transition: opacity 0.3s ease-out;
    }
    
    .nav_title_text:hover::before {
        opacity: 1;
    }
    
    .nav_links {
        align-items: center;
        justify-content: space-around;
    }
    
    .nav_links_text {
        color: var(--unsite-font-color-white);
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s color ease-out;
        padding: 8px 16px;
        border-radius: 2rem;
        position: relative;
        z-index: 1;
    }
    
    .nav_links_text::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        background: var(--unsite-theme-green-blue-gradient);
        opacity: 0;
        transition: opacity 0.3s ease-out;
        z-index: -1;
    }
    
    .nav_links_text:hover {
        color: var(--unsite-font-color-black);
    }
    
    .nav_links_text:hover::before {
        opacity: 1;
    }
    
    .nav_func {
        align-items: center;
        justify-content: flex-end;
        padding-right: 20px;
    }
</style>