import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes=new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:()=>import('../views/home/Home')
    },
    {
      path:'/category',
      component:()=>import('../views/category/Categry')
    },
    {
      path:'/shoppingCart',
      component:()=>import('../views/cart/ShoppingCart')
    },
    {
      path:'/profile',
      component:()=>import('../views/profile/Profile')
    }
    
    
  ]
})
export default routes 
