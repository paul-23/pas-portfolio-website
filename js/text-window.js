const conocimientosP = document.querySelector('.texto-conocimientos');
const progressProgramacion = document.querySelector('.progressProgramacion');
const barraGP = document.querySelector('.barraGeneralP');

const conocimientosD = document.querySelector('.texto-conocimientosD');
const progressDesign = document.querySelector('.progressDesign');
const barraGD = document.querySelector('.barraGeneralD');

const ventanaP = document.querySelector('.vcp');
const ventanaD = document.querySelector('.vcd');

function mostrarConocimientos() {
   if (ventanaP.classList.contains("displayNone")) {
      ventanaP.classList.remove("displayNone");
      ventanaD.classList.add("displayNone");
   }

   if (!ventanaD.classList.contains("displayNone")) {
      ventanaD.classList.add("displayNone");
   }

   if (conocimientosP.classList.contains("display")) {
      $('.texto-conocimientos').toggleClass('display', 3000);
   }

   if (progressProgramacion.classList.contains("display")) {
      $('.progressProgramacion').toggleClass('display', 3000);
   }

   if (barraGP.classList.contains("display")) {
      $('.barraGeneralP').toggleClass('display', 3000);
   }

   $(".barraReactNative").animate({
      width: "70%"
   }, 1000);

   $(".barraHTML").animate({
      width: "95%"
   }, 1000);

   $(".barraCSS").animate({
      width: "90%"
   }, 1000);

   $(".barraJAVA").animate({
      width: "40%"
   }, 1000);

   $(".barraJS").animate({
      width: "75%"
   }, 1000);

   if (!conocimientosD.classList.contains("display")) {
      $('.texto-conocimientosD').toggleClass('display', 3000);
   }

   if (!progressDesign.classList.contains("display")) {
      $('.progressDesign').toggleClass('display', 3000);
   }

   if (!barraGD.classList.contains("display")) {
      $('.barraGeneralD').toggleClass('display', 3000);
   }
}

function mostrarDesign() {
   if (ventanaD.classList.contains("displayNone")) {
      ventanaD.classList.remove("displayNone");
      ventanaP.classList.add("displayNone");
   }

   if (!ventanaP.classList.contains("displayNone")) {
      ventanaP.classList.add("displayNone");
   }

   if (conocimientosD.classList.contains("display")) {
      $('.texto-conocimientosD').toggleClass('display', 3000);
   }

   if (progressDesign.classList.contains("display")) {
      $('.progressDesign').toggleClass('display', 3000);
   }

   if (barraGD.classList.contains("display")) {
      $('.barraGeneralD').toggleClass('display', 3000);
   }

   $(".barraPhotoShop").animate({
      width: "80%"
   }, 1000);

   $(".barraLightRoom").animate({
      width: "70%"
   }, 1000);

   $(".barraIllustrator").animate({
      width: "60%"
   }, 1000);

   $(".barraVideo").animate({
      width: "75%"
   }, 1000);

   if (!conocimientosP.classList.contains("display")) {
      $('.texto-conocimientos').toggleClass('display', 3000);
   }

   if (!progressProgramacion.classList.contains("display")) {
      $('.progressProgramacion').toggleClass('display', 3000);
   }

   if (!barraGP.classList.contains("display")) {
      $('.barraGeneralP').toggleClass('display', 3000);
   }

   /* ----------------------------------------------------- */
}

window.addEventListener('scroll', function alturaPaginaFunction1() {
   const buttonDesign = document.querySelector('#barra-design');
   const sectionHome = document.querySelector('.home');
   if (window.pageYOffset >= sectionHome.clientHeight - 120) {
      mostrarConocimientos();
      window.removeEventListener('scroll', alturaPaginaFunction1);
      setTimeout(() => {
         buttonDesign.classList.add("boton-barra-click");
         setTimeout(() => {
            buttonDesign.classList.remove("boton-barra-click");
         }, "9400")
      }, "1000")
   }
});

window.addEventListener('scroll', function alturaPaginaFunction() {
   const nav = document.querySelector('.barra-navegacion');
   const sectionHome = document.querySelector('.home');
   if (window.pageYOffset >= sectionHome.clientHeight - 60) {
      nav.classList.add("barra-navegacion-blanco");
      nav.classList.remove("navbar-dark");
      nav.classList.add("navbar-light");
      nav.classList.add("add-shadow");
   } else {
      nav.classList.remove("barra-navegacion-blanco");
      nav.classList.add("navbar-dark");
      nav.classList.remove("navbar-light");
      nav.classList.remove("add-shadow");
   }
});

window.onhashchange = function () {
   var scrollV,
      scrollH,
      loc = window.location;
   if ("pushState" in history)
      history.pushState("", document.title, loc.pathname + loc.search);
   else {
      scrollV = document.body.scrollTop;
      scrollH = document.body.scrollLeft;

      loc.hash = "";

      document.body.scrollTop = scrollV;
      document.body.scrollLeft = scrollH;
   }
};

/* ----------------------------------------------------------- */


const botonMax = document.querySelector('.codigo-general');


/* ----------------------------------------------------------- */


$("body").keydown(function (e) {
   if (botonMax.classList.contains("fullscreen")) {
      if (e.keyCode == 27) {
         botonMax.classList.remove("fullscreen");
      }
   }
});


/* ----------------------------------------------------------- */

document.addEventListener('scroll', function (event) {
   if (botonMax.classList.contains("fullscreen")) {
      botonMax.classList.remove("fullscreen");
   }
}, true);