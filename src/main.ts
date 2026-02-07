// src/main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/styles/globals.css'

const app = createApp(App)

// Directive personnalisée pour le "Reveal on Scroll"
app.directive('reveal', {
    mounted(el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(30px)'
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    el.style.opacity = '1'
                    el.style.transform = 'translateY(0)'
                }
            })
        }, { threshold: 0.1 })

        observer.observe(el)
    }
})

app.use(createPinia())
app.use(router)
app.mount('#app')