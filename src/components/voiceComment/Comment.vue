<template>
  <div>
    <div class="wrapper">
      <div class="first" v-bind:style="[backgroundAvatar]"></div>

      <div class="second">
        <div class="second-inner s1">
          <h3>
            Saba Pochkhua
          </h3>
        </div>
        <div class="second-inner s2">
          <p>
            {{ comment.text }}
          </p>
        </div>
        <div class="second-inner s3">
          <p>Like</p>
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
  computed: {
    backgroundAvatar: () => ({
      "background-image":
        "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/00d109df-d44c-410d-a510-dfd9d5d61e6c/dao4ad5-fe9ba709-4916-4372-97fa-9e680414693a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDBkMTA5ZGYtZDQ0Yy00MTBkLWE1MTAtZGZkOWQ1ZDYxZTZjXC9kYW80YWQ1LWZlOWJhNzA5LTQ5MTYtNDM3Mi05N2ZhLTllNjgwNDE0NjkzYS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.EHNWzLINMtZtLj8iiUGGD8C0G_2ufiZPzD88QTOX7bA)",
    }),
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
