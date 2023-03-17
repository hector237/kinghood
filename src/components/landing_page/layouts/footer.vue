<template>
<v-footer padless color="black" dark >

    <v-container class=" d-flex flex-column flex-md-row justify-space-between">
        
        <div  class="d-flex flex-column justify-center align-center">

            <v-avatar color="primary" size="64"></v-avatar>
            <v-toolbar-title>KING HOOD</v-toolbar-title>
            <p>Cleaning LLC</p>
            <p>904 xxx xxxx</p>
            <p>user@user.com</p>

        </div>
        <v-divider class=" d-lg-none my-5"></v-divider>
        <div cols="4" class="d-flex flex-column justify-center align-center  "> 
            <p class="">Usefull Links</p>
            <v-btn   text>Home</v-btn>
            <v-btn   text>Services</v-btn>
            <v-btn   text>About US</v-btn>
            <v-btn   text>Contact US</v-btn>
        </div>

        <v-divider class=" d-lg-none my-5"></v-divider>
        <div cols="4" class="d-flex  flex-column justify-center align-center">

            <div class=" flex-column">
                <v-form>
                    <p>Subscribe to receive offers and tips</p>
                    <v-text-field 
                    label="example@example.com "></v-text-field>
                    <v-btn class="" >
                        Subscribe
                    </v-btn>
                </v-form>
            </div>
            <div class="d-flex">
                <v-btn   icon>
                    <v-icon>mdi-youtube</v-icon>
                </v-btn>
                <v-btn   icon>
                    <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn   icon>
                    <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn   icon>
                    <v-icon>mdi-email</v-icon>
                </v-btn>
                </div>
            </div>

    </v-container>
    <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>King Hood Cleaning LLC</strong>
    </v-col>
</v-footer>
</template>

<script>
export default {

}
</script>

<style>

</style>
