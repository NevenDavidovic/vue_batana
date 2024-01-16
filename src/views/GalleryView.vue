<template>
  <HeaderNavbar />
  <h1>Galerija</h1>
  <section class="galerija-section">
    <div class="row row-galerija" v-for="(image, index) in images" :key="index">
      <img
        :src="image"
        alt="Gallery Image"
        class="gallery-image"
        @click="enlargePhoto(index)"
      />
    </div>
  </section>

  <div class="modal-pic-viewer" v-if="openModal">
    <div class="inside-modal">
      <span class="zatvori" @click="closeModal"> ZATVORI</span>
      <img :src="imageSelected" alt="Gallery Image" class="chosen-image" />
    </div>
  </div>

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
      imageSelected: "",
      openModal: false,
    };
  },

  name: "OurTeam",

  components: {
    HeaderNavbar,
    FooterPage,
  },
  methods: {
    enlargePhoto(index) {
      this.imageSelected = this.images[index];
      this.openModal = true;
    },
    closeModal() {
      this.openModal = false;
    },
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
  cursor: pointer;
}

.modal-pic-viewer {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.457); /* White with transparency */
  backdrop-filter: blur(5px);
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
}

.inside-modal {
  position: relative;
  background: white;
  width: fit-content;
  height: 100%;
  max-height: 500px;
  margin: auto;
  padding: 60px;
  border: 1px solid gray;
}
.zatvori {
  position: absolute;
  right: 5px;
  top: 5px;
  background: gray;
  padding: 8px 16px;
  border-radius: 4px;
  color: white;
}
.chosen-image {
  position: relative;
  background: white;

  height: 100%;

  margin: auto;
}

@media (max-width: 1180px) {
  .modal-pic-viewer {
  }
  .inside-modal {
    width: 90%;
    height: fit-content;
    padding: 60px 0;
  }
  .chosen-image {
    width: auto;
    height: 100%;
    max-height: 500px;
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .row-galerija .gallery-image {
    max-height: 100%;
  }
}
</style>
