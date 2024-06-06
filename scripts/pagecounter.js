document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('pageVisits')) {
        localStorage.setItem('pageVisits', parseInt(localStorage.getItem('pageVisits')) + 1);
    } else {
        localStorage.setItem('pageVisits', 1);
    }

    document.getElementById('visit-counter').textContent = localStorage.getItem('pageVisits');
});