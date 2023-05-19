<template>
    <div class="p-2 mb-20">
        <!-- Logo with link to home -->
        <div v-if="isMobile" class="flex justify-center">
            <RouterLink :to="{name: 'home'}">
                <img 
                    src="/media/logo.webp" 
                    alt="Logo"
                    class="h-24">
            </RouterLink>
        </div>
        <!-- A carousel showing the three most recent posts across categories. -->
        <div class="mt-6">
            <PostsCarousel 
                :posts="posts.slice(0, 3)" 
                :backendUrl="backendUrl" 
                :defaultImgLocation="defaultImgLocation" />
        </div>
        <!-- The three TCZ claims and corresponding icons. -->
        <div class="flex flex-col mt-20 justify-center items-center">
            <div class="bg-blue shadow shadow-blue transform skew-x-[-10deg] h-12 w-1/4 flex justify-center items-center">
                <i class="fa-solid fa-layer-group w-8 h-8 flex justify-center items-center text-white text-xl"></i>
            </div>
            <div class="font-bold text-2xl text-center mt-4">{{ $t('home.levels') }}</div>
            <div class="text-xl text-center mt-2">{{ $t('home.levels_text') }}</div>
            <div class="bg-blue shadow shadow-blue transform skew-x-[-10deg] h-12 w-1/4 flex justify-center items-center mt-12">
                <i class="fa-solid fa-wave-square w-8 h-8 flex justify-center items-center text-white text-xl"></i>
            </div>
            <div class="font-bold text-2xl text-center mt-4"> {{ $t('home.intensity') }}</div>
            <div class="text-xl text-center mt-2">{{ $t('home.intensity_text') }}</div>
            <div class="bg-blue shadow shadow-blue transform skew-x-[-10deg] h-12 w-1/4 flex justify-center items-center mt-12">
                <i class="fa-solid fa-bullseye w-8 h-8 flex justify-center items-center text-white text-xl"></i>
            </div>
            <div class="font-bold text-2xl text-center mt-4">{{ $t('home.goal') }}</div>
            <div class="text-xl text-center mt-2">{{ $t('home.goal_text') }}</div>
        </div>
        <!-- The four most recent posts in the Events category -->
        <div class="flex flex-col justify-center items-center mt-20">
            <div class="bg-blue mb-4 shadow shadow-blue transform skew-x-[-10deg] h-16 w-3/4 flex justify-center items-center text-white font-bold text-2xl">Events</div>
            <PostCard 
                v-for="post in eventsPosts.slice(0, 4)"
                :post="post"
                :backendUrl="backendUrl"
                :defaultImgLocation="defaultImgLocation" />
        </div>
        <!-- The four most recent posts in the Erfahrungsberichte category -->
        <div class="flex flex-col justify-center items-center mt-20">
            <div class="bg-blue mb-4 shadow shadow-blue transform skew-x-[-10deg] h-16 w-3/4 flex justify-center items-center text-white font-bold text-2xl">{{ $t('home.exp') }}</div>
            <PostCard 
                v-for="post in erfahrungsberichtePosts.slice(0, 4)"
                :post="post"
                :backendUrl="backendUrl"
                :defaultImgLocation="defaultImgLocation" />
        </div>
        <!-- The four most recent posts in the News category -->
        <div class="flex flex-col justify-center items-center mt-20">
            <div class="bg-blue mb-4 shadow shadow-blue transform skew-x-[-10deg] h-16 w-3/4 flex justify-center items-center text-white font-bold text-2xl">News</div>
            <PostCard 
                v-for="post in newsPosts.slice(0, 4)"
                :post="post"
                :backendUrl="backendUrl"
                :defaultImgLocation="defaultImgLocation" />
        </div>
        <!-- An overview of all of the TCZ trainings -->
        <div class="flex flex-col justify-center items-center mt-20">
            <div class="bg-blue mb-4 shadow shadow-blue transform skew-x-[-10deg] h-16 w-3/4 flex justify-center items-center text-white font-bold text-2xl">{{ $t('training_overview.title') }}</div>
            <div class="flex flex-col items-center mt-10">
                <img 
                    src="/media/logo_tcz_swim.webp"
                    alt="Swim Logo"
                    class="w-8 h-16">
                <div class="font-bold text-2xl my-4">{{ $t('training_overview.swim_title') }}</div>
                <div class="text-xl text-center font-bold">{{ $t('training_overview.swim_1_time') }}</div>
                <div class="text-xl text-center">{{ $t('training_overview.swim_1_description') }}</div>
                <div class="text-xl text-center font-bold mt-4">{{ $t('training_overview.swim_2_time') }}</div>
                <div class="text-xl text-center">{{ $t('training_overview.swim_2_description') }}</div>
                <div class="text-xl text-center font-bold mt-4">{{ $t('training_overview.swim_3_time') }}</div>
                <div class="text-xl text-center">{{ $t('training_overview.swim_3_description') }}</div>
            </div>
            <div class="flex flex-col items-center mt-10">
                <img 
                    src="/media/logo_tcz_bike.webp"
                    alt="Bike Logo"
                    class="w-8 h-16">
                <div class="font-bold text-2xl my-4">{{ $t('training_overview.bike_title') }}</div>
                <div class="text-xl text-center">{{ $t('training_overview.bike_description') }}</div>
            </div>
            <div class="flex flex-col items-center mt-10">
                <img 
                    src="/media/logo_tcz_run.webp"
                    alt="Run Logo"
                    class="w-8 h-16">
                <div class="font-bold text-2xl my-4">{{ $t('training_overview.run_title') }}</div>
                <div class="text-xl text-center font-bold">{{ $t('training_overview.run_1_time') }}</div>
                <div class="text-xl text-center">{{ $t('training_overview.run_1_description') }}</div>
                <div class="text-xl text-center font-bold mt-4">{{ $t('training_overview.run_2_time') }}</div>
                <div class="text-xl text-center">{{ $t('training_overview.run_2_description') }}</div>
            </div>
        </div>
        <!-- Footer -->
        <div class="flex flex-col justify-center items-center mt-20 bg-light-grey">
            <div class="mt-4">Triathlon Club Zürich</div>
            <div class="mt-4">info@tcz.ch</div>
            <div class="my-4">{{ $t('home.president') }}</div>
        </div>
    </div>
</template>

<script setup>
import { usePostsStore } from '../stores/posts';
import { useHelpersStore } from '../stores/helpers';
import { storeToRefs } from 'pinia';
import PostsCarousel from '@/components/PostsCarousel.vue'
import { defineAsyncComponent, computed } from 'vue'

const PostCard = defineAsyncComponent(() =>
  import('../components/PostCard.vue')
)

defineProps({
    isMobileDevice: Boolean
})

const postsStore = usePostsStore()
const { posts } = storeToRefs(postsStore)
const { isMobile } = storeToRefs(useHelpersStore())
const backendUrl = 'https://docker119415-tcz-backend.jcloud.ik-server.com'
const defaultImgLocation = '/uploads/fitsum_admasu_o_Gv9x_Il7_Dk_Y_unsplash_scaled_95f7854ece.jpg'

// Get all posts in the category 'Events'
const eventsPosts = computed(() => {
    return posts.value.filter(post => post.attributes.category_1 === 'Event')
});
const erfahrungsberichtePosts = computed(() => {
    return posts.value.filter(post => post.attributes.category_1 === 'Erfahrungsbericht')
});
const newsPosts = computed(() => {
    return posts.value.filter(post => post.attributes.category_1 === 'News')
});
</script>
