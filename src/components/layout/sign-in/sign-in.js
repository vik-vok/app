import firebase from "firebase";
import store from "@/store";

/**
 * Handles the sign up button press.
 */
function SignUp(e) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(this.email, this.password)
    .then(
      (result) => {
        store.dispatch("registerUser", result.user);
      },
      (err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
            this.err_msg_signup = `Email address ${this.email} already in use.`;
            break;
          case "auth/invalid-email":
            this.err_msg_signup = `Email address ${this.email} is invalid.`;
            break;
          case "auth/operation-not-allowed":
            this.err_msg_signup = `Error during sign up.`;
            break;
          default:
            this.err_msg_signup = err.message;
            break;
        }
      }
    );
  e.preventDefault();
}

/**
 * Handles the sign in button press.
 */
function SignIn(e) {
  firebase
    .auth()
    .signInWithEmailAndPassword(this.email, this.password)
    .then(
      () => {
        this.$router.go({
          path: this.$router.path,
        });
      },
      (err) => {
        switch (err.code) {
          case "auth/invalid-email":
            this.err_msg_signin = `Email address ${this.email} is invalid.`;
            break;
          case "auth/operation-not-allowed":
            this.err_msg_signin = `Error during sign up.`;
            break;
          default:
            this.err_msg_signin = err.message;
            break;
        }
      }
    );
  e.preventDefault();
}

/**
 * Handles the sign out button press.
 */
function SignOut(e) {
  firebase
    .auth()
    .signOut()
    .then(
      () => {
        this.$router.go({
          path: this.$router.path,
        });
      },
      (err) => {
        alert(err.message);
      }
    );
  e.preventDefault();
}

/**
 * Handles the sign with soccials button press.
 */
function SignInProvider(e, c) {
  var provider;
  switch (c) {
    case 0:
      provider = new firebase.auth.GoogleAuthProvider();
      break;
    case 1:
      provider = new firebase.auth.FacebookAuthProvider();
      break;
    case 2:
      provider = new firebase.auth.TwitterAuthProvider();
      break;
  }

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      if (result.additionalUserInfo.isNewUser) {
        store.dispatch("registerUser", result.user).then(() =>
          this.$router.go({
            path: this.$router.path,
          })
        );
      } else {
        this.$router.go({
          path: this.$router.path,
        });
      }
    })
    .catch(function (err) {
      alert(err.message);
    });
  e.preventDefault();
}

/**
 * Handles the forgot password button press.
 */
function ForgotPass(e) {
  firebase
    .auth()
    .sendPasswordResetEmail(this.email)
    .then(
      () => {
        this.success_msg_forgot = "Check your mail!";
      },
      (err) => {
        this.err_msg_forgot = err.message;
      }
    );
  e.preventDefault();
}

var handlers = {
  SignUp,
  SignIn,
  SignOut,
  SignInProvider,
  ForgotPass,
};

export default handlers;
