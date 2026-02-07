<template>
  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-berlin-blue/40 backdrop-blur-md" @click="close"></div>

      <div class="relative w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">

        <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-white z-10">
          <h3 class="font-title text-berlin-blue font-bold">Charte Tarifaire & Services</h3>
          <button @click="close" class="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <AppIcon name="close" size="20" />
          </button>
        </div>

        <div class="overflow-y-auto p-8 md:p-12">

          <div ref="pdfContent" class="printable-content pdf-container space-y-10 p-4 bg-white">
            <header class="text-center border-b-4 border-berlin-gold pb-6">
              <h1 class="text-4xl font-title font-bold text-berlin-blue uppercase tracking-tighter">Berliner Weg</h1>
              <p class="text-berlin-gold font-bold tracking-widest text-xs uppercase mt-2">La clé du visa allemand</p>
              <p class="text-gray-500 text-sm mt-1 italic">Institut privé de langue allemande – Yaoundé, Biyem-Assi</p>
            </header>

            <section>
              <div class="flex items-center gap-3 mb-6">
                <div class="w-2 h-8 bg-berlin-gold"></div>
                <h2 class="text-2xl font-title text-berlin-blue uppercase">Cours de Langue</h2>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="tarif in tarifsCours" :key="tarif.title" class="p-5 border border-gray-100 rounded-2xl bg-gray-50/50">
                  <h3 class="text-berlin-blue font-bold">{{ tarif.title }}</h3>
                  <p class="text-xs text-gray-600 mb-2">{{ tarif.desc }}</p>
                  <p class="text-berlin-gold font-bold text-lg">{{ tarif.price }}</p>
                </div>
              </div>
            </section>

            <section class="html2pdf__page-break">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-2 h-8 bg-berlin-blue"></div>
                <h2 class="text-2xl font-title text-berlin-blue uppercase">Accompagnement Mobilité</h2>
              </div>
              <div class="space-y-4">
                <div v-for="serv in tarifsVisa" :key="serv.title" class="flex justify-between items-center p-4 border-b border-gray-100">
                  <div>
                    <h3 class="font-bold text-sm text-berlin-blue">{{ serv.title }}</h3>
                    <p class="text-xs text-gray-500">{{ serv.desc }}</p>
                  </div>
                  <span class="font-bold text-berlin-blue whitespace-nowrap ml-4">{{ serv.price }}</span>
                </div>
              </div>
            </section>

            <section>
              <div class="bg-berlin-blue text-white p-8 rounded-[2rem]">
                <h2 class="text-xl font-title mb-6 text-berlin-gold">Vos Avantages Inclus</h2>
                <div class="grid grid-cols-2 gap-6 text-[10px]">
                  <div v-for="adv in avantages" :key="adv" class="flex items-start gap-2">
                    <span class="text-berlin-gold">✔</span>
                    <p>{{ adv }}</p>
                  </div>
                </div>
              </div>
            </section>

            <footer class="text-[10px] text-center text-gray-400 pt-10 border-t border-gray-100">
              Document officiel Berliner Weg 2026 - www.berlinerweg.com<br>
              Siège : Face BICEC Biyem-Assi, Yaoundé.
            </footer>
          </div>

          <div class="mt-12 flex justify-center pb-10">
            <button @click="downloadPDF"
                    class="btn-primary flex items-center gap-3 px-10 py-4 shadow-xl shadow-berlin-blue/20">
              <AppIcon name="download" size="20" />
              <span>Télécharger la brochure PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import html2pdf from 'html2pdf.js/dist/html2pdf.bundle.min.js'

defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close'])

const pdfContent = ref<HTMLElement | null>(null)

const close = () => emit('close')

const downloadPDF = () => {
  // Un petit log pour confirmer l'action
  console.log("Préparation de l'impression...");
  window.print();
};
// Données pour la clarté du template
const tarifsCours = [
  { title: 'A1 – A2', desc: 'Initiation et base', price: '100 000 FCFA' },
  { title: 'B1 – B2', desc: 'Expression fluide', price: '120 000 FCFA' },
  { title: 'C1 – C2', desc: 'Perfectionnement', price: '150 000 FCFA' },
  { title: 'Vorbereitung', desc: 'Révision examen', price: '20 000 FCFA' }
]

const tarifsVisa = [
  { title: 'Visa Études (Admission)', desc: 'Recherche & Soumission', price: '1 200 000 FCFA' },
  { title: 'Visa Études (Entretien)', desc: 'Coaching & Audit', price: '300 000 FCFA' },
  { title: 'Soins Infirmiers', desc: 'Contrat & Suivi complet', price: '2 000 000 FCFA' }
]

const avantages = [
  "Accès illimité salle multimédia",
  "Clé USB de ressources offerte",
  "Jeux interactifs hebdomadaires",
  "Journées culturelles & Cinéma",
  "Optimisation de CV pro",
  "Support traduction certifiée"
]
</script>

<style scoped>
/* Force la police sans-serif propre pour le PDF */
.pdf-container {
  font-family: 'Inter', sans-serif;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media print {
  /* Masquer tout le reste du site (Sidebar, fond du modal, boutons) */
  :deep(aside), :deep(main), :deep(button), .absolute.inset-0 {
    display: none !important;
  }

  /* Forcer l'affichage du modal en plein écran sans bordures */
  .relative.w-full.max-w-5xl {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    max-width: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  /* Forcer les couleurs et les fonds (Important pour les badges et headers) */
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  /* Supprimer les marges par défaut du navigateur */
  @page {
    margin: 1cm;
  }

  /* Éviter de couper les sections en milieu de page */
  section {
    page-break-inside: avoid;
  }
}
</style>