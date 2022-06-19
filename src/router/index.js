import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {

    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: "home",
        // 会自动跳转到home文件下的index.vue文件 所以可以不用写/home/index.vue
        component: () => import('../views/Home/home.vue'),

      },
      {
        path: '/grade',
        name: 'grade',
        component:()=>import('../views/grade/index.vue')
      },
      {
        path: '/courselist',
        name: 'courselist',
        component:()=>import('../views/course/courselist.vue')
      },
      {
        path: '/mycourse',
        name: 'mycourse',
        component:()=>import('../views/course/mycourse')
      },
      {
        path: '/mymsg',
        name: 'mymsg',
        component:()=>import('../views/message/mymessage')
      },
      {
        path: '/editmsg',
        name: 'editmsg',
        component:()=>import('../views/message/editmessage')
      },
      {
        path: '/im',
        name: 'Im',
        component: () => import("@/views/Im"),
      },


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
