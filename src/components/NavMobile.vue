<template>
    <div class="text-white z-10">
        <!-- Sticky mobile menu at bottom center of viewport -->
        <div v-if="!mobileNavOpen" class="fixed bottom-0 h-[7vh] w-full flex justify-center">
            <div @click="updateMobileNav" class="bg-blue h-full w-1/4 flex justify-center shadow-lg shadow-blue">
                <div class="my-auto text-2xl fa-sharp fa-solid fa-bars"></div>
            </div>
        </div>
        <!-- Mobile navigation -->
        <div 
            v-else
            @click="updateMobileNav"
            class="fixed inset-0 bg-transparent flex justify-center">
            <div @click.stop="" class="h-screen w-[60vw] blur-none bg-blue shadow-lg shadow-blue flex flex-col justify-center">
                <div class="text-center text-2xl font-bold">Menu</div>
                <div class="text-center text-xl font-bold">Home</div>
                <div class="text-center text-xl font-bold">About</div>
                <div class="text-center text-xl font-bold">Contact</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    mobileNavOpen: {
        type: Boolean,
        required: true
    }
})

const emits = defineEmits(['update-mobile-nav-open'])
const updateMobileNav = () => {
    emits('update-mobile-nav-open', !props.mobileNavOpen);
}
</script>