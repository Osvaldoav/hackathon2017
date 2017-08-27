<template>
  <v-app light>
    <!-- creating the drawer -->
    <v-navigation-drawer temporary v-model="sideNav">
      <!-- the list of actions inside the responsive menu -->
      <v-list>
        <!-- a tile is a row -->
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <!-- the action is the icon of the row -->
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <!-- the content is the text -->
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click.stop="onLogout" v-if="isAuthenticated">
          <!-- the action is the icon of the row -->
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <!-- the content is the text -->
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="indigo darken-3" dark>
      <!-- adding hamburguer icon -->
      <v-toolbar-side-icon dark @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">
        <router-link to="/" tag="span" style="cursor: pointer" >MiCircuitoTec</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          {{ item.title }}
          <v-icon right dark>{{ item.icon }}</v-icon>
        </v-btn>
        <v-btn flat v-if="isAuthenticated" @click.stop="onLogout">
          Logout
          <v-icon right dark>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          { icon: 'face', title: 'Sign up', link: '/signup' },
          { icon: 'lock_open', title: 'Sign in', link: '/signin' }
        ]

        if (this.isAuthenticated) {
          menuItems = [
            { icon: 'perm_identity', title: 'Perfil', link: '/profile' },
            { icon: 'directions_bus', title: 'Rutas', link: '/ruta/1' }
          ]
        }
        return menuItems
      },
      isAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
