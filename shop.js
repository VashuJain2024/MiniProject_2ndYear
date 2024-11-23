var x = document.getElementById("mynav");
function myFunction() {
    if (x.className === "nav") {
        x.className = "menuClick";
        x.style.display = "block;"
    } else {
        x.className = "nav";
    }
}

let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    // console.log("Current Scroll Position:", window.scrollY);
    // console.log("Last Scroll Position:", lastScrollY);
    if (window.scrollY > lastScrollY) {
        x.className = "nav";
    }
    lastScrollY = window.scrollY;
});

const trigger = document.getElementById('trigger');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const popupFrame = document.getElementById('popup-frame');
const background = document.getElementById('background');

// Open the popup and load the HTML file
trigger.addEventListener('click', () => {
    popupFrame.src = 'singleProduct.html';
    popup.style.display = 'flex';
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    popupFrame.src = '';
});


const trigge = document.getElementById('trigge');
const popu = document.getElementById('popu');
const closePopu = document.getElementById('close-popu');
const popupFram = document.getElementById('popup-fram');
const backgroun = document.getElementById('background');

// Open the popup and load the HTML file
trigge.addEventListener('click', () => {
    popupFram.src = 'singleProduct.html';
    popu.style.display = 'flex';
});

// Close the popup when the close button is clicked
closePopu.addEventListener('click', () => {
    popu.style.display = 'none';
    popupFram.src = '';
});

// // Close the popup when clicking outside the popup
// document.addEventListener('click', (event) => {
//     if (!popup.contains(event.target) && event.target !== trigger) {
//         popup.style.display = 'none';
//         popupFrame.src = ''; // Clear the iframe content
//     }
// });

// const searchContainer = document.getElementById("search-container");
// const searchIcon = document.getElementById("search-icon");
// searchIcon.addEventListener("click", function () {
//     if (searchContainer.classList.contains("active")) {
//         searchContainer.classList.remove("active");
//     } else {
//         searchContainer.classList.add("active");
//     }
// });
