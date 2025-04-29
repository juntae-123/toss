gsap.registerPlugin(ScrollTrigger);

const niceScroll = gsap.timeline({
  scrollTrigger: {
    trigger: ".nice__container",
    start: "top 40%",
    end: "bottom top",
  },
});

niceScroll.fromTo(
  ".nice__box--text",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);

niceScroll.fromTo(
  ".nice__img",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);
