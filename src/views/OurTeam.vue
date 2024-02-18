<template>
  <HeaderNavbar />
  <br />
  <h1 class="nas-tim-h">Naš tim trenera</h1>
  <p class="tren-desc">
    Odaberite jednog od naših trenera koji su tu da pruže svoje šahovsko
    iskustvo i znanje da bi se vaša igra digla na višu razinu
  </p>

  <section class="our-team">
    <div class="our-team-item">
      <div class="img-team">
        <img :src="require('@/assets/marko-radic.png')" alt="Logo" />
      </div>
      <h1>Marko Dragić</h1>
      <h4>Trener</h4>
      <p>
        Svi znate našeg Marka Dragića, djeca ga vole, on voli šah i tako u krug.
        Predan i sposoban, opušten i zabavan. Nositelj našeg mladog tima,
        spreman prenijeti znanje i najmlađim uzrastima uz zabavan ton i metode
      </p>
    </div>
    <div class="our-team-item">
      <div class="img-team">
        <img :src="require('@/assets/roberto-jurman.png')" alt="Logo" />
      </div>
      <h1>Roberto Jurman</h1>
      <h4>Trener</h4>
      <p>
        Naš predsjednik i ujedno naš najbolji igrač, majstorski kandidat Roberto
        Jurman. Za naprednije igrače kojima je potrebno šahovsko usmjeravanje
        naš Roberto ima pozamašno iskustvo i mnoštvo šahovskih uspjeha
      </p>
    </div>
    <div class="our-team-item">
      <div class="img-team">
        <img :src="require('@/assets/robert-sosic.png')" alt="Logo" />
      </div>
      <h1>Robert Sošić</h1>
      <h4>Trener</h4>
      <p>
        Njegovo znanje i mudrost može pomoći nadoknaditi jaz između najstarijih
        i najmlađih članova. Naš Robert je na raspolaganju za organizaciju našeg
        kluba, a kad to ne radi organizira napade na protivničke figure. Uz
        njega zasigurno možete naučiti kako to izvesti.
      </p>
    </div>
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

  name: "OurTeam",

  components: {
    HeaderNavbar,
    FooterPage,
  },
};
</script>

<style scoped>
.our-team {
  display: flex;
  max-width: 1200px;
  margin: 3em auto;
}
.our-team-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: left;
  gap: 10px;
  animation: appearFade 1s ease-in-out;
}
.our-team-item h1 {
  max-width: 200px;
  margin: 0 auto;
}
.our-team-item h4 {
  max-width: 200px;
  margin: 0 auto;
  color: #1d1d36;
  font-weight: 600;
}
.our-team-item p {
  max-width: 200px;
  text-align: center;
  margin: 0 auto;
  color: gray;
}
.img-team {
  height: 267px;
}
.img-team img {
  height: 100%;
}
.tren-desc {
  font-weight: 600;
  font-size: 18px;
  color: #1d1d36;
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

.nas-tim-h {
  font-size: 60px;
  color: #5755ce;
  margin-top: 50px;
}
@media (max-width: 1024px) {
  .our-team {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 600px) {
    .our-team-item {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    .our-team-item p {
      max-width: 100%;
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
    .tren-desc {
      max-width: 90%;
      margin: auto;
    }
    .our-team {
      gap: 2em;
    }

    .nas-tim-h {
      margin-bottom: 0.5em;
    }
  }
}
</style>
