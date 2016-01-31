for (i = 0; i < 5500; i += 1) {
  $('.canvas').append('<div class="square"></div>');
}

$('.square').on('mouseenter', function () {
  $(this).css('background-color', 'yellow');
})