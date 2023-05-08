<template>
    <div class="p-2">
        <!-- Logo with link to home -->
        <div class="flex justify-center">
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
            <div class="font-bold text-2xl text-center mt-4">Alle Niveaus</div>
            <div class="text-xl text-center mt-2">Von der Ironman-Finisherin bis zum Anfänger trainieren beim TCZ Sportlerinnen und Sportler auf allen Stufen gemeinsam. Während dem Training findest du bestimmt jemanden, der deinem Tempo entspricht.</div>
            <div class="bg-blue shadow shadow-blue transform skew-x-[-10deg] h-12 w-1/4 flex justify-center items-center mt-12">
                <i class="fa-solid fa-wave-square w-8 h-8 flex justify-center items-center text-white text-xl"></i>
            </div>
            <div class="font-bold text-2xl text-center mt-4">Alle Intensitäten</div>
            <div class="text-xl text-center mt-2">Manche TCZler investieren sehr viel Zeit in den Sport und trainieren fast jeden Tag. Andere nehmen es lockerer und kommen unregelmässig ins Training. Bei uns sind alle willkommen.</div>
            <div class="bg-blue shadow shadow-blue transform skew-x-[-10deg] h-12 w-1/4 flex justify-center items-center mt-12">
                <i class="fa-solid fa-bullseye w-8 h-8 flex justify-center items-center text-white text-xl"></i>
            </div>
            <div class="font-bold text-2xl text-center mt-4">Alle Ziele</div>
            <div class="text-xl text-center mt-2">Möchtest du deinen ersten Triathlon absolvieren oder auf der Langdistanz die zehn Stunden Marke knacken? Unsere Coaches und Mitglieder können dir bestimmt helfen.</div>
        </div>
        <!-- The four most recent posts in the Events category -->
        <div class="flex flex-col justify-center items-center mt-20">
            <div class="bg-blue shadow shadow-blue transform skew-x-[-10deg] h-16 w-1/2 flex justify-center items-center text-white font-bold text-xl">Events</div>
            <PostCard 
                v-for="post in eventsPosts.slice(0, 4)"
                :post="post"
                :backendUrl="backendUrl"
                :defaultImgLocation="defaultImgLocation" />
        </div>
        <!-- The four most recent posts in the Erfahrungsberichte category -->
        <div class="flex flex-col justify-center items-center mt-20">
            <div class="bg-blue shadow shadow-blue transform skew-x-[-10deg] h-16 w-1/2 flex justify-center items-center text-white font-bold text-xl">Erfahrungsberichte</div>
            <PostCard 
                v-for="post in erfahrungsberichtePosts.slice(0, 4)"
                :post="post"
                :backendUrl="backendUrl"
                :defaultImgLocation="defaultImgLocation" />
        </div>
        <!-- The four most recent posts in the News category -->
        <div class="flex flex-col justify-center items-center mt-20">
            <div class="bg-blue shadow shadow-blue transform skew-x-[-10deg] h-16 w-1/2 flex justify-center items-center text-white font-bold text-xl">News</div>
            <PostCard 
                v-for="post in newsPosts.slice(0, 4)"
                :post="post"
                :backendUrl="backendUrl"
                :defaultImgLocation="defaultImgLocation" />
        </div>      
        <div>Erfahrungsberichte</div>
        <div>News</div>
        <div>Trainingsübersicht</div>
    </div>
</template>

<script setup>
import { usePostsStore } from '../stores/posts';
import { storeToRefs } from 'pinia';
import PostsCarousel from '@/components/PostsCarousel.vue'
import { defineAsyncComponent, computed } from 'vue'

const PostCard = defineAsyncComponent(() =>
  import('../components/PostCard.vue')
)

const postsStore = usePostsStore()
const { posts } = storeToRefs(postsStore)
const backendUrl = 'https://docker119415-tcz-backend.jcloud.ik-server.com'
const defaultImgLocation = '/uploads/fitsum_admasu_o_Gv9x_Il7_Dk_Y_unsplash_scaled_95f7854ece.jpg'

// Get all posts in the category 'Events'
const eventsPosts = computed(() => {
    return posts.value.filter(post => post.attributes.category_1 === 'Event' || post.attributes.category_2 === 'Event' || post.attributes.category_3 === 'Event')
});
const erfahrungsberichtePosts = computed(() => {
    return posts.value.filter(post => (post.attributes.category_1 === 'Erfahrungsbericht' || 
                                        post.attributes.category_2 === 'Erfahrungsbericht' || 
                                        post.attributes.category_3 === 'Erfahrungsbericht'))
});
const newsPosts = computed(() => {
    return posts.value.filter(post => (post.attributes.category_1 === 'News' || 
                                post.attributes.category_2 === 'News' || 
                                post.attributes.category_3 === 'News') &&
                                post !== eventsPosts && post !== erfahrungsberichtePosts)
});
</script>
