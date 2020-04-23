import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/signin'
  },
  {
    path: '*',
    component: () => import('./views/error/404.vue')
  },
  {
    path: '/articles/weekly',
    name: 'weekly_article',
    component: () => import('./views/articles/WeeklyArticlePage.vue')
  },
  {
    path: '/surveys/join/course',
    name: 'course_inscription',
    component: () => import('./views/surveys/CouseInscription.vue')
  },
  {
    path: '/signin',
    name: 'login_entry',
    component: () => import('./views/entry/Login.vue')
  },
  {
    path: '/forgot',
    name: 'forgot_password',
    component: () => import('./views/entry/ForgotPassword.vue')
  },
  {
    path: '/@:username',
    name: 'public_profile',
    component: () => import('./views/account/PublicProfile.vue')
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
    path: '/heroes',
    name: 'heroes',
    component: () => import('./views/landings/Heroes.vue')
  },
  {
    path: '/surveys/beta/last',
    component: () => import('./views/surveys/Survey.vue')
  },
  {
    path: '/register/heroes',
    component: () => import('./views/surveys/Heroes.vue')
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
    path: '/error/project',
    component: () => import('./views/error/Project.vue')
  },
  {
    path: '/dashboard',
    name: 'base_dashboard',
    component: () => import('./views/account/feeds/Dashboard.vue'),
    children: [
      {
        path: 'select', 
        component: () => import('./views/account/config/SelectProject.vue')
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
      },
      {
        path: 'project/:projectId/tasks/create',
        component: () => import('./views/account/config/CreateTask.vue')
      },
      {
        path: 'project/:projectId/ads',
        component: () => import('./views/account/feeds/project/Ads.vue')
      },
      {
        path: 'search/q=:search',
        component: () => import('./views/account/config/Search.vue')
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
      },
      {
        path: 'admin/articles/panel',
        component: () => import('./views/articles/ArticlesPanel.vue')
      },
      {
        path: 'admin/articles/new/article',
        component: () => import('./views/articles/NewArticle.vue')
      },
      {
        path: 'admin/users/ban',
        component: () => import('./views/bans/Form.vue')
      }
    ]
  },
  {
    path: '/help',
    component: () => import('./views/help/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

