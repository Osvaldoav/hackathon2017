import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store'
import * as firebase from 'firebase'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBQZUQNylgTFQIwT-lfE7TSH0Y3YRpFg98',
      authDomain: 'hack-mty-2017.firebaseapp.com',
      databaseURL: 'https://hack-mty-2017.firebaseio.com',
      projectId: 'hack-mty-2017',
      storageBucket: 'hack-mty-2017.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignin', user)
      }
    })
    this.$store.dispatch('loadPosicion')
    this.$store.dispatch('loadCapacidad')
  }
})
