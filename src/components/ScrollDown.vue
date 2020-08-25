<template>
  <div>
    <section id="section01" class="demo">
      <a href="#voices-start" class="scroll-down-button"><span></span>Scroll</a>
    </section>
  </div>
</template>

<script>
import $ from "jquery";

$(function () {
  $(".scroll-down-button").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
  });
});

export default {
  name: "ScrollDown",
  props: {
    scrollTo: String,
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Josefin + Sans:300, 400);
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
section {
  position: relative;
  width: 100%;
  height: 100%;
}
section::after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 80%;
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.8) 80%,
    rgba(0, 0, 0, 0.8) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.8) 80%,
    rgba(0, 0, 0, 0.8) 100%
  );
}
section h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: #fff;
  font: normal 300 64px/1 "Josefin Sans", sans-serif;
  text-align: center;
  white-space: nowrap;
}

.demo a {
  position: absolute;
  bottom: 20px;
  left: 50%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: black;
  font: normal 400 20px/1 "Josefin Sans", sans-serif;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;
}
.demo a:hover {
  opacity: 0.5;
}

#section01 a {
  padding-top: 60px;
}
#section01 a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  box-sizing: border-box;
}
@-webkit-keyframes sdb03 {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    box-shadow: 0 0 0 60px rgba(255, 255, 255, 0.1);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb03 {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    box-shadow: 0 0 0 60px rgba(255, 255, 255, 0.1);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
