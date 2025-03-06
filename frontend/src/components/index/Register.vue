<template>
    <v-container class="">
        <v-row>
            <v-col cols="12" sm="7">
                <v-img aspect-ratio="16/9" cover rounded
                    src="https://images.unsplash.com/photo-1736167852463-ee8409a2e299?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></v-img>

            </v-col>
            <v-col cols="12" sm="5">
                <v-card>
                    <v-card-title primary-title>
                        Register
                    </v-card-title>
                    <v-form fast-fail @submit.prevent class="pa-4">
                        <v-text-field v-model="firstName" :rules="firstNameRules" label="First name" clearable></v-text-field>
                        <v-text-field v-model="lastName" :rules="lastNameRules" label="Last name" clearable></v-text-field>
                        <v-container class="pa-0 d-flex justify-end" >
                            
                            <v-btn class="mt-2" type="submit">Submit</v-btn>
                        </v-container>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mt-12 pl-16 pr-16 pt-16 pb-16">
            <v-col cols="">
                <div class="d-flex fill-height justify-center align-center text-center">
                    <div class=" text-black font-weight-light">
                        <p class="text-h3 mb-3">If you're afraid it'll disappear, leave it with us. </p>
                        <p class="text-body-1">Let 2YOUR be that place where you can
                            store
                            photos and stories that will never come back.</p>

                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            firstNameRules: [
                value => {
                    if (value?.length >= 3) return true

                    return 'First name must be at least 3 characters.'
                },
            ],
            lastName: '123',
            lastNameRules: [
                value => {
                    if (/[^0-9]/.test(value)) return true

                    return 'Last name can not contain digits.'
                },
            ],
        }
    },
    methods: {

    },
}
</script>