//defined our routing rules
import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Car from '../views/Car.vue';
import NotFound from '../views/404View.vue';
import ContactView from '../views/ContactView.vue';
const router = createRouter({
 history:createWebHistory(import.meta.env.BASE_URL),
 routes : [
    {
        path:'/',
        name: 'home',
        component :Home  
    },
    {
        path:'/about',
        name:'about',
        component:About
    },
    {
        path:'/cars/:id',   //: is used for dynamic path
        name:'car',
        component:Car,
        children:[  //for setting the child componetn ie  /cars/id/contact
            {
               path:'contact',
               name:'contact',
               component:ContactView
               //since it is a child route it will we displayed in the same parent component page
            }
        ]
    },
    {
        path:'/:catchall(.*)*',  //catch all the paths that we are not defined
        name:'Not Found',
        component:NotFound
    }
 ]
})

export default router