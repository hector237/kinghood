<template>
<div class="">

    <v-app-bar app color="primary" elevation="10" height="80" elevate-on-scroll>

        <v-app-bar-nav-icon @click="drawer = true" class="d-md-none" x-large>

        </v-app-bar-nav-icon>
        <v-spacer class="d-md-none"></v-spacer>
        
        <div class=" d-flex flex-row-reverse justify-end align-center flex-md-row">
                <a href="/">
                <v-avatar color="secondary" size="62" class=""></v-avatar>

            </a>
                <v-col class="d-flex flex-column mt-5 text-h4">
                    <div>KING HOOD</div>
                    <p class="text-subtitle-1">Cleaning LLC</p>

                </v-col>
            </div>

        <v-spacer class="d-none d-md-flex"></v-spacer>

        <div class="d-md-flex flex-row  align-end d-none">

            <div class="d-flex align-end ">

                <v-btn large text falt>Home</v-btn>
                <v-btn large text>Services</v-btn>
                <v-btn large text>About US</v-btn>
                <v-btn large text>Contact US</v-btn>
            </div>

            <div>
                <v-btn color="secondary" light large class="d-none d-md-flex ">Hire Us</v-btn>

            </div>
        </div>

    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary class="primary">

        <v-list nav dense>
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                <v-list-item>

                    <v-list-item-title>
                        <div class="text-center text-h6 my-3">
                            Home
                        </div>
                        <v-divider></v-divider>
                    </v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>
                        <div class="text-center text-h6 my-3">
                            Services
                        </div>
                        <v-divider></v-divider>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>

                    <v-list-item-title>
                        <div class="text-center text-h6 my-3">
                            About US
                        </div>
                        <v-divider></v-divider>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>

                    <v-list-item-title>
                        <div class="text-center text-h6 my-3">
                            Contact US
                        </div>
                        <v-divider></v-divider>
                    </v-list-item-title>
                </v-list-item>

            </v-list-item-group>
        </v-list>

        <div class="mt-5">
            <v-btn color="secondary" size="x-large" height="60"  block tile>Hire Us</v-btn>

        </div>

        <template v-slot:append>
            <div class="text-center mb-5">
                {{ new Date().getFullYear() }} — <strong>King Hood Cleaning LLC</strong>
            </div>
        </template>

        <template v-slot:prepend>
            <div class="d-flex flex-row   mt-5">
                <v-avatar color="primary" size="62" class="mx-5"></v-avatar>
                <div class="flex-column text-h5 ">

                    <div>KING HOOD</div>
                    <p class="text-body-1">Cleaning LLC</p>
                </div>
            </div>
            <v-divider></v-divider>
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
