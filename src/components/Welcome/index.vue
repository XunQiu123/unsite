<template>
    <div class="flex welcome_main">
        <div class="flex welcome">
            <span class="welcome_hitokoto">{{ hitokoto }}</span>
            <span class="welcome_from">{{ from }}</span>
        </div>
    </div>
</template>
<script setup lang="ts" name="Welcome">
    import getHitokoto from '../../utils/getHitokoto'

    const { hitokoto,from } = getHitokoto()
</script>

<style scoped>
    .welcome_main{
        width: 100%;
        height: 300px;
        justify-content: center;
    }
    
    .welcome{
        max-width: 1350px;
        width: 100%;
            height: 300px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 10px;
    }
    
    .welcome_hitokoto{
        font-family: HarmonyOS Sans;
        font-weight: bold;
        font-size: 35px;
        color: var(--unsite-font-color-white);
        margin-bottom: 15px;
    }
    .welcome_from{
        font-family: HarmonyOS Sans;
        font-weight: bold;
        font-size: 15px;
        color: var(--unsite-font-color-gray);
    }
</style>