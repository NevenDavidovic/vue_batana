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

  <section
    class="fair-play-section"
    data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"
    data-aos-duration="2500"
  >
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

  <section
    class="center-grid-section"
    data-aos="fade-up"
    data-aos-anchor-placement="top-center"
    data-aos-duration="1000"
  >
    <div class="flex-item-center">
      <div class="img-item">
        <img :src="require('@/assets/pehari-batana.jpg')" alt="Logo" />
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
        <img :src="require('@/assets/prostor-batana.jpg')" alt="Logo" />
      </div>
    </div>
  </section>

  <section
    class="life-and-chess"
    data-aos="fade-up"
    data-aos-anchor-placement="top-center"
    data-aos-duration="1000"
  >
    <h1>Život i šah</h1>
    <p>
      Zaprati <span class="color-title">Šahovski klub Batanu</span> <br />
      na Facebook-u i YouTube-u
    </p>
  </section>

  <FooterPage />
</template>

<script>
// @ is an alias to /src
import HeaderNavbar from "@/components/HeaderNavbar.vue";
import FooterPage from "@/components/FooterPage.vue";
import imagePaths from "@/imageLoader";

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
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1); /* Initial box shadow */
  transition: all 1s ease-in-out;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.text-item-background:hover {
  box-shadow: 0 0 20px 0 #d9e2ec;
  transition: all 0.5s ease-in-out;
}
.text-item-background:hover .text-item-background h1 {
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
  border-radius: 4px;
  border: 1px solid white;
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
.upper-block img {
  transition: all 1s ease-in-out;
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
  font-weight: 400;
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
  color: white;
  font-size: 40px;
}
.text-item-center p {
  color: white;
  font-size: 24px;
  font-weight: 400;
}
.text-item-center a {
  color: white;
  width: 150px 0px;
  margin: auto;
  background-color: #5755ce;
  text-decoration: none;
  padding: 10px 10px;
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid white;
  transition: all 0.5s ease-in-out;
}
.text-item-center a:hover {
  box-shadow: 0 0 20px 0 #d9e2ec;
  transition: all 0.5s ease-in-out;
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
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding-bottom: 3em;
}

.life-and-chess h1 {
  padding-top: 2em;

  color: white;
}
.gallery-image {
  max-height: 300px;
  border-radius: 8px;
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
  font-weight: 700;
  line-height: 1.4;
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
  .text-item-background h1 {
    font-size: 22px;
  }
  .text-item-background {
    padding: 20px 40px;
  }
  .background-photo-section {
    height: 430px;
  }
  .fair-play-section {
    flex-direction: column;
    gap: 2em;
  }

  .flex-item-center {
    flex-direction: column;
    height: 100%;
  }

  .skola-saha-text {
    order: 2;
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
  .text-item-center a {
  }
  .text-item-center p,
  .text-item-center h1 {
    max-width: 90%;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
  }

  .lower-block p {
    max-width: 90%;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
  }

  .life-and-chess p {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .carousel {
    width: 100%;
  }
}

/*Paralax effect */
</style>
