<template>
<div class="">
    <first></first>

    <div v-for="i in service_list" :key="i">
        <service></service>
    </div>
  </div>
</template>

<script>
import  First  from "@/components/landing_page/services/baner.vue";
import  Service  from "@/components/landing_page/services/service.vue";


export default {

    data() {
        return {
            
           service_list:  [
                 {
                name: "",
                description: "",

            },
             {
                name: "",
                description: "",

            },
           {
                name: "",
                description: "",

            },
             {
                name: "",
                description: "",

                },
            {
                    name: "",
                    description: "",

                },
            ],
        }
    },
    components: {
        First,
        Service,
    }

}
</script>

<style>

</style>