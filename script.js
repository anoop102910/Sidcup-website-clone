const cursor = document.getElementById("cursor");
console.log(cursor);
document.addEventListener("mousemove", (coordinates) => {
  cursor.style.left = coordinates.x + "px";
  cursor.style.top = coordinates.y + "px";
});

gsap.to("header", {
  backgroundColor: "black",
  height: "5rem",
  scrollTrigger: {
    trigger: "#header",
    scroller: "body",
    start: "top -1%",
    end: "top -30%",
    scrub: 1,
  },
});

gsap.to("main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "main",
    scroller: "body",
    start: "top -20%",
    end: "top -100%",
    scrub: 3,
  },
});

gsap.from("#about-section img,#about-section #content", {
  y: 100,
  opacity: 0,
  duration: 2,
  stagger: 0.4,
  scrollTrigger: {
    // markers:'true',
    trigger: "#about-section",
    scroller: "body",
    start: "top 50%",
  },
});

gsap.from("#about-card-container ", {
  x: 200,
  opacity: 0,
  stagger: 0.4,
  duration: 3,
  scrollTrigger: {
    // markers: true,
    trigger: "#about-card-container",
    scroller: "body",
    start: "top 60%",
  },
});

gsap.from("#food-section img", {
  x: -200,
  opacity: 0,
  stagger: 0.4,
  duration: 0.9,
  scrollTrigger: {
    // markers: true,
    scroller: "body",
    trigger: "#food-section",

    start: "top 60%",
  },
});

gsap.from("#food-section #food-content", {
  x: 200,
  opacity: 0,
  stagger: 0.4,
  duration: 0.9,
  scrollTrigger: {
    trigger: "#food-section",
    scroller: "body",
    start: "top 60%",
  },
});

gsap.from("#reviews-section #comma-1", {
  x:-50,
  y:-50,
  opacity: 0,
  stagger: 0.4,
  duration: 2,
  scrollTrigger: {
    trigger: "#reviews-section",
    scroller: "body",
    start: "top 60%",
    scrub:1,
  },
});
gsap.from("#reviews-section #comma-2", {
  x:50,
  y:50,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#reviews-section",
    scroller: "body",
    start: "top 60%",
    scrub:1,
  },
});

gsap.from("#special-heading ", {
  top:100,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    // markers:true,
    trigger: "#special-heading",
    scroller: "body",
    start: "top 80%",
  },
});