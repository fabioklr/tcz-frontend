<template>
    <RouterView />
    <NavMobile 
        v-if="isMobileDevice"
        :mobileNavOpen="mobileNavOpen"
        @update-mobile-nav-open="mobileNavOpen = $event" />
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import NavMobile from '@/components/NavMobile.vue'

const isMobileDevice = ref(true)
const mobileNavOpen = ref(false)
// Watch the viewport size and update the isMobileDevice variable correspondingly at 768px
watchEffect(() => {
    if (window.innerWidth < 768) {
        isMobileDevice.value = true
    } else {
        isMobileDevice.value = false
    }
})
</script>