// Btn ScrollTo:
const heroBtn1 = document.querySelector("#btnForm");
heroBtn1.addEventListener("click", () => {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: "#formSection",
    ease: "power4.out",
  });
});

const preBtn = document.querySelector('#btn__preFoot');
preBtn.addEventListener('click', () => {
    gsap.to(window, { duration: 0.5, scrollTo: "#formSection", ease: "power4.out"});
});

const conoceBtn = document.querySelector('#conoce__btn');
conoceBtn.addEventListener('click', () => {
    gsap.to(window, { duration: 0.5, scrollTo: "#formSection", ease: "power4.out"});
});

const detallesBtn = document.querySelector('#detalles__btn');
detallesBtn.addEventListener('click', () => {
    gsap.to(window, { duration: 0.5, scrollTo: "#formSection", ease: "power4.out"});
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
    },
  });

  const leftImg = document.querySelector("#discoverPueblitoUl li:first-child");
  const rightImg = document.querySelector("#discoverPueblitoUl li:last-child");

  const mm = gsap.matchMedia();
  mm.add("(min-width: 1024px)", () => { 

    gsap.to(leftImg, {
      y: "15%",
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#section__discoverPueblito",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    })
    
    gsap.to(rightImg, {
      y: "-15%",
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#section__discoverPueblito",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    })
  })
}
