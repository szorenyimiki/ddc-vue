import { createRouter, createWebHistory } from 'vue-router'

import ProjectsView from '@/views/ProjectsView.vue'
import ProjectCreateView from '@/views/ProjectCreateView.vue'

const routes = [
  { path: '/projects', component: ProjectsView },
  { path: '/projects/create', component: ProjectCreateView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})