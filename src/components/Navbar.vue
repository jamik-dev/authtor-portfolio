<template>
  <header class="header" id="navbar-collapse-toggle">
    <!-- Fixed Navigation Starts -->
    <ul class="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1">
        <li class="icon-box active">
            <i class="fa fa-home"></i>
            <a href="index.html">
                <h2>Home</h2>
            </a>
        </li>
        <li class="icon-box">
            <i class="fa fa-user"></i>
            <a href="about.html">
                <h2>About</h2>
            </a>
        </li>
        <li class="icon-box">
            <i class="fa fa-briefcase"></i>
            <a href="portfolio.html">
                <h2>Portfolio</h2>
            </a>
        </li>
        <li class="icon-box">
            <i class="fa fa-envelope-open"></i>
            <a href="contact.html">
                <h2>Contact</h2>
            </a>
        </li>
        <li class="icon-box">
            <i class="fa fa-comments"></i>
            <a href="blog.html">
                <h2>Blog</h2>
            </a>
        </li>
    </ul>
    <!-- Fixed Navigation Ends -->
    <!-- Mobile Menu Starts -->
    <nav role="navigation" class="d-block d-lg-none">
        <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul class="list-unstyled" id="menu">
                <li class="active"><a href="index.html"><i class="fa fa-home"></i><span>Home</span></a></li>
                <li><a href="about.html"><i class="fa fa-user"></i><span>About</span></a></li>
                <li><a href="portfolio.html"><i class="fa fa-folder-open"></i><span>Portfolio</span></a></li>
                <li><a href="contact.html"><i class="fa fa-envelope-open"></i><span>Contact</span></a></li>
                <li><a href="blog.html"><i class="fa fa-comments"></i><span>Blog</span></a></li>
            </ul>
        </div>
    </nav>
    <!-- Mobile Menu Ends -->
</header>
</template>

<script>
export default {
 name: 'Navbar',
}
</script>

<style>

</style>