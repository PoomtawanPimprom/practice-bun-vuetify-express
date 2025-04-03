<template>
  <v-card :href="href || '/'" class="rounded-lg" hover :height="height" :max-width="width">
    <v-card-title :title="title" v-if="title">{{ title }}</v-card-title>
    <v-card-text>
      <v-container fluid class="pa-0">
        {{ subTitle }}
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: "/",
    },
    width: {
      type: Number, 
      default: 300,
    },
    height: {
      type: Number, 
      default: 300,
    },
    title: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
    subTitle: {
      type: [String, Number], 
      default: "",
    },
  },
};
</script>

