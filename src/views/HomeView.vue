<template>
  

    <div  class="background">
      
      
      <second></second>
      <services></services>
      <promo></promo>
      <prom></prom>
      <why></why>
      <reviews ></reviews>
      
    </div>
  
</template>

<script>
import First from '../components/landing_page/home/first-section.vue'
import Second from '../components/landing_page/home/first-section-2.vue'
import Services from '../components/landing_page/home/services.vue'
import Promo from '../components/landing_page/home/promo1.vue'
import Prom from '../components/landing_page/home/promo2.vue'
import Why from '../components/landing_page/home/why.vue'
import Reviews from '../components/landing_page/home/reviews.vue'


  

  export default {
    name: 'Home',

    components: {
      First,
      Second,
      Services,
      Promo,
      Prom,
      Why,
      Reviews,
    },
  }
</script>
