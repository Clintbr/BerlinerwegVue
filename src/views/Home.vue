<template>
  <div class="space-y-32 pb-32">
    <section v-reveal class="max-w-5xl mx-auto px-6">
      <div class="bg-berlin-blue rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
        <div class="absolute top-0 right-0 p-8 opacity-10">
          <AppIcon name="earth" size="120" class="text-white" />
        </div>
        <span class="text-berlin-gold font-bold tracking-[0.3em] uppercase text-sm mb-6 block">BERLINER WEG</span>
        <h2 class="text-3xl md:text-5xl text-white font-title mb-8 leading-tight">
          L'Allemagne, c'est pour <span class="text-berlin-gold italic">tout le monde.</span>
        </h2>
        <p class="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-10">
          Arrêtez de croire que c'est un luxe réservé aux autres. Étudier ou travailler en Allemagne est un projet qui se prépare avec les bons experts.
        </p>
        <button class="bg-white text-berlin-blue font-bold px-10 py-4 rounded-xl hover:bg-berlin-gold transition-colors duration-300">
          Brisez les mythes : Consultation 100% Gratuite
        </button>
      </div>
    </section>
    <section class="max-w-7xl mx-auto px-6 py-20">
      <div class="text-center mb-16">
        <h2 v-reveal class="text-4xl font-title text-berlin-blue uppercase tracking-tighter">
          Pourquoi choisir <span class="text-berlin-gold">Berliner Weg ?</span>
        </h2>
        <div v-reveal class="h-1 w-20 bg-berlin-gold mx-auto mt-4"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
        <div v-reveal class="group h-64 preserve-3d transition-transform duration-500 hover:rotate-x-12">
          <div class="absolute inset-0 bg-white border border-berlin-light rounded-[2rem] p-8 shadow-sm group-hover:shadow-xl group-hover:border-berlin-gold/30 transition-all flex flex-col justify-center items-center text-center">
            <div class="mb-4 p-3 bg-berlin-light rounded-full text-berlin-blue group-hover:bg-berlin-gold group-hover:text-berlin-blue transition-colors">
              <AppIcon name="lightbulb-on-outline" size="32" />
            </div>
            <h3 class="font-title font-bold text-berlin-blue mb-2">Orientation</h3>
            <p class="text-sm text-berlin-grey leading-relaxed">
              Ce n'est pas une question de fortune, mais de <span class="text-berlin-blue font-semibold">bonne information</span>.
            </p>
          </div>
        </div>

        <div v-reveal class="group h-64 preserve-3d transition-transform duration-500 hover:rotate-x-12">
          <div class="absolute inset-0 bg-berlin-blue rounded-[2rem] p-8 shadow-lg flex flex-col justify-center items-center text-center">
            <div class="mb-4 p-3 bg-white/10 rounded-full text-berlin-gold">
              <AppIcon name="shield-check-outline" size="32" />
            </div>
            <h3 class="font-title font-bold text-white mb-2">Accompagnement Réel</h3>
            <p class="text-sm text-blue-100 leading-relaxed">
              Cours de langue, Assistance visa et <span class="text-berlin-gold italic font-medium">accueil à l'arrivée</span>.
            </p>
          </div>
        </div>

        <div v-reveal class="group h-64 preserve-3d transition-transform duration-500 hover:rotate-x-12">
          <div class="absolute inset-0 bg-white border border-berlin-light rounded-[2rem] p-8 shadow-sm group-hover:shadow-xl group-hover:border-berlin-gold/30 transition-all flex flex-col justify-center items-center text-center">
            <div class="mb-4 p-3 bg-berlin-light rounded-full text-berlin-blue group-hover:bg-berlin-gold group-hover:text-berlin-blue transition-colors">
              <AppIcon name="chat-question-outline" size="32" />
            </div>
            <h3 class="font-title font-bold text-berlin-blue mb-2">Consultation 100% Gratuite</h3>
            <p class="text-sm text-berlin-grey leading-relaxed">
              Prenez rendez-vous à l'agence et <span class="text-berlin-blue font-semibold">brisez tous les mythes</span>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
      <div v-reveal class="space-y-6">
        <div class="flex items-center gap-4">
          <div class="h-1 w-12 bg-berlin-gold"></div>
          <span class="uppercase tracking-widest text-sm font-bold text-berlin-blue">Notre Vision</span>
        </div>
        <p class="text-2xl font-light text-berlin-grey leading-relaxed">
          Donner à chaque personne les clés de son <span class="text-berlin-blue font-semibold">rêve allemand</span> et être ainsi la passerelle vers des études ou une formation rémunérée en Allemagne.
        </p>
      </div>
      <div v-reveal class="space-y-6">
        <div class="flex items-center gap-4">
          <div class="h-1 w-12 bg-berlin-blue"></div>
          <span class="uppercase tracking-widest text-sm font-bold text-berlin-blue">Notre Mission</span>
        </div>
        <p class="text-2xl font-light text-berlin-grey leading-relaxed">
          Offrir une formation de qualité adaptée aux besoins des Camerounais, favoriser la réussite aux certifications officielles (Goethe, TestDaF, TELC) et fournir un soutien logistique complet.
        </p>
      </div>
    </section>

    <section v-reveal class="max-w-7xl mx-auto px-6 py-12">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-title text-berlin-blue uppercase tracking-tighter">
          Assistance <span class="text-berlin-gold">Personnalisée</span>
        </h2>
        <p class="text-berlin-grey mt-4 max-w-2xl mx-auto font-light">
          Maximisez vos chances de succès pour vos démarches d'études et de visa grâce à notre expertise.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div class="flex flex-col bg-white rounded-3xl border border-berlin-light shadow-sm hover:shadow-md transition-all duration-300 group">
          <div class="p-8">
            <div class="w-12 h-12 bg-berlin-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-berlin-blue transition-colors">
              <AppIcon name="school" size="24" class="text-berlin-blue group-hover:text-white" />
            </div>
            <h3 class="text-xl font-bold text-berlin-blue mb-4">Visa Études (Admission)</h3>
            <p class="text-berlin-grey text-sm leading-relaxed">
              Recherche universitaire ciblée et soumission des candidatures dans toutes les universités d'Allemagne selon votre profil.
            </p>
          </div>
          <div class="mt-auto p-6 bg-berlin-light/30 rounded-b-3xl border-t border-berlin-light">
            <span class="text-xs font-bold text-berlin-gold uppercase tracking-widest">Inclus dans le pack</span>
          </div>
        </div>

        <div class="flex flex-col bg-berlin-blue rounded-3xl shadow-xl transform md:-translate-y-4">
          <div class="p-8">
            <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <AppIcon name="account-voice" size="24" class="text-berlin-gold" />
            </div>
            <h3 class="text-xl font-bold text-white mb-4">Entretien de Visa</h3>
            <p class="text-blue-100 text-sm leading-relaxed">
              Préparation complète : simulations intensives d'entretien consulaire et vérification rigoureuse de la conformité de vos documents.
            </p>
          </div>
          <div class="mt-auto p-6 bg-white/5 rounded-b-3xl border-t border-white/10">
            <span class="text-xs font-bold text-berlin-gold uppercase tracking-widest">Recommandé</span>
          </div>
        </div>

        <div class="flex flex-col bg-white rounded-3xl border border-berlin-light shadow-sm hover:shadow-md transition-all duration-300 group">
          <div class="p-8">
            <div class="w-12 h-12 bg-berlin-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-berlin-blue transition-colors">
              <AppIcon name="hospital-building" size="24" class="text-berlin-blue group-hover:text-white" />
            </div>
            <h3 class="text-xl font-bold text-berlin-blue mb-4">Soins Infirmiers</h3>
            <p class="text-berlin-grey text-sm leading-relaxed">
              Accompagnement spécifique pour l'obtention de contrats dans les meilleures structures hospitalières d'Allemagne.
            </p>
          </div>
          <div class="mt-auto p-6 bg-berlin-light/30 rounded-b-3xl border-t border-berlin-light">
            <span class="text-xs font-bold text-berlin-gold uppercase tracking-widest">Spécialisé</span>
          </div>
        </div>

      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-reveal v-for="s in otherServices" :key="s" class="p-6 bg-white border border-berlin-light rounded-2xl flex items-center gap-4">
          <AppIcon name="check-decagram" class="text-berlin-gold" size="20" />
          <span class="text-sm font-medium text-berlin-blue">{{ s }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import AppIcon from '../components/AppIcon.vue'

const otherServices = [
  "Cours intensifs / Cours du soir",
  "Formation en ligne (Zoom)",
  "Traduction & Interprétation",
  "Orientation Études & Emploi"
]
</script>