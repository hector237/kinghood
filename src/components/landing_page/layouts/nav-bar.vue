<template>
<div class="">

    <v-app-bar app color="green" height="100" elevate-on-scroll>
        <v-app-bar-nav-icon @click="drawer = true" class="d-md-none"></v-app-bar-nav-icon>

        <v-spacer class="d-md-none"></v-spacer>

        <div class=" d-flex flex-row-reverse justify-end align-center flex-md-row">
            <v-avatar color="primary" size="56" class=""></v-avatar>

            <v-col class="d-flex flex-column mt-5 ">
                <div>KING HOOD</div>
                <p>Cleaning LLC</p>

            </v-col>
        </div>

        <v-spacer class="d-none d-md-flex"></v-spacer>

        <div class="d-md-flex flex-row justify-center align-center d-none">

            <div class="d-flex  ">

                <v-btn large text>Home</v-btn>
                <v-btn large text>Services</v-btn>
                <v-btn large text>About US</v-btn>
                <v-btn large text>Contact US</v-btn>
            </div>

            <div>
                <v-btn color="9C712B" large class="d-none d-md-flex ">Hire Us</v-btn>

            </div>
        </div>

    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary>

        <v-list nav dense>
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-service</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Services</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-about</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>About US</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Contact US</v-list-item-title>
                </v-list-item>
                
            </v-list-item-group>
        </v-list>

        <div class="d-flex justify-center">
            <v-btn color="9C712B" block large >Hire Us</v-btn>

        </div>

        <template v-slot:append>

            <div class="text-center mb-5">
                {{ new Date().getFullYear() }} — <strong>King Hood Cleaning LLC</strong>
            </div>
        </template>

    </v-navigation-drawer>
</div>
</template>

<script>
export default {

    data() {
        return {
            drawer: false,
            group: null,
        }
    },

}
</script>

<style></style>
