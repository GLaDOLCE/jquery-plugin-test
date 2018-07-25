$(document).ready(function () {
    $(window).on('load', function(){  
        $('#slider').nivoSlider(); 
    });
    $(".aboutus1").click(function (e) { 
        e.preventDefault();
        $(".home1").toggleClass("active");
        $(".home2,.home3").removeClass('active');
        $(".scroll1").slideToggle(500);
        $(".scroll2,.scroll3").slideUp(500);
    });
    $(".aboutus2").click(function (e) { 
        e.preventDefault();
        $(".home2").toggleClass("active");
        $(".home1,.home3").removeClass('active');
        $(".scroll2").slideToggle(500);
        $(".scroll1,.scroll3").slideUp(500);
    });
    $(".aboutus3").click(function (e) { 
        e.preventDefault();
        $(".home3").toggleClass("active");
        $(".home1,.home2").removeClass('active');
        $(".scroll3").slideToggle(500);
        $(".scroll1,.scroll2").slideUp(500);
    });
    $(".gotop a").click(function (e) { 
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });
    $('#slider').nivoSlider({ 
        effect: 'fade',                 // Specify sets like: 'fold,fade,sliceDown' 
        slices: 15,                       // For slice animations 
        boxCols: 1,                       // For box animations 
        boxRows: 1,                       // For box animations 
        animSpeed: 500,                   // Slide transition speed 
        pauseTime: 3000,                  // How long each slide will show 
        startSlide: 0,                    // Set starting Slide (0 index) 
        directionNav: true,               // Next & Prev navigation 
        controlNav: true,                 // 1,2,3... navigation 
        controlNavThumbs: false,          // Use thumbnails for Control Nav  下標小圓點切換為小圖 
        pauseOnHover: false,               // Stop animation while hovering 
        manualAdvance: false,             // Force manual transitions 
        prevText: 'Prev',                 // Prev directionNav text 
        nextText: 'Next',                 // Next directionNav text 
        randomStart: false,               // Start on a random slide 
        beforeChange: function(){},       // Triggers before a slide transition 
        afterChange: function(){},        // Triggers after a slide transition 
        slideshowEnd: function(){},       // Triggers after all slides have been shown 
        lastSlide: function(){},          // Triggers when last slide is shown 
        afterLoad: function(){}           // Triggers when slider has loaded 
    });
    $('.parallax-window').parallax({imageSrc: '../img/004.jpg'});
    $('.parallax-window').parallax({imageSrc: '../img/005.jpg'});
    $('.parallax-window').parallax({imageSrc: '../img/006.jpg'});
    $('.parallax-window').parallax({imageSrc: '../img/007.jpg'});
});