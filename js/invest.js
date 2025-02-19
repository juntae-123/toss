gsap.registerPlugin(ScrollTrigger);

const investSc = gsap.timeline({
  scrollTrigger: {
    trigger: ".invest__container",
    start: "top 40%",
    end: "bottom bottom",
  },
});

investSc.fromTo(
  ".invest__main--text",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1 }
);
investSc.fromTo(
  ".invest__main--img",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1 }
);
investSc.fromTo(
  ".invest__img--textOwn",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1 }
);
investSc.fromTo(
  ".invest__img--textTwo",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1 }
);
investSc.fromTo(
  ".invest__last--text--box",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1 }
);
