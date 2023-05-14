<template>
    <div class="flex flex-col w-full h-80 rounded-lg cursor-pointer shadow-lg m-4">
        <img
            v-if="post.attributes.images.data != null" 
            :src="`${backendUrl}${post.attributes.images.data[0].attributes.url}`"
            alt="First post image"
            width="640"
            height="360"
            class="object-cover h-3/4 rounded">
        <img
            v-else
            :src="`${backendUrl}${defaultImgLocation}`"
            alt="Default post image"
            width="640"
            height="360"
            class="object-cover h-3/4 rounded">
        <!-- Project card text -->
        <div class="p-4 overflow-hidden">
            <p v-if="locale === 'de'" class="text-lg font-bold truncate">
                {{ post.attributes.title }}
            </p>
            <p v-else class="text-lg font-bold truncate">
                {{ post.attributes.localizations.data[0].attributes.title }}
            </p>
            <p v-if="locale === 'de'">
                {{ post.attributes.date_de }}
            </p>
            <p v-else>
                {{ post.attributes.date_en }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

defineProps({
    post: Object,
    backendUrl: String,
    defaultImgLocation: String,
    formattedDate: String
})
</script>