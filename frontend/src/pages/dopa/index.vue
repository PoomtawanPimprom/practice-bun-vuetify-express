<template>
    <v-container fluid>
        <Sidebar />
        <v-main>
            <Navbar />
            <v-img
                cover
                src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <v-container>


                    <v-row v-if="listsCard && listsCard.length">
                        <v-col v-for="(item, index) in listsCard" :key="item.id || index" cols="12" sm="6" md="4"
                            lg="3">
                            <BlogCard :title="item.title" :href="item.href" :height="150" />
                        </v-col>
                    </v-row>
                </v-container>
            </v-img>
        </v-main>
    </v-container>
</template>

<script>
import Footer from "../../components/Footer.vue";
import NavBar from "../../components/NavBar.vue";
import BlogCard from "./components/BlogCard.vue";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
    components: { NavBar, Footer, Sidebar, Navbar, BlogCard },
    data() {
        return {
            listsCard: [
                { title: "รับแจ้งเหตุ เพื่อดำเนินการปรับเป็นพินัย", href: "/" },
                { title: "บันทึกข้อมูลการปรับเป็นพินัย", href: "/" },
                { title: "รายละเอียด", href: "/" },
                { title: "รายงาน", href: "/" },
            ],
        };
    },
};
</script>
