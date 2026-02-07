import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
    const isSnackbarOpen = ref(false)
    const snackbarMessage = ref('')
    const snackbarType = ref<'success' | 'error' | 'info'>('success')

    const showSnackbar = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
        snackbarMessage.value = message
        snackbarType.value = type
        isSnackbarOpen.value = true

        // Fermeture automatique après 4 secondes
        setTimeout(() => {
            isSnackbarOpen.value = false
        }, 4000)
    }

    return { isSnackbarOpen, snackbarMessage, snackbarType, showSnackbar }
})