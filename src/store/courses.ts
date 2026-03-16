import { defineStore } from 'pinia'

// Interface de base pour tout ce qui peut être affiché sous forme de carte
export interface BaseItem {
    id: string
    title: string
    description: string
    icon: string
}

// Interface spécifique aux cours
export interface Course extends BaseItem {
    level: string
    duration: string
    startDate: string
    price?: string
}


// Interface spécifique aux Packs
export interface Packages extends BaseItem {
    items: String[],
    price?: string,
}

export const useCourseStore = defineStore('courses', {
    state: () => ({
        levels: [
            {
                id: 'a1',
                level: 'A1',
                title: 'Débutant (Einstieg)',
                description: 'Apprenez les bases de la communication : se présenter, commander au restaurant, et la grammaire fondamentale.',
                duration: '2 mois',
                startDate: '16 Mars 2026',
                icon: 'nav.school',
                price: '100 000 fcfa',
            },
            {
                id: 'a2',
                level: 'A2',
                title: 'Élémentaire (Grundlagen)',
                description: 'Approfondissez vos connaissances et devenez capable de comprendre des expressions fréquentes.',
                duration: '2 mois',
                startDate: '16 Mars 2026',
                icon: 'nav.school',
                price: '100 000 fcfa',
            },
            {
                id: 'b1',
                level: 'B1',
                title: 'Intermédiaire (Zertifikat Deutsch B1)',
                description: 'Le niveau requis pour de nombreux visas. Communication fluide dans la vie quotidienne et professionnelle.',
                duration: '2,5 mois',
                startDate: '16 Mars 2026',
                icon: 'nav.school',
                price: '120 000 fcfa',
            },
            {
                id: 'b2',
                level: 'B2',
                title: 'Intermédiaire supérieur (Zertifikat Deutsch B2)',
                description: 'Comprendre et interagir avec un allemand avancé dans un contexte professionnel et académique.',
                duration: '2,5 mois',
                startDate: '16 Mars 2026',
                icon: 'nav.school',
                price: '120 000 fcfa',
            },
            {
                id: 'c1',
                level: 'C1',
                title: 'Avancé (Zertifikat Deutsch C1)',
                description: 'Maîtrise de la langue pour des études universitaires et des situations professionnelles complexes.',
                duration: '2,5 mois',
                startDate: '15 Septembre 2026',
                icon: 'nav.school',
                price: '130 000 fcfa',
            },
            {
                id: 'X',
                level: 'B1/B2/C1',
                title: 'Préparation (Vorbereitungskurse)',
                description: 'Préparation aux examens de langue Goethe, ÖSD. Gratuit pour les internes ',
                duration: '1 mois',
                startDate: 'tous les mois 2026',
                icon: 'nav.school',
                price: '20 000 fcfa',
            }
        ] as Course[],
        services: [
            {
                id: 'visa',
                title: 'Assistance Visa',
                description: 'Accompagnement complet pour la prise de rendez-vous et la constitution du dossier consulaire.',
                icon: 'nav.passport'
            }
        ] as BaseItem[],
        packs: [
            {
                id: 'p1',
                title: 'Pack Francfort (Langue)',
                description: 'La totalité de nos formations de langue allemande à moindre prix. Réservez directement pour les cours de tous les niveau de langue',
                items:  ['A1', 'A2', 'B1', 'B2', 'C1','frais d\'examens officiels non inclus'],
                price: '500 000 fcfa',
                icon: 'translate',
            },
            {
                id: 'p2',
                title: 'Pack Munich (Formation Infirmiers)',
                description: 'La totalité de nos formations de langue à moindre prix et un accompagnement total jusqu\'à obtention du contrat suivi du visa et d\'un accueil en grande pompe sur le territoire allemand',
                items:  ['Cours de langue', 'A1-B2', 'Contrats des Écoles', 'Visa','frais d\'examens officiels non inclus'],
                price: '2400 000 fcfa',
                icon: 'wallet-giftcard',
            },
            {
                id: 'p3',
                title: 'Pack Berlin (Études et Recherche)',
                description: 'La totalité de nos formations de langue à moindre prix et un accompagnement total jusqu\'à obtention du contrat suivi du visa et d\'un accueil en grande pompe sur le territoire allemand',
                items:  ['Cours de langue', 'A1-B2', 'Acceptation des Universités', 'Visa','frais d\'examens officiels non inclus'],
                price: '2400 000 fcfa',
                icon: 'wallet-giftcard',
            }
        ] as Packages[]
    })
})