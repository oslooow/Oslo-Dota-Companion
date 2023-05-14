import { createRouter, createWebHistory } from 'vue-router'
import Swal from 'sweetalert2'
import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import HeroView from '../views/HeroView.vue'
import DetailView from '../views/DetailView.vue'
import LoginView from '../views/LoginView.vue'
import MemeView from '../views/MemeView.vue'
import ResetView from '../views/ResetView.vue'
import FreeView from '../views/FreeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/reset',
      name: 'reset',
      component: ResetView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: HeroView
    },
    {
      path: '/heroes/:heroname',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/memes',
      name: 'memes',
      component: MemeView
    },
    {
      path: '/freebies',
      name: 'free-games',
      component: FreeView
    }
  ]
})

router.beforeEach(async (to, from) => {
  if (localStorage.access_token && to.name === 'login') {
    Swal.fire({
      icon: 'error',
      title: 'Already logged in!',
      text: 'Already logged in'
    })
    return { path: '/heroes' }
  }
})
export default router
