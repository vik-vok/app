<template>
  <div>
    <div class="wrapper">
      <div
        class="first"
        :style="[
          comment.user && comment.user.photoUrl
            ? { backgroundImage: 'url(' + comment.user.photoUrl + ')' }
            : {},
        ]"
      ></div>
      <div class="second">
        <div class="second-inner s1">
          <h3>
            {{
              comment.user.username ? comment.user.username : comment.user.email
            }}
          </h3>
        </div>
        <div class="second-inner s2">
          <p>
            {{ comment.text }}
          </p>
        </div>
      </div>
    </div>
    <hr class="comment-separator" />
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comment: Object,
  },
};
</script>

<style scoped>
.wrapper {
  padding: 10px 30px;
  display: flex;
  height: auto;
  align-items: center;
}

.first {
  flex-shrink: 0;
  border-radius: 50%;
  height: 125px;
  width: 125px;
  background-size: cover;
  background-position: center center;
  background-image: url("https://hezway.ipower.com/poolsafeinc/wp-content/uploads/2017/06/profile.png");
}

.second {
  margin: 0 40px;
  flex: 1;
}

.second-inner {
  text-align: left;
  margin: 10px 0;
}

.second .s1 {
  font-size: 23px;
  margin-bottom: 10px;
  text-decoration: none;
  color: black;
}

.comment-separator {
  border: 0;
  width: 95%;
  height: 1px;
  background: #333;
  background-image: -webkit-linear-gradient(left, #ccc, #333, #ccc);
  background-image: -moz-linear-gradient(left, #ccc, #333, #ccc);
  background-image: -ms-linear-gradient(left, #ccc, #333, #ccc);
  background-image: -o-linear-gradient(left, #ccc, #333, #ccc);
}

@media only screen and (max-width: 800px) {
  .wrapper {
    padding: 0;
  }

  .first {
    flex-shrink: 0;
    border-radius: 50%;
    height: 65px;
    width: 65px;
    background-size: cover;
    background-position: center center;
  }

  h3 {
    font-size: 20px;
  }
  .second {
    margin: 0 20px;
  }
}
</style>
