<template>
      <v-app-bar app>
        <v-app-bar-title>ระบบปรับเป็นพินัย</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props">USER</v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" :value="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
  </template>

<script>
export default {
    data() {
        return {
            items:[
                {title:'เพิ่มผู้ใช้งาน',href:'/dopa/adduser'},
                {title:'จัดการผู้ใช้งาน',href:'/dopa/edituser'},
                {title:'เปลี่ยนรหัสผ่าน',href:'/dopa/changepassword'},
                {title:'ออกจากระบบ',href:'/'},
            ]
        }
    },
}
</script>
