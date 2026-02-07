import {computed} from "vue";

const whatsappUrl = computed(() => {
    const phoneNumber = "237650218023" // Format international sans le +
    const message = "Bonjour Berliner Weg, j'aimerais avoir plus d'informations sur vos services d'accompagnement."

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
})

export default whatsappUrl