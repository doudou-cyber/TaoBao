import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Cars from '../pages/cars'
import Orderlist from '../pages/orderlist'
import More from '../pages/more'
import My from '../pages/my'

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/cars',
      name: 'Cars',
      component: Cars
    },
    {
      path: '/orderlist',
      name: 'Orderlist',
      component: Orderlist
    },
    {
      path: '/more',
      name: 'More',
      component: More
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/*',
      redirect:"/home"
    },
  ]
})
