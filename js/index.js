const t1 = gsap.timeline();
t1.fromTo(".main__text", { opacity: 0 }, { opacity: 1, duration: 5 });
t1.fromTo(".main__btn", { opacity: 0 }, { opacity: 1, duration: 5 }, "<");
