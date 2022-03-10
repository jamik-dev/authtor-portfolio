<template>
    <section id="home" class="section active">
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
                  <h1 class="common-title animate__animated animate__fadeInDown animate__delay-3s">Alex Smith</h1>
                  <div class="animated-bar animate__animated animate__fadeInDown animate__delay-3s"></div>
                  <div class="animated-text animate__animated animate__fadeInDown animate__delay-3s">
                    <h3>Web Developer</h3>
                    <h3>UI - UX Designer</h3>
                    <h3>Software Engineer</h3>
                  </div>
                  <!-- Social media icons-->
                  <div class="fixed-block animate__animated animate__jackInTheBox animate__delay-5s">
                    <ul class="list-unstyled social-icons">
                      <li><a href="javascript:void(0)"><i class="fab fa-twitter"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fab fa-facebook-square "></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fab fa-linkedin "></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fab fa-github-square "></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fab fa-instagram "></i></a></li>
                    </ul>
                  </div>
                  <p class="lorem-text animate__animated animate__zoomIn animate__delay-3s">I am a freelancer based in
                    the
                    United Kingdom and i have been building noteworthy
                    UX/UI designs and websites for years, which comply with the latest design trends. I help convert a
                    vision and an idea into meaningful and useful products. Having a sharp eye for product evolution
                    helps
                    me prioritize tasks, iterate fast and deliver faster.
                  </p>
                  <div class="home-btn">
                    <a href="#contact" data-section-index="1"
                      class="clickbtn hire-me animate__animated animate__fadeInTopLeft animate__delay-5s ">Hire me</a>
                    <a href="#about" data-section-index="1"
                      class="clickbtn about animate__animated animate__fadeInTopRight animate__delay-5s">about me </a>
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
export default {
    name: 'Home',
};
</script>

<style>
</style>