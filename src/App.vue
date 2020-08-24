<template>
  <div id="app">
    <NavBar />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/layout/NavBar";
import Footer from "@/components/layout/Footer";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #d9afd9;
  background-image: linear-gradient(to bottom, #efa2b9, #f2e9e9);
}
</style>
