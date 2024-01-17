<template>
  <section class="above-header">
    <div class="above-header-item"></div>
    <div class="above-header-item middle-item">
      <img :src="require('@/assets/logo.png')" alt="Logo" />
      <div class="text-middle-item">
        <h1>BATANA</h1>
        <p>Šahovski Klub</p>
      </div>
    </div>
    <div class="above-header-item right-item">
      <!-- <div class="log-in">
        <img :src="require('@/assets/user-favicon.png')" alt="userIIcon" />
        <router-link to="/login" class="login-l">LogIn</router-link>
      </div> -->
      <div class="three-icons">
        <a href="https://www.facebook.com/SahovskiKlubBatana/"
          ><img :src="require('@/assets/facebook-icon.png')" alt="facebook"
        /></a>
        <a href="https://www.youtube.com/@sahovskiklubbatana5767"
          ><img :src="require('@/assets/youtube-icon.png')" alt="youtubeo"
        /></a>
      </div>
    </div>
  </section>

  <section class="navbar">
    <div class="navbar-items">
      <div id="close" @click="closeMenu()" :class="{ active: navMobOpen }">
        <img
          :src="require('@/assets/closex.png')"
          alt="hamburger"
          class="hamburger"
        />
      </div>
      <div class="navbar-item" :class="{ active: navMobOpen }">
        <router-link to="/" class="home-link">Home</router-link>
      </div>
      <div class="navbar-item" :class="{ active: navMobOpen }">
        <router-link to="/about">O nama</router-link>
      </div>
      <div class="navbar-item dropdown" :class="{ active: navMobOpen }">
        <a
          href="#"
          class="skola-saha"
          id="skola-saha"
          @click="opencloseSkolaSaha"
          >Škola Šaha
        </a>
        <div
          class="dropdown-content"
          id="dropdown-content"
          :class="{ animationDropdown: dropdownOpen, hidden: !dropdownOpen }"
        >
          <router-link to="/prijave">Prijave</router-link>
          <router-link to="/galerija">Galerija</router-link>
          <router-link to="/ourteam">Naš tim</router-link>
        </div>
      </div>
      <div class="navbar-item" :class="{ active: navMobOpen }">
        <router-link to="/ourteam">Naš tim</router-link>
      </div>
      <div class="navbar-item" :class="{ active: navMobOpen }">
        <router-link to="/kontakt">Kontakt</router-link>
      </div>

      <div id="open" @click="openMenu()" :class="{ hidden: navMobOpen }">
        <img
          :src="require('@/assets/hamburger.png')"
          alt="hamburger"
          class="hamburger"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeaderNavbar",
  data() {
    return {
      open: close,
      navMobOpen: false,
      dropdownOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.navMobOpen = true;
    },
    closeMenu() {
      this.navMobOpen = false;
    },
    opencloseSkolaSaha() {
      this.dropdownOpen = !this.dropdownOpen;
      console.log(this.dropdownOpen);
    },
  },
};
</script>
<style>
.above-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1440px;
  margin: auto;
  padding: 20px;
}

.above-header-item {
  display: flex;
  justify-content: center;
  gap: 1em;
  align-items: center;
}

.text-middle-item {
  display: flex;
  flex-direction: column;
}
.text-middle-item h1 {
  margin-bottom: 0;
}

.text-middle-item h1,
.text-middle-item p {
  color: #1d1d36;
}

.middle-item img {
  width: 100px;
  height: 100px;
}

.right-item {
  display: flex;
  gap: 2em;
  justify-content: flex-end;
}
.log-in {
  display: flex;
  gap: 1em;
  align-items: center;
  color: #1d1d36;
  cursor: pointer;
}
.log-in img {
  height: 20px;
}

.three-icons {
  display: flex;
  align-items: center;
  gap: 2em;
  cursor: pointer;
}
.three-icons img {
  height: 20px;
}

.navbar {
  background-color: #1d1d36;
  height: 74px;
  display: flex;
}

.navbar-items {
  display: flex;
  max-width: 984px;
  margin: auto;
  text-align: center;
  width: 100%;
}
.navbar-item {
  flex: 1;
  margin: 0 10px;
  position: relative;
}

.navbar-item a {
  flex: 1;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 400;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  padding: 10px 0;
  display: none;
  position: absolute;
  background-color: #1d1d36;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content,
.dropdown-content:hover,
.dropdown-content a:hover {
  display: block;
  transition: all 1s ease-in-out;
}

.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover,
.navbar-item a:hover {
  color: #5755ce;
  transition: all 0.5s ease-in-out;
}
.login-l {
  color: #1d1d36;
  text-decoration: none;
}

.hamburger {
  height: 30px;
}
#open,
#close {
  display: none;
  flex: none;
  width: 0px;
}

@media (max-width: 800px) {
  #open,
  #close {
    display: inline;
    width: 40px;
    flex: 1;
    max-width: 150px;
    width: 100%;
  }

  #close {
    display: none;
  }

  #open {
    text-align: center;
  }
  .navbar-item {
    display: none;
  }

  .navbar-items {
    flex-direction: column;
    gap: 1em;
  }
  .navbar-item {
    max-width: 150px;
    width: 100%;
    margin: auto;
    text-align: left;
  }
  .navbar {
    height: fit-content;
    padding: 2em 0;
  }

  .dropdown-content {
    display: none;
    position: inherit;
    box-shadow: none;
    padding: 0;
  }
  .dropdown-content a {
    padding: 6px 16px;
  }

  .above-header {
    grid-template-columns: 1f;
  }
}

@media (min-width: 800px) {
  .dropdown:hover .dropdown-content {
    animation: scaleNav 0.3s ease-in-out;
    border-bottom: 4px solid white;
    transition: all 1s ease-in-out;
  }
}

/*KEYRAME */

@keyframes scaleNav {
  0% {
    transform: scale(0);
    transform-origin: top;
  }

  100% {
    transform: scale(100%);
  }
}

.active {
  display: block !important;
  animation: scaleNav 0.3s ease-in-out;
}
.hidden {
  display: none !important;
  animation: scaleNavBack 0.3s ease-in-out;
}

/* .animationDropdown {
  animation: scaleNav 0.3s ease-in-out;
  border-bottom: 4px solid white;
} */
</style>
