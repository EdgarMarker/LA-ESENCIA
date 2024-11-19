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

    gsap.to(".intro__picture__bg:first-child", {
        y: 150,
        ease: "power4.in",
        scrollTrigger: {
          trigger: ".dualHorizon__img__wrapper",
          start: "top bottom",
          end: "center top",
          scrub: true,
        },
      });



    // gallery divider

    const tlGalleryDivider = gsap.timeline();

    const topImg1 = "#placeToBeGallery > li:nth-child(1) > picture:first-child";
    const bottomImg1 = "#placeToBeGalleryLi > picture:nth-child(2)";

    const topImg2 = "#placeToBeGallery > li:nth-child(2) > picture:first-child";
    const bottomImg2 = "#placeToBeGallery > li:nth-child(2) > picture:last-child";

    const topImg3 = "#placeToBeGallery > li:nth-child(3) > picture:nth-child(2)";
    const bottomImg3 = "#placeToBeGallery > li:nth-child(3) > picture:nth-child(3)";

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