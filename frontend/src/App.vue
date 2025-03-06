<template>
  <v-app class="pa-0">
    <NavBar />
    <v-main class="pa-0" style="width: 100%;">
      <router-view />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
export default {
  components: {
    NavBar,
    Footer,
  }
}

</script>
