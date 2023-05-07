import HomeViewVue from '@/views/HomeView.vue';
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component:HomeViewVue

  },
  {
    path: '/shop/:id',
    name: 'shop',
    component: () => import(/* webpackChunkName: "page" */ '../views/Shop/ShopView'),


  },
  {
    path:'/login',
    name:'Login',
    component: () => import(/* webpackChunkName: "LogIn" */ '../views/Login/LogIn'),
    beforeEnter: (to, from, next) => {
      const LoginUser = localStorage.LoginUser
      if(LoginUser){
        next({name:'Home'});
      }else{
        next();

      }
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to,from,next)=>{
  const LoginUser = localStorage.LoginUser
  if(LoginUser || to.name === 'Login'){
    next();

  }else{
  next({name:'Login'});

  }
})

export default router
