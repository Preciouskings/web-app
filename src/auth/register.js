const API_URL = 'https://api.homeease.ng/api/auth/register'
const modal = document.getElementById("myModal");
const alertMessage = document.getElementById("alertMessage");

document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const registrationData = {};
  formData.forEach((value, key) => {
    registrationData[key] = value;
  });

  // Make a POST request to the registration endpoint
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registrationData),
  })
    .then((response) => {
      if (response.ok) {
        // Registration was successful
        return response.json();
      } else {
        // Registration failed, handle errors
        showModal("Check Credentials");
        throw new Error("Registration failed.");
      }
    })
    .then((data) => {
      // Handle the response data, e.g., show a success message or redirect to login
      console.log("Registration successful:", data);
      showModal("Registration Success");
      setTimeout(() => {
        window.location.href = "../../src/auth/login.html";
      }, 2000);
    })
    .catch((error) => {
      // Handle and display errors, e.g., show an error message
      console.error("Registration error:", error);
      // You can display an error message to the user here
    });
});

function showModal(message) {
  alertMessage.innerText = message;
  modal.style.display = "block";
  }
// Close the modal when the user clicks the "x" button
document.querySelector(".close").addEventListener("click", function () {
modal.style.display = "none";
});