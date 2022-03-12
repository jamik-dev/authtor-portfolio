<template>
  <div v-if="showPre" id="preloader" :class="{ 'preloaded': preloader}">
    <div class="loader_line"></div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Preloader",
  setup() {
    const showPre = ref(true)
    const preloader = ref(false);
    setTimeout(function () {
      preloader.value = true;
    }, 800);
    setTimeout(function () {
      showPre.value = false;
    }, 2000);
    return {showPre, preloader}
  },
};
</script>


<style>
</style>