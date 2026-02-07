import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Courses from '@/views/Courses.vue'
import Admission from "@/views/Admission.vue";

const routes = [
    { path: '/', name: 'Home', component: Home },
   // { path: '/about', name: 'About', component: () => import('../views/About.vue') },
    { path: '/courses', name: 'Courses', component: Courses },
    { path: '/admission', name: 'Admission', component: Admission },
   // { path: '/contact', name: 'Contact', component: () => import('../views/Contact.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router