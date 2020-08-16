/**
 * Handles the sign up button press.
 */
function SignUp(email, password, username) {
    console.log(email)
    console.log(password)
    console.log(username)
    return;
}

/**
 * Handles the sign in button press.
 */
function SignIn(email,password) {
    console.log(email)
    console.log(password)
    return;
}


var handlers = {
    SignUp,
    SignIn
}

export default handlers;