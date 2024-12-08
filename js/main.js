(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);


document.addEventListener("DOMContentLoaded", () => {
    const englishBtn = document.getElementById("english-btn");
    const arabicBtn = document.getElementById("arabic-btn");

    // Function to switch layout direction
    const switchLanguage = (lang) => {
        const htmlTag = document.documentElement;

        // Set `lang` and `dir` attributes to switch between LTR and RTL
        htmlTag.setAttribute("lang", lang);
        htmlTag.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

        // Update active button styles
        englishBtn.classList.toggle("active", lang === "en");
        arabicBtn.classList.toggle("active", lang === "ar");
    };

    // Event listeners for buttons
    englishBtn.addEventListener("click", () => switchLanguage("en"));
    arabicBtn.addEventListener("click", () => switchLanguage("ar"));

    // Initialize with English as default
    switchLanguage("en");
});

