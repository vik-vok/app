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

        <button
          class="btn open-modal trigger-modal-button"
          v-b-modal="'modal-' + comment.ID"
        >
          <i class="fa fa-trash"></i>
        </button>
        <b-modal
          :id="'modal-' + comment.ID"
          :hide-footer="true"
          class="modal-class"
          title="Record Voice"
        >
          <div class="modal-wrapper">
            <!-- Modal HTML -->
            <div class="modal-dialog modal-confirm">
              <div class="modal-content">
                <div>
                  <div class="icon-box">
                    <i class="material-icons">&#xE5CD;</i>
                  </div>
                  <h4 class="modal-title w-100">Are you sure?</h4>
                </div>
                <div class="modal-body">
                  <p>
                    Do you really want to delete these comment? This process
                    cannot be undone
                  </p>
                </div>
                <div class="modal-footer justify-content-center">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" class="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </b-modal>
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
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

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
/* Style buttons */
.btn {
  background-color: DodgerBlue; /* Blue background */
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 12px 16px; /* Some padding */
  font-size: 16px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
}
/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}

.modal-confirm {
  color: #636363;
  width: 400px;
}
.modal-confirm .modal-content {
  /* padding: 20px; */
  border-radius: 5px;
  border: none;
  text-align: center;
  font-size: 14px;
}
.modal-confirm h4 {
  text-align: center;
  font-size: 26px;
  margin: 10px 0 -10px;
}
.modal-confirm .close {
  position: absolute;
  top: -5px;
  right: -2px;
}
.modal-confirm .modal-body {
  color: #999;
}
.modal-confirm .modal-footer {
  border: none;
  text-align: center;
  border-radius: 5px;
  font-size: 13px;
}
.modal-confirm .modal-footer a {
  color: #999;
}
.modal-confirm .icon-box {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-radius: 50%;
  z-index: 9;
  text-align: center;
  border: 3px solid #f15e5e;
}
.modal-confirm .icon-box i {
  color: #f15e5e;
  font-size: 46px;
  display: inline-block;
  margin-top: 13px;
}
.modal-confirm .btn,
.modal-confirm .btn:active {
  color: #fff;
  border-radius: 4px;
  background: #60c7c1;
  text-decoration: none;
  transition: all 0.4s;
  line-height: normal;
  min-width: 120px;
  border: none;
  min-height: 40px;
  border-radius: 3px;
  margin: 0 5px;
}
.modal-confirm .btn-secondary {
  background: #c1c1c1;
}
.modal-confirm .btn-secondary:hover,
.modal-confirm .btn-secondary:focus {
  background: #a8a8a8;
}
.modal-confirm .btn-danger {
  background: #f15e5e;
}
.modal-confirm .btn-danger:hover,
.modal-confirm .btn-danger:focus {
  background: #ee3535;
}

@media only screen and (max-width: 800px) {
  .modal-confirm {
    width: auto;
  }
}
</style>
