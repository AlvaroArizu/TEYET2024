document.addEventListener("DOMContentLoaded", function() {
    var target_date = new Date("Jun 13, 2024").getTime();
    var countdown_elements = document.querySelectorAll('.countdown-number');

    function updateCountdown() {
        var current_date = new Date().getTime();
        var seconds_left = Math.floor((target_date - current_date) / 1000);

        if (seconds_left <= 0) {
            countdown_elements.forEach(function(element) {
                element.textContent = '0';
            });
            return;
        }

        var days = Math.floor(seconds_left / 86400);
        var hours = Math.floor((seconds_left % 86400) / 3600);
        var minutes = Math.floor((seconds_left % 3600) / 60);
        var seconds = seconds_left % 60;

        countdown_elements[0].textContent = days;
        countdown_elements[1].textContent = hours;
        countdown_elements[2].textContent = minutes;
        countdown_elements[3].textContent = seconds;
    }

    setInterval(updateCountdown, 1000);
});
