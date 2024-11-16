document.getElementById("submit").addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    alert("Your details have been submitted!");

    // Clear input fields
    nameInput.value = '';
    emailInput.value = '';
});
