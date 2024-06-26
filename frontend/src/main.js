import { createApp, inject } from 'vue'
import './style.scss'
import App from './App.vue'
import PublicDashboard from './views/PublicDashboard.vue'
import DeveloperDashboard from './views/DeveloperDashboard.vue'
import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'
import { createMemoryHistory } from 'vue-router'
import Login from './views/login.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiArrowCircleRight, MdReportgmailerrorred, MdReportoffOutlined } from "oh-vue-icons/icons";
import VueCookies from 'vue-cookies'

const $cookies = inject('$cookies');

addIcons(HiArrowCircleRight, MdReportgmailerrorred)


const routes = [
    { path: '/', name:"Dashboard", component: PublicDashboard },
    { path: '/setup', name:"Setup", component: Login },

    { path: '/login', name: "Login", component: Login},
    { 
        path: '/dev', 
        name: "DevDashboard",
        component: DeveloperDashboard,
    },

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

//FIXME
if(localStorage.getItem("base_url") == null){
    localStorage.setItem("base_url", prompt('Insert your base url'))
}