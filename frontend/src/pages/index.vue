<template>
  <v-container fluid class="pa-0">
    <Banner></Banner>
    <Gallery></Gallery>
    <Register></Register>
  </v-container>
</template>

<script>
import Footer from '../components/Footer.vue';
import Banner from "../components/index/Banner.vue";
import Gallery from '../components/index/Gallery.vue';
import Register from '../components/index/Register.vue';
export default {
  components: { Banner, Gallery, Register, Footer, },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
