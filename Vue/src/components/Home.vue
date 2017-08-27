<template>
  <v-container fluid>

    <v-layout class="mt-5">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media src="http://expresotec.mty.itesm.mx/circuitotec/imagenes/rutas.jpg" height="400px"></v-card-media>
          <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0"> Bienvenidos a Mi Circuito Tec</h3>
            <div>Presiona en rutas para empezar (no olvides crear tu cuenta)</div>
          </div>
        </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout class="mt-3">
      <v-flex xs12 sm6 offset-sm3>
        <v-btn large primary dark block :to="buttonLink">Rutas!</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        buttonLink: '/ruta/1'
      }
    }
  }
</script>
