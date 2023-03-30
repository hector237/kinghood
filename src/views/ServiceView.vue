<template>
<div class="">
    <first></first>

    <div v-for="service in service_list" :key="service">
        <service :info="service" :father="'service'" :button="button"></service>
    </div>
</div>
</template>

<script>
import First from "@/components/landing_page/services/baner.vue";
import Service from "@/components/tools/text-photo.vue";


export default {

    data() {
        return {

            service_list: [{
                name: "Kitchen Hood Cleaning in Jacksonville Metro area.",
                    subtitle: "",
                    description: ` Is it that time again? Are you due for an kitchen hood cleaning? Well, if you are and you are in Jacksonville Metro area, then you are in luck because King Hood Cleaning is here for you. With the best equipment and licensed cleaners, you can get the best clean for your exhaust hoods in the entire Jacksonville Metro area.

 
There are requirements from insurance companies and health departments that you have regular cleanings of your exhaust hood. You may be wondering about what constitutes a “regular” cleaning schedule, and for that, you should contact your insurance company or local board of health. We do find that as a general rule if you use grease consistently, it is a good idea to have a professional kitchen hood cleaning service scheduled every 90 days.

There is no harm in playing it safe, and a cleaner kitchen creates a better environment for your entire restaurant. Contact King Hood Cleaning in Jacksonville Metro area today to schedule an exhaust hood cleaning.
                `,
                    image_url: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                },
                {
                    name: "Kitchen Pressure Washing in Jacksonville Metro area.",
                     subtitle: "",
                    description: `Hundreds of restaurants and food service facilities have relied on King Hood Cleaning for pressure washing and power washing services to clean and sanitize the toughest areas and renew their appearance.
                              From hood cleaning to sidewalks and parking lots, power washing can be used to help keep restaurants and commercial kitchens clean both inside and out. King Hood Cleaning services large areas such as outdoor surfaces. We also take care of hard to reach areas like grease ducts.
                                King Hood Cleaning also provides commercial and industrial pressure and power washing and residential pressure and power washing services.`,
                    image_url: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                },
                {
                    name: "Fan Belt Replacement in Jacksonville Metro area.",
                     subtitle: "",
                    description: `It’s common for exhaust fan belts to have wear and tear, but it’s important to have them and the rest of your restaurant or commercial kitchen ventilation system inspected to prevent your belt from breaking and compromising your entire system. Belts that have visible cracks will break in a short matter of time, which will result in the disruption of business operations and require expensive emergency repair services.
King Hood Cleaning does the job for your kitchen’s safety and keep your business running!`,
                    image_url: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                },
                {
                    name: "Food Truck Cleaning in Jacksonville Metro area.",
                     subtitle: "",
                    description: `To comply with Florida’s stringent food safety regulations, a food truck must be washed and sanitized frequently. We are a nearby food truck cleaning service with reasonable prices.

Why spend all day going through a food truck cleaning checklist when you can engage a professional to sterilize it quickly and effectively for you?`,
                    image_url: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                },

            ],

            button: {
                title: "hire",
                link: "/hire"
            }
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
