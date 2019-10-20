import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login_entry',
    component: () => import('./views/entry/Login.vue')
  },
  {
    path: '/feed',
    name: 'account_feed',
    component: () => import('./views/account/feeds/AccountFeed.vue')
  },
  {
    path: '/notifications',
    name: 'account_notifications',
    component: () => import('./views/account/feeds/Notifications.vue')
  },
  {
    path: '/welcome/account',
    name: 'welcome_account_complete',
    component: () => import('./views/account/config/CompleteAccountInfo.vue')
  },
  {
    path: '/create/project',
    name: 'create_project',
    component: () => import('./views/account/config/CreateProject.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('./views/account/feeds/Users.vue')
  },
  {
    path: '/project/:projectId/feed',
    name: 'project_feed',
    component: () => import('./views/account/feeds/ProjectFeed.vue')
  },
  {
    path: '/project/:projectId/membership',
    name: 'project_membership',
    component: () => import('./views/account/feeds/ProjectFeedUsers.vue')
  },
  {
    path: '/project/:projectId/board',
    name: 'project_board',
    component: () => import('./views/account/feeds/ProjectFeedBoard.vue')
  },
  {
    path: '/account/:projectId/accept',
    name: 'accept_invitation',
    component: () => import('./views/account/config/AcceptInvitation.vue')
  },
  {
    path: '/credits',
    name: 'accept_invitation',
    component: () => import('./views/entry/Credits.vue')
  },
  {
    path: '/account/configuration',
    name: 'account_config',
    component: () => import('./views/account/config/Configuration.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

