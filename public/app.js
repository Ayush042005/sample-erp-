const signInButton = document.querySelector("#sign-in");

if (signInButton) {
  signInButton.addEventListener("click", () => {
    window.location.href = "student-dashboard.html";
  });
}
