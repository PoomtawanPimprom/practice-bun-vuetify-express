<template>
    <v-container fluid class="pa-0">
        <v-carousel height="600" show-arrows="hover" cycle hide-delimiters>
            <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src" cover>
                <div class="d-flex fill-height justify-center align-center text-center">
                    <div class="text-h2 text-white font-weight-light">
                        <div v-for="(line, index) in slide.title.split(',')" :key="index">
                            {{ line.trim() }}
                        </div>
                    </div>
                </div>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            slides: [
                { src: "https://images.unsplash.com/photo-1732593610721-ebebe6dd5210?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Because memories are precious, I secretly keep you in my photos." },
                { src: "https://images.unsplash.com/photo-1739129865268-e8ef9846c25c?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Welcome" },
                { src: "https://images.unsplash.com/photo-1740978845316-433199e05847?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "To" },
                { src: "https://images.unsplash.com/photo-1740141340591-4b8ea9db6847?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "2Your" },

            ]
        }
    },
};
</script>
