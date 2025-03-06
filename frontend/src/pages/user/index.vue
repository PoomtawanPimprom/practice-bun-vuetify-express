<template>
  <v-container class="">
    <v-row>
      <v-col>
        <p class="text-h3">Employee List</p>
      </v-col>
      <v-spacer />
      <v-col class="d-flex justify-end align-center">
        <v-btn @click="openDialog()">เพิ่มพนักงาน</v-btn>
      </v-col>
      <v-dialog
        v-model="dialog"
        scrollable
        :overlay="false"
        max-width="500px"
        transition="dialog-transition"
      >
        <v-card>
          <v-card-title> เพิ่มพนักงาน </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="this.createUser()">
              <v-text-field
                label="First name"
                placeholder="first name"
                clearable
                error-count=""
                v-model="formData.fname"
                outlined
                color
              >
              </v-text-field>
              <v-text-field
                label="Last name"
                placeholder="last name"
                clearable
                error-count=""
                v-model="this.formData.lname"
                outlined
                color
              ></v-text-field>
              <v-row>
                <v-spacer></v-spacer>
                <v-btn type="submit" color="green">create</v-btn>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
    <v-container class="pa-8">
      <v-row>
        <v-col cols="12" md="6" lg="3" xl="3" v-for="(item, index) in user" :key="index">
          <Card
            :id="item.id"
            :height="340"
            :title="concatString(item.fname, item.lname)"
            :subTitile="item.role.roleName"
          >
          </Card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { createUser, getAllUsers } from "@/api/user";
import Card from "../../components/Card.vue";

export default {
  data() {
    return {
      user: [],
      res: null,
      dialog: false,
      formData: {
        fname: "",
        lname: "",
      },
    };
  },
  methods: {
    async createUser() {
      console.log(this.formData);
      try {
        this.res = await createUser(this.formData);
        this.fetchData();
        this.dialog = false;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchData() {
      this.user = await getAllUsers();
    },
    concatString(fname, lname) {
      return fname + " " + lname;
    },
    openDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
  },
  mounted() {
    this.fetchData();
  },
  components: { Card },
};
</script>
