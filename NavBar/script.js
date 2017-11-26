$(document).ready(function() {

  // Base menu open/close (mobile)
  $('#bars').on('click', function(event) {
    event.preventDefault();
    var subMenu = $('#ul-items');
    if (!subMenu.hasClass('items-ul-open')) {
      subMenu.addClass('items-ul-open');
    } else {
      subMenu.removeClass('items-ul-open');
    }
  });
  // Base menu open/close (mobile)

  // Scroll page up
  $('#logo').on('click', function(event) {
    event.preventDefault();
    $('body,html').animate({scrollTop: 0}, 500);
  });
  // Scroll page up

  // Sub menu open/close
  $('.items-ul li:last-child > a').on('click', function(event) {
    event.preventDefault();
    var subMenu = $('.sub-menu');
    if (!subMenu.hasClass('show')) {
      subMenu.addClass('show');
    } else {
      subMenu.removeClass('show');
    }
  });
  // Sub menu open/close

  // Плавная прокрутка
  $('.items-ul > li a[href^="#"]').on("click", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
      //забираем идентификатор блока с атрибута href
      var id  = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
          var newTop = top - 65;
      //анимируем переход на расстояние - top за 800 мс
      $('body,html').animate({scrollTop: newTop}, 800);
  });
  // Плавная прокрутка


});
