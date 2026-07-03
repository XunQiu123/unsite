<template>
    <button @click="getInfo">114514</button>
</template>
<script setup lang="ts" name="Welcome">
    import axios from 'axios';

    const getInfo = async () => {
        const res = await axios.get('https://v1.hitokoto.cn/')
        console.log(res.data.hitokoto);
    }
</script>