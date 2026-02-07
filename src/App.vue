<template>
  <div class="flex min-h-screen bg-berlin-light">
    <Sidebar @toggle-collapse="onSidebarToggle" />

    <main
        :class="[
        'flex-1 transition-all duration-500 ease-in-out min-w-0 flex flex-col',
        isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-72'
      ]"
    >
      <div class="flex-1 p-4 md:p-8">
        <router-view />
      </div>
      <AppSnackbar />
      <FloatingWhatsApp />
      <TheFooter />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import TheFooter from './components/TheFooter.vue' // Importation du footer
import AppSnackbar from './components/AppSnackbar.vue'
import FloatingWhatsApp from './components/FloatingWhatsApp.vue'

const isSidebarCollapsed = ref(false)
const onSidebarToggle = (collapsed: boolean) => {
  isSidebarCollapsed.value = collapsed
}
</script>