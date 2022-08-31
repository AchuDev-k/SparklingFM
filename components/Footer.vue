<template>
  <footer class="footer pt-120 absolute bottom-0">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-10">
          <div class="footer-widget">
            <div class="logo">
              <a href="#">
                <img src="assets/images/logo.png" 
                width="200px"
                alt="">
              </a>
            </div>
            <p class="desc">
              Your radio,your shine!
            </p>
            <ul class="social-links">
              <li>
                <a href="https://m.facebook.com/sparkling92.3fm"><i class="lni lni-facebook"></i></a>
              </li>
              <li>
                <a href="#0"><i class="lni lni-instagram"></i></a>
              </li>
              <li>
                <a href="#0"><i class="lni lni-twitter"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-5 col-lg-4 col-md-12 col-sm-12 offset-xl-1">
          <div class="footer-widget">
            <ul class="links">
              <li><a href=""></a></li>
            </ul>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="footer-widget">
            <h3>Subscribe Newsletter</h3>
            <form action="#">
              <input type="email" placeholder="Email" />
              <button class="main-btn btn-hover">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p class="text-center">© Copyright 2022 - SPARKLING FM CALABAR</p> <p class="slash">| </p><p>Powered by <a href="#0" style="color:orange;">1DEV</a></p>
    </div>
  </footer>
</template>

<script setup>
defineProps(["menuItems", "activeLink"]);
</script>

<style scoped>
.copyright{
  display: flex;
  justify-content: center;
  align-items: center;
}
.slash{
  margin-left: 4px;
  margin-right: 4px;
}
@media only screen and (max-width: 600px) {
  .copyright{
    flex-direction: column;
    justify-content: center;
  }
  .slash{
    display: none;
  }
}
</style>
