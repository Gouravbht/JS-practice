var rect = document.querySelector("#center");
rect.addEventListener("mousemove", function (details) {
  var rectanglelocation = rect.getBoundingClientRect();
  var insiderectval = details.clientX - rectanglelocation.left;

  if (insiderectval < rectanglelocation.width / 2) {
    var redcolor = gsap.utils.mapRange(
      insiderectval,
      0,
      rectanglelocation.width / 2,
      0,
      255
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redcolor},0,0)`,
      ease: Power4.easeInOut,
      duration: 0.1, // Adjust the duration for a smoother color transition.
    });
  } else {
    var bluecolor = gsap.utils.mapRange(
      insiderectval,
      rectanglelocation.width / 2,
      rectanglelocation.width,
      0,
      255
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${bluecolor})`,
      ease: Power4.easeInOut,
      duration: 0.1, // Adjust the duration for a smoother color transition.
    });
  }
});

rect.addEventListener("mouseleave", function () {
  gsap.to(rect, {
    backgroundColor: "white",
    duration: 0.3, // Adjust the duration for a smoother color transition.
  });
});
