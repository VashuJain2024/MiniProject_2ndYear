function myFunction() {
    var x = document.getElementById("mynav");
    if (x.className === "nav") {
        x.className = "menuClick";
        x.style.display = "block;"
    } else {
        x.className = "nav";
    }
}

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

// // Close the popup when clicking outside the popup
// document.addEventListener('click', (event) => {
//     if (!popup.contains(event.target) && event.target !== trigger) {
//         popup.style.display = 'none';
//         popupFrame.src = ''; // Clear the iframe content
//     }
// });
