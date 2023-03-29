<template>
<v-hover v-slot="{ hover }" @click="goToService">
    <v-card class="mx-auto background" max-width="300" :elevation="hover ? 12 : 0"  @click="goToService">

        <div class="pa-5">

            <v-img contain max-width="300px" max-height="200px" :src="image.url" class="pt-5">

            </v-img>
        </div>
        <v-card-text class="text--primary">
            <v-card-title class="text-h6 text-md-h5">Kitchen Hood Cleaning</v-card-title>
            <div class="text-body-1">Are you due for an exhaust hood cleaning? We can solve it for you</div>

        </v-card-text>

    </v-card>
</v-hover>
</template>

<script>
export default {
    data() {
        return {
            image: {
                url: require('@/assets/img/kitchen-hood.png')
            }
        }
    },
    methods: {
         goToService() {
            this.$router.push('/services')
        },
    },
}
</script>

<style>

</style>
