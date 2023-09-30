const API_URL = 'https://api.homeease.ng/api/lodges'

function generateHTML(lodge) {
  return `
    <div class="flex">
      <img src="${lodge.image_urls[0]}" class="h-24 pt-2 w-20" alt="">
      <div>
        <p class="font-semibold pl-4">${lodge.name}</p>
        <div>
          <p class="text-gray-400 pl-4 font-medium text-xs">Location: ${lodge.school}</p>
        </div>
      </div>
      <span class="pl-14 text-green-900 font-semibold">#${lodge.amount}</span>
    </div>
    <div class="mt-2 flex">
      <button class="bg-gray-300 p-1 px-10 rounded-sm" onclick="handleDetailsClick('${lodge.id}')">Details</button>
    <div class="bg-green-900 p-1 rounded-sm order-last">
        <img src="../../img/chat.png" class="w-6 h-auto" alt="">
      </div>
      <p class="bg-green-900 p-1 px-4 ml-20 text-white rounded-sm"><a href="tel:${lodge.caretaker_phonenumber}">Message</a></p>
    </div>
  `;
}

function fetchAllLodges() {
  return fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      return response.json();
    })
    .then((json) => {
      return json.data.map((lodge) => ({
        id: lodge.id,
        name: lodge.name,
        amount: lodge.amount,
        location: lodge.location,
        image_urls: lodge.image_urls,
        school: lodge.school,
        caretaker_phone_number: lodge.caretaker_phonenumber,
      }));
    });
}

function handleDetailsClick(lodgeId) {
    window.location.href = `lodge.details.html?id=${lodgeId}`;
}
function searchLodges(query) {
  // Get the dataDisplayDiv element where lodges are displayed
  const dataDisplayDiv = document.getElementById('lodgeDisplay');
  // Clear the existing content
  dataDisplayDiv.innerHTML = '';

  // Fetch all lodges and filter them based on the search query
  fetchAllLodges()
    .then((lodges) => {
      const filteredLodges = lodges.filter((lodge) =>
        lodge.location.toLowerCase().includes(query.toLowerCase())
      );

      // Generate HTML for each filtered lodge and append it to the display div
      filteredLodges.forEach((lodge) => {
        const lodgeHTML = generateHTML(lodge);
        dataDisplayDiv.innerHTML += lodgeHTML;
      });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}
//document.addEventListener('DOMContentLoaded', fetchAllLodges);
document.addEventListener('DOMContentLoaded', () => {
  fetchAllLodges().then((lodges) => {
    const dataDisplayDiv = document.getElementById('lodgeDisplay');
    lodges.forEach((lodge) => {
      const lodgeHTML = generateHTML(lodge);
      dataDisplayDiv.innerHTML += lodgeHTML;
    });
  });


  // Get the search input element
  const searchInput = document.getElementById('searchInput');

  // Add event listener for keyup to trigger search
  searchInput.addEventListener('keyup', (event) => {
    const searchQuery = event.target.value.trim();
    searchLodges(searchQuery); // Call the searchLodges function with the search query
  });
});