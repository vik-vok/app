<template>
  <div id="nav">
    <nav class="navbar navbar-dark bg-dark nav-custom">
      <div>
        <router-link
          class="header-navigation-option"
          to="/"
        >
          Home
        </router-link> |
        <router-link
          class="header-navigation-option"
          to="/about"
        >
          About
        </router-link> |
        <router-link
          class="header-navigation-option"
          to="/voices"
        >
          Voices
        </router-link>
      </div>
      <SignIn />
    </nav>
    <router-view />
  </div>
</template>

<script>
import SignIn from '@/components/layout/sign-in/SignIn'

export default {
  name: "NavBar",
  components: {
    SignIn
  }
}
</script>

<style scoped>
 #nav {
    min-height: calc(100vh - 245px);
    padding: 0;
  }

  .nav-custom {
    color:white;
  }

  #nav a {
    font-weight: bold;
    color: white;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  #nav-in{
    display: flex;
  }
  
</style>