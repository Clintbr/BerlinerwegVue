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

    <div class="mt-12 flex justify-center pb-10">
      <a
          href="/brochure-berliner-weg.pdf"
          download="Berliner_Weg_Brochure_2026.pdf"
          class="flex items-center gap-3 bg-berlin-blue text-white px-10 py-4 rounded-xl shadow-xl shadow-berlin-blue/20 hover:bg-berlin-gold hover:scale-105 transition-all duration-300"
      >
        <AppIcon name="download" size="20" />
        <span class="font-bold tracking-wide">Télécharger la brochure officielle</span>
      </a>
    </div>

    <section>
      <div class="mb-12 text-center md:text-left">
        <span class="text-berlin-gold font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
          Apprentissage intensif
        </span>
        <h2 class="text-3xl md:text-4xl font-title font-bold text-berlin-blue relative inline-block">
          Nos Niveaux de Langue
          <div class="absolute -bottom-2 left-0 w-20 h-1 bg-berlin-gold rounded-full"></div>
        </h2>
        <p class="mt-6 text-berlin-grey max-w-2xl leading-relaxed">
          Choisissez le niveau adapté à vos objectifs. De l'initiation A1 à la maîtrise professionnelle B2.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <CourseCard
            v-for="course in courseStore.levels"
            :key="course.id"
            :course="course"
            @reserve="handleReserveClick"
        />
      </div>
    </section>

    <section class="bg-berlin-light/30 -mx-4 px-4 py-16 rounded-[3rem]">
      <div class="mb-12 text-center">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-berlin-gold/10 text-berlin-gold text-xs font-bold uppercase tracking-widest mb-4">
          <AppIcon name="star" size="14" />
          Solutions Complètes
        </span>
        <h2 class="text-3xl md:text-4xl font-title font-bold text-berlin-blue">
          Packs d'Accompagnement
        </h2>
        <p class="mt-4 text-berlin-grey max-w-xl mx-auto">
          Simplifiez votre projet d'expatriation avec nos formules "Tout-en-un" incluant cours, visa et placement.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <PackCard
            v-for="pack in courseStore.packs"
            :key="pack.id"
            :pack="pack"
            @select="handleReservePackClick"
        />
      </div>
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

    <ReservationModal
        :is-open="isModalOpen"
        :course-level="selectedLevel"
        :pack-title="selectedTitle"
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
import PackCard from "@/components/PackCard.vue";

const uiStore = useUiStore()
const courseStore = useCourseStore()

const isModalOpen = ref(false)
const isReservationForPack = ref(false)
const selectedLevel = ref('')
const selectedTitle = ref('')

const handleReserveClick = (courseId: string) => {
  const course = courseStore.levels.find(l => l.id === courseId)
  if (course) {
    selectedLevel.value = course.level
    isModalOpen.value = true
  }
}

const handleReservePackClick = (packId: string) => {
  const pack = courseStore.packs.find(l => l.id === packId)
  if (pack) {
    selectedTitle.value = pack.title
    isModalOpen.value = true
    isReservationForPack.value = true
  }
}

const processReservation = async (formData: any) => {
  try {
    uiStore.showSnackbar("Envoi de votre demande en cours...", "infos")

    // Paramètres correspondant aux {{variables}} de vos templates EmailJS
    const templateParams = {
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      tel: formData.tel,
      level: formData.level,
      reply_to: formData.email
    }

    const templateParamsPack = {
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      tel: formData.tel,
      pack: formData.title,
      reply_to: formData.email
    }

    if(isReservationForPack.value) {
      const response = await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID_PACK,
          templateParamsPack,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      isReservationForPack.value = false
      if (response.status === 200) {
        uiStore.showSnackbar(`Herzlich Willkommen ${formData.prenom} ! Votre réservation gratuite pour le pack ${formData.title} a été transmise.`, 'success')
        isModalOpen.value = false
      }
    } else {
      const response = await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID_COURS,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      if (response.status === 200) {
        uiStore.showSnackbar(`Herzlich Willkommen ${formData.prenom} ! Votre réservation pour le niveau ${formData.level} a été transmise.`, 'success')
        isModalOpen.value = false
      }
    }

  } catch (error) {
    console.error("Erreur EmailJS:", error)
    uiStore.showSnackbar("Oups ! Une erreur technique empêche l'envoi. Veuillez nous contacter par téléphone.", "error")
  }
}
</script>