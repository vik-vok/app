/**
 * Handles the sign up button press.
 */
function SignUp(email, password, username) {
    console.log("SignUp Here!!!", email, password, username)
}

/**
 * Handles the sign in button press.
 */
function SignIn(email,password) {
    console.log("SignIn Here!!!", email, password)
}


var handlers = {
    SignUp,
    SignIn
}

export default handlers;