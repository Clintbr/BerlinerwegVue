<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="currentColor"
      v-html="iconPath"
      :class="className"
  ></svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import iconsData from '@/assets/icons/mdi-icons.json'

interface Props {
  name: string;   // Le nom exact de l'icône (ex: "school" ou "home")
  size?: number | string;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  className: ''
})

const iconPath = computed(() => {
  // On cherche l'objet qui a le nom correspondant dans votre JSON
  const icon = iconsData.find(i => i.name === props.name)

  if (!icon) {
    console.warn(`Icon "${props.name}" non trouvée dans le fichier JSON`)
    return ''
  }

  return `<path d="${icon.path}" />`
})
</script>