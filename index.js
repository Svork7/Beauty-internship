$('.menu__btn').on('click', function () {
  $('.top__menu-list').toggleClass('.top__menu-list--active')
})

$('.menu__btn').addClass('unToggled')
$('.menu__btn').click(function () {
  $(this).toggleClass('toggled')
  $(this).toggleClass('unToggled')

  // also open menu here...
})
