document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const registrationData = {};
  formData.forEach((value, key) => {
    registrationData[key] = value;
  });

  // Make a POST request to the registration endpoint
  fetch("/registration-endpoint", {
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
        throw new Error("Registration failed.");
      }
    })
    .then((data) => {
      // Handle the response data, e.g., show a success message or redirect to login
      console.log("Registration successful:", data);
      // You can redirect the user to a login page or show a success message here
    })
    .catch((error) => {
      // Handle and display errors, e.g., show an error message
      console.error("Registration error:", error);
      // You can display an error message to the user here
    });
    window.location.href = '/login.html';
});
