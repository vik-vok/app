<template>
  <div class="comments-wrapper">
    <h1>Recorded Voices</h1>
    <div class="scrolling-wrapper-flexbox">
      <VoiceMiniPlayer
        :key="recordedVoice.id"
        v-for="recordedVoice in this.recordedVoices"
        :voice="recordedVoice"
      />
    </div>
    <hr />
    <h1>Comments</h1>
    <div v-bind:key="comment.id" v-for="comment in this.voiceComments">
      <Comment class="single-comment" :comment="comment" />
    </div>
    <div v-if="user && fetched" class="new-comment">
      <div class="new-comment-f" v-bind:style="[backgroundAvatar]"></div>
      <form @submit="SubmitNewComment">
        <textarea
          class="textarea-class"
          placeholder="Leave a comment..."
          rows="5"
          v-model="newComment"
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import Comment from "./Comment";
import VoiceMiniPlayer from "./VoiceMiniPlayer";
import { mapGetters } from "vuex";

export default {
  name: "VoiceComments",
  props: {
    voiceComments: Array,
    recordedVoices: Array,
  },
  components: {
    Comment,
    VoiceMiniPlayer,
  },
  data() {
    return {
      newComment: "",
    };
  },
  computed: {
    ...mapGetters({ user: "user", fetched: "fetched" }),
    backgroundAvatar: () => ({
      "background-image":
        "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/00d109df-d44c-410d-a510-dfd9d5d61e6c/dao4ad5-fe9ba709-4916-4372-97fa-9e680414693a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDBkMTA5ZGYtZDQ0Yy00MTBkLWE1MTAtZGZkOWQ1ZDYxZTZjXC9kYW80YWQ1LWZlOWJhNzA5LTQ5MTYtNDM3Mi05N2ZhLTllNjgwNDE0NjkzYS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.EHNWzLINMtZtLj8iiUGGD8C0G_2ufiZPzD88QTOX7bA)",
    }),
  },
  methods: {
    SubmitNewComment(e) {
      this.$emit("addComment", this.newComment);
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
.comments-wrapper {
  background-image: linear-gradient(to bottom, #feecf2, #fdf6f8);
  border-radius: 30px;
  padding-bottom: 10px;
}
.single-comment {
  margin: 2% 8%;
}
h1 {
  padding: 50px 0;
}
/* Side Scroll */
.scrolling-wrapper-flexbox {
  margin: 0 25px 0 25px;
  display: flex;
  padding: 0 0 20px 0;
  flex-wrap: nowrap;
  overflow-x: auto;
}

@media only screen and (max-width: 800px) {
  .scrolling-wrapper-flexbox {
    margin: 0px;
  }

  .single-comment {
    margin: 1% 0% 1% 2%;
  }
}

/* New Comment */
.new-comment {
  margin: 2% 8%;
  padding: 10px 30px;
  display: flex;
  height: auto;
  align-items: center;
}

.new-comment-f {
  flex-shrink: 0;
  border-radius: 50%;
  height: 125px;
  width: 125px;
  background-size: cover;
  background-position: center center;
}

.textarea-class {
  border-radius: 15px;
  width: 100%;
  padding: 10px;
  margin: 0 30px;
}
</style>
