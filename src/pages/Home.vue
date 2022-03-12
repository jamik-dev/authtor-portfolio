<template>
    <section id="home" class="section">
        <div class="homecolor-block"></div>
        <div class="common_bg animate__animated animate__zoomIn">
          <div class="container m-auto">
            <div class="row align-items-center">
              <!-- Profile-Pic -->
              <div class=" col-xl-5 col-lg-6 col-md-6 col-12">
                <div class="home-profile animate__animated animate__fadeInLeft animate__delay-1s">
                  <img src="assets/images/profile/simple.jpg" alt="home-profile">
                </div>
              </div>
              <!-- Profile-Pic End-->
              <!-- Profile-Information -->
              <div class="col-xl-7 col-lg-6 col-md-6 col-12">
                <div class="home-content">
                  <P class="common-desctiption animate__animated animate__fadeInDown animate__delay-2s">Get to know me
                  </P>
                  <h1 class="common-title animate__animated animate__fadeInDown animate__delay-3s">Jamshid Toshov</h1>
                  <div class="animated-bar animate__animated animate__fadeInDown animate__delay-3s"></div>
                  <div class="animated-text animate__animated animate__fadeInDown animate__delay-3s">
                    <h3>Web Developer</h3>
                    <h3>SMM & VideoMaker</h3>
                    <h3>Software Engineer</h3>
                  </div>
                  <!-- Social media icons-->
                  <Icons />
                  <p class="lorem-text animate__animated animate__zoomIn animate__delay-3s">I am a freelancer based in
                    the
                    Uzbekistan and I have been building noteworthy
                    websites for years, which comply with the latest design trends. I help convert a
                    vision and an idea into meaningful and useful products. Having a sharp eye for product evolution
                    helps
                    me prioritize tasks, iterate fast and deliver faster.
                  </p>
                  <div class="home-btn">
                    <router-link to="/contact" data-section-index="1"
                      class="clickbtn hire-me animate__animated animate__fadeInTopLeft animate__delay-5s ">Hire me</router-link>
                    <router-link to="/about" data-section-index="1"
                      class="clickbtn about animate__animated animate__fadeInTopRight animate__delay-5s">about me </router-link>
                  </div>
                </div>
              </div>
              <!-- Profile-Information End -->
            </div>
          </div>
        </div>
      </section>
</template>

<script>
import Icons from '../components/local/Icons.vue'
export default {
    name: 'Home',
    components: {Icons}
};
</script>

<style>
</style>