let index = 0;

window.onload = setInterval(function() {
  if (index >= 2280) {
    index = 0;
  }
  $(".thS-body2").scrollLeft(index);
  index += 380;
}, 2000);

// Pop Up Part

$(".popUp").click(()=> {
   popUp();
});

function popUp() {
  Swal.fire({
      position: 'center',
      background: "rgba(14, 15, 17, 1)",
      icon: 'info',
      iconColor: "#4D96FF",
      title: 'Coming Soon!',
      text: `Get ready! Something really cool is coming!`,
      showConfirmButton: false,
      timer: 2500
    });
  }

// Carousel Part

const carouselBox = document.getElementById('carousel'),
  sliderBox = document.getElementById('slider'),
  cards = $(".cards"),
  prevBtn = document.getElementById('prev'),
  nextBtn = document.getElementById('next');

// Container Part

$(".carBox").click(function() {
  let index = $(this).index();
  let carBox = document.getElementsByClassName("carBox");
  for (let j = 0; j < 3; j++) {
    carBox[j].classList.remove('active');
  }
  $("#slider").empty();
  if (index == 0) {
    carBox[index].classList.add('active');
    for (let i = 0; i < 5; i++) {
      $("#slider").append('<div class="f1-content cards"><img src="/images/miles-page/25KM-' + (i + 1) + '.png" alt="Ermin Miles 25km"></div>');
    }
  } else if (index == 1) {
    carBox[index].classList.add('active');
    for (let i = 0; i < 5; i++) {
      $("#slider").append('<div class="f1-content cards"><img src="/images/miles-page/50KM-' + (i + 1) + '.png" alt="Ermin Miles 50Km"></div>');
    }
  } else {
    carBox[index].classList.add('active');
    for (let i = 0; i < 5; i++) {
      $("#slider").append('<div class="f1-content cards"><img src="/images/miles-page/100KM-' + (i + 1) + '.png" alt="Ermin Miles 100km"></div>');
    }
  }
  carouselFunction(carouselBox, sliderBox, prevBtn, nextBtn);
});


function carouselFunction(carousel, slider, prev, next) {
  var posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    threshold = 100,
    gridGap = 0,
    cards = slider.getElementsByClassName('cards'),
    slidesLength = cards.length,
    slideSize = slider.getElementsByClassName('cards')[0].offsetWidth,
    firstSlide = cards[0],
    lastSlide = cards[slidesLength - 1],
    cloneFirst = firstSlide.cloneNode(true),
    cloneLast = lastSlide.cloneNode(true),
    // carBox = carousel.getElementsByClassName("carBox"),
    navBtn = carousel.getElementsByClassName("navBtn"),
    index = 0,
    allowShift = true;

    setInterval(function() {
      slideSize = slider.getElementsByClassName('cards')[0].offsetWidth;
    }, 3000);

  // Clone first and last slide
  slider.appendChild(cloneFirst);
  slider.insertBefore(cloneLast, firstSlide);
  carousel.classList.add('loaded');

  // Mouse events
  slider.onmousedown = dragStart;

  // Touch events
  slider.addEventListener('touchstart', dragStart);
  slider.addEventListener('touchend', dragEnd);
  slider.addEventListener('touchmove', dragAction);

  // Click events
  prev.addEventListener('click', function() {
    shiftSlide(-1)
  });
  next.addEventListener('click', function() {
    shiftSlide(1)
  });

  //  Nav Events
  $(".navBtn").click(function() {
    // carBox[index].classList.remove('active');
    navBtn[index].classList.remove('current');
    slider.classList.add('shifting');
    index = $(this).index();
    slider.style.left = -((index + 1) * (gridGap + slideSize)) + "px";
    // carBox[index].classList.add('active');
    navBtn[index].classList.add('current');
  });

  // Transition events
  slider.addEventListener('transitionend', checkIndex);

  function dragStart(e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = slider.offsetLeft;

    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction(e) {
    e = e || window.event;

    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    slider.style.left = (slider.offsetLeft - posX2) + "px";
  }

  function dragEnd(e) {
    posFinal = slider.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
      slider.style.left = (posInitial) + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }

  function shiftSlide(dir, action) {
    slider.classList.add('shifting');
    // carBox[index].classList.remove('active');
    navBtn[index].classList.remove('current');

    if (allowShift) {
      if (!action) {
        posInitial = slider.offsetLeft;
      }

      if (dir == 1) {
        slider.style.left = (posInitial - slideSize - gridGap) + "px";
        index++;
      } else if (dir == -1) {
        slider.style.left = (posInitial + slideSize + gridGap) + "px";
        index--;
      }
    };

    if (dir == 1) {
      if ((posInitial%slideSize) != 0) {
          slider.style.left = posInitial - (posInitial%slideSize) + "px";
      }
    } else {
      if ((posInitial%slideSize) != 0) {
          slider.style.left = posInitial + (posInitial%slideSize) + "px";
      }
    }



    if (index == -1) {
      // carBox[slidesLength - 1].classList.add('active');
      navBtn[slidesLength - 1].classList.add('current');
    } else if (index < slidesLength) {
      // carBox[index].classList.add('active');
      navBtn[index].classList.add('current');
    } else {
      // carBox[0].classList.add('active');
      navBtn[0].classList.add('current');
    }

    allowShift = false;
  }

  function checkIndex() {
    slider.classList.remove('shifting');

    if (index == -1) {
      slider.style.left = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
      // carBox[index].classList.add('active');
      navBtn[index].classList.add('current');
    }

    if (index == slidesLength) {
      slider.style.left = -(1 * slideSize) + "px";
      index = 0;
    }

    allowShift = true;
  }
}

carouselFunction(carouselBox, sliderBox, prevBtn, nextBtn);
