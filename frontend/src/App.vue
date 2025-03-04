<template>
  <v-app class="pa-0">
    <NavBar />
    <v-main class="pa-0" style="width: 100%;">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  components: {
    NavBar,
  }
}

</script>
