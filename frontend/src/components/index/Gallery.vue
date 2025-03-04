<template>
    <v-container class="pa-6">
        <v-container class="pa-4 mb-6 d-flex flex-column align-center text-center">
            <p class="text-h2 font-weight-black mb-5">2YOUR</p>
            <p class="text-h4  mb-5  mt-5">"There is always someone hidden in our photographs."</p>
            <p class="text-body-2 mt-5">
                2Your is a web application designed for storing photos as everlasting memories. Users can easily upload
                and organize their photos, preserving their precious moments securely. The platform ensures safe storage
                and easy access, making it perfect for those who want to keep their cherished memories alive forever.
            </p>
        </v-container>

        <v-row>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(item, index) in images" :key="index">
                <v-card class="">
                    <v-img height="370" :src="item.src" cover />
                    <v-card-title primary-title>
                        {{ item.title }}
                    </v-card-title>
                    <v-card-subtitle>
                        {{ item.photographerName }}
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="openDialog(item.src)">
                            more
                        </v-btn>
                        <v-dialog v-model="dialog" width="380">
                            <v-card>
                                <v-img :src="selectImg"></v-img>

                                <template v-slot:actions>
                                    <v-btn class="ms-auto" text="Ok" @click="closeDialog"></v-btn>
                                </template>
                            </v-card>
                        </v-dialog>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    methods: {
        openDialog(img){
            this.selectImg = img
            this.dialog = true

        },
        closeDialog(){
            this.selectImg = ""
            this.dialog = false
        }
    },
    data() {
        return {
            selectImg:"",
            dialog: false,
            images: [
                { title: "Man in the Rain", photographerName: "M_pxio", src: "https://images.unsplash.com/photo-1740121933286-4340a63c4f97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D" },
                { title: "China???", photographerName: "Polina", src: "https://images.unsplash.com/photo-1740672547046-74d1c45cb30b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D", },
                { title: "Book", photographerName: "Boox", src: "https://images.unsplash.com/photo-1740672426138-6646e5bf9e0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D", },
                { title: "Chambon", photographerName: "Benjamin Chambon", src: "https://images.unsplash.com/photo-1740487093135-a1280497b901?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
                { title: "For-her", photographerName: "pp", src: "https://images.unsplash.com/photo-1740964169160-10f96dd960a3?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
                { title: " Vrba", photographerName: "Michal Vrba", src: "https://images.unsplash.com/photo-1684962654190-b1f1cc7095c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
                { title: "Michal", photographerName: "Michal Vrba", src: "https://images.unsplash.com/photo-1734159505347-7797cf1013c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTJ8fHxlbnwwfHx8fHw%3D", },
                { title: "Parker", photographerName: "Parker Coffman", src: "https://images.unsplash.com/photo-1740504713072-2b634befcf6a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
                { title: "ly han", photographerName: "ly han", src: "https://images.unsplash.com/photo-1740428639827-79acb8f07709?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
                { title: "Annie Spratt", photographerName: "Spratt", src: "https://images.unsplash.com/photo-1740324361353-7856adbaa885?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
                { title: "Art", photographerName: "The Cleveland Museum of ", src: "https://images.unsplash.com/photo-1734968433963-38e57eb6e10e?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
                { title: "For-Him", photographerName: "ptw", src: "https://images.unsplash.com/photo-1740964811091-67c4be159b3e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
            ]
        }
    },
}
</script>