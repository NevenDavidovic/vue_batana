<template>
  <HeaderNavbar />

  <section class="about">
    <h1>Batana</h1>

    <p>
      Batana je tradicionalna rovinjska drvena brodica ravnoga dna, veličine
      između 4 i 8,5 metara. Umijeće izgradnje rovinjske batane zaštićeno je
      nematerijalno kulturno dobro hrvatske kulturne baštine.
    </p>

    <img :src="require('@/assets/Batana-boat.jpg')" alt="Logo" />

    <p>
      Ravnog je dna koje je blago zakrivljeno prema pramčanoj statvi i krmenom
      zrcalu, s malo izbočenim zaključkom na pramcu i omjerom dužina-širina 1:3.
      Pojavljuje se na Jadranu u davno doba i širi Europom i svijetom kao
      pogodna za plovidbu plitkim vodama. Pripada mnogobrojnoj obitelji čamaca
      ravnog dna kao što su venecijanska gondola, neretvanska trupa ili komiška
      sandula. Batane izgrađene u drugoj polovici 20. stoljeća rijetko su duže
      od 5 metara. Potpuno je izgrađena od drva; kostur najčešće od hrastovine,
      a oplata od jelovine ili smrekovine. Za zakivanje se rabe pocinčani čavli
      ili ručno izrađeni od kovana željeza. Batanu može pokretati jedro (oglavno
      četverokutno, veličine ovisno o dužini batane), vesla (za ribarenje dva
      vrlo duga) ili izvanbrodski motor. Urez na krmenom zrcalu batane bio je
      namijenjen jednom veslu za veslanje na način gondole. Postoje otvorene, te
      opalubljene batane koje se koriste za rad mrežama i parangalima. Podnosi
      svako more jer ne siječe valove i more već po njima skače i propinje se
      preko vala. U Rovinju postoji eko-muzej "Kuća o batani" posvećen batani,
      ribarskoj brodici i lokalnoj zajednici koja je batanu prepoznala kao svoj
      simbol, jer je upravo batana najrasprostranjenije tradicionalno plovilo u
      Rovinju. Otud i naziv rovinjska batana. U makarskom primorju je za batanu
      uvriježen naziv gondula, no ona ima nešto oštriji pramac od rovinjske
      batane. Inače, ime batana povezuje se s talijanskom riječi battere
      (udarati) što asocira na zvuk udaranja njena ravnog dna o valove. Neki
      izvori kažu da ime potječe od drevnog pomorskog naziva batto za malenu
      barku iz 14. stoljeća prethodnicu današnjeg čamca, u anglosaksonskome bat
      i kasnije eng. boat (čamac). Savudrija ima svoju podvrstu batane. Tako je
      i Šahovski klub Batana cijeneći naziv i kulturnu baštinu ove brodice, dao
      naziv klubu po njoj.
    </p>
  </section>

  <section
    class="center-grid-section"
    data-aos="fade-up"
    data-aos-anchor-placement="top-center"
    data-aos-duration="1000"
  >
    <div class="flex-item-center">
      <div class="img-item">
        <img :src="require('@/assets/šah-u-prirodi.jpg')" alt="Logo" />
      </div>
      <div class="text-item-center">
        <h1>Misija kluba</h1>
        <p>
          Misija kluba Naša misija je promicanje i razvoj šahovskog športa,
          organiziranje šahovskih natjecanja i sudjelovanje na natjecanjima,
          promicanje šahovske igre kod djece i mladeži i organiziranje škole
          šaha i šahovskih turnira, suradnja sa drugim šahovskim klubovima i
          organizacijama te drugim športskim udrugama u zemlji i inozemstvu.
        </p>
      </div>
    </div>
    <div class="flex-item-center">
      <div class="text-item-center">
        <h1>Vrijednosti koje cijenimo</h1>
        <p>
          - Fair play <br />
          - Poštuj druge<br />
          - Budi odgovoran<br />
          - Radi na svom šahu<br />
          - Zabavi se
        </p>
      </div>
      <div class="img-item">
        <img :src="require('@/assets/zoki-i-marin.jpg')" alt="Logo" />
      </div>
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

  name: "AboutView",

  components: {
    HeaderNavbar,
    FooterPage,
  },
};
</script>

<style>
.about h1 {
  font-size: 60px;
  color: #5755ce !important;
  margin: 0 auto;
}
.about p {
  max-width: 900px;
  margin: auto;
  line-height: 2;
}
.about {
  display: flex;
  flex-direction: column;
  gap: 3em;
  margin: 3em 0;
  animation: appearFade 1s ease-in-out;
}

.about img {
  width: 907px;
  margin: auto;
  border-radius: 8px;
}

.galerija h1 {
  width: 200px;
  text-align: left;
  color: #5755ce;
}
.galerija a {
  width: 200px;
}

@media (max-width: 1024px) {
  .about img {
    width: 100%;
  }
  .about p {
    padding: 0 16px;
  }
}
</style>
