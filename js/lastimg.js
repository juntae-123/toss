gsap.registerPlugin(ScrollTrigger);

const lastImg = gsap.timeline({
  ScrollTrigger: {
    trigger: ".business__container",
    start: "top 70%",
    end: "bottom top",
  },
});

lastImg.fromTo(".business__img", { y: 80, opacity: 0 }, { y: 0, opacity: 1 });
lastImg.fromTo(
  ".business__text--box",
  { y: 80, opacity: 0 },
  { y: 0, opacity: 1 }
);
lastImg.fromTo(
  ".business__card--own",
  { y: 80, opacity: 0 },
  { y: 0, opacity: 1 }
);
