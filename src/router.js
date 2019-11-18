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
    path: '/signup',
    name: 'register',
    component: () => import('./views/entry/Register.vue')
  },
  {
    path: '/credits',
    name: 'credits',
    component: () => import('./views/entry/Credits.vue')
  },
  {
    path: '/register/info',
    name: 'welcome_account_complete',
    component: () => import('./views/account/config/CompleteAccountInfo.vue')
  },
  {
    path: '/register/nickname',
    name: 'welcome_account_nickname',
    component: () => import('./views/account/config/RegisterNickname.vue')
  },

  {
    path: '/dashboard',
    name: 'base_dashboard',
    component: () => import('./views/account/feeds/Dashboard.vue'),
    children: [
      {
        path: 'select', 
        component: () => import('./views/account/config/selectProject.vue')
      },
      {
        path: 'project/:projectId/feed', 
        component: () => import('./views/account/feeds/project/Feed.vue')
      },
      {
        path: 'project/:projectId/membership', 
        component: () => import('./views/account/feeds/project/Users.vue')
      },
      {
        path: 'project/:projectId/board', 
        component: () => import('./views/account/feeds/project/Board.vue')
      },
      {
        path: 'project/:projectId/goals', 
        component: () => import('./views/account/feeds/project/Goals.vue')
      },
    ]
  },
  {
    path: '/account',
    name: 'base_onboarding',
    component: () => import('./views/account/feeds/Dashboard.vue'),
    children: [
      {
        path: 'notifications',
        component: () => import('./views/account/config/Notifications.vue')
      },
      {
        path: 'create/project',
        component: () => import('./views/account/config/CreateProject.vue')
      },
      {
        path: ':projectId/accept',
        component: () => import('./views/account/config/AcceptInvitation.vue')
      },
      {
        path: 'configuration',
        component: () => import('./views/account/config/Configuration.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

