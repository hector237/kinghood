<template>
<v-footer padless color="surface" dark  >

    <v-container class=" d-flex flex-column flex-md-row justify-space-between mb-5 ">
        
        <div  class="d-flex flex-column justify-center align-center text-subtitle-1 ">

            <v-avatar color="primary" size="64"></v-avatar>
            <v-toolbar-title class="text-h5">KING HOOD</v-toolbar-title>
            <p class="text-body-1">Cleaning LLC</p>
            <p class="">904 xxx xxxx</p>
            <p>user@user.com</p>
            <p class="">direccion</p>

        </div>
        <v-divider class=" d-lg-none my-5"></v-divider>
        <div cols="4" class="d-flex flex-column justify-center align-center my-5 "> 
            <p class="text-h6">Usefull Links</p>
            <v-btn  large text>Home</v-btn>
            <v-btn  large text>Services</v-btn>
            <v-btn  large text>About US</v-btn>
            <v-btn  large text>Contact US</v-btn>
        </div>

        <v-divider class=" d-lg-none my-5"></v-divider>
        <div cols="4" class="d-flex  flex-column justify-center align-center my-5">

            <div class=" flex-column">
                <v-form>
                    <p class="text-h6">Subscribe to our newsletter</p>
                    <v-text-field 
                    label="example@example.com "></v-text-field>
                    <v-btn class="" color="secondary" >
                        Subscribe
                    </v-btn>
                </v-form>
            </div>
            <div class="d-flex">
                <v-btn  color="primary" icon>
                    <v-icon>mdi-youtube</v-icon>
                </v-btn>
                <v-btn color="primary"  icon>
                    <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn  color="primary" icon>
                    <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn color="primary"  icon>
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
