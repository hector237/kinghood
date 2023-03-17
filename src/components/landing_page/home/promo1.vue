<template>
<div class="    grey">
    <div class="d-flex flex-row  flex-md-row  flex-column-reverse  ">
        <div class="text-h3 d-flex justify-center align-center flex-column text-center mt-5 ml-lg-16 ml-xl-0 pa-lg-10">
            Don’t Gamble with Dirt You Can’t Handle.

            <div class="text-h6 d-flex justify-center align-center ml-lg-10   justify-xl-end ml-xl-16 pl-xl-16 text-center my-5 mx-8">
                We are a kitchen hood cleaning company with immense experience in the industry.
                are a family owned business
                that was started in 2022 with lead technicians
                averaging over ten years of kitchen
                hood cleaning experience. We also have team of experts who
                share their knowledge and expertise in the field.
                <br>
                <br>
                We believe in providing quality service to all our customers. Being the first in the industry
                to provide “before” and “after” pictures of the services provided by us,
                we are known and trusted for the quality of our top kitchen exhaust hood cleaning services in Jacksonville Metro area.
            </div>
        </div>

        <div class="picture d-flex justify-center align-center justify-lg-start mt-10 my-lg-5  ">

            <div class="circle ">
            </div>

        </div>
    </div>

</div>
</template>

<script>
export default {

}
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
            height: 70%;
        }
    }
@media(min-width: 1904px) {

        .circle {
            width: 50%;
            height: 0;
        }
    }

</style>
