const API_URL = 'https://home-ease.onrender.com/api/ecommerce/plans'

function fetchPlans() {
  return fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Fetched data:", data);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}
fetchPlans();