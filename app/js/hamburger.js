/**
 * Created by ania on 9/30/16.
 */
//Click the hamburger menu to see the animation
//You can click the X to close or click anywhere outside the menu

$(document).ready(function(){

    /* ----- HAMBURGER  ----- */
    $('.hamburger_icon_shell').on('click',function(){
        $('.menu').toggleClass('menu_hidden');
        $('.top').toggleClass('rotate');
        $('.middle').toggleClass('rotate-back');
        $('.menu-name').toggleClass('bump');
    });


    /* ----- STICKY NAV  ----- */
    var aboutSection = $(".about").offset().top;      //odczytaj wartość top nava

    var stickyNav = function (){
        var scrollY = $(window).scrollTop();       //odczytaj top aktualnej wartości stopnia przewinięcia strony -> scrolla

        if (scrollY > aboutSection-60) {       //aboutSection + 30px na wysokość nava
            $(".menu").removeClass(".menu").addClass("sticky");
        }
        else {
            $(".menu").removeClass("sticky");
        }
    };

    stickyNav();                        //wywołuje funkcję przy załadowaniu strony

    $(window).scroll(function(){        //wywołuje funkcję ponownie przy scrollowaniu strony
        stickyNav();
    });

    var x = "Total Width: " + screen.width;
    console.log(x);


});
