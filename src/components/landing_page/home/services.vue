<template>
<v-container fluid class="d-flex flex-column pa-16 ">

    <v-row class="justify-center align-center  mb-10">
        <div class="text-h2 ">Services

            <v-divider class="align-start surface mt-5 mx-10" inset></v-divider>
        </div>
        
    </v-row>
    
    <v-row class="flex-row justify-space-around">

        <div v-for="i in services_list" :key="i">
            
                <card class="my-5" :service="i"></card>
           
        </div>

    </v-row>
</v-container>
</template>

<script>
import Card from "./tools/card.vue";
export default {
    data() {
        return {
            services_list: [
                {
                    title: "Kitchen Hood Cleaning",
                    service_name: "Kitchen Hood Cleaning in Jacksonville Metro area.",
                    description: "Are you due for an exhaust hood cleaning? We can solve it for you",
                    description_complete:  ` Is it that time again? Are you due for an kitchen hood cleaning? Well, if you are and you are in Jacksonville Metro area, then you are in luck because King Hood Cleaning is here for you. With the best equipment and licensed cleaners, you can get the best clean for your exhaust hoods in the entire Jacksonville Metro area.
                                            There are requirements from insurance companies and health departments that you have regular cleanings of your exhaust hood. You may be wondering about what constitutes a “regular” cleaning schedule, and for that, you should contact your insurance company or local board of health. We do find that as a general rule if you use grease consistently, it is a good idea to have a professional kitchen hood cleaning service scheduled every 90 days.
                                            There is no harm in playing it safe, and a cleaner kitchen creates a better environment for your entire restaurant. Contact King Hood Cleaning in Jacksonville Metro area today to schedule an exhaust hood cleaning.`,
                    icon: require('@/assets/img/kitchen-hood.png'), 
                },
                {
                    title: "PRESSURE WASHING",
                    service_name: "Kitchen Pressure Washing in Jacksonville Metro area.",
                    description: "Keep restaurants and commercial kitchens clean both inside and out with pressure washing!",
                    description_complete: `Hundreds of restaurants and food service facilities have relied on King Hood Cleaning for pressure washing and power washing services to clean and sanitize the toughest areas and renew their appearance.
                                            From hood cleaning to sidewalks and parking lots, power washing can be used to help keep restaurants and commercial kitchens clean both inside and out. King Hood Cleaning services large areas such as outdoor surfaces. We also take care of hard to reach areas like grease ducts.
                                             King Hood Cleaning also provides commercial and industrial pressure and power washing and residential pressure and power washing services.`,
                    icon: require('@/assets/img/pressure-washer.png'),
                },
                {
                    title: "Fan Belt Replacement ",
                    service_name: "Fan Belt Replacement in Jacksonville Metro area.",
                    description: "Greatly improve air quality in your restaurant or commercial kitchen!",
                    description_complete: `It’s common for exhaust fan belts to have wear and tear, but it’s important to have them and the rest of your restaurant or commercial kitchen ventilation system inspected to prevent your belt from breaking and compromising your entire system. Belts that have visible cracks will break in a short matter of time, which will result in the disruption of business operations and require expensive emergency repair services.
                                            King Hood Cleaning does the job for your kitchen’s safety and keep your business running!`,
                    icon: require('@/assets/img/fan-maintenance.png'),
                },
                {
                    title: "Food Truck Cleaning ",
                    service_name: "Food Truck Cleaning in Jacksonville Metro area.",
                    description: "Let us experts save you the time and guarantee your food truck cleaning gets done.",
                    description_complete: `To comply with Florida’s stringent food safety regulations, a food truck must be washed and sanitized frequently. We are a nearby food truck cleaning service with reasonable prices.
                                            Why spend all day going through a food truck cleaning checklist when you can engage a professional to sterilize it quickly and effectively for you?`,
                    icon: require('@/assets/img/food-truck.png'),
                },

            ]
        }
    },
    components: {
        Card,
    },
    methods: {
         goToServices() {
            this.$router.push('/services')
        },
    },
}
</script>

<style>

</style>
