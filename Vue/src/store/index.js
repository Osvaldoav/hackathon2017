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
    ruta: null,
    posicion: null,
    capacidad: null
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
    },
    setPosicion (state, payload) {
      state.posicion = payload
    },
    setCapacidad (state, payload) {
      state.capacidad = payload
    }
  },
  actions: {

    loadPosicion ({commit}) {
      firebase.database().ref('camiones').on('value', (data) => {
        let miPos = null
        const obj = data.val()
        miPos = [{lat: obj['1']['ubicacion']['latitude'], lng: obj['1']['ubicacion']['longitude']},
          {lat: obj['2']['ubicacion']['latitude'], lng: obj['2']['ubicacion']['longitude']},
          {lat: obj['3']['ubicacion']['latitude'], lng: obj['3']['ubicacion']['longitude']}
        ]
        commit('setPosicion', miPos)
      })
    },

    loadCapacidad ({commit}) {
      firebase.database().ref('camiones').on('value', (data) => {
        let miCap = null
        const obj = data.val()
        miCap = [obj['1']['pasajeros']['actual'],
          obj['2']['pasajeros']['actual'],
          obj['3']['pasajeros']['actual']
        ]
        commit('setCapacidad', miCap)
      })
    },

    imprimirRuta (state) {
      console.log(state.ruta)
    },

    loadRuta ({commit}, payload) {
      firebase.database().ref('polylines').once('value')
        .then((data) => {
          let miRuta = null
          const obj = data.val()
          for (let key in obj) {
            if (key === payload) {
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
    },
    autoSignin ({commit}, payload) {
      commit('setUser', {id: payload.uid, email: payload.email})
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    getRuta (state) {
      return state.ruta
    },
    posCamion (state) {
      return state.posicion
    },
    capCamion (state) {
      return state.capacidad
    }
  }
})
