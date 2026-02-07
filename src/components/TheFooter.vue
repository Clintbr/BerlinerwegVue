<template>
  <footer class="mt-20 border-t border-berlin-light bg-white">
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <div class="p-2 bg-berlin-blue rounded-lg">
              <AppIcon name="school" size="24" class="text-berlin-gold" />
            </div>
            <span class="font-title font-bold text-xl text-berlin-blue tracking-tighter">
              BERLINER <span class="text-berlin-gold">WEG</span>
            </span>
          </div>
          <p class="text-3xl text-berlin-blue italic leading-tight">
            La clé du visa allemand.
          </p>
          <p class="text-sm text-berlin-grey max-w-xs">
            Institut privé de formation linguistique et accompagnement stratégique pour la mobilité vers l'Allemagne.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
          <div>
            <p class="text-berlin-gold uppercase tracking-widest font-bold text-xs mb-4">Siège Social</p>
            <p class="text-berlin-blue text-sm leading-relaxed">
              Immeuble en face BICEC Biyem-assi,<br>
              3e étage, Yaoundé - Cameroun
            </p>
          </div>
          <div>
            <p class="text-berlin-gold uppercase tracking-widest font-bold text-xs mb-4">Administration</p>
            <p class="text-berlin-blue text-sm">
              Dénomination : Berliner Weg<br>
              Forme : Institut Privé de Formation
            </p>
          </div>
        </div>

        <div class="space-y-6 bg-berlin-light/30 p-8 rounded-3xl">
          <p class="text-berlin-blue font-bold">Nous contacter</p>
          <div class="space-y-4">
            <div class="flex gap-4 items-center group">
              <AppIcon name="phone" size="18" class="text-berlin-gold" />
              <p class="text-berlin-grey text-sm group-hover:text-berlin-blue transition-colors">
                +237 650 21 80 23 / +237 697 51 67 40<br>
                <span class="text-[11px]">+49 178 2103854 (Allemagne)</span>
              </p>
            </div>
            <div class="flex gap-4 items-center group">
              <AppIcon name="email" size="18" class="text-berlin-gold" />
              <p class="text-berlin-grey text-sm group-hover:text-berlin-blue transition-colors">
                berlinerweg.contact@gmail.com
              </p>
            </div>
          </div>
        </div>

      </div>

      <div class="mt-16 pt-8 border-t border-berlin-light flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-[11px] text-berlin-grey uppercase tracking-widest">
          © {{ new Date().getFullYear() }} Berliner Weg. Tous droits réservés.
        </p>
        <div class="flex gap-6">
          <a href="#" class="text-[11px] text-berlin-grey hover:text-berlin-gold transition-colors">Mentions Légales</a>
          <a href="#" class="text-[11px] text-berlin-grey hover:text-berlin-gold transition-colors">Confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import AppIcon from './AppIcon.vue'
</script>