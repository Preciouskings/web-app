// Retrieve the access token from storage
const accessToken = localStorage.getItem("accessToken"); // Change to your storage method

// Include the access token as a Bearer token in the headers
const headers = {
  Authorization: `Bearer ${accessToken}`,
  "Content-Type": "application/json",
};

// Make the POST request with the headers
fetch("/your-api-endpoint", {
  method: "POST",
  headers,
  body: JSON.stringify(data),
})
  .then((response) => {
    // Handle the response here
  })
  .catch((error) => {
    console.error("Error:", error);
  });
