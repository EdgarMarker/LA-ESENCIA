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

  gsap.to(".intro__picture__bg:first-child", {
    y: 150,
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".dualHorizon__img__wrapper",
      start: "top bottom",
      end: "center top",
      scrub: true,
    },
  });

  //Pin vertical scroll

  let mm = gsap.matchMedia();
  // Desktop
  mm.add("(min-width: 1025px)", () => {
    gsap.to("#pinRight__spaCarousel", {
      scrollTrigger: {
        pin: "#pinRight__spaCarousel",
        trigger: "#pinStart__spaCarousel",
        start: "top top",
        end: "top bottom",
        endTrigger: "#section__adventureCarousel",
        pinSpacing: false,
      },
    });

    let li = gsap.utils.toArray(".spaCarousel__card");
    let img = gsap.utils.toArray(".spaCarousel__img");
    img.forEach((item, idx) => {
      gsap.to(item, {
        x: `100%`,
        ease: "power4.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: li[idx],
          start: "top center",
          end: `120% center`,
          scrub: true,
        },
      });
    });
  });

  // Mobile

  mm.add("(max-width: 1024px)", () => {
    const sections2 = gsap.utils.toArray("#pinStart__spaCarousel");
    const snapBloque = gsap.utils.toArray(".spaCarousel__card");
    //let dataWidth = gsap.getProperty(".pin__start .col__left", "width");

    let maxWidth = 0;
    sections2.forEach((section2) => {
      maxWidth += section2.offsetWidth;
    });

    gsap.to(sections2, {
      x: () => `-${maxWidth - window.innerWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: "#section__spaCarousel",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        start: "top 60",
        end: () => `+=${maxWidth}`,
        snap: {
          snapTo: 1 / (snapBloque.length - 1),
          inertia: true,
          duration: { min: 0.1, max: 0.2 },
        },
      },
    });

    let li = gsap.utils.toArray(".spaCarousel__card");
    let img = gsap.utils.toArray(".spaCarousel__img");
    img.forEach((item, idx) => {
      gsap.to(item, {
        x: `100%`,
        ease: "power4.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: li[idx],
          start: `${li[idx].offsetLeft + (window.innerWidth * 0) / 100}px top`,
          end: `${li[idx].offsetLeft + (window.innerWidth * 100) / 100}px top`,
          scrub: true,
        },
      });
    });

    //start: "top 50%",
    //end: "bottom 50%",
    //start: `${(document.querySelector("#section__intro").offsetLeft + (window.innerWidth * 0 / 100) )}px center`,
    //end: `${(document.querySelector(".value:nth-child(2)").offsetLeft + (window.innerWidth * 100 / 100) )}px center`,
  });
}
