<template>
  <HeaderNavbar />
  <section class="center-grid-section kontakt-section">
    <div class="flex-item-center">
      <div class="img-item batana-item">
        <img :src="require('@/assets/batana-door.jpg')" alt="Logo" />
      </div>
      <div class="text-item-center batana-item">
        <h1>Posjetite nas</h1>
        <p>Šahovski klub Batana</p>
        <h2>ADRESA</h2>
        <p>Pekarska 6, 52210 Rovinj</p>
        <h2>INFORMACIJE</h2>
        <p>
          Za informacije ili pitanja <br />
          E-MAIL sk.batana.rovinj@gmail.com
        </p>
        <h2>RADNO VRIJEME</h2>
        <p>
          Za igranje i učenje šaha u klubu za sada smo dostupni u terminima
          ispod:
        </p>
        <p>Utorak: 18:00 - 20:00</p>
        <p>Četvrtak: 18:00-20:00</p>
        <p>Petak: 18:00-20:00</p>
        <p>
          Preko ljeta smo zatvoreni no nastavljamo sa povremenim druženjima
          uživo, i u istim terminima online za sve one koje šah okupira cijelu
          godinu.
        </p>
      </div>
    </div>
    <div class="flex-item-center"></div>
  </section>
  <FooterPage />
</template>

<script>
// @ is an alias to /src
import HeaderNavbar from "@/components/HeaderNavbar.vue";
import FooterPage from "@/components/FooterPage.vue";

export default {
  data() {
    return {};
  },

  name: "KontaktView",

  components: {
    HeaderNavbar,
    FooterPage,
  },
};
</script>

<style>
.batana-item {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 1200px;
}
.kontakt-section {
  margin: 3em 0 19em 0;
}
h2 {
  color: #5755ce;
}

.center-grid-section {
  animation: appearFade 1s ease-in-out;
}

@media (max-width: 800px) {
  .center-grid-section {
    margin: 2em 0;
  }
}
</style>
