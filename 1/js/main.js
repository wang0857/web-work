
$(document).ready(function(){

    // ----------------Mobile Menu Display----------------
    $(".nav-menu-bars").click(function(){
        $(".navlist").slideToggle();
    });

    if ($(window).width() < 761) {
        $(".navlist").click(function(){
            $(".navlist").slideToggle();
        });
    }
    else{

    };


});




