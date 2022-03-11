<template>
  <section id="blog" class="section">
    <div class="homecolor-block"></div>
    <div
      class="common_bg animate__animated animate__fadeInDown"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
    >
      <div class="container">
        <!-- Blog-Section Title -->
        <div class="blog-section text-center">
          <div class="row">
            <div class="col-12">
              <div
                class="
                  section-title
                  animate__animated animate__bounceInDown animate__delay-1s
                "
              >
                <P class="common-desctiption">You searched not existing page</P>
                <h1 class="common-title">404 not <span>found</span></h1>
                <div class="animated-bar"></div>
                <div class="my-5 pt-5">
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-md-10 col-xl-8">
                        <div>
                          <img
                            src="assets/images/notFound/error-img.png"
                            alt=""
                            class="img-fluid"
                          />
                        </div>
                        <div class="mt-5 text-center">
                            <router-link
                              class="btn btn-primary"
                              style="background-color: #fa5b0f; border: none; padding: 7px 10px;"
                              to="/home"
                              >Back to Dashboard</router-link
                            >
                          </div>
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end row -->
                  </div>
                  <!-- end container -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Blog-Section Title End -->
        <!-- Blog-Content Box Start -->
        <div
          class="
            blog-section
            animate__animated animate__fadeInUp animate__delay-2s
          "
        ></div>
        <!-- Blog-Content Box End -->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "NotFound",
};
</script>

<style>
</style>