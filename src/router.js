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
    path: '/verify',
    component: () => import('./views/account/config/VerifyAccount.vue')
  },
  {
    path: '/boards',
    component: () => import('./views/presentations/BoardsPresentation.vue')
  },
  {
    path: '/dashboard',
    name: 'base_dashboard',
    component: () => import('./views/account/feeds/Dashboard.vue'),
    children: [
      {
        path: 'select', 
        component: () => import('src\views\account\config\SelectProject.vue')
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
      {
        path: 'project/:projectId/tasks',
        component: () => import('./views/account/feeds/project/Tasks.vue')
      }
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

