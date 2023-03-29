<template>
  <div class=" background pa-16">

    <div class=" text-center text-h2 pb-16" > Our Team</div>

    <div class="d-flex flex-column  flex-md-row justify-center  ">

        <div class="my-16 mx-md-3 mx-lg-10" v-for="i in 3" :key="i">
            <car></car>
        </div>
        
    </div>

  </div>
</template>

<script>
import  Car from "./tools/card.vue";
export default {
    components: {
        Car,
    }
}
</script>

<style>

</style>