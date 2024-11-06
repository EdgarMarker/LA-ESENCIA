// Btn ScrollTo:
const heroBtn = document.querySelector("#section__hero .btn");
heroBtn.addEventListener("click", () => {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: "#section__intro",
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
    )
    .from(
      "#section__hero picture",
      {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power1.out",
      },
      "-=0.8"
    );

  //Intro Divider animation
  const left = document.getElementById("home-left-intro-animation");
  const right = document.getElementById("home-right-intro-animation");

  let tlIntro = gsap.timeline();

  tlIntro.from([left, right], {
    opacity: 0,
    x: function (index, target) {
      return target === left ? "-100%" : "100%";
    },
    scrollTrigger: {
      trigger: "#section__introDivider",
      start: "25% bottom",
      end: "80% bottom",
      markers: true,
        scrub: 1,
    },
  });
}
