<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="#246C21"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          color="#FFFFFF"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="#B4DB7B"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import colors from 'vuetify/lib/util/colors';

export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-book-open-page-variant-outline',
          title: 'Pun Point',
          to: '/punpoint'
        },
        {
          icon: 'mdi-leaf',
          title: 'Leaf Coin',
          to: '/leafcoin'
        },
        {
          icon: 'mdi-qrcode-scan',
          title: 'QR Scan',
          to: '/scanpage'
        },
        {
          icon: 'mdi-tree',
          title: 'Activities',
          to: '/activities'
        },
        {
          icon: 'mdi-history',
          title: 'History',
          to: '/historyall'
        },
        {
          icon: 'mdi-clock-star-four-points',
          title: 'History Pun Point',
          to: '/hispun'
        },
        {
          icon: 'mdi-clock-star-four-points-outline',
          title: 'History Leaf Point',
          to: '/hisleaf'
        },
        {
          icon: 'mdi-gift-open-outline',
          title: 'Reward Detail',
          to: '/reward'
        },
        {
          icon: 'mdi-gift-outline',
          title: 'Reward List',
          to: '/rewardall'
        },
        {
          icon: 'mdi-login',
          title: 'Login',
          to: '/login'
        },
        {
          icon: 'mdi-logout',
          title: 'Logout',
          to: '/logout'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Demo LeafCoin',
    }
  }
}
</script>
