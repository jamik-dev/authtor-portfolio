import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
    path: '/',
    name: 'DefaultLayout',
    component: import ('../layouts/DefaultLayout.vue'),
    redirect: '/home',
    children: [{
            path: 'home',
            name: 'Home',
            component: import ('../pages/Home.vue'),
        },
        {
            path: 'about',
            name: 'About',
            component: import ('../pages/About.vue'),
        },
        {
            path: 'portfolio',
            name: 'Portfolio',
            component: import ('../pages/Portfolio.vue'),
        },
        {
            path: 'blog',
            name: 'Blog',
            component: import ('../pages/Blog.vue'),
        },
        {
            path: 'contact',
            name: 'Contact',
            component: import ('../pages/Contact.vue'),
        }
    ]
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router