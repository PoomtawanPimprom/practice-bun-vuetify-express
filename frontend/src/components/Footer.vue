<template>
  <v-footer class="bg-blue-lighten-3 text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">"If you don't keep it, it'll disappear."</div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>2YOUR</strong></div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
