import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import PublicDashboard from './views/PublicDashboard.vue'
import DeveloperDashboard from './views/DeveloperDashboard.vue'
import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'
import { createMemoryHistory } from 'vue-router'
import Login from './views/login.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiArrowCircleRight, MdReportgmailerrorred } from "oh-vue-icons/icons";
import VueCookies from 'vue-cookies'

addIcons(HiArrowCircleRight, MdReportgmailerrorred)


const routes = [
    { path: '/', name:"Dashboard", component: PublicDashboard },
    { path: '/dev', component: DeveloperDashboard},
    { path: '/login', name: "Login", component: Login}
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes 
})

createApp(App)
    .use(router)
    .use(VueCookies)
    .component('v-icon', OhVueIcon)
    .mount('#app')

