const API_URL = 'https://api.homeease.ng/api/lodges'

// Retrieve the access token from storage
document.getElementById("lodgeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Retrieve the access token from local storage
  const accessToken = localStorage.getItem("accessToken");

  // Check if the access token is available
  if (!accessToken) {
    // Handle the case where the access token is not available (e.g., user needs to log in)
    console.error("Access token not found. Please log in.");
    return;
  }

  // Prepare the form data
  const formData = new FormData(this);
  const userData = {};
  formData.forEach((value, key) => {
    userData[key] = value;
  });

  // Create headers with the access token as a bearer token
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  // Make a POST request with the form data and headers
  fetch("https://api.homeease.ng/api/lodges", {
    method: "POST",
    headers,
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (response.ok) {
        // Handle a successful response (e.g., redirect or show a success message)
        console.log("Data submitted successfully:", response);
        // You can redirect the user to another page or display a success message here
      } else {
        // Handle errors (e.g., validation errors or server errors)
        console.error("Data submission failed:", response);
        // You can display an error message to the user here
      }
    })
    .catch((error) => {
      // Handle network errors
      console.error("Network error:", error);
      // You can display an error message to the user here
    });
});
