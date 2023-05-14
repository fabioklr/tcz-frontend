<template>
    <RouterView />
    <NavMobile 
        v-if="isMobile"
        :mobileNavOpen="mobileNavOpen"
        @update-mobile-nav-open="mobileNavOpen = $event" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavMobile from '@/components/NavMobile.vue'
import { storeToRefs } from 'pinia';
import { usePostsStore } from './stores/posts';
import { useHelpersStore } from './stores/helpers';

const mobileNavOpen = ref(false)
const postsStore = usePostsStore()
const helpersStore = useHelpersStore()
const { isMobile } = storeToRefs(helpersStore)
console.log(isMobile)

onMounted(() => {
    // Get posts from Strapi
    postsStore.fetchPosts()
    // Check if the device is a mobile device
    helpersStore.checkIfMobile()
})
</script>