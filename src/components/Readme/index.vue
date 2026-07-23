<template>
    <div class="flex readme_main">
        <div class="readme">
            <i class="iconfont" style="margin-right: 20px;">&#xe88d;</i>
            <span class="readme_text">本网站以</span>
            <a href="https://mit-license.org/">MIT</a>
            <span class="readme_text">协议开源。本站大量模仿、借鉴</span>
            <a href="https://blog.imsyy.top/">無名小栈</a>
            <span class="readme_text">与</span>
            <a href="https://blog.zhheo.com/">张洪Heo</a>
            <span class="readme_text">。目前正在开发中，之后可能会成为我的游戏官网、工作室/团队的子网站。</span>
        </div>
    </div>
</template>
<script setup lang="ts" name="Readme">
    // pass
</script>

<style scoped>
    .readme_main{
        width: 100%;
        justify-content: center;
    }
    .readme{
        max-width: 1350px;
        width: 100%;
        padding: 20px;
        margin: 10px;
        background-color: var(--unsite-card-background);
        border-radius: 10px;
        border: 1px solid var(--unsite-border);
    }
    
    .readme_text{
        font-family: HarmonyOS Sans;
        font-weight: bold;
        font-size: 17px;
        color: var(--unsite-font-color-white);
    }
</style>