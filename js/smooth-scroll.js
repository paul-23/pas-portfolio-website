$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
    $(".contenido-pagina-completo").show();
});

window.onload = () => {
    let el = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
    el.parentNode.removeChild(el);
}

$("a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
        });
    }
});

$(window).on("load", function () {
    window.sr = ScrollReveal();
    sr.reveal('.showsmoth', {
        reset: false,
        interval: 100,
        delay: 100,
        easing: 'ease-in',
        origin: 'top'
    });
});