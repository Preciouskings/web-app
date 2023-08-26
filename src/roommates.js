const API_URL = 'https://home-ease.onrender.com/api/roommates'

function generateHTML(roommate) {
  return `
    <div class="flex">
      <img src="${roommate.profilePhoto}" class="h-24 pt-2 w-20" alt="">
      <div>
        <p class="font-semibold">${roommate.name}</p>
        <div>
          <p class="text-gray-400 font-medium text-xs">${roommate.department}</p>
        </div>
      </div>
      <span class="pl-14 text-green-900 font-semibold">#${roommate.level}</span>
    </div>
    <div class="mt-2 flex">
      <button class="bg-gray-300 p-1 px-10 rounded-sm" onclick="handleDetailsClick('${roommate.id}')">Details</button>
    <div class="bg-green-900 p-1 rounded-sm order-last">
        <img src="../img/chat.png" class="w-6 h-auto" alt="">
      </div>
      <p class="bg-green-900 p-1 px-4 ml-20 text-white rounded-sm"><a href="https://wa.me/${roommate.phoneNumber} ">Message</a></p>
    </div>
  `;
}

function fetchAllRoommates() {
  return fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      return response.json();
    })
    .then((json) => {
      return json.data.map((roommate) => ({
        id: roommate.id,
        name: roommate.name,
        department: roommate.department,
        level: roommate.level,
        profilePhoto: roommate.profilePhoto,
      }));
    });
}

function handleDetailsClick(roommateId) {
    window.location.href = `roommate.details.html?id=${roommateId}`;
}
function searchRoommate(query) {
  // Get the dataDisplayDiv element where roommates are displayed
  const dataDisplayDiv = document.getElementById('roommateDisplay');
  // Clear the existing content
  dataDisplayDiv.innerHTML = '';

  // Fetch all roommates and filter them based on the search query
  fetchAllRoommates()
    .then((roommates) => {
      const filteredRoommates = roommates.filter((roommate) =>
        roommate.location.toLowerCase().includes(query.toLowerCase())
      );

      // Generate HTML for each filtered roommate and append it to the display div
      filteredRoommates.forEach((roommate) => {
        const roommateHTML = generateHTML(roommate);
        dataDisplayDiv.innerHTML += roommateHTML;
      });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}
//document.addEventListener('DOMContentLoaded', fetchAllroommates);
document.addEventListener('DOMContentLoaded', () => {
  fetchAllRoommates().then((roommates) => {
    const dataDisplayDiv = document.getElementById('roommatesDisplay');
    roommates.forEach((roommate) => {
      const roommateHTML = generateHTML(roommate);
      dataDisplayDiv.innerHTML += roommateHTML;
    });
  });


  // Get the search input element
  const searchInput = document.getElementById('searchInput');

  // Add event listener for keyup to trigger search
  searchInput.addEventListener('keyup', (event) => {
    const searchQuery = event.target.value.trim();
    searchRoommate(searchQuery); // Call the searchroommates function with the search query
  });
});