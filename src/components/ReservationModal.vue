<template>
  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-berlin-blue/40 backdrop-blur-md" @click="close"></div>

      <div
          v-reveal
          class="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-8 md:p-12"
      >
        <button @click="close" class="absolute top-6 right-6 text-berlin-grey hover:text-berlin-blue transition-colors">
          <AppIcon name="close" size="24" />
        </button>

        <div class="mb-8">
          <span class="text-berlin-gold font-bold tracking-widest text-xs uppercase">Réservation</span>
          <h2 class="text-3xl font-title text-berlin-blue mt-2">Rejoindre le niveau {{ courseLevel }}</h2>
          <p class="text-berlin-grey text-sm mt-2">Complétez vos informations pour finaliser votre inscription.</p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-2">
              <label class="text-xs font-bold text-berlin-blue ml-2 tracking-wide">NOM</label>
              <input v-model="form.nom" type="text" required placeholder="Ex: Doe"
                     class="w-full px-6 py-4 bg-berlin-light rounded-2xl border-none focus:ring-2 focus:ring-berlin-gold transition-all outline-none text-sm" />
            </div>
            <div class="space-y-2">
              <label class="text-xs font-bold text-berlin-blue ml-2 tracking-wide">PRÉNOM</label>
              <input v-model="form.prenom" type="text" required placeholder="Ex: John"
                     class="w-full px-6 py-4 bg-berlin-light rounded-2xl border-none focus:ring-2 focus:ring-berlin-gold transition-all outline-none text-sm" />
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-xs font-bold text-berlin-blue ml-2 tracking-wide">EMAIL</label>
            <input v-model="form.email" type="email" required placeholder="john.doe@example.com"
                   class="w-full px-6 py-4 bg-berlin-light rounded-2xl border-none focus:ring-2 focus:ring-berlin-gold transition-all outline-none text-sm" />
          </div>

          <div class="space-y-2">
            <label class="text-xs font-bold text-berlin-blue ml-2 tracking-wide">TÉLÉPHONE (WHATSAPP)</label>
            <input v-model="form.tel" type="tel" required placeholder="Ex: +237 6..."
                   class="w-full px-6 py-4 bg-berlin-light rounded-2xl border-none focus:ring-2 focus:ring-berlin-gold transition-all outline-none text-sm" />
          </div>

          <button type="submit" class="btn-primary w-full py-5 rounded-2xl mt-4 shadow-lg shadow-berlin-blue/20 flex items-center justify-center gap-3">
            <span>Confirmer ma réservation</span>
            <AppIcon name="chevron-right" size="18" />
          </button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import AppIcon from './AppIcon.vue'

const props = defineProps<{
  isOpen: boolean
  courseLevel: string
}>()

const emit = defineEmits(['close', 'submit'])

const form = reactive({
  nom: '',
  prenom: '',
  email: '',
  tel: ''
})

const close = () => {
  emit('close')
}

const handleSubmit = () => {
  emit('submit', { ...form, level: props.courseLevel })

  // Réinitialisation propre
  form.nom = ''
  form.prenom = ''
  form.email = ''
  form.tel = ''
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>