// Declare variable
var slideIndex = 1;
var myTimer;

window.addEventListener("load", function () {
    showSlides(slideIndex);
    myTimer = setInterval(function () { plusSlides(1) }, 3000);
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }

    if (n === -1) {
        myTimer = setInterval(function () { plusSlides(n + 2) }, 3000);
    } else {
        myTimer = setInterval(function () { plusSlides(n + 1) }, 3000);
    }
}

//Controls the current slide and resets interval if needed
function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function () { plusSlides(n + 1) }, 3000);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides;
    if (screen.width >= 768) {
        slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot--desktop");
    } else {
        slides = document.getElementsByClassName("myMobileSlides");
        var dots = document.getElementsByClassName("dot--mobile");
    }

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}