<template>
    <div class="header-holder services-section text-center animate__animated animate__zoomIn">
      <div class="navigation">
        <ul class="nav">
          <li class="list" v-for="link in links" @click="detector(link.address)" :key="link.id" :class="{'indicator active': linkEvent == link.address}">
            <router-link :to="link.address" :class="{'active': link.address == linkEvent}">
              <span class="icon">
                <i :class="link.icon"></i>
              </span>
              <div class="social__tooltip social__tooltip-bottom">{{link.name}}</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
 name: 'Navbar',
 setup() {
   const linkEvent = ref(null)
   const links = [
     {address: '/home', icon: 'fas fa-house-user', name: 'Home', id: 1},
     {address: '/about', icon: 'fas fa-user-alt', name: 'About', id: 2},
     {address: '/portfolio', icon: 'fas fa-briefcase', name: 'Portfolio', id: 3},
     {address: '/blog', icon: 'fas fa-blog', name: 'Blog', id: 4},
     {address: '/contact', icon: 'fas fa-phone-alt', name: 'Contact', id: 5}
   ]
   links.forEach(element => {
     if(element.address == window.location.pathname) {
       linkEvent.value = element.address;
     }
   })
  const detector = (el) => {
    if(el == window.location.pathname) {
      linkEvent.value = el.address;
    }
  }
  return {detector, links, linkEvent}
 }
}
</script>

<style>

</style>