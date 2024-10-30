function myFunction() {
    var x = document.getElementById("mynav");
    if (x.className === "nav") {
        x.className = "menuClick";
        x.style.display = "block;"
    } else {
        x.className = "nav";
    }
}