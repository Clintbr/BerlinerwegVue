<template>
  <div
      class="group h-[420px] w-full perspective-1000 cursor-pointer"
      @click="isFlipped = !isFlipped"
  >
    <div
        :class="[
        'relative h-full w-full transition-transform duration-700 preserve-3d',
        isFlipped || 'group-hover:rotate-y-180',
        isFlipped ? 'rotate-y-180' : ''
      ]"
    >
      <div class="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-berlin-light">
        <div class="mb-6 p-4 bg-berlin-light rounded-full text-berlin-blue">
          <AppIcon name="school" size="48" />
        </div>
        <span class="text-berlin-gold font-title font-bold text-5xl mb-2">{{ course.level }}</span>
        <h3 class="text-xl text-center text-berlin-blue">{{ course.title }}</h3>
        <p class="mt-6 text-berlin-grey text-[10px] md:text-xs uppercase tracking-widest font-semibold">
          {{ isFlipped ? 'Cliquer pour masquer' : 'Cliquer pour les détails' }}
        </p>
      </div>

      <div class="absolute inset-0 backface-hidden rotate-y-180 flex flex-col p-8 bg-berlin-blue text-white rounded-2xl shadow-xl">
        <h3 class="text-white text-xl mb-4 border-b border-white/10 pb-4 font-title">{{ course.title }}</h3>

        <div class="flex-1 space-y-6">
          <p class="text-sm leading-relaxed text-blue-100/80">
            {{ course.description }}
          </p>

          <div class="space-y-3">
            <div class="flex items-center gap-3 text-sm">
              <div class="p-1.5 bg-white/10 rounded-md">
                <AppIcon name="school" size="16" class="text-berlin-gold" />
              </div>
              <span>Durée : <span class="font-semibold">{{ course.duration }}</span></span>
            </div>

            <div class="flex items-center gap-3 text-sm">
              <div class="p-1.5 bg-berlin-gold/20 rounded-md">
                <AppIcon name="home" size="16" class="text-berlin-gold" />
              </div>
              <span class="text-berlin-gold font-bold uppercase tracking-tight">
                Rentrée : {{ course.startDate }}
              </span>
            </div>
          </div>
        </div>

        <button
            @click.stop="$emit('reserve', course)"
            class="btn-primary w-full mt-6 shadow-lg shadow-berlin-gold/20 z-10"
        >
          Réserver ma place
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppIcon from './AppIcon.vue'

interface Course {
  id: string;
  level: string;
  title: string;
  description: string;
  duration: string;
  startDate: string;
  icon: string;
}

defineProps<{
  course: Course
}>()

const emit = defineEmits(['reserve'])

// État pour gérer le retournement au clic
const isFlipped = ref(false)
</script>