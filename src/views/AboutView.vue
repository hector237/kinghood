<template>
  <div>
    <headers></headers>
    
      <about></about>
      <why></why>
      <contact></contact>
      <team></team>
    

  </div>
</template>

<script>
import Headers from "../components/landing_page/about/first-section-A.vue"
import About from "../components/landing_page/about/about.vue"
import Why from "../components/landing_page/about/why.vue"
import Contact from "../components/landing_page/about/contact-A.vue"
import Team from "../components/landing_page/about/team.vue"



export default {

  components: {
    Headers,
    About,
    Why,
    Contact,
    Team,
}

}
</script>

<style>

</style>