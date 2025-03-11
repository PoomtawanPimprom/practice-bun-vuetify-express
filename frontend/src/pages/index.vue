<template>
  <v-container fluid class="pa-0">
    <NavBar/>
    <Banner></Banner>
    <Gallery></Gallery>
    <Register></Register>
    <Footer/>
  </v-container>
</template>

<script>
import Footer from '../components/Footer.vue';
import Banner from "../components/index/Banner.vue";
import Gallery from '../components/index/Gallery.vue';
import Register from '../components/index/Register.vue';
import NavBar from '../components/NavBar.vue';
export default {
  components: { Banner, Gallery, Register, Footer, NavBar, },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
