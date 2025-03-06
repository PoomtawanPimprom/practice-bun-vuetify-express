<template>
    <v-card class="" hover>
        <v-img :height="height" :src="img" cover />
        <v-card-title primary-title>
            {{ title }}
        </v-card-title>
        <v-card-subtitle>
            {{ subTitile }}
        </v-card-subtitle>
        <v-card-actions>
            <v-spacer></v-spacer>
            <div v-if="id && id.length > 0">
                <v-btn href="/">
                    แก้ไข
                </v-btn>
            </div>

            <v-btn @click="openDialog(img)">
                more
            </v-btn>
            <v-dialog v-model="dialog" width="380">
                <v-card>
                    <v-img :src="selectImg"></v-img>

                    <template v-slot:actions>
                        <v-btn class="ms-auto" text="Close" @click="closeDialog"></v-btn>
                    </template>
                </v-card>
            </v-dialog>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        id: String,
        title: String,
        subTitile: String,
        height: {
            type: String,
            default: "370"
        },
        img: {
            type: String,
            default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZY-_UoLfuTC39p_fIk1bnJyI3DNHVtNIttw&s"
        },
    },
    data() {
        return {
            selectImg: "",
            dialog: false,
        }
    },
    methods: {
        openDialog(img) {
            this.selectImg = img
            this.dialog = true
        },
        closeDialog() {
            this.selectImg = ""
            this.dialog = false
        }
    },

}
</script>