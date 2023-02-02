import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import CarView from "../views/CarView.vue"
import NotFound from "../views/NotFound.vue"
import Dealer from"../views/Dealer.vue"
import Manufacturer from "../views/Manufacturer.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path:'/',
            name:'home',
            component: HomeView
        },
        {
            path:'/about',
            name:'about',
            component: AboutView
        },
        {
            path:'/car/:id',
            name:'car',
            component: CarView,
            children:[
                {
                    path:'dealer',
                    component: Dealer,
                },
                {
                    path:"manufacturer",
                    component:Manufacturer
                }
            ]
        },
        {
            path:'/:pathMatch(.*)*',
            name: "notFound",
            component: NotFound
        }
    ]
})

export default router