<template>
  <HeaderNavbar />
  <div id="fb-root"></div>

  <section
    class="background-photo-section"
    :style="{ backgroundImage: `url(${require('@/assets/background.jpg')})` }"
  >
    <div class="text-item-background">
      <h1>ŠK Batana</h1>
      <p>Za sve uzraste</p>
      <router-link to="/about">O nama</router-link>
    </div>
  </section>

  <section class="fair-play-section">
    <div class="upper-block">
      <img :src="require('@/assets/logo.png')" alt="Logo" />
    </div>

    <div class="lower-block">
      <h1>Fair Play</h1>
      <p>
        Pokušavamo osigurati sigurno okruženje u kojem će se moći družiti,
        igrati i napredovati. Predstavljamo mali klub velikih ambicija.
        Zadržavamo pravo objavljivanja sadržaja snimljenog u našem prostoru u
        svrhu promocije i širenja umijeća igranja šaha.
      </p>
    </div>
  </section>

  <section class="center-grid-section">
    <div class="flex-item-center">
      <div class="img-item">
        <img :src="require('@/assets/zvan-chess.png')" alt="Logo" />
      </div>
      <div class="text-item-center">
        <h1>Online učenje</h1>
        <p>
          Odaberite učiti šah s nama. Od najmlađih do najvećih uzrasta. Primamo
          sve. Udaljenost nije problem jer je dio predavanja i većina materijala
          online. Isto tako možete rezervirati jednog od naših trenera za učenje
          online.
        </p>
        <router-link to="/ourteam">Više informacija</router-link>
      </div>
    </div>
    <div class="flex-item-center">
      <div class="text-item-center skola-saha-text">
        <h1>Škola šaha</h1>
        <p>
          Namijenjena početnicima i onima koji to nisu. Učite šah uz naše
          članove tima.
        </p>
        <router-link to="/prijave">Prijave</router-link>
      </div>
      <div class="img-item skola-saha-img">
        <img :src="require('@/assets/andrej-chess.png')" alt="Logo" />
      </div>
    </div>
  </section>

  <!-- <h1 class="obavijesti-title">Obavijesti</h1>

  <section class="obavijesti">
    <div class="obavijesti-item first">
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSahovskiKlubBatana%2Fposts%2Fpfbid0UR8ZxrNBm7XkiVHQo73DHf8a8CoDqnBXrxHwVw7m9WdEEZys8AY5eajD7Vodb4gPl&show_text=true&width=500"
        width="500"
        height="550"
        style="border: none; overflow: hidden"
        scrolling="yes"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>

    <div class="obavijesti-item">
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSahovskiKlubBatana%2Fposts%2Fpfbid0HQ9GcH3wiMgY5pNjg87nkf2vzTz165UqW1bJk2t7T5FowLnAiCM4d43XthyPgPzEl&show_text=true&width=500"
        width="500"
        height="500"
        style="border: none; overflow: hidden"
        scrolling="yes"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  </section> -->

  <section class="life-and-chess">
    <h1>Život i šah</h1>
    <p>
      Follow <span class="color-title">Šahovski klub Batana</span> <br />
      on Facebook and YouTube
    </p>
    <carousel :items-to-show="0.5" class="gallery">
      <slide v-for="slide in 2" :key="slide">
        <div class="row" v-for="(image, index) in images" :key="index">
          <img :src="image" alt="Gallery Image" class="gallery-image" />
        </div>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </section>

  <FooterPage />
</template>

<script>
// @ is an alias to /src
import HeaderNavbar from "@/components/HeaderNavbar.vue";
import FooterPage from "@/components/FooterPage.vue";
import imagePaths from "@/imageLoader";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  data() {
    return {
      images: imagePaths,
    };
  },

  name: "HomeView",

  components: {
    HeaderNavbar,
    FooterPage,
    Carousel,
    Slide,
    Navigation,
  },
};
</script>

<style>
.background-photo-section {
  height: 900px;
  animation: appearFade 1s ease-in-out;
  background-position: center;
  background-repeat: no-repeat;
  /* width: 100%; */
  background-size: cover;

  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.text-item-background {
  background-color: #5755ce;
  color: white;
  width: fit-content;
  height: fit-content;
  padding: 40px 80px;
  animation: appearFade 1s ease-in-out;
}
.text-item-background h1 {
  font-size: 40px;
}

.text-item-background p {
  font-size: 28px;
}

.text-item-background a {
  font-size: 18px;
  background-color: #1d1d36;
  color: white;
  padding: 10px 40px;
  text-decoration: none;
}

.fair-play-section {
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 4em auto;
  animation: appearFade 1s ease-in-out;
}

.upper-block {
  flex: 1;
}

.lower-block {
  flex: 1;
}
.lower-block h1 {
  font-size: 40px;
  color: #1d1d36;
}
.lower-block p {
  max-width: 80%;
  margin: auto;
  font-size: 22px;
  color: gray;
  font-weight: 300;
}

.flex-item-center {
  display: flex;
  max-width: 1440px;
  margin: auto;
  height: 500px;
}

.img-item img {
  width: 100%;
  height: 100%;
}

.img-item,
.text-item-center {
  flex: 1;
}

.text-item-center {
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  background-color: #1d1d36;
}
.text-item-center h1 {
  color: #5755ce;
  font-size: 40px;
}
.text-item-center p {
  color: white;
  font-size: 24px;
  font-weight: 300;
}
.text-item-center a {
  color: white;
  width: 150px 0px;
  margin: auto;
  background-color: #5755ce;
  text-decoration: none;
  padding: 5px 10px;
  font-size: 18px;
}
.text-item-center p,
.text-item-center h1,
.text-item-center a {
  max-width: 70%;
  margin: 20px auto;
  max-width: 70%;
  margin: 20px auto;
  width: 100%;
  text-align: center;
}

.text-item-center a {
  max-width: 200px;
  text-align: center;
}

.image-gallery {
  display: flex;
  gap: 5px;
  max-width: 1400px;
  margin: auto;
  grid-template-rows: 1fr 1fr;
  overflow-y: scroll;
}

.life-and-chess {
  background-color: #5755ce;
}

.life-and-chess h1 {
  padding-top: 2em;

  color: white;
}
.gallery-image {
  max-height: 300px;
}

.gallery {
  max-width: 1400px;
  margin: auto;
}
.carousel__pagination {
  padding-bottom: 3em;
}

.carousel__icon {
  color: white;
  background: #1d1d36;

  border: 1px solid white;
}
.carousel__slide {
  width: 100% !important;
  gap: 2px;
}

.life-and-chess h1 {
  font-size: 40px;
  color: white;
}
.life-and-chess p {
  color: white;
  font-size: 32px;
}

.color-title {
  color: #1d1d36;
}
.center-grid-section {
  margin: 3em auto;
}

.obavijesti {
  display: flex;
  justify-content: space-around;
  margin: auto;

  max-width: 1440px;
  gap: 10px;
}

.obavijesti-title {
  color: #1d1d36;
  max-width: 1440px;
  margin: 1em auto 0 auto;
  padding: 40px 0;
}
.image-enter {
  width: 100%;
}
@keyframes appearFade {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/*Media Querries*/
@media (max-width: 1024px) {
  .gallery,
  .obavijesti {
    padding: 0 16px;
  }
  .obavijesti-item iframe {
    width: 100%;
  }
}

@media (max-width: 800px) {
  .fair-play-section {
    flex-direction: column;
  }

  .flex-item-center {
    flex-direction: column;
    height: 100%;
  }

  .skola-saha-text {
    order: 2;
  }
  .img-item {
    background-color: #1d1d36;
  }

  .obavijesti {
    flex-direction: column;
  }
  .obavijesti-item {
    width: 80%;
    margin: auto;
  }
  .carousel {
    width: 80%;
    margin: auto;
  }
}

@media (max-width: 600px) {
  .upper-block img {
    width: 100%;
  }
}
</style>
