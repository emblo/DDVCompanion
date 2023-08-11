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

    //Back to top button
    const topBtn = document.getElementById("topBtn");
    window.onscroll = function() {topBtnToggle()};

    function topBtnToggle() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }
})

