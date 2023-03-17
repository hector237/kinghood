<template>
  <v-app>
    <nav-bar></nav-bar>

    <v-main>
      <router-view/>
    </v-main>
    <foter></foter>
  </v-app>
</template>

<script>
import NavBar from './components/landing_page/layouts/nav-bar.vue'
import Foter from './components/landing_page/layouts/footer.vue'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    NavBar,
    Foter,
  }
};
</script>
