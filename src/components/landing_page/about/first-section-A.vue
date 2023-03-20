<template>
  <div class=" ">
             <v-img
             cover
             height="200"
             gradient="to top right, rgba(54,51,44,.5), rgba(54,51,44,.5)"
             :src="background_url">
         
             <template v-slot: placeholder >
                    <div  class="d-flex  justify-center mt-16  ">
                       <div class="text-h2 text-center">
                           About Us

                       </div>
                    </div>
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
}


</script>

<style>

</style>