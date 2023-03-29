<template>
    <div class="relative w-full md:w-2/3 h-64 md:h-[36rem]">
        <div v-for="(post, index) in posts.slice(0, 3)">
            <!-- First or default post image -->
            <Transition
                enter-active-class="transition-opacity duration-700 ease-in-out"
                leave-active-class="transition-opacity duration-700 ease-in-out"
                enter-from-class="opacity-0"
                leave-to-class="opacity-0"
                enter-to-class="opacity-100"
                leave-from-class="opacity-100">
                <div v-show="currentSlide === index + 1">
                    <img
                        v-if="post.attributes.images.data != null" 
                        :src="`${backendUrl}${post.attributes.images.data[0].attributes.url}`"
                        alt="First post image"
                        width="640"
                        height="360"
                        class="absolute w-full h-full object-cover rounded">
                    <img
                        v-else
                        :src="`${backendUrl}/uploads/fitsum_admasu_o_Gv9x_Il7_Dk_Y_unsplash_scaled_95f7854ece.jpg`"
                        alt="Default post image"
                        width="640"
                        height="360"
                        class="absolute w-full h-full object-cover rounded">
                </div>
            </Transition>
            <!-- Post title on top of image in bottom third with skewed blue background -->
            <div
                v-show="currentSlide === index + 1"
                class="absolute inset-x-0 bottom-0 h-1/2 flex justify-center">
                <div class="bg-blue bg-opacity-90 transform skew-x-[-10deg] h-1/2 w-3/4 flex items-center justify-center">
                    <p class="text-center text-white text-md font-bold">
                        {{ post.attributes.title }}
                    </p>
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 w-full flex justify-center my-2 gap-2">
            <div
                v-for="(post, index) in posts.slice(0, 3)"
                @click="currentSlide = index + 1"
                class="w-3 h-3 rounded-full cursor-pointer"
                :class="[currentSlide === index + 1 ? 'bg-blue' : 'bg-light-grey bg-opacity-90']"></div>
        </div>
        <div class="absolute inset-0 py-0 px-2 w-full flex items-center">
            <div class="flex-1">
                <i @click="prevSlide" class="fas fa-chevron-left cursor-pointer flex items-center justify-center 
                            rounded-full w-8 h-8 bg-eerie-black bg-opacity-90 text-white"></i>
            </div>
            <div @click="nextSlide" class="flex-1 flex justify-end ">
                <i class="fas fa-chevron-right cursor-pointer flex items-center justify-center 
                            rounded-full w-8 h-8 bg-eerie-black bg-opacity-90 text-white"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePostsStore } from '../stores/posts';
import { storeToRefs } from 'pinia';
import { onUnmounted, ref } from 'vue';

const postsStore = usePostsStore()
const { posts } = storeToRefs(postsStore)
const currentSlide = ref(1)
const backendUrl = 'https://docker119415-tcz-backend.jcloud.ik-server.com'

const nextSlide = () => {
    if (currentSlide.value === 3) {
        currentSlide.value = 1
    } else {
        currentSlide.value++
    }
}

const prevSlide = () => {
    if (currentSlide.value === 1) {
        currentSlide.value = 3
    } else {
        currentSlide.value--
    }
}

const interval = setInterval(() => {
    nextSlide()
}, 5000)

onUnmounted(() => {
    clearInterval(interval)
})
</script>