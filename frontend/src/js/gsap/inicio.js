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
      ease: "power1.in",
      scrollTrigger: {
        trigger: ".greca",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        
      }
    })
    

  //Intro Divider animation
  /*const leftDivider = document.getElementById("home-left-intro-animation");
  const rightDivider = document.getElementById("home-right-intro-animation");

  const tlIntro = gsap.timeline();

  tlIntro.from([leftDivider, rightDivider], {
    opacity: 0,
    x: function (index, target) {
      return target === leftDivider ? "-100%" : "100%";
    },
    scrollTrigger: {
      trigger: "#section__introDivider",
      start: "25% bottom",
      end: "70% bottom",
      scrub: 1,
      onLeave: () => {
        let left = "#home-left-intro-animation > li:last-child";
        let right = "#home-right-intro-animation > li:last-child";

        gsap.to(left, {
          x: "-100%",
          duration: 1,
        });
        gsap.to(right, {
          x: "100%",
          duration: 1,
        });
      },
      onEnterBack: () => {
        let left = "#home-left-intro-animation > li:last-child";
        let right = "#home-right-intro-animation > li:last-child";

        gsap.to([left, right], {
          x: 0,
          duration: 1,
        });
      },
    },
  });*/

  gsap.to(".sello__wrapper", {
    rotation: 360 * 2,
    duration: 1,
    ease: "none",
    scrollTrigger: {
      trigger: "#section__introDivider",
      start: "top bottom%",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to("#home-left-intro-animation", {
    x: 0,
    opacity: 1,
    ease: "power1.in",
    scrollTrigger: {
      trigger: "#carousel-1",
      start: "top 80%",
      end: "50% 80%",
      scrub: 1,
    }
  })

  gsap.to("#home-left-intro-animation > li:first-child", {
    xPercent: -100,
    opacity: 1,
    ease: "power1.in",
    scrollTrigger: {
      trigger: "#carousel-1",
      start: "50% 60%",
      end: "bottom 60%",
      scrub: 1,
    }
  })


  gsap.to("#home-right-intro-animation", {
    x: 0,
    opacity: 1,
    ease: "power1.in",
    scrollTrigger: {
      trigger: "#carousel-2",
      start: "top 80%",
      end: "50% 80%",
      scrub: 1,
    }
  })

  gsap.to("#home-right-intro-animation > li:first-child", {
    xPercent: 100,
    opacity: 1,
    ease: "power1.in",
    scrollTrigger: {
      trigger: "#carousel-2",
      start: "50% 60%",
      end: "bottom 60%",
      scrub: 1,
    }
  })



  // intro discover pueblito
/*
  const tlDiscover = gsap.timeline();

  const leftDiscover = "#discoverPueblitoUl > li:first-child";
  const rightDiscover = "#discoverPueblitoUl > li:last-child";
  const containerDiscover = "#section__discoverPueblito";

  tlDiscover.to([leftDiscover, rightDiscover], {
    y: 0,
    ease: 'power2.InOut',
    scrollTrigger: {
      trigger: containerDiscover,
      start: "40% bottom",
      end: "80% bottom",
      scrub: true,
    },
  });
*/

const leftImg = document.querySelector("#discoverPueblitoUl li:first-child");
const rightImg = document.querySelector("#discoverPueblitoUl li:last-child");

leftImg.setAttribute("data-speed", "1.2");
rightImg.setAttribute("data-speed", "0.8");

  // gallery divider

  const tlGalleryDivider = gsap.timeline();

  const topImg1 = "#placeToBeGallery > li:nth-child(1) > picture:first-child";
  const bottomImg1 = "#placeToBeGalleryLi > picture:last-child";

  const topImg2 = "#placeToBeGallery > li:nth-child(2) > picture:first-child";
  const bottomImg2 = "#placeToBeGallery > li:nth-child(2) > picture:last-child";

  const topImg3 = "#placeToBeGallery > li:nth-child(3) > picture:first-child";
  const bottomImg3 = "#placeToBeGallery > li:nth-child(3) > picture:last-child";

  const scrollTriggerOptions = {
    trigger: "#placeToBeGallery",
    start: "top bottom",
    end: "80% bottom",
    scrub: true,
  };

  tlGalleryDivider.from(topImg1, {
    x: "-50%",
    opacity: 0,
    scrollTrigger: { ...scrollTriggerOptions, }
  })
  .from(bottomImg1, {
    x: "-100%",
    y: "50%",
    opacity: 0,
    scrollTrigger: { ...scrollTriggerOptions, }
  }, "+=1.2")
  .from(topImg2, {
    y: "-50%",
    opacity: 0,
    scrollTrigger: {...scrollTriggerOptions}
  }, "-=1.2")
  .from(topImg3, {
    x: "100%",
    opacity: 0,
    scrollTrigger: {...scrollTriggerOptions}
  }, "-=0.4")
  .from(bottomImg3, {
    x: "100%",
    opacity: 0,
    scrollTrigger: {...scrollTriggerOptions}
  }, "+=0.4")
  .from(bottomImg2, {
    y: "100%",
    opacity: 0,
    scrollTrigger: {...scrollTriggerOptions}
  }, "+=0.4")
  .from("#placeToBeGalleryLi > picture:nth-child(2)", {
    x: "-100%",
    opacity: 0,
  })
}
