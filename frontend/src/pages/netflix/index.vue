<template>
    <v-app dark>
        <!-- App Bar -->
        <v-app-bar app color="#111" dark elevation="0">
            <v-img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" max-width="100"
                contain></v-img>

            <v-tabs background-color="transparent" class="ml-4 d-none d-sm-flex">
                <v-tab>หน้าแรก</v-tab>
                <v-tab>ซีรีส์</v-tab>
                <v-tab>ภาพยนตร์</v-tab>
                <v-tab>มาใหม่และกำลังฮิต</v-tab>
                <v-tab>รายการของฉัน</v-tab>
            </v-tabs>

            <v-spacer></v-spacer>

            <v-btn icon class="mr-2">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon class="mr-2">
                <v-icon>mdi-bell</v-icon>
            </v-btn>
            <v-avatar size="32" class="mr-2">
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
            </v-avatar>
        </v-app-bar>

        <!-- Main Content -->
        <v-main>
            <!-- Hero Section -->
            <div class="hero-image" :style="{ backgroundImage: `url(${featuredContent.backdropUrl})` }">
                <div class="hero-overlay">
                    <v-container fill-height>
                        <v-row align="end" style="height: 100%;">
                            <v-col cols="12" sm="8" md="6" class="pb-12">
                                <v-img :src="featuredContent.logoUrl" max-width="400px" class="mb-4"></v-img>
                                <p class="text-h6 mb-4">{{ featuredContent.description }}</p>
                                <div>
                                    <v-btn color="white" class="mr-2" dark>
                                        <v-icon left>mdi-play</v-icon> เล่น
                                    </v-btn>
                                    <v-btn color="grey darken-3" class="mr-2" dark>
                                        <v-icon left>mdi-information-outline</v-icon> ข้อมูลเพิ่มเติม
                                    </v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
            </div>
            
            <v-container fluid class="mt-6 pa-0">
                <!-- Content Rows -->
                <div v-for="(category, index) in categories" :key="index" class="mb-8">
                    <div class="section-title">{{ category.title }}</div>
                    <v-slide-group show-arrows>
                        <v-slide-item v-for="(item, i) in category.items" :key="i">
                            <v-card class="ma-2 movie-card" width="200" height="120" :img="item.imageUrl"
                                @click="showDetails(item)">
                                <v-progress-linear v-if="category.title === 'รับชมต่อสำหรับคุณ'" :value="item.progress"
                                    color="red" height="2" class="ma-0 pa-0"></v-progress-linear>
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'NetflixHome',
    data() {
        return {
            featuredContent: {
                backdropUrl: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg', // ใส่ URL รูป hero ที่นี่
                logoUrl: 'https://cdn.vuetifyjs.com/images/logos/v.svg', // ใส่ URL โลโก้ content ที่นี่
                description: 'ซีซั่นใหม่ออกมาแล้ว จงติดตามการผจญภัยที่น่าตื่นเต้นของตัวละครสุดโปรดของคุณ'
            },
            categories: [
                {
                    title: 'กำลังเป็นที่นิยมบน Netflix',
                    items: Array.from({ length: 10 }, (_, i) => ({
                        id: `popular-${i}`,
                        title: `ชื่อเรื่องยอดนิยม ${i + 1}`,
                        imageUrl: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                        progress: null
                    }))
                },
                {
                    title: 'รับชมต่อสำหรับคุณ',
                    items: Array.from({ length: 10 }, (_, i) => ({
                        id: `continue-${i}`,
                        title: `ชื่อเรื่องรับชมต่อ ${i + 1}`,
                        imageUrl: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
                        progress: Math.floor(Math.random() * 90) + 5
                    }))
                },
                {
                    title: 'กำลังเป็นที่นิยม',
                    items: Array.from({ length: 10 }, (_, i) => ({
                        id: `trending-${i}`,
                        title: `ชื่อเรื่องกำลังฮิต ${i + 1}`,
                        imageUrl: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
                        progress: null
                    }))
                },
                {
                    title: 'ภาพยนตร์ไทย',
                    items: Array.from({ length: 10 }, (_, i) => ({
                        id: `thai-${i}`,
                        title: `ชื่อหนังไทย ${i + 1}`,
                        imageUrl: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
                        progress: null
                    }))
                }
            ]
        }
    },
    methods: {
        showDetails(item) {
            console.log('แสดงรายละเอียดของ:', item.title);
            // ส่วนนี้สามารถใส่โค้ดสำหรับแสดงหน้าต่างรายละเอียดของภาพยนตร์หรือซีรีส์
        }
    }
}
</script>

<style scoped>
.hero-image {
    height: 80vh;
    background-size: cover;
    background-position: center;
    position: relative;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
}

.movie-card {
    transition: transform 0.3s;
}

.movie-card:hover {
    transform: scale(1.08);
    z-index: 1;
}

.section-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 16px;
    margin-left: 16px;
}
</style>