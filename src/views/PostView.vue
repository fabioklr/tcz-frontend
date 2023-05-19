<template>
    <div class="w-screen p-2 mt-6 mb-20">
        <!-- Main image as background with author, date and title in the bottom half -->
        <div class="relative h-80">
            <img
                v-if="post.attributes.images.data != null" 
                :src="`${backendUrl}${post.attributes.images.data[0].attributes.url}`"
                alt="First post image"
                class="object-cover w-full h-full absolute">
            <img
                v-else
                :src="`${backendUrl}${defaultImgLocation}`"
                alt="Default post image"
                class="object-cover w-full h-full absolute">
            <div class="flex relative text-white">
                <p v-if="locale === 'de'">{{ post.attributes.author }} |</p>
                <p v-else>{{ post.attributes.localizations.data[0].attributes.author }} |</p>
                <p v-if="locale === 'de'"> {{ post.attributes.date_de }}</p>
                <p v-else> {{ post.attributes.date_en }}</p>
            </div>
            <div class="relative">{{ post.attributes.title }}</div>
        </div>
        <!-- Post content -->
        <p v-if="locale === 'de'">{{ post.attributes.main }}</p>
        <p v-else>{{ post.attributes.localizations.data[0].attributes.main }}</p>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePostsStore } from '../stores/posts'
import { useHelpersStore } from '../stores/helpers'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const route = useRoute()
const postsStore = usePostsStore()
const { posts } = storeToRefs(postsStore)
const { backendUrl, defaultImgLocation } = useHelpersStore()

const post = computed(() => {
    return posts.value.find(post => post.id === Number(route.params.id))
})
</script>