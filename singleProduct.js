const images = ["https://vashujain2024.github.io/MiniProject_2ndYear/ImageSingleProductPage/image1.png", "https://vashujain2024.github.io/MiniProject_2ndYear/ImageSingleProductPage/image2.png", "https://vashujain2024.github.io/MiniProject_2ndYear/ImageSingleProductPage/image3.png", "https://vashujain2024.github.io/MiniProject_2ndYear/ImageSingleProductPage/image4.png", "https://vashujain2024.github.io/MiniProject_2ndYear/ImageSingleProductPage/image5.png"];

let swapImage = document.getElementById("swapImage");
let mainImage = document.getElementById("mainImage");

function swapimage() {
    let index = images.indexOf(mainImage.src); // Get image file name from src
    console.log(mainImage.src);
    console.log(index);
    console.log(images[index]);
    if (index !== -1) {
        index = (index + 1) % images.length;
        mainImage.src = images[index];
    } else {
        console.error("Current image not found in the images array");
    }
}

// function openRealifyApp() {
//     // Attempt to open the app using the custom URL scheme
//     window.location.href = "realify://open";
// }

function openRealifyApp() {
    // URL scheme of the app (replace with your app's custom scheme)
    const appURL = "realify://open";

    // App store URL (for Android or iOS)
    const apkUrl = "https://drive.google.com/uc?export=download&id=11kvi6e1NmsQYKqnS_y7yomzSP7wF9nD7"; // Replace with your app's URL

    // Try to open the app
    const timeout = setTimeout(() => {
        // If the app doesn't open, ask the user to install it
        const userWantsToInstall = confirm("The app is not installed. Would you like to install it?");
        if (userWantsToInstall) {

            const link = document.createElement('a');
            link.href = apkUrl;
            link.download = 'Realify.apk'; // Optional: specify the default download filename
            link.click(); // Automatically trigger the download

            // Open the app after download starts
            // Replace the following line with your app's custom URL scheme to launch the app
            setTimeout(function () {
                window.location.href = appURL; // Custom URL scheme of your app (you must define this in the app)
            }, 2000); // Give time for the download to start
        } else {
            alert("Redirecting back to the website.");
        }
    }, 1500); // Wait 1.5 seconds to detect if the app is not installed

    // Try to open the app
    window.location.href = appURL;

    // Clear timeout if the app opens successfully
    window.addEventListener("blur", () => clearTimeout(timeout));
}



// function startCamera() {
//     // Check if the browser supports getUserMedia
//     // const blocks = document.getElementById("blocks");
//     // blocks.style.height = '-webkit-fill-available';

//     const video = document.getElementById('video');
//     video.style.display = 'block';

//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//         // Request access to the camera
//         navigator.mediaDevices.getUserMedia({ video: true })
//             .then(function (stream) {
//                 // Set the video source to the camera stream
//                 document.getElementById('video').srcObject = stream;
//             })
//             .catch(function (error) {
//                 console.log("Error accessing camera: ", error);
//             });
//     } else {
//         alert("Camera not supported in this browser.");
//     }
// }

// document.getElementById('loadAR').addEventListener('click', function () {
//     const arViewer = document.getElementById('arViewer');
//     arViewer.src = "https://your-hosted-link-to-WebGL-build"; // Replace with your hosted WebGL link
//     arViewer.style.display = "block";
// });

