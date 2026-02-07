<template>
  <transition name="fade">
    <div v-if="isMobileOpen" @click="isMobileOpen = false" class="fixed inset-0 bg-berlin-blue/20 backdrop-blur-sm z-40 lg:hidden"></div>
  </transition>

  <aside
      :class="[
      'fixed top-0 left-0 h-full z-50 transition-all duration-500 ease-in-out border-r border-white/20 shadow-2xl bg-white/80 backdrop-blur-xl flex flex-col',
      isCollapsed ? 'w-20' : 'w-72',
      isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    ]"
  >
    <button
        @click="isCollapsed = !isCollapsed"
        class="hidden lg:flex absolute -right-3 top-10 w-6 h-6 bg-berlin-blue text-berlin-gold rounded-full items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <AppIcon :name="isCollapsed ? 'ui.chevron-right' : 'ui.close'" size="14" />
    </button>

    <div class="py-8 flex flex-col items-center overflow-hidden">
      <div class="p-3 bg-berlin-blue rounded-xl shadow-lg transition-all duration-500" :class="isCollapsed ? 'scale-75' : 'scale-100'">
        <AppIcon name="nav.school" size="32" class="text-berlin-gold" />
      </div>
      <transition name="fade">
        <div v-if="!isCollapsed" class="mt-4 text-center whitespace-nowrap">
          <h2 class="font-title font-bold text-berlin-blue text-lg tracking-tighter">BERLINER WEG</h2>
        </div>
      </transition>
    </div>

    <nav class="flex-1 px-3 space-y-2">
      <router-link
          v-for="item in menuItems" :key="item.path" :to="item.path"
          class="relative flex items-center h-12 rounded-xl transition-all duration-300 group hover:bg-berlin-blue hover:text-white text-berlin-grey overflow-hidden"
          active-class="bg-berlin-blue !text-white shadow-lg shadow-berlin-blue/30"
      >
        <div class="min-w-[56px] flex items-center justify-center">
          <AppIcon :name="item.icon" size="20" class="group-hover:scale-110 transition-transform" />
        </div>
        <transition name="slide-fade">
          <span v-if="!isCollapsed" class="font-title font-medium text-sm whitespace-nowrap">
            {{ item.name }}
          </span>
        </transition>

        <div v-if="isCollapsed" class="absolute left-16 bg-berlin-blue text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
          {{ item.name }}
        </div>
      </router-link>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import AppIcon from './AppIcon.vue'

const isCollapsed = ref(false)
const isMobileOpen = ref(false)

// Émettre l'état pour que le contenu principal s'ajuste
const emit = defineEmits(['toggle-collapse'])
watch(isCollapsed, (val) => emit('toggle-collapse', val))

const menuItems = [
  { name: 'Accueil', path: '/', icon: 'home' }, // au lieu de 'nav.home'
  { name: 'Formations', path: '/courses', icon: 'school' },
  { name: 'Visa', path: '/admission', icon: 'account' }, // ou le nom trouvé
  { name: 'Contact', path: '/contact', icon: 'email' },
]
</script>

<style scoped>
.slide-fade-enter-active { transition: all 0.3s ease-out; }
.slide-fade-leave-active { transition: all 0.2s ease-in; }
.slide-fade-enter-from, .slide-fade-leave-to { transform: translateX(-10px); opacity: 0; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>