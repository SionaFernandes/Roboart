//counter
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = 5;

    //Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = count + inc;
      // Call function every ms
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

//swiper
var mySwiper = new Swiper(".swiper-container.by", {
  loop: true,
  slidesPerView: 1.2,
  breakpoints: {
    // when window width is >= 640px
    768: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});
var mySwiper = new Swiper(".swiper-container.testimonials", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination.testimonials",
  },
  breakpoints: {
    // when window width is >= 640px
    768: {
      slidesPerView: 1.5,
      spaceBetween: 40,
    },
  },
});
