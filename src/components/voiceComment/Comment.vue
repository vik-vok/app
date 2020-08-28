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
          <p class="comment-text">
            {{ comment.text }}
          </p>
        </div>
      </div>

      <div
        class="delete-wrapper"
        v-if="user && fetched && user.id == comment.user.id"
      >
        <button
          class="btn open-modal trigger-modal-button"
          v-b-modal="'modal-' + comment.ID"
        >
          <i class="fa fa-trash"></i>
        </button>
        <DeleteConfirmation
          :id="comment.ID"
          v-on:delete="$emit('delete-comment')"
        />
      </div>
    </div>
    <!-- <hr class="comment-separator" /> -->
  </div>
</template>

<script>
import DeleteConfirmation from "@/components/layout/DeleteConfirmation";
import { mapGetters } from "vuex";

export default {
  name: "Comment",
  props: {
    comment: Object,
  },
  components: {
    DeleteConfirmation,
  },
  computed: {
    ...mapGetters({ user: "user", fetched: "fetched" }),
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.wrapper {
  padding: 10px 30px;
  display: flex;
  height: auto;
  align-items: center;
  background-color: white;
  border-radius: 20px;
}
.first {
  flex-shrink: 0;
  border-radius: 50%;
  height: 105px;
  width: 105px;
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

.comment-text {
  margin: 0 40px 0 0;
}

@media only screen and (max-width: 800px) {
  .wrapper {
    padding: 10px 7px;
    margin: 10px 0px;
  }

  .first {
    flex-shrink: 0;
    border-radius: 50%;
    height: 65px;
    width: 65px;
    background-size: cover;
    background-position: center center;
    padding: 3px;
  }

  h3 {
    font-size: 20px;
  }
  .second {
    margin: 0 20px;
  }
  .btn {
    padding: 6px 8px !important;
  }
}
/* Style buttons */

.delete-wrapper {
  position: relative;
}
.btn {
  background-color: #f15e5e; /* Blue background */
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 12px 16px; /* Some padding */
  font-size: 16px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
  position: absolute;
  bottom: -20px;
  right: 10px;
}
/* Darker background on mouse-over */
.btn:hover {
  background-color: #af4444;
}
</style>
