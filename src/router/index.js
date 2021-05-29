import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PythonPuzzle from '../views/PythonPuzzle'
import Login from '../views/Login.vue'
import WinBig from '../views/WinBig.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pythonpuzzle',
    name: 'Python Puzzle',
    component: PythonPuzzle
  },
    {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/winbig',
    name: 'Win Big',
    component: WinBig,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
