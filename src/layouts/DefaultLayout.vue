<template>
  <div class="gaspar" data-magic-cursor="show" data-color="crimson">
    <Preloader />
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
  <div class="mouse-cursor cursor-outer"></div>
  <div class="mouse-cursor cursor-inner"></div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Preloader from "../components/Preloader.vue";
import { importCss, importJs } from "../helpers/importScript.js";
export default {
  name: "DefaultLayout",
  components: { Navbar, Preloader },
  mounted() {
    //importing Css
    importCss("assets/images/logo/favicon.png");
    importCss("assets/fonts/font.css");
    importCss("assets/css/all.css");
    importCss("assets/css/bootstrap.min.css");
    importCss("assets/css/owl.carousel.min.css");
    importCss("assets/css/jquery.fancybox.min.css");
    importCss("assets/css/styles.css");
    importCss("assets/css/responsive.css");
    importCss("assets/css/animate.min.css");

    //importing Js
    importJs("assets/js/jquery.min.js");
    importJs("assets/js/bootstrap.bundle.min.js");
    importJs("assets/js/jquery.fancybox.min.js");
    importJs("assets/js/mixitup.min.js");
    importJs("assets/js/owl.carousel.min.js");
    importJs("assets/js/jquery.countdown.min.js");
    importJs("assets/js/wow.min.js");
    importJs("assets/js/custom.js");
  },
};
</script>

<style>
</style>