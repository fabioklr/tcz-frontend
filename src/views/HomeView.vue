<template>
    <div>
        <div class="flex justify-center p-2">
            <RouterLink :to="{name: 'home'}">
                <img 
                    src="/media/logo.webp" 
                    alt="Logo"
                    class="h-24">
            </RouterLink>
        </div>
        <PostsCarousel />
        <div>'Alle' claims</div>
        <div>Events</div>
        <div>Erfahrungsberichte</div>
        <div>News</div>
        <div>Trainingsübersicht</div>
    </div>
</template>

<script setup>
import PostsCarousel from '@/components/PostsCarousel.vue'
</script>
