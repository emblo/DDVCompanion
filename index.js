document.addEventListener('DOMContentLoaded', function() {
    //Current year for footer
    window.onload = function() {
        let date = new Date().getFullYear();
        document.getElementById("year").innerHTML = date;
    } 

//Nav menu toggle
    const menuButton = document.getElementById("navButton");
    const navMenu = document.getElementById("navMenu");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
})