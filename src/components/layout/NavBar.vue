<template>
  <div id="nav">
    <nav class="navbar navbar-dark bg-dark nav-custom">
      <div>
        <router-link to="/">
          Home
        </router-link> |
        <router-link to="/about">
          About
        </router-link>
      </div>
      <div>
        <!-- Should Be Search Bar -->
      </div>
      <!-- <SignIn /> -->
    </nav>
    <router-view />
  </div>
</template>

<script>
// import SignIn from './sign-in/SignIn'

export default {
  name: "NavBar",
  // components: {
  //   SignIn
  // }
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
    color:white;
  }

  #nav-in{
    display: flex;
  }
  
</style>