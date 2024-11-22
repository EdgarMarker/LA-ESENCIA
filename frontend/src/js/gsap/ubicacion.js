// Btn ScrollTo:
const heroBtn = document.querySelector('#section__hero .btn');
heroBtn.addEventListener('click', () => {
    gsap.to(window, { duration: 0.5, scrollTo: "#section__intro", ease: "power4.out"});
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
        ease: "power1.out"
    })
    .from("h2", {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power1.out"
    }, "-=0.2")
    .from("p", {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power1.out"
    }, "-=0.2")
    .from("#section__hero .btn", {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power1.out"
    }, "-=0.2")
    .from("#section__hero picture", {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power1.out"
    }, "-=0.8");




    // Giro del sello
    gsap.to(".sello__wrapper", {
        rotation: 360 * 2,
        duration: 1,
        ease: "none",
        scrollTrigger: {
        trigger: "#section__discoverBenefits",
        start: "top bottom%",
        end: "bottom top",
        scrub: true,
        },
    });

    gsap.from("#section__haveAll .col__right picture:last-child", {
        x: "100%",
        ease: "power4.out",
        scrollTrigger: {
            trigger: "#section__haveAll",
            start: "top bottom",
            end: "80% top",
            scrub: 1,
        }
    })

     // Imagen desfazada se mueve hacia la derecha
  const cutRight = document.querySelector(".dual__img__wrapper picture:first-child");

  gsap.to(cutRight, {
    x: "-20%",
    scrollTrigger: {
      trigger:"#section__intro",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    }
  })

}