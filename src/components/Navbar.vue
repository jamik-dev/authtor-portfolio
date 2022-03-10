<template>
    <div class="header-holder services-section text-center animate__animated animate__zoomIn">
      <div class="navigation">
        <ul class="nav">
          <li class="list indicator active">
            <router-link to="/home" class="active">
              <span class="icon">
                <i class="fas fa-house-user"></i>
              </span>
              <div class="social__tooltip social__tooltip-bottom">Home</div>
            </router-link>
          </li>
          <li class="list">
            <router-link to="/about">
              <span class="icon">
                <i class="fas fa-user-alt"></i>
              </span>
              <div class="social__tooltip social__tooltip-bottom">About</div>
            </router-link>
          </li>
          <li class="list">
            <router-link to="/portfolio">
              <span class="icon">
                <i class="fas fa-briefcase"></i>
              </span>
              <div class="social__tooltip social__tooltip-bottom">Portfolio</div>
            </router-link>
          </li>
          <li class="list">
            <router-link to="/blog">
              <span class="icon">
                <i class="fas fa-blog"></i>
              </span>
              <div class="social__tooltip social__tooltip-bottom">Blog</div>
            </router-link>
          </li>
          <li class="list">
            <router-link to="/contact">
              <span class="icon">
                <i class="fas fa-phone-alt"></i>
              </span>
              <div class="social__tooltip social__tooltip-bottom">Contact</div>
            </router-link>
          </li> 
        </ul>
      </div>
    </div>
</template>

<script>
export default {
 name: 'Navbar',
}
</script>

<style>

</style>