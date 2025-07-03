let crsr = document.querySelector("#cursor");
// const mouseHover = document.querySelectorALL(".mouse-hover");
let cardHover = document.querySelector(".card-1");
document.addEventListener("mousemove", function (e) {
  gsap.to(crsr, {
    x: e.x,
    y: e.y,
    duration: 2.5,
    ease: "elastic.out(1,0.3)",
  });
});

// cardHover.addEventListener("mouseenter", function () {
//   gsap.to("#cursor", {
//     height: "75px",
//     width: "75px",
//     backgroundColor:"transparent",
//     border:"2px solid #fff"
//   });
// });
// cardHover.addEventListener("mouseleave", function () {
//   gsap.to("#cursor", {
//     height: "25px",
//     width: "25px",
//   });
// });

// let crsrblur = document.querySelector("#cursor-blur");
// document.addEventListener("mousemove", function (e) {
//   gsap.to(crsrblur, {
//     x: e.clientX,
//     y: e.clientY,
//     duration: 2.5,
//     ease: "elastic.out(1,0.3)",
//   });
// });

gsap.to("nav", {
  backgroundColor: "#000",
  height: "110px",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    // markers: true,
    start: "top-10%",
    scrub: 1,
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -50%",
    end: "top -100%",
    scrub: 1,
  },
});

gsap.from(".bottom-part h1", {
  y: 50,
  scrollTrigger: {
    trigger: ".bottom-part h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

gsap.from(".about-content h1", {
  y: 50,
  scrollTrigger: {
    trigger: ".about-content h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

gsap.from(".left-side img", {
  x: -50,
  scrollTrigger: {
    trigger: ".left-side img",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 2,
  },
});
gsap.from(".right-side img", {
  x: 50,
  scrollTrigger: {
    trigger: ".left-side img",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 2,
  },
});
gsap.from(".crop-third-img img", {
  x: -50,
  scrollTrigger: {
    trigger: ".crop-third-img img",
    scroller: "body",
    // markers:true,
    duration: .4,
    scrub: 4,
  },
});
gsap.from(".crop-first-img img", {
  x: 50,
  scrollTrigger: {
    trigger: ".crop-first-img img",
    scroller: "body",
    // markers:true,
    duration: .4,
    scrub: 4,
  },
});
gsap.from(".crop-seconde-img img", {
  y: 50,
  scrollTrigger: {
    trigger: ".crop-seconde-img img",
    scroller: "body",
    // markers:true,
    duration: .4,
    scrub: 4,
  },
});
