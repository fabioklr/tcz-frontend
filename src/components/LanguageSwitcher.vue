<template>
    <div @click="switchLocale" class="cursor-pointer font-bold text-xl">
        {{ inactiveLocale }}
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const inactiveLocale = computed(() => {
    if (locale.value === 'en') {
        return 'de'
    } else {
        return 'en'
    }
})

const switchLocale = () => {
    if (locale.value === 'en') {
        locale.value = 'de'
    } else {
        locale.value = 'en'
    }
}
</script>