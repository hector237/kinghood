<template>
  <div class="background">
    
        <div class="d-flex flex-column flex-md-row ">
            <div class=" d-flex justify-center align-center flex-column mt-10 ml-lg-16 ml-xl-0 pa-lg-10">
                
                
                <div class="text-h6 d-flex justify-center align-center ml-lg-10   justify-xl-end ml-xl-16 pl-xl-16  my-5 mx-8">
                    We are a kitchen hood cleaning company with immense experience in the industry.
                    are a family owned business
                    that was started in 2022 with lead technicians
                    averaging over ten years of kitchen
                    hood cleaning experience. We also have team of experts who
                    share their knowledge and expertise in the field.
                    <br>
                    
                    We believe in providing quality service to all our customers. Being the first in the industry
                    to provide “before” and “after” pictures of the services provided by us,
                    we are known and trusted for the quality of our top kitchen exhaust hood cleaning services in Jacksonville Metro area.
                </div>
                <div class="d-flex  align-center mb-10 mt-5">
                    <v-btn x-large text color="surface" black>View Our Services</v-btn>
                </div>
            </div>
            
            <div class="d-flex justify-center align-center justify-lg-start mb-10 my-lg-5 mr-10 ">
                
                <div class="  ">
                    <v-img
                    cover
                    width="500"
                    height="400"
                    max-width="320"
                    max-height="700"
                    :src="background_url">
                 
                 
                </v-img>
            </div>
            
        </div>
    </div>

    </div>
</template>

<script>
export default {

     data() {
        return {
            background_url: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        }
    },

}
</script>

<style>




@media screen {
    
}

</style>