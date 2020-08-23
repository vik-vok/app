import firebase from 'firebase';
/**
 * Handles the sign up button press.
 */
function SignUp(e) {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
                this.$router.go({
                    path: this.$router.path
                });
            },
            err => {
                alert(err.message);
            })
    e.preventDefault()
}

/**
 * Handles the sign in button press.
 */
function SignIn(e) {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
                this.$router.go({
                    path: this.$router.path
                });
            },
            err => {
                alert(err.message);
            })
    e.preventDefault()
}

function SignOut(e) {
    firebase.auth().signOut()
        .then(() => {
                this.$router.go({
                    path: this.$router.path
                });
            },
            err => {
                alert(err.message);
            })
    e.preventDefault()
}

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
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            var token = result.credential.accessToken;
            var user = result.user;

            console.log(token)
            console.log(user)

            this.$router.go({
                path: this.$router.path
            });
        }).catch(function (err) {
            alert(err.message);
        });
    e.preventDefault()

}
var handlers = {
    SignUp,
    SignIn,
    SignOut,
    SignInProvider
}

export default handlers;