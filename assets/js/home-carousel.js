// Carousel Part

const carouselBox = document.getElementById('carousel'),
  sliderBox = document.getElementById('slider'),
  cardBox = $(".cards"),
  prevBtn = document.getElementById('prev'),
  nextBtn = document.getElementById('next');

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
    index = 0,
    allowShift = true;

    setInterval(function() {
      shiftSlide(1)
      slideSize = slider.getElementsByClassName('cards')[0].offsetWidth;
    }, 5000);

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

    allowShift = false;
  }

  function checkIndex() {
    slider.classList.remove('shifting');

    if (index == -1) {
      slider.style.left = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
    }

    if (index == slidesLength) {
      slider.style.left = -(1 * slideSize) + "px";
      index = 0;
    }

    allowShift = true;
  }
}

carouselFunction(carouselBox, sliderBox, prevBtn, nextBtn);
