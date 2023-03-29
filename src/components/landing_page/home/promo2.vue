<template>

    <v-parallax
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        
        
      >
        <v-row
          class="d-flex justify-center align-center "
        >
          <v-col
            class="text-center d-flex flex-column justify-center align-center"
            cols="12"
          >
            <v-avatar color="red" size="128" circle class="d-none d-md-flex " >

              <img
                :src="logo.url"
                
                  >

            </v-avatar>
            <h1 class=" text-h3 text-md-h2  my-4 ">
              CLEANING EXCELLENCE GUARANTEED!
            </h1>
            <h4 class="text-h6 text-md-h5 ">
              An uncleaned exhaust hood, with its built up grease, 
              increases the risk for a fire. What is more important than the safety and security of your employees, customers and all those we love and care about?
            </h4>
            <div class="d-flex justify-center align-center mt-5">
            <v-btn x-large color="secondary" elevation="5" @click="goToHire">Hire Us!</v-btn>
          </div>
          </v-col>
        </v-row>
      </v-parallax>

  
</template>

<script>
import logo from '@/assets/logo.png';
export default {


  data() {
    return {
      logo: {
        url:  logo
      }
    }
  },
  methods: {
     goToHire() {
      this.$router.push('/hire-us')
    },
  },

}
</script>

<style>

</style>