<template>
  <HeaderNavbar />
  <h1 class="galery-title">Galerija</h1>

  <section class="cta-tab-btn">
    <div class="btn-tab" @click="openGalery">Fotografije</div>
    <div class="btn-tab" @click="openVideoGallery">Video zapisi</div>
  </section>
  <section class="galerija-section" :class="{ hidden: !openImages }">
    <div class="row row-galerija" v-for="(image, index) in images" :key="index">
      <img
        :src="image"
        alt="Gallery Image"
        class="gallery-image"
        @click="enlargePhoto(index)"
      />
    </div>
  </section>

  <section class="video-galerija-section" :class="{ hidden: openImages }">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/EINSGZVBw3U?si=xgnpyeWMC4NlaI9N"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>

    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/qOYvuN7SyQ0?si=JXyoptOvypW4caB7"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
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
      openImages: true,
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

    openGalery() {
      this.openImages = true;
    },
    openVideoGallery() {
      this.openImages = false;
    },
  },
};
</script>

<style>
.cta-tab-btn {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  gap: 30px;
  color: white;
  padding: 20px 0 0 20px;
  animation: appearFade 1s ease-in-out;
  padding: 20px 0 0 20px;
  border-bottom: 2px solid white;
  background: linear-gradient(
    180deg,
    rgba(29, 29, 54, 1) 0%,
    rgba(87, 85, 206, 1) 100%
  );
}

.btn-tab {
  background: #5755ce;
  padding: 20px 35px;
  cursor: pointer;
  border-radius: 8px 8px 0 0;
  border-left: 2px solid white;
  border-top: 2px solid white;
  border-right: 2px solid white;
  font-size: 22px;
}

.galery-title {
  color: white;
  font-size: 60px;
  font-weight: 600;
  padding: 50px 0;
  background: #1d1d36;
}
.galerija-section,
.video-galerija-section {
  display: flex;
  max-width: 1440px;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 5px;

  background: linear-gradient(
    356deg,
    rgba(29, 29, 54, 1) 0%,
    rgba(87, 85, 206, 1) 100%
  );
  animation: appearFade 1s ease-in-out;
  justify-content: center;

  padding: 50px 5px;
  cursor: pointer;
}

.row-galerija .gallery-image {
  width: 100%;
  cursor: pointer;
  border-radius: 8px;
  border: 3px solid rgba(255, 255, 255, 0);
  transition: all 0.5s ease-in-out;
}
.row-galerija .gallery-image:hover {
  border: 3px solid white;
  box-shadow: 0 0 20px 0 #d9e2ec;
  transition: all 0.5s ease-in-out;
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
.row-galerija {
  position: relative;
}
.inside-modal {
  position: relative;
  background: white;
  width: fit-content;
  height: 100%;
  max-height: 500px;
  margin: auto;
  padding: 60px;
  border: 1px solid #5755ce;
  border-radius: 4px;
  transition: all 0.7s ease-in-out;
  animation: opacityChange 0.7s ease-in-out alternate;
}
.zatvori {
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 5px;
  background: #5755ce;
  padding: 8px 16px;
  border-radius: 4px;
  color: white;
}
.chosen-image {
  position: relative;
  background: white;
  border-radius: 4px;
  height: 100%;

  margin: auto;
}

.row-galerija .gallery-image + .cta-see {
  display: none;
}

.row-galerija .gallery-image:hover + .cta-see {
  display: flex;
  animation: changeOpacity 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

@media (max-width: 1180px) {
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
  .btn-tab {
    font-size: 14px;
  }
}
</style>
