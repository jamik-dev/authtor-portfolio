<template>
    <section id="contact" class="section">
        <div class="homecolor-block"></div>
        <div class="common_bg animate__animated animate__zoomIn">
          <div class="container">
            <!-- Contact-page Start -->
            <div class="contact-section">
              <!-- Contact-Section Title -->
              <div class="row">
                <div class="col-12">
                  <div class="section-title animate__animated animate__fadeInDown animate__delay-1s">
                    <P class="common-desctiption">Feel free to contact me anytimes</P>
                    <h1 class="common-title">my <span>contact</span></h1>
                    <div class="animated-bar"></div>
                  </div>
                </div>
              </div>
              <!-- Contact-Section Title End-->
              <!-- Contact Form Start -->
              <div class="contact-section">
                <div class="row">
                  <!-- Contact form -->
                  <div class="col-lg-7 col-12 ">
                    <form class="contact-form animate__animated animate__fadeInLeft animate__delay-2s" id="contact-form">
                      <h4 class="content-title">contact me</h4>
                      <div class="row">
                        <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-name"
                            type="text" name="name" placeholder="Name" required=""></div>
                        <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-email"
                            type="email" name="email" placeholder="Email" required=""></div>
                        <div class="col-12 form-group"><input class="form-control" id="contact-subject" type="text"
                            name="subject" placeholder="Subject" required=""></div>
                        <div class="col-12 form-group form-message"><textarea class="form-control" id="contact-message"
                            name="message" placeholder="Message" rows="5" required=""></textarea></div>
                        <div class="col-12 mb-4 form-submit"><button class="clickbtn button-main button-scheme"
                            id="contact-submit" type="submit">Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <!-- Contact form End -->
                  <!-- Contact info -->
                  <div class="col-lg-5 col-12 ">
                    <div class="contact-info animate__animated animate__fadeInRight animate__delay-3s">
                      <h4 class="content-title">Contact Info</h4>
                      <p class="info-description">Always available for freelance work if the right project comes along,
                        Feel free to contact me!</p>
                      <ul class="list-unstyled list-info" style="display: inline-grid">
                        <li>
                          <div class="media d-flex align-items-center"><span class="info-icon"><i
                                class="fas fa-user-alt"></i></span>
                            <div class="media-body info-details">
                              <h6 class="info-type">Name</h6><span class="info-value">Alex Smith</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="media d-flex align-items-center"><span class="info-icon"><i
                                class="fas fa-map-pin"></i></span>
                            <div class="media-body info-details">
                              <h6 class="info-type">Location</h6><span class="info-value">4155 Mann Island, Liverpool,
                                United Kingdom.</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="media d-flex align-items-center"><span class="info-icon"><i
                                class="fas fa-phone-alt"></i></span>
                            <div class="media-body info-details">
                              <h6 class="info-type">Call Me</h6><span class="info-value"><a href="tel:+441632967704">+44
                                  1632 967704</a></span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="media d-flex align-items-center"><span class="info-icon"><i
                                class="fas fa-envelope"></i></span>
                            <div class="media-body info-details">
                              <h6 class="info-type">Email Me</h6><span class="info-value"><a
                                  href="mailto:Alex@example.com">Alex@example.com</a></span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <!-- Social media icons-->
                    <Icons />
                  </div>
                  <!-- Contact info End -->
                </div>
              </div>
              <!-- map -->
              <div class="row">
                <div class="col-12">
                  <div class="map animate__animated animate__fadeInRight animate__delay-3s">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19845.82732713224!2d-0.3162034543774074!3d51.55487883052924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876116207a6d0bd%3A0xaf7016a2cadb21e4!2sWembley%2C%20UK!5e0!3m2!1sen!2sin!4v1645179715804!5m2!1sen!2sin" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                  </div>
                </div>
              </div>
              <!-- map end -->
              <!-- Contact-Footer -->
              <div class="row justify-content-center animate__animated animate__fadeInUp animate__delay-5s">
                <div class="col-lg-6 text-center">
                  <h5 class="footer">Copyright&copy; &#160;<a> Avs Technolabs</a>&#160;&#160;<i
                      class="fas fa-heart animate__animated animate__pulse animate__faster animate__infinite	infinite"></i>&#160;&#160;All
                    rigths reserved</h5>
                </div>
              </div>
              <!-- Contact-Footer End -->
            </div>
            <!-- Contact-page End -->
          </div>
        </div>
      </section>
</template>

<script>
import Icons from '../components/local/Icons.vue'
export default {
  name: 'Contact',
  components: {Icons}
}
</script>

<style>

</style>