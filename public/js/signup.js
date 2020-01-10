$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $(".signUpForm");
  var usernameInput = $("#username-input");
  var emailInput = $("#email-input");
  var passwordInput = $("#password-input-1");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    console.log(usernameInput.val());
    var userData = {
      username: usernameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password || !userData.username) {
      return;
    }

    var password = $("#password-input-1").val();
    var confirmPassword = $("#password-input-2").val();
    if (password !== confirmPassword) {
      alert("Passwords do not match.")
      return false;
    }

    // If we have an email and password, run the signUpUser function
    signUpUser(userData.username, userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
    usernameInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(username, email, password) {
    $.post("/api/signup", {
      username: username,
      email: email,
      password: password
    })
      .then(function (data) {
        window.location.replace("/main");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
