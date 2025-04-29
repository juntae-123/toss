gsap.registerPlugin(ScrollTrigger);

const photo = gsap.timeline({
  scrollTrigger: {
    scale: 0.3,
    scrub: true,
    trigger: ".main__img--layout--big",
    start: "top bottom",
    end: "top top",
    marker: true,
  },
});

photo.fromTo(".main__img--layout--big", { scale: 0.5 }, { scale: 1.1 });
