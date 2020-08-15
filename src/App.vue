<template>
  <div id="app">
    <NavBar />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  }
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
