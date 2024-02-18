<template>
  <section class="footer">
    <div class="container-footer">
      <div class="galerija footer-item">
        <h1 class="galerija-g">Otkrij više</h1>

        <router-link to="/about">O nama</router-link>
        <router-link to="/prijave">Škola šaha</router-link>
        <router-link to="/kontakt">Kontakt</router-link>
      </div>

      <div class="you-tube footer-item">
        <h1>YouTube</h1>
        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/EINSGZVBw3U?si=T_uHSMHp5IsYgRJm"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div class="kontakt footer-item">
        <h1>Kontakt</h1>
        <div class="text-kontakt">
          <p>Pekarska 6</p>
          <p>52210, Rovinj52</p>
          <p>{{ $store.state.mailKluba }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";

import imagePaths from "@/imageLoader";
export default {
  name: "FooterPage",
  data() {
    return {
      images: imagePaths,
      currentIndex: 0,
    };
  },
  components: {},

  methods: {},
};
</script>

<style>
.footer {
  background-color: #1d1d36;
  color: white;
  gap: 2em;
  padding: 50px 0;
}
.footer-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}

.image-container {
  max-width: 350px;
  max-height: 250px;
}

.image-container img {
  width: 100%;
  height: 100%;
}

.text-kontakt {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 200px;
  margin: 0 auto;
  gap: 1em;
}

.kontakt h1 {
  max-width: 200px;
  width: 100%;
  display: flex;
  color: #5755ce;
}
.galerija a {
  color: white;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 200px;
  font-size: 14px;
  width: 100%;
}
.you-tube h1 {
  color: #5755ce;
  max-width: 200px;
  width: 100%;
  text-align: left;
}
‚ .galerija h1 {
  color: #5755ce;
}
.galerija-g {
  color: #5755ce;
  text-align: left;
  width: 100%;
  max-width: 200px;
}
.container-footer {
  display: flex;
  align-content: space-between;
  max-width: 1640px;
  margin: auto;
}

@media (max-width: 800px) {
  .container-footer {
    flex-direction: column;
    gap: 2em;
  }
  .above-header {
    grid-template-columns: 1fr;
    gap: 2em;
  }
  .right-item {
    justify-content: center;
  }
}
</style>
