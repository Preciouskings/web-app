
const API_URL = 'https://api.homeease.ng/api/lodges';

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
            function changeMainImage(event) {
      const mainImage = document.querySelector('.w-72');
      mainImage.src = event.target.src;
    }

    const lodgeThumbnails = document.querySelectorAll('.lodge-thumbnail');
    lodgeThumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener('click', changeMainImage);
    });
        } catch (e) {
            console.error('Error fetching data:', e);
        }
    }
    // lodge_details.js
function generateLodgeDetailsHTML(lodge) {
  return `
    <a href="lodges.html"><img src="../../img/back.png" class="h-6 w-auto" alt="back"></a>
    <div>
      <img class="w-72 h-48 p-2 items-center" src="${lodge.image_urls[0]}" alt="">
      <div class="mt-4 mb-6 flex space-x-4">
          <div><img class="lodge-thumbnail h-20 w-auto" src="${lodge.image_urls[0]}" alt=""></div>
          <div><img class="lodge-thumbnail h-20 w-auto" src="${lodge.image_urls[1]}" alt=""></div>
          <div><img class="lodge-thumbnail h-20 w-auto" src="${lodge.image_urls[2]}" alt=""></div>
          <div><img class="lodge-thumbnail h-20 w-auto" src="${lodge.image_urls[3]}" alt=""></div>
      </div>
      <p class="text-3xl font-bold text-slate-800 uppercase">${lodge.name}</p>
      <p class="font-semibold p-1 text-slate-600">School: ${lodge.school}</p>
      <p class="font-semibold p-1 text-slate-600">Location: ${lodge.location}</p>
    </div>
    <div class="absolute bottom-0">
      <div class="flex space-x-8">
          <p class="font-semibold pl-4 text-3xl">#${lodge.amount}</p>
          <p class="px-1 text-center p-1 bg-green-900 rounded-md text-white text-1xl"><a href="tel:${lodge.caretaker_phonenumber}">Check Availability</a></p>
      </div>
      <button class="font-normal hover:bg-slate-800 text-2xl bg-gray-500 m-4 mt-2 text-white px-20 py-1 rounded-md"><a href="https://wa.me/2349039770569">Book a visit</a></button>
    </div>
  `;
}
    fetchLodgeDetails();
});