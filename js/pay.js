gsap.registerPlugin(ScrollTrigger);

const payScrol = gsap.timeline({
  scrollTrigger: {
    trigger: ".pay__container",
    start: "top 40%",
    end: "bottom top",
  },
});

payScrol.fromTo(".pay__text--box", { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
payScrol.fromTo(
  ".pay__img--container--own",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1 }
);
payScrol.fromTo(
  ".pay__img--text-taas",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1 },
  "<"
);
payScrol.fromTo(
  ".pay__img--container",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1 }
);
payScrol.fromTo(
  ".pay__img--text-taas--sub",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1 },
  "<"
);
