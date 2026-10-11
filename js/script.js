
/* Display a welcome message */
console.log("Welcome to my portfolio website!");

/* Show a message when a visitor clicks a button */
function showMessage() {
    alert("Thank you for visiting my portfolio!");
}

/* Update the footer year automatically */
document.addEventListener("DOMContentLoaded", function () {
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }
});
