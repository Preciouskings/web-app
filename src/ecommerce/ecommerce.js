const API_URL = 'https://api.homeease.ng/api/ecommerce'

function generateHTML(ecommerce) {
  return `
    <div class="flex">
      <img src="${ecommerce.images[0]}" class="h-24 pt-2 w-20" alt="">
      <div>
        <p class="font-semibold">${ecommerce.title}</p>
        <div>
          <p class="text-gray-400 font-medium text-xs">${ecommerce.description}</p>
        </div>
      </div>
      <span class="pl-14 text-green-900 font-semibold">#${ecommerce.amount}</span>
    </div>
    <div class="mt-2 flex">
      <button class="bg-gray-300 p-1 px-10 rounded-sm" onclick="handleDetailsClick('${ecommerce.id}')">Details</button>
    <div class="bg-green-900 p-1 rounded-sm order-last">
        <img src="../../img/chat.png" class="w-6 h-auto" alt="">
      </div>
      <p class="bg-green-900 p-1 px-4 ml-20 text-white rounded-sm"><a href="https://wa.me/${ecommerce.phone_number}">Message</a></p>
    </div>
  `;
}

function fetchAllProducts() {
  return fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      return response.json();
    })
    .then((json) => {
      return json.data.map((ecommerce) => ({
        id: ecommerce.id,
        name: ecommerce.title,
        amount: ecommerce.description,
        location: ecommerce.amount,
        images: ecommerce.images,
      }));
    });
}

function handleDetailsClick(ecommerceId) {
    window.location.href = `ecommerce.details.html?id=${ecommerceId}`;
}
function searchProduct(query) {
  // Get the dataDisplayDiv element where ecommerces are displayed
  const dataDisplayDiv = document.getElementById('productDisplay');
  // Clear the existing content
  dataDisplayDiv.innerHTML = '';

  // Fetch all ecommerces and filter them based on the search query
  fetchAllProducts()
    .then((ecommerces) => {
      const filteredEcommerces = ecommerces.filter((ecommerce) =>
        ecommerce.location.toLowerCase().includes(query.toLowerCase())
      );

      // Generate HTML for each filtered ecommerce and append it to the display div
      filteredEcommerces.forEach((ecommerce) => {
        const ecommerceHTML = generateHTML(ecommerce);
        dataDisplayDiv.innerHTML += ecommerceHTML;
      });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}
//document.addEventListener('DOMContentLoaded', fetchAllecommerces);
document.addEventListener('DOMContentLoaded', () => {
  fetchAllProducts().then((ecommerces) => {
    const dataDisplayDiv = document.getElementById('productDisplay');
    ecommerces.forEach((ecommerce) => {
      const ecommerceHTML = generateHTML(ecommerce);
      dataDisplayDiv.innerHTML += ecommerceHTML;
    });
  });


  // Get the search input element
  const searchInput = document.getElementById('searchInput');

  // Add event listener for keyup to trigger search
  searchInput.addEventListener('keyup', (event) => {
    const searchQuery = event.target.value.trim();
    searchProduct(searchQuery); // Call the searchecommerces function with the search query
  });
});