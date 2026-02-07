<template>
  <div class="space-y-16">
    <header v-reveal class="max-w-4xl">
      <span class="text-berlin-gold font-bold tracking-[0.3em] uppercase text-sm block mb-4">Formations linguistiques</span>
      <h1 class="text-5xl md:text-6xl font-title text-berlin-blue mb-6">
        Apprenez l'Allemand avec <span class="italic">Rigueur</span>
      </h1>
      <p class="text-xl text-berlin-grey font-light leading-relaxed">
        Nos cursus sont alignés sur le Cadre européen commun de référence pour les langues (CECRL) pour garantir votre succès aux examens officiels.
      </p>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      <CourseCard
          v-for="course in courseStore.levels"
          :key="course.id"
          :course="course"
          @reserve="handleReserveClick"
      />
    </section>

    <section v-reveal class="bg-berlin-blue text-white rounded-[3rem] p-10 md:p-16 mt-20">
      <div class="flex flex-col md:flex-row gap-12 items-center">
        <div class="flex-1 space-y-6">
          <h2 class="text-3xl font-title">Cours du soir & Intensifs</h2>
          <p class="text-blue-100/80 leading-relaxed">
            Vous travaillez ou étudiez déjà ? Nous proposons des horaires flexibles pour s'adapter à votre emploi du temps sans compromettre la qualité de l'apprentissage.
          </p>
          <div class="flex flex-wrap gap-4">
            <span class="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">Sessions Zoom disponibles</span>
            <span class="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">Supports de cours inclus</span>
          </div>
        </div>
      </div>
    </section>

    <ReservationModal
        :is-open="isModalOpen"
        :course-level="selectedLevel"
        @close="isModalOpen = false"
        @submit="processReservation"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import { useCourseStore } from '../store/courses'
import { useUiStore } from '../store/ui'
import CourseCard from '../components/CourseCard.vue'
import ReservationModal from '../components/ReservationModal.vue'

const uiStore = useUiStore()
const courseStore = useCourseStore()

const isModalOpen = ref(false)
const selectedLevel = ref('')

const handleReserveClick = (courseId: string) => {
  const course = courseStore.levels.find(l => l.id === courseId)
  if (course) {
    selectedLevel.value = course.level
    isModalOpen.value = true
  }
}

const processReservation = async (formData: any) => {
  try {
    uiStore.showSnackbar("Envoi de votre demande en cours...", "info")

    // Paramètres correspondant aux {{variables}} de vos templates EmailJS
    const templateParams = {
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      tel: formData.tel,
      level: formData.level,
      reply_to: formData.email
    }

    const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    if (response.status === 200) {
      uiStore.showSnackbar(`Herzlich Willkommen ${formData.prenom} ! Votre réservation pour le niveau ${formData.level} a été transmise.`, 'success')
      isModalOpen.value = false
    }
  } catch (error) {
    console.error("Erreur EmailJS:", error)
    uiStore.showSnackbar("Oups ! Une erreur technique empêche l'envoi. Veuillez nous contacter par téléphone.", "error")
  }
}
</script>