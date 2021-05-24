import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PythonPuzzle from '../views/PythonPuzzle'

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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
