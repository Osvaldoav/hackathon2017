import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import decodePolyline from 'decode-google-map-polyline'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    loading: false,
    authError: null,
    polyline: decodePolyline('}ow{C~agcRMhC|DTb}@~F~NlAPgML{EtAqMq\\iE~Cgl@yIo@h@gKi\\aCaGY`@mL?sOEwOSuESsF@g@wBqk@_@sGIqB]q@CqAyMuq@_AiF_Jke@uTgjAeKkj@oAgIeJce@YeCE_CDkVJk]Vy^@iDN}L@uJN_OLkBeCIsE~@TwBJyCLw@pAeC]i@vGuq@W{@?}@LsDzB}d@\\gPJcFXmHnAeT}QyAuJg@{BQ_K}BU`PK|PlBTbTv@z@Dt@RrNd@GrDYlPsBvb@QrEGbBJ`ACZqBCoAjLQrCGzCgAzGc@bCAjBLpFVzA^n@VXq@pAe@jAMtBOjC_@fDC^GxIKfMpDPpDNI~GEbFEdGB?CvDKdMOl_@EnUo@~D`@tBxCrOrS`hAb\\leBvKvj@nGv[^jAD`@F`@L|ALnCeClG{@lDVjKZ~JF~JGnQHbEBpDMlDMjBM|LE`GdDX_@vEU|FaA|RmAdUeAlQw@rO')
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
    }
  },
  actions: {
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
    polyline (state) {
      return state.polyline
    }
  }
})
