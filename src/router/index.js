import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router =new Router({
  routes: [
    {
      path: '/excuteSequence',
      name: 'excuteSequence',
      component: () => import('@/pages/excuteSequence'),
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('@/pages/event'),
    },
    {
      path: '/paste',
      name: 'paste',
      component: () => import('@/pages/paste'),
    },
    {
      path: '/testChildComponent',
      name: 'testChildComponent',
      component: () => import('@/pages/testChildComponent'),
    },
    {
      path: '/testHistory',
      name: 'testHistory',
      component: () => import('@/pages/testHistory'),
    },
    
  ]
})

export default router
