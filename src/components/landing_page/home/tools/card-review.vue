<template>
    <v-card class="pa-5 overflow-hiden" width="400"  height="420" >

        <div class="d-flex flex-column justify-center align-center ">

            <v-avatar
            color="blue"
            size="60">

            </v-avatar>
            <div class="text-h5">
                 <div >KrustyCrab</div>
            </div>
            <div class="text-subtitle-1">
                Mingh Zhang 
            </div>
             <div class="text-subtitle-2">
                    Owner and President
                </div>
        </div>

        <div class="text-center d-flex justify-center align-center mt-10 mt-sm-0">
                    <v-rating v-model="rating" color="yellow darken-3" background-color="grey darken-1" empty-icon="$ratingFull"
                        half-increments hover large></v-rating>
                </div>
        
        <v-card-text class=" d-none d-sm-flex  align-center ">
            <p class="text-subtitle-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iure Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iure
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iure Lorem ipsum dolor sit amet co</p>
                
            
        </v-card-text>
        
        
    </v-card>
</template>

<script>
export default {
   name:'card-review'
}
</script>

<style>

</style>