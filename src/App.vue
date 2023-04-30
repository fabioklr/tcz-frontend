<template>
    <RouterView />
    <NavMobile 
        v-if="isMobileDevice"
        :mobileNavOpen="mobileNavOpen"
        @update-mobile-nav-open="mobileNavOpen = $event" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavMobile from '@/components/NavMobile.vue'
import { usePostsStore } from './stores/posts';

const isMobileDevice = ref(false)
const mobileNavOpen = ref(false)
const postsStore = usePostsStore()
// Watch the viewport size and update the isMobileDevice variable correspondingly at 768px
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        isMobileDevice.value = true
    } else {
        isMobileDevice.value = false
    }
})

onMounted(() => {
    // Get posts from Strapi
    postsStore.fetchPosts()
})
</script>