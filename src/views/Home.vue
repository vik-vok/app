<template>
  <div class="home">
    <img class="line-img" src="../assets/images/line.png" />
    <div class="welcome">
      <div class="right">
        <h1>Welcome to VikVok</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare
          massa a dui semper placerat. In sodales blandit dolor ac vehicula.
          Vestibulum rhoncus ante nisi, vel imperdiet lectus interdum vitae.
          Proin tristique sed risus at bibendum. Cras molestie justo lorem
        </h4>
        <a href="#" class="button">
          <strong>Join Us</strong
          ><img class="join-us-button" src="../assets/images/icon-right.png" />
        </a>
      </div>
      <div>
        <img class="welcome-img" src="../assets/images/welcome.png" />
      </div>
    </div>
    <ScrollDown class="scroll-class" scrollTo="voices-start" />

    <div class="voices-popular">
      <div class="voices-header">
        <h1 id="voices-start" class="voices-popular-header">Popular</h1>
        <router-link class="see" to="/voices">
          <a href="#" class="button-m">
            <strong>All</strong>
            <!-- <img class="" src="../assets/images/icon-right.png" /> -->
          </a>
        </router-link>
      </div>
      <Voices class="center" :isAll="false" />
    </div>
  </div>
</template>

<script>
import Voices from "@/components/voice/Voices";
import ScrollDown from "@/components/ScrollDown";
export default {
  name: "Home",
  components: {
    Voices,
    ScrollDown,
  },
};
</script>

<style scoped>
.scroll-class {
  margin: 100px;
}

.center {
  padding: 100px 0 0 0;
  margin: 0 auto;
}

.line-img {
  width: 100%;
  margin: 40px 0 20px 0;
  transform: rotate(180deg);
}

.welcome {
  display: flex;
  margin: auto 0;
  padding: 50px 0 100px 0;
  justify-content: center;
}

.right {
  flex-shrink: 0;
  max-width: 25%;
  margin: 0 150px;
  text-align: left;
}

.left {
  flex: 1;
}

.button {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  border-radius: 10rem;
  color: #614b4b;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  width: 40%;
  text-decoration: none;
  margin: 100px 0;
  min-width: 160px;
}

.button:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff1d9;
  border-radius: 10rem;
  z-index: -2;
}
.button:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: #eca4bc;
  transition: all 0.3s;
  border-radius: 10rem;
  z-index: -1;
}
.button:hover {
  color: #614b4b;
}
.button:hover:before {
  width: 100%;
}

.button-m {
  display: block;
  padding: 0.75rem 1.25rem;
  border-radius: 10rem;
  color: #614b4b;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  text-decoration: none;
  float: right;
  min-width: 160px;
  font-size: 25px;
}

.button-m:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: #fff1d9; */
  border-radius: 10rem;
  z-index: -2;
}
.button-m:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: #eca4bc;
  transition: all 0.3s;
  border-radius: 10rem;
  z-index: -1;
}
.button-m:hover {
  color: #614b4b;
}
.button-m:hover:before {
  width: 100%;
}

.join-us-button {
  /* width: 40%; */
  height: 25px;
  width: 25px;
  float: right;
}

@media only screen and (max-width: 600px) {
  .welcome {
    display: block;
    padding: 0px;
  }
  .button {
    margin: 10px;
  }

  .right {
    flex-shrink: 0;
    max-width: 90%;
    margin: 10px;
    text-align: left;
  }
  .welcome-img {
    width: 90%;
  }
}
.voices-popular {
  max-width: 80%;
  margin: 0 auto;
}

.voices-popular-header {
  float: left;
}

@media only screen and (max-width: 800px) {
  .welcome {
    padding: 0 0 80px 0;
  }
  .voices-popular {
    max-width: 95%;
    margin: 0 auto;
  }

  .scroll-class {
    display: none;
  }
}
</style>
