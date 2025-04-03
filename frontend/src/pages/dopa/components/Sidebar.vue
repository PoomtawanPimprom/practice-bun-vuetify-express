<template>
    <v-navigation-drawer app :width="265">
      <v-list-item title="เมนูหลัก" to="/dopa"  class="text-purple-lighten-1 pa-4"></v-list-item>
      <v-divider></v-divider>
      <v-list-item
        v-for="(item, index) in list"
        :key="index"
        :to="item.href"
        link
        :title="item.name"
      ></v-list-item>
    </v-navigation-drawer>
</template>

<script>

export default {
  data() {
    return {
      list: [
        { name: "ตรวจสอบการแจ้งเหตุ", href: "/dopa/checklist" },
        { name: "เจ้าหน้าที่บันทึกข้อมูล", href: "/dopa/make" },
        { name: "รายละเอียดการรับแจ้งเหตุ", href: "/dopa/detailList" },
        { name: "รายงานการรับแจ้งเหตุ", href: "/dopa/detail" },
        { name: "สถิติการแจ้งเหตุ", href: "/dopa/statistic" },
      ],
    };
  },
};
</script>
