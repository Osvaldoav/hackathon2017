<template>
  <!--
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="image in images" :src="image.imageUrl" :key="image.id">
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
-->
<v-container>

  <v-layout row>
    <v-flex xs12>
      <v-btn @click.stop="imprimirConsola"> Ruta 1 </v-btn>
      <v-btn @click.stop="imprimirConsola"> Ruta 2 </v-btn>
      <v-btn @click.stop="imprimirConsola"> Ruta 3 </v-btn>
    </v-flex>
  </v-layout>

  <v-layout row>
    <v-flex xs12>
      <gmap-map
        :center="{lat:25.649074, lng:-100.289904}"
        :zoom="15"
        map-type-id="terrain"
        style="max-width: 100%; height: 400px"
      >
      <gmap-polyline
      :clickable="false"
      :draggable="false"
      :path="path1"
      >
      </gmap-polyline>
      </gmap-map>
    </v-flex>
  </v-layout>

</v-container>
</template>

<script>
  export default {
    data () {
      return {
        images: [
          { imageUrl: 'http://www.esacademic.com/pictures/eswiki/77/MuralTecMty9-598.jpg', id: '1' },
          { imageUrl: 'http://www.eloriente.net/home/wp-content/uploads/2015/05/Biblioteca-Campus-Monterrey.jpeg', id: '2' },
          { imageUrl: 'http://www.itesm.mx/wps/wcm/connect/899412804385fc01918ad5c0f570d531/rectoria.JPG?MOD=AJPERES&CACHEID=899412804385fc01918ad5c0f570d531', id: '3' }
        ]
      }
    },

    computed: {
      path1 () {
        return this.$store.getters.getRuta
      }
    },

    methods: {
      onClickPolys () {
        this.$store.dispatch('uploadPoly')
      },
      imprimirConsola () {
        this.$store.dispatch('loadRuta')
      }
    }
  }
</script>
