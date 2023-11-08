<template>
  <div class="loginView">
    <div class="login-container">
      <h2>Login</h2>

      <div clss="logo-image-div">
        <img
          :src="require('@/assets/logo.png')"
          alt="Logo"
          class="login-logo"
        />
      </div>

      <form>
        <div class="input-group">
          <label for="username" class="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div class="input-group">
          <label for="password" class="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>

        <h2>OR</h2>
        <router-link to="/" class="return-home-cta"> Return Home</router-link>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {};
  },

  name: "LoginView",

  components: {},
};
</script>

<style>
nav {
  display: none;
}
.loginView {
  padding: 50px;
}
.login-container {
  background-image: linear-gradient(to top, #5755ce, #1d1d36);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 500px;
  margin: auto;
  border: 4px solid #1d1d36;
  animation: appearFade 2s cubic-bezier(0.4, 0, 0.2, 1);
}

.login-container h2 {
  margin-bottom: 20px;
  color: white;
}

.input-group {
  margin-bottom: 10px;
  text-align: center;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 80%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: auto;
}

button {
  background-color: #5755ce;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  border: 2px solid #1d1d36;
}

button:hover {
  background-color: #1d1d36;
  color: white;
}

.login-logo {
  width: 200px;
  border-radius: 50px;
  margin-bottom: 1em;
  border: 4px solid #1d1d36;
}

.username,
.password {
  color: #1d1d36;
}
.return-home-cta {
  color: #1d1d36;
  text-decoration: none;
  background: white;
  padding: 5px 10px;
}

.return-home-cta:hover {
  color: white;
  background: #1d1d36;
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
</style>
