gsap.registerPlugin(ScrollTrigger);

const lifeSc = gsap.timeline({
  scrollTrigger: {
    trigger: ".life__container",
    start: "top 40%",
    end: "20% top",
    scrub: true,
  },
});
const lifeStext = gsap.timeline({
  scrollTrigger: {
    trigger: ".life__book",
    start: "top top",
    end: "bottom bottm",
    scrub: true,
  },
});

const lifeScown = gsap.timeline({
  scrollTrigger: {
    trigger: ".life__mobi--img--box",
    start: "top 80%",
    end: "20% top",
    scrub: true,
  },
});

const lifeSctextown = gsap.timeline({
  scrollTrigger: {
    trigger: ".life__mobi--img",
    start: "20% top",
    end: "50% top",
    scrub: true,
  },
});

const lifeScsubimg = gsap.timeline({
  scrollTrigger: {
    trigger: ".life__three--box",
    start: "top 80%",
    end: "20% top",
    scrub: true,
  },
});

const lifeScsubimgtex = gsap.timeline({
  scrollTrigger: {
    trigger: ".life__three--box",
    start: "top top",
    end: "50% top",
    scrub: true,
  },
});

lifeSc.fromTo(".life__book", { opacity: 0 }, { opacity: 1 });
lifeStext.fromTo(".life--sub--text--box", { opacity: 0 }, { opacity: 1 });
lifeScown.fromTo(".life__mobi--img", { opacity: 0 }, { opacity: 1 });
lifeScown.fromTo(".life__mobi--img--two", { opacity: 0 }, { opacity: 1 });
lifeScown.fromTo(
  ".life__mobi--img--two--text",
  { opacity: 0 },
  { opacity: 1 },
  "<"
);
lifeSctextown.fromTo(
  ".life__mobi--img--box--own--text",
  { opacity: 0 },
  { opacity: 1 }
);
lifeSctextown.fromTo(
  ".life__mobi--img--box--own--text-sub",
  { opacity: 0 },
  { opacity: 1 },
  "<"
);
lifeScsubimg.fromTo(".life__three--img", { opacity: 0 }, { opacity: 1 });
lifeScsubimgtex.fromTo(
  ".life__three--text--layou--bo",
  { opacity: 0 },
  { opacity: 1 }
);
