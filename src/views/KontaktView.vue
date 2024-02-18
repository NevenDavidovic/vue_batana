<template>
  <HeaderNavbar />
  <section class="center-grid-section kontakt-section">
    <div class="flex-item-center">
      <div class="img-item batana-item">
        <img :src="require('@/assets/batana-door.jpg')" alt="Logo" />
      </div>
      <div class="text-item-center batana-item">
        <h1>Posjetite nas</h1>
        <p>
          {{ $store.state.imeKluba }}
        </p>
        <h2>ADRESA</h2>
        <p>Pekarska 6, 52210 Rovinj</p>
        <h2>INFORMACIJE</h2>
        <p>
          Za informacije ili pitanja <br />
          E-MAIL: {{ $store.state.mailKluba }}
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

  <section class="bcg-full">
    <section class="map-section">
      <h1>Pronađi nas!</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d704.2905878090997!2d13.6364036!3d45.0825008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cc08300f3313b%3A0x1870b6f9a92f9e68!2sPekarska%20ul.%206%2C%2052210%2C%20Rovinj!5e0!3m2!1sen!2shr!4v1705495762523!5m2!1sen!2shr"
        width="100%"
        height="450"
        style="border: 4px solid rgb(103, 58, 183)"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  </section>

  <FooterPage />
</template>

<script>
// @ is an alias to /src
import HeaderNavbar from "@/components/HeaderNavbar.vue";
import FooterPage from "@/components/FooterPage.vue";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
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
.form-section {
  background: #5755ce;
  padding: 40px;
  max-width: 1440px;
  margin: auto;
}

.map-section {
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 3em;
  background: #5755ce;
  padding: 40px;
}
.map-section iframe {
  width: 100%;
  border-radius: 14px;
}
.map-section h1 {
  color: white;
  font-size: 60px;
  margin-bottom: 0;
  margin-top: 0;
}
.bcg-full {
  background: #5755ce;
}

@media (max-width: 800px) {
  .center-grid-section {
    margin: 2em 0;
  }
}

@media (max-width: 480px) {
  .map-section {
    padding: 10px 5px;
  }
  h2 {
    margin: auto;
    width: 90%;
    text-align: left;
  }
}
</style>
