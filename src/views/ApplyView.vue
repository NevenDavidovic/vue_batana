<template>
  <HeaderNavbar />

  <h1 class="prijave-h">Prijave</h1>
  <p class="prijave-d">
    {{ $store.state.imeKluba }} Rovinj održava školu šaha petkom od 18 do 21h u
    prostorijama Kluba (Vodnjanska 22, ugao sa Pekarskom). Škola je do kraja
    2023. godine besplatna. Dobrodošla su sva zainteresirana djeca a i odrasli.

    <br />
    Za sve one koji su zainteresirani biti polaznici naše škole šaha prijave se
    mogu izvršiti na e-mail
    <b
      >{{ $store.state.mailKluba }} ili to <br />
      možete napraviti osobnim dolaskom</b
    >.
  </p>
  <div
    class="prijave-element"
    data-aos="fade-up"
    data-aos-anchor-placement="top-center"
    data-aos-duration="1000"
  >
    <div class="prijave-item">
      <h1>
        Radimo ovo zato <br />
        što volimo šah!
      </h1>

      <p class="prijave-d">
        Treninzi za najmlađe i starije polaznike su još uvijek besplatni i ovise
        o dobroj volji svakog od nas. Naše vrijeme, trud i strpljenje ulažemo u
        ovo jer volimo šah. Donacije su uvijek dobro došle za podizanje
        ozbiljnijeg standarda treniranja, izleta i učenja. Kotizacija unutar
        saveza se naplaćuje i ona služi da bi se mogli igrati službeni turniri.
        Za klubske turnire kotizacija uglavnom nije potrebna.
      </p>
    </div>
    <div class="prijave-item">
      <h1>Cijenjeni roditelji & polaznici</h1>
      <p>
        Za najmanje polaznike i one mlađe od 18 roditelji mogu obaviti prijave
        na slijedeći način: <br />
      </p>
      <ul>
        <li>kontaktirati nas putem elektroničke pošte navedene ispod</li>
        <li>ispuniti obrazac koji će povratno dobiti putem mail-a</li>
        <li>
          donijeti ga potpisanog ili ga potpisati i vratiti elektroničkom poštom
        </li>
      </ul>

      <h2>Za više informacija</h2>
      <h3>E-MAIL</h3>
      <p><b>info.skbatana@gmail.com</b></p>
    </div>
  </div>

  <h1
    data-aos="fade-up"
    data-aos-anchor-placement="top-center"
    data-aos-duration="1000"
  >
    Posjetite nas u Klubu u Pekarskoj
  </h1>
  <br />
  <div
    class="image-batana"
    data-aos="fade-up"
    data-aos-anchor-placement="top-center"
    data-aos-duration="1000"
  >
    <img :src="require('@/assets/sk-batana-space.jpg')" alt="Logo" />
  </div>

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

  name: "OurTeam",

  components: {
    HeaderNavbar,
    FooterPage,
  },
};
</script>
<style scoped>
.prijave-element {
  display: flex;
  margin: 3em auto;
  max-width: 1440px;
  animation: appearFade 1s ease-in-out;
}

.prijave-item {
  flex: 1;
  max-width: 70%;
  padding: 2em;
  justify-items: center;
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 1em;
}
.prijave-item p {
  max-width: 70%;
  margin: 0 auto;
}

.prijave-item:nth-child(2) {
  background-color: #1d1d36;
}
.prijave-item:nth-child(2) h1 {
  color: #5755ce;
}
.prijave-item:nth-child(2) p {
  color: white;
  line-height: 2;
}
.image-batana {
  max-width: 1440px;
  margin: 0 auto;
}
.image-batana img {
  width: 100%;
}

.prijave-h {
  margin: 50px 0;

  font-size: 60px;
  animation: appearFade 1s ease-in-out;
  color: #5755ce;
}
.prijave-d {
  color: gray;
  line-height: 2;
  animation: appearFade 1s ease-in-out;
  max-width: 1100px;
  width: 90%;
  margin: auto;
  text-align: left;
}
.prijave-item ul li {
  color: white;
  text-align: left;
}

.prijave-item h2,
.prijave-item h3 {
  color: #5755ce;
}

@media (max-width: 800px) {
  .prijave-element {
    flex-direction: column;
  }
  .prijave-item {
    max-width: 100%;
    width: 100%;
    gap: 1em;
  }
  .prijave-item p[data-v-c76e7e2e] {
    max-width: 100%;
  }
}

@media (max-width: 800px) {
  .prijave-d {
    max-width: 90%;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
