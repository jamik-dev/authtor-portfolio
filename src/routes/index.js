import { createRouter, createWebHashHistory } from 'vue-router'

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
            path: 'services',
            name: 'Services',
            component: import ('../pages/Portfolio.vue'),
        },
        {
            path: 'portfolio',
            name: 'Portfolio',
            component: import ('../pages/Blog.vue'),
        },
        {
            path: 'clients',
            name: 'Clients',
            component: import ('../pages/Contact.vue'),
        }
    ]
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router