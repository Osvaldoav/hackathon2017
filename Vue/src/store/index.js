import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import * as VueGoogleMaps from 'vue2-google-maps'
import * as decodePolyline from 'decode-google-map-polyline'

Vue.use(Vuex)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDR5bQYfgy8f3Rz1RxZbkZLfgMd-4TYjl4',
    v: '3',
    libraries: 'places'
  }
})

export const store = new Vuex.Store({
  state: {
    user: null,
    loading: false,
    authError: null,
    ruta: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setAuthError (state, payload) {
      state.authError = payload
    },
    clearError (state) {
      state.authError = null
    },
    setRuta (state, payload) {
      console.log(payload.line)
      state.ruta = decodePolyline(payload.line)
      console.log(state.ruta)
    }
  },
  actions: {

    imprimirRuta (state) {
      console.log(state.ruta)
    },

    loadRuta ({commit}) {
      firebase.database().ref('polylines').once('value')
        .then((data) => {
          let miRuta = null
          const obj = data.val()
          for (let key in obj) {
            if (key === '-KsVA6quWllUBdZ3vt_0') {
              miRuta = obj[key]
            }
          }
          commit('setRuta', miRuta)
        })
        .catch(
          (error) => {
            console.log(error)
          }
        )
    },

    signUpUser ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(
        user => {
          const newUser = {
            id: user.uid,
            email: user.email
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
    },
    signInUser ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(
        user => {
          const newUser = {
            id: user.uid,
            email: user.email
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    getRuta (state) {
      return state.ruta
    }
  }
})
