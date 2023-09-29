// Throttling Function
const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};
document.querySelector("#center").addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    var div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";
    var img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg"
    );
    div.appendChild(img);
    document.body.appendChild(div);
    gsap.to(img, {
      y: "0",
      ease: Power1,
      duration: 0.6,
    });
    gsap.to(img, {
      y: "100%",
      delay: 0.6,
      ease: Power2,
    });
    setTimeout(function () {
      div.remove();
    }, 2000);
  }, 400)
);
