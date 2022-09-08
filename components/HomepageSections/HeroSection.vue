<template>
<div class="body">
 <div class="hero">
  <div class="hero-article">
    <div class="hero-text">
      <h1 class="lg-text">Relax and Enjoy the<br> <span class="colored-text"> Best FM </span> on the<br> planet earth...</h1>
      <h1 class="mobile-text">Relax and Enjoy the <span class="colored-text"> Best FM </span> on the planet earth...</h1>
    </div>
    <div class="hero-para">
      <p>Listen to exciting talks about sport, recent<br> news, dramas, relationships and many more on<br> sparkling FM</p>
    </div>
    <div class="hero-links">
      <nuxt-link style="background-color:rgba(229, 137, 70, 1);" tag="li"  to="/about" class="nuxt-link-exact-active">Learn More</nuxt-link>
      <nuxt-link class="second-link" to="/blog/">Read our Articles</nuxt-link>
    </div>
  </div>
  <div class="hero-img">
    <img src="https://i.ibb.co/TmGH9xG/Group-1.png" alt="Group-1" border="0" />
  </div>
  </div>
</div>
</template>

<script setup>
const props = defineProps(["fields"]);
</script>

<style scoped>
.hero{
  display: flex;
  justify-content: space-around;
  height: auto;
  padding-top: 10rem;
  padding-left: 5rem;
  padding-right: 5rem;
}
.hero-text{
  margin-bottom: 2rem;
}
.hero-text h1{
  font-size: 40px;
}
.mobile-text{
  display: none;
}
/* .hero-img{
  width: 50%;
} */
.hero-img img{
  height: 500px;
}
.hero-article{
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
}
.hero-links{
  display: flex;
}
.hero-links a{
  padding-top: 0.7rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.7rem;
  background-color: black;
  color: white;
  border-radius: 2px;
}
.hero-para{
  margin-bottom: 3rem;
}
.second-link{
  margin-left: 15px;
}
.colored-text{
  color: rgba(229, 137, 70, 1);
}
@media only screen and (max-width: 900px) {
  .hero{
    flex-direction: column;
    margin-top: -5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-evenly;
  }
  .hero-img{
    margin-top: 3rem;
  }
  .hero-img img{
    width: 100%;
  }
  .lg-text{
    display: none;
  }
  .hero-text h1{
    font-size: 29px;
  }
  .mobile-text{
    display: block;
  }
  .hero-links{
    display: flex;
  }
  .hero-links a{
    padding-top: 0.2rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    padding-bottom: 0.2rem;
  }
}
</style>

