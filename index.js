//Current year for footer
window.onload = function() {
    let date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
}