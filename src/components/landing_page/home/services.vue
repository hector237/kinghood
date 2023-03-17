<template>

    <v-container fluid class="d-flex flex-column pa-16">

        <v-row class="justify-center align-center mb-10">
            <div class="text-h2">Services</div>
        </v-row>
        <v-row class="flex-row justify-space-around">
            <div v-for="i in 4" :key="i">
                <card class="mt-6 justify-center"></card>
            </div>

        </v-row>
    </v-container>
  
</template>

<script>
import Card from "./tools/card.vue";
export default {
    data() {
        return {
            services: [
                {
                    service_name: "Kitchen Hood Cleaning",
                    description: "Are you due for an exhaust hood cleaning? We can solve it for you",
                    img:"",
                },
                {
                    service_name: "Kitchen Hood Cleaning",
                    description: "Are you due for an exhaust hood cleaning? We can solve it for you",
                    img: "",
                },
                {
                    service_name: "Kitchen Hood Cleaning",
                    description: "Are you due for an exhaust hood cleaning? We can solve it for you",
                    img: "",
                },
                {
                    service_name: "Kitchen Hood Cleaning",
                    description: "Are you due for an exhaust hood cleaning? We can solve it for you",
                    img: "",
                },
                
            ]
        }
    },

    components: {
        Card,
    }

}
</script>

<style>

</style>