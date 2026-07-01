<template>
    <div class="flex nav_main">
        <div class="flex nav">
            <div class="flex nav_title">
                <span class="nav_title_icon"></span>
                <span @click="changeTitle" class="nav_title_text">{{ title }}</span>
            </div>
            <div class="flex nav_links">

            </div>
            <div class="nav_func">

            </div>
        </div>
    </div>
</template>
<script setup lang="ts" Name="Nav">
    import { ref } from 'vue';
    import './index.css'

    let title = ref<string>("不知名の小站")

    function changeTitle(){
        if (title.value == "不知名の小站"){
            title.value = "Made by XunQiu"
        }else{
            title.value = "不知名の小站"
        }
    }
</script>