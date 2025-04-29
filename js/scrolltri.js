gsap.registerPlugin(ScrollTrigger);

const scrollMob = gsap.timeline({
  scrollTrigger: {
    trigger: ".home__consumption--layout",
    start: "top 40%",
    end: "bottom top",
  },
});
const scrollMob1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home__consumption--layout",

    start: "top 50%",
    end: "bottom top",
  },
});

scrollMob1.fromTo(
  ".myme",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);
scrollMob1.fromTo(
  ".home_c",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  "<"
);

scrollMob.fromTo(
  ".toss_mob-li",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);
scrollMob.fromTo(
  ".toss_mob-li-frame",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  "<"
);

scrollMob.fromTo(
  ".toss_mob-li--two",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);
scrollMob.fromTo(
  ".toss_mob-li-frame--two",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  "<"
);
