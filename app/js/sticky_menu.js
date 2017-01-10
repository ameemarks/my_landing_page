/**
 * Created by ania on 9/30/16.
 */

$(document).ready(function(){
   var aboutSection = $(".about").offset().top;      //odczytaj wartość top nava

    var stickyNav = function (){
        var scrollY = $(window).scrollTop();       //odczytaj top aktualnej wartości stopnia przewinięcia strony -> scrolla

        if (scrollY > aboutSection-60) {       //aboutSection + 10px na wysokość nava
            $(".menu").removeClass(".menu").addClass("sticky");
        }
        else {
            $(".menu").removeClass("sticky");
        }
    };

    stickyNav();                        //wywołuje funkcję przy załadowaniu strony

    $(window).scroll(function(){        //wywołuje funkcję ponownie przy scrollowaniu strony
        stickyNav();
    })

});
