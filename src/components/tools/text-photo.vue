<template>
<div class="background">

    <div class="d-flex flex-column flex-sm-row ">
        <div class=" d-flex justify-center align-center flex-column mt-10 ml-lg-16 ml-xl-0 pa-lg-10">

            <div class="text-h6 text-left d-flex justify-center align-center ml-lg-10   justify-xl-end ml-xl-16 pl-xl-16  my-5 mx-8">
                {{ info.description }}
            </div>
            <div class="d-flex  align-center mb-10 mt-5">
                <v-btn x-large text color="surface" @click="goTo">{{ button.title }}</v-btn>
            </div>
        </div>

        <div class="picture d-flex justify-center align-center justify-lg-start mt-10 my-lg-5  " v-if="father === 'home'">

            <div class="circle ">
            </div>

        </div>

        <div v-else class="d-flex justify-center align-center justify-sm-start align-sm-start align-md-center ml-5 my-16 mb-10 my-lg-5 mr-10 ">

            <div class="  ">
                <v-img cover width="500" height="400" max-width="320" max-height="700" :src="info.image_url">

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
    methods: {
        goTo() {
            this.$router.push(this.button.link)
        }
    },
    props: {
        info: Object,
        
        button: Object,
        father: String,
    },

}
/***
 * valores a recibir
 * data{
 *      Name,
 *      Description,
 *      image_url
 *      },
 * image{
 *      url,
 *      width,
 *      height,
 *      max-width,
 *      max-height} 
 * button{
 *      title,
 *      link
 * }
 * **/
</script>

<style>
.circle {
    width: 50%;
    height: 0;
    padding-bottom: 50%;
    border-radius: 50%;
    background-image: url("https://cdn.vuetifyjs.com/images/cards/docks.jpg");
    background-position: center;
    background-size: cover;
}

.picture {
    width: 90%;
    border-radius: 50% 0 50% 50%;
    ;
}

.my-div {
    width: 75%;
}

@media (max-width: 768px) {
    .my-div {
        width: 100%;
    }

    .picture {
        width: 100%;
    }
}

@media(min-width: 1264px) {

    .circle {
        width: 90%;
        height: 53%;
    }
}

@media(min-width: 1904px) {

    .circle {
        width: 50%;
        height: 0;
    }
}
</style>
