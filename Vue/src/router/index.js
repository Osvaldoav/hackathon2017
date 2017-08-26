import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Ruta1 from '@/components/rutas/Ruta1'
import Perfil from '@/components/users/Perfil'
import SignIn from '@/components/users/SignIn'
import SignUp from '@/components/users/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ruta/1',
      name: 'Ruta1',
      component: Ruta1
    },
    {
      path: '/profile',
      name: 'Perfil',
      component: Perfil
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ],
  mode: 'history'
})
