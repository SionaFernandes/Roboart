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
  slidesPerView: 5,
});
var mySwiper = new Swiper(".swiper-container.testimonials", {
  loop: true,
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination.testimonials",
  },
});

