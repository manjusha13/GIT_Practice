
import { createRouter,createWebHistory } from "vue-router";
import StudentList from '../components/students/StudentList.vue'
import addDetails from '../components/students/addDetails.vue'
import editDetails from '../components/students/editDetails.vue'
import viewDetials from '../components/students/viewDetials.vue'
import notFound from '../viewpage/notFound.vue'

const routes = [
    {
        path:'/addDetails',
        name:'addDetails',
        component: addDetails
    },
    {
        path:'/editDetails/:id',
        name:'editDetails',
        component: editDetails
    },
    {
        path:'/',
        name:'StudentList',
        component: StudentList
    },
    {
        path:'/viewDetials/:id',
        name:'viewDetials',
        component: viewDetials
    },
    {
        path:'/:pathMatch(.*)*',
        name:'notFound',
        component: notFound
    },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
  })
  
  export default router
  