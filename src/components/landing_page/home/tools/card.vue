<template>
<v-dialog v-model="dialog" width="700">

    <template v-slot:activator="{on,attrs}">
        <v-hover v-slot="{ hover }" @click="goToService">
            <v-card class="mx-auto background" max-width="300" :elevation="hover ? 12 : 0" v-bind="attrs" v-on="on">

                <div class="pa-5">

                    <v-img contain max-width="300px" max-height="200px" :src="service.icon" class="pt-5">

                    </v-img>
                </div>
                <v-card-text class="text--primary">
                    <v-card-title class="text-h6 text-md-h5">{{ service.title }}</v-card-title>
                    <div class="text-body-1">{{ service.description }}</div>

                </v-card-text>

            </v-card>
        </v-hover>
    </template>

    <v-card class="primary">
        <v-card-title class="text-h5 secondary">
            {{ service.service_name }}
        </v-card-title>

        <v-card-text class="text-body-1 font-weight-medium">
            {{ service.description_complete }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="surface" text @click="goToHire">
                Hire us
            </v-btn>
        </v-card-actions>
    </v-card>

</v-dialog>
</template>

<script>
export default {
    data() {
        return {
            image: {
                url: require('@/assets/img/kitchen-hood.png')
            },
             dialog: false,
        }
    },
    methods: {
        goToHire() {
            this.$router.push('/hire')
        },
    },
    props: {
        service: Object,
    }
}
</script>

<style>

</style>
