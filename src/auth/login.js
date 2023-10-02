const API_URL = "https://api.homeease.ng/api/auth/login";
const modal = document.getElementById("myModal");
const alertMessage = document.getElementById("alertMessage");

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const loginData = {};
  formData.forEach((value, key) => {
    loginData[key] = value;
  });

  // Make a POST request to the login endpoint
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  })
    .then((response) => {
      if (response.ok) {
        // Login was successful, parse the response JSON
        return response.json();
      } else if (response.status === 400 || 401) {
        // Invalid credentials, show an alert
        showModal("Invalid Credentials");
        return Promise.reject("Invalid Credentials");
      } else {
        // Other errors, show a generic alert
        showModal("Check Connection and Try again");
        return Promise.reject("Check Connection and Try again");
      }
    })
    .then((data) => {
      // Handle the response data, which should include access and refresh tokens
      const { accessToken, refreshToken } = data;
      console.log("Access Token:", accessToken);
      console.log("Refresh Token:", refreshToken);

      // Storing the access token
      localStorage.setItem("accessToken", accessToken);

      // Show a "Login Success" alert for 2 seconds
      showModal("Login Success");
      setTimeout(() => {
        // Redirect to the "lodges.html" page
        window.location.href = "../../src/lodges/lodges.html";
      }, 2000);
    })
    .catch((error) => {
      // Handle and display login errors, e.g., show an error message
      console.error("Login error:", error);
    });
});

// Function to show the modal with a custom message
function showModal(message) {
  alertMessage.innerText = message;
  modal.style.display = "block";
}

// Close the modal when the user clicks the "x" button
document.querySelector(".close").addEventListener("click", function () {
  modal.style.display = "none";
});