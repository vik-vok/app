<template>
  <div>
    <Loader v-if="!fetched" class="loader" />
    <nav class="main-nav">
      <button v-if="fetched && user == null" type="button" class="btn btn-dark">
        Sign in
      </button>
    </nav>
    <div v-if="fetched && user != null">
      <button v-b-modal="'modal-upload-original-voice'">
        Upload New Voice
      </button>
      <b-modal
        :id="'modal-upload-original-voice'"
        :hide-footer="true"
        class="modal-class"
        title="Upload New Voice"
      >
        <VoiceOriginalRecorder />
      </b-modal>
      {{ user.username }}
      <button v-on:click="signOut" type="button" class="btn btn-dark">
        Sign Out
      </button>
    </div>
    <div class="cd-user-modal">
      <!-- this is the entire modal form, including the background -->
      <div class="cd-user-modal-container">
        <!-- this is the container wrapper -->
        <ul class="cd-switcher">
          <li><a href="#0">Sign in</a></li>
          <li><a href="#0">New account</a></li>
        </ul>

        <div id="cd-login">
          <!-- log in form -->
          <form class="cd-form">
            <p class="fieldset">
              <label class="image-replace cd-email" for="signin-email"
                >E-mail</label
              >
              <input
                v-model="email"
                class="full-width has-padding has-border"
                id="signin-email"
                type="email"
                placeholder="E-mail"
              />
              <span class="cd-error-message">Error message here!</span>
            </p>

            <p class="fieldset">
              <label class="image-replace cd-password" for="signin-password"
                >Password</label
              >
              <input
                v-model="password"
                class="full-width has-padding has-border"
                id="signin-password"
                type="password"
                placeholder="Password"
              />
              <a href="#" class="hide-password">Show</a>
              <span class="cd-error-message">Error message here!</span>
            </p>

            <p class="fieldset cd-form-bottom-message">
              <a href="#0">Forgot your password?</a>
            </p>

            <p class="fieldset">
              <input
                v-on:click="signIn"
                class="full-width"
                type="submit"
                value="Login"
              />
            </p>

            <div v-if="err_msg_signin" class="alert alert-danger err_msg">
              <strong>Warning!</strong> {{ err_msg_signin }}
            </div>
            <hr class="separator" />
            <SocialSignIns />
          </form>
        </div>
        <!-- cd-login -->

        <div id="cd-signup">
          <!-- sign up form -->
          <form class="cd-form">
            <p class="fieldset">
              <label class="image-replace cd-username" for="signup-username"
                >Username</label
              >
              <input
                v-model="username"
                class="full-width has-padding has-border"
                id="signup-username"
                type="text"
                placeholder="Username"
              />
              <span class="cd-error-message">Error message here!</span>
            </p>
            <p class="fieldset">
              <label class="image-replace cd-email" for="signup-email"
                >E-mail</label
              >
              <input
                v-model="email"
                class="full-width has-padding has-border"
                id="signup-email"
                type="email"
                placeholder="E-mail"
              />
              <span class="cd-error-message">Error message here!</span>
            </p>
            <p class="fieldset">
              <label class="image-replace cd-password" for="signup-password"
                >Password</label
              >
              <input
                v-model="password"
                class="full-width has-padding has-border"
                id="signup-password"
                type="password"
                placeholder="Password"
              />
              <a href="#" class="hide-password">Show</a>
              <span class="cd-error-message">Error message here!</span>
            </p>
            <p class="fieldset">
              <input type="checkbox" id="accept-terms" />
              <label for="accept-terms"
                >I agree to the <a href="#0">Terms</a></label
              >
            </p>
            <p class="fieldset">
              <input
                type="submit"
                class="full-width has-padding"
                value="Create account"
                v-on:click="signUp"
              />
            </p>

            <div v-if="err_msg_signup" class="alert alert-danger err_msg">
              <strong>Warning!</strong> {{ err_msg_signup }}
            </div>
            <hr class="separator" />
            <SocialSignIns />
          </form>
        </div>
        <!-- cd-signup -->

        <div id="cd-reset-password">
          <!-- reset password form -->
          <p class="cd-form-message">
            Lost your password? Please enter your email address. You will
            receive a link to create a new password.
          </p>

          <form class="cd-form">
            <p class="fieldset">
              <label class="image-replace cd-email" for="reset-email"
                >E-mail</label
              >
              <input
                v-model="email"
                class="full-width has-padding has-border"
                id="reset-email"
                type="email"
                placeholder="E-mail"
              />
              <span class="cd-error-message">Error message here!</span>
            </p>
            <div v-if="success_msg_forgot" class="alert alert-success">
              <strong>Success!</strong> {{ success_msg_forgot }}
            </div>

            <div v-if="err_msg_forgot" class="alert alert-danger err_msg">
              <strong>Warning!</strong> {{ err_msg_forgot }}
            </div>

            <p class="fieldset">
              <input
                v-on:click="forgotPass"
                class="full-width has-padding"
                type="submit"
                value="Reset password"
              />
            </p>

            <p class="cd-form-bottom-message">
              <a href="#0">Back to log-in</a>
            </p>
          </form>
        </div>
        <!-- cd-reset-password -->

        <a href="#0" class="cd-close-form">Close</a>
      </div>
      <!-- cd-user-modal-container -->
    </div>
    <div />
  </div>
</template>

<script>
import "@/components/layout/sign-in/sign-in-front.js";
import VoiceOriginalRecorder from "@/components/voice/VoiceOriginalRecorder";
import Loader from "@/components/Loader";
import handlers from "./sign-in";
import SocialSignIns from "./SocialSignIns";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SignIn",
  components: { SocialSignIns, Loader, VoiceOriginalRecorder },
  data() {
    return {
      email: "",
      password: "",
      username: "",
      err_msg_signin: "",
      err_msg_signup: "",
      err_msg_forgot: "",
      success_msg_forgot: "",
    };
  },
  methods: {
    ...mapActions(["registerUser"]),
    signUp: handlers.SignUp,
    signIn: handlers.SignIn,
    signOut: handlers.SignOut,
    forgotPass: handlers.ForgotPass,
  },
  computed: {
    ...mapGetters({ user: "user", fetched: "fetched" }),
  },
};
</script>

<style scoped src="./sign-in.css"></style>
