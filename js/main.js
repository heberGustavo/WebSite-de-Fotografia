//Efeito do backgroud ao usar o scroll
$(window).scroll(function () {
    var $height = $(window).scrollTop();

    if ($height > 50) {
        $('header nav').addClass('active-nav');
        $('header nav .logo img').addClass('active-logo');

    } else {
        $('header nav').removeClass('active-nav');
        $('header nav .logo img').removeClass('active-logo');
        $('header nav .logo img').addClass('desative-logo');
    }
});

//Efeito Ancora
$(document).on("click", 'a[href*="#"]', function (e) {

    var target = $(this).attr("href"); //Get the target
    var scrollToPosition = $(target).offset().top - 90;

    $('html,body').animate({ 'scrollTop': scrollToPosition }, 1000, function () {
        
    });
    window.location.hash = target;

    e.preventDefault();

    //Remove o nome da ancora da url
    history.replaceState("", null, window.location.pathname);
});