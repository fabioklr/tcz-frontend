<template>
    <div class="relative w-full md:w-2/3 h-80 md:h-[36rem]">
        <div v-for="(post, index) in posts">
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
                        :src="`${backendUrl}${defaultImgLocation}`"
                        alt="Default post image"
                        width="640"
                        height="360"
                        class="absolute w-full h-full object-cover rounded">
                </div>
            </Transition>
            <!-- Post title on top of image in bottom third with skewed blue background -->
            <div
                v-show="currentSlide === index + 1"
                class="absolute inset-x-0 bottom-0 h-1/2 flex justify-center items-center">
                <div class="bg-blue bg-opacity-90 transform skew-x-[-10deg] h-1/2 w-3/4 flex items-center justify-center">
                    <p v-if="locale === 'de'" class="text-center text-white text-md font-bold">
                        {{ post.attributes.title }}
                    </p>
                    <p v-else class="text-center text-white text-md font-bold">
                        {{ post.attributes.localizations.data[0].attributes.title }}
                    </p>
                </div>
            </div>
        </div>
        <!-- Three dots at the bottom of the carousel -->
        <div class="absolute bottom-0 w-full flex justify-center my-2 gap-2">
            <div
                v-for="(post, index) in posts.slice(0, 3)"
                @click="currentSlide = index + 1"
                class="w-3 h-3 rounded-full cursor-pointer"
                :class="[currentSlide === index + 1 ? 'bg-blue' : 'bg-light-grey bg-opacity-90']"></div>
        </div>
        <!-- Left and right buttons -->
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
import { onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

defineProps({
    posts: Array,
    backendUrl: String,
    defaultImgLocation: String
})

const currentSlide = ref(1)
const { locale } = useI18n()

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