
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
    // lodge_details.js
function generateLodgeDetailsHTML(lodge) {
  return `
    <a href="lodges.html"><img src="../img/back.png" class="h-6 w-auto" alt="back"></a>
    <div>
      <img class="w-32 h-auto p-2" src="${lodge.images[2]}" alt="">
      <div class="mt-4 mb-6 flex space-x-4">
          <div><img class="h-12 w-auto" src="${lodge.images[0]}" alt=""></div>
          <div><img class="h-12 w-auto" src="${lodge.images[1]}" alt=""></div>
          <div><img class="h-12 w-auto" src="${lodge.images[2]}" alt=""></div>
          <div><img class="h-12 w-auto" src="${lodge.images[3]}" alt=""></div>
      </div>
      <p class="text-3xl font-bold text-slate-800 uppercase">${lodge.name}</p>
      <p class="font-semibold p-1 text-slate-600">Location: ${lodge.location}</p>
    </div>
    <div class="absolute bottom-0 inset-x-0">
      <div class="flex space-x-10">
          <p class="font-semibold pl-4 text-4xl">#${lodge.amount}</p>
          <p class="px-8 py-1 bg-green-900 rounded-md text-white text-2xl">Message</p>
      </div>
      <button class="font-normal hover:bg-slate-800 text-2xl bg-gray-500 m-4 mt-2 text-white px-28 py-1 rounded-md">Book a visit</button>
    </div>
  `;
}


    // Call the function to fetch and display the specific lodge details
    fetchLodgeDetails();
});