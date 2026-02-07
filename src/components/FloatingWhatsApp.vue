<template>
  <div class="fixed bottom-8 right-8 z-[150] group">
    <div class="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none">
      <div class="bg-white text-berlin-blue text-xs font-bold px-4 py-2 rounded-xl shadow-xl border border-berlin-light whitespace-nowrap">
        Besoin d'aide ? Contactez-nous <span class="text-green-500">●</span>
      </div>
    </div>

    <a
        :href="whatsappUrl"
        target="_blank"
        class="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 hover:rotate-12 transition-all duration-300 active:scale-95"
    >
      <AppIcon name="whatsapp" size="32" />

      <span class="absolute top-0 right-0 flex h-4 w-4">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span class="relative inline-flex rounded-full h-4 w-4 bg-berlin-gold"></span>
      </span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppIcon from './AppIcon.vue'

const phoneNumber = "237650218023" // Format international sans le +
const message = "Bonjour Berliner Weg, j'aimerais avoir plus d'informations sur vos services d'accompagnement."

const whatsappUrl = computed(() => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
})
</script>