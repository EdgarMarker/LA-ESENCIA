// Btn ScrollTo:
const heroBtn = document.querySelector('#section__hero .btn');
heroBtn.addEventListener('click', () => {
    gsap.to(window, { duration: 0.5, scrollTo: "#section__happyPlace", ease: "power4.out"});
});