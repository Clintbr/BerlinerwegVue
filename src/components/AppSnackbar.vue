<template>
  <transition name="snackbar-fade">
    <div
        v-if="uiStore.isSnackbarOpen"
        class="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl min-w-[320px] backdrop-blur-xl border border-white/20"
        :class="[
        uiStore.snackbarType === 'success' ? 'bg-berlin-blue text-white' : 'bg-red-500 text-white'
      ]"
    >
      <div class="flex-1 flex items-center gap-3">
        <AppIcon
            :name="uiStore.snackbarType === 'success' ? 'check-circle' : 'alert-circle'"
            size="20"
            :class="uiStore.snackbarType === 'success' ? 'text-berlin-gold' : 'text-white'"
        />
        <span class="text-sm font-medium tracking-tight">{{ uiStore.snackbarMessage }}</span>
      </div>

      <button @click="uiStore.isSnackbarOpen = false" class="opacity-50 hover:opacity-100 transition-opacity">
        <AppIcon name="close" size="18" />
      </button>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useUiStore } from '../store/ui'
import AppIcon from './AppIcon.vue'

const uiStore = useUiStore()
</script>

<style scoped>
.snackbar-fade-enter-active, .snackbar-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.snackbar-fade-enter-from {
  opacity: 0;
  transform: translate(-50%, 20px) scale(0.95);
}
.snackbar-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 10px);
}
</style>