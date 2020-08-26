<template>
  <div>
    <div class="card">
      <div class="card-avatar" v-bind:style="[backgroundAvatar]"></div>
      <h5 class="user-name">{{ voice.name }}</h5>
      <div class="button-wrapper">
        <button class="play-button">Play</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VoiceMiniPlayer",
  props: {
    voice: Object,
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
.card {
  flex: 0 0 auto;
  margin: 0 40px;
  padding: 15px 0;
  width: 315px;
  height: 280px;
  border-radius: 30px;
}

.card-avatar {
  border-radius: 50%;
  height: 115px;
  width: 115px;
  background-size: cover;
  background-position: center center;
  margin: 0 auto;
}

.user-name {
  margin: 30px 0;
}

.play-button {
  position: absolute;
  background: #f8bace;
  border-radius: 11px;
  width: 150px;
  height: 40px;
  color: #ffffff;
  display: inline-block;
  font: normal bold "Open Sans", sans-serif;
  text-align: center;
  border: none;
  bottom: 20px;
  left: 0;
  right: 0;
  outline: none;
  margin: auto;
}
</style>
