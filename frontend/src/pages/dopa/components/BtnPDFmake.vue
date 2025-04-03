<template>
    <v-container>
        <v-btn color="primary" @click="generatePDF">ดาวน์โหลด PDF</v-btn>
    </v-container>
</template>

<script>
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs; // ✅ กำหนดค่า vfs

export default {
    methods: {
        generatePDF() {
            console.log("📢 เริ่มสร้าง PDF...");

            const docDefinition = {
                content: [
                    { text: "Hello PDF!", fontSize: 20, bold: true, margin: [0, 0, 0, 10] },
                    { text: "นี่คือตัวอย่าง PDF ที่สร้างจาก pdfmake", fontSize: 14 },
                ],
            };

            console.log("📜 docDefinition:", docDefinition);

            pdfMake.createPdf(docDefinition).download("example.pdf");
            console.log("🎉 ดาวน์โหลด PDF สำเร็จ!");
        },
    },
};
</script>