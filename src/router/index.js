import { createRouter, createWebHistory } from 'vue-router'

import ProjectsView from '@/views/ProjectsView.vue'
import ProjectCreateView from '@/views/ProjectCreateView.vue'
import ProjectEditView from '../views/ProjectEditView.vue'

const routes = [
  { path: '/', redirect: '/projects' },
  { path: '/projects', component: ProjectsView },
  { path: '/projects/new', component: ProjectCreateView },
  { path: '/projects/:id/edit', component: ProjectEditView },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFoundView.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})