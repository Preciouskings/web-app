const API_URL = 'https://home-ease.onrender.com/api/lodges';

document.addEventListener('DOMContentLoaded', () => {
    // Get the URL parameters to extract the lodge ID
    const urlParams = new URLSearchParams(window.location.search);
    const lodgeId = urlParams.get('id');

    // Function to fetch a specific lodge based on the ID
    async function fetchLodgeDetails() {
        try {
            const response = await fetch(`${API_URL}/${lodgeId}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.status}`);
            }
            const lodge = await response.json();

            const lodgeDetailsDiv = document.getElementById('lodgeDetails');
            // Populate the lodge details on the page
            lodgeDetailsDiv.innerHTML = generateLodgeDetailsHTML(lodge);
        } catch (e) {
            console.error('Error fetching data:', e);
        }
    }

    // Call the function to fetch and display the specific lodge details
    fetchLodgeDetails();
});