<template>
  <div id="nav">
    <nav class="navbar navbar-dark nav-custom">
      <div class="navigation-wrapper">
        <router-link class="header-navigation-option" to="/">Home</router-link>
        <router-link class="header-navigation-option" to="/about"
          >About</router-link
        >
        <router-link class="header-navigation-option" to="/voices"
          >Voices</router-link
        >
      </div>
      <SignIn />
    </nav>
    <router-view />
  </div>
</template>

<script>
import SignIn from "@/components/layout/sign-in/SignIn";

export default {
  name: "NavBar",
  components: {
    SignIn,
  },
};
</script>

<style scoped>
#nav {
  min-height: calc(100vh - 245px);
  padding: 0;
}

.nav-custom {
  margin: 0 100px;
  color: white;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: black;
}

#nav-in {
  display: flex;
}

@media only screen and (max-width: 800px) {
  .nav-custom {
    margin: 0;
  }

  .navigation-wrapper {
    direction: column;
  }
}

.header-navigation-option {
  margin: 0 10px;
  font-size: 20px;
}
</style>
