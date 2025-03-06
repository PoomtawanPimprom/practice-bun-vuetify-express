<template>
    <v-container fluid class="pa-0">
        <v-container fluid class="pa-0">

            <v-img aspect-ratio="16/9" cover height="500"
                src="https://images.unsplash.com/photo-1734106107054-b2f35096898c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <div class="d-flex fill-height  align-end text-center pa-6">
                    <div class="text-h2 text-white font-weight-medium">
                        About
                    </div>
                </div>
            </v-img>
        </v-container>
        <v-container class="pa-16">
            <v-row>
                <v-col cols="4" v-for="(item, index) in founders" :key="index">
                    <v-container class="d-flex text-center align-center" style="flex-direction: column;">
                        <v-img :src="item.img" height="250" width="250" cover class="rounded-circle mb-5"></v-img>
                        <p class="text-h5 font-weight-bold">{{ item.name }}</p>
                        <p class="text-subtitle-1">{{ item.posi }}</p>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>

    </v-container>
</template>

<script>
export default {
    data() {
        return {
            founders: [
                { name: "Poomtawan pimprom", posi: "founder", img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { name: "Poomtawan pimprom", posi: "CEO", img: "https://images.unsplash.com/photo-1544502062-f82887f03d1c?q=80&w=2159&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { name: "Poomtawan pimprom", posi: "founder", img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            ]
        }
    },
    methods: {

    },
}
</script>