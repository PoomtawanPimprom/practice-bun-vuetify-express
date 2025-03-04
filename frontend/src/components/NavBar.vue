<template>
    <v-container fluid class="pa-0">
        <v-toolbar style="width: 100%;">
            <v-row align="center">
                <v-col cols="6" md="2">
                    <v-btn href="/" variant="text" class="" style="font-weight: 800;">2You</v-btn>
                </v-col>
                
                <!-- เมนูสำหรับจอขนาดกลางและใหญ่ -->
                <v-col cols="0" md="6" class="d-none d-md-flex">
                    <!-- <v-btn href="/" variant="text">หน้าแรก</v-btn> -->
                    <!-- <v-btn href="/help" variant="text">คู่มือการสมัครงาน</v-btn> -->
                </v-col>
                
                <v-spacer />
                
                <!-- ปุ่มผู้ใช้ -->
                <v-col cols="6" md="4" class="d-flex justify-end">
                    <v-btn >
                        Login
                        <v-menu activator="parent">
                            <v-list>
                                <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-btn>
                    
                    <!-- ปุ่มเมนูแฮมเบอร์เกอร์สำหรับมือถือ -->
                    <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
                </v-col>
            </v-row>
        </v-toolbar>
        
        <!-- Navigation Drawer สำหรับมือถือ -->
        <v-navigation-drawer v-model="drawer" temporary>
            <v-list>
                <v-list-item href="/" prepend-icon="mdi-home">
                    <v-list-item-title>หน้าแรก</v-list-item-title>
                </v-list-item>
                <v-list-item href="/help" prepend-icon="mdi-help-circle">
                    <v-list-item-title>คู่มือการสมัครงาน</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            items: [
                { title: "แดชบอร์ด" },
                { title: "เปลี่ยนรหัสผ่าน" },
                { title: "เปลี่ยนอีเมล" },
                { title: "ออกจากระบบ" },
            ]
        }
    }
}
</script>