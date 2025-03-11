<template>
  <v-app class="pa-0">
    <v-main class="pa-0" style="width: 100%;">
      <router-view />
    </v-main>
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
