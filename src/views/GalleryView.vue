<template>
  <HeaderNavbar />
  <h1>Galerija</h1>
  <section class="galerija-section">
    <div class="row row-galerija" v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Gallery Image" class="gallery-image" />
    </div>
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

  name: "OurTeam",

  components: {
    HeaderNavbar,
    FooterPage,
  },
};
</script>

<style>
.galerija-section {
  display: flex !important;
  max-width: 1440px;
  flex-wrap: wrap;
  margin: 2em auto;
  gap: 5px;
  background-color: #5755ce;
  padding: 5px;
  animation: appearFade 1s ease-in-out;
}

.row-galerija .gallery-image {
  width: 100%;
}
</style>
