// Btn ScrollTo:
const heroBtn1 = document.querySelector("#btn__hero1");
const heroBtn2 = document.querySelector("#btn__hero2");

heroBtn1.addEventListener("click", () => {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: "#section__intro",
    ease: "power4.out",
  });
});

heroBtn2.addEventListener("click", () => {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: "#formSection",
    ease: "power4.out",
  });
});

gsapSoloAnimations();

// GSAP:
function gsapSoloAnimations() {
  // Hero animación:
  var tlHero = gsap.timeline();

  tlHero
    .from("h1", {
      opacity: 0,
      x: -50,
      duration: 0.5,
      delay: 1,
      ease: "power1.out",
    })
    .from(
      "h2",
      {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power1.out",
      },
      "-=0.2"
    )
    .from(
      "p",
      {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power1.out",
      },
      "-=0.2"
    )
    .from(
      "#section__hero .btn",
      {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power1.out",
      },
      "-=0.2"
    );

    gsap.to(".greca", {
      x: 0,
      ease: "linear",
      scrollTrigger: {
        trigger: ".greca",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    })

}