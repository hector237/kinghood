<template>
    <v-container class="pa-10 background">


        <v-row class="d-flex justify-center mb-10 ">
            <div class="text-h2 text-center">OUR SATISFIED CLIENTS
                <v-divider class="align-start surface my-5 mx-10" inset></v-divider>
            </div>
        </v-row>
        <div class="pb-10">
            <carousel-3d
            @after-slide-change="onAfterSlideChange" 
            @before-slide-change="onBeforeSlideChange" 
            @last-slide="onLastSlide"
            :autoplayHoverPause="carousel.autoplayHoverPause"
            :perspective="carousel.perspective"
            :width="carousel.width"
            :height="carousel.height"
            :display="carousel.display"
            :autoplay="carousel.autoplay"
            :controlsVisible="carousel.controlsVisible">
                <slide v-for="(slide, i) in slides" :key="slide" :index="i">
                <card></card>
                </slide>
            </carousel-3d>
      </div>
  </v-container>
</template>

<script>
import Card from './tools/card-review.vue'



export default {
  data() {
        return {
            slides: 7,
            carousel: {
                autoplay: true,
                autoplayTimeout: 100,
                autoplayHoverPause: false,
                count: 0,
                perspective: 35,
                display: 5,
                bias: "Left",
                loop: true,
                animationSpeed: 500,
                dir: "rtl",
                width: 400,
                height: 420,
                border: 0,
                space: "auto",
                startIndex: 0,
                clickable: true,
                minSwipeDistance: 10,
                controlsVisible: true,

            }
        }
    },

    methods: {
        onAfterSlideChange(index) {
            console.log('@onAfterSlideChange Callback Triggered', 'Slide Index ' + index)
        },
        onBeforeSlideChange(index) {
            console.log('@onBeforeSlideChange Callback Triggered', 'Slide Index ' + index)
        },
        onLastSlide(index) {
            console.log('@onLastSlide Callback Triggered', 'Slide Index ' + index)
        }
    },
     components: {
        Card,
    }

}
</script>

<style>

</style>