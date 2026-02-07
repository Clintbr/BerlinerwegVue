<template>
  <div class="space-y-20 pb-20">
    <header v-reveal class="max-w-4xl">
      <span class="text-berlin-gold font-bold tracking-[0.3em] uppercase text-sm block mb-4">Accompagnement Stratégique</span>
      <h1 class="text-5xl md:text-6xl font-title text-berlin-blue mb-6 italic">
        Votre pont vers l'Allemagne.
      </h1>
      <p class="text-xl text-berlin-grey font-light leading-relaxed">
        Nous ne nous contentons pas de remplir des formulaires. Nous bâtissons avec vous un dossier solide, cohérent et optimisé pour maximiser vos chances de succès.
      </p>
    </header>

    <section class="space-y-12">
      <div class="flex items-center gap-4">
        <h2 class="text-2xl font-title text-berlin-blue uppercase">Les étapes clés</h2>
        <div class="h-[1px] flex-1 bg-berlin-light"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div @click="scrollTo('service-admission')" v-reveal class="group p-10 bg-white rounded-[2.5rem] border border-berlin-light hover:border-berlin-gold transition-all duration-500 shadow-sm hover:shadow-xl">
          <div class="text-5xl font-title text-berlin-light group-hover:text-berlin-gold/20 transition-colors mb-6">01</div>
          <h3 class="text-2xl font-bold text-berlin-blue mb-4">Admission Études</h3>
          <p class="text-berlin-grey text-sm leading-relaxed mb-6">
            Recherche universitaire approfondie et soumission des candidatures dans les établissements correspondant à votre profil académique.
          </p>
          <ul class="space-y-3 text-xs font-bold text-berlin-blue">
            <li class="flex items-center gap-2"><AppIcon name="check" size="14" class="text-berlin-gold"/> Choix des universités</li>
            <li class="flex items-center gap-2"><AppIcon name="check" size="14" class="text-berlin-gold"/> Gestion de dossier Uni-Assist</li>
          </ul>
        </div>

        <div @click="scrollTo('service-visa')" v-reveal class="group p-10 bg-berlin-blue rounded-[2.5rem] shadow-2xl transform lg:-translate-y-6">
          <div class="text-5xl font-title text-white/10 mb-6">02</div>
          <h3 class="text-2xl font-bold text-white mb-4">Préparation Visa</h3>
          <p class="text-blue-100 text-sm leading-relaxed mb-6">
            La phase critique. Nous simulons vos entretiens consulaires et vérifions méticuleusement chaque pièce de votre dossier.
          </p>
          <ul class="space-y-3 text-xs font-bold text-berlin-gold">
            <li class="flex items-center gap-2"><AppIcon name="microphone" size="14"/> Coaching entretien (Simulation)</li>
            <li class="flex items-center gap-2"><AppIcon name="file-check" size="14"/> Audit de conformité des documents</li>
          </ul>
        </div>

        <div @click="scrollTo('service-infirmier')" v-reveal class="group p-10 bg-white rounded-[2.5rem] border border-berlin-light hover:border-berlin-gold transition-all duration-500 shadow-sm hover:shadow-xl">
          <div class="text-5xl font-title text-berlin-light group-hover:text-berlin-gold/20 transition-colors mb-6">03</div>
          <h3 class="text-2xl font-bold text-berlin-blue mb-4">Projet Infirmier</h3>
          <p class="text-berlin-grey text-sm leading-relaxed mb-6">
            Un programme spécifique pour les professionnels de santé souhaitant intégrer les meilleures structures hospitalières allemandes.
          </p>
          <ul class="space-y-3 text-xs font-bold text-berlin-blue">
            <li class="flex items-center gap-2"><AppIcon name="hospital" size="14" class="text-berlin-gold"/> Placement en hôpital</li>
            <li class="flex items-center gap-2"><AppIcon name="check" size="14" class="text-berlin-gold"/> Suivi du contrat de travail</li>
          </ul>
        </div>
      </div>
    </section>

    <section v-reveal class="bg-berlin-light/30 rounded-[3rem] p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div class="space-y-6">
        <h2 class="text-3xl font-title text-berlin-blue">Services Complémentaires</h2>
        <div class="space-y-4">
          <div class="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
            <AppIcon name="translate" class="text-berlin-gold" size="24"/>
            <span class="text-berlin-blue font-medium">Traduction & Interprétation (Fr/All)</span>
          </div>
          <div class="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
            <AppIcon name="briefcase-outline" class="text-berlin-gold" size="24"/>
            <span class="text-berlin-blue font-medium">Orientation Emploi en Allemagne</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-start space-y-4">
        <p class="text-berlin-grey italic">"Comprenez la procédure de A à Z sans dépenser un franc lors de votre consultation initiale."</p>
        <button class="btn-primary" @click="contactExpert">Prendre rendez-vous gratuitement</button>
      </div>
    </section>
    <section id="service-admission" v-reveal class="max-w-6xl mx-auto px-6 py-20">
      <div class="mb-16">
        <span class="text-berlin-gold font-bold tracking-widest text-xs uppercase italic">Service : Admission Études</span>
        <h2 class="text-4xl font-title text-berlin-blue mt-4">Accompagnement de A à Z</h2>
        <p class="text-berlin-grey mt-4 max-w-2xl font-light">
          Nous transformons votre projet d'études en réalité grâce à une méthodologie rigoureuse et personnalisée.
        </p>
      </div>

      <div class="relative">
        <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-berlin-light/50"></div>

        <div class="space-y-12 md:space-y-24">

          <div class="relative flex flex-col md:flex-row items-center justify-between">
            <div v-reveal class="md:w-[45%] bg-white p-8 rounded-[2rem] border border-berlin-light shadow-sm hover:shadow-md transition-shadow">
              <span class="text-berlin-gold font-title text-xl italic">01. Analyse & Diagnostic</span>
              <h4 class="text-berlin-blue font-bold mb-4 mt-2">Évaluation de votre profil académique</h4>
              <ul class="text-sm text-berlin-grey space-y-2 leading-relaxed">
                <li>• Analyse du parcours scolaire et universitaire</li>
                <li>• Évaluation du niveau linguistique (Fr, En, All)</li>
                <li>• Définition du projet d'études et objectifs pros</li>
              </ul>
            </div>
            <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-berlin-gold rounded-full border-4 border-white z-10"></div>
            <div v-reveal class="md:w-[45%] mt-8 md:mt-0 bg-berlin-light/20 p-8 rounded-[2rem] border border-transparent">
              <span class="text-berlin-blue font-title text-xl italic">02. Orientation Stratégique</span>
              <h4 class="text-berlin-blue font-bold mb-4 mt-2">Choix des filières adaptées</h4>
              <p class="text-sm text-berlin-grey leading-relaxed">
                Proposition de programmes personnalisés, conseils sur les prérequis et vérification de l'équivalence des diplômes.
              </p>
            </div>
          </div>

          <div class="relative flex flex-col md:flex-row-reverse items-center justify-between">
            <div v-reveal class="md:w-[45%] bg-white p-8 rounded-[2rem] border border-berlin-light shadow-sm hover:shadow-md transition-shadow">
              <span class="text-berlin-gold font-title text-xl italic">03. Recherche Approfondie</span>
              <h4 class="text-berlin-blue font-bold mb-4 mt-2">Sélection des établissements</h4>
              <p class="text-sm text-berlin-grey leading-relaxed">
                Comparaison des programmes, analyse des frais de scolarité, des débouchés et des délais d'admission.
              </p>
            </div>
            <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-berlin-blue rounded-full border-4 border-white z-10"></div>
            <div v-reveal class="md:w-[45%] mt-8 md:mt-0 bg-berlin-light/20 p-8 rounded-[2rem]">
              <span class="text-berlin-blue font-title text-xl italic">04. Préparation Linguistique</span>
              <h4 class="text-berlin-blue font-bold mb-4 mt-2">Mise à niveau</h4>
              <p class="text-sm text-berlin-grey leading-relaxed">
                Orientation vers les cours de langue adaptés et préparation intensive aux tests officiels requis.
              </p>
            </div>
          </div>

          <div class="relative flex flex-col md:flex-row items-center justify-between">
            <div v-reveal class="md:w-[45%] bg-white p-8 rounded-[2rem] border border-berlin-light shadow-sm hover:shadow-md transition-shadow">
              <span class="text-berlin-gold font-title text-xl italic">05. Constitution du Dossier</span>
              <h4 class="text-berlin-blue font-bold mb-4 mt-2">Optimisation de la candidature</h4>
              <ul class="text-sm text-berlin-grey space-y-2 leading-relaxed">
                <li>• Rédaction de CV et lettres de motivation</li>
                <li>• Traduction certifiée des documents officiels</li>
                <li>• Vérification rigoureuse de la conformité</li>
              </ul>
            </div>
            <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-berlin-gold rounded-full border-4 border-white z-10"></div>
            <div v-reveal class="md:w-[45%] mt-8 md:mt-0 bg-berlin-light/20 p-8 rounded-[2rem]">
              <span class="text-berlin-blue font-title text-xl italic">06. Soumission & Dépôt</span>
              <h4 class="text-berlin-blue font-bold mb-4 mt-2">Gestion des plateformes</h4>
              <p class="text-sm text-berlin-grey leading-relaxed">
                Création des comptes universitaires, dépôt dans les délais et suivi interactif des réponses.
              </p>
            </div>
          </div>

          <div class="relative flex flex-col md:flex-row-reverse items-center justify-between">
            <div v-reveal class="md:w-[45%] bg-berlin-blue text-white p-8 rounded-[2rem] shadow-xl">
              <span class="text-berlin-gold font-title text-xl italic">07. Décision Finale</span>
              <h4 class="font-bold mb-4 mt-2">Choix de l'établissement</h4>
              <p class="text-sm text-blue-100 leading-relaxed">
                Analyse des admissions, aide au choix final et conseils stratégiques pour l'acceptation de l'offre.
              </p>
            </div>
            <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-berlin-gold rounded-full border-4 border-white z-10 shadow-lg shadow-berlin-gold/50"></div>
            <div v-reveal class="md:w-[45%] mt-8 md:mt-0 bg-white p-8 rounded-[2rem] border border-berlin-light">
              <span class="text-berlin-blue font-title text-xl italic">08. Assistance Post-Admission</span>
              <h4 class="text-berlin-blue font-bold mb-4 mt-2">Préparation au départ</h4>
              <p class="text-sm text-berlin-grey leading-relaxed">
                Aide à l'inscription définitive et conseils logistiques (logement, assurance, vie en Allemagne).
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section id="service-infirmier" v-reveal class="max-w-7xl mx-auto px-6 py-24 bg-white rounded-[4rem] shadow-sm border border-berlin-light/50 my-20">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div class="max-w-2xl">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-berlin-blue rounded-xl flex items-center justify-center text-berlin-gold">
              <AppIcon name="ambulance" size="24" class="text-berlin-gold" />
            </div>
            <span class="text-berlin-gold font-bold tracking-widest text-xs uppercase italic">Service Spécialisé</span>
          </div>
          <h2 class="text-4xl font-title text-berlin-blue">Projet Infirmier <span class="text-berlin-gold italic">Elite</span></h2>
          <p class="text-berlin-grey mt-4 font-light leading-relaxed">
            Accompagnement d'élite pour les professionnels de santé. Nous facilitons votre intégration dans le système hospitalier allemand, de la reconnaissance de votre diplôme jusqu'à votre premier jour de garde.
          </p>
        </div>
        <div class="hidden lg:block">
          <AppIcon name="medical-bag" size="80" class="text-berlin-light opacity-30" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div class="group p-8 bg-berlin-light/20 rounded-[2rem] hover:bg-white hover:shadow-xl hover:border-berlin-gold/30 border border-transparent transition-all duration-500">
          <div class="text-xs font-bold text-berlin-blue/40 mb-6 tracking-tighter uppercase">Phase 01 — Diagnostic</div>
          <h4 class="font-bold text-berlin-blue mb-4 uppercase text-sm tracking-wide">Audit de Profil</h4>
          <ul class="text-xs text-berlin-grey space-y-3 leading-relaxed">
            <li>• Étude du diplôme & expérience</li>
            <li>• Vérification de l'éligibilité (Anerkennung)</li>
            <li>• Évaluation linguistique médicale</li>
          </ul>
        </div>

        <div class="group p-8 bg-berlin-light/20 rounded-[2rem] hover:bg-white hover:shadow-xl hover:border-berlin-gold/30 border border-transparent transition-all duration-500">
          <div class="text-xs font-bold text-berlin-blue/40 mb-6 tracking-tighter uppercase">Phase 02 — Immersion</div>
          <h4 class="font-bold text-berlin-blue mb-4 uppercase text-sm tracking-wide">Orientation Santé</h4>
          <ul class="text-xs text-berlin-grey space-y-3 leading-relaxed">
            <li>• Présentation du système hospitalier</li>
            <li>• Droits, devoirs & salaires</li>
            <li>• Allemand médical (B1/B2)</li>
          </ul>
        </div>

        <div class="group p-8 bg-berlin-light/20 rounded-[2rem] hover:bg-white hover:shadow-xl hover:border-berlin-gold/30 border border-transparent transition-all duration-500">
          <div class="text-xs font-bold text-berlin-blue/40 mb-6 tracking-tighter uppercase">Phase 03 — Dossier</div>
          <h4 class="font-bold text-berlin-blue mb-4 uppercase text-sm tracking-wide">Marketing Pro</h4>
          <ul class="text-xs text-berlin-grey space-y-3 leading-relaxed">
            <li>• CV Infirmier (Format Allemand)</li>
            <li>• Traduction certifiée des titres</li>
            <li>• Dossier de reconnaissance diplôme</li>
          </ul>
        </div>

        <div class="group p-8 bg-berlin-blue rounded-[2rem] shadow-xl text-white transform hover:-translate-y-2 transition-transform duration-500">
          <div class="text-xs font-bold text-berlin-gold mb-6 tracking-tighter uppercase">Phase 04 — Carrière</div>
          <h4 class="font-bold text-white mb-4 uppercase text-sm tracking-wide text-berlin-gold">Recrutement & Placement</h4>
          <ul class="text-xs text-blue-100 space-y-3 leading-relaxed">
            <li>• Identification d'hôpitaux partenaires</li>
            <li>• Négociation de contrat (Poste/Salaire)</li>
            <li>• Obtention de l'offre ferme</li>
          </ul>
        </div>

      </div>

      <div class="mt-12 p-8 border-t border-berlin-light flex flex-col lg:flex-row gap-8 items-center justify-between">
        <div class="flex items-start gap-4 max-w-xl">
          <AppIcon name="shield-check" size="32" class="text-berlin-gold flex-shrink-0" />
          <p class="text-sm text-berlin-grey italic">
            "Notre engagement ne s'arrête pas à la signature. Nous assurons un <strong>suivi post-recrutement</strong> et une médiation avec l'employeur durant votre période d'intégration en Allemagne."
          </p>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <div class="flex items-center gap-2 px-4 py-2 bg-berlin-light rounded-full text-[10px] font-bold text-berlin-blue uppercase">
            <AppIcon name="home-city" size="14" /> Aide au Logement
          </div>
          <div class="flex items-center gap-2 px-4 py-2 bg-berlin-light rounded-full text-[10px] font-bold text-berlin-blue uppercase">
            <AppIcon name="card-account-details" size="14" /> Démarches Administratives
          </div>
        </div>
      </div>
    </section>
    <section id="service-visa" v-reveal class="max-w-7xl mx-auto px-6 py-24">
      <div class="bg-berlin-blue rounded-[3rem] overflow-hidden shadow-2xl relative">
        <div class="absolute top-0 right-0 w-64 h-64 bg-berlin-gold opacity-5 rounded-full -mr-20 -mt-20"></div>

        <div class="p-8 md:p-16 relative z-10">
          <div class="max-w-3xl mb-16">
            <div class="flex items-center gap-3 mb-6">
          <span class="px-3 py-1 bg-berlin-gold/20 text-berlin-gold text-[10px] font-bold uppercase tracking-[0.2em] rounded-md border border-berlin-gold/30">
            Phase Critique
          </span>
            </div>
            <h2 class="text-4xl md:text-5xl font-title text-white mb-6">
              Maximisez vos chances : <span class="text-berlin-gold italic">L'Entretien Visa</span>
            </h2>
            <p class="text-blue-100 text-lg font-light leading-relaxed">
              Un dossier parfait ne suffit pas si l'entretien échoue. Notre méthodologie de coaching transforme vos doutes en une argumentation solide et convaincante face aux exigences consulaires.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div class="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors group">
              <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <AppIcon name="file" size="24" class="text-berlin-gold" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4 italic">Audit & Analyse</h3>
              <ul class="text-sm text-blue-100/70 space-y-3 font-light">
                <li class="flex items-start gap-2">
                  <AppIcon name="chevron-right" size="14" class="mt-1 text-berlin-gold"/>
                  Identification du visa adapté & analyse des exigences consulaires.
                </li>
                <li class="flex items-start gap-2">
                  <AppIcon name="chevron-right" size="14" class="mt-1 text-berlin-gold"/>
                  Contrôle de cohérence entre projet, documents et déclarations.
                </li>
              </ul>
            </div>

            <div class="bg-white p-8 rounded-[2rem] shadow-xl transform lg:scale-105 border-t-4 border-berlin-gold">
              <div class="w-12 h-12 bg-berlin-blue rounded-xl flex items-center justify-center mb-6">
                <AppIcon name="bullhorn" size="24" class="text-berlin-gold" />
              </div>
              <h3 class="text-xl font-bold text-berlin-blue mb-4 uppercase tracking-tighter">Coaching Intensif</h3>
              <p class="text-berlin-grey text-sm mb-6 leading-relaxed">
                <strong>Simulation d'entretien en conditions réelles.</strong> Nous travaillons votre attitude, votre gestion du stress et la structure de vos réponses.
              </p>
              <div class="bg-berlin-light p-4 rounded-xl">
                <span class="text-[10px] font-bold text-berlin-blue uppercase tracking-widest block mb-2 underline decoration-berlin-gold">Points clés :</span>
                <div class="flex flex-wrap gap-2">
                  <span class="text-[9px] bg-white px-2 py-1 rounded border border-berlin-light text-berlin-grey">Questions réelles</span>
                  <span class="text-[9px] bg-white px-2 py-1 rounded border border-berlin-light text-berlin-grey">Arguments clés</span>
                  <span class="text-[9px] bg-white px-2 py-1 rounded border border-berlin-light text-berlin-grey">Body Language</span>
                </div>
              </div>
            </div>

            <div class="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors group">
              <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <AppIcon name="chart-timeline" size="24" class="text-berlin-gold" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4 italic">Dépôt & Suivi</h3>
              <ul class="text-sm text-blue-100/70 space-y-3 font-light">
                <li class="flex items-start gap-2">
                  <AppIcon name="chevron-right" size="14" class="mt-1 text-berlin-gold"/>
                  Relecture finale de cohérence globale (Financement / Travail).
                </li>
                <li class="flex items-start gap-2">
                  <AppIcon name="chevron-right" size="14" class="mt-1 text-berlin-gold"/>
                  Analyse post-entretien & assistance en cas de réexamen du dossier.
                </li>
              </ul>
            </div>

          </div>

          <div class="mt-16 flex flex-col md:flex-row items-center gap-8 border-t border-white/10 pt-10">
            <div class="flex -space-x-3">
              <div v-for="i in 3" :key="i" class="w-10 h-10 rounded-full border-2 border-berlin-blue bg-berlin-light flex items-center justify-center text-berlin-blue font-bold text-[10px]">
                BW
              </div>
            </div>
            <p class="text-blue-100/60 text-xs italic text-center md:text-left">
              "Chaque candidat est unique. Nos simulations s'adaptent à votre parcours pour une préparation sans faille."
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useUiStore } from '../store/ui'
import AppIcon from "@/components/AppIcon.vue";

const uiStore = useUiStore()

const contactExpert = () => {
  // Redirige vers la page contact ou ouvre la modal
  uiStore.showSnackbar("Redirection vers nos experts...", "info")
}

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
</script>