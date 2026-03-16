<template>
  <div
      class="group h-[450px] w-full perspective-1000 cursor-pointer"
      @click="isFlipped = !isFlipped"
  >
    <div
        :class="[
        'relative h-full w-full transition-transform duration-700 preserve-3d',
        isFlipped ? 'rotate-y-180' : ''
      ]"
    >
      <div class="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-berlin-light">
        <div class="mb-6 p-4 bg-berlin-gold/10 rounded-full text-berlin-gold">
          <AppIcon :name="pack.icon || 'wallet-giftcard'" size="48" />
        </div>

        <h3 class="text-2xl font-bold text-center text-berlin-blue mb-4">{{ pack.title }}</h3>

        <div class="text-berlin-gold font-title font-bold text-2xl mb-2">
          {{ pack.price }}
        </div>

        <p class="mt-8 text-berlin-grey text-[10px] uppercase tracking-widest font-semibold flex items-center gap-2">
          <AppIcon name="gesture-tap" size="14" />
          {{ isFlipped ? 'Masquer les détails' : 'Voir les avantages' }}
        </p>
      </div>

      <div class="absolute inset-0 backface-hidden rotate-y-180 flex flex-col p-8 bg-berlin-blue text-white rounded-2xl shadow-xl overflow-hidden">
        <h3 class="text-white text-lg mb-4 border-b border-white/10 pb-4 font-title">{{ pack.title }}</h3>

        <div class="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
          <p class="text-xs leading-relaxed text-blue-100/90 italic">
            {{ pack.description }}
          </p>

          <div class="space-y-2">
            <p class="text-[10px] uppercase tracking-widest text-berlin-gold font-bold">Inclus dans le pack :</p>
            <div v-for="(item, index) in pack.items" :key="index" class="flex items-center gap-3 text-sm">
              <div v-if="item == 'frais d\'examens officiels non inclus'" class="text-red-400">
                <AppIcon name="close-circle" size="16" />
              </div>
              <div v-else class="text-berlin-gold">
                <AppIcon name="check-circle" size="16" />
              </div>
              <span class="text-blue-50 font-medium">{{ item }}</span>
            </div>
          </div>
        </div>

        <button
            @click.stop="$emit('select', pack.id)"
            class="bg-berlin-gold hover:bg-white hover:text-berlin-blue text-berlin-blue font-bold py-3 rounded-xl transition-all duration-300 mt-6 shadow-lg z-50 relative"
        >
          Choisir ce pack
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppIcon from './AppIcon.vue'

interface Pack {
  id: string;
  title: string;
  description: string;
  items: string[];
  price: string;
  icon: string;
}

defineProps<{
  pack: Pack
}>()

const emit = defineEmits(['select'])

const isFlipped = ref(false)
</script>
