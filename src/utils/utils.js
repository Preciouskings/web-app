const navButton = document.getElementById('navbutton');
const navbar = document.getElementById('sidenav');
navButton.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
});

const imgsrcs = ['../../img/1.png', '../../img/2.png', '../../img/3.png', '../../img/4.png'];
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
    setTimeout(updateImage, 5000); 
}
updateImage();

function loadFooter() {
    fetch('../../src/utils/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footerContainer').innerHTML = data;
        });
}
loadFooter();