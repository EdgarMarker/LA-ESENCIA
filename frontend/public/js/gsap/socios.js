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
  var tl = gsap.timeline();

  tl.from("h1", {
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

  const leftImg = document.querySelector("#discoverPueblitoUl li:first-child");
  const rightImg = document.querySelector("#discoverPueblitoUl li:last-child");

  gsap.to(leftImg, {
    y: "15%",
    ease: "power1.out",
    scrollTrigger: {
      trigger: "#section__discoverPueblito",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });

  gsap.to(rightImg, {
    y: "-15%",
    ease: "power1.out",
    scrollTrigger: {
      trigger: "#section__discoverPueblito",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
}