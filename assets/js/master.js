// Nav Bar & Menu Bar

const fullpageEl = document.getElementById('fullpage')
const menuBtn = document.querySelector('.menu__btn')
const navigation = document.querySelector('.navigation')
const navCloseBtn = document.querySelector('.navigation__close__btn')

const blurOverlay = document.querySelector('.blur__overlay')

const IS_ACTIVE = 'is--active'

const toggleNavigation = () => {
	navigation.classList.toggle(IS_ACTIVE)
	blurOverlay.classList.toggle(IS_ACTIVE)
	fullpageEl.classList.toggle('no-scroll')
}

const CLICK = 'click'

menuBtn.addEventListener(CLICK, toggleNavigation)
navCloseBtn.addEventListener(CLICK, toggleNavigation)
blurOverlay.addEventListener(CLICK, toggleNavigation)


// Footer Drop-Down

$("#explore").click(function() {
  $("#explore").toggleClass("exp-click");
  $("#explore + ul").toggleClass("exp-show");
});

$("#about").click(function() {
  $("#about").toggleClass("abt-click");
  $("#about + ul").toggleClass("abt-show");
});

$("#help").click(function() {
  $("#help").toggleClass("help-click");
  $("#help + ul").toggleClass("help-show");
});
