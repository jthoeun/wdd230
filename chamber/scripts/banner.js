function showBanner() {
    const today = new Date();
    const showOnDays = [1, 2, 3];


    if (showOnDays.includes(today.getDay())) {
        document.getElementById("banner").style.display = "block";
    } else {
        document.getElementById("banner").style.display = "none";
    }


    const closeButton = document.getElementById("closeBanner");

    closeButton.addEventListener("click", function () {
        document.getElementById("banner").style.display = "none";
    });
}


window.onload = showBanner;