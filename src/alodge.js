const API_URL = `https://home-ease.onrender.com/api/lodges/{id}`;

dataDisplayDiv.addEventListener('click', event => {
      if (event.target.id === 'details') {
        const id = event.target.dataset.id;
        viewLodge(id);
      }
    })
      function getLodgeById(id) {
  return json.data.find(lodge => lodge.id === id);
}
function viewLodge(id) {
  const lodgeData = getLodgeById(id);
  if (lodgeData) {
    console.log("Lodge ID:", lodgeData.id);
    console.log("Name:", lodgeData.name);
    console.log("Amount:", lodgeData.amount);
    console.log("Location:", lodgeData.location);
    console.log("Images:", lodgeData.images);
    // You can perform further actions with the lodgeData object as needed
  } else {
    console.log("Lodge not found!");
  }}