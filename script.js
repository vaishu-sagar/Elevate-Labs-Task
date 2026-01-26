// Select HTML elements
const button = document.getElementById("toggleBtn");
const text = document.getElementById("introText");

// Button click event
button.addEventListener("click", function () {

    // Toggle CSS class
    text.classList.toggle("highlight");

    // Change text dynamically
    if (text.classList.contains("highlight")) {
        text.textContent = "Text changed using JavaScript";
    } else {
        text.textContent = "This is my personal portfolio website built using HTML and CSS.";
    }

    // Console message
    console.log("Task 7 button clicked");
});
