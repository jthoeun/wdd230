document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.getElementById('message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = Date.now();

    if (lastVisit) {
        const timeDifference = currentVisit - lastVisit;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysDifference} days ago.`;
        }
    } else {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem('lastVisit', currentVisit);
});