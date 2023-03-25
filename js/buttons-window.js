const GeneralCode = document.querySelector('.codigo-general');
const buttonHTML = document.querySelector('#barra-html');
const buttonDesign = document.querySelector('#barra-design');

$(document).ready(function () {

    $("#ventana-min").click(function () {
        $(".codigo-general").slideUp();
        minimizar();
    });


    $("#ventana-cerrar").click(function () {
        $(".codigo-general").hide(700);
        minimizar();
    });


    $("#barra-html").click(function () {
        if ($(".codigo-general").is(":hidden")) {
            $(".codigo-general").slideToggle();
        }
        mostrarConocimientos();
        pulseEffect();
    });

    $("#barra-design").click(function () {
        if ($(".codigo-general").is(":hidden")) {
            $(".codigo-general").slideToggle();
        }
        mostrarDesign();
        pulseEffect();
    });

    function pulseEffect() {
        if (!$(".codigo-general").is(":hidden")) {
            buttonHTML.classList.remove("boton-barra-click");
            buttonDesign.classList.remove("boton-barra-click");
        }
    }

    function minimizar() {
        const screenCG = document.querySelector('.codigo-general');
        if (screenCG.classList.contains("fullscreen")) {
            screenCG.classList.remove("fullscreen");
        }
        buttonHTML.classList.add("boton-barra-click");
        setTimeout(() => {
            buttonDesign.classList.add("boton-barra-click");
        }, "700")
    }

    $('#ventana-max').click(function () {
        $('.codigo-general').toggleClass('fullscreen');
    });

    /*function checkWindow() {
        setTimeout(() => {
            const findClass = document.getElementById('ventanaId');
            if (findClass.classList.contains('fullscreen')) {
                minimizar();
            }
        }, "700")
    }*/

});