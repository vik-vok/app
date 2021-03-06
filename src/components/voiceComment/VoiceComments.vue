<template>
  <div class="comments-wrapper">
    <h1>Recorded Voices</h1>
    <div class="scrolling-wrapper-flexbox">
      <VoiceMiniPlayer
        :have-user="true"
        :key="recordedVoice.recordedVoiceId"
        v-for="recordedVoice in this.recordedVoices"
        :voice="recordedVoice"
        v-on:delete-voice="
          $emit('delete-recorded-voice', recordedVoice.recordedVoiceId)
        "
      />
    </div>
    <hr />
    <h1>Comments</h1>
    <div v-bind:key="comment.commentId" v-for="comment in this.voiceComments">
      <Comment
        class="single-comment"
        :comment="comment"
        v-on:delete-comment="$emit('delete-comment', comment.commentId)"
      />
    </div>
    <div v-if="user && fetched" class="new-comment">
      <div
        class="new-comment-f"
        :style="[
          user && user.photoUrl
            ? { backgroundImage: 'url(' + user.photoUrl + ')' }
            : {},
        ]"
      ></div>
      <form @submit="SubmitNewComment">
        <textarea
          class="textarea-class"
          placeholder="Leave a comment..."
          rows="5"
          cols="1000"
          v-model="newComment"
        ></textarea>
        <input type="submit" class="form-submit-button" value="Submit" />
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
  background-image: url("https://hezway.ipower.com/poolsafeinc/wp-content/uploads/2017/06/profile.png");
}

.textarea-class {
  border-radius: 15px;
  outline: none;
  width: 100%;
  height: 150px;
  padding: 10px;
  resize: none;
  margin: 0 30px;
}

.form-submit-button {
  width: 150px;
  height: 40px;

  background: #f8bace;
  color: #fff;
  border: 1px solid #eee;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #eee;
  text-shadow: none;
  margin: 0 auto;
  text-align: center;
  outline: none;
}

.form-submit-button:hover {
  background: #f8d4e0;
  color: #fff;
  border: 1px solid #eee;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #eee;
  text-shadow: none;
}

@media only screen and (max-width: 800px) {
  .scrolling-wrapper-flexbox {
    margin: 0px;
  }

  .single-comment {
    margin: 1% 2% 1% 2%;
  }

  .new-comment-f {
    flex-shrink: 0;
    border-radius: 50%;
    height: 65px;
    width: 65px;
    background-size: cover;
    background-position: center center;
  }

  .new-comment {
    margin: 1% 0% 1% 2%;
    padding: 0;
  }

  .textarea-class {
    border-radius: 15px;
    outline: none;
    width: 85%;
    height: 150px;
    padding: 10px;
    margin: 0 10px;
    resize: none;
  }
}
</style>
