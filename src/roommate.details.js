
const API_URL = 'https://home-ease.onrender.com/api/roommates';

document.addEventListener('DOMContentLoaded', () => {
    // Get the URL parameters to extract the roommate ID
    const urlParams = new URLSearchParams(window.location.search);
    const roommateId = urlParams.get('id');

    // Function to fetch a specific roommate based on the ID
    async function fetchRoommateDetails() {
        try {
            const response = await fetch(`${API_URL}/${roommateId}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.status}`);
            }
            const roommate = await response.json();

            const roommateDetailsDiv = document.getElementById('roommateDetails');
            // Populate the roommate details on the page
            roommateDetailsDiv.innerHTML = generateRoommateDetailsHTML(roommate);
            function changeMainImage(event) {
      const mainImage = document.querySelector('.w-72');
      mainImage.src = event.target.src;
    }

    const roommateThumbnails = document.querySelectorAll('.roommate-thumbnail');
    roommateThumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener('click', changeMainImage);
    });
        } catch (e) {
            console.error('Error fetching data:', e);
        }
    }
    // roommate_details.js
function generateRoommateDetailsHTML(roommate) {
  return `
    <a href="roommates.html"><img src="../img/back.png" class="h-6 w-auto" alt="back"></a>
    <div>
      <img class="w-72 h-auto p-2 items-center" src="${roommate.profilePhoto}" alt="">
      <p class="text-3xl font-bold text-slate-800 uppercase">${roommate.name}</p>
      <p class="font-semibold p-1 text-slate-600">Level: ${roommate.level}</p>
      <p class="font-semibold p-1 text-slate-600">Department: ${roommate.department}</p>
      <p class="font-semibold p-1 text-slate-600">Phone Number: ${roommate.phoneNumber}</p>
      <p class="font-semibold p-1 text-slate-600">Gender: ${roommate.gender}</p>
    </div>
    <div class="absolute bottom-0 inset-x-0">
      <div class="flex space-x-10">
          <p class="font-semibold pl-4 text-4xl">#${roommate.amount}</p>
          <p class="px-8 py-1 bg-green-900 rounded-md text-white text-2xl"><a href="https://wa.me/2349039770569">Message</a></p>
      </div>
      <button class="font-normal hover:bg-slate-800 text-2xl bg-gray-500 m-4 mt-2 text-white px-28 py-1 rounded-md"><a href="https://wa.me/2349039770569">Book a visit</a></button>
    </div>
  `;
}
    fetchRoommateDetails();
});