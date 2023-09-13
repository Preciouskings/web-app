
const API_URL = 'https://home-ease.onrender.com/api/ecommerce';

document.addEventListener('DOMContentLoaded', () => {
    // Get the URL parameters to extract the product ID
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Function to fetch a specific ecommerce based on the ID
    async function fetchProductDetails() {
        try {
            const response = await fetch(`${API_URL}/${ecommerceId}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.status}`);
            }
            const product = await response.json();

            const productDetailsDiv = document.getElementById('productDetails');
            // Populate the ecommerce details on the page
            productDetailsDiv.innerHTML = generateProductDetailsHTML(ecommerce);
            function changeMainImage(event) {
      const mainImage = document.querySelector('.w-72');
      mainImage.src = event.target.src;
    }

    const productThumbnails = document.querySelectorAll('.ecommerce-thumbnail');
    productThumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener('click', changeMainImage);
    });
        } catch (e) {
            console.error('Error fetching data:', e);
        }
    }
    // ecommerce_details.js
function generateProductDetailsHTML(ecommerce) {
  return `
    <a href="ecommerces.html"><img src="../img/back.png" class="h-6 w-auto" alt="back"></a>
    <div>
      <img class="w-72 h-auto p-2 items-center" src="${ecommerce.images[0]}" alt="">
      <div class="mt-4 mb-6 flex space-x-4">
          <div><img class="ecommerce-thumbnail h-20 w-auto" src="${ecommerce.images[0]}" alt=""></div>
          <div><img class="ecommerce-thumbnail h-20 w-auto" src="${ecommerce.images[1]}" alt=""></div>
          <div><img class="ecommerce-thumbnail h-20 w-auto" src="${ecommerce.images[2]}" alt=""></div>
          <div><img class="ecommerce-thumbnail h-20 w-auto" src="${ecommerce.images[3]}" alt=""></div>
      </div>
      <p class="text-3xl font-bold text-slate-800 uppercase">${ecommerce.title}</p>
      <p class="font-semibold p-1 text-slate-600">Description: ${ecommerce.description}</p>
      <p class="font-semibold p-1 text-slate-600">Quantity: ${ecommerce.quantity}</p>
      <p class="font-semibold p-1 text-slate-600">Location: ${ecommerce.location}</p>

    </div>
    <div class="absolute bottom-0 inset-x-0">
      <div class="flex space-x-10">
          <p class="font-semibold pl-4 text-4xl">#${ecommerce.amount}</p>
          <p class="px-8 py-1 bg-green-900 rounded-md text-white text-2xl"><a href="https://wa.me/2349039770569">Message</a></p>
      </div>
      <button class="font-normal hover:bg-slate-800 text-2xl bg-gray-500 m-4 mt-2 text-white px-28 py-1 rounded-md"><a href="https://wa.me/2349039770569">Book a visit</a></button>
    </div>
  `;
}
    fetchProductDetails();
});