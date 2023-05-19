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
            <div 
                @click.stop=""
                class="h-screen w-[60vw] blur-none bg-blue shadow-lg shadow-blue flex flex-col">
                <div class="flex-auto flex justify-center items-center">
                    <LanguageSwitcher />
                </div>
                <div class="flex-auto flex flex-col justify-center text-center text-4xl font-bold">
                    <div class="my-2">Swim</div>
                    <div class="my-2">Bike</div>
                    <div class="my-2">Run</div>
                </div>
                <div class="text-center font-bold text-4xl mb-2">__</div>
                <div class="flex-auto flex flex-col text-center text-xl">
                    <div class="my-1">{{ $t('nav.trial')}}</div>
                    <div class="my-1">{{ $t('nav.signup') }}</div>
                    <div class="my-1">Log in</div>
                </div>
                <div class="flex-auto grid grid-cols-2 gap-2 justify-items-center pb-6">
                    <a href="https://www.facebook.com/groups/triathlonclubzh/discussion/preview">
                        <i class="fa-brands fa-square-facebook text-4xl text-center"></i>
                    </a>
                    <a href="https://www.instagram.com/triclubzurich/">
                        <i class="fa-brands fa-square-instagram text-4xl text-center"></i>
                    </a>
                    <a href="">
                        <img src="/media/spond_logo.webp" alt="Spond logo" class="h-10 w-10">
                    </a>
                    <a href="https://signal.group/#CjQKIEFoQTFW-31k3rN-tZY48PlVIx_dSkqjTU2qJt-Xt7YtEhDWb4nDvt0pM_QhuiahqNSo">
                        <img src="/media/signal_logo.webp" alt="Signal logo" class="h-10 w-10">
                    </a>               
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

const props = defineProps({
    mobileNavOpen: Boolean
})

const emits = defineEmits(['update-mobile-nav-open'])
const updateMobileNav = () => {
    emits('update-mobile-nav-open', !props.mobileNavOpen);
}
</script>