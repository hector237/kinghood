<template>
  <div class="dark ">
         <v-img
         cover
         height="400"
         gradient="to top right, rgba(54,51,44,.5), rgba(54,51,44,.5)"
         :src="background_url">
         
         <template v-slot: placeholder >
            
            <v-container>

                <div  class="d-flex flex-column  align-content-center  mt-16 text-align-center">
                    <div class="text-h2  flex-column">
                        KINGHOOD
                        Cleaning LLC
                    </div>
                    <div class="text-h4 mt-5">
                        Taking cleaning to another level.
                        
                    </div>
                    <div style="max-widht: 50%" class="mt-5">
                        
                        
                        <v-btn color="secondary" @click="goToHire">Hire us today</v-btn>
                        
                    </div>
                </div>
                
            </v-container>


         </template>
        </v-img>

  </div>
</template>

<script>
export default {
        data() {
            return {
                background_url: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
            }
    },
    methods: {
             goToHire() {
            this.$router.push('/hire-us')
        },
        }
}
</script>

<style>

</style>