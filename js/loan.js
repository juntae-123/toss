gsap.registerPlugin(ScrollTrigger);

const scrollLoan = gsap.timeline({
  scrollTrigger: {
    trigger: ".loan__container",

    start: "top 40%",
    end: "bottom top",
  },
});

// const swiper = new Swiper(".loan__mobail--layout", {
//   loop: true,
//   slidesPerView: 1,
//   pagination: {
//     el: ".loan__sub--imgBox--own",
//   },
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   speed: 800,
// });

scrollLoan.fromTo(
  ".loan__title",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);

scrollLoan.fromTo(
  ".loan__sub--title",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  "<"
);

scrollLoan.fromTo(
  ".loan__sub--imgBox",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);
scrollLoan.fromTo(
  ".loan__text--sub--two",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  "<"
);

scrollLoan.fromTo(
  "#loan__text--own",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);

scrollLoan.fromTo(
  "#loan__text--two",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);

scrollLoan.fromTo(
  "#loan__text--three",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);
