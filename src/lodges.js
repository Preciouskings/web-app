const API_URL = 'https://home-ease.onrender.com/api/lodges'

const navButton = document.getElementById('navbutton');
const navbar = document.getElementById('sidenav');
navButton.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
});

const imgsrcs = ['../img/1.png', '../img/2.png', '../img/3.png', '../img/4.png'];
const img = document.getElementById('img');
let currentIndex = 0;
function createImageElement (src) {
    const newimg = document.createElement('img');
    newimg.setAttribute('src', src);
    return newimg;
}

function updateImage() {
    img.innerHTML = '';
    const currentSrc = imgsrcs[currentIndex];
    const newImage = createImageElement(currentSrc);
    img.appendChild(newImage);
    currentIndex = (currentIndex + 1) % imgsrcs.length;
    setTimeout(updateImage, 2000); 
}
updateImage();

function generateHTML(lodge) {
  return `
    <div class="flex">
      <img src="${lodge.images[0]}" class="h-24 pt-2 w-20" alt="">
      <div>
        <p class="font-semibold">${lodge.name}</p>
        <div>
          <p class="text-gray-400 font-medium text-xs">Location: ${lodge.location}</p>
        </div>
      </div>
      <span class="pl-14 text-green-900 font-semibold">#${lodge.amount}</span>
    </div>
    <div class="mt-2 flex">
      <button class="bg-gray-300 p-1 px-10 rounded-sm" onclick="handleDetailsClick('${lodge.id}')">Details</button>
    <div class="bg-green-900 p-1 rounded-sm order-last">
        <img src="../img/chat.png" class="w-6 h-auto" alt="">
      </div>
      <p class="bg-green-900 p-1 px-4 ml-20 text-white rounded-sm"><a href="https://wa.me/2349039770569">Message</a></p>
    </div>
  `;
}

// async function fetchAllLodges() {
//   try {
//     const response = await fetch(API_URL);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch: ${response.status}`);
//     }
//     const json = await response.json();
//     const data = json.data.map(lodge => ({ id: lodge.id, name: lodge.name, amount: lodge.amount, location: lodge.location, images: lodge.images}));
    
//     const dataDisplayDiv = document.getElementById('lodgeDisplay');
    
//     data.forEach(lodge => {
//     const lodgeHTML = generateHTML(lodge);
//     dataDisplayDiv.innerHTML += lodgeHTML;
//     });
//   } catch (e) {
//     console.error('Error fetching data:', e);
//   }
// }
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
        images: lodge.images,
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