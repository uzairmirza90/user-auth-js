function signup() {
  document.getElementById("form").innerHTML = `
<p>Sign Up</p>
<hr />
<h4>Full Name:</h4>
<input
  id="fullname"
  type="text"
  placeholder="Enter your name"
/><br />
<span id="fullNameError"></span>
<h4>Email:</h4>
<input id="email" type="email" placeholder="Enter your email" /><br />
<span id="emailError"></span>
<h4>Username:</h4>
<input
  id="username"
  type="text"
  placeholder="Enter your username"
/><br />
<span id="usernameError"></span>
<h4>Password:</h4>
<input
  id="password"
  type="password"
  placeholder="Enter your password"
/><br />
<span id="passwordError"></span>
<h4>Repeat Password:</h4>
<input
  id="repeatpassword"
  type="password"
  placeholder="Enter repeat password"
/><br />
<span id="repeatpasswordError"></span>
<br />
<div class="agree">
  <input type="checkbox" class="checkbox" id="check" />
  <h5 style="margin-left: 10px">I agree to the terms of User</h5>
</div>
<span id="checkError"></span>
<button id="signup">Sign Up</button> &nbsp; &nbsp; &nbsp;
<button id="signin" onclick="signIn()">Sign In</button>`;
}

signup();


function signIn() {
    document.getElementById("form").innerHTML = `
        <p>Login</p>
        <hr />
        <h4>Username:</h4>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
        /><br />
        <span id="usernameError"></span>
        <h4>Password:</h4>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
        /><br />
        <span id="passwordError"></span>
        <button id="signup" onclick="signup()">Sign Up</button> &nbsp; &nbsp; &nbsp;
        <button id="signin">Sign In</button>
        `;
};

