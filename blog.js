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
