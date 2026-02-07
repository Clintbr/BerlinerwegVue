import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Courses from '@/views/Courses.vue'
import Admission from "@/views/Admission.vue";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/courses', name: 'Courses', component: Courses },
    { path: '/admission', name: 'Admission', component: Admission },
]

const router = createRouter({
    history: createWebHashHistory(), // ← Hash mode pour Netlify
    routes,
})

export default router
