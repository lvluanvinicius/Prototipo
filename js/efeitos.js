$(document).ready(() => {

  // Inicio efeito do card de propaganda.
  $("section #section-part-1 .box-img-banner .img-banner").addClass('radius-banner');
  $("section #section-part-1 .box-img-banner").addClass('radius-banner');
  $("section #section-part-1 .box-propaganda-texto").addClass('box-propaganda-texto-position');
  setTimeout(function() {
    $("section #section-part-1 .box-propaganda-texto h2").removeClass('hidden');
    setTimeout(function() {
      $("section #section-part-1 .box-propaganda-texto p").removeClass('hidden');
      setTimeout(function () {
        $("section #section-part-1 .box-propaganda-texto a").removeClass('hidden').addClass('btn btn-custom-propaganda');
        setTimeout(function () {
          $("section #section-part-1 .box-propaganda-texto small").removeClass('hidden');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 2000);
  // Fim efeito do card de propaganda.

  // Início do OWL-Carousel.
  $('#owl-demo').owlCarousel({
      items : 1,
      loop : true,
      margin : 10,
      autoplay : true,
      autoplayTimeout : 2000,
      dots : false
  });

  // Inicio menu
  $("#bars a").on("click", () => {

    $("#menu-mobile").addClass("menu-open");

  });

  $("#bars-open a").on("click", () => {

    let teste = $("#menu-mobile");
    if(teste[0].className == "menu-open") {
      $("#menu-mobile").removeClass("menu-open");
      console.log(teste[0].className)
    }

  });
});
