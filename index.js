$('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active')
})

$('.menu__btn').addClass('unToggled')
$('.menu__btn').click(function () {
  $(this).toggleClass('toggled')
  $(this).toggleClass('unToggled')

  // also open menu here...
})
