<template>
  <div>
    <nav class="main-nav">
      <a v-if="!user.loggedIn" class="cd-signin" >Sign in</a>
    </nav>
      <a v-on:click="signOut" v-if="user.loggedIn" class="cd-signin" >Sign Out</a>
    
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
          <form class="cd-form" >
            <p class="fieldset">
              <label
                class="image-replace cd-email"
                for="signin-email"
              >E-mail</label>
              <input
                v-model="email"
                class="full-width has-padding has-border"
                id="signin-email"
                type="email"
                placeholder="E-mail"
              >
              <span class="cd-error-message">Error message here!</span>
            </p>

            <p class="fieldset">
              <label
                class="image-replace cd-password"
                for="signin-password"
              >Password</label>
              <input
                v-model="password"
                class="full-width has-padding has-border"
                id="signin-password"
                type="text"
                placeholder="Password"
              >
              <a
                href="#0"
                class="hide-password"
              >Hide</a>
              <span class="cd-error-message">Error message here!</span>
            </p>

            <p class="fieldset">
              <input v-on:click="signIn" class="full-width" type="submit" value="Login">
            </p>
            <hr class="separator">
            <SocialSignIns />
          </form>
        </div> <!-- cd-login -->

        <div id="cd-signup">
          <!-- sign up form -->
          <form class="cd-form" >
            <p class="fieldset">
              <label
                class="image-replace cd-username"
                for="signup-username"
              >Username</label>
              <input
                v-model="username"
                class="full-width has-padding has-border"
                id="signup-username"
                type="text"
                placeholder="Username"
              >
              <span class="cd-error-message">Error message here!</span>
            </p>

            <p class="fieldset">
              <label class="image-replace cd-email" for="signup-email">E-mail</label>
              <input v-model="email" class="full-width has-padding has-border" id="signup-email" type="email" placeholder="E-mail" >
              <span class="cd-error-message">Error message here!</span>
            </p>

            <p class="fieldset">
              <label class="image-replace cd-password" for="signup-password" >Password</label>
              <input v-model="password" class="full-width has-padding has-border" id="signup-password" type="text" placeholder="Password">
              <a href="#0" class="hide-password" >Hide</a>
              <span class="cd-error-message">Error message here!</span>
            </p>

            <p class="fieldset">
              <input
                type="checkbox"
                id="accept-terms"
              >
              <label for="accept-terms">I agree to the <a href="#0">Terms</a></label>
            </p>

            <p class="fieldset">
              <input type="submit" class="full-width has-padding" value="Create account" v-on:click="signUp" /> 
            </p>
          </form>
        </div> <!-- cd-signup -->

        <div id="cd-reset-password">
          <!-- reset password form -->
          <p class="cd-form-message">
            Lost your password? Please enter your email address. You will receive a link to create a new password.
          </p>

          <form class="cd-form">
            <p class="fieldset">
              <label
                class="image-replace cd-email"
                for="reset-email"
              >E-mail</label>
              <input
                class="full-width has-padding has-border"
                id="reset-email"
                type="email"
                placeholder="E-mail"
              >
              <span class="cd-error-message">Error message here!</span>
            </p>

            <p class="fieldset">
              <input
                class="full-width has-padding"
                type="submit"
                value="Reset password"
              >
            </p>
          </form>

          <p class="cd-form-bottom-message">
            <a href="#0">Back to log-in</a>
          </p>
        </div> <!-- cd-reset-password -->
        
        <a
          href="#0"
          class="cd-close-form"
        >Close</a>
      </div> <!-- cd-user-modal-container -->
    </div> 
    <div />
  </div>
</template>

<script>
import '@/components/layout/sign-in/sign-in-front.js'
import handlers from './sign-in'
import SocialSignIns from './SocialSignIns'
import { mapGetters } from "vuex";

export default {
  name: "SignIn",
  components: {SocialSignIns},
  data() {
    return {
      email: "",
      password: "",
      username: "",
    };
  },
  methods:{
    signUp: handlers.SignUp,
    signIn : handlers.SignIn,
    signOut : handlers.SignOut
  },
  computed: {
    ...mapGetters({ user: "user" })
  }
}
</script>

<style scoped src='./sign-in.css'></style>