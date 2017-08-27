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
      <v-btn @click.stop="imprimirConsola(keys[0])"> Ruta 1 </v-btn>
      <v-btn @click.stop="imprimirConsola(keys[1])"> Ruta 2 </v-btn>
      <v-btn @click.stop="imprimirConsola(keys[2])"> Ruta 3 </v-btn>
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
      <gmap-marker
      :clickable="false"
      :draggable="false"
      icon="https://firebasestorage.googleapis.com/v0/b/hack-mty-2017.appspot.com/o/Imagen1.png?alt=media&token=1f94bbd8-3510-48c6-a19b-779d34c2a7a0"
      :opacity="1"
      :position="posicionCamion"
      :visible="true"
      >
      </gmap-marker>
      </gmap-map>
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
      path1 () {
        return this.$store.getters.getRuta
      },
      posicionCamion () {
        return this.$store.getters.posCamion
      }
    },

    methods: {
      onClickPolys () {
        this.$store.dispatch('uploadPoly')
      },
      imprimirConsola (payload) {
        this.$store.dispatch('loadRuta', payload)
      }
    }
  }
</script>
