<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 class="mt-4">
        <h1>Welcome User!</h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 class="mt-4" :email="email">
        <h3>Your email is: {{ email.email }} </h3>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        keys: ['-KsVA6quWllUBdZ3vt_0', '-KsVAsFbv1VZc4XVrHtD', '-KsVBFPgZmzDo_JE0CCE'],
        images: [
          { imageUrl: 'http://www.esacademic.com/pictures/eswiki/77/MuralTecMty9-598.jpg', id: '1' },
          { imageUrl: 'http://www.eloriente.net/home/wp-content/uploads/2015/05/Biblioteca-Campus-Monterrey.jpeg', id: '2' },
          { imageUrl: 'http://www.itesm.mx/wps/wcm/connect/899412804385fc01918ad5c0f570d531/rectoria.JPG?MOD=AJPERES&CACHEID=899412804385fc01918ad5c0f570d531', id: '3' }
        ]
      }
    },
    computed: {
      email () {
        return this.$store.getters.user
      }
    }
  }
</script>
