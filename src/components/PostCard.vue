<template>
    <div class="flex flex-col w-full h-80 rounded-lg cursor-pointer shadow-lg">
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
            <p class="text-lg font-bold truncate">
                {{ post.attributes.title }}
            </p>
            <p>
                {{ post.attributes.date }}
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    post: Object,
    backendUrl: String,
    defaultImgLocation: String,
    formattedDate: String
})
</script>