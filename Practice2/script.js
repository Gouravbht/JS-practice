window.addEventListener("mousemove", function (details) {
  var rect = document.querySelector("rect");
  var gap = 100; // Adjust this value to set the desired gap
  var minX = 100 + rect.getBoundingClientRect().width / 2 + gap;
  var maxX =
    window.innerWidth - (100 + rect.getBoundingClientRect().width / 2) - gap;

  var xval = details.clientX;

  // Ensure xval stays within the bounds
  xval = Math.max(minX, Math.min(maxX, xval));

  gsap.to("#rect", {
    left: xval,
    ease: Power3,
  });
});
