<template>
    <Navbar />
    <router-view />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { importCss, importJs } from "../helpers/importScript.js";
export default {
  name: "DefaultLayout",
  components: { Navbar },
  mounted() {
    //importing Css
    importCss();
    importCss();
    importCss();
    importCss();
    importCss();
    importCss();
    importCss();
    importCss();
    importCss();


    //importing Js
    importJs();
    importJs();
    importJs();
    importJs();
    importJs();
    importJs();
    importJs();
    importJs();
    importJs();
    importJs();

  },
};
</script>

<style>
</style>