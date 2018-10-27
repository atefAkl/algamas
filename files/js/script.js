/*jslint plusplus: true*/
/*global */
window.onload = function () {
    'use strict';
    var slideIndex;
    slideIndex = 0;
    showSlides();
   
    function showSlides() {
        var i, slides;
        slides = document.getElementsByClassName("mySlides");

        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }


    $('.slideshow-container').height($('.slideshow-container').width() * (7/16));
};
