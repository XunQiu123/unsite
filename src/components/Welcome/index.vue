<template>
    <div class="flex welcome_main">
        <div class="flex welcome">
            <span class="welcome_hitokoto">{{ hitokoto }}</span>
            <span class="welcome_from">{{ from }}</span>
        </div>
    </div>
</template>
<script setup lang="ts" name="Welcome">
    import './index.css'
    import useGetHitokoto from '../../hooks/useGetHitokoto'

    const { hitokoto,from } = useGetHitokoto()
</script>