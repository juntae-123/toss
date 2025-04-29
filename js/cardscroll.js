gsap.registerPlugin(ScrollTrigger);

const cardOw = gsap.timeline({
  scrollTrigger: {
    trigger: ".home__card--container",
    start: "top 40%",
    end: "bottom top",
  },
});

cardOw.fromTo(
  ".card__layout--box",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);
cardOw.fromTo(
  "#card__scroll--one",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);

cardOw.fromTo(
  "#card__scroll--two",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);
cardOw.fromTo(
  "#card__scroll--three",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);
