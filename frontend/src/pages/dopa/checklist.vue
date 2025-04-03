<template>
  <v-container fluid>
    <Sidebar />
    <v-main class="">
      <Navbar />
      <v-img
        src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        hover
      >
        <v-container>
          <v-row>
            <v-col>
              <v-card class="rounded-lg">
                <v-data-table
                  :custom-filter="filterOnlyCapsText"
                  :headers="headers"
                  :items="items"
                  :search="search"
                  item-value="name"
                >
                  <template v-slot:top>
                    <v-text-field
                      v-model="search"
                      class="pa-2"
                      label="Search (UPPER CASE ONLY)"
                    >
                    </v-text-field>
                  </template>
                </v-data-table>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-main>
  </v-container>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  data() {
    return {
      search: "",
      headers: [
        {
          title: "CPU Model",
          align: "start",
          key: "name",
        },
        {
          title: "Cores",
          align: "end",
          key: "cores",
        },
        {
          title: "Threads",
          align: "end",
          key: "threads",
        },
        {
          title: "Base Clock",
          align: "end",
          key: "baseClock",
        },
        {
          title: "Boost Clock",
          align: "end",
          key: "boostClock",
        },
        {
          title: "TDP (W)",
          align: "end",
          key: "tdp",
        },
      ],
      items: [
        {
          name: "Intel Core i9-11900K",
          cores: 8,
          threads: 16,
          baseClock: "3.5 GHz",
          boostClock: "5.3 GHz",
          tdp: "125W",
        },
        {
          name: "AMD Ryzen 9 5950X",
          cores: 16,
          threads: 32,
          baseClock: "3.4 GHz",
          boostClock: "4.9 GHz",
          tdp: "105W",
        },
        {
          name: "Intel Core i7-10700K",
          cores: 8,
          threads: 16,
          baseClock: "3.8 GHz",
          boostClock: "5.1 GHz",
          tdp: "125W",
        },
        {
          name: "AMD Ryzen 5 5600X",
          cores: 6,
          threads: 12,
          baseClock: "3.7 GHz",
          boostClock: "4.6 GHz",
          tdp: "65W",
        },
        {
          name: "Intel Core i5-10600K",
          cores: 6,
          threads: 12,
          baseClock: "4.1 GHz",
          boostClock: "4.8 GHz",
          tdp: "125W",
        },
        {
          name: "AMD Ryzen 7 5800X",
          cores: 8,
          threads: 16,
          baseClock: "3.8 GHz",
          boostClock: "4.7 GHz",
          tdp: "105W",
        },
        {
          name: "Intel Pentium Gold G6400",
          cores: 2,
          threads: 4,
          baseClock: "4.0 GHz",
          tdp: "58W",
        },
        {
          name: "AMD Athlon 3000G",
          cores: 2,
          threads: 4,
          baseClock: "3.5 GHz",
          tdp: "35W",
        },
      ],
    };
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    async fetchData() {
      console.log("fetchData");
    },
    filterOnlyCapsText(value, query, item) {
      return (
        value != null &&
        query != null &&
        typeof value === "string" &&
        value.toString().toLocaleUpperCase().indexOf(query) !== -1
      );
    },
  },
  components: { Navbar, Sidebar },
};
</script>
