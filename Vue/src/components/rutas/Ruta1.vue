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
      <v-btn @click.stop="imprimirConsola(keys[0])"> R-1 </v-btn>
      <v-btn @click.stop="imprimirConsola(keys[1])"> Ruta Hospitales (Circuito Tec) </v-btn>
      <v-btn @click.stop="imprimirConsola(keys[2])"> R-209 </v-btn>
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
      icon="https://firebasestorage.googleapis.com/v0/b/hack-mty-2017.appspot.com/o/verde.png?alt=media&token=fd18cb7f-cd63-422b-9ad2-87e927beff23"
      :opacity="1"
      :position="posicionCamion"
      :visible="true"
      v-if="capacidadCamion < 10"
      >
      </gmap-marker>
      <gmap-marker
      :clickable="false"
      :draggable="false"
      icon="https://firebasestorage.googleapis.com/v0/b/hack-mty-2017.appspot.com/o/amarillo.png?alt=media&token=e300f3ef-65b7-4897-bc8b-6c7d71c6e6d5"
      :opacity="1"
      :position="posicionCamion"
      :visible="true"
      v-else-if="capacidadCamion < 20"
      >
      </gmap-marker>
      <gmap-marker
      :clickable="false"
      :draggable="false"
      icon="https://firebasestorage.googleapis.com/v0/b/hack-mty-2017.appspot.com/o/rojo.png?alt=media&token=26b6055c-da0a-4c31-ade6-682baa22cc3a"
      :opacity="1"
      :position="posicionCamion"
      :visible="true"
      v-else
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
      },
      capacidadCamion () {
        return this.$store.getters.capCamion
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
