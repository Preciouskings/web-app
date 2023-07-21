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

async function fetchAllLodges() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    const data = await response.json();
    if (Array.isArray(data)) {
        data.map(lodge => {
            const { name, amount, location, images} = lodge;
            console.log(name);
        });
    } else {
      console.log('Invalid API response format.');
    }
  } catch (e) {
    console.error('Error fetching data:', e);
  }
}

document.addEventListener('DOMContentLoaded', fetchAllLodges);


//         const lodgesArray = data.lodges;
//         const lodgeContainer = document.getElementById("section");

//         lodgeContainer.innerHTML = "";

//         lodgesArray.forEach((lodge) => {
//             const { name, location, amount, images } = lodge;

//             const lodgeDiv = document.createElement("div");

//             lodgeDiv.classList.add("flex");
//             lodgeDiv.innerHTML = `
//                 <img src="${images}" class="h-14 w-auto" alt="">
//                 <div>
//                     <p class="font-semibold">${name}</p>
//                     <div>
//                         <p class="text-gray-400 font-medium text-xs">Location: ${location}</p>
//                     </div>
//                 </div>
//                 <span class="pl-14 text-green-900 font-semibold">#${amount}</span>
//             `;

//             // Add the lodge element to the container
//             lodgeContainer.appendChild(lodgeDiv);
//         });

