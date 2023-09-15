const API_URL = "https://api.homeease.ng/api/auth/login";

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
      } else {
        // Login failed, handle errors
        throw new Error("Login failed.");
      }
    }, 2000)
    .then((data) => {
      // Handle the response data, which should include access and refresh tokens
      const { accessToken, refreshToken } = data;
      console.log("Access Token:", accessToken);
      console.log("Refresh Token:", refreshToken);

      // You can store the tokens securely, e.g., in localStorage or a secure HTTP cookie
      // Storing the access token
      localStorage.setItem("accessToken", accessToken);

      // Redirect to a protected page or show a success message
      // window.location.href = "/lodges.html";
    })
    .catch((error) => {
      // Handle and display login errors, e.g., show an error message
      console.error("Login error:", error);
      // You can display an error message to the user here
    });
});

window.location.href = "file:///C:/Users/zubye/Documents/Everything%20homeease/web-app/src/lodges/lodges.html";