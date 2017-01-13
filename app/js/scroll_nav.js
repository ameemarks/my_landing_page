/**
 * Created by ania on 1/11/17.
 */

$(document).ready(function () {

    var checked = $("#menu-btn").is(':checked');

    // Hide Header on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('nav').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);


    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        //checks if menu is closed and runs the code only then
        if (!checked) {
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight) {
                // Scroll Down
                $('nav').removeClass('nav-down').addClass('nav-up');
            } else {
                // Scroll Up
                if (st + $(window).height() < $(document).height()) {
                    $('nav').removeClass('nav-up').addClass('nav-down');
                }
            }
        }

        lastScrollTop = st;
    }

    $('.menu-icon').on('click', function(){
        checked = !checked;
    });


});
