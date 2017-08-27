import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import * as VueGoogleMaps from 'vue2-google-maps'

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
    uploadPoly () {
      firebase.database().ref('polylines').push({id: '3', line: 'e_h{Cfp~bRqHdDeEdC_FdCsHtBmGfA}CRw]Y}ESaEA}BTiBf@eAj@oAxAiHfKyDzDiF|D_Ah@_AXmE~Bef@tWqp@~]w[dQ}GhDaS`LiFhC}@Ho@|@qP|IqNzHaGnDiBp@yARg@Ng@f@i@hA{@r@}CbBEv@Qz@c@jEaAlIo@`Hg@vDc@xD`G~@bCRxBbDS`@eA~I[hEs@vG_@lEa@tDi@xDiArMcDjZsFc@qHgAqAOwB@iDRySsBqFw@a[{BuKm@mATmUiBeMu@aPoAsCImv@T{NYuFB_AMwBa@}Cy@sDw@eLwCiHyB_X}G{E}AkP_EyVqGa^_JuZ_I_O_DmAm@aBkAqAu@}IkAqH}Am~@_VeVeG__@uJa]mIyMyDuJmDeMmEs{@gZ{MyEuUeIWhCcBpS_AhOm@vKaAdNSdEQx@k@|@cDrC{KdJkU|R{yAhnAeL`J_BhAeA~@[b@Q`A}Ehq@uA`Qi@vIc@|F?bAJh@d@h@j@Pv@?fFu@j^}EbAEdJRdBPrENiA|Q_ABEf@~@^Et@]nDj@b@xACvCeAxGoCtMwFrAcAf@q@f@eAZaBXcCs@KoPe@sLU{IWoAQmIQoAFie@rGs@@g@Qa@e@Mi@?{@^}EHWPGfDk@NKFc@l@qKr@kKZcGlEwo@LSta@e]fs@_l@~\\cZzXsUhAeA`@s@\\_Bh@uKvE}r@ZuFNC~~@|[dJ|CvAR|K`EjCzBtA~@`Cp@pEfAvl@pOdp@dQjGzAfB^nX~Gtc@bL~OfDhGjAfAH~@?rAc@n@m@n@yAZ}@x@uCZs@^g@v@u@|@k@xAq@j@SRDnOlO`ArAb@z@hBlGVl@RLd^vB~k@~DjXdBl[zBfl@tDHRNbc@Dp@^V|UKhUD|@Br@RhDzAdAZfC`@d\\xBfU`BtEBl|@fG`EPjPlB~@H^ORWJs@JoBC_B@cAnB}Qf@uFhBiO\\eB\\mCBmCLaDIcG[yCU_Bh@kGdDq[xBwRJUNOjJeFxFuCbRaKbFeClDoBh@Ul@@`@_@A{@y@_@c@AuIeMA]hJsKfD}EHYIk@gFsHg@i@cDeA?Q~BkOVcCKcB_@aC}@{Ga@kDLQzCoBjH_GpA{@fA_@fAIvH@|FZbAErAS`IwA|Co@vCu@pSiDfEYvRo@bLc@xIHhINpHd@bBZxDjAlDpArGpCx@`@t@Nv@An@_@bBkBxJaNd@[z@a@jA_@zAOfAAzDDzEThBBh@PrBBrACf@SbONfCGfDWzGoAzC_AfHqC~GwC|BgANOJQzBiAJe@c@OY@UN'})
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
    polyline (state) {
      return state.polyline
    }
  }
})
